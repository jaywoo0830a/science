# Chemical Equilibrium -- Calculation-First Training

> Philosophy: If you can calculate it, you at least understand it.
> How to use: Work through the example solution. The formula comes after -- as a summary of what your hands just did.
> Ratio: Beginner 2 : Intermediate 6 : Advanced 2 (10 patterns: 2-6-2)

---

## BEGINNER (2 patterns)

> Goal: 2 patterns. Write K. Convert Kc to Kp. The ICE table comes next.

---

### Pattern 1: Writing $K_c$ and $K_p$

**Example.** Write $K_c$ for $\ce{2SO2 + O2 <=> 2SO3}$.

$$
K_c = \dfrac{[\ce{SO3}]^2}{[\ce{SO2}]^2[\ce{O2}]}
$$

**Example.** Write $K_p$ for the same reaction.

$$
K_p = \dfrac{(P_{\ce{SO3}})^2}{(P_{\ce{SO2}})^2(P_{\ce{O2}})}
$$

> SEE: **"Kc"** **"equilibrium constant"** **"write the expression"**
> WRITE: $K_c = \dfrac{[\text{products}]^{\text{coeff}}}{[\text{reactants}]^{\text{coeff}}}$
>
> Pure solids and pure liquids do NOT appear in K (activity = 1).
> Hand reflex: products over reactants. Each concentration raised to its coefficient.

---

**Practice B1.** Write $K_c$ for $\ce{N2 + 3H2 <=> 2NH3}$.

**Practice B2.** Write $K_c$ for $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$. (Hint: solids are omitted.)

**Practice B3.** Write $K_p$ for $\ce{2NO2 <=> N2O4}$.

---

### Pattern 2: Converting $K_p \leftrightarrow K_c$

**Example.** For $\ce{N2 + 3H2 <=> 2NH3}$ at $400^\circ\text{C}$, $K_c = 0.50$. Find $K_p$.

$$
\begin{aligned}
\Delta n &= \text{mol gas products} - \text{mol gas reactants} = 2 - (1 + 3) = -2 \\
T &= 400 + 273 = 673 \ \text{K} \\[4pt]
K_p &= K_c(RT)^{\Delta n} = 0.50 \times (0.08206 \times 673)^{-2} \\[4pt]
K_p &= 0.50 \times (55.23)^{-2} = 0.50 \times \dfrac{1}{3050} = \boxed{1.64 \times 10^{-4}}
\end{aligned}
$$

> SEE: **"Kp from Kc"** **"convert Kc to Kp"** or vice versa
> WRITE: $K_p = K_c(RT)^{\Delta n}$ where $\Delta n = n_{\text{gas(products)}} - n_{\text{gas(reactants)}}$
>
> $R = 0.08206$ (L·atm/mol·K). $T$ in **Kelvin**.
> If $\Delta n = 0$, then $K_p = K_c$.
>
> Hand reflex: Count gas moles $\to$ $\Delta n$ $\to$ plug into $K_p = K_c(RT)^{\Delta n}$.

---

**Practice B4.** For $\ce{2SO2 + O2 <=> 2SO3}$ at $727^\circ\text{C}$, $K_c = 3.50$. Find $K_p$. ($\Delta n = 2 - 3 = -1$)

**Practice B5.** For $\ce{H2 + I2 <=> 2HI}$ at $450^\circ\text{C}$, $K_p = 50.0$. Find $K_c$. ($\Delta n = 0$, so $K_p = K_c$)

---

## INTERMEDIATE (6 patterns)

> Goal: Master the ICE table. Initial, Change, Equilibrium. This is the heart of equilibrium.

---

### Pattern 3: ICE Table -- Find $K$ from Equilibrium Data

**Example.** $0.500 \ \text{mol}$ $\ce{H2}$ and $0.500 \ \text{mol}$ $\ce{I2}$ are placed in a **1.00 L** flask at $430^\circ\text{C}$. At **equilibrium**, $[\ce{HI}] = 0.786 \ \text{M}$. Find $K_c$.

$$
\ce{H2 + I2 <=> 2HI}
$$

```
           H2       I2       HI
I (M):    0.500    0.500     0
C (M):     -x       -x      +2x
E (M):  0.500-x  0.500-x    2x
```

Given: at equilibrium, $[\ce{HI}] = 2x = 0.786$, so $x = 0.393$.

$$
\begin{aligned}
[\ce{H2}]_e &= 0.500 - 0.393 = 0.107 \ \text{M} \\
[\ce{I2}]_e &= 0.500 - 0.393 = 0.107 \ \text{M} \\[4pt]
K_c &= \dfrac{[\ce{HI}]^2}{[\ce{H2}][\ce{I2}]} = \dfrac{(0.786)^2}{(0.107)(0.107)} = \dfrac{0.6178}{0.01145} = \boxed{54.0}
\end{aligned}
$$

> SEE: initial amounts + **equilibrium** concentration of one species + asked for **K**
> WRITE: ICE table $\to$ solve for $x$ from known E $\to$ fill in all E values $\to$ $K =$ products/reactants
>
> Hand reflex: Draw ICE $\to$ the one E value you have gives $x$ $\to$ compute all E $\to$ plug into K.

---

**Practice I1.** **2.00 mol** $\ce{PCl5}$ in **2.00 L** flask. At **equilibrium**, $[\ce{Cl2}] = 0.300 \ \text{M}$. Find $K_c$.

$$
\ce{PCl5 <=> PCl3 + Cl2}
$$

**Practice I2.** **1.00 mol** $\ce{CO}$ and **2.00 mol** $\ce{H2}$ in **1.00 L** flask. At **equilibrium**, $[\ce{CH3OH}] = 0.250 \ \text{M}$. Find $K_c$.

$$
\ce{CO + 2H2 <=> CH3OH}
$$

---

### Pattern 4: ICE Table -- Find Equilibrium [] from $K$

**Example.** $K_c = 54.0$ for $\ce{H2 + I2 <=> 2HI}$. Initial: $[\ce{H2}] = 1.00 \ \text{M}$, $[\ce{I2}] = 1.00 \ \text{M}$, $[\ce{HI}] = 0$. Find **equilibrium** concentrations.

```
           H2       I2       HI
I (M):    1.00     1.00      0
C (M):     -x       -x      +2x
E (M):   1.00-x   1.00-x    2x
```

$$
\begin{aligned}
K_c &= \dfrac{[\ce{HI}]^2}{[\ce{H2}][\ce{I2}]} = \dfrac{(2x)^2}{(1.00 - x)^2} = 54.0 \\[4pt]
\dfrac{2x}{1.00 - x} &= \sqrt{54.0} = 7.348 \\[4pt]
2x &= 7.348 - 7.348x \\[4pt]
9.348x &= 7.348 \\[4pt]
x &= 0.786 \\[4pt]
[\ce{H2}]_e &= 1.00 - 0.786 = 0.214 \ \text{M} \\
[\ce{I2}]_e &= 1.00 - 0.786 = 0.214 \ \text{M} \\
[\ce{HI}]_e &= 2(0.786) = \boxed{1.572 \ \text{M}}
\end{aligned}
$$

> SEE: **K** given + initial concentrations + asked for **equilibrium []**
> WRITE: ICE table $\to$ set $K =$ expression in terms of $x$ $\to$ solve for $x$ $\to$ plug back.
>
> Hand reflex: ICE $\to$ $K = f(x)$ $\to$ solve (quadratic often) $\to$ $x$ $\to$ all E values.

---

**Practice I3.** $K_c = 0.040$ for $\ce{PCl5 <=> PCl3 + Cl2}$. Initial: $[\ce{PCl5}] = 1.00 \ \text{M}$. Find all **equilibrium** concentrations.

**Practice I4.** $K_c = 4.20$ for $\ce{2NO2 <=> N2O4}$. Initial: $[\ce{NO2}] = 0.500 \ \text{M}$. Find **equilibrium** concentrations.

---

### Pattern 5: Small-$x$ Approximation

**Example.** $K_c = 1.8 \times 10^{-5}$ for $\ce{CH3COOH <=> CH3COO- + H+}$. Initial: $[\ce{CH3COOH}] = 0.100 \ \text{M}$. Find $[\ce{H+}]$ at equilibrium.

```
              CH3COOH    CH3COO-    H+
I (M):         0.100        0       0
C (M):          -x         +x      +x
E (M):        0.100-x       x       x
```

$$
\begin{aligned}
K_c &= \dfrac{x^2}{0.100 - x} = 1.8 \times 10^{-5} \\[4pt]
\text{Since } K &\ll 1 \text{ and initial conc is large, } x \ll 0.100 \text{ (check: } 0.100/K > 1000 \text{)} \\[4pt]
\dfrac{x^2}{0.100} &\approx 1.8 \times 10^{-5} \\[4pt]
x &= \sqrt{0.100 \times 1.8 \times 10^{-5}} = \sqrt{1.8 \times 10^{-6}} = 1.34 \times 10^{-3} \ \text{M} \\[4pt]
\text{Check: } \dfrac{x}{0.100} &\times 100 = 1.34\% < 5\% \quad \checkmark \text{ Approximation valid}
\end{aligned}
$$

> SEE: **K << 1** (small K, like $10^{-5}$) + initial concentration $\gg K$
> WRITE: Assume $x \ll [\text{initial}]$, so $[\text{initial}] - x \approx [\text{initial}]$
>
> Check: If $[A]_0 / K > 1000$, skip the quadratic. At the end, verify $x / [A]_0 < 5\%$.
> Hand reflex: Small $K$ $\to$ try $[A]_0 - x \approx [A]_0$ $\to$ solve easily $\to$ check 5% rule.

---

**Practice I5.** $K_c = 1.7 \times 10^{-3}$ for $\ce{N2O4 <=> 2NO2}$. Initial: $[\ce{N2O4}] = 2.00 \ \text{M}$. Find all **equilibrium** concentrations. Use the small-$x$ approximation and verify it.

---

### Pattern 6: Reaction Quotient $Q$ -- Predict Direction

**Example.** $K_c = 54.0$ for $\ce{H2 + I2 <=> 2HI}$. A mixture has $[\ce{H2}] = 0.200$, $[\ce{I2}] = 0.200$, $[\ce{HI}] = 2.00$. Which way does the reaction shift?

$$
Q = \dfrac{[\ce{HI}]^2}{[\ce{H2}][\ce{I2}]} = \dfrac{(2.00)^2}{(0.200)(0.200)} = \dfrac{4.00}{0.0400} = 100
$$

Since $Q = 100 > K_c = 54.0$: Too much product. **Shifts LEFT** (toward reactants).

> SEE: **"Q"** **"reaction quotient"** **"which direction"** **"shift"**
> WRITE: $Q = \dfrac{[\text{products}]^{\text{coeff}}}{[\text{reactants}]^{\text{coeff}}}$ using **current** (not equilibrium) concentrations
>
> - $Q < K$: too little product $\to$ shifts **RIGHT** (forward)
> - $Q > K$: too much product $\to$ shifts **LEFT** (reverse)
> - $Q = K$: at equilibrium
>
> Hand reflex: Calculate $Q$ exactly like $K$ but with current [] $\to$ compare to $K$ $\to$ shift direction.

---

**Practice I6.** $K_c = 0.50$ for $\ce{N2 + 3H2 <=> 2NH3}$. A mixture has $[\ce{N2}] = 0.40$, $[\ce{H2}] = 0.60$, $[\ce{NH3}] = 0.20$. Which way does it shift?

---

### Pattern 7: Le Chatelier -- Concentration/Pressure Change Calculations

**Example.** $\ce{N2 + 3H2 <=> 2NH3}$ is at equilibrium: $[\ce{N2}] = 0.40$, $[\ce{H2}] = 0.60$, $[\ce{NH3}] = 0.20$. More $\ce{N2}$ is added so $[\ce{N2}]$ becomes $0.80$ instantaneously. Find new equilibrium concentrations.

```
First, find K:
K = (0.20)^2 / (0.40 * 0.60^3) = 0.04 / 0.0864 = 0.463

After adding N2 (instantaneous, not equilibrium):
[N2] = 0.80, [H2] = 0.60, [NH3] = 0.20

Q = (0.20)^2 / (0.80 * 0.60^3) = 0.04 / 0.1728 = 0.231 < K (0.463)
Shifts right.

New ICE:
            N2        H2        NH3
I (M):     0.80      0.60      0.20
C (M):      -x       -3x       +2x
E (M):   0.80-x    0.60-3x   0.20+2x

K = (0.20+2x)^2 / ((0.80-x)(0.60-3x)^3) = 0.463
```

> SEE: **"added"** **"removed"** **"stress"** + equilibrium system + asked for new equilibrium
> WRITE: Change concentration instantly $\to$ new ICE from that instant $\to$ solve with same $K$.
>
> Hand reflex: Apply stress instantly (new I row) $\to$ ICE table with same K $\to$ solve.

---

**Practice I7.** $\ce{H2 + I2 <=> 2HI}$, $K_c = 54.0$. Equilibrium: $[\ce{H2}] = [\ce{I2}] = 0.107$, $[\ce{HI}] = 0.786$. More $\ce{HI}$ is **added**: $[\ce{HI}]$ becomes $1.20$. Find the new equilibrium $[\ce{HI}]$ after shift.

---

### Pattern 8: Heterogeneous Equilibrium & Determining K

**Example.** $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$. At $800^\circ\text{C}$, the **pressure** of $\ce{CO2}$ above the solid mixture is $0.236 \ \text{atm}$. Find $K_p$ and $K_c$.

$$
\begin{aligned}
K_p &= P_{\ce{CO2}} = 0.236 \quad (\text{solids omitted}) \\[4pt]
\Delta n &= 1 - 0 = 1 \quad (\text{only gases count}) \\
T &= 800 + 273 = 1073 \ \text{K} \\[4pt]
K_c &= \dfrac{K_p}{(RT)^{\Delta n}} = \dfrac{0.236}{0.08206 \times 1073} = \dfrac{0.236}{88.05} = \boxed{2.68 \times 10^{-3}}
\end{aligned}
$$

> SEE: **"solid"** **"heterogeneous"** + equilibrium pressure given
> WRITE: Solids/liquids = 1 (not in K). Only gases and aqueous species appear.

---

**Practice I8.** $\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$. At $25^\circ\text{C}$, total pressure above solid = $0.660 \ \text{atm}$. Find $K_p$. (Hint: $P_{\ce{NH3}} = P_{\ce{H2S}} = P_{\text{total}}/2$)

---

## ADVANCED (2 patterns) -- College-Level

---

### Pattern 9: Simultaneous Equilibria

**Example.** Two equilibria occur simultaneously. Find the final concentrations.

$$
\begin{aligned}
\ce{A + B &<=> C} \quad &K_1 &= 10.0 \\
\ce{C + B &<=> D} \quad &K_2 &= 5.0
\end{aligned}
$$

Initial: $[\ce{A}] = 1.00$, $[\ce{B}] = 2.00$, $[\ce{C}] = [\ce{D}] = 0$.

Let $x$ = amount of A consumed in first reaction, $y$ = amount of C consumed in second reaction.

```
        A       B       C       D
I:     1.00    2.00     0       0
C1:     -x      -x      +x       0
C2:      0       -y     -y      +y
E:    1.00-x  2.00-x-y  x-y      y
```

$$
\begin{aligned}
K_1 &= \dfrac{x-y}{(1.00-x)(2.00-x-y)} = 10.0 \\[4pt]
K_2 &= \dfrac{y}{(x-y)(2.00-x-y)} = 5.0
\end{aligned}
$$

Solve the system of two equations for $x$ and $y$. (Typically requires numerical methods or clever algebra.)

> SEE: two (or more) equilibrium arrows, two $K$ values
> WRITE: Multiple ICE changes ($x$, $y$, $z$...) $\to$ system of equations with all $K$'s $\to$ solve.
>
> Hand reflex: One variable per reaction $\to$ express all E in terms of them $\to$ write all $K$ equations $\to$ solve system.

---

**Practice A1.** Two simultaneous equilibria:

$$
\begin{aligned}
\ce{A &<=> 2B} \quad &K_1 &= 4.0 \times 10^{-2} \\
\ce{B + C &<=> D} \quad &K_2 &= 1.0 \times 10^{3}
\end{aligned}
$$

Initial: $[\ce{A}] = 0.500$, $[\ce{C}] = 0.500$, $[\ce{B}] = [\ce{D}] = 0$. Set up the system (you don't need to fully solve). Write the two equations in terms of $x$ and $y$.

---

### Pattern 10: Temperature Dependence (Van't Hoff Equation)

**Example.** For $\ce{N2 + 3H2 <=> 2NH3}$, $K_1 = 6.0 \times 10^5$ at $T_1 = 298 \ \text{K}$ and $\Delta H^\circ = -92 \ \text{kJ/mol}$. Find $K_2$ at $T_2 = 500 \ \text{K}$.

$$
\begin{aligned}
\ln\left(\dfrac{K_2}{K_1}\right) &= -\dfrac{\Delta H^\circ}{R}\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right) \\[4pt]
\ln\left(\dfrac{K_2}{6.0 \times 10^5}\right) &= -\dfrac{-92000}{8.314}\left(\dfrac{1}{500} - \dfrac{1}{298}\right) \\[4pt]
&= 11066 \times (0.002000 - 0.003356) \\[4pt]
&= 11066 \times (-0.001356) = -15.00 \\[4pt]
\dfrac{K_2}{6.0 \times 10^5} &= e^{-15.00} = 3.06 \times 10^{-7} \\[4pt]
K_2 &= 6.0 \times 10^5 \times 3.06 \times 10^{-7} = \boxed{0.184}
\end{aligned}
$$

Exothermic reaction ($\Delta H < 0$): $K$ decreases as $T$ increases (as seen: $6\times10^5 \to 0.184$).

> SEE: **"Van't Hoff"** **"K at different temperature"** **"ΔH°"** + two temperatures
> WRITE: $\ln\left(\dfrac{K_2}{K_1}\right) = -\dfrac{\Delta H^\circ}{R}\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right)$
>
> $R = 8.314 \ \text{J/mol·K}$. $\Delta H^\circ$ in J/mol (not kJ).
> Exothermic ($\Delta H < 0$): $K \downarrow$ as $T \uparrow$. Endothermic: opposite.
>
> Hand reflex: $\Delta H^\circ$ to J $\to$ van't Hoff $\to$ solve for $K_2$.

---

**Practice A2.** $K_1 = 1.0 \times 10^{-14}$ at $T_1 = 298 \ \text{K}$ for $\ce{H2O <=> H+ + OH-}$ (this is $K_w$). $\Delta H^\circ = +56 \ \text{kJ/mol}$. Find $K_2$ at $T_2 = 323 \ \text{K}$ ($50^\circ\text{C}$).

---

## MASTER CHEAT SHEET -- Trigger to Equation

| # | SEE this word/phrase... | Your hand writes... |
|---|---|---|
| 1 | **Kc** **equilibrium expression** | $K_c = \dfrac{[\text{products}]^{\text{coeff}}}{[\text{reactants}]^{\text{coeff}}}$ (no solids/liquids) |
| 2 | **Kp from Kc** (or vice versa) | $K_p = K_c(RT)^{\Delta n}$, $\Delta n =$ gas moles(prod) $-$ gas moles(react) |
| 3 | equilibrium [] given + find **K** | ICE $\to$ $x$ from known E $\to$ all E $\to$ $K =$ expression |
| 4 | **K** given + find equilibrium [] | ICE $\to$ $K = f(x)$ $\to$ solve $x$ $\to$ all E |
| 5 | **K << 1** (small), conc $\gg K$ | $[\text{initial}] - x \approx [\text{initial}]$ $\to$ check 5% rule |
| 6 | **Q** **which direction** **shift** | $Q =$ expression with current [] $\to$ $Q < K$: right; $Q > K$: left |
| 7 | **added** **removed** + equilibrium | apply stress to I row $\to$ new ICE $\to$ same $K$ $\to$ solve |
| 8 | **solid** **heterogeneous** + pressure | omit solids/liquids from K; only gases count for $\Delta n$ |
| 9 | two **equilibria** + two $K$ values | $x$ for rxn 1, $y$ for rxn 2 $\to$ system of $K$ equations |
| 10 | **Van't Hoff** **K at T** **ΔH°** | $\ln\left(\dfrac{K_2}{K_1}\right) = -\dfrac{\Delta H^\circ}{R}\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right)$ |

---

## ANSWERS

> Solve everything first. Check after.

**Beginner**
- B1: $K_c = \dfrac{[\ce{NH3}]^2}{[\ce{N2}][\ce{H2}]^3}$
- B2: $K_c = [\ce{CO2}]$ (solids omitted)
- B3: $K_p = \dfrac{P_{\ce{N2O4}}}{(P_{\ce{NO2}})^2}$
- B4: $K_p = 0.0427$
- B5: $K_c = 50.0$ ($\Delta n = 0$)

**Intermediate**
- I1: $[\ce{PCl5}] = 0.700$, $[\ce{PCl3}] = [\ce{Cl2}] = 0.300$; $K_c = 0.129$
- I2: $[\ce{CO}] = 0.750$, $[\ce{H2}] = 1.50$, $[\ce{CH3OH}] = 0.250$; $K_c = 0.148$
- I3: $[\ce{PCl5}] = 0.819$, $[\ce{PCl3}] = [\ce{Cl2}] = 0.181$ (solve $x^2/(1-x) = 0.040$)
- I4: $[\ce{NO2}] = 0.220$, $[\ce{N2O4}] = 0.140$ (solve $x/(0.5-2x)^2 = 4.20$)
- I5: $[\ce{N2O4}] = 1.971 \ \text{M}$, $[\ce{NO2}] = 0.058 \ \text{M}$ ($x = 0.0292$, check: $1.46\% < 5\% \ \checkmark$)
- I6: $Q = 0.463 > 0.50$, shifts **LEFT**
- I7: $[\ce{HI}]_{new} = 0.926 \ \text{M}$ (shift left consumes excess HI)
- I8: $K_p = P_{\ce{NH3}} \cdot P_{\ce{H2S}} = (0.330)(0.330) = 0.109$

**Advanced**
- A1: $K_1 = (2x+y)^2/(0.5-x)$, $K_2 = y/((2x+y)(0.5-y))$ (approximate system)
- A2: $K_w(50^\circ\text{C}) = 5.5 \times 10^{-14}$ (increases with T, endothermic)
