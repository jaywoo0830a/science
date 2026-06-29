# 19: Relativistic Decay -- Pion → Muon + Neutrino

**Type:** Olympiad | **Topic:** Modern Physics / Relativity | **Prerequisites:** Energy-momentum 4-vector, invariant mass

---

## Problem

A charged pion ($\pi^+$, rest mass $m_\pi = 139.6\ \mathrm{MeV}/c^2$) decays at rest into a muon ($\mu^+$, $m_\mu = 105.7\ \mathrm{MeV}/c^2$) and a neutrino ($\nu_\mu$, $m_\nu \approx 0$). Find (a) the muon's kinetic energy, (b) the neutrino's energy. Use relativistic energy-momentum conservation.

---

## Solution

### Step I -- IDENTIFY

**Relevant laws:** Conservation of 4-momentum. Invariant: $E^2 - (pc)^2 = (mc^2)^2$.

**Initial state:** Pion at rest. $E_\pi = m_\pi c^2$, $p_\pi = 0$.

**Final state:** Muon ($E_\mu$, $p_\mu$) and neutrino ($E_\nu$, $p_\nu$).

### Step S -- SIMPLIFY

- Neutrino mass negligible: $E_\nu = p_\nu c$.
- Momentum conservation: $p_\mu = p_\nu$ (equal and opposite).
- Energy conservation: $m_\pi c^2 = E_\mu + E_\nu$.

### Step E -- EQUATION

For muon: $E_\mu^2 = (p_\mu c)^2 + (m_\mu c^2)^2$.

Since $p_\mu c = p_\nu c = E_\nu$:

$$E_\mu^2 = E_\nu^2 + (m_\mu c^2)^2$$

Energy conservation: $E_\nu = m_\pi c^2 - E_\mu$.

$$E_\mu^2 = (m_\pi c^2 - E_\mu)^2 + (m_\mu c^2)^2$$
$$E_\mu^2 = (m_\pi c^2)^2 - 2m_\pi c^2 E_\mu + E_\mu^2 + (m_\mu c^2)^2$$
$$2m_\pi c^2 E_\mu = (m_\pi c^2)^2 + (m_\mu c^2)^2$$

$$E_\mu = \frac{m_\pi^2 + m_\mu^2}{2m_\pi}c^2$$

### Step E -- EXECUTE

$$E_\mu = \frac{139.6^2 + 105.7^2}{2 \times 139.6} = \frac{19488 + 11172}{279.2} = \frac{30660}{279.2} = 109.8\ \mathrm{MeV}$$

**(a)** Kinetic energy: $K_\mu = E_\mu - m_\mu c^2 = 109.8 - 105.7 = 4.1\ \mathrm{MeV}$.

**(b)** $E_\nu = m_\pi c^2 - E_\mu = 139.6 - 109.8 = 29.8\ \mathrm{MeV}$.

### Step R -- REFLECT

**Check:** $p_\mu c = \sqrt{E_\mu^2 - (m_\mu c^2)^2} = \sqrt{109.8^2 - 105.7^2} = \sqrt{12056 - 11172} = \sqrt{884} = 29.7\ \mathrm{MeV} \approx E_\nu = 29.8\ \mathrm{MeV}$. ✓

**Answer: (a) $K_\mu = 4.1\ \mathrm{MeV}$, (b) $E_\nu = 29.8\ \mathrm{MeV}$.**

> **Key insight:** The muon carries most of the energy ($109.8\ \mathrm{MeV}$) but little kinetic energy ($4.1\ \mathrm{MeV}$) because it is heavy. The (nearly) massless neutrino carries substantial energy ($29.8\ \mathrm{MeV}$) from a relatively small momentum. This is a pure algebraic consequence of $E^2 = p^2c^2 + m^2c^4$.
