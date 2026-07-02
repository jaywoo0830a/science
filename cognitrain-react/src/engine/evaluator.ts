/**
 * Numeric expression evaluator.
 *
 * Formula strings use n0, n1, n2, ... for positional param values.
 * Supports basic math: + - * / ** Math.sin Math.cos Math.sqrt Math.log10 Math.abs Math.PI Math.exp Math.tan
 */

type FormulaContext = Record<string, number>;

export function evaluateFormula(formula: string, paramValues: number[]): number {
  // Build context: n0, n1, n2, ...
  const ctx: FormulaContext = {};
  for (let i = 0; i < paramValues.length; i++) {
    ctx[`n${i}`] = paramValues[i];
  }

  // Wrap in a function for safe evaluation
  const keys = Object.keys(ctx);
  const values = Object.values(ctx);

  // Whitelist allowed globals
  const sandbox = {
    Math: Math,
    PI: Math.PI,
  };

  try {
    const fn = new Function(
      ...keys,
      "Math",
      `"use strict"; return (${formula});`
    );
    return fn(...values, sandbox.Math);
  } catch (e) {
    throw new Error(`Formula evaluation error: "${formula}" — ${e}`);
  }
}

/**
 * Check if two numbers are approximately equal.
 */
export function approxEqual(a: number, b: number, tolerance = 0.01): boolean {
  if (a === 0 && b === 0) return true;
  const relError = Math.abs(a - b) / Math.max(Math.abs(a), Math.abs(b), 1e-10);
  return relError < tolerance;
}

/**
 * Round to a reasonable number of decimal places.
 */
export function fmt(n: number, decimals = 3): string {
  // Round to specified decimals
  const factor = Math.pow(10, decimals);
  const rounded = Math.round(n * factor) / factor;
  // Remove trailing zeros
  return String(rounded);
}

/**
 * Parse a number from user input.
 */
export function parseUserNumber(input: string): number | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  // Support scientific notation
  const num = parseFloat(trimmed);
  if (isNaN(num)) return null;
  return num;
}
