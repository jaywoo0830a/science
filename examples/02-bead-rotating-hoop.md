# 02: Bead on a Rotating Hoop

**Type:** Olympiad | **Topic:** Mechanics / Non-Inertial Frames | **Prerequisites:** Centripetal force, normal forces, stability analysis

---

## Problem

A circular hoop of radius $R$ rotates at constant angular velocity $\omega$ about a vertical axis through its center. A small bead of mass $m$ can slide without friction on the hoop. The bead's position is described by the angle $\theta$ measured from the bottom of the hoop. Find the equilibrium positions and determine their stability as a function of $\omega$.

```
        ω ↑ (rotation axis)
        │
    ────┼────
   /    │    \
  │   ╱ ● ╲   │  ← bead at angle θ
  │  ╱     ╲  │
   \╱       ╲/
    ─────────
```

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

**Variable table:**

```
Variable          Symbol   Value          Unit       Dimension
───────────────────────────────────────────────────────────────
Bead mass          m        (given)        kg         [M]
Hoop radius        R        (given)        m          [L]
Angular velocity   ω        (parameter)    rad/s      [T]^{-1}
Angle from bottom  θ        ?              rad        [1]
Normal force       N        ?              N          [M][L][T]^{-2}
```

**Coordinate system:** Rotating frame (co-rotating with the hoop). In this frame, the bead experiences a centrifugal force $m\omega^2 r$ outward from the rotation axis, where $r = R\sin\theta$ is the horizontal distance from the axis.

**Relevant laws:**
- In the rotating frame: $\sum \vec{F} + \vec{F}_{\text{centrifugal}} = 0$ (equilibrium)
- The centrifugal force is $\vec{F}_{\text{cf}} = m\omega^2 r\,\hat{r}$ (radially outward from axis)
- Tangential equilibrium determines $\theta$; radial equilibrium determines $N$

### Step S -- SIMPLIFY

- Frictionless: only normal force $N$ (perpendicular to hoop) and gravity $mg$ (downward)
- Constant $\omega$: no Euler force
- Bead constrained to hoop surface: motion is along the hoop only
- Equilibrium means $\ddot{\theta} = 0$ (no tangential acceleration)

### Step E -- EQUATION

**Forces in the rotating frame:**

1. Gravity: $mg$, downward
2. Normal force: $N$, pointing toward the center of the hoop (radially inward along the hoop radius)
3. Centrifugal force: $m\omega^2 (R\sin\theta)$, horizontally outward from the rotation axis

**Tangential component (along the hoop, direction of increasing $\theta$):**

The tangential direction is perpendicular to the hoop radius (i.e., tangent to the circle). Forces along this direction:

- Gravity component: $-mg\sin\theta$ (restoring toward bottom)
- Centrifugal component: the centrifugal force is horizontal. Its component tangent to the hoop (in the direction of increasing $\theta$) is $m\omega^2(R\sin\theta)\cos\theta$.

Equilibrium condition (tangential forces sum to zero):

$$-mg\sin\theta + m\omega^2 R\sin\theta\cos\theta = 0$$

$$\sin\theta\left(-g + \omega^2 R\cos\theta\right) = 0$$

### Step E -- EXECUTE

The equation $\sin\theta\,(-g + \omega^2 R\cos\theta) = 0$ gives two families of solutions:

**Solution 1:** $\sin\theta = 0$

$$\theta = 0 \quad \text{(bottom)} \quad \text{or} \quad \theta = \pi \quad \text{(top)}$$

**Solution 2:** $-g + \omega^2 R\cos\theta = 0$

$$\cos\theta = \frac{g}{\omega^2 R}$$

This solution exists only when $\frac{g}{\omega^2 R} \leq 1$, i.e., $\omega \geq \sqrt{g/R}$.

Let $\omega_c = \sqrt{g/R}$ (critical angular velocity).

**Stability analysis:**

For stability, consider a small displacement $\delta\theta$ from equilibrium. The tangential equation (not at equilibrium) is:

$$mR\ddot{\theta} = -mg\sin\theta + m\omega^2 R\sin\theta\cos\theta$$

Define the effective potential $U_{\text{eff}}(\theta)$ such that $mR\ddot{\theta} = -dU_{\text{eff}}/d\theta$:

$$\frac{dU_{\text{eff}}}{d\theta} = mg\sin\theta - m\omega^2 R\sin\theta\cos\theta$$

Equilibrium occurs where $dU_{\text{eff}}/d\theta = 0$. Stable equilibrium occurs where $d^2U_{\text{eff}}/d\theta^2 > 0$ (potential minimum).

**Stability of $\theta = 0$ (bottom):**

$$\left.\frac{d^2U_{\text{eff}}}{d\theta^2}\right|_{\theta=0} = mg\cos\theta - m\omega^2 R(\cos^2\theta - \sin^2\theta)\Big|_{\theta=0} = mg - m\omega^2 R$$

Stable when $mg - m\omega^2 R > 0 \Rightarrow \omega < \sqrt{g/R} = \omega_c$.

For $\omega < \omega_c$: **stable**.
For $\omega > \omega_c$: **unstable** (the bottom becomes a local maximum).

**Stability of $\theta = \pi$ (top):**

$$\left.\frac{d^2U_{\text{eff}}}{d\theta^2}\right|_{\theta=\pi} = -mg - m\omega^2 R < 0 \quad\text{(always)}$$

Always **unstable** -- the top is never a stable equilibrium.

**Stability of $\cos\theta = g/(\omega^2 R)$ (side positions, $\omega > \omega_c$):**

At $\cos\theta_0 = g/(\omega^2 R)$:
$$\left.\frac{d^2U_{\text{eff}}}{d\theta^2}\right|_{\theta_0} = mg\cos\theta_0 - m\omega^2 R(2\cos^2\theta_0 - 1)$$

Substituting $\cos\theta_0 = g/(\omega^2 R)$:
$$= m\frac{g^2}{\omega^2 R} - m\omega^2 R\left(2\frac{g^2}{\omega^4 R^2} - 1\right)$$
$$= \frac{mg^2}{\omega^2 R} - 2\frac{mg^2}{\omega^2 R} + m\omega^2 R$$
$$= m\omega^2 R - \frac{mg^2}{\omega^2 R} = \frac{m}{\omega^2 R}(\omega^4 R^2 - g^2)$$

Since $\omega > \omega_c = \sqrt{g/R}$: $\omega^4 R^2 > g^2$, so $d^2U_{\text{eff}}/d\theta^2 > 0$ → **stable**.

### Step R -- REFLECT

**Summary of equilibrium positions:**

| $\omega$ range | Stable equilibria | Unstable equilibria |
|----------------|-------------------|---------------------|
| $\omega < \omega_c$ | $\theta = 0$ (bottom) | $\theta = \pi$ (top) |
| $\omega > \omega_c$ | $\theta = \pm\cos^{-1}(g/\omega^2 R)$ (sides) | $\theta = 0$ (bottom), $\theta = \pi$ (top) |

**Physical interpretation:** This is a *pitchfork bifurcation* at $\omega = \omega_c$. Below the critical speed, the bead sits at the bottom. Above the critical speed, the centrifugal force "flings" the bead outward, and it settles at a nonzero angle where gravity and centrifugal force balance tangentially. The faster the rotation, the higher the bead rises ($\theta$ increases with $\omega$).

**Limiting cases:**

| Limit | Expected | Result |
|-------|----------|--------|
| $\omega \to 0$ | $\theta = 0$ stable (bead at bottom) | $\omega < \omega_c \to \theta = 0$ stable ✓ |
| $\omega \to \infty$ | $\theta \to 90^\circ$ (bead at equator) | $\cos\theta = g/(\omega^2 R) \to 0 \to \theta \to 90^\circ$ ✓ |
| $g \to 0$ (no gravity) | $\theta = 90^\circ$ (purely centrifugal) | $\cos\theta = 0 \to \theta = 90^\circ$ ✓ |

**Answer: For $\omega < \sqrt{g/R}$: stable at bottom ($\theta=0$). For $\omega > \sqrt{g/R}$: stable at $\theta = \pm\cos^{-1}(g/\omega^2 R)$; bottom becomes unstable. Top always unstable.**

> **Key insight:** Stability transitions are mechanical to analyze: compute $d^2U_{\text{eff}}/d\theta^2$ and evaluate the sign. No intuition about "what should happen" is needed. The mathematics of the second derivative decides stability.
