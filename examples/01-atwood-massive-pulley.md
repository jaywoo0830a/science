# 01: Atwood Machine with Massive Pulley

**Type:** Olympiad | **Topic:** Mechanics / Rotational Dynamics | **Prerequisites:** Newton's laws, torque, moment of inertia

---

## Problem

Two masses $m_1 = 3.0\ \mathrm{kg}$ and $m_2 = 2.0\ \mathrm{kg}$ hang from opposite sides of a pulley of mass $M = 0.50\ \mathrm{kg}$ and radius $R = 0.10\ \mathrm{m}$. The pulley is a uniform disk ($I = \frac{1}{2}MR^2$). The rope does not slip on the pulley. Find the acceleration of the masses and the tension in each segment of the rope. ($g = 10\ \mathrm{m/s^2}$)

```
        [Pulley: M, R]
        /            \
       /              \
   [m1=3.0]        [m2=2.0]
```

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

**Variable table:**

```
Variable        Symbol   Value           Unit          Dimension
──────────────────────────────────────────────────────────────────
Mass 1           m1       3.0             kg           [M]
Mass 2           m2       2.0             kg           [M]
Pulley mass      M        0.50            kg           [M]
Pulley radius    R        0.10            m            [L]
Moment of inertia I       (1/2)MR^2       kg·m^2       [M][L]^2
Tension left     T1       ?               N            [M][L][T]^{-2}
Tension right    T2       ?               N            [M][L][T]^{-2}
Acceleration     a        ?               m/s^2        [L][T]^{-2}
Angular accel    α        ?               rad/s^2      [T]^{-2}
```

**Coordinate system (§0.1 template):**

```
+x direction: downward for m1, upward for m2 (each object's motion direction)
+y direction: not needed (1D for each mass)
Origin:       initial position of each mass
t=0 at:       release from rest

Consequences:
  a_m1 = +a (downward, positive)
  a_m2 = +a (upward, positive -- opposite absolute direction but same acceleration magnitude)
```

*Why opposite directions for the same sign?* Because we define $+$ as the direction each mass *actually moves*. $m_1 > m_2$, so $m_1$ moves down and $m_2$ moves up. Assigning $+$ to each object's motion direction makes both accelerations positive.

**Relevant laws:**
- Newton's Second Law (translation): $\sum F = ma$ for each mass
- Newton's Second Law (rotation): $\sum \tau = I\alpha$ for the pulley
- Constraint (no slip): $a = \alpha R$

### Step S -- SIMPLIFY

- Massless, inextensible rope (tension uniform in each segment, but $T_1 \neq T_2$ because pulley has mass)
- Pulley is a uniform disk: $I = \frac{1}{2}MR^2$
- No friction at the pulley axle
- Rope does not slip: the linear acceleration of the rope equals $a = \alpha R$

### Step E -- EQUATION

**FBD for $m_1$ (downward is $+$):**

$$\sum F = m_1 g - T_1 = m_1 a \tag{1}$$

**FBD for $m_2$ (upward is $+$):**

$$\sum F = T_2 - m_2 g = m_2 a \tag{2}$$

**Rotational dynamics for the pulley:**

The two tension forces produce opposing torques. Taking counterclockwise as positive (the direction $m_1$'s descent causes):

$$\sum \tau = T_1 R - T_2 R = I\alpha \tag{3}$$

**No-slip constraint:**

$$a = \alpha R \quad \Rightarrow \quad \alpha = \frac{a}{R} \tag{4}$$

**Moment of inertia (uniform disk):**

$$I = \frac{1}{2}MR^2 \tag{5}$$

### Step E -- EXECUTE

Substitute (4) and (5) into (3):

$$(T_1 - T_2)R = \frac{1}{2}MR^2 \cdot \frac{a}{R}$$
$$T_1 - T_2 = \frac{1}{2}Ma \tag{6}$$

Now solve the system (1), (2), (6):

From (1): $T_1 = m_1(g - a)$
From (2): $T_2 = m_2(g + a)$

Substitute into (6):

$$\begin{aligned}
m_1(g - a) - m_2(g + a) &= \frac{1}{2}Ma \\[4pt]
m_1 g - m_1 a - m_2 g - m_2 a &= \frac{1}{2}Ma \\[4pt]
(m_1 - m_2)g &= \left(m_1 + m_2 + \frac{1}{2}M\right)a
\end{aligned}$$

$$a = \frac{(m_1 - m_2)g}{m_1 + m_2 + \frac{1}{2}M}$$

Numerically:

$$a = \frac{(3.0 - 2.0) \cdot 10}{3.0 + 2.0 + 0.25} = \frac{10}{5.25} = 1.905\ \mathrm{m/s^2}$$

Now the tensions:

$$\begin{aligned}
T_1 &= 3.0(10 - 1.905) = 3.0 \times 8.095 = 24.29\ \mathrm{N} \\[4pt]
T_2 &= 2.0(10 + 1.905) = 2.0 \times 11.905 = 23.81\ \mathrm{N}
\end{aligned}$$

### Step R -- REFLECT

**Dimensional check (§0.2):**
- $a$: numerator $[M][L][T]^{-2}$, denominator $[M]$, result $[L][T]^{-2}$. ✓
- $T_1$, $T_2$: $[M] \cdot [L][T]^{-2} = [M][L][T]^{-2} = \mathrm{N}$. ✓

**Limiting cases:**

| Test | Expected | Formula Result | Pass? |
|------|----------|---------------|-------|
| $M \to 0$ (massless pulley) | $a = \frac{m_1-m_2}{m_1+m_2}g = 2\ \mathrm{m/s^2}$ | $a = \frac{10}{5} = 2$ | Yes |
| $M \to \infty$ | $a \to 0$ (pulley immovable) | $a \to 0$ | Yes |
| $m_1 = m_2$ | $a = 0$, $T_1 = T_2 = mg$ | $a = 0$, $T = 30\ \mathrm{N}$ | Yes |
| $M \to 0$ gives $T_1 = T_2$ | Single tension value | $T = 24\ \mathrm{N}$ (both) | Yes |

**Special case ($M = 0$):** $T_1 = T_2 = \frac{2m_1 m_2}{m_1 + m_2}g = \frac{2\cdot 3\cdot 2}{5}\cdot 10 = 24\ \mathrm{N}$. With massive pulley: $T_1 \approx 24.29$, $T_2 \approx 23.81$. The difference $T_1 - T_2 = 0.48\ \mathrm{N}$ provides the torque to accelerate the pulley. ✓

**Answer: $a = 1.91\ \mathrm{m/s^2}$, $T_1 = 24.3\ \mathrm{N}$, $T_2 = 23.8\ \mathrm{N}$.**

> **Key insight:** A massive pulley breaks the tension symmetry. $T_1 \neq T_2$ because the difference provides the torque $\tau = I\alpha$. The constraint $a = \alpha R$ couples translation and rotation. Three equations, three unknowns -- purely algebraic after the constraint is applied.
