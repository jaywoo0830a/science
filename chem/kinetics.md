# Chemical Kinetics -- 3-Hour Calculation Session

> **Experience first, patterns after.** Phase 1: calculate. Phase 2: name the pattern. Phase 3: mixed retrieval.

---

## PHASE 1 -- DO FIRST (~30 min)

---

**1.** Find rate law and $k$:

| Expt | $[\ce{A}]$ | $[\ce{B}]$ | Rate (M/s) |
|---|---|---|---|
| 1 | $0.10$ | $0.10$ | $4.0\times10^{-5}$ |
| 2 | $0.20$ | $0.10$ | $1.6\times10^{-4}$ |
| 3 | $0.10$ | $0.20$ | $8.0\times10^{-5}$ |

Compare 1$\to$2: $[\ce{A}] \times 2$, rate $\times 4 = 2^2 \Rightarrow m=2$.
Compare 1$\to$3: $[\ce{B}] \times 2$, rate $\times 2 = 2^1 \Rightarrow n=1$.

$$
\text{rate} = k[\ce{A}]^2[\ce{B}], \quad k = \dfrac{4.0\times10^{-5}}{0.10^2 \times 0.10} = \boxed{0.040 \ \text{M}^{-2}\!\cdot\!\text{s}^{-1}}
$$

---

**2.** First order, $k = 5.0\times10^{-4} \ \text{s}^{-1}$, $[\ce{A}]_0 = 0.200 \ \text{M}$. $[\ce{A}]$ after $30.0 \ \text{min}$?

$$
t = 1800 \ \text{s}, \ \ln[\ce{A}] = \ln(0.200) - 5.0\times10^{-4} \times 1800 = -1.609 - 0.900 = -2.509
$$
$$
[\ce{A}] = e^{-2.509} = \boxed{0.0814 \ \text{M}}
$$

---

**3.** First order, $k = 3.0\times10^{-4} \ \text{s}^{-1}$. Half-life?

$$
t_{1/2} = \dfrac{\ln 2}{k} = \dfrac{0.693}{3.0\times10^{-4}} = \boxed{2310 \ \text{s}}
$$

---

**4.** $k_1 = 3.0\times10^{-3}$ at $300 \ \text{K}$, $k_2 = 6.0\times10^{-2}$ at $350 \ \text{K}$. $E_a$?

$$
\ln\dfrac{6.0\times10^{-2}}{3.0\times10^{-3}} = \dfrac{E_a}{8.314}\left(\dfrac{1}{300} - \dfrac{1}{350}\right), \ \ln(20) = 2.996 = \dfrac{E_a}{8.314} \times 0.000476
$$
$$
E_a = \dfrac{2.996 \times 8.314}{0.000476} = \boxed{5.23\times10^{4} \ \text{J/mol} = 52.3 \ \text{kJ/mol}}
$$

---

**5.** Mechanism: (1) $\ce{NO + O2 <=> NO3}$ (fast eq), (2) $\ce{NO3 + NO -> 2NO2}$ (slow). Rate law?

Rate from slow step: rate $= k_2[\ce{NO3}][\ce{NO}]$. Intermediate $\ce{NO3}$ from fast eq: $K_1 = [\ce{NO3}]/([\ce{NO}][\ce{O2}])$.

$$
[\ce{NO3}] = K_1[\ce{NO}][\ce{O2}], \quad \text{rate} = k_2K_1[\ce{NO}]^2[\ce{O2}] = \boxed{k[\ce{NO}]^2[\ce{O2}]}
$$

---

> **You just executed:** initial rates $\to$ rate law, 1st-order integrated, half-life, Arrhenius, and mechanism.

---

## PHASE 2 -- THE PATTERNS (~90 min)

---

### 1. Rate Law from Initial Rates

SEE: table of varying [] + rates &nbsp;|&nbsp; WRITE: $\dfrac{\text{rate}_2}{\text{rate}_1} = \left(\dfrac{[\text{A}]_2}{[\text{A}]_1}\right)^m$ (other [] constant)

**Example.** Find $m$ when $[\ce{A}] \times 3$, rate $\times 9$: $9 = 3^m \Rightarrow m=2$.

**Practice 1.** Find rate law:

| Expt | $[\ce{NO}]$ | $[\ce{O2}]$ | Rate |
|---|---|---|---|
| 1 | $0.010$ | $0.010$ | $2.5\times10^{-5}$ |
| 2 | $0.020$ | $0.010$ | $1.0\times10^{-4}$ |
| 3 | $0.010$ | $0.020$ | $5.0\times10^{-5}$ |

---

### 2. Rate Constant Units

SEE: **"units of k"** &nbsp;|&nbsp; WRITE: $\text{M}^{1-n}\!\cdot\!\text{s}^{-1}$ ($n$ = overall order)

**Example.** rate $= k[\ce{A}]^2[\ce{B}]^1$ ($n=3$): units $= \text{M}^{-2}\!\cdot\!\text{s}^{-1}$.

**Practice 2.** Units of $k$ for rate $= k[\ce{A}][\ce{B}]^2$?

---

### 3. First-Order Integrated Rate Law

SEE: **"first order"** + $k$ (units $\text{s}^{-1}$) + $t$ &nbsp;|&nbsp; WRITE: $\ln[\ce{A}]_t = \ln[\ce{A}]_0 - kt$

**Example.** $k = 2.5\times10^{-3} \ \text{s}^{-1}$, $[\ce{A}]_0 = 0.400$, $t = 200 \ \text{s}$.

$\ln[\ce{A}] = \ln(0.400) - 2.5\times10^{-3} \times 200 = -0.916 - 0.500 = -1.416$, $[\ce{A}] = \boxed{0.243}$.

**Practice 3.** $k = 1.0\times10^{-3} \ \text{s}^{-1}$. Time for $[\ce{A}]$ to drop $0.500 \to 0.125$?

---

### 4. Half-Life

SEE: **"half-life"** **"t1/2"** &nbsp;|&nbsp; WRITE: 1st: $t_{1/2} = \dfrac{0.693}{k}$; 2nd: $t_{1/2} = \dfrac{1}{k[\ce{A}]_0}$

**Example.** 1st order, $k = 0.0231 \ \text{min}^{-1}$. $t_{1/2} = 0.693/0.0231 = \boxed{30.0 \ \text{min}}$.

**Practice 4.** 2nd order, $k = 0.020 \ \text{M}^{-1}\!\cdot\!\text{s}^{-1}$, $[\ce{A}]_0 = 0.50$. $t_{1/2}$?

---

### 5. Second-Order Integrated Rate Law

SEE: **"second order"** + $k$ (units $\text{M}^{-1}\text{s}^{-1}$) &nbsp;|&nbsp; WRITE: $\dfrac{1}{[\ce{A}]_t} = \dfrac{1}{[\ce{A}]_0} + kt$

**Example.** $k = 0.045 \ \text{M}^{-1}\!\cdot\!\text{min}^{-1}$, $[\ce{A}]_0 = 0.800$, find $t$ for $[\ce{A}] = 0.200$.

$1/0.200 = 1/0.800 + 0.045t$, $5.00 = 1.25 + 0.045t$, $t = \boxed{83.3 \ \text{min}}$.

**Practice 5.** $k = 0.025 \ \text{M}^{-1}\!\cdot\!\text{min}^{-1}$, $[\ce{A}]_0 = 0.500$, $t = 80.0 \ \text{min}$. $[\ce{A}]$?

---

### 6. Arrhenius Equation

SEE: two $k$ at two $T$ &nbsp;|&nbsp; WRITE: $\ln\dfrac{k_2}{k_1} = \dfrac{E_a}{R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)$, $R = 8.314$

**Example.** $E_a = 75 \ \text{kJ/mol}$, $k_1 = 0.010$ at $300 \ \text{K}$. $k$ at $350 \ \text{K}$?

$\ln(k_2/0.010) = (75000/8.314)(1/300 - 1/350)$, $k_2 = \boxed{0.73 \ \text{s}^{-1}}$.

**Practice 6.** $k_1 = 2.0\times10^{-5}$ at $25^\circ\text{C}$, $k_2 = 8.0\times10^{-5}$ at $50^\circ\text{C}$. $E_a$?

---

### 7. Reaction Mechanisms

SEE: **"mechanism"** **"slow step"** &nbsp;|&nbsp; WRITE: rate from slow step; replace intermediates via fast equilibrium

**Example.** (1) $\ce{A + B <=> C}$ (fast), (2) $\ce{C + A -> D}$ (slow).

rate $= k_2[\ce{C}][\ce{A}]$, $[\ce{C}] = K_1[\ce{A}][\ce{B}]$, rate $= \boxed{k[\ce{A}]^2[\ce{B}]}$.

**Practice 7.** (1) $\ce{A <=> 2B}$ (fast eq), (2) $\ce{B + C -> D}$ (slow). Rate law?

---

### 8. Determining Order from $[\ce{A}]$ vs $t$ Data

SEE: table of $[\ce{A}]$ vs time &nbsp;|&nbsp; WRITE: compute $\ln[\ce{A}]$ and $1/[\ce{A}]$; linear plot $\to$ order

| Order | Linear plot | Slope |
|---|---|---|
| 0 | $[\ce{A}]$ vs $t$ | $-k$ |
| 1 | $\ln[\ce{A}]$ vs $t$ | $-k$ |
| 2 | $1/[\ce{A}]$ vs $t$ | $+k$ |

**Practice 8.** Determine order and $k$:

| $t$ (s) | 0 | 100 | 200 | 300 | 400 |
|---|---|---|---|---|---|
| $[\ce{A}]$ | 1.000 | 0.607 | 0.368 | 0.223 | 0.135 |

(Hint: try $\ln[\ce{A}]$)

---

### 9. Steady-State Approximation

SEE: **"steady state"** **"d[B]/dt = 0"** &nbsp;|&nbsp; WRITE: $d[\text{intermediate}]/dt = 0$, solve, substitute

**Example.** $\ce{A ->[k1] B ->[k2] C}$. $d[\ce{B}]/dt = k_1[\ce{A}] - k_2[\ce{B}] = 0$.

$[\ce{B}]_{\text{ss}} = k_1[\ce{A}]/k_2$, rate $= k_2[\ce{B}] = k_1[\ce{A}]$.

**Practice 9.** $\ce{A <=>[k1][k_{-1}] B ->[k2] C}$. Find rate law via steady state on $\ce{B}$.

---

### 10. Catalysis

SEE: **"catalyst"** + two $E_a$ &nbsp;|&nbsp; WRITE: $\dfrac{k_{\text{cat}}}{k_{\text{uncat}}} = e^{\Delta E_a/RT}$, $\Delta E_a = E_{a,\text{uncat}} - E_{a,\text{cat}}$

**Example.** $E_a$ lowered $125 \to 75 \ \text{kJ/mol}$ at $300 \ \text{K}$.

Ratio $= e^{(125000-75000)/(8.314\times300)} = e^{20.05} = \boxed{5.1\times10^{8}}$.

**Practice 10.** $E_a$ lowered $100 \to 60 \ \text{kJ/mol}$ at $350 \ \text{K}$. Rate increase factor?

---

### PHASE 2 PRACTICE ANSWERS

- P1: rate $= k[\ce{NO}]^2[\ce{O2}]$, $k = 2.5\times10^3$ &nbsp;|&nbsp; P2: $\text{M}^{-2}\!\cdot\!\text{s}^{-1}$
- P3: $t = 1386 \ \text{s}$ &nbsp;|&nbsp; P4: $100 \ \text{s}$
- P5: $0.250 \ \text{M}$ &nbsp;|&nbsp; P6: $36.6 \ \text{kJ/mol}$
- P7: rate $= k[\ce{A}]^{1/2}[\ce{C}]$ &nbsp;|&nbsp; P8: 1st order, $k = 0.00500 \ \text{s}^{-1}$
- P9: rate $= \dfrac{k_1k_2}{k_{-1}+k_2}[\ce{A}]$ &nbsp;|&nbsp; P10: $9.3\times10^5$

---

## PHASE 3 -- LOCK IT IN (~60 min)

---

**1.** Find rate law and $k$:

| Expt | $[\ce{A}]$ | $[\ce{B}]$ | Rate |
|---|---|---|---|
| 1 | $0.10$ | $0.10$ | $2.0\times10^{-4}$ |
| 2 | $0.20$ | $0.10$ | $8.0\times10^{-4}$ |
| 3 | $0.10$ | $0.20$ | $4.0\times10^{-4}$ |

**2.** Units of $k$ for rate $= k[\ce{A}]^2$?

**3.** 1st order, $k = 3.0\times10^{-3} \ \text{s}^{-1}$, $[\ce{A}]_0 = 0.250$. $[\ce{A}]$ after $150 \ \text{s}$?

**4.** 1st order, $k = 0.015 \ \text{min}^{-1}$. $t_{1/2}$?

**5.** 2nd order, $k = 0.040 \ \text{M}^{-1}\!\cdot\!\text{s}^{-1}$, $[\ce{A}]_0 = 0.600$. $t_{1/2}$?

**6.** 2nd order, $k = 0.025 \ \text{M}^{-1}\!\cdot\!\text{min}^{-1}$, $[\ce{A}]_0 = 0.500$. $[\ce{A}]$ after $80.0 \ \text{min}$?

**7.** $k_1 = 2.0\times10^{-4}$ at $25^\circ\text{C}$, $k_2 = 8.0\times10^{-4}$ at $45^\circ\text{C}$. $E_a$?

**8.** $E_a = 65 \ \text{kJ/mol}$, $k = 0.020$ at $300 \ \text{K}$. $k$ at $350 \ \text{K}$?

**9.** (1) $\ce{A + B <=> C}$ (fast), (2) $\ce{C + A -> D}$ (slow). Rate law?

**10.** $[\ce{A}]$ vs $t$: (0,0.500), (50,0.333), (100,0.250), (200,0.167). Order? $k$?

**11.** $\ce{A ->[k1] B ->[k2] C}$. Steady state on $\ce{B}$. $[\ce{B}]_{\text{ss}}$?

**12.** Catalyst lowers $E_a$ from $120$ to $80 \ \text{kJ/mol}$ at $300 \ \text{K}$. Rate increase?

**13.** 1st order, $k = 0.010 \ \text{s}^{-1}$. Time for $75\%$ completion?

**14.** $k = 0.54 \ \text{M}^{-1}\!\cdot\!\text{s}^{-1}$, $\ce{2NO2 -> 2NO + O2}$, $[\ce{NO2}]_0 = 0.010$. $t_{1/2}$?

**15.** Arrhenius: $A = 1.0\times10^{10}$, $E_a = 50 \ \text{kJ/mol}$. $k$ at $300 \ \text{K}$?

---

### PHASE 3 ANSWERS

**1:** rate $=k[\ce{A}]^2[\ce{B}]$, $k=0.20$ &nbsp; **2:** $\text{M}^{-1}\!\cdot\!\text{s}^{-1}$ &nbsp; **3:** $0.159$ &nbsp; **4:** $46.2 \ \text{min}$ &nbsp; **5:** $41.7 \ \text{s}$ &nbsp; **6:** $0.250$ &nbsp; **7:** $54.6 \ \text{kJ/mol}$ &nbsp; **8:** $0.83$ &nbsp; **9:** $k[\ce{A}]^2[\ce{B}]$ &nbsp; **10:** 2nd, $k=0.010$ &nbsp; **11:** $[\ce{B}]_{\text{ss}} = k_1[\ce{A}]/k_2$ &nbsp; **12:** $9.3\times10^6$ &nbsp; **13:** $138.6 \ \text{s}$ &nbsp; **14:** $185 \ \text{s}$ &nbsp; **15:** $2.0\times10^1$

---

> **3-hour session complete.**
