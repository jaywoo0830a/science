import { useState, useCallback, useRef, useEffect } from "react";
import katex from "katex";
import type { GeneratedProblem, Flags } from "../engine/types";
import { createSession, currentProblem, advanceSession, isSessionComplete, getSessionStats } from "../engine/session";
import { parseLine, validateParsedLine } from "../engine/parser";
import { generateProblem } from "../engine/generator";
import { approxEqual, fmt, parseUserNumber } from "../engine/evaluator";
import { physicsModule } from "../data/physics";
import { chemistryModule } from "../data/chemistry";
import type { SubjectModule } from "../engine/types";

// ============================================================
// KaTeX helper
// ============================================================
function renderKaTeX(latex: string): string {
  try {
    return katex.renderToString(latex, { throwOnError: false, displayMode: false });
  } catch {
    return latex;
  }
}

// ============================================================
// App
// ============================================================
export default function App() {
  const [mode, setMode] = useState<"menu" | "training" | "summary">("menu");
  const [subject, setSubject] = useState<SubjectModule>(physicsModule);
  const [problems, setProblems] = useState<GeneratedProblem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);
  const [errors, setErrors] = useState<{ keyword: string; step: number; userAnswer: number; correctAnswer: number }[]>([]);
  const [startTime, setStartTime] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const problem = problems[currentIdx] ?? null;

  // Focus input on problem change
  useEffect(() => {
    if (mode === "training" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIdx, mode]);

  // Start a new session
  const startSession = useCallback(
    (lineCount: number) => {
      setSubject(subject);
      const session = createSession(
        { subject: subject.id, domains: [], lanes: [], problemCount: lineCount, flagsProbability: 0.5 },
        subject
      );
      setProblems(session.problems);
      setCurrentIdx(0);
      setUserInput("");
      setFeedback(null);
      setErrors([]);
      setStartTime(Date.now());
      setMode("training");
    },
    [subject]
  );

  // Handle user answer submission
  const handleSubmit = useCallback(() => {
    if (!problem) return;

    const step = problem.concept.steps[problem.currentStep];
    if (!step) return;

    const correctAnswer = problem.stepResults[problem.currentStep];

    // Lane B and C have no numeric answer — just show the equation
    if (problem.concept.lane === "B" || problem.concept.lane === "C") {
      const isCorrect = userInput.trim().toLowerCase() === "ok";
      const newAnswers = [...problem.userAnswers];
      newAnswers[problem.currentStep] = 1;
      const newCorrect = [...problem.stepCorrect];
      newCorrect[problem.currentStep] = true;
      const updated = {
        ...problem,
        userAnswers: newAnswers,
        stepCorrect: newCorrect,
        currentStep: problem.currentStep + 1,
        completed: problem.currentStep + 1 >= problem.concept.steps.length,
      };
      setProblems(prev => prev.map((p, i) => (i === currentIdx ? updated : p)));
      setFeedback({
        correct: true,
        message: `Equation: ${step.equationLatex || problem.concept.equationLatex || ""}`,
      });
      setUserInput("");
      if (updated.completed && currentIdx + 1 < problems.length) {
        setTimeout(() => {
          setCurrentIdx(prev => prev + 1);
          setFeedback(null);
        }, 800);
      }
      return;
    }

    // Lane A/Bridge: numeric answer
    const userNum = parseUserNumber(userInput);
    if (userNum === null) {
      setFeedback({ correct: false, message: "Enter a number" });
      return;
    }

    const isCorrect = approxEqual(userNum, correctAnswer, 0.015);

    const newAnswers = [...problem.userAnswers];
    newAnswers[problem.currentStep] = userNum;
    const newCorrect = [...problem.stepCorrect];
    newCorrect[problem.currentStep] = isCorrect;

    if (!isCorrect) {
      setErrors(prev => [
        ...prev,
        { keyword: problem.concept.keyword, step: problem.currentStep, userAnswer: userNum, correctAnswer },
      ]);
    }

    const nextStep = problem.currentStep + 1;
    const completed = nextStep >= problem.concept.steps.length;
    const updated: GeneratedProblem = {
      ...problem,
      userAnswers: newAnswers,
      stepCorrect: newCorrect,
      currentStep: nextStep,
      completed,
    };

    setProblems(prev => prev.map((p, i) => (i === currentIdx ? updated : p)));
    setFeedback({
      correct: isCorrect,
      message: isCorrect
        ? `✓ ${fmt(correctAnswer)} ${step.unit}`
        : `✗ You: ${fmt(userNum)} | Correct: ${fmt(correctAnswer)} ${step.unit}`,
    });
    setUserInput("");

    if (completed && currentIdx + 1 < problems.length) {
      setTimeout(() => {
        setCurrentIdx(prev => prev + 1);
        setFeedback(null);
      }, 1200);
    } else if (completed && currentIdx + 1 >= problems.length) {
      setTimeout(() => setMode("summary"), 1500);
    } else {
      setTimeout(() => {
        setFeedback(null);
        if (inputRef.current) inputRef.current.focus();
      }, 600);
    }
  }, [problem, userInput, currentIdx, problems.length]);

  // Handle custom input (Physcript line)
  const [customLine, setCustomLine] = useState("");

  const handleCustomLine = useCallback(() => {
    const parsed = parseLine(customLine);
    if ("error" in parsed) {
      setFeedback({ correct: false, message: `Parse error: ${parsed.error}` });
      return;
    }

    const concept = subject.concepts.find(c => c.keyword === parsed.keyword);
    if (!concept) {
      setFeedback({ correct: false, message: `Unknown concept: "${parsed.keyword}"` });
      return;
    }

    const validation = validateParsedLine(parsed, concept);
    if ("error" in validation) {
      setFeedback({ correct: false, message: validation.error });
      return;
    }

    const problem = generateProblem(concept, parsed.positionalValues, parsed.targetIndex, parsed.flags, customLine);
    setProblems([problem]);
    setCurrentIdx(0);
    setUserInput("");
    setFeedback(null);
    setErrors([]);
    setStartTime(Date.now());
    setMode("training");
  }, [customLine, subject]);

  // ==================== Menu Screen ====================
  if (mode === "menu") {
    return (
      <div>
        <h1>Physcript — Calculation Retrieval Trainer</h1>
        <p>"If you can calculate it, you have understood it."</p>

        <hr />

        <h2>Subject</h2>
        <div>
          <button
            onClick={() => setSubject(physicsModule)}
            style={{ fontWeight: subject.id === "physics" ? "bold" : "normal" }}
          >
            Physics ({physicsModule.concepts.length} cards)
          </button>{" "}
          <button
            onClick={() => setSubject(chemistryModule)}
            style={{ fontWeight: subject.id === "chemistry" ? "bold" : "normal" }}
          >
            Chemistry ({chemistryModule.concepts.length} cards)
          </button>
        </div>

        <h2>Quick Start</h2>
        <div>
          <button onClick={() => startSession(10)}>10 problems</button>{" "}
          <button onClick={() => startSession(20)}>20 problems</button>{" "}
          <button onClick={() => startSession(50)}>50 problems</button>
        </div>

        <h2>Custom Line</h2>
        <p>Type a Physcript line for single-problem mode:</p>
        <p>
          <input
            type="text"
            value={customLine}
            onChange={e => setCustomLine(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleCustomLine()}
            placeholder="e.g., incline 37 5 0.25 10 ! ~"
            size={50}
          />
          {" "}
          <button onClick={handleCustomLine}>Go</button>
        </p>

        <hr />

        <h3>Quick Reference</h3>
        <pre>{`# Single calc (target with ?)
force 5 3 ? !

# Multi-step chain
incline 37 5 0.25 10 ! ~
collision 4 6 2 0 ! ~
freefall 45 10 ! ~

# Bridge
hit_spring 0.01 300 2 500 ! ~

# Flash recall (Lane B)
rest !
frictionless !

# Constants / Dimensions (Lane C)
planck !
force_dim

# Flags: ! (unit)  ~ (dim)  !! (unit-all)  ~~ (dim-all)`}</pre>
        <p>Available concepts: {subject.concepts.map(c => c.keyword).join(", ")}</p>
      </div>
    );
  }

  // ==================== Summary Screen ====================
  if (mode === "summary") {
    const stats = getSessionStats({
      config: { subject: subject.id, domains: [], lanes: [], problemCount: problems.length, flagsProbability: 0.5 },
      problems,
      currentIndex: currentIdx,
      startTime,
      errors,
    });

    return (
      <div>
        <h1>Session Complete</h1>
        <p>{subject.name} — {stats.elapsedSeconds}s</p>
        <hr />
        <p>Problems: {stats.completedProblems}/{stats.totalProblems}</p>
        <p>Steps correct: {stats.correctSteps}/{stats.totalSteps}</p>
        <p>Accuracy: {stats.accuracy.toFixed(1)}%</p>
        <hr />
        {stats.errors.length > 0 && (
          <>
            <h3>Errors ({stats.errors.length})</h3>
            <ul>
              {stats.errors.map((e, i) => (
                <li key={i}>
                  <strong>{e.keyword}</strong> step {e.step + 1}: you answered {fmt(e.userAnswer)}, correct was {fmt(e.correctAnswer)}
                </li>
              ))}
            </ul>
          </>
        )}
        <hr />
        <button onClick={() => setMode("menu")}>Back to Menu</button>
      </div>
    );
  }

  // ==================== Training Screen ====================
  const step = problem?.concept.steps[problem?.currentStep ?? 0];
  const stepLabel = step?.label ?? "";
  const stepUnit = step?.unit ?? "";
  const stepEq = step?.equationLatex ?? "";

  // Lane B/C display
  const isRecall = problem?.concept.lane === "B" || problem?.concept.lane === "C";

  return (
    <div>
      <p>
        <strong>{subject.name}</strong> · {problem?.concept.domain} · {problem?.concept.displayName} ·{" "}
        [{currentIdx + 1}/{problems.length}]
      </p>

      <hr />

      {/* Input line */}
      <pre style={{ fontSize: "16px", margin: "8px 0" }}>{problem?.inputLine}</pre>

      {/* Lane B/C: show trigger and ask for equation */}
      {isRecall && (
        <div>
          <p>
            Trigger: <strong>{problem?.concept.triggers?.[0] ?? problem?.concept.keyword}</strong>
          </p>
          <p>Recall the equation/value:</p>
          {feedback ? (
            <div>
              <p style={{ color: feedback.correct ? "green" : "red" }}>{feedback.message}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: renderKaTeX(problem?.concept.equationLatex ?? ""),
                }}
              />
              {problem?.completed ? (
                <p>✓ Complete — moving to next...</p>
              ) : (
                <button
                  onClick={() => {
                    setUserInput("ok");
                    // Trigger submit via the input
                    setTimeout(() => {
                      const newAnswers = [...problem.userAnswers];
                      newAnswers[problem.currentStep] = 1;
                      const newCorrect = [...problem.stepCorrect];
                      newCorrect[problem.currentStep] = true;
                      const updated = {
                        ...problem,
                        userAnswers: newAnswers,
                        stepCorrect: newCorrect,
                        currentStep: problem.currentStep + 1,
                        completed: problem.currentStep + 1 >= problem.concept.steps.length,
                      };
                      setProblems(prev => prev.map((p, i) => (i === currentIdx ? updated : p)));
                      setFeedback(null);
                      setUserInput("");
                      if (updated.completed) {
                        if (currentIdx + 1 < problems.length) {
                          setCurrentIdx(prev => prev + 1);
                        } else {
                          setMode("summary");
                        }
                      }
                    }, 800);
                  }}
                >
                  OK — Show Answer
                </button>
              )}
            </div>
          ) : (
            <button onClick={handleSubmit}>Show Answer</button>
          )}
        </div>
      )}

      {/* Lane A/Bridge: calculation steps */}
      {!isRecall && problem && step && (
        <div>
          <p>
            Step {problem.currentStep + 1}/{problem.concept.steps.length}: <strong>{stepLabel}</strong>
          </p>

          {/* Known values (context) */}
          {problem.currentStep === 0 && problem.targetIndex < 0 && (
            <p>
              Given: {problem.concept.params.map((p, i) => `${p.name}=${fmt(problem.paramValues[i])} ${p.unit}`).join(", ")}
            </p>
          )}

          {/* Input */}
          {!problem.completed && (
            <div>
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder={`${stepLabel} (${stepUnit})`}
                size={20}
                autoComplete="off"
              />
              {" "}
              <button onClick={handleSubmit}>Enter</button>
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div>
              <p style={{ color: feedback.correct ? "green" : "red" }}>
                {feedback.message}
              </p>
              {!feedback.correct && stepEq && (
                <p dangerouslySetInnerHTML={{ __html: renderKaTeX(stepEq) }} />
              )}
            </div>
          )}

          {/* Unit/dimension check prompts */}
          {problem.completed && problem.flags.unitCheck && (
            <p>
              [!] Unit check: {step.unit} → verify SI: {step.dimension ? step.dimension : "—"}
            </p>
          )}
          {problem.completed && problem.flags.dimCheck && step.dimension && (
            <p>
              [~] Dimension: {step.dimension}
            </p>
          )}

          {/* Bridge indicator */}
          {problem.concept.lane === "bridge" &&
            problem.concept.bridgeAfterStep !== undefined &&
            problem.currentStep === problem.concept.bridgeAfterStep && (
              <p>
                <strong>── Bridge: {problem.concept.bridgeVariable} ──</strong>
              </p>
            )}
        </div>
      )}

      {/* Progress */}
      {problem?.completed && (
        <div>
          <hr />
          <p>
            ✓ Problem complete —{" "}
            {problem.stepCorrect.filter(c => c === true).length}/{problem.stepCorrect.length} steps correct
          </p>
          {currentIdx + 1 < problems.length && (
            <button onClick={() => { setCurrentIdx(prev => prev + 1); setFeedback(null); setUserInput(""); }}>
              Next Problem
            </button>
          )}
        </div>
      )}

      {/* Skip button */}
      {!problem?.completed && (
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={() => {
              if (currentIdx + 1 < problems.length) {
                setCurrentIdx(prev => prev + 1);
                setFeedback(null);
                setUserInput("");
              } else {
                setMode("summary");
              }
            }}
          >
            Skip →
          </button>
        </div>
      )}
    </div>
  );
}
