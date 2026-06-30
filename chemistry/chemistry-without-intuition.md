# Chemistry Without Intuition

## A Mechanical System for Solving Chemistry Problems After the Flashcard Deck

---

## Prologue

You have memorized 213 cards from `honors-chemistry-expression-to-equation-vocabulary.md`. When a problem says "limiting reagent," you immediately divide moles by the coefficient — smallest wins (Card 11). When it says "pH," $-\log[\mathrm{H}^+]$ is on the page before you finish reading (Card 101). When it says "equilibrium," an ICE table takes shape in your mind (Card 93).

You do not need this document to tell you which equation to use. The cards have already told you.

What you need is a **mechanical procedure for connecting cards.** A single chemistry problem fires 3, 5, or 8 cards across multiple domains — stoichiometry feeds gas law (Card 160), which feeds thermochemistry (Card 162), which feeds equilibrium (Card 163). Your task: trace every trigger phrase to its card, write the equation, chain them when domains cross, and verify with unit analysis.

**Difficulty = number of cards fired.** A Level-1 problem fires 2 cards. A Level-4 Olympiad problem fires 8. The method is the same. Count the cards. Trace the triggers. Execute.

---

# Part 0: The Pre-Method

Before you touch a single equation, establish three things.

---

## §0.1 The Given-Variable Table

Draw this before thinking about any problem:

```
| Variable | Symbol | Value | Unit | Source |
|----------|--------|-------|------|--------|
```

Rules:
1. Every number from the problem gets a row. Include its unit.
2. The unknown gets `?` in the Value cell.
3. **Implicit values get rows.** "STP" → $T = 273\;\mathrm{K}$, $P = 1\;\mathrm{atm}$, $V_m = 22.4\;\mathrm{L/mol}$ (Card 186). "Strong acid" → $[\mathrm{H}^+] = [\mathrm{HA}]_0$ (Card 189). "Excess" → that reactant is not limiting (Card 188).
4. Convert all temperatures to Kelvin (Card 197) before using gas laws or thermodynamics.

---

## §0.2 The Trigger Trace

You do not "look up" equations. You recognize trigger phrases and fire cards. A **Trigger Trace** records every card that fires, in order.

### The 4-Pass Extraction Algorithm

1. **Read once.** No pencil. Gather the gist in five words or fewer.
2. **Extract numbers.** Every number with its unit → Variable Table (§0.1).
3. **Fire cards.** Underline every trigger phrase. For each one, write the card number and its instant equation. The cards that fire tell you the problem's architecture.
4. **Identify the unknown.** Mark `?` in the Variable Table.

### Worked Extraction

> *"What mass of CO₂ is produced when 25.0 g of C₂H₆ burns in excess oxygen?"*

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "mass of CO₂ produced" → "balanced equation" | 8 | $2\mathrm{C_2H_6} + 7\mathrm{O_2} \to 4\mathrm{CO_2} + 6\mathrm{H_2O}$ |
| "25.0 g" → "grams to moles" | 1 | $n_{\mathrm{C_2H_6}} = 25.0/M_{\mathrm{C_2H_6}}$ |
| "excess oxygen" | 188 | C₂H₆ is the limiting reagent |
| "mass of CO₂" → "grams of A → grams of B" | 10 | g → mol → mol → g |

Cards fired: 1, 8, 10, 188. Domain: stoichiometry. The three-step path (Card 10) is the architecture.

---

## §0.3 Unit Analysis — Your Universal Error Detector

Chemistry errors almost always reveal themselves through units. After solving, trace the units through your calculation:

$$\text{g} \xrightarrow{\div\;\mathrm{g/mol}} \text{mol} \xrightarrow{\times\;\text{mole ratio}} \text{mol} \xrightarrow{\times\;\mathrm{g/mol}} \text{g}$$

If the units do not cancel to the target unit, your equation path is wrong. Fix it before boxing the answer.

---

# Part I: The Solve-Verify Protocol

Every problem in this document uses three steps:

| Step | Action |
|------|--------|
| **Extract** | Variable table + Trigger Trace. What cards fired? |
| **Execute** | Write the card equations in order. Substitute. Solve algebraically. |
| **Verify** | (1) Units cancel to the target? (2) Sig figs correct? (3) Answer physically plausible? |

---

# Part II: Stoichiometry — Three Worked Examples

## Example 1: Mass-to-Mass

> What mass of CO₂ is produced when 25.0 g of C₂H₆ burns in excess oxygen?
> ($M_{\mathrm{C_2H_6}} = 30.07$, $M_{\mathrm{CO_2}} = 44.01$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "balanced equation" | 8 | $2\mathrm{C_2H_6} + 7\mathrm{O_2} \to 4\mathrm{CO_2} + 6\mathrm{H_2O}$ |
| "mass → moles" | 1 | $n = m/M$ |
| "mole ratio" | 9 | $n_{\mathrm{CO_2}}/4 = n_{\mathrm{C_2H_6}}/2$ |
| "excess" | 188 | C₂H₆ is limiting |
| "grams of A → grams of B" | 10 | Three-step path |

### Solve-Verify

**Execute:** Card 10 gives the path. Run it mechanically.

$$n_{\mathrm{C_2H_6}} = \frac{25.0}{30.07} = 0.8313\;\mathrm{mol}$$

$$n_{\mathrm{CO_2}} = 0.8313 \times \frac{4}{2} = 1.6626\;\mathrm{mol}$$

$$m_{\mathrm{CO_2}} = 1.6626 \times 44.01 = 73.2\;\mathrm{g}$$

**Verify:**
- Unit trace: g → mol → mol → g. Each step cancels correctly. ✓
- Sig figs: 25.0 (3 SF) → 73.2 (3 SF). ✓
- Plausibility: 25 g fuel → 73 g CO₂. Carbon picks up two oxygens — mass increases. ✓

**Answer: $73.2\;\mathrm{g\;CO_2}$.**

---

## Example 2: Limiting Reagent

> 10.0 g of Al reacts with 35.0 g of Cl₂. What mass of AlCl₃ forms?
> ($M$: Al = 26.98, Cl₂ = 70.90, AlCl₃ = 133.33)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "mass → moles" | 1 | $n = m/M$ |
| "balanced equation" | 8 | $2\mathrm{Al} + 3\mathrm{Cl_2} \to 2\mathrm{AlCl_3}$ |
| "limiting reagent" | 11 | Divide $n$ by coefficient; smallest wins |
| "theoretical yield" | 12 | From limiting reagent via mole ratio |

### Solve-Verify

**Execute:** Card 11 — the limiting reagent algorithm.

$$n_{\mathrm{Al}} = \frac{10.0}{26.98} = 0.3706\;\mathrm{mol} \quad\xrightarrow{\div 2}\quad 0.1853$$

$$n_{\mathrm{Cl_2}} = \frac{35.0}{70.90} = 0.4937\;\mathrm{mol} \quad\xrightarrow{\div 3}\quad 0.1646$$

$0.1646 < 0.1853$ → **Cl₂ is limiting.** Card 12: theoretical yield comes from Cl₂.

$$n_{\mathrm{AlCl_3}} = 0.4937 \times \frac{2}{3} = 0.3291\;\mathrm{mol}$$

$$m_{\mathrm{AlCl_3}} = 0.3291 \times 133.33 = 43.9\;\mathrm{g}$$

**Verify:**
- Al leftover: $0.3706 - 0.4937 \times (2/3) = 0.0415\;\mathrm{mol} = 1.12\;\mathrm{g}$. Al was in excess. ✓
- Sig figs: 10.0 (3 SF) → 43.9 (3 SF). ✓

**Answer: $43.9\;\mathrm{g\;AlCl_3}$. Cl₂ is limiting.**

---

## Example 3: Percent Yield

> From Example 2, 38.0 g of AlCl₃ was actually collected. Percent yield?

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "percent yield" | 13 | $\%\;\text{yield} = \frac{\text{actual}}{\text{theoretical}} \times 100\%$ |
| "theoretical yield" | 12 | 43.9 g (from limiting reagent calculation) |

**Execute:** $\%\;\text{yield} = \frac{38.0}{43.9} \times 100\% = 86.6\%$.

**Verify:** Yield ≤ 100%. ✓

**Answer: $86.6\%$.**

---

# Part III: Gases & Thermochemistry

## Example 4: Gas Stoichiometry

> What volume of H₂ at STP is produced when 5.00 g of Zn reacts with excess HCl?
> ($M_{\mathrm{Zn}} = 65.38$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "mass → moles" | 1 | $n_{\mathrm{Zn}} = 5.00/65.38$ |
| "balanced equation" | 8 | $\mathrm{Zn} + 2\mathrm{HCl} \to \mathrm{ZnCl_2} + \mathrm{H_2}$ |
| "STP" | 186 | $V_m = 22.4\;\mathrm{L/mol}$ |
| **Bridge** | **160** | Stoichiometry → Gas volume |

### Solve-Verify

**Execute:**
$$n_{\mathrm{Zn}} = \frac{5.00}{65.38} = 0.07647\;\mathrm{mol}$$
$$n_{\mathrm{H_2}} = 0.07647\;\mathrm{mol} \quad\text{(1:1 ratio, Card 9)}$$
$$V_{\mathrm{H_2}} = 0.07647 \times 22.4 = 1.71\;\mathrm{L}$$

**Verify:** Unit trace: g → mol → mol → L. ✓ **Answer: $1.71\;\mathrm{L\;H_2}$ at STP.**

---

## Example 5: Calorimetry — Heat of Neutralization

> 50.0 mL of 1.00 M HCl at 25.0°C is mixed with 50.0 mL of 1.00 M NaOH at 25.0°C in a coffee-cup calorimeter. Final temperature is 31.9°C. Find $\Delta H$ per mole of H₂O formed.
> ($c_{\text{soln}} = 4.184\;\mathrm{J\;g^{-1}\;K^{-1}}$, density = 1.00 g/mL)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "coffee-cup calorimeter" | 36 | $q_{\text{sys}} + q_{\text{surr}} = 0$ |
| "heat" ($\Delta T$) | 33 | $q = mc\Delta T$ |
| "molarity" → moles | 133 | $n = M \times V$ |
| "enthalpy change" | 39 | $\Delta H = -q_{\text{rxn}}/n$ |

### Solve-Verify

**Execute:**
- $V_{\text{total}} = 100.0\;\mathrm{mL}$, $m_{\text{soln}} = 100.0\;\mathrm{g}$
- $\Delta T = 31.9 - 25.0 = 6.9^\circ\mathrm{C}$
- $q_{\text{soln}} = 100.0 \times 4.184 \times 6.9 = 2887\;\mathrm{J}$
- $q_{\text{rxn}} = -q_{\text{soln}} = -2887\;\mathrm{J}$ (exothermic — heat released by reaction warms the solution)
- $n_{\mathrm{H_2O}} = 0.0500 \times 1.00 = 0.0500\;\mathrm{mol}$ (HCl and NaOH are 1:1; either is limiting at equal moles)
- $\Delta H = -2887 / 0.0500 = -57{,}740\;\mathrm{J/mol} = -57.7\;\mathrm{kJ/mol}$

**Verify:**
- Exothermic → $\Delta H < 0$, temperature rose. ✓
- Known value for strong acid-strong base neutralization: −57.3 kJ/mol. Close match. ✓

**Answer: $\Delta H = -57.7\;\mathrm{kJ/mol}$.**

---

## Example 6: Hess's Law

> Given $\Delta H_f^\circ$ (kJ/mol): CO₂ = −393.5, H₂O(l) = −285.8, CH₄ = −74.8, O₂ = 0.
> Find $\Delta H^\circ$ for $\mathrm{CH_4 + 2O_2 \to CO_2 + 2H_2O}$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "standard enthalpy of formation" | 43 | $\Delta H_{\text{rxn}}^\circ = \sum n\Delta H_f^\circ(\text{products}) - \sum n\Delta H_f^\circ(\text{reactants})$ |

### Solve-Verify

**Execute:** Card 43 — products minus reactants, each multiplied by its coefficient.

$$\Delta H^\circ = [(-393.5) + 2(-285.8)] - [(-74.8) + 2(0)]$$
$$= (-393.5 - 571.6) - (-74.8) = -965.1 + 74.8 = -890.3\;\mathrm{kJ/mol}$$

**Verify:**
- Combustion is exothermic → $\Delta H^\circ < 0$. ✓
- $\Delta H_f^\circ$ of O₂ = 0 (element in standard state, Card 43 note). ✓

**Answer: $\Delta H^\circ = -890.3\;\mathrm{kJ/mol}$.**

---

## Example 7: Gibbs Free Energy

> For a reaction, $\Delta H = -150\;\mathrm{kJ/mol}$, $\Delta S = -300\;\mathrm{J/(mol\;K)}$ at 298 K.
> Find $\Delta G^\circ$. Is the reaction spontaneous?

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Gibbs free energy" | 48 | $\Delta G = \Delta H - T\Delta S$ |
| "spontaneous" | 49 | $\Delta G < 0$ → spontaneous |

### Solve-Verify

**Execute:** Card 48 — ⚠️ unit warning: $\Delta H$ in kJ, $\Delta S$ in J. Convert $\Delta S$: $-300\;\mathrm{J/(mol\;K)} = -0.300\;\mathrm{kJ/(mol\;K)}$.

$$\Delta G^\circ = -150 - 298(-0.300) = -150 + 89.4 = -60.6\;\mathrm{kJ/mol}$$

Card 49: $\Delta G^\circ < 0$ → **spontaneous** at 298 K.

**Verify:**
- Enthalpy favors spontaneity ($\Delta H < 0$). Entropy opposes it ($\Delta S < 0$, system becomes more ordered). At 298 K, enthalpy wins. ✓
- At higher $T$, the $-T\Delta S$ term becomes more positive. At $T = \Delta H/\Delta S = 150/0.300 = 500\;\mathrm{K}$, $\Delta G = 0$. Above 500 K, the reaction becomes nonspontaneous. ✓

**Answer: $\Delta G^\circ = -60.6\;\mathrm{kJ/mol}$. Spontaneous at 298 K.**

---

# Part IV: Equilibrium, Acids & Bases

## Example 8: The ICE Table

> For $\mathrm{H_2 + I_2 \rightleftharpoons 2HI}$, $K_c = 50.0$ at 450°C.
> Initially 0.500 mol H₂ and 0.500 mol I₂ in a 2.00 L flask. Find equilibrium concentrations.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "equilibrium constant" | 89 | $K_c = [\mathrm{HI}]^2/([\mathrm{H_2}][\mathrm{I_2}])$ |
| "ICE table" | 93 | Initial → Change → Equilibrium |

### Solve-Verify

**Execute:** Card 93 — draw the ICE table. Initial concentrations: $[\mathrm{H_2}]_0 = [\mathrm{I_2}]_0 = 0.500/2.00 = 0.250\;\mathrm{M}$, $[\mathrm{HI}]_0 = 0$.

| | H₂ | I₂ | 2HI |
|---|-----|------|------|
| I | 0.250 | 0.250 | 0 |
| C | $-x$ | $-x$ | $+2x$ |
| E | $0.250-x$ | $0.250-x$ | $2x$ |

Card 89: $K_c = \frac{(2x)^2}{(0.250-x)^2} = 50.0$

Take square root of both sides: $\frac{2x}{0.250-x} = \sqrt{50.0} = 7.071$

$2x = 7.071(0.250 - x)$ → $2x = 1.768 - 7.071x$ → $9.071x = 1.768$ → $x = 0.195$

$[\mathrm{H_2}]_{\text{eq}} = 0.250 - 0.195 = 0.055\;\mathrm{M}$
$[\mathrm{I_2}]_{\text{eq}} = 0.055\;\mathrm{M}$
$[\mathrm{HI}]_{\text{eq}} = 2(0.195) = 0.390\;\mathrm{M}$

**Verify:** $K_c = 0.390^2/(0.055 \times 0.055) = 0.1521/0.003025 = 50.3 \approx 50.0$. ✓

**Answer: $[\mathrm{H_2}] = [\mathrm{I_2}] = 0.055\;\mathrm{M}$, $[\mathrm{HI}] = 0.390\;\mathrm{M}$.**

---

## Example 9: Weak Acid pH

> Find the pH of 0.100 M acetic acid. ($K_a = 1.8\times10^{-5}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "weak acid pH" | 109 | $[\mathrm{H}^+] = \sqrt{K_a[\mathrm{HA}]_0}$ |
| "pH" | 101 | $\mathrm{pH} = -\log[\mathrm{H}^+]$ |
| "acid dissociation constant" | 104 | $K_a = [\mathrm{H}^+][\mathrm{A}^-]/[\mathrm{HA}]$ |

### Solve-Verify

**Execute:** Card 109 — the weak acid shortcut, valid when the 5% rule holds (Card 94).

$$[\mathrm{H}^+] = \sqrt{1.8\times10^{-5} \times 0.100} = \sqrt{1.8\times10^{-6}} = 1.34\times10^{-3}\;\mathrm{M}$$

$$\mathrm{pH} = -\log(1.34\times10^{-3}) = 2.87$$

**Verify (Card 94):** $1.34\times10^{-3} / 0.100 = 1.34\% < 5\%$. Approximation valid. ✓
- Weak acid → pH > 1 (0.1 M strong acid would give pH = 1.0). pH = 2.87 is reasonable. ✓

**Answer: $\mathrm{pH} = 2.87$.**

---

## Example 10: Buffer pH — Henderson-Hasselbalch

> A buffer contains 0.200 M CH₃COOH and 0.150 M CH₃COONa. pH? ($\mathrm{p}K_a = 4.74$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "buffer solution" | 111 | Weak acid + conjugate base |
| "Henderson-Hasselbalch" | 112 | $\mathrm{pH} = \mathrm{p}K_a + \log([\mathrm{A}^-]/[\mathrm{HA}])$ |

### Solve-Verify

**Execute:** Card 112 — plug the buffer ratio directly.

$$\mathrm{pH} = 4.74 + \log\frac{0.150}{0.200} = 4.74 + \log(0.750) = 4.74 - 0.125 = 4.62$$

**Verify:**
- Ratio $0.150/0.200 = 0.75$, within 0.1–10 (Card 112 note). ✓
- $[\mathrm{A}^-] < [\mathrm{HA}]$ → pH < pKₐ. Logically: more acid form → more acidic. ✓

**Answer: $\mathrm{pH} = 4.62$.**

---

# Part V: Electrochemistry & Kinetics

## Example 11: Cell Potential

> Calculate $E^\circ_{\text{cell}}$ for: $\mathrm{Zn}(s)|\mathrm{Zn^{2+}}(aq)||\mathrm{Cu^{2+}}(aq)|\mathrm{Cu}(s)$.
> ($E^\circ_{\mathrm{Zn^{2+}/Zn}} = -0.76\;\mathrm{V}$, $E^\circ_{\mathrm{Cu^{2+}/Cu}} = +0.34\;\mathrm{V}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "standard cell potential" | 125 | $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ |
| "spontaneous redox" | 126 | $E^\circ_{\text{cell}} > 0$ → spontaneous |

### Solve-Verify

**Execute:** Card 125 — identify cathode (reduction, higher $E^\circ$) and anode (oxidation, lower $E^\circ$).

- Cathode (reduction): $\mathrm{Cu^{2+} + 2e^- \to Cu}$ at $+0.34\;\mathrm{V}$
- Anode (oxidation): $\mathrm{Zn \to Zn^{2+} + 2e^-}$ at $-0.76\;\mathrm{V}$

$$E^\circ_{\text{cell}} = +0.34 - (-0.76) = +1.10\;\mathrm{V}$$

**Verify:**
- Positive → spontaneous galvanic cell (Card 126). ✓
- This is the classic Daniell cell. ✓

**Answer: $E^\circ_{\text{cell}} = +1.10\;\mathrm{V}$.**

---

## Example 12: First-Order Half-Life

> A first-order reaction has $k = 2.50\times10^{-3}\;\mathrm{s^{-1}}$. Half-life? Time for 75% completion?

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "first-order reaction" | 81 | $\ln[A] = \ln[A]_0 - kt$ |
| "half-life" (1st order) | 83 | $t_{1/2} = 0.693/k$ |

### Solve-Verify

**Execute:**
$$t_{1/2} = \frac{0.693}{2.50\times10^{-3}} = 277\;\mathrm{s}\quad\text{(4.62 min)}$$

75% completion → 25% remains → $[A]/[A]_0 = 0.25$.

**Method 1 (half-life counting):** $0.25 = (1/2)^2$ → exactly 2 half-lives → $t = 2 \times 277 = 554\;\mathrm{s}$.

**Method 2 (integrated rate law, Card 81):** $\ln(0.25) = -kt$, $t = -\ln(0.25)/k = 1.386/(2.50\times10^{-3}) = 554\;\mathrm{s}$.

Both methods agree.

**Verify:** Card 83 note — only first-order half-life is independent of concentration. The fact that 2 half-lives = 75% completion is a unique property of first-order kinetics (and nuclear decay — Card 167). ✓

**Answer: $t_{1/2} = 277\;\mathrm{s}$. 75% complete in $554\;\mathrm{s}$.**

---

# Part VI: The Bridge Protocol — When Domains Chain

The examples above are single-domain. But AP and Olympiad chemistry problems span two, three, or four domains. Cards 160–170 are dedicated to these cross-domain bridges. They do not contain new equations — they describe **problem architectures.**

### The Bridge Recognition Algorithm

When a problem describes two or more distinct steps, ask: "What does the first step produce that the second step needs?"

| First domain involves… | Bridge variable | Feeds into… | Bridge card |
|------------------------|----------------|-------------|-------------|
| Stoichiometry (mass → moles of gas) | $n_{\text{gas}}$ | Gas Law: $V = nRT/P$ or $P = nRT/V$ | 160, 161 |
| Stoichiometry + $\Delta H$ | $q$ (heat released) | Calorimetry: $q = mc\Delta T$ | 162 |
| ICE table → equilibrium amounts | $n_{\text{eq}}$ or $x$ | Mass of product, or new initial for next equilibrium | 163 |
| $\Delta H^\circ$, $S^\circ$ → $\Delta G^\circ$ | $\Delta G^\circ$ | $\Delta G^\circ = -RT\ln K$ → equilibrium $K$ | 164 |
| $\Delta G^\circ$ | $\Delta G^\circ$ | $E^\circ = -\Delta G^\circ/(nF)$ → cell potential | 165 |
| $\mathrm{p}K_a$ of weak acid | $\mathrm{p}K_a$ | $\mathrm{pH} = \mathrm{p}K_a + \log([\mathrm{A}^-]/[\mathrm{HA}])$ → buffer design | 169 |

---

### Bridge Worked Example: Combustion → Heat → Temperature Change

> 2.50 g of CH₄ burns in excess O₂. The heat released warms 500.0 g of water from 22.0°C.
> Final water temperature? ($\Delta H_{\text{comb}}^\circ = -890\;\mathrm{kJ/mol}$, $M_{\mathrm{CH_4}} = 16.04$, $c_w = 4.184$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "mass → moles" | 1 | $n_{\mathrm{CH_4}} = 2.50/16.04$ |
| "enthalpy / heat released" | 39, 40 | $q = n \times |\Delta H|$ (exothermic) |
| "heat → $\Delta T$" | 33 | $\Delta T = q/(mc)$ |
| **Bridge** | **162** | Stoichiometry → Thermo → Calorimetry |

### Solve-Verify

**Execute:** Card 162 gives the architecture. Run the chain.

$$n_{\mathrm{CH_4}} = \frac{2.50}{16.04} = 0.1559\;\mathrm{mol}$$

$$q = 0.1559 \times 890 = 138.7\;\mathrm{kJ} = 138{,}700\;\mathrm{J}$$

$$\Delta T = \frac{138{,}700}{500.0 \times 4.184} = 66.3^\circ\mathrm{C}$$

$$T_f = 22.0 + 66.3 = 88.3^\circ\mathrm{C}$$

**Verify:**
- Unit trace: g → mol → kJ → J → °C. ✓
- Plausibility: 2.5 g methane produces significant heat. Water nearly reaches boiling. ✓
- Card 162 note: this is a three-domain chain. Each domain passes one number forward. ✓

**Answer: $88.3^\circ\mathrm{C}$.**

---

# Part VII: Recovery Protocols — When You Are Stuck

### Protocol A: The Mole Bridge

**If you are stuck on any stoichiometry problem, convert everything to moles.** Grams → moles (Card 1). Gas volume → moles (Card 19). Molarity × volume → moles (Card 133). Moles are the universal currency of chemistry. Once everything is in moles, the mole ratio (Card 9) connects any two substances directly.

### Protocol B: Unit Back-Solve

Cannot remember the formula? Write the target unit. Write the units of every given quantity. Find the combination that produces the target unit. That combination IS the formula, up to a dimensionless constant.

*Example:* Given grams (g) and molar mass (g/mol), need moles (mol). Only combination: g ÷ (g/mol) = mol. → $n = m/M$ (Card 1).

### Protocol C: ICE Table Default

If you see "equilibrium" and are stuck, **draw an ICE table immediately** (Card 93). Even if you do not know what to do next, the table forces you to organize: initial amounts, change represented by $x$ (with stoichiometric coefficients), equilibrium as the sum. The $K$ expression will dictate the algebra.

### Protocol D: The 5% Check

After solving any equilibrium problem with the small-$x$ approximation (Card 94), **always** compute $x/[\text{initial}]_0 \times 100\%$. If it exceeds 5%, your approximation is invalid. Do not box the answer — solve the quadratic instead.

### Protocol E: Convert $\Delta S$ Units Before Gibbs

The single most common mistake with $\Delta G = \Delta H - T\Delta S$ (Card 48) is subtracting J from kJ. $\Delta S$ is almost always given in J/(mol·K); $\Delta H$ is almost always given in kJ/mol. **Convert one before subtracting.** Either divide $\Delta S$ by 1000, or multiply $\Delta H$ by 1000.

---

# Part VIII: The Problem-Difficulty Ladder

| Level | Cards | Structure | Strategy |
|-------|-------|-----------|----------|
| **1. Direct** | 1–2 | Single equation, direct substitution | Trigger → Card → Equation → Solve |
| **2. Two-Step** | 2–4 | One conversion chain | g → mol → mol → g (Card 10) or $M_1V_1 = M_2V_2$ (Card 137) |
| **3. Multi-Domain** | 4–6 | Two domains, one bridge variable | Stoich → Gas (Card 160) or Stoich → Thermo (Card 162) |
| **4. Synthesis** | 6–10 | 3+ domains | Limiting reagent → gas produced → heat released → $\Delta T$ → equilibrium shift |

Your practice files are organized by level:
- `chemistry-questions.md` C1–C20: Level 1–2, 1–3 cards
- `chemistry-questions.md` C21–C40: Level 2–3, 2–5 cards
- `chemistry-questions.md` C41–C60: Level 3–4, 4–8 cards

---

## Quick-Reference Card

### The Solve-Verify Protocol
| Step | Action |
|------|--------|
| **Extract** | Variable table + Trigger Trace. Which cards fired? |
| **Execute** | Write the card equations in order. Substitute. Solve. |
| **Verify** | Unit trace. Sig figs. Physical plausibility. |

### The Mole Bridge (Cards 1–14)
```
grams ──[÷ M]──→ moles ──[mole ratio]──→ moles ──[× M]──→ grams
                    │
                    ├──[× 22.4 @ STP]──→ L gas
                    ├──[× 6.022×10²³]──→ particles
                    └──[÷ V (L)]──→ molarity (M)
```

### Essential Card Groups
| Domain | Cards | Core Equation |
|--------|-------|---------------|
| Stoichiometry | 1–14 | $n = m/M$, mole ratio, limiting reagent |
| Gases | 19–25 | $PV = nRT$ |
| Thermo | 33–52 | $q = mc\Delta T$, $\Delta G = \Delta H - T\Delta S$ |
| Kinetics | 76–88 | Rate = $k[\mathrm{A}]^m[\mathrm{B}]^n$, integrated rate laws |
| Equilibrium | 89–100 | $K_c$, ICE table, Le Chatelier |
| Acids/Bases | 101–120 | $\mathrm{pH} = -\log[\mathrm{H}^+]$, Henderson-Hasselbalch |
| Electrochem | 121–132 | $E^\circ_{\text{cell}}$, Nernst equation |
| Bridges | 160–170 | Stoich→Gas, Thermo→Eq, $K$→$E^\circ$ |

### Common Unit-Conversion Traps
| Trap | Fix |
|------|-----|
| $\Delta S$ in J, $\Delta H$ in kJ | Convert one to match (Card 48) |
| $M$ in g/mol for $v_{\text{rms}}$ | Divide by 1000 → kg/mol (Card 30) |
| °C in gas law | Add 273.15 → K (Card 197) |
| mL in molarity | Divide by 1000 → L (Card 133) |

---

> **The exam is won before you enter the room.** Two hundred thirteen cards have trained one reflex: see a phrase → write the equation. This document has trained a second: chain those equations mechanically, verify with unit analysis, and never guess.
>
> Difficulty equals the number of cards fired. A Level-1 problem fires two cards. A Level-4 problem fires eight. The method is identical. Count the cards. Trace the triggers. Execute.
>
> **If you can calculate it, you have understood it.**
