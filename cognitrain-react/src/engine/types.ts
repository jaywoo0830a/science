// ============================================================
// Core Types — subject-agnostic, extensible for Physics + Chemistry
// ============================================================

/** Training lane — determines the interaction pattern */
export type Lane = "A" | "B" | "C" | "bridge" | "proportional" | "threshold" | "sign" | "comparison";

/** Domain within a subject (e.g. "mechanics", "stoichiometry") */
export type Domain = string;

// ---- Flag System ----

export interface Flags {
  unitCheck: boolean;       // !  — check units on final answer
  unitAll: boolean;         // !! — check units on every step
  dimCheck: boolean;        // ~  — check dimension on final answer (physics) or sig-figs (chemistry)
  dimAll: boolean;          // ~~ — check on every step
}

// ---- Parameter Definition ----

export interface ParamDef {
  name: string;
  unit: string;
  /** Pool of allowed values */
  values: number[];
  /** If true, this parameter can be the `?` target */
  canBeTarget?: boolean;
}

// ---- Calculation Step ----

export interface CalcStep {
  label: string;
  /** JavaScript expression. Variables: n0, n1, n2, ... */
  formula: string;
  unit: string;
  dimension: string;
  equationLatex?: string;
}

// ---- Concept Definition (a single "card") ----

export interface ConceptDef {
  keyword: string;
  displayName: string;
  subject: "physics" | "chemistry";
  domain: Domain;
  /** Training lane */
  lane: Lane;
  /** Positional parameter definitions (in order) */
  params: ParamDef[];
  /** Calculation steps (for Lane A and Bridge) */
  steps: CalcStep[];
  // ---- Lane B specific ----
  /** Trigger phrases that map to this equation */
  triggers?: string[];
  /** KaTeX equation string */
  equationLatex?: string;
  // ---- Bridge specific ----
  /** If this is a bridge, which step index is the bridge point */
  bridgeAfterStep?: number;
  /** The bridge variable name */
  bridgeVariable?: string;
  // ---- Extended lane properties (reserved for future) ----
  proportionalParam?: number;
  proportionalRelation?: string;
  thresholdQuestion?: string;
  thresholdYes?: string;
  thresholdNo?: string;
}

// ---- Runtime Problem State ----

export interface GeneratedProblem {
  concept: ConceptDef;
  /** The parsed input line (for display) */
  inputLine: string;
  /** The randomly chosen values for each positional param */
  paramValues: number[];
  /** Which param index is `?` (-1 if multi-step chain) */
  targetIndex: number;
  /** Flags */
  flags: Flags;
  /** Pre-computed results for each step */
  stepResults: number[];
  /** Current step the user is on (0-indexed) */
  currentStep: number;
  /** Whether the problem is complete */
  completed: boolean;
  /** User's answers so far */
  userAnswers: (number | null)[];
  /** Correct/incorrect per step */
  stepCorrect: (boolean | null)[];
}

// ---- Session ----

export interface SessionConfig {
  domains: Domain[];         // empty = all
  lanes: Lane[];             // empty = all
  flagsProbability: number;  // 0-1, chance of adding unit/dim flags
}

export interface SessionState {
  config: SessionConfig;
  problems: GeneratedProblem[];
  currentIndex: number;
  startTime: number;
  errors: { keyword: string; step: number; userAnswer: number; correctAnswer: number }[];
}

// ---- Subject Module Interface ----

export interface SubjectModule {
  id: "physics" | "chemistry";
  name: string;
  concepts: ConceptDef[];
}
