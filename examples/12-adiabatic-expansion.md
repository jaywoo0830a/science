# 12: Adiabatic Expansion of a Diatomic Gas

**Type:** Olympiad | **Topic:** Thermodynamics | **Prerequisites:** First law, adiabatic processes, degrees of freedom

---

## Problem

One mole of an ideal diatomic gas ($C_V = \frac{5}{2}R$) at initial temperature $T_1 = 300\ \mathrm{K}$ and pressure $P_1 = 1.00\ \mathrm{atm}$ undergoes an adiabatic expansion to twice its initial volume. Find (a) the final temperature and pressure, (b) the work done by the gas, (c) the change in internal energy. ($R = 8.31\ \mathrm{J/(mol\,K)}$)

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable          Symbol   Value          Unit      Dimension
─────────────────────────────────────────────────────────────
Initial temp       T1       300            K         [Θ]
Initial pressure   P1       1.013e5        Pa        [M][L]^{-1}[T]^{-2}
Volume ratio       V2/V1    2              —         [1]
CV (diatomic)      C_V      (5/2)R         J/(mol·K) [M][L]^2[T]^{-2}[Θ]^{-1}[N]^{-1}
```

**Relevant laws:**
- Adiabatic process: $PV^\gamma = \text{constant}$, $TV^{\gamma-1} = \text{constant}$
- $\gamma = C_P/C_V = (C_V + R)/C_V = 1 + R/C_V$
- First Law: $\Delta U = Q - W$. For adiabatic: $Q = 0$, so $W = -\Delta U$
- $\Delta U = nC_V\Delta T$

### Step S -- SIMPLIFY

For a diatomic ideal gas: $C_V = \frac{5}{2}R$, $C_P = \frac{7}{2}R$, $\gamma = 7/5 = 1.40$.

### Step E -- EXECUTE

**(a) Final temperature and pressure:**

$$T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1}$$

$$T_2 = T_1\left(\frac{V_1}{V_2}\right)^{\gamma-1} = 300 \times (0.5)^{0.40}$$

$(0.5)^{0.40} = e^{0.40\ln(0.5)} = e^{-0.277} = 0.758$.

$$T_2 = 300 \times 0.758 = 227.5\ \mathrm{K}$$

$$P_2 = P_1\left(\frac{V_1}{V_2}\right)^\gamma = 1.00 \times (0.5)^{1.40}$$

$(0.5)^{1.40} = e^{1.40 \times (-0.693)} = e^{-0.970} = 0.379$.

$$P_2 = 1.00 \times 0.379 = 0.379\ \mathrm{atm}$$

**(b) Work done by the gas:**

For adiabatic process: $W = -\Delta U = -nC_V(T_2 - T_1) = nC_V(T_1 - T_2)$.

$$W = (1)\left(\frac{5}{2}R\right)(300 - 227.5) = \frac{5}{2} \times 8.31 \times 72.5$$
$$= 2.5 \times 8.31 \times 72.5 = 1506\ \mathrm{J}$$

**(c) Change in internal energy:**

$$\Delta U = nC_V(T_2 - T_1) = \frac{5}{2} \times 8.31 \times (227.5 - 300) = -1506\ \mathrm{J}$$

### Step R -- REFLECT

**Check:** $W = -\Delta U = 1506\ \mathrm{J}$. First Law: $\Delta U = Q - W$, $Q = 0$ (adiabatic). $\Delta U = -W$. ✓

**Dimensional check:** $nRT$: $[\mathrm{mol}] \times [M][L]^2[T]^{-2}[\Theta]^{-1}[\mathrm{mol}]^{-1} \times [\Theta] = [M][L]^2[T]^{-2} = \mathrm{J}$. ✓

**Limiting cases:**

| Test | Expected | Result |
|------|----------|--------|
| $\gamma \to 1$ (isothermal limit) | $T_2 = T_1$ | $T_2 = 300\ \mathrm{K}$ ✓ |
| $V_2/V_1 \to 1$ | $T_2 \to T_1$, $P_2 \to P_1$ | No change ✓ |
| Monatomic gas ($\gamma = 5/3$) | Greater cooling ($T_2$ lower) | $T_2 = 300 \times 0.5^{0.667} = 189\ \mathrm{K}$ |

**Physical interpretation:** The gas cools during adiabatic expansion because it does work on the surroundings with no heat input. The temperature drop ($72.5\ \mathrm{K}$) is substantial -- this is the principle behind cloud formation (rising air expands adiabatically and cools).

**Answer: (a) $T_2 = 228\ \mathrm{K}$, $P_2 = 0.38\ \mathrm{atm}$; (b) $W = 1.51 \times 10^3\ \mathrm{J}$; (c) $\Delta U = -1.51 \times 10^3\ \mathrm{J}$.**

> **Key insight:** The adiabatic relations $PV^\gamma = \text{const}$ and $TV^{\gamma-1} = \text{const}$ are derived from the First Law, not memorized separately. For a non-intuitive approach: compute $\gamma$ from the molecular structure (diatomic $\to$ 5 quadratic degrees of freedom $\to C_V = 5R/2 \to \gamma = 1.4$), then apply the power-law formulas mechanically.
