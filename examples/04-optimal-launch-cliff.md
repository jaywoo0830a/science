# 04: Optimal Launch from a Cliff

**Type:** Engineering | **Topic:** Projectile Motion | **Prerequisites:** Range equation, optimization, trigonometry

---

## Problem

A projectile is launched from a cliff of height $H = 50\ \mathrm{m}$ above a flat plain, with initial speed $v_0 = 30\ \mathrm{m/s}$. Find the launch angle $\theta$ that maximizes the horizontal range. ($g = 10\ \mathrm{m/s^2}$)

---

## Solution

### Step I -- IDENTIFY

The projectile is launched from height $H$ and lands at $y = -H$ (taking launch point as origin, $+y$ upward). Time of flight from $y = v_0\sin\theta\,t - \frac{1}{2}gt^2 = -H$.

### Step E -- EQUATION

$$-H = v_0\sin\theta\,t - \frac{1}{2}gt^2$$
$$\frac{1}{2}gt^2 - v_0\sin\theta\,t - H = 0$$

$$t = \frac{v_0\sin\theta + \sqrt{v_0^2\sin^2\theta + 2gH}}{g}$$

Range: $R = v_0\cos\theta \cdot t$.

$$R(\theta) = \frac{v_0\cos\theta}{g}\left(v_0\sin\theta + \sqrt{v_0^2\sin^2\theta + 2gH}\right)$$

### Step E -- EXECUTE

Numerically ($v_0 = 30$, $H = 50$, $g = 10$):

$v_0^2 = 900$, $2gH = 1000$.

$$R(\theta) = 3\cos\theta\left(30\sin\theta + \sqrt{900\sin^2\theta + 1000}\right)$$

Compute $R$ at key angles:

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\sqrt{...}$ | $R$ (m) |
|----------|-------------|-------------|-------------|-----|
| $0^\circ$ | 0 | 1.000 | 31.62 | 94.9 |
| $15^\circ$ | 0.259 | 0.966 | 32.60 | 102.0 |
| $20^\circ$ | 0.342 | 0.940 | 33.14 | 103.2 |
| $22^\circ$ | 0.375 | 0.927 | 33.46 | 103.5 |
| $25^\circ$ | 0.423 | 0.906 | 33.96 | 103.2 |
| $30^\circ$ | 0.500 | 0.866 | 35.00 | 101.4 |
| $45^\circ$ | 0.707 | 0.707 | 38.08 | 90.6 |

Maximum at $\theta \approx 22^\circ$. Range $\approx 104\ \mathrm{m}$.

### Step R -- REFLECT

**Comparison with level ground:** For level ground ($H = 0$), the optimal angle is $45^\circ$ and $R = v_0^2/g = 90\ \mathrm{m}$. From a cliff, the optimal angle is **lower** ($22^\circ$), and the range is **greater** ($104\ \mathrm{m} > 90\ \mathrm{m}$). The height advantage allows a flatter trajectory to stay airborne longer.

**Answer: $\theta \approx 22^\circ$, $R \approx 104\ \mathrm{m}$.**

> **Key insight:** The optimal angle shifts from $45^\circ$ (level ground) to a lower angle for an elevated launch. This is a calculus-free extremization: evaluate the function at candidate points. The formula is algebraically derived; no intuition about "what looks right."
