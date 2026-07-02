import type { ConceptDef, GeneratedProblem, Flags } from "./types";
import { evaluateFormula } from "./evaluator";

/**
 * Pick a random value from a pool.
 */
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Pick a random integer between min and max (inclusive).
 */
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a problem from a concept definition and parsed values.
 *
 * - For single-step (has ?): replace ? with random value, compute target.
 * - For multi-step (no ?): use all given values (or generate if not provided).
 */
export function generateProblem(
  concept: ConceptDef,
  positionalValues: (number | null | undefined)[],
  targetIndex: number,
  flags: Flags,
  inputLine: string
): GeneratedProblem {
  const paramValues: number[] = [];
  const stepResults: number[] = [];

  // Fill in param values
  for (let i = 0; i < concept.params.length; i++) {
    if (positionalValues[i] !== null && positionalValues[i] !== undefined) {
      paramValues.push(positionalValues[i]!);
    } else if (i === targetIndex) {
      // This is the target — use a placeholder, will be computed from steps
      paramValues.push(0);
    } else {
      // Generate random from pool
      const pool = concept.params[i].values;
      paramValues.push(pool.length > 0 ? pick(pool) : randInt(1, 10));
    }
  }

  // Compute step results
  for (const step of concept.steps) {
    stepResults.push(evaluateFormula(step.formula, paramValues));
  }

  // If single-step with target, set the target value
  if (targetIndex >= 0) {
    // The target value is the result of the last step (single-step concepts have 1 step)
    paramValues[targetIndex] = stepResults[stepResults.length - 1];
  }

  return {
    concept,
    inputLine,
    paramValues,
    targetIndex,
    flags,
    stepResults,
    currentStep: 0,
    completed: false,
    userAnswers: new Array(concept.steps.length).fill(null),
    stepCorrect: new Array(concept.steps.length).fill(null),
  };
}

/**
 * Generate random flags with given probability.
 */
export function generateFlags(prob: number): Flags {
  if (Math.random() > prob) {
    return { unitCheck: false, unitAll: false, dimCheck: false, dimAll: false };
  }
  const roll = Math.random();
  if (roll < 0.33) return { unitCheck: true, unitAll: false, dimCheck: false, dimAll: false };
  if (roll < 0.5) return { unitCheck: false, unitAll: false, dimCheck: true, dimAll: false };
  if (roll < 0.7) return { unitCheck: true, unitAll: false, dimCheck: true, dimAll: false };
  if (roll < 0.85) return { unitCheck: true, unitAll: true, dimCheck: false, dimAll: false };
  return { unitCheck: true, unitAll: true, dimCheck: true, dimAll: true };
}
