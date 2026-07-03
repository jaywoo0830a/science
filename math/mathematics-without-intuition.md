# Mathematics Without Intuition

## A Mechanical System for Solving Mathematics Problems After the Flashcard Deck

---

## Prologue

You have memorized 330 cards from `honors-mathematics-expression-to-equation-vocabulary.md`. When a problem says "derivative," the power rule, product rule, and chain rule fire simultaneously — and your hand has already written the first line before your eyes find the semicolon. When it says "integrate," $u$-substitution and integration by parts stand ready, and you choose by pattern recognition, not deliberation. When it says "converge or diverge," the $n$th term test runs first, then the ratio test if factorials are present, then the limit comparison test.

You do not need this document to tell you which equation to use. The cards have already told you.

What you need is a **mechanical procedure for connecting cards.** A single mathematics problem fires 3, 5, or 10 cards across multiple domains. Your task is not to find equations — it is to trace every trigger phrase to its card, write the equation or technique the card demands, chain the cards when domains cross, and verify with dimensional analysis, special cases, and sign checks.

**Difficulty = number of cards fired.** A Level-1 problem fires 2–3 cards. A Level-4 Olympiad problem fires 8–12. The method is identical either way.

---

# Part 0: The Four Contracts

Before you touch a single equation, you make four commitments. These are not mathematics. They are contracts with yourself. They prevent sign errors, domain errors, and the most dangerous error of all — solving for the wrong variable.

---

## §0.1 The Algebraic Discipline

Fill in the following before every problem:

```
Variable to solve for: _______________
Domain constraints:    _______________  (x > 0? denominator ≠ 0? arg of log > 0?)
Special values:        _______________  (π/2 where tan is undefined? x=0 where ln is undefined?)
Final form required:   _______________  (exact? decimal? simplified? factored?)
```

**Rule 1 (Variable):** Circle the quantity the problem asks for. Every algebraic manipulation must bring you closer to isolating it.

**Rule 2 (Domain):** Mathematics is full of implicit domain restrictions. Denominators cannot be zero. Arguments of logarithms must be positive. Radicands of even roots must be non-negative. Arguments of arcsin and arccos must be in $[-1,1]$. Write these constraints *before* solving — they will eliminate extraneous solutions at the end.

**Rule 3 (Special values):** Trigonometric functions blow up at certain angles. Rational functions have asymptotes. Know where your function is undefined before you manipulate it.

**Rule 4 (Form):** The AP exam and most contests want exact answers (with $\pi$, $\sqrt{2}$, $e$, etc.) unless otherwise specified. Decimal approximations are for the final box only.

---

## §0.2 Dimensional & Type Analysis

Mathematics has its own version of dimensional analysis. Every quantity you compute has a *type* and a *reasonable magnitude*.

| Quantity Type | Example | Sanity Check |
|--------------|---------|--------------|
| Probability | Must be in $[0,1]$ | $P(A) = 1.2$ → immediately wrong |
| Sine/Cosine | Must be in $[-1,1]$ | $\sin\theta = 2$ → no real solution |
| Correlation coefficient $r$ | Must be in $[-1,1]$ | |
| Length, area, volume | Must be positive | Negative area → sign error somewhere |
| $z$-score | Typically in $[-3,3]$ | $z = 10$ → extraordinary outlier |
| Derivative at a point | Slope — any real number | But if the function is increasing, derivative must be positive |
| Definite integral of positive $f$ | Must be positive | If $f(x) \ge 0$ and $a < b$, $\int_a^b f(x)dx \ge 0$ |
| Convergence radius $R$ | $R \ge 0$ | $R < 0$ is impossible |

**The type check (after every solution):** Does my answer have the right *kind* of value? A probability outside $[0,1]$ is wrong. A negative length is wrong. A derivative that disagrees with the graph's slope is wrong. Fix it before boxing.

---

## §0.3 The Variable Table

Before you think about any problem, draw this:

```
| Variable | Symbol | Value | Constraint | Source |
|----------|--------|-------|------------|--------|
```

Rules:
1. Every number from the problem gets a row. Include its unit if applicable.
2. The unknown gets `?` in the Value cell.
3. **Implicit constraints get rows.** "Denominator" → $\neq 0$. "Logarithm" → argument $> 0$. "Square root" → radicand $\ge 0$.
4. Every solution must be checked against ALL constraints.

---

## §0.4 The Trigger Trace

This is the core of the method. You do not "look up" formulas. You recognize trigger phrases and fire cards. A **Trigger Trace** records every card that fired.

### Extraction Algorithm

Execute these four passes mechanically:

1. **Read once.** No pencil. Gather the gist in five words or fewer.
2. **Extract numbers.** Every number → Variable Table (§0.3).
3. **Fire cards.** Underline every trigger phrase. For each one, write the card number and its instant equation/technique. The set of cards that fire tells you the problem's architecture.
4. **Identify the unknown.** Mark `?` in the Variable Table.

### Worked Extraction

> *"Find the equation of the tangent line to $f(x) = x^3 - 3x + 2$ at $x = 1$."*

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "tangent line" | 120 | $y - f(a) = f'(a)(x-a)$ |
| "$x^3 - 3x + 2$" → derivative needed | 92, 93, 94 | $f'(x) = 3x^2 - 3$ (power rule, sum/difference) |
| "at $x=1$" | — | Evaluate $f(1)$ and $f'(1)$ |

**Cards fired: 92, 93, 94, 120.** Domain: derivatives, tangent lines.

**Every worked example in this document begins with a Trigger Trace.** It is the bridge between your flashcard training and problem-solving.

---

# Part I: The I-SEE-R Protocol

Every problem in this document — single-domain or Olympiad synthesis — uses the same five-step protocol.

| Step | Name | Action |
|------|------|--------|
| **I** | Identify | Run the 4-pass extraction (§0.4). Produce: algebraic discipline sheet, variable table, trigger trace. |
| **S** | Simplify | Cross out what does not matter. Is the function continuous on the interval? Is it differentiable? Is the series positive-term? Can symmetry reduce the work? |
| **E** | Equation | Write every equation/technique from your trigger trace. Do not choose — the cards already chose. If multiple cards fired, write them all and chain them. |
| **E** | Execute | Substitute numbers. Solve algebraically. Keep symbols until the last possible moment. |
| **R** | Reflect | Four checks: (1) domain constraints satisfied? (2) type check passes (probability in $[0,1]$, etc.)? (3) one special case behaves correctly? (4) sign makes mathematical sense? |

The **E — Equation** step used to be the hardest part of mathematics. For you, it is the easiest. The trigger phrase fires the card. The card demands the equation or technique. You write it. The only remaining skill is chaining cards when a single problem spans multiple domains — and that is what Part V teaches.

---

# Part II: Calculus — Five Examples

## Example 1: Tangent Line

> Find the equation of the tangent line to $f(x) = x^3 - 3x + 2$ at $x = 1$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "tangent line" | 120 | $y - f(a) = f'(a)(x-a)$ |
| "$x^3 - 3x + 2$" (need derivative) | 92, 93, 94 | $f'(x) = 3x^2 - 3$ |
| "at $x = 1$" | — | $a = 1$ |

**Cards fired: 92, 93, 94, 120.** Domain: derivatives. Straightforward: find $f(1)$, $f'(1)$, plug into tangent line formula.

### Algebraic Discipline

```
Variable to solve for: equation of tangent line (y = mx + b form)
Domain constraints:    none (polynomial — smooth everywhere)
Special values:        none
Final form required:   y = mx + b (or point-slope)
```

### I-SEE-R

**S — Simplify.** $f(x)$ is a polynomial — differentiable everywhere, no domain restrictions.

**E — Equation.** Card 120: tangent line is $y - f(a) = f'(a)(x-a)$.

Cards 92, 93, 94: $f'(x) = 3x^2 - 3$ (power rule on each term, sum rule).

**E — Execute.**
$$f(1) = 1^3 - 3(1) + 2 = 0$$
$$f'(1) = 3(1)^2 - 3 = 0$$

The slope is zero — a horizontal tangent. Card 283 confirms: horizontal tangent means $f'(x) = 0$, which we have at $x=1$.

$$y - 0 = 0(x - 1) \quad\Rightarrow\quad y = 0$$

**R — Reflect.**
- *Graphical check:* $f(x) = x^3 - 3x + 2 = (x-1)^2(x+2)$. At $x=1$, there's a double root (the graph touches the $x$-axis and turns around). A horizontal tangent at a double root is expected. ✓
- *Sign check:* The derivative changes from negative to positive at $x=1$? $f'(0.9) = 3(0.81) - 3 = -0.57$ (negative). $f'(1.1) = 3(1.21) - 3 = 0.63$ (positive). The function decreases then increases — $x=1$ is a local minimum. The tangent is horizontal. ✓

**Answer: $y = 0$ (horizontal tangent line).**

---

## Example 2: Definite Integral with $u$-Substitution

> Evaluate $\displaystyle\int_0^{\pi/4} \sin 2x \cos 2x \, dx$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "integrate" / "definite integral" | 147, 148 | FTC: find antiderivative, evaluate at bounds |
| "$\sin 2x \cos 2x$" | 145 | Trig integral: use identity or $u$-sub |
| Double-angle identity useful? | 60 | $\sin 2\theta = 2\sin\theta\cos\theta$ → $\sin 2x\cos 2x = \frac{1}{2}\sin 4x$ |

**Cards fired: 60, 125, 130, 140, 148.** Domain: integrals. Two paths: $u$-substitution or trig identity.

### I-SEE-R

**S — Simplify.** Card 60 provides a powerful simplification. $\sin 2x \cos 2x = \frac{1}{2}\sin 4x$. This reduces the integral to a basic form.

**E — Equation.** Rewrite using Card 60:

$$\int_0^{\pi/4} \sin 2x \cos 2x \, dx = \int_0^{\pi/4} \frac{1}{2}\sin 4x \, dx$$

Now Card 130 and basic $u$-sub (Card 140): $\int \sin(ax)dx = -\frac{1}{a}\cos(ax) + C$.

**E — Execute.**
$$\frac{1}{2}\int_0^{\pi/4} \sin 4x \, dx = \frac{1}{2}\left[-\frac{1}{4}\cos 4x\right]_0^{\pi/4}$$
$$= -\frac{1}{8}\left[\cos 4x\right]_0^{\pi/4} = -\frac{1}{8}(\cos\pi - \cos 0) = -\frac{1}{8}(-1 - 1) = -\frac{1}{8}(-2) = \frac{1}{4}$$

**R — Reflect.**
- *Alternative path ($u$-substitution):* Let $u = \sin 2x$, $du = 2\cos 2x\,dx$. Then $\int \sin 2x\cos 2x\,dx = \frac{1}{2}\int u\,du = \frac{1}{4}u^2 = \frac{1}{4}\sin^2 2x$. At $x=\pi/4$: $\frac{1}{4}\sin^2(\pi/2) = \frac{1}{4}$. At $x=0$: $0$. Answer: $1/4$. Both paths agree. ✓
- *Type check:* The integrand $\sin 2x\cos 2x$ is positive on $[0, \pi/4]$ (both sin and cos are positive). The integral must be positive — and $1/4 > 0$. ✓

**Answer: $\dfrac{1}{4}$.**

---

## Example 3: Related Rates

> A spherical balloon is inflated at $100\;\mathrm{cm^3/s}$. How fast is the radius increasing when the radius is $5\;\mathrm{cm}$?

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "spherical balloon" | — | $V = \frac{4}{3}\pi r^3$ |
| "inflated at 100 cm³/s" | 108, 290 | $dV/dt = 100$ (rate of change) |
| "How fast is radius increasing?" | 108 | $dr/dt$ is the TARGET |
| "when radius is 5 cm" | — | $r = 5$ at that instant |

**Cards fired: 108, 290.** Domain: derivatives, related rates.

### Algebraic Discipline

```
Variable to solve for: dr/dt (rate of change of radius)
Domain constraints:    r > 0
Special values:        none
Final form required:   cm/s
```

### I-SEE-R

**S — Simplify.** One equation ($V = \frac{4}{3}\pi r^3$) relates the two quantities. Differentiate with respect to time.

**E — Equation.** Card 108: differentiate BOTH sides with respect to $t$.

$$\frac{dV}{dt} = \frac{d}{dt}\left(\frac{4}{3}\pi r^3\right) = 4\pi r^2 \cdot \frac{dr}{dt}$$

**E — Execute.** Solve for $dr/dt$:

$$\frac{dr}{dt} = \frac{dV/dt}{4\pi r^2} = \frac{100}{4\pi(5)^2} = \frac{100}{100\pi} = \frac{1}{\pi}\;\mathrm{cm/s}$$

**R — Reflect.**
- *Type check:* $dr/dt$ is a rate of length change — cm/s. The answer $1/\pi \approx 0.318\;\mathrm{cm/s}$ is physically plausible for a balloon. ✓
- *Intuitive check:* As the balloon gets bigger ($r$ increases), the same volume inflow produces less radius growth (because surface area $4\pi r^2$ gets larger). The formula $dr/dt \propto 1/r^2$ captures this. ✓
- *Limiting case:* As $r \to \infty$, $dr/dt \to 0$ — an enormous balloon's radius barely changes. As $r \to 0$, $dr/dt \to \infty$ — at the very start, the radius grows explosively fast. Both limits match physical intuition. ✓

**Answer: $\dfrac{1}{\pi}\;\mathrm{cm/s} \approx 0.318\;\mathrm{cm/s}$.**

---

## Example 4: Convergence of a Series

> Determine whether $\displaystyle\sum_{n=1}^{\infty} \dfrac{3^n}{n!}$ converges or diverges.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "converges or diverges" | — | Test the series |
| Factorial $n!$ in denominator | 172 | Ratio test (best for factorials) |
| $3^n$ in numerator | 172 | Ratio test also handles exponentials well |

**Cards fired: 167, 172.** Domain: series. The ratio test (Card 172) is designed for exactly this kind of series.

### I-SEE-R

**S — Simplify.** Terms are positive. Ratio test is the natural choice.

**E — Equation.** Card 172: $\lim_{n\to\infty} \left|\dfrac{a_{n+1}}{a_n}\right| = L$.

$$a_n = \frac{3^n}{n!}, \quad a_{n+1} = \frac{3^{n+1}}{(n+1)!}$$

$$\frac{a_{n+1}}{a_n} = \frac{3^{n+1}}{(n+1)!} \cdot \frac{n!}{3^n} = \frac{3 \cdot 3^n}{(n+1)n!} \cdot \frac{n!}{3^n} = \frac{3}{n+1}$$

$$L = \lim_{n\to\infty} \frac{3}{n+1} = 0$$

**E — Execute.** $L = 0 < 1$. By the ratio test (Card 172), the series converges absolutely.

**R — Reflect.**
- *$n$th term test first (Card 167):* $\lim_{n\to\infty} 3^n/n! = 0$ (factorial dominates exponential). The $n$th term test is INCONCLUSIVE (terms → 0 does NOT guarantee convergence — recall the harmonic series). The ratio test was necessary. ✓
- *Recognize the series:* $\sum 3^n/n! = e^3$ (Card 181: Maclaurin series for $e^x$ with $x=3$). The series converges to $e^3 \approx 20.086$. ✓
- *General principle:* Factorials in the denominator overwhelm any exponential in the numerator. $\sum a^n/n!$ converges for ALL real $a$ (radius of convergence $R = \infty$). ✓

**Answer: Converges (absolutely). The sum is $e^3$.**

---

## Example 5: Optimization

> Find the dimensions of a rectangle with perimeter $100\;\mathrm{m}$ that maximizes area.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "maximizes" | 117 | Optimization: write quantity → one-variable function → critical points → test |
| "perimeter 100 m" | — | $2x + 2y = 100$ → $y = 50 - x$ |
| "area" of rectangle | — | $A = xy$ |

**Cards fired: 111, 113, 117.** Domain: derivatives, optimization.

### Algebraic Discipline

```
Variable to solve for: x and y (length and width)
Domain constraints:    x > 0, y > 0, so 0 < x < 50
Special values:        x = 0 (degenerate), x = 50 (degenerate)
Final form required:   dimensions in meters
```

### I-SEE-R

**S — Simplify.** Two variables $(x, y)$ but only one degree of freedom (perimeter constraint). Reduce to one variable.

**E — Equation.** Perimeter: $2x + 2y = 100$ → $y = 50 - x$.

Area as a function of $x$ alone: $A(x) = x(50 - x) = 50x - x^2$.

Card 117 step: $A'(x) = 50 - 2x$. Set to zero (Card 111): $x = 25$.

**E — Execute.** $x = 25$ → $y = 50 - 25 = 25$. Area = $25 \times 25 = 625\;\mathrm{m^2}$.

Second derivative test (Card 113): $A''(x) = -2 < 0$ → concave down → this is a MAXIMUM.

Check endpoints: $x \to 0^+$: $A \to 0$. $x \to 50^-$: $A \to 0$. The critical point gives the maximum.

**R — Reflect.**
- *Symmetry:* The problem is symmetric in $x$ and $y$. The maximum of a symmetric function under a linear constraint should occur at the symmetric point $x = y$. The square is the rectangle of maximum area for a given perimeter. ✓
- *Generalization:* For a fixed perimeter, area is maximized by a square. For a fixed area, perimeter is minimized by a square. These are dual optimization problems. ✓

**Answer: $25\;\mathrm{m} \times 25\;\mathrm{m}$ (a square). Maximum area = $625\;\mathrm{m^2}$.**

---

# Part III: Integration Techniques — Two Examples

## Example 6: Integration by Parts

> Evaluate $\displaystyle\int x e^x \, dx$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "integrate" / "$\int x e^x$" | 141 | Integration by parts: $\int u\,dv = uv - \int v\,du$ |
| Polynomial $x$ times exponential $e^x$ | 141 | LIATE: $u = x$ (Algebraic before Exponential) |

**Cards fired: 103, 127, 141.** Domain: integrals, integration by parts.

### I-SEE-R

**S — Simplify.** LIATE rule (Card 141): Logarithmic → Inverse trig → Algebraic → Trigonometric → Exponential. $x$ is Algebraic, $e^x$ is Exponential. Choose $u = x$ (differentiates to 1, simplifying the integral).

**E — Equation.** Card 141: $\int u\,dv = uv - \int v\,du$.

$u = x$ → $du = dx$. $dv = e^x dx$ → $v = e^x$ (Card 127).

**E — Execute.**
$$\int x e^x\,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = e^x(x-1) + C$$

**R — Reflect.**
- *Verification by differentiation:* $\frac{d}{dx}[e^x(x-1)] = e^x(x-1) + e^x(1) = x e^x$. ✓
- *What if we reversed LIATE?* If $u = e^x$, $dv = x dx$: $du = e^x dx$, $v = x^2/2$. Then $\int x e^x dx = \frac{1}{2}x^2 e^x - \int \frac{1}{2}x^2 e^x dx$ — the integral got *harder* (power of $x$ increased). LIATE is correct. ✓

**Answer: $e^x(x-1) + C$.**

---

## Example 7: Trigonometric Substitution

> Evaluate $\displaystyle\int \dfrac{1}{\sqrt{4 - x^2}}\,dx$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "$\sqrt{4 - x^2}$" / "$\sqrt{a^2 - x^2}$" | 142 | Trig substitution: $x = a\sin\theta$ |
| $a^2 = 4$ → $a = 2$ | 142 | $x = 2\sin\theta$, $dx = 2\cos\theta\,d\theta$ |

**Cards fired: 135, 142.** Domain: integrals, trig substitution.

### I-SEE-R

**S — Simplify.** The radical $\sqrt{a^2 - x^2}$ signals $x = a\sin\theta$ (Card 142). This substitution eliminates the square root using $1 - \sin^2\theta = \cos^2\theta$.

**E — Equation.** Card 142: $x = 2\sin\theta$, $dx = 2\cos\theta\,d\theta$.

$$\sqrt{4 - x^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4\cos^2\theta} = 2|\cos\theta|$$

For $\theta \in (-\pi/2, \pi/2)$, $\cos\theta > 0$, so $|\cos\theta| = \cos\theta$.

**E — Execute.**
$$\int \frac{1}{\sqrt{4 - x^2}}\,dx = \int \frac{1}{2\cos\theta} \cdot 2\cos\theta\,d\theta = \int d\theta = \theta + C$$

Now back-substitute: $x = 2\sin\theta$ → $\theta = \arcsin(x/2)$.

$$\int \frac{1}{\sqrt{4 - x^2}}\,dx = \arcsin\left(\frac{x}{2}\right) + C$$

**R — Reflect.**
- *Direct recognition (Card 135):* $\int \frac{1}{\sqrt{a^2 - x^2}}dx = \arcsin(x/a) + C$. With $a=2$, this is $\arcsin(x/2) + C$. The trig substitution derived the formula. If you had Card 135 memorized, you could skip straight to the answer. ✓
- *Domain check:* The integrand is defined for $|x| < 2$. The antiderivative $\arcsin(x/2)$ is also defined for $|x| \le 2$. ✓

**Answer: $\arcsin\left(\dfrac{x}{2}\right) + C$.**

---

# Part IV: Sequences, Series & Polar — Two Examples

## Example 8: Taylor Series

> Find the Maclaurin series for $f(x) = e^{-x^2}$ up to the $x^6$ term.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "Maclaurin series" | 180 | $f(x) = \sum f^{(n)}(0)x^n/n!$ |
| "$e^{-x^2}$" | 181 | $e^u = 1 + u + u^2/2! + u^3/3! + \cdots$ |

**Cards fired: 180, 181.** Domain: series. Direct differentiation is possible but Card 181 (substitution) is far faster.

### I-SEE-R

**S — Simplify.** Card 181: $e^u = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \cdots$. Substitute $u = -x^2$. This is valid because the series for $e^u$ converges for all real $u$.

**E — Execute.**
$$e^{-x^2} = 1 + (-x^2) + \frac{(-x^2)^2}{2!} + \frac{(-x^2)^3}{3!} + \cdots$$
$$= 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots$$

**R — Reflect.**
- *Why substitution works:* The Maclaurin series for $e^u$ is a power series with $R = \infty$. Substituting any function for $u$ yields a valid series as long as the composition makes sense. For $u = -x^2$, we get an even function's series (only even powers). ✓
- *Direct method check:* $f'(x) = -2x e^{-x^2}$, $f''(x) = (4x^2-2)e^{-x^2}$, $f'''(x) = (-8x^3+12x)e^{-x^2}$, etc. Evaluating at 0: $f(0)=1$, $f'(0)=0$, $f''(0)=-2$, $f'''(0)=0$, $f^{(4)}(0)=12$, $f^{(5)}(0)=0$, $f^{(6)}(0)=-120$. Then: $1 + 0 - 2x^2/2! + 0 + 12x^4/4! + 0 - 120x^6/6! = 1 - x^2 + x^4/2 - x^6/6$. Same result. ✓

**Answer: $e^{-x^2} = 1 - x^2 + \dfrac{x^4}{2} - \dfrac{x^6}{6} + \cdots$.**

---

## Example 9: Polar Area

> Find the area enclosed by one petal of the rose curve $r = 3\sin(2\theta)$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "polar curve area" | 208 | $A = \frac{1}{2}\int_{\alpha}^{\beta} r^2\,d\theta$ |
| "$r = 3\sin(2\theta)$" | — | Rose curve: 4 petals; one petal from $\theta=0$ to $\pi/2$ |
| "one petal" | — | Find bounds where $r=0$ |

**Cards fired: 208.** Domain: polar coordinates.

### I-SEE-R

**S — Simplify.** The rose $r = 3\sin(2\theta)$ has 4 petals. $r=0$ when $\sin(2\theta)=0$ → $2\theta = 0, \pi$ → $\theta = 0, \pi/2$. One petal spans $\theta \in [0, \pi/2]$.

**E — Equation.** Card 208: $A = \frac{1}{2}\int_0^{\pi/2} (3\sin 2\theta)^2\,d\theta$.

**E — Execute.**
$$A = \frac{1}{2}\int_0^{\pi/2} 9\sin^2 2\theta\,d\theta = \frac{9}{2}\int_0^{\pi/2} \sin^2 2\theta\,d\theta$$

Card 65 (power-reducing): $\sin^2 2\theta = \frac{1 - \cos 4\theta}{2}$.

$$A = \frac{9}{2}\int_0^{\pi/2} \frac{1 - \cos 4\theta}{2}\,d\theta = \frac{9}{4}\int_0^{\pi/2} (1 - \cos 4\theta)\,d\theta$$
$$= \frac{9}{4}\left[\theta - \frac{1}{4}\sin 4\theta\right]_0^{\pi/2} = \frac{9}{4}\left(\frac{\pi}{2} - 0\right) = \frac{9\pi}{8}$$

**R — Reflect.**
- *Total area check:* 4 petals × $9\pi/8 = 9\pi/2$. The rose is inscribed in a circle of radius 3 (area $9\pi$). $9\pi/2 \approx 14.14$ is less than $9\pi \approx 28.27$ — the rose occupies about half the circumscribing circle. Plausible. ✓
- *Symmetry:* The petal from 0 to $\pi/2$ is traced exactly once. Always check that the curve doesn't retrace itself over the integration bounds. ✓

**Answer: $\dfrac{9\pi}{8}$ square units per petal.**

---

# Part V: The Bridge Protocol — When Domains Chain

Mathematics problems rarely stay in one domain. AP Calculus and Olympiad problems chain domains: algebra produces intersection points that become limits of integration; derivatives produce slopes that become tangent lines; series produce approximations whose error is bounded by Lagrange remainders.

The vocabulary deck dedicates Cards 301–315 to these cross-domain bridges. They do not contain new mathematics. They describe *architectures* — the structure of synthesis problems. Your job: recognize which bridge card your problem matches, then execute the chain.

### The Bridge Recognition Algorithm

When a problem describes two or more distinct mathematical operations, ask one question: **"What does the first operation produce that the second operation needs?"** That quantity is the bridge variable.

| First operation produces… | Bridge variable | Second operation uses it to… | Bridge Card |
|--------------------------|----------------|------------------------------|-------------|
| Derivative at a point | $f'(a)$ (slope) | Write tangent line equation | 301 |
| Intersection points (algebra) | $a$, $b$ (bounds) | Set up definite integral for area | 302 |
| $dx/dt$, $dy/dt$ (derivatives) | $|v|$ (speed) | Compute speed in parametric motion | 303 |
| $dy/dx$ (implicit diff) | Slope at point | Write tangent line equation | 304 |
| $A(x)$ (cross-section area) | Integrand | Compute volume | 306 |
| Taylor polynomial | Approximation | Estimate $f(x)$; bound error with Lagrange | 307 |
| $F'(x) = f(x)$ (FTC) | Derivative of accumulation | Analyze where $F$ is increasing/decreasing | 308 |
| $f'(x) = 0$ (critical points) | Candidates for max/min | Evaluate $f$ to find absolute extremum | 311 |
| $\vec{n}$ (cross product) | Normal vector | Write equation of plane; compute distance | 312 |
| Indeterminate form | New limit expression | Apply L'Hôpital again or algebraically simplify | 313 |

---

### Bridge Worked Example: Area Between Curves

> Find the area of the region bounded by $y = x^2$ and $y = 2x$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "area between curves" | 152 | $A = \int_a^b [f(x) - g(x)]\,dx$ |
| "bounded by $y = x^2$ and $y = 2x$" | 1 (quadratic), 302 (intersection) | Solve $x^2 = 2x$ for bounds |

**Cards fired: 1, 152, 302.** Two domains: algebra (find intersection points) → integration (compute area).

### I-SEE-R

**S — Simplify.** Which curve is on top? For $x \in (0,2)$, $2x > x^2$ (since $2x - x^2 = x(2-x) > 0$). So $f(x) = 2x$, $g(x) = x^2$.

**E — Equation (Domain A: Algebra).** Card 1/302: intersection points where $x^2 = 2x$ → $x^2 - 2x = 0$ → $x(x-2) = 0$ → $x = 0, 2$.

**Bridge:** Intersection points $(0,0)$ and $(2,4)$ become the limits of integration: $a=0$, $b=2$.

**Equation (Domain B: Integration).** Card 152: $A = \int_0^2 (2x - x^2)\,dx$.

**E — Execute.**
$$A = \left[x^2 - \frac{x^3}{3}\right]_0^2 = \left(4 - \frac{8}{3}\right) - 0 = \frac{12 - 8}{3} = \frac{4}{3}$$

**R — Reflect.**
- *Type check:* Area must be positive. $4/3 > 0$. ✓
- *Geometric check:* The region is roughly triangular, base 2, height $y=2x$ at $x=2$ gives 4, but the parabola cuts into it. Area = $\frac{4}{3}$ is less than the triangle area ($\frac{1}{2} \times 2 \times 4 = 4$). Plausible. ✓
- *Integration shortcut check:* $\int_0^2 x^2 dx = 8/3$. The rectangle $2 \times 4 = 8$ minus the area above the line and below the parabola... No — the simpler check is that the integral of the difference equals the difference of the integrals (linearity). ✓

**Answer: $\dfrac{4}{3}$ square units.**

---

### Bridge Worked Example: FTC Accumulation Function

> Let $F(x) = \int_0^x \sin(t^2)\,dt$. On what intervals is $F$ increasing?

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "$F(x) = \int_a^x f(t)\,dt$" | 147 | $F'(x) = f(x)$ (FTC Part 1) |
| "increasing" | 285 | $F'(x) > 0$ |
| "$\sin(t^2)$" | — | $F'(x) = \sin(x^2)$ |

**Cards fired: 147, 285, 308.** Domain: integrals (FTC) + derivatives (increasing/decreasing).

### I-SEE-R

**S — Simplify.** FTC Part 1 (Card 147): The derivative of an accumulation function is the integrand evaluated at the upper limit. $F'(x) = \sin(x^2)$.

**E — Equation.** Card 285: $F$ is increasing when $F'(x) > 0$. So $\sin(x^2) > 0$.

**E — Execute.** $\sin(x^2) > 0$ when $x^2 \in (0, \pi) \cup (2\pi, 3\pi) \cup (4\pi, 5\pi) \cup \cdots$

$x^2 \in (0, \pi)$ → $x \in (-\sqrt{\pi}, 0) \cup (0, \sqrt{\pi})$.

$x^2 \in (2\pi, 3\pi)$ → $x \in (-\sqrt{3\pi}, -\sqrt{2\pi}) \cup (\sqrt{2\pi}, \sqrt{3\pi})$.

And so on. Since the problem likely considers $x \ge 0$ (the lower limit is 0), we focus on $x > 0$:

$$F \text{ is increasing on } (0, \sqrt{\pi}) \cup (\sqrt{2\pi}, \sqrt{3\pi}) \cup (\sqrt{4\pi}, \sqrt{5\pi}) \cup \cdots$$

**R — Reflect.**
- *What is $F(x)$?* $F(x)$ is the Fresnel integral — it accumulates signed area under $\sin(t^2)$. It oscillates, increasing where the integrand is positive and decreasing where it's negative. ✓
- *No elementary antiderivative:* $\int \sin(t^2)dt$ cannot be expressed in terms of elementary functions. But FTC Part 1 gives us the derivative without needing the antiderivative — this is the entire point of the theorem. ✓

**Answer: $F$ is increasing where $\sin(x^2) > 0$, i.e., for $x>0$ on $(0,\sqrt{\pi})$, $(\sqrt{2\pi},\sqrt{3\pi})$, $(\sqrt{4\pi},\sqrt{5\pi})$, etc.**

---

# Part VI: The Variable-Group Method (Mathematics Version)

Some math problems give you information about the *middle* of a function's behavior and ask about its *beginning* or *end*. This is the mathematics analog of the physics "window problem." The Variable-Group Method solves it mechanically.

### The Six Phases

| Phase | Action | Mechanical Question |
|-------|--------|---------------------|
| 0 | **Recognize** that grouping is needed | Can I write one equation containing ALL givens AND the target? If no → group. |
| 1 | **Partition** into contexts | "Which numbers describe the same thing?" |
| 2 | **Build mini tables** | Each context gets its own variable table |
| 3 | **Find the richest context** | Count KNOWN cells. Solve the context with the most knowns first. |
| 4 | **Solve the richest context** | Use the card that matches the trigger phrase in that context. |
| 5 | **Transfer the bridge** | Does the variable just found appear in another context's table? Copy it. |
| 6 | **Repeat until target is KNOWN** | |

---

### Worked Example: The Differential Equation Chain

> A particle moves along the $x$-axis with acceleration $a(t) = 6t - 2$. At $t=0$, its velocity is $5$ and position is $3$. Find its position at $t=2$.

### Trigger Trace

| Trigger Phrase | Card | Instant Equation / Technique |
|---------------|------|------------------------------|
| "acceleration $a(t)$" | 124 | $a(t) = v'(t) = s''(t)$ |
| "velocity is 5 at $t=0$" | — | $v(0) = 5$ (initial condition) |
| "position is 3 at $t=0$" | — | $s(0) = 3$ (initial condition) |
| "position at $t=2$" | 149 (net change) | $s(2) = s(0) + \int_0^2 v(t)\,dt$ |

**Cards fired: 124, 125, 149.** Two contexts: velocity (from acceleration) and position (from velocity). The bridge is $v(t)$.

### I-SEE-R

**S — Simplify.** This is a chained antidifferentiation problem. $a \to v \to s$.

**Context 1: Acceleration → Velocity.**

$v(t) = \int a(t)\,dt = \int (6t - 2)\,dt = 3t^2 - 2t + C$.

$v(0) = 5$ → $C = 5$. So $v(t) = 3t^2 - 2t + 5$.

**Bridge:** $v(t)$ is now fully known. Pass it to Context 2.

**Context 2: Velocity → Position.**

$s(t) = \int v(t)\,dt = \int (3t^2 - 2t + 5)\,dt = t^3 - t^2 + 5t + D$.

$s(0) = 3$ → $D = 3$. So $s(t) = t^3 - t^2 + 5t + 3$.

**E — Execute.** $s(2) = 8 - 4 + 10 + 3 = 17$.

**R — Reflect.**
- *Net change check (Card 149):* $\Delta s = \int_0^2 v(t)\,dt = \int_0^2 (3t^2 - 2t + 5)\,dt = [t^3 - t^2 + 5t]_0^2 = (8 - 4 + 10) - 0 = 14$. $s(0) + 14 = 3 + 14 = 17$. ✓
- *Midpoint check:* At $t=1$: $a=4$, $v = 3-2+5 = 6$, $s = 1-1+5+3 = 8$. All physically consistent. ✓

**Answer: $s(2) = 17$.**

---

# Part VII: The Problem-Difficulty Ladder

Problems are not hard because you lack intuition. They are hard because they fire more cards. Difficulty is a countable property.

| Level | Cards | Structure | Strategy |
|-------|-------|-----------|----------|
| **1. Direct** | 1–2 | Single formula or rule, direct substitution | Trigger → Card → Solve |
| **2. Two-Step** | 2–4 | One transformation chain | Algebra → Calculus (intersection → integral), or Simplify → Integrate |
| **3. Multi-Domain** | 4–7 | Two domains, one bridge | FTC (integral → derivative), or Related rates (geometry → derivative) |
| **4. Synthesis** | 7–12 | 3+ domains, multiple bridges | L'Hôpital chain, series → error bound → approximation, optimization with constraints |

---

# Part VIII: Recovery Protocols — When You Are Stuck

### Protocol A: The Derivative/Integral Duality Scan

Stuck on an integral? Ask: "Is the integrand a known derivative?" Check against the derivative cards (Cards 91–106). $\int \sec^2 x\,dx = \tan x + C$ because $\frac{d}{dx}\tan x = \sec^2 x$.

### Protocol B: The Special Value Test

Plug in a specific value that makes the problem simple. $x=0$, $x=1$, $\theta=0$, $\theta=\pi/2$. Does your answer match what the function does at that point? If you're solving $f'(x)=0$ and $x=0$ gives $f'(0)=5$, then $x=0$ is NOT a critical point.

### Protocol C: The Graph Sketch

Stared at an equation for two minutes? Sketch the graph. The visual often reveals what the algebra hides. Is the function increasing or decreasing? Where are the intercepts? Where are the asymptotes?

### Protocol D: The Unit/Type Check

Does your answer have the right mathematical type? A probability must be in $[0,1]$. A ratio of polynomials might have asymptotes. An antiderivative must differentiate back to the integrand. If a quick check fails, trace backward to find the error.

### Protocol E: The Dimensional Back-Solve (Math Version)

If a problem involves geometric quantities, check units. Volume integrals produce $[L]^3$. Area integrals produce $[L]^2$. Arc length integrals produce $[L]$. If the units don't match, the formula is wrong.

---

# Part IX: The Meta-Method — Learning New Mathematics

When you encounter a textbook chapter on a topic not yet in your flashcard deck:

**Pass 1 — Harvest theorems and formulas.** Flip through. Copy every boxed, bold, or displayed formula into a list. Do not read the surrounding text yet.

**Pass 2 — Identify preconditions.** For each formula, write the conditions under which it applies. "Integration by parts requires differentiable $u$ and $v$." "L'Hôpital's Rule requires $0/0$ or $\infty/\infty$ indeterminate form." "Ratio test is inconclusive when $L=1$."

**Pass 3 — Classify.** Every mathematical formula answers one of five questions: Definition (what IS this?), Rule (how do I compute this?), Theorem (what is guaranteed?), Identity (what equals what?), or Test (how do I decide?).

**Pass 4 — Create flashcards.** Each new mathematical concept → one new card in your personal deck, following the format of Cards 1–330. Now a future problem containing that concept will mechanically trigger the new card.

---

## Quick-Reference Card

### I-SEE-R Protocol
| Step | Action |
|------|--------|
| **I** | 4-pass extraction: read → extract numbers → fire cards → identify unknown |
| **S** | Cross out what does not matter. Domain constraints. Symmetry. |
| **E** | Write every card equation/technique from the trigger trace |
| **E** | Substitute, solve algebraically, keep symbols until the end |
| **R** | Domain check + type check + one special case + sign sanity |

### Trigger Trace Format
```
| Trigger Phrase      | Card | Instant Equation / Technique |
|---------------------|------|------------------------------|
| "tangent line"      | 120  | y - f(a) = f'(a)(x-a)       |
| "x³ - 3x + 2"       | 92   | f'(x) = 3x² - 3             |
| "at x = 1"          | —    | a = 1                       |
```

### Bridge Decision Tree
```
Two or more mathematical operations?
├─ Find INTERSECTION POINTS first?  → Algebra → limits of integration (Card 302)
├─ Find DERIVATIVE first?           → f'(x) → tangent line / critical points (Card 301)
├─ Find ANTIDERIVATIVE first?       → FTC → definite integral / net change (Card 308)
├─ EXPAND as series first?          → Taylor → approximate value (Card 307)
├─ DIFFERENTIATE implicitly first?  → dy/dx → slope at point (Card 304)
└─ Find NORMAL VECTOR first?        → Cross product → plane equation (Card 312)
```

### Implicit Meaning Catalog (Cards 281–300)
| Phrase | Meaning | Card |
|--------|---------|------|
| "tangent line" | Use $f'(a)$ as slope | 281 |
| "horizontal tangent" | $f'(x) = 0$ | 283 |
| "increasing" / "decreasing" | $f'(x) > 0$ / $f'(x) < 0$ | 285 |
| "relative max/min" | $f'(c) = 0$ or DNE; check sign change | 286 |
| "concave up/down" | $f''(x) > 0$ / $f''(x) < 0$ | 288 |
| "displacement" | $\int v(t)\,dt$ (NOT total distance) | 289 |
| "total distance" | $\int |v(t)|\,dt$ | 289 |
| "rate of change" | Derivative | 290 |
| "accumulation" | Integral | 291 |
| "average rate of change" | $\frac{f(b)-f(a)}{b-a}$ (secant slope) | 292 |
| "instantaneous rate of change" | $f'(a)$ (tangent slope) | 293 |
| "orthogonal" | Dot product = 0 | 294 |
| "parallel" | One vector = scalar × other | 295 |
| "indeterminate form" | $0/0$, $\infty/\infty$, $0\cdot\infty$, etc. → L'Hôpital or algebra | 300 |
| "smooth curve" | Differentiable with continuous derivative | 297 |

---

> **The exam is won before you enter the room.** Three hundred thirty cards have trained one reflex: see a phrase → write the equation or technique. This document has trained a second: chain those equations mechanically, verify with special cases and domain checks, and never guess.
>
> Difficulty equals the number of cards fired. A Level-1 problem fires two cards. A Level-4 Olympiad problem fires ten. The method is the same. Count the cards. Trace the triggers. Execute.
>
> **If you can calculate it, you have understood it.**
