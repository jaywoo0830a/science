// ============================================================
// Core Types — subject-agnostic, extensible for Physics + Chemistry
// ============================================================

/** Training lane — determines the interaction pattern */
export type Lane = "A" | "B" | "C" | "bridge";

/** Domain within a subject (e.g. "mechanics", "stoichiometry") */
export type Domain = string;

// ---- Flag System ----

export interface Flags {
  unitCheck: boolean;       // !  — check units on final answer
  unitAll: boolean;         // !! — check units on every step
  dimCheck: boolean;        // ~  — check dimension on final answer
  dimAll: boolean;          // ~~ — check dimension on every step
}

// ---- Parameter Definition ----

export interface ParamDef {
  /** Human-readable name (for step labels only, never shown to user) */
  name: string;
  /** SI unit */
  unit: string;
  /** Pool of allowed values */
  values: number[];
  /** If true, this parameter can be the `?` target */
  canBeTarget?: boolean;
}

// ---- Calculation Step ----

export interface CalcStep {
  /** Display label e.g. "mg sinθ" */
  label: string;
  /** JavaScript expression. Variables: n0, n1, n2, ...  (the positional params in order) */
  formula: string;
  /** SI unit of the result */
  unit: string;
  /** Dimensional analysis string e.g. "[M][L][T]^{-2}" */
  dimension: string;
  /** Optional KaTeX string to show on correct answer */
  equationLatex?: string;
}

// ---- Concept Definition (a single "card") ----

export interface ConceptDef {
  /** Physcript keyword e.g. "incline", "force", "hit_spring" */
  keyword: string;
  /** Human-readable display name */
  displayName: string;
  /** Subject this belongs to */
  subject: "physics" | "chemistry";
  /** Domain */
  domain: Domain;
  /** Training lane */
  lane: Lane;
  /** Positional parameter definitions (in order) */
  params: ParamDef[];
  /** Calculation steps (for Lane A and Bridge) */
  steps: CalcStep[];
  /** Target variable index (for Lane A single-step "?" mode) — which param index is the target */
  targetIndex?: number;
  // ---- Lane B specific ----
  /** Trigger phrases that map to this equation */
  triggers?: string[];
  /** KaTeX equation string */
  equationLatex?: string;
  // ---- Lane C specific ----
  /** Constant value as a string */
  constantValue?: string;
  /** Constant unit */
  constantUnit?: string;
  // ---- Bridge specific ----
  /** If this is a bridge, which step index is the bridge point */
  bridgeAfterStep?: number;
  /** The bridge variable name */
  bridgeVariable?: string;
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
  subject: "physics" | "chemistry";
  domains: Domain[];         // empty = all
  lanes: Lane[];             // empty = all
  problemCount: number;
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
  domains: { key: Domain; name: string }[];
  concepts: ConceptDef[];
}
