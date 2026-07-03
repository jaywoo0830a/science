# Mathematics Practice Answers — 150 Solutions

> **Every answer follows the `mathematics-without-intuition.md` method: Trigger Trace → Execute → Reflect.**
> Every card reference traces to `honors-mathematics-expression-to-equation-vocabulary.md`.
> Format: **Trigger Trace** (phrase → card → equation/technique) → **Execute** → **Reflect** (domain check, type check, derivative/integral verification, special case).

---

# BASIC ANSWERS (M1–M50)

## M1–M8: Algebra & Functions

**M1.** Solve $x^2 - 5x + 6 = 0$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "quadratic equation" | 1 | $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$ |

**Execute:** $a=1$, $b=-5$, $c=6$. $x = \frac{5 \pm \sqrt{25-24}}{2} = \frac{5 \pm 1}{2}$. $x = 3$ or $x = 2$.
**Reflect:** Discriminant $D = 1 > 0$ → 2 distinct real roots (Card 2). $(x-2)(x-3) = x^2-5x+6$. ✓ **Ans: $x = 2,\;3$.**

---

**M2.** Nature of roots of $2x^2 - 4x + 3 = 0$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "discriminant", "nature of roots" | 2 | $D = b^2-4ac$ |

**Execute:** $a=2$, $b=-4$, $c=3$. $D = (-4)^2 - 4(2)(3) = 16 - 24 = -8$.
**Reflect:** $D < 0$ → two complex conjugate roots (Card 2). ✓ **Ans: Two complex conjugate roots.**

---

**M3.** Sum and product of roots of $3x^2 - 7x + 2 = 0$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "sum of roots, product of roots" | 3 | $\alpha+\beta = -b/a$, $\alpha\beta = c/a$ |

**Execute:** $\alpha+\beta = -(-7)/3 = 7/3$. $\alpha\beta = 2/3$.
**Reflect:** Verify: roots are $2$ and $1/3$. Sum $= 7/3$, product $= 2/3$. ✓ **Ans: Sum $= 7/3$, product $= 2/3$.**

---

**M4.** Factor $x^4 - 16$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "difference of squares" | 4 | $a^2 - b^2 = (a-b)(a+b)$ |

**Execute:** $x^4 - 16 = (x^2)^2 - 4^2 = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4)$.
**Reflect:** $x^2+4$ is irreducible over reals (sum of squares). Card 4 applied twice. ✓ **Ans: $(x-2)(x+2)(x^2+4)$.**

---

**M5.** Solve $2^x = 32$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "exponential equation" | 22 | Take $\ln$ of both sides |
| "exponent rules" | 15 | $32 = 2^5$ |

**Execute:** $2^x = 2^5$ → $x = 5$. Or: $x\ln 2 = \ln 32 = 5\ln 2$ → $x = 5$.
**Reflect:** $2^5 = 32$. ✓ **Ans: $x = 5$.**

---

**M6.** Expand $\log_3(9x^2)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "logarithm properties" | 19 | $\log_b(xy) = \log_b x + \log_b y$, $\log_b(x^n) = n\log_b x$ |

**Execute:** $\log_3(9x^2) = \log_3 9 + \log_3(x^2) = 2 + 2\log_3 x$.
**Reflect:** $\log_3 9 = \log_3(3^2) = 2$. ✓ **Ans: $2 + 2\log_3 x$.**

---

**M7.** Domain of $f(x) = \frac{\sqrt{x-2}}{x-5}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "find the domain" | 25 | Exclude: even roots of negatives, division by zero |

**Execute:** $\sqrt{x-2}$ requires $x-2 \ge 0$ → $x \ge 2$. Denominator $x-5 \neq 0$ → $x \neq 5$.
**Reflect:** Domain: $[2, 5) \cup (5, \infty)$. At $x=2$: $\sqrt{0}/ (-3) = 0$, valid. At $x=5$: undefined (vertical asymptote). ✓ **Ans: $[2, 5) \cup (5, \infty)$.**

---

**M8.** Write $y = x^2 + 6x + 5$ in vertex form.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "completing the square" | 8 | $ax^2+bx+c = a(x + b/(2a))^2 + (c - b^2/(4a))$ |
| "vertex form" | 9 | $y = a(x-h)^2 + k$, vertex $(h,k)$ |

**Execute:** $x^2 + 6x + 5 = (x^2 + 6x + 9) + 5 - 9 = (x+3)^2 - 4$. Vertex: $(-3, -4)$.
**Reflect:** Card 10: axis of symmetry $x = -3$. $f(-3) = 9 - 18 + 5 = -4$. ✓ **Ans: $y = (x+3)^2 - 4$, vertex $(-3,-4)$.**

---

## M9–M15: Trigonometry

**M9.** Right triangle: opposite $=3$, hypotenuse $=5$. Find $\sin\theta$, $\cos\theta$, $\tan\theta$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "SOH-CAH-TOA" | 39 | $\sin\theta = \text{opp}/\text{hyp}$, $\cos\theta = \text{adj}/\text{hyp}$, $\tan\theta = \text{opp}/\text{adj}$ |
| "Pythagorean theorem" | 43 | $a^2 + b^2 = c^2$ |

**Execute:** Adjacent $= \sqrt{5^2-3^2} = \sqrt{16} = 4$. $\sin\theta = 3/5$, $\cos\theta = 4/5$, $\tan\theta = 3/4$.
**Reflect:** $\sin^2\theta + \cos^2\theta = 9/25 + 16/25 = 1$ (Card 56). ✓ **Ans: $\sin\theta = 3/5$, $\cos\theta = 4/5$, $\tan\theta = 3/4$.**

---

**M10.** Convert $150^\circ$ to radians.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "degrees to radians" | 50 | $\theta_{\text{rad}} = \theta_{\text{deg}} \times \frac{\pi}{180^\circ}$ |

**Execute:** $150^\circ \times \frac{\pi}{180^\circ} = \frac{150\pi}{180} = \frac{5\pi}{6}$.
**Reflect:** $150^\circ = 180^\circ - 30^\circ$, so $5\pi/6 = \pi - \pi/6$. ✓ **Ans: $5\pi/6$ rad.**

---

**M11.** Arc length: $r = 10\;\mathrm{cm}$, $\theta = \pi/3$ rad.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "arc length" | 51 | $s = r\theta$ |

**Execute:** $s = 10 \times \frac{\pi}{3} = \frac{10\pi}{3}\;\mathrm{cm}$.
**Reflect:** $\theta$ in radians required (Card 51 note). Full circle: $2\pi \times 10 = 20\pi$; $\pi/3$ is $1/6$ of circle → $20\pi/6 = 10\pi/3$. ✓ **Ans: $\frac{10\pi}{3}\;\mathrm{cm}$.**

---

**M12.** Evaluate $\sin(135^\circ)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "unit circle" | 48 | $(\cos\theta, \sin\theta)$ on $x^2+y^2=1$ |
| "reference angle" | 54 | Acute angle with $x$-axis; ASTC sign rule |

**Execute:** $135^\circ$ is in QII. Reference angle $= 180^\circ - 135^\circ = 45^\circ$. In QII, sine is positive (ASTC: All, Sin, Tan, Cos). $\sin 135^\circ = +\sin 45^\circ = \sqrt{2}/2$.
**Reflect:** Card 45: $\sin 45^\circ = 1/\sqrt{2} = \sqrt{2}/2$. ✓ **Ans: $\sqrt{2}/2$.**

---

**M13.** Simplify $\sin^2\theta + \cos^2\theta + \tan^2\theta$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Pythagorean identity" | 56 | $\sin^2\theta + \cos^2\theta = 1$, $1 + \tan^2\theta = \sec^2\theta$ |

**Execute:** $\sin^2\theta + \cos^2\theta + \tan^2\theta = 1 + \tan^2\theta = \sec^2\theta$.
**Reflect:** Direct from Card 56. ✓ **Ans: $\sec^2\theta$.**

---

**M14.** Solve $\cos x = 1/2$ for $x \in [0, 2\pi)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "solve $\cos x = k$" | 69 | $x = \pm\arccos(k) + 2\pi n$ |

**Execute:** $\cos x = 1/2$. Reference: $\arccos(1/2) = \pi/3$ (Card 48, 327). Solutions in $[0, 2\pi)$: $x = \pi/3$ and $x = 2\pi - \pi/3 = 5\pi/3$.
**Reflect:** $\cos(\pi/3) = 1/2$, $\cos(5\pi/3) = 1/2$. ✓ **Ans: $x = \pi/3,\;5\pi/3$.**

---

**M15.** Amplitude and period of $y = 3\sin(2x)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "amplitude, period (sine/cosine)" | 71 | $y = A\sin(Bx+C)+D$: amplitude $= |A|$, period $= 2\pi/|B|$ |

**Execute:** $A = 3$, $B = 2$. Amplitude $= 3$. Period $= 2\pi/2 = \pi$.
**Reflect:** $\sin(2x)$ completes a full cycle when $2x$ goes from $0$ to $2\pi$, i.e., $x$ from $0$ to $\pi$. ✓ **Ans: Amplitude $= 3$, period $= \pi$.**

---

## M16–M20: Limits & Continuity

**M16.** $\lim_{x \to 3} (x^2 - 2x + 1)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "limit" / direct substitution | 74 | First try: substitute $x = a$ |

**Execute:** $f(3) = 3^2 - 2(3) + 1 = 9 - 6 + 1 = 4$. Polynomial → continuous everywhere → limit = $f(3)$.
**Reflect:** Card 74: direct substitution works when function is defined and continuous. ✓ **Ans: $4$.**

---

**M17.** $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "indeterminate form 0/0" | 75 | Factor, rationalize, or use L'Hôpital |

**Execute:** Factor: $\frac{(x-2)(x+2)}{x-2} = x+2$ for $x \neq 2$. $\lim_{x \to 2} (x+2) = 4$.
**Reflect:** The function has a removable discontinuity (hole) at $x=2$ (Card 88). Limit exists despite $f(2)$ being undefined. ✓ **Ans: $4$.**

---

**M18.** $\lim_{x \to \infty} \frac{3x^2 + 2x}{x^2 - 5}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "limit at infinity" | 76 | Divide by highest power of $x$ in denominator |
| "end behavior of rational function" | 77 | Equal degrees → ratio of leading coefficients |

**Execute:** $\deg(P) = \deg(Q) = 2$. Card 77: limit $= 3/1 = 3$.
**Reflect:** $\frac{3x^2+2x}{x^2-5} = \frac{3+2/x}{1-5/x^2} \to \frac{3+0}{1-0} = 3$. ✓ **Ans: $3$.**

---

**M19.** $\lim_{x \to 0} \frac{\sin 3x}{x}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$\lim_{x \to 0} \sin x/x$" | 80 | $\lim_{x \to 0} \frac{\sin x}{x} = 1$ |

**Execute:** $\frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x}$. Let $u = 3x$; as $x \to 0$, $u \to 0$. $\lim_{u \to 0} 3 \cdot \frac{\sin u}{u} = 3 \cdot 1 = 3$.
**Reflect:** Card 80 generalizes to $\lim_{x \to 0} \frac{\sin(ax)}{x} = a$. ✓ **Ans: $3$.**

---

**M20.** Is $f(x) = \begin{cases} x^2 & x < 1 \\ 2x-1 & x \ge 1 \end{cases}$ continuous at $x=1$?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "continuous at $x=a$" | 86 | (1) $f(a)$ defined, (2) $\lim f(x)$ exists, (3) $\lim f(x) = f(a)$ |

**Execute:** $f(1) = 2(1)-1 = 1$. Left limit: $\lim_{x \to 1^-} x^2 = 1$. Right limit: $\lim_{x \to 1^+} (2x-1) = 1$. Both equal $f(1) = 1$.
**Reflect:** All three conditions of Card 86 satisfied. ✓ **Ans: Yes, continuous at $x=1$.**

---

## M21–M30: Derivatives

**M21.** $f'(x)$ for $f(x) = 4x^3 - 2x^2 + 5x - 7$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "power rule" | 92 | $\frac{d}{dx}(x^n) = nx^{n-1}$ |
| "constant multiple", "sum/difference" | 93, 94 | $\frac{d}{dx}(cf) = cf'$, $\frac{d}{dx}(f \pm g) = f' \pm g'$ |

**Execute:** $f'(x) = 4(3x^2) - 2(2x) + 5(1) - 0 = 12x^2 - 4x + 5$.
**Reflect:** Derivative of constant is 0. ✓ **Ans: $f'(x) = 12x^2 - 4x + 5$.**

---

**M22.** Derivative of $g(x) = x^2 \sin x$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "product rule" | 95 | $\frac{d}{dx}(fg) = f'g + fg'$ |
| "derivative of $\sin x$" | 98 | $\frac{d}{dx}(\sin x) = \cos x$ |

**Execute:** $f = x^2$, $f' = 2x$. $g = \sin x$, $g' = \cos x$. $g'(x) = 2x\sin x + x^2\cos x$.
**Reflect:** Card 95: "first times derivative of second plus second times derivative of first." ✓ **Ans: $g'(x) = 2x\sin x + x^2\cos x$.**

---

**M23.** Derivative of $h(x) = \frac{e^x}{x}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "quotient rule" | 96 | $\frac{d}{dx}(\frac{f}{g}) = \frac{f'g - fg'}{g^2}$ |
| "derivative of $e^x$" | 103 | $\frac{d}{dx}(e^x) = e^x$ |

**Execute:** $f = e^x$, $f' = e^x$. $g = x$, $g' = 1$. $h'(x) = \frac{e^x \cdot x - e^x \cdot 1}{x^2} = \frac{e^x(x-1)}{x^2}$.
**Reflect:** Card 96: "low d-high minus high d-low over low squared." ✓ **Ans: $h'(x) = \frac{e^x(x-1)}{x^2}$.**

---

**M24.** $\frac{d}{dx}\ln(3x^2 + 1)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "derivative of $\ln x$" | 102 | $\frac{d}{dx}(\ln x) = 1/x$ |
| "chain rule" | 97 | $\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)$ |

**Execute:** $f(u) = \ln u$, $f'(u) = 1/u$. $g(x) = 3x^2+1$, $g'(x) = 6x$. $\frac{d}{dx}\ln(3x^2+1) = \frac{1}{3x^2+1} \cdot 6x = \frac{6x}{3x^2+1}$.
**Reflect:** Card 97: outer derivative evaluated at inner, times inner derivative. ✓ **Ans: $\frac{6x}{3x^2+1}$.**

---

**M25.** Derivative of $y = \tan(2x)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "derivative of $\tan x$" | 100 | $\frac{d}{dx}(\tan x) = \sec^2 x$ |
| "chain rule" | 97 | Multiply by derivative of inner function |

**Execute:** $y' = \sec^2(2x) \cdot 2 = 2\sec^2(2x)$.
**Reflect:** Chain rule: derivative of $\tan u$ is $\sec^2 u \cdot u'$. ✓ **Ans: $y' = 2\sec^2(2x)$.**

---

**M26.** Tangent line to $f(x) = x^3 - x$ at $x = 2$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "tangent line equation" | 120 | $y - f(a) = f'(a)(x-a)$ |

**Execute:** $f(2) = 8 - 2 = 6$. $f'(x) = 3x^2 - 1$, $f'(2) = 12 - 1 = 11$. $y - 6 = 11(x-2)$ → $y = 11x - 16$.
**Reflect:** At $x=2$, slope $= 11$, point $(2,6)$. Verify: $11(2) - 16 = 6$. ✓ **Ans: $y = 11x - 16$.**

---

**M27.** Critical points of $f(x) = x^3 - 3x + 1$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "critical point" | 111 | $f'(x) = 0$ or $f'(x)$ DNE |

**Execute:** $f'(x) = 3x^2 - 3 = 3(x^2-1) = 3(x-1)(x+1)$. $f'(x) = 0$ → $x = \pm 1$. Polynomial → $f'$ always exists. Critical points: $x = -1, 1$.
**Reflect:** $f''(x) = 6x$, $f''(-1) = -6 < 0$ (local max), $f''(1) = 6 > 0$ (local min). ✓ **Ans: $x = -1,\;1$.**

---

**M28.** Where is $f(x) = x^3 - 3x$ increasing?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "increasing" | 285 | $f'(x) > 0$ |

**Execute:** $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$. Sign chart: $f'(x) > 0$ when $x < -1$ or $x > 1$.
**Reflect:** $f'(-2) = 9 > 0$, $f'(0) = -3 < 0$, $f'(2) = 9 > 0$. ✓ **Ans: Increasing on $(-\infty, -1) \cup (1, \infty)$.**

---

**M29.** Second derivative of $f(x) = \cos(3x)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "derivative of $\cos x$" | 99 | $\frac{d}{dx}(\cos x) = -\sin x$ |
| "chain rule" | 97 | Multiply by derivative of inner |
| "higher-order derivative" | 110 | Differentiate repeatedly |

**Execute:** $f'(x) = -\sin(3x) \cdot 3 = -3\sin(3x)$. $f''(x) = -3\cos(3x) \cdot 3 = -9\cos(3x)$.
**Reflect:** Each derivative brings out a factor of $3$ and flips sin↔cos with sign changes. ✓ **Ans: $f''(x) = -9\cos(3x)$.**

---

**M30.** Use limit definition for $f'(x)$ where $f(x) = x^2$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "limit definition of derivative" | 91 | $f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$ |

**Execute:** $f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} \frac{x^2+2xh+h^2-x^2}{h} = \lim_{h \to 0} \frac{2xh+h^2}{h} = \lim_{h \to 0} (2x+h) = 2x$.
**Reflect:** Matches power rule (Card 92): $\frac{d}{dx}(x^2) = 2x$. ✓ **Ans: $f'(x) = 2x$.**

---

## M31–M38: Integrals

**M31.** $\int (3x^2 + 2x - 1)\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "power rule for integration" | 125 | $\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ |
| "sum/difference rule" | — | Integral of sum = sum of integrals |

**Execute:** $\int 3x^2\,dx = 3 \cdot \frac{x^3}{3} = x^3$. $\int 2x\,dx = 2 \cdot \frac{x^2}{2} = x^2$. $\int (-1)\,dx = -x$. Answer: $x^3 + x^2 - x + C$.
**Reflect:** Differentiate: $\frac{d}{dx}(x^3+x^2-x+C) = 3x^2+2x-1$. ✓ **Ans: $x^3 + x^2 - x + C$.**

---

**M32.** $\int \sin x\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "integral of $\sin x$" | 129 | $\int \sin x\,dx = -\cos x + C$ |

**Execute:** Direct from Card 129.
**Reflect:** $\frac{d}{dx}(-\cos x + C) = \sin x$. ✓ **Ans: $-\cos x + C$.**

---

**M33.** $\int_0^2 (x^2 + 1)\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "FTC Part 2" | 148 | $\int_a^b f(x)dx = F(b) - F(a)$ |

**Execute:** $F(x) = \frac{x^3}{3} + x$. $F(2) = \frac{8}{3} + 2 = \frac{14}{3}$. $F(0) = 0$. $F(2) - F(0) = \frac{14}{3}$.
**Reflect:** Integrand positive on $[0,2]$, integral positive. ✓ **Ans: $\frac{14}{3}$.**

---

**M34.** Area under $f(x) = 2x$ from $x=0$ to $x=3$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "area under curve" | 148, 152 | $\int_a^b f(x)\,dx$ |
| "FTC Part 2" | 148 | $F(b) - F(a)$ |

**Execute:** $\int_0^3 2x\,dx = [x^2]_0^3 = 9 - 0 = 9$. Alternatively: triangle area $= \frac{1}{2} \times 3 \times 6 = 9$.
**Reflect:** Geometry confirms: right triangle base 3, height 6. ✓ **Ans: $9$ square units.**

---

**M35.** $\int 2x\sqrt{x^2+1}\,dx$ (use $u$-substitution).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$u$-substitution" | 140 | $\int f(g(x))g'(x)dx = \int f(u)du$ |

**Execute:** Let $u = x^2+1$, $du = 2x\,dx$. $\int \sqrt{u}\,du = \int u^{1/2}\,du = \frac{u^{3/2}}{3/2} + C = \frac{2}{3}(x^2+1)^{3/2} + C$.
**Reflect:** Differentiate: $\frac{d}{dx}[\frac{2}{3}(x^2+1)^{3/2}] = (x^2+1)^{1/2} \cdot 2x$. ✓ **Ans: $\frac{2}{3}(x^2+1)^{3/2} + C$.**

---

**M36.** If $F(x) = \int_2^x \cos(t^2)\,dt$, find $F'(x)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "FTC Part 1" | 147 | $\frac{d}{dx}\int_a^x f(t)dt = f(x)$ |

**Execute:** $F'(x) = \cos(x^2)$.
**Reflect:** Direct application of Card 147. No need to evaluate the integral. ✓ **Ans: $F'(x) = \cos(x^2)$.**

---

**M37.** Average value of $f(x) = x^2$ on $[0, 2]$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "average value of a function" | 151 | $f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)dx$ |

**Execute:** $f_{\text{avg}} = \frac{1}{2-0}\int_0^2 x^2\,dx = \frac{1}{2}[\frac{x^3}{3}]_0^2 = \frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}$.
**Reflect:** $f(0)=0$, $f(2)=4$, average $\frac{4}{3}$ is between them. ✓ **Ans: $\frac{4}{3}$.**

---

**M38.** $\int_0^1 e^x\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "integral of $e^x$" | 127 | $\int e^x\,dx = e^x + C$ |
| "FTC Part 2" | 148 | $F(1) - F(0)$ |

**Execute:** $[e^x]_0^1 = e^1 - e^0 = e - 1$.
**Reflect:** $e - 1 \approx 1.718$, positive integrand → positive integral. ✓ **Ans: $e - 1$.**

---

## M39–M42: Sequences & Series

**M39.** Does $a_n = \frac{n}{n+1}$ converge?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "limit of a sequence" | 161 | $\lim_{n\to\infty} a_n$ |

**Execute:** $\lim_{n\to\infty} \frac{n}{n+1} = \lim_{n\to\infty} \frac{1}{1+1/n} = 1$. Sequence converges to $1$.
**Reflect:** Terms approach 1 from below: $a_1 = 0.5$, $a_{10} \approx 0.909$, $a_{100} \approx 0.990$. ✓ **Ans: Converges to $1$.**

---

**M40.** Sum of $\sum_{n=0}^{\infty} \frac{2}{3^n}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "geometric series" | 164 | $\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r}$ for $|r| < 1$ |

**Execute:** $a = 2$, $r = 1/3$. $|r| < 1$ → converges. Sum $= \frac{2}{1-1/3} = \frac{2}{2/3} = 3$.
**Reflect:** First few terms: $2 + 2/3 + 2/9 + \cdots$. Partial sum $S_2 = 2.667$, $S_5 \approx 2.996$, approaching 3. ✓ **Ans: $3$.**

---

**M41.** Does $\sum_{n=1}^{\infty} \frac{1}{n^2}$ converge?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$p$-series" | 165 | $\sum 1/n^p$ converges iff $p > 1$ |

**Execute:** $p = 2 > 1$ → converges. Actually converges to $\pi^2/6$.
**Reflect:** Card 165: the boundary is $p=1$ (harmonic series, diverges). ✓ **Ans: Converges. Sum $= \pi^2/6$.**

---

**M42.** $n$th term test for $\sum_{n=1}^{\infty} \frac{n}{2n+1}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$n$th term test for divergence" | 167 | If $\lim a_n \neq 0$, series diverges |

**Execute:** $\lim_{n\to\infty} \frac{n}{2n+1} = \frac{1}{2} \neq 0$. Series diverges.
**Reflect:** Card 167: terms must approach 0 for any chance of convergence. Here they approach $1/2$. ✓ **Ans: Diverges by $n$th term test.**

---

## M43–M46: Vectors & Parametric

**M43.** Magnitude of $\vec{v} = \langle 3, 4 \rangle$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "vector magnitude" | 189 | $|\vec{v}| = \sqrt{v_x^2 + v_y^2}$ |

**Execute:** $|\vec{v}| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
**Reflect:** 3-4-5 right triangle. ✓ **Ans: $5$.**

---

**M44.** Dot product of $\vec{a} = \langle 2, -1, 3 \rangle$, $\vec{b} = \langle 0, 4, -2 \rangle$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dot product" | 191 | $\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z$ |

**Execute:** $\vec{a} \cdot \vec{b} = 2(0) + (-1)(4) + 3(-2) = 0 - 4 - 6 = -10$.
**Reflect:** Negative dot product → angle > 90°. ✓ **Ans: $-10$.**

---

**M45.** Are $\vec{u} = \langle 1, 2 \rangle$ and $\vec{v} = \langle -4, 2 \rangle$ perpendicular?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "dot product" / "perpendicular" | 191, 294 | $\vec{a} \cdot \vec{b} = 0 \iff$ perpendicular |

**Execute:** $\vec{u} \cdot \vec{v} = 1(-4) + 2(2) = -4 + 4 = 0$. Yes, perpendicular.
**Reflect:** Slopes: $\vec{u}$ has slope $2/1 = 2$, $\vec{v}$ has slope $2/(-4) = -1/2$. Product $= -1$ → perpendicular. ✓ **Ans: Yes.**

---

**M46.** For $x = t^2$, $y = 2t$, find $dy/dx$ at $t = 1$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "slope of parametric curve" | 202 | $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ |

**Execute:** $dx/dt = 2t$, $dy/dt = 2$. $\frac{dy}{dx} = \frac{2}{2t} = \frac{1}{t}$. At $t=1$: $dy/dx = 1$.
**Reflect:** At $t=1$, point is $(1,2)$. Eliminating $t$: $x = (y/2)^2$, $y = 2\sqrt{x}$, $dy/dx = 1/\sqrt{x}$. At $x=1$: slope $= 1$. ✓ **Ans: $1$.**

---

## M47–M50: Probability & Statistics

**M47.** How many ways to arrange 5 books?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "permutations" | 221 | $P(n,r) = n!/(n-r)!$; here $r=n=5$, so $5!$ |

**Execute:** $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$.
**Reflect:** First position: 5 choices, second: 4, third: 3, fourth: 2, fifth: 1. ✓ **Ans: $120$.**

---

**M48.** Choose committee of 3 from 10 people.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "combinations" | 222 | $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ |

**Execute:** $\binom{10}{3} = \frac{10!}{3!7!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$.
**Reflect:** Order doesn't matter for a committee (Card 222). ✓ **Ans: $120$.**

---

**M49.** Probability of rolling an even number on a fair die.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "probability of event" | 224 | $P(A) = \frac{\text{favorable}}{\text{total}}$ |

**Execute:** Favorable: $\{2,4,6\}$ (3 outcomes). Total: 6. $P(\text{even}) = 3/6 = 1/2$.
**Reflect:** $0 \le P \le 1$ (type check). ✓ **Ans: $1/2$.**

---

**M50.** Expected value of $X$: $P(X=1)=0.3$, $P(X=2)=0.5$, $P(X=3)=0.2$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "expected value" | 232 | $E(X) = \sum x_i P(x_i)$ |

**Execute:** $E(X) = 1(0.3) + 2(0.5) + 3(0.2) = 0.3 + 1.0 + 0.6 = 1.9$.
**Reflect:** Weighted average; probabilities sum to 1. ✓ **Ans: $1.9$.**

---

# INTERMEDIATE ANSWERS (M51–M100)

## M51–M56: Integration Techniques

**M51.** $\int x\cos x\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "integration by parts" | 141 | $\int u\,dv = uv - \int v\,du$ |
| "LIATE rule" | 141 | $u = x$ (Algebraic before Trigonometric) |

**Execute:** $u = x$, $du = dx$. $dv = \cos x\,dx$, $v = \sin x$ (Card 130). $\int x\cos x\,dx = x\sin x - \int \sin x\,dx = x\sin x + \cos x + C$.
**Reflect:** Differentiate: $\frac{d}{dx}(x\sin x + \cos x) = \sin x + x\cos x - \sin x = x\cos x$. ✓ **Ans: $x\sin x + \cos x + C$.**

---

**M52.** $\int \frac{1}{x^2\sqrt{4-x^2}}\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "trigonometric substitution" / $\sqrt{a^2-x^2}$ | 142 | $x = a\sin\theta$, here $a=2$ |

**Execute:** $x = 2\sin\theta$, $dx = 2\cos\theta\,d\theta$. $\sqrt{4-x^2} = 2\cos\theta$. $\int \frac{2\cos\theta}{4\sin^2\theta \cdot 2\cos\theta}\,d\theta = \int \frac{1}{4\sin^2\theta}\,d\theta = \frac{1}{4}\int \csc^2\theta\,d\theta = -\frac{1}{4}\cot\theta + C$ (Card 134). $\cot\theta = \frac{\cos\theta}{\sin\theta} = \frac{\sqrt{4-x^2}/2}{x/2} = \frac{\sqrt{4-x^2}}{x}$. Answer: $-\frac{\sqrt{4-x^2}}{4x} + C$.
**Reflect:** Differentiate to verify. Domain: $|x| < 2$, $x \neq 0$. ✓ **Ans: $-\frac{\sqrt{4-x^2}}{4x} + C$.**

---

**M53.** $\int \frac{3x+5}{x^2-3x+2}\,dx$ (partial fractions).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "partial fractions" | 143 | Decompose rational function |

**Execute:** Factor denominator: $x^2-3x+2 = (x-1)(x-2)$. $\frac{3x+5}{(x-1)(x-2)} = \frac{A}{x-1} + \frac{B}{x-2}$. $3x+5 = A(x-2) + B(x-1)$. $x=1$: $8 = A(-1)$ → $A = -8$. $x=2$: $11 = B(1)$ → $B = 11$. $\int \left(\frac{-8}{x-1} + \frac{11}{x-2}\right)dx = -8\ln|x-1| + 11\ln|x-2| + C$.
**Reflect:** Differentiate to verify. ✓ **Ans: $-8\ln|x-1| + 11\ln|x-2| + C$.**

---

**M54.** $\int \sin^3 x\cos^2 x\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "trig integrals (strategy)" | 145 | Odd power of sine → $u = \cos x$ |

**Execute:** $\sin^3 x = \sin x \cdot \sin^2 x = \sin x(1-\cos^2 x)$. Let $u = \cos x$, $du = -\sin x\,dx$. $\int \sin x(1-u^2)u^2 (-\frac{du}{\sin x}) = -\int (u^2 - u^4)du = -\frac{u^3}{3} + \frac{u^5}{5} + C = -\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C$.
**Reflect:** Card 145: $m=3$ (odd) → $u = \cos x$. ✓ **Ans: $-\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C$.**

---

**M55.** $\int \ln(2x)\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "integral of $\ln x$" | 139 | $\int \ln x\,dx = x\ln x - x + C$ |
| "logarithm properties" | 19 | $\ln(2x) = \ln 2 + \ln x$ |

**Execute:** $\int \ln(2x)dx = \int (\ln 2 + \ln x)dx = x\ln 2 + (x\ln x - x) + C = x\ln(2x) - x + C$.
**Reflect:** Differentiate: $\frac{d}{dx}[x\ln(2x)-x] = \ln(2x) + x \cdot \frac{2}{2x} - 1 = \ln(2x) + 1 - 1 = \ln(2x)$. ✓ **Ans: $x\ln(2x) - x + C$.**

---

**M56.** $\int_1^e \frac{\ln x}{x}\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$u$-substitution" | 140 | $u = \ln x$, $du = \frac{1}{x}dx$ |

**Execute:** $u = \ln x$, $du = dx/x$. When $x=1$: $u=0$. When $x=e$: $u=1$. $\int_0^1 u\,du = [\frac{u^2}{2}]_0^1 = \frac{1}{2}$.
**Reflect:** Card 140: definite integral → change limits. ✓ **Ans: $\frac{1}{2}$.**

---

## M57–M62: Series Convergence Tests

**M57.** $\sum_{n=1}^{\infty} \frac{n^2}{2^n}$ (ratio test).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "ratio test" | 172 | $\lim |a_{n+1}/a_n| = L$ |

**Execute:** $a_n = n^2/2^n$. $\frac{a_{n+1}}{a_n} = \frac{(n+1)^2}{2^{n+1}} \cdot \frac{2^n}{n^2} = \frac{(n+1)^2}{2n^2}$. $L = \lim_{n\to\infty} \frac{(n+1)^2}{2n^2} = \frac{1}{2} < 1$. Converges.
**Reflect:** Exponential denominator dominates polynomial numerator. ✓ **Ans: Converges by ratio test ($L = 1/2$).**

---

**M58.** $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n^3+1}}$ (limit comparison).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "limit comparison test" | 170 | Compare with known $p$-series |

**Execute:** Compare with $b_n = 1/n^{3/2}$. $\lim_{n\to\infty} \frac{a_n}{b_n} = \lim_{n\to\infty} \frac{n^{3/2}}{\sqrt{n^3+1}} = \lim_{n\to\infty} \frac{1}{\sqrt{1+1/n^3}} = 1$. Since $0 < 1 < \infty$, both converge or both diverge. $\sum 1/n^{3/2}$ is a $p$-series with $p=3/2 > 1$ → converges.
**Reflect:** Card 170: $c=1 \in (0,\infty)$ → same behavior. ✓ **Ans: Converges.**

---

**M59.** $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "alternating series test" | 171 | $b_n = 1/n$: decreasing, $\lim b_n = 0$ |

**Execute:** $b_n = 1/n > 0$, $b_{n+1} \le b_n$, $\lim b_n = 0$. All three conditions satisfied → converges. (This is the alternating harmonic series; converges to $\ln 2$.)
**Reflect:** Card 171: does NOT converge absolutely (harmonic series diverges). Conditionally convergent (Card 175). ✓ **Ans: Converges (conditionally).**

---

**M60.** $\sum_{n=2}^{\infty} \frac{1}{n\ln n}$ (integral test).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "integral test" | 168 | $\sum f(n)$ converges iff $\int f(x)dx$ converges |

**Execute:** $f(x) = \frac{1}{x\ln x}$, positive and decreasing for $x \ge 2$. $\int_2^\infty \frac{dx}{x\ln x} = \lim_{b\to\infty} [\ln(\ln x)]_2^b = \lim_{b\to\infty} (\ln(\ln b) - \ln(\ln 2)) = \infty$. Integral diverges → series diverges.
**Reflect:** This is the classic example where terms → 0 but series diverges (even slower than harmonic). ✓ **Ans: Diverges by integral test.**

---

**M61.** $\sum_{n=1}^{\infty} \frac{n^n}{n!}$ (root test).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "root test" | 173 | $\lim \sqrt[n]{|a_n|} = L$ |

**Execute:** $\sqrt[n]{a_n} = \sqrt[n]{n^n/n!} = n / \sqrt[n]{n!}$. Using Stirling: $\sqrt[n]{n!} \sim n/e$. So $\sqrt[n]{a_n} \sim n/(n/e) = e$. $L = e > 1$ → diverges.
**Reflect:** Ratio test also works: $\frac{a_{n+1}}{a_n} = \frac{(n+1)^{n+1}}{(n+1)!} \cdot \frac{n!}{n^n} = (\frac{n+1}{n})^n = (1+1/n)^n \to e > 1$. ✓ **Ans: Diverges by root test ($L = e$).**

---

**M62.** Classify $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{\sqrt{n}}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "absolute convergence" | 174 | $\sum |a_n|$ converges? |
| "conditional convergence" | 175 | Converges but not absolutely |

**Execute:** Alternating series test: $b_n = 1/\sqrt{n}$ decreasing, $\lim b_n = 0$ → converges. Absolute: $\sum 1/\sqrt{n}$ is $p$-series with $p=1/2 \le 1$ → diverges. Conditionally convergent.
**Reflect:** Card 175: alternating $p$-series with $0 < p \le 1$ are conditionally convergent. ✓ **Ans: Conditionally convergent.**

---

## M63–M68: Parametric & Polar Calculus

**M63.** Arc length of $x = t^3$, $y = 3t^2$ from $t=0$ to $t=1$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "arc length of parametric curve" | 205 | $L = \int_a^b \sqrt{(dx/dt)^2 + (dy/dt)^2}\,dt$ |

**Execute:** $dx/dt = 3t^2$, $dy/dt = 6t$. $L = \int_0^1 \sqrt{9t^4 + 36t^2}\,dt = \int_0^1 3t\sqrt{t^2+4}\,dt$. Let $u = t^2+4$, $du = 2t\,dt$. When $t=0$: $u=4$. When $t=1$: $u=5$. $L = \frac{3}{2}\int_4^5 \sqrt{u}\,du = \frac{3}{2} \cdot \frac{2}{3}[u^{3/2}]_4^5 = 5^{3/2} - 4^{3/2} = 5\sqrt{5} - 8$.
**Reflect:** $L > 0$, length dimension check passes. ✓ **Ans: $5\sqrt{5} - 8$.**

---

**M64.** Area enclosed by $r = 4\cos\theta$ from $\theta = -\pi/2$ to $\pi/2$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "polar curve area" | 208 | $A = \frac{1}{2}\int_{\alpha}^{\beta} r^2\,d\theta$ |

**Execute:** This is a circle of radius 2 (diameter along $x$-axis). $A = \frac{1}{2}\int_{-\pi/2}^{\pi/2} 16\cos^2\theta\,d\theta = 8\int_{-\pi/2}^{\pi/2} \cos^2\theta\,d\theta = 8\int_{-\pi/2}^{\pi/2} \frac{1+\cos 2\theta}{2}\,d\theta = 4[\theta + \frac{1}{2}\sin 2\theta]_{-\pi/2}^{\pi/2} = 4(\pi/2 - (-\pi/2)) = 4\pi$.
**Reflect:** Circle radius 2 → area $= \pi(2)^2 = 4\pi$. ✓ **Ans: $4\pi$.**

---

**M65.** For $x = \cos t$, $y = \sin(2t)$, find $d^2y/dx^2$ at $t = \pi/6$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "second derivative (parametric)" | 203 | $\frac{d^2y}{dx^2} = \frac{d}{dt}(dy/dx) / (dx/dt)$ |

**Execute:** $dx/dt = -\sin t$, $dy/dt = 2\cos(2t)$. $\frac{dy}{dx} = \frac{2\cos(2t)}{-\sin t}$. At $t=\pi/6$: $\frac{dy}{dx} = \frac{2\cos(\pi/3)}{-\sin(\pi/6)} = \frac{2(1/2)}{-1/2} = -2$. $\frac{d}{dt}(dy/dx) = \frac{d}{dt}(-2\cos(2t)\csc t)$. Using quotient rule: $= \frac{(-\sin t)(-4\sin(2t)) - (2\cos(2t))(-\cos t)}{\sin^2 t} = \frac{4\sin t\sin(2t) + 2\cos(2t)\cos t}{\sin^2 t}$. At $t=\pi/6$: $4(1/2)(\sqrt{3}/2) + 2(1/2)(\sqrt{3}/2) = \sqrt{3} + \sqrt{3}/2 = 3\sqrt{3}/2$ over $(1/2)^2 = 1/4$. So $\frac{d}{dt}(dy/dx) = 6\sqrt{3}$. $\frac{d^2y}{dx^2} = \frac{6\sqrt{3}}{-\sin(\pi/6)} = \frac{6\sqrt{3}}{-1/2} = -12\sqrt{3}$.
**Reflect:** Sign check: at $t=\pi/6$, curve is concave down. ✓ **Ans: $-12\sqrt{3}$.**

---

**M66.** Tangent line to $r = 2+2\cos\theta$ at $\theta = \pi/3$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "slope of polar curve" | 210 | $\frac{dy}{dx} = \frac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$ |
| "tangent line" | 120 | $y - y_0 = m(x - x_0)$ |

**Execute:** $r = 2+2\cos\theta$, $r' = -2\sin\theta$. At $\theta=\pi/3$: $r = 2+2(1/2) = 3$, $r' = -2(\sqrt{3}/2) = -\sqrt{3}$. $\frac{dy}{dx} = \frac{(-\sqrt{3})(\sqrt{3}/2) + 3(1/2)}{(-\sqrt{3})(1/2) - 3(\sqrt{3}/2)} = \frac{-3/2 + 3/2}{-\sqrt{3}/2 - 3\sqrt{3}/2} = \frac{0}{-2\sqrt{3}} = 0$. Horizontal tangent. Point: $x = r\cos\theta = 3(1/2)=1.5$, $y = r\sin\theta = 3(\sqrt{3}/2) = \frac{3\sqrt{3}}{2}$. Tangent: $y = \frac{3\sqrt{3}}{2}$.
**Reflect:** Card 283: horizontal tangent → $dy/dx = 0$. ✓ **Ans: $y = \frac{3\sqrt{3}}{2}$.**

---

**M67.** Arc length of $r = e^\theta$ from $\theta=0$ to $2\pi$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "arc length in polar" | 209 | $L = \int_{\alpha}^{\beta} \sqrt{r^2 + (dr/d\theta)^2}\,d\theta$ |

**Execute:** $r = e^\theta$, $dr/d\theta = e^\theta$. $L = \int_0^{2\pi} \sqrt{e^{2\theta} + e^{2\theta}}\,d\theta = \int_0^{2\pi} e^\theta\sqrt{2}\,d\theta = \sqrt{2}[e^\theta]_0^{2\pi} = \sqrt{2}(e^{2\pi} - 1)$.
**Reflect:** Logarithmic spiral — length grows exponentially. ✓ **Ans: $\sqrt{2}(e^{2\pi} - 1)$.**

---

**M68.** Identify conic $r = \frac{6}{2+\cos\theta}$, find eccentricity.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "polar conics" | 211 | $r = \frac{ed}{1 \pm e\cos\theta}$ |

**Execute:** Rewrite: $r = \frac{6}{2+\cos\theta} = \frac{3}{1 + \frac{1}{2}\cos\theta}$. Match to Card 211: $ed = 3$, $e = 1/2$. Since $0 < e < 1$, this is an ellipse.
**Reflect:** $e = 1/2$ → ellipse. Directrix at $x = d = ed/e = 3/(1/2) = 6$. ✓ **Ans: Ellipse, $e = 1/2$.**

---

## M69–M75: Related Rates & Optimization

**M69.** Ladder: $L=5\;\mathrm{m}$, bottom slides out at $0.6\;\mathrm{m/s}$, bottom is $3\;\mathrm{m}$ from wall. Find speed of top.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Pythagorean theorem" | 43 | $x^2 + y^2 = 25$ |
| "related rates" | 108 | Differentiate w.r.t. $t$ |

**Execute:** $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$. $x = 3$, $\frac{dx}{dt} = 0.6$. $y = \sqrt{25-9} = 4$. $2(3)(0.6) + 2(4)\frac{dy}{dt} = 0$ → $3.6 + 8\frac{dy}{dt} = 0$ → $\frac{dy}{dt} = -0.45\;\mathrm{m/s}$.
**Reflect:** Negative sign = top sliding down. ✓ **Ans: $-0.45\;\mathrm{m/s}$ (downward).**

---

**M70.** Conical tank: $H=4$, $R=2$, water in at $2\;\mathrm{m^3/min}$. Rate of water level rise when $h=1\;\mathrm{m}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "related rates" / "rate of change" | 108, 290 | $dV/dt$ given, find $dh/dt$ |

**Execute:** $V = \frac{1}{3}\pi r^2 h$. Similar triangles: $r/h = R/H = 2/4 = 1/2$, so $r = h/2$. $V = \frac{1}{3}\pi (h/2)^2 h = \frac{\pi}{12}h^3$. $\frac{dV}{dt} = \frac{\pi}{4}h^2\frac{dh}{dt}$. At $h=1$: $2 = \frac{\pi}{4}(1)^2\frac{dh}{dt}$ → $\frac{dh}{dt} = \frac{8}{\pi}\;\mathrm{m/min}$.
**Reflect:** Rate positive (water level rising). $8/\pi \approx 2.55\;\mathrm{m/min}$. ✓ **Ans: $\frac{8}{\pi}\;\mathrm{m/min}$.**

---

**M71.** Point on $y = x^2$ closest to $(0,3)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "optimization" | 117 | Minimize distance squared |
| "quadratic equation" | 1 | Solve for critical point |

**Execute:** Distance squared: $D(x) = (x-0)^2 + (x^2-3)^2 = x^2 + (x^2-3)^2$. $D'(x) = 2x + 2(x^2-3)(2x) = 2x + 4x(x^2-3) = 2x(1 + 2x^2 - 6) = 2x(2x^2 - 5)$. $D'(x) = 0$ → $x = 0$ or $x = \pm\sqrt{5/2}$. $D''(x) = 2(2x^2-5) + 2x(4x) = 4x^2-10+8x^2 = 12x^2-10$. At $x=0$: $D'' = -10 < 0$ (local max). At $x=\pm\sqrt{5/2}$: $D'' = 12(5/2)-10 = 20 > 0$ (min). Points: $(\pm\sqrt{5/2}, 5/2)$.
**Reflect:** By symmetry, two closest points equidistant from $(0,3)$. ✓ **Ans: $(\pm\sqrt{5/2}, 5/2)$.**

---

**M72.** Box, square base, open top, volume $32\;\mathrm{m^3}$. Minimize surface area.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "optimization" | 117 | Express SA in one variable, minimize |

**Execute:** Side of base $= x$, height $= h$. $V = x^2h = 32$ → $h = 32/x^2$. $SA = x^2 + 4xh = x^2 + 4x(32/x^2) = x^2 + 128/x$. $SA' = 2x - 128/x^2 = 0$ → $2x^3 = 128$ → $x^3 = 64$ → $x = 4$. $h = 32/16 = 2$. $SA'' = 2 + 256/x^3 > 0$ → min.
**Reflect:** Dimensions $4 \times 4 \times 2$. $SA = 16 + 32 = 48\;\mathrm{m^2}$. ✓ **Ans: Base $4\;\mathrm{m} \times 4\;\mathrm{m}$, height $2\;\mathrm{m}$.**

---

**M73.** Cylindrical can, $V = 1000\;\mathrm{cm^3}$. Minimize surface area.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "optimization" / "critical point" | 117, 111 | $SA = 2\pi r^2 + 2\pi rh$, $V = \pi r^2 h$ |

**Execute:** $h = 1000/(\pi r^2)$. $SA = 2\pi r^2 + 2\pi r \cdot 1000/(\pi r^2) = 2\pi r^2 + 2000/r$. $SA' = 4\pi r - 2000/r^2 = 0$ → $4\pi r^3 = 2000$ → $r^3 = 500/\pi$ → $r = \sqrt[3]{500/\pi}$. $h = 1000/(\pi r^2) = 1000/(\pi (500/\pi)^{2/3}) = 2 \cdot \sqrt[3]{500/\pi} = 2r$.
**Reflect:** Minimum surface area when height equals diameter ($h = 2r$). ✓ **Ans: $r = \sqrt[3]{500/\pi}\;\mathrm{cm}$, $h = 2r$.**

---

**M74.** Largest rectangle inscribed in semicircle radius $r$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Pythagorean theorem" | 43 | $x^2 + y^2 = r^2$ (point on circle) |
| "optimization" | 117 | Maximize area |

**Execute:** Rectangle: width $= 2x$, height $= y$, where $x^2+y^2=r^2$, $x,y>0$. $A = 2x\sqrt{r^2-x^2}$. $A' = 2\sqrt{r^2-x^2} + 2x \cdot \frac{-x}{\sqrt{r^2-x^2}} = 2\frac{r^2-x^2-x^2}{\sqrt{r^2-x^2}} = 2\frac{r^2-2x^2}{\sqrt{r^2-x^2}} = 0$ → $x = r/\sqrt{2}$. $y = \sqrt{r^2 - r^2/2} = r/\sqrt{2}$. Dimensions: width $= 2r/\sqrt{2} = r\sqrt{2}$, height $= r/\sqrt{2}$.
**Reflect:** Square-ish but wider than tall (width = 2× height). ✓ **Ans: Width $= r\sqrt{2}$, height $= r/\sqrt{2}$.**

---

**M75.** Car A north at $60$, Car B east at $80$. Distance rate after $2\;\mathrm{h}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "related rates" | 108 | $s^2 = x^2 + y^2$ |
| "Pythagorean theorem" | 43 | Right triangle |

**Execute:** At $t=2$: $y = 120$, $x = 160$. $s = \sqrt{120^2+160^2} = \sqrt{14400+25600} = \sqrt{40000} = 200$. $2s\frac{ds}{dt} = 2x\frac{dx}{dt} + 2y\frac{dy}{dt}$. $200\frac{ds}{dt} = 160(80) + 120(60) = 12800 + 7200 = 20000$. $\frac{ds}{dt} = 100\;\mathrm{km/h}$.
**Reflect:** 3-4-5 triangle ($120,160,200$). Rate positive (distance increasing). ✓ **Ans: $100\;\mathrm{km/h}$.**

---

## M76–M80: Implicit Differentiation & DE

**M76.** Find $dy/dx$ for $x^2 + y^2 = 25$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "implicit differentiation" | 107 | Differentiate both sides w.r.t. $x$ |

**Execute:** $2x + 2y\frac{dy}{dx} = 0$ → $\frac{dy}{dx} = -\frac{x}{y}$.
**Reflect:** Explicit: $y = \pm\sqrt{25-x^2}$, $dy/dx = \mp x/\sqrt{25-x^2} = -x/y$. ✓ **Ans: $\frac{dy}{dx} = -\frac{x}{y}$.**

---

**M77.** Slope of tangent to $x^3 + y^3 = 6xy$ at $(3,3)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "implicit differentiation" | 107 | Product rule on $6xy$ |

**Execute:** $3x^2 + 3y^2\frac{dy}{dx} = 6y + 6x\frac{dy}{dx}$. $3y^2\frac{dy}{dx} - 6x\frac{dy}{dx} = 6y - 3x^2$. $\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2$. At $(3,3)$: $\frac{dy}{dx}(27-18) = 18-27$ → $9\frac{dy}{dx} = -9$ → $\frac{dy}{dx} = -1$.
**Reflect:** Folium of Descartes. Slope $-1$ at $(3,3)$. ✓ **Ans: $-1$.**

---

**M78.** Solve $\frac{dy}{dx} = \frac{y}{x}$, $y(1) = 3$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "separable DE" | 212 | $\int \frac{1}{y}dy = \int \frac{1}{x}dx$ |

**Execute:** $\ln|y| = \ln|x| + C$ → $y = kx$. $y(1) = 3$ → $k = 3$. $y = 3x$.
**Reflect:** Card 214 with $k=1$: exponential form also works. ✓ **Ans: $y = 3x$.**

---

**M79.** Solve $\frac{dy}{dx} + 2y = e^x$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "first-order linear DE" | 213 | Integrating factor $\mu = e^{\int 2dx} = e^{2x}$ |

**Execute:** Multiply: $e^{2x}\frac{dy}{dx} + 2e^{2x}y = e^{3x}$. $\frac{d}{dx}(e^{2x}y) = e^{3x}$. $e^{2x}y = \frac{1}{3}e^{3x} + C$. $y = \frac{1}{3}e^x + Ce^{-2x}$.
**Reflect:** General solution: homogeneous $y_h = Ce^{-2x}$ + particular $y_p = \frac{1}{3}e^x$. ✓ **Ans: $y = \frac{1}{3}e^x + Ce^{-2x}$.**

---

**M80.** Population: $P(0)=500$, $P(2)=800$. Find $P(5)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "exponential growth/decay" | 23 | $P = P_0 e^{kt}$ |

**Execute:** $P(t) = 500e^{kt}$. $800 = 500e^{2k}$ → $e^{2k} = 1.6$ → $2k = \ln 1.6$ → $k = \frac{1}{2}\ln 1.6$. $P(5) = 500e^{5k} = 500e^{\frac{5}{2}\ln 1.6} = 500(1.6)^{5/2} = 500 \times 1.6^{2.5} \approx 500 \times 3.26 \approx 1630$.
**Reflect:** Exact: $P(5) = 500(1.6)^{5/2} = 500 \times 1.6^2 \times \sqrt{1.6} = 500 \times 2.56 \times 1.265 = 1619$. ✓ **Ans: $P(5) \approx 1620$ (or exactly $500(1.6)^{5/2}$).**

---

## M81–M86: Complex Numbers & Matrices

**M81.** Express $z = 1+i$ in polar form.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "modulus" | 246 | $|z| = \sqrt{1^2+1^2} = \sqrt{2}$ |
| "argument" / "polar form" | 247, 248 | $\theta = \arctan(1/1) = \pi/4$ |

**Execute:** $z = \sqrt{2}(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}) = \sqrt{2}e^{i\pi/4}$.
**Reflect:** Card 249: Euler's form $re^{i\theta}$. ✓ **Ans: $\sqrt{2}e^{i\pi/4}$.**

---

**M82.** $(1+i)^6$ using De Moivre.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "De Moivre's Theorem" | 250 | $(re^{i\theta})^n = r^n e^{in\theta}$ |

**Execute:** $z = \sqrt{2}e^{i\pi/4}$. $z^6 = (\sqrt{2})^6 e^{i6\pi/4} = 8e^{i3\pi/2} = 8(\cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2}) = 8(0 - i) = -8i$.
**Reflect:** $(1+i)^2 = 2i$, $(1+i)^4 = (2i)^2 = -4$, $(1+i)^6 = (1+i)^4(1+i)^2 = -4 \cdot 2i = -8i$. ✓ **Ans: $-8i$.**

---

**M83.** Cube roots of $8$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$n$th roots of a complex number" | 251 | $z_k = r^{1/n}[\cos(\frac{\theta+2k\pi}{n}) + i\sin(\frac{\theta+2k\pi}{n})]$ |

**Execute:** $8 = 8e^{i0}$. $r^{1/3} = 2$. Roots at angles $0$, $2\pi/3$, $4\pi/3$: $z_0 = 2$, $z_1 = 2e^{i2\pi/3} = -1 + i\sqrt{3}$, $z_2 = 2e^{i4\pi/3} = -1 - i\sqrt{3}$.
**Reflect:** $z_0^3 = 8$, $z_1^3 = 8e^{i2\pi} = 8$, $z_2^3 = 8e^{i4\pi} = 8$. ✓ **Ans: $2,\;-1+i\sqrt{3},\;-1-i\sqrt{3}$.**

---

**M84.** $\det\begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 2 \\ 1 & 0 & 4 \end{pmatrix}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "determinant of $3\times3$" | 258 | Expand along row/column |

**Execute:** Expand along row 2 (has a zero): $\det = -0 \cdot M_{21} + (-1) \cdot \begin{vmatrix}2&3\\1&4\end{vmatrix} - 2 \cdot \begin{vmatrix}2&1\\1&0\end{vmatrix} = -1(8-3) - 2(0-1) = -5 - 2(-1) = -5 + 2 = -3$. Checkerboard sign: $+,-,+$ for row 2. Wait: $(2,1)$ is $-$, $(2,2)$ is $+$, $(2,3)$ is $-$. So: $0 + (-1)(+1)\begin{vmatrix}2&3\\1&4\end{vmatrix} + 2(-1)\begin{vmatrix}2&1\\1&0\end{vmatrix} = -1(5) + (-2)(-1) = -5+2 = -3$. Actually let me redo carefully: $\det = a_{21}C_{21} + a_{22}C_{22} + a_{23}C_{23} = 0\cdot C_{21} + (-1)\cdot C_{22} + 2\cdot C_{23}$. $C_{22} = (-1)^{2+2}M_{22} = +\begin{vmatrix}2&3\\1&4\end{vmatrix} = 8-3 = 5$. $C_{23} = (-1)^{2+3}M_{23} = -\begin{vmatrix}2&1\\1&0\end{vmatrix} = -(0-1) = 1$. $\det = 0 + (-1)(5) + 2(1) = -5 + 2 = -3$.
**Reflect:** $\det \neq 0$ → matrix is invertible. ✓ **Ans: $-3$.**

---

**M85.** Eigenvalues of $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "characteristic polynomial" | 263 | $\det(A - \lambda I) = 0$ |

**Execute:** $\det\begin{pmatrix}3-\lambda & 1 \\ 0 & 2-\lambda\end{pmatrix} = (3-\lambda)(2-\lambda) - 0 = 0$. $\lambda = 3$ or $\lambda = 2$.
**Reflect:** Triangular matrix → eigenvalues are diagonal entries (Card 265). ✓ **Ans: $\lambda = 3,\;2$.**

---

**M86.** Solve $\begin{cases} 2x+y-z=3 \\ x-y+2z=0 \\ 3x+2y+z=7 \end{cases}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Gaussian elimination" | 268 | Row reduce augmented matrix |

**Execute:** $\begin{pmatrix}2&1&-1&|&3\\1&-1&2&|&0\\3&2&1&|&7\end{pmatrix}$. $R_1 \leftrightarrow R_2$: $\begin{pmatrix}1&-1&2&|&0\\2&1&-1&|&3\\3&2&1&|&7\end{pmatrix}$. $R_2-2R_1$, $R_3-3R_1$: $\begin{pmatrix}1&-1&2&|&0\\0&3&-5&|&3\\0&5&-5&|&7\end{pmatrix}$. $R_3 - \frac{5}{3}R_2$: $\begin{pmatrix}1&-1&2&|&0\\0&3&-5&|&3\\0&0&\frac{10}{3}&|&2\end{pmatrix}$. Back-substitute: $\frac{10}{3}z = 2$ → $z = \frac{3}{5}$. $3y - 5(\frac{3}{5}) = 3$ → $3y - 3 = 3$ → $y = 2$. $x - 2 + 2(\frac{3}{5}) = 0$ → $x = 2 - \frac{6}{5} = \frac{4}{5}$.
**Reflect:** Verify: $2(\frac{4}{5}) + 2 - \frac{3}{5} = \frac{8}{5} + 2 - \frac{3}{5} = 3$. ✓ **Ans: $x = \frac{4}{5},\; y = 2,\; z = \frac{3}{5}$.**

---

## M87–M94: Cross-Domain Bridges — Calculus I & II

**M87.** Area bounded by $y = x^2$ and $y = 4$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "area between curves" | 152, 302 | Intersection → integral |
| "quadratic" | 1 | $x^2 = 4$ → $x = \pm 2$ |

**Execute:** Intersections: $x^2 = 4$ → $x = \pm 2$. By symmetry: $A = 2\int_0^2 (4 - x^2)dx = 2[4x - \frac{x^3}{3}]_0^2 = 2(8 - \frac{8}{3}) = 2 \cdot \frac{16}{3} = \frac{32}{3}$.
**Reflect:** Rectangle area $4 \times 4 = 16$, parabola takes $\frac{1}{3}$ of that (Archimedes). ✓ **Ans: $\frac{32}{3}$.**

---

**M88.** Volume rotating $y = \sqrt{x}$ about $x$-axis, $x \in [0,4]$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "volume by disks" | 153 | $V = \pi\int_a^b [f(x)]^2 dx$ |

**Execute:** $V = \pi\int_0^4 (\sqrt{x})^2 dx = \pi\int_0^4 x\,dx = \pi[\frac{x^2}{2}]_0^4 = \pi \cdot \frac{16}{2} = 8\pi$.
**Reflect:** This is a paraboloid. Volume of circumscribing cylinder: $\pi(2)^2(4) = 16\pi$. The paraboloid is exactly half: $8\pi$ (Archimedes). ✓ **Ans: $8\pi$.**

---

**M89.** Shell method: $y = x^2$, $x \in [0,2]$, rotated about $y$-axis.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "volume by shells" | 154 | $V = 2\pi\int_a^b x f(x)dx$ |

**Execute:** $V = 2\pi\int_0^2 x \cdot x^2\,dx = 2\pi\int_0^2 x^3\,dx = 2\pi[\frac{x^4}{4}]_0^2 = 2\pi \cdot \frac{16}{4} = 8\pi$.
**Reflect:** Check with washers: $y = x^2$, $x = \sqrt{y}$. $V = \pi\int_0^4 (2^2 - (\sqrt{y})^2)dy = \pi\int_0^4 (4-y)dy = \pi[4y - \frac{y^2}{2}]_0^4 = \pi(16-8) = 8\pi$. ✓ **Ans: $8\pi$.**

---

**M90.** Arc length of $y = \frac{2}{3}x^{3/2}$ from $x=0$ to $x=3$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "arc length" | 156 | $L = \int_a^b \sqrt{1+[f'(x)]^2}dx$ |

**Execute:** $f'(x) = \frac{2}{3} \cdot \frac{3}{2}x^{1/2} = \sqrt{x}$. $1+[f'(x)]^2 = 1+x$. $L = \int_0^3 \sqrt{1+x}\,dx$. $u=1+x$, $du=dx$. $L = \int_1^4 \sqrt{u}\,du = [\frac{2}{3}u^{3/2}]_1^4 = \frac{2}{3}(8-1) = \frac{14}{3}$.
**Reflect:** $f'(x) = \sqrt{x}$ makes the integrand particularly simple. ✓ **Ans: $\frac{14}{3}$.**

---

**M91.** Surface area: $y = \sqrt{x}$ from $x=0$ to $x=4$, rotated about $x$-axis.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "surface area of revolution" | 157 | $S = 2\pi\int_a^b f(x)\sqrt{1+[f'(x)]^2}dx$ |

**Execute:** $f'(x) = \frac{1}{2\sqrt{x}}$. $1+[f']^2 = 1+\frac{1}{4x} = \frac{4x+1}{4x}$. $f(x)\sqrt{1+[f']^2} = \sqrt{x}\sqrt{\frac{4x+1}{4x}} = \sqrt{\frac{4x+1}{4}} = \frac{1}{2}\sqrt{4x+1}$. $S = 2\pi \cdot \frac{1}{2}\int_0^4 \sqrt{4x+1}\,dx = \pi\int_0^4 \sqrt{4x+1}\,dx$. $u=4x+1$, $du=4dx$. $S = \frac{\pi}{4}\int_1^{17} \sqrt{u}\,du = \frac{\pi}{4} \cdot \frac{2}{3}[u^{3/2}]_1^{17} = \frac{\pi}{6}(17\sqrt{17} - 1)$.
**Reflect:** $S \approx \frac{\pi}{6}(70.09 - 1) \approx 36.2$. ✓ **Ans: $\frac{\pi}{6}(17\sqrt{17} - 1)$.**

---

**M92.** $\int_1^\infty \frac{1}{x^2}dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "improper integral" | 158 | $\lim_{b\to\infty}\int_1^b x^{-2}dx$ |

**Execute:** $\int_1^\infty x^{-2}dx = \lim_{b\to\infty} [-\frac{1}{x}]_1^b = \lim_{b\to\infty} (-\frac{1}{b} + 1) = 1$. Converges.
**Reflect:** $p$-integral with $p=2 > 1$ → converges. ✓ **Ans: Converges to $1$.**

---

**M93.** Third-degree Taylor polynomial for $\sin x$ at $a = \pi/4$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Taylor polynomial" | 187 | $T_n(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k$ |

**Execute:** $f(x) = \sin x$, $f'(x) = \cos x$, $f''(x) = -\sin x$, $f'''(x) = -\cos x$. At $a=\pi/4$: $f = \sqrt{2}/2$, $f' = \sqrt{2}/2$, $f'' = -\sqrt{2}/2$, $f''' = -\sqrt{2}/2$. $T_3(x) = \frac{\sqrt{2}}{2}[1 + (x-\frac{\pi}{4}) - \frac{1}{2}(x-\frac{\pi}{4})^2 - \frac{1}{6}(x-\frac{\pi}{4})^3]$.
**Reflect:** Card 179: general Taylor formula. ✓ **Ans: $\frac{\sqrt{2}}{2}\left[1 + (x-\frac{\pi}{4}) - \frac{(x-\pi/4)^2}{2} - \frac{(x-\pi/4)^3}{6}\right]$.**

---

**M94.** Max error in $e^{0.1}$ using 2nd-degree Maclaurin polynomial.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Lagrange error bound" | 188 | $|R_n(x)| \le \frac{M}{(n+1)!}|x-a|^{n+1}$ |

**Execute:** $f(x) = e^x$, $a=0$, $n=2$, $x=0.1$. $f'''(x) = e^x$. On $[0, 0.1]$, $\max|f'''| = e^{0.1} < e^{1} < 3$. Use $M=3$. $|R_2(0.1)| \le \frac{3}{3!}(0.1)^3 = \frac{3}{6} \cdot 0.001 = 0.0005$.
**Reflect:** Actual error: $T_2(0.1) = 1 + 0.1 + 0.005 = 1.105$. $e^{0.1} \approx 1.10517$. Error $\approx 0.00017 < 0.0005$. ✓ **Ans: $\le 0.0005$.**

---

## M95–M100: Cross-Domain Bridges — Applications

**M95.** Total distance: $v(t) = 3t^2 - 6t$ from $t=0$ to $t=4$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "displacement vs total distance" | 289 | Total distance $= \int |v(t)|dt$ |

**Execute:** $v(t) = 3t(t-2)$. $v < 0$ on $(0,2)$, $v > 0$ on $(2,4)$. Distance $= \int_0^2 |3t^2-6t|dt + \int_2^4 (3t^2-6t)dt = \int_0^2 (6t-3t^2)dt + \int_2^4 (3t^2-6t)dt$. First: $[3t^2 - t^3]_0^2 = (12-8)-0 = 4$. Second: $[t^3 - 3t^2]_2^4 = (64-48) - (8-12) = 16 + 4 = 20$. Total $= 24$.
**Reflect:** Displacement $= \int_0^4 v(t)dt = [t^3-3t^2]_0^4 = 64-48 = 16 \neq$ total distance. ✓ **Ans: $24$ units.**

---

**M96.** Water flow: $r(t) = 4t$ gal/min. Amount from $t=1$ to $t=5$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "accumulation" / "net change" | 149, 291 | $\int_a^b r(t)dt$ |

**Execute:** $\int_1^5 4t\,dt = [2t^2]_1^5 = 2(25) - 2(1) = 50 - 2 = 48$ gallons.
**Reflect:** Card 149: integral of rate = total change. ✓ **Ans: $48$ gallons.**

---

**M97.** Radius and interval of convergence for $\sum_{n=0}^{\infty} \frac{(x-2)^n}{3^n}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "radius of convergence" | 178 | Ratio test: $|x-2|/3 < 1$ |

**Execute:** Geometric series with $r = (x-2)/3$. Converges when $|x-2|/3 < 1$ → $|x-2| < 3$. $R = 3$. Interval: $-3 < x-2 < 3$ → $-1 < x < 5$. Check endpoints: $x=-1$: $\sum (-3)^n/3^n = \sum (-1)^n$ diverges. $x=5$: $\sum 3^n/3^n = \sum 1$ diverges. Interval: $(-1, 5)$.
**Reflect:** Card 178: geometric series → ratio test gives $R$. ✓ **Ans: $R = 3$, interval $(-1, 5)$.**

---

**M98.** Maclaurin series for $f(x) = xe^x$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Maclaurin series for $e^x$" | 181 | $e^x = \sum_{n=0}^{\infty} x^n/n!$ |

**Execute:** $xe^x = x\sum_{n=0}^{\infty} \frac{x^n}{n!} = \sum_{n=0}^{\infty} \frac{x^{n+1}}{n!} = \sum_{n=1}^{\infty} \frac{x^n}{(n-1)!}$.
**Reflect:** $R = \infty$ (same as $e^x$, Card 181). ✓ **Ans: $\sum_{n=1}^{\infty} \frac{x^n}{(n-1)!}$, $R = \infty$.**

---

**M99.** Garden area $200\;\mathrm{m^2}$, fence 3 sides (river on 4th). Minimize fencing.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "optimization" | 117, 311 | $L = x + 2y$, $xy = 200$ |

**Execute:** $y = 200/x$. $L(x) = x + 400/x$. $L'(x) = 1 - 400/x^2 = 0$ → $x^2 = 400$ → $x = 20$. $y = 10$. $L = 20 + 20 = 40\;\mathrm{m}$. $L'' = 800/x^3 > 0$ → min.
**Reflect:** Side parallel to river $= 20\;\mathrm{m}$, perpendicular sides $= 10\;\mathrm{m}$ each. ✓ **Ans: $20\;\mathrm{m}$ (parallel to river) $\times 10\;\mathrm{m}$. Fencing $= 40\;\mathrm{m}$.**

---

**M100.** Distance from $(1,2,3)$ to plane $2x - y + 2z = 5$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "distance from point to plane" | 199 | $d = \frac{|ax_0+by_0+cz_0-d|}{\sqrt{a^2+b^2+c^2}}$ |

**Execute:** $a=2$, $b=-1$, $c=2$, $d=5$. $|2(1) + (-1)(2) + 2(3) - 5| = |2 - 2 + 6 - 5| = |1| = 1$. $\sqrt{4+1+4} = \sqrt{9} = 3$. $d = 1/3$.
**Reflect:** Distance must be non-negative. ✓ **Ans: $\frac{1}{3}$.**

---

# ADVANCED ANSWERS (M101–M150)

## M101–M110: Multi-Domain Synthesis — Limits & Derivatives

**M101.** $\lim_{x \to 0} \frac{e^x - 1 - x}{\sin^2 x}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "indeterminate form 0/0" | 75, 300 | L'Hôpital |
| "L'Hôpital's Rule" | 78 | Differentiate numerator and denominator |
| "Maclaurin series for $e^x$" | 181 | $e^x = 1 + x + x^2/2! + \cdots$ |

**Execute (series method):** $e^x - 1 - x = \frac{x^2}{2} + \frac{x^3}{6} + \cdots$. $\sin^2 x = (x - x^3/6 + \cdots)^2 = x^2 + O(x^4)$. $\frac{e^x-1-x}{\sin^2 x} = \frac{x^2/2 + O(x^3)}{x^2 + O(x^4)} \to \frac{1}{2}$.
**Reflect (L'Hôpital verification):** First: $\frac{e^x-1}{2\sin x\cos x} = \frac{e^x-1}{\sin 2x}$ (still 0/0). Second: $\frac{e^x}{2\cos 2x} \to \frac{1}{2}$. ✓ **Ans: $\frac{1}{2}$.**

---

**M102.** $\lim_{x \to 0^+} x^x$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "indeterminate form $0^0$" | 300 | Use $\ln$ to convert |
| "L'Hôpital's Rule" | 78 | $\lim \ln(x^x) = \lim x\ln x$ |
| "derivative of $\ln x$" | 102 | Use L'Hôpital on $\ln x / (1/x)$ |

**Execute:** Let $L = \lim x^x$. $\ln L = \lim_{x\to 0^+} x\ln x = \lim_{x\to 0^+} \frac{\ln x}{1/x}$. L'Hôpital (form $\infty/\infty$): $\lim \frac{1/x}{-1/x^2} = \lim (-x) = 0$. $\ln L = 0$ → $L = e^0 = 1$.
**Reflect:** $0.1^{0.1} \approx 0.794$, $0.01^{0.01} \approx 0.955$, approaching 1. ✓ **Ans: $1$.**

---

**M103.** $\lim_{n\to\infty} (1 + \frac{2}{n})^{3n}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "$\lim (1+1/x)^x = e$" | 83 | $\lim_{n\to\infty} (1 + a/n)^{bn} = e^{ab}$ |

**Execute:** $(1 + \frac{2}{n})^{3n} = [(1 + \frac{2}{n})^{n}]^3 \to (e^2)^3 = e^6$. Or: $(1 + \frac{2}{n})^{3n} = (1 + \frac{2}{n})^{(n/2)\cdot 6} \to e^6$.
**Reflect:** General form: $\lim (1 + a/n)^{bn} = e^{ab}$. Here $a=2$, $b=3$. ✓ **Ans: $e^6$.**

---

**M104.** Prove $x^3 + x - 1 = 0$ has exactly one real root.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Intermediate Value Theorem" | 87 | Show $f$ crosses zero |
| "increasing" / Rolle's | 119, 285 | $f' > 0$ → at most one root |

**Execute:** $f(x) = x^3 + x - 1$. $f(0) = -1 < 0$, $f(1) = 1 > 0$. By IVT, $\exists c \in (0,1)$ with $f(c)=0$ (at least one root). $f'(x) = 3x^2 + 1 > 0$ for all $x$ → $f$ strictly increasing → at most one root. Therefore exactly one real root.
**Reflect:** Card 87 + Card 285: IVT gives existence, monotonicity gives uniqueness. ✓

---

**M105.** $f$ differentiable, $f(1)=2$, $f'(x) \ge 3$ for all $x$. Smallest possible $f(4)$?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Mean Value Theorem" | 118 | $f(4)-f(1) = f'(c)(4-1)$ for some $c \in (1,4)$ |

**Execute:** $f(4) - 2 = f'(c) \cdot 3 \ge 3 \cdot 3 = 9$. $f(4) \ge 11$. The minimum is attained when $f'(x) = 3$ constantly: $f(x) = 3x - 1$, $f(4) = 11$.
**Reflect:** Card 118: MVT gives a lower bound. The bound is sharp. ✓ **Ans: $11$.**

---

**M106.** Find $c$ from MVT for $f(x) = x^3 - x$ on $[0,2]$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Mean Value Theorem" | 118 | $f'(c) = \frac{f(2)-f(0)}{2-0}$ |

**Execute:** $f(2) = 8-2 = 6$, $f(0) = 0$. $\frac{f(2)-f(0)}{2-0} = \frac{6}{2} = 3$. $f'(x) = 3x^2 - 1$. $3c^2 - 1 = 3$ → $3c^2 = 4$ → $c^2 = 4/3$ → $c = \frac{2}{\sqrt{3}}$ (only positive root in $(0,2)$).
**Reflect:** $c \approx 1.155$, within $(0,2)$. ✓ **Ans: $c = \frac{2}{\sqrt{3}}$.**

---

**M107.** Derivative of $y = x^{\sin x}$ via logarithmic differentiation.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "logarithmic differentiation" | 109 | Take $\ln$, differentiate implicitly |

**Execute:** $\ln y = \sin x \cdot \ln x$. $\frac{1}{y}\frac{dy}{dx} = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x}$. $\frac{dy}{dx} = x^{\sin x}(\cos x \ln x + \frac{\sin x}{x})$.
**Reflect:** Card 109: use when variable appears in both base and exponent. ✓ **Ans: $y' = x^{\sin x}(\cos x \ln x + \frac{\sin x}{x})$.**

---

**M108.** $n$th derivative of $f(x) = \frac{1}{1-x}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Maclaurin series for $1/(1-x)$" | 185 | $\frac{1}{1-x} = \sum x^n$ |
| "higher-order derivative" | 110 | $f^{(n)}(0)/n!$ = coefficient of $x^n$ |

**Execute:** $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$. Taylor coefficient: $f^{(n)}(0)/n! = 1$ → $f^{(n)}(0) = n!$. By pattern: $f'(x) = (1-x)^{-2}$, $f''(x) = 2(1-x)^{-3}$, $f'''(x) = 6(1-x)^{-4}$. General: $f^{(n)}(x) = n!(1-x)^{-(n+1)}$.
**Reflect:** Card 110 + 185: differentiate geometric series term-by-term. ✓ **Ans: $f^{(n)}(x) = \frac{n!}{(1-x)^{n+1}}$.**

---

**M109.** Concavity and inflection points of $f(x) = x^4 - 4x^3$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "second derivative" / "concave up/down" | 114, 115, 288 | $f''$ sign determines concavity |

**Execute:** $f'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$. $f''(x) = 12x^2 - 24x = 12x(x-2)$. $f''(x) = 0$ at $x = 0, 2$. Sign: $x<0$: $f''>0$ (up). $0<x<2$: $f''<0$ (down). $x>2$: $f''>0$ (up). Inflection points at $x=0$ and $x=2$ (concavity changes).
**Reflect:** $f''$ changes sign at both 0 and 2 → both are inflection points. ✓ **Ans: Concave up on $(-\infty,0)\cup(2,\infty)$, down on $(0,2)$. Inflection at $x=0,\;2$.**

---

**M110.** Absolute max/min of $f(x) = x^3 - 3x + 1$ on $[-2,2]$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "absolute maximum (closed interval)" | 116, 298 | Evaluate at critical points + endpoints |

**Execute:** $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$. Critical points: $x = \pm 1$. $f(-2) = -8+6+1 = -1$. $f(-1) = -1+3+1 = 3$. $f(1) = 1-3+1 = -1$. $f(2) = 8-6+1 = 3$. Abs max $= 3$ (at $x=-1$ and $x=2$). Abs min $= -1$ (at $x=-2$ and $x=1$).
**Reflect:** Card 298: closed interval method guarantees finding true extrema. ✓ **Ans: Max $= 3$, Min $= -1$.**

---

## M111–M118: Multi-Domain Synthesis — Integrals & Applications

**M111.** $\int \frac{dx}{x^2\sqrt{x^2+4}}$ (trig substitution).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "trigonometric substitution" / $\sqrt{x^2+a^2}$ | 142 | $x = a\tan\theta$, here $a=2$ |

**Execute:** $x = 2\tan\theta$, $dx = 2\sec^2\theta\,d\theta$. $\sqrt{x^2+4} = 2\sec\theta$. $\int \frac{2\sec^2\theta}{4\tan^2\theta \cdot 2\sec\theta}\,d\theta = \int \frac{\sec\theta}{4\tan^2\theta}\,d\theta = \frac{1}{4}\int \frac{\cos\theta}{\sin^2\theta}\,d\theta$. $u = \sin\theta$, $du = \cos\theta\,d\theta$. $\frac{1}{4}\int u^{-2}du = -\frac{1}{4u} + C = -\frac{1}{4\sin\theta} + C$. $\sin\theta = \frac{x}{\sqrt{x^2+4}}$. Answer: $-\frac{\sqrt{x^2+4}}{4x} + C$.
**Reflect:** Card 142 + 135 (or basic $u$-sub). ✓ **Ans: $-\frac{\sqrt{x^2+4}}{4x} + C$.**

---

**M112.** $\int e^{2x}\sin 3x\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "integration by parts" / "tabular" | 141, 146 | Cyclic by parts |

**Execute:** Let $I = \int e^{2x}\sin 3x\,dx$. By parts: $u = \sin 3x$, $dv = e^{2x}dx$. $du = 3\cos 3x\,dx$, $v = \frac{1}{2}e^{2x}$. $I = \frac{1}{2}e^{2x}\sin 3x - \frac{3}{2}\int e^{2x}\cos 3x\,dx$. Second by parts on $J = \int e^{2x}\cos 3x\,dx$: $u = \cos 3x$, $dv = e^{2x}dx$. $J = \frac{1}{2}e^{2x}\cos 3x + \frac{3}{2}\int e^{2x}\sin 3x\,dx = \frac{1}{2}e^{2x}\cos 3x + \frac{3}{2}I$. $I = \frac{1}{2}e^{2x}\sin 3x - \frac{3}{2}(\frac{1}{2}e^{2x}\cos 3x + \frac{3}{2}I) = \frac{1}{2}e^{2x}\sin 3x - \frac{3}{4}e^{2x}\cos 3x - \frac{9}{4}I$. $\frac{13}{4}I = \frac{1}{2}e^{2x}\sin 3x - \frac{3}{4}e^{2x}\cos 3x$. $I = \frac{e^{2x}}{13}(2\sin 3x - 3\cos 3x) + C$.
**Reflect:** Tabular integration (Card 146) gives same result faster. ✓ **Ans: $\frac{e^{2x}}{13}(2\sin 3x - 3\cos 3x) + C$.**

---

**M113.** $\int_0^{\pi/2} \sin^4 x\,dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "power-reducing formulas" | 65 | $\sin^2\theta = \frac{1-\cos 2\theta}{2}$ |
| "trig integrals" | 145 | Even powers → reduce |

**Execute:** $\sin^4 x = (\sin^2 x)^2 = (\frac{1-\cos 2x}{2})^2 = \frac{1}{4}(1 - 2\cos 2x + \cos^2 2x) = \frac{1}{4}(1 - 2\cos 2x + \frac{1+\cos 4x}{2}) = \frac{1}{4}(\frac{3}{2} - 2\cos 2x + \frac{1}{2}\cos 4x)$. Integrate: $\frac{1}{4}[\frac{3}{2}x - \sin 2x + \frac{1}{8}\sin 4x]_0^{\pi/2} = \frac{1}{4} \cdot \frac{3}{2} \cdot \frac{\pi}{2} = \frac{3\pi}{16}$.
**Reflect:** Wallis formula: $I_4 = \frac{3\cdot1}{4\cdot2} \cdot \frac{\pi}{2} = \frac{3\pi}{16}$. ✓ **Ans: $\frac{3\pi}{16}$.**

---

**M114.** Volume: base $y=x^2$ to $y=1$, square cross-sections $\perp x$-axis.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "volume of known cross-section" | 155, 306 | $V = \int A(x)dx$, $A(x) = s(x)^2$ |

**Execute:** Base width at $x$: $s(x) = 1 - x^2$ (for $x \in [-1,1]$). $A(x) = (1-x^2)^2$. $V = \int_{-1}^1 (1 - 2x^2 + x^4)dx = 2\int_0^1 (1-2x^2+x^4)dx = 2[x - \frac{2}{3}x^3 + \frac{x^5}{5}]_0^1 = 2(1 - \frac{2}{3} + \frac{1}{5}) = 2 \cdot \frac{15-10+3}{15} = 2 \cdot \frac{8}{15} = \frac{16}{15}$.
**Reflect:** Card 155: cross-section area integrated along axis. ✓ **Ans: $\frac{16}{15}$.**

---

**M115.** Region under $y=e^x$, $x\in[0,1]$, rotated about $y$-axis.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "volume by shells" | 154 | $V = 2\pi\int_0^1 x e^x dx$ |

**Execute:** $V = 2\pi\int_0^1 xe^x dx$. Integration by parts: $u=x$, $dv=e^x dx$. $\int xe^x dx = xe^x - e^x$. $V = 2\pi[xe^x - e^x]_0^1 = 2\pi[(e-e) - (0-1)] = 2\pi(0+1) = 2\pi$.
**Reflect:** Card 141 + 154. ✓ **Ans: $2\pi$.**

---

**M116.** $\int_0^1 \frac{\ln(1+x)}{x}dx$ via power series.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Maclaurin series for $\ln(1+x)$" | 184 | $\ln(1+x) = \sum (-1)^{n-1}x^n/n$ |
| "power series" / term-by-term integration | 177 | Integrate series |

**Execute:** $\frac{\ln(1+x)}{x} = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^{n-1}}{n}$. $\int_0^1 \frac{\ln(1+x)}{x}dx = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}\int_0^1 x^{n-1}dx = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^2} = \frac{\pi^2}{12}$.
**Reflect:** Card 308 (FTC + series). The alternating sum of $1/n^2$ equals $\pi^2/12$. ✓ **Ans: $\frac{\pi^2}{12}$.**

---

**M117.** $\lim_{x \to 0} \frac{\int_0^x \sin(t^2)dt}{x^3}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "FTC Part 1" | 147 | $\frac{d}{dx}\int_0^x f = f(x)$ |
| "L'Hôpital's Rule" / "series" | 78, 182, 308 | $0/0$ → L'Hôpital, or expand $\sin(t^2)$ |

**Execute (L'Hôpital):** $\lim_{x\to 0} \frac{\sin(x^2)}{3x^2} = \frac{1}{3}\lim_{x\to 0} \frac{\sin(x^2)}{x^2} = \frac{1}{3} \cdot 1 = \frac{1}{3}$ (Card 80).
**Reflect (series check):** $\sin(t^2) = t^2 - t^6/6 + \cdots$, $\int_0^x \sim x^3/3$, ratio $\to 1/3$. ✓ **Ans: $\frac{1}{3}$.**

---

**M118.** Length of $y = \ln(\sec x)$ from $x=0$ to $x=\pi/4$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "arc length" | 156 | $L = \int \sqrt{1+(y')^2}dx$ |
| "derivative of $\sec x$" / "$\ln$" | 101, 102 | $y' = \tan x$ |

**Execute:** $y' = \frac{1}{\sec x} \cdot \sec x\tan x = \tan x$. $1+(y')^2 = 1+\tan^2 x = \sec^2 x$. $\sqrt{1+(y')^2} = |\sec x| = \sec x$ on $[0,\pi/4]$. $L = \int_0^{\pi/4} \sec x\,dx = [\ln|\sec x + \tan x|]_0^{\pi/4} = \ln(\sqrt{2}+1) - \ln(1+0) = \ln(\sqrt{2}+1)$.
**Reflect:** Card 138: $\int \sec x\,dx = \ln|\sec x + \tan x|$. ✓ **Ans: $\ln(\sqrt{2}+1)$.**

---

## M119–M126: Multi-Domain Synthesis — Series & DE

**M119.** Sum of $\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$ (telescoping).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "telescoping series" | 176 | $\sum (b_n - b_{n+1})$ |

**Execute:** $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$. $S_N = \sum_{n=1}^N (\frac{1}{n} - \frac{1}{n+1}) = 1 - \frac{1}{N+1}$. $\lim_{N\to\infty} S_N = 1$.
**Reflect:** Card 176: partial fractions reveal telescoping form. ✓ **Ans: $1$.**

---

**M120.** All $x$ where $\sum_{n=1}^{\infty} \frac{n(x+1)^n}{4^n}$ converges.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "ratio test" / "radius of convergence" | 172, 178 | $\lim |a_{n+1}/a_n|$ |

**Execute:** $\lim_{n\to\infty} |\frac{(n+1)(x+1)^{n+1}}{4^{n+1}} \cdot \frac{4^n}{n(x+1)^n}| = \lim \frac{n+1}{n} \cdot \frac{|x+1|}{4} = \frac{|x+1|}{4} < 1$. $|x+1| < 4$ → $-5 < x < 3$. $R = 4$. Endpoints: $x=-5$: $\sum n(-4)^n/4^n = \sum n(-1)^n$ diverges. $x=3$: $\sum n(4)^n/4^n = \sum n$ diverges. Interval: $(-5, 3)$.
**Reflect:** Card 172 + 178: ratio test for radius, endpoint check. ✓ **Ans: $(-5, 3)$.**

---

**M121.** $\lim_{x \to 0} \frac{\sin x - x}{x^3}$ using series.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Maclaurin series for $\sin x$" | 182 | $\sin x = x - x^3/3! + x^5/5! - \cdots$ |
| "series → limit" | 301, 313 | Expand, simplify, take limit |

**Execute:** $\sin x - x = -\frac{x^3}{6} + \frac{x^5}{120} - \cdots$. $\frac{\sin x - x}{x^3} = -\frac{1}{6} + \frac{x^2}{120} - \cdots \to -\frac{1}{6}$.
**Reflect (L'Hôpital check):** Three applications give $\lim \frac{-\cos x}{6} = -\frac{1}{6}$. ✓ **Ans: $-\frac{1}{6}$.**

---

**M122.** Taylor series for $\ln x$ at $a=1$. Radius?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Taylor series" | 179 | $\sum f^{(n)}(a)(x-a)^n/n!$ |

**Execute:** $f(x) = \ln x$, $f'(x) = 1/x$, $f''(x) = -1/x^2$, $f'''(x) = 2/x^3$, $f^{(n)}(x) = (-1)^{n-1}(n-1)!/x^n$. At $a=1$: $f^{(n)}(1) = (-1)^{n-1}(n-1)!$ for $n \ge 1$. $f(1) = 0$. $\ln x = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}(x-1)^n$. Radius: ratio test → $\lim \frac{n}{n+1}|x-1| = |x-1| < 1$. $R = 1$.
**Reflect:** This is Card 184 shifted to $a=1$. Converges on $(0,2]$. ✓ **Ans: $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}(x-1)^n$, $R=1$.**

---

**M123.** Solve $y'' - 3y' + 2y = 0$, $y(0)=1$, $y'(0)=0$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "second-order linear homogeneous DE" | 216 | $ar^2+br+c=0$ |

**Execute:** $r^2 - 3r + 2 = 0$ → $(r-1)(r-2) = 0$. $r = 1, 2$ (distinct real). $y = C_1 e^x + C_2 e^{2x}$. $y(0) = C_1 + C_2 = 1$. $y'(x) = C_1 e^x + 2C_2 e^{2x}$. $y'(0) = C_1 + 2C_2 = 0$. Solve: $C_2 = -1$, $C_1 = 2$. $y = 2e^x - e^{2x}$.
**Reflect:** Card 216: distinct real roots → sum of exponentials. ✓ **Ans: $y = 2e^x - e^{2x}$.**

---

**M124.** Solve $y'' + 4y' + 13y = 0$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "second-order linear homogeneous DE" / "Euler's formula" | 216, 217 | Complex roots |

**Execute:** $r^2 + 4r + 13 = 0$. $r = \frac{-4 \pm \sqrt{16-52}}{2} = \frac{-4 \pm \sqrt{-36}}{2} = -2 \pm 3i$. $\alpha = -2$, $\beta = 3$. $y = e^{-2x}(C_1\cos 3x + C_2\sin 3x)$.
**Reflect:** Card 217: $e^{(-2+3i)x} = e^{-2x}(\cos 3x + i\sin 3x)$. ✓ **Ans: $y = e^{-2x}(C_1\cos 3x + C_2\sin 3x)$.**

---

**M125.** Salt tank: $100\;\mathrm{L}$ pure water, inflow $5\;\mathrm{L/min}$ at $0.2\;\mathrm{kg/L}$, outflow $5\;\mathrm{L/min}$. Salt amount $A(t)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "first-order linear DE" | 213 | $\frac{dA}{dt} = \text{rate in} - \text{rate out}$ |

**Execute:** $\frac{dA}{dt} = 5(0.2) - 5(\frac{A}{100}) = 1 - \frac{A}{20}$. $\frac{dA}{dt} + \frac{1}{20}A = 1$. Integrating factor: $\mu = e^{t/20}$. $\frac{d}{dt}(A e^{t/20}) = e^{t/20}$. $A e^{t/20} = 20e^{t/20} + C$. $A(t) = 20 + Ce^{-t/20}$. $A(0) = 0$ → $C = -20$. $A(t) = 20(1 - e^{-t/20})$.
**Reflect:** As $t \to \infty$, $A \to 20\;\mathrm{kg}$ (equilibrium: inflow concentration × volume). ✓ **Ans: $A(t) = 20(1 - e^{-t/20})\;\mathrm{kg}$.**

---

**M126.** Logistic growth: $M=1000$, $k=0.5$, $P(0)=100$. Find $P(t)$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "logistic DE" | 215 | $P(t) = \frac{M}{1 + Ae^{-kt}}$ |

**Execute:** $A = \frac{M-P_0}{P_0} = \frac{1000-100}{100} = 9$. $P(t) = \frac{1000}{1 + 9e^{-0.5t}}$.
**Reflect:** $P(0) = 1000/10 = 100$. As $t \to \infty$, $P \to 1000$. ✓ **Ans: $P(t) = \frac{1000}{1 + 9e^{-0.5t}}$.**

---

## M127–M133: Olympiad-Style — Proof & Derivation

**M127.** Prove $\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "implicit differentiation" | 107 | Let $y = \arcsin x$, then $\sin y = x$ |
| "derivative of $\sin x$" / "Pythagorean identity" | 98, 56 | $\cos y = \sqrt{1-\sin^2 y}$ |

**Execute:** $\sin y = x$. Differentiate implicitly: $\cos y \cdot \frac{dy}{dx} = 1$. $\frac{dy}{dx} = \frac{1}{\cos y} = \frac{1}{\sqrt{1-\sin^2 y}} = \frac{1}{\sqrt{1-x^2}}$ (positive root since $y \in [-\pi/2, \pi/2]$, $\cos y \ge 0$).
**Reflect:** Card 106 gives the formula; this proves it. ✓

---

**M128.** Derive $S_n = a\frac{1-r^n}{1-r}$ for finite geometric series.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "geometric series" | 164 | Start from definition |

**Execute:** $S_n = a + ar + ar^2 + \cdots + ar^{n-1}$. $rS_n = ar + ar^2 + \cdots + ar^n$. $S_n - rS_n = a - ar^n$. $S_n(1-r) = a(1-r^n)$. $S_n = a\frac{1-r^n}{1-r}$ for $r \neq 1$.
**Reflect:** Card 164 gives infinite sum as $n\to\infty$ when $|r|<1$. ✓

---

**M129.** Prove $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$ using Fourier series.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Fourier series" / "Parseval" | 179, 308 | $f(x) = x^2$ on $[-\pi,\pi]$ |

**Execute (sketch):** $f(x) = x^2$ has Fourier series $\frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}\cos(nx)$. At $x=\pi$: $\pi^2 = \frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{1}{n^2}$. $\frac{2\pi^2}{3} = 4\sum \frac{1}{n^2}$ → $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$.
**Reflect:** Parseval's identity provides an alternative path via $\int_{-\pi}^\pi x^4 dx$. ✓

---

**M130.** Prove $\int_{-\pi}^{\pi} \sin(mx)\sin(nx)dx = 0$ for $m \neq n$ (integers).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "product-to-sum" | 66 | $\sin A\sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$ |

**Execute:** $\int_{-\pi}^{\pi} \sin(mx)\sin(nx)dx = \frac{1}{2}\int_{-\pi}^{\pi} [\cos((m-n)x) - \cos((m+n)x)]dx = \frac{1}{2}[\frac{\sin((m-n)x)}{m-n} - \frac{\sin((m+n)x)}{m+n}]_{-\pi}^{\pi} = 0$ (since $\sin(k\pi) = 0$ for integer $k$).
**Reflect:** Card 66 converts product to sum; periodicity gives zero. ✓

---

**M131.** Prove L'Hôpital's Rule for $0/0$ case using Cauchy MVT.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "L'Hôpital's Rule" / "MVT" | 78, 118 | Cauchy MVT |

**Execute (sketch):** For $f(a)=g(a)=0$, Cauchy MVT on $[a,x]$ gives $\frac{f(x)}{g(x)} = \frac{f(x)-f(a)}{g(x)-g(a)} = \frac{f'(c)}{g'(c)}$ for some $c \in (a,x)$. As $x \to a$, $c \to a$, so $\lim_{x\to a} \frac{f(x)}{g(x)} = \lim_{c\to a} \frac{f'(c)}{g'(c)}$, provided the latter limit exists.
**Reflect:** Requires $f,g$ differentiable near $a$ and $g'(x) \neq 0$. ✓

---

**M132.** Derive $R = \lim_{n\to\infty} |c_n/c_{n+1}|$ from the ratio test.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "ratio test" / "radius of convergence" | 172, 178 | $\lim |a_{n+1}/a_n| < 1$ |

**Execute:** For $\sum c_n(x-a)^n$, ratio test: $\lim_{n\to\infty} |\frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n}| = |x-a|\lim |\frac{c_{n+1}}{c_n}| < 1$. $|x-a| < \lim |c_n/c_{n+1}| = R$. So $R = \lim |c_n/c_{n+1}|$ (provided the limit exists).
**Reflect:** Card 178: this formula is valid when the limit exists. Use root test if ratio limit doesn't exist. ✓

---

**M133.** Show $\lim_{n\to\infty} \sqrt[n]{n} = 1$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "logarithm" / "limit" | 19, 22, 78 | Take $\ln$ and use known limits |

**Execute:** Let $L = \lim \sqrt[n]{n}$. $\ln L = \lim \frac{\ln n}{n}$. L'Hôpital or known limit: $\lim_{n\to\infty} \frac{\ln n}{n} = 0$. $L = e^0 = 1$.
**Reflect:** Card 173: root test often involves $\sqrt[n]{n} \to 1$. ✓ **Ans: $1$.**

---

## M134–M140: Olympiad-Style — Challenging Problems

**M134.** $\int_0^{\pi} \frac{x\sin x}{1+\cos^2 x}dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "symmetry substitution" | 140 | $u = \pi - x$ |

**Execute:** $I = \int_0^\pi \frac{x\sin x}{1+\cos^2 x}dx$. Let $u = \pi - x$: $I = \int_\pi^0 \frac{(\pi-u)\sin(\pi-u)}{1+\cos^2(\pi-u)}(-du) = \int_0^\pi \frac{(\pi-u)\sin u}{1+\cos^2 u}du = \pi\int_0^\pi \frac{\sin u}{1+\cos^2 u}du - I$. $2I = \pi\int_0^\pi \frac{\sin u}{1+\cos^2 u}du$. Let $w = \cos u$, $dw = -\sin u\,du$. $\int_0^\pi \frac{\sin u}{1+\cos^2 u}du = \int_1^{-1} \frac{-dw}{1+w^2} = \int_{-1}^1 \frac{dw}{1+w^2} = [\arctan w]_{-1}^1 = \frac{\pi}{4} - (-\frac{\pi}{4}) = \frac{\pi}{2}$. $2I = \pi \cdot \frac{\pi}{2} = \frac{\pi^2}{2}$ → $I = \frac{\pi^2}{4}$.
**Reflect:** The $x$ factor is eliminated by the symmetry trick. ✓ **Ans: $\frac{\pi^2}{4}$.**

---

**M135.** Find all continuous $f$ with $f(x) = x^2 + \int_0^x f(t)dt$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "FTC" / "first-order linear DE" | 147, 213, 308 | Differentiate both sides |

**Execute:** $f'(x) = 2x + f(x)$ (by FTC). $f' - f = 2x$. Integrating factor: $\mu = e^{-x}$. $\frac{d}{dx}(f e^{-x}) = 2xe^{-x}$. $f e^{-x} = -2xe^{-x} - 2e^{-x} + C$. $f(x) = -2x - 2 + Ce^x$. From original equation at $x=0$: $f(0) = 0^2 + 0 = 0$. $f(0) = -2 + C = 0$ → $C = 2$. $f(x) = 2e^x - 2x - 2$.
**Reflect:** Verify: $\int_0^x (2e^t-2t-2)dt = [2e^t - t^2 - 2t]_0^x = 2e^x - x^2 - 2x - 2$. Adding $x^2$ gives $2e^x - 2x - 2 = f(x)$. ✓ **Ans: $f(x) = 2e^x - 2x - 2$.**

---

**M136.** $\lim_{n\to\infty} \sum_{k=1}^n \frac{k}{n^2+k^2}$ (Riemann sum).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Riemann sum" | 148, 161, 308 | $\frac{1}{n}\sum f(k/n) \to \int_0^1 f(x)dx$ |

**Execute:** $\frac{k}{n^2+k^2} = \frac{1}{n} \cdot \frac{k/n}{1+(k/n)^2}$. $f(x) = \frac{x}{1+x^2}$. $\lim = \int_0^1 \frac{x}{1+x^2}dx = \frac{1}{2}[\ln(1+x^2)]_0^1 = \frac{1}{2}\ln 2$.
**Reflect:** Card 161: sequence limit via Riemann sum → definite integral. ✓ **Ans: $\frac{1}{2}\ln 2$.**

---

**M137.** $\int_0^\infty \frac{\ln x}{1+x^2}dx$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "symmetry" / "improper integral" | 140, 158 | Split at $x=1$, substitute $u=1/x$ |

**Execute:** $I = \int_0^1 \frac{\ln x}{1+x^2}dx + \int_1^\infty \frac{\ln x}{1+x^2}dx$. In the second: $x = 1/u$, $dx = -du/u^2$. $\int_1^\infty \frac{\ln x}{1+x^2}dx = \int_1^0 \frac{\ln(1/u)}{1+1/u^2}(-\frac{du}{u^2}) = \int_0^1 \frac{-\ln u}{u^2+1}du = -\int_0^1 \frac{\ln u}{1+u^2}du$. So $I = \int_0^1 \frac{\ln x}{1+x^2}dx - \int_0^1 \frac{\ln x}{1+x^2}dx = 0$.
**Reflect:** The integral vanishes by antisymmetry about $x=1$. ✓ **Ans: $0$.**

---

**M138.** Volume of Steinmetz solid (intersection of $x^2+z^2 \le 1$, $y^2+z^2 \le 1$).

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "volume of known cross-section" | 155, 306 | Cross-section perpendicular to $z$: square |

**Execute:** For fixed $z$, $|x| \le \sqrt{1-z^2}$ and $|y| \le \sqrt{1-z^2}$. Cross-section is a square of side $2\sqrt{1-z^2}$. $A(z) = 4(1-z^2)$. $V = \int_{-1}^1 4(1-z^2)dz = 4[z - \frac{z^3}{3}]_{-1}^1 = 4[(1-\frac{1}{3}) - (-1+\frac{1}{3})] = 4(\frac{2}{3} + \frac{2}{3}) = \frac{16}{3}$.
**Reflect:** Classic result: $V = 16/3$. ✓ **Ans: $\frac{16}{3}$.**

---

**M139.** Find sum function of $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}x^n$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Maclaurin series for $\ln(1+x)$" | 184 | $\ln(1+x) = \sum (-1)^{n-1}x^n/n$ |

**Execute:** The series IS the Maclaurin series for $\ln(1+x)$. Sum $= \ln(1+x)$. Converges for $-1 < x \le 1$ (Card 184: $R=1$, converges at $x=1$ to $\ln 2$).
**Reflect:** At $x=1$: alternating harmonic series $= \ln 2$. At $x=-1$: negative harmonic series diverges. ✓ **Ans: $\ln(1+x)$, converges on $(-1, 1]$.**

---

**M140.** All $a>0$ where $\int_0^\infty \frac{dx}{1+x^a}$ converges.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "improper integral" / "comparison test" | 158, 160 | Analyze behavior at 0 and $\infty$ |

**Execute:** Near $x=0$: $\frac{1}{1+x^a} \to 1$, finite → no issue. Near $x=\infty$: $\frac{1}{1+x^a} \sim x^{-a}$. $\int^\infty x^{-a}dx$ converges iff $a > 1$. For $a \le 1$, divergence at $\infty$. So converges for $a > 1$.
**Reflect:** Card 170: compare with $p$-integral $\int^\infty x^{-a}dx$. ✓ **Ans: $a > 1$.**

---

## M141–M150: Advanced Applications

**M141.** $\frac{d}{dx}\operatorname{erf}(x^2)$ where $\operatorname{erf}(x) = \frac{2}{\sqrt{\pi}}\int_0^x e^{-t^2}dt$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "FTC with chain rule" | 150 | $\frac{d}{dx}\int_0^{g(x)} f = f(g(x))g'(x)$ |

**Execute:** $\frac{d}{dx}\operatorname{erf}(x^2) = \frac{2}{\sqrt{\pi}} e^{-(x^2)^2} \cdot 2x = \frac{4x}{\sqrt{\pi}}e^{-x^4}$.
**Reflect:** Card 150: chain rule on the upper limit. ✓ **Ans: $\frac{4x}{\sqrt{\pi}}e^{-x^4}$.**

---

**M142.** Prove $\int_{-\infty}^\infty e^{-x^2}dx = \sqrt{\pi}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "polar coordinates" / "Gaussian integral" | 207, 208 | Square and convert to polar |

**Execute:** $I = \int_{-\infty}^\infty e^{-x^2}dx$. $I^2 = \int_{-\infty}^\infty \int_{-\infty}^\infty e^{-(x^2+y^2)}dx\,dy = \int_0^{2\pi}\int_0^\infty e^{-r^2}r\,dr\,d\theta = 2\pi \cdot \frac{1}{2} = \pi$. $I = \sqrt{\pi}$ (positive).
**Reflect:** Card 310: polar conversion is the key bridge. ✓

---

**M143.** Brachistochrone: set up integral for descent time, note cycloid solution.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "arc length" / "optimization" / "DE" | 156, 117, 309 | $T = \int \frac{ds}{v}$ |

**Execute:** $ds = \sqrt{1+(y')^2}dx$, $v = \sqrt{2gy}$ (energy conservation: $\frac{1}{2}mv^2 = mgy$). $T = \int_0^a \frac{\sqrt{1+(y')^2}}{\sqrt{2gy}}dx$. Euler-Lagrange equation yields the cycloid: $x = r(\theta-\sin\theta)$, $y = r(1-\cos\theta)$.
**Reflect:** This is the birth of calculus of variations (1696, Johann Bernoulli). ✓

---

**M144.** Show $\int_{-\infty}^\infty \phi(x)dx = 1$ where $\phi(x) = \frac{1}{\sqrt{2\pi}}e^{-x^2/2}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Gaussian integral" / "$u$-substitution" | 142, 140 | $u = x/\sqrt{2}$ |

**Execute:** $\int_{-\infty}^\infty e^{-x^2/2}dx$. Let $u = x/\sqrt{2}$: $dx = \sqrt{2}du$. $\int = \sqrt{2}\int_{-\infty}^\infty e^{-u^2}du = \sqrt{2}\sqrt{\pi}$ (from M142). Multiply by $\frac{1}{\sqrt{2\pi}}$: $\frac{1}{\sqrt{2\pi}} \cdot \sqrt{2\pi} = 1$.
**Reflect:** Card 236: normal distribution integrates to 1. ✓

---

**M145.** Volume of 4D unit ball.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "iterated integrals" / "trig substitution" | 153, 155, 142 | Slice method |

**Execute:** $V_4 = \int_{-1}^1 V_3(1-x_4^2)^{3/2}dx_4$. $V_3 = \frac{4}{3}\pi$. $V_4 = \frac{4\pi}{3}\int_{-1}^1 (1-x^2)^{3/2}dx$. $x = \sin\theta$: $\int_{-\pi/2}^{\pi/2} \cos^4\theta\,d\theta = 2 \cdot \frac{3\pi}{16} = \frac{3\pi}{8}$. $V_4 = \frac{4\pi}{3} \cdot \frac{3\pi}{8} = \frac{\pi^2}{2}$.
**Reflect:** $V_n = \frac{\pi^{n/2}}{\Gamma(n/2+1)}$. For $n=4$: $\frac{\pi^2}{\Gamma(3)} = \frac{\pi^2}{2}$. ✓ **Ans: $\frac{\pi^2}{2}$.**

---

**M146.** Centroid of region under $y=\sin x$, $x \in [0,\pi]$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "centroid" / "average value" | 151, 152 | $\bar{x} = \frac{\int x\,dA}{\int dA}$ |

**Execute:** $A = \int_0^\pi \sin x\,dx = [-\cos x]_0^\pi = 2$. $\bar{x} = \frac{1}{A}\int_0^\pi x\sin x\,dx = \frac{1}{2}[ \sin x - x\cos x]_0^\pi = \frac{1}{2}(\pi) = \frac{\pi}{2}$ (by symmetry). $\bar{y} = \frac{1}{A}\int_0^\pi \frac{1}{2}\sin^2 x\,dx = \frac{1}{4}\int_0^\pi \frac{1-\cos 2x}{2}dx = \frac{1}{8}[x - \frac{1}{2}\sin 2x]_0^\pi = \frac{\pi}{8}$.
**Reflect:** $\bar{x} = \pi/2$ by symmetry. $\bar{y}$ is less than half the max height (1). ✓ **Ans: $(\frac{\pi}{2}, \frac{\pi}{8})$.**

---

**M147.** Why does $\frac{1}{1+x^2} = \sum (-1)^n x^{2n}$ diverge at $x=1$ despite $f(1)=1/2$?

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "radius of convergence" / "complex roots" | 178, 253 | $R$ limited by nearest singularity |

**Execute:** The geometric series $\sum (-x^2)^n$ converges for $|-x^2| < 1$, i.e., $|x| < 1$. At $x=1$: terms are $(-1)^n$, series oscillates, diverges. Reason: $f(z) = 1/(1+z^2)$ has poles at $z = \pm i$. Distance from $0$ to $i$ is $1$, so $R=1$. The series cannot converge beyond the nearest singularity in the complex plane, even though $f(x)$ is perfectly smooth on $\mathbb{R}$.
**Reflect:** Card 253 (Fundamental Theorem of Algebra) + complex analysis insight. ✓

---

**M148.** Frullani integral: $\int_0^\infty \frac{e^{-ax} - e^{-bx}}{x}dx$, $a,b>0$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Feynman trick" / "double integral" | 141, 308 | Write as double integral |

**Execute:** $\frac{e^{-ax}-e^{-bx}}{x} = \int_a^b e^{-tx}dt$. $\int_0^\infty \frac{e^{-ax}-e^{-bx}}{x}dx = \int_0^\infty \int_a^b e^{-tx}dt\,dx = \int_a^b \int_0^\infty e^{-tx}dx\,dt = \int_a^b \frac{1}{t}dt = \ln\frac{b}{a}$.
**Reflect:** Interchange of integrals justified by Fubini (positive integrand). ✓ **Ans: $\ln\frac{b}{a}$.**

---

**M149.** Derive Wallis product: $\frac{\pi}{2} = \prod_{n=1}^\infty \frac{4n^2}{4n^2-1}$.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Wallis integrals" / "reduction formula" | 145, 314 | $I_n = \int_0^{\pi/2} \sin^n x\,dx$ |

**Execute:** $I_{2n} = \frac{2n-1}{2n} \cdot \frac{2n-3}{2n-2} \cdots \frac{1}{2} \cdot \frac{\pi}{2}$. $I_{2n+1} = \frac{2n}{2n+1} \cdot \frac{2n-2}{2n-1} \cdots \frac{2}{3} \cdot 1$. For large $n$, $I_{2n} \sim I_{2n+1}$. Taking ratio and limit yields $\frac{\pi}{2} = \frac{2\cdot2}{1\cdot3} \cdot \frac{4\cdot4}{3\cdot5} \cdots$.
**Reflect:** Card 314: reduction formula $I_n = \frac{n-1}{n}I_{n-2}$. ✓

---

**M150.** Prove $e$ is irrational.

| Trigger Phrase | Card | Instant Equation |
|---------------|------|------------------|
| "Taylor series" / "error bound" | 181, 188 | $e = \sum_{k=0}^\infty 1/k!$ |

**Execute:** Suppose $e = p/q$. Then $N = q!(e - \sum_{k=0}^q 1/k!)$ is an integer. But $0 < N = q!\sum_{k=q+1}^\infty \frac{1}{k!} = \frac{1}{q+1} + \frac{1}{(q+1)(q+2)} + \cdots < \frac{1}{q+1}(1 + \frac{1}{q+1} + \cdots) = \frac{1}{q} \le 1$. $N$ is a positive integer strictly less than 1 — contradiction. Hence $e$ is irrational.
**Reflect:** Card 188: Lagrange error bound provides the inequality. The proof is originally due to Fourier. ✓

---

> **150 solutions, one method.** Every answer began with a Trigger Trace. Every solution followed the cards. Every result was verified with domain checks, type checks, or differentiation/integration verification.
>
> **If you can calculate it, you have understood it.**
