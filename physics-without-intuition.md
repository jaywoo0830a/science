# Physics Without Intuition

## A Mechanical System for Solving Physics Problems

---

## Prologue: Who This Is For

You read a physics problem. The words make sense, but they form no picture. You know formulas exist, but you cannot tell which one fits. You get an answer, but you cannot tell whether it is right.

This document is written for you.

It does not ask you to visualize. It does not ask you to "get a feel for it." It gives you a mechanical procedure: **extract the numbers, look up the words, pick the equation, substitute, verify.** Follow the steps. The answer comes out.

We begin with tools — coordinate systems, dimensional analysis, variable tables, and a vocabulary-to-law mapping. Then we solve seven problems that span mechanics, electricity, thermodynamics, and waves. Every problem uses the identical procedure.

---

# Part 0: The Pre-Method

You cannot solve a physics problem until you can answer four questions:

1. Which way is positive? (coordinate system)
2. What are the units of every quantity? (dimensional analysis)
3. What numbers do I have, and what am I looking for? (variable table)
4. Which equation connects them? (vocabulary-to-law mapping)

This part answers each question mechanically. No physics yet — just tools.

---

## §0.1 The Coordinate System

A coordinate system is a contract with yourself. It says: "I will interpret positive and negative signs according to these four rules." The contract has four blanks:

```
+x direction: _______________  (direction of primary motion — Rule 1)
+y direction: _______________  (upward, or perpendicular away from incline — Rule 2)
Origin:       _______________  (starting position of the object — Rule 3)
t = 0 at:     _______________  (the instant the action begins — Rule 4)
```

**Rule 1 (+x):** Set $+x$ to the direction the object primarily moves. Car drives east $\to$ $+x$ = east. Block slides down incline $\to$ $+x$ = down the incline. Never overthink this.

**Rule 2 (+y):** Set $+y$ upward. On an incline, set $+y$ perpendicular to the surface, pointing away from it. This makes the normal force purely $+y$ — it decouples the equations.

**Rule 3 (origin):** Set the origin at the object's starting position. If the problem gives a reference (like "the ground"), use that instead.

**Rule 4 ($t=0$):** Set $t=0$ at the instant the action begins — the throw, the release, the collision.

**The golden rule:** Once you fill the blanks, **never change the coordinate system mid-problem.** If a velocity comes out negative, it means "opposite to the + direction," not "wrong."

---

## §0.2 Dimensional Analysis

Dimensional analysis is the only verification tool that works for every physics problem. It requires zero intuition — only that you know the dimension of every quantity.

Every mechanical quantity's dimension is built from three building blocks:

| Building block | Symbol | Example quantities |
|----------------|--------|--------------------|
| Mass | $[M]$ | $m$ (mass), density |
| Length | $[L]$ | $x$, $\Delta x$, $h$, $\lambda$ |
| Time | $[T]$ | $t$, $T$ (period) |

Three more appear in E&M and thermodynamics:

| Building block | Symbol | Example quantities |
|----------------|--------|--------------------|
| Temperature | $[\Theta]$ | $T$ (kelvin) |
| Electric charge | $[Q]$ | $q$, $Q$ |
| Amount of substance | $[N]$ | $n$ (moles) |

**To derive any quantity's dimension:** Write its definition equation, replace each symbol with its dimension, simplify algebraically.

| Quantity | Definition | Dimension |
|----------|-----------|-----------|
| Speed, $v$ | $\Delta x / \Delta t$ | $[L][T]^{-1}$ |
| Acceleration, $a$ | $\Delta v / \Delta t$ | $[L][T]^{-2}$ |
| Force, $F$ | $ma$ | $[M][L][T]^{-2}$ |
| Energy, work, $E$, $K$, $U$ | $Fd$ or $\frac{1}{2}mv^2$ | $[M][L]^2[T]^{-2}$ |
| Momentum, $p$ | $mv$ | $[M][L][T]^{-1}$ |
| Pressure, $P$ | $F/A$ | $[M][L]^{-1}[T]^{-2}$ |
| Frequency, $f$ | $1/T$ | $[T]^{-1}$ |
| Spring constant, $k$ | $F/x$ | $[M][T]^{-2}$ |
| Electric charge, $q$ | base | $[Q]$ |
| Electric field, $E$ | $F/q$ | $[M][L][Q]^{-1}[T]^{-2}$ |
| Voltage, $V$ | $U/q$ | $[M][L]^2[Q]^{-1}[T]^{-2}$ |
| Magnetic field, $B$ | $F/(qv)$ | $[M][Q]^{-1}[T]^{-1}$ |
| Resistance, $R$ | $V/I$ | $[M][L]^2[Q]^{-2}[T]^{-1}$ |

**To verify an equation:** Compute dimensions of the left side. Compute dimensions of the right side. If they differ, the equation is certainly wrong. If they match, the equation passes (it may still have a missing factor of 2, but the units are correct).

---

## §0.3 The Variable Table

Before you think about any problem, draw this:

```
| Variable | Symbol | Value | Unit | Dimension | Source in problem |
|----------|--------|-------|------|-----------|-------------------|
| ...      | ...    | ...   | ...  | ...       | ...               |
```

Rules:
1. Every number from the problem gets a row.
2. The unknown (what the question asks for) gets `?` in its Value cell.
3. Every row gets a Dimension — look it up in §0.2.
4. Implied zeros get rows too: "from rest" $\to$ $v_0 = 0$, "stops" $\to$ $v = 0$.
5. The Dimension column is your safety net. Your final answer must match the dimension in this column.

---

## §0.4 The Vocabulary-to-Law Mapping

How do you know which equation to use? You match words from the problem to laws in this table. No intuition. Just pattern recognition.

### The Keyword → Law Table

**A. Kinematics** — words describing motion without mentioning forces.

| Keywords | Primary law | Equation |
|----------|------------|----------|
| "accelerates," "from rest," "falls," "dropped," "thrown" | Kinematic equations ($a$ constant) | $v = v_0 + at$, $\Delta x = v_0t + \frac{1}{2}at^2$, $v^2 = v_0^2 + 2a\Delta x$ |
| "constant velocity," "steady speed" | $a = 0$ | $\Delta x = vt$ |
| "maximum height," "peak" | $v_y = 0$ at that instant | (vertex condition) |

**B. Forces & Newton's Laws** — any mention of a specific force type.

| Keywords | Law triggered | Equation |
|----------|--------------|----------|
| "force," "push," "pull" | Newton's 2nd Law | $\sum F = ma$ |
| "friction," "rough," $\mu$ | Friction force | $f_k = \mu_k N$, $f_s \le \mu_s N$ |
| "tension," "rope," "string" | Tension $T$ (along rope) | Include $T$ in FBD |
| "spring," "$k$," "stretched" | Hooke's Law | $F_s = -kx$ |
| "incline," "ramp," "angle $\theta$" | Resolve gravity | $mg\sin\theta$ (along), $mg\cos\theta$ (perpendicular) |
| "frictionless," "smooth" | No friction | Omit $f$ |

**C. Energy** — when the problem mentions two positions and asks for speed, but gives no time.

| Keywords | Law triggered | Equation |
|----------|--------------|----------|
| "height," "$h$," "above ground" | Gravitational PE | $U_g = mgh$ |
| "speed" (with height or spring) | Energy conservation | $E_i = E_f$ |
| "work," $W$ | Work definition | $W = Fd\cos\theta$ |

**D. Momentum & Collisions** — objects interacting over a short time.

| Keywords | Law triggered | Equation |
|----------|--------------|----------|
| "collision," "collides," "hit" | Momentum conservation | $\sum p_i = \sum p_f$ |
| "stick together," "embedded" | Perfectly inelastic | $m_1v_1 + m_2v_2 = (m_1+m_2)v_f$ |
| "elastic," "bounces" | Elastic (KE conserved too) | $\sum p_i = \sum p_f$ and $\sum K_i = \sum K_f$ |
| "bullet," "recoil" | Momentum conservation | $\sum p_i = \sum p_f$ |

**E. Circular Motion** — anything moving in a curve.

| Keywords | Law triggered | Equation |
|----------|--------------|----------|
| "circle," "curve," "orbit," "turn" | Centripetal acceleration | $a_c = v^2/R$, then $\sum F = ma_c$ |

**F. Electricity** — charge, voltage, circuits.

| Keywords | Law triggered | Equation |
|----------|--------------|----------|
| "charge," "$q$," "$\mu$C" | Coulomb's Law | $F = k\lvert q_1 q_2\rvert/r^2$ |
| "electric field," $E$ | Electric force | $\vec{F} = q\vec{E}$ |
| "voltage," "battery," $V$ | Ohm's Law | $V = IR$ |
| "circuit," "series," "parallel" | Reduction rules | $R_s = R_1+R_2$, $1/R_p = 1/R_1+1/R_2$ |

**G. Magnetism** — magnetic fields with moving charges.

| Keywords | Law triggered | Equation |
|----------|--------------|----------|
| "magnetic field," $B$ | Lorentz force | $F = qvB\sin\theta$ |
| "current-carrying wire" (with $B$) | Magnetic force on wire | $F = ILB\sin\theta$ |

**H. Thermodynamics** — temperature, pressure, heat.

| Keywords | Law triggered | Equation |
|----------|--------------|----------|
| "temperature," "pressure," "volume" (gas) | Ideal Gas Law | $PV = nRT$ |
| "sealed" (with gas) | $n$ constant | $P_1V_1/T_1 = P_2V_2/T_2$ |
| "heat engine," "efficiency" | Carnot efficiency | $\eta = 1 - T_C/T_H$ |

### The 4-Pass Extraction Algorithm

Do NOT try to understand the problem. Execute these passes mechanically:

1. **Read once.** No writing. Gather the gist in 5 words max.
2. **Extract numbers.** Every number with its unit $\to$ Variable Table.
3. **Underline physics words.** Look up each in the table above. The category that appears most is your **primary law**.
4. **Identify the unknown.** Underline the question sentence $\to$ mark `?` in the table.

### Worked Extraction Example

**Problem:** *"A stone is dropped from a 20 m high bridge. How long does it take to hit the water? ($g = 10\;\mathrm{m/s^2}$)"*

**Pass 1:** Stone, dropped, falls, height, time, gravity.

**Pass 2 — extract numbers:**

| Word | Number | Unit | $\to$ Variable |
|------|--------|------|----------------|
| "20 m high" | 20 | m | $y_0 = 20$ |
| $g = 10$ | 10 | $\mathrm{m/s^2}$ | $g = 10$ |

**Pass 3 — physics words:**

| Word | Category | Law |
|------|----------|-----|
| "dropped" | A: free-fall kinematics | $a = -g$ |
| "high" / "height" | C: gravitational context | $y$-axis |

$\to$ **Primary law: Kinematic equations with $a = -g$.**

**Pass 4 — unknown:** "How long?" $\to$ $t = ?$

Now proceed to I-SEE-R. The extraction is mechanical. You do not need to picture the stone falling.

---

# Part I: Mechanics

Three examples that cover kinematics, dynamics, and momentum. Every example follows the identical procedure: Scan words $\to$ Declare coordinates $\to$ Build variable table $\to$ I-SEE-R solve. But more than that — each example shows you *how to think* through a physics problem when you have no intuition to guide you.

---

## Example 1: Free Fall from a Bridge

**Problem.** A stone is dropped from a 20 m high bridge. How long does it take to hit the water? ($g = 10\;\mathrm{m/s^2}$)

---

When I first read this problem, I notice it is short. Only two numbers appear: 20 and 10. The question is about time. There is no mention of forces — no push, no pull, no friction. That already tells me something important: this is pure kinematics. I will not need to draw a free-body diagram or sum forces. The stone simply falls.

### Step 1 — Scan for Physics Words (§0.4)

I go through the problem sentence by sentence, underlining anything that appears in my vocabulary table.

The word **"dropped"** catches my eye first. In §0.4 Category A, "dropped" means the initial velocity is zero. The stone is not thrown — it is released. So $v_0 = 0$. This is a crucial piece of information because it eliminates one unknown from the kinematic equation set.

Next I see **"high"** and **"height."** These words belong to the gravitational context — they tell me the motion is vertical. I will need a $y$-axis and the acceleration will be $g$, pointing downward.

Then I see **$g = 10\;\mathrm{m/s^2}$**. The symbol $g$ confirms free-fall kinematics. The acceleration is constant, equal to $g$, and its direction is toward the ground.

Finally, **"How long"** tells me the unknown is time $t$.

I scan for force words — friction, tension, push, normal — and find none. This confirms my first impression: kinematics only. The primary law is the set of four kinematic equations for constant acceleration, with $a = -g$.

| Word | Category | What it tells us |
|------|----------|------------------|
| "dropped" | A: $v_0 = 0$ | Initial velocity is zero |
| "high" / "height" | C: gravitational context | Vertical motion, $y$-axis |
| $g$ | A: free-fall kinematics | $a = -g$ |
| "How long" | — | Unknown is $t$ |

### Step 2 — Coordinate System (§0.1)

Now I need to make a decision that will determine the sign of every number in this problem: which way is positive?

I think about what happens. The stone falls *down*. If I set $+y$ upward, then the stone's displacement will be negative (it moves opposite to $+y$). That feels slightly awkward, but it is the standard convention — and more importantly, it is the convention that §0.1 Rule 2 mandates: **$+y$ is always upward.** I follow the rule.

- **$+y$ = upward.** This means gravity, which pulls downward, gets a negative sign: $a_y = -g = -10\;\mathrm{m/s^2}$.
- **Origin:** The problem mentions the water as the final destination. I set $y = 0$ at the water surface. The bridge is then at $y_0 = +20\;\mathrm{m}$.
- **$t = 0$:** The instant the stone is released. At that moment, $v_{0y} = 0$ (it is dropped, not thrown).

```
+y direction: upward
Origin:       water surface, y = 0
t = 0 at:     instant stone is released

Consequences: g = -10 m/s², v0y = 0, y0 = +20 m, y = 0 (water)
```

I have locked in the signs. I will not change them, no matter what the algebra produces.

### Step 3 — Variable Table (§0.3 + §0.2)

I extract every number from the problem and place it in the table, along with its dimension from §0.2.

"20 m high bridge" — the initial height. This is a position: $y_0 = 20\;\mathrm{m}$. Dimension: $[L]$.

The water surface is at $y = 0$ because I placed the origin there. Dimension: $[L]$.

"Dropped" means $v_{0y} = 0$. Speed has dimensions $[L][T]^{-1}$.

Gravity provides the acceleration: $a_y = -10\;\mathrm{m/s^2}$. The negative sign comes from my coordinate choice. Acceleration dimensions: $[L][T]^{-2}$.

The question asks for time: $t = ?$. Dimension: $[T]$.

| Variable | Symbol | Value | Unit | Dimension | Source |
|----------|--------|-------|------|-----------|--------|
| Initial position | $y_0$ | 20 | m | $[L]$ | "20 m high bridge" |
| Final position | $y$ | 0 | m | $[L]$ | water surface = origin |
| Initial velocity | $v_{0y}$ | 0 | m/s | $[L][T]^{-1}$ | "dropped" $\to$ from rest |
| Acceleration | $a_y$ | $-10$ | $\mathrm{m/s^2}$ | $[L][T]^{-2}$ | $g = 10$, opposite $+y$ |
| Time | $t$ | ? | s | $[T]$ | "How long?" |

I notice that the displacement is not directly in the table, but I can compute it: $\Delta y = y - y_0 = 0 - 20 = -20\;\mathrm{m}$. The negative sign tells me the stone moves 20 meters in the $-y$ direction — downward. This matches physical reality. Already, my coordinate system is proving consistent.

### Step 4 — I-SEE-R

**S — Simplify.** I ask: can I ignore anything? The acceleration is a single constant number ($-10$). There is no air resistance mentioned. The stone is a point mass — I do not need to consider its shape or rotation. The motion is purely vertical, so this is a 1D problem. I do not need an FBD because the only force (gravity) is already encoded in $a_y = -g$. Simplification complete.

**E — Equation.** I look at my variable table and count what I know. I have $y_0$, $y$, $v_{0y}$, and $a_y$. That is four knowns. I want $t$. I do *not* know the final velocity $v_y$, and the problem does not ask for it.

Among the four kinematic equations, one of them omits $v_y$ entirely: $\Delta y = v_{0y} t + \frac{1}{2} a_y t^2$. This is exactly the equation I need. I do not have to think about which equation to pick — the missing-variable rule from the Quick-Reference Card (⑤) makes the choice mechanical: I need $t$, I am missing $v_y$, so I use $\Delta y = v_{0y}t + \frac{1}{2}a_y t^2$.

I substitute the numbers from my table:

$$-20 = 0 \cdot t + \frac{1}{2}(-10)t^2$$

The term $0 \cdot t$ vanishes immediately — the stone had no initial velocity, so the entire first term disappears. The equation simplifies to:

$$-20 = -5t^2$$

**E — Execute.** I divide both sides by $-5$: $t^2 = 4$. Taking the square root gives $t = \pm 2.0$. Two mathematical solutions appear.

The negative root, $t = -2.0\;\mathrm{s}$, would mean the stone hit the water 2 seconds *before* it was dropped. That is physically impossible — time cannot run backward in this problem. I discard it.

The positive root remains: $t = 2.0\;\mathrm{s}$. The stone takes 2 seconds to fall.

**R — Reflect.** Before I accept this answer, I verify it three ways.

*First, dimensions.* The symbolic equation is $\Delta y = \frac{1}{2}a_y t^2$. Left side: $[L]$. Right side: $[L][T]^{-2} \cdot [T]^2 = [L]$. Match. If the dimensions had not matched, I would know the equation was wrong regardless of the numbers.

*Second, a limiting case.* What if the bridge were twice as high, $y_0 = 40\;\mathrm{m}$? Then $\Delta y = -40$, and $t^2 = 8$, so $t = 2.83\;\mathrm{s}$. The time did not double when the height doubled — it increased by a factor of $\sqrt{2}$. This is correct: under constant acceleration from rest, distance scales as $t^2$, so time scales as $\sqrt{h}$. This non-intuitive result is a signature of constant acceleration, and my formula produces it automatically.

*Third, an independent method.* I can compute the final velocity and use the average. $v_y = v_{0y} + a_y t = 0 + (-10)(2.0) = -20\;\mathrm{m/s}$. The average velocity during the fall is $\bar{v}_y = (0 + (-20))/2 = -10\;\mathrm{m/s}$. Displacement = average velocity $\times$ time: $(-10)(2.0) = -20\;\mathrm{m}$. This matches my $\Delta y$ exactly.

Three independent checks all confirm $t = 2.0\;\mathrm{s}$. I am confident in this answer.

**Answer: $2.0\;\mathrm{s}$.**

---

## Example 2: Block on an Incline with Friction

**Problem.** A $5.0\;\mathrm{kg}$ block slides down a $30^\circ$ incline. Coefficient of kinetic friction $\mu_k = 0.25$. Find the acceleration. ($g = 10\;\mathrm{m/s^2}$)

---

When I read this problem, I immediately notice something different from Example 1: there are *forces*. The words "slides," "incline," and "friction" all point to dynamics — Newton's Second Law will be involved. The problem gives me a mass ($5.0\;\mathrm{kg}$), an angle ($30^\circ$), and a friction coefficient ($0.25$), and it asks for acceleration. This is a force-produces-motion problem. I need $\sum F = ma$.

### Step 1 — Scan for Physics Words

I go word by word through the problem.

**"Slides down"** — the block is moving. This matters because it tells me which kind of friction to use: kinetic ($f_k = \mu_k N$), not static.

**"Incline"** and **$30^\circ$** — these trigger the incline rules from §0.4 Category B. Gravity must be resolved into two components: $mg\sin\theta$ along the incline (pulling the block down) and $mg\cos\theta$ perpendicular to the incline (pushing the block into the surface).

**"Friction"** and **$\mu_k$** — the coefficient of kinetic friction appears. Friction opposes motion, so it points *up* the incline (opposite to the sliding direction). Its magnitude is $f_k = \mu_k N$, but I do not know $N$ yet — I will need to find the normal force first.

**"Find the acceleration"** — the unknown is $a$. Since forces produce acceleration, Newton's Second Law is the primary law.

| Word | Category | What it tells us |
|------|----------|------------------|
| "slides down" | A: motion | Acceleration along incline |
| "incline" / $30^\circ$ | B: resolve gravity | $mg\sin\theta$, $mg\cos\theta$ |
| "friction" / $\mu_k$ | B: friction force | $f_k = \mu_k N$, opposes motion |
| "Find acceleration" | B: forces $\to$ acceleration | $\sum F = ma$ is **PRIMARY LAW** |

### Step 2 — Coordinate System

This is the most important decision in the problem. The block moves along a slanted surface, not horizontally. If I keep the axes horizontal and vertical, I will have to resolve *three* forces (gravity, normal, friction) into components — messy. §0.1 Rule 2 for inclines gives me a better option: **tilt the axes.**

I set $+x$ down the incline (the direction of motion) and $+y$ perpendicular to the surface, pointing away from it.

Why does this help? Look at the forces:
- **Normal force** $N$ is perpendicular to the surface. With my tilted axes, $N$ points purely along $+y$. No $x$-component.
- **Friction** $f_k$ opposes motion, so it points purely along $-x$. No $y$-component.
- **Gravity** $mg$ is the only force that needs resolution. It points straight down. I resolve it into $+mg\sin\theta$ (along $+x$, down the incline) and $-mg\cos\theta$ (along $-y$, into the surface).

Two of the three forces now point purely along one axis. This decoupling is the entire reason for tilting.

```
+x direction: down the incline (direction of motion)
+y direction: perpendicular to surface, away from it
Origin:       starting position (not needed — position cancels)
t = 0 at:     release

→ +x: mg sinθ, -f_k
→ +y: +N, -mg cosθ
→ a_y = 0 (block stays on surface)
```

### Step 3 — Variable Table

| Variable | Symbol | Value | Unit | Dimension | Source |
|----------|--------|-------|------|-----------|--------|
| Mass | $m$ | 5.0 | kg | $[M]$ | given |
| Angle | $\theta$ | $30^\circ$ | — | $[1]$ | given |
| Friction coeff | $\mu_k$ | 0.25 | — | $[1]$ | given |
| Gravity | $g$ | 10 | $\mathrm{m/s^2}$ | $[L][T]^{-2}$ | given |
| Acceleration | $a$ | ? | $\mathrm{m/s^2}$ | $[L][T]^{-2}$ | asked |

Notice that the normal force $N$ and the friction force $f_k$ are not in the table — they are not given as numbers. I will have to express them in terms of the known quantities.

### Step 4 — I-SEE-R

**S — Simplify.** The word "kinetic" in "kinetic friction" tells me the block is already moving. I use $f_k = \mu_k N$, the kinetic friction formula. If the problem had said "static," I would use $f_s \le \mu_s N$ instead — a completely different equation.

Only three forces act: gravity ($mg$, straight down), normal force ($N$, perpendicular to surface), and kinetic friction ($f_k$, up the incline). The block stays on the surface, so there is no acceleration perpendicular to the incline: $a_y = 0$.

**E — Equation.** I write $\sum F = ma$ separately for each axis.

Along $+x$ (down the incline), two forces have components: gravity contributes $+mg\sin\theta$ (pulling down), and friction contributes $-f_k$ (opposing). The normal force has no $x$-component.

$$mg\sin\theta - f_k = ma$$

Along $+y$ (perpendicular to the surface), the normal force points $+y$ and gravity's perpendicular component points $-y$. There is no acceleration in this direction.

$$N - mg\cos\theta = 0 \;\rightarrow\; N = mg\cos\theta$$

Now I know $N$ in terms of known quantities. I substitute it into the friction formula:

$$f_k = \mu_k N = \mu_k mg\cos\theta$$

Plugging this into the $x$-equation:

$$mg\sin\theta - \mu_k mg\cos\theta = ma$$

Every term contains $m$. I factor it out, and it cancels:

$$a = g(\sin\theta - \mu_k\cos\theta)$$

This is a remarkable result: the acceleration does not depend on the mass of the block. A $5\;\mathrm{kg}$ block and a $500\;\mathrm{kg}$ block slide down this incline with the same acceleration. I did not need to "see" this — the algebra revealed it automatically when $m$ cancelled.

**E — Execute.** I substitute the numbers:

$$\begin{aligned}
a &= 10(\sin 30^\circ - 0.25 \cdot \cos 30^\circ) \\
  &= 10(0.5 - 0.25 \times 0.866) \\
  &= 10(0.5 - 0.2165) = 10 \times 0.2835 \\
  &= 2.84\;\mathrm{m/s^2}
\end{aligned}$$

The acceleration is positive — the block accelerates down the incline, as expected. The friction reduces the acceleration from the frictionless value of $5.0\;\mathrm{m/s^2}$ to $2.84\;\mathrm{m/s^2}$.

**R — Reflect.** I test the formula against extreme cases to see if it behaves physically.

*No friction ($\mu_k = 0$):* $a = 10 \times 0.5 = 5.0\;\mathrm{m/s^2}$. This is exactly $g\sin\theta$, the standard result for a frictionless incline. ✓

*Flat surface ($\theta = 0$):* $a = 10(0 - 0.25 \times 1) = -2.5\;\mathrm{m/s^2}$. The negative sign means the block would need to be pushed to move — on a flat surface with friction, a block does not spontaneously slide. Mathematically correct. ✓

*Vertical surface ($\theta = 90^\circ$):* $a = 10(1 - 0.25 \times 0) = 10\;\mathrm{m/s^2}$. At $90^\circ$, the surface is vertical — there is no normal force (nothing pressing the block against it), so friction vanishes entirely. The block is in free fall with $a = g$. ✓

All three limits behave correctly. Dimensional check: $g$ times dimensionless = $[L][T]^{-2}$, matching the expected acceleration dimension from the variable table. ✓

**Answer: $2.84\;\mathrm{m/s^2}$ down the incline.**

---

## Example 3: Perfectly Inelastic Collision

**Problem.** A $1500\;\mathrm{kg}$ car traveling at $20\;\mathrm{m/s}$ east collides with a $2500\;\mathrm{kg}$ SUV at rest. They stick together. Find their velocity after the collision.

---

This problem is fundamentally different from the first two. There is no acceleration, no incline, no friction. Two objects interact over a very short time — a collision. The forces during the collision are enormous but brief, and I do not know their magnitude. I cannot use $F = ma$ because the force is unknown. But there is another tool: momentum conservation.

### Step 1 — Scan for Physics Words

**"Collides"** — this single word changes everything. In §0.4, collisions belong to Category D: momentum. When objects collide, the total momentum before equals the total momentum after, provided no external forces act during the collision. The forces between the car and SUV are internal to the system, so momentum is conserved.

**"At rest"** — the SUV is stationary. Its initial velocity is zero. This simplifies the momentum equation considerably.

**"Stick together"** — these two words identify the collision as *perfectly inelastic*. The objects merge into one combined mass after the collision. They share the same final velocity. Kinetic energy is NOT conserved in this type of collision — some of it is converted to heat, sound, and deformation. But momentum IS conserved, and that is all I need.

**"Velocity after"** — the unknown is the final velocity $v_f$ of the merged wreckage.

| Word | Category | What it tells us |
|------|----------|------------------|
| "collides" | D: collision | Momentum conservation |
| "at rest" | A: $v_0 = 0$ | SUV initial velocity zero |
| "stick together" | D: perfectly inelastic | Same final velocity, KE not conserved |
| "velocity after" | — | Unknown is $v_f$ |

### Step 2 — Coordinate System

The collision is 1D — everything happens along the east-west line. I set $+x$ = east, the direction of the car's initial motion.

```
+x direction: east (direction of car's initial motion)
+y direction: upward (not used — 1D horizontal)
Origin:       collision point (not needed)
t = 0 at:     instant of collision
```

### Step 3 — Variable Table

| Variable | Symbol | Value | Unit | Dimension | Source |
|----------|--------|-------|------|-----------|--------|
| Mass of car | $m_1$ | 1500 | kg | $[M]$ | given |
| Mass of SUV | $m_2$ | 2500 | kg | $[M]$ | given |
| Initial velocity (car) | $v_1$ | 20 | m/s | $[L][T]^{-1}$ | "traveling at 20 m/s" |
| Initial velocity (SUV) | $v_2$ | 0 | m/s | $[L][T]^{-1}$ | "at rest" |
| Final velocity (both) | $v_f$ | ? | m/s | $[L][T]^{-1}$ | "velocity after" |

I have two masses and two initial velocities. One equation (momentum conservation) and one unknown ($v_f$). This should be solvable directly.

### Step 4 — I-SEE-R

**S — Simplify.** The collision is perfectly inelastic — the car and SUV become one object. This means there is only one final velocity to solve for, not two. Momentum is conserved because the forces between the vehicles are internal. Kinetic energy is NOT conserved, but I do not need it — the problem asks only for velocity, not energy.

**E — Equation.** Total momentum before the collision equals total momentum after:

$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_f$$

This is the defining equation for a perfectly inelastic collision. The left side is the sum of individual momenta before. The right side is the momentum of the combined wreckage after.

**E — Execute.** I solve for $v_f$:

$$v_f = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \frac{1500 \times 20 + 2500 \times 0}{1500 + 2500} = \frac{30{,}000}{4000} = 7.5\;\mathrm{m/s}$$

The SUV was stationary, so its momentum contribution is zero. The car's momentum is distributed over the combined mass, resulting in a lower speed. The numbers make intuitive sense: the car ($1500\;\mathrm{kg}$) hits a heavier SUV ($2500\;\mathrm{kg}$) and they move together at less than half the car's original speed.

**R — Reflect.**

*Dimensional check:* $[M][L][T]^{-1} / [M] = [L][T]^{-1}$. The units are correct for velocity. ✓

*Direction:* The answer is positive — east, the same direction as the car's initial motion. The stationary SUV does not reverse the direction; it only reduces the speed. ✓

*Limiting case:* If the SUV were absent ($m_2 = 0$), then $v_f = v_1 = 20\;\mathrm{m/s}$. The car just continues at its original speed. The formula handles this edge case correctly. ✓

*Energy check (optional, but informative):* Initial kinetic energy = $\frac{1}{2}(1500)(20)^2 = 300{,}000\;\mathrm{J}$. Final kinetic energy = $\frac{1}{2}(4000)(7.5)^2 = 112{,}500\;\mathrm{J}$. The collision converted $187{,}500\;\mathrm{J}$ — over 60% of the initial energy — into heat, sound, and metal deformation. This is typical for perfectly inelastic collisions: they dissipate the maximum possible kinetic energy. ✓

**Answer: $7.5\;\mathrm{m/s}$ east.**

---

# Part II: Electricity

---

## Example 4: Coulomb's Law

**Problem.** Charges $q_1 = +3.0\;\mu\mathrm{C}$ and $q_2 = -2.0\;\mu\mathrm{C}$ are $0.10\;\mathrm{m}$ apart. Find the electrostatic force between them. ($k = 9.0 \times 10^{9}\;\mathrm{N\;m^2/C^2}$)

---

This problem leaves the world of masses and accelerations. Now I am dealing with electric charges. But the method does not change. I still scan words, build a table, identify the law, and solve.

### Step 1 — Scan for Physics Words

The unit **$\mu$C** immediately identifies this as an electricity problem. §0.4 Category F: charges and Coulomb's Law.

The charges have signs: $+3.0$ and $-2.0$. They are opposite, so the force will be attractive. This tells me the direction without any calculation.

**"$0.10\;\mathrm{m}$ apart"** gives the distance $r$ between the charges.

No other physics words appear — no electric field, no circuit, no magnetic field. The problem is a direct application of Coulomb's Law.

| Word | Category | What it tells us |
|------|----------|------------------|
| "charges" / "$\mu$C" | F: Coulomb's Law | $F = k\lvert q_1 q_2\rvert/r^2$ |
| $+3.0$, $-2.0$ | F: opposite signs | Attractive force |
| "$0.10\;\mathrm{m}$ apart" | — | Distance $r = 0.10\;\mathrm{m}$ |

### Step 2 — Coordinate System

The force between two point charges acts along the line connecting them. I set $+x$ along that line, from $q_1$ to $q_2$.

```
+x direction: line from q1 to q2 (radial direction)
Origin:       position of q1
→ Force acts purely along ±x. 1D radial problem.
→ Opposite signs → attractive → each charge pulled toward the other.
```

### Step 3 — Variable Table

I convert the microcoulombs to coulombs: $\mu\mathrm{C} = 10^{-6}\;\mathrm{C}$.

| Variable | Symbol | Value | Unit | Dimension |
|----------|--------|-------|------|-----------|
| Charge 1 | $q_1$ | $+3.0\times10^{-6}$ | C | $[Q]$ |
| Charge 2 | $q_2$ | $-2.0\times10^{-6}$ | C | $[Q]$ |
| Distance | $r$ | $0.10$ | m | $[L]$ |
| Coulomb constant | $k$ | $9.0\times10^9$ | $\mathrm{N\;m^2/C^2}$ | $[M][L]^3[Q]^{-2}[T]^{-2}$ |
| Force | $F$ | ? | N | $[M][L][T]^{-2}$ |

Notice that I wrote the dimension of $k$ in the table. This is not strictly necessary for solving, but it lets me verify the dimensional analysis in the Reflection step. The dimension of $k$ comes from rearranging Coulomb's Law: $k = Fr^2/(q_1 q_2)$, so $[k] = [M][L][T]^{-2} \cdot [L]^2 / [Q]^2 = [M][L]^3[Q]^{-2}[T]^{-2}$.

### Step 4 — I-SEE-R

**S — Simplify.** Point charges — no size, no shape. The medium is vacuum (or air, which has essentially the same $k$). No other charges are nearby. The force acts along the single line connecting the two charges — a 1D problem.

**E — Execute.** Coulomb's Law gives the magnitude directly. The absolute value ensures I get a positive magnitude; the signs determine the direction separately.

$$F = k\frac{\lvert q_1 q_2\rvert}{r^2} = 9.0\times10^9 \cdot \frac{(3.0\times10^{-6})(2.0\times10^{-6})}{(0.10)^2}$$

$$= 9.0\times10^9 \cdot \frac{6.0\times10^{-12}}{0.01} = 9.0\times10^9 \cdot 6.0\times10^{-10} = 5.4\;\mathrm{N}$$

Direction: opposite signs $\to$ attractive. Each charge experiences a force of $5.4\;\mathrm{N}$ pulling it toward the other.

**R — Reflect.**

*Dimensional check:* $[k][q]^2/[r]^2 = [M][L]^3[Q]^{-2}[T]^{-2} \cdot [Q]^2 / [L]^2 = [M][L][T]^{-2}$. This matches the dimension of force in my variable table. The dimensional analysis not only checks my answer — it also confirms that $k$ must have those specific, strange-looking dimensions for Coulomb's Law to be dimensionally consistent. ✓

*Distance scaling:* If I double the distance to $0.20\;\mathrm{m}$, the force becomes $5.4/4 = 1.35\;\mathrm{N}$. This is the inverse square law: doubling distance quarters the force. The formula captures this without any additional work. ✓

*Sign reversal:* If both charges were positive ($q_2 = +2.0\;\mu\mathrm{C}$), the magnitude would still be $5.4\;\mathrm{N}$, but the direction would be repulsive. The absolute value in the formula separates magnitude from direction — a clean design. ✓

**Answer: $5.4\;\mathrm{N}$, attractive.**

---

## Example 5: Compound Circuit Reduction

**Problem.** $R_1 = 4.0\;\Omega$, $R_2 = 12.0\;\Omega$ in parallel, with $R_3 = 6.0\;\Omega$ in series. A $24\;\mathrm{V}$ battery powers the circuit. Find the current through $R_2$ and the voltage across $R_2$.

---

This is a circuit problem. There is no motion, no force, no energy in the mechanical sense. But the structure is the same: I have numbers (resistances, voltage), I need to find unknowns (current, voltage drop), and I have rules (Ohm's Law, series/parallel reduction) that connect them.

### Step 1 — Scan for Physics Words

The unit **$\Omega$** tells me resistors are involved. **"Parallel"** and **"series"** tell me how they are connected. **"$24\;\mathrm{V}$ battery"** gives the total voltage.

The words point to Ohm's Law ($V = IR$) and the reduction formulas. No other electrical concepts (capacitors, magnetic fields) appear.

| Word | Category | What it tells us |
|------|----------|------------------|
| $\Omega$ / "resistor" | F: Ohm's Law | $V = IR$ |
| "parallel" | F: parallel rule | $1/R_{\text{eq}} = 1/R_1 + 1/R_2$, same voltage |
| "series" | F: series rule | $R_{\text{eq}} = R_a + R_b$, same current |
| "$24\;\mathrm{V}$ battery" | F: voltage source | Total $V$ across circuit |

### Step 2 — Coordinate System

Not applicable. Circuits use current direction defined by battery polarity, not spatial coordinates.

### Step 3 — Variable Table

| Variable | Symbol | Value | Unit | Dimension |
|----------|--------|-------|------|-----------|
| $R_1$ | $R_1$ | 4.0 | $\Omega$ | $[M][L]^2[Q]^{-2}[T]^{-1}$ |
| $R_2$ | $R_2$ | 12.0 | $\Omega$ | same |
| $R_3$ | $R_3$ | 6.0 | $\Omega$ | same |
| Battery voltage | $V$ | 24 | V | $[M][L]^2[Q]^{-1}[T]^{-2}$ |
| Current through $R_2$ | $I_2$ | ? | A | $[Q][T]^{-1}$ |
| Voltage across $R_2$ | $V_2$ | ? | V | $[M][L]^2[Q]^{-1}[T]^{-2}$ |

### Step 4 — I-SEE-R

**S — Simplify.** Ideal wires (zero resistance). Ideal battery (zero internal resistance). DC steady state — no capacitors charging or discharging, no time-varying behavior. The circuit is purely resistive.

**E — Equation.** The strategy for compound circuits is always the same: start from the innermost group and reduce outward.

I identify the innermost group: $R_1$ and $R_2$ are in parallel. I reduce them to a single equivalent resistance $R_{12}$. Then $R_{12}$ is in series with $R_3$. I add them to get the total resistance. From there, Ohm's Law gives the total current. Then I work backward, distributing current and voltage to each branch.

**E — Execute.**

*Phase 1 — reduce the parallel pair:*
$$\frac{1}{R_{12}} = \frac{1}{4.0} + \frac{1}{12.0} = \frac{3}{12} + \frac{1}{12} = \frac{4}{12}$$
$$R_{12} = 3.0\;\Omega$$

Notice that $R_{12} = 3.0\;\Omega$ is *smaller* than either individual resistor ($4.0$ and $12.0$). This is always true for parallel combinations: the equivalent resistance is less than the smallest branch resistance. The reason is that parallel resistors provide multiple paths for current, making it easier for charge to flow.

*Phase 2 — add the series resistor:*
$$R_{\text{total}} = R_{12} + R_3 = 3.0 + 6.0 = 9.0\;\Omega$$

*Phase 3 — total current from the battery:*
$$I_{\text{total}} = \frac{V}{R_{\text{total}}} = \frac{24}{9.0} = 2.667\;\mathrm{A}$$

*Phase 4 — distribute backward:*
$R_3$ is in series with the parallel pair, so it carries the full total current: $I_3 = 2.667\;\mathrm{A}$.

The voltage across $R_3$ is $V_3 = I_3 R_3 = 2.667 \times 6.0 = 16\;\mathrm{V}$.

The remaining voltage appears across the parallel pair: $V_{12} = 24 - 16 = 8\;\mathrm{V}$.

In a parallel configuration, both branches have the same voltage: $V_1 = V_2 = 8\;\mathrm{V}$.

Now I can find the current through $R_2$:
$$I_2 = \frac{V_2}{R_2} = \frac{8}{12} = 0.667\;\mathrm{A}$$

**R — Reflect.**

*Consistency check:* $I_1 = V_1/R_1 = 8/4 = 2\;\mathrm{A}$. The currents entering the parallel junction must sum to the current leaving: $I_1 + I_2 = 2 + 0.667 = 2.667 = I_{\text{total}}$. Current is conserved. ✓

*Power check:* Total power from the battery = $VI = 24 \times 2.667 = 64\;\mathrm{W}$. Individual powers: $P_1 = 8 \times 2 = 16\;\mathrm{W}$, $P_2 = 8 \times 0.667 = 5.33\;\mathrm{W}$, $P_3 = 16 \times 2.667 = 42.67\;\mathrm{W}$. Sum = $64\;\mathrm{W}$. Energy is conserved. ✓

*Limiting case:* If $R_2$ were removed (open circuit, $R_2 \to \infty$), the parallel combination becomes just $R_1 = 4.0\;\Omega$. Then $R_{\text{total}} = 10.0\;\Omega$, $I_{\text{total}} = 2.4\;\mathrm{A}$, and $I_2 = 0$. An open branch carries no current — physically correct. ✓

**Answer: $I_2 = 0.667\;\mathrm{A}$, $V_2 = 8\;\mathrm{V}$.**

---

# Part III: Thermodynamics

---

## Example 6: The Ideal Gas Law

**Problem.** A sealed container holds gas at $P_1 = 2.0\;\mathrm{atm}$, $V_1 = 5.0\;\mathrm{L}$, $T_1 = 300\;\mathrm{K}$. The gas is compressed to $V_2 = 2.0\;\mathrm{L}$ while being heated to $T_2 = 450\;\mathrm{K}$. Find the new pressure $P_2$.

---

This problem has no coordinates, no forces, no motion. It deals with the bulk properties of a gas — pressure, volume, temperature. The tools are different, but the extraction method is identical.

### Step 1 — Scan for Physics Words

The words **"gas," "pressure," "volume,"** and **"temperature"** together trigger the Ideal Gas Law (§0.4 Category H). The word **"sealed"** is critical — it tells me the container is closed, so the amount of gas $n$ does not change. This allows me to use the combined gas law rather than the full $PV = nRT$.

**"Compressed"** means volume decreases. **"Heated"** means temperature increases. Both changes will affect the pressure. The question asks for the new pressure $P_2$.

| Word | Category | What it tells us |
|------|----------|------------------|
| "gas" / "pressure" / "volume" / "temperature" | H: Ideal Gas Law | $PV = nRT$ |
| "sealed" | H: $n$ constant | $P_1V_1/T_1 = P_2V_2/T_2$ |
| "compressed" + "heated" | — | Both $V$ and $T$ change; $P$ responds |

### Step 2 — Coordinate System

Not applicable. $P$, $V$, and $T$ are scalar properties of the entire gas sample — they have no direction.

### Step 3 — Variable Table

| Variable | Symbol | Value | Unit | Dimension | Source |
|----------|--------|-------|------|-----------|--------|
| Initial pressure | $P_1$ | 2.0 | atm | $[M][L]^{-1}[T]^{-2}$ | given |
| Initial volume | $V_1$ | 5.0 | L | $[L]^3$ | given |
| Initial temperature | $T_1$ | 300 | K | $[\Theta]$ | given |
| Final volume | $V_2$ | 2.0 | L | $[L]^3$ | "compressed to 2.0 L" |
| Final temperature | $T_2$ | 450 | K | $[\Theta]$ | "heated to 450 K" |
| Final pressure | $P_2$ | ? | atm | $[M][L]^{-1}[T]^{-2}$ | "Find $P_2$" |

### Step 4 — I-SEE-R

**S — Simplify.** The gas is ideal — it obeys $PV = nRT$ exactly. The container is sealed, so $n$ is constant. The universal gas constant $R$ is, by definition, constant. The only variables that change are $P$, $V$, and $T$, and they are related by $PV/T = nR = \text{constant}$. Therefore $P_1V_1/T_1 = P_2V_2/T_2$.

**E — Equation.** I rearrange the combined gas law to solve for $P_2$:

$$P_2 = P_1 \cdot \frac{V_1}{V_2} \cdot \frac{T_2}{T_1}$$

I write it this way deliberately. It shows $P_2$ as the initial pressure multiplied by two independent factors: a volume factor ($V_1/V_2$) and a temperature factor ($T_2/T_1$). This factorization reveals the physics: compression increases pressure (by making $V_1/V_2 > 1$), and heating also increases pressure (by making $T_2/T_1 > 1$). Both changes push $P_2$ higher than $P_1$.

**E — Execute.**

$$P_2 = 2.0 \cdot \frac{5.0}{2.0} \cdot \frac{450}{300} = 2.0 \cdot 2.5 \cdot 1.5 = 7.5\;\mathrm{atm}$$

**R — Reflect.**

*Factor analysis:* The volume is halved ($V_2 = 2.0$, $V_1 = 5.0$, so $V_1/V_2 = 2.5$). If only the volume changed (constant temperature), Boyle's Law would give $P_2 = 2.0 \times 2.5 = 5.0\;\mathrm{atm}$. The temperature increases by 50% ($T_2/T_1 = 450/300 = 1.5$). If only the temperature changed (constant volume), Gay-Lussac's Law would give $P_2 = 2.0 \times 1.5 = 3.0\;\mathrm{atm}$. When both act simultaneously, the factors multiply: $2.0 \times 2.5 \times 1.5 = 7.5\;\mathrm{atm}$. ✓

*Isothermal limit:* If $T_2 = T_1 = 300\;\mathrm{K}$, then $P_2 = 2.0 \times 2.5 = 5.0\;\mathrm{atm}$ — pure Boyle's Law result. ✓

*Isochoric limit:* If $V_2 = V_1 = 5.0\;\mathrm{L}$, then $P_2 = 2.0 \times 1.5 = 3.0\;\mathrm{atm}$ — pure Gay-Lussac result. ✓

The combined gas law correctly reduces to each special case. The answer is robust.

**Answer: $7.5\;\mathrm{atm}$.**

---

# Part IV: Waves

---

## Example 7: Standing Waves on a Guitar String

**Problem.** A guitar string of length $L = 0.65\;\mathrm{m}$ has linear density $\mu = 4.0\times10^{-3}\;\mathrm{kg/m}$ and is under tension $F_T = 100\;\mathrm{N}$. Find (a) the fundamental frequency $f_1$, (b) the third harmonic frequency $f_3$, and (c) the wavelength of the third harmonic $\lambda_3$.

---

This problem looks different from everything before it. There is a string, a tension, a "linear density" — concepts from wave physics, not from mechanics or electricity. But the method still works. I scan for words, build the table, find the equations.

### Step 1 — Scan for Physics Words

**"String"** and **"tension"** together trigger the wave speed formula for a taut string: $v = \sqrt{F_T/\mu}$. The speed of a wave on a string depends only on the tension and the linear density — not on the frequency or wavelength.

**"Fundamental frequency"** and **"harmonic"** tell me this is a standing wave problem. For a string fixed at both ends, the standing wave condition is geometric: an integer number of half-wavelengths must fit exactly on the string length. This gives $f_n = n v/(2L)$.

**"Length $L = 0.65\;\mathrm{m}$"** — the string's length, which sets the boundary conditions. Both ends are fixed, so the displacement is zero at $x = 0$ and $x = L$.

| Word | Category | What it tells us |
|------|----------|------------------|
| "string" / "tension" | Waves | $v = \sqrt{F_T/\mu}$ (wave speed on taut string) |
| "fundamental frequency" / "harmonic" | Waves | $f_n = n v/(2L)$ (standing wave, fixed ends) |
| "length" / $L = 0.65\;\mathrm{m}$ | Boundary condition | Both ends fixed |

### Step 2 — Coordinate System

```
+x direction: along the string, from left end to right end
+y direction: transverse displacement (direction of vibration)
Origin:       left fixed end, x = 0

→ Boundary conditions: y(0, t) = 0, y(L, t) = 0 (fixed at both ends)
→ Standing wave: integer number of half-wavelengths fits on L.
```

### Step 3 — Variable Table

| Variable | Symbol | Value | Unit | Dimension | Source |
|----------|--------|-------|------|-----------|--------|
| String length | $L$ | 0.65 | m | $[L]$ | given |
| Linear density | $\mu$ | $4.0\times10^{-3}$ | kg/m | $[M][L]^{-1}$ | given |
| Tension | $F_T$ | 100 | N | $[M][L][T]^{-2}$ | given |
| Wave speed | $v$ | — | m/s | $[L][T]^{-1}$ | derived |
| Fundamental freq | $f_1$ | ? | Hz | $[T]^{-1}$ | (a) |
| Third harmonic | $f_3$ | ? | Hz | $[T]^{-1}$ | (b) |
| Wavelength (3rd) | $\lambda_3$ | ? | m | $[L]$ | (c) |

I notice that wave speed $v$ is not given — I must compute it from $F_T$ and $\mu$. This is a two-step problem: first find $v$, then find the frequencies and wavelengths.

### Step 4 — I-SEE-R

**S — Simplify.** The string is ideal — perfectly flexible, uniform density, constant tension along its length. Both ends are rigidly fixed, which forces nodes (zero displacement) at $x = 0$ and $x = L$ at all times. The standing wave condition follows directly from these boundary conditions.

**E — Equation.** Two independent physical facts combine to give the answer.

First, the wave speed. This depends only on the properties of the medium — the string itself — not on how it is vibrated: $v = \sqrt{F_T/\mu}$.

Second, the standing wave condition. For a string fixed at both ends, the length must equal an integer number of half-wavelengths: $L = n\frac{\lambda_n}{2}$ for $n = 1, 2, 3, \ldots$

Combining these: $f_n = v/\lambda_n = n v/(2L)$.

**E — Execute.**

I compute the wave speed first:

$$v = \sqrt{\frac{100}{4.0\times10^{-3}}} = \sqrt{25{,}000} = 158.1\;\mathrm{m/s}$$

Now the fundamental frequency ($n = 1$):

$$f_1 = \frac{v}{2L} = \frac{158.1}{2 \times 0.65} = \frac{158.1}{1.30} = 121.6\;\mathrm{Hz}$$

The third harmonic is simply three times the fundamental:

$$f_3 = 3 f_1 = 3 \times 121.6 = 364.8\;\mathrm{Hz}$$

The wavelength of the third harmonic uses the standing wave condition with $n = 3$:

$$\lambda_3 = \frac{2L}{3} = \frac{2 \times 0.65}{3} = 0.433\;\mathrm{m}$$

Notice that $\lambda_3$ is shorter than the string length — exactly one-third of $2L$. On the string, one and a half full wavelengths fit between the two fixed ends.

**R — Reflect.**

*Dimensional check:* $\sqrt{F_T/\mu} = \sqrt{[M][L][T]^{-2} / ([M][L]^{-1})} = \sqrt{[L]^2[T]^{-2}} = [L][T]^{-1}$. This is the dimension of speed. ✓ $f_n = v/(2L) = [L][T]^{-1}/[L] = [T]^{-1}$. This is the dimension of frequency (Hz). ✓

*Harmonic spacing:* The frequencies are integer multiples of the fundamental: $f_n = n f_1$. This integer relationship is the defining characteristic of standing waves on a string with fixed ends. If the overtones were not exact integer multiples, the instrument would sound dissonant. ✓

*Physical check:* A tighter string (larger $F_T$) produces a higher wave speed, and therefore higher frequencies — a sharper pitch. A heavier string (larger $\mu$) produces a lower wave speed, and therefore lower frequencies — a deeper pitch. This matches the behavior of every string instrument: tightening a tuning peg raises the pitch; using a thicker string lowers it. The physics is correct. ✓

**Answer: (a) $f_1 = 122\;\mathrm{Hz}$, (b) $f_3 = 365\;\mathrm{Hz}$, (c) $\lambda_3 = 0.433\;\mathrm{m}$.**


# Part V: How to Learn New Physics — The Meta-Method

The seven examples taught you how to solve problems when you know which law to use. But what happens when you open a textbook to a chapter you have never seen — *magnetic flux*, *entropy*, *relativity*?

This part is the meta-method: a system for absorbing new physics concepts and applying them to problems of increasing difficulty.

> **Core principle:** You do not need to *understand* a concept before you can *use* it. In physics, using a concept correctly is the path to understanding — not the reverse. Textbooks are written by people who already understand. You are not them. Your advantage: you can follow rules without understanding.

### §5.1 The Textbook Absorption Algorithm

When you encounter a new chapter, do NOT read it front to back. Execute four passes:

**Pass 1: Harvest every equation.** Flip through the chapter. Every boxed, bold, or displayed equation — copy it into a list. Do not read the surrounding text. You are building a raw inventory.

**Pass 2: Identify every new variable.** For each symbol in each harvested equation, write down its name, its unit, and its dimension (derive from the equation using §0.2).

**Pass 3: Classify each equation.** Every physics equation answers one of four questions:

| Type | Question | Example |
|------|----------|---------|
| Definition | What IS this quantity? | $\vec{B} = \vec{F}/(qv\sin\theta)$ |
| Force law | What force acts? | $\vec{F} = q\vec{v} \times \vec{B}$ |
| Motion law | How does it move? | $r = mv/(qB)$ |
| Conservation | What stays constant? | (magnetic force does no work) |

**Pass 4: Add to your §0.4 table.** Every new physics word $\to$ one row in your personal vocabulary table. Now a future problem that says "magnetic field" will mechanically trigger the Lorentz force.

### §5.2 The Problem-Difficulty Ladder

Problems are not hard because you lack intuition. They are hard because they combine multiple concepts. This is a countable property:

| Level | Concepts | Strategy |
|-------|----------|----------|
| **1. Direct substitution** | 1 equation, all variables given | Use Pass 1 of §0.4 — find the one law. |
| **2. Two-step chain** | Equation 1's answer $\to$ Equation 2's input | Find the bridge variable (appears as both output and input). |
| **3. Shared constraint** | Two objects/phases share a variable | Write separate equations, equate the shared variable. |
| **4. Synthesis** | 3+ categories, must choose | Elimination protocol: list all triggered laws, eliminate those missing variables, use what remains. |

### §5.3 When You Are Stuck — Four Recovery Protocols

**Protocol A: Variable Shortage Check.** Count knowns. Count equations. If unknowns exceed equations, re-read for implied zeros ("from rest" $\to$ $v_0 = 0$, "stops" $\to$ $v = 0$).

**Protocol B: Dimensional Back-Solve.** Write the dimension of the answer. Write dimensions of everything given. Is there only one way to combine them to get the answer's dimension? That combination IS the formula, up to a dimensionless constant.

**Protocol C: Extreme-Case Test.** Set one variable to zero or infinity. Does the result make physical sense? A formula that fails any extreme case is wrong regardless of how you derived it.

**Protocol D: One-Sentence Summary.** If you have stared for 5 minutes without writing, stop. Describe the problem in plain language without any physics words. "Something starts from rest, moves a distance while speeding up, I need its final speed." The physics words were the obstacle.

### §5.4 When the Mapping Is Not Obvious — The Variable-Group Method

Every example so far had a direct mapping: a physics word triggered a law, numbers filled the variables, and one equation gave the answer. But some problems resist this. The numbers do not line up neatly. The knowns and the unknown seem to live in different parts of the motion, connected by nothing obvious.

This is not because you lack intuition. It is because the problem describes a **trajectory segment** rather than a **trajectory endpoint.** The numbers belong to the middle of the motion, not the beginning or the end. Your job is to **find an anchor point** — a place on the trajectory where you know enough to solve for something, even if that something is not the final answer.

The method has three stages:

1. **Group the variables by context.** A "context" is a set of variables that share a common reference point in the problem. In the window problem, there are two contexts: the window traversal (variables describing motion from window bottom to window top) and the ground-to-window journey (variables describing motion from ground to window bottom). Each context gets its own mini variable table.
2. **Identify the richest context.** Which context's table has the most KNOWN values? Solve that one first. It will produce a variable that also appears in another context's table.
3. **Transfer the result.** The variable you just solved for is now KNOWN in all contexts where it appears. This may make another context solvable. Repeat.

No drawing. No trajectory. Just tables and counting.

#### Worked Example: The Window Problem (Variable-Group Method)

> **Problem.** A ball is thrown straight up. It passes a $2.00\;\mathrm{m}$ high window whose bottom is $7.50\;\mathrm{m}$ above the ground. The ball takes $1.30\;\mathrm{s}$ to travel from the bottom to the top of the window — and it is still going up. What was the ball's initial velocity at ground level? ($g = 10.0\;\mathrm{m/s^2}$)

**Why this problem feels different.** The numbers ($2.00\;\mathrm{m}$, $7.50\;\mathrm{m}$, $1.30\;\mathrm{s}$) all describe the window — the *middle* of the motion. The question asks about the *beginning* (initial velocity at ground level). There is no single kinematic equation that directly connects "window-passing time" to "initial velocity from the ground." The mapping is indirect. But the variable-group method handles this by splitting the problem into two independent tables.

**Step 1 — Group the variables into contexts.**

I identify two contexts. Context W (window): the motion from window bottom to window top. Context G (ground): the motion from ground to window bottom.

| Context | Variables included | Why these belong together |
|---------|-------------------|---------------------------|
| Context W (window traversal) | $\Delta y_W = 2.00\;\mathrm{m}$, $t_W = 1.30\;\mathrm{s}$, $a_y = -10.0\;\mathrm{m/s^2}$, $v_{\text{bottom}}$, $v_{\text{top}}$ | All five describe the same segment of motion — the window passage. |
| Context G (ground to window) | $\Delta y_G = 7.50\;\mathrm{m}$, $a_y = -10.0\;\mathrm{m/s^2}$, $v_{0y}$ (TARGET), $v_{\text{bottom}}$ | These describe the motion from launch to window bottom. $v_{\text{bottom}}$ is the final velocity of this context and the initial velocity of Context W — it is the **bridge variable.** |

**Step 2 — Solve the richest context first.**

Context W has three knowns ($\Delta y$, $t$, $a_y$). That is enough to solve for a fourth kinematic variable. Context G has only two knowns ($\Delta y$, $a_y$). Context W is richer. I solve it first.

I write the five standard kinematic variables for Context W: $v_0$ (which is $v_{\text{bottom}}$), $v$ ($v_{\text{top}}$), $a = -10.0$, $t = 1.30$, $\Delta x = 2.00$.

Known: $a$, $t$, $\Delta x$. Unknown: $v_0$, $v$.

Among the four kinematic equations, one uses $\Delta x$, $t$, $a$, and $v_0$ without involving $v$:

$$\Delta x = v_0 t + \frac{1}{2}at^2$$

$$2.00 = v_{\text{bottom}}(1.30) + \frac{1}{2}(-10.0)(1.30)^2$$
$$2.00 = 1.30\,v_{\text{bottom}} - 8.45$$
$$v_{\text{bottom}} = 8.04\;\mathrm{m/s}$$

**Step 3 — Transfer the bridge variable.**

$v_{\text{bottom}} = 8.04\;\mathrm{m/s}$ is now KNOWN. It belongs to both contexts. I update Context G:

Context G now has three knowns: $\Delta y_G = 7.50$, $a_y = -10.0$, and $v_{\text{bottom}} = 8.04$ (this is the final velocity of Context G). Unknowns: $v_{0y}$ (TARGET) and $t_G$ (time from ground to window — not needed).

The kinematic equation that uses $v$, $v_0$, $a$, and $\Delta x$ without involving $t$:

$$v^2 = v_0^2 + 2a\Delta x$$

$$(8.04)^2 = v_{0y}^2 + 2(-10.0)(7.50)$$
$$64.6 = v_{0y}^2 - 150$$
$$v_{0y}^2 = 214.6$$
$$v_{0y} = 14.7\;\mathrm{m/s}$$

The TARGET is now KNOWN.

**Step 4 — Reflect.**

*Dimensional check:* All velocities $[L][T]^{-1}$, displacements $[L]$, accelerations $[L][T]^{-2}$. The equation $v^2 = v_0^2 + 2a\Delta x$ has dimensions $[L]^2[T]^{-2}$ on both sides. ✓

*Plausibility check:* Initial velocity $14.7\;\mathrm{m/s}$ exceeds velocity at window bottom $8.04\;\mathrm{m/s}$. Gravity has decelerated the ball over the $7.50\;\mathrm{m}$ ascent — consistent. Maximum height: $v_{0y}^2/(2g) = 14.7^2/20 = 10.8\;\mathrm{m}$. Window top is at $9.50\;\mathrm{m}$, so the ball is indeed rising as it passes. ✓

#### The Variable-Group Protocol

When the problem's numbers do not directly connect to the unknown:

1. **Split the problem into contexts.** A context is any set of kinematic variables ($v_0$, $v$, $a$, $t$, $\Delta x$) that describe a single segment of the motion. Each context gets its own mini variable table.
2. **Count knowns per context.** The context with the most knowns is solved first.
3. **Solve the richest context.** Pick the kinematic equation whose missing variable you do not need, mechanically (Quick-Reference Card ⑤). Solve it.
4. **Identify the bridge.** The variable you just found — does it appear in another context's table? If yes, transfer it there as a KNOWN.
5. **Repeat** until the TARGET context becomes solvable.

No drawing. No spatial reasoning. The "contexts" are defined purely by which variables share a common $\Delta x$ and $t$. You identify them by reading the problem and asking: "Which numbers describe the same segment of motion?" The answer is always in the phrasing: "passes a window" → window segment; "off the ground" → ground segment.

### §5.5 Two More Non-Intuitive Strategies

The variable-group method works when the problem partitions cleanly into contexts. When it does not, two purely mechanical strategies — neither requiring any drawing or spatial thinking — can finish the job.

#### Strategy 1: Equation Saturation — Solve Whatever Is Solvable

This is the most brutally mechanical approach possible. The rule: **do not try to find a path. Just solve whatever you can, and eventually the answer will appear.**

**The protocol:**

1. Write down EVERY equation that could possibly apply. Be indiscriminate.
2. For each variable, mark it as KNOWN (number given in the problem), UNKNOWN (value not yet known, but not the answer), or TARGET (the quantity the question asks for).
3. For each equation, count how many of its variables are UNKNOWN.
4. Find an equation with exactly ONE unknown. Solve it. That unknown becomes KNOWN.
5. Repeat step 3–4. Every solved variable may reduce another equation's unknown count to one.
6. Stop when the TARGET becomes KNOWN.

This is identical to how Sudoku solvers work. You fill the cell that has only one possible value; the next cell becomes fillable. No foresight. No planning.

**Worked example — the window problem, solved by saturation.**

I write the four kinematic equations as a roster:

| # | Equation | Variables it connects |
|---|----------|----------------------|
| (1) | $v = v_0 + at$ | $v_0, v, a, t$ |
| (2) | $\Delta x = v_0 t + \frac{1}{2}at^2$ | $v_0, \Delta x, a, t$ |
| (3) | $\Delta x = \frac{1}{2}(v_0 + v)t$ | $v_0, v, \Delta x, t$ |
| (4) | $v^2 = v_0^2 + 2a\Delta x$ | $v_0, v, a, \Delta x$ |

The problem gives me numbers for two separate segments. I treat each segment independently, applying the same four equations to each.

**Context W (window):** Variables: $v_0 = v_{\text{bottom}}$ (UNKNOWN), $v = v_{\text{top}}$ (UNKNOWN), $a = -10.0$ (KNOWN), $t = 1.30$ (KNOWN), $\Delta x = 2.00$ (KNOWN). TARGET is not in this context — I am solving it to get the bridge variable $v_{\text{bottom}}$.

I scan equations (1)–(4), counting unknowns in each for Context W:
- (1): unknowns = $\{v_0, v\}$ → 2 unknowns. Skip.
- (2): unknowns = $\{v_0\}$ → **1 unknown.** Solve it.

$$2.00 = v_{\text{bottom}}(1.30) + \frac{1}{2}(-10.0)(1.30)^2 \;\rightarrow\; v_{\text{bottom}} = 8.04$$

Now $v_{\text{bottom}}$ is KNOWN. I update Context G.

**Context G (ground to window):** Variables: $v_0 = v_{0y}$ (TARGET), $v = v_{\text{bottom}} = 8.04$ (KNOWN), $a = -10.0$ (KNOWN), $\Delta x = 7.50$ (KNOWN), $t = t_G$ (UNKNOWN, not needed).

I scan equations (1)–(4) for Context G:
- (4): unknowns = $\{v_0\}$ → **1 unknown.** Solve it.

$$(8.04)^2 = v_{0y}^2 + 2(-10.0)(7.50) \;\rightarrow\; v_{0y} = 14.7$$

TARGET is KNOWN. Done.

**Why this requires zero insight:** At no point did I ask "which equation should I use first?" I listed all four, counted unknowns, and picked whichever had exactly one. The path (2) → (4) fell out of the counting. The method works backward, forward, or sideways — direction does not matter, only the unknown count matters.

#### Strategy 2: The Equation-Variable Matrix — Find the Solvable Row

When the saturation method has too many variables to track mentally, use a matrix. No drawing — just a table.

**The protocol:**

1. Make a table. **Rows** = equations. **Columns** = variables.
2. In each cell, put a checkmark (✓) if that variable appears in that equation. Leave it blank otherwise.
3. Add a final column: "Unknowns remaining." This is the number of unchecked (UNKNOWN) variables in that row. (Do not count the TARGET as unknown — it IS an unknown, but it is the one you want.)
4. Find a row where "Unknowns remaining" = 1. Solve that equation for its sole unknown. Mark that variable's column as KNOWN (change its ✓ to a K, or shade the column).
5. Recalculate "Unknowns remaining" for all rows. Repeat.

**Worked example — the window problem as a matrix.**

Context W (window). Columns: $v_B$ (bottom velocity), $v_T$ (top velocity), $a$, $t$, $\Delta x$.

| Equation | $v_B$ | $v_T$ | $a$ | $t$ | $\Delta x$ | Unknowns |
|----------|-------|-------|-----|-----|-----------|----------|
| (1) $v = v_0 + at$ | ✓ | ✓ | ✓ | ✓ | | 2 |
| (2) $\Delta x = v_0 t + \frac{1}{2}at^2$ | ✓ | | ✓ | ✓ | ✓ | **1** ← SOLVE |
| (3) $\Delta x = \frac{1}{2}(v_0 + v)t$ | ✓ | ✓ | | ✓ | ✓ | 2 |
| (4) $v^2 = v_0^2 + 2a\Delta x$ | ✓ | ✓ | ✓ | | ✓ | 2 |

Row (2) has exactly one unknown: $v_B$. I solve it, mark $v_B$ as KNOWN, and rebuild the matrix for Context G.

Context G. Columns: $v_0$ (TARGET), $v_B$ (now KNOWN), $a$, $t_G$, $\Delta x_G$.

| Equation | $v_0$ | $v_B$ | $a$ | $t_G$ | $\Delta x_G$ | Unknowns |
|----------|-------|-------|-----|-------|-------------|----------|
| (1) $v = v_0 + at$ | ✓ | K | ✓ | ✓ | | 1 |
| (2) $\Delta x = v_0 t + \frac{1}{2}at^2$ | ✓ | | ✓ | ✓ | ✓ | 2 |
| (3) $\Delta x = \frac{1}{2}(v_0 + v)t$ | ✓ | K | | ✓ | ✓ | 1 |
| (4) $v^2 = v_0^2 + 2a\Delta x$ | ✓ | K | ✓ | | ✓ | **1** ← SOLVE |

Row (4) has exactly one unknown: $v_0$ (the TARGET). I solve it. Done.

**Why the matrix works:** It converts the problem into a purely mechanical search: find the row with one blank cell, fill it, recalculate, repeat. You never ask "what should I do next?" You ask "which row has a 1 in the Unknowns column?" The matrix answers that question for you.

**When to use each strategy:**

| Situation | Best strategy |
|-----------|--------------|
| Problem has clear segments described by separate sets of numbers | Variable-Group (§5.4) |
| Variables are scattered across many equations without clear grouping | Equation Saturation (§5.5-1) |
| More than 4 equations and 6 variables — hard to track unknowns mentally | Equation-Variable Matrix (§5.5-2) |

All three strategies share one property: **they reduce physics to counting.** Count knowns. Count unknowns. Find the row with one blank. No picture. No trajectory. No intuition.

### §5.6 The Same Method Across Domains — Three Proofs

The variable-group method and the saturation method are not tricks for kinematics. They are general algorithms. The proof is that they solve problems in electricity, thermodynamics, and collisions with zero modification — the physics changes, the counting does not.

#### Example E1: Circuit Reduction by Variable-Group

> **Problem.** A $12\;\mathrm{V}$ battery connects to three resistors: $R_1 = 6.0\;\Omega$ and $R_2 = 3.0\;\Omega$ in parallel, with $R_3 = 4.0\;\Omega$ in series after the parallel pair. Find the current through $R_2$.

**Why the mapping is not obvious.** The numbers describe the whole circuit, but the answer lives in one branch. You cannot write a single equation that takes $12\;\mathrm{V}$, $6.0\;\Omega$, $3.0\;\Omega$, $4.0\;\Omega$ and directly outputs $I_2$. The circuit must be reduced stepwise.

**Variable-Group approach.** Group the variables by what they describe.

| Context | Variables | Known? |
|---------|-----------|--------|
| Parallel pair ($R_1 \parallel R_2$) | $R_1 = 6.0$, $R_2 = 3.0$, $R_{12}$ (equivalent), $V_{12}$, $I_1$, $I_2$ | $R_1$, $R_2$ known |
| Series combination | $R_{12}$, $R_3 = 4.0$, $R_{\text{total}}$, $I_{\text{total}}$ | $R_3$ known, $R_{12}$ from context above |
| Battery | $V = 12$, $I_{\text{total}}$, $R_{\text{total}}$ | $V$ known, $R_{\text{total}}$ from context above |

**Richest context first:** The parallel pair has two knowns ($R_1$, $R_2$). Equation: $\frac{1}{R_{12}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{6.0} + \frac{1}{3.0} = \frac{1}{2}$. So $R_{12} = 2.0\;\Omega$.

**Transfer:** $R_{12} = 2.0\;\Omega$ becomes KNOWN in the Series context.

Series context now: $R_{12} = 2.0$, $R_3 = 4.0$ → $R_{\text{total}} = 2.0 + 4.0 = 6.0\;\Omega$.

**Transfer:** $R_{\text{total}} = 6.0\;\Omega$ becomes KNOWN in the Battery context.

Battery context: $V = 12$, $R_{\text{total}} = 6.0$ → $I_{\text{total}} = 12/6.0 = 2.0\;\mathrm{A}$.

**Transfer backward:** $I_{\text{total}} = 2.0\;\mathrm{A}$ flows through $R_3$ (series). $V_3 = 2.0 \times 4.0 = 8.0\;\mathrm{V}$. Remaining voltage across parallel pair: $V_{12} = 12 - 8.0 = 4.0\;\mathrm{V}$.

$I_2 = V_{12}/R_2 = 4.0/3.0 = 1.33\;\mathrm{A}$. TARGET reached.

No diagram. No "current flow visualization." Just groups, knowns, equations, transfers.

#### Example E2: Thermodynamic Process by Equation Saturation

> **Problem.** $0.50\;\mathrm{mol}$ of an ideal gas at $P_1 = 4.0\;\mathrm{atm}$, $V_1 = 3.0\;\mathrm{L}$ expands isothermally to $V_2 = 9.0\;\mathrm{L}$. Then it is compressed adiabatically back to $V_3 = 3.0\;\mathrm{L}$. ($\gamma = 1.4$). Find the final pressure $P_3$.

**Why the mapping is not obvious.** Two different processes with different equations. Isothermal uses $PV = \text{constant}$. Adiabatic uses $PV^\gamma = \text{constant}$. The final state of process 1 is the initial state of process 2. The variables form a chain.

**Equation Saturation approach.** List every relevant equation. Mark knowns and unknowns after each solve.

**Context 1 (isothermal expansion, $1 \to 2$):**

Variables: $P_1 = 4.0$ (KNOWN), $V_1 = 3.0$ (KNOWN), $V_2 = 9.0$ (KNOWN), $P_2$ (UNKNOWN), $T$ (UNKNOWN but constant — will cancel).

Equations available for isothermal:
- (I1) $P_1 V_1 = P_2 V_2$ — unknowns: $\{P_2\}$ → **1 unknown. SOLVE.**

$P_2 = P_1 \cdot V_1/V_2 = 4.0 \times 3.0/9.0 = 1.33\;\mathrm{atm}$. $P_2$ now KNOWN.

**Context 2 (adiabatic compression, $2 \to 3$):**

Variables: $P_2 = 1.33$ (KNOWN), $V_2 = 9.0$ (KNOWN), $V_3 = 3.0$ (KNOWN), $P_3$ (TARGET), $\gamma = 1.4$ (KNOWN).

Equations available for adiabatic:
- (A1) $P_2 V_2^\gamma = P_3 V_3^\gamma$ — unknowns: $\{P_3\}$ → **1 unknown. SOLVE.**

$P_3 = P_2 \cdot (V_2/V_3)^\gamma = 1.33 \times (9.0/3.0)^{1.4} = 1.33 \times 3^{1.4}$.

$3^{1.4} = 3^{7/5} = (3^7)^{1/5}$. Approximate: $3^{1.4} \approx 4.66$. $P_3 = 1.33 \times 4.66 = 6.20\;\mathrm{atm}$.

TARGET reached. Two equations. Two solves. No process visualization needed — only the mechanical rule: isothermal → $PV$ constant, adiabatic → $PV^\gamma$ constant. The word "isothermal" triggers one equation; "adiabatic" triggers the other. The bridge variable $P_2$ transfers between them.

#### Example E3: Collision-to-Spring by Variable-Group

> **Problem.** A $0.050\;\mathrm{kg}$ bullet traveling at $300\;\mathrm{m/s}$ embeds in a $2.0\;\mathrm{kg}$ block resting on a frictionless surface. The block is attached to a spring ($k = 800\;\mathrm{N/m}$). Find the maximum compression of the spring.

**Why the mapping is not obvious.** Two completely different physics domains in sequence: first a collision (momentum conservation), then spring compression (energy conservation). The bullet embeds — perfectly inelastic collision. The block+bullet then compresses the spring. The final velocity from the collision becomes the initial velocity for the compression. Two contexts, one bridge.

**Variable-Group approach.**

| Context | Variables | Physics domain |
|---------|-----------|----------------|
| Collision | $m_b = 0.050$, $v_b = 300$, $m_w = 2.0$, $v_w = 0$, $v_f$ (final velocity of block+bullet) | Momentum |
| Spring compression | $M = m_b + m_w = 2.05$, $v_f$, $k = 800$, $x_{\max}$ (TARGET) | Energy |

**Richest context first:** Collision has four knowns ($m_b$, $v_b$, $m_w$, $v_w = 0$). One equation applies (perfectly inelastic collision):

$$m_b v_b + m_w \cdot 0 = (m_b + m_w)v_f$$
$$v_f = \frac{0.050 \times 300}{2.05} = 7.32\;\mathrm{m/s}$$

**Transfer:** $v_f = 7.32\;\mathrm{m/s}$ becomes KNOWN in the Spring context.

**Spring context:** Kinetic energy of block+bullet converts entirely to spring potential energy (frictionless surface, no energy loss after collision).

$$\frac{1}{2}M v_f^2 = \frac{1}{2}k x_{\max}^2$$

Cancel $\frac{1}{2}$, solve for $x_{\max}$:

$$x_{\max} = v_f \sqrt{\frac{M}{k}} = 7.32 \times \sqrt{\frac{2.05}{800}} = 7.32 \times \sqrt{0.00256} = 7.32 \times 0.0506 = 0.370\;\mathrm{m}$$

**Reflect:**
- Dimensional check: $\mathrm{m/s} \times \sqrt{\mathrm{kg} / (\mathrm{N/m})} = \mathrm{m/s} \times \sqrt{\mathrm{kg} / (\mathrm{kg/s^2})} = \mathrm{m/s} \times \mathrm{s} = \mathrm{m}$. ✓
- The bullet's kinetic energy: $\frac{1}{2}(0.050)(300)^2 = 2250\;\mathrm{J}$. Spring energy at max compression: $\frac{1}{2}(800)(0.370)^2 = 54.8\;\mathrm{J}$. The collision converted 97.6% of the bullet's energy to heat and deformation — only the block+bullet's kinetic energy after collision ($55.0\;\mathrm{J}$) transferred to the spring. ✓

**What this teaches:** Two domains that seem unrelated — momentum and energy — connect through a single bridge variable ($v_f$). The variable-group method does not care that the physics changes from momentum to energy. It only cares that a variable appears in both contexts. Find it. Solve the richer context. Transfer. Repeat.

#### The Universal Pattern

Every example above — kinematics (window), circuits, thermodynamics, collision-spring — follows the identical pattern:

1. **Identify contexts** by reading for grouped numbers.
2. **Count knowns per context.** Solve the richest context.
3. **Find the bridge** — the variable that appears in multiple contexts.
4. **Transfer and repeat** until the TARGET context is solved.

The physics content changes. The pattern does not.

---

# Part VI: The Universal Procedure

Every problem in this document was solved with five identical steps:

| Step | Mechanical action | Do NOT do |
|------|-------------------|-----------|
| **I**dentify | Variable table + coordinate system + §0.4 law lookup | Do not "understand" — extract. |
| **S**implify | Frictionless? massless? symmetry? conserved quantity? | Do not guess. Use §0.4 keywords. |
| **E**quation | Write the law. Count unknowns vs. equations. | Do not substitute numbers yet. |
| **E**xecute | Solve algebraically. Numbers last. Include units. | Do not skip steps. |
| **R**eflect | Dimensions (§0.2) + limiting cases + independent check. | Do not ask "does it feel right?" Ask "does it pass the tests?" |

---

## Closing: What You Have Learned

You have a mechanical system that solves physics problems without intuition:

1. **Before thinking:** Extract numbers into a variable table, look up keywords to find the law, declare your coordinate system.
2. **Solve:** I-SEE-R — Identify, Simplify, Equation, Execute, Reflect.
3. **Verify:** Dimensional analysis, limiting cases, independent method.

The procedure does not change. From a falling stone (Example 1) to a guitar string (Example 7), the steps are identical. The physics content changes. The method endures.

---

## Quick-Reference Card

### ① The 4-Pass Extraction Algorithm (§0.4)

| Pass | Action |
|------|--------|
| 1 | Read once. No writing. |
| 2 | Extract every number + unit $\to$ Variable Table. |
| 3 | Underline physics words $\to$ look up in §0.4 $\to$ primary law. |
| 4 | Underline question $\to$ mark unknown `?` in table. |

### ② Coordinate System Template (§0.1)

```
+x: _______________  (Rule 1: direction of primary motion)
+y: _______________  (Rule 2: upward, or ⊥ away from incline)
Origin: _______________  (Rule 3: starting position, or given reference)
t = 0: _______________  (Rule 4: instant action begins)

→ g = ±___ m/s²  (sign: opposite of +y)
```

### ③ Dimension Quick-Lookup (§0.2)

| Quantity | Dimension |
|----------|-----------|
| Speed, $v$ | $[L][T]^{-1}$ |
| Acceleration, $a$ | $[L][T]^{-2}$ |
| Force, $F$ | $[M][L][T]^{-2}$ |
| Energy, $E$, $K$, $U$ | $[M][L]^2[T]^{-2}$ |
| Momentum, $p$ | $[M][L][T]^{-1}$ |
| Electric charge, $q$ | $[Q]$ |
| Voltage, $V$ | $[M][L]^2[Q]^{-1}[T]^{-2}$ |
| Magnetic field, $B$ | $[M][Q]^{-1}[T]^{-1}$ |
| Resistance, $R$ | $[M][L]^2[Q]^{-2}[T]^{-1}$ |

### ④ The I-SEE-R Procedure

| Step | Action |
|------|--------|
| **I**dentify | Table + coordinates + law |
| **S**implify | Approximations, symmetries, conservation |
| **E**quation | Write law. Count unknowns. No numbers yet. |
| **E**xecute | Algebra first. Numbers last. Include units. |
| **R**eflect | Dimensions + limiting cases + independent check |

### ⑤ Kinematic Equations (constant $a$)

5 variables: $v_0$, $v$, $a$, $t$, $\Delta x$. **Know 3 $\to$ find the other 2.**

| You need | Missing | Use |
|----------|---------|-----|
| $v$ | $\Delta x$ | $v = v_0 + at$ |
| $\Delta x$ | $v$ | $\Delta x = v_0t + \frac{1}{2}at^2$ |
| $\Delta x$ | $a$ | $\Delta x = \frac{1}{2}(v_0+v)t$ |
| $v$ | $t$ | $v^2 = v_0^2 + 2a\Delta x$ |

### ⑥ Key Formula Cheat Sheet

**Mechanics:**
$$F=ma \qquad f_k=\mu_k N \qquad f_s\le\mu_s N \qquad F_s=-kx$$
$$K=\tfrac12 mv^2 \qquad U_g=mgh \qquad U_s=\tfrac12 kx^2 \qquad W=Fd\cos\theta$$
$$p=mv \qquad J=F\Delta t=\Delta p \qquad \Sigma p_i=\Sigma p_f \qquad a_c=\frac{v^2}{R}$$

**E&M:**
$$F=k\frac{\lvert q_1q_2\rvert}{r^2} \quad F=qE \quad V=IR \quad P=IV$$
$$R_s=R_1+R_2 \quad \frac{1}{R_p}=\frac{1}{R_1}+\frac{1}{R_2} \quad Q=CV$$
$$F=qvB\sin\theta \quad F=ILB\sin\theta \quad r=\frac{mv}{qB}$$

**Thermo:**
$$PV=nRT \quad \frac{P_1V_1}{T_1}=\frac{P_2V_2}{T_2} \quad PV^\gamma=\text{const}$$
$$\eta_{\text{Carnot}}=1-\frac{T_C}{T_H}$$

**Waves:**
$$\omega=\sqrt{\frac{k}{m}} \quad T=\frac{2\pi}{\omega} \quad v=\sqrt{\frac{F_T}{\mu}} \quad f_n=n\frac{v}{2L}$$
