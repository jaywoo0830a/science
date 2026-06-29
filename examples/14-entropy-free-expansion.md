# 14: Entropy Change in Free Expansion

**Type:** Olympiad | **Topic:** Thermodynamics | **Prerequisites:** Entropy, state functions, ideal gas

---

## Problem

One mole of an ideal gas initially at $T = 300\ \mathrm{K}$ and $V_1 = 10.0\ \mathrm{L}$ undergoes free expansion (into vacuum) to $V_2 = 20.0\ \mathrm{L}$. The container is thermally isolated. Find (a) the final temperature, (b) the entropy change of the gas. ($R = 8.31\ \mathrm{J/(mol\,K)}$)

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable          Symbol   Value          Unit            Dimension
─────────────────────────────────────────────────────────────────────
Initial volume     V1       10.0e-3        m^3            [L]^3
Final volume       V2       20.0e-3        m^3            [L]^3
Temperature        T        300            K              [Θ]
Moles              n        1              mol            [N]
Gas constant       R        8.31           J/(mol·K)      [M][L]^2[T]^{-2}[Θ]^{-1}[N]^{-1}
Entropy change     ΔS       ?              J/K            [M][L]^2[T]^{-2}[Θ]^{-1}
```

**Relevant laws:**
- First Law: $\Delta U = Q - W$
- Free expansion: $W = 0$ (no external pressure), $Q = 0$ (thermally isolated) → $\Delta U = 0$
- Ideal gas: $U$ depends only on $T$ → $\Delta T = 0$
- Entropy (state function for ideal gas): $\Delta S = nR\ln(V_2/V_1) + nC_V\ln(T_2/T_1)$

### Step S -- SIMPLIFY

Since $T_2 = T_1$, the second term in $\Delta S$ vanishes. Entropy change depends only on the volume ratio.

### Step E -- EQUATION

$$\Delta S = nR\ln\frac{V_2}{V_1}$$

### Step E -- EXECUTE

**(a)** $T_2 = T_1 = 300\ \mathrm{K}$.

**(b)** $\Delta S = (1)(8.31)\ln\frac{20.0}{10.0} = 8.31 \times \ln 2 = 8.31 \times 0.6931 = 5.76\ \mathrm{J/K}$.

### Step R -- REFLECT

**Dimensional check (§0.2):** $nR$: $[N] \times [M][L]^2[T]^{-2}[Θ]^{-1}[N]^{-1} = [M][L]^2[T]^{-2}[Θ]^{-1}$. Dimensionless $\ln$ factor. Result: $[M][L]^2[T]^{-2}[Θ]^{-1} = \mathrm{J/K}$. ✓

**Irreversibility check:** $\Delta S > 0$ confirms the Second Law (entropy increases in an irreversible process). The process is irreversible: the gas will never spontaneously return to $V_1$ without external intervention. ✓

**Reversible path verification:** Although the actual free expansion is irreversible, $\Delta S$ can be computed along any reversible path between the same initial and final states. The isothermal reversible expansion gives $\Delta S = nR\ln(V_2/V_1)$, identical to our result. This is the procedural meaning of "entropy is a state function."

**Answer: (a) $T_2 = 300\ \mathrm{K}$, (b) $\Delta S = 5.76\ \mathrm{J/K}$.**

> **Key insight:** Entropy is a state function. Its change depends only on initial and final states, not the process. For free expansion, the actual path is irreversible, but we compute $\Delta S$ using a reversible isothermal path connecting the same states. This is a procedural rule, not a physical picture.
