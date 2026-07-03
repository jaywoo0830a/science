# The Mathematics Reflex: Expression → Equation Flashcard Deck

> **If you can calculate it, you have understood it.**
>
> This deck trains one reflex: **see a phrase → write the equation or technique.** No hesitation. No "which formula?" No "do I use the chain rule or product rule?" The word itself is the command. Memorize these mappings the way you memorized vocabulary for the SAT. When you sit down for the exam, the equations will already be on the page before you finish reading the problem.

---

## How to Use This Deck

1. **Cover the right column.** Read the trigger phrase. Say the equation or technique aloud. Uncover. Check.
2. **Drill by domain.** Master Derivatives before touching Integrals. Each domain is self-contained.
3. **Daily minimum:** 25 cards. Rotate domains. ~400 cards — cycle through in about 16 days.
4. **Exam simulation:** When doing practice problems, Ctrl+F this document. The goal is to need Ctrl+F less and less.

**Signal system:**
- **[HIGH-FREQ]** — High-frequency exam trigger. Appears in 50%+ of problems in this domain.
- **[DISTINGUISHER]** — Separates A students from B students. Often tested.
- **[MEMORIZE]** — Memorization item. A value, identity, or special case you just need to know.

---

## 1. Algebra & Functions — "The Grammar of Mathematics"

> **Core reflex:** "Solve," "factor," "simplify," "domain," "range," "inverse" → manipulate algebraically, check constraints.

### 1.1 Polynomials & Factoring

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 1 | "quadratic equation", "$ax^2+bx+c=0$" | $x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a}$ | The universal solver. Discriminant $D = b^2-4ac$: $D>0$ → 2 real roots, $D=0$ → 1 real root (double), $D<0$ → 2 complex conjugate roots. |
| 2 | "discriminant", "$D$", "nature of roots" | $D = b^2 - 4ac$ | $D > 0$: distinct real. $D = 0$: repeated real. $D < 0$: complex conjugates. |
| 3 | "sum of roots", "product of roots" | $\alpha + \beta = -\dfrac{b}{a}$, $\alpha\beta = \dfrac{c}{a}$ | For $ax^2+bx+c=0$. Works without finding roots explicitly. |
| 4 | "difference of squares", "$a^2-b^2$" | $a^2 - b^2 = (a-b)(a+b)$ | Most common factoring pattern. |
| 5 | "sum of cubes", "$a^3+b^3$" | $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ | |
| 6 | "difference of cubes", "$a^3-b^3$" | $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$ | |
| 7 | "perfect square trinomial" | $a^2 \pm 2ab + b^2 = (a \pm b)^2$ | Recognize $(x+3)^2 = x^2 + 6x + 9$ instantly. |
| 8 | "completing the square" | $ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$ | Converts to vertex form. |
| 9 | "vertex form", "vertex of parabola" | $y = a(x-h)^2 + k$, vertex = $(h,k)$ | $h = -b/(2a)$, $k = f(h)$. |
| 10 | "axis of symmetry" | $x = -\dfrac{b}{2a}$ | Vertical line through the vertex. |
| 11 | "remainder theorem" | If $P(x)$ divided by $(x-a)$, remainder = $P(a)$ | |
| 12 | "factor theorem" | $(x-a)$ is a factor of $P(x)$ iff $P(a) = 0$ | Consequence of remainder theorem. |
| 13 | "rational root theorem" | Possible rational roots of $a_n x^n + \cdots + a_0$: $\pm\dfrac{\text{factors of }a_0}{\text{factors of }a_n}$ | Only gives *possible* roots — test each. |
| 14 | "polynomial long division", "synthetic division" | Divide $P(x)$ by $(x-a)$; the quotient is one degree lower. | Synthetic division is a shortcut when dividing by $(x-a)$. |

### 1.2 Exponentials & Logarithms

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 15 | "exponent rules", "laws of exponents" | $a^m \cdot a^n = a^{m+n}$, $\dfrac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, $(ab)^n = a^n b^n$ | |
| 16 | "negative exponent" | $a^{-n} = \dfrac{1}{a^n}$ | |
| 17 | "rational exponent", "fractional exponent" | $a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$ | |
| 18 | "logarithm definition", "$\log_b a = c$" | $\log_b a = c \iff b^c = a$ | The logarithm is the exponent. |
| 19 | "logarithm properties", "log rules" | $\log_b(xy) = \log_b x + \log_b y$, $\log_b(x/y) = \log_b x - \log_b y$, $\log_b(x^n) = n\log_b x$ | |
| 20 | "change of base formula" | $\log_b a = \dfrac{\log_c a}{\log_c b} = \dfrac{\ln a}{\ln b}$ | Most common: convert to natural log. |
| 21 | "$\ln$", "natural log", "log base $e$" | $\ln x = \log_e x$, $e \approx 2.71828$ | $\ln e = 1$, $\ln 1 = 0$, $\ln(e^x) = x$, $e^{\ln x} = x$. |
| 22 | "exponential equation", "solve for exponent" | Take $\ln$ (or $\log$) of both sides. | e.g., $2^x = 10$ → $x\ln 2 = \ln 10$ → $x = \ln 10 / \ln 2$. |
| 23 | "exponential growth/decay" | $A = A_0 e^{kt}$ (growth: $k>0$; decay: $k<0$). Also $A = A_0(1 \pm r)^t$. | Doubling time: $t = \ln 2 / k$. Half-life: $t = \ln 2 / |k|$. |
| 24 | "compound interest" | $A = P\left(1 + \dfrac{r}{n}\right)^{nt}$; continuous: $A = Pe^{rt}$ | $P$ = principal, $r$ = annual rate, $n$ = compounding periods/year, $t$ = years. |

### 1.3 Functions & Transformations

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 25 | "domain", "find the domain" | Exclude: division by zero, even roots of negatives, log of non-positives. | Domain is the set of all valid $x$-values. |
| 26 | "range", "find the range" | Analyze behavior: asymptotes, maximum/minimum, end behavior. | Range is the set of all possible $y$-values. |
| 27 | "inverse function $f^{-1}$" | Swap $x$ and $y$, then solve for $y$. Domain of $f^{-1}$ = range of $f$. | Graph: reflection across $y=x$. $f(f^{-1}(x)) = f^{-1}(f(x)) = x$. |
| 28 | "horizontal line test" | If any horizontal line intersects the graph more than once, the function is NOT invertible (not one-to-one). | |
| 29 | "composition", "$(f \circ g)(x)$" | $(f \circ g)(x) = f(g(x))$ | Apply $g$ first, then $f$. Domain: $x$ in domain of $g$ AND $g(x)$ in domain of $f$. |
| 30 | "shift", "translation" | $f(x-h)+k$: shift right $h$, up $k$ | $h>0$ shifts RIGHT (counterintuitive). |
| 31 | "stretch", "compress", "reflect" | $a \cdot f(bx)$: vertical stretch by $|a|$; horizontal stretch by $1/|b|$. | $a<0$: reflect across $x$-axis. $b<0$: reflect across $y$-axis. |
| 32 | "even function", "$f(-x)=f(x)$" | Symmetric about $y$-axis. | e.g., $x^2$, $\cos x$, $|x|$. |
| 33 | "odd function", "$f(-x)=-f(x)$" | Symmetric about origin. | e.g., $x^3$, $\sin x$, $\tan x$. |
| 34 | "absolute value equation", "$|ax+b| = c$" | $ax+b = c$ OR $ax+b = -c$ | Two cases. $|ax+b| < c$ → $-c < ax+b < c$. $|ax+b| > c$ → $ax+b < -c$ or $ax+b > c$. |
| 35 | "piecewise function" | Define different formulas over different intervals of the domain. | Check continuity at boundary points. |
| 36 | "asymptote" (vertical) | $x = a$ where denominator = 0 (and numerator ≠ 0). | Function approaches $\pm\infty$. |
| 37 | "asymptote" (horizontal) | $y = L$ where $\lim_{x\to\pm\infty} f(x) = L$. | Compare degrees of numerator and denominator for rational functions. |
| 38 | "asymptote" (oblique/slant) | When degree of numerator = degree of denominator + 1. Divide to get $y = mx + b$. | |

---

## 2. Trigonometry — "The Circle's Language"

> **Core reflex:** "Triangle," "angle," "sin," "cos," "tan" → SOH-CAH-TOA, unit circle, identities.

### 2.1 Right Triangle Trigonometry

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 39 | "SOH-CAH-TOA" | $\sin\theta = \dfrac{\text{opp}}{\text{hyp}}$, $\cos\theta = \dfrac{\text{adj}}{\text{hyp}}$, $\tan\theta = \dfrac{\text{opp}}{\text{adj}}$ | Valid only for right triangles. |
| 40 | "reciprocal trig functions" | $\csc\theta = \dfrac{1}{\sin\theta}$, $\sec\theta = \dfrac{1}{\cos\theta}$, $\cot\theta = \dfrac{1}{\tan\theta} = \dfrac{\cos\theta}{\sin\theta}$ | |
| 41 | "Law of Sines" | $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$ | For ANY triangle. $R$ = circumradius. |
| 42 | "Law of Cosines" | $c^2 = a^2 + b^2 - 2ab\cos C$ | For ANY triangle. Reduces to Pythagorean when $C = 90^\circ$. |
| 43 | "Pythagorean theorem" | $a^2 + b^2 = c^2$ | Right triangle only. $c$ = hypotenuse. |
| 44 | "special right triangle 30-60-90" | Sides: $1 : \sqrt{3} : 2$ (opposite 30°, 60°, 90°) | $\sin 30^\circ = 1/2$, $\cos 30^\circ = \sqrt{3}/2$, $\tan 30^\circ = 1/\sqrt{3}$. |
| 45 | "special right triangle 45-45-90" | Sides: $1 : 1 : \sqrt{2}$ | $\sin 45^\circ = \cos 45^\circ = 1/\sqrt{2}$, $\tan 45^\circ = 1$. |
| 46 | "area of triangle" (SAS) | $\text{Area} = \dfrac{1}{2}ab\sin C$ | Two sides and the included angle. |
| 47 | "Heron's formula", "area from three sides" | $\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$, $s = \dfrac{a+b+c}{2}$ | $s$ = semiperimeter. |

### 2.2 Unit Circle & Radian Measure

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 48 | "unit circle", "circle trig" | $(\cos\theta, \sin\theta)$ is a point on $x^2+y^2=1$. | $\cos\theta$ = $x$-coordinate, $\sin\theta$ = $y$-coordinate. |
| 49 | "radians to degrees" | $\theta_{\text{deg}} = \theta_{\text{rad}} \times \dfrac{180^\circ}{\pi}$ | $\pi\;\mathrm{rad} = 180^\circ$. |
| 50 | "degrees to radians" | $\theta_{\text{rad}} = \theta_{\text{deg}} \times \dfrac{\pi}{180^\circ}$ | |
| 51 | "arc length $s$" | $s = r\theta$ | $\theta$ MUST be in radians. |
| 52 | "sector area" | $A = \dfrac{1}{2}r^2\theta$ | $\theta$ MUST be in radians. |
| 53 | "quadrantal angles" (0°, 90°, 180°, 270°) | $\sin 0 = 0$, $\sin\frac{\pi}{2}=1$, $\sin\pi=0$, $\sin\frac{3\pi}{2}=-1$; $\cos 0=1$, $\cos\frac{\pi}{2}=0$, $\cos\pi=-1$, $\cos\frac{3\pi}{2}=0$ | Know cold. |
| 54 | "reference angle" | Acute angle between terminal side and $x$-axis. | Use to find trig values in any quadrant. Sign from ASTC: All, Sin, Tan, Cos (positive in QI, QII, QIII, QIV). |
| 55 | "coterminal angles" | $\theta \pm 2\pi n$ (radians) or $\theta \pm 360^\circ n$ (degrees) | Same terminal side, different number of rotations. |

### 2.3 Trigonometric Identities

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 56 | "Pythagorean identity" | $\sin^2\theta + \cos^2\theta = 1$ | Also: $1 + \tan^2\theta = \sec^2\theta$, $1 + \cot^2\theta = \csc^2\theta$. |
| 57 | "sum formula", "$\sin(A+B)$" | $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$ | |
| 58 | "sum formula", "$\cos(A+B)$" | $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$ | Note: minus sign for $\cos(A+B)$. |
| 59 | "sum formula", "$\tan(A+B)$" | $\tan(A \pm B) = \dfrac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$ | |
| 60 | "double angle", "$\sin 2\theta$" | $\sin 2\theta = 2\sin\theta\cos\theta$ | |
| 61 | "double angle", "$\cos 2\theta$" | $\cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$ | Three forms. Pick the one that matches your problem. |
| 62 | "double angle", "$\tan 2\theta$" | $\tan 2\theta = \dfrac{2\tan\theta}{1 - \tan^2\theta}$ | |
| 63 | "half angle", "$\sin(\theta/2)$" | $\sin\dfrac{\theta}{2} = \pm\sqrt{\dfrac{1 - \cos\theta}{2}}$ | Sign depends on quadrant of $\theta/2$. |
| 64 | "half angle", "$\cos(\theta/2)$" | $\cos\dfrac{\theta}{2} = \pm\sqrt{\dfrac{1 + \cos\theta}{2}}$ | |
| 65 | "power-reducing formulas" | $\sin^2\theta = \dfrac{1-\cos 2\theta}{2}$, $\cos^2\theta = \dfrac{1+\cos 2\theta}{2}$, $\tan^2\theta = \dfrac{1-\cos 2\theta}{1+\cos 2\theta}$ | Essential for integration of $\sin^2 x$, $\cos^2 x$. |
| 66 | "product-to-sum" | $\sin A\cos B = \frac{1}{2}[\sin(A+B) + \sin(A-B)]$, $\cos A\sin B = \frac{1}{2}[\sin(A+B) - \sin(A-B)]$, $\cos A\cos B = \frac{1}{2}[\cos(A+B) + \cos(A-B)]$, $\sin A\sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$ | |
| 67 | "sum-to-product" | $\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}$, $\sin A - \sin B = 2\cos\frac{A+B}{2}\sin\frac{A-B}{2}$, $\cos A + \cos B = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2}$, $\cos A - \cos B = -2\sin\frac{A+B}{2}\sin\frac{A-B}{2}$ | |

### 2.4 Trigonometric Equations & Graphs

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 68 | "solve $\sin x = k$" | $x = \arcsin(k) + 2\pi n$ OR $x = \pi - \arcsin(k) + 2\pi n$ | General solution with period $2\pi$. |
| 69 | "solve $\cos x = k$" | $x = \pm\arccos(k) + 2\pi n$ | Due to even symmetry of cosine. |
| 70 | "solve $\tan x = k$" | $x = \arctan(k) + \pi n$ | Period of tangent is $\pi$, not $2\pi$. |
| 71 | "amplitude", "period" (sine/cosine) | $y = A\sin(Bx + C) + D$: amplitude = $|A|$, period = $2\pi/|B|$, phase shift = $-C/B$, vertical shift = $D$. | Know each parameter's effect. |
| 72 | "amplitude", "period" (tangent) | $y = A\tan(Bx + C) + D$: period = $\pi/|B|$. | Tangent has no amplitude (unbounded). |
| 73 | "inverse trig functions", "arcsin" | $\arcsin x$: range $[-\pi/2, \pi/2]$. $\arccos x$: range $[0, \pi]$. $\arctan x$: range $(-\pi/2, \pi/2)$. | Domain for arcsin and arccos: $[-1, 1]$. Domain for arctan: $(-\infty, \infty)$. |

---

## 3. Limits & Continuity — "Approaching Without Arriving"

> **Core reflex:** "Limit," "approaches," "continuous" → direct substitution, factor/cancel, L'Hôpital, squeeze theorem.

### 3.1 Limit Fundamentals

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 74 | "limit", "$\lim_{x \to a} f(x)$" | First try: substitute $x = a$. If $f(a)$ is defined (no 0/0, no $\infty/\infty$), that is the limit. | Direct substitution is always step 1. |
| 75 | "indeterminate form", "0/0" | Factor, rationalize, or use L'Hôpital's Rule (Card 78). | The limit CAN exist even when the function is undefined at the point. |
| 76 | "limit at infinity", "$\lim_{x \to \infty} f(x)$" | Divide numerator and denominator by the highest power of $x$ in the denominator. | For rational functions: degree comparison gives 0, $\infty$, or ratio of leading coefficients. |
| 77 | "end behavior of rational function" | $\deg(P) < \deg(Q)$: limit = 0. $\deg(P) = \deg(Q)$: limit = leading coefficient ratio. $\deg(P) > \deg(Q)$: limit = $\pm\infty$. | |
| 78 | "L'Hôpital's Rule" | If $\lim f/g$ is $0/0$ or $\infty/\infty$: $\lim \dfrac{f(x)}{g(x)} = \lim \dfrac{f'(x)}{g'(x)}$ | Only for indeterminate forms. Do NOT use for $0/5$ or similar! |
| 79 | "squeeze theorem", "sandwich theorem" | If $g(x) \le f(x) \le h(x)$ near $a$, and $\lim g = \lim h = L$, then $\lim f = L$. | Classic example: $\lim_{x\to 0} x\sin(1/x) = 0$. |
| 80 | "$\lim_{x \to 0} \dfrac{\sin x}{x}$" | $\lim_{x\to 0} \dfrac{\sin x}{x} = 1$ | **[MEMORIZE]** The foundation of all trig limits. |
| 81 | "$\lim_{x \to 0} \dfrac{1 - \cos x}{x}$" | $\lim_{x\to 0} \dfrac{1 - \cos x}{x} = 0$ | |
| 82 | "$\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$" | $\lim_{x\to 0} \dfrac{1 - \cos x}{x^2} = \dfrac{1}{2}$ | |
| 83 | "$\lim_{x \to \infty} \left(1 + \dfrac{1}{x}\right)^x$" | $\lim_{x \to \infty} \left(1 + \dfrac{1}{x}\right)^x = e$ | The definition of $e$. Also: $\lim_{x \to 0} (1+x)^{1/x} = e$. |
| 84 | "one-sided limit", "$\lim_{x \to a^+}$", "$\lim_{x \to a^-}$" | Approach from right ($a^+$) or left ($a^-$) only. | Limit exists iff both one-sided limits exist AND are equal. |
| 85 | "infinite limit", "vertical asymptote" | $\lim_{x \to a} f(x) = \pm\infty$ | Function blows up. $x=a$ is a vertical asymptote. |

### 3.2 Continuity

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 86 | "continuous at $x=a$" | Three conditions: (1) $f(a)$ defined, (2) $\lim_{x\to a} f(x)$ exists, (3) $\lim_{x\to a} f(x) = f(a)$. | All three must hold. |
| 87 | "Intermediate Value Theorem (IVT)" | If $f$ is continuous on $[a,b]$, and $k$ is between $f(a)$ and $f(b)$, then there exists $c \in (a,b)$ with $f(c) = k$. | Used to prove existence of roots. |
| 88 | "removable discontinuity" (hole) | Limit exists but $f(a)$ is undefined or unequal to the limit. | Can be "fixed" by redefining $f(a)$. |
| 89 | "jump discontinuity" | Left and right limits exist but are different. | Cannot be removed. |
| 90 | "infinite discontinuity" | Function approaches $\pm\infty$ at the point. | Vertical asymptote. |

---

## 4. Derivatives — "Instantaneous Rate of Change"

> **Core reflex:** "Derivative," "rate of change," "slope of tangent," "velocity," "$f'$" → definition or differentiation rules.

### 4.1 Definition & Basic Rules

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 91 | "limit definition of derivative" | $f'(x) = \lim_{h \to 0} \dfrac{f(x+h) - f(x)}{h}$ | Also: $f'(a) = \lim_{x \to a} \dfrac{f(x) - f(a)}{x - a}$. |
| 92 | "power rule" | $\dfrac{d}{dx}(x^n) = nx^{n-1}$ | Works for any real $n$. |
| 93 | "constant multiple rule" | $\dfrac{d}{dx}(c \cdot f(x)) = c \cdot f'(x)$ | |
| 94 | "sum/difference rule" | $\dfrac{d}{dx}(f \pm g) = f' \pm g'$ | Derivative of sum = sum of derivatives. |
| 95 | "product rule" | $\dfrac{d}{dx}(f \cdot g) = f'g + fg'$ | "First times derivative of second plus second times derivative of first." |
| 96 | "quotient rule" | $\dfrac{d}{dx}\left(\dfrac{f}{g}\right) = \dfrac{f'g - fg'}{g^2}$ | "Low d-high minus high d-low over low squared." |
| 97 | "chain rule" | $\dfrac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)$ | "Derivative of outer evaluated at inner, times derivative of inner." |
| 98 | "derivative of $\sin x$" | $\dfrac{d}{dx}(\sin x) = \cos x$ | |
| 99 | "derivative of $\cos x$" | $\dfrac{d}{dx}(\cos x) = -\sin x$ | Note the negative sign. |
| 100 | "derivative of $\tan x$" | $\dfrac{d}{dx}(\tan x) = \sec^2 x$ | Also: $\dfrac{d}{dx}(\cot x) = -\csc^2 x$. |
| 101 | "derivative of $\sec x$" | $\dfrac{d}{dx}(\sec x) = \sec x \tan x$ | $\dfrac{d}{dx}(\csc x) = -\csc x \cot x$. |
| 102 | "derivative of $\ln x$" | $\dfrac{d}{dx}(\ln x) = \dfrac{1}{x}$ | For $x > 0$. For $\ln|x|$: $\dfrac{d}{dx}(\ln|x|) = \dfrac{1}{x}$. |
| 103 | "derivative of $e^x$" | $\dfrac{d}{dx}(e^x) = e^x$ | The only function that is its own derivative. |
| 104 | "derivative of $a^x$ ($a>0$)" | $\dfrac{d}{dx}(a^x) = a^x \ln a$ | |
| 105 | "derivative of $\log_a x$" | $\dfrac{d}{dx}(\log_a x) = \dfrac{1}{x \ln a}$ | |
| 106 | "derivative of inverse trig" | $\dfrac{d}{dx}(\arcsin x) = \dfrac{1}{\sqrt{1-x^2}}$, $\dfrac{d}{dx}(\arccos x) = \dfrac{-1}{\sqrt{1-x^2}}$, $\dfrac{d}{dx}(\arctan x) = \dfrac{1}{1+x^2}$ | Domain: $|x| < 1$ for arcsin/arccos; all real for arctan. |

### 4.2 Implicit Differentiation & Related Rates

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 107 | "implicit differentiation" | Differentiate both sides with respect to $x$. Treat $y$ as $y(x)$ → multiply by $dy/dx$ when differentiating $y$ terms. | Solve for $dy/dx$ at the end. |
| 108 | "related rates" | Write an equation relating the quantities. Differentiate BOTH sides with respect to time $t$. Plug in known rates and values. | Every variable that changes with time needs a $d/dt$ term. |
| 109 | "logarithmic differentiation" | Take $\ln$ of both sides, then differentiate implicitly. | Use when variable appears in both base and exponent, or for messy products/quotients. |
| 110 | "higher-order derivative", "$f''$, $f'''$" | Differentiate repeatedly. $f''$ = derivative of $f'$. $f^{(n)}$ = $n$th derivative. | Notation: $f''$, $f^{(n)}$, $\dfrac{d^2y}{dx^2}$, $\dfrac{d^ny}{dx^n}$. |

### 4.3 Applications of Derivatives

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 111 | "critical point", "critical number" | $f'(x) = 0$ OR $f'(x)$ does not exist. | Candidates for local extrema. |
| 112 | "first derivative test" | $f'$ changes from + to − → local max. $f'$ changes from − to + → local min. | Sign chart of $f'$. |
| 113 | "second derivative test" | $f'(c)=0$, $f''(c)>0$ → local min. $f'(c)=0$, $f''(c)<0$ → local max. $f''(c)=0$ → inconclusive. | Only works when $f''(c) \neq 0$. |
| 114 | "inflection point" | $f''$ changes sign. $f''(c)=0$ OR $f''(c)$ DNE. | Concavity changes at inflection points. |
| 115 | "concave up" / "concave down" | $f''(x) > 0$ → concave up (∪). $f''(x) < 0$ → concave down (∩). | |
| 116 | "global/absolute maximum" (closed interval) | Evaluate $f$ at all critical points AND at the endpoints. Largest value = absolute max. | Extreme Value Theorem guarantees existence if $f$ is continuous on $[a,b]$. |
| 117 | "optimization" | (1) Write quantity to optimize as function of one variable. (2) Find domain. (3) Find critical points. (4) Test critical points + endpoints. | Most word problems are optimization problems. |
| 118 | "Mean Value Theorem (MVT)" | If $f$ continuous on $[a,b]$ and differentiable on $(a,b)$, then $\exists c \in (a,b)$ such that $f'(c) = \dfrac{f(b)-f(a)}{b-a}$. | There is a point where the instantaneous rate equals the average rate. |
| 119 | "Rolle's Theorem" | If $f(a)=f(b)$, then $\exists c \in (a,b)$ such that $f'(c)=0$. | Special case of MVT. |
| 120 | "tangent line equation" | $y - f(a) = f'(a)(x - a)$ | Point-slope form. $f'(a)$ = slope of tangent at $x=a$. |
| 121 | "normal line equation" | $y - f(a) = -\dfrac{1}{f'(a)}(x - a)$ | Perpendicular to tangent. Slope = negative reciprocal. |
| 122 | "linear approximation", "linearization" | $L(x) = f(a) + f'(a)(x - a)$ | Approximates $f(x)$ near $x=a$. Tangent line approximation. |
| 123 | "differential $dy$" | $dy = f'(x)\,dx$ | Approximate change in $y$ for a small change in $x$. |
| 124 | "velocity", "speed", "acceleration" | $v(t) = s'(t)$, $a(t) = v'(t) = s''(t)$. Speed = $|v(t)|$. | $s(t)$ = position. Velocity = rate of change of position. Acceleration = rate of change of velocity. |

---

## 5. Integrals — "Accumulation and Area"

> **Core reflex:** "Integrate," "antiderivative," "area under curve," "accumulation" → antiderivative rules, substitution, FTC.

### 5.1 Antiderivatives (Indefinite Integrals)

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 125 | "power rule for integration" | $\displaystyle\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + C\;(n \neq -1)$ | Add one to exponent, divide by new exponent. |
| 126 | "integral of $1/x$" | $\displaystyle\int \dfrac{1}{x}\,dx = \ln|x| + C$ | The special case $n=-1$ for the power rule. |
| 127 | "integral of $e^x$" | $\displaystyle\int e^x\,dx = e^x + C$ | |
| 128 | "integral of $a^x$" | $\displaystyle\int a^x\,dx = \dfrac{a^x}{\ln a} + C$ | |
| 129 | "integral of $\sin x$" | $\displaystyle\int \sin x\,dx = -\cos x + C$ | Note the negative sign. |
| 130 | "integral of $\cos x$" | $\displaystyle\int \cos x\,dx = \sin x + C$ | |
| 131 | "integral of $\sec^2 x$" | $\displaystyle\int \sec^2 x\,dx = \tan x + C$ | |
| 132 | "integral of $\sec x \tan x$" | $\displaystyle\int \sec x \tan x\,dx = \sec x + C$ | |
| 133 | "integral of $\csc x \cot x$" | $\displaystyle\int \csc x \cot x\,dx = -\csc x + C$ | |
| 134 | "integral of $\csc^2 x$" | $\displaystyle\int \csc^2 x\,dx = -\cot x + C$ | |
| 135 | "integral of $\dfrac{1}{\sqrt{1-x^2}}$" | $\displaystyle\int \dfrac{1}{\sqrt{1-x^2}}\,dx = \arcsin x + C$ | |
| 136 | "integral of $\dfrac{1}{1+x^2}$" | $\displaystyle\int \dfrac{1}{1+x^2}\,dx = \arctan x + C$ | |
| 137 | "integral of $\tan x$" | $\displaystyle\int \tan x\,dx = \ln|\sec x| + C$ | Not obvious — derive from $\int \frac{\sin x}{\cos x} dx$. |
| 138 | "integral of $\sec x$" | $\displaystyle\int \sec x\,dx = \ln|\sec x + \tan x| + C$ | **[MEMORIZE]** Classic tricky integral. |
| 139 | "integral of $\ln x$" | $\displaystyle\int \ln x\,dx = x\ln x - x + C$ | Use integration by parts. |

### 5.2 Integration Techniques

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 140 | "$u$-substitution" | $\displaystyle\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$ where $u = g(x)$, $du = g'(x)dx$. | The chain rule in reverse. Always change limits for definite integrals. |
| 141 | "integration by parts" | $\displaystyle\int u\,dv = uv - \int v\,du$ | LIATE rule for choosing $u$: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. |
| 142 | "trigonometric substitution" | For $\sqrt{a^2-x^2}$: $x = a\sin\theta$. For $\sqrt{a^2+x^2}$: $x = a\tan\theta$. For $\sqrt{x^2-a^2}$: $x = a\sec\theta$. | Replace the radical with a trig function. |
| 143 | "partial fractions" | Decompose $\dfrac{P(x)}{Q(x)}$ into a sum of simpler fractions. | Prerequisite: $\deg(P) < \deg(Q)$. If not, do polynomial long division first. |
| 144 | "completing the square" (in integrals) | Rewrite $ax^2+bx+c$ as $a(x-h)^2 + k$. Then use arctan or arcsin form. | Classic for $\int \frac{1}{x^2+ax+b}\,dx$ type. |
| 145 | "trig integrals" (strategy) | $\int \sin^m x \cos^n x\,dx$: If $m$ odd → $u = \cos x$. If $n$ odd → $u = \sin x$. If both even → use power-reducing formulas. | |
| 146 | "tabular integration" | Repeated integration by parts when one factor is a polynomial. Differentiate the polynomial until zero. | Shortcut for $\int x^n e^x\,dx$, $\int x^n \sin x\,dx$, etc. |

### 5.3 Definite Integrals & FTC

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 147 | "Fundamental Theorem of Calculus (FTC) Part 1" | If $F(x) = \int_a^x f(t)\,dt$, then $F'(x) = f(x)$. | The derivative of an accumulation function is the integrand. |
| 148 | "Fundamental Theorem of Calculus (FTC) Part 2" | $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$ where $F' = f$. | Evaluate antiderivative at upper limit minus lower limit. |
| 149 | "net change theorem" | $\displaystyle\int_a^b F'(x)\,dx = F(b) - F(a)$ | The integral of a rate of change = total change. |
| 150 | "FTC with chain rule" | $\dfrac{d}{dx}\int_{a(x)}^{b(x)} f(t)\,dt = f(b(x))\cdot b'(x) - f(a(x))\cdot a'(x)$ | Differentiating an integral with variable limits. |
| 151 | "average value of a function" | $f_{\text{avg}} = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,dx$ | Mean value theorem for integrals. |
| 152 | "area between curves" | $A = \displaystyle\int_a^b [f(x) - g(x)]\,dx$ where $f(x) \ge g(x)$ on $[a,b]$. | Top minus bottom. For $x = f(y)$: right minus left. |
| 153 | "volume by disks/washers" ($x$-axis rotation) | $V = \pi\displaystyle\int_a^b [R(x)]^2\,dx$ (disk); $V = \pi\displaystyle\int_a^b ([R(x)]^2 - [r(x)]^2)\,dx$ (washer) | Cross-section perpendicular to the axis of rotation. |
| 154 | "volume by shells" ($y$-axis rotation) | $V = 2\pi\displaystyle\int_a^b x \cdot f(x)\,dx$ | Shell method. Radius = $x$, height = $f(x)$. |
| 155 | "volume of known cross-section" | $V = \displaystyle\int_a^b A(x)\,dx$ | $A(x)$ = area of cross-section perpendicular to $x$-axis. |
| 156 | "arc length" | $L = \displaystyle\int_a^b \sqrt{1 + [f'(x)]^2}\,dx$ | |
| 157 | "surface area of revolution" | $S = 2\pi\displaystyle\int_a^b f(x)\sqrt{1 + [f'(x)]^2}\,dx$ (about $x$-axis) | |
| 158 | "improper integral" (infinite limit) | $\displaystyle\int_a^\infty f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx$ | Converges if limit exists (finite). Diverges otherwise. |
| 159 | "improper integral" (discontinuity) | $\displaystyle\int_a^b f(x)\,dx$ where $f$ has a vertical asymptote in $[a,b]$. Split and take limits. | |
| 160 | "comparison test for integrals" | If $0 \le f(x) \le g(x)$: $\int g$ converges → $\int f$ converges. $\int f$ diverges → $\int g$ diverges. | Only for positive functions. |

---

## 6. Sequences & Series — "Infinite Sums"

> **Core reflex:** "Sequence," "series," "converge," "diverge," "Taylor," "power series" → test for convergence, find sum or radius.

### 6.1 Sequences

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 161 | "limit of a sequence", "$\lim_{n\to\infty} a_n$" | Treat $n$ as a continuous variable; use limit laws. | If limit exists and is finite, the sequence converges. |
| 162 | "monotonic sequence" | Always increasing ($a_{n+1} \ge a_n$) OR always decreasing ($a_{n+1} \le a_n$). | |
| 163 | "bounded sequence" | There exists $M$ such that $|a_n| \le M$ for all $n$. | Bounded + monotonic → convergent (Monotone Convergence Theorem). |

### 6.2 Series & Convergence Tests

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 164 | "geometric series" | $\displaystyle\sum_{n=0}^{\infty} ar^n = \dfrac{a}{1-r}$ for $|r| < 1$ | Converges iff $|r| < 1$. Sum formula only works for convergent series. |
| 165 | "$p$-series", "$\sum 1/n^p$" | Converges iff $p > 1$. Diverges iff $p \le 1$. | $p=1$ is the harmonic series — diverges. |
| 166 | "harmonic series" | $\displaystyle\sum_{n=1}^{\infty} \dfrac{1}{n}$ diverges (very slowly). | **[MEMORIZE]** The classic example where terms → 0 but series diverges. |
| 167 | "$n$th term test for divergence" | If $\lim_{n\to\infty} a_n \neq 0$ (or DNE), then $\sum a_n$ diverges. | If terms do NOT approach zero, series MUST diverge. Converse is NOT true (see harmonic series). |
| 168 | "integral test" | If $a_n = f(n)$ where $f(x) \ge 0$, decreasing, and continuous for $x \ge 1$: $\sum a_n$ converges iff $\int_1^\infty f(x)\,dx$ converges. | Gives convergence/divergence, NOT the sum. |
| 169 | "comparison test" (direct) | If $0 \le a_n \le b_n$ for large $n$: $\sum b_n$ converges → $\sum a_n$ converges. $\sum a_n$ diverges → $\sum b_n$ diverges. | |
| 170 | "limit comparison test" | If $\lim_{n\to\infty} \dfrac{a_n}{b_n} = c$ where $0 < c < \infty$, then both series converge or both diverge. | Most powerful comparison test. Compare with known $p$-series or geometric series. |
| 171 | "alternating series test" | For $\sum (-1)^{n-1} b_n$ with $b_n > 0$: if $b_{n+1} \le b_n$ (decreasing) AND $\lim b_n = 0$, the series converges. | Also gives error bound: $|R_n| \le b_{n+1}$. |
| 172 | "ratio test" | $\lim_{n\to\infty} \left|\dfrac{a_{n+1}}{a_n}\right| = L$: $L<1$ → converges absolutely. $L>1$ → diverges. $L=1$ → inconclusive. | Best for series with factorials or exponentials. |
| 173 | "root test" | $\lim_{n\to\infty} \sqrt[n]{|a_n|} = L$: $L<1$ → converges absolutely. $L>1$ → diverges. $L=1$ → inconclusive. | Best for series with $n$th powers. |
| 174 | "absolute convergence" | $\sum |a_n|$ converges → $\sum a_n$ converges absolutely. | Absolute convergence implies convergence, but not vice versa. |
| 175 | "conditional convergence" | $\sum a_n$ converges but $\sum |a_n|$ diverges. | Alternating harmonic series is conditionally convergent. |
| 176 | "telescoping series" | $\sum (b_n - b_{n+1})$: cancel all intermediate terms. Sum = $b_1 - \lim_{n\to\infty} b_{n+1}$. | Partial fraction decomposition often reveals telescoping form. |

### 6.3 Power Series & Taylor Series

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 177 | "power series" (centered at $a$) | $\displaystyle\sum_{n=0}^{\infty} c_n (x-a)^n$ | |
| 178 | "radius of convergence $R$" | Use ratio test or root test. $R = \lim |c_n/c_{n+1}|$ (ratio test) or $R = 1/\lim\sqrt[n]{|c_n|}$ (root test). | Interval: $(a-R, a+R)$. Check endpoints separately. |
| 179 | "Taylor series" (centered at $a$) | $f(x) = \displaystyle\sum_{n=0}^{\infty} \dfrac{f^{(n)}(a)}{n!}(x-a)^n$ | |
| 180 | "Maclaurin series" (centered at 0) | $f(x) = \displaystyle\sum_{n=0}^{\infty} \dfrac{f^{(n)}(0)}{n!}x^n$ | Taylor series at $a=0$. |
| 181 | "Maclaurin series for $e^x$" | $e^x = \displaystyle\sum_{n=0}^{\infty} \dfrac{x^n}{n!} = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \cdots$ | $R = \infty$. **[MEMORIZE]** |
| 182 | "Maclaurin series for $\sin x$" | $\sin x = \displaystyle\sum_{n=0}^{\infty} (-1)^n\dfrac{x^{2n+1}}{(2n+1)!} = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \cdots$ | $R = \infty$. **[MEMORIZE]** |
| 183 | "Maclaurin series for $\cos x$" | $\cos x = \displaystyle\sum_{n=0}^{\infty} (-1)^n\dfrac{x^{2n}}{(2n)!} = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \cdots$ | $R = \infty$. **[MEMORIZE]** |
| 184 | "Maclaurin series for $\ln(1+x)$" | $\ln(1+x) = \displaystyle\sum_{n=1}^{\infty} (-1)^{n-1}\dfrac{x^n}{n} = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \cdots$ | $R = 1$. Converges at $x=1$ (alternating harmonic). |
| 185 | "Maclaurin series for $\dfrac{1}{1-x}$" | $\dfrac{1}{1-x} = \displaystyle\sum_{n=0}^{\infty} x^n = 1 + x + x^2 + \cdots$ | $R = 1$. Geometric series. **[MEMORIZE]** |
| 186 | "Maclaurin series for $\arctan x$" | $\arctan x = \displaystyle\sum_{n=0}^{\infty} (-1)^n\dfrac{x^{2n+1}}{2n+1} = x - \dfrac{x^3}{3} + \dfrac{x^5}{5} - \cdots$ | $R = 1$. |
| 187 | "Taylor polynomial of degree $n$" | $T_n(x) = \displaystyle\sum_{k=0}^{n} \dfrac{f^{(k)}(a)}{k!}(x-a)^k$ | Truncated Taylor series. |
| 188 | "Lagrange error bound", "Taylor remainder" | $|R_n(x)| \le \dfrac{M}{(n+1)!}|x-a|^{n+1}$ where $M \ge |f^{(n+1)}(t)|$ for $t$ between $a$ and $x$. | Maximum possible error from truncating Taylor series. |

---

## 7. Vectors, Parametric & Polar — "Motion in the Plane and Space"

> **Core reflex:** "Vector," "parametric curve," "polar coordinates" → dot product, cross product, $\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}$, $r = f(\theta)$.

### 7.1 Vectors in 2D and 3D

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 189 | "vector magnitude", "$|\vec{v}|$" | $|\vec{v}| = \sqrt{v_x^2 + v_y^2}$ (2D); $|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}$ (3D) | Length of the vector. |
| 190 | "unit vector" | $\hat{u} = \dfrac{\vec{v}}{|\vec{v}|}$ | Vector of length 1 in the direction of $\vec{v}$. |
| 191 | "dot product", "scalar product" | $\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y = |\vec{a}||\vec{b}|\cos\theta$ | Result is a SCALAR. $\vec{a} \cdot \vec{b} = 0 \iff$ perpendicular. |
| 192 | "angle between vectors" | $\cos\theta = \dfrac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$ | |
| 193 | "projection of $\vec{a}$ onto $\vec{b}$" | $\text{proj}_{\vec{b}}\,\vec{a} = \dfrac{\vec{a}\cdot\vec{b}}{|\vec{b}|^2}\,\vec{b}$ | Scalar projection: $\dfrac{\vec{a}\cdot\vec{b}}{|\vec{b}|}$. |
| 194 | "cross product" (3D only) | $\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix}$ | Result is a VECTOR perpendicular to both $\vec{a}$ and $\vec{b}$. $|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta$. |
| 195 | "determinant formula" (cross product magnitude) | $|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta$ = area of parallelogram spanned by $\vec{a}$ and $\vec{b}$. | |
| 196 | "triple scalar product" | $\vec{a} \cdot (\vec{b} \times \vec{c}) = \begin{vmatrix} a_x & a_y & a_z \\ b_x & b_y & b_z \\ c_x & c_y & c_z \end{vmatrix}$ | Volume of parallelepiped. $\vec{a} \cdot (\vec{b} \times \vec{c}) = 0$ → coplanar. |
| 197 | "vector equation of a line" | $\vec{r} = \vec{r}_0 + t\vec{v}$ | $\vec{r}_0$ = point on line, $\vec{v}$ = direction vector. |
| 198 | "equation of a plane" | $\vec{n} \cdot (\vec{r} - \vec{r}_0) = 0$, or $ax + by + cz = d$ | $\vec{n} = \langle a,b,c \rangle$ is the normal vector. |
| 199 | "distance from point to plane" | $d = \dfrac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2 + b^2 + c^2}}$ | |
| 200 | "distance from point to line" | $d = \dfrac{|\vec{PQ} \times \vec{v}|}{|\vec{v}|}$ where $Q$ is on the line, $\vec{v}$ is direction. | |

### 7.2 Parametric Equations

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 201 | "parametric curve", "$x=f(t), y=g(t)$" | Each $t$ gives a point $(x,y)$. | Eliminate $t$ to get Cartesian equation. |
| 202 | "slope of parametric curve", "$dy/dx$" | $\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}$ provided $dx/dt \neq 0$. | Chain rule: $dy/dx = (dy/dt) / (dx/dt)$. |
| 203 | "second derivative (parametric)" | $\dfrac{d^2y}{dx^2} = \dfrac{d}{dt}\left(\dfrac{dy}{dx}\right) \div \dfrac{dx}{dt}$ | |
| 204 | "speed in parametric" | $\text{speed} = \sqrt{\left(\dfrac{dx}{dt}\right)^2 + \left(\dfrac{dy}{dt}\right)^2}$ | Magnitude of the velocity vector. |
| 205 | "arc length of parametric curve" | $L = \displaystyle\int_a^b \sqrt{\left(\dfrac{dx}{dt}\right)^2 + \left(\dfrac{dy}{dt}\right)^2}\,dt$ | |
| 206 | "tangent line (parametric)" | Point: $(x(t_0), y(t_0))$. Slope: $dy/dx$ at $t=t_0$. | |

### 7.3 Polar Coordinates

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 207 | "polar to Cartesian" | $x = r\cos\theta$, $y = r\sin\theta$, $r^2 = x^2 + y^2$, $\tan\theta = y/x$ | |
| 208 | "polar curve area" | $A = \dfrac{1}{2}\displaystyle\int_{\alpha}^{\beta} [r(\theta)]^2\,d\theta$ | |
| 209 | "arc length in polar" | $L = \displaystyle\int_{\alpha}^{\beta} \sqrt{r^2 + \left(\dfrac{dr}{d\theta}\right)^2}\,d\theta$ | |
| 210 | "slope of polar curve" | $\dfrac{dy}{dx} = \dfrac{(dr/d\theta)\sin\theta + r\cos\theta}{(dr/d\theta)\cos\theta - r\sin\theta}$ | |
| 211 | "polar conics" | $r = \dfrac{ed}{1 \pm e\cos\theta}$ or $r = \dfrac{ed}{1 \pm e\sin\theta}$ | $e=1$: parabola. $0<e<1$: ellipse. $e>1$: hyperbola. $e=0$: circle. |

---

## 8. Differential Equations — "Equations That Contain Derivatives"

> **Core reflex:** "Differential equation," "solve the DE," "general solution," "particular solution" → separation of variables, integrating factor, characteristic equation.

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 212 | "separable DE" | $\dfrac{dy}{dx} = g(x)h(y)$ → $\displaystyle\int \dfrac{1}{h(y)}\,dy = \int g(x)\,dx$ | Separate all $y$ terms with $dy$, all $x$ terms with $dx$. |
| 213 | "first-order linear DE" | $\dfrac{dy}{dx} + P(x)y = Q(x)$. Integrating factor: $\mu(x) = e^{\int P(x)\,dx}$. Solution: $y = \frac{1}{\mu}\int \mu Q\,dx$. | |
| 214 | "exponential growth/decay DE" | $\dfrac{dy}{dt} = ky$ → $y = Ce^{kt}$ | The most common DE. $k>0$: growth. $k<0$: decay. |
| 215 | "logistic DE" | $\dfrac{dP}{dt} = kP\left(1 - \dfrac{P}{M}\right)$ → $P(t) = \dfrac{M}{1 + Ae^{-kt}}$ | $M$ = carrying capacity. |
| 216 | "second-order linear homogeneous DE" (constant coefficients) | $ay'' + by' + cy = 0$. Characteristic equation: $ar^2 + br + c = 0$. | $r_1 \neq r_2$ real: $y = C_1e^{r_1 x} + C_2e^{r_2 x}$. $r_1 = r_2$: $y = (C_1 + C_2 x)e^{rx}$. $r = \alpha \pm \beta i$: $y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$. |
| 217 | "Euler's formula" | $e^{i\theta} = \cos\theta + i\sin\theta$ | Bridge between exponentials and trig functions. |
| 218 | "slope field", "direction field" | At each $(x,y)$, draw a short segment with slope $dy/dx = f(x,y)$. | Qualitative solution visualization. |
| 219 | "Euler's method" | $y_{n+1} = y_n + h \cdot f(x_n, y_n)$ where $h$ = step size. | Numerical approximation. Smaller $h$ → more accurate. |
| 220 | "general solution" vs "particular solution" | General: includes arbitrary constant $C$. Particular: $C$ determined by initial condition. | |

---

## 9. Probability & Statistics — "Measuring Uncertainty"

> **Core reflex:** "Probability," "mean," "variance," "distribution," "normal" → counting principles, expected value formulas, normal approximation.

### 9.1 Counting & Probability

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 221 | "permutations", "$P(n,r)$" | $P(n,r) = \dfrac{n!}{(n-r)!}$ | Order MATTERS. |
| 222 | "combinations", "$C(n,r)$", "$\binom{n}{r}$" | $\dbinom{n}{r} = \dfrac{n!}{r!(n-r)!}$ | Order does NOT matter. |
| 223 | "binomial theorem" | $(x+y)^n = \displaystyle\sum_{k=0}^{n} \dbinom{n}{k} x^{n-k} y^k$ | |
| 224 | "probability of event $A$", "$P(A)$" | $P(A) = \dfrac{\text{favorable outcomes}}{\text{total outcomes}}$ (equally likely) | |
| 225 | "complement rule" | $P(A^c) = 1 - P(A)$ | |
| 226 | "addition rule" | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | For mutually exclusive events: $P(A \cap B) = 0$. |
| 227 | "conditional probability", "$P(A|B)$" | $P(A|B) = \dfrac{P(A \cap B)}{P(B)}$ | |
| 228 | "multiplication rule" | $P(A \cap B) = P(A) \cdot P(B|A) = P(B) \cdot P(A|B)$ | For independent events: $P(A \cap B) = P(A)P(B)$. |
| 229 | "independent events" | $P(A|B) = P(A)$, $P(A \cap B) = P(A)P(B)$ | |
| 230 | "Bayes' Theorem" | $P(A|B) = \dfrac{P(B|A)P(A)}{P(B)}$ | |
| 231 | "binomial probability" | $P(X = k) = \dbinom{n}{k} p^k (1-p)^{n-k}$ | $n$ trials, probability $p$ of success per trial. |

### 9.2 Random Variables & Distributions

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 232 | "expected value (discrete)", "$E(X)$", "mean $\mu$" | $E(X) = \sum x_i P(x_i)$ | Weighted average of possible values. |
| 233 | "variance", "$\sigma^2$", "$\text{Var}(X)$" | $\text{Var}(X) = E[(X-\mu)^2] = E(X^2) - [E(X)]^2$ | |
| 234 | "standard deviation $\sigma$" | $\sigma = \sqrt{\text{Var}(X)}$ | |
| 235 | "linear transformation of random variable" | $E(aX + b) = aE(X) + b$, $\text{Var}(aX + b) = a^2\text{Var}(X)$ | |
| 236 | "normal distribution", "$N(\mu,\sigma^2)$" | $f(x) = \dfrac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/(2\sigma^2)}$ | Bell curve. |
| 237 | "$z$-score", "standardize" | $z = \dfrac{x - \mu}{\sigma}$ | Converts to standard normal $N(0,1)$. |
| 238 | "68-95-99.7 rule" (empirical rule) | 68% within $\pm1\sigma$. 95% within $\pm2\sigma$. 99.7% within $\pm3\sigma$. | For normal distributions. **[MEMORIZE]** |
| 239 | "central limit theorem (CLT)" | For large $n$, $\bar{X} \approx N(\mu, \sigma^2/n)$ regardless of the population distribution. | $n \ge 30$ is the usual rule of thumb. |
| 240 | "sampling distribution of sample mean" | $\mu_{\bar{x}} = \mu$, $\sigma_{\bar{x}} = \dfrac{\sigma}{\sqrt{n}}$ | Standard error of the mean. |
| 241 | "confidence interval for mean ($\sigma$ known)" | $\bar{x} \pm z^* \dfrac{\sigma}{\sqrt{n}}$ | $z^*$ from normal table (1.96 for 95%). |
| 242 | "confidence interval for mean ($\sigma$ unknown)" | $\bar{x} \pm t^* \dfrac{s}{\sqrt{n}}$ | $t^*$ from $t$-distribution with $n-1$ df. |
| 243 | "$t$-distribution" vs "$z$-distribution" | Use $t$ when $\sigma$ is unknown and estimated by $s$. | $t$ has heavier tails; approaches $z$ as $n \to \infty$. |

---

## 10. Complex Numbers — "Beyond the Real Line"

> **Core reflex:** "$i$," "complex," "imaginary," "$z = a+bi$" → $i^2 = -1$, conjugate, modulus, argument, De Moivre, Euler.

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 244 | "$i$", "imaginary unit" | $i = \sqrt{-1}$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$ | Powers of $i$ cycle every 4. |
| 245 | "complex conjugate", "$\bar{z}$" | If $z = a+bi$, then $\bar{z} = a-bi$. | $z\bar{z} = a^2+b^2 = |z|^2$. |
| 246 | "modulus", "$|z|$" | $|z| = \sqrt{a^2 + b^2}$ | Distance from origin in complex plane. |
| 247 | "argument", "$\arg(z)$" | $\arg(z) = \theta$ where $\tan\theta = b/a$. | Usually in $(-\pi, \pi]$ or $[0, 2\pi)$. |
| 248 | "polar form of complex number" | $z = r(\cos\theta + i\sin\theta) = r\operatorname{cis}\theta$ | $r = |z|$, $\theta = \arg(z)$. |
| 249 | "Euler's form" | $z = re^{i\theta}$ | Most compact form. $e^{i\theta} = \cos\theta + i\sin\theta$. |
| 250 | "De Moivre's Theorem" | $(r\cos\theta + ir\sin\theta)^n = r^n(\cos n\theta + i\sin n\theta)$ → $z^n = r^n e^{in\theta}$ | |
| 251 | "$n$th roots of a complex number" | $z^{1/n} = r^{1/n}\left[\cos\left(\dfrac{\theta+2k\pi}{n}\right) + i\sin\left(\dfrac{\theta+2k\pi}{n}\right)\right]$, $k=0,1,\dots,n-1$ | $n$ distinct $n$th roots, equally spaced on circle of radius $r^{1/n}$. |
| 252 | "roots of unity" | $n$th roots of 1: $\omega_k = e^{2\pi i k/n}$, $k=0,1,\dots,n-1$ | Sum of all $n$th roots of unity = 0. |
| 253 | "fundamental theorem of algebra" | Every polynomial of degree $n \ge 1$ has exactly $n$ complex roots (counting multiplicity). | Real coefficients → complex roots come in conjugate pairs. |

---

## 11. Matrices & Linear Algebra — "Data in Rows and Columns"

> **Core reflex:** "Matrix," "determinant," "inverse," "eigenvalue," "linear system" → row operations, $A^{-1}$, $\det(A)$, $\det(A-\lambda I)=0$.

### 11.1 Matrix Operations

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 254 | "matrix multiplication $AB$" | $(AB)_{ij} = \sum_k A_{ik} B_{kj}$ | $A$ is $m\times n$, $B$ is $n\times p$ → $AB$ is $m\times p$. NOT commutative in general. |
| 255 | "identity matrix $I$" | $I_n$: 1's on diagonal, 0's elsewhere. $AI = IA = A$. | |
| 256 | "transpose $A^T$" | Rows become columns. $(A^T)_{ij} = A_{ji}$. | $(AB)^T = B^T A^T$. |
| 257 | "determinant of $2\times2$" | $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$ | |
| 258 | "determinant of $3\times3$" | $\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a(ei-fh) - b(di-fg) + c(dh-eg)$ | Expand along any row/column. Remember the checkerboard sign pattern. |
| 259 | "inverse of $2\times2$" | $A^{-1} = \dfrac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ | Exists iff $\det(A) \neq 0$. |
| 260 | "invertible matrix theorem" | $\det(A) \neq 0$ $\iff$ $A$ is invertible $\iff$ rows/columns are linearly independent $\iff$ $A\vec{x}=\vec{0}$ has only trivial solution. | |
| 261 | "Cramer's Rule" (2×2 system) | $x = \dfrac{\begin{vmatrix} b_1 & a_{12} \\ b_2 & a_{22} \end{vmatrix}}{\det A}$, $y = \dfrac{\begin{vmatrix} a_{11} & b_1 \\ a_{21} & b_2 \end{vmatrix}}{\det A}$ | Replace column of coefficients of the variable with the constants vector. |
| 262 | "eigenvalue equation" | $A\vec{v} = \lambda\vec{v}$ → $\det(A - \lambda I) = 0$ | $\lambda$ = eigenvalue, $\vec{v}$ = eigenvector. |
| 263 | "characteristic polynomial" | $\det(A - \lambda I)$ | Roots are eigenvalues. |
| 264 | "trace", "$\operatorname{tr}(A)$" | Sum of diagonal entries. $\operatorname{tr}(A) = \sum \lambda_i$. | |
| 265 | "determinant as product of eigenvalues" | $\det(A) = \prod \lambda_i$ | |
| 266 | "diagonalization" | $A = PDP^{-1}$ where $D$ is diagonal matrix of eigenvalues, $P$ has eigenvectors as columns. | Only possible when $A$ has $n$ linearly independent eigenvectors. |
| 267 | "symmetric matrix" | $A^T = A$. Always diagonalizable with real eigenvalues and orthogonal eigenvectors. | |

### 11.2 Solving Linear Systems

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 268 | "Gaussian elimination", "row reduction" | Transform to row echelon form (REF) or reduced row echelon form (RREF) using elementary row operations. | Three operations: swap rows, multiply row by nonzero scalar, add multiple of one row to another. |
| 269 | "rank", "$\operatorname{rank}(A)$" | Number of pivots (leading 1's) in REF/RREF. | $\operatorname{rank}(A) + \operatorname{nullity}(A) = n$ (number of columns). |
| 270 | "homogeneous system" | $A\vec{x} = \vec{0}$. Always has trivial solution $\vec{x}=\vec{0}$. Nontrivial solutions exist iff $\det(A) = 0$. | |
| 271 | "linear independence" | Vectors $\vec{v}_1,\dots,\vec{v}_k$ are linearly independent iff $c_1\vec{v}_1 + \cdots + c_k\vec{v}_k = \vec{0}$ implies all $c_i = 0$. | |

---

## 12. Conic Sections — "The Four Classic Curves"

> **Core reflex:** "Circle," "ellipse," "parabola," "hyperbola" → standard form, key parameters.

| # | Trigger Phrase | Instant Equation / Technique | Exam Note |
|---|---------------|------------------------------|-----------|
| 272 | "circle" (center $(h,k)$, radius $r$) | $(x-h)^2 + (y-k)^2 = r^2$ | |
| 273 | "ellipse" (horizontal major axis) | $\dfrac{(x-h)^2}{a^2} + \dfrac{(y-k)^2}{b^2} = 1$, $a > b$ | Foci: $(\pm c, 0)$ where $c^2 = a^2 - b^2$. Eccentricity $e = c/a$. |
| 274 | "ellipse" (vertical major axis) | $\dfrac{(x-h)^2}{b^2} + \dfrac{(y-k)^2}{a^2} = 1$, $a > b$ | Foci: $(0, \pm c)$. |
| 275 | "parabola" (vertical axis) | $(x-h)^2 = 4p(y-k)$ | Vertex $(h,k)$, focus $(h, k+p)$, directrix $y = k-p$. |
| 276 | "parabola" (horizontal axis) | $(y-k)^2 = 4p(x-h)$ | Vertex $(h,k)$, focus $(h+p, k)$, directrix $x = h-p$. |
| 277 | "hyperbola" (horizontal transverse axis) | $\dfrac{(x-h)^2}{a^2} - \dfrac{(y-k)^2}{b^2} = 1$ | Foci: $(\pm c, 0)$ where $c^2 = a^2 + b^2$. Asymptotes: $y = \pm(b/a)x$. |
| 278 | "hyperbola" (vertical transverse axis) | $\dfrac{(y-k)^2}{a^2} - \dfrac{(x-h)^2}{b^2} = 1$ | |
| 279 | "eccentricity $e$" | Circle: $e=0$. Ellipse: $0<e<1$. Parabola: $e=1$. Hyperbola: $e>1$. | |
| 280 | "conic in general form" | $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$. Discriminant $B^2 - 4AC$: $<0$ → ellipse, $=0$ → parabola, $>0$ → hyperbola. | Complete the square to convert to standard form. |

---

## 13. The Implicit Information Catalog — "What the Problem Says Without Saying"

| # | Trigger Phrase | Hidden Value | Why It Matters |
|---|---------------|-------------|----------------|
| 281 | "tangent line" | Uses $f'(a)$ as slope. Equation: $y - f(a) = f'(a)(x-a)$. | |
| 282 | "normal line" | Slope = $-1/f'(a)$. Perpendicular to tangent. | |
| 283 | "horizontal tangent" | $f'(x) = 0$ | Critical point. |
| 284 | "vertical tangent" | $f'(x)$ undefined (denominator = 0 in $dy/dx$ for parametric). | |
| 285 | "increasing" / "decreasing" | $f'(x) > 0$ (increasing). $f'(x) < 0$ (decreasing). | |
| 286 | "relative maximum / minimum" | $f'(c) = 0$ or DNE; check sign change. | |
| 287 | "point of inflection" | $f''$ changes sign. | Concavity changes. |
| 288 | "concave up" / "concave down" | $f''(x) > 0$ (up). $f''(x) < 0$ (down). | |
| 289 | "displacement" vs "total distance" | Displacement: $\int v(t)\,dt$. Total distance: $\int |v(t)|\,dt$. | |
| 290 | "rate of change" | Derivative. "Rate of change of volume" = $dV/dt$. | |
| 291 | "accumulation" | Integral. "Water accumulated from $t=0$ to $t=5$" = $\int_0^5 \text{rate}\,dt$. | |
| 292 | "average rate of change" on $[a,b]$ | $\dfrac{f(b) - f(a)}{b-a}$ | Slope of secant line. |
| 293 | "instantaneous rate of change" at $x=a$ | $f'(a)$ | Slope of tangent line. |
| 294 | "orthogonal" / "perpendicular" (vectors) | $\vec{a} \cdot \vec{b} = 0$ | |
| 295 | "parallel" (vectors) | $\vec{a} = k\vec{b}$ for some scalar $k$. | Cross product = $\vec{0}$ (in 3D). |
| 296 | "work" (vector context) | $W = \vec{F} \cdot \vec{d}$ | Dot product of force and displacement vectors. |
| 297 | "smooth curve" | $f$ is differentiable with continuous derivative. | |
| 298 | "closed interval method" | Find absolute extrema on $[a,b]$: evaluate $f$ at critical points AND endpoints. | |
| 299 | "removable discontinuity" | $\lim_{x\to a} f(x)$ exists, but $f(a)$ is undefined or $f(a) \neq \lim f(x)$. | |
| 300 | "indeterminate form types" | $0/0$, $\infty/\infty$, $0\cdot\infty$, $\infty-\infty$, $0^0$, $\infty^0$, $1^\infty$ | Each type requires specific technique. $0/0$ and $\infty/\infty$ → L'Hôpital. Others → manipulate algebraically to reach $0/0$ or $\infty/\infty$. |

---

## 14. Cross-Domain Bridges — "When One Calculation Feeds Another"

> **These are problem architectures.** Domain A produces a variable (the bridge), which becomes the input to Domain B.

| # | Scenario | Domain A → Bridge → Domain B | Insight |
|---|---------|------------------------------|---------|
| 301 | Derivative → tangent line | $f'(a)$ (derivative at point) → $y - f(a) = f'(a)(x-a)$ (tangent line) | Most common two-domain chain in Calculus AB. |
| 302 | Integral → area between curves | Find intersection points (algebra) → $\int_a^b [f(x)-g(x)]\,dx$ (integral) | Must find limits of integration from Algebra domain. |
| 303 | Parametric → speed/velocity | $dx/dt$, $dy/dt$ (derivatives) → $|v| = \sqrt{(dx/dt)^2 + (dy/dt)^2}$ (vector magnitude) | |
| 304 | Implicit differentiation → slope at a point | $dy/dx$ from implicit diff → evaluate at $(x_0,y_0)$ → tangent line | |
| 305 | Related rates → chain rule chain | Write equation relating quantities (geometry/trig) → differentiate w.r.t. $t$ → solve for unknown rate | Multiple domains: geometry, trig, and derivatives. |
| 306 | Integral → volume | $A(x)$ from geometry → $\int A(x)\,dx$ → volume by known cross-section | |
| 307 | Series → function approximation | Taylor series expansion → truncate to degree $n$ → approximate $f(x)$ | Lagrange error bound gives accuracy. |
| 308 | Fundamental Theorem → accumulation function | Define $F(x) = \int_a^x f(t)\,dt$ → $F'(x) = f(x)$ → analyze $F$ using derivative tests | FTC bridges integrals and derivatives. |
| 309 | Differential equation → exponential model | $dy/dt = ky$ → $y = Ce^{kt}$ → predict future values | The DE is a derivative statement; the solution is a function. |
| 310 | Polar → Cartesian area | $r = f(\theta)$ → $x = r\cos\theta, y = r\sin\theta$ → convert bounds → $A = \frac{1}{2}\int r^2 d\theta$ | |
| 311 | Optimization → derivative = zero | Write quantity as $f(x)$ → $f'(x) = 0$ → find critical points → verify max/min | Calculus enables solving geometric/combinatorial optimization. |
| 312 | Vector → equation of plane | Normal vector $\vec{n} = \vec{a} \times \vec{b}$ → $ax+by+cz = d$ → distance formula | Cross product finds the normal; dot product gives the equation. |
| 313 | L'Hôpital → limit evaluation | Indeterminate form detected → $f'/g'$ → possibly repeat → find limit | The derivative feeds back into the limit problem. |
| 314 | Integration by parts → reduction formula | $\int fg' = fg - \int f'g$. Apply recursively → reduce power of polynomial. | Each application reduces the problem size. |
| 315 | Euler's method → approximate solution | $y' = f(x,y)$, $y(x_0) = y_0$ → $y_{n+1} = y_n + h f(x_n, y_n)$ → approximate $y(x)$ | Numerical bridge from DE to discrete approximation. |

---

## 15. Essential Constants & Values

| # | Item | Value |
|---|------|-------|
| 316 | $e$ (Euler's number) | $2.718281828\ldots$ |
| 317 | $\pi$ | $3.141592653\ldots$ |
| 318 | $\ln 2$ | $\approx 0.693147$ |
| 319 | $\ln 10$ | $\approx 2.302585$ |
| 320 | $\sqrt{2}$ | $\approx 1.414214$ |
| 321 | $\sqrt{3}$ | $\approx 1.732051$ |
| 322 | $\sin 30^\circ = \sin(\pi/6)$ | $1/2$ |
| 323 | $\sin 45^\circ = \sin(\pi/4)$ | $\sqrt{2}/2$ |
| 324 | $\sin 60^\circ = \sin(\pi/3)$ | $\sqrt{3}/2$ |
| 325 | $\cos 30^\circ = \cos(\pi/6)$ | $\sqrt{3}/2$ |
| 326 | $\cos 45^\circ = \cos(\pi/4)$ | $\sqrt{2}/2$ |
| 327 | $\cos 60^\circ = \cos(\pi/3)$ | $1/2$ |
| 328 | $\tan 30^\circ$ | $1/\sqrt{3}$ |
| 329 | $\tan 45^\circ$ | $1$ |
| 330 | $\tan 60^\circ$ | $\sqrt{3}$ |

---

## Quick Domain Lookup

| Domain | Cards | Signature Trigger Words |
|--------|-------|------------------------|
| 1. Algebra & Functions | 1–38 | solve, factor, quadratic, domain, range, inverse, log, ln, asymptote |
| 2. Trigonometry | 39–73 | sin, cos, tan, triangle, identity, amplitude, period, SOH-CAH-TOA |
| 3. Limits & Continuity | 74–90 | limit, approaches, continuous, indeterminate, IVT, squeeze |
| 4. Derivatives | 91–124 | derivative, differentiate, rate of change, slope, product rule, chain rule, implicit |
| 5. Integrals | 125–160 | integrate, antiderivative, area, volume, FTC, substitution, by parts |
| 6. Sequences & Series | 161–188 | sequence, series, converge, diverge, Taylor, Maclaurin, power series |
| 7. Vectors, Parametric & Polar | 189–211 | vector, dot product, cross product, parametric, polar, arc length |
| 8. Differential Equations | 212–220 | DE, differential equation, general solution, separable, Euler's method |
| 9. Probability & Statistics | 221–243 | probability, mean, variance, normal, binomial, confidence interval |
| 10. Complex Numbers | 244–253 | $i$, complex, modulus, argument, De Moivre, roots of unity |
| 11. Matrices & Linear Algebra | 254–271 | matrix, determinant, inverse, eigenvalue, rank, diagonalize |
| 12. Conic Sections | 272–280 | circle, ellipse, parabola, hyperbola, eccentricity, conic |
| 13. Implicit Information | 281–300 | tangent, normal, critical point, inflection, rate of change, accumulation |
| 14. Cross-Domain Bridges | 301–315 | bridge, chain, multi-step, optimization |
| 15. Constants | 316–330 | $e$, $\pi$, special angles |

---

> **The exam is won before you enter the room.** Three hundred thirty cards have trained one reflex: see a phrase → write the equation or technique. When the problem says "find the derivative of $\sin(3x^2)$," your hand writes $\cos(3x^2) \cdot 6x$ before your eyes reach the semicolon. When it says "interval of convergence," the ratio test is already set up on the page.
>
> Drill the cards. Cycle through all domains every two weeks. The equations will be on the paper before you finish reading the problem.
>
> **If you can calculate it, you have understood it.**
