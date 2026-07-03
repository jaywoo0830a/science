// Maps chemistry concept keywords → vocabulary card numbers
// from honors-chemistry-expression-to-equation-vocabulary.md
export const chemistryVocabMap: Record<string, string> = {
  // --- Stoichiometry (cards 1-18) ---
  "grams_to_moles":                        "1",
  "moles_to_grams":                        "1",
  "determine_molar_mass":                  "1, 2",
  "how_many_molecules_or_atoms":           "4, 5",
  "particles_to_moles":                    "4, 5",
  "mass_percent_of_an_element":            "17",
  "actual_vs_theoretical_yield":           "12, 13",
  "experimental_vs_accepted_value":        "157",
  "grams_A_to_grams_B":                    "8, 9, 10",
  "which_reactant_runs_out_first":         "11",
  "max_product_from_limiting_reactant":    "11, 12",
  "simplest_whole_number_ratio":           "15",
  "gas_volume_at_STP":                     "6, 7",
  "fraction_of_total_moles":               "27",

  // --- Gases (cards 19-32) ---
  "find_pressure_of_a_gas":                "19, 20",
  "moles_of_gas_from_PVT":                 "19, 20",
  "constant_temperature_compression":      "22",
  "gas_expands_when_heated":               "23",
  "pressure_rises_when_heated":            "24",
  "sealed_gas_P_V_T_all_change":           "21",
  "mixture_of_gases_total_pressure":       "26",
  "pressure_share_of_each_gas":            "27",
  "lighter_gas_escapes_faster":            "29",
  "average_speed_of_gas_particles":        "30",
  "kinetic_energy_of_gas_particles":       "31",
  "equal_volumes_equal_moles":             "25",

  // --- Thermochemistry (cards 33-52) ---
  "heating_water_in_a_beaker":             "33, 34",
  "heat_capacity_of_an_object":            "35",
  "heat_per_mole_per_degree":              "38",
  "heats_of_formation_add_up":             "43",
  "enthalpy_is_path_independent":          "42",
  "bonds_broken_minus_bonds_formed":       "44",
  "will_the_reaction_go":                  "48",
  "K_tells_you_delta_G":                   "51",
  "temperature_where_spontaneity_flips":   "52",
  "disorder_of_products_minus_reactants":  "47",
  "coffee_cup_calorimeter":                "36",
  "constant_volume_combustion":            "37",

  // --- Kinetics (cards 76-88) ---
  "rate_depends_on_concentration":         "76, 77",
  "first_order_decay_with_time":           "81",
  "zero_order_constant_rate":              "80",
  "second_order_how_concentration_drops":  "82",
  "half_life_is_always_the_same":          "83",
  "zero_order_half_life":                  "83",
  "second_order_half_life":                "83",
  "rate_constant_changes_with_temperature":"84",
  "activation_energy_from_two_temperatures":"85",
  "method_of_initial_rates":               "78",

  // --- Equilibrium (cards 89-100) ---
  "products_over_reactants_at_equilibrium":     "89",
  "equilibrium_constant_in_pressure":           "90",
  "which_direction_to_equilibrium":             "91",
  "small_K_approximation":                      "94",
  "medium_K_need_quadratic_formula":            "93, 95",
  "equilibrium_shifts_with_temperature":        "96, 99",
  "what_percent_dissociates":                   "94",
  "equilibrium_amount_after_reaction":          "93, 95",
  "free_energy_at_any_point":                   "50",
  "equilibrium_constant_from_thermo":           "51",

  // --- Acids & Bases (cards 101-120) ---
  "how_acidic_is_the_solution":           "101",
  "proton_concentration_from_pH":         "101",
  "how_basic_is_the_solution":            "102",
  "pH_and_pOH_add_to_fourteen":           "102",
  "water_autoionization":                 "103",
  "acid_strength_from_pH_data":           "104, 107",
  "pH_of_a_weak_acid_solution":           "109",
  "pOH_of_a_weak_base_solution":          "110",
  "conjugate_acid_base_pair":             "105",
  "logarithmic_acid_strength_scale":      "104",
  "acid_strength_from_pKa":               "104",
  "buffer_pH_calculation":                "111, 112",
  "weak_acid_percent_dissociated":        "106",
  "salt_makes_solution_acidic_or_basic":  "119",

  // --- Electrochemistry (cards 121-132) ---
  "voltage_of_a_battery":                 "125",
  "free_energy_from_cell_voltage":        "127",
  "cell_voltage_at_nonstandard_conditions":"128",
  "mass_plated_during_electrolysis":      "131",
  "coulombs_from_amps_times_seconds":     "132",
  "electrons_passed_from_coulombs":       "129, 132",
  "equilibrium_constant_from_cell_potential":"128, 51",
  "voltage_from_concentration_difference":"128",

  // --- Solutions & Colligative Properties (cards 133-144) ---
  "moles_per_liter_of_solution":          "133",
  "moles_per_kilogram_of_solvent":        "134",
  "adding_solvent_reduces_concentration": "137",
  "percent_by_mass_of_solute":            "135",
  "salt_water_boils_hotter":              "141",
  "salt_on_icy_roads":                    "142",
  "pressure_to_stop_osmosis":             "143",
  "mass_divided_by_volume":               "158",

  // --- Nuclear Chemistry (cards 145-155) ---
  "after_N_half_lives":                   "145, 146",
  "half_life_from_decay_constant":        "146",
  "decay_constant_from_half_life":        "146",
  "becquerels_of_a_radioactive_sample":   "147",
  "mass_defect_converted_to_energy":      "153, 154",
  "radiocarbon_dating":                   "145",

  // --- Lab & Measurement (cards 156-159) ---
  "absorbance_in_spectrophotometry":      "159",
  "parts_per_million":                    "138",

  // --- Organic Chemistry (cards 171-185) ---
  "burned_to_find_carbon_hydrogen_content":"18",
  "hydrocarbon_formula_pattern":          "171, 172, 173",
  "double_bond_or_ring_count":            "171, 172",
  "formal_charge_of_an_atom":             "65",

  // --- Cross-Domain Bridges (cards 160-170) ---
  // Stoich → Gas bridge
  // grams_to_moles + find_pressure is covered above via bridge pair logic
  // Stoich → Thermo bridge
  // grams_A_to_grams_B + heats_of_formation_add_up chain
  // Thermo → Equilibrium bridge
  // will_the_reaction_go + K_tells_you_delta_G

  // --- Implicit Info (cards 186-196) ---
  // STP, standard state, excess, strong acid/base, ideal gas, equilibrium
  // These are triggered by Lane B recall cards, not calculation keywords.
};
