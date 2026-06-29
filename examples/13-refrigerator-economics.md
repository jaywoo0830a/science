# 13: Refrigerator Economics

**Type:** Engineering | **Topic:** Thermodynamics | **Prerequisites:** COP, Carnot cycle, energy cost

---

## Problem

A commercial refrigerator maintains an interior temperature of $T_C = 268\ \mathrm{K}$ ($-5^\circ\mathrm{C}$) in a kitchen at $T_H = 298\ \mathrm{K}$ ($25^\circ\mathrm{C}$). The refrigerator's actual COP is $40\%$ of Carnot. It must remove $Q_C = 500\ \mathrm{kWh}$ of heat per month. Electricity costs $\$0.15/\mathrm{kWh}$. Find (a) the Carnot COP, (b) the actual COP, (c) monthly electricity cost, (d) annual cost. Compare to a less efficient model with COP = $30\%$ of Carnot costing $\$200$ less to purchase. Which is the better 5-year investment?

---

## Solution

### Step I -- IDENTIFY

$\mathrm{COP}_{\mathrm{Carnot}} = T_C/(T_H - T_C)$. $\mathrm{COP}_{\mathrm{refrigerator}} = Q_C/W$.

### Step E -- EXECUTE

**(a)** $\mathrm{COP}_{\mathrm{Carnot}} = \frac{268}{298-268} = \frac{268}{30} = 8.93$.

**(b)** $\mathrm{COP}_{\mathrm{actual}} = 0.40 \times 8.93 = 3.57$.

**(c)** $W_{\text{monthly}} = 500/3.57 = 140.0\ \mathrm{kWh}$. Cost = $140.0 \times 0.15 = \$21.00$/month.

**(d)** Annual cost = $\$252$. Over 5 years: $\$1{,}260$.

**Comparison model (COP = $30\%$ Carnot):**

$\mathrm{COP} = 0.30 \times 8.93 = 2.68$. $W = 500/2.68 = 186.6\ \mathrm{kWh/mo}$. Cost = $\$28.00$/mo. Annual: $\$336$. 5-year: $\$1{,}680$.

5-year savings with better model: $\$1{,}680 - \$1{,}260 = \$420$. Purchase premium: $\$200$. Net savings: $\$420 - \$200 = \$220$.

### Step R -- REFLECT

The better refrigerator saves $\$220$ over 5 years after accounting for the higher purchase price. Over a typical 15-year lifespan, savings exceed $\$1{,}000$.

**Answer: (a) 8.93, (b) 3.57, (c) $\$21$/month, (d) $\$252$/year; the better model saves $\$220$ net over 5 years.**

> **Key insight:** Energy economics reduces to COP ratios. No intuition about "how cold feels" -- just kelvin temperatures in a formula.
