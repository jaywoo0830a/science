import type { ConceptDef } from "../../engine/types";

// ============================================================
// Physcript v2 — Physics Concept Deck (Week 1: 50 concepts)
// Covers all major domains with high-frequency exam concepts.
// Notation: positional params, ? = target, > = bridge, ∝ = relation, ?> = decide, @ = template
// ============================================================

export const physicsConcepts: ConceptDef[] = [

  // ==========================================================
  // 1. KINEMATICS (8)
  // ==========================================================

  { keyword:"force", displayName:"F=ma", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,3,4,5,8,10]},{name:"a",unit:"m/s²",values:[2,3,4,5,8,10]},{name:"F",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"F=ma",formula:"n0*n1",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"F = ma"}],
    clusterId:"mechanics_core",difficultyLevel:1,
    connections:[{targetKeyword:"kinetic",relation:"same_family"},{targetKeyword:"weight",relation:"same_family"}]},

  { keyword:"kinetic", displayName:"K=½mv²", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,3,4,5,8,10]},{name:"v",unit:"m/s",values:[1,2,3,4,5,8,10,15]},{name:"K",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"K=½mv²",formula:"0.5*n0*n1*n1",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"K = \\tfrac{1}{2}mv^2"}],
    clusterId:"mechanics_core",difficultyLevel:1,
    connections:[{targetKeyword:"momentum",relation:"contrasts_with"},{targetKeyword:"energy_stored_by_height",relation:"contrasts_with"}]},

  { keyword:"momentum", displayName:"p=mv", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,3,5,10]},{name:"v",unit:"m/s",values:[2,3,5,10,15,20]},{name:"p",unit:"kg·m/s",values:[],canBeTarget:true}],
    steps:[{label:"p=mv",formula:"n0*n1",unit:"kg·m/s",dimension:"[M][L][T]⁻¹",equationLatex:"p = mv"}],
    clusterId:"mechanics_core",difficultyLevel:1,
    connections:[{targetKeyword:"kinetic",relation:"contrasts_with"},{targetKeyword:"impulse",relation:"same_family"}]},

  { keyword:"weight", displayName:"F_g=mg", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,5,10,20,50]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"F_g",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"F_g=mg",formula:"n0*n1",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"F_g = mg"}],
    clusterId:"mechanics_core",difficultyLevel:1},

  { keyword:"vf_at", displayName:"v=v₀+at", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[0,2,5,10,15,20]},{name:"a",unit:"m/s²",values:[2,3,4,5,8,10]},{name:"t",unit:"s",values:[1,2,3,4,5,8,10]},{name:"v",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v=v₀+at",formula:"n0+n1*n2",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v = v_0 + at"}],
    clusterId:"kinematics_core",difficultyLevel:1,
    connections:[{targetKeyword:"dx_v0t",relation:"same_family"},{targetKeyword:"vf2_v02",relation:"same_family"}]},

  { keyword:"dx_v0t", displayName:"Δx=v₀t+½at²", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[0,2,5,10,15]},{name:"t",unit:"s",values:[1,2,3,4,5,8]},{name:"a",unit:"m/s²",values:[2,3,5,8,10]},{name:"Δx",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"Δx=v₀t+½at²",formula:"n0*n1+0.5*n2*n1*n1",unit:"m",dimension:"[L]",equationLatex:"\\Delta x = v_0t + \\tfrac{1}{2}at^2"}],
    clusterId:"kinematics_core",difficultyLevel:1},

  { keyword:"vf2_v02", displayName:"v²=v₀²+2aΔx", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[0,5,10,15,20]},{name:"a",unit:"m/s²",values:[2,3,5,8,10]},{name:"Δx",unit:"m",values:[5,10,20,50,100]},{name:"v",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v=√(v₀²+2aΔx)",formula:"Math.sqrt(n0*n0+2*n1*n2)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v^2 = v_0^2 + 2a\\Delta x"}],
    clusterId:"kinematics_core",difficultyLevel:1},

  { keyword:"dx_vavg", displayName:"Δx=½(v₀+v)t", subject:"physics",domain:"kinematics",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[0,2,5,10]},{name:"v",unit:"m/s",values:[5,10,15,20,30]},{name:"t",unit:"s",values:[1,2,3,4,5,8]},{name:"Δx",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"Δx=½(v₀+v)t",formula:"0.5*(n0+n1)*n2",unit:"m",dimension:"[L]",equationLatex:"\\Delta x = \\tfrac{1}{2}(v_0+v)t"}],
    clusterId:"kinematics_core",difficultyLevel:1},

  // ==========================================================
  // 2. FORCES (7)
  // ==========================================================

  { keyword:"friction", displayName:"f=μN", subject:"physics",domain:"forces",lane:"A",
    params:[{name:"μ",unit:"",values:[0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.75]},{name:"N",unit:"N",values:[10,20,30,50,100,200]},{name:"f",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"f=μN",formula:"n0*n1",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"f = \\mu N"}],
    clusterId:"forces_core",difficultyLevel:2,
    connections:[{targetKeyword:"incline",relation:"feeds_into",bridgeParamIndex:1,bridgeVariable:"N (normal force)"}]},

  { keyword:"incline", displayName:"Incline: a=g(sinθ−μcosθ)", subject:"physics",domain:"forces",lane:"A",
    params:[{name:"θ",unit:"°",values:[30,37,45,53]},{name:"μ",unit:"",values:[0.1,0.2,0.25,0.3]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"a",unit:"m/s²",values:[],canBeTarget:true}],
    steps:[{label:"a=g(sinθ−μcosθ)",formula:"n2*(Math.sin(n0*Math.PI/180)-n1*Math.cos(n0*Math.PI/180))",unit:"m/s²",dimension:"[L][T]⁻²",equationLatex:"a = g(\\sin\\theta - \\mu\\cos\\theta)"}],
    clusterId:"forces_core",difficultyLevel:3},

  { keyword:"atwood_accel", displayName:"Atwood: a=(m₂−m₁)g/(m₁+m₂)", subject:"physics",domain:"forces",lane:"A",
    params:[{name:"m₁",unit:"kg",values:[1,2,3,4,5]},{name:"m₂",unit:"kg",values:[3,4,5,6,8,10]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"a",unit:"m/s²",values:[],canBeTarget:true}],
    steps:[{label:"a=(m₂−m₁)g/(m₁+m₂)",formula:"((n1-n0)*n2)/(n0+n1)",unit:"m/s²",dimension:"[L][T]⁻²",equationLatex:"a = \\frac{m_2-m_1}{m_1+m_2}g"}],
    clusterId:"forces_core",difficultyLevel:2},

  { keyword:"elevator_up", displayName:"Elevator up: N=m(g+a)", subject:"physics",domain:"forces",lane:"A",
    params:[{name:"m",unit:"kg",values:[50,60,70,80]},{name:"a",unit:"m/s²",values:[1,2,3,5]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"N",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"N=m(g+a)",formula:"n0*(n2+n1)",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"N = m(g+a)"}],
    clusterId:"forces_core",difficultyLevel:2},

  { keyword:"elevator_down", displayName:"Elevator down: N=m(g−a)", subject:"physics",domain:"forces",lane:"A",
    params:[{name:"m",unit:"kg",values:[50,60,70,80]},{name:"a",unit:"m/s²",values:[1,2,3]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"N",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"N=m(g−a)",formula:"n0*(n2-n1)",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"N = m(g-a)"}],
    clusterId:"forces_core",difficultyLevel:2},

  { keyword:"unbanked", displayName:"Flat curve: v_max=√(μgR)", subject:"physics",domain:"forces",lane:"A",
    params:[{name:"μ",unit:"",values:[0.3,0.4,0.5,0.6,0.8]},{name:"R",unit:"m",values:[20,30,50,100]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"v_max",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v_max=√(μgR)",formula:"Math.sqrt(n0*n2*n1)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_{\\max} = \\sqrt{\\mu g R}"}],
    clusterId:"forces_core",difficultyLevel:3},

  { keyword:"banked", displayName:"Banked turn: tanθ=v²/(gR)", subject:"physics",domain:"forces",lane:"A",
    params:[{name:"v",unit:"m/s",values:[10,15,20,30]},{name:"R",unit:"m",values:[30,50,100,200]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"θ",unit:"°",values:[],canBeTarget:true}],
    steps:[{label:"θ=tan⁻¹(v²/(gR))",formula:"Math.atan(n0*n0/(n2*n1))*180/Math.PI",unit:"°",dimension:"[1]",equationLatex:"\\tan\\theta = \\frac{v^2}{gR}"}],
    clusterId:"forces_core",difficultyLevel:3},

  // ==========================================================
  // 3. ENERGY & WORK (7)
  // ==========================================================

  { keyword:"work", displayName:"W=Fd cosθ", subject:"physics",domain:"energy",lane:"A",
    params:[{name:"F",unit:"N",values:[2,5,10,20,50,100]},{name:"d",unit:"m",values:[1,2,3,5,10]},{name:"θ",unit:"°",values:[0,30,45,60],canBeTarget:false},{name:"W",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"W=Fd cosθ",formula:"n0*n1*Math.cos(n2*Math.PI/180)",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"W = Fd\\cos\\theta"}],
    clusterId:"energy_core",difficultyLevel:2,
    connections:[{targetKeyword:"grav_pe",relation:"contrasts_with"},{targetKeyword:"power_m",relation:"same_family"}]},

  { keyword:"grav_pe", displayName:"U_g=mgh", subject:"physics",domain:"energy",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,5,10,20]},{name:"h",unit:"m",values:[2,5,10,20,50]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"U_g",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"U_g=mgh",formula:"n0*n2*n1",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"U_g = mgh"}],
    clusterId:"energy_core",difficultyLevel:1},

  { keyword:"spring_pe", displayName:"U_s=½kx²", subject:"physics",domain:"energy",lane:"A",
    params:[{name:"k",unit:"N/m",values:[50,100,200,500,1000]},{name:"x",unit:"m",values:[0.05,0.1,0.2,0.3,0.5]},{name:"U_s",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"U_s=½kx²",formula:"0.5*n0*n1*n1",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"U_s = \\tfrac{1}{2}kx^2"}],
    clusterId:"energy_core",difficultyLevel:1},

  { keyword:"power_m", displayName:"P=Fv", subject:"physics",domain:"energy",lane:"A",
    params:[{name:"F",unit:"N",values:[10,20,50,100,200]},{name:"v",unit:"m/s",values:[2,5,10,15,20]},{name:"P",unit:"W",values:[],canBeTarget:true}],
    steps:[{label:"P=Fv",formula:"n0*n1",unit:"W",dimension:"[M][L]²[T]⁻³",equationLatex:"P = Fv"}],
    clusterId:"energy_core",difficultyLevel:1},

  { keyword:"impulse", displayName:"J=FΔt=Δp", subject:"physics",domain:"energy",lane:"A",
    params:[{name:"F",unit:"N",values:[10,20,50,100,200]},{name:"Δt",unit:"s",values:[0.1,0.5,1,2,5]},{name:"J",unit:"N·s",values:[],canBeTarget:true}],
    steps:[{label:"J=FΔt",formula:"n0*n1",unit:"N·s",dimension:"[M][L][T]⁻¹",equationLatex:"J = F\\Delta t"}],
    clusterId:"energy_core",difficultyLevel:1},

  { keyword:"efficiency", displayName:"η=W_out/E_in", subject:"physics",domain:"energy",lane:"A",
    params:[{name:"W_out",unit:"J",values:[20,50,80,150,300]},{name:"E_in",unit:"J",values:[100,200,500,1000]},{name:"η",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"η=W_out/E_in",formula:"n0/n1",unit:"",dimension:"[1]",equationLatex:"\\eta = \\frac{W_{\\text{out}}}{E_{\\text{in}}}"}],
    clusterId:"energy_core",difficultyLevel:2},

  { keyword:"heat_engine_eff", displayName:"η=1−Q_C/Q_H", subject:"physics",domain:"energy",lane:"A",
    params:[{name:"Q_H",unit:"J",values:[500,800,1000,2000]},{name:"Q_C",unit:"J",values:[200,400,600,800]},{name:"η",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"η=1−Q_C/Q_H",formula:"1-n1/n0",unit:"",dimension:"[1]",equationLatex:"\\eta = 1 - \\frac{Q_C}{Q_H}"}],
    clusterId:"energy_core",difficultyLevel:2},

  // ==========================================================
  // 4. MOMENTUM & COLLISIONS (5)
  // ==========================================================

  { keyword:"inelastic", displayName:"Inelastic: m₁v₁+m₂v₂=(m₁+m₂)v_f", subject:"physics",domain:"momentum",lane:"A",
    params:[{name:"m₁",unit:"kg",values:[1,2,3,5]},{name:"v₁",unit:"m/s",values:[2,4,6,10]},{name:"m₂",unit:"kg",values:[1,2,3,4]},{name:"v₂",unit:"m/s",values:[0,1,2,3]},{name:"v_f",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v_f=(m₁v₁+m₂v₂)/(m₁+m₂)",formula:"(n0*n1+n2*n3)/(n0+n2)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_f = \\frac{m_1v_1+m_2v_2}{m_1+m_2}"}],
    clusterId:"momentum_core",difficultyLevel:2,
    connections:[{targetKeyword:"elastic",relation:"contrasts_with"}]},

  { keyword:"elastic", displayName:"Elastic (equal mass): v₁_f=0, v₂_f=v₁", subject:"physics",domain:"momentum",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,3,5],canBeTarget:false},{name:"v₁",unit:"m/s",values:[2,3,4,5,6,10]},{name:"v₁_f",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v₁_f=0 (equal masses)",formula:"0",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_{1f}=0"}],
    clusterId:"momentum_core",difficultyLevel:2,
    connections:[{targetKeyword:"inelastic",relation:"contrasts_with"}]},

  { keyword:"recoil_speed", displayName:"Recoil: m_g·v_g=−m_b·v_b", subject:"physics",domain:"momentum",lane:"A",
    params:[{name:"m_b",unit:"kg",values:[0.005,0.01,0.02]},{name:"v_b",unit:"m/s",values:[200,300,400,500]},{name:"m_g",unit:"kg",values:[2,3,4,5]},{name:"v_g",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v_g=−m_b·v_b/m_g",formula:"-n0*n1/n2",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_g = -\\frac{m_b v_b}{m_g}"}],
    clusterId:"momentum_core",difficultyLevel:2},

  { keyword:"angmom_cons", displayName:"Ang mom: I_i·ω_i=I_f·ω_f", subject:"physics",domain:"momentum",lane:"A",
    params:[{name:"I_i",unit:"kg·m²",values:[2,4,6,8]},{name:"ω_i",unit:"rad/s",values:[2,3,4,5]},{name:"I_f",unit:"kg·m²",values:[1,2,3,4]},{name:"ω_f",unit:"rad/s",values:[],canBeTarget:true}],
    steps:[{label:"ω_f=I_i·ω_i/I_f",formula:"n0*n1/n2",unit:"rad/s",dimension:"[T]⁻¹",equationLatex:"\\omega_f = \\frac{I_i\\omega_i}{I_f}"}],
    clusterId:"momentum_core",difficultyLevel:2},

  { keyword:"restitution", displayName:"e=(v₂_f−v₁_f)/(v₁_i−v₂_i)", subject:"physics",domain:"momentum",lane:"A",
    params:[{name:"v₁_i",unit:"m/s",values:[5,10,15,20]},{name:"v₂_i",unit:"m/s",values:[0,2,5,10]},{name:"v₁_f",unit:"m/s",values:[2,3,5,8]},{name:"v₂_f",unit:"m/s",values:[5,8,10,15]},{name:"e",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"e=(v₂_f−v₁_f)/(v₁_i−v₂_i)",formula:"(n3-n2)/(n0-n1)",unit:"",dimension:"[1]",equationLatex:"e = \\frac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}"}],
    clusterId:"momentum_core",difficultyLevel:3},

  // ==========================================================
  // 5. CIRCULAR MOTION & GRAVITATION (5)
  // ==========================================================

  { keyword:"centripetal", displayName:"a_c=v²/R", subject:"physics",domain:"circular",lane:"A",
    params:[{name:"v",unit:"m/s",values:[2,4,5,8,10,15]},{name:"R",unit:"m",values:[1,2,5,10,20]},{name:"a_c",unit:"m/s²",values:[],canBeTarget:true}],
    steps:[{label:"a_c=v²/R",formula:"n0*n0/n1",unit:"m/s²",dimension:"[L][T]⁻²",equationLatex:"a_c = \\frac{v^2}{R}"}],
    clusterId:"circular_core",difficultyLevel:1,
    connections:[{targetKeyword:"centripetal_f",relation:"same_family"}]},

  { keyword:"centripetal_f", displayName:"F_c=mv²/R", subject:"physics",domain:"circular",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,5,10]},{name:"v",unit:"m/s",values:[2,4,5,8,10]},{name:"R",unit:"m",values:[1,2,5,10]},{name:"F_c",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"F_c=mv²/R",formula:"n0*n1*n1/n2",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"F_c = \\frac{mv^2}{R}"}],
    clusterId:"circular_core",difficultyLevel:1},

  { keyword:"gravity", displayName:"F=Gm₁m₂/r²", subject:"physics",domain:"circular",lane:"A",
    params:[{name:"m₁",unit:"kg",values:[100,500,1000]},{name:"m₂",unit:"kg",values:[100,500,1000]},{name:"r",unit:"m",values:[1,2,5,10]},{name:"F",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"F=Gm₁m₂/r²",formula:"6.67e-11*n0*n1/(n2*n2)",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"F = G\\frac{m_1 m_2}{r^2}"}],
    clusterId:"circular_core",difficultyLevel:2},

  { keyword:"orbital_speed", displayName:"v=√(GM/r)", subject:"physics",domain:"circular",lane:"A",
    params:[{name:"M",unit:"kg",values:[5.97e24],canBeTarget:false},{name:"r",unit:"m",values:[6.67e6,7e6,1e7,4.2e7]},{name:"v",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v=√(GM/r)",formula:"Math.sqrt(6.67e-11*n0/n1)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v = \\sqrt{\\frac{GM}{r}}"}],
    clusterId:"circular_core",difficultyLevel:2},

  { keyword:"escape", displayName:"v_esc=√(2GM/R)", subject:"physics",domain:"circular",lane:"A",
    params:[{name:"M",unit:"kg",values:[5.97e24],canBeTarget:false},{name:"R",unit:"m",values:[6.37e6,1e7,4.2e7]},{name:"v_esc",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v_esc=√(2GM/R)",formula:"Math.sqrt(2*6.67e-11*n0/n1)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}"}],
    clusterId:"circular_core",difficultyLevel:2},

  // ==========================================================
  // 6. ROTATIONAL (4)
  // ==========================================================

  { keyword:"torque", displayName:"τ=rF sinθ", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"r",unit:"m",values:[0.1,0.2,0.5,1,2]},{name:"F",unit:"N",values:[5,10,20,50,100]},{name:"θ",unit:"°",values:[30,45,60,90],canBeTarget:false},{name:"τ",unit:"N·m",values:[],canBeTarget:true}],
    steps:[{label:"τ=rF sinθ",formula:"n0*n1*Math.sin(n2*Math.PI/180)",unit:"N·m",dimension:"[M][L]²[T]⁻²",equationLatex:"\\tau = rF\\sin\\theta"}],
    clusterId:"rotational_core",difficultyLevel:2},

  { keyword:"rot_ke", displayName:"K_rot=½Iω²", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"I",unit:"kg·m²",values:[1,2,4,5,10]},{name:"ω",unit:"rad/s",values:[2,3,4,5,10]},{name:"K_rot",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"K_rot=½Iω²",formula:"0.5*n0*n1*n1",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"K_{\\text{rot}} = \\tfrac{1}{2}I\\omega^2"}],
    clusterId:"rotational_core",difficultyLevel:1},

  { keyword:"angmom", displayName:"L=Iω", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"I",unit:"kg·m²",values:[1,2,4,5,10]},{name:"ω",unit:"rad/s",values:[2,3,4,5,10]},{name:"L",unit:"kg·m²/s",values:[],canBeTarget:true}],
    steps:[{label:"L=Iω",formula:"n0*n1",unit:"kg·m²/s",dimension:"[M][L]²[T]⁻¹",equationLatex:"L = I\\omega"}],
    clusterId:"rotational_core",difficultyLevel:1},

  { keyword:"roll_incline", displayName:"Roll incline: a=g sinθ/(1+I/(mR²))", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"θ",unit:"°",values:[30,37,45]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"I_factor",unit:"",values:[0.4,0.5,0.667],canBeTarget:false},{name:"a",unit:"m/s²",values:[],canBeTarget:true}],
    steps:[{label:"a=g sinθ/(1+c)",formula:"n1*Math.sin(n0*Math.PI/180)/(1+n2)",unit:"m/s²",dimension:"[L][T]⁻²",equationLatex:"a = \\frac{g\\sin\\theta}{1+I/(mR^2)}"}],
    clusterId:"rotational_core",difficultyLevel:3},

  // ==========================================================
  // 7. SHM (3)
  // ==========================================================

  { keyword:"mass_spring_T", displayName:"Mass-spring: T=2π√(m/k)", subject:"physics",domain:"shm",lane:"A",
    params:[{name:"m",unit:"kg",values:[0.1,0.2,0.5,1,2]},{name:"k",unit:"N/m",values:[50,100,200,500,1000]},{name:"T",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"T=2π√(m/k)",formula:"2*Math.PI*Math.sqrt(n0/n1)",unit:"s",dimension:"[T]",equationLatex:"T = 2\\pi\\sqrt{\\frac{m}{k}}"}],
    clusterId:"shm_core",difficultyLevel:2,
    connections:[{targetKeyword:"pendulum",relation:"contrasts_with"}]},

  { keyword:"pendulum", displayName:"Pendulum: T=2π√(L/g)", subject:"physics",domain:"shm",lane:"A",
    params:[{name:"L",unit:"m",values:[0.5,1,2,3,5]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"T",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"T=2π√(L/g)",formula:"2*Math.PI*Math.sqrt(n0/n1)",unit:"s",dimension:"[T]",equationLatex:"T = 2\\pi\\sqrt{\\frac{L}{g}}"}],
    clusterId:"shm_core",difficultyLevel:2,
    connections:[{targetKeyword:"mass_spring_T",relation:"contrasts_with"}]},

  { keyword:"mass_spring_ω", displayName:"ω=√(k/m)", subject:"physics",domain:"shm",lane:"A",
    params:[{name:"k",unit:"N/m",values:[50,100,200,500]},{name:"m",unit:"kg",values:[0.1,0.2,0.5,1,2]},{name:"ω",unit:"rad/s",values:[],canBeTarget:true}],
    steps:[{label:"ω=√(k/m)",formula:"Math.sqrt(n0/n1)",unit:"rad/s",dimension:"[T]⁻¹",equationLatex:"\\omega = \\sqrt{\\frac{k}{m}}"}],
    clusterId:"shm_core",difficultyLevel:2},

  // ==========================================================
  // 8. WAVES & SOUND (3)
  // ==========================================================

  { keyword:"wavespeed", displayName:"v=fλ", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"f",unit:"Hz",values:[100,200,440,500,1000]},{name:"λ",unit:"m",values:[0.1,0.5,1,2,3.4]},{name:"v",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v=fλ",formula:"n0*n1",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v = f\\lambda"}],
    clusterId:"waves_core",difficultyLevel:1},

  { keyword:"wave_on_string", displayName:"v=√(F_T/μ)", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"F_T",unit:"N",values:[50,100,200,400]},{name:"μ",unit:"kg/m",values:[0.001,0.005,0.01,0.02]},{name:"v",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v=√(F_T/μ)",formula:"Math.sqrt(n0/n1)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v = \\sqrt{\\frac{F_T}{\\mu}}"}],
    clusterId:"waves_core",difficultyLevel:2},

  { keyword:"beats", displayName:"f_beat=|f₁−f₂|", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"f₁",unit:"Hz",values:[440,500,600,800]},{name:"f₂",unit:"Hz",values:[442,504,610,815]},{name:"f_beat",unit:"Hz",values:[],canBeTarget:true}],
    steps:[{label:"f_beat=|f₁−f₂|",formula:"Math.abs(n0-n1)",unit:"Hz",dimension:"[T]⁻¹",equationLatex:"f_{\\text{beat}} = |f_1-f_2|"}],
    clusterId:"waves_core",difficultyLevel:1},

  // ==========================================================
  // 9. ELECTROSTATICS & CIRCUITS (4)
  // ==========================================================

  { keyword:"coulomb", displayName:"F=k|q₁q₂|/r²", subject:"physics",domain:"electrostatics",lane:"A",
    params:[{name:"q₁",unit:"C",values:[1e-6,2e-6,5e-6]},{name:"q₂",unit:"C",values:[1e-6,2e-6,5e-6]},{name:"r",unit:"m",values:[0.1,0.2,0.5,1]},{name:"F",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"F=k|q₁q₂|/r²",formula:"8.99e9*Math.abs(n0*n1)/(n2*n2)",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"F = k\\frac{|q_1q_2|}{r^2}"}],
    clusterId:"em_core",difficultyLevel:2},

  { keyword:"ohms", displayName:"V=IR", subject:"physics",domain:"electrostatics",lane:"A",
    params:[{name:"I",unit:"A",values:[0.5,1,2,3,5]},{name:"R",unit:"Ω",values:[2,4,6,10,20,100]},{name:"V",unit:"V",values:[],canBeTarget:true}],
    steps:[{label:"V=IR",formula:"n0*n1",unit:"V",dimension:"[M][L]²[Q]⁻¹[T]⁻²",equationLatex:"V = IR"}],
    clusterId:"em_core",difficultyLevel:1},

  { keyword:"power_e", displayName:"P=IV", subject:"physics",domain:"electrostatics",lane:"A",
    params:[{name:"I",unit:"A",values:[0.5,1,2,3,5]},{name:"V",unit:"V",values:[6,12,24,120,240]},{name:"P",unit:"W",values:[],canBeTarget:true}],
    steps:[{label:"P=IV",formula:"n0*n1",unit:"W",dimension:"[M][L]²[T]⁻³",equationLatex:"P = IV"}],
    clusterId:"em_core",difficultyLevel:1},

  { keyword:"parallel2", displayName:"Parallel R: R_eq=R₁R₂/(R₁+R₂)", subject:"physics",domain:"electrostatics",lane:"A",
    params:[{name:"R₁",unit:"Ω",values:[4,6,10,20,100]},{name:"R₂",unit:"Ω",values:[6,8,12,30,150]},{name:"R_eq",unit:"Ω",values:[],canBeTarget:true}],
    steps:[{label:"R_eq=R₁R₂/(R₁+R₂)",formula:"n0*n1/(n0+n1)",unit:"Ω",dimension:"[M][L]²[Q]⁻²[T]⁻¹",equationLatex:"R_{\\text{eq}} = \\frac{R_1R_2}{R_1+R_2}"}],
    clusterId:"em_core",difficultyLevel:2},

  // ==========================================================
  // 10. MAGNETISM (2)
  // ==========================================================

  { keyword:"mag_force_q", displayName:"F=qvB sinθ", subject:"physics",domain:"magnetism",lane:"A",
    params:[{name:"q",unit:"C",values:[1.6e-19],canBeTarget:false},{name:"v",unit:"m/s",values:[1e5,2e5,5e6,1e7]},{name:"B",unit:"T",values:[0.1,0.5,1,2]},{name:"θ",unit:"°",values:[90],canBeTarget:false},{name:"F",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"F=qvB sinθ",formula:"n0*n1*n2*Math.sin(n3*Math.PI/180)",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"F = qvB\\sin\\theta"}],
    clusterId:"em_core",difficultyLevel:2},

  { keyword:"motional_emf", displayName:"ε=BLv", subject:"physics",domain:"magnetism",lane:"A",
    params:[{name:"B",unit:"T",values:[0.1,0.2,0.5,1]},{name:"L",unit:"m",values:[0.1,0.5,1,2]},{name:"v",unit:"m/s",values:[5,10,20,50]},{name:"ε",unit:"V",values:[],canBeTarget:true}],
    steps:[{label:"ε=BLv",formula:"n0*n1*n2",unit:"V",dimension:"[M][L]²[Q]⁻¹[T]⁻²",equationLatex:"\\mathcal{E} = BLv"}],
    clusterId:"em_core",difficultyLevel:2},

  // ==========================================================
  // 11. THERMODYNAMICS (2)
  // ==========================================================

  { keyword:"heat", displayName:"Q=mcΔT", subject:"physics",domain:"thermo",lane:"A",
    params:[{name:"m",unit:"kg",values:[0.1,0.5,1,2,5]},{name:"c",unit:"J/(kg·K)",values:[4186,900,450,385]},{name:"ΔT",unit:"K",values:[5,10,20,50,100]},{name:"Q",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"Q=mcΔT",formula:"n0*n1*n2",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"Q = mc\\Delta T"}],
    clusterId:"thermo_core",difficultyLevel:1},

  { keyword:"carnot", displayName:"Carnot: η=1−T_C/T_H", subject:"physics",domain:"thermo",lane:"A",
    params:[{name:"T_H",unit:"K",values:[400,500,600,800,1000]},{name:"T_C",unit:"K",values:[273,300,350,400]},{name:"η",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"η=1−T_C/T_H",formula:"1-n1/n0",unit:"",dimension:"[1]",equationLatex:"\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}"}],
    clusterId:"thermo_core",difficultyLevel:2},

  // ==========================================================
  // 12. PROJECTILE MOTION (6)
  // ==========================================================

  { keyword:"launched_at_an_angle", displayName:"v₀x=v₀cosθ, v₀y=v₀sinθ", subject:"physics",domain:"projectile",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[10,20,30,50]},{name:"θ",unit:"°",values:[30,37,45,53,60]},{name:"v₀x",unit:"m/s",values:[],canBeTarget:true},{name:"v₀y",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v₀x=v₀cosθ",formula:"n0*Math.cos(n1*Math.PI/180)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_{0x}"},
      {label:"v₀y=v₀sinθ",formula:"n0*Math.sin(n1*Math.PI/180)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_{0y}"}],
    clusterId:"projectile_core",difficultyLevel:2},

  { keyword:"time_spent_in_the_air", displayName:"Flight time: t=2v₀ sinθ/g", subject:"physics",domain:"projectile",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[10,20,30,50]},{name:"θ",unit:"°",values:[30,37,45,53,60]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"t_flight",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"t=2v₀ sinθ/g",formula:"2*n0*Math.sin(n1*Math.PI/180)/n2",unit:"s",dimension:"[T]",equationLatex:"t = \\frac{2v_0\\sin\\theta}{g}"}],
    clusterId:"projectile_core",difficultyLevel:2},

  { keyword:"peak_of_the_trajectory", displayName:"Max height: h=(v₀ sinθ)²/(2g)", subject:"physics",domain:"projectile",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[10,20,30,50]},{name:"θ",unit:"°",values:[30,37,45,53,60]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"h_max",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"h_max=(v₀ sinθ)²/(2g)",formula:"Math.pow(n0*Math.sin(n1*Math.PI/180),2)/(2*n2)",unit:"m",dimension:"[L]",equationLatex:"h_{\\max} = \\frac{(v_0\\sin\\theta)^2}{2g}"}],
    clusterId:"projectile_core",difficultyLevel:2},

  { keyword:"how_far_does_it_land", displayName:"Range: R=v₀² sin2θ/g", subject:"physics",domain:"projectile",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[10,20,30,50]},{name:"θ",unit:"°",values:[30,37,45,53,60]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"R",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"R=v₀² sin2θ/g",formula:"n0*n0*Math.sin(2*n1*Math.PI/180)/n2",unit:"m",dimension:"[L]",equationLatex:"R = \\frac{v_0^2\\sin2\\theta}{g}"}],
    clusterId:"projectile_core",difficultyLevel:2},

  { keyword:"thrown_straight_upward", displayName:"Vert throw: h_max=v₀²/(2g)", subject:"physics",domain:"projectile",lane:"A",
    params:[{name:"v₀",unit:"m/s",values:[5,10,15,20,30]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"h_max",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"h_max=v₀²/(2g)",formula:"n0*n0/(2*n1)",unit:"m",dimension:"[L]",equationLatex:"h_{\\max} = \\frac{v_0^2}{2g}"}],
    clusterId:"projectile_core",difficultyLevel:1},

  { keyword:"dropped_from_a_height", displayName:"Free fall: v=√(2gh)", subject:"physics",domain:"projectile",lane:"A",
    params:[{name:"h",unit:"m",values:[5,10,20,45,80]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"v",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v=√(2gh)",formula:"Math.sqrt(2*n0*n1)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v = \\sqrt{2gh}"}],
    clusterId:"projectile_core",difficultyLevel:1},

  // ==========================================================
  // 13. MOMENT OF INERTIA (5)
  // ==========================================================

  { keyword:"point_mass_I", displayName:"I=mr²", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,5,10]},{name:"r",unit:"m",values:[0.5,1,2,3]},{name:"I",unit:"kg·m²",values:[],canBeTarget:true}],
    steps:[{label:"I=mr²",formula:"n0*n1*n1",unit:"kg·m²",dimension:"[M][L]²",equationLatex:"I = mr^2"}],
    clusterId:"inertia_core",difficultyLevel:1},

  { keyword:"solid_cylinder_I", displayName:"Solid cylinder: I=½MR²", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"M",unit:"kg",values:[1,2,5,10]},{name:"R",unit:"m",values:[0.1,0.2,0.5,1]},{name:"I",unit:"kg·m²",values:[],canBeTarget:true}],
    steps:[{label:"I=½MR²",formula:"0.5*n0*n1*n1",unit:"kg·m²",dimension:"[M][L]²",equationLatex:"I = \\tfrac{1}{2}MR^2"}],
    clusterId:"inertia_core",difficultyLevel:1},

  { keyword:"solid_sphere_I", displayName:"Solid sphere: I=⅖MR²", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"M",unit:"kg",values:[1,2,5,10]},{name:"R",unit:"m",values:[0.1,0.2,0.5,1]},{name:"I",unit:"kg·m²",values:[],canBeTarget:true}],
    steps:[{label:"I=⅖MR²",formula:"0.4*n0*n1*n1",unit:"kg·m²",dimension:"[M][L]²",equationLatex:"I = \\tfrac{2}{5}MR^2"}],
    clusterId:"inertia_core",difficultyLevel:1},

  { keyword:"rod_center_I", displayName:"Rod (center): I=¹⁄₁₂ML²", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"M",unit:"kg",values:[1,2,5,10]},{name:"L",unit:"m",values:[0.5,1,2,3]},{name:"I",unit:"kg·m²",values:[],canBeTarget:true}],
    steps:[{label:"I=ML²/12",formula:"n0*n1*n1/12",unit:"kg·m²",dimension:"[M][L]²",equationLatex:"I = \\tfrac{1}{12}ML^2"}],
    clusterId:"inertia_core",difficultyLevel:1},

  { keyword:"parallel_axis", displayName:"Parallel axis: I=I_cm+Md²", subject:"physics",domain:"rotational",lane:"A",
    params:[{name:"I_cm",unit:"kg·m²",values:[1,2,4,5]},{name:"M",unit:"kg",values:[1,2,5,10]},{name:"d",unit:"m",values:[0.5,1,2]},{name:"I",unit:"kg·m²",values:[],canBeTarget:true}],
    steps:[{label:"I=I_cm+Md²",formula:"n0+n1*n2*n2",unit:"kg·m²",dimension:"[M][L]²",equationLatex:"I = I_{\\text{cm}} + Md^2"}],
    clusterId:"inertia_core",difficultyLevel:2},

  // ==========================================================
  // 14. FLUIDS (5)
  // ==========================================================

  { keyword:"pressure_depth", displayName:"P=P₀+ρgh", subject:"physics",domain:"fluids",lane:"A",
    params:[{name:"P₀",unit:"Pa",values:[101325],canBeTarget:false},{name:"ρ",unit:"kg/m³",values:[1000,13600,800]},{name:"h",unit:"m",values:[1,2,5,10,20]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"P",unit:"Pa",values:[],canBeTarget:true}],
    steps:[{label:"P=P₀+ρgh",formula:"n0+n1*n3*n2",unit:"Pa",dimension:"[M][L]⁻¹[T]⁻²",equationLatex:"P = P_0 + \\rho gh"}],
    clusterId:"fluids_core",difficultyLevel:2},

  { keyword:"buoyancy", displayName:"F_B=ρgV", subject:"physics",domain:"fluids",lane:"A",
    params:[{name:"ρ",unit:"kg/m³",values:[1000,800,13600]},{name:"V",unit:"m³",values:[0.001,0.005,0.01,0.1]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"F_B",unit:"N",values:[],canBeTarget:true}],
    steps:[{label:"F_B=ρgV",formula:"n0*n2*n1",unit:"N",dimension:"[M][L][T]⁻²",equationLatex:"F_B = \\rho gV"}],
    clusterId:"fluids_core",difficultyLevel:1},

  { keyword:"continuity", displayName:"A₁v₁=A₂v₂", subject:"physics",domain:"fluids",lane:"A",
    params:[{name:"A₁",unit:"m²",values:[0.01,0.02,0.05,0.1]},{name:"v₁",unit:"m/s",values:[1,2,3,5,10]},{name:"A₂",unit:"m²",values:[0.005,0.01,0.02,0.05]},{name:"v₂",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v₂=A₁v₁/A₂",formula:"n0*n1/n2",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_2 = \\frac{A_1v_1}{A_2}"}],
    clusterId:"fluids_core",difficultyLevel:1},

  { keyword:"bernoulli", displayName:"Bernoulli: P+½ρv²+ρgy=const", subject:"physics",domain:"fluids",lane:"A",
    params:[{name:"P₁",unit:"Pa",values:[150000,200000,300000]},{name:"ρ",unit:"kg/m³",values:[1000],canBeTarget:false},{name:"v₁",unit:"m/s",values:[1,2,3,5]},{name:"y₁",unit:"m",values:[0,2,5],canBeTarget:false},{name:"v₂",unit:"m/s",values:[5,10,15,20]},{name:"y₂",unit:"m",values:[0],canBeTarget:false},{name:"P₂",unit:"Pa",values:[],canBeTarget:true}],
    steps:[{label:"P₂=P₁+½ρ(v₁²−v₂²)+ρg(y₁−y₂)",formula:"n0+0.5*n1*(n2*n2-n4*n4)+n1*9.8*(n3-n5)",unit:"Pa",dimension:"[M][L]⁻¹[T]⁻²",equationLatex:"P_2 = P_1 + \\tfrac{1}{2}\\rho(v_1^2-v_2^2) + \\rho g(y_1-y_2)"}],
    clusterId:"fluids_core",difficultyLevel:3},

  { keyword:"torricelli", displayName:"Efflux: v=√(2gh)", subject:"physics",domain:"fluids",lane:"A",
    params:[{name:"h",unit:"m",values:[0.5,1,2,5,10]},{name:"g",unit:"m/s²",values:[9.8,10],canBeTarget:false},{name:"v",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v=√(2gh)",formula:"Math.sqrt(2*n0*n1)",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v = \\sqrt{2gh}"}],
    clusterId:"fluids_core",difficultyLevel:1},

  // ==========================================================
  // 15. OPTICS (6)
  // ==========================================================

  { keyword:"snell", displayName:"Snell: n₁sinθ₁=n₂sinθ₂", subject:"physics",domain:"optics",lane:"A",
    params:[{name:"n₁",unit:"",values:[1,1.33,1.5]},{name:"θ₁",unit:"°",values:[30,37,45,60]},{name:"n₂",unit:"",values:[1.33,1.5,2.0]},{name:"θ₂",unit:"°",values:[],canBeTarget:true}],
    steps:[{label:"θ₂=sin⁻¹(n₁sinθ₁/n₂)",formula:"Math.asin(n0*Math.sin(n1*Math.PI/180)/n2)*180/Math.PI",unit:"°",dimension:"[1]",equationLatex:"\\theta_2 = \\sin^{-1}\\left(\\frac{n_1\\sin\\theta_1}{n_2}\\right)"}],
    clusterId:"optics_core",difficultyLevel:2},

  { keyword:"critical", displayName:"Critical angle: θ_c=sin⁻¹(n₂/n₁)", subject:"physics",domain:"optics",lane:"A",
    params:[{name:"n₁",unit:"",values:[1.33,1.5,2.0]},{name:"n₂",unit:"",values:[1,1.33,1.5]},{name:"θ_c",unit:"°",values:[],canBeTarget:true}],
    steps:[{label:"θ_c=sin⁻¹(n₂/n₁)",formula:"Math.asin(n1/n0)*180/Math.PI",unit:"°",dimension:"[1]",equationLatex:"\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right)"}],
    clusterId:"optics_core",difficultyLevel:2},

  { keyword:"lens", displayName:"Lens: 1/f=1/d_o+1/d_i", subject:"physics",domain:"optics",lane:"A",
    params:[{name:"f",unit:"cm",values:[10,15,20,30]},{name:"d_o",unit:"cm",values:[15,20,30,40,60]},{name:"d_i",unit:"cm",values:[],canBeTarget:true}],
    steps:[{label:"d_i=1/(1/f−1/d_o)",formula:"1/(1/n0-1/n1)",unit:"cm",dimension:"[L]",equationLatex:"d_i = \\frac{1}{\\frac{1}{f}-\\frac{1}{d_o}}"}],
    clusterId:"optics_core",difficultyLevel:2},

  { keyword:"magnification", displayName:"m=−d_i/d_o", subject:"physics",domain:"optics",lane:"A",
    params:[{name:"d_i",unit:"cm",values:[15,30,45,60,-15,-30]},{name:"d_o",unit:"cm",values:[10,15,20,30,40]},{name:"m",unit:"",values:[],canBeTarget:true}],
    steps:[{label:"m=−d_i/d_o",formula:"-n0/n1",unit:"",dimension:"[1]",equationLatex:"m = -\\frac{d_i}{d_o}"}],
    clusterId:"optics_core",difficultyLevel:1},

  { keyword:"fringe_spacing", displayName:"Δy=λL/d", subject:"physics",domain:"optics",lane:"A",
    params:[{name:"λ",unit:"m",values:[4e-7,5e-7,6e-7,7e-7]},{name:"L",unit:"m",values:[0.5,1,2,3]},{name:"d",unit:"m",values:[0.0001,0.0002,0.0005,0.001]},{name:"Δy",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"Δy=λL/d",formula:"n0*n1/n2",unit:"m",dimension:"[L]",equationLatex:"\\Delta y = \\frac{\\lambda L}{d}"}],
    clusterId:"optics_core",difficultyLevel:2},

  { keyword:"malus", displayName:"Malus: I=I₀cos²θ", subject:"physics",domain:"optics",lane:"A",
    params:[{name:"I₀",unit:"W/m²",values:[10,50,100,200]},{name:"θ",unit:"°",values:[0,30,45,60]},{name:"I",unit:"W/m²",values:[],canBeTarget:true}],
    steps:[{label:"I=I₀cos²θ",formula:"n0*Math.pow(Math.cos(n1*Math.PI/180),2)",unit:"W/m²",dimension:"[M][T]⁻³",equationLatex:"I = I_0\\cos^2\\theta"}],
    clusterId:"optics_core",difficultyLevel:2},

  // ==========================================================
  // 16. MODERN PHYSICS (7)
  // ==========================================================

  { keyword:"photon_Eλ", displayName:"E=hc/λ", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"λ",unit:"nm",values:[200,400,550,700]},{name:"E",unit:"eV",values:[],canBeTarget:true}],
    steps:[{label:"E=1240/λ(nm)",formula:"1240/n0",unit:"eV",dimension:"[M][L]²[T]⁻²",equationLatex:"E = \\frac{hc}{\\lambda}"}],
    clusterId:"modern_core",difficultyLevel:1},

  { keyword:"photo_E", displayName:"K_max=hf−φ", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"f",unit:"Hz",values:[5e14,8e14,1e15,1.5e15]},{name:"φ",unit:"eV",values:[2,3,4,5]},{name:"K_max",unit:"eV",values:[],canBeTarget:true}],
    steps:[{label:"E=hf (eV)=f×4.136e-15",formula:"n0*4.136e-15",unit:"eV",dimension:"[M][L]²[T]⁻²",equationLatex:"E=hf"},
      {label:"K_max=hf−φ",formula:"n0*4.136e-15-n1",unit:"eV",dimension:"[M][L]²[T]⁻²",equationLatex:"K_{\\max} = hf - \\phi"}],
    clusterId:"modern_core",difficultyLevel:2},

  { keyword:"deBroglie", displayName:"λ=h/(mv)", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"m",unit:"kg",values:[9.11e-31,1.67e-27]},{name:"v",unit:"m/s",values:[1e5,1e6,1e7]},{name:"λ",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"λ=h/(mv)",formula:"6.626e-34/(n0*n1)",unit:"m",dimension:"[L]",equationLatex:"\\lambda = \\frac{h}{mv}"}],
    clusterId:"modern_core",difficultyLevel:2},

  { keyword:"bohr_E", displayName:"E_n=−13.6/n² eV", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"n",unit:"",values:[1,2,3,4,5]},{name:"E_n",unit:"eV",values:[],canBeTarget:true}],
    steps:[{label:"E_n=−13.6/n²",formula:"-13.6/(n0*n0)",unit:"eV",dimension:"[M][L]²[T]⁻²",equationLatex:"E_n = -\\frac{13.6}{n^2}"}],
    clusterId:"modern_core",difficultyLevel:1},

  { keyword:"time_dilation", displayName:"Δt=γΔt₀", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"Δt₀",unit:"s",values:[1,10,60,3600]},{name:"v_c",unit:"",values:[0.6,0.8,0.9,0.95,0.99]},{name:"Δt",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"γ=1/√(1−v²/c²)",formula:"1/Math.sqrt(1-n1*n1)",unit:"",dimension:"[1]",equationLatex:"\\gamma"},
      {label:"Δt=γΔt₀",formula:"n0/Math.sqrt(1-n1*n1)",unit:"s",dimension:"[T]",equationLatex:"\\Delta t = \\gamma\\Delta t_0"}],
    clusterId:"modern_core",difficultyLevel:3},

  { keyword:"length_contraction", displayName:"L=L₀/γ", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"L₀",unit:"m",values:[10,100,1000]},{name:"v_c",unit:"",values:[0.6,0.8,0.9,0.95]},{name:"L",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"L=L₀√(1−v²/c²)",formula:"n0*Math.sqrt(1-n1*n1)",unit:"m",dimension:"[L]",equationLatex:"L = L_0\\sqrt{1-\\frac{v^2}{c^2}}"}],
    clusterId:"modern_core",difficultyLevel:3},

  { keyword:"rest_energy", displayName:"E₀=mc²", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"m",unit:"kg",values:[1,2,5,10]},{name:"E₀",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"E₀=mc²",formula:"n0*9e16",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"E_0 = mc^2"}],
    clusterId:"modern_core",difficultyLevel:1},

  // ==========================================================
  // 17. E&M EXTENDED (7)
  // ==========================================================

  { keyword:"capacitor_Q", displayName:"Q=CV", subject:"physics",domain:"electrostatics",lane:"A",
    params:[{name:"C",unit:"F",values:[1e-6,5e-6,10e-6,100e-6]},{name:"V",unit:"V",values:[6,12,24,100]},{name:"Q",unit:"C",values:[],canBeTarget:true}],
    steps:[{label:"Q=CV",formula:"n0*n1",unit:"C",dimension:"[Q]",equationLatex:"Q = CV"}],
    clusterId:"em_core",difficultyLevel:1},

  { keyword:"capacitor_U", displayName:"U=½CV²", subject:"physics",domain:"electrostatics",lane:"A",
    params:[{name:"C",unit:"F",values:[1e-6,5e-6,10e-6,100e-6]},{name:"V",unit:"V",values:[6,12,24,100]},{name:"U",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"U=½CV²",formula:"0.5*n0*n1*n1",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"U = \\tfrac{1}{2}CV^2"}],
    clusterId:"em_core",difficultyLevel:1},

  { keyword:"rc_time", displayName:"τ=RC", subject:"physics",domain:"electrostatics",lane:"A",
    params:[{name:"R",unit:"Ω",values:[1e3,10e3,100e3,1e6]},{name:"C",unit:"F",values:[1e-6,10e-6,100e-6,1000e-6]},{name:"τ",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"τ=RC",formula:"n0*n1",unit:"s",dimension:"[T]",equationLatex:"\\tau = RC"}],
    clusterId:"em_core",difficultyLevel:1},

  { keyword:"mag_flux", displayName:"Φ_B=BA cosθ", subject:"physics",domain:"magnetism",lane:"A",
    params:[{name:"B",unit:"T",values:[0.1,0.5,1,2]},{name:"A",unit:"m²",values:[0.01,0.05,0.1,0.5]},{name:"θ",unit:"°",values:[0,30,45,60]},{name:"Φ_B",unit:"Wb",values:[],canBeTarget:true}],
    steps:[{label:"Φ_B=BA cosθ",formula:"n0*n1*Math.cos(n2*Math.PI/180)",unit:"Wb",dimension:"[M][L]²[Q]⁻¹[T]⁻¹",equationLatex:"\\Phi_B = BA\\cos\\theta"}],
    clusterId:"em_core",difficultyLevel:2},

  { keyword:"faraday_emf", displayName:"|ε|=N ΔΦ/Δt", subject:"physics",domain:"magnetism",lane:"A",
    params:[{name:"N",unit:"",values:[1,10,50,100]},{name:"ΔΦ",unit:"Wb",values:[0.01,0.05,0.1,0.5]},{name:"Δt",unit:"s",values:[0.01,0.05,0.1,0.5,1]},{name:"ε",unit:"V",values:[],canBeTarget:true}],
    steps:[{label:"|ε|=N ΔΦ/Δt",formula:"n0*n1/n2",unit:"V",dimension:"[M][L]²[Q]⁻¹[T]⁻²",equationLatex:"|\\mathcal{E}| = N\\frac{\\Delta\\Phi}{\\Delta t}"}],
    clusterId:"em_core",difficultyLevel:2},

  { keyword:"lc_osc", displayName:"LC: ω=1/√(LC)", subject:"physics",domain:"magnetism",lane:"A",
    params:[{name:"L",unit:"H",values:[0.01,0.1,1]},{name:"C",unit:"F",values:[1e-6,10e-6,100e-6]},{name:"ω",unit:"rad/s",values:[],canBeTarget:true}],
    steps:[{label:"ω=1/√(LC)",formula:"1/Math.sqrt(n0*n1)",unit:"rad/s",dimension:"[T]⁻¹",equationLatex:"\\omega = \\frac{1}{\\sqrt{LC}}"}],
    clusterId:"em_core",difficultyLevel:2},

  { keyword:"transformer", displayName:"V_s/V_p=N_s/N_p", subject:"physics",domain:"magnetism",lane:"A",
    params:[{name:"V_p",unit:"V",values:[120,240]},{name:"N_p",unit:"",values:[100,200,500]},{name:"N_s",unit:"",values:[50,100,200,1000]},{name:"V_s",unit:"V",values:[],canBeTarget:true}],
    steps:[{label:"V_s=V_p·N_s/N_p",formula:"n0*n2/n1",unit:"V",dimension:"[M][L]²[Q]⁻¹[T]⁻²",equationLatex:"V_s = V_p\\frac{N_s}{N_p}"}],
    clusterId:"em_core",difficultyLevel:1},

  // ==========================================================
  // 18. THERMO EXTENDED (4)
  // ==========================================================

  { keyword:"first_law", displayName:"ΔU=Q−W", subject:"physics",domain:"thermo",lane:"A",
    params:[{name:"Q",unit:"J",values:[100,200,500,1000]},{name:"W",unit:"J",values:[50,100,200,500]},{name:"ΔU",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"ΔU=Q−W",formula:"n0-n1",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"\\Delta U = Q - W"}],
    clusterId:"thermo_core",difficultyLevel:1},

  { keyword:"latent", displayName:"Q=mL", subject:"physics",domain:"thermo",lane:"A",
    params:[{name:"m",unit:"kg",values:[0.1,0.5,1,2]},{name:"L",unit:"J/kg",values:[3.34e5,2.26e6,4.18e5]},{name:"Q",unit:"J",values:[],canBeTarget:true}],
    steps:[{label:"Q=mL",formula:"n0*n1",unit:"J",dimension:"[M][L]²[T]⁻²",equationLatex:"Q = mL"}],
    clusterId:"thermo_core",difficultyLevel:1},

  { keyword:"thermal_exp", displayName:"ΔL=αL₀ΔT", subject:"physics",domain:"thermo",lane:"A",
    params:[{name:"α",unit:"1/K",values:[1.2e-5,2.4e-5,1.7e-5]},{name:"L₀",unit:"m",values:[1,2,5,10]},{name:"ΔT",unit:"K",values:[10,30,50,100]},{name:"ΔL",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"ΔL=αL₀ΔT",formula:"n0*n1*n2",unit:"m",dimension:"[L]",equationLatex:"\\Delta L = \\alpha L_0\\Delta T"}],
    clusterId:"thermo_core",difficultyLevel:2},

  { keyword:"stefan", displayName:"P=σAeT⁴", subject:"physics",domain:"thermo",lane:"A",
    params:[{name:"e",unit:"",values:[0.5,0.8,1],canBeTarget:false},{name:"A",unit:"m²",values:[0.1,0.5,1,2]},{name:"T",unit:"K",values:[300,400,500,600]},{name:"P",unit:"W",values:[],canBeTarget:true}],
    steps:[{label:"P=σAeT⁴",formula:"5.67e-8*n0*n1*n2*n2*n2*n2",unit:"W",dimension:"[M][L]²[T]⁻³",equationLatex:"P = \\sigma A e T^4"}],
    clusterId:"thermo_core",difficultyLevel:2},

  // ==========================================================
  // 19. WAVES & SOUND EXTENDED (5)
  // ==========================================================

  { keyword:"doppler_s", displayName:"Doppler (source): f'=f·v/(v−v_s)", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"f",unit:"Hz",values:[440,500,1000]},{name:"v",unit:"m/s",values:[343],canBeTarget:false},{name:"v_s",unit:"m/s",values:[20,30,50,100]},{name:"f'",unit:"Hz",values:[],canBeTarget:true}],
    steps:[{label:"f'=f·v/(v−v_s)",formula:"n0*n1/(n1-n2)",unit:"Hz",dimension:"[T]⁻¹",equationLatex:"f' = f\\frac{v}{v-v_s}"}],
    clusterId:"waves_core",difficultyLevel:2},

  { keyword:"doppler_o", displayName:"Doppler (observer): f'=f·(v+v_o)/v", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"f",unit:"Hz",values:[440,500,1000]},{name:"v",unit:"m/s",values:[343],canBeTarget:false},{name:"v_o",unit:"m/s",values:[20,30,50,100]},{name:"f'",unit:"Hz",values:[],canBeTarget:true}],
    steps:[{label:"f'=f·(v+v_o)/v",formula:"n0*(n1+n2)/n1",unit:"Hz",dimension:"[T]⁻¹",equationLatex:"f' = f\\frac{v+v_o}{v}"}],
    clusterId:"waves_core",difficultyLevel:2},

  { keyword:"sound_level", displayName:"β=10log₁₀(I/10⁻¹²)", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"I",unit:"W/m²",values:[1e-12,1e-10,1e-8,1e-6,1e-4]},{name:"β",unit:"dB",values:[],canBeTarget:true}],
    steps:[{label:"β=10log₁₀(I/10⁻¹²)",formula:"10*Math.log10(n0/1e-12)",unit:"dB",dimension:"[1]",equationLatex:"\\beta = 10\\log_{10}\\frac{I}{10^{-12}}"}],
    clusterId:"waves_core",difficultyLevel:2},

  { keyword:"open_pipe", displayName:"Open pipe: f_n=nv/(2L)", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"n",unit:"",values:[1,2,3,4],canBeTarget:false},{name:"v",unit:"m/s",values:[343],canBeTarget:false},{name:"L",unit:"m",values:[0.5,1,2,3]},{name:"f_n",unit:"Hz",values:[],canBeTarget:true}],
    steps:[{label:"f_n=nv/(2L)",formula:"n0*n1/(2*n2)",unit:"Hz",dimension:"[T]⁻¹",equationLatex:"f_n = \\frac{nv}{2L}"}],
    clusterId:"waves_core",difficultyLevel:2},

  { keyword:"closed_pipe", displayName:"Closed pipe: f_n=nv/(4L) (odd n)", subject:"physics",domain:"waves",lane:"A",
    params:[{name:"n",unit:"",values:[1,3,5,7],canBeTarget:false},{name:"v",unit:"m/s",values:[343],canBeTarget:false},{name:"L",unit:"m",values:[0.5,1,2,3]},{name:"f_n",unit:"Hz",values:[],canBeTarget:true}],
    steps:[{label:"f_n=nv/(4L)",formula:"n0*n1/(4*n2)",unit:"Hz",dimension:"[T]⁻¹",equationLatex:"f_n = \\frac{nv}{4L}"}],
    clusterId:"waves_core",difficultyLevel:2},

  // ==========================================================
  // 20. SHM EXTENDED (2)
  // ==========================================================

  { keyword:"v_max_SHM", displayName:"v_max=ωA", subject:"physics",domain:"shm",lane:"A",
    params:[{name:"ω",unit:"rad/s",values:[2,3,4,5,10]},{name:"A",unit:"m",values:[0.1,0.2,0.5,1]},{name:"v_max",unit:"m/s",values:[],canBeTarget:true}],
    steps:[{label:"v_max=ωA",formula:"n0*n1",unit:"m/s",dimension:"[L][T]⁻¹",equationLatex:"v_{\\max} = \\omega A"}],
    clusterId:"shm_core",difficultyLevel:1},

  { keyword:"a_max_SHM", displayName:"a_max=ω²A", subject:"physics",domain:"shm",lane:"A",
    params:[{name:"ω",unit:"rad/s",values:[2,3,4,5,10]},{name:"A",unit:"m",values:[0.1,0.2,0.5,1]},{name:"a_max",unit:"m/s²",values:[],canBeTarget:true}],
    steps:[{label:"a_max=ω²A",formula:"n0*n0*n1",unit:"m/s²",dimension:"[L][T]⁻²",equationLatex:"a_{\\max} = \\omega^2 A"}],
    clusterId:"shm_core",difficultyLevel:1},

  // ==========================================================
  // 21. CIRCULAR EXTENDED (1)
  // ==========================================================

  { keyword:"orbital_period", displayName:"T²=4π²r³/(GM)", subject:"physics",domain:"circular",lane:"A",
    params:[{name:"r",unit:"m",values:[6.67e6,7e6,1e7]},{name:"M",unit:"kg",values:[5.97e24],canBeTarget:false},{name:"T",unit:"s",values:[],canBeTarget:true}],
    steps:[{label:"T=√(4π²r³/(GM))",formula:"Math.sqrt(4*Math.PI*Math.PI*n0*n0*n0/(6.67e-11*n1))",unit:"s",dimension:"[T]",equationLatex:"T = \\sqrt{\\frac{4\\pi^2 r^3}{GM}}"}],
    clusterId:"circular_core",difficultyLevel:2},

  // ==========================================================
  // 22. NUCLEAR (1)
  // ==========================================================

  { keyword:"halflife_nuclear", displayName:"N=N₀/2^n", subject:"physics",domain:"modern",lane:"A",
    params:[{name:"N₀",unit:"g",values:[100,500,1000]},{name:"n",unit:"",values:[1,2,3,4,5]},{name:"N",unit:"g",values:[],canBeTarget:true}],
    steps:[{label:"N=N₀/2^n",formula:"n0/Math.pow(2,n1)",unit:"g",dimension:"[M]",equationLatex:"N = \\frac{N_0}{2^n}"}],
    clusterId:"modern_core",difficultyLevel:1},

  // ==========================================================
  // 23. CENTER OF MASS (1)
  // ==========================================================

  { keyword:"center_of_mass", displayName:"CM: r_cm=Σmr/Σm", subject:"physics",domain:"momentum",lane:"A",
    params:[{name:"m₁",unit:"kg",values:[1,2,3,5]},{name:"x₁",unit:"m",values:[0,1,2,4]},{name:"m₂",unit:"kg",values:[1,2,3,5]},{name:"x₂",unit:"m",values:[2,4,6,10]},{name:"x_cm",unit:"m",values:[],canBeTarget:true}],
    steps:[{label:"x_cm=(m₁x₁+m₂x₂)/(m₁+m₂)",formula:"(n0*n1+n2*n3)/(n0+n2)",unit:"m",dimension:"[L]",equationLatex:"x_{\\text{cm}} = \\frac{m_1x_1+m_2x_2}{m_1+m_2}"}],
    clusterId:"momentum_core",difficultyLevel:2},

  // ==========================================================
  // ==========================================================
  // END — 100 Physics Concepts
  // ==========================================================
];
