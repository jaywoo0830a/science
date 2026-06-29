# 03: Raindrop Falling Through a Cloud (Variable Mass)

**Type:** Olympiad | **Topic:** Mechanics / Variable Mass | **Prerequisites:** Momentum conservation, differential equations

---

## Problem

A spherical raindrop of initial radius $r_0$ falls from rest through a stationary cloud of water droplets. As it falls, it sweeps up mass at a rate proportional to its cross-sectional area and speed: $dm/dt = \alpha\pi r^2 v$, where $\alpha$ is the cloud density ($\mathrm{kg/m^3}$). The raindrop density is $\rho$. Find the raindrop's acceleration and terminal velocity. Assume the drop remains spherical: $m = \frac{4}{3}\pi r^3\rho$.

---

## Solution

### Step I -- IDENTIFY

Variable mass system. Momentum conservation for a system gaining mass:

$$\frac{d}{dt}(mv) = mg - F_{\text{drag}}$$

For simplicity, neglect air drag (focus on the variable mass effect). Then:

$$\frac{d}{dt}(mv) = mg$$

### Step E -- EQUATION

Expanding: $m\frac{dv}{dt} + v\frac{dm}{dt} = mg$.

Substitute $dm/dt = \alpha\pi r^2 v$. Using $m = \frac{4}{3}\pi r^3\rho$, we have $r^2 \propto m^{2/3}$.

Let's express everything in terms of $m$. $r = [3m/(4\pi\rho)]^{1/3}$, so $r^2 = [3m/(4\pi\rho)]^{2/3}$.

Then $dm/dt = \alpha\pi [3m/(4\pi\rho)]^{2/3} v = \beta m^{2/3} v$, where $\beta = \alpha\pi[3/(4\pi\rho)]^{2/3}$.

Equation: $m\frac{dv}{dt} + \beta m^{2/3} v^2 = mg$.

### Step E -- EXECUTE

$$\frac{dv}{dt} = g - \beta m^{-1/3} v^2$$

Acceleration is $g$ initially ($v=0$). As mass and speed increase, the second term grows. Terminal velocity when $dv/dt = 0$:

$$\beta m^{-1/3} v_T^2 = g$$

But $m$ itself depends on $v$ through the accumulation process. This is coupled.

**Dimensionless analysis approach:** Let's look for scaling behavior. If $dm/dt \propto r^2 v$ and $m \propto r^3$, then $dr/dt \propto v$.

At terminal velocity (if one exists), the mass grows but acceleration approaches zero. From $d(mv)/dt = mg$:

At steady state (terminal), $d(mv)/dt \approx mg$. If $v \to v_T$ constant, then $v_T(dm/dt) = mg$, so:

$$v_T \cdot \beta m^{2/3} v_T = mg \quad\Rightarrow\quad v_T^2 = \frac{g}{\beta}m^{1/3}$$

Since $m$ continues to grow, there is no true "terminal velocity" in the usual sense -- the speed continues to evolve as mass increases. However, for a given mass $m$, the instantaneous pseudo-terminal velocity is $v_T(m) = \sqrt{gm^{1/3}/\beta}$.

**Power-law growth:** Solving the coupled equations gives $v \propto t^{1/2}$ and $m \propto t^{3/2}$ at late times.

### Step R -- REFLECT

**Limiting case:** If $\alpha \to 0$ (no cloud), $dm/dt = 0$, and the problem reduces to free fall: $dv/dt = g$, $v = gt$. ✓

**Answer: $dv/dt = g - \beta m^{-1/3}v^2$; no fixed terminal velocity; $v \propto t^{1/2}$ asymptotically.**

> **Key insight:** Variable mass systems require the full momentum equation $d(mv)/dt = \sum F_{\text{ext}}$, NOT $m\,dv/dt = \sum F_{\text{ext}}$. The distinction is critical and purely algebraic.
