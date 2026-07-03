// Maps Chemiscript v2 concept keywords → vocabulary card numbers
// from honors-chemistry-expression-to-equation-vocabulary.md
export const chemistryVocabMap: Record<string, string> = {
  // Stoichiometry
  "moles":              "1, 3",
  "particles":          "4",
  "stp_vol":            "6",
  "percent_yield":      "13",
  "percent_error":      "157",
  "percent_comp":       "17",
  "stoich":             "10",
  "limiting":           "11",

  // Gases
  "ideal_gas_P":        "19",
  "ideal_gas_V":        "19",
  "ideal_gas_n":        "19",
  "boyle":              "22",
  "charles":            "23",
  "gay_lussac":         "24",

  // Gas Mixtures & Kinetic Theory
  "dalton":             "26",
  "graham":             "29",
  "vrms":               "30",

  // Thermochemistry
  "heat":               "33",
  "calorimetry":        "36",
  "gibbs":              "48",
  "gibbs_to_K":         "51",
  "crossover_T":        "52",
  "delta_H_form":       "43",
  "bond_energy":        "44",

  // Kinetics
  "rate_1order":        "81",
  "halflife_1st":       "83",
  "halflife_2nd":       "83",
  "arrhenius_2pt":      "85",
  "rate_0order":        "80",

  // Acids & Bases
  "pH":                 "101",
  "H_from_pH":          "101",
  "pOH":                "102",
  "pH_from_pOH":        "102",
  "weak_acid_pH":       "109",
  "buffer_pH":          "112",
  "Kb_from_Ka":         "105",

  // Electrochemistry
  "ecell":              "125",
  "deltaG_E":           "127",
  "nernst":             "128",
  "electrolysis_mass":  "131",

  // Solutions
  "molarity":           "133",
  "dilution":           "137",
  "bp_elevation":       "141",
  "fp_depression":      "142",
  "osmotic_p":          "143",

  // Nuclear
  "halflife_n":         "146",
  "halflife_t":         "146",
  "decay_N":            "145",

  // Density & Beer-Lambert
  "density_calc":       "158",
  "beer_lambert":       "159",
};
