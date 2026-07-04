# Electrochemistry -- Calculation-First Training

> Philosophy: If you can calculate it, you at least understand it.
> How to use: Work through the example solution. The formula comes after -- as a summary of what your hands just did.
> Ratio: Beginner 2 : Intermediate 6 : Advanced 2 (10 patterns: 2-6-2)

---

## BEGINNER (2 patterns)

> Goal: 2 patterns. Assign oxidation numbers. Balance redox. These are the foundations.

---

### Pattern 1: Oxidation Numbers

**Example.** Assign **oxidation numbers** to all atoms in $\ce{KMnO4}$.

```
Rules (in priority order):
1. Group 1 metals: +1   → K = +1
2. Oxygen: -2 (except peroxides)  → each O = -2
3. Sum of all oxidation numbers = 0 (neutral compound)

+1 + x + 4(-2) = 0
x - 7 = 0
x = +7

So: K = +1, Mn = +7, O = -2
```

**Example.** Find ox. numbers in $\ce{Cr2O7^{2-}}$.

```
O = -2 (each)
Sum = charge = -2

2x + 7(-2) = -2
2x - 14 = -2
2x = +12
x = +6

Cr = +6
```

> SEE: **"oxidation number"** **"oxidation state"** of an element
> WRITE: Rules hierarchy: Group 1 (+1), Group 2 (+2), F (-1), H (+1), O (-2), Group 17 (-1). Sum = charge.
>
> Hand reflex: Set up equation: sum of (subscript $\times$ ox.#) = total charge. Solve for unknown.

---

**Practice B1.** Find **oxidation number** of S in $\ce{H2SO4}$.

**Practice B2.** Find **oxidation number** of Mn in $\ce{MnO4-}$.

**Practice B3.** Find **oxidation number** of C in $\ce{C2O4^{2-}}$ (oxalate).

---

### Pattern 2: Balancing Redox (Half-Reaction Method)

**Example.** Balance $\ce{MnO4- + Fe^{2+} -> Mn^{2+} + Fe^{3+}}$ in **acidic** solution.

```
Step 1: Separate into half-reactions.
Reduction: MnO4-  → Mn^{2+}
Oxidation: Fe^{2+} → Fe^{3+}

Step 2: Balance atoms other than O and H.
Mn: already balanced. Fe: already balanced.

Step 3: Balance O by adding H2O.
MnO4- → Mn^{2+} + 4H2O

Step 4: Balance H by adding H+ (acidic).
MnO4- + 8H+ → Mn^{2+} + 4H2O

Step 5: Balance charge by adding e-.
MnO4- + 8H+ + 5e- → Mn^{2+} + 4H2O   (left: -1+8-5=+2, right: +2 ✓)
Fe^{2+} → Fe^{3+} + e-

Step 6: Multiply to equalize e-.
MnO4- + 8H+ + 5e- → Mn^{2+} + 4H2O    (×1)
5Fe^{2+} → 5Fe^{3+} + 5e-               (×5)

Step 7: Add and cancel e-.
MnO4- + 8H+ + 5Fe^{2+} → Mn^{2+} + 4H2O + 5Fe^{3+}
```

> SEE: **"balance redox"** **"acidic"** **"basic"** + unbalanced redox equation
> WRITE: Split $\to$ balance atoms (O: add $\ce{H2O}$, H: add $\ce{H+}$) $\to$ balance charge (add $e^-$) $\to$ equalize $e^-$ $\to$ add.
>
> For basic: balance as if acidic, then add $\ce{OH-}$ to both sides to neutralize $\ce{H+}$.
> Hand reflex: Half-reactions $\to$ O $\to$ H $\to$ charge $\to$ electrons equal $\to$ combine.

---

**Practice B4.** Balance in **acidic** solution: $\ce{Cr2O7^{2-} + I- -> Cr^{3+} + I2}$.

---

## INTERMEDIATE (6 patterns)

> Goal: $E^\circ_{\text{cell}}$, $\Delta G^\circ = -nFE^\circ$, Nernst, electrolysis. The core four equations.

---

### Pattern 3: Standard Cell Potential

**Example.** Calculate $E^\circ_{\text{cell}}$ for $\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}$.

Given: $E^\circ(\ce{Zn^{2+}/Zn}) = -0.76 \ \text{V}$, $E^\circ(\ce{Cu^{2+}/Cu}) = +0.34 \ \text{V}$.

```
Identify: Zn → Zn^{2+} + 2e-  (oxidation, anode)
         Cu^{2+} + 2e- → Cu  (reduction, cathode)

E°_cell = E°_cathode - E°_anode = 0.34 - (-0.76) = 1.10 V

Or: E°_cell = E°_red(cathode) + E°_ox(anode)
E°_ox(anode) = -E°_red(anode) = -(-0.76) = +0.76
E°_cell = 0.34 + 0.76 = 1.10 V
```

> SEE: **"E°"** **"cell potential"** **"standard reduction potential"** + table of $E^\circ_{\text{red}}$
> WRITE: $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ (reduction potentials)
>
> Both $E^\circ$ are reduction potentials from the table. More positive $E^\circ_{\text{red}}$ = better oxidizing agent (gets reduced = cathode).
> Hand reflex: Find the two half-reactions $\to$ more positive $E^\circ$ is the cathode $\to$ subtract.

---

**Practice I1.** Calculate $E^\circ_{\text{cell}}$ for $\ce{Mg + Ni^{2+} -> Mg^{2+} + Ni}$.

| Half-reaction | $E^\circ$ (V) |
|---|---|
| $\ce{Mg^{2+} + 2e- -> Mg}$ | $-2.37$ |
| $\ce{Ni^{2+} + 2e- -> Ni}$ | $-0.25$ |

**Practice I2.** Is the reaction spontaneous? $E^\circ_{\text{cell}} > 0$ = spontaneous.

---

### Pattern 4: $\Delta G^\circ = -nFE^\circ$

**Example.** Calculate $\Delta G^\circ$ and $K$ for $\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}$ ($E^\circ_{\text{cell}} = 1.10 \ \text{V}$, $n = 2$).

$$
\begin{aligned}
\Delta G^\circ &= -nFE^\circ_{\text{cell}} \\[4pt]
&= -2 \times 96485 \times 1.10 \\[4pt]
&= -212{,}267 \ \text{J/mol} = \boxed{-212 \ \text{kJ/mol}}
\end{aligned}
$$

$$
\begin{aligned}
\Delta G^\circ &= -RT\ln K \\[4pt]
\ln K &= \dfrac{-\Delta G^\circ}{RT} = \dfrac{212{,}267}{8.314 \times 298} = 85.71 \\[4pt]
K &= e^{85.71} = \boxed{1.6 \times 10^{37}}
\end{aligned}
$$

Alternatively, use: $E^\circ_{\text{cell}} = \dfrac{RT}{nF}\ln K$ or $E^\circ_{\text{cell}} = \dfrac{0.0592}{n}\log K$ at $25^\circ\text{C}$.

> SEE: **"ΔG°"** **"Gibbs"** + $E^\circ_{\text{cell}}$ + $n$
> WRITE: $\Delta G^\circ = -nFE^\circ_{\text{cell}}$
>
> $F = 96485 \ \text{C/mol}$ (Faraday constant). $n$ = number of electrons transferred.
> $\Delta G^\circ < 0$ = spontaneous. $\Delta G^\circ > 0$ = nonspontaneous.
>
> Hand reflex: $E^\circ_{\text{cell}}$ $\to$ $-nF \times$ that $\to$ $\Delta G^\circ$ in J $\to$ $\ln K = -\Delta G^\circ/RT$.

---

**Practice I3.** $\ce{2Ag+ + Cu -> 2Ag + Cu^{2+}}$, $E^\circ_{\text{cell}} = 0.46 \ \text{V}$, $n = 2$. Find $\Delta G^\circ$ and $K$.

---

### Pattern 5: Nernst Equation

**Example.** Calculate $E_{\text{cell}}$ at $25^\circ\text{C}$ for $\ce{Zn + Cu^{2+}(0.010 M) -> Zn^{2+}(1.00 M) + Cu}$.
$E^\circ_{\text{cell}} = 1.10 \ \text{V}$, $n = 2$.

$$
\begin{aligned}
E_{\text{cell}} &= E^\circ_{\text{cell}} - \dfrac{RT}{nF}\ln Q \\[4pt]
Q &= \dfrac{[\ce{Zn^{2+}}]}{[\ce{Cu^{2+}}]} = \dfrac{1.00}{0.010} = 100 \\[4pt]
E_{\text{cell}} &= 1.10 - \dfrac{0.0592}{2}\log(100) \\[4pt]
&= 1.10 - \dfrac{0.0592}{2} \times 2 = 1.10 - 0.0592 = \boxed{1.04 \ \text{V}}
\end{aligned}
$$

At $25^\circ\text{C}$: $E_{\text{cell}} = E^\circ_{\text{cell}} - \dfrac{0.0592}{n}\log Q$

> SEE: **"nonstandard"** **"Nernst"** **"concentration"** + $E^\circ$ + concentrations
> WRITE: $E = E^\circ - \dfrac{RT}{nF}\ln Q$ or $E = E^\circ - \dfrac{0.0592}{n}\log Q$ (at $25^\circ\text{C}$)
>
> $Q$ = reaction quotient (products/reactants). Solids/liquids = 1. Gases use partial pressures.
> Hand reflex: Write $Q$ $\to$ $0.0592/n \times \log Q$ $\to$ subtract from $E^\circ$.

---

**Practice I4.** $E^\circ_{\text{cell}} = 0.78 \ \text{V}$ for $\ce{2Fe^{3+} + Sn^{2+} -> 2Fe^{2+} + Sn^{4+}}$ ($n = 2$). Find $E_{\text{cell}}$ when $[\ce{Fe^{3+}}] = 0.50$, $[\ce{Fe^{2+}}] = 0.10$, $[\ce{Sn^{2+}}] = 0.20$, $[\ce{Sn^{4+}}] = 0.010$.

---

### Pattern 6: $K$ from $E^\circ$

**Example.** Find $K$ for $\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}$ at $25^\circ\text{C}$. $E^\circ_{\text{cell}} = 1.10 \ \text{V}$, $n = 2$.

At equilibrium: $E_{\text{cell}} = 0$, $Q = K$.

$$
\begin{aligned}
0 &= E^\circ_{\text{cell}} - \dfrac{0.0592}{n}\log K \\[4pt]
\log K &= \dfrac{nE^\circ_{\text{cell}}}{0.0592} = \dfrac{2 \times 1.10}{0.0592} = 37.16 \\[4pt]
K &= 10^{37.16} = \boxed{1.4 \times 10^{37}}
\end{aligned}
$$

> SEE: **"K from E°"** **"equilibrium constant"** + $E^\circ_{\text{cell}}$
> WRITE: $\log K = \dfrac{nE^\circ_{\text{cell}}}{0.0592}$ at $25^\circ\text{C}$
>
> Larger $E^\circ_{\text{cell}}$ $\to$ larger $K$ $\to$ more product-favored.
> Hand reflex: $nE^\circ / 0.0592$ $\to$ $\log K$ $\to$ $10^{\text{that}}$ $\to$ $K$.

---

**Practice I5.** $E^\circ_{\text{cell}} = 0.03 \ \text{V}$, $n = 1$. Find $K$. Is the reaction product-favored?

---

### Pattern 7: Electrolysis -- Faraday's Laws

**Example.** How many **grams** of $\ce{Cu}$ are deposited when a current of **2.50 A** flows through $\ce{CuSO4}$ solution for **30.0 min**?

$$
\begin{aligned}
q &= I \cdot t = 2.50 \times (30.0 \times 60) = 4500 \ \text{C} \\[4pt]
n_{e^-} &= \dfrac{q}{F} = \dfrac{4500}{96485} = 0.04664 \ \text{mol e}^- \\[4pt]
\ce{Cu^{2+} + 2e- &-> Cu} \quad \Rightarrow \quad \dfrac{1 \ \text{mol Cu}}{2 \ \text{mol e}^-} \\[4pt]
n_{\ce{Cu}} &= 0.04664 \times \dfrac{1}{2} = 0.02332 \ \text{mol} \\[4pt]
m_{\ce{Cu}} &= 0.02332 \times 63.55 = \boxed{1.48 \ \text{g}}
\end{aligned}
$$

> SEE: **"electrolysis"** **"current"** **"deposited"** **"plated"** + amperes + time
> WRITE: $q = I \cdot t$ $\to$ $n_{e^-} = \dfrac{q}{F}$ $\to$ moles of substance via stoichiometry $\to$ mass.
>
> $F = 96485 \ \text{C/mol e}^-$. $I$ in amperes (C/s), $t$ in seconds.
> Hand reflex: $I \times t$ $\to$ $q$ $\to$ $\div F$ $\to$ mol $e^-$ $\to$ $\times$ stoich ratio $\to$ grams.

---

**Practice I6.** How many **grams** of $\ce{Ag}$ are deposited from $\ce{AgNO3}$ by **1.50 A** for **25.0 min**? ($\ce{Ag+ + e- -> Ag}$)

**Practice I7.** What **current** (A) deposits **5.00 g** of $\ce{Cr}$ from $\ce{Cr^{3+}}$ in **2.00 hours**? ($\ce{Cr^{3+} + 3e- -> Cr}$)

---

### Pattern 8: Concentration Cells

**Example.** A **concentration cell** has two $\ce{Cu}$ electrodes: one in $1.00 \ \text{M} \ \ce{Cu^{2+}}$, the other in $0.0100 \ \text{M} \ \ce{Cu^{2+}}$. Find $E_{\text{cell}}$ at $25^\circ\text{C}$.

$$
\begin{aligned}
\text{Anode (dilute): } &\ce{Cu -> Cu^{2+}(0.0100 M) + 2e-} \\
\text{Cathode (concentrated): } &\ce{Cu^{2+}(1.00 M) + 2e- -> Cu} \\[4pt]
\text{Overall: } &\ce{Cu^{2+}(1.00 M) -> Cu^{2+}(0.0100 M)} \quad E^\circ_{\text{cell}} = 0 \\[4pt]
Q &= \dfrac{[\ce{Cu^{2+}}]_{\text{dilute}}}{[\ce{Cu^{2+}}]_{\text{conc}}} = \dfrac{0.0100}{1.00} = 0.0100 \\[4pt]
E_{\text{cell}} &= 0 - \dfrac{0.0592}{2}\log(0.0100) = -\dfrac{0.0592}{2} \times (-2) = \boxed{0.0592 \ \text{V}}
\end{aligned}
$$

> SEE: **"concentration cell"** same electrode, different concentrations
> WRITE: $E^\circ_{\text{cell}} = 0$. $Q$ = [dilute]/[conc] (anode/cathode). Apply Nernst.
>
> Hand reflex: Same metal, different [] $\to$ $E^\circ = 0$ $\to$ Nernst with $Q < 1$ $\to$ positive $E$.

---

**Practice I8.** A **concentration cell**: $\ce{Ag}$ electrodes, $[\ce{Ag+}] = 0.100 \ \text{M}$ and $0.0010 \ \text{M}$. Find $E_{\text{cell}}$.

---

## ADVANCED (2 patterns) -- College-Level

---

### Pattern 9: Overpotential & Real Electrolysis Voltage

**Example.** To electrolyze water ($\ce{2H2O -> 2H2 + O2}$, $E^\circ = -1.23 \ \text{V}$), the **overpotential** at the $\ce{O2}$ electrode is $+0.40 \ \text{V}$ and at the $\ce{H2}$ electrode is $-0.10 \ \text{V}$. The internal resistance causes an $IR$ drop of $0.30 \ \text{V}$. Find the **applied voltage** needed.

$$
\begin{aligned}
E_{\text{applied}} &= |E^\circ_{\text{cell}}| + \eta_{\text{anode}} + |\eta_{\text{cathode}}| + IR \\[4pt]
&= 1.23 + 0.40 + 0.10 + 0.30 = \boxed{2.03 \ \text{V}}
\end{aligned}
$$

> Theoretical minimum: $1.23 \ \text{V}$. Real: $2.03 \ \text{V}$ (65% extra due to kinetics + resistance).
>
> SEE: **"overpotential"** **"applied voltage"** **"IR drop"**
> WRITE: $E_{\text{applied}} = |E^\circ| + \eta_a + |\eta_c| + IR$
>
> Hand reflex: Theoretical voltage + all overpotentials + IR drop = real applied voltage.

---

**Practice A1.** Electrolysis of $\ce{NaCl}$ (brine): $E^\circ = -2.19 \ \text{V}$. $\eta_{\ce{Cl2}} = 0.10 \ \text{V}$, $|\eta_{\ce{H2}}| = 0.30 \ \text{V}$, $IR = 0.50 \ \text{V}$. Find applied voltage.

---

### Pattern 10: Latimer & Frost Diagrams (Thermodynamic Stability)

**Example.** Given the Latimer diagram for Mn in acidic solution:

$$
\ce{MnO4- ->[+0.56] MnO4^{2-} ->[+2.26] MnO2 ->[+0.95] Mn^{3+} ->[+1.51] Mn^{2+} ->[-1.18] Mn}
$$

Which species is most susceptible to **disproportionation**?

$$
\begin{aligned}
\ce{MnO4^{2-}}: &\ E^\circ_{\text{right}} = 2.26 \ \text{V}, \ E^\circ_{\text{left}} = +0.56 \ \text{V} \ (\text{reversed: } -0.56) \\[4pt]
E^\circ_{\text{disprop}} &= E^\circ_{\text{right}} + E^\circ_{\text{left(reversed)}} = 2.26 - 0.56 = 1.70 \ \text{V} > 0
\end{aligned}
$$

$\ce{MnO4^{2-}}$ disproportionates (spontaneous: $E^\circ > 0$).

Check $\ce{Mn^{3+}}$:

$$
E^\circ = 1.51 \ \text{V (right)}, \ E^\circ_{\text{left(reversed)}} = -0.95 \ \text{V}
$$

$$
E^\circ_{\text{disprop}} = 1.51 - 0.95 = 0.56 \ \text{V} > 0
$$

$\ce{Mn^{3+}}$ also disproportionates!

> SEE: **"Latimer"** **"Frost"** **"disproportionation"** + diagram with potentials
> WRITE: $E^\circ_{\text{disprop}} = E^\circ_{\text{right}} - E^\circ_{\text{left}}$. If $> 0$, species disproportionates.
>
> Hand reflex: Look at each intermediate $\to$ right potential minus left potential $\to$ positive = unstable.

---

**Practice A2.** Latimer (acidic): $\ce{Cu^{2+} ->[+0.15] Cu+ ->[+0.52] Cu}$. Does $\ce{Cu+}$ disproportionate? Calculate $E^\circ_{\text{disprop}}$ and $K$.

---

## MASTER CHEAT SHEET -- Trigger to Equation

| # | SEE this word/phrase... | Your hand writes... |
|---|---|---|
| 1 | **oxidation number** | sum(subscript $\times$ ox.#) = total charge |
| 2 | **balance redox** | split $\to$ O $\to$ H $\to$ charge $\to$ equalize $e^-$ $\to$ combine |
| 3 | **E°cell** **standard potential** | $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ |
| 4 | **ΔG°** + $E^\circ$ + $n$ | $\Delta G^\circ = -nFE^\circ_{\text{cell}}$ |
| 5 | **Nernst** **nonstandard** | $E = E^\circ - \dfrac{0.0592}{n}\log Q$ (at $25^\circ\text{C}$) |
| 6 | **K from E°** | $\log K = \dfrac{nE^\circ}{0.0592}$ (at $25^\circ\text{C}$) |
| 7 | **electrolysis** **current** **plated** | $q = It$ $\to$ $n_{e^-} = q/F$ $\to$ mass via stoich |
| 8 | **concentration cell** | $E^\circ = 0$, $Q$ = [dilute]/[conc], apply Nernst |
| 9 | **overpotential** **applied voltage** | $E_{\text{app}} = \vert E^\circ\vert + \eta_a + \vert\eta_c\vert + IR$ |
| 10 | **Latimer** **disproportionation** | $E^\circ_{\text{disprop}} = E^\circ_{\text{right}} - E^\circ_{\text{left}}$ |

---

## CONSTANT REFERENCE

| Constant | Value |
|---|---|
| $F$ (Faraday) | $96485 \ \text{C/mol e}^-$ |
| $R$ | $8.314 \ \text{J/mol·K}$ |
| Nernst at $25^\circ\text{C}$ | $E = E^\circ - \dfrac{0.0592}{n}\log Q$ |
| $q = It$ | $q$ (C), $I$ (A = C/s), $t$ (s) |

---

## ANSWERS

> Solve everything first. Check after.

**Beginner**
- B1: S = +6 &nbsp;&nbsp;|&nbsp;&nbsp; B2: Mn = +7 &nbsp;&nbsp;|&nbsp;&nbsp; B3: C = +3
- B4: $\ce{Cr2O7^{2-} + 14H+ + 6I- -> 2Cr^{3+} + 7H2O + 3I2}$

**Intermediate**
- I1: $E^\circ_{\text{cell}} = 2.12 \ \text{V}$ &nbsp;&nbsp;|&nbsp;&nbsp; I2: Yes (positive $E^\circ$)
- I3: $\Delta G^\circ = -88.8 \ \text{kJ/mol}$, $K = 3.6 \times 10^{15}$
- I4: $E_{\text{cell}} = 0.84 \ \text{V}$
- I5: $K = 3.2$, weakly product-favored
- I6: $m_{\ce{Ag}} = 2.52 \ \text{g}$
- I7: $I = 3.87 \ \text{A}$
- I8: $E_{\text{cell}} = 0.118 \ \text{V}$

**Advanced**
- A1: $E_{\text{app}} = 3.09 \ \text{V}$
- A2: $E^\circ_{\text{disprop}} = 0.37 \ \text{V} > 0$ (disproportionates), $K = 1.8 \times 10^6$
