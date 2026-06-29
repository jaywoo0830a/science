# 05: Banked Curve with Friction

**Type:** Engineering | **Topic:** Mechanics / Circular Motion | **Prerequisites:** Centripetal force, friction, vector resolution

---

## Problem

A highway curve of radius $R = 200\ \mathrm{m}$ is banked at angle $\theta = 15^\circ$. The coefficient of static friction between tires and road is $\mu_s = 0.70$. Find (a) the design speed (the speed at which no friction is needed), (b) the maximum safe speed without skidding outward, and (c) the minimum safe speed without skidding inward. ($g = 9.8\ \mathrm{m/s^2}$)

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

```
Variable          Symbol   Value               Unit        Dimension
─────────────────────────────────────────────────────────────────────
Radius             R        200                 m          [L]
Bank angle          θ        15°                 deg        [1]
Friction coeff     μ_s      0.70                —          [1]
Gravity             g       9.8                 m/s^2      [L][T]^{-2}
Design speed       v_d      ?                   m/s        [L][T]^{-1}
Max safe speed     v_max    ?                   m/s        [L][T]^{-1}
Min safe speed     v_min    ?                   m/s        [L][T]^{-1}
```

**Coordinate system (§0.1, tilted axes per §0.1 Rule 2 for inclines):**
- $+x$: parallel to the road surface, pointing *up* the bank (toward the inside of the curve)
- $+y$: perpendicular to the road surface, pointing *upward* from the surface (toward the sky)

**Relevant laws:** $\sum \vec{F} = m\vec{a}$, with $a_c = v^2/R$ (centripetal, horizontally toward center of curve). Friction: $f \leq \mu_s N$, direction opposes relative motion tendency.

### Step S -- SIMPLIFY

- Car treated as point mass
- Constant speed (no tangential acceleration)
- The centripetal acceleration is horizontal (toward center of the circular path), NOT along the road surface

### Step E -- EQUATION

**Forces on the car:**
1. Gravity: $mg$, vertically downward
2. Normal force: $N$, perpendicular to road surface ($+y$ direction)
3. Static friction: $f$, parallel to road surface ($\pm x$ direction, depending on whether car tends to skid outward or inward)

**Resolving forces into components:**

The centripetal acceleration $a_c = v^2/R$ is purely horizontal (toward center). In our tilted coordinates, this horizontal vector has components:
- Along $+x$ (up the bank): $+m\frac{v^2}{R}\cos\theta$ (the horizontal centripetal acceleration resolved along the road surface)
- Along $+y$ (perpendicular to road): $-m\frac{v^2}{R}\sin\theta$ (pushes car into the road)

**Force equations:**

$x$-direction (parallel to road, positive up-bank):
$$-mg\sin\theta \pm f = m\frac{v^2}{R}\cos\theta \tag{1}$$

The sign of $f$: $+f$ means friction acts up-bank (preventing skid outward); $-f$ means friction acts down-bank (preventing skid inward).

$y$-direction (perpendicular to road):
$$N - mg\cos\theta = m\frac{v^2}{R}\sin\theta \tag{2}$$

Friction limit:
$$|f| \leq \mu_s N \tag{3}$$

### Step E -- EXECUTE

**(a) Design speed: $f = 0$ (no friction needed).**

From (1) with $f = 0$: $-mg\sin\theta = m\frac{v_d^2}{R}\cos\theta$

$$v_d^2 = gR\frac{\sin\theta}{\cos\theta} = gR\tan\theta$$

$$v_d = \sqrt{9.8 \times 200 \times \tan 15^\circ} = \sqrt{1960 \times 0.2679} = \sqrt{525.1} = 22.9\ \mathrm{m/s} = 82.5\ \mathrm{km/h}$$

**(b) Maximum speed (tendency to skid outward → friction acts up-bank, $+f$ in (1)).**

From (1): $-mg\sin\theta + f = m\frac{v^2}{R}\cos\theta$
From (2): $N = mg\cos\theta + m\frac{v^2}{R}\sin\theta$

At the friction limit: $f = \mu_s N$.

Substituting:

$$\begin{aligned}
-mg\sin\theta + \mu_s\left(mg\cos\theta + m\frac{v_{\max}^2}{R}\sin\theta\right) &= m\frac{v_{\max}^2}{R}\cos\theta \\[4pt]
-g\sin\theta + \mu_s g\cos\theta + \mu_s\frac{v_{\max}^2}{R}\sin\theta &= \frac{v_{\max}^2}{R}\cos\theta \\[4pt]
\frac{v_{\max}^2}{R}(\cos\theta - \mu_s\sin\theta) &= g(\mu_s\cos\theta - \sin\theta)
\end{aligned}$$

$$v_{\max} = \sqrt{gR\frac{\mu_s\cos\theta - \sin\theta}{\cos\theta - \mu_s\sin\theta}}$$

Numerically ($\theta = 15^\circ$, $\sin 15^\circ = 0.2588$, $\cos 15^\circ = 0.9659$):

$$v_{\max} = \sqrt{9.8 \times 200 \times \frac{0.70 \times 0.9659 - 0.2588}{0.9659 - 0.70 \times 0.2588}}$$
$$= \sqrt{1960 \times \frac{0.6761 - 0.2588}{0.9659 - 0.1812}} = \sqrt{1960 \times \frac{0.4173}{0.7847}}$$
$$= \sqrt{1960 \times 0.5318} = \sqrt{1042.3} = 32.3\ \mathrm{m/s} = 116\ \mathrm{km/h}$$

**(c) Minimum speed (tendency to skid inward → friction acts down-bank, $-f$ in (1)).**

The derivation is identical except $f$ changes sign:

$$v_{\min} = \sqrt{gR\frac{-\mu_s\cos\theta - \sin\theta}{\cos\theta + \mu_s\sin\theta}}$$

Wait -- this would give a negative under the square root. Let me re-derive carefully.

For the minimum speed case, the car tends to slide *down* the bank (inward), so friction acts *up* the bank to prevent it. Actually, wait: if the car is going too slowly for the bank angle, gravity wants to pull it down the incline (toward the inside of the curve). Friction must act up the incline (toward the outside) to prevent this. So friction acts in the $+x$ direction (up-bank, same as for the max-speed case), but the centripetal term in equation (1) has the opposite sign relationship.

Let me re-derive: When the car goes slowly, the centripetal acceleration is small. Gravity's down-bank component exceeds the needed up-bank centripetal component. Friction acts up-bank to compensate.

Equation (1) with $f$ positive (up-bank):
$$-mg\sin\theta + f = m\frac{v^2}{R}\cos\theta$$

For minimum speed, we need $f$ acting *down* the bank (the centripetal requirement is small, so gravity's down-bank pull is excessive, and friction acts up-bank to restrain). Actually $f$ is still positive (up-bank) because friction opposes the tendency to slide down.

Let me think about this differently. Solve (1) for $f$:

$$f = m\frac{v^2}{R}\cos\theta + mg\sin\theta$$

Both terms are positive for any $v \geq 0$. So $f$ is always positive. Friction always points up-bank. The question is whether $f \leq \mu_s N$ (no skid) or $f > \mu_s N$ (skid).

But wait -- the friction force is *reactive*. At the design speed, $f = 0$. At speeds above design, the car wants to slide OUT (up the bank), so friction acts DOWN-bank ($-f$). At speeds below design, the car wants to slide IN (down the bank), so friction acts UP-bank ($+f$).

So the equations with the correct sign convention (friction acts to oppose relative motion):

**For $v > v_d$ (tendency to skid outward → friction down-bank, $-f$):**
$$-mg\sin\theta - f = m\frac{v^2}{R}\cos\theta$$

This gives $f < 0$ (meaning friction acts down-bank, which we expected), but the magnitude is $|f| = m\frac{v^2}{R}\cos\theta + mg\sin\theta$. At the limit $|f| = \mu_s N$:

$$\mu_s N = m\frac{v^2}{R}\cos\theta + mg\sin\theta$$

This was my max-speed derivation. The result is correct but the sign convention was sloppy.

**For $v < v_d$ (tendency to skid inward → friction up-bank, $+f$):**
$$-mg\sin\theta + f = m\frac{v^2}{R}\cos\theta$$

$$f = m\frac{v^2}{R}\cos\theta + mg\sin\theta > 0$$

So $f$ is positive in both cases! This means friction always has a component resisting gravity. At low speeds, friction helps hold the car up; at high speeds, friction helps hold the car down (the centripetal term dominates).

Actually, let me reconsider. The centripetal acceleration is toward the *center of the curve*, which is horizontal, NOT up the bank. The horizontal component of the centripetal acceleration resolved along the bank is toward the inside of the curve, which is DOWN the bank.

So equation (1) should be:
$$-mg\sin\theta + f = -m\frac{v^2}{R}\cos\theta$$

The centripetal acceleration's component along the bank (down-bank direction) is $-m\frac{v^2}{R}\cos\theta$ (negative in our $+x$ = up-bank convention).

Then:
$$f = mg\sin\theta - m\frac{v^2}{R}\cos\theta$$

Now at $v = v_d = \sqrt{gR\tan\theta}$: $f = mg\sin\theta - mg\sin\theta = 0$. ✓

For $v > v_d$: $m\frac{v^2}{R}\cos\theta > mg\sin\theta$, so $f < 0$ → friction acts down-bank (negative $+x$). At the limit $|f| = \mu_s N$:

$$m\frac{v^2}{R}\cos\theta - mg\sin\theta = \mu_s N$$

For $v < v_d$: $f > 0$ → friction acts up-bank. At the limit:

$$mg\sin\theta - m\frac{v^2}{R}\cos\theta = \mu_s N$$

**This is the correct derivation.** Let me redo the numbers.

From (2): $N = mg\cos\theta + m\frac{v^2}{R}\sin\theta$.

**(b) Maximum speed ($v > v_d$):** $m\frac{v^2}{R}\cos\theta - mg\sin\theta = \mu_s(mg\cos\theta + m\frac{v^2}{R}\sin\theta)$

$$\frac{v^2}{R}(\cos\theta - \mu_s\sin\theta) = g(\mu_s\cos\theta + \sin\theta)$$

$$v_{\max} = \sqrt{gR\frac{\mu_s\cos\theta + \sin\theta}{\cos\theta - \mu_s\sin\theta}}$$

Numerically: $\sin 15^\circ = 0.2588$, $\cos 15^\circ = 0.9659$.

$$v_{\max} = \sqrt{9.8 \times 200 \times \frac{0.70 \times 0.9659 + 0.2588}{0.9659 - 0.70 \times 0.2588}}$$
$$= \sqrt{1960 \times \frac{0.6761 + 0.2588}{0.9659 - 0.1812}} = \sqrt{1960 \times \frac{0.9349}{0.7847}}$$
$$= \sqrt{1960 \times 1.1914} = \sqrt{2335.2} = 48.3\ \mathrm{m/s} = 174\ \mathrm{km/h}$$

**(c) Minimum speed ($v < v_d$):** $mg\sin\theta - m\frac{v^2}{R}\cos\theta = \mu_s(mg\cos\theta + m\frac{v^2}{R}\sin\theta)$

$$g\sin\theta - \mu_s g\cos\theta = \frac{v^2}{R}(\cos\theta + \mu_s\sin\theta)$$

$$v_{\min} = \sqrt{gR\frac{\sin\theta - \mu_s\cos\theta}{\cos\theta + \mu_s\sin\theta}}$$

If $\sin\theta < \mu_s\cos\theta$ (i.e., $\tan\theta < \mu_s$), the numerator is negative and $v_{\min}$ is imaginary -- meaning the car could stop completely without skidding.

Check: $\tan 15^\circ = 0.2679 < 0.70 = \mu_s$. So $v_{\min}$ is imaginary → **the car can safely stop on this banked curve without skidding inward.**

### Step R -- REFLECT

**Dimensional check:** $gR$ has dimensions $[L][T]^{-2}[L] = [L]^2[T]^{-2}$. Square root gives $[L][T]^{-1}$ = speed. ✓

**Limiting cases:**

| Test | Expected | Result |
|------|----------|--------|
| $\theta = 0$ (flat), $\mu_s \to 0$ | $v_{\max} = 0$ (no friction, no bank → no turning) | $v_{\max} = 0$ ✓ |
| $\theta = 0$ (flat) | $v_{\max} = \sqrt{\mu_s gR}$ (friction-only turn) | $\sqrt{0.70 \times 9.8 \times 200} = 37.0\ \mathrm{m/s}$ ✓ |
| $\mu_s \to \infty$ | $v_{\max} \to \infty$, $v_{\min} \to 0$ | ✓ |
| $\theta = 45^\circ$, $\mu_s = 0$ | $v = \sqrt{gR}$ (45° bank, design speed) | ✓ |

**Engineering conclusion:** The design speed ($82.5\ \mathrm{km/h}$) is a comfortable curve speed. With good tires on dry pavement ($\mu_s = 0.70$), the maximum safe speed is $174\ \mathrm{km/h}$, far above any posted limit. The minimum safe speed is effectively zero (the car won't slide down even when stopped, because $\tan 15^\circ < \mu_s$). This curve is well-designed for safety.

**Answer: (a) $v_d = 82.5\ \mathrm{km/h}$, (b) $v_{\max} = 174\ \mathrm{km/h}$, (c) $v_{\min}$: stationary is safe (no lower bound).**

> **Key insight:** The sign convention for friction is the trickiest part. The key rule: friction opposes the *tendency* of relative motion. Determine which way the car would slide *without* friction, then friction acts opposite. This is a mechanical rule, not intuition.
