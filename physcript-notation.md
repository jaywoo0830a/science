# Physcript: Physics & Chemistry Calculation Retrieval Notation

> **"If you can calculate it, you have understood it."**
>
> Physcript is a positional, zero-ceremony notation for rapid-fire calculation drills.  
> One line $=$ 3–7 retrievals. No variable names. No prose. Just positions and flags.  
> All equations render with $\KaTeX$.

---

## 1. Core Syntax

```
<concept> <pos1> <pos2> ... <posN>  [flags]
```

| Rule | Meaning |
|------|---------|
| **Positional** | Every concept has a fixed parameter order. Position *is* memory. |
| **`?` placeholder** | Marks the target variable. `force 5 3 ?` means "find $F$." |
| **`>` bridge** | Chains two concepts. Domain A output $\to$ Domain B input. |
| **No variable names** | `force 5 3 ?` NOT `force m=5 a=3 F=?`. The brain supplies the mapping. |

---

## 2. Flags

Stackable. Go at the end of every line.

| Flag | Name | Effect |
|------|------|--------|
| `!` | unit-check | Verify units on final answer. |
| `!!` | unit-all | Verify units on **every step**. |
| `~` | dim-check | Verify dimensions on final answer. |
| `~~` | dim-all | Verify dimensions on **every step**. |
| `!~` | unit+dim | Both checks on final answer. |
| `!!~~` | full | Both checks on every step. Maximum difficulty. |

---

## 3. Lane A — Positional Calculation

### 3.1 Single-Step (`concept a b ?`)

Two known values, one unknown. `?` marks the target.

```
force 5 3 ?     →  m=5, a=3, F=?  →  15 N
force 5 ? 30    →  m=5, F=30, a=? →  6 m/s²
force ? 3 30    →  a=3, F=30, m=? →  10 kg
kinetic 2 5 ?   →  K = ½·2·5² = 25 J
ohms 2 6 ?      →  V = 2×6 = 12 V
```

### 3.2 Multi-Step Chain (`concept a b c d`)

All params given. The engine auto-generates a calculation chain. User computes each step.

```
incline 37 5 0.25 10 ! ~
→ [1/5] mg sin θ    = 5×10×sin37° = 30.1 N
→ [2/5] mg cos θ    = 5×10×cos37° = 39.9 N
→ [3/5] N = mg cos θ              = 39.9 N
→ [4/5] fₖ = μₖN                   = 0.25×39.9 = 9.98 N
→ [5/5] a = (mg sinθ − fₖ)/m      = 4.02 m/s²
→ [!] N/kg → m/s² ✓
→ [~] [a]=[L][T]⁻² ✓
```

```
collision 4 6 2 0 ! ~
→ [1/5] pᵢ = m₁v₁ + m₂v₂          = 24 kg·m/s
→ [2/5] v_f = pᵢ/(m₁+m₂)          = 4.0 m/s
→ [3/5] Kᵢ = ½m₁v₁² + ½m₂v₂²     = 72 J
→ [4/5] K_f = ½(m₁+m₂)v_f²       = 48 J
→ [5/5] ΔK = K_f − Kᵢ            = −24 J (→ heat)
```

```
projectile 20 53 10 ! ~
→ [1/6] v₀ₓ = v₀ cos θ            = 12.0 m/s
→ [2/6] v₀ᵧ = v₀ sin θ            = 16.0 m/s
→ [3/6] t_peak = v₀ᵧ/g            = 1.60 s
→ [4/6] h_max = v₀ᵧ²/(2g)         = 12.8 m
→ [5/6] t_flight = 2·v₀ᵧ/g        = 3.20 s
→ [6/6] R = v₀ₓ · t_flight        = 38.4 m
```

---

### 3.3 Extended Operators — The 99% Solution

These seven operators transform conceptual cards into calculation problems. Each produces a numeric answer, a yes/no decision, a sign, or a factor — always grounded in computation.

---

#### 3.3.1 `∝` — Proportional Reasoning

> "If $X$ changes by factor $k$, $Y$ changes by factor ?"

```
Syntax:  <concept> ∝ <variable> <factor>

centripetal ∝ v 2          →  a_c ∝ v², v×2 → a_c ×4
kinetic ∝ v 3              →  K ∝ v², v×3 → K ×9
gravity ∝ r 0.5            →  F ∝ 1/r², r×½ → F ×4
kepler_T ∝ r 4             →  T² ∝ r³, r×4 → T ×8 (√64)
flow_rate ∝ r 2            →  Q ∝ r⁴, r×2 → Q ×16
sound_intensity ∝ r 5      →  I ∝ 1/r², r×5 → I ×¹⁄₂₅
wave_speed_string ∝ F_T 4  →  v ∝ √F_T, F_T×4 → v ×2
mass_spring_T ∝ k 4        →  T ∝ 1/√k, k×4 → T ×½
resistance_power ∝ I 3     →  P ∝ I², I×3 → P ×9
coulomb_force ∝ r 2        →  F ∝ 1/r², r×2 → F ×¼
stefan ∝ T 2               →  P ∝ T⁴, T×2 → P ×16
```

**Core proportional relationships (memorize these):**

| Relationship | Operator | Factor when var ×k |
|-------------|----------|---------------------|
| $a_c \propto v^2$ | `centripetal ∝ v` | $\times k^2$ |
| $a_c \propto 1/R$ | `centripetal ∝ R` | $\times 1/k$ |
| $K \propto v^2$ | `kinetic ∝ v` | $\times k^2$ |
| $F_g \propto 1/r^2$ | `gravity ∝ r` | $\times 1/k^2$ |
| $T^2 \propto r^3$ | `kepler_T ∝ r` | $\times k^{3/2}$ |
| $P \propto I^2$ | `resistance_power ∝ I` | $\times k^2$ |
| $I \propto 1/r^2$ | `sound_intensity ∝ r` | $\times 1/k^2$ |
| $v \propto \sqrt{F_T}$ | `wave_speed_string ∝ F_T` | $\times \sqrt{k}$ |
| $Q \propto r^4$ | `flow_rate ∝ r` | $\times k^4$ |
| $P_{\text{rad}} \propto T^4$ | `stefan ∝ T` | $\times k^4$ |
| $v_{\text{rms}} \propto \sqrt{T}$ | `vrms ∝ T` | $\times \sqrt{k}$ |
| $T \propto 1/\sqrt{k}$ | `mass_spring_T ∝ k` | $\times 1/\sqrt{k}$ |
| $T \propto \sqrt{L}$ | `pendulum_T ∝ L` | $\times \sqrt{k}$ |

---

#### 3.3.2 `?>` — Threshold Decision

> Compute a threshold value, then answer yes/no.

```
Syntax:  <concept> <params> ?>

will_slip 0.3 37           →  tan 37°=0.754 > 0.3 → YES, slips
will_move 0.5 60 25        →  fₘₐₓ=0.5×60=30, 25<30 → NO
will_float 900 1000        →  900<1000 → YES, floats
loop_safe 5 12 1           →  v_top²=2g(h−2R)=40, N≥0? → YES
photo_emit 400 3           →  E=1240/400=3.1 eV > 3 eV → YES
critical_check 1.5 1 50    →  θ_c=sin⁻¹(1/1.5)=41.8°, 50°>41.8° → YES, TIR
breaks_check 80 100        →  T=80 < T_max=100 → NO
reynolds_check 1000 2 0.1 0.001 → Re=200k > 3000 → YES, turbulent
spontaneous_redox 0.76     →  E°>0 → YES, spontaneous
equilibrium_shift 0.5 2    →  Q=0.5 < K=2 → shifts RIGHT
```

**Threshold concept catalog:**

| Keyword | Params | Computation | Decision |
|---------|--------|-------------|----------|
| `will_slip` | `μ_s θ` | $\tan\theta$ vs $\mu_s$ | Does it slip? |
| `will_move` | `μ_s N F` | $f_{s,\max} = \mu_s N$ vs $F$ | Overcomes friction? |
| `will_float` | `ρ_obj ρ_fluid` | Compare densities | Floats? |
| `loop_safe` | `R h m` | $v_{\text{top}}^2 = 2g(h-2R)$, $N = m(v^2/R - g)$ | $N \ge 0$? |
| `photo_emit` | `λ φ` | $E = 1240/\lambda$ vs $\phi$ | Electron emitted? |
| `critical_check` | `n₁ n₂ θ` | $\theta_c = \sin^{-1}(n_2/n_1)$ vs $\theta$ | TIR? |
| `breaks_check` | `T T_max` | Compare | Rope breaks? |
| `reynolds_check` | `ρ v D η` | $\mathrm{Re} = \rho v D / \eta$ vs 3000 | Turbulent? |
| `spontaneous_redox` | `E°` | $E^\circ$ vs 0 | Spontaneous? |
| `equilibrium_shift` | `Q K` | $Q$ vs $K$ | Which direction? |

---

#### 3.3.3 `±` — Sign Determination

> Determine the correct sign, then compute magnitude.

```
Syntax:  <concept> <params> ±

work_sign 10 5 120         →  cos 120°=−0.5 → W = −25 J (negative)
lens_sign 20 30            →  d_i = 60 > 0 → real image (+)
charge_sign 3 -2           →  opposite → attractive (−)
doppler_sign 440 20 toward →  toward → f' > f → blueshift (+Δf)
torque_sign 5 2 30 cw      →  CW = (−) → τ = −5 N·m
freefall_sign 5            →  a_y = −g = −10 m/s²
voltage_drop_sign 12 2     →  ΔV = −IR = −24 V (drop)
lens_f_sign concave        →  f > 0 → converging (+)
```

**Sign convention reference:**

| Concept | Rule | + means |
|---------|------|---------|
| `work_sign` | $W = Fd\cos\theta$ | $\cos\theta > 0 \to W > 0$ |
| `lens_sign` | $\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$ | $d_i > 0 \to$ real image |
| `charge_sign` | Like repel, unlike attract | $+ =$ repulsive |
| `doppler_sign` | Toward = higher freq | $\Delta f > 0 =$ blueshift |
| `torque_sign` | CCW = positive | $\tau > 0 =$ CCW |
| `freefall_sign` | Up = $+y$ | $a_y = -g$ |
| `voltage_drop_sign` | Across resistor | $\Delta V = -IR$ |
| `induced_sign` | Lenz's Law | Opposes flux change |
| `mirror_sign` | Concave $f>0$ | Converging |
| `lens_f_sign` | Converging $f>0$ | Convex lens |

---

#### 3.3.4 `@special` — Special Case Recall + Compute

> Recall a special-case rule, then compute.

```
Syntax:  @special <concept> <params>

@special elastic_eqmass 5 3 0  → m₁=m₂, v₂ᵢ=0, elastic → v₁_f=0, v₂_f=5 m/s
@special incline_45 5 0.25 10  → sin45=cos45=√2/2 → rapid chain
@special freefall_up 20 10     → t_up=2 s, t_total=4 s, h_max=20 m, v_f=−20 m/s
@special atwood_eqmass 2 10    → m₁=m₂ → a=0, T=mg=20 N
@special parallel_same 4 3     → 3 identical R=4 Ω → R_eq = 4/3 = 1.33 Ω
@special series_same 6 4       → 4 identical R=6 Ω → R_eq = 24 Ω
@special rolling_sphere 5 37   → I=⅖mR² → a = ⁵⁄₇ g sin 37° = 4.29 m/s²
@special max_range 20 10       → θ=45° → R_max = v₀²/g = 40 m
@special rms_ac 170            → V_peak=170 V → V_rms = 170/√2 = 120 V
@special half_life_count 1000 3 → N = 1000/8 = 125
@special bohr_ground           → E₁ = −13.6 eV
@special photon_visible 550    → E = 1240/550 = 2.25 eV
@special compton_90            → θ=90° → Δλ = λ_c = 0.00243 nm
```

**Special case catalog:**

| Keyword | Rule | Compute |
|---------|------|---------|
| `elastic_eqmass` | Equal masses, one at rest, elastic | $v_{1f}=0,\ v_{2f}=v_{1i}$ |
| `incline_45` | $\sin 45^\circ = \cos 45^\circ = \sqrt{2}/2$ | Simplifies all incline calcs |
| `freefall_up` | Symmetry: $t_{\uparrow}=t_{\downarrow}$, $v_f=-v_0$ | Full trajectory from $v_0$ |
| `atwood_eqmass` | $m_1=m_2 \to a=0,\ T=mg$ | Equilibrium |
| `parallel_same` | $n$ identical $R$ in parallel | $R_{\text{eq}} = R/n$ |
| `series_same` | $n$ identical $R$ in series | $R_{\text{eq}} = nR$ |
| `rolling_sphere` | Solid sphere: $I = \frac{2}{5}mR^2$ | $a = \frac{5}{7}g\sin\theta$ |
| `rolling_cylinder` | Solid cylinder: $I = \frac{1}{2}mR^2$ | $a = \frac{2}{3}g\sin\theta$ |
| `max_range` | Projectile range max at $\theta = 45^\circ$ | $R_{\max} = v_0^2/g$ |
| `rms_ac` | Sinusoidal AC | $V_{\text{rms}} = V_{\text{peak}}/\sqrt{2}$ |
| `half_life_count` | After $n$ half-lives | $N = N_0/2^n$ |
| `bohr_ground` | Hydrogen ground state | $E_1 = -13.6\ \mathrm{eV}$ |
| `photon_visible` | $\lambda$ in nm $\to E$ in eV | $E = 1240/\lambda$ |
| `compton_90` | $\theta = 90^\circ$ | $\Delta\lambda = \lambda_c = 0.00243\ \mathrm{nm}$ |

---

#### 3.3.5 `<=>` — Compare Two Quantities

> Compute both, then state the relationship.

```
Syntax:  <concept> <params> <=>

friction_compare 0.6 0.4 50  → f_s_max=30 N, f_k=20 N → f_s > f_k ✓
series_vs_parallel 6 12     → series=18 Ω, parallel=4 Ω → series > parallel
ke_vs_momentum 2 10         → K=100 J, p=20 kg·m/s (different dimensions)
concave_vs_convex           → +f (converging) vs −f (diverging)
alpha_vs_beta               → α: ⁴₂He²⁺ vs β: ⁰₋₁e⁻ (α more massive)
elastic_vs_inelastic 4 6 2 0 → p conserved both; K conserved only in elastic
```

**Comparison catalog:**

| Keyword | Params | Compare | Key Insight |
|---------|--------|---------|-------------|
| `friction_compare` | `μ_s μ_k N` | $f_{s,\max}$ vs $f_k$ | $\mu_s > \mu_k$ always |
| `series_vs_parallel` | `R₁ R₂` | $R_{\text{series}}$ vs $R_{\text{parallel}}$ | Series always larger |
| `ke_vs_momentum` | `m v` | $K$ vs $p$ values | Different dimensions |
| `elastic_vs_inelastic` | `m₁ v₁ m₂ v₂` | KE conserved? | Yes vs No |
| `concave_vs_convex` | — | $f$ sign | $+$ vs $-$ |
| `alpha_vs_beta` | — | Penetration, mass, charge | $\alpha$ heavy, $\beta$ light |
| `fusion_vs_fission` | — | $E/A$ curve | Both release energy |

---

#### 3.3.6 `@vec` — Vector Decomposition

> Decompose into $x$ and $y$ components.

```
Syntax:  @vec <type> <magnitude> <angle>

@vec force 30 37            → F_x = 30 cos 37° = 24.0 N, F_y = 30 sin 37° = 18.1 N
@vec velocity 50 53         → v_x = 30.1 m/s, v_y = 39.9 m/s
@vec momentum 10 30         → p_x = 8.66, p_y = 5.00 kg·m/s
@vec efield 200 60          → E_x = 100, E_y = 173 N/C
```

**Contract:** `(magnitude) (angle_deg)` $\to$ user computes both components.

---

#### 3.3.7 `??` — Equation Selection + Compute

> Identify the correct equation from a suite, then compute.

```
Syntax:  ?? <domain> <known1> <known2> <target>

?? kin_find v0 a t dx       → Use Δx = v₀t + ½at² → compute
?? kin_find v0 a dx v       → Use v² = v₀² + 2aΔx → compute
?? gas_find P V T n         → Use n = PV/(RT) → compute
?? circuit_find parallel R₁ R₂ R_eq → Use 1/R_eq = 1/R₁ + 1/R₂ → compute
```

**Kinematic selector (Card 4):**

| Given 3 | Need | Use |
|---------|------|-----|
| $v_0, a, t$ | $v$ | $v = v_0 + at$ |
| $v_0, a, t$ | $\Delta x$ | $\Delta x = v_0t + \frac{1}{2}at^2$ |
| $v_0, a, \Delta x$ | $v$ | $v^2 = v_0^2 + 2a\Delta x$ |
| $v_0, v, t$ | $\Delta x$ | $\Delta x = \frac{1}{2}(v_0+v)t$ |

**Gas law selector:**

| Condition | Use |
|-----------|-----|
| $n$ constant | $\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}$ |
| Constant $T$ | $P_1V_1 = P_2V_2$ |
| Constant $P$ | $\frac{V_1}{T_1} = \frac{V_2}{T_2}$ |
| Constant $V$ | $\frac{P_1}{T_1} = \frac{P_2}{T_2}$ |
| All 3 given | $PV = nRT$ |

---

## 4. Lane B — Flash Recall (Trigger $\to$ Equation)

Trigger phrases map to equations instantly. No numbers. The brain must recall the equation.

```
Syntax:  <trigger_keyword> [flags]

rest            →  v₀ = 0
stops           →  v = 0
peak            →  v_y = 0, a_y = −g
frictionless    →  f = 0
equilibrium     →  ΣF_x = 0, ΣF_y = 0, Στ = 0
just_slip       →  f_s = μ_s N
loses_contact   →  N = 0
breaks          →  T = T_max
coasting        →  a = 0
terminal        →  ΣF = 0, mg = F_D
conservative    →  E_i = E_f
elastic         →  Σp_i = Σp_f AND ΣK_i = ΣK_f
inelastic       →  m₁v₁ + m₂v₂ = (m₁+m₂)v_f
recoil          →  m_g v_g + m_b v_b = 0
explosion       →  Σp_i = Σp_f (often 0 = Σm_i v_i)
no_slip         →  v = ωR, a = αR
ideal_pulley    →  T uniform on both sides
massless_rope   →  T same at both ends
constant_v      →  a = 0, Δx = vt
constant_T      →  P₁V₁ = P₂V₂ (isothermal)
constant_P      →  V₁/T₁ = V₂/T₂ (isobaric)
constant_V      →  P₁/T₁ = P₂/T₂ (isochoric)
adiabatic       →  Q = 0, PV^γ = const
sealed          →  P₁V₁/T₁ = P₂V₂/T₂ (n constant)
free_fall       →  a_y = −g = −9.8 m/s²
returns_same_h  →  Δy = 0
catch_up        →  x_A(t) = x_B(t)
orbit_cond      →  GMm/r² = mv²/r
spontaneous_gal →  E°_cell > 0
```

---

## 5. Lane C — Constants, Conversions, Dimensions

```
Syntax:  <constant_keyword> [flags]

# Physical Constants
planck          →  h = 6.626 × 10⁻³⁴ J·s
c_light         →  c = 3.00 × 10⁸ m/s
g_earth         →  g = 9.8 m/s²
G_newton        →  G = 6.67 × 10⁻¹¹ N·m²/kg²
k_coulomb       →  k = 8.99 × 10⁹ N·m²/C²
eps0            →  ε₀ = 8.85 × 10⁻¹² C²/(N·m²)
mu0             →  μ₀ = 4π × 10⁻⁷ T·m/A
NA_avo          →  N_A = 6.022 × 10²³ mol⁻¹
R_gas           →  R = 8.314 J/(mol·K) = 0.08206 L·atm/(mol·K)
F_faraday       →  F = 9.65 × 10⁴ C/mol
kB_boltz        →  k_B = 1.38 × 10⁻²³ J/K
eV_joule        →  1 eV = 1.60 × 10⁻¹⁹ J
sigma_stef      →  σ = 5.67 × 10⁻⁸ W/(m²·K⁴)
e_charge        →  e = 1.60 × 10⁻¹⁹ C
m_electron      →  m_e = 9.11 × 10⁻³¹ kg
m_proton        →  m_p = 1.67 × 10⁻²⁷ kg
h_bar           →  ℏ = 1.055 × 10⁻³⁴ J·s
compton_lambda  →  λ_c = 2.43 × 10⁻¹² m
rydberg         →  R_∞ = 1.097 × 10⁷ m⁻¹

# Unit Conversions
c_to_k          →  T_K = T_C + 273.15
atm_to_pa       →  1 atm = 1.013 × 10⁵ Pa
atm_to_mmhg     →  1 atm = 760 mmHg
L_to_m3         →  1 L = 10⁻³ m³
cal_to_J        →  1 cal = 4.186 J
kwh_to_J        →  1 kWh = 3.6 × 10⁶ J
rpm_to_rads     →  × 2π/60
kmh_to_ms       →  ÷ 3.6
uC_to_C         →  × 10⁻⁶
nC_to_C         →  × 10⁻⁹
G_to_T          →  1 G = 10⁻⁴ T
u_to_kg         →  1 u = 1.661 × 10⁻²⁷ kg
u_to_MeV        →  1 u = 931.5 MeV/c²
angstrom_to_m   →  1 Å = 10⁻¹⁰ m
bar_to_Pa       →  1 bar = 10⁵ Pa
hp_to_W         →  1 hp = 746 W

# Dimensions (Quantity → [Dimensional Formula])
force_dim       →  [F] = [M][L][T]⁻²
energy_dim      →  [E] = [M][L]²[T]⁻²
momentum_dim    →  [p] = [M][L][T]⁻¹
power_dim       →  [P] = [M][L]²[T]⁻³
pressure_dim    →  [P] = [M][L]⁻¹[T]⁻²
density_dim     →  [ρ] = [M][L]⁻³
velocity_dim    →  [v] = [L][T]⁻¹
accel_dim       →  [a] = [L][T]⁻²
torque_dim      →  [τ] = [M][L]²[T]⁻²
inertia_dim     →  [I] = [M][L]²
angvel_dim      →  [ω] = [T]⁻¹
angmom_dim      →  [L] = [M][L]²[T]⁻¹
springk_dim     →  [k] = [M][T]⁻²
freq_dim        →  [f] = [T]⁻¹
charge_dim      →  [q] = [Q]
efield_dim      →  [E] = [M][L][Q]⁻¹[T]⁻²
voltage_dim     →  [V] = [M][L]²[Q]⁻¹[T]⁻²
capac_dim       →  [C] = [M]⁻¹[L]⁻²[Q]²[T]²
resistance_dim  →  [R] = [M][L]²[Q]⁻²[T]⁻¹
bfield_dim      →  [B] = [M][Q]⁻¹[T]⁻¹
flux_dim        →  [Φ_B] = [M][L]²[Q]⁻¹[T]⁻¹
induct_dim      →  [L] = [M][L]²[Q]⁻²
entropy_dim     →  [S] = [M][L]²[T]⁻²[Θ]⁻¹
specheat_dim    →  [c] = [L]²[T]⁻²[Θ]⁻¹
planck_dim      →  [h] = [M][L]²[T]⁻¹
```

---

## 6. Lane Bridge — Cross-Domain Chains (`>`)

```
Syntax:  <conceptA> <paramsA> > <conceptB> <paramsB>  [flags]
```

Domain A output $\to$ Domain B input. The bridge variable is **implicit** — the user must recognize it.

### 6.1 Bridge Catalog

| Keyword | Params | Chain |
|---------|--------|-------|
| `hit_spring` | `m_b v_b M k` | collision $\to$ **v_f** $\to$ spring compression |
| `hit_pendulum` | `m_b v_b M L` | collision $\to$ **v_f** $\to$ pendulum swing |
| `fall_spring` | `m h k` | freefall $\to$ **v** $\to$ spring compression |
| `slide_hit` | `v₀ μ d m₁ m₂` | friction decel $\to$ **v** $\to$ collision |
| `loop_drop` | `R h g` | energy $\to$ **v_top** $\to$ circular dynamics |
| `accel_cyclotron` | `V B` | e-static $\to$ **v** $\to$ cyclotron orbit |
| `motor_brake` | `B L m R` | Faraday $\to$ **I** $\to$ magnetic braking |
| `photo_stop_bridge` | `λ φ` | photoelectric $\to$ **K_max** $\to$ stopping voltage |
| `solar_sail` | `I A m` | radiation pressure $\to$ **F** $\to$ acceleration |
| `nuclear_heat` | `Δm m_water` | mass defect $\to$ **E** $\to$ water heating |
| `doppler_wall` | `f v_s v_obs v_sound` | source→wall $\to$ **f'** $\to$ wall→observer |
| `gas_piston_osc` | `P₀ A V₀ m` | gas $\to$ **k_eff** $\to$ SHM period |
| `heat_leak` | `T_H T_C k A L t` | conduction $\to$ **Q** $\to$ ΔT |
| `stretch_osc` | `k x m` | static spring $\to$ **F** $\to$ SHM period |
| `selector_filter` | `E B₁ B₂` | velocity selector $\to$ **v** $\to$ mass separation |
| `charge_plate` | `q m V d L` | acceleration $\to$ **v** $\to$ projectile deflection |
| `orbit_transfer` | `r₁ r₂ M` | circular orbit $\to$ **a** $\to$ Hohmann ellipse |

### 6.2 Bridge Examples

```
hit_spring 0.01 300 2 500 ! ~

  Domain A — Collision:
    [1/3] v_f = m_b·v_b/(M+m_b) = 1.49 m/s
    [2/3] K = ½(M+m_b)·v_f² = 2.24 J
    [3/3] ΔK_loss = 447.8 J → heat

  ── Bridge: v_f → spring compression ──

  Domain B — Spring:
    [4/5] ½(M+m_b)·v_f² = ½k·x²
    [5/5] x = √(2K/k) = 0.0947 m = 9.47 cm

  [!] kg·m/s → J → m  ✓
  [~] [x] = [L]  ✓
```

---

## 7. Full Concept Catalog — Lane A

### 7.1 Mechanics

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `force` | `m a F` | $F = ma$ | 1 |
| `kinetic` | `m v K` | $K = \frac{1}{2}mv^2$ | 1 |
| `momentum` | `m v p` | $p = mv$ | 1 |
| `weight` | `m g F_g` | $F_g = mg$ | 1 |
| `work` | `F d θ W` | $W = Fd\cos\theta$ | 1 |
| `power_m` | `F v P` | $P = Fv$ | 1 |
| `impulse` | `F Δt J` | $J = F\Delta t$ | 1 |
| `friction` | `μ N f` | $f = \mu N$ | 1 |
| `incline` | `θ m μ g` | $mg_\parallel, mg_\perp, N, f_k, a$ | 5 |
| `collision` | `m₁ v₁ m₂ v₂` | $p_i, v_f, K_i, K_f, \Delta K$ | 5 |
| `freefall` | `h g` | $v_0=0, t, v_f, \bar{v}$ | 4 |
| `projectile` | `v₀ θ g` | $v_{0x}, v_{0y}, t_{\text{peak}}, h_{\max}, t_{\text{flight}}, R$ | 6 |
| `spring_k` | `k x` | $F_s, U_s$ | 2 |
| `pendulum` | `L g` | $T, \omega$ | 2 |
| `centripetal` | `v R a_c` | $a_c = v^2/R$ | 1 |
| `centripetal_f` | `m v R F_c` | $F_c = mv^2/R$ | 1 |
| `unbanked` | `μ R g` | $v_{\max} = \sqrt{\mu g R}$ | 1 |
| `banked` | `θ R g` | $v = \sqrt{gR\tan\theta}$ | 2 |
| `loop` | `R g` | $v_{\text{top},\min},\ h_{\min}$ | 2 |
| `orbit` | `M R G` | $v_{\text{orbit}}, T, v_{\text{esc}}$ | 3 |
| `gravity` | `m₁ m₂ r G` | $F = Gm_1m_2/r^2$ | 1 |
| `escape` | `M R G` | $v_{\text{esc}} = \sqrt{2GM/R}$ | 1 |
| `torque` | `r F θ τ` | $\tau = rF\sin\theta$ | 1 |
| `angmom` | `I ω L` | $L = I\omega$ | 1 |
| `rot_ke` | `I ω K` | $K_{\text{rot}} = \frac{1}{2}I\omega^2$ | 1 |
| `vf_at` | `v₀ a t v` | $v = v_0 + at$ | 1 |
| `dx_v0t` | `v₀ t a Δx` | $\Delta x = v_0t + \frac{1}{2}at^2$ | 1 |
| `vf2_v02` | `v₀ a Δx v` | $v^2 = v_0^2 + 2a\Delta x$ | 1 |
| `grav_pe` | `m g h U_g` | $U_g = mgh$ | 1 |
| `spring_pe` | `k x U_s` | $U_s = \frac{1}{2}kx^2$ | 1 |
| `atwood_accel` | `m₁ m₂ g a` | $a = \frac{m_2-m_1}{m_1+m_2}g$ | 1 |
| `elevator_up` | `m g a N` | $N = m(g+a)$ | 1 |
| `elevator_down` | `m g a N` | $N = m(g-a)$ | 1 |
| `recoil_speed` | `m_b v_b m_g v_g` | $v_g = -m_b v_b/m_g$ | 1 |
| `orbital_speed` | `G M r v` | $v = \sqrt{GM/r}$ | 1 |
| `orbital_period` | `r M G T` | $T = \sqrt{4\pi^2 r^3/(GM)}$ | 1 |
| `point_mass_I` | `m r I` | $I = mr^2$ | 1 |
| `solid_cylinder_I` | `M R I` | $I = \frac{1}{2}MR^2$ | 1 |
| `solid_sphere_I` | `M R I` | $I = \frac{2}{5}MR^2$ | 1 |
| `parallel_axis` | `I_{cm} M d I` | $I = I_{cm} + Md^2$ | 1 |
| `angmom_cons` | `I_i ω_i I_f ω_f` | $I_i\omega_i = I_f\omega_f$ | 1 |
| `mass_spring_T` | `m k` | $T = 2\pi\sqrt{m/k}, \omega$ | 2 |
| `mass_spring_ω` | `k m ω` | $\omega = \sqrt{k/m}$ | 1 |

### 7.2 Electricity & Magnetism

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `coulomb` | `q₁ q₂ r k F` | $F = k|q_1q_2|/r^2$ | 1 |
| `efield_charge` | `k Q r E` | $E = kQ/r^2$ | 1 |
| `efield_force` | `q E F` | $F = qE$ | 1 |
| `uniform_E` | `V d E` | $E = V/d$ | 1 |
| `voltage_energy` | `U q V` | $V = U/q$ | 1 |
| `ohms` | `I R V` | $V = IR$ | 1 |
| `power_e` | `I V P` | $P = IV$ | 1 |
| `resistance_power` | `I R P` | $P = I^2R$ | 1 |
| `parallel2` | `R₁ R₂` | $R_{\text{eq}} = R_1R_2/(R_1+R_2)$ | 1 |
| `series_r` | `R₁ R₂ R₃ V` | $R_{\text{total}}, I, V_1, V_2, V_3$ | 5 |
| `parallel_r` | `R₁ R₂ V` | $R_{\text{eq}}, I_{\text{total}}, I_1, I_2$ | 4 |
| `capacitor_Q` | `C V Q` | $Q = CV$ | 1 |
| `capacitor_U` | `C V U` | $U = \frac{1}{2}CV^2$ | 1 |
| `rc_time` | `R C τ` | $\tau = RC$ | 1 |
| `mag_force_q` | `q v B θ F` | $F = qvB\sin\theta$ | 1 |
| `cyclotron` | `m v q B` | $r = mv/(qB), T = 2\pi m/(qB)$ | 2 |
| `motional_emf` | `B L v ε` | $\mathcal{E} = BLv$ | 1 |
| `transformer` | `N_p N_s V_p` | $V_s, I_s/I_p$ ratio | 2 |
| `lc_osc` | `L C` | $\omega = 1/\sqrt{LC}, T$ | 2 |
| `vterminal` | `ε I r V` | $V = \mathcal{E} - Ir$ | 1 |
| `wire_B` | `μ₀ I r B` | $B = \mu_0 I/(2\pi r)$ | 1 |
| `solenoid_B` | `μ₀ n I B` | $B = \mu_0 n I$ | 1 |
| `mag_flux` | `B A θ Φ_B` | $\Phi_B = BA\cos\theta$ | 1 |
| `faraday_emf` | `N ΔΦ Δt ε` | $|\mathcal{E}| = N\Delta\Phi/\Delta t$ | 1 |
| `inductor_energy` | `L I U` | $U = \frac{1}{2}LI^2$ | 1 |
| `rl_time` | `L R τ` | $\tau = L/R$ | 1 |

### 7.3 Thermo & Fluids

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `gas` | `P V T R n` | $n = PV/(RT)$ | 1 |
| `boyle` | `P₁ V₁ V₂ P₂` | $P_2 = P_1V_1/V_2$ | 1 |
| `charles` | `V₁ T₁ T₂ V₂` | $V_2 = V_1 T_2/T_1$ | 1 |
| `gay_lussac` | `P₁ T₁ T₂ P₂` | $P_2 = P_1 T_2/T_1$ | 1 |
| `heat` | `m c ΔT Q` | $Q = mc\Delta T$ | 1 |
| `latent` | `m L Q` | $Q = mL$ | 1 |
| `first_law` | `Q W ΔU` | $\Delta U = Q - W$ | 1 |
| `carnot` | `T_H T_C η` | $\eta = 1 - T_C/T_H$ | 1 |
| `thermal_exp` | `α L₀ ΔT ΔL` | $\Delta L = \alpha L_0\Delta T$ | 1 |
| `conduction` | `k A ΔT L Qt` | $Q/t = kA\Delta T/L$ | 1 |
| `stefan` | `σ A e T P` | $P = \sigma AeT^4$ | 1 |
| `vrms` | `R T M v` | $v_{\text{rms}} = \sqrt{3RT/M}$ | 1 |
| `pressure_depth` | `P₀ ρ h g P` | $P = P_0 + \rho gh$ | 1 |
| `buoyancy` | `ρ V g F_B` | $F_B = \rho gV$ | 1 |
| `continuity` | `A₁ v₁ A₂ v₂` | $v_2 = A_1v_1/A_2$ | 1 |
| `torricelli` | `h g v` | $v = \sqrt{2gh}$ | 1 |
| `pascal` | `F₁ A₁ A₂ F₂` | $F_2 = F_1 A_2/A_1$ | 1 |
| `density_calc` | `m V ρ` | $\rho = m/V$ | 1 |

### 7.4 Waves & Optics

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `wavespeed` | `f λ v` | $v = f\lambda$ | 1 |
| `wave_on_string` | `F_T μ v` | $v = \sqrt{F_T/\mu}$ | 1 |
| `string_harm` | `n L F_T μ` | $f_n = \frac{n}{2L}\sqrt{F_T/\mu}$ | 1 |
| `open_pipe` | `n L v_sound` | $f_n = nv/(2L)$ | 1 |
| `closed_pipe` | `n L v_sound` | $f_n = nv/(4L)$ ($n$ odd) | 1 |
| `doppler_s` | `f v_s v_sound f'` | $f' = f\frac{v}{v-v_s}$ | 1 |
| `doppler_observer` | `f v_o v_sound f'` | $f' = f\frac{v+v_o}{v}$ | 1 |
| `beats` | `f₁ f₂` | $f_{\text{beat}} = |f_1-f_2|$ | 1 |
| `sound_level` | `I` | $\beta = 10\log_{10}(I/10^{-12})$ dB | 1 |
| `snell` | `n₁ θ₁ n₂ θ₂` | $n_1\sin\theta_1 = n_2\sin\theta_2$ | 1 |
| `critical` | `n₁ n₂` | $\theta_c = \sin^{-1}(n_2/n_1)$ | 1 |
| `lens` | `f d_o d_i` | $\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$ | 3 |
| `magnification` | `d_i d_o m` | $m = -d_i/d_o$ | 1 |
| `fringe_spacing` | `λ L d Δy` | $\Delta y = \lambda L/d$ | 1 |
| `malus` | `I₀ θ I` | $I = I_0\cos^2\theta$ | 1 |
| `brewster` | `n₁ n₂` | $\theta_B = \tan^{-1}(n_2/n_1)$ | 1 |

### 7.5 Modern Physics

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `photo_E` | `f φ K_max` | $K_{\max} = hf - \phi$ | 1 |
| `photon_Eλ` | `λ` | $E = hc/\lambda$ (eV) | 1 |
| `deBroglie` | `m v λ` | $\lambda = h/(mv)$ | 1 |
| `bohr_E` | `n` | $E_n = -13.6/n^2$ eV | 1 |
| `bohr_transition` | `n_i n_f` | $\Delta E, \lambda$ | 2 |
| `time_dilation` | `Δt₀ v_c` | $\Delta t = \gamma \Delta t_0$ | 2 |
| `length_contraction` | `L₀ v_c` | $L = L_0/\gamma$ | 1 |
| `halflife_nuclear` | `N₀ n` | $N = N_0/2^n$ | 1 |
| `binding_energy` | `Δm` | $E_B = \Delta m \cdot c^2$ | 1 |
| `compton_shift` | `θ` | $\Delta\lambda = \lambda_c(1-\cos\theta)$ | 1 |
| `relativistic_KE` | `m v_c` | $K = (\gamma-1)mc^2$ | 2 |
| `rest_energy` | `m` | $E_0 = mc^2$ | 1 |

---

## 8. Full Operator Reference

| Operator | Name | Syntax | Example |
|----------|------|--------|---------|
| `?` | target marker | `concept a ? c` | `force 5 ? 30` |
| `>` | bridge | `conceptA params > conceptB params` | `hit_spring 0.01 300 2 500 ! ~` |
| `∝` | proportional | `concept ∝ var factor` | `kinetic ∝ v 3` |
| `?>` | threshold | `concept params ?>` | `will_slip 0.3 37 ?>` |
| `±` | sign | `concept params ±` | `work_sign 10 5 120 ±` |
| `@special` | special case | `@special concept params` | `@special elastic_eqmass 5 3 0` |
| `<=>` | comparison | `concept params <=>` | `friction_compare 0.6 0.4 50 <=>` |
| `@vec` | vector decomp | `@vec type mag angle` | `@vec force 30 37` |
| `??` | equation select | `?? domain known target` | `?? kin_find v0 a t dx` |
| `!` | unit check | (flag) | `force 5 3 ? !` |
| `~` | dimension check | (flag) | `force 5 3 ? ~` |

---

## 9. Card Coverage

| Lane / Operator | Card Count | Method |
|------|:---:|--------|
| A (single-step) | ~200 | `concept a b ?` |
| A (multi-step) | ~35 | `concept a b c d` |
| B (trigger $\to$ equation) | ~40 | `trigger !` |
| C (constants) | ~18 | `constant !` |
| C (conversions) | ~18 | `conversion !` |
| C (dimensions) | ~25 | `quantity_dim` |
| Bridge (`>`) | ~17 | `conceptA > conceptB` |
| `∝` (proportional) | ~16 | `concept ∝ var k` |
| `?>` (threshold) | ~10 | `concept params ?>` |
| `±` (sign) | ~10 | `concept params ±` |
| `@special` (special case) | ~14 | `@special concept params` |
| `<=>` (comparison) | ~7 | `concept params <=>` |
| `@vec` (vector) | ~4 | `@vec type mag angle` |
| `??` (equation select) | ~8 | `?? domain known target` |
| **Total** | **~422** | |

> 430 original cards. ~422 are trainable with Physcript (98%).  
> The remaining ~8 are pure graph interpretation or experimental design that cannot be reduced to a positional command.

---

## 10. Quick Reference

```
# === Single calc, target unknown ===
force 5 3 ? !                 → F = 15 N

# === Single calc, inverse direction ===
force ? 3 30 !                → m = 10 kg

# === Multi-step chain ===
incline 37 5 0.25 10 ! ~      → 5 calculations + unit + dimension

# === Full meta-checks ===
incline 37 5 0.25 10 !! ~~    → check every step

# === Flash recall (Lane B) ===
rest !                        → v₀ = 0
frictionless ! ~              → f = 0

# === Constant (Lane C) ===
planck !                      → h = 6.626 × 10⁻³⁴ J·s
force_dim                     → [M][L][T]⁻²

# === Bridge ===
hit_spring 0.01 300 2 500 ! ~ → bullet → block → spring

# === Proportional reasoning ===
kinetic ∝ v 3                 → K × 9
gravity ∝ r 2                 → F × ¼

# === Threshold decision ===
will_slip 0.3 37 ?>           → YES, slips
photo_emit 400 3 ?>           → YES, emits

# === Sign determination ===
work_sign 10 5 120 ±          → W = −25 J (negative)

# === Special case ===
@special elastic_eqmass 5 3 0 → v₁_f=0, v₂_f=5 m/s
@special max_range 20 10      → R_max = 40 m

# === Comparison ===
friction_compare 0.6 0.4 50 <=>  → f_s_max=30 > f_k=20

# === Vector decomposition ===
@vec force 30 37              → F_x=24.0, F_y=18.1 N

# === Equation selection ===
?? kin_find v0 a t dx         → Δx = v₀t + ½at² → compute
```
