# Gas Laws -- Calculation-First Training

> Philosophy: If you can calculate it, you at least understand it.
> How to use: Work through the example solution. The formula comes after -- as a summary of what your hands just did.
> Ratio: Beginner 2 : Intermediate 6 : Advanced 2 (10 patterns: 2-6-2)

---

## BEGINNER (2 patterns)

> Goal: 2 patterns. Both are special cases of PV=nRT. Temperature must ALWAYS be in K.

---

### Pattern 1: Boyle's Law (fixed n, T)

**Example.** A **gas** at **2.00 atm** occupies **3.00 L**. The **pressure** is increased to **6.00 atm** at **constant temperature**. What is the new **volume**?

```
P1 * V1 = P2 * V2
2.00 * 3.00 = 6.00 * V2
V2 = (2.00 * 3.00) / 6.00 = 1.00 L
```

> SEE: **"pressure"** changes + **"volume"** asked + **"constant temperature"** **"constant moles"**
> WRITE: $P_1 V_1 = P_2 V_2$

---

**Practice B1.** A **gas** at **1.50 atm** has **volume** **4.00 L**. **Pressure** increases to **4.50 atm** at **constant T**. New **volume**?

**Practice B2.** A **gas** at **800 mmHg** occupies **500 mL**. **Volume** expands to **1200 mL** at **constant T**. New **pressure** (mmHg)?

---

### Pattern 2: Charles's & Gay-Lussac's Laws (fixed n, one variable constant)

**Example (Charles).** A **gas** occupies **2.00 L** at **27.0°C**. The **temperature** is raised to **127.0°C** at **constant pressure**. What is the new **volume**?

```
T1 = 27.0 + 273 = 300 K
T2 = 127.0 + 273 = 400 K

V1 / T1 = V2 / T2
2.00 / 300 = V2 / 400
V2 = 2.00 * (400 / 300) = 2.67 L
```

**Example (Gay-Lussac).** A **sealed** container at **27.0°C** has **pressure** **2.00 atm**. Heated to **127.0°C** at **constant volume**. New **pressure**?

```
T1 = 27.0 + 273 = 300 K
T2 = 127.0 + 273 = 400 K

P1 / T1 = P2 / T2
2.00 / 300 = P2 / 400
P2 = 2.00 * (400 / 300) = 2.67 atm
```

> SEE: **"constant pressure"** + V,T changing $\to$ $\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$
> SEE: **"constant volume"** **"sealed"** **"rigid"** + P,T changing $\to$ $\dfrac{P_1}{T_1} = \dfrac{P_2}{T_2}$
>
> **T must be in K. Always.** See **°C** $\to$ **+273** first.

---

**Practice B3.** A **gas** at **127.0°C** occupies **3.00 L** at **constant P**. **Temperature** drops to **27.0°C**. New **volume**?

**Practice B4.** A **gas** at **-73.0°C** has **volume** **1.50 L** at **constant P**. **Temperature** rises to **27.0°C**. New **volume**?

**Practice B5.** A **sealed** container at **-23.0°C** has **pressure** **3.00 atm**. Heated to **227.0°C**. New **pressure**?

---

> Checkpoint. Triggers locked:
> - See **constant T** + P,V changing $\to$ $P_1V_1 = P_2V_2$
> - See **constant P** + V,T changing $\to$ $V_1/T_1 = V_2/T_2$
> - See **constant V** (**sealed**) + P,T changing $\to$ $P_1/T_1 = P_2/T_2$
> - See **°C** $\to$ **+273**. Always. First.

---

## INTERMEDIATE (6 patterns)

> Goal: $PV = nRT$ is the only equation you really need. Everything derives from it.

---

### Pattern 3: Combined Gas Law (nothing constant)

**Example.** A **gas** at **2.00 atm**, **27.0°C** occupies **5.00 L**. What **volume** at **1.00 atm** and **127.0°C**?

```
T1 = 27.0 + 273 = 300 K
T2 = 127.0 + 273 = 400 K

P1*V1 / T1 = P2*V2 / T2
(2.00 * 5.00) / 300 = (1.00 * V2) / 400
V2 = (2.00 * 5.00 * 400) / (300 * 1.00) = 13.3 L
```

> SEE: P, V, T **all changing** -- no "constant" keyword in sight
> WRITE: $\dfrac{P_1 V_1}{T_1} = \dfrac{P_2 V_2}{T_2}$ ($n$ constant implied)

---

**Practice I1.** A **gas** at **1.20 atm**, **25.0°C**, occupies **10.0 L**. What **volume** at **2.40 atm** and **75.0°C**?

**Practice I2.** A **gas** at **STP** occupies **4.00 L**. What **pressure** (atm) at **100.0°C** if **volume** is compressed to **2.00 L**?

---

### Pattern 4: Ideal Gas Law (the master equation)

**Example.** What **volume** does **0.500 mol** of $\ce{N2}$ occupy at **25.0°C** and **1.50 atm**?

```
T = 25.0 + 273 = 298 K

PV = nRT
V = nRT / P = (0.500 * 0.08206 * 298) / 1.50 = 8.15 L
```

> SEE: **moles** + **P** + **T** + **V** -- any 3 of the 4 given
> WRITE: $PV = nRT$

| Symbol | Meaning | Value |
|---|---|---|
| $P$ | pressure | must be **atm** |
| $V$ | volume | L |
| $n$ | moles | mol |
| $R$ | gas constant | $0.08206 \ \dfrac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}$ |
| $T$ | temperature | must be **K** |

---

**Practice I3.** How many **moles** of gas occupy **10.0 L** at **2.00 atm** and **27.0°C**?

**Practice I4.** What is the **pressure** (atm) of **1.00 mol** $\ce{He}$ in a **5.00 L** container at **-23.0°C**?

**Practice I5.** What **temperature** (°C) is required for **2.00 mol** of gas at **3.00 atm** to occupy **20.0 L**?

---

### Pattern 5: Molar Mass from Gas Density

**Example (STP).** A **gas** has **density** **1.96 g/L** at **STP**. Find its **molar mass**.

```
At STP: 1 mol = 22.4 L
M = density * 22.4 = 1.96 * 22.4 = 43.9 g/mol  -->  CO2
```

**Example (non-STP).** A **gas** has **density** **2.50 g/L** at **30.0°C** and **1.20 atm**. Find its **molar mass**.

```
T = 30.0 + 273 = 303 K

M = d * (RT / P) = 2.50 * (0.08206 * 303 / 1.20) = 51.8 g/mol
```

> SEE: **"density"** **"g/L"** + **"molar mass"**
> WRITE: $M = \dfrac{dRT}{P}$ or at STP: $M = d \times 22.4$
>
> Derivation: $PV = nRT$, $n = m/M$, so $M = (m/V)(RT/P) = dRT/P$.

---

**Practice I6.** A **gas** has **density** **1.25 g/L** at **STP**. **Molar mass**? Identify: $\ce{N2}$ (28.0), $\ce{O2}$ (32.0), $\ce{CO2}$ (44.0).

**Practice I7.** A **gas** has **density** **3.17 g/L** at **25.0°C** and **0.950 atm**. **Molar mass**?

---

### Pattern 6: Dalton's Law of Partial Pressures

**Example.** A mixture contains **0.200 mol** $\ce{N2}$, **0.300 mol** $\ce{O2}$, **0.100 mol** $\ce{He}$ in **10.0 L** at **27.0°C**. Find **total pressure** and **partial pressures**.

```
n_total = 0.200 + 0.300 + 0.100 = 0.600 mol
T = 27.0 + 273 = 300 K

P_total = nRT / V = (0.600 * 0.08206 * 300) / 10.0 = 1.48 atm

P(N2)  = 1.48 * (0.200 / 0.600) = 0.493 atm
P(O2)  = 1.48 * (0.300 / 0.600) = 0.740 atm
P(He)  = 1.48 * (0.100 / 0.600) = 0.247 atm
```

> SEE: **"mixture"** of gases + **"partial pressure"** **"total pressure"**
> WRITE: $P_{\text{total}} = \sum P_i$ and $P_i = X_i \cdot P_{\text{total}}$ where $X_i = \dfrac{n_i}{n_{\text{total}}}$

---

**Practice I8.** **0.500 mol** $\ce{H2}$ and **0.300 mol** $\ce{N2}$ in **5.00 L** at **25.0°C**. Find **total pressure** and **partial pressures**.

---

### Pattern 7: Gas Stoichiometry (volumes at same T,P)

**Example.** $\ce{2H2 + O2 -> 2H2O}$ (all gases at same T, P). What **volume** of $\ce{O2}$ reacts with **10.0 L** of $\ce{H2}$?

```
At same T and P: volume ratio = mole ratio (Avogadro's law)
V(O2) = 10.0 * (1/2) = 5.00 L
```

> SEE: **"volume"** of gas A + **"volume"** of gas B + **"same temperature and pressure"**
> WRITE: $\dfrac{V_A}{\text{coeff}_A} = \dfrac{V_B}{\text{coeff}_B}$
>
> Gas volumes at same T,P act like moles. No conversion needed.

---

**Practice I9.** $\ce{N2 + 3H2 -> 2NH3}$. All gases at same T,P. **15.0 L** of $\ce{H2}$ reacts. **Volume** of $\ce{NH3}$? **Volume** of $\ce{N2}$ consumed?

---

### Pattern 8: Graham's Law of Effusion

**Example.** The **rate of effusion** of $\ce{O2}$ (M = 32.0) is **1.00 mL/min**. What is the rate for $\ce{H2}$ (M = 2.02)?

```
rate(H2) / rate(O2) = sqrt( M(O2) / M(H2) )
rate(H2) = 1.00 * sqrt(32.0 / 2.02) = 1.00 * 3.98 = 3.98 mL/min
```

> SEE: **"effusion"** **"diffusion"** **"rate"** **"Graham"** + two gases compared
> WRITE: $\dfrac{\text{rate}_1}{\text{rate}_2} = \sqrt{\dfrac{M_2}{M_1}}$
>
> Lighter = faster. Molar mass ratio is **inverted**.

---

**Practice I10.** An unknown **gas** **effuses** at **0.500** times the **rate** of $\ce{He}$ (M = 4.00). Find the **molar mass**.

---

## ADVANCED (2 patterns) -- College-Level

---

### Pattern 9: Collecting Gas Over Water

**Example.** $\ce{H2}$ gas is **collected over water** at **25.0°C** and **755 mmHg** barometric pressure. Volume = **150.0 mL**. Vapor pressure of $\ce{H2O}$ at $25.0^\circ\text{C}$ = **23.8 mmHg**. Find **mass** of dry $\ce{H2}$.

```
P_dry(H2) = P_total - P_water = 755 - 23.8 = 731.2 mmHg
P_dry(H2) in atm = 731.2 / 760 = 0.9621 atm
T = 25.0 + 273 = 298 K
V = 150.0 mL = 0.1500 L

n(H2) = PV / RT = (0.9621 * 0.1500) / (0.08206 * 298) = 0.00590 mol
m(H2) = 0.00590 * 2.016 = 0.0119 g
```

> SEE: **"collected over water"** **"over water"** + barometric pressure + vapor pressure given
> WRITE: $P_{\text{dry}} = P_{\text{total}} - P_{\ce{H2O}}$ then $PV = nRT$ as usual.

---

**Practice A1.** $\ce{O2}$ is **collected over water** at **30.0°C** ($P_{\ce{H2O}} = 31.8 \ \text{mmHg}$) and **740 mmHg**. Volume = **250.0 mL**. Find **mass** of dry $\ce{O2}$.

---

### Pattern 10: Van der Waals Equation (Real Gas)

**Example.** **2.00 mol** of $\ce{NH3}$ in **5.00 L** at **27.0°C**. Find **pressure** via (a) ideal gas law, (b) van der Waals.

For $\ce{NH3}$: $a = 4.17 \ \text{L}^2\!\cdot\!\text{atm/mol}^2$, $b = 0.0371 \ \text{L/mol}$

```
T = 27.0 + 273 = 300 K

(a) Ideal:
P = nRT / V = (2.00 * 0.08206 * 300) / 5.00 = 9.85 atm

(b) Van der Waals:
P = nRT / (V - nb) - a*(n/V)^2
P = (2.00 * 0.08206 * 300) / (5.00 - 2.00*0.0371) - 4.17*(2.00/5.00)^2
P = 49.236 / 4.9258 - 4.17*0.1600
P = 9.996 - 0.667 = 9.33 atm
```

> SEE: **"van der Waals"** **"real gas"** + $a$, $b$ constants given
> WRITE: $\left( P + \dfrac{an^2}{V^2} \right)(V - nb) = nRT$
>
> $a$ corrects for attraction. $b$ corrects for molecular volume.

---

**Practice A2.** **3.00 mol** $\ce{CO2}$ ($a = 3.59$, $b = 0.0427$) in **10.0 L** at **100.0°C**. Find **pressure** via (a) ideal, (b) van der Waals.

---

## MASTER CHEAT SHEET -- Trigger to Equation

| # | SEE this word/phrase... | Your hand writes... |
|---|---|---|
| 1 | **constant T**, P,V changing | $P_1 V_1 = P_2 V_2$ |
| 2 | **constant P**, V,T changing | $\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$ (T in K) |
|   | **constant V**, **sealed**, **rigid** | $\dfrac{P_1}{T_1} = \dfrac{P_2}{T_2}$ (T in K) |
| 3 | P, V, T **all changing**, no "constant" | $\dfrac{P_1 V_1}{T_1} = \dfrac{P_2 V_2}{T_2}$ |
| 4 | 3 of {P, V, n, T} given | $PV = nRT$ |
| 5 | **density** + **molar mass** | $M = \dfrac{dRT}{P}$ (STP: $M = d \times 22.4$) |
| 6 | **mixture** + **partial pressure** | $P_i = X_i P_{\text{total}}$, $X_i = \dfrac{n_i}{n_{\text{total}}}$ |
| 7 | Gas **volumes** at **same T,P** | volume ratio = mole ratio |
| 8 | **effusion**, **diffusion**, **rate** | $\dfrac{\text{rate}_1}{\text{rate}_2} = \sqrt{\dfrac{M_2}{M_1}}$ |
| 9 | **over water**, **collected over** | $P_{\text{dry}} = P_{\text{total}} - P_{\ce{H2O}}$ then $PV=nRT$ |
| 10 | **van der Waals**, **real gas** | $\left( P + \dfrac{an^2}{V^2} \right)(V - nb) = nRT$ |

---

## CONSTANT REFERENCE

| Constant | Value |
|---|---|
| $R$ (gas, L·atm) | $0.08206 \ \dfrac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}$ |
| STP | $0^\circ\text{C}$ (273 K), $1 \ \text{atm}$ |
| Molar volume at STP | $22.4 \ \text{L/mol}$ |
| $1 \ \text{atm}$ | $760 \ \text{mmHg} = 760 \ \text{torr}$ |
| $T(\text{K})$ | $T(^\circ\text{C}) + 273$ |

---

## ANSWERS

> Solve everything first. Check after.

**Beginner**
- B1: $1.33 \ \text{L}$ &nbsp;&nbsp;|&nbsp;&nbsp; B2: $333 \ \text{mmHg}$
- B3: $2.25 \ \text{L}$ &nbsp;&nbsp;|&nbsp;&nbsp; B4: $2.25 \ \text{L}$ &nbsp;&nbsp;|&nbsp;&nbsp; B5: $6.00 \ \text{atm}$

**Intermediate**
- I1: $5.84 \ \text{L}$ &nbsp;&nbsp;|&nbsp;&nbsp; I2: $2.73 \ \text{atm}$
- I3: $0.813 \ \text{mol}$ &nbsp;&nbsp;|&nbsp;&nbsp; I4: $4.10 \ \text{atm}$ &nbsp;&nbsp;|&nbsp;&nbsp; I5: $92.5^\circ\text{C}$
- I6: $28.0 \ \text{g/mol} \ (\ce{N2})$ &nbsp;&nbsp;|&nbsp;&nbsp; I7: $81.4 \ \text{g/mol}$
- I8: $P_{\text{total}} = 3.91 \ \text{atm}$, $P(\ce{H2}) = 2.44 \ \text{atm}$, $P(\ce{N2}) = 1.47 \ \text{atm}$
- I9: $10.0 \ \text{L} \ \ce{NH3}$, $5.00 \ \text{L} \ \ce{N2}$
- I10: $M = 16.0 \ \text{g/mol} \ (\ce{CH4})$

**Advanced**
- A1: $0.304 \ \text{g} \ \ce{O2}$
- A2: (a) $9.19 \ \text{atm}$ &nbsp;&nbsp;(b) $8.89 \ \text{atm}$
