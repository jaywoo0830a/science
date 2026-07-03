# Chemiscript v2: Chemistry Calculation Retrieval Notation

> **"If you can calculate it, you have understood it."**
>
> Chemiscript extends Physcript for chemistry. Same philosophy: positional, zero-ceremony, rapid-fire retrieval.
> 213 vocabulary cards → ~200 calculable concepts.
> All equations render with $\KaTeX$.

---

## 1. Core Syntax

```
<concept> <pos1> <pos2> ... <posN>  [flags]
```

| Rule | Meaning |
|------|---------|
| **Positional** | Every concept has a fixed parameter order. Position *is* memory. |
| **`?` placeholder** | Marks the target variable. |
| **`>` bridge** | Chains two domains. Bridge variable is explicit: `>var`. |
| **`|` interleave** | Deliberately mixed concepts. Forces context-switching. |
| **No variable names** | `moles 25 50 ?` NOT `moles m=25 M=50 n=?`. The brain supplies the mapping. |

---

## 2. Operators — The Rule of 5

| # | Operator | Name | Syntax | Cognitive Action |
|:--:|:--:|------|------|------|
| 1 | `?` | target | `concept a ? c` | Identify unknown; compute |
| 2 | `>` | bridge | `conceptA params >var conceptB params` | Chain two domains via explicit bridge |
| 3 | `∝` | relation | `concept ∝ var k` | Proportional reasoning, comparison |
| 4 | `?>` | decide | `concept params ?> direction` | Threshold yes/no, spontaneity, direction |
| 5 | `@` | template | `@template params` | Special case (ICE, Hess, strong acid, etc.) |

### 2.1 `?` — Target Unknown (Lane A)

```
moles 25 50 ?       →  n = m/M = 25/50 = 0.500 mol
moles ? 50 0.5      →  m = n·M = 0.5×50 = 25 g
moles 25 ? 0.5      →  M = m/n = 25/0.5 = 50 g/mol
pH 0.001 ?          →  pH = −log(0.001) = 3.00
H_from_pH 3 ?       →  [H⁺] = 10⁻³ = 0.001 M
```

### 2.2 `>` — Cross-Domain Bridge

```
stoich_to_gas 5 65.4 1 1 >n_H2 gas_V 0.082 300 1 ! #
→ [A: stoich]   n_Zn = 5/65.4 = 0.0765 mol → n_H2 = 0.0765 mol
→ [B: gas]      V = nRT/P = 0.0765×0.082×300/1 = 1.88 L
→ Bridge: n_H2

combust_to_heat 2 16 890 500 4.184 >q heat_ΔT 500 4.184 0 ! #
→ [A: stoich]   n_CH4 = 2/16 = 0.125 mol → q = 0.125×890 = 111.25 kJ
→ [B: cal]      ΔT = q/(mc) = 111250/(500×4.184) = 53.2°C
→ Bridge: q

gibbs_to_K -200 300 0.15 >ΔG K_from_ΔG -155000 300 ! #
→ [A: thermo]   ΔG° = −200 − 300(−0.15) = −155 kJ/mol
→ [B: equil]    K = exp(−ΔG°/(RT)) = exp(155000/(8.314×300)) = 1.0×10²⁷
→ Bridge: ΔG°
```

### 2.3 `∝` — Proportional & Comparison Reasoning

```
# Proportional
vrms ∝ T 4           → v_rms ∝ √T, T×4 → v_rms ×2
graham_rate ∝ M 4    → rate ∝ 1/√M, M×4 → rate ×½
dilution_M ∝ V 2     → M ∝ 1/V, V×2 → M ×½
boyle_P ∝ V 0.5      → P ∝ 1/V, V×½ → P ×2
fp_dep ∝ m 3         → ΔT_f ∝ m, m×3 → ΔT_f ×3
bp_elev ∝ m 2        → ΔT_b ∝ m, m×2 → ΔT_b ×2
ideal_P ∝ T 2        → P ∝ T, T×2 → P ×2 (const V,n)
ideal_V ∝ n 3        → V ∝ n, n×3 → V ×3 (const T,P)

# Comparison
ka_compare 1e-3 1e-5 ∝   → K_a(1e-3) > K_a(1e-5) → first is stronger acid
bond_order 3 2 ∝         → triple > double → stronger + shorter
radius_trend Na+ F- ∝    → Na⁺ < F⁻ (isoelectronic, Na⁺ has higher Z)
rate_compare 0.1 0.01 ∝  → k₁ > k₂ → first reaction is faster
solubility_compare 1e-5 1e-10 ∝ → K_sp(1e-5) > K_sp(1e-10) → more soluble
```

### 2.4 `?>` — Threshold Decision

```
spontaneous_check -155 ?>     → ΔG° < 0 → YES, spontaneous
pH_neutral 6.8 ?>            → pH < 7 → acidic
equilibrium_Q 0.01 1e-5 ?>   → Q > K → shifts LEFT
precipitate 1e-6 1e-8 ?>     → Q > K_sp → YES, ppt forms
strong_acid_check HCl ?>     → YES, strong acid → [H⁺] = [HA]₀
first_order_check 0.693 0.02 ?> → t½ constant? → YES, 1st order
redox_spontaneous 1.10 ?>    → E° > 0 → YES, spontaneous
buffer_valid 0.5 0.3 ?>      → ratio 0.6 in 0.1-10? → YES
```

### 2.5 `@` — Template Application

```
# Special case recall + compute
@strong_acid_pH 0.01          → HCl, full dissociation → pH = 2.00
@strong_base_pH 0.01          → NaOH, full dissociation → pOH = 2.00, pH = 12.00
@buffer_max 4.74              → pH = pK_a when [HA] = [A⁻]
@half_equiv 4.74              → halfway to equivalence → pH = pK_a = 4.74
@equiv_strong 0.1 0.1         → strong acid + strong base → pH = 7.00
@dil_2x 6 0.1                 → 6M → diluted 2× → 3M
@stp_shortcut 2               → 2 mol gas at STP → V = 44.8 L
@nernst_298 1.10 2 0.01       → E = 1.10 − (0.0592/2)log(0.01) = 1.16 V
@alpha_decay 238 92           → ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He
@half_life_ratio 0.125        → N/N₀ = 0.125 = ⅛ → 3 half-lives elapsed

# ICE table (procedural template)
@ice 1.8e-5 0.1 0 1 1 1 1    → HA ⇌ H⁺ + A⁻
→ I(0.1,0,0), C(-x,+x,+x), E(0.1-x,x,x)
→ K = x²/(0.1−x) ≈ x²/0.1 → x = 1.34×10⁻³ → pH = 2.87

# Hess's Law
@hess -393.5 1 -285.8 2 -74.8 1 ! → CH₄ combustion
→ Σ nΔH_f(prod) = 1(−393.5) + 2(−285.8) = −965.1 kJ
→ ΔH = −965.1 − 1(−74.8) = −890.3 kJ
```

---

## 3. Flags — Unified System

| Flag | Name | Effect |
|------|------|--------|
| `!` | unit-check | Verify unit cancellation through the calculation chain. |
| `!!` | unit-all | Verify units on **every step**. |
| `#` | sig-fig check | Verify significant figures. |
| `!#` | unit+sigfig | Both checks. |
| `?@` | contract | **Recall positional contract only.** No calculation. |
| `!?` | error-detect | **Find the deliberate error** in notation or contract. |

### 3.1 `?@` — Contract Self-Check

```
moles ?@              → contract: (m, M, n)
pH ?@                 → contract: ([H⁺], pH)
ideal_gas_P ?@        → contract: (n, R, T, V, P)
buffer_pH ?@          → contract: (pKa, [A⁻], [HA], pH)
nernst ?@             → contract: (E°, n, Q, E)
electrolysis_mass ?@  → contract: (I, t, M, n, F, m)
stoich ?@             → contract: (m_A, M_A, cA, cB, M_B) → g→mol→ratio→mol→g
limiting ?@           → contract: (m_A, M_A, m_B, M_B, cA, cB) → compare n/coeff
```

### 3.2 `!?` — Error Detection

```
moles 25 ? 50 !?          → ERROR: moles contract=(m, M, n).
                             ? at pos2 = find M. M = m/n = 25/50 = 0.5 g/mol.
                             Wait—n=50 mol? For 25g that's impossibly large.
                             → Probably wrong units or the ? should be at pos3.

boyle 1 10 ? 5 !?         → Contract: (P₁, V₁, V₂, P₂). ? at pos3 = V₂.
                             But boyle is P₁V₁ = P₂V₂, so P₂ is the unknown.
                             → ERROR: ? is at V₂ position but problem gives V₂=5.
                             → Correct: boyle 1 10 5 ? (find P₂).

buffer_pH 4.74 0.5 ?> !?  → Contract: buffer_pH=(pKa, [A⁻], [HA], pH).
                             ?> is a decision operator, but buffer_pH needs 3 params + ?.
                             → ERROR: ?> doesn't belong on a calculation keyword.
                             → Correct: buffer_pH 4.74 0.5 ? 0.3 (find [HA]).
```

---

## 4. Lane A — Multi-Step Chains

### 4.1 Stoichiometric Bridge (`stoich`)

The universal 3-step path: $\text{g A} \xrightarrow{\div M_A} \text{mol A} \xrightarrow{\times \text{ratio}} \text{mol B} \xrightarrow{\times M_B} \text{g B}$

```
stoich 25 30 2 4 44 ! #
→ [1/3] n_A = 25/30 = 0.833 mol
→ [2/3] n_B = n_A × 4/2 = 1.667 mol
→ [3/3] m_B = 1.667×44 = 73.3 g
```

### 4.2 Limiting Reagent (`limiting`)

```
limiting 10 27 35 71 2 3 ! #
→ [1/4] n_Al = 10/27 = 0.370 mol
→ [2/4] n_Cl₂ = 35/71 = 0.493 mol
→ [3/4] n_Al/2 = 0.185, n_Cl₂/3 = 0.164 → Cl₂ LIMITING
→ [4/4] m_AlCl₃ = 0.493 × 2/3 × 133.3 = 43.8 g
```

### 4.3 ICE Table (`@ice`)

```
@ice 1.8e-5 0.1 0 1 1 1 1    → HA ⇌ H⁺ + A⁻
→ [1/3] ICE: I(0.1,0,0), C(-x,+x,+x), E(0.1-x,x,x)
→ [2/3] K = x²/(0.1−x) ≈ x²/0.1 → x = 1.34×10⁻³
→ [3/3] [H⁺]_eq = 1.34×10⁻³ M, pH = 2.87
```

---

## 5. Lane B — Flash Recall

```
stp             →  T=273 K, P=1 atm, V_m=22.4 L/mol
ideal_gas_def   →  PV = nRT
sealed          →  P₁V₁/T₁ = P₂V₂/T₂
boyle_law       →  P₁V₁ = P₂V₂ (const T)
charles_law     →  V₁/T₁ = V₂/T₂ (const P)
gay_lussac_law  →  P₁/T₁ = P₂/T₂ (const V)
dalton_law      →  P_total = Σ P_i
graham_law      →  r₁/r₂ = √(M₂/M₁)
exothermic      →  ΔH < 0, heat released
endothermic     →  ΔH > 0, heat absorbed
hess_law        →  ΔH_target = Σ ΔH_steps
spontaneous_g   →  ΔG < 0
at_equilibrium  →  Q=K, ΔG=0, forward rate = reverse rate
le_chatelier_T  →  ↑T: endo→right, exo→left
le_chatelier_P  →  ↑P: shifts to fewer gas moles
catalyst_effect →  Lowers E_a; ΔH,ΔG,K unchanged
strong_acid_list → HCl,HBr,HI,HNO₃,H₂SO₄,HClO₄
strong_base_list → LiOH,NaOH,KOH,RbOH,CsOH,Ca(OH)₂,Sr(OH)₂,Ba(OH)₂
oil_rig         →  Oxidation Is Loss, Reduction Is Gain
anode_ox        →  Anode = oxidation
cathode_red     →  Cathode = reduction
colligative_def →  Depends on PARTICLE NUMBER, not identity
standard_state  →  298 K, 1 atm, 1 M; ΔH_f° of elements = 0
excess_reagent  →  NOT limiting; amount irrelevant to theo yield
first_order_id  →  t½ constant, ln[A] vs t is linear
```

---

## 6. Lane C — Constants, Conversions

```
# Physical Constants
NA_avo          →  N_A = 6.022 × 10²³ mol⁻¹
R_gas_atm       →  R = 0.08206 L·atm/(mol·K)
R_gas_SI        →  R = 8.314 J/(mol·K)
F_faraday       →  F = 96,485 C/mol e⁻
c_water         →  c_w = 4.184 J/(g·K)
K_w_25C         →  K_w = 1.0 × 10⁻¹⁴ at 25°C
eV_to_J         →  1 eV = 1.602 × 10⁻¹⁹ J
eV_to_kJmol     →  1 eV/particle × 96.485 = kJ/mol

# Unit Conversions
C_to_K          →  T_K = T_C + 273.15
atm_to_Pa       →  1 atm = 101,325 Pa
atm_to_torr     →  1 atm = 760 torr
L_to_m3         →  1 L = 10⁻³ m³
mL_to_L         →  1 mL = 10⁻³ L = 1 cm³
J_to_cal        →  1 cal = 4.184 J
kJ_to_J         →  × 1000
amu_to_kg       →  1 u = 1.661 × 10⁻²⁷ kg
amu_to_MeV      →  1 u = 931.5 MeV/c²
angstrom_to_m   →  1 Å = 10⁻¹⁰ m
nm_to_m         →  1 nm = 10⁻⁹ m
pm_to_m         →  1 pm = 10⁻¹² m
g_cm3_to_kg_m3  →  × 1000
g_mol_to_kg_mol →  ÷ 1000
M_to_mol_L      →  1 M ≡ 1 mol/L
```

---

## 7. Full Concept Catalog — Lane A

### 7.1 Stoichiometry

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `moles` | `m M n` | $n = m/M$ | 1 |
| `particles` | `n N` | $N = n \cdot N_A$ | 1 |
| `stp_vol` | `n V` | $V = n \times 22.4$ | 1 |
| `percent_yield` | `actual theo %` | $\% = (\text{actual}/\text{theo}) \times 100$ | 1 |
| `percent_comp` | `m_elem M_cmpd %` | $\% = (m_{\text{elem}}/M_{\text{cmpd}}) \times 100$ | 1 |
| `percent_error` | `exp accepted %` | $\% = |\text{exp} - \text{acc}|/\text{acc} \times 100$ | 1 |
| `density_calc` | `m V ρ` | $\rho = m/V$ | 1 |
| `stoich` | `m_A M_A cA cB M_B` | g→mol→ratio→mol→g | 3 |
| `limiting` | `m_A M_A m_B M_B cA cB` | compare n/coeff, compute yield | 4 |
| `empirical_n` | `M_molec M_emp n` | $n = M_{\text{molecular}}/M_{\text{empirical}}$ | 1 |

### 7.2 Gases

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `ideal_gas_P` | `n R T V P` | $P = nRT/V$ | 1 |
| `ideal_gas_V` | `n R T P V` | $V = nRT/P$ | 1 |
| `ideal_gas_n` | `P V R T n` | $n = PV/(RT)$ | 1 |
| `boyle` | `P₁ V₁ V₂ P₂` | $P_2 = P_1 V_1/V_2$ | 1 |
| `charles` | `V₁ T₁ T₂ V₂` | $V_2 = V_1 T_2/T_1$ | 1 |
| `gay_lussac` | `P₁ T₁ T₂ P₂` | $P_2 = P_1 T_2/T_1$ | 1 |
| `combined_gas` | `P₁ V₁ T₁ P₂ V₂ T₂` | $P_1V_1/T_1 = P_2V_2/T_2$ | 1 |
| `dalton` | `P₁ P₂ P₃ P_tot` | $P_{\text{tot}} = \Sigma P_i$ | 1 |
| `mole_frac` | `n_A n_tot X_A` | $X_A = n_A/n_{\text{tot}}$ | 1 |
| `partial_p` | `X_A P_tot P_A` | $P_A = X_A P_{\text{tot}}$ | 1 |
| `graham` | `M₁ M₂ ratio` | $\text{rate}_1/\text{rate}_2 = \sqrt{M_2/M_1}$ | 1 |
| `vrms` | `R T M v` | $v_{\text{rms}} = \sqrt{3RT/M}$ | 1 |
| `avg_KE_gas` | `T K_avg` | $\bar{K} = \frac{3}{2}k_B T$ | 1 |
| `dry_gas` | `P_tot P_H2O P_dry` | $P_{\text{dry}} = P_{\text{tot}} - P_{\text{H₂O}}$ | 1 |
| `avogadro_law` | `V₁ n₁ V₂ n₂` | $V_1/n_1 = V_2/n_2$ | 1 |

### 7.3 Thermochemistry

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `heat` | `m c ΔT q` | $q = mc\Delta T$ | 1 |
| `heat_cap` | `C ΔT q` | $q = C\Delta T$ | 1 |
| `molar_heat` | `n C_m ΔT q` | $q = nC_m\Delta T$ | 1 |
| `latent_heat` | `m L q` | $q = mL$ | 1 |
| `calorimetry` | `m c ΔT q` | $q_{\text{soln}} + q_{\text{rxn}} = 0$ | 2 |
| `bomb_cal` | `C_cal ΔT q` | $q_{\text{rxn}} = -C_{\text{cal}}\Delta T$ | 1 |
| `delta_H_form` | `ΔH₁ c1 ΔH₂ c2 ΔH₃ c3` | $\Sigma n\Delta H_f^\circ(\text{prod}) - \Sigma n\Delta H_f^\circ(\text{reac})$ | 2 |
| `bond_energy` | `sum_broken sum_formed ΔH` | $\Delta H \approx \Sigma\text{BE(broken)} - \Sigma\text{BE(formed)}$ | 1 |
| `gibbs` | `ΔH T ΔS ΔG` | $\Delta G = \Delta H - T\Delta S$ | 1 |
| `gibbs_nonstd` | `ΔG° R T Q ΔG` | $\Delta G = \Delta G^\circ + RT\ln Q$ | 1 |
| `gibbs_to_K` | `ΔG° T K` | $K = e^{-\Delta G^\circ/(RT)}$ | 1 |
| `crossover_T` | `ΔH ΔS T` | $T = \Delta H/\Delta S$ | 1 |
| `entropy_rxn` | `S₁ c1 S₂ c2 S₃ c3 ΔS` | $\Sigma nS^\circ(\text{prod}) - \Sigma nS^\circ(\text{reac})$ | 2 |

### 7.4 Kinetics

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `rate_0order` | `[A]₀ k t [A]` | $[A] = [A]_0-kt$ | 1 |
| `rate_1order` | `[A]₀ k t [A]` | $\ln[A] = \ln[A]_0-kt$ | 1 |
| `rate_2order` | `[A]₀ k t [A]` | $1/[A] = 1/[A]_0 + kt$ | 1 |
| `halflife_0th` | `[A]₀ k t½` | $t_{1/2} = [A]_0/(2k)$ | 1 |
| `halflife_1st` | `k t½` | $t_{1/2} = 0.693/k$ | 1 |
| `halflife_2nd` | `k [A]₀ t½` | $t_{1/2} = 1/(k[A]_0)$ | 1 |
| `arrhenius` | `A E_a R T k` | $k = A e^{-E_a/(RT)}$ | 1 |
| `arrhenius_2pt` | `k₁ k₂ T₁ T₂ R Ea` | $\ln(k_2/k_1) = (E_a/R)(1/T_1-1/T_2)$ | 1 |
| `rate_order_find` | `R₁ R₂ [A]₁ [A]₂ m` | $(R_2/R_1) = ([A]_2/[A]_1)^m$ | 1 |

### 7.5 Equilibrium

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `Kc_expr` | (conceptual — products/reactants) | $K_c = [\text{C}]^c[\text{D}]^d/([\text{A}]^a[\text{B}]^b)$ | 1 |
| `Kp_from_Kc` | `K_c R T Δn K_p` | $K_p = K_c(RT)^{\Delta n}$ | 1 |
| `reaction_Q` | (conceptual — same form as K) | $Q$ vs $K$: Q<K→forward, Q>K→reverse | 1 |

### 7.6 Acids & Bases

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `pH` | `[H⁺] pH` | $\mathrm{pH} = -\log[\mathrm{H}^+]$ | 1 |
| `H_from_pH` | `pH [H⁺]` | $[\mathrm{H}^+] = 10^{-\mathrm{pH}}$ | 1 |
| `pOH` | `[OH⁻] pOH` | $\mathrm{pOH} = -\log[\mathrm{OH}^-]$ | 1 |
| `pH_from_pOH` | `pOH pH` | $\mathrm{pH} = 14 - \mathrm{pOH}$ | 1 |
| `weak_acid_pH` | `K_a [HA]₀ pH` | $[\mathrm{H}^+] = \sqrt{K_a[\mathrm{HA}]_0}$ | 2 |
| `weak_base_pH` | `K_b [B]₀ pH` | $[\mathrm{OH}^-] = \sqrt{K_b[\mathrm{B}]_0}$, pOH→pH | 3 |
| `percent_ioniz` | `[H⁺]_eq [HA]₀ %` | $\% = ([\mathrm{H}^+]_{\text{eq}}/[\mathrm{HA}]_0) \times 100$ | 1 |
| `buffer_pH` | `pKa [A⁻] [HA] pH` | $\mathrm{pH} = \mathrm{p}K_a + \log([\mathrm{A}^-]/[\mathrm{HA}])$ | 1 |
| `Kb_from_Ka` | `K_w K_a K_b` | $K_b = K_w/K_a$ | 1 |
| `Ka_from_Kb` | `K_w K_b K_a` | $K_a = K_w/K_b$ | 1 |
| `pKa` | `K_a pKa` | $\mathrm{p}K_a = -\log K_a$ | 1 |

### 7.7 Electrochemistry

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `ecell` | `E°_cath E°_an E°` | $E^\circ_{\text{cell}} = E^\circ_{\text{cath}} - E^\circ_{\text{an}}$ | 1 |
| `deltaG_E` | `n F E° ΔG°` | $\Delta G^\circ = -nFE^\circ$ | 1 |
| `nernst` | `E° n Q E` | $E = E^\circ - (0.0592/n)\log Q$ | 1 |
| `electrolysis_mass` | `I t M n F m` | $m = ItM/(nF)$ | 1 |
| `charge_Q` | `I t Q` | $Q = It$ | 1 |

### 7.8 Solutions

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `molarity` | `n V M` | $M = n/V$ | 1 |
| `molality` | `n kg m` | $m = n/\text{kg}_{\text{solv}}$ | 1 |
| `dilution` | `M₁ V₁ V₂ M₂` | $M_1V_1 = M_2V_2$ | 1 |
| `bp_elevation` | `i K_b m ΔT_b` | $\Delta T_b = iK_b m$ | 1 |
| `fp_depression` | `i K_f m ΔT_f` | $\Delta T_f = iK_f m$ | 1 |
| `osmotic_p` | `i M R T Π` | $\Pi = iMRT$ | 1 |
| `mole_frac_sol` | `n_A n_tot X_A` | $X_A = n_A/n_{\text{tot}}$ | 1 |
| `raoult` | `X_A P°_A P_A` | $P_A = X_A P^\circ_A$ | 1 |
| `mass_percent` | `m_solute m_soln %` | $\% = (m_{\text{solute}}/m_{\text{soln}}) \times 100$ | 1 |
| `ppm` | `m_solute m_soln ppm` | $\text{ppm} = (m_{\text{solute}}/m_{\text{soln}}) \times 10^6$ | 1 |

### 7.9 Nuclear

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `halflife_n` | `N₀ n N` | $N = N_0/2^n$ | 1 |
| `halflife_t` | `λ t½` | $t_{1/2} = 0.693/\lambda$ | 1 |
| `decay_N` | `N₀ λ t N` | $N = N_0 e^{-\lambda t}$ | 1 |
| `activity_A` | `λ N A` | $A = \lambda N$ | 1 |
| `binding_E` | `Δm E_B` | $E_B = \Delta m \cdot c^2$ | 1 |

### 7.10 Laboratory

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `beer_lambert` | `ε b c A` | $A = \varepsilon b c$ | 1 |

---

## 8. Cross-Domain Bridge Catalog

| Keyword | Params | Domain A → Bridge → Domain B |
|---------|--------|------------------------------|
| `stoich_to_gas` | `m_A M_A cA cB P T` | stoich → **n_gas** → $V = nRT/P$ |
| `stoich_to_stp` | `m_A M_A cA cB` | stoich → **n_gas** → $V = n\times 22.4$ |
| `limit_to_gas` | `m_A M_A m_B M_B cA cB P T` | limiting → **n_gas** → $V = nRT/P$ |
| `combust_to_heat` | `m_fuel M_fuel ΔH_comb m_water ΔT` | stoich → **q** → $q = mc\Delta T$ |
| `gibbs_to_K` | `ΔH ΔS T` | $\Delta G^\circ = \Delta H - T\Delta S$ → $K = e^{-\Delta G^\circ/(RT)}$ |
| `gibbs_to_Ecell` | `ΔH ΔS T n` | $\Delta G^\circ$ → $E^\circ = -\Delta G^\circ/(nF)$ |
| `Ecell_to_K` | `E° n` | $E^\circ$ → $K = e^{nFE^\circ/(RT)}$ |
| `Ka_to_buffer` | `K_a [HA] [A⁻]` | $\mathrm{p}K_a = -\log K_a$ → $\mathrm{pH} = \mathrm{p}K_a + \log([\mathrm{A}^-]/[\mathrm{HA}])$ |
| `titration_to_Ka` | `pH_half` | $\mathrm{pH} = \mathrm{p}K_a$ at half-equiv → $K_a = 10^{-\mathrm{pH}}$ |
| `rate_to_halflife` | `k order [A]₀` | $k \to t_{1/2}$ (formula depends on order) |
| `arrhenius_to_Ea` | `k₁ k₂ T₁ T₂` | $\ln(k_2/k_1) = (E_a/R)(1/T_1-1/T_2)$ |
| `deltaG_to_K_bridge` | `ΔG° T` | $\Delta G^\circ = -RT\ln K$ → K |
| `thermo_to_equil` | `ΔH° ΔS° T` | $\Delta G^\circ$ → $K$ |

---

## 9. Interleaving — The `|` Separator

```
# Within-domain interleave
moles 25 50 ? | pH 0.001 ? | ideal_gas_P 2 0.082 300 10 ? | heat 100 4.184 25 ?

# Cross-domain interleave
moles 25 50 ? | nernst 1.10 2 0.01 ? | halflife_1st 0.02 ? | dilution 6 0.1 1 ?

# Operator interleave
moles 25 50 ? | spontaneous_check -155 ?> | vrms ∝ T 4 | @strong_acid_pH 0.01

# Bridge interleave
stoich_to_stp 5 65.4 1 1 ! |
gibbs_to_K -200 300 0.15 ! |
combust_to_heat 2 16 890 500 4.184 >q heat_ΔT 500 4.184 0 !
```

---

## 10. Progressive Difficulty — Implicit Levels

| Level | Pattern | Example | Cognitive Load |
|:-----:|------|------|:---:|
| L1 | `?` at last position | `moles 25 50 ?` | Lowest — direct substitution |
| L2 | `?` at middle position | `moles 25 ? 0.5` | Medium — algebraic rearrangement |
| L3 | `?` at first position | `moles ? 50 0.5` | High — inverse relation |
| L4 | Multi-step chain | `stoich 25 30 2 4 44 !` | Higher — sequential computation |
| L5 | Bridge + all flags | `stoich_to_gas 5 65.4 1 1 0.082 300 !! #` | Maximum — cross-domain + meta-checks |

---

## 11. Quick Reference

```
# === Single calc ===
moles 25 50 ?                 → n = 0.500 mol
pH 0.001 ?                    → pH = 3.00

# === Stoichiometric bridge ===
stoich 25 30 2 4 44 ! #       → g→mol→ratio→mol→g

# === Limiting reagent ===
limiting 10 27 35 71 2 3 ! #  → n/coeff compare → Cl₂ limiting

# === ICE table ===
@ice 1.8e-5 0.1 0 1 1 1 1    → [H⁺] = 1.34×10⁻³, pH = 2.87

# === Hess's Law ===
@hess -393.5 1 -285.8 2 -74.8 1 ! → ΔH = −890.3 kJ

# === Contract recall (no calc) ===
moles ?@                      → (m, M, n)
buffer_pH ?@                  → (pKa, [A⁻], [HA], pH)

# === Error detection ===
moles 25 ? 50 !?              → Check: is n=50 plausible for 25g?

# === Flash recall ===
stp !                         → T=273K, P=1atm, V_m=22.4
at_equilibrium !              → Q=K, ΔG=0

# === Constant ===
NA_avo                        → 6.022×10²³
c_water                       → 4.184 J/(g·K)

# === Bridge (explicit var) ===
stoich_to_stp 5 65.4 1 1 ! #  → grams Zn → L H₂ at STP
gibbs_to_K -200 300 0.15 !    → ΔG° → K

# === Proportional ===
vrms ∝ T 4                    → T×4 → v×2
graham_rate ∝ M 4             → M×4 → rate×½

# === Threshold ===
spontaneous_check -155 ?>     → ΔG° < 0 → YES
precipitate 1e-6 1e-8 ?>     → Q > K_sp → YES

# === Template ===
@strong_acid_pH 0.01          → pH = 2.00
@half_equiv 4.74              → pH = pK_a = 4.74

# === Comparison ===
ka_compare 1e-3 1e-5 ∝        → 1e-3 > 1e-5 → stronger acid
bond_order 3 2 ∝              → triple > double

# === Interleaved practice ===
moles 25 50 ? | pH 0.001 ? | heat 100 4.184 25 ? | vrms ∝ T 2
```

---

## 12. Card Coverage

| Lane / Operator | Card Count | Method |
|------|:---:|--------|
| A (single-step) | ~90 | `concept a b ?` |
| A (multi-step chain) | ~15 | `stoich`, `limiting`, `@ice`, `@hess` |
| B (trigger → equation) | ~35 | `trigger !` |
| C (constants) | ~10 | `constant !` |
| C (conversions) | ~17 | `conversion !` |
| Bridge (`>`) | ~13 | `conceptA >var conceptB` |
| `∝` (relation) | ~15 | `concept ∝ var k` or `concept params ∝` |
| `?>` (decide) | ~15 | `concept params ?> direction` |
| `@` (template) | ~18 | `@template params` |
| `?@` (contract) | ~50 | `concept ?@` |
| `!?` (error detect) | any | `... !?` |
| **Total trainable** | **~206** | |

> 213 original cards. ~206 are directly trainable with Chemiscript v2 (97%).
> The remaining ~7 are pure qualitative/descriptive cards (quantum numbers definition, VSEPR shape naming, Lenz's law, organic functional group recognition, etc.).

---

> **"If you can calculate it, you have understood it."**
>
> Chemiscript v2 is your chemistry reflex trainer. One line = one concept.
> Five operators cover every cognitive action. `?@` keeps your contracts sharp.
> `!?` teaches you to spot errors before they happen on the exam.
> Use `|` to mix stoichiometry with thermodynamics with kinetics — just like the real exam.
> The equation should be on the page before you finish reading the problem.
