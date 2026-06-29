# 18: Solar Cell Efficiency from Photoelectric Effect

**Type:** Engineering | **Topic:** Modern Physics | **Prerequisites:** Photon energy, work function, band gap

---

## Problem

A silicon solar cell has a band gap of $E_g = 1.12\ \mathrm{eV}$. Sunlight approximates a blackbody spectrum at $T = 5800\ \mathrm{K}$, with peak wavelength $\lambda_{\text{peak}} \approx 500\ \mathrm{nm}$. (a) What fraction of solar photons have energy above the silicon band gap? (b) Estimate the theoretical maximum efficiency, accounting for: photons below band gap produce no current, and photon energy above the band gap is lost as heat (only $E_g$ per photon is usable). (c) If the actual cell efficiency is $22\%$, what fraction of the theoretical maximum does this represent?

Constants: $hc = 1240\ \mathrm{eV\,nm}$, $k_B = 8.617 \times 10^{-5}\ \mathrm{eV/K}$.

---

## Solution

### Step I -- IDENTIFY

Photon energy: $E = hc/\lambda$. Threshold wavelength for $E_g = 1.12\ \mathrm{eV}$:

$$\lambda_g = \frac{hc}{E_g} = \frac{1240}{1.12} \approx 1107\ \mathrm{nm}$$

Photons with $\lambda < \lambda_g$ have $E > E_g$ and can excite electrons across the band gap.

### Step S -- SIMPLIFY

Simplifying assumption: treat the solar spectrum as a blackbody at $5800\ \mathrm{K}$. The fraction of photons with energy above $E_g$ can be estimated from the blackbody distribution.

### Step E -- EXECUTE

**(a)** The fraction of solar photons with $E > 1.12\ \mathrm{eV}$ (i.e., $\lambda < 1107\ \mathrm{nm}$) from a $5800\ \mathrm{K}$ blackbody:

The average photon energy for a blackbody is approximately $2.7k_B T = 2.7(8.617 \times 10^{-5})(5800) \approx 1.35\ \mathrm{eV}$.

Since $E_g = 1.12\ \mathrm{eV}$ is close to the average photon energy, roughly $55{-}65\%$ of photons have sufficient energy. A more precise integration gives approximately $60\%$.

Let $f_{\text{above}} \approx 0.60$ (fraction of photons above band gap).

**(b) Theoretical maximum efficiency (Shockley-Queisser detailed-balance limit for single junction):**

For each above-gap photon, only $E_g$ of energy is converted to electrical work. The rest ($E_{\text{photon}} - E_g$) is lost as heat.

The usable fraction of solar power is:

$$\eta_{\text{max}} \approx \frac{E_g \times (\text{\# photons above gap})}{\text{total incident power}}$$

A simplified estimate (ignoring the detailed spectrum shape, recombination, and other losses) gives the Shockley-Queisser limit for silicon: **$\eta \approx 30{-}33\%$**.

**(c)** Actual $22\%$ vs. theoretical $\sim 31\%$: the cell achieves $22/31 \approx 71\%$ of the theoretical single-junction limit. This is excellent for commercial silicon.

### Step R -- REFLECT

**Energy budget for a $22\%$ efficient cell under $1000\ \mathrm{W/m^2}$ illumination:**

| Loss mechanism | Fraction |
|----------------|----------|
| Below-band-gap photons (transmitted) | $\sim 20\%$ |
| Above-band-gap excess energy (thermalization) | $\sim 30\%$ |
| Recombination, reflection, resistive losses | $\sim 28\%$ |
| **Usable electrical output** | **$22\%$** |

**Answer: (a) $\sim 60\%$ of photons above band gap, (b) $\sim 31\%$ theoretical maximum, (c) $71\%$ of theoretical limit achieved.**

> **Key insight:** The photoelectric effect determines the fundamental limits of solar cells. The band gap acts as a high-pass filter: only photons with $E > E_g$ contribute. But even those photons can only deliver $E_g$ of electrical energy, with the excess converted to heat. This two-fold loss (below-gap photons wasted; above-gap excess wasted) creates a fundamental efficiency ceiling. Multi-junction cells circumvent this by stacking materials with different band gaps.
