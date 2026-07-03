# Physcript v2: Physics Calculation Retrieval Notation

> **"If you can calculate it, you have understood it."**
>
> Physcript is a positional, zero-ceremony notation for rapid-fire calculation drills.
> One line = 3–7 retrievals. No variable names. No prose. Just positions and flags.
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
| **`>` bridge** | Chains two domains. Output of A → input of B. Bridge variable is explicit: `>var`. |
| **`|` interleave** | Deliberately mixed concepts. Forces context-switching. |
| **No variable names** | `force 5 3 ?` NOT `force m=5 a=3 F=?`. The brain supplies the mapping. |

---

## 2. Operators — The Rule of 5

| # | Operator | Name | Syntax | Cognitive Action |
|:--:|:--:|------|------|------|
| 1 | `?` | target | `concept a ? c` | Identify unknown; compute |
| 2 | `>` | bridge | `conceptA params >var conceptB params` | Chain two domains via explicit bridge |
| 3 | `∝` | relation | `concept ∝ var k` | Proportional reasoning, comparison |
| 4 | `?>` | decide | `concept params ?> direction` | Threshold yes/no, sign determination |
| 5 | `@` | template | `@template params` | Special case, vector decomp, equation select |

### 2.1 `?` — Target Unknown (Lane A)

```
force 5 3 ?       →  m=5, a=3, F=? → 15 N
force 5 ? 30      →  m=5, F=30, a=? → 6 m/s²
force ? 3 30      →  a=3, F=30, m=? → 10 kg
kinetic 2 5 ?     →  K = ½·2·5² = 25 J
```

### 2.2 `>` — Cross-Domain Bridge

Bridge variable is **explicit** — the brain must identify what crosses domains.

```
hit_spring 0.01 300 2 >vf spring_compress 2 500 ! ~
→ [A: collision] vf = m_b·v_b/(M+m_b) = 1.49 m/s
→ [B: spring]    x = √(2K/k) = √((M+m)vf²/k) = 0.0947 m
→ Bridge variable: vf (post-collision velocity)

ballistic 0.01 300 2 >vf pendulum_rise 2 10 ! ~
→ [A: momentum]  m_b·v_b = (M+m)vf → vf = 1.49 m/s
→ [B: energy]    ½(M+m)vf² = (M+m)gh → h = 0.113 m
→ Bridge variable: vf

fall_spring 2 5 >v spring_compress 500 ! ~
→ [A: freefall]  v = √(2gh) = √(2·10·5) = 10 m/s
→ [B: spring]    ½mv² = ½kx² → x = 0.632 m
→ Bridge variable: v (impact velocity)
```

### 2.3 `∝` — Proportional & Comparison Reasoning

Merges proportional reasoning and comparison into one operator.

```
# Proportional: "If X changes by factor k, Y changes by ?"
kinetic ∝ v 3              →  K ∝ v², v×3 → K ×9
gravity ∝ r 2              →  F ∝ 1/r², r×2 → F ×¼
centripetal ∝ v 2          →  a_c ∝ v², v×2 → a_c ×4
kepler_T ∝ r 4             →  T² ∝ r³, r×4 → T ×8
flow_rate ∝ r 2            →  Q ∝ r⁴, r×2 → Q ×16
sound_intensity ∝ r 5      →  I ∝ 1/r², r×5 → I ×¹⁄₂₅
wave_speed_string ∝ F_T 4  →  v ∝ √F_T, F_T×4 → v ×2
mass_spring_T ∝ k 4        →  T ∝ 1/√k, k×4 → T ×½
resistance_power ∝ I 3     →  P ∝ I², I×3 → P ×9
coulomb_force ∝ r 2        →  F ∝ 1/r², r×2 → F ×¼
stefan ∝ T 2               →  P ∝ T⁴, T×2 → P ×16
vrms ∝ T 4                 →  v ∝ √T, T×4 → v ×2

# Comparison: "Compute both, state relationship"
friction_compare 0.6 0.4 50 ∝  → f_s_max=30N, f_k=20N → f_s > f_k ✓
series_vs_parallel 6 12 ∝      → series=18Ω, parallel=4Ω → series > parallel
elastic_vs_inelastic 4 6 2 0 ∝ → p conserved both; K only in elastic
```

### 2.4 `?>` — Threshold Decision & Sign

Merges yes/no decisions and sign determinations.

```
# Threshold: compute → decide
will_slip 0.3 37 ?>           → tan37°=0.754 > 0.3 → YES, slips
will_move 0.5 60 25 ?>        → f_max=30, 25<30 → NO
will_float 900 1000 ?>        → 900<1000 → YES
loop_safe 5 12 1 ?>           → v_top²=40, N≥0 → YES
photo_emit 400 3 ?>           → E=3.1eV > 3eV → YES
critical_check 1.5 1 50 ?>    → θ_c=41.8°, 50°>41.8° → YES, TIR
breaks_check 80 100 ?>        → T=80 < T_max=100 → NO
reynolds_check 1000 2 0.1 0.001 ?> → Re=200k > 3000 → YES, turbulent
spontaneous_redox 0.76 ?>     → E°>0 → YES
equilibrium_shift 0.5 2 ?>    → Q=0.5 < K=2 → RIGHT

# Sign: determine sign → compute magnitude
work_sign 10 5 120 ?>         → cos120°=−0.5 → W=−25 J (negative)
lens_sign 20 30 ?>            → d_i=60>0 → real image (+)
charge_sign 3 -2 ?>           → opposite → attractive (−)
doppler_sign 440 20 toward ?> → toward → f'>f → blueshift (+Δf)
torque_sign 5 2 30 cw ?>      → CW=(−) → τ=−5 N·m
freefall_sign ?>              → a_y = −g = −10 m/s²
```

### 2.5 `@` — Template Application

Merges special cases, vector decomposition, and equation selection.

```
# Special cases
@elastic_eqmass 5 3 0         → m₁=m₂, v₂ᵢ=0 → v₁_f=0, v₂_f=5 m/s
@max_range 20 10              → θ=45° → R_max = v₀²/g = 40 m
@freefall_up 20 10            → t_up=2s, t_total=4s, h_max=20m
@rms_ac 170                   → V_peak=170V → V_rms = 170/√2 = 120V
@half_life_count 1000 3       → N = 1000/8 = 125
@bohr_ground                  → E₁ = −13.6 eV
@photon_visible 550           → E = 1240/550 = 2.25 eV
@compton_90                   → θ=90° → Δλ = λ_c = 0.00243 nm

# Vector decomposition
@vec force 30 37              → F_x=24.0N, F_y=18.1N
@vec velocity 50 53           → v_x=30.1, v_y=39.9 m/s
@vec momentum 10 30           → p_x=8.66, p_y=5.00 kg·m/s

# Equation selection
@kin_find v0 a t dx           → Use Δx = v₀t + ½at² → compute
@kin_find v0 a dx v           → Use v² = v₀² + 2aΔx → compute
@gas_find P V T n             → Use n = PV/(RT) → compute
@circuit_find parallel R₁ R₂ Req → Use 1/Req = 1/R₁ + 1/R₂ → compute
```

---

## 3. Flags — Unified System

| Flag | Name | Effect |
|------|------|--------|
| `!` | unit-check | Verify units on final answer. |
| `!!` | unit-all | Verify units on **every step**. |
| `~` | dim-check | Verify dimensions on final answer. (Physics only) |
| `~~` | dim-all | Verify dimensions on **every step**. |
| `!~` | unit+dim | Both checks on final answer. |
| `!!~~` | full | Both checks on every step. Maximum difficulty. |
| `#` | sig-fig | Verify significant figures. |
| `!#` | unit+sigfig | Unit + sig-fig checks. |
| `?@` | contract | **Recall positional contract only.** No calculation. |
| `!?` | error-detect | **Find the deliberate error** in notation or contract. |

### 3.1 `?@` — Contract Self-Check

> Recall the parameter order without calculating. Tests pure memory of the contract.

```
force ?@           → contract: (m, a, F)
boyle ?@           → contract: (P₁, V₁, V₂, P₂)
incline ?@         → contract: (θ, m, μ, g) → [mg_sinθ, mg_cosθ, N, f_k, a]
projectile ?@      → contract: (v₀, θ, g) → [v_0x, v_0y, t_peak, h_max, t_flight, R]
ohms ?@            → contract: (I, R, V)
coulomb ?@         → contract: (q₁, q₂, r, k, F)
```

### 3.2 `!?` — Error Detection

> The notation contains a deliberate error. Find it.

```
boyle 1 10 ? 5 !?          → ERROR: boyle contract=(P₁,V₁,V₂,P₂).
                              ? at position 3 means "find V₂" but we already have V₂=5.
                              Correct: boyle 1 ? 5 10 (find V₁) or boyle 1 10 5 ? (find P₂)

force ? 3 30 !?            → OK. contract=(m,a,F). ? at pos1 = find m. m=F/a=10kg.

will_slip 0.3 37 ?> !?     → Contract: will_slip=(μ_s, θ). Both given. OK.

kinetic ∝ m 2 !?           → Contract: kinetic ∝ (var, factor). K ∝ m (not m²).
                              m×2 → K ×2. OK.
```

---

## 4. Lane A — Multi-Step Chains

```
incline 37 5 0.25 10 ! ~
→ [1/5] mg sinθ = 5×10×sin37° = 30.1 N
→ [2/5] mg cosθ = 5×10×cos37° = 39.9 N
→ [3/5] N = mg cosθ = 39.9 N
→ [4/5] fₖ = μₖN = 0.25×39.9 = 9.98 N
→ [5/5] a = (mg sinθ − fₖ)/m = 4.02 m/s²

collision 4 6 2 0 ! ~
→ [1/5] pᵢ = m₁v₁ + m₂v₂ = 24 kg·m/s
→ [2/5] v_f = pᵢ/(m₁+m₂) = 4.0 m/s
→ [3/5] Kᵢ = ½m₁v₁² + ½m₂v₂² = 72 J
→ [4/5] K_f = ½(m₁+m₂)v_f² = 48 J
→ [5/5] ΔK = −24 J (→ heat)

projectile 20 53 10 ! ~
→ [1/6] v₀ₓ = v₀ cosθ = 12.0 m/s
→ [2/6] v₀ᵧ = v₀ sinθ = 16.0 m/s
→ [3/6] t_peak = v₀ᵧ/g = 1.60 s
→ [4/6] h_max = v₀ᵧ²/(2g) = 12.8 m
→ [5/6] t_flight = 2·v₀ᵧ/g = 3.20 s
→ [6/6] R = v₀ₓ·t_flight = 38.4 m
```

---

## 5. Lane B — Flash Recall

> Trigger phrase → equation. No numbers. Pure recall.

```
rest            →  v₀ = 0
stops           →  v = 0
peak            →  v_y = 0, a_y = −g
frictionless    →  f = 0
equilibrium     →  ΣF_x=0, ΣF_y=0, Στ=0
just_slip       →  f_s = μ_s N
loses_contact   →  N = 0
breaks          →  T = T_max
coasting        →  a = 0
terminal        →  ΣF = 0, mg = F_D
conservative    →  E_i = E_f
elastic         →  Σp_i = Σp_f AND ΣK_i = ΣK_f
inelastic       →  m₁v₁ + m₂v₂ = (m₁+m₂)v_f
recoil          →  m_g v_g + m_b v_b = 0
explosion       →  Σp_i = Σp_f
no_slip         →  v = ωR, a = αR
ideal_pulley    →  T uniform on both sides
massless_rope   →  T same at both ends
constant_v      →  a = 0, Δx = vt
constant_T      →  P₁V₁ = P₂V₂
constant_P      →  V₁/T₁ = V₂/T₂
constant_V      →  P₁/T₁ = P₂/T₂
adiabatic       →  Q = 0, PV^γ = const
sealed          →  P₁V₁/T₁ = P₂V₂/T₂
free_fall       →  a_y = −g = −9.8 m/s²
returns_same_h  →  Δy = 0
orbit_cond      →  GMm/r² = mv²/r
spontaneous_gal →  E°_cell > 0
```

---

## 6. Lane C — Constants, Conversions, Dimensions

### 6.1 Physical Constants

```
planck          →  h = 6.626×10⁻³⁴ J·s
c_light         →  c = 3.00×10⁸ m/s
g_earth         →  g = 9.8 m/s²
G_newton        →  G = 6.67×10⁻¹¹ N·m²/kg²
k_coulomb       →  k = 8.99×10⁹ N·m²/C²
eps0            →  ε₀ = 8.85×10⁻¹² C²/(N·m²)
mu0             →  μ₀ = 4π×10⁻⁷ T·m/A
NA_avo          →  N_A = 6.022×10²³ mol⁻¹
R_gas           →  R = 8.314 J/(mol·K) = 0.08206 L·atm/(mol·K)
F_faraday       →  F = 9.65×10⁴ C/mol
kB_boltz        →  k_B = 1.38×10⁻²³ J/K
eV_joule        →  1 eV = 1.60×10⁻¹⁹ J
sigma_stef      →  σ = 5.67×10⁻⁸ W/(m²·K⁴)
e_charge        →  e = 1.60×10⁻¹⁹ C
m_electron      →  m_e = 9.11×10⁻³¹ kg
m_proton        →  m_p = 1.67×10⁻²⁷ kg
h_bar           →  ℏ = 1.055×10⁻³⁴ J·s
compton_lambda  →  λ_c = 2.43×10⁻¹² m
rydberg         →  R_∞ = 1.097×10⁷ m⁻¹
```

### 6.2 Unit Conversions

```
c_to_k          →  T_K = T_C + 273.15
atm_to_pa       →  1 atm = 1.013×10⁵ Pa
atm_to_mmhg     →  1 atm = 760 mmHg
L_to_m3         →  1 L = 10⁻³ m³
cal_to_J        →  1 cal = 4.186 J
kwh_to_J        →  1 kWh = 3.6×10⁶ J
rpm_to_rads     →  × 2π/60
kmh_to_ms       →  ÷ 3.6
uC_to_C         →  × 10⁻⁶
nC_to_C         →  × 10⁻⁹
G_to_T          →  1 G = 10⁻⁴ T
u_to_kg         →  1 u = 1.661×10⁻²⁷ kg
u_to_MeV        →  1 u = 931.5 MeV/c²
angstrom_to_m   →  1 Å = 10⁻¹⁰ m
bar_to_Pa       →  1 bar = 10⁵ Pa
hp_to_W         →  1 hp = 746 W
```

### 6.3 Dimensions

```
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
| `loop` | `R g` | $v_{\text{top},\min}, h_{\min}$ | 2 |
| `orbit` | `M R G` | $v_{\text{orbit}}, T, v_{\text{esc}}$ | 3 |
| `gravity` | `m₁ m₂ r G` | $F = Gm_1m_2/r^2$ | 1 |
| `escape` | `M R G` | $v_{\text{esc}} = \sqrt{2GM/R}$ | 1 |
| `torque` | `r F θ τ` | $\tau = rF\sin\theta$ | 1 |
| `angmom` | `I ω L` | $L = I\omega$ | 1 |
| `rot_ke` | `I ω K` | $K_{\text{rot}} = \frac{1}{2}I\omega^2$ | 1 |
| `vf_at` | `v₀ a t v` | $v = v_0 + at$ | 1 |
| `dx_v0t` | `v₀ t a Δx` | $\Delta x = v_0t + \frac{1}{2}at^2$ | 1 |
| `vf2_v02` | `v₀ a Δx v` | $v^2 = v_0^2 + 2a\Delta x$ | 1 |
| `dx_vavg` | `v₀ v t Δx` | $\Delta x = \frac{1}{2}(v_0+v)t$ | 1 |
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
| `hollow_sphere_I` | `M R I` | $I = \frac{2}{3}MR^2$ | 1 |
| `rod_center_I` | `M L I` | $I = \frac{1}{12}ML^2$ | 1 |
| `rod_end_I` | `M L I` | $I = \frac{1}{3}ML^2$ | 1 |
| `parallel_axis` | `I_cm M d I` | $I = I_{cm} + Md^2$ | 1 |
| `angmom_cons` | `I_i ω_i I_f ω_f` | $I_i\omega_i = I_f\omega_f$ | 1 |
| `mass_spring_T` | `m k` | $T = 2\pi\sqrt{m/k}, \omega$ | 2 |
| `mass_spring_ω` | `k m ω` | $\omega = \sqrt{k/m}$ | 1 |
| `roll_incline` | `θ g I m R a` | $a = \frac{g\sin\theta}{1+I/(mR^2)}$ | 1 |
| `rest_energy` | `m E₀` | $E_0 = mc^2$ | 1 |
| `total_energy_rel` | `m v_c E` | $E = \gamma mc^2$ | 2 |
| `rel_KE` | `m v_c K` | $K = (\gamma-1)mc^2$ | 2 |

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
| `voltage_power` | `V R P` | $P = V^2/R$ | 1 |
| `parallel2` | `R₁ R₂ Req` | $R_{\text{eq}} = \frac{R_1R_2}{R_1+R_2}$ | 1 |
| `series_r` | `R₁ R₂ R₃ V` | $R_{\text{total}}, I, V_1, V_2, V_3$ | 5 |
| `parallel_r` | `R₁ R₂ V` | $R_{\text{eq}}, I_{\text{total}}, I_1, I_2$ | 4 |
| `capacitor_Q` | `C V Q` | $Q = CV$ | 1 |
| `capacitor_U` | `C V U` | $U = \frac{1}{2}CV^2$ | 1 |
| `capacitor_U_Q` | `Q C U` | $U = Q^2/(2C)$ | 1 |
| `parallel_plate_C` | `ε₀ A d C` | $C = \varepsilon_0 A/d$ | 1 |
| `dielectric_C` | `κ C₀ C` | $C = \kappa C_0$ | 1 |
| `rc_time` | `R C τ` | $\tau = RC$ | 1 |
| `rc_charge` | `Q_max t τ q` | $q = Q_{\max}(1-e^{-t/RC})$ | 1 |
| `rc_discharge` | `I₀ t τ I` | $I = I_0e^{-t/RC}$ | 1 |
| `mag_force_q` | `q v B θ F` | $F = qvB\sin\theta$ | 1 |
| `mag_force_wire` | `I L B θ F` | $F = ILB\sin\theta$ | 1 |
| `cyclotron` | `m v q B` | $r = mv/(qB), T = 2\pi m/(qB)$ | 2 |
| `motional_emf` | `B L v ε` | $\mathcal{E} = BLv$ | 1 |
| `transformer` | `N_p N_s V_p` | $V_s, I_s/I_p$ ratio | 2 |
| `lc_osc` | `L C` | $\omega = 1/\sqrt{LC}, T$ | 2 |
| `vterminal` | `ε I r V` | $V = \mathcal{E} - Ir$ | 1 |
| `wire_B` | `μ₀ I r B` | $B = \mu_0 I/(2\pi r)$ | 1 |
| `loop_center_B` | `μ₀ I R B` | $B = \mu_0 I/(2R)$ | 1 |
| `solenoid_B` | `μ₀ n I B` | $B = \mu_0 n I$ | 1 |
| `mag_flux` | `B A θ Φ_B` | $\Phi_B = BA\cos\theta$ | 1 |
| `faraday_emf` | `N ΔΦ Δt ε` | $|\mathcal{E}| = N\Delta\Phi/\Delta t$ | 1 |
| `inductor_energy` | `L I U` | $U = \frac{1}{2}LI^2$ | 1 |
| `rl_time` | `L R τ` | $\tau = L/R$ | 1 |
| `wire_force_parallel` | `μ₀ I₁ I₂ d F_L` | $F/L = \mu_0 I_1 I_2/(2\pi d)$ | 1 |
| `generator_emf` | `N B A ω t ε` | $\mathcal{E} = NBA\omega\sin(\omega t)$ | 1 |
| `rms_ac` | `V₀ V_rms` | $V_{\text{rms}} = V_0/\sqrt{2}$ | 1 |

### 7.3 Thermo & Fluids

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `gas_n` | `P V T R n` | $n = PV/(RT)$ | 1 |
| `boyle` | `P₁ V₁ V₂ P₂` | $P_2 = P_1V_1/V_2$ | 1 |
| `charles` | `V₁ T₁ T₂ V₂` | $V_2 = V_1 T_2/T_1$ | 1 |
| `gay_lussac` | `P₁ T₁ T₂ P₂` | $P_2 = P_1 T_2/T_1$ | 1 |
| `combined_gas` | `P₁ V₁ T₁ P₂ V₂ T₂` | $P_1V_1/T_1 = P_2V_2/T_2$ | 1 |
| `heat` | `m c ΔT Q` | $Q = mc\Delta T$ | 1 |
| `latent` | `m L Q` | $Q = mL$ | 1 |
| `first_law` | `Q W ΔU` | $\Delta U = Q - W$ | 1 |
| `isothermal_work` | `n R T V_i V_f W` | $W = nRT\ln(V_f/V_i)$ | 1 |
| `carnot` | `T_H T_C η` | $\eta = 1 - T_C/T_H$ | 1 |
| `heat_engine_eff` | `Q_H Q_C η` | $\eta = 1 - Q_C/Q_H$ | 1 |
| `thermal_exp` | `α L₀ ΔT ΔL` | $\Delta L = \alpha L_0\Delta T$ | 1 |
| `vol_exp` | `β V₀ ΔT ΔV` | $\Delta V = \beta V_0\Delta T$ | 1 |
| `conduction` | `k A ΔT L Q_t` | $Q/t = kA\Delta T/L$ | 1 |
| `stefan` | `σ A e T P` | $P = \sigma AeT^4$ | 1 |
| `wien` | `T λ_max` | $\lambda_{\max}T = 2.90\times10^{-3}$ m·K | 1 |
| `vrms` | `R T M v` | $v_{\text{rms}} = \sqrt{3RT/M}$ | 1 |
| `avg_KE_gas` | `T K_avg` | $\bar{K} = \frac{3}{2}k_B T$ | 1 |
| `pressure_depth` | `P₀ ρ h g P` | $P = P_0 + \rho gh$ | 1 |
| `buoyancy` | `ρ V g F_B` | $F_B = \rho gV$ | 1 |
| `continuity` | `A₁ v₁ A₂ v₂` | $v_2 = A_1v_1/A_2$ | 1 |
| `bernoulli` | `P₁ ρ v₁ y₁ P₂ v₂ y₂` | $P + \frac{1}{2}\rho v^2 + \rho gy = \text{const}$ | 1 |
| `torricelli` | `h g v` | $v = \sqrt{2gh}$ | 1 |
| `pascal` | `F₁ A₁ A₂ F₂` | $F_2 = F_1 A_2/A_1$ | 1 |
| `density_calc` | `m V ρ` | $\rho = m/V$ | 1 |
| `poiseuille` | `r ΔP η L Q` | $Q = \pi r^4\Delta P/(8\eta L)$ | 1 |
| `reynolds` | `ρ v D η Re` | $\mathrm{Re} = \rho v D/\eta$ | 1 |
| `capillary` | `γ θ ρ g r h` | $h = 2\gamma\cos\theta/(\rho g r)$ | 1 |

### 7.4 Waves & Optics

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `wavespeed` | `f λ v` | $v = f\lambda$ | 1 |
| `wave_on_string` | `F_T μ v` | $v = \sqrt{F_T/\mu}$ | 1 |
| `string_harm` | `n L F_T μ f_n` | $f_n = \frac{n}{2L}\sqrt{F_T/\mu}$ | 1 |
| `open_pipe` | `n L v_sound f_n` | $f_n = nv/(2L)$ | 1 |
| `closed_pipe` | `n L v_sound f_n` | $f_n = nv/(4L)$ (n odd) | 1 |
| `doppler_s` | `f v_s v_sound f'` | $f' = f\frac{v}{v-v_s}$ | 1 |
| `doppler_o` | `f v_o v_sound f'` | $f' = f\frac{v+v_o}{v}$ | 1 |
| `beats` | `f₁ f₂ f_beat` | $f_{\text{beat}} = |f_1-f_2|$ | 1 |
| `sound_level` | `I β` | $\beta = 10\log_{10}(I/10^{-12})$ dB | 1 |
| `sound_intensity` | `P r I` | $I = P/(4\pi r^2)$ | 1 |
| `snell` | `n₁ θ₁ n₂ θ₂` | $n_1\sin\theta_1 = n_2\sin\theta_2$ | 1 |
| `critical` | `n₁ n₂ θ_c` | $\theta_c = \sin^{-1}(n_2/n_1)$ | 1 |
| `lens` | `f d_o d_i` | $\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$ | 3 |
| `magnification` | `d_i d_o m` | $m = -d_i/d_o$ | 1 |
| `mirror_f` | `R f` | $f = R/2$ | 1 |
| `fringe_spacing` | `λ L d Δy` | $\Delta y = \lambda L/d$ | 1 |
| `dslit_bright` | `d θ m λ` | $d\sin\theta = m\lambda$ | 1 |
| `dslit_dark` | `d θ m λ` | $d\sin\theta = (m+\frac{1}{2})\lambda$ | 1 |
| `sslit_dark` | `a θ m λ` | $a\sin\theta = m\lambda$ | 1 |
| `malus` | `I₀ θ I` | $I = I_0\cos^2\theta$ | 1 |
| `brewster` | `n₁ n₂ θ_B` | $\theta_B = \tan^{-1}(n_2/n_1)$ | 1 |
| `rayleigh` | `λ D θ_min` | $\theta_{\min} = 1.22\lambda/D$ | 1 |
| `lens_maker` | `n R₁ R₂ f` | $\frac{1}{f} = (n-1)(\frac{1}{R_1}-\frac{1}{R_2})$ | 1 |

### 7.5 Modern Physics

| Keyword | Contract | Equation | Steps |
|---------|----------|----------|:---:|
| `photo_E` | `f φ K_max` | $K_{\max} = hf - \phi$ | 1 |
| `photon_Eλ` | `λ E` | $E = hc/\lambda$ | 1 |
| `photon_p` | `λ p` | $p = h/\lambda$ | 1 |
| `threshold_f` | `φ f₀` | $f_0 = \phi/h$ | 1 |
| `stopping_V` | `K_max e V_s` | $eV_s = K_{\max}$ | 1 |
| `deBroglie` | `m v λ` | $\lambda = h/(mv)$ | 1 |
| `bohr_E` | `n E_n` | $E_n = -13.6/n^2$ eV | 1 |
| `bohr_transition` | `n_i n_f` | $\Delta E, \lambda$ | 2 |
| `rydberg` | `R n_i n_f λ` | $\frac{1}{\lambda} = R(\frac{1}{n_f^2}-\frac{1}{n_i^2})$ | 1 |
| `compton_shift` | `θ Δλ` | $\Delta\lambda = \lambda_c(1-\cos\theta)$ | 1 |
| `time_dilation` | `Δt₀ v_c Δt` | $\Delta t = \gamma \Delta t_0$ | 2 |
| `length_contraction` | `L₀ v_c L` | $L = L_0/\gamma$ | 1 |
| `lorentz_γ` | `v_c γ` | $\gamma = 1/\sqrt{1-v^2/c^2}$ | 1 |
| `rel_momentum` | `m v_c p` | $p = \gamma mv$ | 2 |
| `energy_momentum_rel` | `p m E` | $E^2 = (pc)^2 + (mc^2)^2$ | 1 |
| `halflife_nuclear` | `N₀ n N` | $N = N_0/2^n$ | 1 |
| `decay_exp` | `N₀ λ t N` | $N = N_0 e^{-\lambda t}$ | 1 |
| `activity_A` | `λ N A` | $A = \lambda N$ | 1 |
| `binding_energy` | `Δm E_B` | $E_B = \Delta m c^2$ | 1 |
| `heisenberg_xp` | `Δx Δp` | $\Delta x\Delta p \ge \hbar/2$ | 1 |
| `heisenberg_Et` | `ΔE Δt` | $\Delta E\Delta t \ge \hbar/2$ | 1 |

### 7.6 Rotational Inertia (Memorization)

| Keyword | Contract | Value |
|---------|----------|-------|
| `I_point` | `m r I` | $I = mr^2$ |
| `I_solid_cyl` | `M R I` | $I = \frac{1}{2}MR^2$ |
| `I_solid_sphere` | `M R I` | $I = \frac{2}{5}MR^2$ |
| `I_hollow_sphere` | `M R I` | $I = \frac{2}{3}MR^2$ |
| `I_rod_center` | `M L I` | $I = \frac{1}{12}ML^2$ |
| `I_rod_end` | `M L I` | $I = \frac{1}{3}ML^2$ |

### 7.7 Implicit Zero Catalog (Lane B)

| Keyword | Hidden Value |
|---------|-------------|
| `rest` | $v_0 = 0$ |
| `stops` | $v = 0$ |
| `peak` | $v_y = 0$ |
| `frictionless` | $f = 0$ |
| `massless` | $m = 0$ |
| `ideal` | no energy loss |
| `returns_start` | $\Delta x = 0$ |
| `just_slip` | $f_s = \mu_s N$ (at max) |
| `loses_contact` | $N = 0$ |
| `breaks` | $T = T_{\max}$ |
| `constant_v` | $a = 0$ |
| `equilibrium` | $\sum F = 0$, $\sum \tau = 0$ |
| `free_fall_orbit` | $N = 0$ (weightlessness) |

---

## 8. Cross-Domain Bridge Catalog

| Keyword | Params | Domain A → Bridge → Domain B |
|---------|--------|------------------------------|
| `hit_spring` | `m_b v_b M k` | collision → **vf** → spring compression |
| `ballistic` | `m_b v_b M L` | collision → **vf** → pendulum rise |
| `fall_spring` | `m h k` | freefall → **v** → spring compression |
| `slide_hit` | `v₀ μ d m₁ m₂` | friction decel → **v** → collision |
| `loop_drop` | `R h g` | energy → **v_top** → circular dynamics |
| `accel_cyclotron` | `V B` | e-static → **v** → cyclotron orbit |
| `motor_brake` | `B L m R` | Faraday → **I** → magnetic braking |
| `photo_stop` | `λ φ` | photoelectric → **K_max** → stopping voltage |
| `solar_sail` | `I A m` | radiation pressure → **F** → acceleration |
| `nuclear_heat` | `Δm m_water` | mass defect → **E** → water heating |
| `doppler_wall` | `f v_s v_obs v_sound` | source→wall → **f'** → wall→observer |
| `gas_piston_osc` | `P₀ A V₀ m` | gas → **k_eff** → SHM period |
| `heat_leak` | `T_H T_C k A L t` | conduction → **Q** → ΔT |
| `stretch_osc` | `k x m` | static spring → **F** → SHM period |
| `selector_filter` | `E B₁ B₂` | velocity selector → **v** → mass separation |
| `charge_plate` | `q m V d L` | acceleration → **v** → projectile deflection |
| `orbit_transfer` | `r₁ r₂ M` | circular orbit → **a** → Hohmann ellipse |
| `roll_loop` | `R h m` | energy → **v_top** → N ≥ 0? |
| `bowling_ball` | `v₀ μ_k R m` | sliding → **v=ωR** → pure rolling |
| `yo_yo` | `m R g` | translation → **a=αR** → rotation |
| `massive_pulley` | `m₁ m₂ M R g` | translation → **a=αR** → pulley torque |
| `millikan` | `q E mg b v_term` | E-field + gravity + drag → **ΣF=0** → q |
| `railgun` | `I L B m d` | mag force → **a** → kinematics |
| `sliding_rod` | `B L m R g` | motional emf → **I** → mag brake force |
| `gas_spring_piston` | `P₀ A k n V₀ T` | gas law → **P** → spring force |
| `sound_derivation` | `γ R T M` | adiabatic gas → **B** → $v = \sqrt{\gamma RT/M}$ |
| `torricelli_range` | `h H g` | efflux → **v** → projectile range |
| `pitot` | `ρ_fluid ρ g Δh` | Bernoulli → **v** → manometer reading |
| `buoyant_SHM` | `ρ g A m` | buoyancy → **k_eff** → SHM period |

---

## 9. Interleaving — The `|` Separator

> `|` forces context-switching between different concept types. This is **the single most effective retrieval strategy.** Blocked practice (all kinematics, then all forces) creates an illusion of mastery. Interleaved practice builds durable memory.

```
# Mechanics interleave
force 5 3 ? | kinetic 2 5 ? | momentum 4 3 ? | work 10 5 60 ?

# Cross-domain interleave
force ? 4 20 | ohms 2 ? 12 | heat 2 4186 10 ? | snell 1.33 30 1 ? 

# Operator interleave
force 5 3 ? | will_slip 0.4 30 ?> | kinetic ∝ v 2 | @vec force 50 37

# Bridge interleave
hit_spring 0.01 300 2 >vf spring_compress 500 ! |
ballistic 0.01 300 2 >vf pendulum_rise 2 10 ! |
fall_spring 2 5 >v spring_compress 500 !
```

---

## 10. Progressive Difficulty — Implicit Levels

| Level | Pattern | Example | Cognitive Load |
|:-----:|------|------|:---:|
| L1 | `?` at last position | `force 5 3 ?` | Lowest — direct substitution |
| L2 | `?` at middle position | `force 5 ? 30` | Medium — algebraic rearrangement |
| L3 | `?` at first position | `force ? 3 30` | High — inverse relation |
| L4 | Multi-step chain | `incline 37 5 0.25 10 !` | Higher — sequential computation |
| L5 | Bridge + all flags | `hit_spring 0.01 300 2 >vf spring_compress 500 !!~~` | Maximum — cross-domain + meta-checks |

> **Study rule:** Rotate through L1→L5 for each concept before moving to the next concept.
> Never do more than 3 of the same concept type consecutively — use `|` to interleave.

---

## 11. Quick Reference

```
# === Single calc ===
force 5 3 ? !                 → F = 15 N
force ? 3 30 !                → m = 10 kg

# === Multi-step chain ===
incline 37 5 0.25 10 ! ~      → 5 calculations + unit + dimension
projectile 20 53 10 ! ~       → 6 calculations

# === Full meta-checks ===
incline 37 5 0.25 10 !! ~~    → check every step

# === Contract recall (no calc) ===
force ?@                      → (m, a, F)
boyle ?@                      → (P₁, V₁, V₂, P₂)

# === Error detection ===
boyle 1 10 ? 5 !?             → ERROR: ? at wrong position

# === Flash recall (Lane B) ===
rest !                        → v₀ = 0
frictionless !                → f = 0

# === Constant (Lane C) ===
planck !                      → h = 6.626×10⁻³⁴ J·s
force_dim                     → [M][L][T]⁻²

# === Bridge (explicit var) ===
hit_spring 0.01 300 2 >vf spring_compress 500 ! ~
ballistic 0.01 300 2 >vf pendulum_rise 2 10 !

# === Proportional reasoning ===
kinetic ∝ v 3                 → K × 9
gravity ∝ r 2                 → F × ¼

# === Threshold decision ===
will_slip 0.3 37 ?>           → YES, slips
photo_emit 400 3 ?>           → YES, emits

# === Sign determination ===
work_sign 10 5 120 ?>         → W = −25 J (negative)

# === Template ===
@elastic_eqmass 5 3 0         → v₁_f=0, v₂_f=5 m/s
@vec force 30 37              → F_x=24.0, F_y=18.1 N
@kin_find v0 a t dx           → Δx = v₀t + ½at² → compute

# === Interleaved practice ===
force 5 3 ? | ohms 2 ? 12 | heat 2 4186 10 ? | kinetic ∝ v 3
```

---

## 12. Card Coverage

| Lane / Operator | Card Count | Method |
|------|:---:|--------|
| A (single-step) | ~200 | `concept a b ?` |
| A (multi-step) | ~35 | `concept a b c d` |
| B (trigger → equation) | ~40 | `trigger !` |
| B (implicit zero) | ~13 | `keyword` |
| C (constants) | ~18 | `constant` |
| C (conversions) | ~18 | `conversion` |
| C (dimensions) | ~25 | `quantity_dim` |
| Bridge (`>`) | ~30 | `conceptA >var conceptB` |
| `∝` (relation) | ~25 | `concept ∝ var k` or `concept params ∝` |
| `?>` (decide) | ~25 | `concept params ?> direction` |
| `@` (template) | ~35 | `@template params` |
| `?@` (contract) | ~90 | `concept ?@` |
| `!?` (error detect) | any | `... !?` |
| **Total trainable** | **~430** | |

> 430 vocabulary cards. ~422 are directly trainable with Physcript v2 (98%).
> The remaining ~8 are pure graph interpretation or experimental design cards.

---

> **"If you can calculate it, you have understood it."**
>
> Physcript v2 turns every vocabulary card into an active retrieval prompt.
> One line = one concept. Five operators = all cognitive actions.
> The `|` separator, `?@` contract check, and `!?` error detection are your superpowers.
> Drill daily. Interleave ruthlessly. The equations will write themselves.
