# The Physics Reflex: Expression → Equation Flashcard Deck

> **If you can calculate it, you have understood it.**
>
> This deck trains one reflex: **see a phrase → write the equation.** No hesitation. No "which formula?" No "do I use energy or momentum?" The word itself is the command. Memorize these mappings the way you memorized vocabulary for the SAT. When you sit down for the exam, the equations will already be on the page before you finish reading the problem.

---

## How to Use This Deck

1. **Cover the right column.** Read the trigger phrase. Say the equation aloud. Uncover. Check.
2. **Drill by domain.** Master Kinematics before touching Forces. Each domain is self-contained.
3. **Daily minimum:** 25 cards. Rotate domains. The deck has ~430 cards — you can cycle through it in about two and a half weeks.
4. **Exam simulation:** When doing practice problems, use Ctrl+F on this document. The goal is to need Ctrl+F less and less.

**Signal system:**
- ⚡ = High-frequency exam trigger. Appears in 50%+ of problems in this domain.
- 🔥 = Distinguisher. Separates A students from B students. Often tested.
- 🧠 = Memorization item. A constant, a special case, or a value you just need to know.

---

## 1. Kinematics — "How Things Move"

> **Core reflex:** Kinematics = no forces mentioned. You have 5 variables: $v_0, v, a, t, \Delta x$. Know 3, find the other 2.

### 1.1 Velocity & Acceleration Triggers

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 1 ⚡ | "from rest", "starts from rest", "released", "dropped" | $v_0 = 0$ | The most common implicit zero in all of physics. Miss it and you have one too many unknowns. |
| 2 ⚡ | "comes to rest", "stops", "brakes to a halt" | $v = 0$ | Final velocity zero. Often paired with "find the distance to stop." |
| 3 ⚡ | "constant velocity", "steady speed", "coasting", "uniform motion" | $a = 0 \;\rightarrow\; \Delta x = vt$ | The simplest equation in physics. Do not overthink it. |
| 4 ⚡ | "constant acceleration", "accelerates uniformly", "steady acceleration" | Kinematic suite: $v = v_0 + at$, $\Delta x = v_0t + \frac{1}{2}at^2$, $v^2 = v_0^2 + 2a\Delta x$ | Pick the equation whose missing variable you don't need. See the kinematic selector table below. |
| 5 | "accelerates at __ m/s²", "decelerates at __ m/s²" | $a = \pm$ (given value) | "Decelerates" means $a$ is negative relative to velocity direction. |
| 6 | "free fall", "falling freely", "in free fall" | $a_y = -g = -9.8\;\mathrm{m/s^2}$ | The only acceleration is gravity. No air resistance unless stated. |
| 7 | "How long?", "Find the time", "time of flight", "time interval" | $t$ is the TARGET | Identify which kinematic equation contains $t$ plus your 3 knowns. |
| 8 | "How far?", "displacement", "distance traveled during acceleration" | $\Delta x$ is the TARGET | "How far" during acceleration ≠ total distance if there's a coasting phase. |
| 9 | "How fast?", "final speed", "velocity at impact", "speed when" | $v$ is the TARGET | $v^2 = v_0^2 + 2a\Delta x$ is often the fastest route — no $t$ needed. |
| 10 | "average velocity", "average speed" | $v_{\text{avg}} = \frac{\Delta x}{\Delta t}$ (velocity); $\frac{\text{total distance}}{\Delta t}$ (speed) | Velocity avg ≠ speed avg if direction changes. |
| 11 | "instantaneous velocity at $t =$ __" | $v = v_0 + at$ | Plug the time directly. |

### 1.2 The Kinematic Equation Selector

> **Memorize this table.** It eliminates all choice. Find your row by asking: "What do I need? Which variable am I NOT given and do NOT need?"

| I need... | I'm missing... | Use this equation |
|-----------|---------------|-------------------|
| $v$ | $t$ | $v^2 = v_0^2 + 2a\Delta x$ |
| $v$ | $\Delta x$ | $v = v_0 + at$ |
| $\Delta x$ | $v$ | $\Delta x = v_0t + \frac{1}{2}at^2$ |
| $\Delta x$ | $a$ | $\Delta x = \frac{1}{2}(v_0 + v)t$ |
| $t$ | $v$ | $\Delta x = v_0t + \frac{1}{2}at^2$ |
| $t$ | $\Delta x$ | $v = v_0 + at$ |
| $v_0$ | $v$ | $\Delta x = vt - \frac{1}{2}at^2$ |
| $v_0$ | $t$ | $v^2 = v_0^2 + 2a\Delta x$ |
| $a$ | $v$ | $\Delta x = v_0t + \frac{1}{2}at^2$ |
| $a$ | $t$ | $v^2 = v_0^2 + 2a\Delta x$ |

### 1.3 Projectile Motion Triggers

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 12 ⚡ | "projectile", "launched at angle $\theta$", "fired at an angle" | $v_{0x} = v_0\cos\theta$, $v_{0y} = v_0\sin\theta$ | Split into independent $x$ and $y$ motions. $a_x = 0$, $a_y = -g$. |
| 13 ⚡ | "maximum height", "peak", "highest point", "top of trajectory" | $v_y = 0$ at that instant | The vertical velocity passes through zero at the apex. Use this as a KNOWN. |
| 14 ⚡ | "horizontal range", "range", "how far does it land?" | $R = \frac{v_0^2\sin 2\theta}{g}$ | ⚠️ **Level ground only.** If launched from a cliff/tower/table (landing height ≠ launch height), DO NOT use this. Use two-step: $t_{\text{fall}} = \sqrt{2h/g}$ or $\Delta y = v_{0y}t - \frac{1}{2}gt^2$, then $R = v_x t$. |
| 15 🔥 | "time of flight" (projectile, level ground) | $t_{\text{flight}} = \frac{2v_{0y}}{g} = \frac{2v_0\sin\theta}{g}$ | Twice the time to reach maximum height. |
| 16 | "thrown vertically upward", "launched straight up" | $a_y = -g$, $v_{0y} > 0$ (if $+y$ up) | 1D kinematics. $v_y = 0$ at the top. |
| 17 | "thrown downward", "projected downward" | $a_y = -g$, $v_{0y} < 0$ | Initial velocity and acceleration are in the same direction. |
| 18 | "returns to the ground", "lands at the same height", "back to starting level" | $\Delta y = 0$ | Sets up $v_{0y}t - \frac{1}{2}gt^2 = 0$. One solution is $t=0$ (launch); the other is the flight time. |
| 19 🔥 | "passes a point", "goes by", "crosses", "travels past" | Split into variable-group contexts | The numbers belong to a middle segment of the trajectory, not the start or end. Use the Variable-Group Method. |
| 20 | "catch up", "overtake", "meet", "when do they collide?" | $x_A(t) = x_B(t)$ | Set position functions equal. Solve for $t$. |
| 21 | "graph of $v$ vs $t$" | slope = $a$, area under curve = $\Delta x$ | The most common graphical analysis question. |
| 22 | "graph of $x$ vs $t$" | slope = instantaneous $v$ | Curved line = acceleration. Straight line = constant velocity. |

---

## 2. Forces & Newton's Laws — "Why Things Move"

> **Core reflex:** A force word appears → draw a Free Body Diagram → $\sum F = ma$.

### 2.1 Force Fundamentals

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 23 ⚡ | "force", "push", "pull", "applied force $F$" | $\sum \vec{F} = m\vec{a}$ | Newton's Second Law. Sum ALL forces, set equal to $ma$. |
| 24 ⚡ | "net force", "resultant force", "total force" | $F_{\text{net}} = ma$ | If net force is given directly, skip the summation. |
| 25 ⚡ | "equilibrium", "at rest", "stationary" (with forces) | $\sum F_x = 0$, $\sum F_y = 0$ | Static equilibrium. Acceleration is zero. |
| 26 ⚡ | "weight", "weighs", "gravitational force on" | $F_g = mg$ | Always straight down. $g = 9.8\;\mathrm{m/s^2}$ on Earth's surface. |
| 27 ⚡ | "normal force", "normal", "$N$" | Perpendicular reaction from surface; magnitude found from $\sum F_y = 0$ | On flat ground: $N = mg$. On incline: $N = mg\cos\theta$. In elevator: $N = m(g \pm a)$. |

### 2.2 Friction Triggers

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 28 ⚡ | "friction", "frictional force", "rough surface" | $f_k = \mu_k N$ (if moving), $f_s \le \mu_s N$ (if static) | First determine: is it moving? "Sliding" = kinetic. "At rest" = static. |
| 29 ⚡ | "kinetic friction", "sliding friction", "coefficient of kinetic friction $\mu_k$" | $f_k = \mu_k N$ | Always opposes motion. Always. Direction is opposite to velocity. |
| 30 🔥 | "static friction", "just about to slip", "on the verge of moving", "impending motion" | $f_s = \mu_s N$ (at maximum) | "Just about to slip" is the key phrase — static friction is at its maximum. |
| 31 ⚡ | "frictionless", "smooth surface", "neglect friction", "ice" | $f = 0$ | The absence of a force is as important as its presence. |
| 32 🧠 | "coefficient of friction $\mu$" | Dimensionless. $\mu_s > \mu_k$ always. | Typically $0 < \mu < 1$, but $\mu > 1$ is possible (e.g., rubber on rubber). |

### 2.3 Tension, Pulleys, and Strings

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 33 ⚡ | "tension", "rope", "string", "cord", "cable" | $T$ appears in FBD; direction is ALONG the rope, pulling away from the object | Tension always pulls. It never pushes. |
| 34 | "massless rope", "ideal string", "light cord" | $T$ is the SAME at both ends | If the rope has mass, tension varies along its length. |
| 35 ⚡ | "pulley", "ideal pulley", "frictionless pulley" | $T$ is the same on both sides; pulley changes direction of force, not magnitude | Massless, frictionless pulley = tension is uniform. |
| 36 🔥 | "Atwood machine", "two masses hanging over a pulley" | $a = \frac{m_2 - m_1}{m_1 + m_2}g$ (assuming $m_2 > m_1$) | Derive from: $T - m_1g = m_1a$, $m_2g - T = m_2a$. Add to cancel $T$. |
| 37 | "breaks", "snaps", "maximum tension" | $T = T_{\text{max}}$ (given) | The rope breaks when tension exceeds the breaking strength. |

### 2.4 Inclines

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 38 ⚡ | "incline", "ramp", "inclined plane", "slope", "hill" | Resolve $mg$: along incline = $mg\sin\theta$, perpendicular = $mg\cos\theta$ | Tilt your axes. $+x$ = down the incline. $+y$ = perpendicular away from surface. |
| 39 ⚡ | "block slides down incline" (no friction) | $a = g\sin\theta$ | Mass cancels. Every block, regardless of mass, slides at the same rate. |
| 40 ⚡ | "block slides down incline" (with friction $\mu_k$) | $a = g(\sin\theta - \mu_k\cos\theta)$ | If $\mu_k > \tan\theta$, the block does not accelerate — it would need a push. |
| 41 🔥 | "angle of repose", "just begins to slide", "critical angle" | $\theta_c = \tan^{-1}\mu_s$ | The angle at which static friction is overcome. |

### 2.5 Springs

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 42 ⚡ | "spring", "spring constant $k$", "stretched", "compressed" | $F_s = -kx$ (Hooke's Law) | The negative sign means the force opposes displacement. Magnitude: $F_s = kx$. |
| 43 | "spring force", "restoring force" | $F_s = -k\Delta x$, direction toward equilibrium | Always points back to the equilibrium (unstretched) position. |

### 2.6 Special Force Contexts

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 44 🔥 | "elevator", "apparent weight", "scale reads", "normal force in elevator" | $N = m(g + a)$ (accelerating up), $N = m(g - a)$ (accelerating down) | The scale reads the normal force, not the weight. |
| 45 | "elevator in free fall", "cable snaps" | $N = 0$ (apparent weightlessness) | Both elevator and passenger fall with $a = g$. No contact force. |
| 46 | "air resistance", "drag", "drag force" | $F_D = \frac{1}{2}C\rho A v^2$ or $F_D = bv$ | Usually given. Opposes velocity. |
| 47 | "terminal velocity" | $mg = F_D$, $\sum F = 0$ | Net force zero. Acceleration zero. Speed constant. |
| 48 | "block on block", "stacked blocks", "one on top of another" | Separate FBDs; find shared acceleration or friction force | Friction between blocks provides the force that moves the top block. |
| 49 | "pushed together", "contact force between" | $F_{AB} = -F_{BA}$ (Newton's 3rd Law) | Equal magnitude, opposite direction, acting on DIFFERENT objects. |

---

## 3. Energy & Work — "The Shortcut When Time Is Not Asked"

> **Core reflex:** The problem mentions two positions and asks for speed, but gives NO time → Energy conservation.

### 3.1 Work Fundamentals

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 50 ⚡ | "work", "work done", "$W$" | $W = Fd\cos\theta$ | $\theta$ is the angle between the force vector and the displacement vector. |
| 51 🔥 | "work done by friction" | $W_f = -f_k d$ | Always negative. Friction converts mechanical energy to thermal energy. |
| 52 | "work done by gravity" | $W_g = \pm mgh$ (+ if moving down, − if moving up) | Path independent. Only the change in height matters. |
| 53 | "work done by a spring" | $W_s = \frac{1}{2}kx_i^2 - \frac{1}{2}kx_f^2$ | Work = negative of the change in spring potential energy. |
| 54 | "work done by normal force", "work done by centripetal force" | $W = 0$ | Force is perpendicular to displacement. |
| 55 | "net work", "total work" | $W_{\text{net}} = \Delta K = K_f - K_i$ | Work-Energy Theorem. The most direct route when multiple forces act. |

### 3.2 Energy Types — Know These Cold

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 56 ⚡ | "kinetic energy", "$K$", "KE" | $K = \frac{1}{2}mv^2$ | Always non-negative. Scalar. |
| 57 ⚡ | "gravitational potential energy", "PE", "height $h$" | $U_g = mgh$ | $h$ is measured from an arbitrary reference. Only $\Delta h$ matters. |
| 58 ⚡ | "spring potential energy", "elastic potential energy" | $U_s = \frac{1}{2}kx^2$ | $x$ is displacement from equilibrium. Always non-negative. |
| 59 | "total mechanical energy" | $E = K + U$ | The sum of kinetic and all potential energies. |

### 3.3 Conservation of Energy Triggers

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 60 ⚡ | "energy is conserved", "no friction", "no air resistance", "conservative forces only" | $E_i = E_f$, $K_i + U_i = K_f + U_f$ | Write $K+U$ at two points, set them equal, solve. |
| 61 ⚡ | "speed at the bottom of a hill", "speed after falling from height $h$" | $v = \sqrt{2gh}$ (if starting from rest) | Mass cancels. Derived from $\frac{1}{2}mv^2 = mgh$. |
| 62 | "How high does it go?" (energy approach) | $h = \frac{v_0^2}{2g}$ | Convert kinetic energy to gravitational potential. |
| 63 🔥 | "non-conservative forces", "friction does work", "air resistance present" | $K_i + U_i + W_{\text{NC}} = K_f + U_f$ | $W_{\text{NC}}$ is usually negative (friction). |
| 64 🔥 | "friction generates heat", "thermal energy from friction" | $\Delta E_{\text{th}} = f_k d$ | The mechanical energy "lost" equals the thermal energy gained. |
| 65 🔥 | "roller coaster", "loop-the-loop" | Energy conservation: $K_i + U_i = K_f + U_f$; at loop top: $v_{\min} = \sqrt{gR}$ | Two conditions: energy conservation (speed at each point) + dynamics at the top ($N \ge 0$). |
| 66 | "minimum speed to complete the loop" | $v_{\text{top}} = \sqrt{gR}$ | At this speed, $N = 0$ — the car just barely maintains contact. |

### 3.4 Power and Efficiency

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 67 ⚡ | "power", "rate of work", "watts", "horsepower" | $P = \frac{W}{t} = Fv$ (constant $v$) | $P = Fv$ only when force and velocity are parallel. |
| 68 | "efficiency", "efficient", "useful output / input" | $\eta = \frac{W_{\text{out}}}{E_{\text{in}}} = \frac{P_{\text{out}}}{P_{\text{in}}}$ | Always less than 1 (or 100%). Difference becomes waste heat. |

---

## 4. Momentum & Collisions — "When Objects Smash Together"

> **Core reflex:** "Collision," "hit," "strike," "bullet," "recoil" → Momentum is conserved. Full stop.

### 4.1 Momentum and Impulse

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 69 ⚡ | "momentum", "linear momentum" | $\vec{p} = m\vec{v}$ | Vector. Direction matters. |
| 70 ⚡ | "impulse", "impulse-momentum theorem", "force applied over time" | $\vec{J} = \vec{F}\Delta t = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i$ | Impulse equals change in momentum. The bridge between force and momentum. |
| 71 | "average force during a collision", "force of impact" | $F_{\text{avg}} = \frac{\Delta p}{\Delta t} = \frac{mv_f - mv_i}{\Delta t}$ | Shorter collision time → larger average force for the same $\Delta p$. |

### 4.2 Collision Classification — The Decision Tree

> When you see "collision," ask exactly ONE question: **Do they stick together?**

| # | Trigger Phrase | Instant Equation | KE Conserved? |
|---|---------------|------------------|---------------|
| 72 ⚡ | "collision", "collides", "strike", "hit", "crash" (generic) | $\sum \vec{p}_i = \sum \vec{p}_f$ | Not necessarily |
| 73 ⚡ | "stick together", "embedded", "lodged", "merged", "perfectly inelastic" | $m_1v_1 + m_2v_2 = (m_1 + m_2)v_f$ | NO — maximum KE loss |
| 74 🔥 | "elastic collision", "perfectly elastic", "bounces off" | $\sum p_i = \sum p_f$ AND $\sum K_i = \sum K_f$ | YES — KE conserved |
| 75 🔥 | "elastic collision, equal masses, one at rest" | The incoming mass stops; the target moves with the incoming speed | Special case worth memorizing |
| 76 | "coefficient of restitution", "$e$" | $e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}}$ | $e=1$ elastic, $e=0$ perfectly inelastic |

### 4.3 Special Momentum Scenarios

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 77 ⚡ | "recoil", "kickback", "gun fires a bullet" | $m_g v_g + m_b v_b = 0$ (if initially at rest) | The gun and bullet move in opposite directions. |
| 78 ⚡ | "explosion", "bursts apart", "breaks into pieces" | $\sum \vec{p}_i = \sum \vec{p}_f$ (often $0 = \sum m_i\vec{v}_i$) | Same physics as collision, just reversed in time. |
| 79 🔥 | "ballistic pendulum" | Step 1: $m_b v_b = (M+m)v_f$; Step 2: $\frac{1}{2}(M+m)v_f^2 = (M+m)gh$ | Two domains: momentum (collision), then energy (swing). The bridge is $v_f$. |
| 80 🔥 | "bullet embeds in block on spring" | Step 1: momentum → $v_f$; Step 2: energy → $\frac{1}{2}(M+m)v_f^2 = \frac{1}{2}kx^2$ | Classic synthesis problem. Collision domain → Spring domain. |
| 81 | "2D collision", "glancing collision", "collision at an angle" | Conserve $p_x$ AND $p_y$ separately | Two equations. Four unknowns if both final velocities are unknown. Need more info. |
| 82 | "center of mass", "CM" | $\vec{r}_{\text{CM}} = \frac{\sum m_i \vec{r}_i}{M_{\text{total}}}$ | The CM velocity does not change during a collision (no external forces). |

---

## 5. Circular Motion & Gravitation — "Things That Go in Circles"

> **Core reflex:** "Circle," "curve," "orbit" → $a_c = v^2/R$ → $\sum F_{\text{toward center}} = m a_c$.

### 5.1 Circular Motion

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 83 ⚡ | "circular motion", "moving in a circle", "circular path" | $a_c = \frac{v^2}{R} = \omega^2 R$ | Acceleration points toward the center. Speed may be constant while velocity changes direction. |
| 84 ⚡ | "centripetal force" | $F_c = m\frac{v^2}{R}$ | Not a new kind of force. It is whatever force points toward the center (tension, gravity, normal, friction). |
| 85 ⚡ | "period of circular motion", "time for one revolution" | $T = \frac{2\pi R}{v} = \frac{2\pi}{\omega}$ | $T$ is the time for one full circle. |
| 86 | "frequency", "revolutions per second", "rpm" | $f = \frac{1}{T}$, $\omega = 2\pi f$ | Convert rpm to rad/s: multiply by $2\pi/60$. |
| 87 | "angular velocity $\omega$" | $\omega = \frac{v}{R} = \frac{2\pi}{T} = 2\pi f$ | Units: rad/s. |

### 5.2 Circular Motion Scenarios

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 88 🔥 | "banked curve", "banked turn" (frictionless) | $\tan\theta = \frac{v^2}{gR}$ | The horizontal component of the normal force provides centripetal force. |
| 89 🔥 | "unbanked curve", "flat curve", "maximum speed without skidding" | $v_{\max} = \sqrt{\mu_s g R}$ | Static friction provides the centripetal force. |
| 90 🔥 | "conical pendulum" | $T\cos\theta = mg$, $T\sin\theta = m\frac{v^2}{R}$ | Vertical: tension balances gravity. Horizontal: tension component provides $F_c$. |
| 91 🔥 | "vertical circle", "bucket of water", "ferris wheel" | Top: $N + mg = m\frac{v^2}{R}$; Bottom: $N - mg = m\frac{v^2}{R}$ | Normal force changes with position. |
| 92 🔥 | "minimum speed at top of vertical circle" | $v_{\min} = \sqrt{gR}$ | $N = 0$ at the minimum speed. Below this, the object falls. |
| 93 | "just loses contact", "leaves the surface", "normal goes to zero" | $N = 0$ at that instant | The object is about to detach from the circular path. |

### 5.3 Universal Gravitation

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 94 ⚡ | "Newton's law of gravitation", "gravitational force between two masses" | $F = G\frac{m_1 m_2}{r^2}$ | $G = 6.67\times10^{-11}\;\mathrm{N\;m^2/kg^2}$. Inverse square law. |
| 95 | "gravitational field strength at distance $r$" | $g = G\frac{M}{r^2}$ | On Earth's surface: $g = 9.8\;\mathrm{m/s^2}$. |
| 96 ⚡ | "orbit", "satellite", "orbiting" | $G\frac{Mm}{r^2} = m\frac{v^2}{r}$ | Gravity IS the centripetal force. |
| 97 🔥 | "orbital speed" | $v = \sqrt{\frac{GM}{r}}$ | Mass of satellite cancels. Lower orbit = faster speed. |
| 98 🔥 | "orbital period", "Kepler's Third Law" | $T^2 = \frac{4\pi^2}{GM}r^3$ | $T^2 \propto r^3$. Does not depend on satellite mass. |
| 99 🧠 | "geostationary orbit" | $T = 24\;\mathrm{h}$; solve $r$ from Kepler's 3rd Law | $r \approx 42{,}000\;\mathrm{km}$ from Earth's center. |
| 100 🔥 | "escape velocity", "escape speed" | $v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$ | $v_{\text{esc}}$ from Earth: ~$11.2\;\mathrm{km/s}$. |
| 101 🧠 | "gravitational potential energy" (universal) | $U = -G\frac{Mm}{r}$ | Zero at infinity. Always negative for bound systems. |

---

## 6. Rotational Mechanics — "Things That Spin"

> **Core reflex:** Every linear quantity has a rotational twin. $F \to \tau$, $m \to I$, $v \to \omega$, $p \to L$.

### 6.1 Torque and Rotational Dynamics

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 102 ⚡ | "torque", "$\tau$", "moment of force" | $\tau = rF\sin\theta = r_\perp F$ | Lever arm matters. Same force, longer lever arm → more torque. |
| 103 ⚡ | "net torque" | $\sum \tau = I\alpha$ | Rotational Newton's 2nd Law. |
| 104 ⚡ | "rotational equilibrium", "no angular acceleration" | $\sum \tau = 0$ (about any axis) | Choose the pivot point that eliminates the most unknown forces. |
| 105 ⚡ | "static equilibrium" (extended body) | $\sum F_x = 0$, $\sum F_y = 0$, $\sum \tau = 0$ | Three equations. All must be satisfied. |

### 6.2 Moment of Inertia — Memorize These

| # | Shape & Axis | $I$ | Exam Note |
|---|-------------|-----|-----------|
| 106 🧠 | Point mass at distance $r$ | $I = mr^2$ | The definition. Everything builds from this. |
| 107 🧠 | Solid cylinder / disk (about center) | $I = \frac{1}{2}MR^2$ | Most common rotational object on exams. |
| 108 🧠 | Solid sphere (about center) | $I = \frac{2}{5}MR^2$ | A sphere rolls faster than a cylinder down an incline. |
| 109 🧠 | Hollow sphere / spherical shell | $I = \frac{2}{3}MR^2$ | More inertia than solid sphere → slower rolling. |
| 110 🧠 | Thin rod, axis through center | $I = \frac{1}{12}ML^2$ | Door rotating about its hinge uses the end-axis version. |
| 111 🧠 | Thin rod, axis through end | $I = \frac{1}{3}ML^2$ | |
| 112 🔥 | Parallel Axis Theorem | $I = I_{\text{CM}} + Md^2$ | Shift axis by distance $d$ from CM. $I$ always increases. |

### 6.3 Rolling, Angular Momentum, and Energy

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 113 ⚡ | "rolling without slipping" | $v = \omega R$, $a = \alpha R$ | The no-slip condition links translation and rotation. |
| 114 🔥 | "rolling down an incline" (no slipping) | $a = \frac{g\sin\theta}{1 + I/(mR^2)}$ | The object with smaller $I$ (more mass near center) accelerates faster. |
| 115 | "rotational kinetic energy" | $K_{\text{rot}} = \frac{1}{2}I\omega^2$ | Added to translational KE for rolling objects. |
| 116 | "total KE of a rolling object" | $K = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$ | Use $v = \omega R$ to express in one variable. |
| 117 ⚡ | "angular momentum", "$L$" | $L = I\omega = rp\sin\theta$ | Conserved when $\sum \tau_{\text{ext}} = 0$. |
| 118 ⚡ | "conservation of angular momentum" | $I_i\omega_i = I_f\omega_f$ | The ice skater: pull arms in ($I$ decreases) → spin faster ($\omega$ increases). |
| 119 | "angular impulse" | $\tau\Delta t = \Delta L$ | Rotational analog of impulse-momentum. |
| 120 🔥 | "ladder problem", "beam supported at one end", "plank on a pivot" | $\sum \tau = 0$ about the pivot; $\sum F_x = 0$, $\sum F_y = 0$ | Choose the pivot to eliminate the unknown reaction force. |

---

## 7. Simple Harmonic Motion — "Things That Oscillate"

> **Core reflex:** "Oscillate," "pendulum," "spring-mass" → $T = 2\pi\sqrt{\frac{\text{inertia}}{\text{restoring}}}$.

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 121 ⚡ | "simple harmonic motion", "SHM" | $F \propto -x$ → $a = -\omega^2 x$ | The defining property: acceleration is proportional to negative displacement. |
| 122 ⚡ | "mass on a spring" | $T = 2\pi\sqrt{\frac{m}{k}}$, $\omega = \sqrt{\frac{k}{m}}$ | Period does NOT depend on amplitude. |
| 123 ⚡ | "simple pendulum" (small angle) | $T = 2\pi\sqrt{\frac{L}{g}}$, $\omega = \sqrt{\frac{g}{L}}$ | Period does NOT depend on mass. Only length and $g$. |
| 124 🔥 | "physical pendulum", "compound pendulum" | $T = 2\pi\sqrt{\frac{I}{mgd}}$ | Generalization: any rigid body pivoted at a point. |
| 125 | "amplitude $A$" (SHM) | $x(t) = A\cos(\omega t + \phi)$ | $A$ is the maximum displacement from equilibrium. |
| 126 | "maximum velocity in SHM" | $v_{\max} = \omega A$ | Occurs at the equilibrium position ($x=0$). |
| 127 | "maximum acceleration in SHM" | $a_{\max} = \omega^2 A$ | Occurs at the endpoints ($x = \pm A$). |
| 128 | "velocity at position $x$" (SHM) | $v = \pm\omega\sqrt{A^2 - x^2}$ | Energy conservation: $\frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2$. |
| 129 | "total energy in SHM" | $E = \frac{1}{2}kA^2 = \frac{1}{2}mv_{\max}^2$ | Energy is proportional to amplitude SQUARED. |
| 130 | "damping", "damped oscillation" | Amplitude decays as $e^{-bt/(2m)}$ | Light damping: oscillation continues with decreasing amplitude. |
| 131 | "resonance", "driven at natural frequency" | $\omega_{\text{drive}} \approx \omega_0$ → large amplitude | Tacoma Narrows Bridge. Soldiers breaking step on a bridge. |

---

## 8. Waves & Sound — "Disturbances That Travel"

> **Core reflex:** "Wave," "frequency," "wavelength" → $v = f\lambda$. Always start here.

### 8.1 Wave Fundamentals

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 132 ⚡ | "wave speed", "speed of a wave" | $v = f\lambda$ | The universal wave equation. Applies to ALL waves. |
| 133 | "frequency $f$" | $f = \frac{1}{T} = \frac{v}{\lambda}$ | Units: Hz = s$^{-1}$. |
| 134 | "period $T$" | $T = \frac{1}{f}$ | Time for one complete cycle. |
| 135 | "wavelength $\lambda$" | $\lambda = \frac{v}{f}$ | Distance between consecutive crests (or any identical phase points). |
| 136 ⚡ | "wave on a string", "taut string", "tension $F_T$" | $v = \sqrt{\frac{F_T}{\mu}}$ | Tighter string → faster wave. Heavier string ($\uparrow\mu$) → slower wave. |
| 137 | "linear density $\mu$" | $\mu = \frac{m}{L}$ | Mass per unit length, kg/m. |

### 8.2 Standing Waves — The "Fit $n$ Half-Wavelengths" Rule

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 138 ⚡ | "standing wave", "stationary wave", "resonance" | Nodes and antinodes appear. Boundary conditions determine allowed wavelengths. | |
| 139 ⚡ | "string fixed at both ends", "guitar string", "violin string" | $f_n = n\frac{v}{2L}$, $\lambda_n = \frac{2L}{n}$, $n = 1,2,3,\ldots$ | Both ends are nodes. All harmonics are allowed. |
| 140 ⚡ | "open pipe", "open at both ends", "flute" | $f_n = n\frac{v}{2L}$, $\lambda_n = \frac{2L}{n}$, $n = 1,2,3,\ldots$ | Both ends are antinodes. All harmonics allowed. Same formula as string! |
| 141 ⚡ | "closed pipe", "closed at one end", "clarinet" | $f_n = n\frac{v}{4L}$, $\lambda_n = \frac{4L}{n}$, $n = 1,3,5,\ldots$ (odd only) | Closed end = node, open end = antinode. ONLY ODD HARMONICS. |
| 142 🔥 | "fundamental frequency", "first harmonic" | $f_1 = \frac{v}{2L}$ (both ends open/fixed), $f_1 = \frac{v}{4L}$ (one end closed) | |
| 143 🔥 | "overtone" vs "harmonic" | $n$th overtone = $(n+1)$th harmonic | The 1st overtone is the 2nd harmonic. Exams love this distinction. |

### 8.3 Sound Wave Phenomena

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 144 🔥 | "Doppler effect", "moving source", "moving observer", "pitch change" | $f' = f\frac{v \pm v_o}{v \mp v_s}$ | **Sign rule by scenario:** (1) Observer → source: $f' = f\frac{v+v_o}{v}$ (2) Observer ← source: $f' = f\frac{v-v_o}{v}$ (3) Source → observer: $f' = f\frac{v}{v-v_s}$ (4) Source ← observer: $f' = f\frac{v}{v+v_s}$. Frequency rises when distance shrinks, falls when distance grows. |
| 145 🔥 | "source moving toward stationary observer" | $f' = f\frac{v}{v - v_s}$ | Frequency INCREASES (higher pitch). |
| 146 🔥 | "source moving away from stationary observer" | $f' = f\frac{v}{v + v_s}$ | Frequency DECREASES (lower pitch). |
| 147 ⚡ | "beat frequency", "beats", "wobbling sound" | $f_{\text{beat}} = |f_1 - f_2|$ | Two slightly different frequencies produce a pulsating loudness. |
| 148 🔥 | "sound level", "decibel", "dB" | $\beta = 10\log_{10}\frac{I}{I_0}$, $I_0 = 10^{-12}\;\mathrm{W/m^2}$ | Every +10 dB = 10× intensity. Every +20 dB = 100× intensity. |
| 149 | "sound intensity $I$" (point source) | $I = \frac{P}{4\pi r^2}$ | Inverse square law. Double distance → quarter intensity. |
| 150 🧠 | "speed of sound in air" | $v \approx 343\;\mathrm{m/s}$ at $20^\circ\mathrm{C}$; $v = 331\sqrt{1 + T_C/273}$ | Increases with temperature. For the exact derivation from first principles, see Card 354 ($v = \sqrt{\gamma RT/M}$). |
| 151 | "sonic boom", "Mach cone", "supersonic" | $\sin\theta = \frac{v_{\text{sound}}}{v_{\text{source}}}$, Mach number = $\frac{v_s}{v}$ | When source speed exceeds wave speed. |
| 152 | "interference" (waves): constructive | Path difference $\Delta L = m\lambda$, $m = 0,1,2,\ldots$ | Crest meets crest. |
| 153 | "interference" (waves): destructive | Path difference $\Delta L = (m + \frac{1}{2})\lambda$ | Crest meets trough. |

---

## 9. Electrostatics — "Charges at Rest"

> **Core reflex:** "Charge," "$\mu$C," "nC," "point charge" → Coulomb's Law or $F = qE$.

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 154 ⚡ | "point charges", "charge $q_1$, $q_2$", "$\mu$C", "force between charges" | $F = k\frac{|q_1 q_2|}{r^2}$, $k = 8.99\times10^9\;\mathrm{N\;m^2/C^2}$ | Coulomb's Law. Inverse square. Identical structure to universal gravitation. |
| 155 🧠 | "permittivity of free space $\varepsilon_0$" | $k = \frac{1}{4\pi\varepsilon_0}$, $\varepsilon_0 = 8.85\times10^{-12}\;\mathrm{C^2/(N\;m^2)}$ | |
| 156 | "opposite signs", "unlike charges" | Attractive force | Direction: toward each other. |
| 157 | "same sign", "like charges" | Repulsive force | Direction: away from each other. |
| 158 ⚡ | "electric field", "$E$", "E-field" | $\vec{E} = \frac{\vec{F}}{q}$ (definition); $E = k\frac{|Q|}{r^2}$ (point charge) | Units: N/C. Direction: away from + charge, toward − charge. |
| 159 ⚡ | "force on a charge in an electric field" | $\vec{F} = q\vec{E}$ | Positive charge: force parallel to $\vec{E}$. Negative charge: force opposite to $\vec{E}$. |
| 160 ⚡ | "uniform electric field", "parallel plates" | $E = \frac{V}{d}$ | Constant field between two parallel charged plates. |
| 161 | "electric potential energy" (two point charges) | $U = k\frac{q_1 q_2}{r}$ | Similar to $F$ but with $r$, not $r^2$. Sign matters — negative for opposite charges. |
| 162 ⚡ | "electric potential", "voltage", "potential $V$" | $V = \frac{U}{q}$; $V = k\frac{Q}{r}$ (point charge) | Scalar. Units: volts = J/C. |
| 163 ⚡ | "potential difference $\Delta V$" (uniform field) | $\Delta V = -E\Delta x$ (or $Ed$ for magnitude between plates) | Voltage between two points in a uniform field. |
| 164 🔥 | "equipotential surface" | $V = \text{constant}$; perpendicular to $\vec{E}$ everywhere | No work is done moving a charge along an equipotential. |
| 165 🧠 | "electron volt", "eV" | $1\;\mathrm{eV} = 1.60\times10^{-19}\;\mathrm{J}$ | Energy unit. The kinetic energy gained by one electron accelerated through 1 V. |
| 166 | "superposition principle" | $\vec{E}_{\text{net}} = \sum \vec{E}_i$, $V_{\text{net}} = \sum V_i$ | Vector sum for $\vec{E}$; scalar sum for $V$. |
| 167 🔥 | "Gauss's Law", "electric flux $\Phi_E$" | $\Phi_E = \oint \vec{E}\cdot d\vec{A} = \frac{Q_{\text{enclosed}}}{\varepsilon_0}$ | Symmetry problems: sphere, infinite line, infinite plane. |
| 168 🔥 | "spherical charge distribution" (outside) | $E = k\frac{Q}{r^2}$ | Behaves as if all charge is at the center. |
| 169 | "infinite line of charge" (linear density $\lambda$) | $E = \frac{\lambda}{2\pi\varepsilon_0 r}$ | $E \propto 1/r$, not $1/r^2$. |
| 170 | "infinite plane of charge" (surface density $\sigma$) | $E = \frac{\sigma}{2\varepsilon_0}$ | Constant! Does not depend on distance. |

---

## 10. Circuits — "Charges in Motion"

> **Core reflex:** "Battery," "resistor," "$\Omega$," "series," "parallel" → $V = IR$ + reduction rules.

### 10.1 Ohm's Law and Resistance

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 171 ⚡ | "Ohm's Law", "resistance $R$", "$\Omega$" | $V = IR$ | The most-used equation in circuits. |
| 172 ⚡ | "series resistors" | $R_{\text{eq}} = R_1 + R_2 + R_3 + \cdots$ | Same current through each. Voltages add. |
| 173 ⚡ | "parallel resistors" | $\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$ | Same voltage across each. Currents add. $R_{\text{eq}}$ is ALWAYS less than the smallest branch. |
| 174 🔥 | "parallel: two resistors only" | $R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2}$ | The product-over-sum shortcut. |
| 175 | "compound circuit", "series-parallel" | Reduce from innermost group outward | Identify the deepest parallel or series group. Reduce. Repeat. |

### 10.2 Kirchhoff's Laws

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 176 ⚡ | "Kirchhoff's Current Law", "KCL", "junction rule" | $\sum I_{\text{in}} = \sum I_{\text{out}}$ | Charge conservation. What goes into a junction must come out. |
| 177 ⚡ | "Kirchhoff's Voltage Law", "KVL", "loop rule" | $\sum \Delta V = 0$ around any closed loop | Energy conservation. The sum of voltage gains (batteries) equals sum of voltage drops (resistors). |

### 10.3 Power, Energy, and Batteries

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 178 ⚡ | "power" (electrical), "watt", "W" | $P = IV = I^2R = \frac{V^2}{R}$ | Use the form that uses the KNOWN variables directly. |
| 179 | "energy" (electrical), "kilowatt-hour", "kWh" | $E = Pt = IVt$ | $1\;\mathrm{kWh} = 3.6\times10^6\;\mathrm{J}$. |
| 180 ⚡ | "battery", "emf $\mathcal{E}$" | $V_{\text{terminal}} = \mathcal{E} - Ir$ | $r$ is internal resistance. Terminal voltage drops when current is drawn. |
| 181 | "internal resistance $r$" | Voltage drop inside battery: $Ir$ | Ideal battery: $r = 0$, $V_{\text{terminal}} = \mathcal{E}$. |

### 10.4 Capacitors

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 182 ⚡ | "capacitor", "capacitance $C$", "farad", "F" | $C = \frac{Q}{V}$ | Definition of capacitance. |
| 183 | "parallel-plate capacitor" | $C = \varepsilon_0\frac{A}{d}$ (vacuum); $C = \kappa\varepsilon_0\frac{A}{d}$ (with dielectric) | Larger area → larger $C$. Larger separation → smaller $C$. |
| 184 | "dielectric", "dielectric constant $\kappa$" | $C = \kappa C_0$, $V = V_0/\kappa$ | Dielectric increases capacitance and reduces voltage. |
| 185 | "energy stored in a capacitor" | $U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{1}{2}QV$ | Three forms — pick based on what's KNOWN. |
| 186 🔥 | "capacitors in series" | $\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$ | Opposite to resistors! Series capacitors: $C_{\text{eq}}$ is LESS than the smallest. |
| 187 🔥 | "capacitors in parallel" | $C_{\text{eq}} = C_1 + C_2 + \cdots$ | Opposite to resistors! Parallel capacitors add directly. |
| 188 🔥 | "RC circuit", "charging capacitor" | $q(t) = Q_{\max}(1 - e^{-t/RC})$, $I(t) = I_0 e^{-t/RC}$ | Exponential approach to steady state. |
| 189 🧠 | "time constant $\tau = RC$" | After $1\tau$: 63% charged. After $5\tau$: ~99% charged. | $\tau$ has units of time. Verify: $\Omega \times \mathrm{F} = (V/A) \times (C/V) = C/A = \mathrm{s}$. |

### 10.5 Measurement and Special Circuits

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 190 | "ammeter" | Connected in SERIES; ideal $R_A = 0$ | Measures current through a branch. |
| 191 | "voltmeter" | Connected in PARALLEL; ideal $R_V = \infty$ | Measures voltage across two points. |
| 192 🔥 | "Wheatstone bridge", "balanced bridge" | $\frac{R_1}{R_2} = \frac{R_3}{R_x}$, galvanometer current = 0 | Used to measure unknown resistance. |

---

## 11. Magnetism — "Moving Charges in B-Fields"

> **Core reflex:** "Magnetic field $B$" + "moving charge" → $\vec{F} = q\vec{v} \times \vec{B}$.
> "Magnetic field" + "current in wire" → $\vec{F} = I\vec{L} \times \vec{B}$.

### 11.1 Magnetic Forces

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 193 ⚡ | "magnetic force on a moving charge" | $\vec{F} = q\vec{v} \times \vec{B}$, $F = qvB\sin\theta$ | Force is perpendicular to BOTH $\vec{v}$ and $\vec{B}$. Does NO work. |
| 194 ⚡ | "magnetic force on a current-carrying wire" | $\vec{F} = I\vec{L} \times \vec{B}$, $F = ILB\sin\theta$ | $\vec{L}$ points in the direction of current. |
| 195 🔥 | "circular path in a B-field", "cyclotron motion" | $r = \frac{mv}{qB}$, $T = \frac{2\pi m}{qB}$ | Period is INDEPENDENT of speed. This is the magic of cyclotron motion. |
| 196 🔥 | "velocity selector" (crossed $\vec{E}$ and $\vec{B}$) | $v = \frac{E}{B}$ (when $qE = qvB$) | Only particles with this exact speed pass undeflected. |
| 197 | "mass spectrometer" | $r = \frac{mv}{qB}$; measure $r$ to determine $m/q$ | Heavier ions → larger radius. |
| 198 | "force between two parallel wires" | $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$ | Same direction currents → attract. Opposite → repel. |

### 11.2 Magnetic Field Sources

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 199 🧠 | "permeability of free space $\mu_0$" | $\mu_0 = 4\pi\times10^{-7}\;\mathrm{T\;m/A}$ | The magnetic analog of $\varepsilon_0$. |
| 200 | "Biot-Savart Law" | $d\vec{B} = \frac{\mu_0}{4\pi}\frac{I d\vec{l} \times \hat{r}}{r^2}$ | Magnetic field from a current element. |
| 201 | "Ampere's Law" | $\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{\text{enclosed}}$ | Symmetry method for finding $B$. |
| 202 ⚡ | "magnetic field of a long straight wire" | $B = \frac{\mu_0 I}{2\pi r}$ | $B$ falls off as $1/r$. Right-hand rule: thumb in current direction, fingers curl in $B$ direction. |
| 203 | "magnetic field at center of a circular loop" | $B = \frac{\mu_0 I}{2R}$ | At the center only. |
| 204 ⚡ | "solenoid", "inside a solenoid" | $B = \mu_0 n I$, $n = N/L$ | Uniform field inside. $n$ = turns per unit length. |
| 205 | "toroid" | $B = \frac{\mu_0 N I}{2\pi r}$ | Field confined within the toroid. |

### 11.3 Electromagnetic Induction

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 206 ⚡ | "magnetic flux $\Phi_B$" | $\Phi_B = BA\cos\theta = \int \vec{B}\cdot d\vec{A}$ | "Amount of B-field passing through an area." |
| 207 ⚡ | "Faraday's Law", "induced emf", "electromagnetic induction" | $\mathcal{E} = -N\frac{d\Phi_B}{dt}$ | Changing magnetic flux induces an emf. The faster the change, the larger the emf. |
| 208 ⚡ | "Lenz's Law" | Induced current flows to OPPOSE the change in flux | The minus sign in Faraday's Law. Nature abhors a change in flux. |
| 209 🔥 | "motional emf", "sliding rod", "moving conductor in B-field" | $\mathcal{E} = BLv$ (when $\vec{v} \perp \vec{B} \perp \vec{L}$) | A special case of Faraday's Law. |
| 210 | "generator", "AC generator" | $\mathcal{E}(t) = NBA\omega\sin(\omega t)$ | Rotating coil in a B-field produces sinusoidal emf. |
| 211 | "transformer", "step-up", "step-down" | $\frac{V_s}{V_p} = \frac{N_s}{N_p}$ (ideal); $P_p = P_s$ → $I_p V_p = I_s V_s$ | Step-up: $N_s > N_p$. Step-down: $N_s < N_p$. |
| 212 🧠 | "rms value" (AC) | $V_{\text{rms}} = \frac{V_0}{\sqrt{2}}$, $I_{\text{rms}} = \frac{I_0}{\sqrt{2}}$ | The DC equivalent that delivers the same power. |

### 11.4 Inductance

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 213 | "inductance $L$", "inductor", "henry" | $\mathcal{E} = -L\frac{dI}{dt}$ | An inductor resists changes in current. |
| 214 | "energy stored in an inductor" | $U = \frac{1}{2}LI^2$ | Analogous to capacitor energy: $\frac{1}{2}CV^2$. |
| 215 🔥 | "RL circuit" time constant | $\tau = L/R$ | Current builds up or decays exponentially. |
| 216 🔥 | "LC circuit", "LC oscillation" | $\omega = \frac{1}{\sqrt{LC}}$, $T = 2\pi\sqrt{LC}$ | Electrical analog of mass-spring system. |

---

## 12. Thermodynamics — "Heat, Pressure, and the Dance of Molecules"

> **Core reflex:** "Gas," "pressure," "temperature" → $PV = nRT$.

### 12.1 The Ideal Gas Law and Its Children

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 217 ⚡ | "ideal gas", "$PV = nRT$" | $PV = nRT$, $R = 8.314\;\mathrm{J/(mol\;K)} = 0.08206\;\mathrm{L\;atm/(mol\;K)}$ | Pick $R$ based on the units you have. |
| 218 🧠 | "Avogadro's number $N_A$" | $N_A = 6.022\times10^{23}\;\mathrm{mol^{-1}}$ | Number of particles in one mole. |
| 219 🧠 | "Boltzmann constant $k_B$" | $k_B = \frac{R}{N_A} = 1.38\times10^{-23}\;\mathrm{J/K}$ | Gas constant per particle. $PV = Nk_B T$. |
| 220 ⚡ | "sealed container", "fixed amount of gas", "$n$ constant" | $\frac{P_1 V_1}{T_1} = \frac{P_2 V_2}{T_2}$ | Combined Gas Law. Use when $n$ is constant. |
| 221 | "isothermal", "constant temperature" | $P_1 V_1 = P_2 V_2$ (Boyle's Law) | $PV$ is constant. |
| 222 | "isobaric", "constant pressure" | $\frac{V_1}{T_1} = \frac{V_2}{T_2}$ (Charles's Law) | $V/T$ is constant. |
| 223 | "isochoric", "constant volume" | $\frac{P_1}{T_1} = \frac{P_2}{T_2}$ (Gay-Lussac's Law) | $P/T$ is constant. |

### 12.2 Kinetic Theory

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 224 🔥 | "average kinetic energy per molecule" (monatomic gas) | $\bar{K} = \frac{3}{2}k_B T$ | Temperature IS average kinetic energy (up to a constant). |
| 225 🔥 | "root-mean-square speed $v_{\text{rms}}$" | $v_{\text{rms}} = \sqrt{\frac{3kT}{m}} = \sqrt{\frac{3RT}{M}}$ | Lighter molecules move faster at the same temperature. |

### 12.3 Heat and Calorimetry

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 226 ⚡ | "heat", "thermal energy $Q$" (with temperature change) | $Q = mc\Delta T$ | $c$ = specific heat. $\Delta T$ in °C or K (same size). |
| 227 ⚡ | "specific heat $c$" | $c_{\text{water}} = 4186\ \mathrm{J\,kg^{-1}\,K^{-1}} = 1\ \mathrm{cal\,g^{-1}\,{}^\circ C^{-1}}$ | Memorize water's specific heat. |
| 228 ⚡ | "latent heat", "heat of fusion", "heat of vaporization" | $Q = mL$ | Temperature stays CONSTANT during a phase change. |
| 229 🧠 | Water: heat of fusion | $L_f = 3.34\times10^5\;\mathrm{J/kg}$ | Ice melting at 0°C. |
| 230 🧠 | Water: heat of vaporization | $L_v = 2.26\times10^6\;\mathrm{J/kg}$ | Water boiling at 100°C. |
| 231 ⚡ | "calorimetry", "mixing hot and cold", "thermal equilibrium" | $Q_{\text{lost}} + Q_{\text{gained}} = 0$ | The hot object loses exactly the heat the cold object gains. |

### 12.4 The Laws of Thermodynamics

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 232 ⚡ | "First Law of Thermodynamics" | $\Delta U = Q - W$ ($W$ = work done BY the gas) | Energy conservation for thermodynamic systems. Watch the sign convention. |
| 233 | "work done by a gas" | $W = \int P\,dV$ = area under $P$-$V$ curve | For isobaric: $W = P\Delta V$. For isochoric: $W = 0$. |
| 234 🔥 | "isothermal process" (First Law) | $\Delta U = 0$, $Q = W = nRT\ln(V_f/V_i)$ | For ideal gas, $U$ depends only on $T$. |
| 235 🔥 | "adiabatic process", "no heat exchange", "$Q = 0$" | $PV^\gamma = \text{constant}$, $TV^{\gamma-1} = \text{constant}$ | $\Delta U = -W$. Gas cools when it expands adiabatically. |
| 236 🧠 | "adiabatic index $\gamma$" | $\gamma = C_P/C_V$; monatomic: $\gamma = 5/3$; diatomic: $\gamma = 7/5$ | |
| 237 ⚡ | "Second Law of Thermodynamics" | $\Delta S \ge 0$ for an isolated system | Entropy of the universe never decreases. |
| 238 🔥 | "entropy change" (reversible isothermal) | $\Delta S = \frac{Q}{T}$ | Units: J/K. |
| 239 ⚡ | "heat engine efficiency" | $\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$ | Work output divided by heat input. |
| 240 🔥 | "Carnot efficiency" | $\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}$ (temperatures in KELVIN) | The maximum possible efficiency for ANY heat engine. |
| 241 | "refrigerator COP" | $\text{COP}_R = \frac{Q_C}{W}$; Carnot: $\text{COP}_R = \frac{T_C}{T_H - T_C}$ | Heat removed per unit work input. |

### 12.5 Thermal Expansion and Heat Transfer

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 242 | "thermal expansion", "linear expansion" | $\Delta L = \alpha L_0 \Delta T$ | Most materials expand when heated. $\alpha$ is the coefficient. |
| 243 | "volume expansion" | $\Delta V = \beta V_0 \Delta T$; for solids, $\beta \approx 3\alpha$ | |
| 244 | "conduction", "heat conduction through a slab" | $\frac{Q}{t} = kA\frac{\Delta T}{L}$ | $k$ = thermal conductivity. Higher $k$ = better conductor. |
| 245 🔥 | "radiation", "Stefan-Boltzmann Law" | $P = \sigma A e T^4$, $\sigma = 5.67\times10^{-8}\;\mathrm{W/(m^2K^4)}$ | $T$ must be in KELVIN. $e$ = emissivity (0 to 1). |
| 246 | "Wien's displacement law" | $\lambda_{\max} T = 2.90\times10^{-3}\;\mathrm{m\;K}$ | Hotter objects radiate at shorter wavelengths (bluer). |

---

## 13. Fluids — "Liquids and Gases in Bulk"

> **Core reflex:** "Fluid," "pressure with depth," "buoyancy" → $P = P_0 + \rho gh$ or $F_B = \rho g V$.

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 247 ⚡ | "density $\rho$" | $\rho = \frac{m}{V}$ | Mass per unit volume. $\rho_{\text{water}} = 1000\;\mathrm{kg/m^3}$. |
| 248 | "specific gravity" | $\text{SG} = \frac{\rho}{\rho_{\text{water}}}$ | Dimensionless. SG < 1 floats; SG > 1 sinks. |
| 249 ⚡ | "hydrostatic pressure", "pressure at depth $h$" | $P = P_0 + \rho gh$ | Pressure increases linearly with depth. Same at a given depth regardless of container shape. |
| 250 | "gauge pressure" vs "absolute pressure" | $P_{\text{gauge}} = P_{\text{abs}} - P_{\text{atm}}$ | Tire pressure is gauge pressure. |
| 251 ⚡ | "Pascal's Principle", "hydraulic lift", "hydraulic press" | $\frac{F_1}{A_1} = \frac{F_2}{A_2}$ | Pressure is transmitted equally throughout an enclosed fluid. |
| 252 ⚡ | "buoyancy", "buoyant force", "Archimedes' Principle" | $F_B = \rho_{\text{fluid}} V_{\text{displaced}} g$ | The buoyant force equals the WEIGHT of the displaced fluid. |
| 253 | "floating object" | $F_B = mg$ → $\rho_{\text{fluid}} V_{\text{submerged}} g = \rho_{\text{object}} V_{\text{total}} g$ | Fraction submerged = $\rho_{\text{object}} / \rho_{\text{fluid}}$. |
| 254 🔥 | "Bernoulli's Equation" | $P + \frac{1}{2}\rho v^2 + \rho gy = \text{constant}$ | Energy per unit volume along a streamline. |
| 255 ⚡ | "continuity equation", "flow rate" | $A_1 v_1 = A_2 v_2$ | Volume flow rate is constant. Narrower pipe → faster flow. |
| 256 🔥 | "Torricelli's theorem", "fluid exiting a hole" | $v = \sqrt{2gh}$ | Same form as free fall! The fluid exits with the speed it would have if it fell from the surface. |
| 257 | "Venturi meter" | $P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2)$ | Faster flow → lower pressure (Bernoulli consequence). |
| 258 | "Poiseuille's Law", "viscous flow through a pipe" | $Q = \frac{\pi r^4 \Delta P}{8\eta L}$ | Flow rate depends on $r^4$ — doubling the radius increases flow 16×. |
| 259 | "Reynolds number" | $\text{Re} = \frac{\rho v D}{\eta}$ | Re < 2000: laminar. Re > 3000: turbulent. |
| 260 | "surface tension", "capillary rise" | $h = \frac{2\gamma\cos\theta}{\rho g r}$ | Water rises in a narrow glass tube; mercury is depressed. |

---

## 14. Optics — "Light, Lenses, and Mirrors"

> **Core reflex:** "Mirror" or "lens" → $\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$.

### 14.1 Reflection and Refraction

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 261 ⚡ | "reflection", "law of reflection" | $\theta_i = \theta_r$ | Angles measured from the NORMAL, not the surface. |
| 262 ⚡ | "refraction", "Snell's Law", "bending of light" | $n_1\sin\theta_1 = n_2\sin\theta_2$ | Light bends TOWARD the normal when entering a higher-$n$ medium. |
| 263 | "index of refraction $n$" | $n = \frac{c}{v}$ | $n \ge 1$. $n_{\text{air}} \approx 1$, $n_{\text{water}} \approx 1.33$, $n_{\text{glass}} \approx 1.5$. |
| 264 🔥 | "total internal reflection", "critical angle" | $\theta_c = \sin^{-1}\frac{n_2}{n_1}$ (only when $n_1 > n_2$) | Must be going from higher $n$ to lower $n$. |
| 265 | "fiber optics" | Total internal reflection traps light in the core | |

### 14.2 Mirrors and Lenses — The Master Equations

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 266 ⚡ | "mirror equation", "lens equation" | $\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}$ | Same equation for BOTH mirrors and thin lenses. |
| 267 | "focal length of a spherical mirror" | $f = \frac{R}{2}$ | $R$ = radius of curvature. |
| 268 | "magnification" | $m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}$ | Negative $m$ = inverted image. $|m| > 1$ = enlarged. |
| 269 🧠 | Sign convention summary | $f > 0$: concave mirror, converging lens. $f < 0$: convex mirror, diverging lens. | $d_i > 0$: real image (light actually converges there). $d_i < 0$: virtual image. |
| 270 | "concave mirror" | Converging. $f > 0$. Can produce real or virtual images. | |
| 271 | "convex mirror" | Diverging. $f < 0$. ALWAYS virtual, upright, diminished. | Used for security mirrors, car side mirrors. |
| 272 | "converging lens" (convex) | $f > 0$. Can produce real or virtual images. | Magnifying glass when $d_o < f$. |
| 273 | "diverging lens" (concave) | $f < 0$. ALWAYS virtual, upright, diminished. | |
| 274 | "lens maker's formula" | $\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$ | Relates $f$ to the curvature of the lens surfaces. |

### 14.3 Wave Optics — Interference and Diffraction

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 275 ⚡ | "Young's double-slit", "double-slit interference" | Bright: $d\sin\theta = m\lambda$; Dark: $d\sin\theta = (m+\frac{1}{2})\lambda$, $m = 0,1,2,\ldots$ | $d$ = slit separation. $m=0$ is the central maximum. |
| 276 🔥 | "fringe spacing" (double-slit, small angle) | $\Delta y = \frac{\lambda L}{d}$ | $L$ = distance to screen. Fringes are equally spaced. |
| 277 ⚡ | "single-slit diffraction" | Dark fringes: $a\sin\theta = m\lambda$, $m = 1,2,3,\ldots$ | $a$ = slit WIDTH. Note: $m$ starts at 1, not 0. |
| 278 ⚡ | "diffraction grating" | Bright: $d\sin\theta = m\lambda$, $m = 0,1,2,\ldots$ | $d = 1/N$, where $N$ = lines per meter. Sharper maxima than double-slit. |
| 279 🔥 | "thin film interference" | Constructive/destructive depends on phase shifts at boundaries | $\lambda$ in the film = $\lambda_{\text{vacuum}}/n$. Phase reversal when reflecting off higher-$n$ medium. |
| 280 🔥 | "Rayleigh criterion", "resolution limit" | $\theta_{\min} = 1.22\frac{\lambda}{D}$ | The minimum angular separation at which two point sources can be distinguished. |
| 281 ⚡ | "polarization", "Malus's Law" | $I = I_0\cos^2\theta$ | Intensity after an ideal polarizer. |
| 282 | "Brewster's angle", "polarizing angle" | $\tan\theta_B = \frac{n_2}{n_1}$ | Reflected light is completely polarized at this angle. |

---

## 15. Modern Physics — "The Weird Stuff"

> **Core reflex:** "Photon," "electron," "atom," "relativity" → quantum or relativity equations.

### 15.1 Quantum Physics

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 283 🧠 | "Planck's constant $h$" | $h = 6.626\times10^{-34}\;\mathrm{J\;s}$ | The quantum of action. |
| 284 ⚡ | "photon energy" | $E = hf = \frac{hc}{\lambda}$ | $hc = 1240\;\mathrm{eV\;nm}$ (useful shortcut). |
| 285 ⚡ | "photoelectric effect" | $K_{\max} = hf - \phi$ | $\phi$ = work function (minimum energy to eject an electron). |
| 286 | "threshold frequency $f_0$" | $f_0 = \frac{\phi}{h}$ | Below this frequency, no electrons are emitted regardless of intensity. |
| 287 | "stopping potential $V_s$" | $eV_s = K_{\max} = hf - \phi$ | The voltage needed to stop the most energetic photoelectrons. |
| 288 | "photon momentum" | $p = \frac{h}{\lambda} = \frac{E}{c}$ | Photons have momentum but no mass. |
| 289 🔥 | "Compton scattering", "Compton shift" | $\Delta\lambda = \frac{h}{m_e c}(1 - \cos\theta)$ | $\frac{h}{m_e c} = 0.00243\;\mathrm{nm}$ (Compton wavelength). |
| 290 🔥 | "de Broglie wavelength", "matter wave" | $\lambda = \frac{h}{p} = \frac{h}{mv}$ | ALL matter has wave properties. Significant only for very small masses. |

### 15.2 Atomic Physics

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 291 ⚡ | "Bohr model", "hydrogen energy levels" | $E_n = -\frac{13.6\;\mathrm{eV}}{n^2}$, $n = 1,2,3,\ldots$ | Ground state ($n=1$): $-13.6\;\mathrm{eV}$. The negative sign means the electron is bound. |
| 292 🔥 | "photon emitted/absorbed by hydrogen" | $\Delta E = E_i - E_f = hf$; $\frac{1}{\lambda} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$ | $R = 1.097\times10^7\;\mathrm{m^{-1}}$ (Rydberg constant). |
| 293 🧠 | "Lyman series" | $n_f = 1$ (UV) | Transitions to ground state. |
| 294 🧠 | "Balmer series" | $n_f = 2$ (visible) | Transitions to first excited state. |
| 295 🧠 | "Paschen series" | $n_f = 3$ (infrared) | Transitions to second excited state. |

### 15.3 Special Relativity

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 296 🧠 | "speed of light $c$" | $c = 3.00\times10^8\;\mathrm{m/s}$ | The universal speed limit. Same in all inertial frames. |
| 297 ⚡ | "time dilation" | $\Delta t = \frac{\Delta t_0}{\sqrt{1 - v^2/c^2}} = \gamma\Delta t_0$ | Moving clocks run slow. $\Delta t_0$ = proper time (measured in the clock's rest frame). |
| 298 ⚡ | "length contraction" | $L = L_0\sqrt{1 - v^2/c^2} = \frac{L_0}{\gamma}$ | Moving objects are shortened along the direction of motion. $L_0$ = proper length. |
| 299 🧠 | "Lorentz factor $\gamma$" | $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$ | $\gamma \ge 1$. Approaches $\infty$ as $v \to c$. |
| 300 ⚡ | "relativistic momentum" | $p = \gamma mv$ | Reduces to $p = mv$ when $v \ll c$. |
| 301 ⚡ | "mass-energy equivalence", "$E = mc^2$" | $E_0 = mc^2$ (rest energy); $E = \gamma mc^2$ (total energy); $K = (\gamma-1)mc^2$ (kinetic energy) | |
| 302 | "relativistic energy-momentum relation" | $E^2 = (pc)^2 + (mc^2)^2$ | For massless particles ($m=0$): $E = pc$. |

### 15.4 Nuclear Physics

| # | Trigger Phrase | Instant Equation | Exam Note |
|---|---------------|------------------|-----------|
| 303 | "nuclear binding energy", "mass defect" | $E_B = \Delta m c^2$ | The mass of a nucleus is LESS than the sum of its nucleon masses. |
| 304 ⚡ | "radioactive decay", "exponential decay" | $N = N_0 e^{-\lambda t}$ | $\lambda$ = decay constant. |
| 305 ⚡ | "half-life $T_{1/2}$" | $T_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}$ | After $n$ half-lives: $N = N_0/2^n$. |
| 306 | "activity $A$" | $A = \lambda N$; $1\;\mathrm{Bq} = 1\;\mathrm{decay/s}$ | Activity also decays exponentially. |
| 307 🔥 | "Heisenberg uncertainty principle" | $\Delta x \Delta p \ge \frac{\hbar}{2}$; $\Delta E \Delta t \ge \frac{\hbar}{2}$ | $\hbar = h/(2\pi) = 1.055\times10^{-34}\;\mathrm{J\;s}$. |

---

## 16. The Implicit Zero Catalog — "What the Problem Says Without Saying"

> **These phrases hide a value of zero. If you miss them, you have too many unknowns and cannot solve.**

| # | Trigger Phrase | Hidden Value | Why It Matters |
|---|---------------|-------------|----------------|
| 308 ⚡ | "from rest", "starts from rest", "released", "dropped" | $v_0 = 0$ | Appears in ~40% of kinematics problems. |
| 309 ⚡ | "comes to rest", "stops", "brakes to a halt" | $v = 0$ | Final velocity zero. |
| 310 ⚡ | "maximum height", "peak", "top", "highest point" | $v_y = 0$ | The instantaneous vertical velocity at the apex. |
| 311 ⚡ | "frictionless", "smooth", "neglect friction", "ice" | $f = 0$ | No friction force. |
| 312 | "massless", "light", "negligible mass" | $m = 0$ for that object | Tension uniform in a massless rope; net force zero on massless pulley. |
| 313 | "ideal" (pulley, spring, gas, battery) | No energy loss, linear behavior | Simplifying assumption. |
| 314 | "returns to starting point", "back to initial position" | $\Delta x = 0$ | Net displacement zero. NOT the same as distance. |
| 315 🔥 | "just about to slip", "on the verge of moving", "impending motion" | $f_s = \mu_s N$ (maximum static friction) | Triggers the equality, not the inequality. |
| 316 🔥 | "just loses contact", "leaves the surface", "normal force vanishes" | $N = 0$ | The object detaches from the surface. |
| 317 | "breaks", "snaps" (rope, string) | $T = T_{\max}$ | Tension reaches the breaking strength. |
| 318 ⚡ | "constant speed", "steady speed", "uniform velocity", "coasting" | $a = 0$ | No acceleration. $\sum F = 0$. |
| 319 ⚡ | "equilibrium", "balanced" | $\sum F = 0$, $\sum \tau = 0$ | Static or dynamic equilibrium. |
| 320 | "free fall" (orbiting) | Apparent weight = 0 | $N = 0$ in an orbiting spacecraft. |

---

## 17. Cross-Domain Bridges — "When Two Domains Meet"

> **These are the hardest problems on the SAT Physics and Olympiad exams. They chain two, three, or even four domains. The key is identifying the bridge variable — a quantity that appears as an output in one domain and an input in another. This section is organized by pattern type so you can recognize the architecture of a synthesis problem before you solve it.**
>
> **Mental model:** Every bridge problem has the form `[Domain A] → [bridge variable v, T, P, etc.] → [Domain B]`. Your job: identify which variable crosses the boundary, solve Domain A for that variable, feed it into Domain B.

### 17.1 Momentum → Energy Bridges (Mechanics Chain)

> **Recognition pattern:** "Collision" or "bullet" or "explosion" followed by "spring compresses," "rises to height," "slides up a ramp." The collision happens FAST (momentum conserved). The aftermath happens SLOW (energy conserved or work-energy applies).

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 321 ⚡ | Bullet embeds in block → compresses spring | $m_b v_b = (M+m)v_f$ | $v_f$ | $\frac{1}{2}(M+m)v_f^2 = \frac{1}{2}kx_{\max}^2$ | The collision is perfectly inelastic (maximum KE loss). Only the KE of the combined block+bullet transfers to the spring. The bullet's initial KE is mostly converted to heat. |
| 322 ⚡ | Ballistic pendulum (bullet → block → swing) | $m_b v_b = (M+m)v_f$ | $v_f$ | $\frac{1}{2}(M+m)v_f^2 = (M+m)gh$ | Mass cancels in step 2. This problem type appears on nearly every SAT Physics exam. Combine to get $v_b = \frac{M+m}{m}\sqrt{2gh}$. |
| 323 🔥 | Block slides down frictionless incline → hits spring | $mgh = \frac{1}{2}mv^2$ | $v$ | $\frac{1}{2}mv^2 = \frac{1}{2}kx_{\max}^2$ | Two energy conservation steps. Could combine directly: $mgh = \frac{1}{2}kx_{\max}^2$. The bridge $v$ is unnecessary if you see the direct path. |
| 324 🔥 | Two-stage collision: mass $m_1$ hits $m_2$, then $m_2$ hits spring | Momentum (collision 1) → $v_{2f}$ | $v_{2f}$ | Energy (spring compression) | Triple-domain chain: Kinematics (approach) → Momentum (collision) → Energy (spring). Each stage passes one variable forward. |
| 325 🔥 | Explosion → fragments fly apart → one fragment hits spring | $0 = m_1v_1 + m_2v_2$ | $v_1$ or $v_2$ | $\frac{1}{2}m_1v_1^2 = \frac{1}{2}kx^2$ | The explosion gives equal-and-opposite momenta. Each fragment gets a share of the explosion energy inversely proportional to its mass. |
| 326 | Block slides on rough surface → collides with stationary block → both slide | Kinematics/energy (find $v_1$ before collision) | $v_1$ | Momentum (collision) → Kinematics (friction stopping distance for both) | Four sub-problems chained. Friction decelerates before collision, momentum redistributes during collision, friction decelerates after. |
| 327 🔥 | Pendulum bob released from height → strikes block at bottom of swing | $mgL(1-\cos\theta) = \frac{1}{2}mv^2$ | $v$ | Elastic or inelastic collision equations | The bob's speed at the bottom is $\sqrt{2gL(1-\cos\theta)}$. This becomes the incoming collision speed. Olympiad: often asks for maximum rebound angle. |

### 17.2 Circular Motion + Energy Bridges

> **Recognition pattern:** "Roller coaster," "loop-the-loop," "Ferris wheel," "car over a hill," "ball on a string released." Energy determines speed at a point; circular dynamics determine whether the object stays on the path.

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 328 ⚡ | Roller coaster loop: find minimum release height to clear loop | $mgh = \frac{1}{2}mv_{\text{top}}^2 + mg(2R)$ | $v_{\text{top}}$ | $N + mg = m\frac{v_{\text{top}}^2}{R}$, with $N \ge 0$ | At minimum: $N=0$ → $v_{\text{top}} = \sqrt{gR}$. Substitute into energy: $h_{\min} = \frac{5}{2}R$. This result is independent of mass and $g$. |
| 329 🔥 | Car over a circular hill: find speed at which it leaves the road | $mgh_0 + \frac{1}{2}mv_0^2 = mgh + \frac{1}{2}mv^2$ | $v$ | $mg\cos\theta - N = m\frac{v^2}{R}$, $N=0$ at loss of contact | The car loses contact when the normal force required for circular motion exceeds what gravity can provide. The angle at loss of contact is a classic result: $\cos\theta = \frac{2}{3} + \frac{v_0^2}{3gR}$. |
| 330 🔥 | Ball on a string: released from horizontal, find tension at bottom | $mgL = \frac{1}{2}mv^2$ | $v$ | $T - mg = m\frac{v^2}{L}$ | Combine: $T = mg + m\frac{2gL}{L} = 3mg$. Tension at bottom is exactly $3mg$ regardless of string length. Memorize this. |
| 331 | Conical pendulum + energy: bob is pushed, find new angle | Energy (work done → KE) | $v$ | $T\cos\theta = mg$, $T\sin\theta = m\frac{v^2}{R}$ | $R = L\sin\theta$. Two equations with two unknowns ($T$, $\theta$). Eliminate $T$ to find $\theta$ in terms of $v$. |
| 332 🔥 | Satellite transfer orbit (Hohmann transfer) | Energy: $E = -\frac{GMm}{2a}$ (total orbital energy) | $a$ (semi-major axis) | Circular orbit: $v = \sqrt{GM/r}$ | Olympiad classic. An elliptical transfer orbit between two circular orbits. The bridge is the semi-major axis $a = (r_1 + r_2)/2$. |

### 17.3 Rotational + Translational Bridges

> **Recognition pattern:** "Rolling without slipping," "yo-yo," "pulley with mass," "sphere rolling down incline." The no-slip condition $v = \omega R$ is almost always the bridge.

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 333 ⚡ | Solid sphere rolling down incline | $mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$ | $v = \omega R$ | $I = \frac{2}{5}mR^2$ for solid sphere | Combine: $v = \sqrt{\frac{10}{7}gh}$. Compare to sliding (frictionless): $v = \sqrt{2gh}$. Rolling is slower because some energy goes into rotation. |
| 334 🔥 | Massive pulley (Atwood machine with rotational inertia) | $T_1 - m_1g = m_1a$, $m_2g - T_2 = m_2a$ | $a = \alpha R$ | $\tau_{\text{net}} = I\alpha$, $\tau = (T_2 - T_1)R$ | The tensions are NOT equal. The difference $(T_2 - T_1)$ provides the torque that accelerates the pulley's rotation. $I = \frac{1}{2}MR^2$ for a solid cylindrical pulley. |
| 335 🔥 | Yo-yo unwinding: find acceleration and tension | $mg - T = ma$ (translation) | $a = \alpha R$ | $\tau = TR = I\alpha$, $I = \frac{1}{2}mR^2$ | Combine: $a = \frac{2}{3}g$, $T = \frac{1}{3}mg$. The yo-yo accelerates at $\frac{2}{3}g$, not $g$. Tension is one-third the weight. |
| 336 | Rolling sphere hits a step: find minimum speed to climb | Energy before: $\frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$ | Angular momentum about step edge | Energy after: $mg\Delta h$ (if it just clears) | Olympic-level. The collision with the step involves angular momentum conservation about the contact point. The sphere pivots about the step edge. |
| 337 | Bowling ball: initial sliding transitions to rolling | $f_k = \mu_k mg$ (decelerates translation) | $v = \omega R$ at transition | $\tau = f_k R = I\alpha$ (accelerates rotation) | Two phases: (1) sliding with kinetic friction, (2) pure rolling. The transition point is when the no-slip condition is first satisfied. Classic Olympiad problem. |

### 17.4 Electrostatics / Circuits → Mechanics Bridges

> **Recognition pattern:** "Charged particle accelerated through a potential difference," then "enters a magnetic field" or "passes between parallel plates." The bridge is always velocity $v$ obtained from energy conservation.

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 338 ⚡ | Electron accelerated through voltage $V$ → enters uniform B-field | $\frac{1}{2}mv^2 = eV$ | $v$ | $r = \frac{mv}{eB}$ | Combine: $r = \frac{1}{B}\sqrt{\frac{2mV}{e}}$. The radius depends on $\sqrt{V}$. Doubling voltage increases radius by $\sqrt{2}$. |
| 339 🔥 | Charged particle passes through velocity selector → enters B-field | $v = E/B$ (from $qE = qvB$) | $v$ | $r = \frac{mv}{qB_2}$ | The velocity selector (crossed E and B) picks a single speed. A second B-field separates by mass. This is a mass spectrometer in two stages. |
| 340 🔥 | Charge released from rest in uniform E-field → enters B-field | $\frac{1}{2}mv^2 = qEd$ (or $qV$) | $v$ | $r = \frac{mv}{qB}$ | The charge accelerates over distance $d$ in the E-field. The final KE = work done by the electric field: $W = qEd$. |
| 341 | Electron fired between parallel plates (cathode ray tube) | $y = \frac{1}{2}at^2 = \frac{1}{2}\frac{eE}{m}\left(\frac{L}{v_x}\right)^2$ | $v_x$ from accelerating voltage | Kinematics: $y$-deflection ∝ $E$ and $L^2$, ∝ $1/v_x^2$ | The deflection is parabolic within the plates, then linear after exiting. Olympiad: find the deflection on a screen at distance $D$. |
| 342 🔥 | Millikan oil drop experiment | $qE = mg$ (balanced) or $qE - mg - bv = 0$ (with drag) | $v_{\text{terminal}}$ | $q = \frac{mg}{E}$ or $q = \frac{mg + bv}{E}$ | Three domains: Electrostatics ($F = qE$), Mechanics ($F_g = mg$), Fluids (drag $F_D = bv$). The bridge is equilibrium: $\sum F = 0$. |
| 343 | Charged pendulum in uniform E-field: find new period | Forces: $mg$ + $qE$ → effective $g_{\text{eff}}$ | $g_{\text{eff}} = \sqrt{g^2 + (qE/m)^2}$ | $T = 2\pi\sqrt{L/g_{\text{eff}}}$ | The electric field changes the effective gravity. If $\vec{E}$ is horizontal: $g_{\text{eff}} = \sqrt{g^2 + (qE/m)^2}$. The equilibrium angle shifts: $\tan\theta = qE/(mg)$. |
| 344 🔥 | Dielectric slab inserted into a capacitor (with/without battery) | With battery: $V$ constant → $Q$ increases. Without: $Q$ constant → $V$ drops. | $C = \kappa C_0$ | Energy: $U = \frac{1}{2}CV^2$ or $U = \frac{Q^2}{2C}$ | The force pulling the dielectric into the capacitor comes from energy minimization. Olympiad: calculate the force on the dielectric as a function of insertion distance. |

### 17.5 Magnetism → Mechanics Bridges

> **Recognition pattern:** "Current-carrying wire in a magnetic field" moving a conductor, or "induced emf" causing motion. These are the motor/generator duality.

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 345 ⚡ | Sliding rod on conducting rails in B-field (motional emf) | $\mathcal{E} = BLv$ (Faraday) | $I = \mathcal{E}/R$ | $F = ILB$ (magnetic force on induced current) | The induced current creates a magnetic force that OPPOSES the motion (Lenz). Terminal velocity: $v_t = \frac{mgR}{B^2L^2}$ for a vertical rod falling on rails. |
| 346 🔥 | Magnetic damping: magnet falling through a conducting tube | Changing flux → induced emf → induced current | $I$ (eddy currents) | $F = ILB$ (braking force) + $mg$ (gravity) | The magnet reaches a low terminal velocity. The KE of the magnet is converted to Joule heating in the tube: $P = I^2R$. |
| 347 🔥 | Railgun / electromagnetic launcher | Current pulse → $F = ILB$ on projectile | $a = F/m$ | Kinematics: $v_f^2 = 2a\Delta x$ | The projectile experiences constant force (assuming constant current). Combine: $v_f = \sqrt{2ILB\Delta x/m}$. Energy also works: work done = $Fd = ILBd$. |
| 348 | AC generator powering a resistor | $\mathcal{E}(t) = NBA\omega\sin(\omega t)$ | $I_{\text{rms}} = \mathcal{E}_{\text{rms}}/R$ | $P = I_{\text{rms}}^2 R = \frac{(NBA\omega)^2}{2R}$ | The average power depends on $\omega^2$. Doubling rotation speed quadruples power output. |
| 349 🔥 | Superconducting loop: persistent current → magnetic levitation | Flux trapping: $\Phi_B = LI = \text{constant}$ | $I$ (persistent) | $F_B = I\oint d\vec{l} \times \vec{B}_{\text{ext}}$ = weight | The loop maintains constant flux. If external field changes, the induced current adjusts to keep $\Phi_B$ constant. This is the Meissner effect in a simple model. |

### 17.6 Thermodynamics → Mechanics Bridges

> **Recognition pattern:** "Gas in a cylinder with a piston" — pressure does mechanical work. Or "ideal gas" temperature changes causing motion.

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 350 ⚡ | Gas expands isobarically, pushing a piston | $W = P\Delta V$ | $W$ (work) | $W = Fd = (PA)d$ | The piston moves distance $d = \Delta V/A$. The force on the piston is $F = PA$. These are the same equation expressed two ways. |
| 351 🔥 | Gas in cylinder: piston held by spring | $P = F_s/A = kx/A$ (at equilibrium) | $x$ (spring compression) | $PV = nRT$ → $T = \frac{P V}{nR} = \frac{kx(Ax + V_0)}{nRA}$ | Doubly coupled. Spring force determines pressure. Pressure + volume determine temperature. Olympiad: find $T$ as a function of $x$, then maximize. |
| 352 🔥 | Adiabatic compression heats gas → gas pushes piston | $T_1 V_1^{\gamma-1} = T_2 V_2^{\gamma-1}$ | $T_2$ | $\Delta U = nC_V\Delta T = -W$ (work done BY gas is negative for compression) | No heat exchange. Work done ON the gas increases its internal energy. The gas heats up, increasing pressure beyond what Boyle's Law would predict. |
| 353 | Carnot engine: gas cycle driving a piston | $Q_H$ absorbed from hot reservoir | $W = Q_H - Q_C$ | $W = \oint P\,dV$ (area of cycle) | The mechanical work output equals the area enclosed by the cycle on a $P$-$V$ diagram. Every thermodynamic cycle is a bridge between heat and work. |
| 354 🔥 | Sound wave: compression/rarefaction of gas | $B = -V\frac{dP}{dV}$ (bulk modulus) | Adiabatic: $PV^\gamma = \text{const}$ | $v_{\text{sound}} = \sqrt{\frac{B}{\rho}} = \sqrt{\frac{\gamma RT}{M}}$ | Two derivations of sound speed. The adiabatic (Laplace) correction gives $v = \sqrt{\gamma P/\rho}$, which Newton got wrong by assuming isothermal conditions. For a quick numerical shortcut, see Card 150 ($v \approx 331\sqrt{1 + T_C/273}$). |

### 17.7 Fluids + Mechanics / Energy Bridges

> **Recognition pattern:** "Water flowing," "tank with a hole," "pipe changing diameter" — fluid equations produce a speed, then mechanics or energy takes over.

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 355 ⚡ | Water exits a hole in a tank (Torricelli + projectile) | $v = \sqrt{2gh}$ (efflux speed) | $v$ | Projectile range: $R = v\sqrt{2(H-h)/g}$ | The range depends on both the hole depth ($h$) and the hole height above ground ($H-h$). Maximum range when $h = H/2$. Olympiad classic. |
| 356 🔥 | Bernoulli across a pipe of changing diameter and height | $P_1 + \frac{1}{2}\rho v_1^2 + \rho g y_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g y_2$ | $v_1$ or $v_2$ from continuity | $A_1v_1 = A_2v_2$ | Two equations: Bernoulli (energy per volume) + Continuity (mass conservation). Together they determine $v_1$, $v_2$, and $\Delta P$. |
| 357 🔥 | Siphon: water flows up and over a barrier | Bernoulli: $P_{\text{atm}} + 0 + \rho g h_1 = P_{\text{atm}} + \frac{1}{2}\rho v^2 + \rho g h_2$ | $v$ | Continuity: $Av = \text{const}$ | The siphon works because atmospheric pressure pushes water up. Maximum height of the siphon crest: $h_{\max} = P_{\text{atm}}/(\rho g) \approx 10.3\;\mathrm{m}$ for water. |
| 358 | Pitot tube: measuring flow speed via pressure difference | $P_{\text{stagnation}} = P_{\text{static}} + \frac{1}{2}\rho v^2$ | $v$ | Manometer: $\Delta P = \rho_{\text{fluid}} g \Delta h$ | The stagnation point has $v=0$. The pressure difference is read from a manometer. Combine: $v = \sqrt{2\rho_{\text{fluid}}g\Delta h/\rho}$. |
| 359 🔥 | Hydraulic jump (shallow to deep flow transition) | Continuity: $v_1 h_1 = v_2 h_2$ | Momentum: $\frac{1}{2}\rho g h_1^2 - \frac{1}{2}\rho g h_2^2 = \rho v_1 h_1(v_2 - v_1)$ | Froude number: $\text{Fr} = v/\sqrt{gh}$ | Olympiad-level fluid dynamics. The hydraulic jump occurs when flow transitions from supercritical (Fr > 1) to subcritical (Fr < 1). Energy is dissipated in the turbulent jump. |

### 17.8 Waves / SHM + Other Domains

> **Recognition pattern:** "Oscillating" anything — the restoring force may come from springs (mechanics), electric fields, magnetic forces, pressure differences, or buoyancy. Identify the restoring mechanism, write $F \propto -x$, extract $\omega$.

| # | Scenario | Domain A (Restoring Force) | $\omega$ or $T$ | Domain B (Context) | Olympiad-Level Insight |
|---|---------|---------------------------|-----------------|-------------------|------------------------|
| 360 🔥 | Buoyant pendulum: mass on a spring in water | $F_{\text{restoring}} = -(k + \rho g A)x$ | $\omega = \sqrt{(k + \rho g A)/m}$ | Buoyancy adds to spring restoring force | The water provides additional restoring force through buoyancy ($\rho g A$ per unit displacement for a cylinder of cross-section $A$). Effective $k_{\text{eff}} = k + \rho g A$. |
| 361 🔥 | Floating cylinder bobbing in water | $F_{\text{restoring}} = -\rho g A x$ | $\omega = \sqrt{\rho g A/m}$ | SHM from pure buoyancy | No spring. The buoyant force changes as the cylinder moves up and down (more/less submerged). $k_{\text{eff}} = \rho g A$. |
| 362 🔥 | LC circuit ↔ mass-spring analogy | $L\frac{d^2q}{dt^2} + \frac{q}{C} = 0$ | $\omega = 1/\sqrt{LC}$ | Mechanical: $m\frac{d^2x}{dt^2} + kx = 0$, $\omega = \sqrt{k/m}$ | The perfect analogy: $L \leftrightarrow m$, $1/C \leftrightarrow k$, $q \leftrightarrow x$, $I \leftrightarrow v$. Every SHM result has an electrical twin. |
| 363 | Torsional pendulum with magnetic damping | $I\frac{d^2\theta}{dt^2} + b\frac{d\theta}{dt} + \kappa\theta = 0$ | Damping constant $b$ from eddy currents | Magnetism: eddy currents → $F \propto -v$ → damping torque $\propto -\dot{\theta}$ | Eddy current damping is velocity-proportional. The damping coefficient $b$ can be calculated from the geometry and B-field: $b \propto B^2$. |
| 364 🔥 | Wave on a string with a mass attached at a point | Wave equation on both sides of mass | Boundary condition: $T(\partial y/\partial x)_+ - T(\partial y/\partial x)_- = m\frac{\partial^2 y}{\partial t^2}$ | Newton's 2nd Law for the point mass | The mass at $x_0$ causes partial reflection and transmission. Reflection coefficient depends on $m$, $T$, and $\omega$. Olympiad: calculate the transmitted fraction. |

### 17.9 Optics + Other Domains

> **Recognition pattern:** Light interacting with matter in ways that require non-optical physics — photoelectric effect, Compton scattering, radiation pressure.

| # | Scenario | Domain A Equation | Bridge | Domain B Equation | Olympiad-Level Insight |
|---|---------|-------------------|--------|-------------------|------------------------|
| 365 🔥 | Radiation pressure on a solar sail | Photon momentum: $p = E/c$ | $F = \frac{\Delta p}{\Delta t} = \frac{2IA}{c}$ (perfect reflection) | $a = F/m$ (Newton's 2nd) | The factor of 2 for perfect reflection comes from momentum reversal ($\Delta p = 2p$). Absorbing surface gives half the force. |
| 366 🔥 | Compton scattering + electron kinematics | $\Delta\lambda = \frac{h}{m_e c}(1-\cos\theta)$ | Photon energy loss = electron KE gain | $K_e = hf - hf'$, $p_e = \sqrt{2m_e K_e}$ (non-relativistic) | Energy AND momentum are both conserved. The scattered photon and recoil electron are coupled by two conservation laws. Olympiad: derive the Compton formula from conservation. |
| 367 | Refraction at a moving interface (relativistic optics) | Snell's Law in moving frame | Lorentz transformation of $\vec{k}$ and $\omega$ | Relativistic Doppler + aberration | Olympiad-level. Light crossing a moving boundary between media changes frequency AND direction. Requires Lorentz transforming the wave 4-vector $(\vec{k}, \omega/c)$. |

### 17.10 Triple-Domain Chains (Olympiad Signature)

> **These are the problems that appear on the Physics Olympiad semifinal. Three or more domains are chained. The bridge variables form a linked list. Draw the chain before solving.**

| # | Chain | Domains in Sequence | Bridges | Olympiad Note |
|---|-------|---------------------|---------|---------------|
| 368 🔥 | Spring launches block → block slides on rough surface → hits pendulum | Energy (spring) → Kinematics/Energy (friction deceleration) → Momentum (collision) → Energy (pendulum swing) | $v_1$ (launch), $v_2$ (before collision), $v_3$ (after collision) | Four sequential domains. Each segment reduces the mechanical energy. $E_{\text{spring}} \to K_{\text{block}} \to \text{thermal} + K_{\text{before collision}} \to K_{\text{after}} \to U_{\text{grav}}$. |
| 369 🔥 | Gas expands → pushes piston → piston compresses spring → spring oscillates | Thermo ($W = P\Delta V$) → Mechanics ($W = Fd$, $F = kx$) → SHM ($T = 2\pi\sqrt{m/k}$) | $W$ (work), $x$ (compression) | The gas does work equal to $\int P\,dV$, stored as spring PE. Then the spring oscillates with the piston mass. The amplitude comes from the initial compression. |
| 370 🔥 | Charged particle accelerated by E-field → enters B-field → spirals → loses energy by synchrotron radiation | Electrostatics ($\frac{1}{2}mv^2 = qV$) → Magnetism (circular motion) → Modern (radiation power $P \propto \gamma^4$) | $v$, $\gamma$, $r$ | Relativistic Olympiad problem. The radiation loss reduces the radius. The particle spirals inward. Power radiated: $P = \frac{q^2\gamma^4}{6\pi\varepsilon_0 c}\left(\frac{v^2}{R}\right)^2$. |
| 371 🔥 | Solar sail: photon absorption → momentum transfer → acceleration → relativistic kinematics | Modern ($p_{\text{photon}} = E/c$) → Mechanics ($F = \Delta p/\Delta t$) → Kinematics ($v = at$) → Relativity (when $v \sim c$) | $p$, $F$, $a$, $v$ | At high speeds, the radiation is redshifted in the sail's frame (relativistic Doppler), reducing thrust. The relativistic rocket equation applies. |
| 372 🔥 | Resistive heating → thermal expansion → mechanical work | Circuits ($P = I^2R$) → Thermo ($Q = Pt = mc\Delta T$) → Thermal expansion ($\Delta L = \alpha L_0 \Delta T$) → Mechanics ($F = k\Delta L$ if constrained) | $Q$, $\Delta T$, $\Delta L$ | Joule heating raises temperature; thermal expansion creates stress if constrained. The force generated can be enormous. |
| 373 🔥 | Magnetic levitation: induced currents → magnetic force → equilibrium → SHM if perturbed | Magnetism (Faraday + Lenz → $F_B$) → Mechanics ($F_B = mg$ at equilibrium) → SHM ($\omega$ from $dF_B/dz$) | $I_{\text{induced}}$, $F_B$, $k_{\text{eff}} = -dF_B/dz$ | The levitation is stable only if the magnetic field shape provides a restoring force. Earnshaw's theorem: static magnetic levitation is impossible without active feedback or diamagnetism. |
| 374 🔥 | Nuclear decay chain: alpha emission → recoil nucleus → collision with neighboring atoms → thermal energy | Nuclear ($E_\alpha$, $p_\alpha$) → Momentum (recoil: $m_\alpha v_\alpha = M v_{\text{nucleus}}$) → Collisions ($\Delta E_{\text{thermal}}$) → Thermo (local heating) | $p$, $v$, $\Delta E$ | A quintuple-domain problem. The alpha particle deposits energy along its track; the recoil nucleus creates a small thermal spike in the material lattice. |
| 375 🔥 | Pogo stick / jumping toy: spring → projectile motion → impact | Energy (spring → KE at launch) → Kinematics (projectile to max height) → Kinematics (free fall) → Momentum/Energy (impact with ground) | $v_0$, $h_{\max}$, $v_{\text{impact}}$ | The spring provides initial KE. The flight is pure projectile motion. The landing may be elastic (rebound) or inelastic (stick). Extremely common in Olympiad experimental problems. |

### 17.11 Bridge Recognition Heuristics — The Pattern-Matching Algorithm

> **Instead of reading a problem and wondering "what connects to what?", run this decision tree.**

| Step | Question | If YES | If NO |
|------|----------|--------|-------|
| 1 | Does the problem describe two or more distinct EVENTS separated in time? | Go to Step 2 | Single-domain problem. Use core reflex from Sections 1–15. |
| 2 | Does the first event involve a COLLISION, EXPLOSION, or RECOIL? | Bridge domain is MOMENTUM. The output is $v_f$. | Go to Step 3. |
| 3 | Does the first event involve moving through a POTENTIAL DIFFERENCE (voltage) or ELECTRIC FIELD? | Bridge domain is ENERGY ($qV = \frac{1}{2}mv^2$). The output is $v$. | Go to Step 4. |
| 4 | Does the first event involve falling, sliding, or compressing/extending (height change or spring)? | Bridge domain is ENERGY CONSERVATION. The output is $v$ or $x$. | Go to Step 5. |
| 5 | Does the first event involve a GAS changing state ($P$, $V$, $T$)? | Bridge domain is THERMO ($PV=nRT$, $\Delta U = Q-W$). The output is $P$, $V$, $T$, or $W$. | Go to Step 6. |
| 6 | Does the first event involve ACCELERATION over a known distance or time (without forces mentioned)? | Bridge domain is KINEMATICS. The output is $v$ or $t$. | Check if the problem only has one domain — re-read for implicit zeros (Section 16). |

**After identifying the first domain and its output:** The second domain is whatever physics governs what happens NEXT. Write the bridge variable in the second domain's equation. Solve.

---

## 18. Unit Conversion Reflexes — "Instant Conversions Under Pressure"

| # | From | To | Multiply By |
|---|------|----|-------------|
| 376 | °C | K | $T_K = T_C + 273.15$ |
| 377 | atm | Pa | $1\;\mathrm{atm} = 1.013\times10^5\;\mathrm{Pa}$ |
| 378 | atm | mmHg (torr) | $1\;\mathrm{atm} = 760\;\mathrm{mmHg}$ |
| 379 | L | m³ | $1\;\mathrm{L} = 10^{-3}\;\mathrm{m^3}$ |
| 380 | eV | J | $1\;\mathrm{eV} = 1.60\times10^{-19}\;\mathrm{J}$ |
| 381 | cal | J | $1\;\mathrm{cal} = 4.186\;\mathrm{J}$ |
| 382 | kWh | J | $1\;\mathrm{kWh} = 3.6\times10^6\;\mathrm{J}$ |
| 383 | rpm | rad/s | Multiply by $2\pi/60$ |
| 384 | km/h | m/s | Divide by 3.6 |
| 385 | $\mu$C | C | $10^{-6}$ |
| 386 | nC | C | $10^{-9}$ |
| 387 | gauss | tesla | $1\;\mathrm{G} = 10^{-4}\;\mathrm{T}$ |
| 388 | atomic mass unit (u) | kg | $1\;\mathrm{u} = 1.661\times10^{-27}\;\mathrm{kg}$ |
| 389 | atomic mass unit (u) | MeV/c² | $1\;\mathrm{u} = 931.5\;\mathrm{MeV}/c^2$ |
| 390 | Å (angstrom) | m | 1 Å = $10^{-10}$ m |
| 391 | bar | Pa | $1\;\mathrm{bar} = 10^5\;\mathrm{Pa}$ |
| 392 | hp (horsepower) | W | $1\;\mathrm{hp} = 746\;\mathrm{W}$ |
| 393 | slug | kg | $1\;\mathrm{slug} = 14.59\;\mathrm{kg}$ |

---

## Quick Domain Lookup

| Domain | Cards | Signature Trigger Words |
|--------|-------|------------------------|
| 1. Kinematics | 1–22 | rest, accelerate, projectile, peak, range, catch up |
| 2. Forces & Newton | 23–49 | friction, tension, pulley, incline, spring, elevator |
| 3. Energy & Work | 50–68 | work, kinetic, potential, conservation, power, efficiency |
| 4. Momentum & Collisions | 69–82 | collision, impulse, stick together, elastic, recoil |
| 5. Circular & Gravitation | 83–101 | centripetal, orbit, satellite, Kepler, banked curve |
| 6. Rotational Mechanics | 102–120 | torque, moment of inertia, roll without slipping, angular momentum |
| 7. SHM | 121–131 | oscillate, pendulum, spring-mass, amplitude, resonance |
| 8. Waves & Sound | 132–153 | wave, standing wave, Doppler, beat, intensity, dB, harmonic |
| 9. Electrostatics | 154–170 | charge, Coulomb, electric field, Gauss, potential, equipotential |
| 10. Circuits | 171–192 | Ohm, Kirchhoff, series, parallel, capacitor, RC, time constant |
| 11. Magnetism | 193–216 | Lorentz, Faraday, solenoid, flux, induction, Lenz, transformer |
| 12. Thermodynamics | 217–246 | ideal gas, isothermal, adiabatic, Carnot, entropy, latent heat |
| 13. Fluids | 247–260 | Bernoulli, buoyancy, Pascal, continuity, Torricelli |
| 14. Optics | 261–282 | Snell, lens, mirror, interference, diffraction, polarization |
| 15. Modern Physics | 283–307 | photon, photoelectric, Bohr, relativity, de Broglie, half-life |
| 16. Implicit Zeros | 308–320 | from rest, stops, peak, frictionless, just about to slip |
| 17. Cross-Domain Bridges | 321–375 | bullet+spring, ballistic pendulum, roller coaster, mass spectrometer, solar sail |
| 18. Unit Conversions | 376–393 | °C→K, atm→Pa, eV→J, rpm→rad/s, u→MeV/c² |
| 19. Dimensional Analysis | 394–430 | [M], [L], [T], [Q], [Θ], dimension check, verify equation |
| 20. Pattern Recognition | — | zero-value, conservation, rate, inverse-square, equilibrium, oscillation families |

---

## 19. Dimensional Analysis — "The Universal Error Detector"

> **If the dimensions don't match, the equation is WRONG. No exceptions. This is the only verification tool that works for every physics problem across every domain. You don't need to understand the physics — you just need to know the dimension of every quantity.**

### 19.1 The Seven Base Dimensions

| # | Dimension | Symbol | SI Unit | What It Measures |
|---|----------|--------|---------|------------------|
| 394 🧠 | Mass | $[M]$ | kilogram (kg) | Amount of matter |
| 395 🧠 | Length | $[L]$ | meter (m) | Distance, position, displacement |
| 396 🧠 | Time | $[T]$ | second (s) | Duration, period |
| 397 🧠 | Electric Current | $[I]$ or $[Q]$ | ampere (A) or coulomb (C) | Flow of charge (we use $[Q]$ for charge-based analysis) |
| 398 🧠 | Temperature | $[\Theta]$ | kelvin (K) | Thermal energy level |
| 399 🧠 | Amount of Substance | $[N]$ | mole (mol) | Number of particles |
| 400 🧠 | Luminous Intensity | $[J]$ | candela (cd) | Brightness (rarely used in Honors Physics) |

> **In practice, Honors Physics needs only four: $[M]$, $[L]$, $[T]$, $[Q]$ — plus $[\Theta]$ for thermodynamics. Everything else derives from these.**

### 19.2 Dimension Lookup Table — Every Quantity You'll Encounter

> **How to use:** When verifying an answer, compute its dimension from the table below. Does it match the quantity you're solving for? If not, your equation is wrong.

| # | Quantity | Symbol | Definition Equation | Dimension | Common SI Unit |
|---|----------|--------|---------------------|-----------|---------------|
| 401 | Speed / Velocity | $v$ | $\Delta x / \Delta t$ | $[L][T]^{-1}$ | m/s |
| 402 | Acceleration | $a$ | $\Delta v / \Delta t$ | $[L][T]^{-2}$ | m/s² |
| 403 | Force | $F$ | $ma$ | $[M][L][T]^{-2}$ | N (newton) |
| 404 | Energy / Work / Heat | $E, K, U, W, Q$ | $Fd$ or $\frac{1}{2}mv^2$ | $[M][L]^2[T]^{-2}$ | J (joule) |
| 405 | Momentum | $p$ | $mv$ | $[M][L][T]^{-1}$ | kg·m/s |
| 406 | Impulse | $J$ | $F\Delta t$ | $[M][L][T]^{-1}$ | N·s (= kg·m/s) |
| 407 | Power | $P$ | $W/t$ or $Fv$ | $[M][L]^2[T]^{-3}$ | W (watt) |
| 408 | Pressure | $P$ | $F/A$ | $[M][L]^{-1}[T]^{-2}$ | Pa (pascal) |
| 409 | Density | $\rho$ | $m/V$ | $[M][L]^{-3}$ | kg/m³ |
| 410 | Torque | $\tau$ | $rF\sin\theta$ | $[M][L]^2[T]^{-2}$ | N·m (= J, but conceptually different) |
| 411 | Moment of Inertia | $I$ | $\sum mr^2$ | $[M][L]^2$ | kg·m² |
| 412 | Angular Velocity | $\omega$ | $\Delta\theta/\Delta t$ or $v/R$ | $[T]^{-1}$ | rad/s |
| 413 | Angular Acceleration | $\alpha$ | $\Delta\omega/\Delta t$ or $a_t/R$ | $[T]^{-2}$ | rad/s² |
| 414 | Angular Momentum | $L$ | $I\omega$ or $rp\sin\theta$ | $[M][L]^2[T]^{-1}$ | kg·m²/s |
| 415 | Spring Constant | $k$ | $F/x$ | $[M][T]^{-2}$ | N/m |
| 416 | Frequency | $f$ | $1/T$ | $[T]^{-1}$ | Hz (hertz) |
| 417 | Wavelength | $\lambda$ | — | $[L]$ | m |
| 418 | Wave Speed | $v$ | $f\lambda$ | $[L][T]^{-1}$ | m/s |
| 419 | Electric Charge | $q, Q$ | base dimension | $[Q]$ | C (coulomb) |
| 420 | Electric Field | $E$ | $F/q$ | $[M][L][Q]^{-1}[T]^{-2}$ | N/C (= V/m) |
| 421 | Electric Potential (Voltage) | $V$ | $U/q$ | $[M][L]^2[Q]^{-1}[T]^{-2}$ | V (volt) |
| 422 | Capacitance | $C$ | $Q/V$ | $[M]^{-1}[L]^{-2}[Q]^2[T]^2$ | F (farad) |
| 423 | Resistance | $R$ | $V/I$ | $[M][L]^2[Q]^{-2}[T]^{-1}$ | Ω (ohm) |
| 424 | Magnetic Field | $B$ | $F/(qv)$ | $[M][Q]^{-1}[T]^{-1}$ | T (tesla) |
| 425 | Magnetic Flux | $\Phi_B$ | $BA$ | $[M][L]^2[Q]^{-1}[T]^{-1}$ | Wb (weber) |
| 426 | Inductance | $L$ | $\mathcal{E}/(dI/dt)$ | $[M][L]^2[Q]^{-2}$ | H (henry) |
| 427 | Entropy | $S$ | $Q/T$ (reversible) | $[M][L]^2[T]^{-2}[\Theta]^{-1}$ | J/K |
| 428 | Specific Heat | $c$ | $Q/(m\Delta T)$ | $[L]^2[T]^{-2}[\Theta]^{-1}$ | J/(kg·K) |
| 429 | Planck's Constant | $h$ | $E/f$ | $[M][L]^2[T]^{-1}$ | J·s |

### 19.3 The Dimensional Verification Protocol

> **Run this 3-step check on EVERY answer you produce. It catches 80% of algebra mistakes.**

| Step | Action | Example: verifying $v = \sqrt{2gh}$ |
|------|--------|--------------------------------------|
| 1 | Write the dimension of the answer you expect | Speed → $[L][T]^{-1}$ |
| 2 | Compute the dimension of your answer's right-hand side | $\sqrt{[L][T]^{-2} \cdot [L]} = \sqrt{[L]^2[T]^{-2}} = [L][T]^{-1}$ |
| 3 | Compare. Match = passes. Mismatch = definitely wrong. | $[L][T]^{-1} = [L][T]^{-1}$ ✓ |

| 430 🔥 | **The dimension check reflex** | When you finish solving, before boxing your answer, ask: "Do the dimensions of my answer match the dimension of what I'm solving for?" | If your answer for a force comes out in kg·m/s, you forgot to multiply by one more factor of $[T]^{-1}$ — you computed momentum, not force. |

### 19.4 Common Dimension Mistakes — The Rogues' Gallery

| Mistake | Wrong Dimension | Correct Dimension | What You Probably Did |
|---------|----------------|-------------------|----------------------|
| Forgot to square velocity in KE | $[M][L][T]^{-1}$ (momentum) | $[M][L]^2[T]^{-2}$ (energy) | Wrote $\frac{1}{2}mv$ instead of $\frac{1}{2}mv^2$ |
| Used $r$ instead of $r^2$ in centripetal | $[L][T]^{-1}$ (velocity) | $[L][T]^{-2}$ (acceleration) | Wrote $v^2/r$ correctly but forgot the square on $r$ |
| Forgot $g$ in hydrostatic pressure | $[M][L]^{-2}$ (wrong) | $[M][L]^{-1}[T]^{-2}$ (pressure) | Wrote $\rho h$ instead of $\rho gh$ |
| Swapped $C$ and $V$ in capacitor energy | $[M][L]^2[Q]^{-2}[T]^{-2}$ (wrong) | $[M][L]^2[T]^{-2}$ (energy) | Wrote $\frac{1}{2}VC^2$ instead of $\frac{1}{2}CV^2$ |
| Used $r$ instead of $r^2$ in Coulomb's Law | $[M][L]^2[Q]^{-2}[T]^{-2}$ (wrong) | $[M][L][T]^{-2}$ (force) | Inverse square law requires $r^2$ in denominator |

---

## 20. Trigger Phrase Pattern Recognition — "How to Memorize 430 Cards Without Brute Force"

> **There are not 430 unrelated phrases. There are about 30 patterns. Every trigger phrase belongs to a family. Learn the family, and you learn every member at once. This section reveals those families.**

### 20.1 The Zero-Value Family — "Words That Mean Zero"

> **Pattern:** Every physics domain has a set of plain-English words that hide the number zero. They all answer the question: "What is the value of [variable] at a specific instant?"

| Family Member | Shared Meaning | Appears In |
|---------------|---------------|------------|
| "from rest", "starts from rest", "released", "dropped" | Initial velocity is zero ($v_0 = 0$) | Kinematics, Energy, Momentum |
| "comes to rest", "stops", "halts", "brakes" | Final velocity is zero ($v = 0$) | Kinematics, Work-Energy |
| "maximum height", "peak", "top", "highest point", "apex" | Vertical velocity is zero ($v_y = 0$) | Projectile motion |
| "frictionless", "smooth", "ice", "neglect friction" | Friction force is zero ($f = 0$) | Forces, Energy |
| "massless", "light", "negligible mass" | Mass is zero for that object ($m = 0$) | Tension, Pulleys |
| "just loses contact", "leaves the surface" | Normal force is zero ($N = 0$) | Circular motion, Elevator |
| "constant speed", "steady", "uniform velocity", "coasting" | Acceleration is zero ($a = 0$) | Kinematics, Forces |

> **Mnemonic:** "If it's at an extreme (fastest, highest, just about to, just lost), a derivative is zero." Maximum → $v=0$. Just leaving → $N=0$. Constant → $a=0$.

### 20.2 The Conservation Family — "Words That Mean 'Before Equals After'"

> **Pattern:** These trigger phrases all describe a process where a quantity is invariant. The equation is always: `[Quantity] before = [Quantity] after`.

| Family Member | What Is Conserved | Equation Form |
|---------------|-------------------|---------------|
| "collision", "collides", "strike", "hit", "crash" | Momentum | $\sum m_i v_i = \sum m_i v_i$ (before = after) |
| "elastic collision", "perfectly elastic", "bounces off" | Momentum AND Kinetic Energy | Two equations: $\sum p$ conserved AND $\sum K$ conserved |
| "energy is conserved", "no friction", "conservative forces only" | Mechanical Energy | $K_i + U_i = K_f + U_f$ |
| "sealed container", "fixed amount of gas" | Number of moles $n$ | $P_1V_1/T_1 = P_2V_2/T_2$ |
| "conservation of angular momentum", "no external torque" | Angular Momentum | $I_i\omega_i = I_f\omega_f$ |
| "Kirchhoff's Current Law", "junction rule" | Electric Charge (Current) | $\sum I_{\text{in}} = \sum I_{\text{out}}$ |
| "continuity equation" | Mass (Volume flow rate) | $A_1v_1 = A_2v_2$ |

> **Mnemonic:** "If nothing enters or leaves the system, something is conserved." Collision → no external forces → momentum conserved. Sealed → no gas leaks → $n$ conserved. Frictionless → no energy dissipation → energy conserved.

### 20.3 The Rate Family — "Words That Mean 'Per Unit Time'"

> **Pattern:** Words ending in "-er" or phrases with "per", "rate of", "how fast" usually indicate a time derivative or a rate quantity. The equation always involves division by time.

| Family Member | Quantity | Equation |
|---------------|----------|----------|
| "power", "rate of work", "watt" | Energy per time | $P = W/t$ |
| "current", "flow of charge" | Charge per time | $I = \Delta Q/\Delta t$ |
| "velocity", "speed" | Displacement per time | $v = \Delta x/\Delta t$ |
| "acceleration" | Velocity change per time | $a = \Delta v/\Delta t$ |
| "frequency" | Cycles per time | $f = 1/T$ |
| "flow rate", "volume flow rate" | Volume per time | $Q = Av$ |
| "heat conduction rate" | Heat per time | $Q/t = kA\Delta T/L$ |
| "activity" (radioactive) | Decays per time | $A = \lambda N$ |

> **Mnemonic:** "If it ends in -er or -ity, divide by time." Power = work/time. Velocity = distance/time. Activity = decays/time.

### 20.4 The Inverse-Square Family — "Words That Mean $1/r^2$"

> **Pattern:** Forces and intensities that spread out from a point source in three dimensions decay as $1/r^2$. The source is always a "point" — point mass, point charge, point source of light or sound.

| Family Member | Law | Equation |
|---------------|-----|----------|
| "gravitational force between two masses" | Newton's Universal Gravitation | $F = Gm_1m_2/r^2$ |
| "Coulomb force", "electrostatic force" | Coulomb's Law | $F = kq_1q_2/r^2$ |
| "electric field of a point charge" | E-field definition | $E = kQ/r^2$ |
| "sound intensity from a point source" | Inverse-square for intensity | $I = P/(4\pi r^2)$ |
| "light intensity from a point source" | Same as sound | $I = P/(4\pi r^2)$ |
| "gravitational field strength at distance $r$" | $g$ from a point mass | $g = GM/r^2$ |

> **Mnemonic:** "If it radiates from a point into 3D space, it goes as $1/r^2$. If it radiates from a line, it goes as $1/r$. If it's an infinite plane, it's constant." The surface area of a sphere is $4\pi r^2$ — that's where the $r^2$ comes from.

### 20.5 The Equilibrium Family — "Words That Mean 'Forces Cancel'"

> **Pattern:** "Equilibrium," "balanced," "at rest," "constant velocity" (with forces present), "terminal" — all mean the net force (or net torque) is zero.

| Family Member | What Is Zero | Equation |
|---------------|-------------|----------|
| "equilibrium", "at rest", "stationary" | Net force AND net torque | $\sum F = 0$, $\sum \tau = 0$ |
| "terminal velocity" | Net force (gravity = drag) | $mg = F_D$ |
| "balanced bridge" (Wheatstone) | Current through galvanometer | $R_1/R_2 = R_3/R_x$ |
| "thermal equilibrium" | Net heat flow | $Q_{\text{lost}} + Q_{\text{gained}} = 0$ |
| "floating" (buoyancy) | Net vertical force | $F_B = mg$ |
| "electrostatic equilibrium" | Net force on each charge | $\sum F_i = 0$ for each charge |

> **Mnemonic:** "Equilibrium = nothing is changing." No acceleration → $\sum F=0$. No temperature change → $\sum Q=0$. No angular acceleration → $\sum \tau=0$.

### 20.6 The "Stick Together" vs "Bounce Apart" Dichotomy

> **Pattern:** After a collision, objects either merge (perfectly inelastic) or separate (elastic). The problem tells you which with specific verbs.

| "Stick Together" Family (Inelastic) | "Bounce Apart" Family (Elastic) |
|--------------------------------------|--------------------------------|
| "stick together", "embedded", "lodged", "merged", "become one" | "elastic", "bounces off", "rebounds", "perfectly elastic" |
| $m_1v_1 + m_2v_2 = (m_1+m_2)v_f$ | $m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2'$ AND $\frac{1}{2}m_1v_1^2 + \frac{1}{2}m_2v_2^2 = \frac{1}{2}m_1v_1'^2 + \frac{1}{2}m_2v_2'^2$ |
| Kinetic energy is NOT conserved (maximum loss) | Kinetic energy IS conserved |
| Only ONE unknown ($v_f$) | TWO unknowns ($v_1'$, $v_2'$) — need both equations |

> **Mnemonic:** "Stick = one equation. Bounce = two equations." If they merge, you don't need energy. If they bounce, you need BOTH momentum and energy.

### 20.7 The Oscillation Family — "Words That Mean $T = 2\pi\sqrt{\text{inertia}/\text{restoring}}$"

> **Pattern:** EVERY simple harmonic oscillator has a period formula of the form $T = 2\pi\sqrt{\frac{\text{something that resists acceleration}}{\text{something that provides restoring force}}}$. Learn the template, plug in the specifics.

| System | Inertia Term | Restoring Term | $T$ Formula |
|--------|-------------|----------------|------------|
| Mass on a spring | $m$ (mass) | $k$ (spring constant) | $T = 2\pi\sqrt{m/k}$ |
| Simple pendulum | $L$ (length) | $g$ (gravity) | $T = 2\pi\sqrt{L/g}$ |
| Physical pendulum | $I$ (moment of inertia) | $mgd$ (torque per radian) | $T = 2\pi\sqrt{I/(mgd)}$ |
| Torsional pendulum | $I$ | $\kappa$ (torsion constant) | $T = 2\pi\sqrt{I/\kappa}$ |
| LC circuit | $L$ (inductance) | $1/C$ (inverse capacitance) | $T = 2\pi\sqrt{LC}$ |
| Floating cylinder bobbing | $m$ | $\rho g A$ (buoyancy stiffness) | $T = 2\pi\sqrt{m/(\rho g A)}$ |

> **Mnemonic:** "Inertia on top, stiffness on bottom, $2\pi$ out front. Always." Every SHM period follows this template. The "stiffness" is the restoring [force or torque] per unit [displacement or angle].

### 20.8 The "Sum to Zero Around a Loop" Family

> **Pattern:** In circuits, thermodynamics, and mechanics — any closed path or cycle has a conserved quantity that sums to zero.

| Context | What Sums to Zero | Equation |
|---------|-------------------|----------|
| Electrical circuit (KVL) | Voltage around a closed loop | $\sum \Delta V = 0$ |
| Thermodynamic cycle | $\Delta U$ over a complete cycle | $\oint dU = 0$ (state function) |
| Work in a conservative force field | Work around a closed path | $\oint \vec{F}\cdot d\vec{r} = 0$ |
| Current at a junction (KCL) | Net current into a node | $\sum I_{\text{in}} = \sum I_{\text{out}}$ |
| Heat in calorimetry (closed system) | Net heat exchange | $\sum Q_i = 0$ |

> **Mnemonic:** "If you come back to where you started, the net change is zero." This is why voltage sums to zero in a loop, why internal energy returns to its original value after a complete thermodynamic cycle, and why a conservative force does zero net work on a closed path.

### 20.9 The Resolution / Decomposition Family — "Words That Mean 'Break It Into Components'"

> **Pattern:** "Incline," "angle," "projectile" — all signal that a vector (usually $mg$, $v_0$, or $F$) must be split into perpendicular components, almost always using $\sin\theta$ and $\cos\theta$.

| Family Member | What Gets Resolved | Components |
|---------------|--------------------|------------|
| "incline", "ramp", "slope", "hill" | Gravity $mg$ | Along: $mg\sin\theta$, Perpendicular: $mg\cos\theta$ |
| "projectile", "launched at angle $\theta$" | Initial velocity $v_0$ | $v_{0x} = v_0\cos\theta$, $v_{0y} = v_0\sin\theta$ |
| "force at an angle" | Applied force $F$ | $F_x = F\cos\theta$, $F_y = F\sin\theta$ |
| "tension at an angle", "conical pendulum" | Tension $T$ | $T_x = T\sin\theta$, $T_y = T\cos\theta$ |
| "banked curve" | Normal force $N$ | $N_x = N\sin\theta$ (provides $F_c$), $N_y = N\cos\theta$ (balances $mg$) |
| "magnetic force at angle" | $\vec{F} = q\vec{v}\times\vec{B}$ | $F = qvB\sin\theta$ (the $\sin\theta$ IS the resolution) |

> **Mnemonic:** "$\sin\theta$ goes with the direction of motion (along the incline, along the horizontal). $\cos\theta$ goes with the perpendicular direction (into the surface, vertical component)." This rule of thumb works for the most common cases: incline ($mg\sin\theta$ is along) and projectile ($v_0\cos\theta$ is horizontal, which is the primary direction).

### 20.10 The "Before-and-After" vs "During" Distinction

> **Pattern:** Some problems ask about a process ("during the collision", "while accelerating"), others ask about states ("before vs after"). This distinction determines whether you use a conservation law (states) or a kinematic/dynamic equation (process).

| Type | Trigger Words | Strategy |
|------|--------------|----------|
| State-to-State (Before/After) | "before," "after," "initial," "final," "collision" | Conservation law: $E_i = E_f$, $\sum p_i = \sum p_f$ |
| Process (During) | "during," "while," "as it," "takes $t$ seconds to" | Kinematic equations, $F=ma$, $W=Fd$ |
| Instantaneous | "at the instant," "when $t=$", "at the moment" | Plug time into $v(t)$ or $x(t)$, use $F=ma$ at that instant |

> **Mnemonic:** "Before/After = Conservation. During = Dynamics. At an instant = Plug in." The problem's temporal framing tells you the solution strategy before you've read a single number.

---

> **The exam is won before you enter the room.** Every equation on this page is a tool. Your job is to know which tool to grab the instant you see the trigger phrase. Drill these cards until the response is automatic. When you read "from rest," your hand should already be writing $v_0 = 0$. When you read "collision," your hand should already be writing $\sum p_i = \sum p_f$.
>
> You don't need to see the whole solution. You just need to start the right equation. The algebra will take you the rest of the way.
>
> **If you can calculate it, you have understood it.**
