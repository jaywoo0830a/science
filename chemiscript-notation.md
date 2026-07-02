# Chemiscript: Chemistry Calculation Retrieval Notation

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
| **No variable names** | `moles 25 50 ?` NOT `moles m=25 M=50 n=?`. |

---

## 2. Flags (inherited from Physcript)

| Flag | Name | Effect |
|------|------|--------|
| `!` | unit-check | Verify unit cancellation through the calculation chain. |
| `!!` | unit-all | Verify units on **every step**. |
| `~` | sig-fig check | Verify significant figures. |
| `!~` | unit+sigfig | Both checks. |

---

## 3. Lane A — Positional Calculation

### 3.1 Single-Step

```
moles 25 50 ?       →  n = m/M = 25/50 = 0.500 mol
moles ? 50 0.5      →  m = n·M = 0.5×50 = 25 g
moles 25 ? 0.5      →  M = m/n = 25/0.5 = 50 g/mol
```

**Stoichiometry:**

```
moles 25 50 ?       →  n = 25/50 = 0.500 mol
particles 0.5 ?     →  N = 0.5 × 6.022×10²³ = 3.011×10²³
stp_vol 2 ?         →  V = 2 × 22.4 = 44.8 L
percent_yield 38 43.9 ? → 38/43.9 × 100 = 86.6%
percent_comp 12 44 ?    → (12/44)×100 = 27.3% C in CO₂
density_calc 10 5 ?     → ρ = 10/5 = 2.0 g/mL
percent_error 42.5 40.0 ? → |42.5−40|/40 × 100 = 6.25%
beer_lambert 200 1 0.001 ? → A = 200×1×0.001 = 0.200
```

**Gases:**

```
ideal_gas_P 2 0.082 300 10 ?  → P = nRT/V = 2×0.082×300/10 = 4.92 atm
ideal_gas_V 1 0.082 273 1 ?   → V = 1×0.082×273/1 = 22.4 L
ideal_gas_n 2 5 0.082 300 ?   → n = PV/(RT) = 2×5/(0.082×300) = 0.407 mol
boyle 1 10 5 ?                → P₂ = 1×10/5 = 2 atm
charles 5 273 546 ?           → V₂ = 5×546/273 = 10 L
gay_lussac 1 273 546 ?        → P₂ = 1×546/273 = 2 atm
dalton 1.5 2.0 3.5 ?          → P_total = 1.5+2.0+3.5 = 7.0 atm
mole_frac 2 8 ?               → X_A = 2/8 = 0.25
partial_p 0.25 4 ?            → P_A = 0.25×4 = 1.0 atm
graham 32 2 ?                 → r₁/r₂ = √(2/32) = 0.25 (or r₂/r₁ = 4)
vrms 8.314 300 0.032 ?        → v = √(3×8.314×300/0.032) = 483 m/s
avg_KE_gas 300 ?              → K̄ = ³⁄₂ × 1.38×10⁻²³ × 300 = 6.21×10⁻²¹ J
```

**Thermochemistry:**

```
heat 100 4.184 25 ?           → q = 100×4.184×25 = 10,460 J = 10.5 kJ
heat_cap 500 15 ?             → q = 500×15 = 7,500 J
molar_heat 2 75 10 ?          → q = 2×75×10 = 1,500 J
calorimetry 100 4.184 6.9 ?   → q_soln = 2887 J
delta_H_form -393.5 -285.8 -74.8 ? → ΔH = [-393.5+2(-285.8)]−[-74.8] = −890.3 kJ
gibbs -200 300 -0.15 ?        → ΔG = −200 − 300(−0.15) = −155 kJ ✓
gibbs_K 50000 300 ?           → K = exp(−ΔG°/(RT))
crossover_T -200 -0.15 ?      → T = −200/(−0.15) = 1333 K
```

**Kinetics:**

```
rate_0order 0.1 0.01 30 ?     → [A] = 0.1 − 0.01×30 = −0.2 (depleted earlier)
rate_1order 0.1 0.02 30 ?     → ln[A] = ln(0.1) − 0.02×30 → [A] = 0.0549 M
halflife_1st 0.02 ?           → t₁/₂ = 0.693/0.02 = 34.7 s
halflife_2nd 0.02 0.1 ?       → t₁/₂ = 1/(0.02×0.1) = 500 s
arrhenius_2pt 1e-4 1e-3 300 350 8.314 ? → E_a from ln(k₂/k₁)
```

**Acids & Bases:**

```
pH 0.001 ?                    → pH = −log(0.001) = 3.00
H_from_pH 3 ?                 → [H⁺] = 10⁻³ = 0.001 M
pOH 0.0001 ?                  → pOH = −log(0.0001) = 4.00
pH_from_pOH 4 ?               → pH = 14−4 = 10.00
weak_acid_pH 1.8e-5 0.1 ?     → [H⁺] = √(1.8e-5×0.1) = 1.34×10⁻³, pH=2.87
weak_base_pH 1.8e-5 0.1 ?     → [OH⁻] = √(1.8e-5×0.1) = 1.34×10⁻³, pOH=2.87, pH=11.13
percent_ioniz 0.00134 0.1 ?   → (0.00134/0.1)×100 = 1.34%
buffer_pH 4.74 0.5 0.3 ?      → pH = 4.74 + log(0.3/0.5) = 4.52
Kb_from_Ka 1e-14 1.8e-5 ?     → K_b = 10⁻¹⁴/1.8×10⁻⁵ = 5.56×10⁻¹⁰
```

**Electrochemistry:**

```
ecell 0.34 -0.76 ?             → E° = 0.34−(−0.76) = 1.10 V
deltaG_E 2 1.10 ?              → ΔG° = −2×96485×1.10 = −212 kJ/mol
nernst 1.10 2 0.01 ?           → E = 1.10 − (0.0592/2)log(0.01) = 1.16 V
electrolysis_mass 2 3600 63.5 2 ? → m = 2×3600×63.5/(2×96485) = 2.37 g
charge_Q 2 3600 ?              → Q = 2×3600 = 7200 C
```

**Solutions:**

```
molarity 0.5 2 ?               → M = 0.5/2 = 0.25 mol/L
molality 0.5 1 ?               → m = 0.5/1 = 0.5 mol/kg
dilution 6 0.1 1 ?             → M₂ = 6×0.1/1 = 0.6 M (or V₂ = 0.6 L if V unknown)
bp_elevation 2 0.512 0.5 ?     → ΔT_b = 2×0.512×0.5 = 0.512°C
fp_depression 2 1.86 0.5 ?     → ΔT_f = 2×1.86×0.5 = 1.86°C
osmotic_p 2 0.5 0.082 300 ?    → Π = 2×0.5×0.082×300 = 24.6 atm
```

**Nuclear:**

```
halflife 1000 3 ?              → N = 1000/8 = 125
halflife_time 0.693 0.01 ?     → t₁/₂ = 0.693/0.01 = 69.3 s
activity 0.01 1e20 ?           → A = 0.01×10²⁰ = 10¹⁸ Bq
```

---

### 3.2 Multi-Step Chains — Chemistry Specific

#### `→→` — The Stoichiometric Bridge (Card 10)

The universal 3-step path: $\text{g A} \xrightarrow{\div M_A} \text{mol A} \xrightarrow{\times \text{ratio}} \text{mol B} \xrightarrow{\times M_B} \text{g B}$

```
Syntax:  stoich <m_A> <M_A> <coeff_A> <coeff_B> <M_B>

stoich 25 30 2 4 44 !        → grams C₂H₆ → moles → ratio → moles CO₂ → grams CO₂
→ [1/3] n_A = 25/30 = 0.833 mol
→ [2/3] n_B = n_A × 4/2 = 1.667 mol
→ [3/3] m_B = 1.667×44 = 73.3 g
→ [!] g → mol → mol → g ✓
```

```
stoich_gas 5 65.4 1 1 22.4 !  → grams Zn → moles → ratio → moles H₂ → L at STP
→ [1/3] n_Zn = 5/65.4 = 0.0765 mol
→ [2/3] n_H₂ = 0.0765 × 1/1 = 0.0765 mol
→ [3/3] V = 0.0765 × 22.4 = 1.71 L
→ [!] g → mol → mol → L ✓
```

#### `//` — Limiting Reagent (Card 11)

Compare two reactants on an equal footing: divide $n$ by coefficient. Smallest wins.

```
Syntax:  limiting <m_A> <M_A> <m_B> <M_B> <coeff_A> <coeff_B>

limiting 10 27 35 71 2 3 !   → Al vs Cl₂
→ [1/4] n_Al = 10/27 = 0.370 mol
→ [2/4] n_Cl₂ = 35/71 = 0.493 mol
→ [3/4] n_Al/2 = 0.185, n_Cl₂/3 = 0.164 → Cl₂ LIMITING
→ [4/4] m_AlCl₃ = 0.493 × 2/3 × 133.3 = 43.8 g
→ [!] Decision: Cl₂ is limiting ✓
```

```
limiting_gas 10 27 35 71 2 3 0.082 300 5 !  → limiting → gas pressure
→ [1/4] (same as above: Cl₂ limiting)
→ [bridge: n_gas = n_AlCl₃_produced? no—gas from reaction]
→ [5/6] n_product_gas = ...
→ [6/6] P = nRT/V
```

#### `@ice` — ICE Table (Cards 93-95)

ICE tables are procedural by nature, but the core computation can be captured:

```
Syntax:  @ice <K> <[A]_0> <[B]_0> <coeff_A> <coeff_B> <coeff_C> <coeff_D>

@ice 1.8e-5 0.1 0 1 1 1 1 → HA ⇌ H⁺ + A⁻
→ [1/3] ICE: I(0.1,0,0), C(-x,+x,+x), E(0.1-x,x,x)
→ [2/3] K = x²/(0.1−x) ≈ x²/0.1 → x = 1.34×10⁻³
→ [3/3] [H⁺]_eq = 1.34×10⁻³ M, pH = 2.87
```

#### `@hess` — Hess's Law (Card 43)

```
Syntax:  @hess <ΔH_f_prod1> <coeff1> <ΔH_f_prod2> <coeff2> <ΔH_f_reac1> <coeff3>

@hess -393.5 1 -285.8 2 -74.8 1 ! → combustion of CH₄
→ [1/2] Σ nΔH_f(prod) = 1(−393.5) + 2(−285.8) = −965.1 kJ
→ [2/2] ΔH = −965.1 − 1(−74.8) = −890.3 kJ
→ [!] kJ → kJ ✓
```

---

### 3.3 Extended Operators

#### `∝` — Proportional Reasoning

```
vrms ∝ T 4           → v_rms ∝ √T, T×4 → v_rms ×2
graham_rate ∝ M 4    → rate ∝ 1/√M, M×4 → rate ×½
dilution_M ∝ V 2     → M ∝ 1/V, V×2 → M ×½
boyle_P ∝ V 0.5      → P ∝ 1/V, V×½ → P ×2
fp_dep ∝ m 3         → ΔT_f ∝ m, m×3 → ΔT_f ×3 (×i factor)
```

#### `?>` — Threshold Decision

```
spontaneous 0.5 ?>        → Q=0.5 < K? → direction
pH_neutral 6.8 ?>         → pH < 7 → acidic, pH > 7 → basic
equilibrium_Q 0.01 1e-5 ?> → Q=0.01 > K → shifts LEFT
precipitate 1e-6 1e-8 ?>  → Q=1e-6 > K_sp=1e-8 → YES, ppt forms
strong_acid_check HCl ?>   → YES, strong acid → [H⁺]=[HA]₀
first_order_check 0.693 0.02 ?> → t₁/₂=34.7s, constant? → YES, 1st order
```

#### `@special` — Special Case Recall

```
@special strong_acid_pH 0.01    → HCl, full dissociation → pH = 2.00
@special strong_base_pH 0.01    → NaOH, full dissociation → pOH = 2.00, pH=12.00
@special buffer_max 4.74        → pH = pK_a when [HA]=[A⁻]
@special half_equiv 4.74        → halfway to equivalence → pH = pK_a = 4.74
@special equiv_strong 0.1 0.1   → strong acid + strong base → pH = 7.00
@special dil_2x 6 0.1           → 6M → diluted 2× → 3M
@special stp_shortcut 2         → 2 mol gas at STP → V = 44.8 L
@special nernst_298 1.10 2 0.01 → E = 1.10 − (0.0592/2)log(0.01) = 1.16 V
@special alpha_decay 238 92     → ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He
@special half_life_ratio 0.125  → N/N₀=0.125=⅛ → 3 half-lives elapsed
```

#### `<=>` — Comparison

```
ka_compare 1e-3 1e-5     → K_a(1e-3) > K_a(1e-5) → first is stronger acid
bond_order 3 2            → triple > double → stronger + shorter
radius_trend Na+ F-       → Na⁺ < F⁻ (isoelectronic, Na⁺ has higher Z)
rate_compare 0.1 0.01     → k₁ > k₂ → first reaction is faster
solubility_compare 1e-5 1e-10 → K_sp(1e-5) > K_sp(1e-10) → more soluble
```

---

## 4. Lane B — Flash Recall

```
Syntax:  <trigger_keyword> [flags]

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
first_order_id  →  t₁/₂ constant, ln[A] vs t is linear
```

---

## 5. Lane C — Constants, Conversions

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

## 6. Lane Bridge — Cross-Domain Chains (`>`)

```
Syntax:  <conceptA> <params> > <conceptB> <params>  [flags]
```

### Bridge Catalog

| Keyword | Params | Chain |
|---------|--------|-------|
| `stoich_to_gas` | `m_A M_A cA cB P T` | stoich $\to$ **n_gas** $\to$ $V = nRT/P$ |
| `stoich_to_stp` | `m_A M_A cA cB` | stoich $\to$ **n_gas** $\to$ $V = n\times 22.4$ |
| `limit_to_gas` | `m_A M_A m_B M_B cA cB P T` | limiting $\to$ **n_gas** $\to$ $V = nRT/P$ |
| `combust_to_heat` | `m_fuel M_fuel ΔH_comb m_water ΔT` | stoich $\to$ **q** $\to$ $q = mc\Delta T$ |
| `gibbs_to_K` | `ΔH ΔS T` | $\Delta G^\circ = \Delta H - T\Delta S$ $\to$ $K = e^{-\Delta G^\circ/(RT)}$ |
| `gibbs_to_Ecell` | `ΔH ΔS T n` | $\Delta G^\circ$ $\to$ $E^\circ = -\Delta G^\circ/(nF)$ |
| `Ecell_to_K` | `E° n` | $E^\circ$ $\to$ $K = e^{nFE^\circ/(RT)}$ |
| `Ka_to_buffer` | `K_a [HA] [A⁻]` | $\mathrm{p}K_a = -\log K_a$ $\to$ $\mathrm{pH} = \mathrm{p}K_a + \log([\mathrm{A}^-]/[\mathrm{HA}])$ |
| `titration_to_Ka` | `pH_half` | $\mathrm{pH} = \mathrm{p}K_a$ at half-equiv $\to$ $K_a = 10^{-\mathrm{pH}}$ |
| `rate_to_halflife` | `k order [A]₀` | $k \to t_{1/2}$ (formula depends on order) |
| `arrhenius_to_Ea` | `k₁ k₂ T₁ T₂` | $\ln(k_2/k_1) = (E_a/R)(1/T_1-1/T_2)$ |

### Bridge Example

```
stoich_to_stp 5 65.4 1 1 ! ~

  Domain A — Stoichiometry:
    [1/3] n_Zn = 5/65.4 = 0.0765 mol
    [2/3] n_H₂ = n_Zn × 1/1 = 0.0765 mol

  ── Bridge: n_H₂ → gas volume at STP ──

  Domain B — Gas:
    [3/3] V = 0.0765 × 22.4 = 1.71 L

  [!] g → mol → mol → L ✓
  [~] 3 SF → 3 SF ✓
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

### 7.3 Thermochemistry

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `heat` | `m c ΔT q` | $q = mc\Delta T$ | 1 |
| `heat_cap` | `C ΔT q` | $q = C\Delta T$ | 1 |
| `molar_heat` | `n C_m ΔT q` | $q = nC_m\Delta T$ | 1 |
| `calorimetry` | `m c ΔT q` | $q_{\text{soln}} + q_{\text{rxn}} = 0$ | 2 |
| `delta_H_form` | `ΔH₁ c1 ΔH₂ c2 ΔH₃ c3` | $\Sigma n\Delta H_f^\circ(\text{prod}) - \Sigma n\Delta H_f^\circ(\text{reac})$ | 2 |
| `bond_energy` | `sum_broken sum_formed ΔH` | $\Delta H \approx \Sigma\text{BE(broken)} - \Sigma\text{BE(formed)}$ | 1 |
| `gibbs` | `ΔH T ΔS ΔG` | $\Delta G = \Delta H - T\Delta S$ | 1 |
| `gibbs_to_K` | `ΔG° T K` | $K = e^{-\Delta G^\circ/(RT)}$ | 1 |
| `crossover_T` | `ΔH ΔS T` | $T = \Delta H/\Delta S$ | 1 |

### 7.4 Kinetics

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `rate_0order` | `[A]₀ k t [A]` | $[A] = [A]_0-kt$ | 1 |
| `rate_1order` | `[A]₀ k t [A]` | $\ln[A] = \ln[A]_0-kt$ | 1 |
| `halflife_1st` | `k t½` | $t_{1/2} = 0.693/k$ | 1 |
| `halflife_2nd` | `k [A]₀ t½` | $t_{1/2} = 1/(k[A]_0)$ | 1 |
| `arrhenius_2pt` | `k₁ k₂ T₁ T₂ R Ea` | $\ln(k_2/k_1) = (E_a/R)(1/T_1-1/T_2)$ | 1 |
| `rate_order_find` | `R₁ R₂ [A]₁ [A]₂ m` | $(R_2/R_1) = ([A]_2/[A]_1)^m$ | 1 |

### 7.5 Acids & Bases

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `pH` | `[H⁺] pH` | $\mathrm{pH} = -\log[\mathrm{H}^+]$ | 1 |
| `H_from_pH` | `pH [H⁺]` | $[\mathrm{H}^+] = 10^{-\mathrm{pH}}$ | 1 |
| `pOH` | `[OH⁻] pOH` | $\mathrm{pOH} = -\log[\mathrm{OH}^-]$ | 1 |
| `pH_from_pOH` | `pOH pH` | $\mathrm{pH} = 14 - \mathrm{pOH}$ | 1 |
| `weak_acid_pH` | `K_a [HA]₀ pH` | $[\mathrm{H}^+] = \sqrt{K_a[\mathrm{HA}]_0}$ | 2 |
| `weak_base_pH` | `K_b [B]₀ pH` | $[\mathrm{OH}^-] = \sqrt{K_b[\mathrm{B}]_0}$ | 3 |
| `percent_ioniz` | `[H⁺]_eq [HA]₀ %` | $\% = ([\mathrm{H}^+]_{\text{eq}}/[\mathrm{HA}]_0) \times 100$ | 1 |
| `buffer_pH` | `pKa [A⁻] [HA] pH` | $\mathrm{pH} = \mathrm{p}K_a + \log([\mathrm{A}^-]/[\mathrm{HA}])$ | 1 |
| `Kb_from_Ka` | `K_w K_a K_b` | $K_b = K_w/K_a$ | 1 |

### 7.6 Electrochemistry

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `ecell` | `E°_cath E°_an E°` | $E^\circ_{\text{cell}} = E^\circ_{\text{cath}} - E^\circ_{\text{an}}$ | 1 |
| `deltaG_E` | `n F E° ΔG°` | $\Delta G^\circ = -nFE^\circ$ | 1 |
| `nernst` | `E° n Q E` | $E = E^\circ - (0.0592/n)\log Q$ | 1 |
| `electrolysis_mass` | `I t M n F m` | $m = ItM/(nF)$ | 1 |
| `charge_Q` | `I t Q` | $Q = It$ | 1 |

### 7.7 Solutions

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

### 7.8 Nuclear

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `halflife_n` | `N₀ n N` | $N = N_0/2^n$ | 1 |
| `halflife_t` | `λ t½` | $t_{1/2} = 0.693/\lambda$ | 1 |
| `decay_N` | `N₀ λ t N` | $N = N_0 e^{-\lambda t}$ | 1 |
| `activity_A` | `λ N A` | $A = \lambda N$ | 1 |
| `binding_E` | `Δm E_B` | $E_B = \Delta m \cdot c^2$ | 1 |

---

## 8. Card Coverage

| Lane / Operator | Card Count | Method |
|------|:---:|--------|
| A (single-step) | ~90 | `concept a b ?` |
| A (multi-step chain) | ~15 | `stoich`, `limiting`, `@ice`, `@hess` |
| B (trigger $\to$ equation) | ~35 | `trigger !` |
| C (constants) | ~10 | `constant !` |
| C (conversions) | ~17 | `conversion !` |
| Bridge (`>`) | ~11 | `conceptA > conceptB` |
| `∝` (proportional) | ~8 | `concept ∝ var k` |
| `?>` (threshold) | ~8 | `concept params ?>` |
| `@special` (special case) | ~12 | `@special concept params` |
| `<=>` (comparison) | ~5 | `concept params <=>` |
| **Total trainable** | **~206** | |

> 213 original cards. ~206 are directly trainable with Chemiscript (97%).  
> The remaining ~7 are pure qualitative/descriptive cards (quantum numbers definition, VSEPR shape naming, Lenz's law, organic functional group recognition, etc.) that resist reduction to a positional command.

---

## 9. Quick Reference

```
# === Single calc ===
moles 25 50 ?                 → n = 0.500 mol
pH 0.001 ?                    → pH = 3.00

# === Stoichiometric bridge ===
stoich 25 30 2 4 44 !         → g→mol→ratio→mol→g

# === Limiting reagent ===
limiting 10 27 35 71 2 3 !    → n/coeff compare → Cl₂ limiting

# === ICE table ===
@ice 1.8e-5 0.1 0 1 1 1 1    → [H⁺]=1.34×10⁻³, pH=2.87

# === Hess's Law ===
@hess -393.5 1 -285.8 2 -74.8 1 ! → ΔH = −890.3 kJ

# === Flash recall ===
stp !                         → T=273K, P=1atm, V_m=22.4
at_equilibrium !              → Q=K, ΔG=0

# === Constant ===
NA_avo                        → 6.022×10²³
c_water                       → 4.184 J/(g·K)

# === Bridge ===
stoich_to_stp 5 65.4 1 1 ! ~  → grams Zn → L H₂ at STP
gibbs_to_K -200 300 0.15 !    → ΔG°→K

# === Proportional ===
vrms ∝ T 4                    → T×4 → v×2
graham_rate ∝ M 4             → M×4 → rate×½

# === Threshold ===
spontaneous 0.5 1e-5 ?>       → Q < K? → forward
precipitate 1e-6 1e-8 ?>      → Q > K_sp? → YES

# === Special case ===
@special strong_acid_pH 0.01  → pH=2.00
@special half_equiv 4.74      → pH = pK_a = 4.74

# === Comparison ===
ka_compare 1e-3 1e-5          → 1e-3 > 1e-5 → stronger acid
bond_order 3 2                → triple > double
```
