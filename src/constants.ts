
import { PhysicsData, Simulation, PhysicsGame } from './types';

export const ALL_PHYSICS_DATA: PhysicsData = {
    "Kinematika": [
        { 
            id: 1, 
            catName: "Kinematika", 
            name: "1. Koordinata", 
            sym: "x, y, z", 
            form: "x = x₀ + v t (L.D.NJ) | x = x₀ + v₀t + ½at² (L.D.Nj.ND)", 
            unit: "m", 
            otherUnits: "milje (1km=0.621milje), foot (1ft=30.48cm), inch (1in=2.54cm)", 
            teTjera: "Sistemi i referimit përbëhet nga trupi i referimit, sistemi i koordinatave dhe kronometri.", 
            nature: "Vektoriale", 
            desc: "Pozicioni i një pike materiale në hapësirë në raport me një sistem referimi të zgjedhur.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup niset nga koordinata x₀ = 5m dhe lëviz me shpejtësi konstante v = 2m/s. Gjeni koordinatën e tij pas t = 10s.</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një trup niset nga koordinata x₀ = 5m dhe lëviz me shpejtësi konstante v = 2m/s. Gjeni koordinatën e tij pas t = 10s. (Jep vetëm numrin)",
              zgjidhja: "25",
              hapi1: "Zgjidh formulën: x = x₀ + vt",
              hapi2: "Zëvendëso vlerat: x = 5 + 2 * 10",
              hapi3: "Llogarit: x = 5 + 20 = 25 m"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/graphing-lines", 
            img: "https://d20khd7ddkh5ls.cloudfront.net/img11_66.jpg", 
            vid: "https://www.youtube.com/embed/MCDL8EXYIFo", 
            gameUrl: "/loja-koordinata.html" 
        },
        { 
            id: 2, 
            catName: "Kinematika", 
            name: "2. Zhvendosja", 
            sym: "Δx", 
            form: "Δx = x - x₀ | Δx = v₀t + ½at² | v² - v₀² = 2aΔx", 
            unit: "m", 
            otherUnits: "milje (1milje=1.609km), pash (1pash=1.5m), foot (1ft=30.48cm)", 
            teTjera: "Zhvendosja është madhësi vektoriale, ndryshe nga rruga që është skalare.", 
            nature: "Vektoriale", 
            desc: "Vektori që bashkon pozicionin fillestar me atë përfundimtar të trupit gjatë lëvizjes.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një makinë lëviz 100m në lindje dhe pastaj 30m në perëndim. Gjeni zhvendosjen totale të makinës.</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një makinë lëviz 100m në lindje (+) dhe pastaj 30m në perëndim (-). Sa është zhvendosja totale (Δx)?",
              zgjidhja: "70",
              hapi1: "Identifiko drejtimet: x1 = +100m, x2 = -30m",
              hapi2: "Mbledh vektorët: Δx = 100 + (-30)",
              hapi3: "Llogarit: Δx = 70 m"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", 
            img: "https://www.sciencefacts.net/wp-content/uploads/2022/10/Displacement-Formula.jpg", 
            vid: "https://www.youtube.com/embed/m4jrhAckbK0", 
            gameUrl: "/loja-zhvendosja.html" 
        },
        { 
            id: 3, 
            catName: "Kinematika", 
            name: "3. Rruga e përshkuar", 
            sym: "l", 
            form: "l = v t (L.D.NJ) | l = 2πR (L.RR.NJ)", 
            unit: "m", 
            otherUnits: "cm, km, mm", 
            teTjera: "Rruga është gjithmonë pozitive dhe rritet me kalimin e kohës.", 
            nature: "Skalare", 
            desc: "Gjatësia e trajektores së përshkuar nga trupi gjatë një intervali kohe.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një atlet vrapon në një pistë rrethore me rreze R = 50m. Sa rrugë përshkon ai pas një xhiroje të plotë?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një atlet vrapon në një pistë rrethore me rreze R = 50m. Sa rrugë përshkon ai pas një xhiroje të plotë? (Përdor π = 3.14)",
              zgjidhja: "314",
              hapi1: "Zgjidh formulën: l = 2πR",
              hapi2: "Zëvendëso vlerat: l = 2 * 3.14 * 50",
              hapi3: "Llogarit: l = 314 m"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", 
            img: "https://i.ytimg.com/vi/XS4QMCYGgtM/maxresdefault.jpg", 
            vid: "https://www.youtube.com/embed/m4jrhAckbK0", 
            gameUrl: "/loja-rruga.html" 
        },
        { 
            id: 4, 
            catName: "Kinematika", 
            name: "4. Koha", 
            sym: "t", 
            form: "t = l / v | t = Δv / a", 
            unit: "s", 
            otherUnits: "min, orë, ditë, vite", 
            teTjera: "Koha është gjithmonë pozitive në fizikën klasike.", 
            nature: "Skalare", 
            desc: "Madhësia që përcakton kohëzgjatjen e një procesi fizik ose renditjen e ngjarjeve.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një makinë lëviz me shpejtësi konstante v = 20m/s. Sa kohë i duhet për të përshkuar rrugën l = 1000m?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një makinë lëviz me shpejtësi konstante v = 20m/s. Sa kohë (t) i duhet për të përshkuar rrugën l = 1000m?",
              zgjidhja: "50",
              hapi1: "Zgjidh formulën: t = l / v",
              hapi2: "Zëvendëso vlerat: t = 1000 / 20",
              hapi3: "Llogarit: t = 50 s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", 
            img: "https://rhapsodyinbooks.wordpress.com/wp-content/uploads/2017/05/worldline.jpg?w=584&h=519", 
            vid: "https://www.youtube.com/embed/Rso3Es2cFOc", 
            gameUrl: "/loja-koha.html" 
        },
        { 
            id: 5, 
            catName: "Kinematika", 
            name: "5. Interval kohor", 
            sym: "Δt", 
            form: "Δt = t₂ - t₁", 
            unit: "s", 
            otherUnits: "min, orë, ditë", 
            teTjera: "Përdoret për të matur kohëzgjatjen e një ngjarjeje specifike.", 
            nature: "Skalare", 
            desc: "Diferenca midis dy çasteve kohore të njëpasnjëshme.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një garë nisi në orën 10:15:00 dhe përfundoi në orën 10:17:30. Sa sekonda zgjati gara?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një garë nisi në orën 10:15:00 dhe përfundoi në orën 10:17:30. Sa sekonda (Δt) zgjati gara?",
              zgjidhja: "150",
              hapi1: "Gjej diferencën në minuta: 17:30 - 15:00 = 2 min e 30 sek",
              hapi2: "Ktheji në sekonda: 2 * 60 + 30",
              hapi3: "Llogarit: Δt = 120 + 30 = 150 s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", 
            img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", 
            vid: "https://www.youtube.com/embed/HyyGiVpSk6c", 
            gameUrl: "/loja-intervali.html" 
        },
        { 
            id: 6, 
            catName: "Kinematika", 
            name: "6. Shpejtësia mesatare", 
            sym: "v_mes", 
            form: "v_mes = l_tot / t_tot", 
            unit: "m/s", 
            otherUnits: "km/h, mph", 
            teTjera: "Për lëvizjen e ndryshuar, v_mes = (v + v₀) / 2.", 
            nature: "Vektoriale", 
            desc: "Raporti i zhvendosjes totale me intervalin e kohës totale gjatë të cilit ka ndodhur kjo zhvendosje.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një makinë përshkon 120km për 2 orë. Sa është shpejtësia e saj mesatare në km/h?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një makinë përshkon 120km për 2 orë. Sa është shpejtësia mesatare (v_mes) në km/h?",
              zgjidhja: "60",
              hapi1: "Zgjidh formulën: v_mes = l / t",
              hapi2: "Zëvendëso vlerat: v_mes = 120 / 2",
              hapi3: "Llogarit: v_mes = 60 km/h"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", 
            img: "https://study.com/cimages/videopreview/screencapture_measuringspeed_140291.jpg", 
            vid: "https://www.youtube.com/embed/UVKbAAw07Bg", 
            gameUrl: "/loja-shpejtesia-mesatare.html" 
        },
        { 
            id: 7, 
            catName: "Kinematika", 
            name: "7. Shpejtësia e castit", 
            sym: "v", 
            form: "v = lim(Δt→0) Δx/Δt | v = v₀ + at", 
            unit: "m/s", 
            otherUnits: "km/h, c = 3×10⁸ m/s (shpejtësia e dritës)", 
            teTjera: "Shpejtësia e dritës është kufiri maksimal i shpejtësisë në univers.", 
            nature: "Vektoriale", 
            desc: "Shpejtësia e trupit në një çast të caktuar të kohës ose në një pikë të dhënë të trajektores.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup lëviz me nxitim a = 2m/s². Nëse shpejtësia fillestare ishte v₀ = 5m/s, sa do të jetë shpejtësia e tij pas t = 4s?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një trup lëviz me a = 2m/s² dhe v₀ = 5m/s. Sa do të jetë shpejtësia (v) pas t = 4s?",
              zgjidhja: "13",
              hapi1: "Zgjidh formulën: v = v₀ + at",
              hapi2: "Zëvendëso vlerat: v = 5 + 2 * 4",
              hapi3: "Llogarit: v = 5 + 8 = 13 m/s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", 
            img: "https://upload.wikimedia.org/wikipedia/sq/e/e2/Shpejt%C3%ABsia_e_castit.png", 
            vid: "https://www.youtube.com/embed/9fWp9nlEJHo", 
            gameUrl: "/loja-shpejtesia-castit.html" 
        },
        { 
            id: 8, 
            catName: "Kinematika", 
            name: "8. Nxitimi", 
            sym: "a", 
            form: "a = Δv / Δt | a = (v - v₀) / t | a = F / m", 
            unit: "m/s²", 
            otherUnits: "N/kg", 
            teTjera: "Te grafiku v(t) pjerrtësia tregon nxitimin. Në lëvizje të përshpejtuar a dhe v₀ kanë shenjë të njëjtë.", 
            nature: "Vektoriale", 
            desc: "Madhësia që tregon ndryshimin e shpejtësisë në njësinë e kohës.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një makinë e rrit shpejtësinë nga 10m/s në 30m/s brenda 5 sekondave. Gjeni nxitimin e makinës.</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një makinë e rrit shpejtësinë nga 10m/s në 30m/s brenda 5 sekondave. Sa është nxitimi (a)?",
              zgjidhja: "4",
              hapi1: "Gjej ndryshimin e shpejtësisë: Δv = 30 - 10 = 20 m/s",
              hapi2: "Përdor formulën: a = Δv / t",
              hapi3: "Llogarit: a = 20 / 5 = 4 m/s²"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", 
            img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-7.png?w=929", 
            vid: "https://www.youtube.com/embed/ks-yBHtiRqM", 
            gameUrl: "/loja-nxitimi.html" 
        },
        { 
            id: 9, 
            catName: "Kinematika", 
            name: "9. Nxitimi i renies se lire", 
            sym: "g", 
            form: "g = G · M / R²", 
            unit: "m/s²", 
            otherUnits: "N/kg", 
            teTjera: "Afër Tokës g ≈ 9.8 m/s². G = 6.67 × 10⁻¹¹ N·m²/kg² (Konstanta e gravitetit).", 
            nature: "Vektoriale", 
            desc: "Nxitimi me të cilin bien trupat në afërsi të sipërfaqes së Tokës nën veprimin e gravitetit.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një gur lihet të bjerë lirisht nga një lartësi. Sa do të jetë shpejtësia e tij pas 3 sekondave? (Përdor g = 10 m/s²)</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një gur lihet të bjerë lirisht. Sa do të jetë shpejtësia e tij pas 3 sekondave? (Përdor g = 10)",
              zgjidhja: "30",
              hapi1: "Zgjidh formulën: v = g * t",
              hapi2: "Zëvendëso vlerat: v = 10 * 3",
              hapi3: "Llogarit: v = 30 m/s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", 
            img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levizja_e_projektilit.jpg", 
            vid: "https://www.youtube.com/embed/Mr-KXDD6-5g" 
        },
        { 
            id: 10, 
            catName: "Kinematika", 
            name: "10. Perioda", 
            sym: "T", 
            form: "T = 1 / f | T = t / N", 
            unit: "s", 
            otherUnits: "min, h, vite", 
            teTjera: "Perioda është koha e një cikli të plotë.", 
            nature: "Skalare", 
            desc: "Koha e nevojshme për të kryer një rrotullim të plotë ose një lëkundje të plotë.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një lavjerrës kryen 20 lëkundje për 40 sekonda. Sa është perioda e lëkundjes?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një lavjerrës kryen 20 lëkundje për 40 sekonda. Sa është perioda (T) në sekonda?",
              zgjidhja: "2",
              hapi1: "Zgjidh formulën: T = t / N",
              hapi2: "Zëvendëso vlerat: T = 40 / 20",
              hapi3: "Llogarit: T = 2 s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", 
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Simple_harmonic_motion.svg", 
            vid: "https://www.youtube.com/embed/_LPGBHpSZpA" 
        },
        { 
            id: 11, 
            catName: "Kinematika", 
            name: "11. Frekuenca", 
            sym: "f", 
            form: "f = 1 / T | f = N / t", 
            unit: "Hz", 
            otherUnits: "s⁻¹, rrotullime/s", 
            teTjera: "1 Hz = 1 cikël për sekondë.", 
            nature: "Skalare", 
            desc: "Numri i lëkundjeve (ose rrotullimeve) në njësinë e kohës.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një motor rrotullohet 3000 herë në një minutë. Sa është frekuenca e tij në Hz?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një motor rrotullohet 3000 herë në një minutë (60s). Sa është frekuenca (f) në Hz?",
              zgjidhja: "50",
              hapi1: "Zgjidh formulën: f = N / t",
              hapi2: "Zëvendëso vlerat: f = 3000 / 60",
              hapi3: "Llogarit: f = 50 Hz"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", 
            img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", 
            vid: "https://www.youtube.com/embed/TT4oSP4VdkA" 
        },
        { 
            id: 12, 
            catName: "Kinematika", 
            name: "12. Shpejtësia këndore", 
            sym: "ω", 
            form: "ω = θ / t | ω = 2π / T | ω = 2πf", 
            unit: "rad/s", 
            otherUnits: "rrot/min (rpm)", 
            teTjera: "Lidhja me shpejtësinë lineare: v = ω · R.", 
            nature: "Vektoriale", 
            desc: "Këndi i përshkuar në njësinë e kohës gjatë lëvizjes rrethore.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup kryen një rrotullim të plotë (2π rad) në 2 sekonda. Sa është shpejtësia e tij këndore?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një trup kryen një rrotullim të plotë (2π rad) në 2 sekonda. Sa është ω? (Përdor π = 3.14)",
              zgjidhja: "3.14",
              hapi1: "Zgjidh formulën: ω = 2π / T",
              hapi2: "Zëvendëso vlerat: ω = 2 * 3.14 / 2",
              hapi3: "Llogarit: ω = 3.14 rad/s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", 
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Angular_velocity.svg/1280px-Angular_velocity.svg.png", 
            vid: "https://www.youtube.com/embed/WQ9AH2S8B6Y" 
        },
        { 
            id: 13, 
            catName: "Kinematika", 
            name: "13. Shpejtësia lineare", 
            sym: "v", 
            form: "v = ω · r | v = 2πr / T | v = 2πrf", 
            unit: "m/s", 
            otherUnits: "km/h", 
            teTjera: "Në lëvizjen rrethore të njëtrajtshme, moduli i shpejtësisë është konstant.", 
            nature: "Vektoriale", 
            desc: "Shpejtësia e trupit përgjatë trajektores rrethore.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup rrotullohet në një rreth me rreze r = 2m me shpejtësi këndore ω = 5 rad/s. Sa është shpejtësia e tij lineare?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një trup rrotullohet me r = 2m and ω = 5 rad/s. Sa është shpejtësia lineare (v)?",
              zgjidhja: "10",
              hapi1: "Zgjidh formulën: v = ω * r",
              hapi2: "Zëvendëso vlerat: v = 5 * 2",
              hapi3: "Llogarit: v = 10 m/s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExpNKbYnHRikFuixua9cmGqedwh3bo81Y3Q&s", 
            vid: "https://www.youtube.com/embed/udhu6-bp_O0" 
        },
        { 
            id: 14, 
            catName: "Kinematika", 
            name: "14. Nxitimi qendërsynues", 
            sym: "a_c", 
            form: "a_c = v² / r | a_c = ω² · r", 
            unit: "m/s²", 
            otherUnits: "-", 
            teTjera: "Ky nxitim është gjithmonë i drejtuar nga qendra e rrethit.", 
            nature: "Vektoriale", 
            desc: "Nxitimi që shkakton ndryshimin e drejtimit të shpejtësisë gjatë lëvizjes rrethore.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një makinë lëviz në një kthesë me rreze 50m me shpejtësi 10m/s. Sa është nxitimi i saj qendërsynues?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një makinë lëviz me r = 50m dhe v = 10m/s. Sa është nxitimi qendërsynues (a_c)?",
              zgjidhja: "2",
              hapi1: "Zgjidh formulën: a_c = v² / r",
              hapi2: "Zëvendëso vlerat: a_c = 10² / 50 = 100 / 50",
              hapi3: "Llogarit: a_c = 2 m/s²"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", 
            img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", 
            vid: "https://www.youtube.com/embed/c2rgbtG43_4" 
        },
        { 
            id: 15, 
            catName: "Kinematika", 
            name: "15. Këndi", 
            sym: "θ", 
            form: "θ = s / r", 
            unit: "rad", 
            otherUnits: "gradë (°)", 
            teTjera: "1 rrotullim i plotë = 2π radian = 360 gradë.", 
            nature: "Skalare", 
            desc: "Hapësira midis dy rrezeve që nisin nga e njëjta pikë, e matur në radian.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup përshkon një hark me gjatësi s = 6m në një rreth me rreze r = 3m. Sa është këndi i përshkuar në radian?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një trup përshkon s = 6m në r = 3m. Sa është këndi (θ) në radian?",
              zgjidhja: "2",
              hapi1: "Zgjidh formulën: θ = s / r",
              hapi2: "Zëvendëso vlerat: θ = 6 / 3",
              hapi3: "Llogarit: θ = 2 rad"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", 
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Angle_measure.svg/250px-Angle_measure.svg.png", 
            vid: "https://www.youtube.com/embed/XhEX-4eDb-c" 
        },
        { 
            id: 16, 
            catName: "Kinematika", 
            name: "16. Nxitimi këndor", 
            sym: "α", 
            form: "α = Δω / Δt | α = (ω - ω₀) / t", 
            unit: "rad/s²", 
            otherUnits: "-", 
            teTjera: "Lidhja me nxitimin tangjencial: a_t = α · R.", 
            nature: "Vektoriale", 
            desc: "Ndryshimi i shpejtësisë këndore në njësinë e kohës.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Shpejtësia këndore rritet nga 2 rad/s në 10 rad/s për 4 sekonda. Sa është nxitimi këndor?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "ω₀ = 2 rad/s, ω = 10 rad/s, t = 4s. Sa është nxitimi këndor (α)?",
              zgjidhja: "2",
              hapi1: "Gjej ndryshimin e shpejtësisë këndore: Δω = 10 - 2 = 8 rad/s",
              hapi2: "Përdor formulën: α = Δω / t",
              hapi3: "Llogarit: α = 8 / 4 = 2 rad/s²"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", 
            img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", 
            vid: "https://www.youtube.com/embed/kXj4We-it4k" 
        }
    ],
    "Dinamika": [
        { 
            id: 1, 
            catName: "Dinamika", 
            name: "1. Forca", 
            sym: "F", 
            form: "F = m · a | F = Δp / Δt", 
            unit: "N", 
            otherUnits: "1N = 1kg·m/s²", 
            teTjera: "Ligjet e Njutonit: 1. Inercia, 2. F=ma, 3. Veprim-Kundërveprim.", 
            nature: "Vektoriale", 
            desc: "Veprimi i një trupi mbi një tjetër që shkakton ndryshimin e gjendjes së prehjes ose lëvizjes.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Mbi një trup me masë 5kg vepron një forcë që i shkakton një nxitim prej 3m/s². Sa është vlera e kësaj force?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Mbi një trup me masë 5kg vepron një forcë që i shkakton një nxitim prej 3m/s². Sa është vlera e forcës (F)?",
              zgjidhja: "15",
              hapi1: "Zgjidh formulën: F = m * a",
              hapi2: "Zëvendëso vlerat: F = 5 * 3",
              hapi3: "Llogarit: F = 15 N"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", 
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDRnwxNuMkmLvPY5p1CvEK61OuaW7qVGHb1pcym-TbWBBNj1s1PxvkIwFjcHVjtAysPbi-93OW7bIcQCc5vSX_jHq9B0gmYAhjaJOOsG8XO5qCvo6wmz1N3W2_JRNtIUKZkdFrMv-6bkA/s1600/4c004beab8150bef9ba245b7f3b589f4cf708850.gif", 
            vid: "https://www.youtube.com/embed/56y06xK21es", 
            gameUrl: "/loja-forca.html" 
        },
        { 
            id: 2, 
            catName: "Dinamika", 
            name: "2. Masa", 
            sym: "m", 
            form: "m = F / a | m = ρ · V", 
            unit: "kg", 
            otherUnits: "ton, gram, pound", 
            teTjera: "Masa është masë e inercisë së trupit. Ajo nuk ndryshon me vendndodhjen.", 
            nature: "Skalare", 
            desc: "Masa e trupit lidhet me sasinë e lëndës që ai përmban dhe tregon inertësinë e trupit.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një forcë prej 20N i shkakton një trupi nxitimin 4m/s². Sa është masa e këtij trupi?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një forcë prej 20N i shkakton një trupi nxitimin 4m/s². Sa është masa (m) në kg?",
              zgjidhja: "5",
              hapi1: "Zgjidh formulën: m = F / a",
              hapi2: "Zëvendëso vlerat: m = 20 / 4",
              hapi3: "Llogarit: m = 5 kg"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", 
            img: "https://kluszeljka.weebly.com/uploads/3/8/5/5/38551443/published/te-ina-tela.jpg?1615759127", 
            vid: "https://www.youtube.com/embed/6NV5ltITNx4", 
            gameUrl: "/loja-masa.html" 
        },
        { 
            id: 3, 
            catName: "Dinamika", 
            name: "3. Pesha", 
            sym: "P", 
            form: "P = m · g (në prehje) | P = m(g ± a)", 
            unit: "N", 
            otherUnits: "kgf (kilogram-forcë)", 
            teTjera: "Pesha ndryshon në varësi të nxitimit të rënies së lirë (g) dhe nxitimit të sistemit (a).", 
            nature: "Vektoriale", 
            desc: "Forca me të cilën trupi mëshon mbi mbështetësen ose tërheq fijen ku është varur.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Sa peshon një njeri me masë 70kg në Hënë, ku g = 1.6 m/s²?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Sa peshon (P) një njeri me masë 70kg në Hënë? (g = 1.6)",
              zgjidhja: "112",
              hapi1: "Zgjidh formulën: P = m * g",
              hapi2: "Zëvendëso vlerat: P = 70 * 1.6",
              hapi3: "Llogarit: P = 112 N"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", 
            img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-6.jpeg?w=332", 
            vid: "https://www.youtube.com/embed/g4mGv0g3Tq0", 
            gameUrl: "/loja-pesha.html" 
        },
        { 
            id: 4, 
            catName: "Dinamika", 
            name: "4. Forca e rendeses", 
            sym: "G", 
            form: "G = m · g", 
            unit: "N", 
            otherUnits: "1N = 1kg·m/s²", 
            teTjera: "Në Tokë, g ≈ 9.8 m/s². Në Hënë, g ≈ 1.6 m/s².", 
            nature: "Vektoriale", 
            desc: "Forca me të cilën Toka tërheq trupat drejt qendrës së saj.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Sa është forca e rëndesës që vepron mbi një trup me masë 10kg në sipërfaqen e Tokës? (g = 9.8 m/s²)</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Sa është forca e rëndesës (G) mbi një trup me masë 10kg? (Përdor g = 9.8)",
              zgjidhja: "98",
              hapi1: "Zgjidh formulën: G = m * g",
              hapi2: "Zëvendëso vlerat: G = 10 * 9.8",
              hapi3: "Llogarit: G = 98 N"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", 
            img: "https://askabiologist.asu.edu/sites/default/files/resources/articles/space_physiology/shuttle_earth_albanian.gif", 
            vid: "https://www.youtube.com/embed/gTL_WeQ3H7o", 
            gameUrl: "/loja-rendesa.html" 
        },
        { 
            id: 5, 
            catName: "Dinamika", 
            name: "5. Forca e fërkimit", 
            sym: "F_f", 
            form: "F_f = μ · N", 
            unit: "N", 
            otherUnits: "1N = 1kg·m/s²", 
            teTjera: "Fërkimi varet nga lloji i sipërfaqeve dhe forca e shtypjes normale (N).", 
            nature: "Vektoriale", 
            desc: "Forca që lind gjatë sipërfaqes fërkuese të 2 trupave dhe pengon rrëshqitjen.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup me peshë 100N lëviz mbi një sipërfaqe me koeficient fërkimi μ = 0.2. Sa është forca e fërkimit?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një trup me peshë (N) 100N lëviz me μ = 0.2. Sa është forca e fërkimit (F_f)?",
              zgjidhja: "20",
              hapi1: "Zgjidh formulën: F_f = μ * N",
              hapi2: "Zëvendëso vlerat: F_f = 0.2 * 100",
              hapi3: "Llogarit: F_f = 20 N"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", 
            img: "https://images.my.labster.com/v2/NL1/803332e1-5a17-4356-90f0-4daa5a9584f0/NL1_Friction_Force_.en.x1024.png", 
            vid: "https://www.youtube.com/embed/2Tz7osdJkiM", 
            gameUrl: "/loja-ferkimi.html" 
        },
        { 
            id: 6, 
            catName: "Dinamika", 
            name: "6. Koeficienti i fërkimit", 
            sym: "μ", 
            form: "μ = F_f / N", 
            unit: "—", 
            otherUnits: "Pa njësi", 
            teTjera: "μ varet vetëm nga materiali dhe gjendja e sipërfaqeve takuese.", 
            nature: "Skalare", 
            desc: "Madhësi pa njësi që tregon ashpërsinë e sipërfaqeve takuese.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Nëse forca e fërkimit është 50N dhe forca normale është 250N, sa është koeficienti i fërkimit?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Nëse F_f = 50N dhe N = 250N, sa është koeficienti i fërkimit (μ)?",
              zgjidhja: "0.2",
              hapi1: "Zgjidh formulën: μ = F_f / N",
              hapi2: "Zëvendëso vlerat: μ = 50 / 250",
              hapi3: "Llogarit: μ = 0.2"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", 
            img: "https://force-channel.com/wp-content/uploads/2023/11/en_%E6%91%A9%E6%93%A6%E5%8A%9B%E3%81%A8%E6%91%A9%E6%93%A6%E4%BF%82%E6%95%B0%E3%81%AE%E9%96%A2%E4%BF%82.jpg", 
            vid: "https://www.youtube.com/embed/BKQ8gQLQRnI", 
            gameUrl: "/loja-koef-ferkimi.html" 
        },
        { 
            id: 7, 
            catName: "Dinamika", 
            name: "7. Forca elastike", 
            sym: "F_e", 
            form: "F_e = -k · x", 
            unit: "N", 
            otherUnits: "1N = 1kg·m/s²", 
            teTjera: "Ligji i Hukut: Forca elastike është në përpjestim të drejtë me shformimin (x) dhe ka kah të kundërt.", 
            nature: "Vektoriale", 
            desc: "Forca që lind nga trupi i shformuar mbi atë që shkakton shformimin.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një sustë me konstantë k = 100N/m shformohet me x = 0.1m. Sa është vlera e forcës elastike?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një sustë me k = 100N/m shformohet me x = 0.1m. Sa është vlera e forcës elastike (F_e) në N?",
              zgjidhja: "10",
              hapi1: "Zgjidh formulën: |F_e| = k * x",
              hapi2: "Zëvendëso vlerat: F_e = 100 * 0.1",
              hapi3: "Llogarit: F_e = 10 N"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", 
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Spring-mass2.svg/250px-Spring-mass2.svg.png", 
            vid: "https://www.youtube.com/embed/XaXpwQK_UjI", 
            gameUrl: "/loja-elastike.html" 
        },
        { 
            id: 8, 
            catName: "Dinamika", 
            name: "8. Konstanta elastike", 
            sym: "k", 
            form: "k = F / x", 
            unit: "N/m", 
            otherUnits: "N/cm", 
            teTjera: "Karakteristikë e sustës që tregon ngurtësinë e saj.", 
            nature: "Skalare", 
            desc: "Madhësia që tregon rezistencën e trupit ndaj shformimit elastik.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një forcë prej 50N shkakton një shformim prej 0.05m. Sa është konstanta elastike e sustës?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "F = 50N, x = 0.05m. Sa është konstanta elastike (k) në N/m?",
              zgjidhja: "1000",
              hapi1: "Zgjidh formulën: k = F / x",
              hapi2: "Zëvendëso vlerat: k = 50 / 0.05",
              hapi3: "Llogarit: k = 1000 N/m"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", 
            img: "https://www.bio-meca.com/wp-content/uploads/hookes-law-schema-1-1024x609.jpg", 
            vid: "https://www.youtube.com/embed/aLOzqPgBpV0", 
            gameUrl: "/loja-konst-elastike.html" 
        },
        { 
            id: 9, 
            catName: "Dinamika", 
            name: "9. Forca qendërsynuese", 
            sym: "F_c", 
            form: "F_c = m · v² / r | F_c = m · ω² · r", 
            unit: "N", 
            otherUnits: "1N = 1kg·m/s²", 
            teTjera: "Nuk është forcë e re, por rol që e luan një forcë ekzistuese (p.sh. graviteti, tensioni).", 
            nature: "Vektoriale", 
            desc: "Forca rezultante që detyron një trup të lëvizë sipas një trajektoreje rrethore.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup me masë 2kg lëviz në një rreth me rreze 1m me shpejtësi 4m/s. Sa është forca qendërsynuese?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "m = 2kg, r = 1m, v = 4m/s. Sa është forca qendërsynuese (F_c)?",
              zgjidhja: "32",
              hapi1: "Zgjidh formulën: F_c = m * v² / r",
              hapi2: "Zëvendëso vlerat: F_c = 2 * 4² / 1 = 2 * 16",
              hapi3: "Llogarit: F_c = 32 N"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", 
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Force_acting_as_centripetal_force.svg/500px-Force_acting_as_centripetal_force.svg.png", 
            vid: "https://www.youtube.com/embed/aLOzqPgBpV0", 
            gameUrl: "/loja-qendersynuese.html" 
        },
        { 
            id: 10, 
            catName: "Dinamika", 
            name: "10. Forca gravitacionale", 
            sym: "F_G", 
            form: "F_G = G · (m₁ · m₂) / r²", 
            unit: "N", 
            otherUnits: "G = 6.67 × 10⁻¹¹ N·m²/kg²", 
            teTjera: "Vepron midis çdo dy trupave që kanë masë.", 
            nature: "Vektoriale", 
            desc: "Forca tërheqëse universale midis masave.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Nëse distanca midis dy masave dyfishohet, sa herë ndryshon forca gravitacionale?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Nëse distanca (r) dyfishohet, sa herë zvogëlohet forca gravitacionale?",
              zgjidhja: "4",
              hapi1: "Formula: F ~ 1/r²",
              hapi2: "Nëse r bëhet 2r, atëherë r² bëhet (2r)² = 4r²",
              hapi3: "Përfundim: Forca zvogëlohet 4 herë"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rpECqNLFAKZhNUiLZtbt2Q-pgPY88-b4uw&s", 
            vid: "https://www.youtube.com/embed/yzjB32cooEo", 
            gameUrl: "/loja-gravitacionale.html" 
        },
        { 
            id: 11, 
            catName: "Dinamika", 
            name: "11. Impulsi i forcës", 
            sym: "I", 
            form: "I = F · Δt | I = Δp", 
            unit: "N·s", 
            otherUnits: "kg·m/s", 
            teTjera: "Teorema e impulsit: Impulsi i forcës është i barabartë me ndryshimin e impulsit të trupit.", 
            nature: "Vektoriale", 
            desc: "Prodhimi i forcës me intervalin e kohës gjatë të cilit ajo vepron mbi trupin.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një forcë prej 10N vepron mbi një trup për 3 sekonda. Sa është impulsi i kësaj force?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "F = 10N, t = 3s. Sa është impulsi i forcës (I) në N·s?",
              zgjidhja: "30",
              hapi1: "Zgjidh formulën: I = F * t",
              hapi2: "Zëvendëso vlerat: I = 10 * 3",
              hapi3: "Llogarit: I = 30 N·s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", 
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20230601131523/Impulse-Curve.png", 
            vid: "https://www.youtube.com/embed/BWhluW5_1vc", 
            gameUrl: "/loja-impuls-force.html" 
        },
        { 
            id: 12, 
            catName: "Dinamika", 
            name: "12. Impuls i trupit", 
            sym: "p", 
            form: "p = m · v", 
            unit: "kg·m/s", 
            otherUnits: "N·s", 
            teTjera: "Ligji i ruajtjes së impulsit: Në një sistem të mbyllur, impulsi total mbetet konstant.", 
            nature: "Vektoriale", 
            desc: "Sasia e lëvizjes së trupit, e përcaktuar nga masa dhe shpejtësia e tij.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një trup me masë 4kg lëviz me shpejtësi 5m/s. Sa është impulsi i tij?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "m = 4kg, v = 5m/s. Sa është impulsi i trupit (p) në kg·m/s?",
              zgjidhja: "20",
              hapi1: "Zgjidh formulën: p = m * v",
              hapi2: "Zëvendëso vlerat: p = 4 * 5",
              hapi3: "Llogarit: p = 20 kg·m/s"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", 
            img: "https://mechanicsmap.psu.edu/websites/15_impulse_momentum_rigid_body/15-2_impulse_momentum_theorem_rigid_body/images/problem_diagram.png", 
            vid: "https://www.youtube.com/embed/XreBwpNk9no", 
            gameUrl: "/loja-impuls-trupi.html" 
        },
        { 
            id: 13, 
            catName: "Dinamika", 
            name: "13. Momenti i forcës", 
            sym: "M", 
            form: "M = F · d", 
            unit: "N·m", 
            otherUnits: "-", 
            teTjera: "d është krahu i forcës (distanca pingule nga boshti i rrotullimit).", 
            nature: "Vektoriale", 
            desc: "Efekti rrotullues i një force mbi një trup rreth një boshti.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një forcë prej 20N vepron në një distancë d = 0.5m nga boshti. Sa është momenti i forcës?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "F = 20N, d = 0.5m. Sa është momenti i forcës (M) në N·m?",
              zgjidhja: "10",
              hapi1: "Zgjidh formulën: M = F * d",
              hapi2: "Zëvendëso vlerat: M = 20 * 0.5",
              hapi3: "Llogarit: M = 10 N·m"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", 
            img: "https://cloudfront.jove.com/files/media/science-education/science-education-thumbs/14253.jpg", 
            vid: "https://www.youtube.com/embed/D7xq8gNwMRQ", 
            gameUrl: "/loja-momenti.html" 
        },
        { 
            id: 14, 
            catName: "Dinamika", 
            name: "14. Krahu i forcës", 
            sym: "d", 
            form: "d = M / F", 
            unit: "m", 
            otherUnits: "cm, mm", 
            teTjera: "Krahu i forcës është distanca më e shkurtër nga pika e rrotullimit te vija e veprimit të forcës.", 
            nature: "Skalare", 
            desc: "Largësia pingule nga boshti i rrotullimit deri te vija e veprimit të forcës.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Nëse momenti i forcës është 15Nm dhe forca është 30N, sa është krahu i forcës?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "M = 15Nm, F = 30N. Sa është krahu i forcës (d) në metra?",
              zgjidhja: "0.5",
              hapi1: "Zgjidh formulën: d = M / F",
              hapi2: "Zëvendëso vlerat: d = 15 / 30",
              hapi3: "Llogarit: d = 0.5 m"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", 
            img: "https://www.datocms-assets.com/117510/1722388028-science_learning_hub_mechanical-advantage_v1.png", 
            vid: "https://www.youtube.com/embed/H3lwoQJ_OZA", 
            gameUrl: "/loja-krahu.html" 
        },
        { 
            id: 15, 
            catName: "Dinamika", 
            name: "15. Shtypja", 
            sym: "P", 
            form: "P = F / S", 
            unit: "Pa", 
            otherUnits: "atm, bar, mmHg, N/m²", 
            teTjera: "1 Pa = 1 N/m². Shtypja atmosferike normale është rreth 101,325 Pa.", 
            nature: "Skalare", 
            desc: "Forca që ushtrohet pingul mbi njësinë e sipërfaqes së një trupi.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një forcë prej 200N ushtrohet mbi një sipërfaqe prej 0.5m². Sa është shtypja e ushtruar?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një forcë prej 200N ushtrohet mbi një sipërfaqe prej 0.5m². Sa është shtypja (P) në Paskal?",
              zgjidhja: "400",
              hapi1: "Zgjidh formulën: P = F / S",
              hapi2: "Zëvendëso vlerat: P = 200 / 0.5",
              hapi3: "Llogarit: P = 400 Pa"
            },
            phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", 
            img: "https://ademgllavica.wordpress.com/wp-content/uploads/2020/03/image-391.png?w=571", 
            vid: "https://www.youtube.com/embed/LDGohoxWZY4", 
            gameUrl: "/loja-shtypja.html" 
        },
    ],
    "Energjia": [
        { id: 1, catName: "Energjia", name: "1. Energjia kinetike", sym: "Ek", form: "Ek = ½mv²", unit: "J", otherUnits: "cal,  kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të lëvizjes së tij me një shpejtësi të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://img.jagranjosh.com/images/2024/July/1072024/kinetic-energy-definition-formula-derivation-types-examples-and-calculations.webp", vid: "https://www.youtube.com/embed/bSwFLr4kO6g", gameUrl: "/loja-energjia-kinetike.html" },
        { id: 2, catName: "Energjia", name: "2. Energjia potenciale gravitacionale", sym: "Ep", form: "Ep = mgh", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të pozicionit të tij në një fushë gravitacionale.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://www.meracalculator.com/images/blog/2020/11/1605613981potential-energy-png.png", vid: "https://www.youtube.com/embed/XCl0Dx8g5Pc", gameUrl: "/loja-energjia-potenciale-gravitacionale.html" },
        { id: 3, catName: "Energjia", name: "3. Energjia potenciale elastike", sym: "Ee", form: "Ee = ½kx²", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në një trup elastik si pasojë e shformimit të tij.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://energyeducation.ca/wiki/images/1/11/Mxcpcrossbow-elastic-potential.gif", vid: "https://www.youtube.com/embed/CvJHBOssY5Q", gameUrl: "/loja-energjia-potenciale-elastike.html" },
        { id: 4, catName: "Energjia", name: "4. Energjia mekanike", sym: "Em", form: "Em = Ek + Ep", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe asaj potenciale të një sistemi fizik.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://engineerfix.com/wp-content/uploads/2021/04/Mechanical-Energy.png", vid: "https://www.youtube.com/embed/4bNajhqV8ws", gameUrl: "/loja-energjia-mekanike.html" },
        { id: 5, catName: "Energjia", name: "5. Puna", sym: "A", form: "A = Fscosθ", unit: "J", otherUnits: "cal,", teTjera: "", nature: "Skalare", desc: "Energjia e transferuar te një trup ose nga një trup përmes veprimit të një force gjatë një zhvendosjeje.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://williamqin.com/assets/blog/Energy%20Blog%20Graphics/work.jpg", vid: "https://www.youtube.com/embed/G86VPx8ywyU", gameUrl: "/loja-puna.html" },
        { id: 6, catName: "Energjia", name: "6. Fuqia", sym: "P", form: "P = A / t ose P = Fv", unit: "W", otherUnits: "HP, kW, 1W=1J/S, 1 Kuaj fuqi(HP)=745.7W ", teTjera: "", nature: "Skalare", desc: "Puna e kryer ne njësine e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://i.ytimg.com/vi/irSJL1U_gOQ/maxresdefault.jpg", vid: "https://www.youtube.com/embed/aHKEy7Oa0-A", gameUrl: "/loja-fuqia.html" },
        { id: 7, catName: "Energjia", name: "7. Energjia e brendshme termike", sym: "U", form: "U=3/2 nRT(1 atomike),U=5/2 nRT(2 atomike) ", unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe potenciale të të gjitha grimcave që përbëjnë një sistem.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg", vid: "https://www.youtube.com/embed/mm_vaHqJvfw", gameUrl: "/loja-energjia-termike.html" },
        { id: 8, catName: "Energjia", name: "8. Energjia elektrike", sym: "Ee", form: "E = pt=UIt", unit: "J", otherUnits: "kWh", teTjera: "", nature: "Skalare", desc: "Energjia që mat bashkëveprimin elektrik.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://electricalampere.com/wp-content/uploads/2025/08/Electrical-Energy-Sources-%E2%80%93-Types-Examples-and-How-Electricity-is-Produced.png", vid: "https://www.youtube.com/embed/LdYNNRKgP9U", gameUrl: "/loja-energjia-elektrike.html" },
        { id: 9, catName: "Energjia", name: "9. Energjia kimike", sym: "E_kim", form: "—", unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në lidhjet kimike të substancave, e cila çlirohet gjatë reaksioneve.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://www.sciencefacts.net/wp-content/uploads/2022/07/Chemical-Energy.jpg", vid: "https://www.youtube.com/embed/Iqwrl79a55A", gameUrl: "/loja-energjia-kimike.html" },
        { id: 10, catName: "Energjia", name: "10. Energjia bërthamore", sym: "E", form: "E = mc²", unit: "J", otherUnits: "MeV,1 MeV=10⁶ • 1,6•10⁻¹⁹J", teTjera: "", nature: "Skalare", desc: "Energjia e çliruar gjatë proceseve të fisionit ose fuzionit të bërthamave atomike.", phetUrl: "https://phet.colorado.edu/en/simulation/nuclear-fission", img: "https://cdn1.byjus.com/wp-content/uploads/2018/01/Nuclear-Energy2-700x416.png", vid: "https://www.youtube.com/embed/fuDOxIveHA4", gameUrl: "/loja-energjia-berthamore.html" }
    ],
    "Elektriciteti": [
        { id: 1, catName: "Elektriciteti", name: "1. Intensiteti i rrymes", sym: "I", form: "I=q/t ose I=U/R", unit: "A", otherUnits: "mA, μA, 1A=1C/S", teTjera: "", nature: "Skalare", desc: "Sasia e ngarkesës elektrike që kalon nëpër seksionin tërthor të përcjellësit në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://i.ytimg.com/vi/_ZpqdJJ5M9U/maxresdefault.jpg", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/loja-intensiteti-rrymes.html" },
        { id: 2, catName: "Elektriciteti", name: "2. Rezistenca elektrike", sym: "R", form: "R=U/I, R=g×L/S ", unit: "Ω", otherUnits: "kΩ, MΩ, 1r=1V/A", teTjera: "", nature: "Skalare", desc: "Pengesa qe lënda i paraqet kalimit të rrymës elektrike.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electrical-Resistance-1.png", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/loja-rezistenca.html" },
        { id: 3, catName: "Elektriciteti", name: "3. Fuqia e rrymes", sym: "P", form: "P=UI", unit: "W", otherUnits: "kW, MW", teTjera: "", nature: "Skalare", desc: "Puna e kryer nga rryma elektrike në njësinë e kohës në një pjesë të qarkut.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/dccircuits-dcp1.gif", vid: "https://www.youtube.com/embed/LdYNNRKgP9U", gameUrl: "/loja-fuqia-rrymes.html" },
        { id: 4, catName: "Elektriciteti", name: "4. Tensioni", sym: "U", form: "U=IR", unit: "V", otherUnits: "kV, mV", teTjera: "", nature: "Skalare", desc: "Sasi elektronesh që i merr ose i jep trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/9VBatteryWithMeter.jpg/250px-9VBatteryWithMeter.jpg", vid: "https://www.youtube.com/embed/v6uEbMc5HaU", gameUrl: "/loja-tensioni.html" },
        { id: 5, catName: "Elektriciteti", name: "5. Ngarkesa elektrike", sym: "q", form: "q=ne", unit: "C", otherUnits: "μC, nC", teTjera: "", nature: "Skalare", desc: "Vetia fizike e lëndës që bën që ajo të përjetojë një forcë kur vendoset në një fushë elektromagnetike.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.physicsclassroom.com/Class/estatics/u8l1c1.gif", vid: "https://www.youtube.com/embed/kq34-EKUWUw" },
        { id: 6, catName: "Elektriciteti", name: "6. Intensiteti i fushes elektrike", sym: "E", form: "E=F/q", unit: "N/C", otherUnits: "V/m", teTjera: "", nature: "Vektoriale", desc: "Tregon forcën mbi ngarkesën provë ne 1 pikë te fushës.", phetUrl: "https://phet.colorado.edu/en/simulations/charges-and-fields", img: "https://www.physicsclassroom.com/Class/estatics/u8l4a1.gif", vid: "https://www.youtube.com/embed/mRDx78oJisY", gameUrl: "/loja-fusha-elektrike.html" },
        { id: 7, catName: "Elektriciteti", name: "7. Kapaciteti elektrik", sym: "C", form: "C=q/V", unit: "F", otherUnits: "μF, nF, pF", teTjera: "", nature: "Skalare", desc: "Tregon aftësine për të nxënë ngarkesa.", phetUrl: "https://phet.colorado.edu/en/simulations/capacitor-lab-basics", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/capacitor-cap1.gif", vid: "https://www.youtube.com/embed/dXSJ0xuN14g", gameUrl: "/loja-kapaciteti.html" },
        { id: 8, catName: "Elektriciteti", name: "8. Potenciali elektrik", sym: "V", form: "V=Ep/q", unit: "V", otherUnits: "1V=1J/C", teTjera: "", nature: "Skalare", desc: "Tregon energjine potenciale te ngarkesës provë ne 1 pikë te fushës.", phetUrl: "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electric-Potential.png", vid: "https://www.youtube.com/embed/16Z_QNZmxOs" }
    ],
    "Magnetizmi": [
        { id: 1, catName: "Magnetizmi", name: "1. Induksioni magnetik ", sym: "B", form: "B=Fmax/IL", unit: "T", otherUnits: "G (Gauss), 1T=1N/Am", teTjera: "", nature: "Vektoriale", desc: "Madhësia vektoriale që karakterizon fushën magnetike në çdo pikë të saj.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://cdn.slidesharecdn.com/ss_thumbnails/induksioni-elektromagnetikcopycopy-231216203840-d38d7cd1-thumbnail.jpg?width=640&height=640&fit=bounds", vid: "https://www.youtube.com/embed/BXBhoQG73ZM" },
        { id: 2, catName: "Magnetizmi", name: "2. Forca e Amperit", sym: "F", form: "F=BILsina", unit: "N", otherUnits: "kN", teTjera: "", nature: "Vektoriale", desc: "Forca me të cilën fusha magnetike vepron mbi një përcjellës me rrymë të vendosur në të.", phetUrl: "https://phet.colorado.edu/en/simulation/magnets-and-electromagnets", img: "https://c8.alamy.com/comp/2AFR2XW/the-principles-of-physics-an-ampere-strength-of-thecurrent-465-galvanometer-this-is-an-instrument-for-measuringcurrent-strength-by-means-of-the-deflection-of-a-magneticneedle-when-placed-in-the-field-of-the-current-it-is-so-con-structed-that-either-the-deflection-angle-itself-or-somefunction-of-it-is-proportional-to-the-current-strength-466-thomsons-mirror-galvanottieter-a-simplified-forniis-shown-in-fig-386-and-the-complete-instrument-is-shownin-fig-386-insulated-wire-is-wound-on-a-bobbin-a-with-in-this-bobbin-is-hung-by-a-silk-fiber-a-little-circular-concavemirror-to-2AFR2XW.jpg", vid: "https://www.youtube.com/embed/xMIEpXxiyQM" },
        { id: 3, catName: "Magnetizmi", name: "3. Fluksi Magnetik", sym: "Φ ", form: "Φ=BScosa", unit: "Wb", otherUnits: "Mx (Maxwell), 1W=1T×m²", teTjera: "", nature: "Skalare", desc: "Numri i vijave të forcës së fushës magnetike që përshkojnë një sipërfaqe të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Surface_normal.png/330px-Surface_normal.png", vid: "https://www.youtube.com/embed/60h8RAqX3Yc" },
        { id: 4, catName: "Magnetizmi", name: "4. F.e.m. e induktuar", sym: "ε", form: "ε=-NΔΦ/Δt", unit: "V", otherUnits: "mV", teTjera: "", nature: "Skalare", desc: "Tensioni elektrik që lind në një qark të mbyllur si pasojë e ndryshimit të fluksit magnetik.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://i.ytimg.com/vi/CAKnbju_0jo/sddefault.jpg", vid: "https://www.youtube.com/embed/FoXIrSy5akw" },
        { id: 5, catName: "Magnetizmi", name: "5. Rryme e induktuar", sym: "Iin", form: "I=ε/R", unit: "A", otherUnits: "mA", teTjera: "", nature: "Skalare", desc: "Rryma elektrike që lind në një përcjellës të mbyllur kur ai ndodhet në një fushë magnetike të ndryshueshme.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk5jc32xKcLRo2y10dfbSwmELAekKYKdSSw&s", vid: "https://www.youtube.com/embed/fOeWUbvqRgY" }
    ],
    "Fizika Kuantike": [
        { 
            id: 1, 
            catName: "Fizika Kuantike", 
            name: "1. Energjia e fotonit", 
            sym: "E", 
            form: "E = hf", 
            unit: "J", 
            otherUnits: "eV  (1eV = 1.6×10⁻¹⁹ J)", 
            teTjera: "Drita ka natyrë të dyfishtë: valore dhe grimcore. Ajo nuk rrezatohet në mënyrë të vazhdueshme por të ndërprerë me kuante. Për N grimca. E= N•h•f.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një rrezatim ka frekuencën f = 4.0 &times; 10<sup>18</sup> Hz.</p>
    <p>Gjeni energjinë e fotonit duke ditur se konstanta e Plankut është h = 6.63 &times; 10<sup>-34</sup> J&middot;s.</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një rrezatim ka frekuencën f = 4.0 × 10¹⁸ Hz. Gjeni energjinë e fotonit duke ditur se konstanta e Plankut është h = 6.63 × 10⁻³⁴ J·s.",
              zgjidhja: "2.7*10^-15",
              hapi1: "Zgjidh formulën: E = hf",
              hapi2: "Zëvendëso vlerat: E = 6.63 × 10⁻³⁴ × 4.0 × 10¹⁸",
              hapi3: "Llogarit: E = 26.52 × 10⁻¹⁶ ≈ 2.7 × 10⁻¹⁵ J"
            },
            nature: "Skalare", 
            desc: "Drita përbëhet nga fotonet të cilat kanë energji.",
            phetUrl: "https://phet.colorado.edu/en/simulation/photoelectric", 
            img: "https://cdn.britannica.com/17/96917-050-DD28290F/X-rays-beam-effect-Compton-target-material-some.jpg", 
            vid: "https://www.youtube.com/embed/ZhXCMoa6j58", 
            gameUrl: "/loja4-energjia-fotonit.html" 
        },
        { 
            id: 2, 
            catName: "Fizika Kuantike", 
            name: "2. Puna e daljes", 
            sym: "A<sub>d</sub>", 
            form: "A<sub>d</sub> = h f<sub>prag</sub>", 
            unit: "J", 
            otherUnits: "eV", 
            teTjera: "E = A_d + E_k është ekuacioni i Ajnshtajnit për fotoefektin. Për E ≥ A_d ndodh fotoefekti.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim mbi fotoefektin:</p>
    <p>Mbi një pllakë metali bie rrezatim elektromagnetik. Duhet të gjendet gjatësia valore maksimale që shkakton fotoefekt.</p>
    <p>Jepet: A<sub>d</sub> = 3 eV, h = 6.63 &times; 10<sup>-34</sup> J&middot;s, c = 3 &times; 10<sup>8</sup> m/s, e = 1.6 &times; 10<sup>-19</sup> C</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Mbi një pllakë metali bie rrezatim elektromagnetik. Duhet të gjendet gjatësia valore maksimale që shkakton fotoefekt. Jepet: A_d = 3 eV, h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, e = 1.6 × 10⁻¹⁹ C. (Jep përgjigjen në μm)",
              zgjidhja: "0.4",
              hapi1: "Zgjidh formulën: A_d = hf = hc / λ  =>  λ = hc / A_d",
              hapi2: "Zëvendëso vlerat: A_d = 3 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J. λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (4.8 × 10⁻¹⁹)",
              hapi3: "Llogarit: λ = 0.4 × 10⁻⁶ m = 0.4 μm"
            },
            nature: "Skalare", 
            desc: "Energjia minimale që i duhet elektronit për t'u shkëputur nga atomi.", 
            phetUrl: "https://phet.colorado.edu/en/simulation/photoelectric", 
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Photoelectric_effect_in_a_solid_-_diagram.svg/1280px-Photoelectric_effect_in_a_solid_-_diagram.svg.png", 
            vid: "https://www.youtube.com/embed/JNR4aQSGetg", 
            gameUrl: "" 
        },
        { 
            id: 3, 
            catName: "Fizika Kuantike", 
            name: "3. Gjatësia e valës së De Brojit", 
            sym: "λ", 
            form: "λ = h / mv", 
            unit: "m", 
            otherUnits: "nm", 
            teTjera: "Vetëm për grimcat elementare shfaqet dukshëm vetia valore. Pra grimcat kanë natyrë të dyfishtë.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një elektron ka energji kinetike E<sub>k</sub> = 2 eV. Gjej gjatësinë e valës së De Brojit. (Jep përgjigjen në nm)</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një elektron ka energji kinetike E_k = 2 eV. Gjej gjatësinë e valës së De Brojit. (Jep përgjigjen në nm)",
              zgjidhja: "0.87",
              hapi1: "Zgjidh formulën: λ = h / (mv) dhe E_k = mv² / 2 => v = √(2E_k / m)",
              hapi2: "Zëvendëso vlerat: λ = h / √(2mE_k)",
              hapi3: "Llogarit: Pas zëvendësimit të masës së elektronit dhe h, λ ≈ 0.87 nm"
            },
            nature: "Skalare", 
            desc: "Çdo grimcë me masë m që lëviz me shpejtësi v i përket një procesi valor.", 
            phetUrl: "https://phet.colorado.edu/en/simulation/quantum-wave-interference", 
            img: "https://www.sciencefacts.net/wp-content/uploads/2023/10/de-Broglie-Wavelength.jpg", 
            vid: "https://www.youtube.com/embed/cYyFPFU6s_A", 
            gameUrl: "/loja2-de-broglie.html" 
        },
        { 
            id: 4, 
            catName: "Fizika Kuantike", 
            name: "4. Perioda e gjysmëzbërthimit", 
            sym: "T<sub>1/2</sub>", 
            form: "T<sub>1/2</sub> = ln2 / λ", 
            unit: "s", 
            otherUnits: "min, h, vite", 
            teTjera: "Ligji i zbërthimit radioaktiv: N = N₀ e^(-λt).", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Një izotop radioaktiv e ka periodën e gjysmëzbërthimit 2 orë. Sa pjesë ka mbetur pas 4 orësh?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Një izotop radioaktiv e ka periodën e gjysmëzbërthimit 2 orë. Sa pjesë ka mbetur pas 4 orësh? (Shkruaj si thyesë p.sh. 1/4)",
              zgjidhja: "1/4",
              hapi1: "Zgjidh formulën: N = N_0 / 2^(t/T)",
              hapi2: "Zëvendëso vlerat: Pas 1 periode (2 orë): N = N_0 / 2. Pas 2 periodash (4 orë = 2T).",
              hapi3: "Llogarit: N = (N_0 / 2) / 2 = N_0 / 4. Pra ka mbetur 1/4"
            },
            nature: "Skalare", 
            desc: "Koha gjatë së cilës zbërthehet gjysma e bërthamave radioaktive të lëndës së dhëne.", 
            phetUrl: "https://phet.colorado.edu/en/simulation/alpha-decay", 
            img: "https://assets-us-01.kc-usercontent.com/9dd25524-761a-000d-d79f-86a5086d4774/7e6a0ff6-374a-454d-891e-a7377ce7e211/half-life_lg.jpg?w=659&h=800&auto=format&q=75&fit=crop", 
            vid: "https://www.youtube.com/embed/egT-BjjR1kc", 
            gameUrl: "/loja3-gjysmezberthimi.html" 
        }
    ]
};

export const SIMULATIONS: Simulation[] = [
  { title: "Bazat e Forcave", url: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html", category: "Dinamika", icon: "fa-arrows-alt-h" },
  { title: "Energjia: Parku i Skejtit", url: "https://clixplatform.tiss.edu/phet/sims/html/energy-skate-park-basics/latest/energy-skate-park-basics_en.html", category: "Energjia", icon: "fa-skating" },
  { title: "Format e Energjisë", url: "https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html", category: "Energjia", icon: "fa-fire-alt" },
  { title: "Laboratori i Goditjeve", url: "https://phet.colorado.edu/sims/html/collision-lab/latest/collision-lab_en.html", category: "Dinamika", icon: "fa-car-crash" },
  { title: "Ligji i Hooke", url: "https://phet.colorado.edu/sims/html/hookes-law/latest/hookes-law_all.html", category: "Dinamika", icon: "fa-infinity" },
  { title: "Lëvizja e Predhës", url: "https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html", category: "Kinematika", icon: "fa-meteor" },
  { title: "Bazat e Notimit", url: "https://phet.colorado.edu/sims/html/buoyancy-basics/latest/buoyancy-basics_all.html?locale=fi", category: "Dinamika", icon: "fa-water" }
];

export const GAMES: PhysicsGame[] = [
  {
    title: "Raketa me Balon",
    description: "Të demonstrohet Ligji i Tretë i Njutonit (Veprim – Kundërveprim).",
    materials: ["1 balon", "Fije e gjatë (2–3 m)", "Kasë plastike", "Shirit ngjitës"],
    steps: ["Fute fijën nëpër kasë.", "Lidhe fijën fort midis dy pikave (p.sh. dy karrige).", "Fryje balonin pa e lidhur.", "Ngjite balonin te kasa me shirit.", "Lësho balonin."],
    type: 'home',
    url: '/eksperimente.html?exp=0'
  },
  {
    title: "Energjia me Rampë",
    description: "Të vëzhgohet transformimi i energjisë potenciale në energji kinetike.",
    materials: ["Një dërrasë ose libër i madh (si rampë)", "Makine lodër ose top", "Metër"],
    steps: ["Vendos librin në një lartësi të caktuar.", "Lësho makinën nga maja e rampës.", "Mat sa larg shkon.", "Rrit lartësinë dhe përsërite."],
    type: 'home',
    url: '/eksperimente.html?exp=1'
  },
  {
    title: "Kompasi i Thjeshtë",
    description: "Të vëzhgohet fusha magnetike e Tokës.",
    materials: ["Gjilpërë", "Magnet", "Tas me ujë", "Copë e vogël letre ose tapë"],
    steps: ["Fërko gjilpërën me magnet në një drejtim për 30–40 sekonda.", "Vendose gjilpërën mbi copën e letrës ose tapës.", "Vendose me kujdes in ujë.", "Vëzhgo drejtimin që merr gjilpëra."],
    type: 'home',
    url: '/eksperimente.html?exp=2'
  },
  {
    title: "Ndërtimi i një Elektromagneti",
    description: "Të kuptohet lidhja midis elektricitetit dhe magnetizmit.",
    materials: ["Gozhdë metalike", "Tel bakri i izoluar", "Bateri 1.5V", "Kapëse letrash metalike"],
    steps: ["Mbështill telin rreth gozhdës disa herë.", "Lidh skajet e telit me baterinë.", "Afroje gozhdën te kapëset metalike.", "Shkëpute baterinë dhe vëzhgo ndryshimin."],
    type: 'home',
    url: '/eksperimente.html?exp=3'
  },
  {
    title: "Mbrojtja e Kështjellës",
    description: "Llogarit energjinë kinetike për të mbrojtur portën e kështjellës nga përbindëshat.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën dhe shpejtësinë e bombës.", "Llogarit Ek = ½mv².", "Shëno rezultatin dhe gjuaj!"],
    type: 'digital',
    url: '/loja-energjia-kinetike.html'
  },
  {
    title: "Eksperimenti i Gravitetit",
    description: "Llogarit energjinë potenciale gravitacionale për të lëshuar objektet saktësisht.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën e objektit dhe lartësinë.", "Llogarit Ep = mgh (g=10).", "Shëno rezultatin dhe lësho objektin!"],
    type: 'digital',
    url: '/loja-energjia-potenciale-gravitacionale.html'
  },
  {
    title: "Gjuajtësi Elastik",
    description: "Llogarit energjinë potenciale elastike të sustës për të gjuajtur topin.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko konstantin k dhe shtypjen x.", "Llogarit Epe = ½kx².", "Shëno rezultatin dhe lësho topin!"],
    type: 'digital',
    url: '/loja-energjia-potenciale-elastike.html'
  },
  {
    title: "Roller Coaster",
    description: "Llogarit energjinë mekanike totale për të nisur udhëtimin e trenit.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko lartësinë h dhe shpejtësinë v.", "Llogarit Em = mgh + ½mv².", "Shëno rezultatin dhe nis trenin!"],
    type: 'digital',
    url: '/loja-energjia-mekanike.html'
  },
  {
    title: "Eksperimenti i Punës",
    description: "Llogarit punën e kryer duke tërhequr arkën në një kënd të caktuar.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko forcën F, rrugën s dhe këndin α.", "Llogarit A = F · s · cos(α).", "Shëno rezultatin dhe tërhiq arkën!"],
    type: 'digital',
    url: '/loja-puna.html'
  },
  {
    title: "Fuqia e Ashensorit",
    description: "Llogarit fuqinë e motorit të ashensorit për të ngjitur ngarkesën.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën m, lartësinë h dhe kohën t.", "Llogarit P = (mgh) / t.", "Shëno rezultatin dhe aktivizo ashensorin!"],
    type: 'digital',
    url: '/loja-fuqia.html'
  },
  {
    title: "Laboratori Termik",
    description: "Llogarit nxehtësinë e nevojshme për të ngrohur ujin në një temperaturë të caktuar.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën m dhe ndryshimin e temperaturës ΔT.", "Llogarit Q = m · c · ΔT.", "Shëno rezultatin dhe furnizo nxehtësi!"],
    type: 'digital',
    url: '/loja-energjia-termike.html'
  },
  {
    title: "Qarku Elektrik",
    description: "Llogarit energjinë elektrike të konsumuar nga një llambë.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko tensionin U, rrymën I dhe kohën t.", "Llogarit E = U · I · t.", "Shëno rezultatin dhe ndiz llambën!"],
    type: 'digital',
    url: '/loja-energjia-elektrike.html'
  },
  {
    title: "Karburanti i Trupit",
    description: "Llogarit energjinë kimike të ushqimit për të mbushur energjinë e trupit.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko sasinë e ushqimit dhe vlerën e tij energjetike.", "Llogarit E = sasia · vlera.", "Shëno rezultatin dhe hani vaktin!"],
    type: 'digital',
    url: '/loja-energjia-kimike.html'
  },
  {
    title: "Reaktori Bërthamor",
    description: "Llogarit energjinë e çliruar nga fisioni bërthamor i Uraniumit.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën e lëndës dhe rendimentin.", "Llogarit E = m · rendimenti.", "Shëno rezultatin dhe shkakto fisionin!"],
    type: 'digital',
    url: '/loja-energjia-berthamore.html'
  },
  {
    title: "Dinamika",
    description: "Një aventurë interaktive për të mësuar ligjet e Njutonit dhe forcat.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Hidh zarin për të lëvizur.", "Përgjigju saktë pyetjeve rreth Dinamikës.", "Arri në fund të tabelës për të fituar!"],
    type: 'digital',
    url: '/loja-dinamika.html'
  }
];

export const MEDIA_MAPPING: Record<string, { img: string, vid: string }> = {
    "Kinematika": { 
        img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Centrifugal_1.PNG",
        vid: "https://www.youtube.com/embed/9Xf_G91E9sM" 
    },
    "Dinamika": { 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK24F2VXKKkVhv0x2yXOGO-0xgygmEFTSig&s",
        vid: "https://www.youtube.com/embed/kKKM8Y-u7ds" 
    },
    "Energjia": { 
        img: "https://ourfuture.energy/wp-content/uploads/2021/08/energy-transition-1800-shutterstock_1278873550.jpg",
        vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" 
    },
    "Elektriciteti": { 
        img: "https://media.getmyuni.com/assets/images/articles/articles-60ad8180d3a2969a2758e27ce9373af4.webp",
        vid: "https://www.youtube.com/embed/mc979OhitAg" 
    },
    "Magnetizmi": { 
        img: "https://thumbs.dreamstime.com/b/physics-electricity-magnetism-phenomena-25074870.jpg",
        vid: "https://www.youtube.com/embed/YpXpU5y-U-0" 
    },
    "Fizika Kuantike": {
        img: "https://www.sciencefacts.net/wp-content/uploads/2023/10/de-Broglie-Wavelength.jpg",
        vid: "https://www.youtube.com/embed/ZhXCMoa6j58"
    }
};
