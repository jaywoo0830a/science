# Physics Without Intuition

## A Complete Guide for the Non-Intuitive Thinker

---

## Prologue: The Gift of Not Seeing

Every physics textbook ever written makes the same silent assumption: when you read *"a ball rolls down an inclined plane,"* a picture forms in your mind. You feel the acceleration. You know, before any calculation, that a heavier ball does not fall faster than a light one.

If you cannot do this -- if the words remain words, and the equations remain equations, and the connection between them feels like fog -- this article is for you.

Here is what no one tells you: **this is not a defect.** The history of physics is filled with discoveries that violated every intuition available to the human senses. Quantum mechanics. Special relativity. A magnet falling through a copper tube slowing as if sinking through honey. None of these were discovered by "feeling." They were discovered by trusting the mathematics when the intuition failed.

You are training a skill that intuitive people never develop: **the ability to proceed correctly when the answer feels wrong.** That skill is worth more than any natural gift.

But before we can apply the method, we must address a deeper problem. Most methods say: "set up a coordinate system" and "use dimensional analysis." But what if even *those* steps feel impossible? What if you do not know which direction is $+$, or what $[L][T]^{-1}$ means, or why it matters?

That is where we begin.

---

# Part 0: The Pre-Method -- Tools You Need Before You Start

This section exists because the standard advice fails you. "Choose a coordinate system" assumes you know what a coordinate system is and how to choose one. "Check the dimensions" assumes you know the dimensions of every quantity. If you do not, read this part first. It contains no physics problems. It contains only the meta-tools that make the actual method possible.

---

## 0.1 The Coordinate System: A Fill-in-the-Blanks Contract

### What "Setting Up a Coordinate System" Actually Means

You are not doing physics when you set up a coordinate system. You are making an **agreement with yourself** about how to translate directions into signs. The agreement has exactly four parts:

1. **Where is zero?** (the origin)
2. **Which way is $+x$?** (horizontal positive direction)
3. **Which way is $+y$?** (vertical positive direction)
4. **When is $t=0$?** (the clock start)

That is all. There is no physics content in any of these decisions. They are arbitrary. They cannot be right or wrong. They can only be **consistent or inconsistent** with the rest of your work.

### The Mechanical Procedure (No Choices Required)

Do not *think* about which coordinate system to use. Follow these rules:

**Rule 1: The $+x$ direction.** Always set $+x$ to be the direction the object *starts* moving, or the direction it *primarily* moves. If the problem says "a car drives east," set $+x$ = east. If it says "a block slides down an incline," set $+x$ = down the incline. No exceptions.

**Rule 2: The $+y$ direction.** Always set $+y$ to be upward (away from the ground) unless you are on an incline. If you are on an incline, set $+y$ to be perpendicular to the incline surface, pointing *away* from the surface. No exceptions.

**Rule 3: The origin.** Always set the origin to be the starting position of the object you care about most, unless the problem explicitly defines a reference point (like "the ground"). If there are multiple objects, set the origin at the position of the first object mentioned, at $t=0$.

**Rule 4: $t=0$.** Always set $t=0$ to be the instant the "action" begins -- the throw, the release, the start of motion, the collision. If multiple events occur, pick the first one.

### The Fill-in-the-Blanks Template

Every time you start a problem, write this exactly:

```
COORDINATE SYSTEM DECLARATION
─────────────────────────────
+x direction: _______________ (use Rule 1)
+y direction: _______________ (use Rule 2)
Origin:       _______________ (use Rule 3)
t = 0 at:     _______________ (use Rule 4)

Consequences:
  g = ±____ m/s^2   (sign: opposite of +y direction)
  v0x = ±____ m/s   (sign: + if along +x, - if opposite)
  v0y = ±____ m/s   (sign: + if along +y, - if opposite)
  x0 = ____ m       (initial position in this coordinate system)
  y0 = ____ m       (initial position in this coordinate system)
```

Fill the blanks. Do not second-guess. The rules tell you exactly what to write. If you follow the rules, the signs will be correct. The algebra will produce the correct physical answer.

### The One Rule That Prevents All Sign Errors

> **After you fill in the template, never change your coordinate system during the problem.** Even if a velocity comes out negative, even if it feels wrong. Trust the algebra. The sign of the answer tells you the direction relative to your chosen axes. A negative answer is not wrong -- it means "opposite to the $+$ direction."

---

## 0.2 Dimensional Analysis: The Three-Step Mechanical Recipe

### Why Dimensional Analysis Exists

Dimensional analysis is the only verification tool that works for *every* physics problem, in *every* topic, at *every* level. It requires zero intuition. It requires only that you know the dimensions of the quantities involved. This section gives you those dimensions and a mechanical recipe for using them.

### Step 1: Memorize the Dimensions of the Seven Base Quantities

Every quantity in Honors Physics has dimensions composed from these three building blocks:

| Building block | Symbol | Examples of quantities with this dimension |
|----------------|--------|---------------------------------------------|
| Mass | $[M]$ | mass ($m$), density |
| Length | $[L]$ | position ($x$), displacement ($\Delta x$), distance, height ($h$), wavelength ($\lambda$) |
| Time | $[T]$ | time ($t$), period ($T$) |

Three more appear in E&M and thermodynamics:

| Building block | Symbol | Examples |
|----------------|--------|----------|
| Temperature | $[\Theta]$ | temperature ($T$ in kelvin) |
| Electric charge | $[Q]$ | charge ($q$, $Q$) |
| Amount of substance | $[N]$ | moles ($n$) |

### Step 2: Derive the Dimensions of Any Quantity From Its Definition

You do not need to memorize the dimensions of every quantity. You derive them from the defining formula. The mechanical procedure:

1. Write the quantity's **definition equation**.
2. Replace each symbol on the right side with its dimensions.
3. Simplify algebraically (treat $[M]$, $[L]$, $[T]$ as algebraic symbols).

**Example.** Derive the dimensions of force.

Definition: $F = ma$.
Dimensions of $m$: $[M]$.
Dimensions of $a$: acceleration = velocity/time = $[L][T]^{-1}/[T] = [L][T]^{-2}$.
Dimensions of $F$: $[M] \times [L][T]^{-2} = [M][L][T]^{-2}$.

**Example.** Derive the dimensions of energy.

Definition: $K = \frac{1}{2}mv^2$ (kinetic energy).
Dimensions: $[M] \times ([L][T]^{-1})^2 = [M][L]^2[T]^{-2}$.
(The factor $\frac{1}{2}$ is dimensionless and contributes nothing.)

### Step 3: Use Dimensions to Verify Any Equation

Given any equation you have written or derived:

1. Compute the dimensions of the left side.
2. Compute the dimensions of the right side.
3. If they are equal, the equation is *dimensionally consistent* (it passes the test). If they differ, the equation is **certainly wrong** -- no exceptions.

**Example.** A student writes $v = \frac{1}{2}at$ for final velocity. Is this dimensionally correct?

Left: $v = [L][T]^{-1}$.
Right: $\frac{1}{2}at = [L][T]^{-2} \times [T] = [L][T]^{-1}$.
Both sides are $[L][T]^{-1}$. Pass. (The equation is actually $v = at$ without the $\frac{1}{2}$; dimensional analysis cannot catch missing dimensionless constants, but it catches unit errors.)

**Example.** A student writes $v^2 = 2ax$ for a kinematics relationship. Is this dimensionally correct?

Left: $v^2 = ([L][T]^{-1})^2 = [L]^2[T]^{-2}$.
Right: $2ax = [L][T]^{-2} \times [L] = [L]^2[T]^{-2}$.
Pass. (The equation is actually correct: $v^2 = v_0^2 + 2a\Delta x$, with $v_0=0$.)

**Example.** A student writes $F = mg + v$. Is this dimensionally correct?

Left: $F = [M][L][T]^{-2}$.
Right: $mg + v = [M][L][T]^{-2} + [L][T]^{-1}$.
These are different dimensions. They cannot be added. The equation is **certainly wrong**.

### Quick-Reference Dimension Table

When you cannot remember a dimension, look it up here:

| Quantity | Derivation | Dimensions |
|----------|-----------|------------|
| Speed, velocity ($v$) | $\Delta x / \Delta t$ | $[L][T]^{-1}$ |
| Acceleration ($a$) | $\Delta v / \Delta t$ | $[L][T]^{-2}$ |
| Force ($F$) | $ma$ | $[M][L][T]^{-2}$ |
| Energy, work ($E$, $W$, $K$, $U$) | $Fd$ or $\frac{1}{2}mv^2$ | $[M][L]^2[T]^{-2}$ |
| Momentum ($p$) | $mv$ | $[M][L][T]^{-1}$ |
| Impulse ($J$) | $F\Delta t$ | $[M][L][T]^{-1}$ |
| Pressure ($P$) | $F/A$ | $[M][L]^{-1}[T]^{-2}$ |
| Frequency ($f$) | $1/T$ | $[T]^{-1}$ |
| Angular frequency ($\omega$) | $2\pi f$ | $[T]^{-1}$ |
| Spring constant ($k$) | $F/x$ | $[M][T]^{-2}$ |
| Electric charge ($q$) | (base quantity) | $[Q]$ |
| Electric field ($E$) | $F/q$ | $[M][L][Q]^{-1}[T]^{-2}$ |
| Electric potential ($V$) | $U/q$ | $[M][L]^2[Q]^{-1}[T]^{-2}$ |
| Magnetic field ($B$) | $F/(qv)$ | $[M][Q]^{-1}[T]^{-1}$ |
| Resistance ($R$) | $V/I$ | $[M][L]^2[Q]^{-2}[T]^{-1}$ |
| Capacitance ($C$) | $Q/V$ | $[M]^{-1}[L]^{-2}[Q]^2[T]^2$ |

---

## 0.3 The Variable Table: Your First Action for Every Problem

Before you think about any problem, draw this table and fill it:

```
Variable    Symbol   Value   Unit      Dimension
──────────────────────────────────────────────────
(1)          ___      ___     ___       ___
(2)          ___      ___     ___       ___
(3)          ___      ___     ___       ___
(4)          ___      ___     ___       ___
(5)          ___      ___     ___       ___
...
```

**Rules for filling the table:**

1. **Read the problem and extract every number.** Each number goes in the "Value" column with its unit.
2. **Identify what is being asked for.** Put a `?` in its Value cell.
3. **For every row, fill in the Dimension column.** Use §0.2.
4. **The Dimension column is your safety net.** If your final answer has dimensions different from what this column says, you made an error.

---

# Part I: Mechanics

Mechanics is supposed to be easy. You can see a ball move. You can feel a push. This is precisely why it is hard for you: everyone else is using a sense you do not have. The solution is to treat mechanics as a set of algebraic rules applied to symbols. Nothing more.

---

## 1.1 Beginner: The 1D Acceleration Problem

**Problem.** A car starts from rest and accelerates at $3.0\ \mathrm{m/s^2}$ for $4.0\ \mathrm{s}$. How far does it travel?

### Complete Thought Trace

**Step I -- IDENTIFY.** We build the variable table. This is the first action. There is no thinking before this:

```
Variable    Symbol   Value   Unit        Dimension
────────────────────────────────────────────────────
Initial v    v0        0     m/s        [L][T]^{-1}
Final v      v         ?     m/s        [L][T]^{-1}
Accel         a       3.0    m/s^2      [L][T]^{-2}
Time          t       4.0    s          [T]
Displacement  Δx       ?     m          [L]
```

We know 3 variables ($v_0$, $a$, $t$). By the 5-variable rule, we can find the other 2.

**Coordinate system:** Using the rules from §0.1: $+x$ = direction of motion. Origin = starting point. $t=0$ = start.

**Step S -- SIMPLIFY.** Constant acceleration is stated. No friction, no air resistance. One object. Single dimension.

**Step E -- EQUATION.** We want $\Delta x$. We know $v_0$, $a$, $t$. We do not know $v$. The equation that omits $v$ is:

$$\Delta x = v_0 t + \frac{1}{2} a t^2$$

*Why this equation?* The decision rule from the kinematic set: if the missing variable is $v$, use equation (2). We do not need to understand *why* the equation has this form. We apply the rule.

**Step E -- EXECUTE.** Substitute:

$$\begin{aligned}
\Delta x &= (0)(4.0) + \frac{1}{2}(3.0)(4.0)^2 \\[4pt]
&= 0 + \frac{1}{2}(3.0)(16.0) \\[4pt]
&= 24.0\ \mathrm{m}
\end{aligned}$$

**Step R -- REFLECT.**

*Dimensional check (using §0.2):* The right side is $[L][T]^{-2} \times [T]^2 = [L]$. The answer $24.0\ \mathrm{m}$ has dimensions $[L]$. Pass.

*Special case check:* If $a = 0$, then $\Delta x = 0$. A stationary car should not move. Pass.

*Alternative method:* Average velocity $\bar{v} = \frac{0 + at}{2} = \frac{12}{2} = 6\ \mathrm{m/s}$. Distance = $\bar{v} \cdot t = 6 \times 4 = 24\ \mathrm{m}$. The two methods agree. Pass.

**Answer: $24.0\ \mathrm{m}$.**

> **Key insight:** The variable table *is* the thinking. You do not picture the car. The table tells you which equation to pick. The Dimension column tells you whether your answer has the right units. The table is your prosthetic intuition.

---

## 1.2 Beginner-Advanced Bridge: Free Fall with Sign Discipline

**Problem.** A stone is thrown upward from a $45\ \mathrm{m}$ high rooftop at $10\ \mathrm{m/s}$. When does it hit the ground? ($g = 10\ \mathrm{m/s^2}$)

*This problem destroys intuitive students because the stone goes UP first, then DOWN. The mental movie scrambles. We will not make a mental movie.*

### Complete Thought Trace

**Step I -- IDENTIFY.**

```
Variable    Symbol   Value   Unit        Dimension
────────────────────────────────────────────────────
Initial y    y0       45     m          [L]
Final y      y         0     m          [L]
Initial vy   v0y      +10    m/s        [L][T]^{-1}
ay           ay       -10    m/s^2      [L][T]^{-2}
Time          t        ?     s          [T]
```

**Coordinate system (using §0.1 template):**

```
+x direction: horizontal, doesn't matter (1D vertical problem)
+y direction: upward  (Rule 2)
Origin:       ground, y=0  (Rule 3 -- ground is the reference)
t=0 at:       the instant the stone is thrown  (Rule 4)

Consequences:
  g = -10 m/s^2   (opposite of +y)
  v0y = +10 m/s   (along +y)
  y0 = 45 m       (starting height above ground)
```

**Step S -- SIMPLIFY.** Constant acceleration ($a_y = -g$). Single object. No air resistance.

**Step E -- EQUATION.** We know $y_0$, $y$, $v_{0y}$, $a_y$. We want $t$. The displacement is:

$$\Delta y = y - y_0 = 0 - 45 = -45\ \mathrm{m}$$

We do not know $v_y$, so we use the equation that omits $v$:

$$\Delta y = v_{0y} t + \frac{1}{2} a_y t^2$$

**Step E -- EXECUTE.**

$$\begin{aligned}
-45 &= 10t + \frac{1}{2}(-10)t^2 \\[4pt]
-45 &= 10t - 5t^2 \\[4pt]
5t^2 - 10t - 45 &= 0 \\[4pt]
t^2 - 2t - 9 &= 0
\end{aligned}$$

$$t = \frac{2 \pm \sqrt{4 + 36}}{2} = \frac{2 \pm \sqrt{40}}{2} = \frac{2 \pm 6.32}{2}$$

$t = 4.16\ \mathrm{s}$ or $t = -2.16\ \mathrm{s}$. Negative time is unphysical. **$t = 4.16\ \mathrm{s}$.**

**Step R -- REFLECT.**

*Compare with simpler cases (same method, different initial conditions):*

| Case | $v_{0y}$ | Equation | $t$ | Expected ordering |
|------|----------|----------|-----|-------------------|
| Thrown downward | $-10$ | $-45 = -10t - 5t^2$ | $2.16\ \mathrm{s}$ | Fastest ✓ |
| Simply dropped | $0$ | $-45 = -5t^2$ | $3.0\ \mathrm{s}$ | Middle ✓ |
| Thrown upward | $+10$ | $-45 = 10t - 5t^2$ | $4.16\ \mathrm{s}$ | Slowest ✓ |

*Dimensional check:* The quadratic gave $t$ in seconds ($[T]$). ✓

*Sign discipline check:* We never changed the coordinate system mid-problem. The upward throw went up, came down, and we never adjusted our signs. The algebra handled it automatically. ✓

**Answer: $4.16\ \mathrm{s}$.**

> **Key insight:** The stone went up, stopped, and came down -- and we did not think about any of it. We wrote $\Delta y = -45\ \mathrm{m}$, plugged into the equation, and solved a quadratic. The math handled the "up then down" because $a_y$ was constant and negative throughout. This is the power of the one-time coordinate choice: you set it, forget it, and trust the algebra.

---

## 1.3 Advanced: The Wedge-Block Problem

**Problem.** A block of mass $m$ slides down a wedge of mass $M$ resting on a frictionless horizontal surface. The wedge angle is $\theta$. No friction between block and wedge. Find the wedge's acceleration.

### Complete Thought Trace

**Step I -- IDENTIFY.** Two objects. Wedge accelerates horizontally. Block accelerates both down the incline and with the wedge.

*Relevant laws:* Newton's Second Law per object. Constraint: block stays on the wedge surface.

**Coordinate systems (both using §0.1 Rule 1 for primary motion):**
- Wedge: $+X$ = direction wedge moves when pushed.
- Block: $+x$ = down the incline. $+y$ = perpendicular to incline, away from surface.

*Why two different coordinate systems?* Because each simplifies the $\sum F = ma$ for its object. The wedge moves only horizontally. The block moves along and perpendicular to the incline.

**Step S -- SIMPLIFY.** No friction anywhere. Only external force is gravity. The contact force $N$ is an action-reaction pair.

**Step E -- EQUATION.**

*FBD for wedge ($M$):* Gravity cancelled by ground normal. Block pushes into the incline with $N$, whose horizontal component $-N\sin\theta$ accelerates the wedge.

$$-N\sin\theta = M A \tag{1}$$

*FBD for block ($m$):* Gravity resolved into components $mg\sin\theta$ (down incline) and $mg\cos\theta$ (into incline). Normal $N$ is $+y$. The block's *ground-frame* acceleration has two contributions: wedge's acceleration $A$ (horizontal) plus sliding $a_r$ (down incline). Resolving into incline coordinates:

Along $+x$: $a_x = a_r - A\cos\theta$ (sliding down minus wedge carrying block up-incline).

Along $+y$: $a_y = -A\sin\theta$ (wedge's horizontal motion pushes block into surface).

Now $F=ma$ for the block:

$$mg\sin\theta = m(a_r - A\cos\theta) \tag{2}$$
$$N - mg\cos\theta = m(-A\sin\theta) \tag{3}$$

**Step E -- EXECUTE.** Three equations, three unknowns ($A$, $a_r$, $N$).

From (1): $N = MA/\sin\theta$ (taking magnitudes; direction noted separately).

From (3): $\displaystyle \frac{MA}{\sin\theta} - mg\cos\theta = -mA\sin\theta$.

$$\begin{aligned}
MA - mg\sin\theta\cos\theta &= -mA\sin^2\theta \\[4pt]
A(M + m\sin^2\theta) &= mg\sin\theta\cos\theta \\[4pt]
A &= \frac{mg\sin\theta\cos\theta}{M + m\sin^2\theta}
\end{aligned}$$

**Step R -- REFLECT.** We cannot *feel* this answer. We use the §0.2 dimensional check and limiting cases:

*Dimensional check:* Numerator $[M][L][T]^{-2}\times 1 \times 1 = [M][L][T]^{-2}$. Denominator $[M] + [M]\times 1 = [M]$. Result $[L][T]^{-2}$ = acceleration. ✓

*Limiting-case verification (the non-intuitive person's replacement for intuition):*

| Test | Input | Expected | Formula Result | Pass? |
|------|-------|----------|---------------|-------|
| Immovable wedge | $M \to \infty$ | $A \to 0$ | $A \to 0$ | Yes |
| Flat surface | $\theta \to 0$ | $A \to 0$ | $\sin 0 = 0 \to A = 0$ | Yes |
| Vertical wall | $\theta \to 90^\circ$ | $A \to 0$ | $\cos 90^\circ = 0 \to A = 0$ | Yes |
| Light block | $m \to 0$ | $A \to 0$ | $A \to 0$ | Yes |
| Light wedge | $M \to 0$ | $A \to g\cot\theta$ | $A = \frac{mg\sin\theta\cos\theta}{m\sin^2\theta} = g\cot\theta$ | Yes |

*Alternative verification:* Horizontal momentum of (wedge + block) is conserved (no external horizontal forces). At any time $t$, momentum: $0 = M(-A) + m(-A + a_r t\cos\theta)$. Differentiating and substituting $A$ and $a_r$ confirms consistency.

**Answer:**

$$A = \frac{mg\sin\theta\cos\theta}{M + m\sin^2\theta}$$

> **Key insight:** This problem tortures intuition. Two objects move in different directions simultaneously. Constraints couple them. But the **procedure** -- draw FBDs, choose coordinates per §0.1, write $F=ma$ per object, add constraints, solve, verify with §0.2 dimensions and limiting cases -- is identical to a single block on a table. Complexity requires discipline, not intuition.

---

## 1.4 Engineering: Highway Braking Distance

**Problem.** A civil engineer must determine safe following distance for a highway with speed limit $100\ \mathrm{km/h}$. Driver reaction time is $0.7\ \mathrm{s}$. Maximum safe deceleration on wet asphalt is $5.0\ \mathrm{m/s^2}$. (a) Find total stopping distance on level ground. (b) How much does a $5\%$ downhill grade increase it?

### Complete Thought Trace

**Step I -- IDENTIFY.** Two sequential phases:

*Phase 1 (reaction):* $v_0 = 100\ \mathrm{km/h} = 27.8\ \mathrm{m/s}$, $a = 0$, $t_1 = 0.7\ \mathrm{s}$. Want $\Delta x_1$.

*Phase 2 (braking, level):* $v_0 = 27.8\ \mathrm{m/s}$, $v = 0$, $a = -5.0\ \mathrm{m/s^2}$. Want $\Delta x_2$.

*Phase 2 (grade):* $a = -(5.0 - g\sin\theta)$ where $\sin\theta \approx \tan\theta = 0.05$.

**Step E -- EQUATION.**

Phase 1: $\Delta x_1 = v_0 t_1$. (Uniform motion.)

Phase 2: We know $v_0$, $v$, $a$. Want $\Delta x$. Missing $t$ → use $v^2 = v_0^2 + 2a\Delta x_2$.

**Step E -- EXECUTE.**

**(a) Level ground.**

$$\begin{aligned}
\Delta x_1 &= 27.8 \times 0.7 = 19.5\ \mathrm{m} \\[4pt]
0 &= (27.8)^2 + 2(-5.0)\Delta x_2 \\[4pt]
\Delta x_2 &= \frac{773}{10} = 77.3\ \mathrm{m}
\end{aligned}$$

Total: $19.5 + 77.3 = 96.8\ \mathrm{m}$.

**(b) $5\%$ downhill grade.** Grade means $\tan\theta = 0.05$. For small angles, $\sin\theta \approx \tan\theta = 0.05$. Gravity adds $g\sin\theta = 9.8 \times 0.05 = 0.49\ \mathrm{m/s^2}$ along the motion, reducing effective deceleration:

$$\begin{aligned}
a_{\mathrm{eff}} &= -5.0 + 0.49 = -4.51\ \mathrm{m/s^2} \\[4pt]
\Delta x_2' &= \frac{(27.8)^2}{2 \times 4.51} = \frac{773}{9.02} = 85.7\ \mathrm{m}
\end{aligned}$$

Total on grade: $19.5 + 85.7 = 105.2\ \mathrm{m}$.

**Step R -- REFLECT.**

*Dimensional check:* All distances in $\mathrm{m}$, speeds in $\mathrm{m/s}$, accelerations in $\mathrm{m/s^2}$. ✓

*Engineering analysis:* The grade adds $8.4\ \mathrm{m}$ -- roughly one car length. At $100\ \mathrm{km/h}$, the car covers $27.8\ \mathrm{m/s}$, so the extra distance corresponds to hitting an obstacle at about $30\ \mathrm{km/h}$ instead of stopping. **Conclusion:** Reduce speed limits or increase following distances on downhill sections.

*Limiting case:* If $a \to 0$ (black ice), $\Delta x_2 \to \infty$ -- never stops. Correct. ✓

> **Key insight:** Engineering problems chain together basic physics segments. Each segment uses exactly one rule. Decompose. Apply. Sum.

---

# Part II: Electricity and Magnetism

No one -- intuitive or not -- has ever directly perceived an electric field. E&M is the great equalizer. Everyone succeeds by trusting the mathematics.

---

## 2.1 Beginner: Coulomb's Law

**Problem.** Charges $q_1 = +3.0\ \mu\mathrm{C}$ and $q_2 = -2.0\ \mu\mathrm{C}$ are $0.10\ \mathrm{m}$ apart. Find the force magnitude and direction. ($k = 9.0 \times 10^{9}\ \mathrm{N\,m^2/C^2}$)

### Complete Thought Trace

**Step I -- IDENTIFY.**

```
Variable    Symbol   Value                    Unit            Dimension
──────────────────────────────────────────────────────────────────────────
Charge 1     q1       +3.0 × 10^{-6}           C              [Q]
Charge 2     q2       -2.0 × 10^{-6}           C              [Q]
Distance      r        0.10                    m              [L]
Constant      k        9.0 × 10^{9}            N·m^2/C^2      [M][L]^3[Q]^{-2}[T]^{-2}
Force         F        ?                       N              [M][L][T]^{-2}
```

*Relevant law:* $F = k|q_1 q_2|/r^2$.

**Step S -- SIMPLIFY.** Point charges. Vacuum/air medium.

**Step E -- EXECUTE.**

$$\begin{aligned}
F &= (9.0 \times 10^{9}) \cdot \frac{(3.0 \times 10^{-6})(2.0 \times 10^{-6})}{(0.10)^2} \\[4pt]
&= (9.0 \times 10^{9}) \cdot \frac{6.0 \times 10^{-12}}{0.01} \\[4pt]
&= (9.0 \times 10^{9}) \cdot (6.0 \times 10^{-10}) = 5.4\ \mathrm{N}
\end{aligned}$$

**Direction rule (mechanical):** Opposite signs attract. Same signs repel. $q_1$ (+), $q_2$ ($-$) → **attractive.**

**Step R -- REFLECT.**

*Dimensional check:* $[M][L]^3[Q]^{-2}[T]^{-2} \times [Q]^2 / [L]^2 = [M][L][T]^{-2}$. ✓

*Distance scaling:* Doubling $r$ → $F/4 = 1.35\ \mathrm{N}$. Inverse square. ✓

*Sign reversal:* If $q_2$ were $+2.0\ \mu\mathrm{C}$, magnitude same, direction repulsive. ✓

**Answer: $5.4\ \mathrm{N}$, attractive.**

> **Key insight:** Coulomb's law and Newton's gravitation share the same algebraic structure: constant $\times$ property$_1$ $\times$ property$_2$ / distance$^2$. Recognize the pattern. Apply the same algebraic procedure.

---

## 2.2 Advanced: Compound Circuit Reduction

**Problem.** $R_1 = 4.0\ \Omega$ and $R_2 = 12.0\ \Omega$ in parallel, with $R_3 = 6.0\ \Omega$ in series. A $24\ \mathrm{V}$ battery powers the circuit. Find the current through $R_2$ and the voltage across it.

### Complete Thought Trace

**Step I -- IDENTIFY.** *Relevant laws:* $V = IR$ (Ohm). Series: $R_{\mathrm{eq}} = R_a + R_b$, current identical. Parallel: $1/R_{\mathrm{eq}} = 1/R_a + 1/R_b$, voltage identical.

**Step S -- SIMPLIFY.** Ideal wires and battery.

**Step E -- EXECUTE.** Reduction algorithm: innermost → outward.

*Phase 1: Reduce the parallel pair.*

$$\frac{1}{R_{12}} = \frac{1}{4.0} + \frac{1}{12.0} = \frac{3}{12} + \frac{1}{12} = \frac{4}{12} \quad\Rightarrow\quad R_{12} = 3.0\ \Omega$$

*Phase 2: Reduce series.*

$$R_{\mathrm{total}} = 3.0 + 6.0 = 9.0\ \Omega$$

*Phase 3: Total current.*

$$I_{\mathrm{total}} = \frac{24}{9.0} = \frac{8}{3} \approx 2.667\ \mathrm{A}$$

*Phase 4: Distribute backward.*

$R_3$ (series): $V_3 = \frac{8}{3} \times 6.0 = 16\ \mathrm{V}$.

Parallel pair voltage: $V_{12} = 24 - 16 = 8\ \mathrm{V}$.

$R_2$ (parallel): $I_2 = 8/12 = 2/3 \approx 0.667\ \mathrm{A}$. $V_2 = 8\ \mathrm{V}$.

**Step R -- REFLECT.**

*Consistency:* $I_1 = 8/4 = 2\ \mathrm{A}$. $I_1 + I_2 = 2.667\ \mathrm{A} = I_{\mathrm{total}}$. ✓

*Power:* $P_{\mathrm{total}} = 24 \times 8/3 = 64\ \mathrm{W}$. $P_1 + P_2 + P_3 = 16 + 5.33 + 42.67 = 64\ \mathrm{W}$. ✓

*Limiting case:* If $R_2 \to \infty$ (open), parallel becomes $R_1 = 4\ \Omega$, $R_{\mathrm{total}} = 10\ \Omega$, $I_2 \to 0$. Correct. ✓

**Answer: $I_2 = 0.667\ \mathrm{A}$, $V_2 = 8\ \mathrm{V}$.**

> **Key insight:** No mental picture of electrons. No water-pressure analogy. Two rules applied in a fixed order. Deterministic.

---

## 2.3 Engineering: The Mass Spectrometer

**Problem.** A velocity selector uses $E = 2000\ \mathrm{N/C}$ (up) and $B = 0.40\ \mathrm{T}$ (into page). Undeflected particles enter a $B$-only region where $r = mv/(qB)$. Singly ionized $^{12}$C ($m = 2.00 \times 10^{-26}\ \mathrm{kg}$, $q = 1.60 \times 10^{-19}\ \mathrm{C}$) gives $r_{12} = 0.156\ \mathrm{m}$. Find $r$ for $^{14}$C ($m = 2.34 \times 10^{-26}\ \mathrm{kg}$, same $q$).

### Complete Thought Trace

**Velocity selector:** $qE = qvB \Rightarrow v = E/B = 2000/0.40 = 5000\ \mathrm{m/s}$.

**Mass separation:** $mv^2/r = qvB \Rightarrow r = mv/(qB)$. Since $v = E/B$ for all particles, $r \propto m$ (same $q$).

$$\frac{r_{14}}{r_{12}} = \frac{m_{14}}{m_{12}} = \frac{2.34}{2.00} = 1.17$$

$$r_{14} = 1.17 \times 0.156 = 0.183\ \mathrm{m}$$

**Engineering significance:** A $17\%$ mass difference produces a $2.7\ \mathrm{cm}$ radius difference -- easily detectable. This enables carbon dating: measuring $^{14}$C/$^{12}$C ratios in organic samples using nothing but $F=qE$, $F=qvB$, and $F=mv^2/r$.

> **Key insight:** Science-fiction-sounding device. Three equations. No visualization needed.

---

# Part III: Thermodynamics

Strip away the metaphors ("heat flows like water") and thermodynamics becomes algebra.

---

## 3.1 Beginner: The Ideal Gas Law

**Problem.** Sealed gas at $P_1 = 2.0\ \mathrm{atm}$, $V_1 = 5.0\ \mathrm{L}$, $T_1 = 300\ \mathrm{K}$ is compressed to $V_2 = 2.0\ \mathrm{L}$ while heating to $T_2 = 450\ \mathrm{K}$. Find $P_2$.

### Complete Thought Trace

**Step I -- IDENTIFY.** State variables: $P$, $V$, $T$, $n$. For sealed container, $n$ constant.

*Law:* $P_1 V_1 / T_1 = P_2 V_2 / T_2$ (from $PV = nRT$ with $n$, $R$ constant).

**Step E -- EXECUTE.**

$$\begin{aligned}
P_2 &= P_1 \cdot \frac{V_1}{V_2} \cdot \frac{T_2}{T_1} \\[4pt]
&= 2.0 \cdot \frac{5.0}{2.0} \cdot \frac{450}{300} \\[4pt]
&= 2.0 \cdot 2.5 \cdot 1.5 = 7.5\ \mathrm{atm}
\end{aligned}$$

**Step R -- REFLECT.**

*Factor analysis:* Compression alone ($V$ halved) multiplies $P$ by $2.5$. Heating alone ($T$ up $50\%$) multiplies $P$ by $1.5$. Combined: $2.0 \times 2.5 \times 1.5 = 7.5$. ✓

*Isothermal limit:* If $T_2 = T_1$, $P_2 = 2.0 \times 5.0/2.0 = 5.0\ \mathrm{atm}$ (Boyle's law). ✓

**Answer: $7.5\ \mathrm{atm}$.**

> **Key insight:** $PV/T$ is constant. Four variables, one equation. The physics is in the proportionalities.

---

## 3.2 Advanced: Carnot Efficiency

**Problem.** A heat engine operates between $T_H = 800\ \mathrm{K}$ and $T_C = 300\ \mathrm{K}$, extracting $Q_H = 500\ \mathrm{J}$ per cycle. Find (a) maximum work per cycle, (b) actual efficiency if real work is $200\ \mathrm{J/cycle}$.

### Complete Thought Trace

*Carnot efficiency:* $\eta_{\mathrm{Carnot}} = 1 - T_C/T_H$.

$$\begin{aligned}
\eta_{\mathrm{Carnot}} &= 1 - \frac{300}{800} = 0.625 = 62.5\% \\[4pt]
W_{\mathrm{max}} &= 0.625 \times 500 = 312.5\ \mathrm{J} \\[4pt]
\eta_{\mathrm{actual}} &= \frac{200}{500} = 0.40 = 40\%
\end{aligned}$$

The actual engine achieves $64\%$ of the theoretical maximum.

*Limiting cases:*

| $T_C / T_H$ | $\eta_{\mathrm{Carnot}}$ | Meaning |
|-------------|--------------------------|---------|
| $T_C \to 0$ | $100\%$ | All heat → work (unreachable) |
| $T_C \to T_H$ | $0\%$ | No work possible |
| $T_H \to \infty$ | $100\%$ | Infinite hot reservoir (unphysical) |

*Waste heat:* $Q_C = 500 - 200 = 300\ \mathrm{J}$. Conserved but unavailable for work.

> **Key insight:** Carnot efficiency depends only on $T_C/T_H$ in kelvin. Independent of substance or design. A mathematical consequence of the Second Law.

---

## 3.3 Engineering: Heat Pump Economics

**Problem.** Compare resistive heating ($100\%$ efficient) with a heat pump between $T_C = 273\ \mathrm{K}$ ($0^\circ\mathrm{C}$) and $T_H = 293\ \mathrm{K}$ ($20^\circ\mathrm{C}$). Electricity costs $\$0.12/\mathrm{kWh}$. Home needs $15{,}000\ \mathrm{kWh}$ per winter. Find annual cost difference.

### Complete Thought Trace

Heat pump COP (heating): $\mathrm{COP} = Q_H/W$. Carnot COP: $\mathrm{COP}_{\mathrm{Carnot}} = T_H/(T_H - T_C)$.

$$\begin{aligned}
\mathrm{COP}_{\mathrm{Carnot}} &= \frac{293}{20} = 14.65 \\[4pt]
\mathrm{COP}_{\mathrm{actual}} &\approx 0.5 \times 14.65 = 7.33 \quad\text{(real-world derating)}
\end{aligned}$$

*Resistive:* $W = Q_H = 15{,}000\ \mathrm{kWh}$. Cost = $\$1{,}800/\mathrm{yr}$.

*Heat pump:* $W = 15{,}000/7.33 = 2{,}046\ \mathrm{kWh}$. Cost = $\$246/\mathrm{yr}$.

*Annual savings:* $\$1{,}554$.

*Economic analysis:*
If heat pump costs $\$4{,}000$ more: payback = $4000/1554 \approx 2.6$ years.
Over 15 years: net savings $\approx \$19{,}000$.

*Cold-climate limit:* At $T_C = 253\ \mathrm{K}$ ($-20^\circ\mathrm{C}$): $\mathrm{COP} \approx 3.67$, cost $\approx \$490/\mathrm{yr}$ -- still cheaper, but margins shrink.

> **Key insight:** A financial decision about home heating reduces to $\mathrm{COP} = T_H/(T_H - T_C)$. Physics as a quantitative decision tool.

---

# Part IV: Oscillations and Waves

A wave is a *pattern* propagating through a medium. No mass. No object. For the non-intuitive thinker, this abstraction is liberating: there is nothing to picture incorrectly.

---

## 4.1 Beginner: Simple Harmonic Motion

**Problem.** A $0.50\ \mathrm{kg}$ mass on a spring ($k = 200\ \mathrm{N/m}$) is displaced $0.10\ \mathrm{m}$ and released. Find (a) $\omega$, (b) $T$, (c) $v_{\mathrm{max}}$.

### Complete Thought Trace

**Step I -- IDENTIFY.** SHM definition: $a = -\omega^2 x$.

**Step S -- SIMPLIFY.** $F = -kx$ (Hooke) and $F = ma$ (Newton) give $a = -(k/m)x$. Comparing: $\omega^2 = k/m$.

**Step E -- EXECUTE.**

$$\begin{aligned}
\omega &= \sqrt{\frac{200}{0.50}} = \sqrt{400} = 20\ \mathrm{rad/s} \\[4pt]
T &= \frac{2\pi}{\omega} = \frac{2\pi}{20} = 0.314\ \mathrm{s} \\[4pt]
v_{\mathrm{max}} &= \omega A = 20 \times 0.10 = 2.0\ \mathrm{m/s}
\end{aligned}$$

**Step R -- REFLECT.** Energy check: $E = \frac{1}{2}kA^2 = \frac{1}{2}(200)(0.01) = 1.0\ \mathrm{J} = \frac{1}{2}mv_{\mathrm{max}}^2 = \frac{1}{2}(0.50)(4.0) = 1.0\ \mathrm{J}$. ✓

> **Key insight:** SHM is a differential equation pattern, not a picture. When you see $F \propto -x$, the solution is sinusoidal, and $\omega$ comes from the proportionality constant.

---

## 4.2 Advanced: Standing Waves on a String

**Problem.** Guitar string: $L = 0.65\ \mathrm{m}$, $\mu = 4.0 \times 10^{-3}\ \mathrm{kg/m}$, $F_T = 100\ \mathrm{N}$. Find (a) $f_1$, (b) $f_3$, (c) $\lambda_3$.

### Complete Thought Trace

**Step I -- IDENTIFY.** Wave speed: $v = \sqrt{F_T/\mu}$. Standing wave (fixed ends): $L = n\lambda_n/2$.

**Step E -- EXECUTE.**

$$\begin{aligned}
v &= \sqrt{\frac{100}{4.0 \times 10^{-3}}} = \sqrt{25{,}000} = 158.1\ \mathrm{m/s} \\[4pt]
f_n &= n \cdot \frac{v}{2L} = n f_1 \\[4pt]
f_1 &= \frac{158.1}{2 \times 0.65} = 121.6\ \mathrm{Hz} \\[4pt]
f_3 &= 3 \times 121.6 = 364.8\ \mathrm{Hz} \\[4pt]
\lambda_3 &= \frac{2L}{3} = 0.433\ \mathrm{m}
\end{aligned}$$

**Answer: (a) $121.6\ \mathrm{Hz}$, (b) $364.8\ \mathrm{Hz}$, (c) $0.433\ \mathrm{m}$.**

> **Key insight:** Physics only enters through $v = \sqrt{F_T/\mu}$. Everything else is geometry: $L = n\lambda_n/2$.

---

## 4.3 Engineering: Resonance and Structural Safety

**Problem.** A pedestrian bridge: $f_0 = 2.0\ \mathrm{Hz}$, $\zeta = 0.05$. Find (a) $f_d$, (b) $Q$ and amplification, (c) mitigation.

### Complete Thought Trace

**(a)** $f_d = f_0\sqrt{1 - \zeta^2} \approx 1.997\ \mathrm{Hz}$ (negligible shift for $\zeta \ll 1$).

**(b)** $Q = 1/(2\zeta) = 10$. At resonance, oscillations are **10$\times$** larger than static loading.

**(c)** Mitigation strategies:

| Strategy | Parameter | Mechanism |
|----------|-----------|-----------|
| Add damping | $\zeta \uparrow$, $Q \downarrow$ | Tuned mass dampers |
| Shift frequency | Change $k$ or $m$ | Stiffen or add mass |
| Disrupt driving | Alter walking surface | Curved path breaks stride sync |

> **Engineering lesson (Tacoma Narrows, 1940):** The bridge failed from aeroelastic flutter: motion altered wind forces, amplifying motion. The principle: identify resonant frequencies, compute $Q$, and ensure energy removal exceeds energy input.

---

# Part V: The Universal Procedure

Every example follows the same five-step method:

| Step | Action | Mechanical Rule |
|------|--------|-----------------|
| **I**dentify | Variable table + coordinate system + laws | Fill every cell. Use §0.1 template. Use §0.2 dimensions. |
| **S**implify | Symmetries + approximations + conservation | Symmetry $\to$ conserved quantity. Frictionless $\to$ remove $f_k$. |
| **E**quation | FBD → $\sum F = ma$ / conservation / kinematics | One law = one equation. Count unknowns. |
| **E**xecute | Solve algebraically. Numbers last. | Symbols until the final line. |
| **R**eflect | Dimensions (§0.2) + limiting cases + independent check | $[L][T]^{-1} \neq [M]$. Test $m\to 0$, $\theta\to 0$. Verify. |

---

## Epilogue: The Algorithmic Physicist

Paul Dirac trusted his equation's beauty over physical intuition. John von Neumann grounded quantum mechanics in rigorous mathematical axioms. Enrico Fermi reduced every question -- nuclear yield estimates, piano-tuner counts -- to a chain of multiplications.

These physicists did not *feel* their way to truth. They trusted the procedure when intuition failed. And intuition always fails, eventually. The universe at its deepest levels -- quantum fields, curved spacetime -- is not something any human brain evolved to grasp.

You, who cannot rely on intuition from day one, are not disadvantaged. You are **ahead.** You are learning the only method that works all the way down:

> Trust the rules. Follow the steps. Verify with §0.2 dimensions and limiting cases. The answer is right if the procedure says it is right.

---

## Quick-Reference Card

### The Pre-Method (§0)

| Tool | Rule |
|------|------|
| Coordinate system | Use §0.1 fill-in-the-blanks template exactly |
| Dimensional analysis | Use §0.2 three-step recipe: definition → dimensions → equality check |
| Variable table | Draw the table first. Fill Dimension column from §0.2 reference. |

### The Five-Step Procedure

```
IDENTIFY  → Variable table (§0.3) + coordinate system (§0.1) + laws
SIMPLIFY  → Symmetries + approximations + conserved quantities
EQUATION  → FBD → ΣF=ma / conservation / kinematics
EXECUTE   → Algebraic solution → numbers at the end
REFLECT   → Dimensions (§0.2) → limiting cases → independent check
```

### Conservation Law Decision Tree

```
External forces on system?
├── No → Conservation laws apply
│   ├── Collision/explosion → Momentum (+ KE if elastic)
│   └── Height/speed change → Mechanical Energy
└── Yes → Newton's Second Law (ΣF = ma)
    └── Multiple bodies → Center of Mass: ΣF_ext = M_total · a_CM
```

### Kinematic Equation Selector (Constant $a$)

5 variables: $v_0$, $v$, $a$, $t$, $\Delta x$. Know 3 → find the other 2.

| Missing variable | Use |
|-----------------|-----|
| $\Delta x$ | $v = v_0 + at$ |
| $v$ | $\Delta x = v_0t + \frac{1}{2}at^2$ |
| $a$ | $\Delta x = \frac{1}{2}(v_0+v)t$ |
| $t$ | $v^2 = v_0^2 + 2a\Delta x$ |
