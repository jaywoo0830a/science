# 11: Magnetic Mirror -- Particle in Varying B-Field

**Type:** Olympiad | **Topic:** E&M / Magnetism | **Prerequisites:** Lorentz force, adiabatic invariants, magnetic moment

---

## Problem

A charged particle ($q$, $m$) spirals along a magnetic field line that slowly converges (field strength increases along the direction of motion). The particle has velocity components $v_\parallel$ (parallel to $B$) and $v_\perp$ (perpendicular). The magnetic moment $\mu = \frac{1}{2}mv_\perp^2/B$ is an adiabatic invariant. If at position 1, $B_1 = 0.10\ \mathrm{T}$, $v_{\perp 1} = 1.0 \times 10^6\ \mathrm{m/s}$, and $v_{\parallel 1} = 2.0 \times 10^6\ \mathrm{m/s}$, find the field strength $B_2$ at which the particle is reflected ($v_\parallel = 0$).

---

## Solution

### Step I -- IDENTIFY

**Adiabatic invariant:** $\mu = mv_\perp^2/(2B) = \text{constant}$ as long as the field changes slowly compared to the cyclotron period.

**Energy conservation:** $\frac{1}{2}m(v_\parallel^2 + v_\perp^2) = \text{constant}$ (magnetic force does no work).

### Step E -- EQUATION

At position 1: $v_1^2 = v_{\parallel 1}^2 + v_{\perp 1}^2$.
At reflection: $v_{\parallel 2} = 0$, so $v_2^2 = v_{\perp 2}^2$. By energy conservation: $v_{\perp 2}^2 = v_{\parallel 1}^2 + v_{\perp 1}^2$.

Adiabatic invariant: $\frac{v_{\perp 1}^2}{B_1} = \frac{v_{\perp 2}^2}{B_2}$.

### Step E -- EXECUTE

$$v_{\perp 2}^2 = v_{\parallel 1}^2 + v_{\perp 1}^2 = (2.0 \times 10^6)^2 + (1.0 \times 10^6)^2 = 4.0 \times 10^{12} + 1.0 \times 10^{12} = 5.0 \times 10^{12}$$

$$\frac{(1.0 \times 10^6)^2}{0.10} = \frac{5.0 \times 10^{12}}{B_2}$$
$$\frac{1.0 \times 10^{12}}{0.10} = \frac{5.0 \times 10^{12}}{B_2}$$
$$B_2 = 0.10 \times \frac{5.0}{1.0} = 0.50\ \mathrm{T}$$

### Step R -- REFLECT

The magnetic field must increase by a factor of 5 to reflect the particle. This is the principle of the **magnetic mirror**: converging field lines reflect charged particles, trapping them between two regions of strong field. This is the primary mechanism for plasma confinement in fusion devices (mirror machines) and explains the Van Allen radiation belts (particles bouncing between Earth's magnetic poles).

**Answer: $B_2 = 0.50\ \mathrm{T}$.**

> **Key insight:** The magnetic moment $\mu = mv_\perp^2/(2B)$ is an adiabatic invariant -- it remains constant when the field changes slowly. Combined with energy conservation (magnetic forces do no work, so speed is constant), this single invariant predicts the reflection point. No trajectory integration needed.
