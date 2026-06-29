# 08: Camera Flash -- RC Circuit Timing

**Type:** Engineering | **Topic:** E&M / DC Circuits | **Prerequisites:** RC circuits, energy storage, exponential decay

---

## Problem

A camera flash unit charges a capacitor $C = 120\ \mu\mathrm{F}$ through a resistor $R_1 = 50\ \mathrm{k}\Omega$ from a $V_0 = 300\ \mathrm{V}$ battery. When triggered, the capacitor discharges through the flash lamp (modeled as a second resistor $R_2 = 0.50\ \Omega$). Find: (a) the charging time to reach $95\%$ of full voltage, (b) the energy stored when fully charged, (c) the peak discharge current, (d) the time for the flash pulse to decay to $10\%$ of peak intensity (intensity $\propto I^2$).

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable        Symbol   Value           Unit        Dimension
───────────────────────────────────────────────────────────────
Capacitance      C       1.20e-4         F           [M]^{-1}[L]^{-2}[Q]^2[T]^2
Charge resistor  R1      5.0e4           Ω           [M][L]^2[Q]^{-2}[T]^{-1}
Discharge R      R2      0.50            Ω           [M][L]^2[Q]^{-2}[T]^{-1}
Battery voltage  V0      300             V           [M][L]^2[Q]^{-1}[T]^{-2}
Target fraction  —       0.95            —           [1]
```

**Relevant laws:**
- **Charging:** $V_C(t) = V_0(1 - e^{-t/\tau_1})$, $\tau_1 = R_1C$
- **Discharging:** $I(t) = I_0 e^{-t/\tau_2}$, $\tau_2 = R_2C$
- **Energy:** $U = \frac{1}{2}CV^2$
- **Peak current (Ohm's law at $t=0^+$):** $I_0 = V_0/R_2$

### Step S -- SIMPLIFY

- Ideal capacitor, resistors, and battery
- Charging and discharging are independent phases
- Flash intensity $\propto I^2$ (resistive heating in the lamp)

### Step E -- EXECUTE

**(a) Charging time to $95\%$:**

$$\tau_1 = R_1C = (5.0 \times 10^{4})(1.20 \times 10^{-4}) = 6.0\ \mathrm{s}$$

$$0.95 = 1 - e^{-t_{95}/\tau_1} \quad\Rightarrow\quad e^{-t_{95}/\tau_1} = 0.05$$

$$t_{95} = -\tau_1\ln(0.05) = 6.0 \times 2.996 \approx 18.0\ \mathrm{s}$$

**(b) Energy stored:**

$$U = \frac{1}{2}CV_0^2 = \frac{1}{2}(1.20 \times 10^{-4})(300)^2 = 0.5 \times 1.20 \times 10^{-4} \times 9.0 \times 10^{4} = 5.4\ \mathrm{J}$$

**(c) Peak discharge current:**

At $t = 0^+$ (immediately after triggering), the capacitor voltage is still $V_0 = 300\ \mathrm{V}$ (voltage across a capacitor cannot change instantaneously).

$$I_0 = \frac{V_0}{R_2} = \frac{300}{0.50} = 600\ \mathrm{A}$$

**(d) Time for intensity to drop to $10\%$:**

Flash intensity $P \propto I^2$. Discharge current: $I(t) = I_0 e^{-t/\tau_2}$.

$$\tau_2 = R_2C = (0.50)(1.20 \times 10^{-4}) = 6.0 \times 10^{-5}\ \mathrm{s} = 60\ \mu\mathrm{s}$$

$$\frac{I^2(t)}{I_0^2} = e^{-2t/\tau_2} = 0.10$$

$$-\frac{2t}{\tau_2} = \ln(0.10) = -2.303$$

$$t_{10\%} = \frac{2.303 \times \tau_2}{2} = 1.151 \times 6.0 \times 10^{-5} \approx 6.9 \times 10^{-5}\ \mathrm{s} = 69\ \mu\mathrm{s}$$

### Step R -- REFLECT

**Dimensional check:**
- $\tau = RC$: $[M][L]^2[Q]^{-2}[T]^{-1} \times [M]^{-1}[L]^{-2}[Q]^2[T]^2 = [T]$. ✓
- $U = \frac{1}{2}CV^2$: $[M]^{-1}[L]^{-2}[Q]^2[T]^2 \times ([M][L]^2[Q]^{-1}[T]^{-2})^2 = [M][L]^2[T]^{-2} = \mathrm{J}$. ✓

**Engineering analysis:**

| Parameter | Value | Significance |
|-----------|-------|-------------|
| Charge time | $18\ \mathrm{s}$ | Acceptable wait between flashes |
| Stored energy | $5.4\ \mathrm{J}$ | Energizes a small xenon tube |
| Peak current | $600\ \mathrm{A}$ | Very high, but lasts only $\sim 100\ \mu\mathrm{s}$ |
| Flash duration | $\sim 70\ \mu\mathrm{s}$ | Freezes fast motion (sports photography) |

The enormous ratio $R_1/R_2 = 10^5$ is the key design feature: slow charge through a large resistor, rapid discharge through a tiny resistance. The energy is accumulated slowly and released explosively. This is the same principle used in defibrillators, pulsed lasers, and capacitive discharge welding.

**Answer: (a) $18.0\ \mathrm{s}$, (b) $5.4\ \mathrm{J}$, (c) $600\ \mathrm{A}$, (d) $69\ \mu\mathrm{s}$.**

> **Key insight:** The RC time constant $\tau = RC$ controls everything. Charging is $\tau_1 = R_1C$; discharging is $\tau_2 = R_2C$. The ratio $\tau_1/\tau_2 = R_1/R_2 = 10^5$ means the flash is 100,000 times faster than the charge. This is pure algebra -- no visualization of "electrons flowing" needed.
