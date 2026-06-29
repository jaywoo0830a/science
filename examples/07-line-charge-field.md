# 07: Electric Field of an Infinite Line Charge

**Type:** Olympiad | **Topic:** E&M / Gauss's Law | **Prerequisites:** Coulomb's law, integration, symmetry

---

## Problem

An infinite line of charge with uniform linear charge density $\lambda$ (C/m) lies along the $z$-axis. Find the electric field at a distance $r$ from the line. Use direct integration of Coulomb's law. ($k = 1/(4\pi\varepsilon_0)$)

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable              Symbol   Value      Unit            Dimension
────────────────────────────────────────────────────────────────────
Linear charge density  λ       (given)    C/m             [Q][L]^{-1}
Radial distance        r       (given)    m               [L]
Coulomb constant       k       known      N·m^2/C^2       [M][L]^3[Q]^{-2}[T]^{-2}
Electric field         E       ?          N/C             [M][L][Q]^{-1}[T]^{-2}
```

**Coordinate system (§0.1):** Cylindrical coordinates $(r, \phi, z)$. By symmetry, the field is radial and independent of $\phi$ and $z$. The field direction is radially outward from the line (for $\lambda > 0$).

**Relevant law:** Coulomb's law for a continuous charge distribution:

$$d\vec{E} = k\frac{dq}{R^2}\hat{R}$$

where $d\vec{E}$ is the contribution from charge element $dq$ at distance $R$, and $\hat{R}$ is the unit vector from $dq$ to the field point.

### Step S -- SIMPLIFY

**Symmetry analysis:**
1. **Translational symmetry along $z$:** The line is infinite → the field cannot depend on $z$.
2. **Rotational symmetry about $z$:** The field cannot depend on $\phi$.
3. **Reflection symmetry:** The field must be purely radial ($E_r$ only, $E_z = 0$, $E_\phi = 0$).

Because $E_z = 0$ by symmetry, we only need to compute the radial component $E_r$. For any charge element $dq = \lambda\,dz$ at position $z$ on the line, the distance to the field point at $(r, 0, 0)$ is $R = \sqrt{r^2 + z^2}$. The radial component of the contribution is:

$$dE_r = k\frac{\lambda\,dz}{r^2 + z^2}\cos\alpha$$

where $\alpha$ is the angle between the line from $dq$ to the field point and the radial direction. From geometry: $\cos\alpha = r/R = r/\sqrt{r^2 + z^2}$.

### Step E -- EQUATION

$$dE_r = k\frac{\lambda\,dz}{r^2 + z^2} \cdot \frac{r}{\sqrt{r^2 + z^2}} = k\lambda r\frac{dz}{(r^2 + z^2)^{3/2}}$$

Integrate over all $z$:

$$E_r = k\lambda r\int_{-\infty}^{\infty}\frac{dz}{(r^2 + z^2)^{3/2}}$$

### Step E -- EXECUTE

The integral $\int_{-\infty}^{\infty} (r^2+z^2)^{-3/2}\,dz$ is standard. Substitute $z = r\tan\theta$, $dz = r\sec^2\theta\,d\theta$:

When $z = -\infty$, $\theta = -\pi/2$. When $z = \infty$, $\theta = \pi/2$.

$$\begin{aligned}
\int_{-\infty}^{\infty}\frac{dz}{(r^2+z^2)^{3/2}} &= \int_{-\pi/2}^{\pi/2}\frac{r\sec^2\theta\,d\theta}{(r^2\sec^2\theta)^{3/2}} \\[4pt]
&= \int_{-\pi/2}^{\pi/2}\frac{r\sec^2\theta\,d\theta}{r^3\sec^3\theta} \\[4pt]
&= \frac{1}{r^2}\int_{-\pi/2}^{\pi/2}\cos\theta\,d\theta \\[4pt]
&= \frac{1}{r^2}\left[\sin\theta\right]_{-\pi/2}^{\pi/2} = \frac{2}{r^2}
\end{aligned}$$

Therefore:

$$E_r = k\lambda r \cdot \frac{2}{r^2} = \frac{2k\lambda}{r}$$

### Step R -- REFLECT

**Dimensional check:** $k\lambda/r$: $[M][L]^3[Q]^{-2}[T]^{-2} \times [Q][L]^{-1} / [L] = [M][L][Q]^{-1}[T]^{-2}$ = N/C. ✓

**Limiting cases:**

| Test | Expected | Result |
|------|----------|--------|
| $r \to 0$ | $E \to \infty$ (closer to line → stronger field) | $E \propto 1/r \to \infty$ ✓ |
| $r \to \infty$ | $E \to 0$ (far from line → field vanishes) | $E \to 0$ ✓ |
| $\lambda \to 0$ | $E \to 0$ (no charge → no field) | $E \to 0$ ✓ |

**Comparison with Gauss's Law method:** Gauss's law gives $E \cdot 2\pi r L = \lambda L / \varepsilon_0$, so $E = \lambda/(2\pi\varepsilon_0 r) = 2k\lambda/r$. The direct integration matches. ✓

**Comparison with point charge:** A point charge gives $E \propto 1/r^2$. A line charge gives $E \propto 1/r$. An infinite plane gives $E$ constant. This hierarchy ($1/r^2$, $1/r$, constant) is a geometric consequence of the dimensionality of the charge distribution. The integration method makes this explicit.

**Answer: $\displaystyle E = \frac{2k\lambda}{r} = \frac{\lambda}{2\pi\varepsilon_0 r}$, radially outward from the line.**

> **Key insight:** The integration of Coulomb's law for a continuous distribution follows a mechanical procedure: (1) write $d\vec{E}$ for a charge element, (2) exploit symmetry to determine which components survive, (3) integrate. The integral $\int (r^2+z^2)^{-3/2}dz$ appears repeatedly in physics. Recognizing the substitution $z = r\tan\theta$ converts it to a standard trigonometric integral.
