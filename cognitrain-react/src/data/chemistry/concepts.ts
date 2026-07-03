import type { ConceptDef } from "../../engine/types";

// ============================================================
// Chemiscript v2 — Chemistry Concept Deck (Week 1: 50 concepts)
// Covers all major domains with high-frequency exam concepts.
// Notation: positional params, ? = target, > = bridge, ∝ = relation, ?> = decide, @ = template
// ============================================================

export const chemistryConcepts: ConceptDef[] = [

  // ==========================================================
  // 1. STOICHIOMETRY (8)
  // ==========================================================

  { keyword:"moles", displayName:"n=m/M", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"m",unit:"g",values:[4,12,24,36,100,180]},{name:"M",unit:"g/mol",values:[2,12,18,36.5,44,100]},{name:"n",unit:"mol",values:[],canBeTarget:true}],
    steps:[{label:"n=m/M",formula:"n0/n1",unit:"mol",dimension:"[N]",equationLatex:"n = \\frac{m}{M}"}],
    clusterId:"mole_bridge",difficultyLevel:1,
    connections:[{targetKeyword:"particles",relation:"feeds_into",bridgeParamIndex:0,bridgeVariable:"n (mol)"},{targetKeyword:"ideal_gas_P",relation:"feeds_into",bridgeParamIndex:0,bridgeVariable:"n (mol)"}]},

  { keyword:"particles", displayName:"N=n·N_A", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"n",unit:"mol",values:[0.01,0.1,0.5,1,2]},{name:"N",unit:"particles",values:[],canBeTarget:true}],
    steps:[{label:"N=n×6.022×10²³",formula:"n0*6.022e23",unit:"",dimension:"[1]",equationLatex:"N = nN_A"}],
    clusterId:"mole_bridge",difficultyLevel:2},

  { keyword:"stp_vol", displayName:"V=n×22.4 L (STP)", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"n",unit:"mol",values:[0.5,1,2,3,5]},{name:"V",unit:"L",values:[],canBeTarget:true}],
    steps:[{label:"V=n×22.4",formula:"n0*22.4",unit:"L",dimension:"[L]³",equationLatex:"V = n \\cdot 22.4\\,\\text{L}"}],
    clusterId:"mole_bridge",difficultyLevel:1},

  { keyword:"percent_yield", displayName:"% yield=actual/theo×100", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"actual",unit:"g",values:[5,12,15,20,38]},{name:"theoretical",unit:"g",values:[10,15,20,25,40,50]},{name:"yield",unit:"%",values:[],canBeTarget:true}],
    steps:[{label:"% yield=actual/theo×100",formula:"(n0/n1)*100",unit:"%",dimension:"[1]",equationLatex:"\\%\\,\\text{yield} = \\frac{\\text{actual}}{\\text{theo}}\\times 100"}],
    clusterId:"stoich_core",difficultyLevel:1},

  { keyword:"percent_error", displayName:"% error=|exp−acc|/acc×100", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"exp",unit:"",values:[9.8,19.5,42.5,98]},{name:"accepted",unit:"",values:[10,20,40,100]},{name:"error",unit:"%",values:[],canBeTarget:true}],
    steps:[{label:"% error=|exp−acc|/acc×100",formula:"Math.abs(n0-n1)/n1*100",unit:"%",dimension:"[1]",equationLatex:"\\%\\,\\text{error} = \\frac{|\\text{exp}-\\text{acc}|}{\\text{acc}}\\times 100"}],
    clusterId:"stoich_core",difficultyLevel:1},

  { keyword:"percent_comp", displayName:"% element=(m_e/M)×100", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"m_elem",unit:"g",values:[12,16,24,32,48]},{name:"M_cmpd",unit:"g/mol",values:[44,46,58.5,100,180]},{name:"percent",unit:"%",values:[],canBeTarget:true}],
    steps:[{label:"%=(m_e/M)×100",formula:"(n0/n1)*100",unit:"%",dimension:"[1]",equationLatex:"\\% = \\frac{m_e}{M}\\times 100"}],
    clusterId:"stoich_core",difficultyLevel:1},

  { keyword:"stoich", displayName:"g A→mol→ratio→g B", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"m_A",unit:"g",values:[10,25,50,100]},{name:"M_A",unit:"g/mol",values:[20,30,50,100]},{name:"cA",unit:"",values:[1,2,3],canBeTarget:false},{name:"cB",unit:"",values:[1,2,3,4],canBeTarget:false},{name:"M_B",unit:"g/mol",values:[18,44,58.5,100]},{name:"m_B",unit:"g",values:[],canBeTarget:true}],
    steps:[{label:"n_A=m_A/M_A",formula:"n0/n1",unit:"mol",dimension:"[N]",equationLatex:"n_A"},
      {label:"n_B=n_A×cB/cA",formula:"(n0/n1)*n3/n2",unit:"mol",dimension:"[N]",equationLatex:"n_B"},
      {label:"m_B=n_B×M_B",formula:"(n0/n1)*(n3/n2)*n4",unit:"g",dimension:"[M]",equationLatex:"m_B"}],
    clusterId:"stoich_core",difficultyLevel:2,
    connections:[{targetKeyword:"limiting",relation:"same_family"}]},

  { keyword:"limiting", displayName:"Limiting: n/coeff → smallest", subject:"chemistry",domain:"stoichiometry",lane:"A",
    params:[{name:"m_A",unit:"g",values:[10,20,30]},{name:"M_A",unit:"g/mol",values:[27,40,56]},{name:"cA",unit:"",values:[2,1,2]},{name:"m_B",unit:"g",values:[20,35,50]},{name:"M_B",unit:"g/mol",values:[71,32,36.5]},{name:"cB",unit:"",values:[3,1,2]},{name:"ratio_A",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"n_A=m_A/M_A",formula:"n0/n1",unit:"mol",dimension:"[N]",equationLatex:"n_A"},
      {label:"n_B=m_B/M_B",formula:"n3/n4",unit:"mol",dimension:"[N]",equationLatex:"n_B"},
      {label:"n_A/cA",formula:"(n0/n1)/n2",unit:"",dimension:"[1]",equationLatex:"n_A/a"},
      {label:"n_B/cB",formula:"(n3/n4)/n5",unit:"",dimension:"[1]",equationLatex:"n_B/b"},
      {label:"limiting = min(n/c)",formula:"Math.min((n0/n1)/n2,(n3/n4)/n5)",unit:"",dimension:"[1]",equationLatex:"\\text{Limiting}"}],
    clusterId:"stoich_core",difficultyLevel:2},

  // ==========================================================
  // 2. GASES (6)
  // ==========================================================

  { keyword:"ideal_gas_P", displayName:"P=nRT/V", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"n",unit:"mol",values:[0.5,1,2,5]},{name:"T",unit:"K",values:[273,300,350,400]},{name:"V",unit:"L",values:[5,10,22.4,50]},{name:"P",unit:"atm",values:[],canBeTarget:true}],
    steps:[{label:"P=nRT/V",formula:"n0*0.08206*n1/n2",unit:"atm",dimension:"[M][L]⁻¹[T]⁻²",equationLatex:"P = \\frac{nRT}{V}"}],
    clusterId:"gas_core",difficultyLevel:2},

  { keyword:"ideal_gas_V", displayName:"V=nRT/P", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"n",unit:"mol",values:[0.5,1,2,5]},{name:"T",unit:"K",values:[273,300,350,400]},{name:"P",unit:"atm",values:[1,2,3,5]},{name:"V",unit:"L",values:[],canBeTarget:true}],
    steps:[{label:"V=nRT/P",formula:"n0*0.08206*n1/n2",unit:"L",dimension:"[L]³",equationLatex:"V = \\frac{nRT}{P}"}],
    clusterId:"gas_core",difficultyLevel:2},

  { keyword:"ideal_gas_n", displayName:"n=PV/(RT)", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"P",unit:"atm",values:[1,2,3,5]},{name:"V",unit:"L",values:[5,10,22.4,50]},{name:"T",unit:"K",values:[273,300,350,400]},{name:"n",unit:"mol",values:[],canBeTarget:true}],
    steps:[{label:"n=PV/(RT)",formula:"n0*n1/(0.08206*n2)",unit:"mol",dimension:"[N]",equationLatex:"n = \\frac{PV}{RT}"}],
    clusterId:"gas_core",difficultyLevel:2},

  { keyword:"boyle", displayName:"Boyle: P₁V₁=P₂V₂", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"P₁",unit:"atm",values:[1,2,3,5]},{name:"V₁",unit:"L",values:[5,10,20,50]},{name:"V₂",unit:"L",values:[2,5,10,25]},{name:"P₂",unit:"atm",values:[],canBeTarget:true}],
    steps:[{label:"P₂=P₁V₁/V₂",formula:"n0*n1/n2",unit:"atm",dimension:"[M][L]⁻¹[T]⁻²",equationLatex:"P_2 = \\frac{P_1V_1}{V_2}"}],
    clusterId:"gas_core",difficultyLevel:1},

  { keyword:"charles", displayName:"Charles: V₁/T₁=V₂/T₂", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"V₁",unit:"L",values:[2,5,10,22.4]},{name:"T₁",unit:"K",values:[273,300,350]},{name:"T₂",unit:"K",values:[350,400,500,600]},{name:"V₂",unit:"L",values:[],canBeTarget:true}],
    steps:[{label:"V₂=V₁T₂/T₁",formula:"n0*n2/n1",unit:"L",dimension:"[L]³",equationLatex:"V_2 = \\frac{V_1T_2}{T_1}"}],
    clusterId:"gas_core",difficultyLevel:1},

  { keyword:"gay_lussac", displayName:"Gay-Lussac: P₁/T₁=P₂/T₂", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"P₁",unit:"atm",values:[1,2,3,5]},{name:"T₁",unit:"K",values:[273,300,350]},{name:"T₂",unit:"K",values:[350,400,500,600]},{name:"P₂",unit:"atm",values:[],canBeTarget:true}],
    steps:[{label:"P₂=P₁T₂/T₁",formula:"n0*n2/n1",unit:"atm",dimension:"[M][L]⁻¹[T]⁻²",equationLatex:"P_2 = \\frac{P_1T_2}{T_1}"}],
    clusterId:"gas_core",difficultyLevel:1},

  // ==========================================================
  // 3. GAS MIXTURES & KINETIC THEORY (3)
  // ==========================================================

  { keyword:"dalton", displayName:"Dalton: P_tot=ΣP_i", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"P₁",unit:"atm",values:[0.5,1,1.5,2]},{name:"P₂",unit:"atm",values:[0.5,1,2,3]},{name:"P₃",unit:"atm",values:[0.5,1,1.5,2]},{name:"P_tot",unit:"atm",values:[],canBeTarget:true}],
    steps:[{label:"P_tot=P₁+P₂+P₃",formula:"n0+n1+n2",unit:"atm",dimension:"[M][L]⁻¹[T]⁻²",equationLatex:"P_{\\text{tot}} = P_1+P_2+P_3"}],
    clusterId:"gas_core",difficultyLevel:1},

  { keyword:"graham", displayName:"Graham: r₁/r₂=√(M₂/M₁)", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"M₁",unit:"g/mol",values:[2,4,16,32]},{name:"M₂",unit:"g/mol",values:[32,44,64,71]},{name:"ratio",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"r₁/r₂=√(M₂/M₁)",formula:"Math.sqrt(n1/n0)",unit:"",dimension:"[1]",equationLatex:"\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}"}],
    clusterId:"gas_core",difficultyLevel:2},

  { keyword:"vrms", displayName:"v_rms=√(3RT/M)", subject:"chemistry",domain:"gases",lane:"A",
    params:[{name:"T",unit:"K",values:[273,300,400,500]},{name:"M_kg",unit:"kg/mol",values:[0.002,0.004,0.016,0.028,0.032]},{name:"v_rms",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v_rms=√(3RT/M)",formula:"Math.sqrt(3*8.314*n0/n1)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}"}],
    clusterId:"gas_core",difficultyLevel:2},

  // ==========================================================
  // 4. THERMOCHEMISTRY (7)
  // ==========================================================

  { keyword:"heat", displayName:"q=mcΔT", subject:"chemistry",domain:"thermochemistry",lane:"A",
    params:[{name:"m",unit:"g",values:[10,50,100,200,500]},{name:"c",unit:"J/(g·K)",values:[4.184,2.0,0.9,0.45]},{name:"ΔT",unit:"K",values:[5,10,25,50,75]},{name:"q",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"q=mcΔT",formula:"n0*n1*n2",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"q = mc\\Delta T"}],
    clusterId:"thermo_core",difficultyLevel:1},

  { keyword:"calorimetry", displayName:"Calorimetry: q_soln=−q_rxn", subject:"chemistry",domain:"thermochemistry",lane:"A",
    params:[{name:"m",unit:"g",values:[50,100,200]},{name:"c",unit:"J/(g·K)",values:[4.184],canBeTarget:false},{name:"ΔT",unit:"K",values:[3,5,8,12,15]},{name:"q_rxn",unit:"kJ",values:[],canBeTarget:true}],
    steps:[{label:"q_soln=mcΔT",formula:"n0*n1*n2",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"q_{\\text{soln}}"},
      {label:"q_rxn=−q_soln (kJ)",formula:"-n0*n1*n2/1000",unit:"kJ",dimension:"[M][L]²[T]⁻²",equationLatex:"q_{\\text{rxn}} = -q_{\\text{soln}}"}],
    clusterId:"thermo_core",difficultyLevel:2},

  { keyword:"gibbs", displayName:"ΔG=ΔH−TΔS", subject:"chemistry",domain:"thermochemistry",lane:"A",
    params:[{name:"ΔH",unit:"kJ",values:[-200,-100,-50,50,100]},{name:"T",unit:"K",values:[298,300,350,400]},{name:"ΔS",unit:"kJ/K",values:[-0.2,-0.1,0.1,0.2]},{name:"ΔG",unit:"kJ",values:[],canBeTarget:true}],
    steps:[{label:"ΔG=ΔH−TΔS",formula:"n0-n1*n2",unit:"kJ",dimension:"[M][L]²[T]⁻²",equationLatex:"\\Delta G = \\Delta H - T\\Delta S"}],
    clusterId:"thermo_core",difficultyLevel:2,
    connections:[{targetKeyword:"gibbs_to_K",relation:"feeds_into",bridgeParamIndex:0,bridgeVariable:"ΔG (kJ)"}]},

  { keyword:"gibbs_to_K", displayName:"K=exp(−ΔG°/RT)", subject:"chemistry",domain:"thermochemistry",lane:"A",
    params:[{name:"ΔG",unit:"kJ",values:[-50,-20,-10,-5,5,10]},{name:"T",unit:"K",values:[298,350,400]},{name:"K",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"K=exp(−ΔG/(RT))",formula:"Math.exp(-n0*1000/(8.314*n1))",unit:"",dimension:"[1]",equationLatex:"K = e^{-\\Delta G^\\circ/(RT)}"}],
    clusterId:"thermo_core",difficultyLevel:3},

  { keyword:"crossover_T", displayName:"T=ΔH/ΔS (ΔG=0)", subject:"chemistry",domain:"thermochemistry",lane:"A",
    params:[{name:"ΔH",unit:"kJ",values:[-200,-150,-100,100,150]},{name:"ΔS",unit:"kJ/K",values:[-0.2,-0.15,-0.1,0.1,0.15]},{name:"T",unit:"K",values:[],canBeTarget:true}],
    steps:[{label:"T=ΔH/ΔS",formula:"n0/n1",unit:"K",dimension:"[Θ]",equationLatex:"T = \\frac{\\Delta H}{\\Delta S}"}],
    clusterId:"thermo_core",difficultyLevel:2},

  { keyword:"delta_H_form", displayName:"ΔH°=ΣnΔH_f°(prod)−ΣnΔH_f°(reac)", subject:"chemistry",domain:"thermochemistry",lane:"A",
    params:[{name:"ΔH_prod1",unit:"kJ",values:[-393.5,-285.8]},{name:"c_prod1",unit:"",values:[1,2],canBeTarget:false},{name:"ΔH_prod2",unit:"kJ",values:[-285.8,-241.8]},{name:"c_prod2",unit:"",values:[1,2],canBeTarget:false},{name:"ΔH_reac1",unit:"kJ",values:[-74.8,-84.7]},{name:"c_reac1",unit:"",values:[1],canBeTarget:false},{name:"ΔH_rxn",unit:"kJ",values:[],canBeTarget:true}],
    steps:[{label:"Σ nΔH_f(prod)",formula:"n0*n1+n2*n3",unit:"kJ",dimension:"[M][L]²[T]⁻²",equationLatex:"\\Sigma n\\Delta H_f^\\circ(\\text{prod})"},
      {label:"ΔH=Σprod−Σreac",formula:"(n0*n1+n2*n3)-n4*n5",unit:"kJ",dimension:"[M][L]²[T]⁻²",equationLatex:"\\Delta H^\\circ"}],
    clusterId:"thermo_core",difficultyLevel:3},

  { keyword:"bond_energy", displayName:"ΔH≈ΣBE(broken)−ΣBE(formed)", subject:"chemistry",domain:"thermochemistry",lane:"A",
    params:[{name:"BE_broken",unit:"kJ",values:[614,436,243,498]},{name:"BE_formed",unit:"kJ",values:[348,413,431,463]},{name:"ΔH",unit:"kJ",values:[],canBeTarget:true}],
    steps:[{label:"ΔH≈ΣBE(broken)−ΣBE(formed)",formula:"n0-n1",unit:"kJ",dimension:"[M][L]²[T]⁻²",equationLatex:"\\Delta H \\approx \\Sigma\\text{BE(broken)}-\\Sigma\\text{BE(formed)}"}],
    clusterId:"thermo_core",difficultyLevel:2},

  // ==========================================================
  // 5. KINETICS (5)
  // ==========================================================

  { keyword:"rate_1order", displayName:"1st order: ln[A]=ln[A]₀−kt", subject:"chemistry",domain:"kinetics",lane:"A",
    params:[{name:"A0",unit:"M",values:[0.1,0.2,0.5,1.0]},{name:"k",unit:"1/s",values:[0.01,0.02,0.05,0.1]},{name:"t",unit:"s",values:[10,30,60,100]},{name:"A",unit:"M",values:[],canBeTarget:true}],
    steps:[{label:"[A]=[A]₀e^(−kt)",formula:"n0*Math.exp(-n1*n2)",unit:"M",dimension:"[N][L]⁻³",equationLatex:"[A] = [A]_0 e^{-kt}"}],
    clusterId:"kinetics_core",difficultyLevel:2},

  { keyword:"halflife_1st", displayName:"1st order: t½=0.693/k", subject:"chemistry",domain:"kinetics",lane:"A",
    params:[{name:"k",unit:"1/s",values:[0.005,0.01,0.02,0.05,0.1]},{name:"t½",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"t½=0.693/k",formula:"0.693/n0",unit:"s",dimension:"[T]",equationLatex:"t_{1/2} = \\frac{0.693}{k}"}],
    clusterId:"kinetics_core",difficultyLevel:1},

  { keyword:"halflife_2nd", displayName:"2nd order: t½=1/(k[A]₀)", subject:"chemistry",domain:"kinetics",lane:"A",
    params:[{name:"k",unit:"1/(M·s)",values:[0.01,0.02,0.05,0.1]},{name:"A0",unit:"M",values:[0.1,0.2,0.5,1.0]},{name:"t½",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"t½=1/(k[A]₀)",formula:"1/(n0*n1)",unit:"s",dimension:"[T]",equationLatex:"t_{1/2} = \\frac{1}{k[A]_0}"}],
    clusterId:"kinetics_core",difficultyLevel:2},

  { keyword:"arrhenius_2pt", displayName:"Arrhenius 2-pt: ln(k₂/k₁)=Ea/R(1/T₁−1/T₂)", subject:"chemistry",domain:"kinetics",lane:"A",
    params:[{name:"k₁",unit:"",values:[1e-4,1e-3,1e-2]},{name:"k₂",unit:"",values:[1e-3,1e-2,1e-1]},{name:"T₁",unit:"K",values:[300,350]},{name:"T₂",unit:"K",values:[350,400,450]},{name:"Ea",unit:"kJ/mol",values:[],canBeTarget:true}],
    steps:[{label:"Ea=R·ln(k₂/k₁)/(1/T₁−1/T₂)",formula:"0.008314*Math.log(n1/n0)/(1/n2-1/n3)",unit:"kJ/mol",dimension:"[M][L]²[T]⁻²[N]⁻¹",equationLatex:"E_a = R\\frac{\\ln(k_2/k_1)}{1/T_1-1/T_2}"}],
    clusterId:"kinetics_core",difficultyLevel:3},

  { keyword:"rate_0order", displayName:"0th order: [A]=[A]₀−kt", subject:"chemistry",domain:"kinetics",lane:"A",
    params:[{name:"A0",unit:"M",values:[0.1,0.2,0.5]},{name:"k",unit:"M/s",values:[0.001,0.005,0.01]},{name:"t",unit:"s",values:[10,20,30,50]},{name:"A",unit:"M",values:[],canBeTarget:true}],
    steps:[{label:"[A]=[A]₀−kt",formula:"n0-n1*n2",unit:"M",dimension:"[N][L]⁻³",equationLatex:"[A] = [A]_0 - kt"}],
    clusterId:"kinetics_core",difficultyLevel:2},

  // ==========================================================
  // 6. ACIDS & BASES (7)
  // ==========================================================

  { keyword:"pH", displayName:"pH=−log[H⁺]", subject:"chemistry",domain:"acids_bases",lane:"A",
    params:[{name:"H_conc",unit:"M",values:[0.001,0.01,0.1,1e-5,1e-7]},{name:"pH",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"pH=−log[H⁺]",formula:"-Math.log10(n0)",unit:"",dimension:"[1]",equationLatex:"\\text{pH} = -\\log[\\text{H}^+]"}],
    clusterId:"acid_base_core",difficultyLevel:1},

  { keyword:"H_from_pH", displayName:"[H⁺]=10^(−pH)", subject:"chemistry",domain:"acids_bases",lane:"A",
    params:[{name:"pH",unit:"",values:[2,3,4,7,10]},{name:"H_conc",unit:"M",values:[],canBeTarget:true}],
    steps:[{label:"[H⁺]=10^(−pH)",formula:"Math.pow(10,-n0)",unit:"M",dimension:"[N][L]⁻³",equationLatex:"[\\text{H}^+] = 10^{-\\text{pH}}"}],
    clusterId:"acid_base_core",difficultyLevel:1},

  { keyword:"pOH", displayName:"pOH=−log[OH⁻]", subject:"chemistry",domain:"acids_bases",lane:"A",
    params:[{name:"OH_conc",unit:"M",values:[0.001,0.01,0.0001,1e-5]},{name:"pOH",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"pOH=−log[OH⁻]",formula:"-Math.log10(n0)",unit:"",dimension:"[1]",equationLatex:"\\text{pOH} = -\\log[\\text{OH}^-]"}],
    clusterId:"acid_base_core",difficultyLevel:1},

  { keyword:"pH_from_pOH", displayName:"pH=14−pOH", subject:"chemistry",domain:"acids_bases",lane:"A",
    params:[{name:"pOH",unit:"",values:[2,3,4,7,10,12]},{name:"pH",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"pH=14−pOH",formula:"14-n0",unit:"",dimension:"[1]",equationLatex:"\\text{pH} = 14 - \\text{pOH}"}],
    clusterId:"acid_base_core",difficultyLevel:1},

  { keyword:"weak_acid_pH", displayName:"Weak acid: [H⁺]=√(K_a[HA]₀)", subject:"chemistry",domain:"acids_bases",lane:"A",
    params:[{name:"Ka",unit:"",values:[1.8e-5,6.2e-10,1e-4]},{name:"HA0",unit:"M",values:[0.01,0.05,0.1,0.2]},{name:"pH",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"[H⁺]=√(K_a[HA]₀)",formula:"Math.sqrt(n0*n1)",unit:"M",dimension:"[N][L]⁻³",equationLatex:"[\\text{H}^+]"},
      {label:"pH=−log[H⁺]",formula:"-Math.log10(Math.sqrt(n0*n1))",unit:"",dimension:"[1]",equationLatex:"\\text{pH}"}],
    clusterId:"acid_base_core",difficultyLevel:3},

  { keyword:"buffer_pH", displayName:"Henderson-Hasselbalch: pH=pKa+log([A⁻]/[HA])", subject:"chemistry",domain:"acids_bases",lane:"A",
    params:[{name:"pKa",unit:"",values:[3.75,4.74,6.37,9.25]},{name:"A_conc",unit:"M",values:[0.05,0.1,0.2,0.5]},{name:"HA_conc",unit:"M",values:[0.2,0.5,1.0,2.0]},{name:"pH",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"pH=pKa+log([A⁻]/[HA])",formula:"n0+Math.log10(n1/n2)",unit:"",dimension:"[1]",equationLatex:"\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}"}],
    clusterId:"acid_base_core",difficultyLevel:2},

  { keyword:"Kb_from_Ka", displayName:"K_b=K_w/K_a", subject:"chemistry",domain:"acids_bases",lane:"A",
    params:[{name:"Ka",unit:"",values:[1.8e-5,6.2e-10,1e-4,1e-10]},{name:"Kb",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"K_b=10⁻¹⁴/K_a",formula:"1.0e-14/n0",unit:"",dimension:"[1]",equationLatex:"K_b = \\frac{K_w}{K_a}"}],
    clusterId:"acid_base_core",difficultyLevel:1},

  // ==========================================================
  // 7. ELECTROCHEMISTRY (4)
  // ==========================================================

  { keyword:"ecell", displayName:"E°_cell=E°_cath−E°_an", subject:"chemistry",domain:"electrochemistry",lane:"A",
    params:[{name:"E_cath",unit:"V",values:[0.34,0.80,1.23,1.36]},{name:"E_an",unit:"V",values:[-0.76,-0.44,0,0.34]},{name:"E_cell",unit:"V",values:[],canBeTarget:true}],
    steps:[{label:"E°_cell=E°_cath−E°_an",formula:"n0-n1",unit:"V",dimension:"[M][L]²[Q]⁻¹[T]⁻²",equationLatex:"E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cath}} - E^\\circ_{\\text{an}}"}],
    clusterId:"electrochem_core",difficultyLevel:1},

  { keyword:"deltaG_E", displayName:"ΔG°=−nFE°", subject:"chemistry",domain:"electrochemistry",lane:"A",
    params:[{name:"n",unit:"",values:[1,2,3,4],canBeTarget:false},{name:"E_cell",unit:"V",values:[0.5,1.0,1.1,1.5,2.0]},{name:"ΔG",unit:"kJ/mol",values:[],canBeTarget:true}],
    steps:[{label:"ΔG°=−nFE°",formula:"-n0*96.485*n1",unit:"kJ/mol",dimension:"[M][L]²[T]⁻²[N]⁻¹",equationLatex:"\\Delta G^\\circ = -nFE^\\circ"}],
    clusterId:"electrochem_core",difficultyLevel:2},

  { keyword:"nernst", displayName:"Nernst: E=E°−(0.0592/n)logQ", subject:"chemistry",domain:"electrochemistry",lane:"A",
    params:[{name:"E0",unit:"V",values:[0.5,1.0,1.1,1.5]},{name:"n",unit:"",values:[1,2,3],canBeTarget:false},{name:"Q",unit:"",values:[0.001,0.01,0.1,1,10]},{name:"E",unit:"V",values:[],canBeTarget:true}],
    steps:[{label:"E=E°−(0.0592/n)logQ",formula:"n0-(0.0592/n1)*Math.log10(n2)",unit:"V",dimension:"[M][L]²[Q]⁻¹[T]⁻²",equationLatex:"E = E^\\circ - \\frac{0.0592}{n}\\log Q"}],
    clusterId:"electrochem_core",difficultyLevel:2},

  { keyword:"electrolysis_mass", displayName:"Electrolysis: m=ItM/(nF)", subject:"chemistry",domain:"electrochemistry",lane:"A",
    params:[{name:"I",unit:"A",values:[1,2,5,10]},{name:"t",unit:"s",values:[600,1800,3600,7200]},{name:"M",unit:"g/mol",values:[63.5,108,27,65.4]},{name:"n",unit:"",values:[1,2,3],canBeTarget:false},{name:"m",unit:"g",values:[],canBeTarget:true}],
    steps:[{label:"m=ItM/(nF)",formula:"n0*n1*n2/(n3*96485)",unit:"g",dimension:"[M]",equationLatex:"m = \\frac{ItM}{nF}"}],
    clusterId:"electrochem_core",difficultyLevel:2},

  // ==========================================================
  // 8. SOLUTIONS & COLLIGATIVE (5)
  // ==========================================================

  { keyword:"molarity", displayName:"M=n/V", subject:"chemistry",domain:"solutions",lane:"A",
    params:[{name:"n",unit:"mol",values:[0.1,0.25,0.5,1,2]},{name:"V",unit:"L",values:[0.1,0.25,0.5,1,2]},{name:"M",unit:"mol/L",values:[],canBeTarget:true}],
    steps:[{label:"M=n/V",formula:"n0/n1",unit:"mol/L",dimension:"[N][L]⁻³",equationLatex:"M = \\frac{n}{V}"}],
    clusterId:"solutions_core",difficultyLevel:1},

  { keyword:"dilution", displayName:"Dilution: M₁V₁=M₂V₂", subject:"chemistry",domain:"solutions",lane:"A",
    params:[{name:"M₁",unit:"M",values:[1,3,6,12]},{name:"V₁",unit:"L",values:[0.01,0.05,0.1,0.25]},{name:"V₂",unit:"L",values:[0.1,0.25,0.5,1]},{name:"M₂",unit:"M",values:[],canBeTarget:true}],
    steps:[{label:"M₂=M₁V₁/V₂",formula:"n0*n1/n2",unit:"M",dimension:"[N][L]⁻³",equationLatex:"M_2 = \\frac{M_1V_1}{V_2}"}],
    clusterId:"solutions_core",difficultyLevel:1},

  { keyword:"bp_elevation", displayName:"ΔT_b=i·K_b·m", subject:"chemistry",domain:"solutions",lane:"A",
    params:[{name:"i",unit:"",values:[1,2,3],canBeTarget:false},{name:"Kb",unit:"°C/m",values:[0.512,1.86,3.0],canBeTarget:false},{name:"m",unit:"mol/kg",values:[0.1,0.5,1,2]},{name:"ΔT_b",unit:"°C",values:[],canBeTarget:true}],
    steps:[{label:"ΔT_b=iK_b m",formula:"n0*n1*n2",unit:"°C",dimension:"[Θ]",equationLatex:"\\Delta T_b = iK_b m"}],
    clusterId:"solutions_core",difficultyLevel:2},

  { keyword:"fp_depression", displayName:"ΔT_f=i·K_f·m", subject:"chemistry",domain:"solutions",lane:"A",
    params:[{name:"i",unit:"",values:[1,2,3],canBeTarget:false},{name:"Kf",unit:"°C/m",values:[1.86,5.12,20.0],canBeTarget:false},{name:"m",unit:"mol/kg",values:[0.1,0.5,1,2]},{name:"ΔT_f",unit:"°C",values:[],canBeTarget:true}],
    steps:[{label:"ΔT_f=iK_f m",formula:"n0*n1*n2",unit:"°C",dimension:"[Θ]",equationLatex:"\\Delta T_f = iK_f m"}],
    clusterId:"solutions_core",difficultyLevel:2},

  { keyword:"osmotic_p", displayName:"Π=iMRT", subject:"chemistry",domain:"solutions",lane:"A",
    params:[{name:"i",unit:"",values:[1,2,3],canBeTarget:false},{name:"M",unit:"mol/L",values:[0.01,0.05,0.1,0.5]},{name:"T",unit:"K",values:[298,310,350]},{name:"Π",unit:"atm",values:[],canBeTarget:true}],
    steps:[{label:"Π=iMRT",formula:"n0*n1*0.08206*n2",unit:"atm",dimension:"[M][L]⁻¹[T]⁻²",equationLatex:"\\Pi = iMRT"}],
    clusterId:"solutions_core",difficultyLevel:2},

  // ==========================================================
  // 9. NUCLEAR (3)
  // ==========================================================

  { keyword:"halflife_n", displayName:"N=N₀/2^n", subject:"chemistry",domain:"nuclear",lane:"A",
    params:[{name:"N0",unit:"g",values:[100,500,1000]},{name:"n",unit:"",values:[1,2,3,4,5]},{name:"N",unit:"g",values:[],canBeTarget:true}],
    steps:[{label:"N=N₀/2^n",formula:"n0/Math.pow(2,n1)",unit:"g",dimension:"[M]",equationLatex:"N = \\frac{N_0}{2^n}"}],
    clusterId:"nuclear_core",difficultyLevel:1},

  { keyword:"halflife_t", displayName:"t½=0.693/λ", subject:"chemistry",domain:"nuclear",lane:"A",
    params:[{name:"λ",unit:"1/s",values:[1e-5,1e-4,1e-3]},{name:"t½",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"t½=0.693/λ",formula:"0.693/n0",unit:"s",dimension:"[T]",equationLatex:"t_{1/2} = \\frac{0.693}{\\lambda}"}],
    clusterId:"nuclear_core",difficultyLevel:1},

  { keyword:"decay_N", displayName:"N=N₀e^(−λt)", subject:"chemistry",domain:"nuclear",lane:"A",
    params:[{name:"N0",unit:"g",values:[100,500,1000]},{name:"λ",unit:"1/s",values:[1e-5,1e-4,1e-3]},{name:"t",unit:"s",values:[1000,5000,10000,50000]},{name:"N",unit:"g",values:[],canBeTarget:true}],
    steps:[{label:"N=N₀e^(−λt)",formula:"n0*Math.exp(-n1*n2)",unit:"g",dimension:"[M]",equationLatex:"N = N_0 e^{-\\lambda t}"}],
    clusterId:"nuclear_core",difficultyLevel:2},

  // ==========================================================
  // 10. DENSITY & BEER-LAMBERT (2)
  // ==========================================================

  { keyword:"density_calc", displayName:"ρ=m/V", subject:"chemistry",domain:"solutions",lane:"A",
    params:[{name:"m",unit:"g",values:[5,10,50,100,200]},{name:"V",unit:"mL",values:[2,5,10,25,50,100]},{name:"ρ",unit:"g/mL",values:[],canBeTarget:true}],
    steps:[{label:"ρ=m/V",formula:"n0/n1",unit:"g/mL",dimension:"[M][L]⁻³",equationLatex:"\\rho = \\frac{m}{V}"}],
    clusterId:"solutions_core",difficultyLevel:1},

  { keyword:"beer_lambert", displayName:"A=εbc", subject:"chemistry",domain:"solutions",lane:"A",
    params:[{name:"ε",unit:"L/(mol·cm)",values:[50,100,200,500]},{name:"b",unit:"cm",values:[1,2],canBeTarget:false},{name:"c",unit:"M",values:[0.001,0.005,0.01,0.05]},{name:"A",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"A=εbc",formula:"n0*n1*n2",unit:"",dimension:"[1]",equationLatex:"A = \\varepsilon b c"}],
    clusterId:"solutions_core",difficultyLevel:2},

  // ==========================================================
  // END — 50 Chemistry Concepts
  // ==========================================================
];
