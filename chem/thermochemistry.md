# Thermochemistry -- Calculation-First Training

> Philosophy: If you can calculate it, you at least understand it.
> How to use: Work through the example solution. The formula comes after -- as a summary of what your hands just did.
> Ratio: Beginner 2 : Intermediate 6 : Advanced 2 (10 patterns: 2-6-2)

---

## BEGINNER (2 patterns)

> Goal: 2 patterns. Heat is just another thing to track -- like grams or moles.

---

### Pattern 1: $q = mc\Delta T$ (Specific Heat)

**Example.** How much **heat** (in J) is needed to raise **50.0 g** of water ($c = 4.184 \ \text{J/g}\!\cdot\!^\circ\text{C}$) from **22.0°C** to **37.0°C**?

$$
\begin{aligned}
\Delta T &= 37.0 - 22.0 = 15.0^\circ\text{C} \\
q &= mc\Delta T = 50.0 \times 4.184 \times 15.0 = 3140 \ \text{J} = 3.14 \ \text{kJ}
\end{aligned}
$$

> SEE: **"heat"** **"specific heat"** **"c = "** + mass + $\Delta T$
> WRITE: $q = mc\Delta T$

| Symbol | Meaning | Common Units |
|---|---|---|
| $q$ | heat | J or kJ |
| $m$ | mass | g |
| $c$ | specific heat | $\text{J/g}\!\cdot\!^\circ\text{C}$ |
| $\Delta T$ | $T_{\text{final}} - T_{\text{initial}}$ | $^\circ\text{C}$ or K |

> Sign convention: $q > 0$ = endothermic (absorbed). $q < 0$ = exothermic (released).
> Hand reflex: See **c** and mass and $\Delta T$ $\to$ $q = mc\Delta T$.

---

**Practice B1.** **125.0 g** of water ($c = 4.184$) cools from **85.0°C** to **25.0°C**. How much **heat** is released (kJ)?

**Practice B2.** **25.0 g** of aluminum ($c = 0.897$) absorbs **450  J** of **heat**. What is $\Delta T$ ($^\circ\text{C}$)?

**Practice B3.** A **metal** (mass = **45.0 g**) cools from $100.0^\circ\text{C}$ to $25.0^\circ\text{C}$, releasing **1520  J**. Find its **specific heat** $c$.

---

### Pattern 2: $\Delta H$ from Stoichiometry

**Example.** $\ce{CH4 + 2O2 -> CO2 + 2H2O}$ has $\Delta H = -890 \ \text{kJ}$ per mole of $\ce{CH4}$. How much **heat** is released when **16.0 g** of $\ce{CH4}$ burns?

$$
\begin{aligned}
M(\ce{CH4}) &= 12.01 + 4(1.008) = 16.04 \ \text{g/mol} \\
n_{\ce{CH4}} &= \dfrac{16.0}{16.04} = 0.9975 \ \text{mol} \\[4pt]
q &= 0.9975 \times (-890) = -888 \ \text{kJ} \quad (\text{released})
\end{aligned}
$$

> SEE: **"ΔH"** **"enthalpy"** **"heat of reaction"** + grams of reactant/product
> WRITE: $q = n \cdot \Delta H_{\text{rxn}}$ where $n$ comes from stoichiometry
>
> Hand reflex: grams $\xrightarrow{\div M}$ moles $\xrightarrow{\times \Delta H}$ heat. Same chain as mass-to-mass.
> **Watch the sign:** negative = released, positive = absorbed.

---

**Practice B4.** $\ce{2H2 + O2 -> 2H2O}$ has $\Delta H = -572 \ \text{kJ}$ (per 2 mol $\ce{H2}$). How much **heat** from burning **4.00 g** of $\ce{H2}$?

**Practice B5.** $\ce{CaCO3 -> CaO + CO2}$ has $\Delta H = +178 \ \text{kJ}$ (per mol $\ce{CaCO3}$). How much **heat** is absorbed to decompose **25.0 g** of $\ce{CaCO3}$?

---

## INTERMEDIATE (6 patterns)

> Goal: Manipulate $\Delta H$. Flip it, add it, build it from fragments.

---

### Pattern 3: Hess's Law

**Example.** Find $\Delta H$ for $\ce{2C + H2 -> C2H2}$ using:

$$
\begin{aligned}
\ce{C2H2 + 5/2 O2 &-> 2CO2 + H2O} \quad &\Delta H &= -1300 \ \text{kJ} \quad &\text{(1)} \\
\ce{C + O2 &-> CO2} \quad &\Delta H &= -394 \ \text{kJ} \quad &\text{(2)} \\
\ce{H2 + 1/2 O2 &-> H2O} \quad &\Delta H &= -286 \ \text{kJ} \quad &\text{(3)}
\end{aligned}
$$

```
Target: 2C + H2 -> C2H2

Reverse (1): 2CO2 + H2O -> C2H2 + 5/2 O2    ΔH = +1300 kJ
Keep (2) x2:  2C + 2O2 -> 2CO2              ΔH = 2(-394) = -788 kJ
Keep (3):     H2 + 1/2 O2 -> H2O            ΔH = -286 kJ

Add and cancel:
2C + 2O2 + H2 + 1/2 O2 + 2CO2 + H2O -> 2CO2 + H2O + C2H2 + 5/2 O2
Cancels: 2CO2, H2O. 2O2 + 1/2 O2 = 5/2 O2 cancels.
Leaves: 2C + H2 -> C2H2

ΔH_target = +1300 + (-788) + (-286) = +226 kJ
```

> SEE: **"Hess's Law"** **"calculate ΔH"** + given multiple reactions with known $\Delta H$
> WRITE: Flip reactions (flip sign), scale reactions (scale $\Delta H$), add them up.
>
> Hand reflex: Write target $\to$ rearrange given equations $\to$ cancel intermediates $\to$ sum $\Delta H$.

---

**Practice I1.** Find $\Delta H$ for $\ce{NO + 1/2 O2 -> NO2}$ using:

$$
\begin{aligned}
\ce{1/2 N2 + 1/2 O2 &-> NO} \quad &\Delta H = +90 \ \text{kJ} \\
\ce{1/2 N2 + O2 &-> NO2} \quad &\Delta H = +34 \ \text{kJ}
\end{aligned}
$$

---

### Pattern 4: $\Delta H^\circ$ from $\Delta H_f^\circ$

**Example.** Calculate $\Delta H^\circ$ for $\ce{CH4 + 2O2 -> CO2 + 2H2O}$.

Given $\Delta H_f^\circ$ (kJ/mol): $\ce{CH4} = -74.8$, $\ce{CO2} = -393.5$, $\ce{H2O(l)} = -285.8$, $\ce{O2(g)} = 0$.

$$
\begin{aligned}
\Delta H^\circ &= \sum n \Delta H_f^\circ(\text{products}) - \sum n \Delta H_f^\circ(\text{reactants}) \\[4pt]
&= [1(-393.5) + 2(-285.8)] - [1(-74.8) + 2(0)] \\[4pt]
&= [-393.5 - 571.6] - [-74.8] \\[4pt]
&= -965.1 + 74.8 = -890.3 \ \text{kJ}
\end{aligned}
$$

> SEE: **"ΔH°f"** **"standard enthalpy of formation"** + table of values
> WRITE: $\Delta H^\circ = \sum n \Delta H_f^\circ(\text{products}) - \sum n \Delta H_f^\circ(\text{reactants})$
>
> **Remember:** $\Delta H_f^\circ$ of any element in its standard state = 0 (e.g., $\ce{O2(g)}$, $\ce{H2(g)}$, $\ce{C(s)}$).
> Hand reflex: products $-$ reactants. Multiply by coefficients. Elements = 0.

---

**Practice I2.** Calculate $\Delta H^\circ$ for $\ce{2NH3 + 4H2O -> 2NO2 + 7H2}$.

| Substance | $\Delta H_f^\circ$ (kJ/mol) |
|---|---|
| $\ce{NH3(g)}$ | $-46.0$ |
| $\ce{H2O(l)}$ | $-285.8$ |
| $\ce{NO2(g)}$ | $+33.2$ |
| $\ce{H2(g)}$ | $0$ |

---

### Pattern 5: Bond Enthalpy

**Example.** Estimate $\Delta H$ for $\ce{H2 + Cl2 -> 2HCl}$ using bond enthalpies.

Bond enthalpies (kJ/mol): $\ce{H-H} = 436$, $\ce{Cl-Cl} = 243$, $\ce{H-Cl} = 431$.

```
Bonds broken (reactants):  H-H + Cl-Cl = 436 + 243 = 679 kJ (energy IN, +)
Bonds formed (products):   2(H-Cl) = 2 * 431 = 862 kJ (energy OUT, -)

ΔH = ΣBE(broken) - ΣBE(formed) = 679 - 862 = -183 kJ
```

> SEE: **"bond enthalpy"** **"bond energy"** + table of bond energies
> WRITE: $\Delta H = \sum \text{BE}_{\text{broken}} - \sum \text{BE}_{\text{formed}}$
>
> Hand reflex: Draw Lewis structures $\to$ count bonds in reactants (broken, +) $\to$ count bonds in products (formed, $-$) $\to$ $\Delta H$ = broken $-$ formed.
> **Breaking bonds = endothermic (+). Forming bonds = exothermic (-).**

---

**Practice I3.** Estimate $\Delta H$ for $\ce{N2 + 3H2 -> 2NH3}$.

| Bond | BE (kJ/mol) |
|---|---|
| $\ce{N#N}$ | 941 |
| $\ce{H-H}$ | 436 |
| $\ce{N-H}$ | 391 |

---

### Pattern 6: Coffee Cup Calorimetry

**Example.** **50.0 mL** of **1.00 M** $\ce{HCl}$ at $25.0^\circ\text{C}$ is mixed with **50.0 mL** of **1.00 M** $\ce{NaOH}$ at $25.0^\circ\text{C}$ in a **coffee cup calorimeter**. Final temperature = $31.7^\circ\text{C}$. Solution density = $1.00 \ \text{g/mL}$, $c = 4.184 \ \text{J/g}\!\cdot\!^\circ\text{C}$. Find $\Delta H$ per mole of $\ce{H2O}$ formed.

$$
\begin{aligned}
m_{\text{solution}} &= (50.0 + 50.0) \times 1.00 = 100.0 \ \text{g} \\
\Delta T &= 31.7 - 25.0 = 6.7^\circ\text{C} \\[4pt]
q_{\text{solution}} &= mc\Delta T = 100.0 \times 4.184 \times 6.7 = 2803 \ \text{J} \\[4pt]
q_{\text{rxn}} &= -q_{\text{solution}} = -2803 \ \text{J} = -2.80 \ \text{kJ} \\[4pt]
n_{\ce{HCl}} &= 1.00 \times 0.0500 = 0.0500 \ \text{mol} = n_{\ce{H2O}} \\[4pt]
\Delta H &= \dfrac{-2.80}{0.0500} = -56.1 \ \text{kJ/mol}
\end{aligned}
$$

> SEE: **"coffee cup"** **"calorimeter"** **"mixed"** + initial/final T + solution mass
> WRITE: $q_{\text{rxn}} = -mc\Delta T$, then $\Delta H = \dfrac{q_{\text{rxn}}}{n_{\text{limiting}}}$
>
> Hand reflex: $q_{\text{solution}} = mc\Delta T$ $\to$ $q_{\text{rxn}} = -q_{\text{solution}}$ (sign flip!) $\to$ $\Delta H = q_{\text{rxn}} / n$.

---

**Practice I4.** **100.0 mL** of **0.500 M** $\ce{AgNO3}$ at $22.0^\circ\text{C}$ + **100.0 mL** of **0.500 M** $\ce{NaCl}$ at $22.0^\circ\text{C}$. Final T = $24.6^\circ\text{C}$. Solution: $d = 1.00 \ \text{g/mL}$, $c = 4.184$. Find $\Delta H$ (kJ/mol $\ce{AgCl}$).

---

### Pattern 7: Bomb Calorimetry

**Example.** A **0.500 g** sample of naphthalene ($\ce{C10H8}$) is burned in a **bomb calorimeter** ($C_{\text{cal}} = 8.50 \ \text{kJ/}^\circ\text{C}$). Temperature rises from $25.00^\circ\text{C}$ to $27.42^\circ\text{C}$. Find $\Delta E$ per mole (kJ/mol).

$$
\begin{aligned}
\Delta T &= 27.42 - 25.00 = 2.42^\circ\text{C} \\[4pt]
q_{\text{cal}} &= C_{\text{cal}} \cdot \Delta T = 8.50 \times 2.42 = 20.57 \ \text{kJ} \\[4pt]
q_{\text{rxn}} &= -q_{\text{cal}} = -20.57 \ \text{kJ} \\[4pt]
n &= \dfrac{0.500}{128.17} = 0.003901 \ \text{mol} \\[4pt]
\Delta E &= \dfrac{-20.57}{0.003901} = -5270 \ \text{kJ/mol}
\end{aligned}
$$

> SEE: **"bomb calorimeter"** **"C_cal"** **"heat capacity of calorimeter"** + $\Delta T$
> WRITE: $q_{\text{rxn}} = -C_{\text{cal}} \cdot \Delta T$, then $\Delta E = \dfrac{q_{\text{rxn}}}{n}$
>
> Bomb calorimeter: constant **volume** $\to$ measures $\Delta E$, not $\Delta H$. Calorimeter has its own heat capacity $C_{\text{cal}}$ (kJ/°C), no mass or $c$ needed.
>
> Hand reflex: See **C_cal** $\to$ $q = -C_{\text{cal}} \Delta T$ (no mass!). See **bomb** $\to$ answer is $\Delta E$ not $\Delta H$.

---

**Practice I5.** **1.000 g** of benzoic acid ($\ce{C7H6O2}$, M = 122.12) is burned in a **bomb calorimeter** ($C_{\text{cal}} = 6.24 \ \text{kJ/}^\circ\text{C}$). T rises by $4.23^\circ\text{C}$. Find $\Delta E$ (kJ/mol).

---

### Pattern 8: Phase Changes & Heating Curves

**Example.** How much **heat** to convert **25.0 g** of ice at **-10.0°C** to steam at **120.0°C**?

Data: $c_{\text{ice}} = 2.09$, $c_{\text{water}} = 4.184$, $c_{\text{steam}} = 2.01 \ \text{J/g}\!\cdot\!^\circ\text{C}$. $\Delta H_{\text{fus}} = 334 \ \text{J/g}$, $\Delta H_{\text{vap}} = 2260 \ \text{J/g}$.

```
Step 1: Heat ice from -10.0°C to 0°C
q1 = m * c_ice * ΔT = 25.0 * 2.09 * 10.0 = 522.5 J

Step 2: Melt ice at 0°C
q2 = m * ΔH_fus = 25.0 * 334 = 8350 J

Step 3: Heat water from 0°C to 100°C
q3 = 25.0 * 4.184 * 100.0 = 10460 J

Step 4: Boil water at 100°C
q4 = 25.0 * 2260 = 56500 J

Step 5: Heat steam from 100°C to 120°C
q5 = 25.0 * 2.01 * 20.0 = 1005 J

q_total = 522.5 + 8350 + 10460 + 56500 + 1005 = 76838 J = 76.8 kJ
```

> SEE: **"phase change"** **"melt"** **"boil"** **"ice to steam"** + multiple steps
> WRITE: $q = mc\Delta T$ (within phase) and $q = m \cdot \Delta H_{\text{fus/vap}}$ (at phase change)
>
> Hand reflex: Break into segments $\to$ $q = mc\Delta T$ on slopes $\to$ $q = m\Delta H$ on plateaus $\to$ sum all $q$.
> **No $\Delta T$ during a phase change.** T stays constant while bonds break.

---

**Practice I6.** How much **heat** to warm **50.0 g** of water from **30.0°C** to steam at **100.0°C**? ($c_{\text{water}} = 4.184$, $\Delta H_{\text{vap}} = 2260 \ \text{J/g}$)

**Practice I7.** **18.0 g** of steam at $100.0^\circ\text{C}$ condenses and cools to water at $50.0^\circ\text{C}$. **Heat** released? ($\Delta H_{\text{vap}} = 2260 \ \text{J/g}$, $c_{\text{water}} = 4.184$)

---

## ADVANCED (2 patterns) -- College-Level

---

### Pattern 9: Born-Haber Cycle

**Example.** Calculate the **lattice energy** of $\ce{NaCl}$ using Born-Haber cycle data (all in kJ/mol):

Sublimation of Na(s): $+108$, Ionization of Na(g): $+496$, Bond dissociation of $\ce{Cl2}$: $+243$, Electron affinity of Cl: $-349$, $\Delta H_f^\circ(\ce{NaCl}) = -411$.

```
Born-Haber cycle (sum of all steps = ΔH°f):

Na(s) -> Na(g)             ΔH = +108   (sublimation)
Na(g) -> Na+(g) + e-       ΔH = +496   (ionization)
1/2 Cl2(g) -> Cl(g)        ΔH = +243/2 = +121.5  (1/2 bond dissociation)
Cl(g) + e- -> Cl-(g)       ΔH = -349   (electron affinity)
Na+(g) + Cl-(g) -> NaCl(s) ΔH = U      (lattice energy, what we want)
---------------------------------------------------
Na(s) + 1/2 Cl2(g) -> NaCl(s)   ΔH°f = -411

+108 + 496 + 121.5 + (-349) + U = -411
U = -411 - 108 - 496 - 121.5 + 349 = -787.5 kJ/mol

Lattice energy = 788 kJ/mol (magnitude, always positive)
```

> SEE: **"Born-Haber"** **"lattice energy"** + sublimation, ionization, EA, $\Delta H_f^\circ$
> WRITE: Sum all steps = $\Delta H_f^\circ$, solve for lattice energy $U$.
>
> Hand reflex: $\Delta H_f^\circ$ = sublimation + IE + $\frac{1}{2}$BE + EA + $U$. Solve for $U$.

---

**Practice A1.** Calculate the **lattice energy** of $\ce{KCl}$ using:

| Step | $\Delta H$ (kJ/mol) |
|---|---|
| $\ce{K(s) -> K(g)}$ | $+89$ |
| $\ce{K(g) -> K+(g) + e-}$ | $+419$ |
| $\ce{Cl2(g) -> 2Cl(g)}$ | $+243$ |
| $\ce{Cl(g) + e- -> Cl-(g)}$ | $-349$ |
| $\Delta H_f^\circ(\ce{KCl})$ | $-436$ |

---

### Pattern 10: Lattice Energy (Born-Lande Equation)

**Example.** Estimate the **lattice energy** of $\ce{MgO}$ using the Born-Lande equation.

$r_{\ce{Mg^{2+}}} = 72 \ \text{pm}$, $r_{\ce{O^{2-}}} = 140 \ \text{pm}$, $n = 8$ (Born exponent for $\ce{MgO}$), Madelung constant $A = 1.748$ (rock salt structure).

$$
\begin{aligned}
r_0 &= 72 + 140 = 212 \ \text{pm} = 2.12 \times 10^{-10} \ \text{m} \\[4pt]
U &= -\dfrac{N_A A z^+ z^- e^2}{4\pi\varepsilon_0 r_0}\left(1 - \dfrac{1}{n}\right) \\[4pt]
  &= -\dfrac{(6.022\times10^{23})(1.748)(2)(2)(1.602\times10^{-19})^2}{4\pi(8.854\times10^{-12})(2.12\times10^{-10})}\left(1 - \dfrac{1}{8}\right) \\[4pt]
  &= -3.89 \times 10^6 \ \text{J/mol} = -3890 \ \text{kJ/mol}
\end{aligned}
$$

Magnitude: **3890 kJ/mol** (very high -- explains MgO's high melting point).

Simplified form if given: $U \propto \dfrac{z^+ z^-}{r_0}$

> SEE: **"Born-Lande"** **"lattice energy"** + ionic radii + charges + Madelung constant
> WRITE: $U \propto \dfrac{z^+ z^-}{r_+ + r_-}$
>
> Hand reflex: Larger charges $\to$ larger lattice energy. Smaller ions $\to$ larger lattice energy.

---

**Practice A2.** Rank by increasing **lattice energy** magnitude: $\ce{NaF}$, $\ce{CaO}$, $\ce{NaCl}$, $\ce{MgO}$. (Hint: compare $z^+ \cdot z^-$ first, then $r_0$).

$$
\begin{aligned}
\ce{NaF}&: z^+ = 1, z^- = 1 \\
\ce{CaO}&: z^+ = 2, z^- = 2 \\
\ce{NaCl}&: z^+ = 1, z^- = 1 \ (\text{larger } r_0 \text{ than NaF}) \\
\ce{MgO}&: z^+ = 2, z^- = 2 \ (\text{smaller } r_0 \text{ than CaO})
\end{aligned}
$$

---

## MASTER CHEAT SHEET -- Trigger to Equation

| # | SEE this word/phrase... | Your hand writes... |
|---|---|---|
| 1 | **specific heat** **c** + mass + $\Delta T$ | $q = mc\Delta T$ |
| 2 | **ΔH** + grams | $n = m/M$, $q = n \cdot \Delta H_{\text{rxn}}$ |
| 3 | **Hess's Law** + multiple given $\Delta H$ | flip (sign), scale, add |
| 4 | **ΔH°f** table | $\Delta H^\circ = \sum n\Delta H_f^\circ(\text{prod}) - \sum n\Delta H_f^\circ(\text{react})$ |
| 5 | **bond enthalpy** | $\Delta H = \sum\text{BE}_{\text{broken}} - \sum\text{BE}_{\text{formed}}$ |
| 6 | **coffee cup**, solution + $\Delta T$ | $q_{\text{rxn}} = -mc\Delta T$, $\Delta H = q_{\text{rxn}}/n$ |
| 7 | **bomb calorimeter** **C_cal** | $q_{\text{rxn}} = -C_{\text{cal}}\Delta T$, $\Delta E = q_{\text{rxn}}/n$ |
| 8 | **phase change** **melt** **boil** | $q = mc\Delta T$ (slopes), $q = m\Delta H$ (plateaus) |
| 9 | **Born-Haber** **lattice energy** | sum all steps = $\Delta H_f^\circ$, solve for $U$ |
| 10 | **Born-Lande** **z+** **z-** **r0** | $U \propto \dfrac{z^+ z^-}{r_0}$ |

---

## CONSTANT REFERENCE

| Constant | Value |
|---|---|
| $c_{\text{water}}$ | $4.184 \ \text{J/g}\!\cdot\!^\circ\text{C}$ |
| $\Delta H_{\text{fus}}(\ce{H2O})$ | $334 \ \text{J/g}$ ($6.01 \ \text{kJ/mol}$) |
| $\Delta H_{\text{vap}}(\ce{H2O})$ | $2260 \ \text{J/g}$ ($40.7 \ \text{kJ/mol}$) |
| $1 \ \text{kJ}$ | $1000 \ \text{J}$ |

---

## ANSWERS

> Solve everything first. Check after.

**Beginner**
- B1: $q = -31.4 \ \text{kJ}$ (released)
- B2: $\Delta T = 20.1^\circ\text{C}$
- B3: $c = 0.450 \ \text{J/g}\!\cdot\!^\circ\text{C}$
- B4: $q = -567 \ \text{kJ}$
- B5: $q = +44.4 \ \text{kJ}$ (absorbed)

**Intermediate**
- I1: $\Delta H = -56 \ \text{kJ}$
- I2: $\Delta H = +1259.6 \ \text{kJ}$
- I3: $\Delta H = -97 \ \text{kJ}$
- I4: $\Delta H = -43.5 \ \text{kJ/mol}$
- I5: $\Delta E = -3230 \ \text{kJ/mol}$
- I6: $q = 127.6 \ \text{kJ}$
- I7: $q = -44.4 \ \text{kJ}$ (released)

**Advanced**
- A1: $U = -700.5 \ \text{kJ/mol}$, magnitude = $701 \ \text{kJ/mol}$
- A2: $\ce{NaCl} < \ce{NaF} < \ce{CaO} < \ce{MgO}$
