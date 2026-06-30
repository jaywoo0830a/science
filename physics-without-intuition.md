# Physics Without Intuition

## After the Flashcards — A Mechanical System for Solving Any Problem

---

## Prologue: You Already Have the Equations

You have drilled 430 flashcards from the `honors-physics-expression-to-equation-vocabulary.md` deck. When you read "from rest," your hand writes $v_0 = 0$. When you read "collision," your hand writes $\sum p_i = \sum p_f$. When you read "spring," you have Hooke's Law and spring potential energy ready before you finish the sentence.

**This document is what comes next.** It assumes the equations are already in your fingers. What remains is a mechanical procedure for connecting them: extract the numbers, fire the right cards, chain them when the problem crosses domains, and verify every answer with dimensions.

Physics problems are not hard because the equations are hard. They are hard because a single problem fires 3, 5, or 10 cards across multiple domains. Your job is to **trace every trigger phrase to its card, write the equation, and let the algebra carry you.**

---

# Part 0: The Pre-Method

Before you solve anything, answer four questions. These are not physics — they are contracts with yourself that prevent sign errors and unit mistakes.

1. Which way is positive? (coordinate system)
2. What are the units of every quantity? (dimensional analysis)
3. What numbers do I have, and what am I looking for? (variable table)
4. Which cards fired? (trigger trace)

---

## §0.1 The Coordinate System

```
+x direction: _______________  (direction of primary motion — Rule 1)
+y direction: _______________  (upward, or perpendicular away from incline — Rule 2)
Origin:       _______________  (starting position — Rule 3)
t = 0 at:     _______________  (the instant action begins — Rule 4)
```

**Rule 1 (+x):** Set $+x$ to the direction the object primarily moves. Car drives east $\to$ $+x$ = east. Block slides down incline $\to$ $+x$ = down the incline.

**Rule 2 (+y):** Set $+y$ upward. On an incline, $+y$ is perpendicular to the surface, pointing away from it. This makes the normal force purely $+y$.

**Rule 3 (origin):** Default: the object's starting position. If the problem gives a reference point (like "the ground"), use that instead.

**Rule 4 ($t=0$):** The instant the action begins — release, throw, collision.

**Golden rule:** Once filled, **never change the coordinate system mid-problem.** A negative answer means "opposite to the + direction," not "wrong."

---

## §0.2 Dimensional Analysis

This is your universal error detector. It catches 80% of algebra mistakes without understanding the physics.

**Base dimensions:** $[M]$ (mass), $[L]$ (length), $[T]$ (time), $[Q]$ (charge), $[\Theta]$ (temperature).

| Quantity | Definition | Dimension |
|----------|-----------|-----------|
| Speed $v$ | $\Delta x / \Delta t$ | $[L][T]^{-1}$ |
| Acceleration $a$ | $\Delta v / \Delta t$ | $[L][T]^{-2}$ |
| Force $F$ | $ma$ | $[M][L][T]^{-2}$ |
| Energy $E, K, U, W$ | $Fd$ or $\frac{1}{2}mv^2$ | $[M][L]^2[T]^{-2}$ |
| Momentum $p$ | $mv$ | $[M][L][T]^{-1}$ |
| Pressure $P$ | $F/A$ | $[M][L]^{-1}[T]^{-2}$ |
| Frequency $f$ | $1/T$ | $[T]^{-1}$ |
| Spring constant $k$ | $F/x$ | $[M][T]^{-2}$ |
| Charge $q$ | base | $[Q]$ |
| Electric field $E$ | $F/q$ | $[M][L][Q]^{-1}[T]^{-2}$ |
| Voltage $V$ | $U/q$ | $[M][L]^2[Q]^{-1}[T]^{-2}$ |
| Magnetic field $B$ | $F/(qv)$ | $[M][Q]^{-1}[T]^{-1}$ |
| Resistance $R$ | $V/I$ | $[M][L]^2[Q]^{-2}[T]^{-1}$ |

**Protocol:** After solving, compute the dimension of your answer. Does it match the dimension of the quantity you solved for? If not, your equation is wrong. Period.

---

## §0.3 The Variable Table

Before thinking about any problem, draw this table:

```
| Variable | Symbol | Value | Unit | Dimension | Source |
|----------|--------|-------|------|-----------|--------|
| ...      | ...    | ...   | ...  | ...       | ...    |
```

Rules:
1. Every number from the problem gets a row.
2. The unknown gets `?` in the Value cell.
3. Implied zeros get rows: "from rest" $\to$ $v_0 = 0$, "stops" $\to$ $v = 0$. (Cards 1, 2, 308–320)
4. The Dimension column is your safety net — your final answer must match it.

---

## §0.4 The Trigger Trace

You have 430 flashcards. When you read a problem, you do not "look up" equations — you recognize trigger phrases and fire cards. A **Trigger Trace** is the record of every card that fired during a solution.

### The 4-Pass Extraction Algorithm

Execute these passes mechanically:

1. **Read once.** No writing. Gather the gist in 5 words max.
2. **Extract numbers.** Every number with its unit $\to$ Variable Table (§0.3).
3. **Fire cards.** Underline every trigger phrase. Write the card number and its instant equation. The cards that fire tell you the problem's domain and primary law.
4. **Identify the unknown.** Mark `?` in the table.

### Worked Extraction

**Problem:** *"A stone is dropped from a 20 m high bridge. How long does it take to hit the water? ($g = 10\;\mathrm{m/s^2}$)"*

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dropped" | 1 | $v_0 = 0$ |
| "free fall" / $g$ | 6 | $a_y = -g = -10$ |
| "How long?" / find $t$ | 7 | $t$ is the TARGET |

That's it. Three cards fired. Domain: kinematics. The equation selector (Cards 4, kinematic suite) plus the missing-variable rule picks $\Delta y = v_{0y}t + \frac{1}{2}a_y t^2$.

**The Trigger Trace is the bridge between your flashcard training and problem-solving.** Every worked example in this document begins with a Trigger Trace block showing exactly which cards fired and why.

---

# Part I: The I-SEE-R Protocol

Every problem in this document uses the same 5-step protocol. Memorize it.

| Step | Name | Action |
|------|------|--------|
| **I** | Identify | Run the 4-pass extraction (§0.4). Produce: coordinate system, variable table, trigger trace. |
| **S** | Simplify | What can you ignore? Frictionless? Massless? 1D motion? Cross out what doesn't matter. |
| **E** | Equation | Write the card equations from your trigger trace. No choosing — the cards already chose. |
| **E** | Execute | Substitute numbers. Solve algebraically. |
| **R** | Reflect | Three checks: (1) dimensions match? (2) one extreme case behaves correctly? (3) sign makes physical sense? |

The "E — Equation" step used to be the hardest part of physics. After the flashcards, it is the easiest. The trigger phrase tells you the card. The card tells you the equation. You write it.

---

# Part II: Mechanics — Three Worked Examples

## Example 1: Free Fall from a Bridge

**Problem.** A stone is dropped from a 20 m high bridge. How long does it take to hit the water? ($g = 10\;\mathrm{m/s^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dropped" | 1 | $v_0 = 0$ |
| $g = 10$, free fall context | 6 | $a_y = -g = -10\;\mathrm{m/s^2}$ |
| "How long?" | 7 | $t$ is the TARGET |

**Domain:** Kinematics (Cards 1–22). No force words → no FBD needed.

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

**E — Equation.** Cards 1, 4, 6 fire. From Card 4 (kinematic suite), I have $\Delta y = v_{0y}t + \frac{1}{2}a_y t^2$. I know $\Delta y = -20$, $v_{0y} = 0$, $a_y = -10$. I need $t$ and don't know $v_y$ — the missing-variable rule (Card 4) picks this equation automatically.

$$-20 = 0 \cdot t + \frac{1}{2}(-10)t^2$$

**E — Execute.** $-20 = -5t^2 \;\rightarrow\; t^2 = 4 \;\rightarrow\; t = 2.0\;\mathrm{s}$ (positive root only).

**R — Reflect.**
- *Dimensions:* $\Delta y = \frac{1}{2}a_y t^2$. $[L] = [L][T]^{-2}[T]^2 = [L]$. ✓
- *Extreme case:* Double $h \to 40\;\mathrm{m}$: $t^2 = 8$, $t = 2.83\;\mathrm{s}$. Time scales as $\sqrt{h}$ — correct for constant $a$ from rest. ✓
- *Independent check:* $v_y = -10(2) = -20$, $\bar{v}_y = -10$, $\Delta y = \bar{v}_y t = -20$. ✓

**Answer: $2.0\;\mathrm{s}$.**

---

## Example 2: Block on an Incline with Friction

**Problem.** A $5.0\;\mathrm{kg}$ block slides down a $30^\circ$ incline. $\mu_k = 0.25$. Find the acceleration. ($g = 10\;\mathrm{m/s^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "slides down" (motion, kinetic) | 29 | $f_k = \mu_k N$ |
| "incline" / $30^\circ$ | 38 | Resolve $mg$: $mg\sin\theta$ (along), $mg\cos\theta$ (perp) |
| "friction" / $\mu_k$ | 28, 29 | $f_k = \mu_k N$, opposes motion |
| "Find acceleration" | 23 | $\sum F = ma$ |

**Domain:** Forces (Cards 23–49). Multiple force words → FBD required.

### Coordinate System
```
+x: down the incline | +y: perpendicular away from surface
→ mg sinθ along +x, -fk along -x, +N along +y, -mg cosθ along -y
→ a_y = 0 (block stays on surface)
```

### Variable Table

| Variable | Symbol | Value | Unit | Dimension |
|----------|--------|-------|------|-----------|
| Mass | $m$ | 5.0 | kg | $[M]$ |
| Angle | $\theta$ | 30° | — | $[1]$ |
| Friction coeff | $\mu_k$ | 0.25 | — | $[1]$ |
| Gravity | $g$ | 10 | m/s² | $[L][T]^{-2}$ |
| Acceleration | $a$ | ? | m/s² | $[L][T]^{-2}$ |

### I-SEE-R

**S — Simplify.** Block is sliding → kinetic friction, $f_k = \mu_k N$ (Card 29). Three forces: gravity, normal, friction. $a_y = 0$ because the block stays on the surface.

**E — Equation.** Cards 23, 29, 38 fire. Write $\sum F = ma$ per axis:

$+x$: $mg\sin\theta - f_k = ma$ (Card 23 + 38)

$+y$: $N - mg\cos\theta = 0 \;\rightarrow\; N = mg\cos\theta$ (Card 27 + 38)

Substitute $f_k = \mu_k N = \mu_k mg\cos\theta$ (Card 29):

$$mg\sin\theta - \mu_k mg\cos\theta = ma$$

$m$ cancels — Card 39 tells us this happens for any frictionless incline, and it happens with friction too:

$$a = g(\sin\theta - \mu_k\cos\theta)$$

**E — Execute.** $a = 10(0.5 - 0.25 \times 0.866) = 10(0.5 - 0.2165) = 2.84\;\mathrm{m/s^2}$.

**R — Reflect.**
- *$\mu_k = 0$:* $a = 5.0 = g\sin\theta$ (Card 39). ✓
- *$\theta = 0$ (flat):* $a = -2.5$ (block decelerates — friction without a driving force). ✓
- *$\theta = 90^\circ$:* $a = 10 = g$ (vertical surface, no normal force, free fall). ✓

**Answer: $2.84\;\mathrm{m/s^2}$ down the incline.**

---

## Example 3: Perfectly Inelastic Collision

**Problem.** A $1500\;\mathrm{kg}$ car at $20\;\mathrm{m/s}$ east collides with a $2500\;\mathrm{kg}$ SUV at rest. They stick together. Find their velocity after.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "collides" | 72 | $\sum p_i = \sum p_f$ |
| "at rest" | 1 | $v_2 = 0$ |
| "stick together" | 73 | $m_1v_1 + m_2v_2 = (m_1+m_2)v_f$ |

**Domain:** Momentum (Cards 69–82). Single collision → one equation.

### Variable Table

| Variable | Symbol | Value | Unit | Dimension |
|----------|--------|-------|------|-----------|
| Car mass | $m_1$ | 1500 | kg | $[M]$ |
| SUV mass | $m_2$ | 2500 | kg | $[M]$ |
| Car initial $v$ | $v_1$ | 20 | m/s | $[L][T]^{-1}$ |
| SUV initial $v$ | $v_2$ | 0 | m/s | $[L][T]^{-1}$ |
| Final velocity | $v_f$ | ? | m/s | $[L][T]^{-1}$ |

### I-SEE-R

**S — Simplify.** Perfectly inelastic (Card 73). One unknown ($v_f$). KE is NOT conserved — momentum alone is enough.

**E — Execute.** Card 73 gives the equation directly:

$$v_f = \frac{m_1v_1 + m_2v_2}{m_1+m_2} = \frac{1500(20) + 0}{4000} = 7.5\;\mathrm{m/s}$$

**R — Reflect.**
- *Dimensional:* $[M][L][T]^{-1}/[M] = [L][T]^{-1}$. ✓
- *$m_2 = 0$:* $v_f = 20$ (car continues unchanged). ✓
- *Direction:* Positive = east. ✓

**Answer: $7.5\;\mathrm{m/s}$ east.**

---

# Part III: E&M — Two Worked Examples

## Example 4: Coulomb's Law

**Problem.** $q_1 = +3.0\;\mu\mathrm{C}$, $q_2 = -2.0\;\mu\mathrm{C}$, $0.10\;\mathrm{m}$ apart. Find the electrostatic force. ($k = 9.0\times10^9\;\mathrm{N\;m^2/C^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "charges" / "$\mu$C" | 154 | $F = k|q_1 q_2|/r^2$ |
| Opposite signs | 156 | Attractive force |

**Domain:** Electrostatics (Cards 154–170). Direct substitution.

### I-SEE-R

**S — Simplify.** Point charges, vacuum, 1D radial.

**E — Execute.** Card 154 fires:

$$F = 9.0\times10^9 \cdot \frac{(3.0\times10^{-6})(2.0\times10^{-6})}{(0.10)^2} = 9.0\times10^9 \cdot 6.0\times10^{-10} = 5.4\;\mathrm{N}$$

Direction: opposite signs → attractive (Card 156).

**R — Reflect.**
- *Dimensions:* $[k][Q]^2/[L]^2 = [M][L]^3[Q]^{-2}[T]^{-2}[Q]^2[L]^{-2} = [M][L][T]^{-2}$ = force. ✓
- *Double $r$:* $F/4 = 1.35\;\mathrm{N}$. Inverse square law. ✓

**Answer: $5.4\;\mathrm{N}$, attractive.**

---

## Example 5: Compound Circuit Reduction

**Problem.** $R_1 = 4.0\;\Omega$, $R_2 = 12.0\;\Omega$ in parallel, $R_3 = 6.0\;\Omega$ in series. $24\;\mathrm{V}$ battery. Find $I_2$ and $V_2$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$\Omega$" / "resistor" | 171 | $V = IR$ |
| "parallel" ($R_1$, $R_2$) | 173 | $1/R_{12} = 1/R_1 + 1/R_2$ |
| "series" ($R_{12}$, $R_3$) | 172 | $R_{\text{total}} = R_{12} + R_3$ |
| "$24\;\mathrm{V}$ battery" | 180 | $V_{\text{terminal}} = \mathcal{E}$ (ideal) |

**Domain:** Circuits (Cards 171–192). Reduction strategy.

### I-SEE-R

**S — Simplify.** Ideal wires, ideal battery, DC steady state. Pure resistive.

**E — Execute.** Reduce inward-outward (Card 175):

*Phase 1 — parallel pair (Card 173):*
$$\frac{1}{R_{12}} = \frac{1}{4.0} + \frac{1}{12.0} \;\rightarrow\; R_{12} = 3.0\;\Omega$$

*Phase 2 — series (Card 172):*
$$R_{\text{total}} = 3.0 + 6.0 = 9.0\;\Omega$$

*Phase 3 — total current (Card 171):*
$$I_{\text{total}} = \frac{24}{9.0} = 2.667\;\mathrm{A}$$

*Phase 4 — distribute backward:*
$V_3 = I_{\text{total}}R_3 = 16\;\mathrm{V}$, $V_{12} = 24 - 16 = 8\;\mathrm{V}$.
Parallel → same voltage across both branches: $V_1 = V_2 = 8\;\mathrm{V}$ (Card 173).

$$I_2 = \frac{V_2}{R_2} = \frac{8}{12} = 0.667\;\mathrm{A}$$

**R — Reflect.**
- *KCL check:* $I_1 = 8/4 = 2$, $I_1 + I_2 = 2.667 = I_{\text{total}}$ (Card 176). ✓
- *Power check:* $P_{\text{total}} = 64\;\mathrm{W}$, $P_1+P_2+P_3 = 64\;\mathrm{W}$ (Card 178). ✓

**Answer: $I_2 = 0.667\;\mathrm{A}$, $V_2 = 8\;\mathrm{V}$.**

---

# Part IV: Thermodynamics & Waves

## Example 6: The Combined Gas Law

**Problem.** Sealed container: $P_1 = 2.0\;\mathrm{atm}$, $V_1 = 5.0\;\mathrm{L}$, $T_1 = 300\;\mathrm{K}$. Compressed to $V_2 = 2.0\;\mathrm{L}$, heated to $T_2 = 450\;\mathrm{K}$. Find $P_2$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "gas" / "pressure" / "volume" / "temperature" | 217 | $PV = nRT$ |
| "sealed" | 220 | $P_1V_1/T_1 = P_2V_2/T_2$ ($n$ constant) |

**Domain:** Thermodynamics (Cards 217–246). Combined gas law — direct.

### I-SEE-R

**S — Simplify.** Ideal gas, sealed container → $n$ constant (Card 220). $R$ cancels.

**E — Execute.** Card 220 fires:

$$P_2 = P_1 \cdot \frac{V_1}{V_2} \cdot \frac{T_2}{T_1} = 2.0 \cdot \frac{5.0}{2.0} \cdot \frac{450}{300} = 2.0 \cdot 2.5 \cdot 1.5 = 7.5\;\mathrm{atm}$$

**R — Reflect.**
- *Isothermal ($T_2 = T_1$):* $P_2 = 5.0$ (Boyle's Law, Card 221). ✓
- *Isochoric ($V_2 = V_1$):* $P_2 = 3.0$ (Gay-Lussac, Card 223). ✓
- Both factors multiply: compression ×2.5, heating ×1.5 → ×3.75. ✓

**Answer: $7.5\;\mathrm{atm}$.**

---

## Example 7: Standing Waves on a Guitar String

**Problem.** String: $L = 0.65\;\mathrm{m}$, $\mu = 4.0\times10^{-3}\;\mathrm{kg/m}$, $F_T = 100\;\mathrm{N}$. Find $f_1$, $f_3$, $\lambda_3$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "string" / "tension" | 136 | $v = \sqrt{F_T/\mu}$ |
| "fundamental frequency" | 142 | $f_1 = v/(2L)$ |
| "third harmonic" | 143 | $f_3 = 3f_1$, $\lambda_3 = 2L/3$ |
| "fixed at both ends" | 139 | $f_n = nv/(2L)$ |

**Domain:** Waves (Cards 132–153). Two-step: find $v$, then frequencies.

### I-SEE-R

**S — Simplify.** Ideal string, both ends fixed → nodes at $x=0$ and $x=L$ (Card 139).

**E — Execute.**

$$v = \sqrt{\frac{100}{4.0\times10^{-3}}} = \sqrt{25{,}000} = 158.1\;\mathrm{m/s}$$

$$f_1 = \frac{v}{2L} = \frac{158.1}{1.30} = 121.6\;\mathrm{Hz}$$

$$f_3 = 3f_1 = 364.8\;\mathrm{Hz},\quad \lambda_3 = \frac{2L}{3} = 0.433\;\mathrm{m}$$

**R — Reflect.**
- *Dimensions:* $\sqrt{[M][L][T]^{-2}/[M][L]^{-1}} = [L][T]^{-1}$ = speed. ✓
- *Physical check:* Tighter string → higher $v$ → higher $f$. Heavier string → lower $v$ → lower $f$. Matches instrument behavior. ✓

**Answer: $f_1 = 122\;\mathrm{Hz}$, $f_3 = 365\;\mathrm{Hz}$, $\lambda_3 = 0.433\;\mathrm{m}$.**

---

# Part V: The Bridge Protocol — When Domains Collide

The seven examples above are single-domain problems: 1–4 cards fire, one domain's laws apply, the answer comes directly. But SAT Physics and Olympiad problems chain domains. A bullet embeds in a block (momentum), then the block compresses a spring (energy). A gas expands (thermo), pushing a piston (mechanics), which compresses a spring (SHM).

The vocabulary deck has 55 cards dedicated to these chains: **Cards 321–375 (Cross-Domain Bridges).** They describe the architecture of synthesis problems. Your job is to recognize which bridge card matches your problem, then execute the chain.

### The Bridge Recognition Algorithm

When a problem describes two or more distinct EVENTS separated in time, run this decision tree (from Card 376+ / Section 17.11):

| Step | Question | If YES |
|------|----------|--------|
| 1 | Two+ distinct events? | Go to Step 2. (If no: single-domain, straight I-SEE-R.) |
| 2 | First event: COLLISION, EXPLOSION, or RECOIL? | Bridge = MOMENTUM → output is $v_f$. See Cards 321–327. |
| 3 | First event: POTENTIAL DIFFERENCE or E-FIELD? | Bridge = ENERGY ($qV = \frac{1}{2}mv^2$) → output is $v$. See Cards 338–344. |
| 4 | First event: falling, sliding, spring (height/spring)? | Bridge = ENERGY CONSERVATION → output is $v$ or $x$. See Cards 323, 328–337. |
| 5 | First event: GAS changing state ($P$, $V$, $T$)? | Bridge = THERMO → output is $P$, $V$, $T$, or $W$. See Cards 350–354. |
| 6 | First event: ACCELERATION over known distance/time? | Bridge = KINEMATICS → output is $v$ or $t$. |

**After identifying the first domain and its output:** The bridge variable is the input to the second domain. Write the bridge card's equation for Domain B. Solve.

### Worked Bridge Example: Bullet + Spring

**Problem.** A $0.030\;\mathrm{kg}$ bullet at $500\;\mathrm{m/s}$ embeds in a $1.5\;\mathrm{kg}$ block on a frictionless surface. The block compresses a spring ($k = 2000\;\mathrm{N/m}$). Find max compression.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "bullet embeds" | 73 | $m_b v_b = (M+m)v_f$ (perfectly inelastic) |
| "frictionless surface" | 31 | $f = 0$ |
| "compresses a spring" | 42, 58 | $F_s = -kx$, $U_s = \frac{1}{2}kx^2$ |
| **Bridge card** | **321** | Bullet embeds in block → compresses spring |
| Bridge: $v_f$ | — | Output of momentum (Card 73) → input to energy (Card 58) |

### I-SEE-R

**S — Simplify.** Two events: (1) collision (momentum, Card 72), (2) spring compression (energy, Card 60). Frictionless → mechanical energy conserved after collision. The collision is perfectly inelastic → KE is NOT conserved during collision, but momentum is.

**E — Equation.** Card 321 gives the architecture:

*Domain A (Momentum):* $v_f = \frac{m_b v_b}{M+m} = \frac{0.030(500)}{1.53} = 9.80\;\mathrm{m/s}$

*Domain B (Energy):* $\frac{1}{2}(M+m)v_f^2 = \frac{1}{2}kx_{\max}^2$

$$x_{\max} = v_f\sqrt{\frac{M+m}{k}} = 9.80\sqrt{\frac{1.53}{2000}} = 0.271\;\mathrm{m}$$

**R — Reflect.**
- *Dimensions:* $[L][T]^{-1}\sqrt{[M]/[M][T]^{-2}} = [L][T]^{-1}\cdot[T] = [L]$. ✓
- *Note:* Only the KE of the combined block+bullet transfers to the spring. The bullet's initial KE ($\frac{1}{2}(0.03)(500)^2 = 3750\;\mathrm{J}$) is mostly converted to heat during embedding — only $\frac{1}{2}(1.53)(9.80)^2 = 73.5\;\mathrm{J}$ goes to the spring.

**Answer: $0.271\;\mathrm{m}$ ($27.1\;\mathrm{cm}$).**

---

# Part VI: The Variable-Group Method — When Numbers Belong to Different Parts of the Motion

Some problems resist direct mapping. The numbers describe the *middle* of the trajectory, but the question asks about the *beginning* or *end*. The numbers and the target live in different "contexts" — different segments of the motion with different $\Delta t$, different $\Delta x$, but shared boundary values.

This is not a physics problem. It is a bookkeeping problem. The Variable-Group Method solves it mechanically.

### The Method (6 Phases)

| Phase | Action | Mechanical Question |
|-------|--------|---------------------|
| 0 | **Recognize** grouping is needed | Can I write a single equation containing BOTH the givens AND the target? If no → group. |
| 1 | **Partition** into contexts | "Which numbers describe the same thing?" Use the "About What" test. |
| 2 | **Build mini tables** | Each context gets its own variable table. Same symbol = same physical quantity. |
| 3 | **Find the richest context** | Count KNOWN cells. The context with the most knowns is solved first. |
| 4 | **Solve the richest context** | Use the missing-variable rule (Card 4 kinematic selector). |
| 5 | **Transfer the bridge** | Does the variable just found appear in another context's table? Copy it there. |
| 6 | **Repeat until target is KNOWN** | Cycle: richest → solve → bridge → recount → richest → … |

### Worked Example: The Window Problem

**Problem.** A ball is thrown straight up. It passes a $2.00\;\mathrm{m}$ high window whose bottom is $7.50\;\mathrm{m}$ above the ground. The ball takes $1.30\;\mathrm{s}$ to travel from bottom to top of the window — and it is still going up. What was the ball's initial velocity at ground level? ($g = 10.0\;\mathrm{m/s^2}$)

### Trigger Trace

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "thrown straight up" | 16 | $a_y = -g$, $v_{0y} > 0$ |
| "passes a point" / "crosses" | 19 | Variable-group context — middle of trajectory |
| "still going up" (implicit) | 13 | $v_y > 0$ at window top, not yet at max height |
| $g = 10.0$ | 6 | $a_y = -10.0$ |

### Phase 0 — Recognize

Can I write one equation connecting $2.00\;\mathrm{m}$, $1.30\;\mathrm{s}$, $7.50\;\mathrm{m}$ to the initial velocity at ground? No — the window numbers describe a middle segment, the ground launch is the beginning. Grouping is needed.

### Phase 1 — Partition

| Context | "About what?" | Variables |
|---------|--------------|-----------|
| **Context W (window)** | Motion from window bottom to window top | $\Delta y_W = 2.00$, $t_W = 1.30$, $a_y = -10.0$, $v_{\text{bottom}}$, $v_{\text{top}}$ |
| **Context G (ground)** | Motion from ground to window bottom | $\Delta y_G = 7.50$, $a_y = -10.0$, $v_{0y}$ (TARGET), $v_{\text{bottom}}$ |

$v_{\text{bottom}}$ appears in both tables — it is the **bridge variable.**

### Phase 2 — Mini Tables

**Context W:** Known: $a_y$, $t_W$, $\Delta y_W$. Unknown: $v_{\text{bottom}}$, $v_{\text{top}}$.

**Context G:** Known: $a_y$, $\Delta y_G$. Unknown: $v_{0y}$ (TARGET), $v_{\text{bottom}}$, $t_G$.

### Phase 3 — Richest Context

Context W: 3 knowns. Context G: 2 knowns. → Solve Context W first.

### Phase 4 — Solve Context W

Missing-variable rule (Card 4): I need any variable; I don't need $v_{\text{top}}$. Use $\Delta y = v_0 t + \frac{1}{2}a t^2$:

$$2.00 = v_{\text{bottom}}(1.30) + \frac{1}{2}(-10.0)(1.30)^2$$
$$2.00 = 1.30\,v_{\text{bottom}} - 8.45$$
$$v_{\text{bottom}} = 8.04\;\mathrm{m/s}$$

### Phase 5 — Transfer

$v_{\text{bottom}} = 8.04$ is now KNOWN in Context G. Context G: 3 knowns ($a_y$, $\Delta y_G$, $v_{\text{bottom}}$).

### Phase 4 Again — Solve Context G

I need $v_{0y}$. I don't need $t_G$. Use $v^2 = v_0^2 + 2a\Delta x$ (Card 4, missing $t$ row):

$$(8.04)^2 = v_{0y}^2 + 2(-10.0)(7.50)$$
$$64.6 = v_{0y}^2 - 150$$
$$v_{0y} = 14.7\;\mathrm{m/s}$$

### Phase 6 — Target Reached

TARGET $v_{0y} = 14.7\;\mathrm{m/s}$ is KNOWN. Stop.

**R — Reflect.**
- *Plausibility:* $v_{0y} = 14.7$ at ground, $v_{\text{bottom}} = 8.04$ at $7.50\;\mathrm{m}$. Gravity has decelerated the ball — consistent.
- *Max height:* $h_{\max} = v_{0y}^2/(2g) = 10.8\;\mathrm{m}$. Window top is at $9.50\;\mathrm{m}$, so the ball is indeed rising — consistent with "still going up."

**Answer: $14.7\;\mathrm{m/s}$ upward.**

---

# Part VII: The Problem-Difficulty Ladder

Problems are not hard because you lack intuition. They are hard because they fire more cards. This is a countable property:

| Level | Cards Fired | Structure | Strategy |
|-------|------------|-----------|----------|
| **1. Direct** | 1–3 | Single domain, all variables given | Trigger Trace → I-SEE-R. The card IS the equation. |
| **2. Two-Step** | 2–5 | One bridge variable | Chain: Domain A's output = Domain B's input. Find the bridge card (321–375). |
| **3. Multi-Context** | 3–8 | Shared constraints across segments | Variable-Group Method. Partition, count knowns, bridge, repeat. |
| **4. Synthesis** | 5–15 | 3+ domains, must choose which laws apply | Elimination protocol: fire ALL cards triggered by the problem's words. Cross out cards whose equations contain variables not given AND not solvable from other cards. What remains IS the solution path. |

Your practice problem files are organized by these levels:
- `physics-practice-problems-beginner.md` — Level 1–2, 1–3 cards
- `physics-practice-problems-intermediate.md` — Level 2–3, 2–5 cards
- `physics-practice-problems-advanced.md` — Level 3–4, 4–10 cards

---

# Part VIII: Recovery Protocols — When You Are Stuck

### Protocol A: Implicit Zero Scan (Cards 308–320)

Count your knowns. Count your unknowns. If unknowns > equations, re-read the problem for implicit zeros. "From rest" → $v_0 = 0$ (Card 308). "Stops" → $v = 0$ (Card 309). "Maximum height" → $v_y = 0$ (Card 310). "Frictionless" → $f = 0$ (Card 311). "Just loses contact" → $N = 0$ (Card 316).

### Protocol B: Dimensional Back-Solve (Cards 394–430)

Write the dimension of the target. Write the dimensions of every given quantity. Is there only ONE way to combine the givens to produce the target's dimension? That combination IS the formula, up to a dimensionless constant. Card 430: "Do the dimensions of my answer match the dimension of what I'm solving for?"

### Protocol C: Extreme-Case Test

Set one variable to zero or infinity. Does the result make physical sense? $m_2 = 0$ in a collision → the first object continues unchanged. $\mu_k = 0$ on an incline → $a = g\sin\theta$. If a formula fails an extreme case, it is wrong.

### Protocol D: One-Sentence Summary

If you have stared for 5 minutes without writing, stop. Describe the problem in plain language without any physics words. "Something starts from rest, moves a distance while speeding up, I need its final speed." The physics words were the obstacle.

---

# Part IX: How to Learn New Physics — The Meta-Method

When you encounter a textbook chapter on a topic not yet in your flashcard deck, do NOT read it front to back. Execute four passes:

**Pass 1 — Harvest equations.** Flip through. Copy every boxed, bold, or displayed equation into a list. Do not read the text.

**Pass 2 — Identify new variables.** For each symbol, write its name, unit, and dimension (derive from the equation using §0.2).

**Pass 3 — Classify.** Every equation answers one of: Definition, Force law, Motion law, or Conservation.

**Pass 4 — Create flashcards.** Each new physics word → one new flashcard in your personal deck, following the format of Cards 1–430. Now a future problem that says the new word will mechanically trigger the new equation.

---

## Quick-Reference Card

### The I-SEE-R Protocol
| Step | Action |
|------|--------|
| **I** | 4-pass extraction: read, extract numbers, fire cards, identify unknown |
| **S** | Cross out what doesn't matter (frictionless? massless? 1D?) |
| **E** | Write card equations. No choosing — the cards chose. |
| **E** | Substitute numbers. Solve algebraically. |
| **R** | Dimension check + one extreme case + sign sanity check |

### The Trigger Trace Format
```
| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dropped"     | 1    | v₀ = 0           |
| "free fall"   | 6    | a = -g           |
| "How long?"   | 7    | t is the TARGET  |
```

### The Bridge Decision Tree (Cards 321–375)
```
Two+ events?
├─ COLLISION/EXPLOSION/RECOIL first? → Momentum → v_f → Energy/Kinematics (321–327)
├─ VOLTAGE/E-FIELD first?            → ½mv² = qV → B-field/F = ma (338–344)
├─ FALLING/SLIDING/SPRING first?     → Energy → Circular/Rolling/Collision (328–337)
├─ GAS (P,V,T) first?                → Thermo → Mechanics/SHM (350–354)
└─ ACCELERATION first?               → Kinematics → Forces/Energy
```

### Equation Selection (Card 4)
```
Need v, missing t        → v² = v₀² + 2aΔx
Need v, missing Δx       → v = v₀ + at
Need Δx, missing v       → Δx = v₀t + ½at²
Need Δx, missing a       → Δx = ½(v₀+v)t
Need t, missing v        → Δx = v₀t + ½at²
Need t, missing Δx       → v = v₀ + at
```

---

> **The exam is won before you enter the room.** Your flashcards have trained one reflex: see a phrase → write the equation. This document has trained a second: chain those equations mechanically, verify with dimensions, and never guess.
>
> Difficulty = number of cards fired. A Level-1 problem fires 3 cards. A Level-4 problem fires 10. The method is identical. Count the cards. Trace the triggers. Execute.
>
> **If you can calculate it, you have understood it.**
