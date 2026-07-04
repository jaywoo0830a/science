# Acid-Base Equilibrium -- 3-Hour Calculation Session

> **Experience first, patterns after.** Phase 1: calculate. Phase 2: name the pattern. Phase 3: mixed retrieval.

---

## PHASE 1 -- DO FIRST (~30 min)

---

**1.** Find pH and pOH for $[\ce{H+}] = 3.2 \times 10^{-4} \ \text{M}$.

$$
\text{pH} = -\log(3.2\times10^{-4}) = 3.49, \quad \text{pOH} = 14.00 - 3.49 = 10.51
$$

---

**2.** Find pH of $0.025 \ \text{M} \ \ce{HCl}$ (strong acid).

$$
[\ce{H+}] = 0.025 \ \text{M}, \quad \text{pH} = -\log(0.025) = \boxed{1.60}
$$

---

**3.** Find pH of $0.100 \ \text{M} \ \ce{CH3COOH}$ ($K_a = 1.8 \times 10^{-5}$).

ICE: $\ce{CH3COOH <=> CH3COO- + H+}$, $x = [\ce{H+}]$.

$$
K_a = \dfrac{x^2}{0.100-x} \approx \dfrac{x^2}{0.100}, \quad x = \sqrt{1.8\times10^{-6}} = 1.34\times10^{-3}, \quad \text{pH} = \boxed{2.87}
$$

---

**4.** Find pH of buffer: $0.500 \ \text{M} \ \ce{CH3COOH} + 0.300 \ \text{M} \ \ce{CH3COONa}$. $K_a = 1.8\times10^{-5}$.

$$
\text{p}K_a = 4.74, \quad \text{pH} = 4.74 + \log\dfrac{0.300}{0.500} = 4.74 - 0.222 = \boxed{4.52}
$$

---

**5.** $25.0 \ \text{mL}$ of $0.100 \ \text{M} \ \ce{HCl}$ titrated with $0.100 \ \text{M} \ \ce{NaOH}$. pH after $15.0 \ \text{mL}$ added?

$$
\begin{aligned}
n_{\ce{H+},\text{initial}} &= 0.00250, \ n_{\ce{OH-},\text{added}} = 0.00150 \\
n_{\ce{H+},\text{remaining}} &= 0.00100, \ V_{\text{total}} = 0.0400 \ \text{L} \\
[\ce{H+}] &= 0.0250 \ \text{M}, \quad \text{pH} = \boxed{1.60}
\end{aligned}
$$

---

> **You just executed:** pH/pOH, strong acid, weak acid $K_a$, buffer (Henderson-Hasselbalch), and strong-strong titration.

---

## PHASE 2 -- THE PATTERNS (~90 min)

---

### 1. pH, pOH, $[\ce{H+}]$, $[\ce{OH-}]$

SEE: **"[H+]"** **"pH"** &nbsp;|&nbsp; WRITE: $\text{pH} = -\log[\ce{H+}]$, $\text{pOH} = -\log[\ce{OH-}]$, $\text{pH} + \text{pOH} = 14.00$

$[\ce{H+}] = 10^{-\text{pH}}$, $K_w = [\ce{H+}][\ce{OH-}] = 1.0\times10^{-14}$ at $25^\circ\text{C}$.

**Example.** pH $= 3.00$. $[\ce{H+}] = 1.0\times10^{-3}$, $[\ce{OH-}] = 1.0\times10^{-11}$.

**Practice 1.** pH $= 9.00$. $[\ce{H+}]$? $[\ce{OH-}]$? pOH?

---

### 2. Strong Acids & Bases

SEE: **"strong acid"** ($\ce{HCl}$, $\ce{HNO3}$, $\ce{H2SO4}$ first H) &nbsp;|&nbsp; WRITE: $[\ce{H+}] = [\text{acid}]_0$

SEE: **"strong base"** ($\ce{NaOH}$, $\ce{Ba(OH)2}$) &nbsp;|&nbsp; WRITE: $[\ce{OH-}] = [\text{base}]_0 \times$ (#OH)

**Example.** $0.015 \ \text{M} \ \ce{Ba(OH)2}$: $[\ce{OH-}] = 0.030$, pOH $= 1.52$, pH $= \boxed{12.48}$.

**Practice 2.** pH of $0.0050 \ \text{M} \ \ce{HNO3}$? pH of $0.010 \ \text{M} \ \ce{Sr(OH)2}$?

---

### 3. Weak Acid $K_a$

SEE: **"Ka"** **"weak acid"** + initial [] &nbsp;|&nbsp; WRITE: ICE $\to K_a = \dfrac{x^2}{[\ce{HA}]_0 - x}$, small-$x$ if $[\ce{HA}]_0/K_a > 1000$

**Example.** $0.050 \ \text{M} \ \ce{HF}$ ($K_a = 6.8\times10^{-4}$). $[\ce{HA}]_0/K = 74$, need quadratic.

$x = \boxed{5.5\times10^{-3}}$, pH = 2.26.

**Practice 3.** $0.200 \ \text{M}$ weak acid has pH $= 3.70$. Find $K_a$.

---

### 4. Weak Base $K_b$

SEE: **"Kb"** **"weak base"** &nbsp;|&nbsp; WRITE: ICE for $\ce{OH-}$ $\to K_b = \dfrac{x^2}{[\ce{B}]_0 - x}$ $\to$ pOH $\to$ pH

$K_a \cdot K_b = K_w$ for conjugate pairs.

**Example.** $0.150 \ \text{M} \ \ce{NH3}$ ($K_b = 1.8\times10^{-5}$). $x = 1.64\times10^{-3}$, pOH $= 2.78$, pH $= \boxed{11.22}$.

**Practice 4.** $0.100 \ \text{M} \ \ce{CH3NH2}$ ($K_b = 4.4\times10^{-4}$). pH?

---

### 5. Buffer (Henderson-Hasselbalch)

SEE: **"buffer"** + weak + conjugate &nbsp;|&nbsp; WRITE: $\text{pH} = \text{p}K_a + \log\dfrac{[\ce{A-}]}{[\ce{HA}]}$

After adding strong acid: $\ce{A-}$ down, $\ce{HA}$ up. Strong base: opposite.

**Example.** $0.400 \ \ce{CH3COOH} + 0.200 \ \ce{CH3COONa}$. $K_a = 1.8\times10^{-5}$.

$\text{pH} = 4.74 + \log(0.200/0.400) = \boxed{4.44}$.

Add $0.020 \ \text{mol} \ \ce{HCl}$ to $1.00 \ \text{L}$: $\ce{HA} \to 0.420$, $\ce{A-} \to 0.180$, pH $= 4.74 + \log(0.180/0.420) = \boxed{4.37}$.

**Practice 5.** Buffer: $0.200 \ \ce{NH3} + 0.300 \ \ce{NH4Cl}$. $K_b(\ce{NH3}) = 1.8\times10^{-5}$. pH? (Hint: use $\text{p}K_a$ of $\ce{NH4+}$)

---

### 6. Titration: Strong + Strong

SEE: **"titration"** strong acid + strong base &nbsp;|&nbsp; WRITE: before eq: $[\ce{H+}] = n_{\text{remaining}}/V$; at eq: pH = 7; after: $[\ce{OH-}]$ excess

**Example.** $50.0 \ \text{mL}$ $0.200 \ \text{M} \ \ce{HNO3}$ + $50.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{KOH}$.

$n_{\ce{H+},\text{initial}} = 0.0100$, $n_{\ce{OH-}} = 0.00500$, $n_{\ce{H+},\text{rem}} = 0.00500$, $V = 0.100 \ \text{L}$, pH $= \boxed{1.30}$.

**Practice 6.** $50.0 \ \text{mL}$ $0.200 \ \text{M} \ \ce{HNO3}$ + $100.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{KOH}$. pH?

---

### 7. Titration: Weak Acid + Strong Base

SEE: **"titration"** weak acid + strong base &nbsp;|&nbsp; WRITE: half-eq: $\text{pH} = \text{p}K_a$; eq pt: pH from $K_b$ of $\ce{A-}$

**Example.** $25.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{CH3COOH}$ ($K_a = 1.8\times10^{-5}$) + $12.5 \ \text{mL}$ $0.100 \ \text{M} \ \ce{NaOH}$.

Half-equivalence: $\text{pH} = \text{p}K_a = \boxed{4.74}$.

**Example (eq pt, $25.0 \ \text{mL}$):** $[\ce{A-}] = 0.0500$, $K_b = 5.56\times10^{-10}$, $[\ce{OH-}] = 5.27\times10^{-6}$, pH $= \boxed{8.72}$.

**Practice 7.** $40.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{HCOOH}$ ($K_a = 1.8\times10^{-4}$) + $20.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{NaOH}$. pH?

---

### 8. Percent Ionization

SEE: **"% ionization"** &nbsp;|&nbsp; WRITE: $\% = \dfrac{[\ce{H+}]}{[\ce{HA}]_0} \times 100$

**Example.** $0.100 \ \text{M} \ \ce{CH3COOH}$, $[\ce{H+}] = 1.34\times10^{-3}$. $\% = 1.34\%$.

$0.010 \ \text{M}$: $[\ce{H+}] = 4.15\times10^{-4}$, $\% = 4.15\%$ (dilution increases ionization).

**Practice 8.** $0.200 \ \text{M}$ weak acid has $[\ce{H+}] = 2.0\times10^{-4}$. % ionization?

---

### 9. Polyprotic Acids

SEE: **"polyprotic"** **"diprotic"** + $K_{a1}, K_{a2}$ &nbsp;|&nbsp; WRITE: use $K_{a1}$ for pH (second H negligible if $K_{a1} \gg K_{a2}$)

**Example.** $0.100 \ \text{M} \ \ce{H2CO3}$ ($K_{a1}=4.3\times10^{-7}$, $K_{a2}=5.6\times10^{-11}$).

$x = \sqrt{0.100 \times 4.3\times10^{-7}} = 2.07\times10^{-4}$, pH $= \boxed{3.68}$.

**Practice 9.** $0.050 \ \text{M} \ \ce{H2S}$ ($K_{a1}=1.0\times10^{-7}$, $K_{a2}=1.0\times10^{-14}$). pH?

---

### 10. Titration Curve (any volume)

SEE: **"titration curve"** + any volume before eq &nbsp;|&nbsp; WRITE: $\text{pH} = \text{p}K_a + \log\dfrac{V_{\text{base}}}{V_{\text{eq}} - V_{\text{base}}}$

**Example.** $25.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{HA}$ ($K_a=1.0\times10^{-5}$) + $15.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{NaOH}$.

$V_{\text{eq}} = 25.0$, $\text{pH} = 5.00 + \log\dfrac{15.0}{10.0} = \boxed{5.18}$.

**Practice 10.** Same system, $10.0 \ \text{mL} \ \ce{NaOH}$ added. pH?

---

### PHASE 2 PRACTICE ANSWERS

- P1: $[\ce{H+}]=1.0\times10^{-9}$, $[\ce{OH-}]=1.0\times10^{-5}$, pOH $=5.00$
- P2: $2.30$ and $12.30$
- P3: $K_a = 2.0\times10^{-7}$ &nbsp;|&nbsp; P4: pH $= 11.82$
- P5: $\text{p}K_a(\ce{NH4+}) = 9.26$, pH $= 9.08$
- P6: pH $= 7.00$ (equivalence point)
- P7: pH $= 3.74$ (half-equivalence: $\text{pH} = \text{p}K_a$)
- P8: $0.10\%$ &nbsp;|&nbsp; P9: pH $= 4.15$
- P10: pH $= 5.00 + \log(10/15) = 4.82$

---

## PHASE 3 -- LOCK IT IN (~60 min)

---

**1.** $[\ce{H+}] = 5.0\times10^{-9}$. pH? pOH?

**2.** pH of $0.0050 \ \text{M} \ \ce{HNO3}$?

**3.** pH of $0.015 \ \text{M} \ \ce{Ba(OH)2}$?

**4.** $0.100 \ \text{M} \ \ce{CH3COOH}$ ($K_a = 1.8\times10^{-5}$). $[\ce{H+}]$?

**5.** $0.050 \ \text{M} \ \ce{NH3}$ ($K_b = 1.8\times10^{-5}$). pH?

**6.** $0.200 \ \text{M}$ weak acid has pH $= 3.70$. $K_a$?

**7.** Buffer: $0.400 \ \ce{CH3COOH} + 0.200 \ \ce{CH3COONa}$. pH? ($K_a = 1.8\times10^{-5}$)

**8.** Buffer: $0.300 \ \ce{NH3} + 0.200 \ \ce{NH4Cl}$. pH? ($K_b = 1.8\times10^{-5}$)

**9.** $25.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{HCl} + 15.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{NaOH}$. pH?

**10.** $50.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{HNO3} + 60.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{KOH}$. pH?

**11.** $25.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{CH3COOH} + 12.5 \ \text{mL}$ $0.100 \ \text{M} \ \ce{NaOH}$. pH?

**12.** $25.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{CH3COOH} + 25.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{NaOH}$. pH?

**13.** $0.100 \ \text{M} \ \ce{CH3COOH}$. % ionization?

**14.** $0.050 \ \text{M} \ \ce{H2CO3}$ ($K_{a1}=4.3\times10^{-7}$, $K_{a2}=5.6\times10^{-11}$). pH?

**15.** $40.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{HA}$ ($K_a=1.0\times10^{-5}$) + $30.0 \ \text{mL}$ $0.100 \ \text{M} \ \ce{NaOH}$. pH?

---

### PHASE 3 ANSWERS

**1:** pH $=8.30$, pOH $=5.70$ &nbsp; **2:** $2.30$ &nbsp; **3:** $12.48$ &nbsp; **4:** $1.34\times10^{-3}$ &nbsp; **5:** $10.98$ &nbsp; **6:** $2.0\times10^{-7}$ &nbsp; **7:** $4.44$ &nbsp; **8:** $9.43$ &nbsp; **9:** $1.60$ &nbsp; **10:** $11.96$ &nbsp; **11:** $4.74$ &nbsp; **12:** $8.72$ &nbsp; **13:** $1.34\%$ &nbsp; **14:** $3.68$ &nbsp; **15:** $5.48$

---

> **3-hour session complete.**
