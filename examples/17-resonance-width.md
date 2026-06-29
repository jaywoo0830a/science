# 17: Resonance Width of a Damped Oscillator

**Type:** Olympiad | **Topic:** Oscillations | **Prerequisites:** Damped driven oscillator, Q-factor, bandwidth

---

## Problem

A damped harmonic oscillator has natural frequency $\omega_0 = 100\ \mathrm{rad/s}$ and quality factor $Q = 25$. It is driven by a sinusoidal force $F_0\cos\omega t$. (a) Find the resonance frequency. (b) Find the full width at half maximum (FWHM) of the power resonance curve. (c) At what driving frequency is the amplitude exactly half the resonant amplitude?

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable              Symbol    Value            Unit        Dimension
───────────────────────────────────────────────────────────────────────
Natural frequency      ω0        100              rad/s       [T]^{-1}
Quality factor         Q         25               —           [1]
Resonance frequency    ωr        ?                rad/s       [T]^{-1}
FWHM (power)           Δω        ?                rad/s       [T]^{-1}
Half-amplitude freqs   ω±        ?                rad/s       [T]^{-1}
```

**Relevant laws:**
- Damped driven oscillator amplitude: $A(\omega) = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega^2)^2 + (\omega_0\omega/Q)^2}}$
- Power $\propto A^2$; half-power where $A^2 = A_{\max}^2/2$
- For $Q \gg 1$: resonance at $\omega_r \approx \omega_0$
- FWHM: $\Delta\omega = \omega_0/Q$
- Amplitude half-points: approximately $\omega_0 \pm \sqrt{3}\,\omega_0/(2Q)$

### Step S -- SIMPLIFY

$Q = 25 \gg 1$ → use high-$Q$ approximations. Resonance frequency shift is negligible.

### Step E -- EXECUTE

**(a)** $\omega_r = \omega_0\sqrt{1 - 1/(2Q^2)} = 100\sqrt{1 - 1/(2 \times 625)} = 100\sqrt{1 - 0.0008} \approx 100\ \mathrm{rad/s}$.

**(b)** $\Delta\omega = \omega_0/Q = 100/25 = 4.0\ \mathrm{rad/s}$.

In Hz: $\Delta f = \Delta\omega/(2\pi) = 0.637\ \mathrm{Hz}$.

**(c)** Amplitude half-points: $A(\omega) = A_{\max}/2$ when $|\omega - \omega_0| \approx \sqrt{3}\,\omega_0/(2Q)$.

$$\omega_\pm \approx 100 \pm \frac{\sqrt{3} \times 100}{50} = 100 \pm 3.46\ \mathrm{rad/s}$$

$\omega_- \approx 96.5\ \mathrm{rad/s}$, $\omega_+ \approx 103.5\ \mathrm{rad/s}$.

### Step R -- REFLECT

**Dimensional check (§0.2):** All frequencies in $\mathrm{rad/s}$ or $\mathrm{Hz}$ ($[T]^{-1}$). $Q$ dimensionless. ✓

**Physical interpretation:** The oscillator responds strongly only within $\pm 2\%$ of $\omega_0$. A higher $Q$ (lower damping) gives a sharper resonance -- the oscillator is more frequency-selective. At $Q = 25$, the resonance is moderately sharp (typical of a tuning fork).

**Limiting cases:**

| $Q$ | $\Delta\omega$ | Selectivity |
|-----|---------------|-------------|
| $Q \to \infty$ (no damping) | $0$ | Infinitely sharp (singularity at $\omega_0$) |
| $Q \to 0$ (overdamped) | $\infty$ | No resonance at all |

**Answer: (a) $\omega_r \approx 100\ \mathrm{rad/s}$, (b) $\Delta\omega = 4.0\ \mathrm{rad/s}$, (c) $\omega \approx 96.5$ and $103.5\ \mathrm{rad/s}$.**

**Answer: (a) $\omega_r \approx 100\ \mathrm{rad/s}$, (b) $\Delta\omega = 4.0\ \mathrm{rad/s}$ ($0.64\ \mathrm{Hz}$), (c) $\omega \approx 96.5$ and $103.5\ \mathrm{rad/s}$.**

> **Key insight:** The $Q$-factor determines everything: $Q = \omega_0/\Delta\omega$ (sharpness of resonance), $Q = 2\pi \times$ (energy stored / energy lost per cycle). Higher $Q$ means sharper resonance. The formulas are algebraic consequences of the equation of motion.
