import type { SubjectModule } from "../../engine/types";

/**
 * Chemistry module placeholder.
 * Will be populated with chemistry cards following the same ConceptDef schema.
 *
 * Domains to implement:
 *   - stoichiometry    (mass↔moles, limiting reagent, % yield)
 *   - gases            (PV=nRT, gas laws, partial pressure)
 *   - thermochemistry  (q=mcΔT, ΔH, Hess, Gibbs)
 *   - equilibrium      (K_c, K_p, ICE tables)
 *   - acidbase         (pH, pOH, buffers, titration)
 *   - kinetics         (rate laws, Arrhenius, half-life)
 *   - electrochemistry (E°cell, Nernst, Faraday's law)
 *   - solutions        (M, m, dilution, colligative)
 *   - nuclear          (decay, half-life, binding energy)
 */
export const chemistryModule: SubjectModule = {
  id: "chemistry",
  name: "Chemistry",
  domains: [
    { key: "stoichiometry", name: "Stoichiometry" },
    { key: "gases", name: "Gases" },
    { key: "thermochemistry", name: "Thermochemistry" },
    { key: "equilibrium", name: "Equilibrium" },
    { key: "acidbase", name: "Acids & Bases" },
    { key: "kinetics", name: "Kinetics" },
    { key: "electrochemistry", name: "Electrochemistry" },
    { key: "solutions", name: "Solutions" },
    { key: "nuclear", name: "Nuclear Chemistry" },
  ],
  concepts: [
    // Example Lane A card:
    {
      keyword: "moles",
      displayName: "Moles (n = m/M)",
      subject: "chemistry",
      domain: "stoichiometry",
      lane: "A",
      params: [
        { name: "mass", unit: "g", values: [5, 10, 25, 50, 100], canBeTarget: true },
        { name: "molar mass", unit: "g/mol", values: [18, 32, 44, 58.5, 100], canBeTarget: true },
        { name: "moles", unit: "mol", values: [], canBeTarget: true },
      ],
      steps: [
        {
          label: "n = m/M",
          formula: "n0 / n1",
          unit: "mol",
          dimension: "[N]",
          equationLatex: "n = \\frac{m}{M}",
        },
      ],
    },
    {
      keyword: "pH",
      displayName: "pH (pH = −log[H⁺])",
      subject: "chemistry",
      domain: "acidbase",
      lane: "A",
      params: [
        { name: "[H⁺]", unit: "M", values: [0.1, 0.01, 0.001, 1e-4, 1e-7, 3.2e-5] },
      ],
      steps: [
        {
          label: "pH = −log[H⁺]",
          formula: "-Math.log10(n0)",
          unit: "",
          dimension: "[1]",
          equationLatex: "\\mathrm{pH} = -\\log[\\mathrm{H}^+]",
        },
      ],
    },
    // Lane B example:
    {
      keyword: "stp",
      displayName: "STP conditions",
      subject: "chemistry",
      domain: "gases",
      lane: "B",
      params: [],
      steps: [],
      triggers: ["STP", "standard temperature and pressure"],
      equationLatex: "T = 273\\;\\mathrm{K},\\; P = 1\\;\\mathrm{atm},\\; V_m = 22.4\\;\\mathrm{L/mol}",
    },
    // Lane C example:
    {
      keyword: "NA_chem",
      displayName: "Avogadro's number",
      subject: "chemistry",
      domain: "stoichiometry",
      lane: "C",
      params: [],
      steps: [],
      constantValue: "6.022×10²³",
      constantUnit: "mol⁻¹",
      equationLatex: "N_A = 6.022 \\times 10^{23}\\;\\mathrm{mol^{-1}}",
    },
  ],
};
