# Stoichiometry -- Calculation-First Training

> Philosophy: If you can calculate it, you at least understand it.
> How to use: Work through the example solution. The formula comes after -- as a summary of what your hands just did.
> Ratio: Beginner 2 : Intermediate 6 : Advanced 2 (15 patterns: 3-9-3)

---

## BEGINNER (3 patterns)

> Goal: 3 patterns. Fast. Then into the fire.

---

### Pattern 1: grams to moles

**Example.** How many **moles** are in **25.0 g** of $\ce{H2O}$?

$$
M(\ce{H2O}) = 2(1.008) + 16.00 = 18.016 \ \text{g/mol}
$$
$$
n = \dfrac{25.0}{18.016} = 1.39 \ \text{mol}
$$

> SEE: **"grams"** **"mass"** **"g"** of a substance
> WRITE: $n = \dfrac{m}{M}$

---

**Practice B1.** How many **moles** are in **100.0 g** of $\ce{NaCl}$?

**Practice B2.** How many **moles** are in **5.00 g** of $\ce{C6H12O6}$?

---

### Pattern 2: moles of A to moles of B

**Example.** $\ce{2H2 + O2 -> 2H2O}$. You have **3.0 mol** $\ce{O2}$. How many **moles** of $\ce{H2O}$ form?

$$
n_{\ce{H2O}} = 3.0 \cdot \dfrac{2}{1} = 6.0 \ \text{mol}
$$

> SEE: **"equation"** + **"moles of A"** + **"how many moles of B"**
> WRITE: $n_B = n_A \cdot \dfrac{\text{coeff}_B}{\text{coeff}_A}$

---

**Practice B3.** $\ce{N2 + 3H2 -> 2NH3}$. How many **moles** of $\ce{NH3}$ from **5.0 mol** of $\ce{N2}$?

**Practice B4.** $\ce{4Fe + 3O2 -> 2Fe2O3}$. How many **moles** of $\ce{Fe2O3}$ from **8.0 mol** of $\ce{Fe}$?

---

### Pattern 3: moles to grams

**Example.** What is the **mass** of **2.50 mol** of $\ce{CO2}$?

$$
M(\ce{CO2}) = 12.01 + 2(16.00) = 44.01 \ \text{g/mol}
$$
$$
m = 2.50 \times 44.01 = 110.0 \ \text{g}
$$

> SEE: **"moles"** + asked for **"mass"** **"grams"** **"g"**
> WRITE: $m = n \cdot M$

---

**Practice B5.** What is the **mass** of **0.500 mol** of $\ce{CaCO3}$?

**Practice B6.** What is the **mass** of **3.20 mol** of $\ce{NH3}$?

---

## INTERMEDIATE (9 patterns)

> Goal: Chain patterns. Mass $\xrightarrow{\div M}$ moles $\xrightarrow{\times\text{ratio}}$ moles $\xrightarrow{\times M}$ mass. Drill until automatic.

---

### Pattern 4: Mass-to-Mass

**Example.** $\ce{C3H8 + 5O2 -> 3CO2 + 4H2O}$. How many **grams** of $\ce{CO2}$ are produced from **50.0 g** of $\ce{C3H8}$?

$$
\begin{aligned}
M(\ce{C3H8}) &= 3(12.01) + 8(1.008) = 44.10 \ \text{g/mol} \\
n_{\ce{C3H8}} &= \dfrac{50.0}{44.10} = 1.134 \ \text{mol} \\
n_{\ce{CO2}} &= 1.134 \cdot \dfrac{3}{1} = 3.402 \ \text{mol} \\
M(\ce{CO2}) &= 44.01 \ \text{g/mol} \\
m_{\ce{CO2}} &= 3.402 \times 44.01 = 149.7 \ \text{g}
\end{aligned}
$$

> SEE: **"grams"** of reactant **AND ALSO** of product
> WRITE: $m_B = m_A \cdot \dfrac{1}{M_A} \cdot \dfrac{\text{coeff}_B}{\text{coeff}_A} \cdot M_B$
>
> Hand chain: grams A $\xrightarrow{\div M}$ moles A $\xrightarrow{\times\text{ratio}}$ moles B $\xrightarrow{\times M}$ grams B

---

**Practice I1.** $\ce{CH4 + 2O2 -> CO2 + 2H2O}$. How many **grams** of $\ce{CO2}$ from **32.0 g** of $\ce{CH4}$?

**Practice I2.** $\ce{2KClO3 -> 2KCl + 3O2}$. How many **grams** of $\ce{O2}$ from **245.0 g** of $\ce{KClO3}$?

**Practice I3.** $\ce{Fe2O3 + 3CO -> 2Fe + 3CO2}$. How many **grams** of $\ce{Fe}$ from **80.0 g** of $\ce{Fe2O3}$?

---

### Pattern 5: Limiting Reagent (+ excess remaining)

**Example.** $\ce{2Al + 3Cl2 -> 2AlCl3}$. You have **10.0 g** $\ce{Al}$ and **15.0 g** $\ce{Cl2}$. Which is **limiting**? How many **grams** of $\ce{AlCl3}$? How many **grams** of **excess** **remain**?

$$
\begin{aligned}
n_{\ce{Al}} &= \dfrac{10.0}{26.98} = 0.3706 \ \text{mol} \quad\Rightarrow\quad \dfrac{0.3706}{2} = 0.1853 \\[4pt]
n_{\ce{Cl2}} &= \dfrac{15.0}{70.90} = 0.2116 \ \text{mol} \quad\Rightarrow\quad \dfrac{0.2116}{3} = 0.0705 \quad\leftarrow \textbf{LIMITING} \\[4pt]
n_{\ce{AlCl3}} &= 0.2116 \cdot \dfrac{2}{3} = 0.1411 \ \text{mol} \\
M(\ce{AlCl3}) &= 26.98 + 3(35.45) = 133.33 \ \text{g/mol} \\
m_{\ce{AlCl3}} &= 0.1411 \times 133.33 = 18.8 \ \text{g} \\[6pt]
n_{\ce{Al\ used}} &= 0.2116 \cdot \dfrac{2}{3} = 0.1411 \ \text{mol} \\
m_{\ce{Al\ used}} &= 0.1411 \times 26.98 = 3.807 \ \text{g} \\
m_{\ce{Al\ remaining}} &= 10.0 - 3.807 = 6.19 \ \text{g}
\end{aligned}
$$

> SEE: **"limiting"** **"which runs out"** **"excess"** + two given amounts
> WRITE: $\dfrac{n_A}{\text{coeff}_A}$ vs $\dfrac{n_B}{\text{coeff}_B}$ $\to$ smallest = limiting
> Excess: total $-$ used = remaining

---

**Practice I4.** $\ce{2H2 + O2 -> 2H2O}$. **5.00 g** $\ce{H2}$ and **40.0 g** $\ce{O2}$. Find **limiting**, **grams** of $\ce{H2O}$, **grams** of **excess remaining**.

**Practice I5.** $\ce{N2 + 3H2 -> 2NH3}$. **14.0 g** $\ce{N2}$ and **3.00 g** $\ce{H2}$. Find **limiting** and **grams** of $\ce{NH3}$.

---

### Pattern 6: Percent Yield

**Example.** Theoretical $\ce{CO2}$ yield is **149.7 g**, you collect **132.0 g** (actual). What's the **% yield**?

$$
\% = \dfrac{132.0}{149.7} \times 100 = 88.2\%
$$

> SEE: **"actual yield"** **"theoretical yield"** **"% yield"**
> WRITE: $\% = \dfrac{\text{actual}}{\text{theoretical}} \times 100\%$

---

**Practice I6.** Theoretical: **50.0 g**. Actual: **42.5 g**. **% yield**?

**Practice I7.** $\ce{2Al + 3Br2 -> 2AlBr3}$. From **10.0 g** $\ce{Al}$, theoretical $\ce{AlBr3}$ is $98.8 \ \text{g}$. You get **75.0 g**. **% yield**?

---

### Pattern 7: Molarity -- moles from solution

**Example.** What **mass** of $\ce{AgCl}$ precipitates when **25.0 mL** of **0.500 M** $\ce{AgNO3}$ reacts with excess $\ce{NaCl}$?

$$
\ce{AgNO3 + NaCl -> AgCl + NaNO3}
$$

$$
\begin{aligned}
V &= 25.0 \ \text{mL} = 0.0250 \ \text{L} \\
n_{\ce{AgNO3}} &= 0.500 \times 0.0250 = 0.0125 \ \text{mol} \\
n_{\ce{AgCl}} &= 0.0125 \cdot \dfrac{1}{1} = 0.0125 \ \text{mol} \\
M(\ce{AgCl}) &= 107.87 + 35.45 = 143.32 \ \text{g/mol} \\
m_{\ce{AgCl}} &= 0.0125 \times 143.32 = 1.79 \ \text{g}
\end{aligned}
$$

> SEE: **"M"** **"molarity"** **"concentration"** + **"mL"** **"L"**
> WRITE: $n = M \cdot V$ (V **must** be in L!)
>
> Hand reflex: See **M** and **mL** $\to$ instantly $V \div 1000$ $\to$ $n = MV$

---

**Practice I8.** How many **moles** of $\ce{NaCl}$ are in **250.0 mL** of **0.400 M** $\ce{NaCl}$?

**Practice I9.** **50.0 mL** of **0.200 M** $\ce{BaCl2}$ reacts with excess $\ce{Na2SO4}$. Find **grams** of $\ce{BaSO4}$.

$$
\ce{BaCl2 + Na2SO4 -> BaSO4 + 2NaCl}
$$

---

### Pattern 8: Gas Stoichiometry at STP

**Example.** $\ce{Zn + 2HCl -> ZnCl2 + H2}$. What **volume** of $\ce{H2}$ **gas** at **STP** from **10.0 g** $\ce{Zn}$?

$$
\begin{aligned}
n_{\ce{Zn}} &= \dfrac{10.0}{65.38} = 0.1529 \ \text{mol} \\
n_{\ce{H2}} &= 0.1529 \cdot \dfrac{1}{1} = 0.1529 \ \text{mol} \\
V_{\ce{H2}} &= 0.1529 \times 22.4 = 3.43 \ \text{L}
\end{aligned}
$$

> SEE: **"STP"** + **"gas"** + **"volume"**
> WRITE: $V = n \times 22.4 \ \text{L}$
>
> STP = $0^\circ\text{C}$ (273 K), 1 atm. If NOT STP, use Pattern 9.

---

**Practice I10.** What **volume** at **STP** does **2.00 mol** of $\ce{CO2}$ occupy?

**Practice I11.** $\ce{CaCO3 -> CaO + CO2}$. **50.0 g** $\ce{CaCO3}$ decomposes. **Volume** of $\ce{CO2}$ at **STP**?

---

### Pattern 9: Gas Stoichiometry NOT at STP (PV=nRT)

**Example.** $\ce{2NaN3 -> 2Na + 3N2}$. What **volume** of $\ce{N2}$ at **25.0°C** and **1.20 atm** from **65.0 g** $\ce{NaN3}$?

$$
\begin{aligned}
T &= 25.0 + 273 = 298 \ \text{K} \\
n_{\ce{NaN3}} &= \dfrac{65.0}{65.02} = 0.9997 \ \text{mol} \\
n_{\ce{N2}} &= 0.9997 \cdot \dfrac{3}{2} = 1.500 \ \text{mol} \\
V &= \dfrac{nRT}{P} = \dfrac{1.500 \times 0.08206 \times 298}{1.20} = 30.6 \ \text{L}
\end{aligned}
$$

> SEE: **"gas"** + **"pressure"** + **"temperature"** + NOT STP
> WRITE: $PV = nRT$

| Symbol | Meaning | Value |
|---|---|---|
| $P$ | pressure | **must be atm** |
| $V$ | volume | L |
| $n$ | moles | mol |
| $R$ | gas constant | $0.08206 \ \dfrac{\text{L} \cdot \text{atm}}{\text{mol} \cdot \text{K}}$ |
| $T$ | temperature | **must be K** ($T_K = T_{^\circ\text{C}} + 273$) |

> Hand reflex: $^\circ\text{C} \xrightarrow{+273} \text{K}$ $\to$ solve $PV=nRT$ $\to$ plug $n$ into stoichiometry.

---

**Practice I12.** **2.00 mol** $\ce{O2}$ at **30.0°C** and **0.950 atm**. **Volume**?

**Practice I13.** $\ce{2Mg + O2 -> 2MgO}$. **5.00 g** $\ce{Mg}$ burns. **Volume** of $\ce{O2}$ at **22.0°C**, **755 mmHg**? ($760 \ \text{mmHg} = 1 \ \text{atm}$)

---

### Pattern 10: Empirical Formula from % composition

**Example.** A compound is **40.0% C**, **6.71% H**, **53.3% O** by mass. Find the **empirical formula**.

$$
\begin{array}{c|c|c|c}
\text{Element} & \text{mass (g)} & M \ (\text{g/mol}) & n \ (\text{mol}) & \div \text{smallest} \\
\hline
\ce{C} & 40.0 & 12.01 & 3.331 & 1.00 \\
\ce{H} & 6.71 & 1.008 & 6.657 & 2.00 \\
\ce{O} & 53.3 & 16.00 & 3.331 & 1.00
\end{array}
$$

$$
\boxed{\ce{CH2O}}
$$

> SEE: **"% by mass"** + **"empirical formula"**
> WRITE: assume 100 g $\to$ grams $\to$ moles $\to$ $\div$ smallest $\to$ whole numbers

---

**Practice I14.** **75.0% C**, **25.0% H** by mass. **Empirical formula**?

**Practice I15.** **52.1% C**, **13.1% H**, **34.7% O** by mass. **Empirical formula**?

---

### Pattern 11: Dilution

**Example.** What **volume** of **12.0 M** $\ce{HCl}$ is needed to **prepare** **500.0 mL** of **0.600 M** $\ce{HCl}$?

$$
\begin{aligned}
M_1 V_1 &= M_2 V_2 \\
12.0 \cdot V_1 &= 0.600 \times 500.0 \\
V_1 &= \dfrac{0.600 \times 500.0}{12.0} = 25.0 \ \text{mL}
\end{aligned}
$$

> SEE: **"dilute"** **"dilution"** **"prepare"** + two M, two V
> WRITE: $M_1 V_1 = M_2 V_2$

---

**Practice I16.** **25.0 mL** of **6.00 M** $\ce{NaOH}$ diluted to **500.0 mL**. New **concentration**?

**Practice I17.** What **volume** of **18.0 M** $\ce{H2SO4}$ makes **250.0 mL** of **0.500 M** $\ce{H2SO4}$?

---

### Pattern 12: Titration

**Example.** **25.0 mL** of $\ce{H2SO4}$ is **titrated** with **0.200 M** $\ce{NaOH}$. **32.5 mL** $\ce{NaOH}$ used. Find $[\ce{H2SO4}]$.

$$
\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O}
$$

$$
\begin{aligned}
n_{\ce{NaOH}} &= 0.200 \times 0.0325 = 0.00650 \ \text{mol} \\
n_{\ce{H2SO4}} &= 0.00650 \cdot \dfrac{1}{2} = 0.00325 \ \text{mol} \\
[\ce{H2SO4}] &= \dfrac{0.00325}{0.0250} = 0.130 \ \text{M}
\end{aligned}
$$

> SEE: **"titrate"** **"titration"** **"neutralize"** **"endpoint"**
> WRITE: $n_{\text{titrant}} = MV$ $\to$ mole ratio $\to$ $n_{\text{analyte}}$ $\to$ $M = n/V$

---

**Practice I18.** **50.0 mL** $\ce{HCl}$ **titrated** with **0.100 M** $\ce{NaOH}$, **40.0 mL** used. Find $[\ce{HCl}]$.

**Practice I19.** **20.0 mL** $\ce{Ca(OH)2}$ **titrated** with **0.250 M** $\ce{HCl}$, **30.0 mL** used. Find $[\ce{Ca(OH)2}]$.

$$
\ce{Ca(OH)2 + 2HCl -> CaCl2 + 2H2O}
$$

---

## ADVANCED (3 patterns) -- College-Level

---

### Pattern 13: Combustion Analysis

**Example.** **Combustion** of **1.000 g** of C,H,O compound produces **1.466 g CO2** and **0.600 g H2O**. Find the **empirical formula**.

$$
\begin{aligned}
n_{\ce{C}} &= \dfrac{1.466}{44.01} = 0.03331 \ \text{mol}
& m_{\ce{C}} &= 0.03331 \times 12.01 = 0.4000 \ \text{g} \\
n_{\ce{H}} &= \dfrac{0.600}{18.016} \times 2 = 0.0666 \ \text{mol}
& m_{\ce{H}} &= 0.0666 \times 1.008 = 0.0671 \ \text{g} \\
m_{\ce{O}} &= 1.000 - 0.4000 - 0.0671 = 0.5329 \ \text{g} \\
n_{\ce{O}} &= \dfrac{0.5329}{16.00} = 0.03331 \ \text{mol}
\end{aligned}
$$

$$
\begin{array}{c|c}
\text{Element} & n \ (\text{mol}) & \div \text{smallest} \\
\hline
\ce{C} & 0.03331 & 1.00 \\
\ce{H} & 0.0666 & 2.00 \\
\ce{O} & 0.03331 & 1.00
\end{array}
\quad\Rightarrow\quad \boxed{\ce{CH2O}}
$$

> SEE: **"combustion"** **"burned"** + **"CO2 and H2O produced"**
> WRITE: $\ce{CO2} \xrightarrow{\div 44.01} \xrightarrow{\times 1}$ mol C $\xrightarrow{\times 12.01}$ g C. $\ce{H2O} \xrightarrow{\div 18.016} \xrightarrow{\times 2}$ mol H. O by subtraction.

---

**Practice A1.** **Combustion** of **0.500 g** hydrocarbon (C,H only) produces **1.565 g CO2** and **0.641 g H2O**. **Empirical formula**?

**Practice A2.** **Combustion** of **2.000 g** C,H,O compound gives **2.933 g CO2** and **1.800 g H2O**. Molar mass = $60.0 \ \text{g/mol}$. **Molecular formula**?

---

### Pattern 14: Mixture Problem (Two-Component System)

**Example.** A **5.00 g** **mixture** of $\ce{NaCl}$ and $\ce{KCl}$ is treated with excess $\ce{AgNO3}$. **10.50 g** $\ce{AgCl}$ precipitates. Find **mass % of NaCl**.

Let $x = m_{\ce{NaCl}}$, $y = m_{\ce{KCl}}$.

$$
\begin{aligned}
x + y &= 5.00 \\[4pt]
n_{\ce{AgCl}} &= \dfrac{10.50}{143.32} = 0.07326 \ \text{mol} \\[4pt]
\dfrac{x}{58.44} + \dfrac{5.00 - x}{74.55} &= 0.07326 \\[4pt]
x\left(\dfrac{1}{58.44} - \dfrac{1}{74.55}\right) &= 0.07326 - \dfrac{5.00}{74.55} \\[4pt]
x \cdot 0.003699 &= 0.006190 \\[4pt]
x &= 1.674 \ \text{g} \\[4pt]
\% \ce{NaCl} &= \dfrac{1.674}{5.00} \times 100 = 33.5\%
\end{aligned}
$$

> SEE: **"mixture"** + two unknowns + **"total mass"** + reaction consuming both
> WRITE: $x + y = m_{\text{total}}$ and $\dfrac{x}{M_A} + \dfrac{y}{M_B} = n_{\text{product}}$

---

**Practice A3.** A **3.00 g** **mixture** of $\ce{Na2CO3}$ and $\ce{K2CO3}$ + excess $\ce{HCl}$ $\to$ **2.50 g** $\ce{CO2}$. Find **mass % of Na2CO3**. (Both react 1:1 to give $\ce{CO2}$)

---

### Pattern 15: Hydrate Analysis

**Example.** Heating **5.00 g** of $\ce{BaCl2 \cdot xH2O}$ leaves **4.26 g** of anhydrous $\ce{BaCl2}$. Find $x$.

$$
\begin{aligned}
m_{\ce{H2O}} &= 5.00 - 4.26 = 0.74 \ \text{g} \\
n_{\ce{BaCl2}} &= \dfrac{4.26}{208.23} = 0.02046 \ \text{mol} \\
n_{\ce{H2O}} &= \dfrac{0.74}{18.016} = 0.04107 \ \text{mol} \\[4pt]
x &= \dfrac{n_{\ce{H2O}}}{n_{\ce{BaCl2}}} = \dfrac{0.04107}{0.02046} = 2.01 \approx 2
\end{aligned}
$$

$$
\boxed{\ce{BaCl2 \cdot 2H2O}}
$$

> SEE: **"hydrate"** **"anhydrous"** **"x H2O"** **"water of crystallization"**
> WRITE: $x = \dfrac{n_{\ce{H2O}}}{n_{\text{anhydrous}}}$
>
> Hand reflex: mass loss = water $\to$ mol water $\to$ mol anhydrous $\to$ ratio.

---

**Practice A4.** Heating **3.00 g** of $\ce{CuSO4 \cdot xH2O}$ leaves **1.92 g** $\ce{CuSO4}$. Find $x$.

---

## MASTER CHEAT SHEET -- Trigger to Equation

| # | SEE this word/phrase... | Your hand writes... |
|---|---|---|
| 1 | **grams**, **mass**, **g** of something | $n = \dfrac{m}{M}$ |
| 2 | **equation** + **moles of A** $\to$ **moles of B** | $n_B = n_A \cdot \dfrac{\text{coeff}_B}{\text{coeff}_A}$ |
| 3 | **moles** + asked for **mass**/**grams** | $m = n \cdot M$ |
| 4 | **grams of A** $\to$ **grams of B** | $m_A \xrightarrow{\div M} n_A \xrightarrow{\times\text{ratio}} n_B \xrightarrow{\times M} m_B$ |
| 5 | **limiting**, two amounts | $n/\text{coeff}$ each, smallest = limiting |
|   | **excess**, **remaining** | total $-$ used = remaining |
| 6 | **actual** + **theoretical** + **% yield** | $\% = \dfrac{\text{actual}}{\text{theoretical}} \times 100$ |
| 7 | **M** + **mL** or **L** | $n = MV$ (V in L!) |
| 8 | **STP** + **gas** + **volume** | $V = n \times 22.4$ |
| 9 | **gas** + **P** + **T** + NOT STP | $PV = nRT$ (T in K, P in atm) |
| 10 | **%** composition + **empirical formula** | 100 g $\to$ mol $\to$ $\div$ smallest |
| 11 | **dilute**, **prepare** + two M, two V | $M_1 V_1 = M_2 V_2$ |
| 12 | **titrate**, **neutralize**, **endpoint** | $n_{\text{titrant}} \to$ ratio $\to n_{\text{analyte}} \to M = n/V$ |
| 13 | **combustion** + $\ce{CO2}$ + $\ce{H2O}$ | C from $\ce{CO2}$, H from $\ce{H2O}$, O by difference |
| 14 | **mixture** + two unknowns | $x+y=m$, mole equation from product |
| 15 | **hydrate**, **anhydrous**, **x H2O** | $x = \dfrac{n_{\ce{H2O}}}{n_{\text{anhydrous}}}$ |

---

## ANSWERS

> Solve everything first. Check after.

**Beginner**
- B1: $1.711 \ \text{mol}$ &nbsp;&nbsp;|&nbsp;&nbsp; B2: $0.0278 \ \text{mol}$
- B3: $10.0 \ \text{mol}$ &nbsp;&nbsp;|&nbsp;&nbsp; B4: $4.0 \ \text{mol}$
- B5: $50.0 \ \text{g}$ &nbsp;&nbsp;|&nbsp;&nbsp; B6: $54.5 \ \text{g}$

**Intermediate**
- I1: $87.8 \ \text{g} \ \ce{CO2}$ &nbsp;&nbsp;|&nbsp;&nbsp; I2: $96.0 \ \text{g} \ \ce{O2}$ &nbsp;&nbsp;|&nbsp;&nbsp; I3: $55.9 \ \text{g} \ \ce{Fe}$
- I4: $\ce{H2}$ limiting, $44.7 \ \text{g} \ \ce{H2O}$, $0.32 \ \text{g} \ \ce{O2}$ remaining
- I5: $\ce{H2}$ limiting, $16.9 \ \text{g} \ \ce{NH3}$
- I6: $85.0\%$ &nbsp;&nbsp;|&nbsp;&nbsp; I7: $75.9\%$
- I8: $0.100 \ \text{mol}$ &nbsp;&nbsp;|&nbsp;&nbsp; I9: $2.33 \ \text{g} \ \ce{BaSO4}$
- I10: $44.8 \ \text{L}$ &nbsp;&nbsp;|&nbsp;&nbsp; I11: $11.2 \ \text{L}$
- I12: $52.4 \ \text{L}$ &nbsp;&nbsp;|&nbsp;&nbsp; I13: $2.51 \ \text{L}$
- I14: $\ce{CH4}$ &nbsp;&nbsp;|&nbsp;&nbsp; I15: $\ce{C2H6O}$
- I16: $0.300 \ \text{M}$ &nbsp;&nbsp;|&nbsp;&nbsp; I17: $6.94 \ \text{mL}$
- I18: $0.0800 \ \text{M}$ &nbsp;&nbsp;|&nbsp;&nbsp; I19: $0.188 \ \text{M}$

**Advanced**
- A1: $\ce{CH2}$ &nbsp;&nbsp;|&nbsp;&nbsp; A2: $\ce{C2H4O2}$
- A3: $50.0\% \ \ce{Na2CO3}$
- A4: $x = 5 \ (\ce{CuSO4 \cdot 5H2O})$
