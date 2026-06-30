# Physics Without Intuition

## A Mechanical System for Solving Problems After the Flashcard Deck

---

## Prologue

You have memorized 430 cards from `honors-physics-expression-to-equation-vocabulary.md`. When a problem says "from rest," your hand writes $v_0 = 0$ before your eyes reach the next word (Card 1). When it says "collision," $\sum p_i = \sum p_f$ is already on the page (Card 72). When it says "spring," Hooke's Law (Card 42) and spring potential energy (Card 58) fire together.

You do not need this document to tell you which equation to use. The cards have already told you.

What you need is a **mechanical procedure for connecting cards.** A single physics problem fires 3, 5, or 10 cards across multiple domains. Your task is not to find equations — it is to trace every trigger phrase to its card, write the equation the card demands, chain the cards when domains cross, and verify every answer with dimensions. This document gives you that procedure.

**Difficulty = number of cards fired.** A Level-1 problem fires 3 cards. A Level-4 Olympiad problem fires 10. The method is identical either way.

---

# Part 0: The Four Contracts

Before you touch a single equation, you make four commitments. These are not physics. They are contracts with yourself. They prevent sign errors, unit errors, and the most dangerous error of all — solving for the wrong variable.

---

## §0.1 The Coordinate System

Fill in four blanks. Never change them mid-problem.

```
+x direction: _______________  (direction of primary motion)
+y direction: _______________  (upward, or ⟂ away from incline surface)
Origin:       _______________  (object's starting position, or problem's reference)
t = 0 at:     _______________  (instant action begins: release, throw, collision)
```

**Rule 1 (+x):** Point it where the object primarily goes. Car east → $+x$ = east. Block down incline → $+x$ = down the incline.

**Rule 2 (+y):** Point it upward. On an incline, point $+y$ perpendicular away from the surface — this makes the normal force purely $+y$ and decouples your equations.

**Rule 3 (origin):** Default: where the object starts. If the problem says "the ground," put the origin there.

**Rule 4 ($t=0$):** The instant the action begins. Release. Throw. Collision.

**Golden rule:** Once written, never change. A negative answer means "opposite the + direction." It does not mean "wrong."

---

## §0.2 Dimensional Analysis — Cards 394–430

Dimensional analysis is the only verification tool that works for every physics problem across every domain. It catches 80% of algebra mistakes. It requires zero understanding of the physics — only that you know the dimension of every quantity.

**Base dimensions:** $[M]$ (mass), $[L]$ (length), $[T]$ (time), $[Q]$ (charge), $[\Theta]$ (temperature).

| Quantity | Definition | Dimension | Card |
|----------|-----------|-----------|------|
| Speed $v$ | $\Delta x/\Delta t$ | $[L][T]^{-1}$ | 401 |
| Acceleration $a$ | $\Delta v/\Delta t$ | $[L][T]^{-2}$ | 402 |
| Force $F$ | $ma$ | $[M][L][T]^{-2}$ | 403 |
| Energy $E,K,U,W$ | $Fd$, $\frac{1}{2}mv^2$ | $[M][L]^2[T]^{-2}$ | 404 |
| Momentum $p$ | $mv$ | $[M][L][T]^{-1}$ | 405 |
| Pressure $P$ | $F/A$ | $[M][L]^{-1}[T]^{-2}$ | 408 |
| Frequency $f$ | $1/T$ | $[T]^{-1}$ | 416 |
| Spring constant $k$ | $F/x$ | $[M][T]^{-2}$ | 415 |
| Electric charge $q$ | base | $[Q]$ | 419 |
| Electric field $E$ | $F/q$ | $[M][L][Q]^{-1}[T]^{-2}$ | 420 |
| Voltage $V$ | $U/q$ | $[M][L]^2[Q]^{-1}[T]^{-2}$ | 421 |
| Magnetic field $B$ | $F/(qv)$ | $[M][Q]^{-1}[T]^{-1}$ | 424 |
| Resistance $R$ | $V/I$ | $[M][L]^2[Q]^{-2}[T]^{-1}$ | 423 |

**The dimension check (Card 430):** After solving, compute the dimension of your answer. Does it match the dimension of the quantity you solved for? If not, your equation is wrong. Period. No exceptions. Fix it now, before you box the answer.

---

## §0.3 The Variable Table

Before you think about any problem, draw this:

```
| Variable | Symbol | Value | Unit | Dimension | Source |
|----------|--------|-------|------|-----------|--------|
```

Rules:
1. Every number from the problem gets a row. Include its unit.
2. The unknown gets `?` in the Value cell.
3. **Implied zeros get rows.** "From rest" → $v_0 = 0$ (Card 308). "Stops" → $v = 0$ (Card 309). "Maximum height" → $v_y = 0$ (Card 310). "Frictionless" → $f = 0$ (Card 311). "Just loses contact" → $N = 0$ (Card 316).
4. The Dimension column is your safety net. Your final answer must match it.

---

## §0.4 The Trigger Trace

This is the core of the method. You do not "look up" equations. You recognize trigger phrases and fire cards. A **Trigger Trace** records every card that fired.

### Extraction Algorithm

Execute these four passes mechanically:

1. **Read once.** No pencil. Gather the gist in five words or fewer.
2. **Extract numbers.** Every number with its unit → Variable Table (§0.3).
3. **Fire cards.** Underline every trigger phrase. For each one, write the card number and its instant equation. The set of cards that fire tells you the problem's domain.
4. **Identify the unknown.** Mark `?` in the Variable Table.

### Worked Extraction

> *"A stone is dropped from a 20 m high bridge. How long does it take to hit the water? ($g = 10\;\mathrm{m/s^2}$)"*

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dropped" | 1 | $v_0 = 0$ |
| $g = 10$, free-fall context | 6 | $a_y = -g = -10\;\mathrm{m/s^2}$ |
| "How long?" | 7 | $t$ is the TARGET |

Three cards fired. Domain: kinematics (Cards 1–22). No force words → no free-body diagram needed. The equation selector (Card 4) plus the missing-variable rule picks $\Delta y = v_{0y}t + \frac{1}{2}a_y t^2$ automatically.

**Every worked example in this document begins with a Trigger Trace.** It is the bridge between your flashcard training and problem-solving.

---

# Part I: The I-SEE-R Protocol

Every problem in this document — single-domain or Olympiad synthesis — uses the same five-step protocol.

| Step | Name | Action |
|------|------|--------|
| **I** | Identify | Run the 4-pass extraction (§0.4). Produce: coordinate system, variable table, trigger trace. |
| **S** | Simplify | Cross out what does not matter. Frictionless? Massless rope? 1D motion? Ideal gas? |
| **E** | Equation | Write every equation from your trigger trace. Do not choose — the cards already chose. If multiple cards fired, write them all. |
| **E** | Execute | Substitute numbers. Solve algebraically. Keep symbols until the last possible moment. |
| **R** | Reflect | Three checks: (1) dimensions match (Card 430)? (2) one extreme case behaves correctly? (3) sign makes physical sense? |

The **E — Equation** step used to be the hardest part of physics. For you, it is the easiest. The trigger phrase fires the card. The card demands the equation. You write it. The only remaining skill is chaining cards when a single problem spans multiple domains — and that is what Part V teaches.

---

# Part II: Mechanics — Three Examples

## Example 1: Free Fall

> A stone is dropped from a 20 m high bridge. How long does it take to hit the water? ($g = 10\;\mathrm{m/s^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dropped" | 1 | $v_0 = 0$ |
| $g = 10$, free-fall context | 6 | $a_y = -g = -10\;\mathrm{m/s^2}$ |
| "How long?" | 7 | $t$ is the TARGET |

**Cards fired: 1, 4, 6, 7.** Domain: kinematics. No force words → no FBD.

### Coordinate System
```
+y: upward | Origin: water surface (y = 0) | t = 0: release
→ y₀ = +20 m, y = 0, a_y = -10 m/s², v₀y = 0
```

### Variable Table

| Variable | Symbol | Value | Unit | Dimension |
|----------|--------|-------|------|-----------|
| Initial position | $y_0$ | 20 | m | $[L]$ |
| Final position | $y$ | 0 | m | $[L]$ |
| Initial velocity | $v_{0y}$ | 0 | m/s | $[L][T]^{-1}$ |
| Acceleration | $a_y$ | −10 | m/s² | $[L][T]^{-2}$ |
| Time | $t$ | ? | s | $[T]$ |

### I-SEE-R

**S — Simplify.** 1D vertical motion. No air resistance. Acceleration constant at $-10$.

**E — Equation.** Card 4 (kinematic suite) gives the master set. I know $y_0$, $y$, $v_{0y}$, $a_y$. I need $t$. I do not know $v_y$ and the problem does not ask for it. The missing-variable rule (Card 4 table) says: need $t$, missing $v$ → use $\Delta y = v_{0y}t + \frac{1}{2}a_y t^2$.

$$\Delta y = v_{0y}t + \frac{1}{2}a_y t^2$$
$$-20 = 0 \cdot t + \frac{1}{2}(-10)t^2$$

**E — Execute.** $-20 = -5t^2 \rightarrow t^2 = 4 \rightarrow t = 2.0\;\mathrm{s}$ (positive root only — time cannot be negative).

**R — Reflect.**
- *Dimensions:* $[L] = [L][T]^{-2} \cdot [T]^2 = [L]$. Card 430: match. ✓
- *Extreme case:* Double the height → $t = \sqrt{8} = 2.83\;\mathrm{s}$. Time scales as $\sqrt{h}$ — the signature of constant acceleration from rest. ✓
- *Independent check:* $v_y = (-10)(2) = -20\;\mathrm{m/s}$. $\bar{v}_y = (0 + (-20))/2 = -10\;\mathrm{m/s}$. $\Delta y = \bar{v}_y t = (-10)(2) = -20\;\mathrm{m}$. ✓

**Answer: $2.0\;\mathrm{s}$.**

---

## Example 2: Incline with Friction

> A $5.0\;\mathrm{kg}$ block slides down a $30^\circ$ incline. $\mu_k = 0.25$. Find the acceleration. ($g = 10\;\mathrm{m/s^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "slides down" (motion → kinetic) | 29 | $f_k = \mu_k N$ |
| "incline" / $30^\circ$ | 38 | $mg\sin\theta$ (along), $mg\cos\theta$ (⟂) |
| "friction" / $\mu_k$ | 28, 29 | $f_k = \mu_k N$, opposes motion |
| "Find acceleration" | 23 | $\sum F = ma$ is PRIMARY LAW |

**Cards fired: 23, 27, 28, 29, 38.** Domain: forces. Multiple force words → FBD required.

### Coordinate System
```
+x: down the incline | +y: ⟂ away from surface
→ mg sinθ along +x | -f_k along -x | +N along +y | -mg cosθ along -y
→ a_y = 0 (block stays on surface)
```

### Variable Table

| Variable | Symbol | Value | Unit | Dimension |
|----------|--------|-------|------|-----------|
| Mass | $m$ | 5.0 | kg | $[M]$ |
| Angle | $\theta$ | 30° | — | $[1]$ |
| Kinetic friction coeff | $\mu_k$ | 0.25 | — | $[1]$ |
| Gravity | $g$ | 10 | m/s² | $[L][T]^{-2}$ |
| Acceleration | $a$ | ? | m/s² | $[L][T]^{-2}$ |

### I-SEE-R

**S — Simplify.** Block is sliding → kinetic friction, $f_k = \mu_k N$ (Card 29, not Card 30 which is static). Three forces: gravity, normal, friction. The block stays on the surface → $a_y = 0$.

**E — Equation.** Card 23 ($\sum F = ma$) per axis:

$+x$: $mg\sin\theta - f_k = ma$

$+y$: $N - mg\cos\theta = 0$ → $N = mg\cos\theta$ (Card 27: normal force from $\sum F_y = 0$)

Substitute Card 29 ($f_k = \mu_k N = \mu_k mg\cos\theta$) into the $x$-equation:

$$mg\sin\theta - \mu_k mg\cos\theta = ma$$

$m$ cancels. Card 39 told us this happens for frictionless inclines; it happens with friction too:

$$a = g(\sin\theta - \mu_k\cos\theta)$$

**E — Execute.** $a = 10(0.5 - 0.25 \times 0.866) = 10(0.5 - 0.2165) = 2.84\;\mathrm{m/s^2}$.

**R — Reflect.**
- *$\mu_k = 0$:* $a = 5.0 = g\sin\theta$. This is Card 39's result for a frictionless incline. ✓
- *$\theta = 0$ (flat):* $a = -2.5\;\mathrm{m/s^2}$. Friction decelerates — correct, a block does not spontaneously slide on a flat surface. ✓
- *$\theta = 90^\circ$ (vertical):* $a = 10 = g$. No normal force, no friction, pure free fall. ✓

**Answer: $2.84\;\mathrm{m/s^2}$ down the incline.**

---

## Example 3: Perfectly Inelastic Collision

> A $1500\;\mathrm{kg}$ car at $20\;\mathrm{m/s}$ east collides with a $2500\;\mathrm{kg}$ SUV at rest. They stick together. Find their velocity after.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "collides" | 72 | $\sum p_i = \sum p_f$ |
| "at rest" | 1 | $v_2 = 0$ |
| "stick together" | 73 | $m_1v_1 + m_2v_2 = (m_1+m_2)v_f$ |

**Cards fired: 1, 72, 73.** Domain: momentum. Single collision, one equation, one unknown. KE is NOT conserved (Card 73 note) — and we do not need it.

### Variable Table

| Variable | Symbol | Value | Unit | Dimension |
|----------|--------|-------|------|-----------|
| Car mass | $m_1$ | 1500 | kg | $[M]$ |
| SUV mass | $m_2$ | 2500 | kg | $[M]$ |
| Car initial $v$ | $v_1$ | 20 | m/s | $[L][T]^{-1}$ |
| SUV initial $v$ | $v_2$ | 0 | m/s | $[L][T]^{-1}$ |
| Final velocity | $v_f$ | ? | m/s | $[L][T]^{-1}$ |

### I-SEE-R

**S — Simplify.** Perfectly inelastic (Card 73). One unknown, one equation. No external forces during the collision → momentum conserved (Card 72).

**E — Execute.** Card 73 gives the equation directly. Solve for $v_f$:

$$v_f = \frac{m_1v_1 + m_2v_2}{m_1+m_2} = \frac{1500(20) + 0}{4000} = 7.5\;\mathrm{m/s}$$

**R — Reflect.**
- *Dimensional:* $[M][L][T]^{-1} / [M] = [L][T]^{-1}$. ✓
- *$m_2 = 0$ (no SUV):* $v_f = 20\;\mathrm{m/s}$. The car continues unchanged. The formula handles the edge case. ✓
- *Direction:* Positive = east. The wreckage moves east, slower than the car's original speed — physically correct. ✓
- *Energy note (optional):* Initial $K = 300{,}000\;\mathrm{J}$, final $K = 112{,}500\;\mathrm{J}$. Over 60% converted to heat and deformation — typical for perfectly inelastic collisions. ✓

**Answer: $7.5\;\mathrm{m/s}$ east.**

---

# Part III: E&M — Two Examples

## Example 4: Coulomb's Law

> $q_1 = +3.0\;\mu\mathrm{C}$, $q_2 = -2.0\;\mu\mathrm{C}$, $0.10\;\mathrm{m}$ apart. Find the electrostatic force. ($k = 9.0\times10^9\;\mathrm{N\;m^2/C^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "charges" / "$\mu$C" | 154 | $F = k|q_1 q_2|/r^2$ |
| Opposite signs | 156 | Attractive force |

**Cards fired: 154, 156.** Domain: electrostatics. Direct substitution — the card IS the answer.

### I-SEE-R

**S — Simplify.** Point charges, vacuum, 1D radial. The charges have opposite signs → force is attractive (Card 156).

**E — Execute.** Card 154 fires:

$$F = 9.0\times10^9 \cdot \frac{(3.0\times10^{-6})(2.0\times10^{-6})}{(0.10)^2} = 5.4\;\mathrm{N}$$

**R — Reflect.**
- *Dimensions:* $[k][Q]^2/[L]^2 = [M][L]^3[Q]^{-2}[T]^{-2} \cdot [Q]^2 \cdot [L]^{-2} = [M][L][T]^{-2}$ = force (Card 403). ✓
- *Doubled distance:* $F/4 = 1.35\;\mathrm{N}$. Inverse square law — the signature of Coulomb (Card 154) and gravity (Card 94). ✓

**Answer: $5.4\;\mathrm{N}$, attractive.**

---

## Example 5: Compound Circuit

> $R_1 = 4.0\;\Omega$, $R_2 = 12.0\;\Omega$ in parallel, $R_3 = 6.0\;\Omega$ in series. $24\;\mathrm{V}$ battery. Find $I_2$ and $V_2$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$\Omega$" / "resistor" | 171 | $V = IR$ |
| "parallel" ($R_1$, $R_2$) | 173 | $1/R_{12} = 1/R_1 + 1/R_2$ |
| "series" ($R_{12}$, $R_3$) | 172 | $R_{\text{total}} = R_{12} + R_3$ |
| "$24\;\mathrm{V}$ battery" | 180 | $V_{\text{terminal}} = \mathcal{E}$ (ideal) |

**Cards fired: 171, 172, 173, 175, 180.** Domain: circuits. The strategy is reduction — Card 175.

### I-SEE-R

**S — Simplify.** Ideal wires, ideal battery, DC steady state. Pure resistive circuit.

**E — Execute.** Card 175: reduce inward-outward.

*Phase 1 — parallel (Card 173):* $\frac{1}{R_{12}} = \frac{1}{4.0} + \frac{1}{12.0} = \frac{4}{12}$ → $R_{12} = 3.0\;\Omega$

*Phase 2 — series (Card 172):* $R_{\text{total}} = 3.0 + 6.0 = 9.0\;\Omega$

*Phase 3 — total current (Card 171):* $I_{\text{total}} = 24/9.0 = 2.667\;\mathrm{A}$

*Phase 4 — distribute backward:* $V_3 = I_{\text{total}} \cdot 6.0 = 16\;\mathrm{V}$. $V_{12} = 24 - 16 = 8\;\mathrm{V}$. Parallel branches share voltage (Card 173 note): $V_1 = V_2 = 8\;\mathrm{V}$.

$$I_2 = V_2/R_2 = 8/12 = 0.667\;\mathrm{A}$$

**R — Reflect.**
- *KCL (Card 176):* $I_1 = 8/4 = 2\;\mathrm{A}$. $I_1 + I_2 = 2.667 = I_{\text{total}}$. ✓
- *Power (Card 178):* $P_{\text{total}} = 24(2.667) = 64\;\mathrm{W}$. $P_1 + P_2 + P_3 = 16 + 5.33 + 42.67 = 64\;\mathrm{W}$. ✓

**Answer: $I_2 = 0.667\;\mathrm{A}$, $V_2 = 8\;\mathrm{V}$.**

---

# Part IV: Thermodynamics & Waves

## Example 6: The Combined Gas Law

> Sealed container: $P_1 = 2.0\;\mathrm{atm}$, $V_1 = 5.0\;\mathrm{L}$, $T_1 = 300\;\mathrm{K}$. Compressed to $V_2 = 2.0\;\mathrm{L}$, heated to $T_2 = 450\;\mathrm{K}$. Find $P_2$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "gas" / "pressure" / "volume" / "temperature" | 217 | $PV = nRT$ |
| "sealed" | 220 | $\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$ ($n$ constant) |

**Cards fired: 217, 220.** Domain: thermodynamics. Sealed → $n$ constant → combined gas law. Direct.

### I-SEE-R

**S — Simplify.** Ideal gas (Card 217). Sealed container → $n$ constant → $R$ cancels (Card 220).

**E — Execute.** Card 220 fires. Solve for $P_2$:

$$P_2 = P_1 \cdot \frac{V_1}{V_2} \cdot \frac{T_2}{T_1} = 2.0 \cdot \frac{5.0}{2.0} \cdot \frac{450}{300} = 2.0 \cdot 2.5 \cdot 1.5 = 7.5\;\mathrm{atm}$$

The factors reveal the physics: compression multiplies pressure by $2.5\times$. Heating multiplies it by $1.5\times$. Combined: $3.75\times$.

**R — Reflect.**
- *Isothermal ($T_2 = T_1$):* $P_2 = 5.0\;\mathrm{atm}$ — Boyle's Law (Card 221). ✓
- *Isochoric ($V_2 = V_1$):* $P_2 = 3.0\;\mathrm{atm}$ — Gay-Lussac's Law (Card 223). ✓
- Both factors multiply independently. The combined gas law (Card 220) reduces correctly to each special case. ✓

**Answer: $7.5\;\mathrm{atm}$.**

---

## Example 7: Standing Waves on a String

> Guitar string: $L = 0.65\;\mathrm{m}$, $\mu = 4.0\times10^{-3}\;\mathrm{kg/m}$, $F_T = 100\;\mathrm{N}$. Find $f_1$, $f_3$, $\lambda_3$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "string" / "tension" | 136 | $v = \sqrt{F_T/\mu}$ |
| "fixed at both ends" | 139 | $f_n = nv/(2L)$ |
| "fundamental frequency" | 142 | $f_1 = v/(2L)$ |
| "third harmonic" | 143 | $f_3 = 3f_1$, $\lambda_3 = 2L/3$ |

**Cards fired: 132, 136, 139, 142, 143.** Domain: waves. Two-step: find $v$, then frequencies.

### I-SEE-R

**S — Simplify.** Ideal string, uniform density, constant tension. Both ends fixed → displacement nodes at $x=0$ and $x=L$ (Card 139).

**E — Execute.**

Card 136: $v = \sqrt{100 / (4.0\times10^{-3})} = \sqrt{25{,}000} = 158.1\;\mathrm{m/s}$

Card 142: $f_1 = v/(2L) = 158.1/1.30 = 121.6\;\mathrm{Hz}$

Card 143: $f_3 = 3f_1 = 364.8\;\mathrm{Hz}$, $\lambda_3 = 2L/3 = 0.433\;\mathrm{m}$

**R — Reflect.**
- *Dimensions:* $\sqrt{[M][L][T]^{-2} / [M][L]^{-1}} = [L][T]^{-1}$ = speed (Card 401). ✓
- *Physical check:* Tighter string → higher $v$ → higher $f$ (sharper pitch). Heavier string → lower $v$ → lower $f$ (deeper pitch). Every string instrument confirms this. ✓
- *Harmonic spacing:* $f_n = n f_1$ — integer multiples. The defining property of a string fixed at both ends (Card 139). ✓

**Answer: $f_1 = 122\;\mathrm{Hz}$, $f_3 = 365\;\mathrm{Hz}$, $\lambda_3 = 0.433\;\mathrm{m}$.**

---

# Part V: The Bridge Protocol — Cards 321–375

The seven examples above are single-domain. One to four cards fire, one domain's laws apply, the answer comes directly. But SAT Physics and Olympiad problems chain domains. A bullet embeds in a block (momentum), then the block compresses a spring (energy). A gas expands (thermo), driving a piston (mechanics), which compresses a spring (SHM).

The vocabulary deck dedicates 55 cards to these chains: **Cards 321–375 (Cross-Domain Bridges).** They do not contain new physics. They describe *architectures* — the structure of synthesis problems. Your job: recognize which bridge card your problem matches, then execute the chain.

### The Bridge Recognition Algorithm

When a problem describes two or more distinct EVENTS separated in time, run this decision tree (Section 17.11 of the vocabulary deck):

| Step | First event involves… | Bridge domain is… | Output is… | See cards… |
|------|----------------------|-------------------|------------|------------|
| 1 | COLLISION, EXPLOSION, RECOIL | MOMENTUM | $v_f$ | 321–327 |
| 2 | POTENTIAL DIFFERENCE, E-FIELD | ENERGY ($\frac{1}{2}mv^2 = qV$) | $v$ | 338–344 |
| 3 | FALLING, SLIDING, SPRING | ENERGY CONSERVATION | $v$ or $x$ | 323, 328–337 |
| 4 | GAS changing $P,V,T$ | THERMO | $P$, $V$, $T$, or $W$ | 350–354 |
| 5 | ACCELERATION over distance/time | KINEMATICS | $v$ or $t$ | — |

**After you identify the first domain and its output:** that output is the *bridge variable* — it becomes an input to the second domain. The bridge card tells you the second domain's equation.

---

### Worked Bridge Example: Bullet + Block + Spring

> A $0.030\;\mathrm{kg}$ bullet at $500\;\mathrm{m/s}$ embeds in a $1.5\;\mathrm{kg}$ block on a frictionless surface. The block compresses a spring ($k = 2000\;\mathrm{N/m}$). Find max compression.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "bullet embeds in block" | 73 | $m_b v_b = (M+m)v_f$ |
| "frictionless surface" | 31 | $f = 0$ |
| "compresses a spring" | 42, 58 | $F_s = -kx$, $U_s = \frac{1}{2}kx^2$ |
| **Bridge: bullet+block+spring** | **321** | Momentum → $v_f$ → Energy |

**Cards fired: 31, 42, 58, 72, 73, 321.** Two events → bridge architecture.

### I-SEE-R

**S — Simplify.** Event 1: perfectly inelastic collision (Card 73). Event 2: spring compression on frictionless surface (Cards 31, 58, 60). The collision is fast — momentum is conserved but KE is NOT. After the collision, mechanical energy IS conserved (frictionless).

**E — Equation.** Card 321 gives the architecture. Two chained equations:

*Domain A — Momentum (Card 73):*
$$v_f = \frac{m_b v_b}{M+m} = \frac{0.030(500)}{1.53} = 9.80\;\mathrm{m/s}$$

*Domain B — Energy (Card 58):*
$$\frac{1}{2}(M+m)v_f^2 = \frac{1}{2}kx_{\max}^2$$

$$x_{\max} = v_f\sqrt{\frac{M+m}{k}} = 9.80\sqrt{\frac{1.53}{2000}} = 0.271\;\mathrm{m}$$

**R — Reflect.**
- *Dimensions:* $[L][T]^{-1} \cdot \sqrt{[M] / ([M][T]^{-2})} = [L][T]^{-1} \cdot [T] = [L]$. ✓
- *Key insight:* The bullet's initial KE is $\frac{1}{2}(0.03)(500)^2 = 3750\;\mathrm{J}$. After embedding, the combined KE is only $\frac{1}{2}(1.53)(9.80)^2 = 73.5\;\mathrm{J}$. Over 97% of the bullet's KE becomes heat during embedding — only $73.5\;\mathrm{J}$ compresses the spring. Card 321's note warns you about this: "The bullet's initial KE is mostly converted to heat." ✓

**Answer: $0.271\;\mathrm{m}$ ($27.1\;\mathrm{cm}$).**

---

# Part VI: The Variable-Group Method

Some problems resist direct mapping. The numbers describe the *middle* of a trajectory, but the question asks about the *beginning* or *end*. The given values and the target live in different "contexts" — different segments of the motion with different $\Delta t$, different $\Delta x$, but a shared boundary value.

This is not a physics problem. It is a bookkeeping problem. The Variable-Group Method solves it mechanically. No spatial reasoning. No trajectory visualization. Just tables and counting.

### The Six Phases

| Phase | Action | Mechanical Question |
|-------|--------|---------------------|
| 0 | **Recognize** that grouping is needed | Can I write one equation containing BOTH all givens AND the target? If no → group. |
| 1 | **Partition** into contexts | "Which numbers describe the same thing?" Use the "About What" test. |
| 2 | **Build mini tables** | Each context gets its own variable table. Same symbol = same physical quantity. |
| 3 | **Find the richest context** | Count KNOWN cells. Solve the context with the most knowns first. |
| 4 | **Solve the richest context** | Use the missing-variable rule (Card 4 kinematic selector). |
| 5 | **Transfer the bridge** | Does the variable just found appear in another context's table? Copy it there as KNOWN. |
| 6 | **Repeat until target is KNOWN** | Cycle: richest → solve → bridge → recount → richest → … |

The cycle terminates when the TARGET — the quantity the problem asks for — becomes KNOWN. You do not need to solve every context. You only need enough to reach the target.

---

### Worked Example: The Window Problem

> A ball is thrown straight up. It passes a $2.00\;\mathrm{m}$ high window whose bottom is $7.50\;\mathrm{m}$ above the ground. The ball takes $1.30\;\mathrm{s}$ to travel from bottom to top of the window — and it is still going up. What was the ball's initial velocity at ground level? ($g = 10.0\;\mathrm{m/s^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "thrown straight up" | 16 | $a_y = -g$, $v_{0y} > 0$ |
| "passes a point" / "crosses" | 19 | Middle-of-trajectory context — grouping required |
| "still going up" | 13 | $v_y$ not yet zero at window top |
| $g = 10.0$ | 6 | $a_y = -10.0\;\mathrm{m/s^2}$ |

**Cards fired: 4, 6, 13, 16, 19.** Card 19 explicitly signals the Variable-Group Method.

### Phase 0 — Recognize

Try writing one equation that connects $2.00\;\mathrm{m}$, $1.30\;\mathrm{s}$, $7.50\;\mathrm{m}$ to the initial velocity at ground level. You cannot — the window numbers belong to a middle segment, the initial velocity belongs to the beginning. Grouping is required.

### Phase 1 — Partition

| Context | "About what?" | Variables |
|---------|--------------|-----------|
| **Context W (window)** | Motion from window bottom to window top | $\Delta y_W = 2.00$, $t_W = 1.30$, $a_y = -10.0$, $v_{\text{bottom}}$, $v_{\text{top}}$ |
| **Context G (ground)** | Motion from ground to window bottom | $\Delta y_G = 7.50$, $a_y = -10.0$, $v_{0y}$ (TARGET), $v_{\text{bottom}}$, $t_G$ |

$v_{\text{bottom}}$ appears in both — it is the **bridge variable.**

### Phase 2 — Mini Tables

**Context W:** Known: $a_y$, $t_W$, $\Delta y_W$. Unknown: $v_{\text{bottom}}$, $v_{\text{top}}$.

**Context G:** Known: $a_y$, $\Delta y_G$. Unknown: $v_{0y}$ (TARGET), $v_{\text{bottom}}$, $t_G$.

### Phase 3 — Richest Context

Context W: 3 knowns. Context G: 2 knowns. → Solve Context W first.

### Phase 4 — Solve Context W

Missing-variable rule (Card 4): need any variable; I do not need $v_{\text{top}}$ → use $\Delta y = v_0 t + \frac{1}{2}a t^2$.

$$2.00 = v_{\text{bottom}}(1.30) + \frac{1}{2}(-10.0)(1.30)^2$$
$$2.00 = 1.30\,v_{\text{bottom}} - 8.45$$
$$v_{\text{bottom}} = 8.04\;\mathrm{m/s}$$

### Phase 5 — Transfer

$v_{\text{bottom}} = 8.04$ is now KNOWN in Context G. Context G: 3 knowns ($a_y$, $\Delta y_G$, $v_{\text{bottom}}$).

### Phase 4 again — Solve Context G

Need $v_{0y}$. Do not need $t_G$ → Card 4: missing $t$ → $v^2 = v_0^2 + 2a\Delta x$.

$$(8.04)^2 = v_{0y}^2 + 2(-10.0)(7.50)$$
$$64.6 = v_{0y}^2 - 150$$
$$v_{0y} = 14.7\;\mathrm{m/s}$$

### Phase 6 — Target Reached

TARGET $v_{0y} = 14.7\;\mathrm{m/s}$ is KNOWN. Stop.

**R — Reflect.**
- *Plausibility:* $v_{0y} = 14.7$ at ground decreases to $8.04$ at $7.50\;\mathrm{m}$ height. Gravity has decelerated the ball — consistent. ✓
- *Max height (Card 62):* $h_{\max} = v_{0y}^2/(2g) = 10.8\;\mathrm{m}$. Window top is at $9.50\;\mathrm{m}$, so the ball is indeed still rising at the window top — consistent with "still going up." ✓

**Answer: $14.7\;\mathrm{m/s}$ upward.**

---

# Part VII: The Problem-Difficulty Ladder

Problems are not hard because you lack intuition. They are hard because they fire more cards. Difficulty is a countable property.

| Level | Cards | Structure | Strategy |
|-------|-------|-----------|----------|
| **1. Direct** | 1–3 | Single domain, all variables given | Trigger Trace → I-SEE-R. The card IS the equation. |
| **2. Two-Step** | 2–5 | One bridge variable | Chain: Domain A's output = Domain B's input. Find the bridge card (321–375). |
| **3. Multi-Context** | 3–8 | Numbers and target in different contexts | Variable-Group Method. Partition, count knowns, bridge, repeat. |
| **4. Synthesis** | 5–15 | 3+ domains | Fire every card triggered by the problem. Cross out cards whose equations contain variables that are neither given nor reachable from other cards. What remains IS the solution path. |

Your practice problem files are organized by level:
- `physics-questions.md` B1–B50: Level 1–2, 1–3 cards
- `physics-questions.md` I1–I50: Level 2–3, 2–5 cards
- `physics-questions.md` A1–A50: Level 3–4, 4–10 cards

---

# Part VIII: Recovery Protocols — When You Are Stuck

### Protocol A: Implicit Zero Scan (Cards 308–320)

Count knowns. Count unknowns. If unknowns exceed equations, re-read for implicit zeros. "From rest" → $v_0 = 0$ (Card 308). "Stops" → $v = 0$ (Card 309). "Maximum height" → $v_y = 0$ (Card 310). "Frictionless" → $f = 0$ (Card 311). "Just loses contact" → $N = 0$ (Card 316). "Massless rope" → $T$ uniform (Card 312). "Constant speed" → $a = 0$ (Card 318).

### Protocol B: Dimensional Back-Solve (Cards 394–430)

Write the dimension of the target. Write the dimensions of every given quantity. Is there only ONE way to combine the givens to produce the target's dimension? That combination IS the formula, up to a dimensionless constant. Card 430: "Do the dimensions of my answer match the dimension of what I am solving for?"

### Protocol C: Extreme-Case Test

Set one variable to zero or infinity. Does the result make physical sense? $m_2 = 0$ in a collision → first object continues unchanged. $\mu_k = 0$ on an incline → $a = g\sin\theta$ (Card 39). $\theta = 0$ on an incline → flat surface behavior. A formula that fails any extreme case is wrong. Do not box it.

### Protocol D: One-Sentence Summary

Stared for five minutes without writing? Stop. Describe the problem in plain language without physics words. "Something starts from rest, moves a distance while speeding up, I need its final speed." The physics terminology was the obstacle. Plain language reveals the structure.

---

# Part IX: The Meta-Method — Learning New Physics

When you encounter a textbook chapter on a topic not yet in your flashcard deck:

**Pass 1 — Harvest equations.** Flip through. Copy every boxed, bold, or displayed equation into a list. Do not read the surrounding text.

**Pass 2 — Identify variables.** For each symbol in each harvested equation, write its name, its SI unit, and its dimension (derive from the equation using §0.2).

**Pass 3 — Classify.** Every physics equation answers one of four questions: Definition (what IS this quantity?), Force law (what force acts?), Motion law (how does it move?), or Conservation (what stays constant?).

**Pass 4 — Create flashcards.** Each new physics word → one new card in your personal deck, following the format of Cards 1–430. Now a future problem containing that word will mechanically trigger the new equation.

---

## Quick-Reference Card

### I-SEE-R Protocol
| Step | Action |
|------|--------|
| **I** | 4-pass extraction: read → extract numbers → fire cards → identify unknown |
| **S** | Cross out what does not matter |
| **E** | Write every card equation from the trigger trace |
| **E** | Substitute numbers, solve algebraically |
| **R** | Dimension check (Card 430) + one extreme case + sign sanity |

### Trigger Trace Format
```
| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dropped"     | 1    | v₀ = 0           |
| "free fall"   | 6    | a = -g           |
| "How long?"   | 7    | t is the TARGET  |
```

### Bridge Decision Tree
```
Two or more events?
├─ COLLISION/EXPLOSION/RECOIL first? → Momentum → v_f (Cards 321–327)
├─ VOLTAGE/E-FIELD first?            → ½mv² = qV → v (Cards 338–344)
├─ FALLING/SLIDING/SPRING first?     → Energy → v or x (Cards 328–337)
├─ GAS (P,V,T) first?                → Thermo → P,V,T,W (Cards 350–354)
└─ ACCELERATION first?               → Kinematics → v or t
```

### Equation Selection (Card 4)
```
Need v,  missing t      → v²  = v₀² + 2aΔx
Need v,  missing Δx     → v   = v₀ + at
Need Δx, missing v      → Δx  = v₀t + ½at²
Need Δx, missing a      → Δx  = ½(v₀+v)t
Need t,  missing v      → Δx  = v₀t + ½at²
Need t,  missing Δx     → v   = v₀ + at
```

### Implicit Zero Catalog (Cards 308–320)
| Phrase | Zero | Card |
|--------|------|------|
| "from rest", "dropped" | $v_0 = 0$ | 308 |
| "stops", "comes to rest" | $v = 0$ | 309 |
| "maximum height", "peak" | $v_y = 0$ | 310 |
| "frictionless", "smooth" | $f = 0$ | 311 |
| "just loses contact" | $N = 0$ | 316 |
| "constant speed" | $a = 0$ | 318 |
| "equilibrium" | $\sum F = 0$, $\sum\tau = 0$ | 319 |

---

> **The exam is won before you enter the room.** Four hundred thirty cards have trained one reflex: see a phrase → write the equation. This document has trained a second: chain those equations mechanically, verify with dimensions, and never guess.
>
> Difficulty equals the number of cards fired. A Level-1 problem fires three cards. A Level-4 Olympiad problem fires ten. The method is the same. Count the cards. Trace the triggers. Execute.
>
> **If you can calculate it, you have understood it.**
