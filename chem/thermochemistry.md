# Thermochemistry -- 3-Hour Calculation Session

> **Experience first, patterns after.** Phase 1: your hands calculate. Phase 2: your brain names what your hands already know. Phase 3: mixed retrieval locks it in.

---

## PHASE 1 -- DO FIRST (~30 min)

> Follow the math with your own pen. Don't ask why yet.

---

**1.** $75.0 \ \text{g}$ water ($c = 4.184 \ \text{J/g}\!\cdot\!^\circ\text{C}$) heated from $20.0^\circ\text{C}$ to $45.0^\circ\text{C}$. Heat absorbed (kJ)?

$$
\begin{aligned}
\Delta T &= 45.0 - 20.0 = 25.0^\circ\text{C} \\
q &= 75.0 \times 4.184 \times 25.0 = 7845 \ \text{J} = \boxed{7.85 \ \text{kJ}}
\end{aligned}
$$

---

**2.** $\ce{CH4 + 2O2 -> CO2 + 2H2O}$, $\Delta H = -890 \ \text{kJ}$ per mol $\ce{CH4}$. Heat released when $8.00 \ \text{g} \ \ce{CH4}$ burns?

$$
\begin{aligned}
M(\ce{CH4}) &= 16.04 \ \text{g/mol} \\
n_{\ce{CH4}} &= \dfrac{8.00}{16.04} = 0.4988 \ \text{mol} \\
q &= 0.4988 \times (-890) = \boxed{-444 \ \text{kJ}}
\end{aligned}
$$

---

**3.** Find $\Delta H$ for $\ce{NO + 1/2 O2 -> NO2}$.

(1) $\ce{1/2 N2 + 1/2 O2 -> NO}$, $\Delta H = +90$ &nbsp;&nbsp; (2) $\ce{1/2 N2 + O2 -> NO2}$, $\Delta H = +34$

$$
\begin{aligned}
\text{Flip (1): } &\ce{NO -> 1/2 N2 + 1/2 O2}, \quad \Delta H = -90 \\
\text{Keep (2): } &\ce{1/2 N2 + O2 -> NO2}, \quad \Delta H = +34 \\[4pt]
\text{Add: } &\ce{NO + 1/2 O2 -> NO2}, \quad \Delta H = -90 + 34 = \boxed{-56 \ \text{kJ}}
\end{aligned}
$$

---

**4.** Find $\Delta H^\circ$ for $\ce{C2H4 + 3O2 -> 2CO2 + 2H2O}$. $\Delta H_f^\circ$: $\ce{C2H4}=+52$, $\ce{CO2}=-393$, $\ce{H2O(l)}=-286$, $\ce{O2}=0$.

$$
\begin{aligned}
\Delta H^\circ &= \big[2(-393) + 2(-286)\big] - \big[1(52) + 3(0)\big] \\
&= [-786 - 572] - [52] = \boxed{-1410 \ \text{kJ}}
\end{aligned}
$$

---

**5.** $100.0 \ \text{mL}$ each $0.500 \ \text{M} \ \ce{HCl} + \ce{NaOH}$ in coffee cup calorimeter. $T$ rises $22.0 \to 25.4^\circ\text{C}$. $d = 1.00$, $c = 4.184$. $\Delta H$ per mol $\ce{H2O}$?

$$
\begin{aligned}
m_{\text{soln}} &= 200.0 \ \text{g}, \quad \Delta T = 3.4^\circ\text{C} \\
q_{\text{rxn}} &= -200.0 \times 4.184 \times 3.4 = -2845 \ \text{J} \\
n_{\ce{H2O}} &= 0.500 \times 0.1000 = 0.0500 \ \text{mol} \\
\Delta H &= \dfrac{-2.845}{0.0500} = \boxed{-56.9 \ \text{kJ/mol}}
\end{aligned}
$$

---

> **You just executed:** $q = mc\Delta T$, grams $\to$ mol $\to$ $\Delta H$, Hess's Law, $\Delta H_f^\circ$, and calorimetry. Now name them.

---

## PHASE 2 -- THE PATTERNS (~90 min)

> Each: SEE trigger, WRITE equation, Example, Practice. Practice answers at end of Phase 2.

---

### 1. $q = mc\Delta T$

SEE: **"specific heat"** **"c"** + mass + $\Delta T$ &nbsp;|&nbsp; WRITE: $q = mc\Delta T$

$q>0$ = absorbed, $q<0$ = released.

**Example.** $50.0 \ \text{g}$ aluminum ($c = 0.897$) cools $95.0 \to 25.0^\circ\text{C}$. $q$?

$$
q = 50.0 \times 0.897 \times (-70.0) = \boxed{-3140 \ \text{J}}
$$

**Practice 1.** $125.0 \ \text{g}$ water ($c = 4.184$) cools $85.0 \to 25.0^\circ\text{C}$. $q$ (kJ)?

---

### 2. $\Delta H$ from Stoichiometry

SEE: **"ΔH"** + grams &nbsp;|&nbsp; WRITE: $\text{grams} \xrightarrow{\div M} \text{mol} \xrightarrow{\times \Delta H_{\text{rxn}}} \text{kJ}$

**Example.** $\ce{2H2 + O2 -> 2H2O}$, $\Delta H = -572 \ \text{kJ}$ (per $2 \ \ce{H2}$). $6.00 \ \text{g} \ \ce{H2}$?

$$
n = \dfrac{6.00}{2.016} = 2.976, \quad q = \dfrac{2.976}{2} \times (-572) = \boxed{-851 \ \text{kJ}}
$$

**Practice 2.** $\ce{CaCO3 -> CaO + CO2}$, $\Delta H = +178 \ \text{kJ/mol}$. Heat to decompose $25.0 \ \text{g}$?

---

### 3. Hess's Law

SEE: multiple $\Delta H$ + target &nbsp;|&nbsp; WRITE: flip (sign flips), scale, add, cancel intermediates.

**Example.** $\ce{C + 1/2 O2 -> CO}$ from: (1) $\ce{C+O2->CO2}$, $-394$; (2) $\ce{CO+1/2O2->CO2}$, $-283$.

Keep (1), flip (2): $\Delta H = -394 + 283 = \boxed{-111 \ \text{kJ}}$

**Practice 3.** $\ce{2C + H2 -> C2H2}$ from: (1) $\ce{C2H2+5/2O2->2CO2+H2O}$, $-1300$; (2) $\ce{C+O2->CO2}$, $-394$; (3) $\ce{H2+1/2O2->H2O}$, $-286$.

---

### 4. $\Delta H^\circ$ from $\Delta H_f^\circ$

SEE: **"ΔH°f"** table &nbsp;|&nbsp; WRITE: $\Delta H^\circ = \sum n\Delta H_f^\circ(\text{prod}) - \sum n\Delta H_f^\circ(\text{react})$

Elements in standard state: $\Delta H_f^\circ = 0$.

**Example.** $\ce{CH4 + 2O2 -> CO2 + 2H2O}$. $\Delta H_f^\circ$: $\ce{CH4}=-74.8$, $\ce{CO2}=-393.5$, $\ce{H2O(l)}=-285.8$.

$$
[-393.5 + 2(-285.8)] - [-74.8] = -965.1 + 74.8 = \boxed{-890.3 \ \text{kJ}}
$$

**Practice 4.** $\ce{2NH3 + 4H2O -> 2NO2 + 7H2}$. $\Delta H_f^\circ$: $\ce{NH3}=-46$, $\ce{H2O(l)}=-285.8$, $\ce{NO2}=+33.2$.

---

### 5. Bond Enthalpy

SEE: **"bond energy"** **"BE"** &nbsp;|&nbsp; WRITE: $\Delta H = \sum\text{BE}_{\text{broken}} - \sum\text{BE}_{\text{formed}}$

**Example.** $\ce{H2 + Cl2 -> 2HCl}$. BE: $\ce{H-H}=436$, $\ce{Cl-Cl}=243$, $\ce{H-Cl}=431$.

$$
\Delta H = (436+243) - 2(431) = 679 - 862 = \boxed{-183 \ \text{kJ}}
$$

**Practice 5.** $\ce{N2 + 3H2 -> 2NH3}$. BE: $\ce{N \equiv N}=941$, $\ce{H-H}=436$, $\ce{N-H}=391$.

---

### 6. Coffee Cup Calorimetry

SEE: **"coffee cup"** + solution + $\Delta T$ &nbsp;|&nbsp; WRITE: $q_{\text{rxn}} = -mc\Delta T$, $\Delta H = q_{\text{rxn}} / n$

**Example.** $50 \ \text{mL}$ each $1.00 \ \text{M} \ \ce{HCl} + \ce{NaOH}$. $T$: $25.0 \to 31.7^\circ\text{C}$.

$$
q_{\text{rxn}} = -100.0 \times 4.184 \times 6.7 = -2803 \ \text{J}, \ n = 0.0500, \ \Delta H = \boxed{-56.1 \ \text{kJ/mol}}
$$

**Practice 6.** $100 \ \text{mL}$ each $0.500 \ \text{M} \ \ce{AgNO3} + \ce{NaCl}$. $T$: $22.0 \to 24.6^\circ\text{C}$. $\Delta H$?

---

### 7. Bomb Calorimetry

SEE: **"bomb"** **"C_cal"** &nbsp;|&nbsp; WRITE: $q_{\text{rxn}} = -C_{\text{cal}} \cdot \Delta T$, $\Delta E = q_{\text{rxn}} / n$

**Example.** $0.500 \ \text{g}$ ($M=128.17$), $C_{\text{cal}}=8.50$, $\Delta T=2.42^\circ\text{C}$.

$$
q_{\text{rxn}}=-8.50\times2.42=-20.57 \ \text{kJ}, \ n=0.003901, \ \Delta E=\boxed{-5270 \ \text{kJ/mol}}
$$

**Practice 7.** $1.000 \ \text{g}$ ($M=122.12$), $C_{\text{cal}}=6.24$, $\Delta T=4.23^\circ\text{C}$. $\Delta E$?

---

### 8. Phase Changes

SEE: **"melt"** **"boil"** &nbsp;|&nbsp; WRITE: slopes: $q = mc\Delta T$, plateaus: $q = m\Delta H_{\text{fus/vap}}$

$\Delta H_{\text{fus}} = 334$, $\Delta H_{\text{vap}} = 2260 \ \text{J/g}$. No $\Delta T$ during phase change.

**Example.** $25.0 \ \text{g}$ ice $-10^\circ\text{C}$ to steam $120^\circ\text{C}$: $q = 523 + 8350 + 10460 + 56500 + 1005 = \boxed{76.8 \ \text{kJ}}$

**Practice 8.** $50.0 \ \text{g}$ water $30^\circ\text{C}$ to steam $100^\circ\text{C}$.

---

### 9. Born-Haber Cycle

SEE: **"Born-Haber"** + steps &nbsp;|&nbsp; WRITE: sum all steps $= \Delta H_f^\circ$, solve for $U$.

**Example.** $\ce{NaCl}$: $108 + 496 + 121.5 - 349 + U = -411 \ \Rightarrow\ U = \boxed{-787.5 \ \text{kJ/mol}}$

**Practice 9.** $\ce{KCl}$: $89 + 419 + 121.5 - 349 + U = -436$. $U$?

---

### 10. Lattice Energy Trends

SEE: **"compare lattice energy"** &nbsp;|&nbsp; WRITE: $U \propto \dfrac{z^+ \cdot z^-}{r_+ + r_-}$

Larger charges $\to$ larger $U$. Smaller ions $\to$ larger $U$.

**Example.** $\ce{NaCl} < \ce{NaF} < \ce{CaO} < \ce{MgO}$

**Practice 10.** $\ce{MgO}$ or $\ce{CaO}$ -- larger $U$? Why?

---

### PHASE 2 PRACTICE ANSWERS

- P1: $-31.4 \ \text{kJ}$ &nbsp;|&nbsp; P2: $+44.5 \ \text{kJ}$ &nbsp;|&nbsp; P3: $+226 \ \text{kJ}$
- P4: $+1301.6 \ \text{kJ}$ &nbsp;|&nbsp; P5: $-97 \ \text{kJ}$
- P6: $-43.5 \ \text{kJ/mol}$ &nbsp;|&nbsp; P7: $-3220 \ \text{kJ/mol}$
- P8: $127.6 \ \text{kJ}$ &nbsp;|&nbsp; P9: $-716.5 \ \text{kJ/mol}$
- P10: $\ce{MgO}$ (smaller $r_0$, same $z^+z^-=4$)

---

## PHASE 3 -- LOCK IT IN (~60 min)

> 15 problems. All 10 patterns interleaved. No scrolling up. Answers below.

---

**1.** $250.0 \ \text{g}$ water cools $65.0 \to 15.0^\circ\text{C}$. $q$ (kJ)? ($c = 4.184$)

**2.** $\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}$, $\Delta H = -2220 \ \text{kJ/mol}$. Heat from $11.0 \ \text{g}$?

**3.** $\Delta H$ for $\ce{C + 2H2 -> CH4}$: (1) $\ce{CH4+2O2->CO2+2H2O}$, $-890$; (2) $\ce{C+O2->CO2}$, $-394$; (3) $\ce{H2+1/2O2->H2O}$, $-286$.

**4.** $\ce{4NH3 + 5O2 -> 4NO + 6H2O}$. $\Delta H_f^\circ$: $\ce{NH3}=-46$, $\ce{NO}=+90.3$, $\ce{H2O(g)}=-241.8$.

**5.** $\ce{CH4 + 2O2 -> CO2 + 2H2O}$ via BE: $\ce{C-H}=413$, $\ce{O=O}=498$, $\ce{C=O}=799$, $\ce{O-H}=467$.

**6.** $75 \ \text{mL}$ each $1.20 \ \text{M} \ \ce{HCl} + \ce{NaOH}$. $T$: $21.0 \to 28.8^\circ\text{C}$. $\Delta H$ (kJ/mol)?

**7.** $0.850 \ \text{g}$ ($M=180.16$) in bomb: $C_{\text{cal}}=7.35$, $\Delta T=2.91^\circ\text{C}$. $\Delta E$ (kJ/mol)?

**8.** $100.0 \ \text{g}$ ice $0^\circ\text{C}$ melted, heated to $50.0^\circ\text{C}$. Total heat? ($\Delta H_{\text{fus}}=334$)

**9.** $18.0 \ \text{g}$ steam $100^\circ\text{C}$ condenses, cools to $30^\circ\text{C}$. Heat released?

**10.** Lattice energy of $\ce{CaO}$: $+178$, $+1735$, $+249$, $+737$, $\Delta H_f^\circ=-635$.

**11.** Larger $U$: $\ce{KF}$ or $\ce{CaO}$? Why?

**12.** $\ce{2Al + Fe2O3 -> 2Fe + Al2O3}$, $\Delta H = -852 \ \text{kJ}$. Heat from $10.0 \ \text{g} \ \ce{Al}$?

**13.** $500 \ \text{g}$ water $85^\circ\text{C}$ + $300 \ \text{g}$ water $15^\circ\text{C}$ in insulated container. Final $T$?

**14.** $\ce{2C + 3H2 + 1/2 O2 -> C2H5OH}$: (1) $\ce{C2H5OH+3O2->2CO2+3H2O}$, $-1367$; (2) $\ce{C+O2->CO2}$, $-394$; (3) $\ce{H2+1/2O2->H2O}$, $-286$.

**15.** $25.0 \ \text{g}$ metal ($c=0.450$) at $100^\circ\text{C}$ in $50.0 \ \text{g}$ water at $20^\circ\text{C}$. Final $T$?

---

### PHASE 3 ANSWERS

**1:** $-52.3 \ \text{kJ}$ &nbsp; **2:** $-554 \ \text{kJ}$ &nbsp; **3:** $-76 \ \text{kJ}$ &nbsp; **4:** $-905.6 \ \text{kJ}$ &nbsp; **5:** $-818 \ \text{kJ}$ &nbsp; **6:** $-54.4 \ \text{kJ/mol}$ &nbsp; **7:** $-4530 \ \text{kJ/mol}$ &nbsp; **8:** $54.3 \ \text{kJ}$ &nbsp; **9:** $-46.0 \ \text{kJ}$ &nbsp; **10:** $-3534 \ \text{kJ/mol}$ &nbsp; **11:** $\ce{CaO}$ ($z^+z^-=4$ vs $1$) &nbsp; **12:** $-158 \ \text{kJ}$ &nbsp; **13:** $58.8^\circ\text{C}$ &nbsp; **14:** $-279 \ \text{kJ}$ &nbsp; **15:** $23.8^\circ\text{C}$

---

> **3-hour session complete.** Redo Phase 3 cold tomorrow.
