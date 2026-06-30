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

You do not "look up" equations. You recognize trigger phrases and fire cards. A **Trigger Trace** records every card that fires, in the order the problem demands them.

### The 4-Pass Extraction Algorithm

1. **Read once.** No pencil. Gather the gist in five words or fewer.
2. **Extract numbers.** Every number with its unit → Variable Table (§0.1).
3. **Fire cards.** Underline every trigger phrase. For each one, write the card number and its instant equation. The cards that fire tell you the problem's architecture.
4. **Identify the unknown.** Mark `?` in the Variable Table.

### Worked Extraction

> *"What mass of CO₂ is produced when 25.0 g of C₂H₆ burns in excess oxygen?"*

**Pass 1 — Gist:** "Ethane burns, find CO₂ mass."

**Pass 2 — Extract numbers:**

| Variable | Symbol | Value | Unit | Source |
|----------|--------|-------|------|--------|
| Mass of C₂H₆ | $m_{\mathrm{C_2H_6}}$ | 25.0 | g | given |
| Molar mass C₂H₆ | $M_{\mathrm{C_2H_6}}$ | 30.07 | g/mol | given |
| Molar mass CO₂ | $M_{\mathrm{CO_2}}$ | 44.01 | g/mol | given |
| Mass of CO₂ | $m_{\mathrm{CO_2}}$ | ? | g | TARGET |

**Pass 3 — Fire cards:**

| Trigger Phrase | Card | Instant Equation | Why this card fired |
|---------------|------|------------------|---------------------|
| "mass of CO₂ produced" — need a reaction | 8 | $2\mathrm{C_2H_6} + 7\mathrm{O_2} \to 4\mathrm{CO_2} + 6\mathrm{H_2O}$ | Any mass-mass problem starts with a balanced equation |
| "25.0 g" | 1 | $n = m/M$ | Grams are given; stoich works in moles |
| "excess oxygen" | 188 | C₂H₆ is limiting; O₂ amount irrelevant | "Excess" means we don't need to find limiting reagent |
| "mass of CO₂" | 10 | g → mol → mol → g | The three-step bridge between any two substances |

**Pass 4 — Unknown:** $m_{\mathrm{CO_2}}$ (mass of carbon dioxide produced).

Cards fired: 1, 8, 10, 188. Domain: stoichiometry. The three-step path (Card 10) is the architecture.

---

## §0.3 Unit Analysis — Your Universal Error Detector

Chemistry errors almost always reveal themselves through units. After solving, trace the units through your calculation:

$$\text{g} \xrightarrow{\div\;\mathrm{g/mol}} \text{mol} \xrightarrow{\times\;\text{mole ratio}} \text{mol} \xrightarrow{\times\;\mathrm{g/mol}} \text{g}$$

If the units do not cancel to the target unit, your equation path is wrong. Fix it before boxing the answer.

---

# Part I: The Solve-Verify Protocol

Every problem in this document uses the same three-step protocol:

| Step | Name | Action |
|------|------|--------|
| **I** | Identify | Run the 4-pass extraction (§0.2). Produce: Variable Table, Trigger Trace. |
| **E** | Execute | Write the card equations in the order the Trigger Trace dictates. Substitute numbers. Solve algebraically. |
| **R** | Reflect | Three checks: (1) Units cancel to target? (2) Sig figs consistent with givens? (3) Answer physically plausible? |

The **Execute** step is where most students get lost — not because the algebra is hard, but because they do not know which card comes next. That problem is solved: your Trigger Trace tells you the card order. Follow it mechanically.

---

# Part II: Stoichiometry — Three Examples

## Example 1: Mass-to-Mass

> What mass of CO₂ is produced when 25.0 g of C₂H₆ burns in excess oxygen?
> ($M_{\mathrm{C_2H_6}} = 30.07$, $M_{\mathrm{CO_2}} = 44.01$)

### Step I — Identify

**Trigger Trace:**

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "balanced equation" | 8 | $2\mathrm{C_2H_6} + 7\mathrm{O_2} \to 4\mathrm{CO_2} + 6\mathrm{H_2O}$ |
| "25.0 g" → moles | 1 | $n_{\mathrm{C_2H_6}} = 25.0/30.07$ |
| "mole ratio" | 9 | $n_{\mathrm{CO_2}} : n_{\mathrm{C_2H_6}} = 4 : 2$ |
| "excess" | 188 | C₂H₆ is limiting; no need to compare reactants |
| "grams of A → grams of B" | 10 | Three-step: mass → moles → moles → mass |

**Variable Table:**

| Variable | Symbol | Value | Unit | Source |
|----------|--------|-------|------|--------|
| Mass of C₂H₆ | $m_{\mathrm{C_2H_6}}$ | 25.0 | g | given |
| Molar mass C₂H₆ | $M_{\mathrm{C_2H_6}}$ | 30.07 | g/mol | given |
| Molar mass CO₂ | $M_{\mathrm{CO_2}}$ | 44.01 | g/mol | given |
| Mass of CO₂ | $m_{\mathrm{CO_2}}$ | ? | g | TARGET |

**Cards fired: 1, 8, 9, 10, 188.** Five cards. Single domain (stoichiometry). The architecture is Card 10's three-step path.

### Step E — Execute

Card 10 tells me the order. I follow it without deviation.

**Step 1 — Grams to moles (Card 1).** I convert the given mass of ethane to moles. This is mandatory — stoichiometric ratios only work in moles.

$$n_{\mathrm{C_2H_6}} = \frac{m}{M} = \frac{25.0\;\mathrm{g}}{30.07\;\mathrm{g/mol}} = 0.8313\;\mathrm{mol}$$

**Step 2 — Mole ratio (Card 9).** The balanced equation (Card 8) gives the ratio: 2 mol C₂H₆ produces 4 mol CO₂. That is a 2:4 ratio, which simplifies to 1:2. I multiply the moles of ethane by (4/2).

$$n_{\mathrm{CO_2}} = 0.8313\;\mathrm{mol\;C_2H_6} \times \frac{4\;\mathrm{mol\;CO_2}}{2\;\mathrm{mol\;C_2H_6}} = 1.6626\;\mathrm{mol}$$

The units confirm the logic: mol C₂H₆ cancels, leaving mol CO₂.

**Step 3 — Moles to grams (Card 1, reversed).** I convert moles of CO₂ back to grams using its molar mass.

$$m_{\mathrm{CO_2}} = n \times M = 1.6626\;\mathrm{mol} \times 44.01\;\mathrm{g/mol} = 73.2\;\mathrm{g}$$

### Step R — Reflect

- **Unit trace:** $\mathrm{g} \xrightarrow{\div\;\mathrm{g/mol}} \mathrm{mol} \xrightarrow{\times\;\text{ratio}} \mathrm{mol} \xrightarrow{\times\;\mathrm{g/mol}} \mathrm{g}$. Each transition is dimensionally valid. ✓
- **Sig figs:** The given mass has 3 significant figures (25.0). The answer has 3 (73.2). ✓
- **Plausibility:** 25 g of fuel becomes 73 g of CO₂. Mass increased because each carbon atom (12 amu) gained two oxygen atoms (32 amu). The CO₂/C₂H₆ mass ratio per mole is $(4\times44.01)/(2\times30.07) = 176.04/60.14 = 2.93$. Multiplying: $25.0 \times 2.93 \approx 73.2$. ✓

**Answer: $73.2\;\mathrm{g\;CO_2}$.**

---

## Example 2: Limiting Reagent

> 10.0 g of Al reacts with 35.0 g of Cl₂. What mass of AlCl₃ forms?
> ($M$: Al = 26.98, Cl₂ = 70.90, AlCl₃ = 133.33)

### Step I — Identify

**Trigger Trace:**

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "balanced equation" | 8 | $2\mathrm{Al} + 3\mathrm{Cl_2} \to 2\mathrm{AlCl_3}$ |
| "10.0 g" and "35.0 g" | 1 | $n = m/M$ for both reactants |
| "limiting reagent" | 11 | Divide $n$ by its coefficient; the **smallest** result is limiting |
| "theoretical yield" | 12 | Product mass computed from the limiting reagent only |

**Variable Table:**

| Variable | Symbol | Value | Unit | Source |
|----------|--------|-------|------|--------|
| Mass of Al | $m_{\mathrm{Al}}$ | 10.0 | g | given |
| Mass of Cl₂ | $m_{\mathrm{Cl_2}}$ | 35.0 | g | given |
| Molar mass Al | $M_{\mathrm{Al}}$ | 26.98 | g/mol | given |
| Molar mass Cl₂ | $M_{\mathrm{Cl_2}}$ | 70.90 | g/mol | given |
| Molar mass AlCl₃ | $M_{\mathrm{AlCl_3}}$ | 133.33 | g/mol | given |
| Mass of AlCl₃ | $m_{\mathrm{AlCl_3}}$ | ? | g | TARGET |

**Cards fired: 1, 8, 11, 12.** Four cards. Key question: which reactant runs out first?

### Step E — Execute

Card 11 gives the algorithm. "Limiting reagent" means I must compare both reactants on an equal footing — that footing is "moles per coefficient."

**Step 1 — Convert both reactants to moles (Card 1).**

$$n_{\mathrm{Al}} = \frac{10.0\;\mathrm{g}}{26.98\;\mathrm{g/mol}} = 0.3706\;\mathrm{mol}$$

$$n_{\mathrm{Cl_2}} = \frac{35.0\;\mathrm{g}}{70.90\;\mathrm{g/mol}} = 0.4937\;\mathrm{mol}$$

**Step 2 — Divide each by its stoichiometric coefficient (Card 11).** The balanced equation says 2 Al react with 3 Cl₂. I divide each mole quantity by its coefficient. This normalizes them to "reaction units."

$$n_{\mathrm{Al}}/2 = 0.3706/2 = 0.1853$$

$$n_{\mathrm{Cl_2}}/3 = 0.4937/3 = 0.1646$$

$0.1646 < 0.1853$. The smaller number belongs to **Cl₂.** It will run out first. Cl₂ is the limiting reagent.

**Step 3 — Compute product from limiting reagent (Card 12).** I use the moles of Cl₂ (the limiting reagent) and the mole ratio from the balanced equation. 3 mol Cl₂ produces 2 mol AlCl₃.

$$n_{\mathrm{AlCl_3}} = 0.4937\;\mathrm{mol\;Cl_2} \times \frac{2\;\mathrm{mol\;AlCl_3}}{3\;\mathrm{mol\;Cl_2}} = 0.3291\;\mathrm{mol}$$

**Step 4 — Convert product moles to grams (Card 1).**

$$m_{\mathrm{AlCl_3}} = 0.3291\;\mathrm{mol} \times 133.33\;\mathrm{g/mol} = 43.9\;\mathrm{g}$$

### Step R — Reflect

- **Excess reagent check (Card 14):** Al consumed = $0.4937\;\mathrm{mol\;Cl_2} \times \frac{2\;\mathrm{mol\;Al}}{3\;\mathrm{mol\;Cl_2}} = 0.3291\;\mathrm{mol}$. Al remaining = $0.3706 - 0.3291 = 0.0415\;\mathrm{mol} = 1.12\;\mathrm{g}$. Al was indeed in excess. ✓
- **Sig figs:** 10.0 and 35.0 both have 3 SF → 43.9 has 3 SF. ✓
- **Plausibility:** Both reactants contribute mass to the product. 10.0 + 35.0 = 45.0 g total reactants. But Cl₂ is limiting — some Al remains unreacted. So product mass (43.9 g) is slightly less than total reactant mass. Makes sense. ✓

**Answer: $43.9\;\mathrm{g\;AlCl_3}$. Cl₂ is the limiting reagent.**

---

## Example 3: Percent Yield

> From Example 2, 38.0 g of AlCl₃ was actually collected in the lab. What is the percent yield?

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "percent yield" | 13 | $\%\;\text{yield} = \frac{\text{actual}}{\text{theoretical}} \times 100\%$ |
| "theoretical yield" | 12 | 43.9 g (from Example 2's limiting reagent calculation) |

**Cards fired: 12, 13.** Two cards. One division.

### Step E — Execute

Card 13: percent yield compares what you actually got to what you theoretically could have gotten.

$$\%\;\text{yield} = \frac{38.0\;\mathrm{g}}{43.9\;\mathrm{g}} \times 100\% = 86.6\%$$

### Step R — Reflect

- Yield is ≤ 100%. A value above 100% would indicate experimental error (wet product, contamination). ✓
- 86.6% means about 13% of the product was lost — reasonable for filtration and drying. ✓

**Answer: $86.6\%$.**

---

# Part III: Gases & Thermochemistry — Four Examples

## Example 4: Gas Stoichiometry — The Bridge to Gas Laws

> What volume of H₂ at STP is produced when 5.00 g of Zn reacts with excess HCl?
> ($M_{\mathrm{Zn}} = 65.38$)

### Step I — Identify

**Trigger Trace:**

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "balanced equation" | 8 | $\mathrm{Zn} + 2\mathrm{HCl} \to \mathrm{ZnCl_2} + \mathrm{H_2}$ |
| "5.00 g" → moles | 1 | $n_{\mathrm{Zn}} = m/M$ |
| "mole ratio" | 9 | $n_{\mathrm{H_2}} : n_{\mathrm{Zn}} = 1 : 1$ |
| "STP" | 186 | $V_m = 22.4\;\mathrm{L/mol}$ at STP |
| **Bridge: mass → gas volume** | **160** | Stoichiometry produces $n_{\text{gas}}$ → Gas Law gives $V$ |

**Cards fired: 1, 8, 9, 160, 186.** Five cards spanning two domains: stoichiometry and gases. Card 160 is the bridge — it tells me the output of the stoichiometry step ($n_{\mathrm{H_2}}$) becomes the input to the gas law step.

### Step E — Execute

The problem crosses domains. Stoichiometry first, then gas law. Card 160 prescribes the order.

**Domain A — Stoichiometry:**

$$n_{\mathrm{Zn}} = \frac{5.00\;\mathrm{g}}{65.38\;\mathrm{g/mol}} = 0.07647\;\mathrm{mol}$$

From the balanced equation (Card 8), Zn and H₂ are 1:1 (Card 9):

$$n_{\mathrm{H_2}} = 0.07647\;\mathrm{mol}$$

**Bridge:** $n_{\mathrm{H_2}}$ crosses from stoichiometry into the gas domain.

**Domain B — Gas Law.** At STP (Card 186), one mole of any ideal gas occupies 22.4 L. This is a direct conversion — I do not need $PV = nRT$ here because the problem explicitly states STP.

$$V_{\mathrm{H_2}} = 0.07647\;\mathrm{mol} \times 22.4\;\frac{\mathrm{L}}{\mathrm{mol}} = 1.71\;\mathrm{L}$$

### Step R — Reflect

- **Unit trace:** g → mol → mol → L. Each step has a clear dimensional conversion. ✓
- **Why not $PV = nRT$?** Card 186 is a shortcut for STP conditions. I could use Card 19 ($PV = nRT$) and get the same answer: $V = 0.07647 \times 0.08206 \times 273 / 1 = 1.71\;\mathrm{L}$. The shortcut is valid because STP fixes both $T$ and $P$. ✓
- **Sig figs:** 5.00 (3 SF) → 1.71 (3 SF). ✓

**Answer: $1.71\;\mathrm{L\;H_2}$ at STP.**

---

## Example 5: Calorimetry — Heat of Neutralization

> 50.0 mL of 1.00 M HCl at 25.0°C is mixed with 50.0 mL of 1.00 M NaOH at 25.0°C in a coffee-cup calorimeter. The final temperature is 31.9°C. Find $\Delta H$ per mole of H₂O formed.
> ($c_{\text{soln}} = 4.184\;\mathrm{J\;g^{-1}\;K^{-1}}$, density = 1.00 g/mL)

### Step I — Identify

**Trigger Trace:**

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "coffee-cup calorimeter" | 36 | $q_{\text{system}} + q_{\text{surroundings}} = 0$ |
| "temperature change" | 33 | $q = mc\Delta T$ (heat absorbed by solution) |
| "1.00 M" and "50.0 mL" | 133 | $n = M \times V$ (moles from molarity) |
| "enthalpy change $\Delta H$" | 39 | $\Delta H = -q_{\text{rxn}}/n_{\text{limiting}}$ |

**Cards fired: 33, 36, 39, 133.** Four cards. The chain: temperature change → heat → moles → enthalpy per mole.

**Variable Table:**

| Variable | Symbol | Value | Unit | Source |
|----------|--------|-------|------|--------|
| Volume HCl | $V_{\mathrm{HCl}}$ | 50.0 | mL | given |
| Molarity HCl | $M_{\mathrm{HCl}}$ | 1.00 | mol/L | given |
| Volume NaOH | $V_{\mathrm{NaOH}}$ | 50.0 | mL | given |
| Molarity NaOH | $M_{\mathrm{NaOH}}$ | 1.00 | mol/L | given |
| Initial $T$ | $T_i$ | 25.0 | °C | given |
| Final $T$ | $T_f$ | 31.9 | °C | given |
| Specific heat | $c$ | 4.184 | J/(g·K) | given |
| Density | $\rho$ | 1.00 | g/mL | given |
| $\Delta H$ per mol H₂O | $\Delta H$ | ? | kJ/mol | TARGET |

### Step E — Execute

**Step 1 — Compute the heat absorbed by the solution (Card 33).** The reaction releases heat, which warms the combined solution. I need the total mass of solution and the temperature change.

$$V_{\text{total}} = 50.0 + 50.0 = 100.0\;\mathrm{mL}$$

$$m_{\text{soln}} = 100.0\;\mathrm{mL} \times 1.00\;\frac{\mathrm{g}}{\mathrm{mL}} = 100.0\;\mathrm{g}$$

$$\Delta T = 31.9 - 25.0 = 6.9^\circ\mathrm{C}$$

Card 33: $q_{\text{soln}} = mc\Delta T = 100.0 \times 4.184 \times 6.9 = 2887\;\mathrm{J}$

The solution **absorbed** 2887 J of heat. That heat came from the chemical reaction.

**Step 2 — Relate solution heat to reaction heat (Card 36).** In a coffee-cup calorimeter, the system (reaction) and surroundings (solution) exchange heat with no loss to the outside.

$$q_{\text{rxn}} + q_{\text{soln}} = 0 \quad\Rightarrow\quad q_{\text{rxn}} = -q_{\text{soln}} = -2887\;\mathrm{J}$$

The negative sign means the reaction **released** 2887 J — it is exothermic. The solution warmed up because it absorbed that energy.

**Step 3 — Find moles of water produced (Card 133).** The neutralization reaction is $\mathrm{HCl + NaOH \to NaCl + H_2O}$. Both reactants are at equal concentrations and volumes, so they are exactly stoichiometric. Either one gives the moles of water.

$$n_{\mathrm{H_2O}} = M \times V = 1.00\;\frac{\mathrm{mol}}{\mathrm{L}} \times 0.0500\;\mathrm{L} = 0.0500\;\mathrm{mol}$$

**Step 4 — Compute $\Delta H$ per mole (Card 39).** Enthalpy change is heat released **per mole of reaction** (here, per mole of water formed).

$$\Delta H = \frac{q_{\text{rxn}}}{n_{\mathrm{H_2O}}} = \frac{-2887\;\mathrm{J}}{0.0500\;\mathrm{mol}} = -57{,}740\;\mathrm{J/mol} = -57.7\;\mathrm{kJ/mol}$$

### Step R — Reflect

- **Sign convention (Card 40):** $\Delta H < 0$ means exothermic. The temperature rose from 25.0°C to 31.9°C — the reaction vessel got warmer. That is the physical signature of an exothermic process. ✓
- **Known value check:** The standard enthalpy of neutralization for a strong acid with a strong base is approximately −57.3 kJ/mol. Our calculated value of −57.7 kJ/mol is within about 1% — well within experimental error for a coffee-cup calorimeter. ✓
- **Unit trace:** $\mathrm{mL} \xrightarrow{\times\;\mathrm{g/mL}} \mathrm{g} \xrightarrow{\times\;\mathrm{J/(g\cdot K)} \times \mathrm{K}} \mathrm{J} \xrightarrow{\div\;\mathrm{mol}} \mathrm{J/mol} \xrightarrow{\div 1000} \mathrm{kJ/mol}$. ✓

**Answer: $\Delta H = -57.7\;\mathrm{kJ/mol}$ (exothermic).**

---

## Example 6: Hess's Law — Enthalpy of Formation

> Using standard enthalpies of formation, find $\Delta H^\circ$ for $\mathrm{CH_4 + 2O_2 \to CO_2 + 2H_2O}$.
> $\Delta H_f^\circ$ (kJ/mol): CO₂ = −393.5, H₂O(l) = −285.8, CH₄ = −74.8, O₂ = 0.

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "standard enthalpy of formation" | 43 | $\Delta H_{\text{rxn}}^\circ = \sum n\Delta H_f^\circ(\text{products}) - \sum n\Delta H_f^\circ(\text{reactants})$ |

**Cards fired: 43.** One card. The formula does everything.

### Step E — Execute

Card 43 says: sum the enthalpies of formation of all products (each multiplied by its coefficient), then subtract the sum for all reactants. The $\Delta H_f^\circ$ of any element in its standard state is zero — that is why O₂ contributes nothing.

**Products:**
$$\sum n\Delta H_f^\circ(\text{products}) = 1(-393.5) + 2(-285.8) = -393.5 - 571.6 = -965.1\;\mathrm{kJ}$$

**Reactants:**
$$\sum n\Delta H_f^\circ(\text{reactants}) = 1(-74.8) + 2(0) = -74.8\;\mathrm{kJ}$$

**Reaction enthalpy:**
$$\Delta H^\circ = -965.1 - (-74.8) = -890.3\;\mathrm{kJ/mol}$$

### Step R — Reflect

- **Sign:** Combustion is famously exothermic. $\Delta H^\circ = -890\;\mathrm{kJ/mol}$ is the correct known value for methane combustion. ✓
- **O₂ contribution:** $\Delta H_f^\circ(\mathrm{O_2}) = 0$ because it is an element in its standard state. Card 43's note explicitly states this rule — students who forget it and try to look up a value for O₂ get the wrong answer. ✓
- **Why products minus reactants?** Enthalpy is a state function. The reaction enthalpy is the difference between the enthalpy of the products and the enthalpy of the reactants. Formation enthalpies measure each substance relative to its constituent elements, so subtracting them gives the net enthalpy change. ✓

**Answer: $\Delta H^\circ = -890.3\;\mathrm{kJ/mol}$.**

---

## Example 7: Gibbs Free Energy — Spontaneity

> A reaction has $\Delta H = -150\;\mathrm{kJ/mol}$ and $\Delta S = -300\;\mathrm{J/(mol\;K)}$ at 298 K.
> Find $\Delta G^\circ$. Is the reaction spontaneous? At what temperature does spontaneity change?

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Gibbs free energy" | 48 | $\Delta G = \Delta H - T\Delta S$ |
| "spontaneous" | 49 | $\Delta G < 0$ → spontaneous; $\Delta G > 0$ → nonspontaneous |

**Cards fired: 48, 49.** Two cards. The $\Delta G$ equation is deceptively simple — the most common mistake is a unit mismatch.

### Step E — Execute

**Step 1 — Unit alignment (critical).** Card 48's warning: $\Delta H$ is in **kJ/mol**, but $\Delta S$ is in **J/(mol·K)**. I must convert one to match the other before subtracting. I will convert $\Delta S$ to kJ.

$$\Delta S = -300\;\frac{\mathrm{J}}{\mathrm{mol\;K}} \times \frac{1\;\mathrm{kJ}}{1000\;\mathrm{J}} = -0.300\;\frac{\mathrm{kJ}}{\mathrm{mol\;K}}$$

**Step 2 — Apply Gibbs equation (Card 48).** $T$ must be in Kelvin. The problem gives 298 K, which is standard temperature.

$$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ = -150 - 298(-0.300)$$

$$= -150 + 89.4 = -60.6\;\mathrm{kJ/mol}$$

**Step 3 — Spontaneity (Card 49).** $\Delta G^\circ = -60.6\;\mathrm{kJ/mol} < 0$. The reaction is **spontaneous** at 298 K.

**Step 4 — Temperature where spontaneity changes.** The reaction stops being spontaneous when $\Delta G = 0$. Set the equation to zero and solve for $T$.

$$0 = -150 - T(-0.300)$$

$$0 = -150 + 0.300T$$

$$T = \frac{150}{0.300} = 500\;\mathrm{K}$$

### Step R — Reflect

- **Interpretation:** At 298 K, the reaction is spontaneous. The enthalpy term ($-150$) dominates — the reaction is exothermic, which favors spontaneity. The entropy term ($-T\Delta S$) is positive (+89.4 at 298 K) because $\Delta S$ is negative (the system becomes more ordered). As temperature increases, the entropy penalty grows. At 500 K, the two terms exactly balance. Above 500 K, $\Delta G > 0$ and the reaction becomes nonspontaneous.
- **This makes physical sense:** Exothermic reactions are favored at low temperatures. If the reaction also decreases entropy (products are more ordered than reactants), raising the temperature eventually makes it nonspontaneous. ✓
- **The unit trap:** If I had forgotten to convert $\Delta S$ to kJ, I would have computed $\Delta G = -150 - 298(-300) = -150 + 89400 = +89250\;\mathrm{kJ/mol}$ — absurdly large and positive. The unit mismatch would have reversed the sign and inflated the magnitude by 1000×. This is why Card 48 warns you so strongly. ✓

**Answer: $\Delta G^\circ = -60.6\;\mathrm{kJ/mol}$. Spontaneous at 298 K. Becomes nonspontaneous above 500 K.**

---

# Part IV: Equilibrium, Acids & Bases — Three Examples

## Example 8: The ICE Table

> $\mathrm{H_2 + I_2 \rightleftharpoons 2HI}$, $K_c = 50.0$ at 450°C.
> Initially 0.500 mol H₂ and 0.500 mol I₂ in a 2.00 L flask. Equilibrium concentrations?

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "equilibrium constant $K_c$" | 89 | $K_c = [\mathrm{HI}]^2/([\mathrm{H_2}][\mathrm{I_2}])$ |
| "ICE table" | 93 | Initial → Change → Equilibrium |
| "equilibrium concentration" | 95 | $[\mathrm{A}]_{\text{eq}} = [\mathrm{A}]_0 + \text{change}$ |

**Cards fired: 89, 93, 95.** Three cards. The ICE table (Card 93) is the organizing tool — everything else derives from it.

### Step E — Execute

**Step 1 — Set up the ICE table (Card 93).** First, convert amounts to concentrations. The flask is 2.00 L.

$$[\mathrm{H_2}]_0 = [\mathrm{I_2}]_0 = \frac{0.500\;\mathrm{mol}}{2.00\;\mathrm{L}} = 0.250\;\mathrm{M}$$

$$[\mathrm{HI}]_0 = 0\;\mathrm{M}$$

Now draw the table. The "C" row follows the stoichiometry: for every $x$ moles of H₂ consumed, $x$ moles of I₂ are consumed and $2x$ moles of HI are produced.

| | H₂ | I₂ | 2HI |
|---|-----|------|------|
| **I**nitial | 0.250 | 0.250 | 0 |
| **C**hange | $-x$ | $-x$ | $+2x$ |
| **E**quilibrium | $0.250-x$ | $0.250-x$ | $2x$ |

**Step 2 — Write the $K_c$ expression (Card 89) and substitute the equilibrium row.**

$$K_c = \frac{[\mathrm{HI}]^2}{[\mathrm{H_2}][\mathrm{I_2}]} = \frac{(2x)^2}{(0.250-x)(0.250-x)} = 50.0$$

$$\frac{4x^2}{(0.250-x)^2} = 50.0$$

**Step 3 — Solve for $x$.** Because the numerator and denominator are both perfect squares, I can take the square root of both sides — no quadratic needed.

$$\frac{2x}{0.250-x} = \sqrt{50.0} = 7.071$$

$$2x = 7.071(0.250 - x)$$

$$2x = 1.768 - 7.071x$$

$$9.071x = 1.768$$

$$x = 0.195$$

**Step 4 — Compute equilibrium concentrations (Card 95).** Substitute $x$ back into the "E" row.

$$[\mathrm{H_2}]_{\text{eq}} = 0.250 - 0.195 = 0.055\;\mathrm{M}$$

$$[\mathrm{I_2}]_{\text{eq}} = 0.250 - 0.195 = 0.055\;\mathrm{M}$$

$$[\mathrm{HI}]_{\text{eq}} = 2(0.195) = 0.390\;\mathrm{M}$$

### Step R — Reflect

- **Check $K_c$:** $\frac{0.390^2}{0.055 \times 0.055} = \frac{0.1521}{0.003025} = 50.3 \approx 50.0$. The small discrepancy is from rounding $x$. ✓
- **Why no quadratic?** The ICE table had identical expressions for H₂ and I₂ in the denominator because they started at equal concentrations and react 1:1. This symmetry allowed a square root shortcut. Not all ICE tables are this friendly — Card 94's 5% approximation exists for the harder ones. ✓
- **Physical picture:** The large $K_c$ (50.0) means the equilibrium heavily favors products. Indeed, most of the H₂ and I₂ converted to HI: 0.250 M initial → 0.055 M at equilibrium. ✓

**Answer: $[\mathrm{H_2}] = [\mathrm{I_2}] = 0.055\;\mathrm{M}$, $[\mathrm{HI}] = 0.390\;\mathrm{M}$.**

---

## Example 9: Weak Acid pH

> Find the pH of 0.100 M acetic acid. ($K_a = 1.8\times10^{-5}$)

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "weak acid pH" | 109 | $[\mathrm{H}^+] = \sqrt{K_a[\mathrm{HA}]_0}$ |
| "pH" | 101 | $\mathrm{pH} = -\log[\mathrm{H}^+]$ |
| "acid dissociation constant" | 104 | $K_a = [\mathrm{H}^+][\mathrm{A}^-]/[\mathrm{HA}]$ |

**Cards fired: 101, 104, 109.** Three cards. Card 109 gives the shortcut formula — with a catch: it only works if the 5% rule passes.

### Step E — Execute

**Step 1 — Apply the weak acid shortcut (Card 109).** This formula comes from an ICE table where the small-$K_a$ approximation sets $[\mathrm{HA}]_{\text{eq}} \approx [\mathrm{HA}]_0$.

$$[\mathrm{H}^+] = \sqrt{K_a \times [\mathrm{HA}]_0} = \sqrt{1.8\times10^{-5} \times 0.100}$$

$$= \sqrt{1.8\times10^{-6}} = 1.34\times10^{-3}\;\mathrm{M}$$

**Step 2 — Verify the 5% rule (Card 94).** The approximation is valid only if less than 5% of the acid ionized.

$$\%\;\text{ionization} = \frac{[\mathrm{H}^+]}{[\mathrm{HA}]_0} \times 100\% = \frac{1.34\times10^{-3}}{0.100} \times 100\% = 1.34\%$$

$1.34\% < 5\%$ → **approximation is valid.** The ICE table shortcut was justified.

**Step 3 — Compute pH (Card 101).**

$$\mathrm{pH} = -\log(1.34\times10^{-3}) = 2.87$$

### Step R — Reflect

- **Why not just use the full ICE table?** For a weak acid with $K_a = 1.8\times10^{-5}$, the equilibrium $[\mathrm{HA}]$ is $0.100 - 0.00134 = 0.09866\;\mathrm{M}$, which is nearly identical to $0.100\;\mathrm{M}$. Solving the full quadratic would give $[\mathrm{H}^+] = 1.33\times10^{-3}\;\mathrm{M}$ — the same to two significant figures. The shortcut saves time with negligible accuracy loss. ✓
- **Strong acid comparison:** If this were 0.100 M HCl (a strong acid, Card 107), $[\mathrm{H}^+] = 0.100\;\mathrm{M}$ and pH = 1.00. Acetic acid at the same concentration has pH = 2.87 — much less acidic because it is a weak acid that only partially dissociates. ✓
- **When the shortcut fails:** If $[\mathrm{HA}]_0$ were 0.00100 M (very dilute), the 5% rule would fail because a larger fraction ionizes. Card 109 warns about this. ✓

**Answer: $\mathrm{pH} = 2.87$.**

---

## Example 10: Buffer pH — Henderson-Hasselbalch

> A buffer is prepared with 0.200 M CH₃COOH and 0.150 M CH₃COONa. Find the pH. ($\mathrm{p}K_a = 4.74$)

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "buffer" | 111 | Weak acid + its conjugate base |
| "Henderson-Hasselbalch" | 112 | $\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A}^-]}{[\mathrm{HA}]}$ |

**Cards fired: 111, 112.** Two cards. A buffer is defined by its components (Card 111); its pH is computed by Henderson-Hasselbalch (Card 112).

### Step E — Execute

**Step 1 — Identify the buffer components (Card 111).** CH₃COOH is the weak acid (HA). CH₃COONa provides the conjugate base CH₃COO⁻ (A⁻). Sodium acetate fully dissociates in solution, so $[\mathrm{A}^-] = 0.150\;\mathrm{M}$.

**Step 2 — Apply Henderson-Hasselbalch (Card 112).** The formula uses equilibrium concentrations, but for a buffer the initial concentrations are an excellent approximation — the weak acid dissociation is suppressed by the presence of its conjugate base (Le Chatelier, Card 97).

$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A}^-]}{[\mathrm{HA}]} = 4.74 + \log\frac{0.150}{0.200}$$

$$\mathrm{pH} = 4.74 + \log(0.750) = 4.74 + (-0.125) = 4.62$$

### Step R — Reflect

- **Ratio check (Card 112 note):** $0.150/0.200 = 0.75$, which is within the valid range of 0.1 to 10. The Henderson-Hasselbalch equation is reliable here. ✓
- **Physical intuition:** The buffer has more acid form (0.200 M) than base form (0.150 M), so the pH should be slightly **below** the pKₐ. pKₐ = 4.74, pH = 4.62 — slightly more acidic, as expected. ✓
- **Buffer capacity (Card 113):** Maximum buffer capacity occurs when $[\mathrm{A}^-] = [\mathrm{HA}]$, which would give pH = pKₐ = 4.74. This buffer is close to its maximum capacity because the ratio is not far from 1. ✓

**Answer: $\mathrm{pH} = 4.62$.**

---

# Part V: Electrochemistry & Kinetics — Two Examples

## Example 11: Standard Cell Potential

> Calculate $E^\circ_{\text{cell}}$ for $\mathrm{Zn}(s)|\mathrm{Zn^{2+}}(aq)||\mathrm{Cu^{2+}}(aq)|\mathrm{Cu}(s)$.
> ($E^\circ_{\mathrm{Zn^{2+}/Zn}} = -0.76\;\mathrm{V}$, $E^\circ_{\mathrm{Cu^{2+}/Cu}} = +0.34\;\mathrm{V}$)

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "standard cell potential" | 125 | $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ |
| "spontaneous redox" | 126 | $E^\circ_{\text{cell}} > 0$ → spontaneous (galvanic) |

**Cards fired: 125, 126.** Two cards. The key decision: which half-cell is the cathode?

### Step E — Execute

**Step 1 — Identify cathode and anode.** The cathode is where **reduction** occurs. Reduction happens at the electrode with the **higher** (more positive) reduction potential.

- $\mathrm{Cu^{2+} + 2e^- \to Cu}$: $E^\circ = +0.34\;\mathrm{V}$ → **cathode** (higher $E^\circ$)
- $\mathrm{Zn^{2+} + 2e^- \to Zn}$: $E^\circ = -0.76\;\mathrm{V}$ → **anode** (lower $E^\circ$, so it oxidizes: $\mathrm{Zn \to Zn^{2+} + 2e^-}$)

**Step 2 — Apply Card 125.** Subtract the anode potential from the cathode potential.

$$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = (+0.34) - (-0.76) = +1.10\;\mathrm{V}$$

### Step R — Reflect

- **Spontaneity (Card 126):** $E^\circ_{\text{cell}} = +1.10\;\mathrm{V} > 0$. The reaction is spontaneous as written — this is a galvanic (voltaic) cell that produces electrical energy. ✓
- **Relation to $\Delta G^\circ$ (Card 127):** $\Delta G^\circ = -nFE^\circ = -2(96{,}485)(1.10) = -212\;\mathrm{kJ/mol}$. Large negative $\Delta G$ confirms strong thermodynamic driving force. ✓
- **This is the Daniell cell** — one of the first practical batteries, invented in 1836. Its voltage (1.10 V) is a standard reference value. ✓

**Answer: $E^\circ_{\text{cell}} = +1.10\;\mathrm{V}$. Spontaneous galvanic cell.**

---

## Example 12: First-Order Kinetics — Half-Life and Completion Time

> A first-order reaction has $k = 2.50\times10^{-3}\;\mathrm{s^{-1}}$. Half-life? Time for 75% completion?

### Step I — Identify

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "first-order reaction" | 81 | $\ln[A] = \ln[A]_0 - kt$ |
| "half-life" (1st order) | 83 | $t_{1/2} = 0.693/k$ |

**Cards fired: 81, 83.** Two cards. The half-life formula (Card 83) is a special case of the integrated rate law (Card 81).

### Step E — Execute

**Step 1 — Half-life (Card 83).** For any first-order process, the half-life depends only on $k$. It does not depend on the initial concentration — a unique property of first-order kinetics.

$$t_{1/2} = \frac{0.693}{k} = \frac{0.693}{2.50\times10^{-3}\;\mathrm{s^{-1}}} = 277\;\mathrm{s}$$

That is 4.62 minutes. After this time, exactly half of the reactant remains, regardless of how much you started with.

**Step 2 — Time for 75% completion.** "75% completion" means 25% of the reactant remains. I need the time when $[A]/[A]_0 = 0.25$.

*Method A — Half-life counting.* $0.25 = (1/2)^2$. The concentration has halved **twice.** Since each half-life is 277 s:

$$t = 2 \times t_{1/2} = 2 \times 277 = 554\;\mathrm{s}$$

*Method B — Integrated rate law (Card 81).* This works even when the fraction remaining is not a power of $1/2$.

$$\ln\frac{[A]}{[A]_0} = -kt$$

$$\ln(0.25) = -2.50\times10^{-3} \times t$$

$$-1.386 = -2.50\times10^{-3} \times t$$

$$t = \frac{1.386}{2.50\times10^{-3}} = 554\;\mathrm{s}$$

Both methods give the same answer. Method A is faster when the fraction is a power of $1/2$. Method B works for any fraction.

### Step R — Reflect

- **Constant half-life property (Card 83 note):** Only first-order reactions have a half-life independent of concentration. A second-order reaction's half-life depends on $1/[\mathrm{A}]_0$; a zero-order reaction's half-life depends on $[\mathrm{A}]_0$. If a problem says "the half-life is constant," the reaction is first-order. ✓
- **Nuclear decay connection (Card 167):** Radioactive decay is first-order. The same mathematics governs both chemical kinetics and nuclear physics — $t_{1/2} = 0.693/\lambda$ where $\lambda$ is the decay constant (Card 146). ✓
- **Practical check:** 75% completion = 2 half-lives. 87.5% = 3 half-lives. 93.75% = 4 half-lives. For first-order processes, you can estimate completion times mentally. ✓

**Answer: $t_{1/2} = 277\;\mathrm{s}$ (4.62 min). 75% complete in $554\;\mathrm{s}$ (9.23 min).**

---

# Part VI: The Bridge Protocol — When Domains Chain

The examples above are single-domain. But AP and Olympiad chemistry problems chain two, three, or four domains. Cards 160–170 are dedicated to these cross-domain bridges. They do not contain new equations — they describe **problem architectures.**

### The Bridge Recognition Algorithm

When a problem describes two or more distinct steps, ask one question: **"What does the first step produce that the second step needs?"** That quantity is the bridge variable.

| First domain involves… | Bridge variable | Feeds into… | Bridge card |
|------------------------|----------------|-------------|-------------|
| Stoich: mass → moles of gas | $n_{\text{gas}}$ | Gas Law: $V = nRT/P$ or $P = nRT/V$ | 160, 161 |
| Stoich + $\Delta H$ | $q$ (heat released) | Calorimetry: $q = mc\Delta T$ | 162 |
| ICE table → equilibrium amounts | $n_{\text{eq}}$ or $x$ | Mass of product at equilibrium | 163 |
| $\Delta H^\circ$, $S^\circ$ → $\Delta G^\circ$ | $\Delta G^\circ$ | $\Delta G^\circ = -RT\ln K$ → equilibrium $K$ | 164 |
| $\Delta G^\circ$ | $\Delta G^\circ$ | $E^\circ = -\Delta G^\circ/(nF)$ → cell potential | 165 |
| $\mathrm{p}K_a$ of weak acid | $\mathrm{p}K_a$ | $\mathrm{pH} = \mathrm{p}K_a + \log([\mathrm{A}^-]/[\mathrm{HA}])$ | 169 |

---

### Bridge Worked Example: Combustion → Heat → Temperature Change

> 2.50 g of CH₄ burns in excess O₂. The heat released warms 500.0 g of water from 22.0°C.
> Final water temperature? ($\Delta H_{\text{comb}}^\circ = -890\;\mathrm{kJ/mol}$, $M_{\mathrm{CH_4}} = 16.04$, $c_w = 4.184$)

### Step I — Identify

**Trigger Trace:**

| Trigger Phrase | Card | Instant Equation | Domain |
|---------------|------|------------------|--------|
| "2.50 g" → moles | 1 | $n_{\mathrm{CH_4}} = m/M$ | Stoichiometry |
| "burns" / "$\Delta H_{\text{comb}}^\circ$" | 39, 40 | $q = n \times |\Delta H|$ (exothermic) | Thermochemistry |
| "warms water" / "temperature" | 33 | $\Delta T = q/(mc)$ | Calorimetry |
| **Bridge card** | **162** | Stoich → Thermo → Calorimetry | — |

**Cards fired: 1, 33, 39, 40, 162.** Five cards across three domains. Card 162 prescribes the chain: grams of fuel → moles of fuel → heat released → temperature rise of water.

### Step E — Execute

**Domain A — Stoichiometry.** Convert the fuel mass to moles. This is the entry point — every combustion problem starts here.

$$n_{\mathrm{CH_4}} = \frac{2.50\;\mathrm{g}}{16.04\;\mathrm{g/mol}} = 0.1559\;\mathrm{mol}$$

**Bridge from Domain A to Domain B:** $n_{\mathrm{CH_4}}$ becomes the input to the thermochemistry step.

**Domain B — Thermochemistry.** Multiply moles of fuel by the enthalpy of combustion per mole. The negative sign on $\Delta H^\circ$ means heat is released (Card 40). I take the absolute value because I want the quantity of heat, and I will track direction separately.

$$q_{\text{released}} = 0.1559\;\mathrm{mol} \times 890\;\frac{\mathrm{kJ}}{\mathrm{mol}} = 138.7\;\mathrm{kJ}$$

Convert to joules — the specific heat is in J/(g·K):

$$q = 138.7\;\mathrm{kJ} \times \frac{1000\;\mathrm{J}}{1\;\mathrm{kJ}} = 138{,}700\;\mathrm{J}$$

**Bridge from Domain B to Domain C:** $q$ becomes the input to the calorimetry step.

**Domain C — Calorimetry.** All of the heat released by combustion is absorbed by the water. Card 33: $q = mc\Delta T$, so $\Delta T = q/(mc)$.

$$\Delta T = \frac{138{,}700\;\mathrm{J}}{500.0\;\mathrm{g} \times 4.184\;\mathrm{J/(g\cdot K)}} = 66.3\;\mathrm{K}$$

$$T_f = 22.0 + 66.3 = 88.3^\circ\mathrm{C}$$

### Step R — Reflect

- **Unit trace across three domains:** $\mathrm{g} \xrightarrow{\div\;\mathrm{g/mol}} \mathrm{mol} \xrightarrow{\times\;\mathrm{kJ/mol}} \mathrm{kJ} \xrightarrow{\times 1000} \mathrm{J} \xrightarrow{\div(\mathrm{g \times J/(g\cdot K)})} \mathrm{K} \xrightarrow{+} {}^\circ\mathrm{C}$. Every transition is dimensionally sound. ✓
- **Plausibility:** 2.5 g of methane is about 0.16 mol. Combustion releases ~140 kJ — enough to bring half a liter of water nearly to boiling. This is consistent with everyday experience: a small amount of natural gas produces a large temperature rise. ✓
- **What if the water boiled?** The calculated $T_f = 88.3^\circ\mathrm{C}$ is below 100°C, so the water remains liquid. If $\Delta T$ had exceeded $(100-22) = 78\;\mathrm{K}$, the water would boil, and the calculation would need to account for the enthalpy of vaporization (Card 230 in the physics deck, or a similar card for water's $L_v$). This is the kind of realism check that the Reflect step catches. ✓

**Answer: $88.3^\circ\mathrm{C}$.**

---

# Part VII: Recovery Protocols — When You Are Stuck

### Protocol A: The Mole Bridge

**If you are stuck on any stoichiometry problem, convert everything to moles.** Grams → moles (Card 1). Gas volume at STP → moles (Card 6). Gas volume at other conditions → moles (Card 19). Molarity × volume → moles (Card 133). Moles are the universal currency of chemistry. Once everything is in moles, the mole ratio (Card 9) connects any two substances.

### Protocol B: Unit Back-Solve

Cannot remember the formula? Write the target unit. Write the units of every given quantity. Find the combination that produces the target unit. That combination IS the formula.

*Example:* Given mass in grams (g) and molar mass (g/mol). Target: moles (mol). Only combination: g ÷ (g/mol) = mol. → $n = m/M$ (Card 1).

### Protocol C: ICE Table Default

**If you see "equilibrium" and are stuck, draw an ICE table immediately** (Card 93). Even if you do not know what to do next, the table forces you to organize: initial concentrations, the change represented by $x$ multiplied by stoichiometric coefficients, and the equilibrium row as their sum. The $K$ expression will dictate the algebra.

### Protocol D: The 5% Check

After solving any equilibrium problem with the small-$x$ approximation (Card 94), **always** compute $x/[\text{initial}]_0 \times 100\%$. If it exceeds 5%, your approximation is invalid — solve the full quadratic. The AP exam explicitly tests whether you remember to perform this check.

### Protocol E: Convert $\Delta S$ Units Before Gibbs

The single most common mistake with $\Delta G = \Delta H - T\Delta S$ (Card 48): $\Delta S$ is almost always given in J/(mol·K); $\Delta H$ is almost always given in kJ/mol. **Convert one before subtracting.** Either divide $\Delta S$ by 1000 to get kJ, or multiply $\Delta H$ by 1000 to get J. If you subtract J from kJ, your answer will be wrong by a factor of 1000.

---

# Part VIII: The Problem-Difficulty Ladder

Problems are not hard because you lack intuition. They are hard because they fire more cards. Difficulty is a countable property.

| Level | Cards | Structure | Strategy |
|-------|-------|-----------|----------|
| **1. Direct** | 1–2 | Single equation, plug in | Trigger → Card → Solve |
| **2. Two-Step** | 2–4 | One conversion chain | g → mol → mol → g (Card 10) or $M_1V_1 = M_2V_2$ (Card 137) |
| **3. Multi-Domain** | 4–6 | Two domains, one bridge | Stoich → Gas (Card 160) or Stoich → Thermo (Card 162) |
| **4. Synthesis** | 6–10 | 3+ domains, multiple bridges | Limiting reagent → gas produced → heat released → $\Delta T$ → equilibrium shift |

Your practice files follow these levels:
- `chemistry-questions.md` C1–C20: Level 1–2, 1–3 cards
- `chemistry-questions.md` C21–C40: Level 2–3, 2–5 cards
- `chemistry-questions.md` C41–C60: Level 3–4, 4–8 cards

---

## Quick-Reference Card

### The Solve-Verify Protocol
| Step | Action |
|------|--------|
| **I — Identify** | Variable table + Trigger Trace. Which cards fired? |
| **E — Execute** | Write the card equations in order. Substitute. Solve. |
| **R — Reflect** | Unit trace. Sig figs. Extreme case. Physical plausibility. |

### The Mole Bridge
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
| Kinetics | 76–88 | Rate = $k[\mathrm{A}]^m[\mathrm{B}]^n$ |
| Equilibrium | 89–100 | $K_c$, ICE table, Le Chatelier |
| Acids/Bases | 101–120 | $\mathrm{pH} = -\log[\mathrm{H}^+]$, HH equation |
| Electrochem | 121–132 | $E^\circ_{\text{cell}}$, Nernst |
| Bridges | 160–170 | Stoich→Gas, Thermo→Eq, $K$→$E^\circ$ |

### Common Unit-Conversion Traps
| Trap | Fix | Card |
|------|-----|------|
| $\Delta S$ in J, $\Delta H$ in kJ | Convert one to match | 48 |
| $M$ in g/mol for $v_{\text{rms}}$ | Divide by 1000 → kg/mol | 30 |
| °C in gas law | Add 273.15 → K | 197 |
| mL in molarity | Divide by 1000 → L | 133 |
| $K$ expression uses molarity, not moles | Divide moles by volume in liters | 89, 93 |

---

> **The exam is won before you enter the room.** Two hundred thirteen cards have trained one reflex: see a phrase → write the equation. This document has trained a second: chain those equations mechanically, verify with unit analysis, and never guess.
>
> Difficulty equals the number of cards fired. A Level-1 problem fires two cards. A Level-4 problem fires eight. The method is identical. Count the cards. Trace the triggers. Execute.
>
> **If you can calculate it, you have understood it.**
