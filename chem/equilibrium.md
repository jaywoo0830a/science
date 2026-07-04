# Chemical Equilibrium -- 3-Hour Calculation Session

> **Experience first, patterns after.** Phase 1: calculate. Phase 2: name the pattern. Phase 3: mixed retrieval.

---

## PHASE 1 -- DO FIRST (~30 min)

---

**1.** Write $K_c$ for $\ce{2SO2 + O2 <=> 2SO3}$.

$$
K_c = \dfrac{[\ce{SO3}]^2}{[\ce{SO2}]^2[\ce{O2}]}
$$

---

**2.** $\ce{N2 + 3H2 <=> 2NH3}$ at $400^\circ\text{C}$, $K_c = 0.50$. Find $K_p$.

$$
\Delta n = 2-(1+3) = -2, \ T = 673 \ \text{K}, \ K_p = 0.50 \times (0.08206 \times 673)^{-2} = \boxed{1.64 \times 10^{-4}}
$$

---

**3.** $1.00 \ \text{mol} \ \ce{PCl5}$ in $2.00 \ \text{L}$ flask. At equilibrium $[\ce{Cl2}] = 0.300 \ \text{M}$. Find $K_c$.

$\ce{PCl5 <=> PCl3 + Cl2}$

| | $\ce{PCl5}$ | $\ce{PCl3}$ | $\ce{Cl2}$ |
|---|---|---|---|
| I | $0.500$ | $0$ | $0$ |
| C | $-x$ | $+x$ | $+x$ |
| E | $0.500-x$ | $x$ | $x$ |

$x = 0.300$, $[\ce{PCl5}]_e = 0.200$, $K_c = \dfrac{(0.300)^2}{0.200} = \boxed{0.129}$

---

**4.** $K_c = 54.0$ for $\ce{H2 + I2 <=> 2HI}$. Initial $[\ce{H2}] = [\ce{I2}] = 0.500 \ \text{M}$. Find equilibrium $[\ce{HI}]$.

| | $\ce{H2}$ | $\ce{I2}$ | $\ce{HI}$ |
|---|---|---|---|
| I | $0.500$ | $0.500$ | $0$ |
| C | $-x$ | $-x$ | $+2x$ |
| E | $0.500-x$ | $0.500-x$ | $2x$ |

$$
\dfrac{(2x)^2}{(0.500-x)^2} = 54.0, \ \dfrac{2x}{0.500-x} = 7.348, \ x = 0.393, \ [\ce{HI}] = \boxed{0.786 \ \text{M}}
$$

---

**5.** $K_c = 54.0$. Current: $[\ce{H2}] = 0.100$, $[\ce{I2}] = 0.100$, $[\ce{HI}] = 1.50$. Which way shifts?

$$
Q = \dfrac{(1.50)^2}{(0.100)^2} = 225 > K_c \ (54.0) \ \Rightarrow \ \boxed{\text{Shifts LEFT}}
$$

---

> **You just executed:** $K_c$ expression, $K_p \leftrightarrow K_c$, ICE (find $K$), ICE (find []), and $Q$ vs $K$.

---

## PHASE 2 -- THE PATTERNS (~90 min)

---

### 1. $K_c$ / $K_p$ Expression

SEE: **"write Kc"** **"equilibrium expression"** &nbsp;|&nbsp; WRITE: $K_c = \dfrac{[\text{products}]^{\text{coeff}}}{[\text{reactants}]^{\text{coeff}}}$

Solids and pure liquids $= 1$ (omitted).

**Example.** $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$. $K_c = [\ce{CO2}]$, $K_p = P_{\ce{CO2}}$.

**Practice 1.** Write $K_c$ for $\ce{N2 + 3H2 <=> 2NH3}$.

---

### 2. $K_p \leftrightarrow K_c$

SEE: **"Kp from Kc"** &nbsp;|&nbsp; WRITE: $K_p = K_c(RT)^{\Delta n}$, $\Delta n = n_{\text{gas(prod)}} - n_{\text{gas(react)}}$

$R = 0.08206$, $T$ in K. If $\Delta n = 0$, $K_p = K_c$.

**Example.** $\ce{H2 + I2 <=> 2HI}$ at $450^\circ\text{C}$, $K_p = 50.0$. $\Delta n = 0$, $K_c = 50.0$.

**Practice 2.** $\ce{2SO2 + O2 <=> 2SO3}$ at $727^\circ\text{C}$, $K_c = 3.50$. $K_p$?

---

### 3. ICE: Find $K$ from Equilibrium Data

SEE: initial amounts + one equilibrium [] &nbsp;|&nbsp; WRITE: ICE $\to$ $x$ from known E $\to$ all E $\to$ $K$

**Example.** $2.00 \ \text{mol} \ \ce{PCl5}$ in $2.00 \ \text{L}$, at eq $[\ce{Cl2}] = 0.300$. $K_c$?

$[\ce{PCl5}]_0 = 1.00$, ICE: $x = 0.300$, $[\ce{PCl5}]_e = 0.700$, $K_c = \dfrac{(0.300)^2}{0.700} = \boxed{0.129}$

**Practice 3.** $1.00 \ \text{mol} \ \ce{CO} + 2.00 \ \text{mol} \ \ce{H2}$ in $1.00 \ \text{L}$, at eq $[\ce{CH3OH}] = 0.250$. $K_c$? ($\ce{CO + 2H2 <=> CH3OH}$)

---

### 4. ICE: Find [] from $K$

SEE: $K$ given + initial [] &nbsp;|&nbsp; WRITE: ICE $\to$ $K = f(x)$ $\to$ solve $x$ $\to$ all E

**Example.** $K_c = 0.040$, $\ce{PCl5 <=> PCl3 + Cl2}$, $[\ce{PCl5}]_0 = 1.00$.

$\dfrac{x^2}{1.00-x} = 0.040$, $x = 0.181$, $[\ce{PCl5}]_e = 0.819$, $[\ce{PCl3}]_e = [\ce{Cl2}]_e = \boxed{0.181}$

**Practice 4.** $K_c = 4.20$, $\ce{2NO2 <=> N2O4}$, $[\ce{NO2}]_0 = 0.500$. Find all eq [].

---

### 5. Small-$x$ Approximation

SEE: $K \ll 1$ + $[\text{initial}] \gg K$ &nbsp;|&nbsp; WRITE: $[\text{initial}] - x \approx [\text{initial}]$

Check: if $[\text{initial}]/K > 1000$, skip quadratic. Verify $x/[\text{initial}] < 5\%$.

**Example.** $K_c = 1.8\times10^{-5}$, $\ce{CH3COOH <=> CH3COO- + H+}$, $[\ce{HA}]_0 = 0.100$.

$x = \sqrt{0.100 \times 1.8\times10^{-5}} = \boxed{1.34\times10^{-3}}$, check: $1.34\% < 5\% \ \checkmark$

**Practice 5.** $K_c = 1.7\times10^{-3}$, $\ce{N2O4 <=> 2NO2}$, $[\ce{N2O4}]_0 = 2.00$. Find eq [].

---

### 6. Reaction Quotient $Q$

SEE: **"which direction"** **"shift"** + current [] &nbsp;|&nbsp; WRITE: $Q$ (same form as $K$, current []). $Q<K$: right. $Q>K$: left.

**Example.** $K_c = 0.50$, $\ce{N2 + 3H2 <=> 2NH3}$. $[0.40, 0.60, 0.20]$.

$Q = 0.20^2/(0.40 \times 0.60^3) = 0.463 < 0.50$ $\Rightarrow$ **shifts RIGHT**.

**Practice 6.** $K_c = 54.0$, $\ce{H2 + I2 <=> 2HI}$. $[0.200, 0.200, 2.00]$. Shift?

---

### 7. Le Chatelier Shift Calculation

SEE: **"added"** **"removed"** + equilibrium &nbsp;|&nbsp; WRITE: apply stress instantly (new I) $\to$ ICE with same $K$

**Example.** $\ce{H2 + I2 <=> 2HI}$, $K_c=54$. Eq: $[0.107, 0.107, 0.786]$. Add $\ce{HI}$ to $1.20$.

New I: $[0.107, 0.107, 1.20]$, ICE shifts left. $x$ consumed, $[\ce{HI}]_{\text{new}} = \boxed{0.926}$.

**Practice 7.** Same system, add $\ce{H2}$ so $[\ce{H2}]$ becomes $0.300$. New $[\ce{HI}]$?

---

### 8. Heterogeneous Equilibrium

SEE: **"solid"** **"heterogeneous"** + pressure &nbsp;|&nbsp; WRITE: omit solids/liquids from $K$

**Example.** $\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$. $P_{\text{total}} = 0.660 \ \text{atm}$.

$P_{\ce{NH3}} = P_{\ce{H2S}} = 0.330$, $K_p = 0.330^2 = \boxed{0.109}$

**Practice 8.** $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$. $P_{\ce{CO2}} = 0.236 \ \text{atm}$ at $800^\circ\text{C}$. $K_p$?

---

### 9. Simultaneous Equilibria

SEE: two equilibrium arrows + two $K$ values &nbsp;|&nbsp; WRITE: $x$ for rxn 1, $y$ for rxn 2, system of equations

**Example.** $\ce{A+B<=>C}$ ($K_1=10$) and $\ce{C+B<=>D}$ ($K_2=5$). $[\ce{A}]_0=1$, $[\ce{B}]_0=2$.

E: $\ce{A}=1-x$, $\ce{B}=2-x-y$, $\ce{C}=x-y$, $\ce{D}=y$. Two equations, solve for $x,y$.

**Practice 9.** Set up (no need to fully solve): $\ce{A<=>2B}$ ($K_1=4\times10^{-2}$), $\ce{B+C<=>D}$ ($K_2=10^3$). $[\ce{A}]_0=[\ce{C}]_0=0.5$.

---

### 10. Van't Hoff ($K$ vs $T$)

SEE: **"K at different T"** + $\Delta H^\circ$ &nbsp;|&nbsp; WRITE: $\ln\dfrac{K_2}{K_1} = -\dfrac{\Delta H^\circ}{R}\left(\dfrac{1}{T_2} - \dfrac{1}{T_1}\right)$

$R = 8.314$, $\Delta H^\circ$ in J/mol. Exothermic: $K \downarrow$ as $T \uparrow$.

**Example.** $\ce{N2 + 3H2 <=> 2NH3}$, $K_1 = 6\times10^5$ at $298 \ \text{K}$, $\Delta H^\circ = -92 \ \text{kJ}$. $K$ at $500 \ \text{K}$?

$\ln(K_2/6\times10^5) = -(-92000/8.314)(1/500 - 1/298) = -15.0$, $K_2 = \boxed{0.18}$

**Practice 10.** $K_w = 1.0\times10^{-14}$ at $298 \ \text{K}$, $\Delta H^\circ = +56 \ \text{kJ}$. $K_w$ at $323 \ \text{K}$?

---

### PHASE 2 PRACTICE ANSWERS

- P1: $[\ce{NH3}]^2/([\ce{N2}][\ce{H2}]^3)$ &nbsp;|&nbsp; P2: $K_p = 0.0427$
- P3: $[\ce{CO}]=0.750$, $[\ce{H2}]=1.50$, $K_c=0.148$
- P4: $[\ce{NO2}]=0.220$, $[\ce{N2O4}]=0.140$
- P5: $[\ce{N2O4}]=1.971$, $[\ce{NO2}]=0.058$ &nbsp;|&nbsp; P6: $Q=100>54$, shifts LEFT
- P7: $[\ce{HI}] \approx 0.90$ &nbsp;|&nbsp; P8: $K_p = 0.236$
- P9: $K_1 = (2x)^2/(0.5-x)$, $K_2 = y/((2x)(0.5-y))$
- P10: $K_w = 5.5\times10^{-14}$

---

## PHASE 3 -- LOCK IT IN (~60 min)

---

**1.** $K_c$ for $\ce{2SO2 + O2 <=> 2SO3}$?

**2.** $K_c = 0.50$, $\ce{N2 + 3H2 <=> 2NH3}$ at $400^\circ\text{C}$. $K_p$?

**3.** $0.500 \ \text{mol} \ \ce{H2} + 0.500 \ \text{mol} \ \ce{I2}$ in $1.00 \ \text{L}$. At eq $[\ce{HI}] = 0.786$. $K_c$?

**4.** $K_c = 54.0$, $\ce{H2 + I2 <=> 2HI}$, $[\ce{H2}]_0 = [\ce{I2}]_0 = 1.00$. Find $[\ce{HI}]_e$.

**5.** $K_c = 4.2\times10^{-3}$, $\ce{N2O4 <=> 2NO2}$, $[\ce{N2O4}]_0 = 1.00$. Use small-$x$. $[\ce{NO2}]_e$?

**6.** $K_c = 54.0$. Current: $[\ce{H2}]=0.100$, $[\ce{I2}]=0.100$, $[\ce{HI}]=1.50$. Shift?

**7.** $K_c = 0.040$, $\ce{PCl5 <=> PCl3 + Cl2}$, $[\ce{PCl5}]_0 = 1.00$. Find all eq [].

**8.** $\ce{H2 + I2 <=> 2HI}$, $K_c=54$. Eq: $[0.107, 0.107, 0.786]$. Add $\ce{HI}$ to $1.20$. New $[\ce{HI}]$?

**9.** $\ce{NH4HS(s) <=> NH3(g) + H2S(g)}$. $P_{\text{total}}=0.500$. $K_p$?

**10.** $K_1 = 6\times10^5$ at $298 \ \text{K}$, $\Delta H^\circ = -92 \ \text{kJ}$. $K$ at $500 \ \text{K}$?

**11.** $K_c = 0.50$, $\ce{N2 + 3H2 <=> 2NH3}$. $[0.40, 0.60, 0.20]$. $Q$? Shift?

**12.** $\ce{2NO2 <=> N2O4}$, $K_c=4.20$, $[\ce{NO2}]_0=0.500$. Eq []?

**13.** $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$. $P_{\ce{CO2}}=0.236$ at $800^\circ\text{C}$. $K_c$?

**14.** $\ce{2SO3 <=> 2SO2 + O2}$, $K_c=0.230$ at $600^\circ\text{C}$. Initial $[\ce{SO3}]=0.500$. Find $[\ce{O2}]_e$.

**15.** $K_w = 1.0\times10^{-14}$ at $25^\circ\text{C}$, $\Delta H^\circ=+56 \ \text{kJ}$. $K_w$ at $50^\circ\text{C}$?

---

### PHASE 3 ANSWERS

**1:** $[\ce{SO3}]^2/([\ce{SO2}]^2[\ce{O2}])$ &nbsp; **2:** $1.64\times10^{-4}$ &nbsp; **3:** $54.0$ &nbsp; **4:** $1.572 \ \text{M}$ &nbsp; **5:** $0.065 \ \text{M}$ &nbsp; **6:** LEFT ($Q=225>54$) &nbsp; **7:** $[\ce{PCl5}]=0.819$, $[\ce{PCl3}]=[\ce{Cl2}]=0.181$ &nbsp; **8:** $0.926$ &nbsp; **9:** $0.0625$ &nbsp; **10:** $0.18$ &nbsp; **11:** $Q=0.463 < 0.50$, RIGHT &nbsp; **12:** $[\ce{NO2}]=0.220$, $[\ce{N2O4}]=0.140$ &nbsp; **13:** $K_c = 2.68\times10^{-3}$ &nbsp; **14:** $[\ce{O2}]=0.118$ &nbsp; **15:** $5.5\times10^{-14}$

---

> **3-hour session complete.**
