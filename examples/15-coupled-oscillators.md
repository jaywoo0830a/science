# 15: Coupled Oscillators -- Normal Modes

**Type:** Olympiad | **Topic:** Oscillations | **Prerequisites:** SHM, systems of equations, eigenvalues

---

## Problem

Two identical masses $m$ are connected by three identical springs (constant $k$) in a line. The outer springs are attached to fixed walls. The masses are displaced from equilibrium by $x_1$ and $x_2$ (to the right). Find the normal mode frequencies and describe the motion in each mode.

```
Wall ═══[m]═══[m]═══ Wall
      k    k    k
      →x1  →x2
```

---

## Solution: Complete I-SEE-R Thought Trace

### Step I -- IDENTIFY

**Variables:** $x_1$, $x_2$ (displacements), $m$ (mass), $k$ (spring constant). Normal mode frequencies: $\omega_1$, $\omega_2$.

**Relevant laws:** $F = -kx$ for each spring. $F = ma$ for each mass.

### Step S -- SIMPLIFY

- Identical masses and springs (symmetry)
- No damping, no external forces

### Step E -- EQUATION

**Forces on mass 1:**
- Left spring (to wall): stretched by $x_1$ → force $-k x_1$
- Middle spring: stretched by $x_2 - x_1$ → force $+k(x_2 - x_1)$ (to the right if $x_2 > x_1$)

$$m\ddot{x}_1 = -k x_1 + k(x_2 - x_1) = -2k x_1 + k x_2 \tag{1}$$

**Forces on mass 2:**
- Middle spring: compressed/expanded by $x_2 - x_1$ → force $-k(x_2 - x_1)$
- Right spring (to wall): stretched by $x_2$ → force $-k x_2$

$$m\ddot{x}_2 = -k(x_2 - x_1) - k x_2 = k x_1 - 2k x_2 \tag{2}$$

**Matrix form:**

$$\begin{pmatrix} \ddot{x}_1 \\ \ddot{x}_2 \end{pmatrix} = -\frac{k}{m}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$$

**Normal mode ansatz:** $x_i = A_i\cos(\omega t + \phi)$. Then $\ddot{x}_i = -\omega^2 x_i$. Substituting:

$$\begin{pmatrix} 2k/m & -k/m \\ -k/m & 2k/m \end{pmatrix}\begin{pmatrix} A_1 \\ A_2 \end{pmatrix} = \omega^2\begin{pmatrix} A_1 \\ A_2 \end{pmatrix}$$

### Step E -- EXECUTE

**Eigenvalue problem:** $\det\begin{pmatrix} 2\omega_0^2 - \omega^2 & -\omega_0^2 \\ -\omega_0^2 & 2\omega_0^2 - \omega^2 \end{pmatrix} = 0$, where $\omega_0^2 = k/m$.

$$(2\omega_0^2 - \omega^2)^2 - (\omega_0^2)^2 = 0$$
$$(2\omega_0^2 - \omega^2 - \omega_0^2)(2\omega_0^2 - \omega^2 + \omega_0^2) = 0$$
$$(\omega_0^2 - \omega^2)(3\omega_0^2 - \omega^2) = 0$$

$$\omega_1^2 = \omega_0^2 = \frac{k}{m}, \quad \omega_2^2 = 3\omega_0^2 = \frac{3k}{m}$$

$$\omega_1 = \sqrt{\frac{k}{m}}, \quad \omega_2 = \sqrt{\frac{3k}{m}}$$

**Eigenvectors (normal mode shapes):**

For $\omega_1$: $\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} A_1 \\ A_2 \end{pmatrix} = \begin{pmatrix} A_1 \\ A_2 \end{pmatrix}$ → $A_1 = A_2$ (in-phase: masses move together).

For $\omega_2$: $\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} A_1 \\ A_2 \end{pmatrix} = 3\begin{pmatrix} A_1 \\ A_2 \end{pmatrix}$ → $A_2 = -A_1$ (out-of-phase: masses move opposite).

### Step R -- REFLECT

**Physical interpretation of normal modes:**

| Mode | $\omega$ | Motion | Middle spring |
|------|----------|--------|---------------|
| 1 (lower) | $\sqrt{k/m}$ | Masses move in same direction, same amplitude | Never stretched → acts as if absent |
| 2 (higher) | $\sqrt{3k/m}$ | Masses move in opposite directions, equal amplitude | Stretched twice as much → effective $k$ triples |

**Dimensional check:** $\sqrt{k/m}$: $([M][T]^{-2}/[M])^{1/2} = [T]^{-1}$. ✓

**Limiting case:** If the middle spring were removed ($k_{\text{middle}} = 0$), the coupling matrix becomes $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, giving $\omega_1 = \omega_2 = \sqrt{k/m}$. Both masses oscillate independently at the same frequency. ✓

**Answer: $\omega_1 = \sqrt{k/m}$ (in-phase mode), $\omega_2 = \sqrt{3k/m}$ (out-of-phase mode).**

> **Key insight:** The matrix formulation converts a coupled oscillator problem into an eigenvalue problem. The eigenvalues give $\omega^2$; the eigenvectors give the mode shapes. This is purely algebraic and applies identically to systems of $N$ masses, electrical circuits, and quantum mechanical systems. No intuition about "how coupled masses should move" is required.
