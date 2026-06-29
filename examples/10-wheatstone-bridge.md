# 10: Wheatstone Bridge Strain Gauge

**Type:** Engineering | **Topic:** E&M / DC Circuits | **Prerequisites:** Ohm's law, bridge circuits, null measurement

---

## Problem

A strain gauge with unstrained resistance $R_g = 120\ \Omega$ is mounted in one arm of a Wheatstone bridge. The other three arms have fixed resistors $R_1 = R_2 = R_3 = 120\ \Omega$. Under strain, the gauge resistance changes by $\Delta R$. The bridge is powered by $V_s = 5.0\ \mathrm{V}$. A voltmeter with sensitivity $0.10\ \mathrm{mV}$ measures the bridge output $V_{AB}$. (a) Find $V_{AB}$ as a function of $\Delta R$. (b) What is the minimum detectable strain if the gauge factor is $G = 2.0$ (where $\Delta R/R = G\cdot\varepsilon$ and $\varepsilon$ is strain)? (c) If the bridge is initially balanced and one resistor changes by $0.10\%$, what is $V_{AB}$?

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable           Symbol   Value             Unit        Dimension
──────────────────────────────────────────────────────────────────
Gauge resistance    R_g      120 + ΔR          Ω           [M][L]^2[Q]^{-2}[T]^{-1}
Fixed resistors     R1,R2,R3 120              Ω           —
Source voltage      V_s      5.0              V           [M][L]^2[Q]^{-1}[T]^{-2}
Output voltage      V_AB     ?                V           —
```

**Relevant laws:** Voltage divider formula. The bridge output is the difference between the voltages at the two midpoints of the voltage dividers.

### Step S -- SIMPLIFY

The Wheatstone bridge is two parallel voltage dividers. Label nodes: A (top), B (bottom, ground). Left arm midpoint = C. Right arm midpoint = D. Output $V_{AB} = V_C - V_D$ (or $V_{CD}$).

Arm 1 (left): $R_1$ (top), $R_g$ (bottom). Arm 2 (right): $R_2$ (top), $R_3$ (bottom).

### Step E -- EXECUTE

**(a) Output voltage:**

$$V_C = V_s\frac{R_g}{R_1 + R_g}, \quad V_D = V_s\frac{R_3}{R_2 + R_3}$$

$$V_{AB} = V_C - V_D = V_s\left(\frac{R_g}{R_1 + R_g} - \frac{R_3}{R_2 + R_3}\right)$$

With $R_g = R + \Delta R$ and $R_1 = R_2 = R_3 = R = 120\ \Omega$:

$$V_{AB} = V_s\left(\frac{R + \Delta R}{2R + \Delta R} - \frac{1}{2}\right)$$

For $\Delta R \ll R$:

$$V_{AB} \approx V_s\frac{\Delta R}{4R} = \frac{V_s}{4}\cdot\frac{\Delta R}{R}$$

This is the linearized bridge sensitivity. Exact:

$$V_{AB} = V_s\frac{\Delta R}{2(2R + \Delta R)}$$

**(b) Minimum detectable strain:**

Gauge factor: $\Delta R/R = G\cdot\varepsilon$.

Minimum detectable $\Delta R/R$ is set by the voltmeter sensitivity. We need $|V_{AB}| \geq 0.10\ \mathrm{mV}$:

$$\frac{V_s}{4}\cdot\left|\frac{\Delta R}{R}\right|_{\min} = 0.10 \times 10^{-3}$$

$$\left|\frac{\Delta R}{R}\right|_{\min} = \frac{4 \times 1.0 \times 10^{-4}}{5.0} = 8.0 \times 10^{-5}$$

Minimum detectable strain:

$$\varepsilon_{\min} = \frac{1}{G}\left|\frac{\Delta R}{R}\right|_{\min} = \frac{8.0 \times 10^{-5}}{2.0} = 4.0 \times 10^{-5} = 40\ \mu\varepsilon$$

**(c) $0.10\%$ resistance change:**

$\Delta R/R = 0.0010$.

$$V_{AB} \approx \frac{5.0}{4} \times 0.0010 = 1.25 \times 10^{-3}\ \mathrm{V} = 1.25\ \mathrm{mV}$$

This is easily detectable ($12.5\times$ above sensitivity limit).

### Step R -- REFLECT

**Dimensional check:** $V_s$ in volts, $\Delta R/R$ dimensionless → $V_{AB}$ in volts. ✓

**Limiting cases:**

| Test | $\Delta R/R$ | Expected $V_{AB}$ | Formula result |
|------|-------------|-------------------|----------------|
| Balanced | $0$ | $0$ | $0$ ✓ |
| $\Delta R \to \infty$ (open gauge) | $\infty$ | $V_s/2$ | $V_s/2$ ✓ |

**Engineering context:** A strain of $40\ \mu\varepsilon$ corresponds to a stress of $\sigma = E\varepsilon \approx (200\ \mathrm{GPa})(4.0\times 10^{-5}) = 8.0\ \mathrm{MPa}$ in steel. This is well below yield stress ($\sim 250\ \mathrm{MPa}$ for mild steel). The bridge can detect strains far below structural failure thresholds, making it suitable for real-time structural health monitoring.

**Answer: (a) $V_{AB} = V_s\frac{\Delta R}{2(2R+\Delta R)} \approx \frac{V_s}{4}\frac{\Delta R}{R}$, (b) $\varepsilon_{\min} = 40\ \mu\varepsilon$, (c) $1.25\ \mathrm{mV}$.**

> **Key insight:** The Wheatstone bridge converts a small resistance change into a measurable voltage by subtracting two nearly equal voltages. The null method (measuring the *difference* rather than the absolute value) is the key to its sensitivity. This is an algebraic fact: when two nearly equal numbers are subtracted, the difference can be measured with much greater precision than either number individually.
