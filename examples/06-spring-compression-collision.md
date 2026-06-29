# 06: Maximum Spring Compression in a Two-Block Collision

**Type:** Olympiad | **Topic:** Mechanics / Energy + Momentum | **Prerequisites:** Conservation laws, COM frame, spring potential

---

## Problem

Block A ($m_A = 2.0\ \mathrm{kg}$) slides on a frictionless surface at $v_A = 4.0\ \mathrm{m/s}$ toward block B ($m_B = 1.0\ \mathrm{kg}$) which is at rest and attached to a spring ($k = 300\ \mathrm{N/m}$). Find the maximum compression of the spring during the collision.

```
[A=2.0] → 4.0 m/s    [B=1.0]──║═══ Wall
                              spring, k=300
```

---

## Solution

### Step I -- IDENTIFY

At maximum compression, the two blocks have the same velocity (they move together instantaneously). The spring force is internal to the (A + B + spring) system.

**Relevant laws:** Momentum conservation (no external horizontal forces). Energy conservation (no friction).

### Step S -- SIMPLIFY

- Frictionless surface
- Massless spring
- At maximum compression: $v_A = v_B = v_f$ (instantaneous common velocity)

### Step E -- EQUATION

Momentum conservation:
$$m_A v_A = (m_A + m_B)v_f$$
$$v_f = \frac{2.0 \times 4.0}{2.0 + 1.0} = \frac{8}{3}\ \mathrm{m/s}$$

Energy conservation (initial KE → final KE + spring PE):
$$\frac{1}{2}m_A v_A^2 = \frac{1}{2}(m_A + m_B)v_f^2 + \frac{1}{2}kx_{\max}^2$$

### Step E -- EXECUTE

$$\begin{aligned}
\frac{1}{2}(2.0)(4.0)^2 &= \frac{1}{2}(3.0)\left(\frac{8}{3}\right)^2 + \frac{1}{2}(300)x_{\max}^2 \\[4pt]
16.0 &= \frac{3}{2} \cdot \frac{64}{9} + 150 x_{\max}^2 \\[4pt]
16.0 &= \frac{96}{9} + 150 x_{\max}^2 \\[4pt]
16.0 - 10.67 &= 150 x_{\max}^2 \\[4pt]
x_{\max}^2 &= \frac{5.33}{150} = 0.0356 \\[4pt]
x_{\max} &= 0.189\ \mathrm{m} = 18.9\ \mathrm{cm}
\end{aligned}$$

### Step R -- REFLECT

**Energy check:** Initial KE = $16.0\ \mathrm{J}$. At max compression: KE of combined blocks = $\frac{1}{2}(3.0)(8/3)^2 = 10.67\ \mathrm{J}$. Spring PE = $\frac{1}{2}(300)(0.0356) = 5.33\ \mathrm{J}$. Total = $10.67 + 5.33 = 16.0\ \mathrm{J}$. ✓

**COM frame analysis:** In the COM frame, total momentum is zero. Initial KE in COM frame is the energy available for spring compression. After the collision, the blocks will separate with the spring returning its stored energy.

**Answer: $x_{\max} = 18.9\ \mathrm{cm}$.**

> **Key insight:** The "maximum compression" condition is a kinematic constraint: the blocks have equal velocity. This single fact converts the problem into a two-equation (momentum + energy) system. No picture of the collision dynamics is needed.
