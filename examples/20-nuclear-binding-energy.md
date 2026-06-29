# 20: Nuclear Binding Energy and Power Plant Fuel

**Type:** Engineering | **Topic:** Modern Physics / Nuclear | **Prerequisites:** Mass defect, $E=mc^2$, binding energy, burnup

---

## Problem

The fission of one $^{235}$U nucleus releases approximately $200\ \mathrm{MeV}$ of energy. Natural uranium contains $0.72\%$ $^{235}$U. A 1-GW(e) nuclear power plant operates at $33\%$ thermal efficiency. Find (a) the mass of $^{235}$U consumed per day, (b) the mass of natural uranium required per day, (c) the annual natural uranium requirement, (d) compare to the $3.5 \times 10^6$ tonnes of coal per year for an equivalent coal plant.

Constants: $1\ \mathrm{eV} = 1.60 \times 10^{-19}\ \mathrm{J}$, $N_A = 6.02 \times 10^{23}\ \mathrm{mol^{-1}}$, molar mass of $^{235}$U $\approx 235\ \mathrm{g/mol}$.

---

## Solution

### Step I -- IDENTIFY

**Electrical power:** $P_e = 1.0\ \mathrm{GW} = 10^9\ \mathrm{W}$.

**Thermal power:** $P_{th} = P_e/\eta = 10^9/0.33 = 3.03 \times 10^9\ \mathrm{W}$.

**Daily thermal energy:** $E_{th} = P_{th} \times 86400\ \mathrm{s} = 3.03 \times 10^9 \times 8.64 \times 10^4 = 2.62 \times 10^{14}\ \mathrm{J/day}$.

### Step E -- EXECUTE

**(a)** Energy per fission: $E_f = 200\ \mathrm{MeV} = 200 \times 10^6 \times 1.60 \times 10^{-19} = 3.20 \times 10^{-11}\ \mathrm{J}$.

Fissions per day: $N_f = 2.62 \times 10^{14} / 3.20 \times 10^{-11} = 8.19 \times 10^{24}$.

Moles of $^{235}$U: $n = N_f/N_A = 8.19 \times 10^{24}/6.02 \times 10^{23} = 13.6\ \mathrm{mol}$.

Mass: $m_{235} = 13.6 \times 235 = 3.20 \times 10^3\ \mathrm{g} \approx 3.2\ \mathrm{kg/day}$.

**(b)** Natural uranium mass: $m_{\text{nat}} = 3.2/0.0072 = 444\ \mathrm{kg/day}$.

**(c)** Annual: $m_{\text{annual}} = 444 \times 365 = 1.62 \times 10^5\ \mathrm{kg} = 162\ \text{tonnes/year}$.

**(d)** Coal comparison: $162\ \text{tonnes}$ of uranium vs. $3.5 \times 10^6\ \text{tonnes}$ of coal. Ratio: $3.5 \times 10^6 / 162 \approx 2.2 \times 10^4$. Nuclear fuel is over **20,000 times** more energy-dense than coal.

### Step R -- REFLECT

**Dimensional check:** MeV → J conversion, moles → grams, all consistent. ✓

**Engineering context:** The actual $^{235}$U consumption is higher because not all nuclei fission (some capture neutrons without fission), and fuel is typically enriched to $3{-}5\%$ $^{235}$U. But the order of magnitude -- kilograms per day vs. trainloads of coal per day -- illustrates the fundamental reason nuclear power exists: the energy density of nuclear fuel is unmatched by any chemical fuel.

**Answer: (a) $3.2\ \mathrm{kg}$ $^{235}$U/day, (b) $444\ \mathrm{kg}$ natural U/day, (c) $162\ \text{tonnes/year}$, (d) uranium is $\sim 20{,}000\times$ more energy-dense than coal.**

> **Key insight:** $E=mc^2$ is not a metaphor. The mass defect in nuclear reactions ($\sim 0.1\%$ of the rest mass) releases millions of times more energy than chemical reactions (where bond energies are $\sim \mathrm{eV}$ vs. $\sim \mathrm{MeV}$). The calculation is pure unit conversion and stoichiometry.
