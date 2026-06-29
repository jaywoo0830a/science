# 16: Police Radar -- Doppler Shift

**Type:** Engineering | **Topic:** Waves | **Prerequisites:** Doppler effect, frequency, wave speed

---

## Problem

A police radar gun emits microwaves at $f_0 = 10.525\ \mathrm{GHz}$. The beam reflects off a car and returns to the gun. The beat frequency between emitted and received waves is $\Delta f = 2.50\ \mathrm{kHz}$. Find (a) the car's speed, (b) whether it is approaching or receding. ($c = 3.00 \times 10^8\ \mathrm{m/s}$)

---

## Solution

### Step I -- IDENTIFY

The radar wave undergoes **double Doppler shift**: (1) from gun to moving car, (2) from moving car (now a moving source) back to gun. For $v \ll c$, the beat frequency $\Delta f \approx 2f_0(v/c)$.

**Relevant law:** For an observer moving toward a stationary source: $f' = f_0(1 + v/c)$. For a source moving toward a stationary observer: $f'' = f'(1 + v/c) \approx f_0(1 + 2v/c)$ for $v \ll c$.

### Step E -- EXECUTE

$$\Delta f = f'' - f_0 \approx f_0\frac{2v}{c}$$

$$v = \frac{c\,\Delta f}{2f_0} = \frac{(3.00 \times 10^8)(2.50 \times 10^3)}{2(10.525 \times 10^9)}$$
$$= \frac{7.50 \times 10^{11}}{2.105 \times 10^{10}} = 35.6\ \mathrm{m/s} = 128\ \mathrm{km/h}$$

**Direction:** The received frequency is higher than emitted ($f'' > f_0$). By the Doppler shift sign convention, this means the car is **approaching**.

### Step R -- REFLECT

**Dimensional check:** $\mathrm{m/s} \times \mathrm{Hz} / \mathrm{Hz} = \mathrm{m/s}$. ✓

**Engineering context:** A $2.50\ \mathrm{kHz}$ beat frequency on a $10.525\ \mathrm{GHz}$ carrier corresponds to a relative frequency shift of $\Delta f/f_0 \approx 2.4 \times 10^{-7}$. Radar guns measure this tiny shift using heterodyne detection (mixing the transmitted and reflected signals and measuring the beat).

**Answer: $128\ \mathrm{km/h}$, approaching.** The driver is speeding on most highways.

> **Key insight:** The double Doppler shift factor of $2$ is the critical non-intuitive element. It comes from applying the Doppler formula twice -- once for the car as moving observer, once as moving source. The derivation is mechanical; the factor of $2$ emerges from the algebra.
