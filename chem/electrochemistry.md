# Electrochemistry -- 3-Hour Calculation Session

> **Experience first, patterns after.** Phase 1: calculate. Phase 2: name the pattern. Phase 3: mixed retrieval.

---

## PHASE 1 -- DO FIRST (~30 min)

---

**1.** Oxidation number of $\ce{Mn}$ in $\ce{MnO4-}$?

$$
x + 4(-2) = -1, \quad x - 8 = -1, \quad x = \boxed{+7}
$$

---

**2.** Balance in acidic: $\ce{MnO4- + Fe^{2+} -> Mn^{2+} + Fe^{3+}}$.

Reduction: $\ce{MnO4- + 8H+ + 5e- -> Mn^{2+} + 4H2O}$
Oxidation: $\ce{Fe^{2+} -> Fe^{3+} + e-}$ (×5)

$$
\boxed{\ce{MnO4- + 8H+ + 5Fe^{2+} -> Mn^{2+} + 4H2O + 5Fe^{3+}}}
$$

---

**3.** $E^\circ_{\text{cell}}$ for $\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}$? $E^\circ_{\text{red}}$: $\ce{Zn^{2+}/Zn} = -0.76$, $\ce{Cu^{2+}/Cu} = +0.34$.

$$
E^\circ_{\text{cell}} = E^\circ_{\text{cath}} - E^\circ_{\text{an}} = 0.34 - (-0.76) = \boxed{1.10 \ \text{V}}
$$

---

**4.** $\Delta G^\circ$ and $K$ for above ($E^\circ = 1.10 \ \text{V}$, $n = 2$, $25^\circ\text{C}$).

$$
\Delta G^\circ = -nFE^\circ = -2 \times 96485 \times 1.10 = \boxed{-212 \ \text{kJ/mol}}
$$
$$
\log K = \dfrac{nE^\circ}{0.0592} = \dfrac{2 \times 1.10}{0.0592} = 37.16, \quad K = 10^{37.16} = \boxed{1.4 \times 10^{37}}
$$

---

**5.** Grams of $\ce{Cu}$ deposited by $2.50 \ \text{A}$ for $30.0 \ \text{min}$ from $\ce{CuSO4}$.

$$
q = 2.50 \times 1800 = 4500 \ \text{C}, \ n_{e^-} = \dfrac{4500}{96485} = 0.04664, \ n_{\ce{Cu}} = \dfrac{0.04664}{2} = 0.02332
$$
$$
m_{\ce{Cu}} = 0.02332 \times 63.55 = \boxed{1.48 \ \text{g}}
$$

---

> **You just executed:** oxidation numbers, redox balancing, $E^\circ_{\text{cell}}$, $\Delta G^\circ = -nFE^\circ$, and electrolysis.

---

## PHASE 2 -- THE PATTERNS (~90 min)

---

### 1. Oxidation Numbers

SEE: **"oxidation number"** **"oxidation state"** &nbsp;|&nbsp; WRITE: sum(subscript $\times$ ox.#) $=$ total charge

Rules: Group 1 $= +1$, Group 2 $= +2$, F $= -1$, H $= +1$, O $= -2$ (except peroxides).

**Example.** $\ce{Cr}$ in $\ce{Cr2O7^{2-}}$: $2x + 7(-2) = -2$, $2x = +12$, $x = \boxed{+6}$.

**Practice 1.** S in $\ce{SO4^{2-}}$? C in $\ce{C2O4^{2-}}$?

---

### 2. Balancing Redox (Half-Reaction Method)

SEE: **"balance redox"** **"acidic"** **"basic"** &nbsp;|&nbsp; WRITE: split $\to$ O (add $\ce{H2O}$) $\to$ H (add $\ce{H+}$) $\to$ charge (add $e^-$) $\to$ equalize $e^-$ $\to$ add

Basic: balance as acidic, then add $\ce{OH-}$ to neutralize $\ce{H+}$.

**Example.** $\ce{Cr2O7^{2-} + I- -> Cr^{3+} + I2}$ in acidic.

Red: $\ce{Cr2O7^{2-} + 14H+ + 6e- -> 2Cr^{3+} + 7H2O}$
Ox: $\ce{2I- -> I2 + 2e-}$ (×3)

$\boxed{\ce{Cr2O7^{2-} + 14H+ + 6I- -> 2Cr^{3+} + 7H2O + 3I2}}$

**Practice 2.** Balance in acidic: $\ce{MnO4- + C2O4^{2-} -> Mn^{2+} + CO2}$.

---

### 3. Standard Cell Potential

SEE: **"E°cell"** + half-cell potentials &nbsp;|&nbsp; WRITE: $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$

More positive $E^\circ_{\text{red}}$ = cathode (reduction). $E^\circ_{\text{cell}} > 0$ = spontaneous.

**Example.** $\ce{Mg + Ni^{2+} -> Mg^{2+} + Ni}$. $E^\circ$: $\ce{Mg} = -2.37$, $\ce{Ni} = -0.25$.

$E^\circ_{\text{cell}} = -0.25 - (-2.37) = \boxed{2.12 \ \text{V}}$. Spontaneous.

**Practice 3.** $\ce{2Ag+ + Cu -> 2Ag + Cu^{2+}}$. $E^\circ$: $\ce{Ag+}=+0.80$, $\ce{Cu^{2+}}=+0.34$. $E^\circ_{\text{cell}}$?

---

### 4. $\Delta G^\circ = -nFE^\circ$

SEE: **"ΔG°"** + $E^\circ$ + $n$ &nbsp;|&nbsp; WRITE: $\Delta G^\circ = -nFE^\circ_{\text{cell}}$, $F = 96485 \ \text{C/mol}$

**Example.** $E^\circ = 0.46 \ \text{V}$, $n = 2$. $\Delta G^\circ = -2 \times 96485 \times 0.46 = \boxed{-88.8 \ \text{kJ/mol}}$.

**Practice 4.** $E^\circ = 2.12 \ \text{V}$, $n = 2$. $\Delta G^\circ$?

---

### 5. Nernst Equation

SEE: **"nonstandard"** **"concentration"** + $E^\circ$ &nbsp;|&nbsp; WRITE: $E = E^\circ - \dfrac{0.0592}{n}\log Q$ (at $25^\circ\text{C}$)

**Example.** $\ce{Zn + Cu^{2+}(0.010) -> Zn^{2+}(1.00) + Cu}$, $E^\circ = 1.10$, $n = 2$.

$Q = 1.00/0.010 = 100$, $E = 1.10 - \dfrac{0.0592}{2}\log(100) = 1.10 - 0.0592 = \boxed{1.04 \ \text{V}}$.

**Practice 5.** $E^\circ = 0.78$, $n = 2$. $[\ce{Fe^{3+}}]=0.60$, $[\ce{Fe^{2+}}]=0.10$, $[\ce{Sn^{2+}}]=0.30$, $[\ce{Sn^{4+}}]=0.020$. $E$?

(Reaction: $\ce{2Fe^{3+} + Sn^{2+} -> 2Fe^{2+} + Sn^{4+}}$)

---

### 6. $K$ from $E^\circ$

SEE: **"K from E°"** &nbsp;|&nbsp; WRITE: $\log K = \dfrac{nE^\circ}{0.0592}$ at $25^\circ\text{C}$

**Example.** $E^\circ = 0.03 \ \text{V}$, $n = 1$. $\log K = 0.03/0.0592 = 0.507$, $K = \boxed{3.2}$.

**Practice 6.** $E^\circ = 1.10$, $n = 2$. $K$?

---

### 7. Electrolysis (Faraday's Laws)

SEE: **"current"** **"deposited"** **"plated"** &nbsp;|&nbsp; WRITE: $q = It$, $n_{e^-} = q/F$, then stoich to mass

$F = 96485 \ \text{C/mol e}^-$. $I$ in A (C/s), $t$ in seconds.

**Example.** Grams $\ce{Ag}$ from $1.50 \ \text{A}$ for $25.0 \ \text{min}$? ($\ce{Ag+ + e- -> Ag}$)

$q = 1.50 \times 1500 = 2250 \ \text{C}$, $n_{e^-} = 0.02332$, $m_{\ce{Ag}} = 0.02332 \times 107.87 = \boxed{2.52 \ \text{g}}$.

**Practice 7.** Current to deposit $5.00 \ \text{g} \ \ce{Cr}$ from $\ce{Cr^{3+}}$ in $2.00 \ \text{hours}$?

---

### 8. Concentration Cells

SEE: **"concentration cell"** same electrode, different [] &nbsp;|&nbsp; WRITE: $E^\circ = 0$, $Q = [\text{dilute}]/[\text{conc}]$, Nernst

**Example.** $\ce{Ag}$ electrodes, $[\ce{Ag+}] = 0.100$ and $0.0010$.

$Q = 0.0010/0.100 = 0.010$, $E = 0 - \dfrac{0.0592}{1}\log(0.010) = \boxed{0.118 \ \text{V}}$.

**Practice 8.** $\ce{Cu}$ electrodes, $[\ce{Cu^{2+}}] = 1.00$ and $0.0100$. $E$?

---

### 9. Overpotential & Real Voltage

SEE: **"overpotential"** **"applied voltage"** &nbsp;|&nbsp; WRITE: $E_{\text{app}} = |E^\circ| + \eta_a + |\eta_c| + IR$

**Example.** Water electrolysis: $E^\circ = -1.23 \ \text{V}$, $\eta_{\ce{O2}} = 0.40$, $|\eta_{\ce{H2}}| = 0.10$, $IR = 0.30$.

$E_{\text{app}} = 1.23 + 0.40 + 0.10 + 0.30 = \boxed{2.03 \ \text{V}}$.

**Practice 9.** $\ce{NaCl}$ electrolysis: $E^\circ = -2.19$, $\eta_{\ce{Cl2}} = 0.10$, $|\eta_{\ce{H2}}| = 0.30$, $IR = 0.50$. $E_{\text{app}}$?

---

### 10. Disproportionation (Latimer Diagrams)

SEE: **"Latimer"** **"disproportionation"** &nbsp;|&nbsp; WRITE: $E^\circ_{\text{disprop}} = E^\circ_{\text{right}} - E^\circ_{\text{left}}$. $> 0$ = disproportionates.

**Example.** $\ce{Cu^{2+} ->[+0.15] Cu+ ->[+0.52] Cu}$. Does $\ce{Cu+}$ disproportionate?

$E^\circ_{\text{disprop}} = 0.52 - 0.15 = 0.37 > 0$ $\Rightarrow$ **Yes**. $K = 10^{0.37/0.0592} = \boxed{1.8\times10^6}$.

**Practice 10.** $\ce{MnO4- ->[+0.56] MnO4^{2-} ->[+2.26] MnO2}$. Does $\ce{MnO4^{2-}}$ disproportionate?

---

### PHASE 2 PRACTICE ANSWERS

- P1: S $= +6$, C $= +3$
- P2: $\ce{2MnO4- + 5C2O4^{2-} + 16H+ -> 2Mn^{2+} + 10CO2 + 8H2O}$
- P3: $0.46 \ \text{V}$ &nbsp;|&nbsp; P4: $-409 \ \text{kJ/mol}$
- P5: $E = 0.84 \ \text{V}$ (Q $= [\ce{Fe^{2+}}]^2[\ce{Sn^{4+}}]/([\ce{Fe^{3+}}]^2[\ce{Sn^{2+}}]) = 0.00926$)
- P6: $1.4\times10^{37}$ &nbsp;|&nbsp; P7: $3.87 \ \text{A}$
- P8: $0.0592 \ \text{V}$ &nbsp;|&nbsp; P9: $3.09 \ \text{V}$
- P10: Yes, $E^\circ_{\text{disprop}} = 2.26 - 0.56 = 1.70 \ \text{V}$

---

## PHASE 3 -- LOCK IT IN (~60 min)

---

**1.** Oxidation number of $\ce{Cr}$ in $\ce{Cr2O7^{2-}}$?

**2.** Balance in acidic: $\ce{MnO4- + C2O4^{2-} -> Mn^{2+} + CO2}$.

**3.** $E^\circ_{\text{cell}}$ for $\ce{Mg + Ni^{2+} -> Mg^{2+} + Ni}$? ($\ce{Mg} = -2.37$, $\ce{Ni} = -0.25$)

**4.** $E^\circ = 1.10 \ \text{V}$, $n = 2$. $\Delta G^\circ$?

**5.** $E^\circ = 1.10 \ \text{V}$, $n = 2$. $K$?

**6.** $\ce{Zn + Cu^{2+}(0.010) -> Zn^{2+}(1.00) + Cu}$, $E^\circ = 1.10$, $n = 2$. $E$?

**7.** Grams $\ce{Ag}$ by $2.00 \ \text{A}$ for $15.0 \ \text{min}$?

**8.** Current to deposit $3.00 \ \text{g} \ \ce{Cr}$ from $\ce{Cr^{3+}}$ in $1.50 \ \text{hours}$?

**9.** Concentration cell: $\ce{Ag}$, $[\ce{Ag+}] = 0.500$ and $0.0050$. $E$?

**10.** Water electrolysis: $E^\circ = -1.23$, $\eta_{\ce{O2}} = 0.40$, $|\eta_{\ce{H2}}| = 0.10$, $IR = 0.30$. $E_{\text{app}}$?

**11.** $\ce{Cu^{2+} ->[+0.15] Cu+ ->[+0.52] Cu}$. Does $\ce{Cu+}$ disproportionate? $E^\circ_{\text{disprop}}$?

**12.** $E^\circ = 0.46 \ \text{V}$, $n = 2$. $\Delta G^\circ$ and $K$?

**13.** $\ce{2Al + 3Cu^{2+} -> 2Al^{3+} + 3Cu}$. $E^\circ$: $\ce{Al^{3+}} = -1.66$, $\ce{Cu^{2+}} = +0.34$. $E^\circ_{\text{cell}}$? $n$?

**14.** $E^\circ = 0.78$, $n = 2$. $[\ce{Fe^{3+}}]=0.50$, $[\ce{Fe^{2+}}]=0.10$, $[\ce{Sn^{2+}}]=0.20$, $[\ce{Sn^{4+}}]=0.010$. $E$?

**15.** $\ce{Cu}$ electrodes, $[\ce{Cu^{2+}}] = 1.00$ and $0.0100$. $E_{\text{cell}}$?

---

### PHASE 3 ANSWERS

**1:** $+6$ &nbsp; **2:** $\ce{2MnO4- + 5C2O4^{2-} + 16H+ -> 2Mn^{2+} + 10CO2 + 8H2O}$ &nbsp; **3:** $2.12 \ \text{V}$ &nbsp; **4:** $-212 \ \text{kJ/mol}$ &nbsp; **5:** $1.4\times10^{37}$ &nbsp; **6:** $1.04 \ \text{V}$ &nbsp; **7:** $2.01 \ \text{g}$ &nbsp; **8:** $3.09 \ \text{A}$ &nbsp; **9:** $0.118 \ \text{V}$ &nbsp; **10:** $2.03 \ \text{V}$ &nbsp; **11:** Yes, $0.37 \ \text{V}$ &nbsp; **12:** $-88.8 \ \text{kJ/mol}$, $3.6\times10^{15}$ &nbsp; **13:** $2.00 \ \text{V}$, $n=6$ &nbsp; **14:** $0.84 \ \text{V}$ &nbsp; **15:** $0.0592 \ \text{V}$

---

> **3-hour session complete.**
