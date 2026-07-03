import { useState, useCallback, useRef, useEffect } from "react";
import katex from "katex";
import type { GeneratedProblem } from "../engine/types";
import { createSession, createBridgePairSession, getSessionStats } from "../engine/session";
import { parseLine, validateParsedLine } from "../engine/parser";
import { generateProblem } from "../engine/generator";
import { approxEqual, fmt, parseUserNumber } from "../engine/evaluator";
import { physicsModule } from "../data/physics";
import { physicsVocabMap } from "../data/physics/vocab-map";
import { chemistryVocabMap } from "../data/chemistry/vocab-map";
import { chemistryModule } from "../data/chemistry";
import { triggerHintMap } from "../data/trigger-hints";
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
  const [showHint, setShowHint] = useState(false);
  const [trainingMode, setTrainingMode] = useState<"normal" | "learnCalc" | "bridge">("normal");
  const [previewMode, setPreviewMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const problem = problems[currentIdx] ?? null;

  // Focus input on problem change (only in calc mode, not preview)
  useEffect(() => {
    if (mode === "training" && !previewMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIdx, mode, previewMode]);

  // Start a new session
  const startSession = useCallback(
    (lineCount: number, tMode: "normal" | "learnCalc" | "bridge" = "normal") => {
      setSubject(subject);
      const session = tMode === "bridge"
        ? createBridgePairSession(
            { domains: [], lanes: [], flagsProbability: 0.5 },
            subject,
            Math.floor(lineCount / 2)  // lineCount = total problems; pairs = lineCount/2
          )
        : createSession(
            { domains: [], lanes: [], flagsProbability: 0.5 },
            subject,
            lineCount
          );
      setProblems(session.problems);
      setCurrentIdx(0);
      setUserInput("");
      setFeedback(null);
      setErrors([]);
      setStartTime(Date.now());
      setShowHint(false);
      setTrainingMode(tMode);
      setPreviewMode(tMode === "learnCalc");
      setMode("training");
    },
    [subject]
  );

  // Handle user answer submission
  const handleSubmit = useCallback(() => {
    if (!problem) return;

    // Lane B and C have no numeric answer — just show the equation
    if (problem.concept.lane === "B" || problem.concept.lane === "C") {
      const updated = {
        ...problem,
        userAnswers: [...problem.userAnswers, 1],
        stepCorrect: [...problem.stepCorrect, true],
        currentStep: problem.currentStep + 1,
        completed: true,
      };
      setProblems(prev => prev.map((p, i) => (i === currentIdx ? updated : p)));
      setFeedback({
        correct: true,
        message: `Equation: ${problem.concept.equationLatex || ""}`,
      });
      setUserInput("");
      if (currentIdx + 1 < problems.length) {
        setTimeout(() => {
          setCurrentIdx(prev => prev + 1);
          setFeedback(null);
          setShowHint(false);
        }, 800);
      }
      return;
    }

    const step = problem.concept.steps[problem.currentStep];
    if (!step) return;

    const correctAnswer = problem.stepResults[problem.currentStep];

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
        setShowHint(false);
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
    setShowHint(false);
    setTrainingMode("normal");
    setPreviewMode(false);
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
        <div className="flex-row gap-sm">
          <button
            onClick={() => setSubject(physicsModule)}
            style={{ fontWeight: subject.id === "physics" ? 650 : 400 }}
          >
            Physics ({physicsModule.concepts.length} cards)
          </button>
          <button
            onClick={() => setSubject(chemistryModule)}
            style={{ fontWeight: subject.id === "chemistry" ? 650 : 400 }}
          >
            Chemistry ({chemistryModule.concepts.length} cards)
          </button>
        </div>

        <h2>Quick Start</h2>
        <div className="flex-row gap-sm">
          <button onClick={() => startSession(10)}>10 problems</button>
          <button onClick={() => startSession(20)}>20 problems</button>
          <button onClick={() => startSession(50)}>50 problems</button>
        </div>

        <h2>Learn &amp; Calculate</h2>
        <p>See the formula first, then compute with numbers.</p>
        <div className="flex-row gap-sm">
          <button onClick={() => startSession(3, "learnCalc")} style={{ background: "var(--accent-bg, #e8f0fe)" }}>3 problems</button>
          <button onClick={() => startSession(5, "learnCalc")} style={{ background: "var(--accent-bg, #e8f0fe)" }}>5 problems</button>
          <button onClick={() => startSession(10, "learnCalc")} style={{ background: "var(--accent-bg, #e8f0fe)" }}>10 problems</button>
          <button onClick={() => startSession(20, "learnCalc")} style={{ background: "var(--accent-bg, #e8f0fe)" }}>20 problems</button>
        </div>

        <h2>🔗 Bridge Pairs — Connect Concepts</h2>
        <p>Each pair chains two concepts: the <strong>output</strong> of problem A becomes the <strong>input</strong> of problem B. <em>Neurons that fire together, wire together.</em></p>
        <div className="flex-row gap-sm">
          <button onClick={() => startSession(4, "bridge")} style={{ background: "var(--accent-bg, #fff3cd)" }}>2 pairs (4 probs)</button>
          <button onClick={() => startSession(8, "bridge")} style={{ background: "var(--accent-bg, #fff3cd)" }}>4 pairs (8 probs)</button>
          <button onClick={() => startSession(12, "bridge")} style={{ background: "var(--accent-bg, #fff3cd)" }}>6 pairs (12 probs)</button>
          <button onClick={() => startSession(20, "bridge")} style={{ background: "var(--accent-bg, #fff3cd)" }}>10 pairs (20 probs)</button>
        </div>
        <p style={{ fontSize: "0.82rem", color: "#666" }}>
          Bridged values appear in <code>[brackets]</code>. Active chains: mole bridge (g→mol→particles/gas), stoichiometry core (limiting→yield), thermo core (ΔG→K).
        </p>

        <h2>Custom Line</h2>
        <p>Type a Physcript line for single-problem mode:</p>
        <div className="input-group">
          <input
            type="text"
            value={customLine}
            onChange={e => setCustomLine(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleCustomLine()}
            placeholder="e.g., incline 37 5 0.25 10 ! ~"
          />
          <button onClick={handleCustomLine}>Go</button>
        </div>

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

      </div>
    );
  }

  // ==================== Summary Screen ====================
  if (mode === "summary") {
    const stats = getSessionStats({
      config: { domains: [], lanes: [], flagsProbability: 0.5 },
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
        <dl className="stat-grid">
          <div className="stat-item">
            <dt>Problems</dt>
            <dd>{stats.completedProblems}/{stats.totalProblems}</dd>
          </div>
          <div className="stat-item">
            <dt>Steps Correct</dt>
            <dd>{stats.correctSteps}/{stats.totalSteps}</dd>
          </div>
          <div className="stat-item">
            <dt>Accuracy</dt>
            <dd>{stats.accuracy.toFixed(1)}%</dd>
          </div>
          <div className="stat-item">
            <dt>Time</dt>
            <dd>{stats.elapsedSeconds}s</dd>
          </div>
        </dl>
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
  const stepEq = step?.equationLatex ?? "";

  // Lane B/C display
  const isRecall = problem?.concept.lane === "B" || problem?.concept.lane === "C";

  return (
    <div>
      <div className="header-bar">
        <strong>{subject.name}</strong>
        <span className="badge">[{currentIdx + 1}/{problems.length}]</span>
      </div>

      <hr />

      {/* Toggleable hint — answer dimension/unit only */}
      <div className="flex-row justify-between" style={{ marginBlock: "0.3rem" }}>
        {showHint ? (
          <span className="badge">
            {isRecall
              ? <>Hint: <span dangerouslySetInnerHTML={{ __html: renderKaTeX(problem?.concept.equationLatex ?? problem?.concept.keyword) }} /></>
              : <>Hint: {step?.dimension || ""} {step?.unit ? `(${step.unit})` : ""}</>
            }
          </span>
        ) : (
          <span />
        )}
        <button
          onClick={() => setShowHint(h => !h)}
          style={{ fontSize: "0.75em", padding: "0.15em 0.5em", opacity: 0.5 }}
        >
          {showHint ? "Hide hint" : "Hint?"}
        </button>
      </div>

      {/* Input line — hidden during preview */}
      {!previewMode && <pre>{problem?.inputLine}</pre>}

      {/* Bridge label — shows connection between paired problems */}
      {!previewMode && problem?.bridgeLabel && (
        <p style={{ fontSize: "0.82rem", color: "#856404", background: "#fff3cd", padding: "0.3em 0.6em", borderRadius: "4px", margin: "0.3rem 0" }}>
          🔗 {problem.bridgeLabel}
        </p>
      )}

      {/* Lane B/C: recall mode */}
      {isRecall && (
        <div>
          {feedback ? (
            <div>
              <p>{feedback.correct ? "✓" : "✗"} {feedback.message}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: renderKaTeX(problem?.concept.equationLatex ?? ""),
                }}
              />
              {problem?.completed && <p>✓ Complete — moving to next...</p>}
            </div>
          ) : (
            <button onClick={handleSubmit}>Show Answer</button>
          )}
        </div>
      )}

      {/* Learn & Calculate: Preview all formulas before starting */}
      {previewMode && (
        <div style={{ marginBlock: "1rem" }}>
          <div style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "8px", background: "#f0f4ff", marginBottom: "1rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
              Memorize these {problems.length} formulas — then click Start:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1.5rem", fontSize: "0.9em" }}>
              {problems.map((p, i) => {
                const firstStep = p.concept.steps[0];
                const eq = firstStep?.equationLatex || p.concept.equationLatex || p.concept.displayName;
                const vocabMap = subject.id === "physics" ? physicsVocabMap : chemistryVocabMap;
                const vocabRef = vocabMap[p.concept.keyword];
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0", borderBottom: "1px solid #e0e0e0" }}>
                    <span style={{ fontWeight: 600, minWidth: "1.5em", color: "#666" }}>{i + 1}.</span>
                    <span dangerouslySetInnerHTML={{ __html: renderKaTeX(eq) }} />
                    {vocabRef && (
                      <span style={{ fontSize: "0.7em", color: "#888", marginLeft: "auto", whiteSpace: "nowrap" }}>
                        card{vocabRef.includes(",") ? "s" : ""} {vocabRef}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => {
              setPreviewMode(false);
              setTimeout(() => inputRef.current?.focus(), 150);
            }}
            style={{ fontWeight: 600, fontSize: "1.1em", padding: "0.6em 2em" }}
          >
            Start Calculating (I've memorized them)
          </button>
        </div>
      )}

      {/* Lane A/Bridge: calculation steps */}
      {!previewMode && !isRecall && problem && step && (
        <div>
          {/* Input */}
          {!problem.completed && (
            <div className="input-group">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="answer"
                autoComplete="off"
              />
              <button onClick={handleSubmit}>Enter</button>
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div>
              <p>{feedback.correct ? "✓" : "✗"} {feedback.message}</p>
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
            <button onClick={() => { setCurrentIdx(prev => prev + 1); setFeedback(null); setUserInput(""); setShowHint(false); }}>
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
                setShowHint(false);
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
