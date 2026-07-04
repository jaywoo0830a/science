# Chemical Kinetics -- Calculation-First Training

> Philosophy: If you can calculate it, you at least understand it.
> How to use: Work through the example solution. The formula comes after -- as a summary of what your hands just did.
> Ratio: Beginner 2 : Intermediate 6 : Advanced 2 (10 patterns: 2-6-2)

---

## BEGINNER (2 patterns)

> Goal: 2 patterns. Find rate law from data. Know your orders.

---

### Pattern 1: Rate Law from Initial Rates

**Example.** Find the **rate law** and **rate constant** $k$.

| Experiment | $[\ce{A}]$ (M) | $[\ce{B}]$ (M) | Initial Rate (M/s) |
|---|---|---|---|
| 1 | 0.100 | 0.100 | $4.0 \times 10^{-5}$ |
| 2 | 0.200 | 0.100 | $1.6 \times 10^{-4}$ |
| 3 | 0.100 | 0.200 | $8.0 \times 10^{-5}$ |

```
Compare Expt 1 → 2: [A] doubles, [B] constant.
Rate: (1.6*10^{-4}) / (4.0*10^{-5}) = 4.0 = 2^m  →  m = 2

Compare Expt 1 → 3: [B] doubles, [A] constant.
Rate: (8.0*10^{-5}) / (4.0*10^{-5}) = 2.0 = 2^n  →  n = 1

Rate law: rate = k[A]^2[B]^1  (3rd order overall)

k = rate / ([A]^2[B]) = 4.0*10^{-5} / (0.100^2 * 0.100)
k = 4.0*10^{-5} / 1.0*10^{-3} = 0.040 M^{-2}·s^{-1}
```

> SEE: table of **initial rates** with varying concentrations
> WRITE: $\dfrac{\text{rate}_2}{\text{rate}_1} = \left(\dfrac{[\text{A}]_2}{[\text{A}]_1}\right)^m$ (when $[\text{B}]$ constant)
>
> Hand reflex: Pick two rows where only one conc changes $\to$ rate ratio = conc ratio$^{\text{order}}$ $\to$ solve for order.

---

**Practice B1.** Find the **rate law** and $k$.

| Expt | $[\ce{NO}]$ (M) | $[\ce{O2}]$ (M) | Rate (M/s) |
|---|---|---|---|
| 1 | 0.010 | 0.010 | $2.5 \times 10^{-5}$ |
| 2 | 0.020 | 0.010 | $1.0 \times 10^{-4}$ |
| 3 | 0.010 | 0.020 | $5.0 \times 10^{-5}$ |

**Practice B2.** Find the **rate law** and $k$.

| Expt | $[\ce{A}]$ (M) | $[\ce{B}]$ (M) | $[\ce{C}]$ (M) | Rate (M/s) |
|---|---|---|---|---|
| 1 | 0.10 | 0.10 | 0.10 | $3.0 \times 10^{-3}$ |
| 2 | 0.20 | 0.10 | 0.10 | $6.0 \times 10^{-3}$ |
| 3 | 0.10 | 0.20 | 0.10 | $1.2 \times 10^{-2}$ |
| 4 | 0.10 | 0.10 | 0.20 | $3.0 \times 10^{-3}$ |

---

### Pattern 2: Rate Constant Units

**Example.** Determine the **units** of $k$ for each overall order.

```
rate = k[A]^n    rate has units M·s^{-1} (or M/time)

0th order: k = rate           → units: M·s^{-1}
1st order: k = rate/[A]       → units: s^{-1}
2nd order: k = rate/[A]^2     → units: M^{-1}·s^{-1}
3rd order: k = rate/[A]^3     → units: M^{-2}·s^{-1}

General: units of k = M^{1-n}·s^{-1}  where n = overall order
```

> SEE: **"units of k"** **"rate constant units"** + rate law given
> WRITE: $\text{units of } k = \text{M}^{1-n} \cdot \text{s}^{-1}$ where $n$ = overall order
>
> Hand reflex: Look at overall order $\to$ $n=0$: M/s, $n=1$: 1/s, $n=2$: 1/(M·s).

---

**Practice B3.** What are the **units** of $k$ for rate = $k[\ce{A}]^2[\ce{B}]$?

---

## INTERMEDIATE (6 patterns)

> Goal: Integrated rate laws. Half-lives. Arrhenius. Mechanisms.

---

### Pattern 3: First-Order Integrated Rate Law

**Example.** $\ce{N2O5}$ decomposes by first-order kinetics with $k = 5.0 \times 10^{-4} \ \text{s}^{-1}$. Initial $[\ce{N2O5}] = 0.200 \ \text{M}$. Find **[N2O5]** after **30.0 minutes**.

$$
\begin{aligned}
t &= 30.0 \ \text{min} \times 60 = 1800 \ \text{s} \\[4pt]
\ln[\ce{A}]_t &= \ln[\ce{A}]_0 - kt \\[4pt]
\ln[\ce{N2O5}]_t &= \ln(0.200) - (5.0 \times 10^{-4})(1800) \\[4pt]
&= -1.609 - 0.900 = -2.509 \\[4pt]
[\ce{N2O5}]_t &= e^{-2.509} = \boxed{0.0814 \ \text{M}}
\end{aligned}
$$

> SEE: **"first order"** **"k in s^{-1}"** + initial [] + time
> WRITE: $\ln[\ce{A}]_t = \ln[\ce{A}]_0 - kt$ or $[\ce{A}]_t = [\ce{A}]_0 e^{-kt}$
>
> Hand reflex: First order $\to$ $\ln$ equation $\to$ plug $k$ and $t$ (watch units!) $\to$ exponential.

---

**Practice I1.** **First-order** reaction ($k = 2.5 \times 10^{-3} \ \text{s}^{-1}$). $[\ce{A}]_0 = 0.400 \ \text{M}$. Find **[A]** after **200 s**.

**Practice I2.** **First-order** ($k = 1.0 \times 10^{-3} \ \text{s}^{-1}$). How long for $[\ce{A}]$ to drop from $0.500$ to $0.125$?

---

### Pattern 4: Half-Life

**Example.** **First-order** reaction has $k = 3.0 \times 10^{-4} \ \text{s}^{-1}$. Find $t_{1/2}$.

$$
t_{1/2} = \dfrac{\ln 2}{k} = \dfrac{0.693}{3.0 \times 10^{-4}} = \boxed{2310 \ \text{s} \ (38.5 \ \text{min})}
$$

**Example (second-order).** For $\ce{2NO2 -> 2NO + O2}$, $k = 0.54 \ \text{M}^{-1}\!\cdot\!\text{s}^{-1}$, $[\ce{NO2}]_0 = 0.010 \ \text{M}$. Find $t_{1/2}$.

$$
t_{1/2} = \dfrac{1}{k[\ce{A}]_0} = \dfrac{1}{0.54 \times 0.010} = \boxed{185 \ \text{s}}
$$

| Order | Half-life formula | Depends on $[\ce{A}]_0$? |
|---|---|---|
| 0 | $t_{1/2} = \dfrac{[\ce{A}]_0}{2k}$ | Yes |
| 1 | $t_{1/2} = \dfrac{\ln 2}{k}$ | **No** (constant!) |
| 2 | $t_{1/2} = \dfrac{1}{k[\ce{A}]_0}$ | Yes |

> SEE: **"half-life"** **"t1/2"** + order of reaction
> WRITE: 1st: $t_{1/2} = \dfrac{0.693}{k}$. 2nd: $t_{1/2} = \dfrac{1}{k[\ce{A}]_0}$.
>
> Hand reflex: First order $\to$ divide 0.693 by $k$. Second order $\to$ divide 1 by $(k \cdot [\ce{A}]_0)$.

---

**Practice I3.** A **first-order** reaction ($k = 0.0231 \ \text{min}^{-1}$). $t_{1/2}$? After how many half-lives is 93.75% complete?

**Practice I4.** **Second-order** ($k = 0.020 \ \text{M}^{-1}\!\cdot\!\text{s}^{-1}$), $[\ce{A}]_0 = 0.50 \ \text{M}$. $t_{1/2}$?

---

### Pattern 5: Second-Order Integrated Rate Law

**Example.** $\ce{2HI -> H2 + I2}$ is second order with $k = 0.031 \ \text{M}^{-1}\!\cdot\!\text{min}^{-1}$. $[\ce{HI}]_0 = 0.500 \ \text{M}$. Find **[HI]** after **50.0 min**.

$$
\begin{aligned}
\dfrac{1}{[\ce{HI}]_t} &= \dfrac{1}{[\ce{HI}]_0} + kt \\[4pt]
\dfrac{1}{[\ce{HI}]_t} &= \dfrac{1}{0.500} + 0.031 \times 50.0 \\[4pt]
&= 2.000 + 1.550 = 3.550 \\[4pt]
[\ce{HI}]_t &= \dfrac{1}{3.550} = \boxed{0.282 \ \text{M}}
\end{aligned}
$$

> SEE: **"second order"** **"k in M^{-1}s^{-1}"** + initial [] + time
> WRITE: $\dfrac{1}{[\ce{A}]_t} = \dfrac{1}{[\ce{A}]_0} + kt$
>
> Hand reflex: Second order $\to$ $1/[\ce{A}]$ vs $t$ is linear $\to$ plug into reciprocal equation.

---

**Practice I5.** **Second-order** ($k = 0.045 \ \text{M}^{-1}\!\cdot\!\text{min}^{-1}$). $[\ce{A}]_0 = 0.800 \ \text{M}$. Find time for $[\ce{A}]$ to reach $0.200 \ \text{M}$.

---

### Pattern 6: Arrhenius Equation

**Example.** A reaction has $k_1 = 3.0 \times 10^{-3} \ \text{s}^{-1}$ at $T_1 = 300 \ \text{K}$ and $k_2 = 6.0 \times 10^{-2} \ \text{s}^{-1}$ at $T_2 = 350 \ \text{K}$. Find $E_a$.

$$
\begin{aligned}
\ln\left(\dfrac{k_2}{k_1}\right) &= \dfrac{E_a}{R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right) \\[4pt]
\ln\left(\dfrac{6.0 \times 10^{-2}}{3.0 \times 10^{-3}}\right) &= \dfrac{E_a}{8.314}\left(\dfrac{1}{300} - \dfrac{1}{350}\right) \\[4pt]
\ln(20.0) = 2.996 &= \dfrac{E_a}{8.314} \times (0.003333 - 0.002857) \\[4pt]
2.996 &= \dfrac{E_a}{8.314} \times 0.000476 \\[4pt]
E_a &= \dfrac{2.996 \times 8.314}{0.000476} = \boxed{5.23 \times 10^{4} \ \text{J/mol} = 52.3 \ \text{kJ/mol}}
\end{aligned}
$$

> SEE: **"Ea"** **"activation energy"** **"Arrhenius"** + two $k$ at two $T$
> WRITE: $\ln\left(\dfrac{k_2}{k_1}\right) = \dfrac{E_a}{R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)$
>
> $R = 8.314 \ \text{J/mol·K}$. $E_a$ comes out in J/mol.
> Also: $k = Ae^{-E_a/RT}$ (the full Arrhenius equation).
>
> Hand reflex: Two $k$, two $T$ $\to$ Arrhenius two-point form $\to$ solve for $E_a$ in J.

---

**Practice I6.** $k_1 = 2.0 \times 10^{-5}$ at $25^\circ\text{C}$, $k_2 = 8.0 \times 10^{-5}$ at $50^\circ\text{C}$. Find $E_a$ (kJ/mol).

**Practice I7.** $E_a = 75.0 \ \text{kJ/mol}$, $k_1 = 0.010 \ \text{s}^{-1}$ at $300 \ \text{K}$. Find $k$ at $350 \ \text{K}$.

---

### Pattern 7: Reaction Mechanisms

**Example.** The mechanism for $\ce{2NO + O2 -> 2NO2}$ is:

$$
\begin{aligned}
\ce{NO + O2 &<=> NO3} \quad &\text{(fast equilibrium)} \\
\ce{NO3 + NO &-> 2NO2} \quad &\text{(slow, rate-determining)}
\end{aligned}
$$

Derive the **rate law**.

```
Rate is controlled by the slow step:
rate = k2[NO3][NO]

But [NO3] is an intermediate! Express via fast equilibrium:
K1 = [NO3] / ([NO][O2])  →  [NO3] = K1[NO][O2]

Substitute:
rate = k2 * K1 * [NO][O2] * [NO] = k[NO]^2[O2]   where k = k2*K1
```

> SEE: **"mechanism"** **"slow step"** **"rate-determining"** **"fast equilibrium"** + elementary steps
> WRITE: rate = $k$[reactants of slow step]. Replace intermediates using fast equilibrium.
>
> Hand reflex: Rate from slow step $\to$ intermediates = bad $\to$ replace via fast equilibrium $K$ $\to$ final rate law.

---

**Practice I8.** Mechanism:

$$
\begin{aligned}
\ce{A + B &<=> C} \quad &\text{(fast equilibrium)} \\
\ce{C + A &-> D} \quad &\text{(slow)}
\end{aligned}
$$

Derive the **rate law** for production of $\ce{D}$.

---

### Pattern 8: Determining Order from Concentration vs. Time Data

**Example.** Determine the **order** and $k$ from data.

| Time (s) | $[\ce{A}]$ (M) | $\ln[\ce{A}]$ | $1/[\ce{A}]$ |
|---|---|---|---|
| 0 | 1.000 | 0 | 1.00 |
| 100 | 0.607 | $-0.499$ | 1.65 |
| 200 | 0.368 | $-1.000$ | 2.72 |
| 300 | 0.223 | $-1.501$ | 4.48 |
| 400 | 0.135 | $-2.002$ | 7.41 |

Check which plot is linear:

- $[\ce{A}]$ vs $t$? No (not 0th order).
- $\ln[\ce{A}]$ vs $t$? $\Delta y/\Delta x = (-2.002 - 0)/(400 - 0) = -0.00500$ -- **linear!**
  1st order. $k = -(\text{slope}) = 0.00500 \ \text{s}^{-1}$.
- $1/[\ce{A}]$ vs $t$? Check -- not linear.

> SEE: table of **[A]** vs **time** + asked to find **order**
> WRITE: Calculate $\ln[\ce{A}]$ and $1/[\ce{A}]$ for each $t$. Plot. Linear plot determines order.
>
> - $[\ce{A}]$ linear: 0th order
> - $\ln[\ce{A}]$ linear: 1st order
> - $1/[\ce{A}]$ linear: 2nd order

---

**Practice I9.** Determine **order** and $k$.

| Time (s) | $[\ce{A}]$ (M) |
|---|---|
| 0 | 0.500 |
| 50 | 0.333 |
| 100 | 0.250 |
| 200 | 0.167 |

(Hint: try $1/[\ce{A}]$ vs $t$)

---

## ADVANCED (2 patterns) -- College-Level

---

### Pattern 9: Steady-State Approximation

**Example.** For $\ce{A <=>[k1][k_{-1}] B ->[k2] C}$, find the rate law using **steady-state** for $\ce{B}$.

$$
\begin{aligned}
\dfrac{d[\ce{B}]}{dt} &= k_1[\ce{A}] - k_{-1}[\ce{B}] - k_2[\ce{B}] \approx 0 \quad (\text{steady state}) \\[4pt]
[\ce{B}]_{\text{ss}} &= \dfrac{k_1[\ce{A}]}{k_{-1} + k_2} \\[4pt]
\text{rate} = \dfrac{d[\ce{C}]}{dt} &= k_2[\ce{B}] = \dfrac{k_1 k_2}{k_{-1} + k_2}[\ce{A}]
\end{aligned}
$$

If $k_2 \gg k_{-1}$ (B consumed fast): rate $\approx k_1[\ce{A}]$ (first step rate-determining).
If $k_{-1} \gg k_2$ (B goes back to A): rate $\approx \dfrac{k_1 k_2}{k_{-1}}[\ce{A}]$ (pre-equilibrium).

> SEE: **"steady state"** **"d[B]/dt = 0"** + complex mechanism
> WRITE: Set $d[\text{intermediate}]/dt = 0$ $\to$ solve for [intermediate] $\to$ plug into rate.

---

**Practice A1.** $\ce{A ->[k1] B ->[k2] C}$. Use **steady-state** on $\ce{B}$ to find $[\ce{B}]_{\text{ss}}$ and rate of $\ce{C}$ formation.

---

### Pattern 10: Catalysis -- Arrhenius with Catalyst

**Example.** Uncatalyzed: $E_a = 125 \ \text{kJ/mol}$. Catalyzed: $E_a = 75 \ \text{kJ/mol}$. By what factor does the **catalyst** increase the rate at $300 \ \text{K}$? Assume same $A$.

$$
\begin{aligned}
k_{\text{cat}} &= A e^{-E_{a,\text{cat}}/RT} \\
k_{\text{uncat}} &= A e^{-E_{a,\text{uncat}}/RT} \\[4pt]
\dfrac{k_{\text{cat}}}{k_{\text{uncat}}} &= e^{-(E_{a,\text{cat}} - E_{a,\text{uncat}})/RT} \\[4pt]
&= e^{-(75000 - 125000)/(8.314 \times 300)} \\[4pt]
&= e^{+50000/2494.2} = e^{20.05} = \boxed{5.1 \times 10^{8}}
\end{aligned}
$$

The catalyst speeds up the reaction by a factor of **500 million**.

> SEE: **"catalyst"** **"lowered Ea"** + two activation energies
> WRITE: $\dfrac{k_{\text{cat}}}{k_{\text{uncat}}} = e^{\Delta E_a / RT}$ where $\Delta E_a = E_{a,\text{uncat}} - E_{a,\text{cat}}$
>
> Hand reflex: Smaller $E_a$ $\to$ bigger $k$ $\to$ ratio = $e^{\Delta E_a/RT}$.

---

**Practice A2.** A **catalyst** lowers $E_a$ from $100$ to $60 \ \text{kJ/mol}$. Rate increase factor at $350 \ \text{K}$?

---

## MASTER CHEAT SHEET -- Trigger to Equation

| # | SEE this word/phrase... | Your hand writes... |
|---|---|---|
| 1 | **initial rates** table | $\dfrac{\text{rate}_2}{\text{rate}_1} = \left(\dfrac{[\text{A}]_2}{[\text{A}]_1}\right)^m$ |
| 2 | **units of k** | $\text{M}^{1-n} \cdot \text{s}^{-1}$ ($n$ = overall order) |
| 3 | **first order** + $k$ + $t$ | $\ln[\ce{A}]_t = \ln[\ce{A}]_0 - kt$ |
| 4 | **half-life** **t1/2** | 1st: $0.693/k$, 2nd: $1/(k[\ce{A}]_0)$ |
| 5 | **second order** + $k$ + $t$ | $\dfrac{1}{[\ce{A}]_t} = \dfrac{1}{[\ce{A}]_0} + kt$ |
| 6 | **Ea** **Arrhenius** two $k$, two $T$ | $\ln\dfrac{k_2}{k_1} = \dfrac{E_a}{R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)$ |
| 7 | **mechanism** **slow step** | rate from slow step, replace intermediates via fast equilibrium |
| 8 | **[A] vs time** data, find order | linear $[\ce{A}]$: 0th, linear $\ln[\ce{A}]$: 1st, linear $1/[\ce{A}]$: 2nd |
| 9 | **steady state** $d[\ce{B}]/dt = 0$ | set $d[\text{int}]/dt = 0$, solve, substitute |
| 10 | **catalyst** two $E_a$ values | $\dfrac{k_{\text{cat}}}{k_{\text{uncat}}} = e^{\Delta E_a / RT}$ |

---

## CONSTANT REFERENCE

| Constant | Value |
|---|---|
| $\ln 2$ | $0.693$ |
| $R$ (energy) | $8.314 \ \text{J/mol·K}$ |
| Arrhenius: $k = A e^{-E_a/RT}$ | $R = 8.314$ |

---

## ANSWERS

> Solve everything first. Check after.

**Beginner**
- B1: rate = $k[\ce{NO}]^2[\ce{O2}]^1$, $k = 2.5 \times 10^3 \ \text{M}^{-2}\!\cdot\!\text{s}^{-1}$
- B2: rate = $k[\ce{A}]^1[\ce{B}]^2[\ce{C}]^0$, $k = 3.0 \ \text{M}^{-2}\!\cdot\!\text{s}^{-1}$
- B3: $\text{M}^{-2}\!\cdot\!\text{s}^{-1}$ (3rd order overall)

**Intermediate**
- I1: $[\ce{A}] = 0.243 \ \text{M}$
- I2: $t = 1386 \ \text{s}$ (23.1 min)
- I3: $t_{1/2} = 30.0 \ \text{min}$, 4 half-lives (93.75% = $1 - 1/2^4$)
- I4: $t_{1/2} = 100 \ \text{s}$
- I5: $t = 83.3 \ \text{min}$
- I6: $E_a = 36.6 \ \text{kJ/mol}$
- I7: $k = 0.73 \ \text{s}^{-1}$
- I8: rate = $k[\ce{A}]^2[\ce{B}]$ (where $k = k_2 K_1$)
- I9: 2nd order, $k = 0.010 \ \text{M}^{-1}\!\cdot\!\text{s}^{-1}$ ($1/[\ce{A}]$ vs $t$ is linear)

**Advanced**
- A1: $[\ce{B}]_{\text{ss}} = \dfrac{k_1}{k_2}[\ce{A}]$, rate = $k_1[\ce{A}]$
- A2: $9.3 \times 10^5$ times faster
