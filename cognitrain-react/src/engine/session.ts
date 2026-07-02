import type { ConceptDef, GeneratedProblem, SessionConfig, SessionState, SubjectModule } from "./types";
import { generateProblem, generateFlags } from "./generator";

/**
 * Create a session by randomly selecting concepts and generating problems.
 */
export function createSession(
  config: SessionConfig,
  module: SubjectModule,
  lineCount: number
): SessionState {
  // Filter concepts by domain and lane
  let pool = module.concepts.filter(c => {
    if (config.domains.length > 0 && !config.domains.includes(c.domain)) return false;
    if (config.lanes.length > 0 && !config.lanes.includes(c.lane)) return false;
    return true;
  });

  if (pool.length === 0) {
    // Fallback: use all concepts
    pool = [...module.concepts];
  }

  const problems: GeneratedProblem[] = [];

  for (let i = 0; i < lineCount; i++) {
    const concept = pool[Math.floor(Math.random() * pool.length)];

    // Generate a problem
    let problem: GeneratedProblem;

    if (concept.lane === "B" || concept.lane === "C") {
      // Lane B/C: no calculation, just recall
      const flags = generateFlags(config.flagsProbability);
      problem = {
        concept,
        inputLine: concept.keyword,
        paramValues: [],
        targetIndex: -1,
        flags,
        stepResults: [],
        currentStep: 0,
        completed: false,
        userAnswers: [],
        stepCorrect: [],
      };
    } else if (concept.lane === "A" || concept.lane === "bridge") {
      // Lane A/Bridge: random calculation
      const useTarget = concept.steps.length === 1 && Math.random() > 0.3;

      if (useTarget && concept.params.length >= 2) {
        // Single-step with `?` — pick a random target param
        const targetableParams = concept.params
          .map((p, i) => (p.canBeTarget !== false ? i : -1))
          .filter(i => i >= 0);
        const ti = targetableParams[Math.floor(Math.random() * targetableParams.length)];

        const positionalValues: (number | null)[] = concept.params.map((_, i) =>
          i === ti ? null : 0
        );
        const flags = generateFlags(config.flagsProbability);

        problem = generateProblem(concept, positionalValues, ti, flags, concept.keyword);
      } else {
        // Multi-step chain — generate all values
        const positionalValues: (number | null)[] = concept.params.map(() => 0);
        const flags = generateFlags(config.flagsProbability);
        problem = generateProblem(concept, positionalValues, -1, flags, concept.keyword);
      }
    } else {
      // Fallback
      const positionalValues: (number | null)[] = concept.params.map(() => 0);
      const flags = generateFlags(config.flagsProbability);
      problem = generateProblem(concept, positionalValues, -1, flags, concept.keyword);
    }

    // Update inputLine with actual values
    if (problem.targetIndex >= 0) {
      // Single-step: show the ? in the right position
      const parts: string[] = [concept.keyword];
      for (let j = 0; j < concept.params.length; j++) {
        if (j === problem.targetIndex) {
          parts.push("?");
        } else {
          parts.push(String(problem.paramValues[j]));
        }
      }
      problem.inputLine = parts.join(" ");
    } else {
      // Multi-step: show all values
      const parts: string[] = [concept.keyword, ...problem.paramValues.map(String)];
      problem.inputLine = parts.join(" ");
    }

    problems.push(problem);
  }

  return {
    config,
    problems,
    currentIndex: 0,
    startTime: Date.now(),
    errors: [],
  };
}

/**
 * Get the current problem in the session.
 */
export function currentProblem(session: SessionState): GeneratedProblem | null {
  if (session.currentIndex >= session.problems.length) return null;
  return session.problems[session.currentIndex];
}

/**
 * Advance to the next problem.
 */
export function advanceSession(session: SessionState): SessionState {
  return { ...session, currentIndex: session.currentIndex + 1 };
}

/**
 * Check if session is complete.
 */
export function isSessionComplete(session: SessionState): boolean {
  return session.currentIndex >= session.problems.length;
}

/**
 * Get session stats.
 */
export function getSessionStats(session: SessionState) {
  const completed = session.problems.filter(p => p.completed);
  const totalSteps = completed.reduce((sum, p) => sum + p.stepCorrect.length, 0);
  const correctSteps = completed.reduce(
    (sum, p) => sum + p.stepCorrect.filter(c => c === true).length,
    0
  );
  const elapsed = Date.now() - session.startTime;

  return {
    totalProblems: session.problems.length,
    completedProblems: completed.length,
    totalSteps,
    correctSteps,
    accuracy: totalSteps > 0 ? (correctSteps / totalSteps) * 100 : 0,
    elapsedSeconds: Math.round(elapsed / 1000),
    errors: session.errors,
  };
}
