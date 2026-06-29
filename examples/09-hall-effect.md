# 09: The Hall Effect

**Type:** Olympiad | **Topic:** E&M / Magnetism | **Prerequisites:** Lorentz force, current, drift velocity

---

## Problem

A flat conductor of thickness $t = 0.50\ \mathrm{mm}$ and width $w = 2.0\ \mathrm{cm}$ carries a current $I = 5.0\ \mathrm{A}$ along its length. A uniform magnetic field $B = 0.80\ \mathrm{T}$ is applied perpendicular to the flat face. A Hall voltage $V_H = 4.0\ \mu\mathrm{V}$ develops across the width. Find (a) the drift velocity of the charge carriers, (b) the sign of the charge carriers, (c) the carrier density $n$. ($e = 1.60 \times 10^{-19}\ \mathrm{C}$)

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable          Symbol   Value               Unit        Dimension
─────────────────────────────────────────────────────────────────────
Thickness          t       5.0e-4              m           [L]
Width              w       2.0e-2              m           [L]
Current            I       5.0                 A           [Q][T]^{-1}
Magnetic field     B       0.80                T           [M][Q]^{-1}[T]^{-1}
Hall voltage       V_H     4.0e-6              V           [M][L]^2[Q]^{-1}[T]^{-2}
Drift velocity     v_d     ?                   m/s         [L][T]^{-1}
Carrier density    n       ?                   m^{-3}      [L]^{-3}
```

**Coordinate system (§0.1):** $+x$ = current direction (along conductor). $+y$ = across width (Hall voltage direction). $+z$ = perpendicular to flat face (magnetic field direction). Current $I$ is conventional (positive charge flow).

**Relevant laws:**
- Lorentz force: $\vec{F}_B = q\vec{v}_d \times \vec{B}$
- Hall equilibrium: $qE_H = qv_d B$ → $E_H = v_d B$
- Hall voltage: $V_H = E_H w$
- Current: $I = nqv_d A$ where $A = t \times w$

### Step S -- SIMPLIFY

Steady state (equilibrium between magnetic force and Hall electric force). Uniform current density. The magnetic force on carriers is balanced by the transverse Hall electric field.

### Step E -- EQUATION

From Hall equilibrium: $V_H/w = v_d B$ → $v_d = V_H/(wB)$.

From current: $n = I/(qv_d tw)$.

### Step E -- EXECUTE

$$v_d = \frac{4.0 \times 10^{-6}}{(2.0 \times 10^{-2})(0.80)} = \frac{4.0 \times 10^{-6}}{1.6 \times 10^{-2}} = 2.5 \times 10^{-4}\ \mathrm{m/s}$$

$$n = \frac{5.0}{(1.60 \times 10^{-19})(2.5 \times 10^{-4})(5.0 \times 10^{-4})(2.0 \times 10^{-2})} = \frac{5.0}{4.0 \times 10^{-28}} = 1.25 \times 10^{28}\ \mathrm{m^{-3}}$$

### Step R -- REFLECT

**Dimensional check (§0.2):**
- $v_d$: $[M][L]^2[Q]^{-1}[T]^{-2} / ([L] \cdot [M][Q]^{-1}[T]^{-1}) = [L][T]^{-1}$. ✓
- $n$: $[Q][T]^{-1} / ([Q] \cdot [L][T]^{-1} \cdot [L] \cdot [L]) = [L]^{-3}$. ✓

**Physical check:** $n = 1.25 \times 10^{28}\ \mathrm{m^{-3}}$ compares to copper's free electron density of $8.5 \times 10^{28}\ \mathrm{m^{-3}}$. Same order of magnitude, consistent with a metallic conductor. ✓

**Sign interpretation:** The polarity of $V_H$ reveals the sign of the charge carriers. If $V_H$ is positive on the $+y$ side, carriers are positive (conventional current matches carrier sign). If negative, carriers are electrons. In most metals, the Hall voltage polarity confirms negative carriers.

**Answer: (a) $v_d = 2.5 \times 10^{-4}\ \mathrm{m/s}$, (b) negative (electrons) if Hall voltage polarity indicates, (c) $n = 1.25 \times 10^{28}\ \mathrm{m^{-3}}$.**

> **Key insight:** The Hall effect is an equilibrium condition: $qE_H = qv_d B$. The measurable voltage $V_H$ reveals microscopic properties ($n$, sign of carriers, $v_d$) through purely algebraic relations. This is a prime example of how macroscopic measurements probe microscopic physics.
