# Acid-Base Equilibrium -- Calculation-First Training

> Philosophy: If you can calculate it, you at least understand it.
> How to use: Work through the example solution. The formula comes after -- as a summary of what your hands just did.
> Ratio: Beginner 2 : Intermediate 6 : Advanced 2 (10 patterns: 2-6-2)

---

## BEGINNER (2 patterns)

> Goal: 2 patterns. pH is just a log. Strong acids dissociate completely.

---

### Pattern 1: pH, pOH, $[\ce{H+}]$, $[\ce{OH-}]$

**Example.** Find **pH** and **pOH** for $[\ce{H+}] = 3.2 \times 10^{-4} \ \text{M}$.

$$
\begin{aligned}
\text{pH} &= -\log[\ce{H+}] = -\log(3.2 \times 10^{-4}) = 3.49 \\[4pt]
\text{pOH} &= 14.00 - \text{pH} = 14.00 - 3.49 = 10.51 \\[4pt]
[\ce{OH-}] &= 10^{-\text{pOH}} = 10^{-10.51} = 3.1 \times 10^{-11} \ \text{M}
\end{aligned}
$$

> SEE: **"[H+]"** **"pH"** **"[OH-]"** **"pOH"**
> WRITE: $\text{pH} = -\log[\ce{H+}]$, $\text{pOH} = -\log[\ce{OH-}]$, $\text{pH} + \text{pOH} = 14.00$
>
> Inverse: $[\ce{H+}] = 10^{-\text{pH}}$, $[\ce{OH-}] = 10^{-\text{pOH}}$
> At $25^\circ\text{C}$ only: $K_w = [\ce{H+}][\ce{OH-}] = 1.0 \times 10^{-14}$.
>
> Hand reflex: See **[H+]** $\to$ $-\log$ $\to$ pH. See **pH** $\to$ $10^{-\text{pH}}$ $\to$ $[\ce{H+}]$.

---

**Practice B1.** Find **pH**, **pOH**, and $[\ce{OH-}]$ for $[\ce{H+}] = 5.0 \times 10^{-9} \ \text{M}$.

**Practice B2.** Find $[\ce{H+}]$ and $[\ce{OH-}]$ for **pH** $= 2.70$.

**Practice B3.** **pOH** $= 3.40$. Find $[\ce{H+}]$.

---

### Pattern 2: Strong Acids & Bases

**Example.** Find **pH** of **0.025 M** $\ce{HCl}$ (strong acid, 100% dissociation).

$$
\begin{aligned}
\ce{HCl &-> H+ + Cl-} \quad (\text{complete}) \\[4pt]
[\ce{H+}] &= [\ce{HCl}]_0 = 0.025 \ \text{M} \\[4pt]
\text{pH} &= -\log(0.025) = 1.60
\end{aligned}
$$

**Example.** Find **pH** of **0.015 M** $\ce{Ba(OH)2}$ (strong base).

$$
\begin{aligned}
\ce{Ba(OH)2 &-> Ba^{2+} + 2OH-} \quad (\text{complete}) \\[4pt]
[\ce{OH-}] &= 2 \times 0.015 = 0.030 \ \text{M} \\[4pt]
\text{pOH} &= -\log(0.030) = 1.52 \\[4pt]
\text{pH} &= 14.00 - 1.52 = 12.48
\end{aligned}
$$

> SEE: **"strong acid"** **"HCl"** **"HNO3"** **"H2SO4"** (first H) **"HClO4"**
> SEE: **"strong base"** **"NaOH"** **"KOH"** **"Ba(OH)2"**
> WRITE: $[\ce{H+}] = [\text{acid}]_0 \times$ (# of H). $[\ce{OH-}] = [\text{base}]_0 \times$ (# of OH).
>
> Strong acids: HCl, HBr, HI, HNO3, HClO4, H2SO4 (first H).
> Strong bases: Group 1 hydroxides (NaOH, KOH) + Ba(OH)2, Sr(OH)2.

---

**Practice B4.** Find **pH** of **0.0050 M** $\ce{HNO3}$.

**Practice B5.** Find **pH** of **0.010 M** $\ce{Sr(OH)2}$.

---

## INTERMEDIATE (6 patterns)

> Goal: Weak acids/bases use ICE tables. Buffers use Henderson-Hasselbalch. Titrations combine both.

---

### Pattern 3: Weak Acid $K_a$

**Example.** Find **pH** of **0.100 M** $\ce{CH3COOH}$ ($K_a = 1.8 \times 10^{-5}$).

$$
\ce{CH3COOH <=> CH3COO- + H+}
$$

```
              CH3COOH    CH3COO-    H+
I (M):         0.100        0       0
C (M):          -x         +x      +x
E (M):        0.100-x       x       x
```

$$
\begin{aligned}
K_a &= \dfrac{x^2}{0.100 - x} = 1.8 \times 10^{-5} \\[4pt]
\text{Small-}x&: \dfrac{0.100}{1.8 \times 10^{-5}} = 5556 > 1000 \quad \checkmark \\[4pt]
\dfrac{x^2}{0.100} &\approx 1.8 \times 10^{-5} \\[4pt]
x &= \sqrt{1.8 \times 10^{-6}} = 1.34 \times 10^{-3} \\[4pt]
\text{pH} &= -\log(1.34 \times 10^{-3}) = \boxed{2.87}
\end{aligned}
$$

> SEE: **"Ka"** **"weak acid"** + initial concentration
> WRITE: ICE table $\to$ $K_a = \dfrac{x^2}{[\ce{HA}]_0 - x}$ $\to$ small-$x$ (if qualifies) $\to$ $x = [\ce{H+}]$ $\to$ pH.
>
> Hand reflex: Weak acid $\to$ ICE $\to$ $K_a$ expression $\to$ small-$x$ $\to$ $-\log(x)$.

---

**Practice I1.** Find **pH** of **0.050 M** $\ce{HF}$ ($K_a = 6.8 \times 10^{-4}$). Use quadratic if needed (initial/$K_a \approx 74$, small-$x$ is borderline -- use quadratic).

**Practice I2.** **pH** of **0.200 M** weak acid $\ce{HA}$ is 4.50. Find $K_a$.

---

### Pattern 4: Weak Base $K_b$

**Example.** Find **pH** of **0.150 M** $\ce{NH3}$ ($K_b = 1.8 \times 10^{-5}$).

$$
\ce{NH3 + H2O <=> NH4+ + OH-}
$$

```
              NH3       NH4+      OH-
I (M):       0.150       0        0
C (M):        -x        +x       +x
E (M):      0.150-x      x        x
```

$$
\begin{aligned}
K_b &= \dfrac{x^2}{0.150 - x} = 1.8 \times 10^{-5} \\[4pt]
x &= \sqrt{0.150 \times 1.8 \times 10^{-5}} = 1.64 \times 10^{-3} \ (\text{small-}x \ \checkmark) \\[4pt]
\text{pOH} &= -\log(1.64 \times 10^{-3}) = 2.78 \\[4pt]
\text{pH} &= 14.00 - 2.78 = \boxed{11.22}
\end{aligned}
$$

> SEE: **"Kb"** **"weak base"** + initial concentration
> WRITE: ICE $\to$ $K_b = \dfrac{x^2}{[\ce{B}]_0 - x}$ $\to$ $x = [\ce{OH-}]$ $\to$ pOH $\to$ pH.
>
> Relationship: $K_a \cdot K_b = K_w = 1.0 \times 10^{-14}$ for conjugate pairs.
> Hand reflex: Weak base $\to$ ICE for $\ce{OH-}$ $\to$ $x = [\ce{OH-}]$ $\to$ pOH $\to$ $14 - \text{pOH}$.

---

**Practice I3.** Find **pH** of **0.100 M** $\ce{CH3NH2}$ ($K_b = 4.4 \times 10^{-4}$).

**Practice I4.** A **0.200 M** weak base has pH = 10.80. Find $K_b$.

---

### Pattern 5: Percent Ionization

**Example.** Find **% ionization** of **0.100 M** $\ce{CH3COOH}$ ($K_a = 1.8 \times 10^{-5}$).

From Pattern 3: $x = [\ce{H+}] = 1.34 \times 10^{-3} \ \text{M}$

$$
\% \ \text{ionization} = \dfrac{[\ce{H+}]}{[\ce{HA}]_0} \times 100 = \dfrac{1.34 \times 10^{-3}}{0.100} \times 100 = 1.34\%
$$

> SEE: **"% ionization"** **"percent dissociation"**
> WRITE: $\% = \dfrac{x}{[\text{initial}]} \times 100\%$ where $x = [\ce{H+}]$ (acid) or $x = [\ce{OH-}]$ (base)
>
> Dilution increases % ionization (Le Chatelier: more solvent shifts toward ions).
> Hand reflex: Find $[\ce{H+}]$ via ICE $\to$ divide by initial $\to$ $\times 100$.

---

**Practice I5.** Find **% ionization** of **0.010 M** $\ce{CH3COOH}$ ($K_a = 1.8 \times 10^{-5}$). Compare to 1.34% at 0.100 M. (Hint: dilution increases % ionization.)

---

### Pattern 6: Buffer -- Henderson-Hasselbalch

**Example.** Find **pH** of a **buffer** containing **0.500 M** $\ce{CH3COOH}$ and **0.300 M** $\ce{CH3COONa}$. $K_a = 1.8 \times 10^{-5}$.

$$
\begin{aligned}
\text{p}K_a &= -\log(1.8 \times 10^{-5}) = 4.74 \\[4pt]
\text{pH} &= \text{p}K_a + \log\dfrac{[\ce{A-}]}{[\ce{HA}]} = 4.74 + \log\dfrac{0.300}{0.500} \\[4pt]
&= 4.74 + \log(0.600) = 4.74 + (-0.222) = \boxed{4.52}
\end{aligned}
$$

**Example (after adding strong acid).** Add **0.010 mol** $\ce{HCl}$ to **1.00 L** of the buffer above. Find new **pH**.

$$
\begin{aligned}
\ce{A- + H+ &-> HA} \quad (\ce{HCl} \text{ reacts with } \ce{CH3COO-}) \\[4pt]
[\ce{HA}]_{\text{new}} &= 0.500 + 0.010 = 0.510 \ \text{M} \\[4pt]
[\ce{A-}]_{\text{new}} &= 0.300 - 0.010 = 0.290 \ \text{M} \\[4pt]
\text{pH} &= 4.74 + \log\dfrac{0.290}{0.510} = 4.74 + (-0.245) = \boxed{4.50}
\end{aligned}
$$

> SEE: **"buffer"** **"weak acid + conjugate base"** (or weak base + conjugate acid)
> WRITE: $\text{pH} = \text{p}K_a + \log\dfrac{[\ce{A-}]}{[\ce{HA}]}$ (Henderson-Hasselbalch)
>
> When adding strong acid: $\ce{A-}$ decreases, $\ce{HA}$ increases. Strong base: opposite.
> Hand reflex: Find $\text{p}K_a$ $\to$ ratio of conjugate/base $\to$ $\log$ $\to$ add.

---

**Practice I6.** Find **pH** of buffer: **0.200 M** $\ce{NH3}$ and **0.300 M** $\ce{NH4Cl}$. $K_b(\ce{NH3}) = 1.8 \times 10^{-5}$. (Hint: use $\text{p}K_a$ of $\ce{NH4+}$ = $14 - \text{p}K_b$)

**Practice I7.** Add **0.0050 mol** $\ce{NaOH}$ to **1.00 L** of the buffer from I6. New **pH**?

---

### Pattern 7: Titration -- Strong Acid + Strong Base

**Example.** **25.0 mL** of **0.100 M** $\ce{HCl}$ is **titrated** with **0.100 M** $\ce{NaOH}$. Find **pH** at: (a) 0 mL, (b) 12.5 mL, (c) 25.0 mL, (d) 30.0 mL.

```
(a) 0 mL (pure strong acid):
[H+] = 0.100 M, pH = 1.00

(b) 12.5 mL (halfway to equivalence):
n(HCl)initial = 0.100 * 0.0250 = 0.00250 mol
n(NaOH)added  = 0.100 * 0.0125 = 0.00125 mol
n(H+)remaining = 0.00250 - 0.00125 = 0.00125 mol
V_total = 0.0250 + 0.0125 = 0.0375 L
[H+] = 0.00125 / 0.0375 = 0.0333 M
pH = -log(0.0333) = 1.48

(c) 25.0 mL (equivalence point):
All H+ neutralized. Pure NaCl solution.
[H+] = [OH-] = 1.0 * 10^{-7} M
pH = 7.00

(d) 30.0 mL (past equivalence, excess OH-):
n(OH-)excess = 0.100 * (0.0300 - 0.0250) = 0.00050 mol
V_total = 0.0250 + 0.0300 = 0.0550 L
[OH-] = 0.00050 / 0.0550 = 0.00909 M
pOH = -log(0.00909) = 2.04
pH = 14.00 - 2.04 = 11.96
```

> SEE: **"titration"** **"strong acid"** **"strong base"** + volumes + concentrations
> WRITE: Before eq.pt: $[\ce{H+}] = \dfrac{n_{\ce{H+},\text{remaining}}}{V_{\text{total}}}$. At eq.pt: pH = 7.00. After: $[\ce{OH-}] = \dfrac{n_{\ce{OH-},\text{excess}}}{V_{\text{total}}}$.
>
> Hand reflex: Moles acid $\to$ subtract moles base added $\to$ divide by total volume $\to$ pH.

---

**Practice I8.** **50.0 mL** of **0.200 M** $\ce{HNO3}$ **titrated** with **0.100 M** $\ce{KOH}$. Find **pH** after adding: (a) 0 mL, (b) 50.0 mL, (c) 100.0 mL, (d) 120.0 mL.

---

### Pattern 8: Titration -- Weak Acid + Strong Base

**Example.** **25.0 mL** of **0.100 M** $\ce{CH3COOH}$ ($K_a = 1.8\times10^{-5}$) is **titrated** with **0.100 M** $\ce{NaOH}$. Find **pH** at: (a) 0 mL, (b) 12.5 mL (half-equivalence), (c) 25.0 mL (equivalence).

```
(a) 0 mL (weak acid, Pattern 3):
x = sqrt(0.100 * 1.8*10^{-5}) = 1.34*10^{-3}
pH = 2.87

(b) 12.5 mL (half-equivalence):
n(HA)initial = n(A-)formed  -->  [HA] = [A-]
pH = pKa = -log(1.8*10^{-5}) = 4.74

(c) 25.0 mL (equivalence point -- all converted to A-):
n(A-) = 0.100 * 0.0250 = 0.00250 mol
V_total = 0.0500 L
[A-] = 0.00250 / 0.0500 = 0.0500 M

CH3COO- + H2O <=> CH3COOH + OH-
Kb = Kw / Ka = 1.0*10^{-14} / 1.8*10^{-5} = 5.56*10^{-10}

x = [OH-] = sqrt(0.0500 * 5.56*10^{-10}) = 5.27*10^{-6}
pOH = 5.28, pH = 14.00 - 5.28 = 8.72
(Equivalence point is basic! Because A- is a weak base.)
```

> SEE: **"weak acid"** + **"strong base"** titration
> WRITE: At half-equivalence: $\text{pH} = \text{p}K_a$. At equivalence: pH > 7 (from $K_b$ of $\ce{A-}$).
>
> Hand reflex: Find $n$ at each point $\to$ identify what species remain $\to$ apply appropriate formula (weak acid / buffer / weak base / strong base).

---

**Practice I9.** **40.0 mL** of **0.100 M** $\ce{HCOOH}$ ($K_a = 1.8 \times 10^{-4}$) **titrated** with **0.100 M** $\ce{NaOH}$. Find **pH** at: 0 mL, 20.0 mL, 40.0 mL.

---

## ADVANCED (2 patterns) -- College-Level

---

### Pattern 9: Polyprotic Acids

**Example.** Find **pH** of **0.100 M** $\ce{H2CO3}$.

$K_{a1} = 4.3 \times 10^{-7}$, $K_{a2} = 5.6 \times 10^{-11}$.

Since $K_{a1} \gg K_{a2}$ (by $10^4$), the first dissociation dominates.

```
First dissociation: H2CO3 <=> HCO3- + H+
I:   0.100      0      0
C:    -x       +x     +x
E:  0.100-x     x      x
```

$$
\begin{aligned}
K_{a1} &= \dfrac{x^2}{0.100 - x} = 4.3 \times 10^{-7} \\[4pt]
x &= \sqrt{0.100 \times 4.3 \times 10^{-7}} = 2.07 \times 10^{-4} \ (\text{small-}x \ \checkmark) \\[4pt]
\text{pH} &= -\log(2.07 \times 10^{-4}) = \boxed{3.68}
\end{aligned}
$$

The second dissociation contributes $\sim K_{a2} = 5.6 \times 10^{-11} \ \text{M}$ of additional $\ce{H+}$, which is negligible compared to $2.07 \times 10^{-4}$.

> SEE: **"polyprotic"** **"diprotic"** **"H2SO4"** **"H3PO4"** + multiple $K_a$ values
> WRITE: Use $K_{a1}$ for pH (unless $K_{a1}/K_{a2} < 10^4$, rare). Second dissociation negligible.
>
> Hand reflex: Ignore $K_{a2}$ for pH $\to$ treat as monoprotic with $K_{a1}$.

---

**Practice A1.** Find **pH** of **0.050 M** $\ce{H2S}$. $K_{a1} = 1.0 \times 10^{-7}$, $K_{a2} = 1.0 \times 10^{-14}$.

---

### Pattern 10: Full Titration Curve (Weak Acid + Strong Base)

**Example.** **50.0 mL** of **0.100 M** $\ce{CH3COOH}$ ($K_a = 1.8\times10^{-5}$) **titrated** with **0.100 M** $\ce{NaOH}$. Calculate **pH** at five key points and sketch.

| Point | $V_{\ce{NaOH}}$ (mL) | Dominant species | Method | pH |
|---|---|---|---|---|
| 0 | 0 | $\ce{HA}$ (weak acid) | $K_a$ ICE | 2.87 |
| Half-eq | 25.0 | $\ce{HA} = \ce{A-}$ (buffer) | $\text{pH} = \text{p}K_a$ | 4.74 |
| Eq. pt | 50.0 | $\ce{A-}$ (weak base) | $K_b$ ICE | 8.72 |
| Past eq | 60.0 | $\ce{OH-}$ excess (strong base) | $[\ce{OH-}] = n_{\text{excess}}/V$ | 12.00 |

Before equivalence: buffer region (Henderson-Hasselbalch).
At any volume $V$ where $0 < V < 50$:

$$
\text{pH} = \text{p}K_a + \log\dfrac{V}{V_{\text{eq}} - V}
$$

For $V = 35.0$ mL:
$\text{pH} = 4.74 + \log\dfrac{35.0}{15.0} = 4.74 + 0.368 = 5.11$

> SEE: **"titration curve"** **"pH at any volume"** + weak acid/strong base
> WRITE: Before eq: $\text{pH} = \text{p}K_a + \log\dfrac{V_{\text{base}}}{V_{\text{eq}} - V_{\text{base}}}$. At eq: pH from $K_b$.

---

**Practice A2.** **25.0 mL** of **0.100 M** weak acid $\ce{HA}$ ($K_a = 1.0 \times 10^{-5}$) **titrated** with **0.100 M** $\ce{NaOH}$. Find **pH** when 15.0 mL of $\ce{NaOH}$ have been added (before equivalence).

---

## MASTER CHEAT SHEET -- Trigger to Equation

| # | SEE this word/phrase... | Your hand writes... |
|---|---|---|
| 1 | **[H+]** **pH** **[OH-]** **pOH** | $\text{pH} = -\log[\ce{H+}]$, $\text{pH} + \text{pOH} = 14$, $[\ce{H+}] = 10^{-\text{pH}}$ |
| 2 | **strong acid** **HCl** **HNO3** | $[\ce{H+}] = [\text{acid}]_0$ (complete dissociation) |
|   | **strong base** **NaOH** **Ba(OH)2** | $[\ce{OH-}] = [\text{base}]_0 \times$ (#OH), then pH |
| 3 | **Ka** **weak acid** + initial [] | ICE $\to$ $K_a = \dfrac{x^2}{[\ce{HA}]_0 - x}$ $\to$ small-$x$ $\to$ pH |
| 4 | **Kb** **weak base** + initial [] | ICE $\to$ $K_b = \dfrac{x^2}{[\ce{B}]_0 - x}$ $\to$ $x$ = $[\ce{OH-}]$ $\to$ pOH $\to$ pH |
| 5 | **% ionization** **% dissociation** | $\% = \dfrac{[\ce{H+}]}{[\ce{HA}]_0} \times 100$ |
| 6 | **buffer** + weak + conjugate | $\text{pH} = \text{p}K_a + \log\dfrac{[\ce{A-}]}{[\ce{HA}]}$ |
| 7 | **titration** strong + strong | before: $[\ce{H+}] = n_{\text{remaining}}/V$, at eq: pH = 7, after: $[\ce{OH-}]$ excess |
| 8 | **titration** weak acid + strong base | half-eq: pH = $\text{p}K_a$, eq: pH from $K_b$ of $\ce{A-}$ |
| 9 | **polyprotic** **diprotic** + $K_{a1},K_{a2}$ | use $K_{a1}$ only (second H negligible) |
| 10 | **titration curve** any volume | buffer: $\text{pH} = \text{p}K_a + \log(V/V_{\text{eq}}-V)$ |

---

## CONSTANT REFERENCE

| Constant | Value |
|---|---|
| $K_w$ | $1.0 \times 10^{-14}$ at $25^\circ\text{C}$ |
| $K_a \cdot K_b$ (conjugate) | $K_w$ |
| $\text{p}K_a + \text{p}K_b$ | $14.00$ |
| Small-$x$ check | $[\text{initial}] / K > 1000$ |

---

## ANSWERS

> Solve everything first. Check after.

**Beginner**
- B1: pH = 8.30, pOH = 5.70, $[\ce{OH-}] = 2.0 \times 10^{-6} \ \text{M}$
- B2: $[\ce{H+}] = 2.0 \times 10^{-3} \ \text{M}$, $[\ce{OH-}] = 5.0 \times 10^{-12} \ \text{M}$
- B3: $[\ce{H+}] = 2.5 \times 10^{-11} \ \text{M}$
- B4: pH = 2.30
- B5: pH = 12.30

**Intermediate**
- I1: $x = 5.5 \times 10^{-3}$, pH = 2.26 (quadratic needed)
- I2: $K_a = 5.0 \times 10^{-9}$
- I3: pH = 11.82
- I4: $K_b = 2.1 \times 10^{-7}$
- I5: $x = 4.15 \times 10^{-4}$, % = 4.15% (higher than 1.34% at 0.100 M)
- I6: $\text{p}K_a(\ce{NH4+}) = 9.26$, pH = 9.08
- I7: pH = 9.29
- I8: (a) 0.70, (b) 0.90, (c) 7.00, (d) 11.07
- I9: 0 mL: pH = 2.37, 20.0 mL: pH = 3.74, 40.0 mL: pH = 8.22

**Advanced**
- A1: pH = 4.15
- A2: pH = 5.18
