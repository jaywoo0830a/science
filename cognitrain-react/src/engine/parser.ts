import type { ConceptDef, Flags } from "./types";

/**
 * Parse a Physcript line like:
 *   "incline 37 5 0.25 10 ! ~"
 *   "force 5 3 ? !"
 *   "rest !"
 *   "force_dim"
 *   "hit_spring 0.01 300 2 500 ! ~"
 *
 * Returns { keyword, positionalValues, targetIndex, flags }
 */
export interface ParsedLine {
  keyword: string;
  positionalValues: (number | null)[];  // null = `?`
  targetIndex: number;                   // -1 if no `?`
  flags: Flags;
  rawLine: string;
}

export function parseLine(raw: string): ParsedLine | { error: string } {
  const trimmed = raw.trim();
  if (!trimmed) return { error: "empty line" };

  const tokens = trimmed.split(/\s+/);
  let cursor = 0;

  // First token is the keyword
  const keyword = tokens[cursor++];
  if (!keyword) return { error: "missing keyword" };

  // Parse positional values and flags
  const positionalValues: (number | null)[] = [];
  let targetIndex = -1;
  const flags: Flags = {
    unitCheck: false,
    unitAll: false,
    dimCheck: false,
    dimAll: false,
  };

  // Collect all flag tokens
  const flagTokens: string[] = [];

  while (cursor < tokens.length) {
    const token = tokens[cursor];

    // Check if it's a flag
    if (token === "!" || token === "!!" || token === "~" || token === "~~" || token === "!~" || token === "!!~~") {
      flagTokens.push(token);
      cursor++;
      continue;
    }

    // Check if it's `?` (target marker)
    if (token === "?") {
      targetIndex = positionalValues.length;
      positionalValues.push(null);
      cursor++;
      continue;
    }

    // Try to parse as number
    const num = parseFloat(token);
    if (!isNaN(num)) {
      positionalValues.push(num);
      cursor++;
      continue;
    }

    // Unknown token
    return { error: `unknown token: "${token}"` };
  }

  // Process flag tokens
  for (const ft of flagTokens) {
    switch (ft) {
      case "!":
        flags.unitCheck = true;
        break;
      case "!!":
        flags.unitCheck = true;
        flags.unitAll = true;
        break;
      case "~":
        flags.dimCheck = true;
        break;
      case "~~":
        flags.dimCheck = true;
        flags.dimAll = true;
        break;
      case "!~":
        flags.unitCheck = true;
        flags.dimCheck = true;
        break;
      case "!!~~":
        flags.unitCheck = true;
        flags.unitAll = true;
        flags.dimCheck = true;
        flags.dimAll = true;
        break;
    }
  }

  return { keyword, positionalValues, targetIndex, flags, rawLine: trimmed };
}

/**
 * Validate that the parsed line matches the concept definition.
 */
export function validateParsedLine(
  parsed: ParsedLine,
  concept: ConceptDef
): { valid: true } | { error: string } {
  const { keyword, positionalValues, targetIndex } = parsed;

  if (keyword !== concept.keyword) {
    return { error: `keyword mismatch: expected "${concept.keyword}", got "${keyword}"` };
  }

  const paramCount = concept.params.length;

  // Lane B and C: no positional values expected
  if (concept.lane === "B" || concept.lane === "C") {
    if (positionalValues.length > 0) {
      return { error: `"${keyword}" does not accept positional values` };
    }
    return { valid: true };
  }

  // Lane A and Bridge: check positional count
  // For single-step with ?, the ? counts as one positional
  if (targetIndex >= 0) {
    // Single-step mode: all params must be filled except target
    if (positionalValues.length !== paramCount) {
      return {
        error: `"${keyword}" expects ${paramCount} positional values (including ?), got ${positionalValues.length}`,
      };
    }
    // Count non-null values
    const givenCount = positionalValues.filter(v => v !== null).length;
    const expectedGiven = paramCount - 1;
    if (givenCount !== expectedGiven) {
      return { error: `too many ? placeholders` };
    }
    // Verify target param can be targeted
    if (concept.params[targetIndex] && concept.params[targetIndex].canBeTarget === false) {
      return { error: `parameter at position ${targetIndex + 1} cannot be the target` };
    }
  } else {
    // Multi-step chain: all params must be given
    if (positionalValues.length !== paramCount) {
      return {
        error: `"${keyword}" expects ${paramCount} positional values, got ${positionalValues.length}`,
      };
    }
  }

  return { valid: true };
}
