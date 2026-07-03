import type { ConceptDef, GeneratedProblem, SessionConfig, SessionState, SubjectModule } from "./types";
import { generateProblem, generateFlags } from "./generator";

/** Pick a random element from an array */
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
          .map((p, i) => (p.canBeTarget === true ? i : -1))
          .filter(i => i >= 0);
        const ti = targetableParams[Math.floor(Math.random() * targetableParams.length)];

        const positionalValues: (number | null | undefined)[] = concept.params.map((_, i) =>
          i === ti ? null : undefined
        );
        const flags = generateFlags(config.flagsProbability);

        problem = generateProblem(concept, positionalValues, ti, flags, concept.keyword);
      } else {
        // Multi-step chain — generate all values
        const positionalValues: (number | null | undefined)[] = concept.params.map(() => undefined);
        const flags = generateFlags(config.flagsProbability);
        problem = generateProblem(concept, positionalValues, -1, flags, concept.keyword);
      }
    } else {
      // Fallback
      const positionalValues: (number | null | undefined)[] = concept.params.map(() => undefined);
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
 * Create a BRIDGE PAIR session — problems are chained so that
 * the output of problem A becomes the input to problem B.
 * 
 * This directly addresses the "neurons firing separately" problem
 * by forcing conceptual connections through shared variables.
 */
export function createBridgePairSession(
  config: SessionConfig,
  module: SubjectModule,
  pairCount: number
): SessionState {
  // Find concepts that have feeds_into connections
  const sources = module.concepts.filter(c =>
    (c.connections ?? []).some(e => e.relation === "feeds_into")
  );

  if (sources.length === 0) {
    // Fallback: no connected concepts → random session
    return createSession(config, module, pairCount * 2);
  }

  const problems: GeneratedProblem[] = [];

  for (let i = 0; i < pairCount; i++) {
    // Pick a random source concept that has feeds_into connections
    const source = pick(sources);
    const edges = (source.connections ?? []).filter(e => e.relation === "feeds_into");
    const edge = pick(edges);

    // Find the target concept
    const target = module.concepts.find(c => c.keyword === edge.targetKeyword);
    if (!target) continue;

    // ---- Generate Source Problem (A) ----
    const useTarget = source.steps.length === 1 && Math.random() > 0.3;
    let sourceProblem: GeneratedProblem;

    if (useTarget && source.params.length >= 2) {
      const targetableParams = source.params
        .map((p, idx) => (p.canBeTarget === true ? idx : -1))
        .filter(idx => idx >= 0);
      const ti = targetableParams[Math.floor(Math.random() * targetableParams.length)];
      const pvals: (number | null | undefined)[] = source.params.map((_, idx) =>
        idx === ti ? null : undefined
      );
      const flags = generateFlags(config.flagsProbability);
      sourceProblem = generateProblem(source, pvals, ti, flags, source.keyword);
    } else {
      const pvals: (number | null | undefined)[] = source.params.map(() => undefined);
      const flags = generateFlags(config.flagsProbability);
      sourceProblem = generateProblem(source, pvals, -1, flags, source.keyword);
    }

    // Format source inputLine
    if (sourceProblem.targetIndex >= 0) {
      const parts: string[] = [source.keyword];
      for (let j = 0; j < source.params.length; j++) {
        parts.push(j === sourceProblem.targetIndex ? "?" : String(sourceProblem.paramValues[j]));
      }
      sourceProblem.inputLine = parts.join(" ");
    } else {
      sourceProblem.inputLine = [source.keyword, ...sourceProblem.paramValues.map(String)].join(" ");
    }
    sourceProblem.bridgeLabel = `Bridge: ${edge.bridgeVariable || "output"} → next problem`;
    problems.push(sourceProblem);

    // ---- Generate Target Problem (B) ----
    // Inject source's output into target's bridge parameter
    const bridgeValue = sourceProblem.stepResults[sourceProblem.stepResults.length - 1];
    const bridgeIdx = edge.bridgeParamIndex ?? 0;

    const tPvals: (number | null | undefined)[] = target.params.map((_, idx) =>
      idx === bridgeIdx ? bridgeValue : undefined
    );

    let targetProblem: GeneratedProblem;
    if (target.steps.length === 1 && target.params.length >= 2) {
      // Single-step: pick a different param as ?
      const targetableParams = target.params
        .map((p, idx) => (p.canBeTarget === true && idx !== bridgeIdx ? idx : -1))
        .filter(idx => idx >= 0);
      const tti = targetableParams.length > 0
        ? targetableParams[Math.floor(Math.random() * targetableParams.length)]
        : -1;
      // Mark the target
      const tPvalsWithTarget = tPvals.map((v, idx) =>
        idx === tti ? null : v
      );
      const flags = generateFlags(config.flagsProbability);
      targetProblem = generateProblem(target, tPvalsWithTarget, tti, flags, target.keyword);
    } else {
      const flags = generateFlags(config.flagsProbability);
      targetProblem = generateProblem(target, tPvals, -1, flags, target.keyword);
    }

    // Format target inputLine — highlight the bridged value
    if (targetProblem.targetIndex >= 0) {
      const parts: string[] = [target.keyword];
      for (let j = 0; j < target.params.length; j++) {
        if (j === targetProblem.targetIndex) {
          parts.push("?");
        } else if (j === bridgeIdx) {
          parts.push(`[${fmtNum(bridgeValue)}]`);  // bracket = bridged from previous
        } else {
          parts.push(String(targetProblem.paramValues[j]));
        }
      }
      targetProblem.inputLine = parts.join(" ");
    } else {
      const parts: string[] = [target.keyword];
      for (let j = 0; j < target.params.length; j++) {
        if (j === bridgeIdx) {
          parts.push(`[${fmtNum(bridgeValue)}]`);
        } else {
          parts.push(String(targetProblem.paramValues[j]));
        }
      }
      targetProblem.inputLine = parts.join(" ");
    }
    targetProblem.bridgeLabel = `← fed by: ${source.displayName} (${edge.bridgeVariable || "output"})`;
    problems.push(targetProblem);
  }

  return {
    config,
    problems,
    currentIndex: 0,
    startTime: Date.now(),
    errors: [],
  };
}

/** Format a number to 3 significant figures for display */
function fmtNum(n: number): string {
  if (Number.isInteger(n)) return String(n);
  if (Math.abs(n) < 0.001 || Math.abs(n) >= 1e6) return n.toExponential(3);
  return parseFloat(n.toPrecision(3)).toString();
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
