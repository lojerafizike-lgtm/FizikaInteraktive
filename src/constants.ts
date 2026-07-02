import { PhysicsData, Simulation, PhysicsGame } from './types';

export const ALL_PHYSICS_DATA: PhysicsData = {
    "Kinematika": [
        { 
            name: "1. Koordinata", sym: "x, y, z",
            form: "x = x₀ + vt (L.D.NJ)\nx = x₀ + v₀t + at²/2 (L.D.Nj.ND)",
            unit: "m", otherUnits: "miles (1km = 0.621 milje), foot (1ft = 30.48cm), inch (1ft = 12 inch)", teTjera: "", nature: "Vektoriale", desc: "Pozicioni i një pike materiale në hapësirë në raport me një sistem referimi të zgjedhur.", phetUrl: "https://phet.colorado.edu/en/simulation/graphing-lines", img: "https://d20khd7ddkh5ls.cloudfront.net/img11_66.jpg", vid: "https://www.youtube.com/embed/MCDL8EXYIFo", gameUrl: "/loja-koordinata.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nje trup niset nga pozicioni fillestar xo = 2 m me shpejtesi v = 5 m/s. Gjeni pozicionin x pas kohes t = 3 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nje trup niset nga pozicioni fillestar xo = 2 m me shpejtesi v = 5 m/s. Gjeni pozicionin x pas kohes t = 3 s.", zgjidhja: "17", hapi1: "Zgjidh formulen: x = xo + vt", hapi2: "Zevendeso: x = 2 + 5 * 3", hapi3: "Llogarit: x = 17 m" }
        },
        { 
            name: "2. Zhvendosja", sym: "Δx",
            form: "Δx = vt\nΔx = v₀t + at²/2\nv² - v₀² = 2aΔx\nΔx = (v + v₀)t / 2",
            unit: "m", otherUnits: "miles (1 milje = 1.609 km), 1 pash = 1.5m, foot (1ft = 30.48cm), inch (1 inch = 2.54 cm)", teTjera: "", nature: "Vektoriale", desc: "Vektori që bashkon pozicionin fillestar me atë përfundimtar të trupit gjatë lëvizjes.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://www.sciencefacts.net/wp-content/uploads/2022/10/Displacement-Formula.jpg", vid: "https://www.youtube.com/embed/m4jrhAckbK0", gameUrl: "/loja-zhvendosja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nje makine leviz me shpejtesi v = 10 m/s per nje kohe t = 5 s. Sa eshte zhvendosja e saj?</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nje makine leviz me shpejtesi v = 10 m/s per nje kohe t = 5 s. Sa eshte zhvendosja e saj?", zgjidhja: "50", hapi1: "Zgjidh formulen: Δx = v * t", hapi2: "Zevendeso: Δx = 10 * 5", hapi3: "Llogarit: Δx = 50 m" }
        },
        { 
            name: "3. Rruga e përshkuar", sym: "l",
            form: "l = vt (L.D.NJ)\nl = 2ΠR (L.RR.NJ)",
            unit: "m", otherUnits: "cm, km", teTjera: "", nature: "Skalare", desc: "Gjatësia e trajektores së përshkuar nga trupi gjatë një intervali kohe.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://i.ytimg.com/vi/XS4QMCYGgtM/maxresdefault.jpg", vid: "https://www.youtube.com/embed/m4jrhAckbK0", gameUrl: "/loja-rruga.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nje trup pershkon rrugen me shpejtesi 4 m/s per 5 s. Gjeni rrugen l.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nje trup pershkon rrugen me shpejtesi 4 m/s per 5 s. Gjeni rrugen l.", zgjidhja: "20", hapi1: "Zgjidh formulen: l = v * t", hapi2: "Zevendeso: l = 4 * 5", hapi3: "Llogarit: l = 20 m" }
        },
        { 
            name: "4. Koha", sym: "t",
            form: "t = l / v",
            unit: "s", otherUnits: "min, ore, ditë", teTjera: "", nature: "Skalare", desc: "Madhësia që përcakton kohëzgjatjen e një procesi fizik ose renditjen e ngjarjeve.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://rhapsodyinbooks.wordpress.com/wp-content/uploads/2017/05/worldline.jpg?w=584&h=519", vid: "https://www.youtube.com/embed/Rso3Es2cFOc", gameUrl: "/loja-koha.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni kohen t nese rruga l = 100 m dhe shpejtesia v = 20 m/s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni kohen t nese rruga l = 100 m dhe shpejtesia v = 20 m/s.", zgjidhja: "5", hapi1: "Zgjidh formulen: t = l / v", hapi2: "Zevendeso: t = 100 / 20", hapi3: "Llogarit: t = 5 s" }
        },
        { 
            name: "5. Interval kohor", sym: "Δt",
            form: "Δt = t - t₀",
            unit: "s", otherUnits: "min, ore, ditë", teTjera: "", nature: "Skalare", desc: "Diferenca midis dy çasteve kohore të njëpasnjëshme.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", vid: "https://www.youtube.com/embed/HyyGiVpSk6c", gameUrl: "/loja-intervali.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni intervalin kohor nese koha fillestare t0 = 2 s dhe koha perfundimtare t = 8 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni intervalin kohor nese koha fillestare t0 = 2 s dhe koha perfundimtare t = 8 s.", zgjidhja: "6", hapi1: "Zgjidh formulen: Δt = t - t0", hapi2: "Zevendeso: Δt = 8 - 2", hapi3: "Llogarit: Δt = 6 s" }
        },
        { 
            name: "6. Shpejtësia mesatare", sym: "V<sub>mes</sub>",
            form: "v.mes = l/t",
            unit: "m/s", otherUnits: "km/h", teTjera: "", nature: "Vektoriale", desc: "Raporti i zhvendosjes me intervalin e kohës gjatë të cilit ka ndodhur kjo zhvendosje.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://study.com/cimages/videopreview/screencapture_measuringspeed_140291.jpg", vid: "https://www.youtube.com/embed/UVKbAAw07Bg", gameUrl: "/loja-shpejtesia-mesatare.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine mesatare nese rruga eshte 150 m dhe koha 10 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine mesatare nese rruga eshte 150 m dhe koha 10 s.", zgjidhja: "15", hapi1: "Zgjidh formulen: v<sub>mes</sub> = l / t", hapi2: "Zevendeso: v<sub>mes</sub> = 150 / 10", hapi3: "Llogarit: 15 m/s" }
        },
        { 
            name: "7. Shpejtësia e castit", sym: "v",
            form: "v = Δx / Δt",
            unit: "m/s", otherUnits: "km/h  c = 3×10⁸ m/s është shpejtësia e dritës në zbrazëti (shpejtësia më e madhe në natyrë)", teTjera: "", nature: "Vektoriale", desc: "Shpejtësia e trupit në një çast të caktuar të kohës ose në një pikë të dhënë të trajektores.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://upload.wikimedia.org/wikipedia/sq/e/e2/Shpejt%C3%ABsia_e_castit.png", vid: "https://www.youtube.com/embed/9fWp9nlEJHo", gameUrl: "/loja-shpejtesia-castit.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine nese ndryshimi i pozicionit eshte 40 m per nje kohe prej 4 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine nese ndryshimi i pozicionit eshte 40 m per nje kohe prej 4 s.", zgjidhja: "10", hapi1: "Zgjidh formulen: v = Δx / Δt", hapi2: "Zevendeso: v = 40 / 4", hapi3: "Llogarit: 10 m/s" }
        },
        { 
            name: "8. Nxitimi", sym: "a",
            form: "a = Δv / Δt\na = F / m",
            unit: "m/s²", otherUnits: "N/kg",
            teTjera: "Tek grafiku v(t) pjerrësia tregon nxitimin.\nNë lëvizje të përshpejtuar a dhe v₀ kanë shenjë të njëjtë.\nNë lëvizje të ngadalësuar a dhe v₀ kanë shenjë të kundërt.",
            nature: "Vektoriale", desc: "Madhësia që tregon ndryshimin e shpejtësisë në njësinë e kohë.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-7.png?w=929", vid: "https://www.youtube.com/embed/ks-yBHtiRqM", gameUrl: "/nxitimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni nxitimin nese shpejtesia ndryshon me 20 m/s gjate 4 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni nxitimin nese shpejtesia ndryshon me 20 m/s gjate 4 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: a = Δv / Δt", hapi2: "Zevendeso: a = 20 / 4", hapi3: "Llogarit: 5 m/s²" }
        },
        { 
            name: "9. Nxitimi i renies se lire", sym: "g",
            form: "g = GM / R²\nG = 6.67×10⁻¹¹ Nm²/kg²",
            unit: "N/kg", otherUnits: "m/s²",
            teTjera: "Afër tokës g = 9.8 m/s².\nNë pol g rritet pak.\nNë lartësi h nga planeti → g = GM / (R+h)²",
            nature: "Vektoriale", desc: "Nxitimi me të cilin bien trupat në afërsi të sipërfaqes së Tokës nën veprimin e gravitetit.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levizja_e_projektilit.jpg", vid: "https://www.youtube.com/embed/Mr-KXDD6-5g", gameUrl:"/nxitimi i renies se lire.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Sa eshte vlera e nxitimit te renies se lire afer siperfaqes se Tokes? (Jep vleren me nje shifer pas presjes)</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Sa eshte vlera e nxitimit te renies se lire afer siperfaqes se Tokes? (Jep vleren me nje shifer pas presjes)", zgjidhja: "9.8", hapi1: "Kujto vleren konstante per g", hapi2: "Zevendeso vleren e njohur", hapi3: "Pergjigja eshte 9.8" }
        },
        { 
            name: "10. Perioda", sym: "T",
            form: "T = 1 / f\nT = t / N",
            unit: "s", otherUnits: "min, h", teTjera: "", nature: "Skalare", desc: "Koha e nevojshme për të kryer një rrotullim të plotë ose një lëkundje të plotë.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Simple_harmonic_motion.svg", vid: "https://www.youtube.com/embed/_LPGBHpSZpA", gameUrl:"/perioda.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni perioden T nese frekuenca f eshte 0.5 Hz.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni perioden T nese frekuenca f eshte 0.5 Hz.", zgjidhja: "2", hapi1: "Zgjidh formulen: T = 1 / f", hapi2: "Zevendeso: T = 1 / 0.5", hapi3: "Llogarit: 2 s" }
        },
        { 
            name: "11. Frekuenca", sym: "f",
            form: "f = 1 / T\nf = N / t",
            unit: "Hz", otherUnits: "s⁻¹, rrotullime/s ose lëkundje/s", teTjera: "", nature: "Skalare", desc: "Numri i lëkundjeve (ose rrotullimeve) në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", vid: "https://www.youtube.com/embed/TT4oSP4VdkA", gameUrl:"/frekuenca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni frekuencen f nese perioda T eshte 0.2 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni frekuencen f nese perioda T eshte 0.2 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: f = 1 / T", hapi2: "Zevendeso: f = 1 / 0.2", hapi3: "Llogarit: 5 Hz" }
        },
        { 
            name: "12. Shpejtësia këndore", sym: "ω",
            form: "ω = θ / t\nω = 2Π / T = 2Πf\nω = V / R (L.RR.NS)",
            unit: "rad/s", otherUnits: "-", teTjera: "", nature: "Vektoriale", desc: "Këndi në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Angular_velocity.svg/1280px-Angular_velocity.svg.png", vid: "https://www.youtube.com/embed/WQ9AH2S8B6Y", gameUrl:"/shpejtesiakendore.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine kendore ω nese kendi eshte 10 rad dhe koha 2 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine kendore ω nese kendi eshte 10 rad dhe koha 2 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: ω = θ / t", hapi2: "Zevendeso: ω = 10 / 2", hapi3: "Llogarit: 5 rad/s" }
        },
        { 
            name: "13. Shpejtësia lineare", sym: "v",
            form: "V = ω × r\nV = l / t = 2πr / T",
            unit: "m/s", otherUnits: "km/h  c = 3×10⁸ m/s është shpejtësia e dritës në zbrazëti (shpejtësia më e madhe në natyrë)", teTjera: "", nature: "Vektoriale", desc: "Rruga e kryer ne njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExpNKbYnHRikFuixua9cmGqedwh3bo81Y3Q&s", vid: "https://www.youtube.com/embed/udhu6-bp_O0", gameUrl:"/shpejtesialineare.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine lineare v nese shpejtesia kendore eshte 4 rad/s dhe rrezja 2 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine lineare v nese shpejtesia kendore eshte 4 rad/s dhe rrezja 2 m.", zgjidhja: "8", hapi1: "Zgjidh formulen: V = ω * r", hapi2: "Zevendeso: V = 4 * 2", hapi3: "Llogarit: 8 m/s" }
        },
        { 
            name: "14. Nxitimi qendërsynues", sym: "a<sub>c</sub>",
            form: "a_c = v² / r\na_qs = v² / R = ω²R = 4π²f²R",
            unit: "m/s²", otherUnits: "-", teTjera: "", nature: "Vektoriale", desc: "Nxitimi qendërsynues lidhet me ndryshimin e vektorit të shpejtësisë në njësinë e kohës gjatë lëvizjes rrethore.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", vid: "https://www.youtube.com/embed/c2rgbtG43_4", gameUrl:"/aqs.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni nxitimin qendersynues nese shpejtesia eshte 6 m/s dhe rrezja 3 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni nxitimin qendersynues nese shpejtesia eshte 6 m/s dhe rrezja 3 m.", zgjidhja: "12", hapi1: "Zgjidh formulen: a<sub>c</sub> = v² / r", hapi2: "Zevendeso: a<sub>c</sub> = 6² / 3", hapi3: "Llogarit: 36 / 3 = 12 m/s²" }
        },
        { 
            name: "15. Këndi", sym: "θ",
            form: "θ = s / r",
            unit: "rad", otherUnits: "gradë", teTjera: "", nature: "Skalare", desc: "Hapësira midis dy rrezeve që nisin nga e njëjta pikë, e matur në radian.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Angle_measure.svg/250px-Angle_measure.svg.png", vid: "https://www.youtube.com/embed/XhEX-4eDb-c", gameUrl:"/kendi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni kendin θ ne radian nese harku s eshte 10 m dhe rrezja r eshte 2 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni kendin θ ne radian nese harku s eshte 10 m dhe rrezja r eshte 2 m.", zgjidhja: "5", hapi1: "Zgjidh formulen: θ = s / r", hapi2: "Zevendeso: θ = 10 / 2", hapi3: "Llogarit: 5 rad" }
        },
        { 
            name: "16. Nxitimi këndor", sym: "α",
            form: "α = Δω / Δt\nα = (ω - ω₀) / t\na_t = αR  (lidhja ndërmjet nxitimit tangjencial dhe këndor)\nω = ω₀ + αt (L.RR.NJ.ND.)",
            unit: "rad/s²", otherUnits: "-", teTjera: "", nature: "Vektoriale", desc: "Ndryshimi i shpejtësise këndore ne njësine e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", vid: "https://www.youtube.com/embed/kXj4We-it4k", gameUrl:"/akendore.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni nxitimin kendor α nese shpejtesia kendore ndryshon me 12 rad/s per 3 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni nxitimin kendor α nese shpejtesia kendore ndryshon me 12 rad/s per 3 s.", zgjidhja: "4", hapi1: "Zgjidh formulen: α = Δω / Δt", hapi2: "Zevendeso: α = 12 / 3", hapi3: "Llogarit: 4 rad/s²" }
        }
    ],
    "Dinamika": [
        { 
            name: "1. Forca", sym: "F",
            form: "F = ma",
            unit: "N", otherUnits: "1N = 1kg·m/s²",
            teTjera: "3 Ligjet e Njutonit:\n1 - Nëse s'ka F ose F<sub>R</sub> = 0 → trupi në prehje ose L.D.NJ.\n2 - a = F/m,  a ∝ F,  a ∝ 1/m\n3 - F₂,₁ = –F₁,₂",
            nature: "Vektoriale", desc: "Veprimi i një trupi mbi një tjetër.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDRnwxNuMkmLvPY5p1CvEK61OuaW7qVGHb1pcym-TbWBBNj1s1PxvkIwFjcHVjtAysPbi-93OW7bIcQCc5vSX_jHq9B0gmYAhjaJOOsG8XO5qCvo6wmz1N3W2_JRNtIUKZkdFrMv-6bkA/s1600/4c004beab8150bef9ba245b7f3b589f4cf708850.gif", vid: "https://www.youtube.com/embed/56y06xK21es", gameUrl: "/loja-forca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen F nese masa m = 5 kg dhe nxitimi a = 3 m/s².</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen F nese masa m = 5 kg dhe nxitimi a = 3 m/s².", zgjidhja: "15", hapi1: "Zgjidh formulen: F = m * a", hapi2: "Zevendeso: F = 5 * 3", hapi3: "Llogarit: 15 N" }
        },
        { 
            name: "2. Masa", sym: "m",
            form: "m = d × v",
            unit: "kg", otherUnits: "1 pound = 0.454 kg,  1 ton = 1000 kg,  1 oke ≈ 1.3 kg (njësi e vjetër shtëpiake)", teTjera: "", nature: "Skalare", desc: "Masa e trupit lidhet me sasinë e lëndës që ai përmban dhe tregon inertësinë e trupit.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://kluszeljka.weebly.com/uploads/3/8/5/5/38551443/published/te-ina-tela.jpg?1615759127", vid: "https://www.youtube.com/embed/6NV5ltITNx4", gameUrl: "/loja-masa.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni masen nese dendsia d = 2 kg/m³ dhe vellimi v = 4 m³.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni masen nese dendsia d = 2 kg/m³ dhe vellimi v = 4 m³.", zgjidhja: "8", hapi1: "Zgjidh formulen: m = d * v", hapi2: "Zevendeso: m = 2 * 4", hapi3: "Llogarit: 8 kg" }
        },
        { 
            name: "3. Pesha", sym: "P",
            form: "P = N",
            unit: "N", otherUnits: "1N = 1kg·m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca me të cilën trupi mëshon mbi mbështetësen ose tërheq fijen ku është varur.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-6.jpeg?w=332", vid: "https://www.youtube.com/embed/g4mGv0g3Tq0", gameUrl: "/loja-pesha.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni peshen P te nje trupi ne ekuiliber nese forca e reagimit normal N = 60 N.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni peshen P te nje trupi ne ekuiliber nese forca e reagimit normal N = 60 N.", zgjidhja: "60", hapi1: "Zgjidh formulen: P = N", hapi2: "Zevendeso: P = 60", hapi3: "Llogarit: 60 N" }
        },
        { 
            name: "4. Forca e rendeses", sym: "G",
            form: "G = mg",
            unit: "N", otherUnits: "1N = 1kg·m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca me të cilën Toka tërheq trupat drejt qendrës së saj.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", img: "https://askabiologist.asu.edu/sites/default/files/resources/articles/space_physiology/shuttle_earth_albanian.gif", vid: "https://www.youtube.com/embed/gTL_WeQ3H7o", gameUrl: "/loja-rendesa.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen e rendeses G per masen m = 10 kg (merr g = 9.8).</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen e rendeses G per masen m = 10 kg (merr g = 9.8).", zgjidhja: "98", hapi1: "Zgjidh formulen: G = m * g", hapi2: "Zevendeso: G = 10 * 9.8", hapi3: "Llogarit: 98 N" }
        },
        { 
            name: "5. Forca e fërkimit", sym: "F<sub>f</sub>",
            form: "F_f = μN",
            unit: "N", otherUnits: "1N = 1kg·m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca që lind gjatë sipërfaqes fërkuese të 2 trupave dhe pengon rrëshqitjen.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://images.my.labster.com/v2/NL1/803332e1-5a17-4356-90f0-4daa5a9584f0/NL1_Friction_Force_.en.x1024.png", vid: "https://www.youtube.com/embed/2Tz7osdJkiM", gameUrl: "/loja-ferkimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen e ferkimit nese koeficienti eshte 0.2 dhe forca normale N = 50 N.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen e ferkimit nese koeficienti eshte 0.2 dhe forca normale N = 50 N.", zgjidhja: "10", hapi1: "Zgjidh formulen: F<sub>f</sub> = μ * N", hapi2: "Zevendeso: F<sub>f</sub> = 0.2 * 50", hapi3: "Llogarit: 10 N" }
        },
        { 
            name: "6. Koeficienti i fërkimit", sym: "μ",
            form: "μ = F_f / N",
            unit: "—", otherUnits: "-", teTjera: "", nature: "Skalare", desc: "Madhësi pa njësi që tregon ashpërsine e sipërfaqeve takuese.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://force-channel.com/wp-content/uploads/2023/11/en_%E6%91%A9%E6%93%A6%E5%8A%9B%E3%81%A8%E6%91%A9%E6%93%A6%E4%BF%82%E6%95%B0%E3%81%AE%E9%96%A2%E4%BF%82.jpg", vid: "https://www.youtube.com/embed/BKQ8gQLQRnI", gameUrl: "/loja-koef-ferkimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni koeficientin μ nese forca e ferkimit eshte 20 N dhe N = 100 N.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni koeficientin μ nese forca e ferkimit eshte 20 N dhe N = 100 N.", zgjidhja: "0.2", hapi1: "Zgjidh formulen: μ = F<sub>f</sub> / N", hapi2: "Zevendeso: μ = 20 / 100", hapi3: "Llogarit: 0.2" }
        },
        { 
            name: "7. Forca elastike", sym: "F<sub>e</sub>",
            form: "F = -kx",
            unit: "N", otherUnits: "1N = 1kg·m/s²",
            teTjera: "Ligji i Hukut.\nForca elastike është në përpjestim të drejtë me shformimin dhe ka kah të kundërt me të.",
            nature: "Vektoriale", desc: "Forca elastike është forca që lind nga trupi i shformuar mbi atë që shkakton shformimin.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Spring-mass2.svg/250px-Spring-mass2.svg.png", vid: "https://www.youtube.com/embed/XaXpwQK_UjI", gameUrl: "/loja-elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni vleren absolute te forces elastike nese k = 100 N/m dhe zgjatja x = 0.1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni vleren absolute te forces elastike nese k = 100 N/m dhe zgjatja x = 0.1 m.", zgjidhja: "10", hapi1: "Zgjidh formulen: F = k * x (vlera absolute)", hapi2: "Zevendeso: F = 100 * 0.1", hapi3: "Llogarit: 10 N" }
        },
        { 
            name: "8. Konstanta elastike", sym: "k",
            form: "k = F / x",
            unit: "N/m", otherUnits: "-",
            teTjera: "Kufiri i elasticitetit është pika pas të cilës trupi nuk kthehet në formën fillestare.\nKufiri i soliditetit është pika ku teli këputet.\nTek grafiku F(x) → k = përpjestimi (pjerrësia).",
            nature: "Skalare", desc: "Karakteristikë e trupit që tregon rezistencën e tij ndaj shformimit elastik.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://www.bio-meca.com/wp-content/uploads/hookes-law-schema-1-1024x609.jpg", vid: "https://www.youtube.com/embed/aLOzqPgBpV0", gameUrl: "/loja-konst-elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni konstanten k nese forca F = 50 N shkakton shformim x = 0.5 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni konstanten k nese forca F = 50 N shkakton shformim x = 0.5 m.", zgjidhja: "100", hapi1: "Zgjidh formulen: k = F / x", hapi2: "Zevendeso: k = 50 / 0.5", hapi3: "Llogarit: 100 N/m" }
        },
        { 
            name: "9. Forca qendërsynuese", sym: "F<sub>c</sub>",
            form: "F_c = mv² / r",
            unit: "N", otherUnits: "1N = 1kg·m/s²",
            teTjera: "Forca qendërsynuese nuk është forcë e re shtesë.\nRolin e saj mund ta luajë çdo forcë apo grup forcash.",
            nature: "Vektoriale", desc: "Forca rezultante që detyron një trup të lëvizë sipas një trajektoreje rrethore.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Force_acting_as_centripetal_force.svg/500px-Force_acting_as_centripetal_force.svg.png", vid: "https://www.youtube.com/embed/aLOzqPgBpV0", gameUrl: "/loja-qendersynuese.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen qendersynuese nese m = 2 kg, v = 3 m/s dhe r = 1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen qendersynuese nese m = 2 kg, v = 3 m/s dhe r = 1 m.", zgjidhja: "18", hapi1: "Zgjidh formulen: F<sub>c</sub> = m * v² / r", hapi2: "Zevendeso: F<sub>c</sub> = 2 * 3² / 1", hapi3: "Llogarit: 2 * 9 = 18 N" }
        },
        { 
            name: "10. Forca gravitacionale", sym: "F<sub>G</sub>",
            form: "F = G(m₁m₂) / r²",
            unit: "N", otherUnits: "1N = 1kg·m/s²  (G → γ)", teTjera: "", nature: "Vektoriale", desc: "Forca tërheqëse e gjithësisë që vepron midis çdo dy trupave që kanë masë.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rpECqNLFAKZhNUiLZtbt2Q-pgPY88-b4uw&s", vid: "https://www.youtube.com/embed/yzjB32cooEo", gameUrl: "/loja-gravitacionale.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Sa eshte forca gravitacionale nese prodhimi i masave eshte 100 dhe rrezja 1 m? (Jep pergjigjen ne funksion te G, psh shkruaj 100)</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Sa eshte forca gravitacionale nese prodhimi i masave eshte 100 dhe rrezja 1 m? (Jep pergjigjen ne funksion te G, psh shkruaj 100)", zgjidhja: "100", hapi1: "Zgjidh formulen: F<sub>G</sub> = G * (m1*m2) / r²", hapi2: "Zevendeso: F<sub>G</sub> = G * 100 / 1²", hapi3: "Llogarit: 100 * G" }
        },
        { 
            name: "11. Impulsi i forcës", sym: "Δp",
            form: "Δp = FΔt\nΔp = mΔv",
            unit: "N·s", otherUnits: "kg·m/s", teTjera: "", nature: "Vektoriale", desc: "Prodhimi i forcës me intervalin e kohës gjatë të cilit ajo vepron mbi trupin.", phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", img: "https://media.geeksforgeeks.org/wp-content/uploads/20230601131523/Impulse-Curve.png", vid: "https://www.youtube.com/embed/BWhluW5_1vc", gameUrl: "/loja-impuls-force.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni impulsin e forces nese forca eshte 10 N dhe vepron per 2 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni impulsin e forces nese forca eshte 10 N dhe vepron per 2 s.", zgjidhja: "20", hapi1: "Zgjidh formulen: Δp = F * Δt", hapi2: "Zevendeso: Δp = 10 * 2", hapi3: "Llogarit: 20 N·s" }
        },
        { 
            name: "12. Impuls i trupit", sym: "p",
            form: "p = mv",
            unit: "kg·m/s", otherUnits: "", teTjera: "", nature: "Vektoriale", desc: "Sasia e lëvizjes së trupit.", phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", img: "https://mechanicsmap.psu.edu/websites/15_impulse_momentum_rigid_body/15-2_impulse_momentum_theorem_rigid_body/images/problem_diagram.png", vid: "https://www.youtube.com/embed/XreBwpNk9no", gameUrl: "/loja-impuls-trupi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni impulsin e trupit me mase 5 kg qe leviz me shpejtesi 4 m/s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni impulsin e trupit me mase 5 kg qe leviz me shpejtesi 4 m/s.", zgjidhja: "20", hapi1: "Zgjidh formulen: p = m * v", hapi2: "Zevendeso: p = 5 * 4", hapi3: "Llogarit: 20 kg·m/s" }
        },
        { 
            name: "13. Momenti i forcës", sym: "M",
            form: "M = F × d",
            unit: "Nm", otherUnits: "",
            teTjera: "Në rrotullim orar Momenti merret (+).\nNë rrotullim Kundër orar Momenti merret (-).\nKushti i ekuilibrit të një trupi të ngurtë: Shuma e momentit orar = Shuma e momentit kundërorar → M_Rezultante = 0.\nM_çift = F × d_çift",
            nature: "Vektoriale", desc: "Efekti rrotullues i një force.", phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", img: "https://cloudfront.jove.com/files/media/science-education/science-education-thumbs/14253.jpg", vid: "https://www.youtube.com/embed/D7xq8gNwMRQ", gameUrl: "/loja-momenti.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni momentin e forces nese F = 20 N dhe krahu d = 2 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni momentin e forces nese F = 20 N dhe krahu d = 2 m.", zgjidhja: "40", hapi1: "Zgjidh formulen: M = F * d", hapi2: "Zevendeso: M = 20 * 2", hapi3: "Llogarit: 40 Nm" }
        },
        { 
            name: "14. Krahu i forcës", sym: "d",
            form: "d = M / F",
            unit: "m", otherUnits: "", teTjera: "", nature: "Skalare", desc: "Largësia më e shkurtër (pingulja) nga boshti i rrotullimit deri te vija e veprimit të forcës.", phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", img: "https://www.datocms-assets.com/117510/1722388028-science_learning_hub_mechanical-advantage_v1.png", vid: "https://www.youtube.com/embed/H3lwoQJ_OZA", gameUrl: "/loja-krahu.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni krahun e forces nese momenti eshte 40 Nm dhe forca 20 N.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni krahun e forces nese momenti eshte 40 Nm dhe forca 20 N.", zgjidhja: "2", hapi1: "Zgjidh formulen nga M = F * d => d = M / F", hapi2: "Zevendeso: d = 40 / 20", hapi3: "Llogarit: 2 m" }
        },
        { 
            name: "15. Shtypja", sym: "P",
            form: "P = F / S",
            unit: "Pa", otherUnits: "atm, bar, mmHg, N/m²",
            teTjera: "Në gazra → shtypja tregon goditjet e molekulave me faqet e enës.\nTek lëngjet në thellësi: P = P_atmo + dgh\nLigji i Paskalit → Në të njëjtin nivel lëngu shtypja është e njëjtë.\nÇdo ndryshim shtypjeje në lëng përhapet njëlloj në të gjitha drejtimet.",
            nature: "Skalare", desc: "Forca që ushtrohet pingul mbi njësinë e sipërfaqes së një trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", img: "https://ademgllavica.wordpress.com/wp-content/uploads/2020/03/image-391.png?w=571", vid: "https://www.youtube.com/embed/LDGohoxWZY4", gameUrl: "/loja-shtypja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shtypjen nese forca pingule eshte 100 N ne nje siperfaqe 2 m².</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shtypjen nese forca pingule eshte 100 N ne nje siperfaqe 2 m².", zgjidhja: "50", hapi1: "Zgjidh formulen: P = F / S", hapi2: "Zevendeso: P = 100 / 2", hapi3: "Llogarit: 50 Pa" }
        }
    ],
    "Energjia": [
        { 
            name: "1. Energjia kinetike", sym: "Ek",
            form: "Ek = ½mv²",
            unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të lëvizjes së tij me një shpejtësi të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://img.jagranjosh.com/images/2024/July/1072024/kinetic-energy-definition-formula-derivation-types-examples-and-calculations.webp", vid: "https://www.youtube.com/embed/bSwFLr4kO6g", gameUrl:"/energjiakinetike1.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine kinetike te nje trupi me mase 2 kg qe leviz me shpejtesi 4 m/s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine kinetike te nje trupi me mase 2 kg qe leviz me shpejtesi 4 m/s.", zgjidhja: "16", hapi1: "Zgjidh formulen: Ek = 1/2 * m * v²", hapi2: "Zevendeso: Ek = 1/2 * 2 * 4²", hapi3: "Llogarit: 16 J" }
        },
        { 
            name: "2. Energjia potenciale gravitacionale", sym: "Ep",
            form: "Ep = mgh",
            unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të pozicionit të tij në një fushë gravitacionale.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://www.meracalculator.com/images/blog/2020/11/1605613981potential-energy-png.png", vid: "https://www.youtube.com/embed/XCl0Dx8g5Pc", gameUrl:"/energjiapotencialegravitacionale.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine potenciale te nje trupi 2 kg ne lartesine 5 m (merr g=10).</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine potenciale te nje trupi 2 kg ne lartesine 5 m (merr g=10).", zgjidhja: "100", hapi1: "Zgjidh formulen: Ep = m * g * h", hapi2: "Zevendeso: Ep = 2 * 10 * 5", hapi3: "Llogarit: 100 J" }
        },
        { 
            name: "3. Energjia potenciale elastike", sym: "Ee",
            form: "Ee = ½kx²",
            unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në një trup elastik si pasojë e shformimit të tij.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://energyeducation.ca/wiki/images/1/11/Mxcpcrossbow-elastic-potential.gif", vid: "https://www.youtube.com/embed/CvJHBOssY5Q", gameUrl:"/energjia potenciale elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine potenciale elastike nese k = 200 N/m dhe x = 0.1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine potenciale elastike nese k = 200 N/m dhe x = 0.1 m.", zgjidhja: "1", hapi1: "Zgjidh formulen: Ee = 1/2 * k * x²", hapi2: "Zevendeso: Ee = 1/2 * 200 * 0.1²", hapi3: "Llogarit: 100 * 0.01 = 1 J" }
        },
        { 
            name: "4. Energjia mekanike", sym: "Em",
            form: "Em = Ek + Ep",
            unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe asaj potenciale të një sistemi fizik.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://engineerfix.com/wp-content/uploads/2021/04/Mechanical-Energy.png", vid: "https://www.youtube.com/embed/4bNajhqV8ws", gameUrl:"energjia mekanike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine mekanike totale nese Ek = 10 J dhe Ep = 20 J.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine mekanike totale nese Ek = 10 J dhe Ep = 20 J.", zgjidhja: "30", hapi1: "Zgjidh formulen: Em = Ek + Ep", hapi2: "Zevendeso: Em = 10 + 20", hapi3: "Llogarit: 30 J" }
        },
        { 
            name: "5. Puna", sym: "A",
            form: "A = Fs·cosθ\nA_G = mgh\nA_pl = ΔEk",
            unit: "J", otherUnits: "cal",
            teTjera: "Kur forca ndihmon zhvendosjen → A > 0.\nKur forca pengon zhvendosjen → A < 0.\nKur forca nuk ndikon → A = 0.\nPuna e forcave konservative në një rrugë të mbyllur = 0.\nPuna e forcave konservative nuk varet nga forma e rrugës.",
            nature: "Skalare", desc: "Energjia e transferuar te një trup ose nga një trup përmes veprimit të një force gjatë një zhvendosjeje.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://williamqin.com/assets/blog/Energy%20Blog%20Graphics/work.jpg", vid: "https://www.youtube.com/embed/G86VPx8ywyU", gameUrl:"/puna.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni punen e nje force 10 N qe e zhvendos trupin 5 m ne te njejtin drejtim.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni punen e nje force 10 N qe e zhvendos trupin 5 m ne te njejtin drejtim.", zgjidhja: "50", hapi1: "Zgjidh formulen: A = F * s * cos(0)", hapi2: "Zevendeso: A = 10 * 5 * 1", hapi3: "Llogarit: 50 J" }
        },
        { 
            name: "6. Fuqia", sym: "P",
            form: "P = A / t\nP = Fv",
            unit: "W", otherUnits: "1W = 1J/s,  1 Kuaj fuqi (HP) = 745.7W", teTjera: "", nature: "Skalare", desc: "Puna e kryer ne njësine e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://i.ytimg.com/vi/irSJL1U_gOQ/maxresdefault.jpg", vid: "https://www.youtube.com/embed/aHKEy7Oa0-A", gameUrl:"/fuqia1.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni fuqine nese kryhet puna 100 J per 5 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fuqine nese kryhet puna 100 J per 5 s.", zgjidhja: "20", hapi1: "Zgjidh formulen: P = A / t", hapi2: "Zevendeso: P = 100 / 5", hapi3: "Llogarit: 20 W" }
        },
        { 
            name: "7. Energjia e brendshme termike", sym: "U",
            form: "U = 3/2 · nRT  (gaz 1 atomik)\nU = 5/2 · nRT  (gaz 2 atomik)",
            unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe potenciale të të gjitha grimcave që përbëjnë një sistem.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg", vid: "https://www.youtube.com/embed/mm_vaHqJvfw", gameUrl:"/energjia e brendshme termike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine e brendshme per 2 mole gaz 1 atomik ne temperaturen 100 K. R=8.31.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine e brendshme per 2 mole gaz 1 atomik ne temperaturen 100 K. R=8.31.", zgjidhja: "2493", hapi1: "Zgjidh formulen: U = 3/2 * n * R * T", hapi2: "Zevendeso: U = 3/2 * 2 * 8.31 * 100", hapi3: "Llogarit: 3 * 831 = 2493 J" }
        },
        { 
            name: "8. Energjia elektrike", sym: "Ee",
            form: "E = P · t",
            unit: "J", otherUnits: "kWh", teTjera: "", nature: "Skalare", desc: "Energjia që mat bashkëveprimin elektrik.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://electricalampere.com/wp-content/uploads/2025/08/Electrical-Energy-Sources-%E2%80%93-Types-Examples-and-How-Electricity-is-Produced.png", vid: "https://www.youtube.com/embed/LdYNNRKgP9U", gameUrl:"/energjia elektrike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine elektrike nese pajisja ka fuqi 100 W dhe punon per 10 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine elektrike nese pajisja ka fuqi 100 W dhe punon per 10 s.", zgjidhja: "1000", hapi1: "Zgjidh formulen: E = P * t", hapi2: "Zevendeso: E = 100 * 10", hapi3: "Llogarit: 1000 J" }
        },
        { 
            name: "9. Energjia kimike", sym: "E<sub>kim</sub>",
            form: "—",
            unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në lidhjet kimike të substancave, e cila çlirohet gjatë reaksioneve.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://www.sciencefacts.net/wp-content/uploads/2022/07/Chemical-Energy.jpg", vid: "https://www.youtube.com/embed/Iqwrl79a55A", gameUrl:"/energjia kimike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nese 1 gram i nje lende jep 4 J, sa energji japin 5 gram?</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nese 1 gram i nje lende jep 4 J, sa energji japin 5 gram?", zgjidhja: "20", hapi1: "Kupto lidhjen propozicionale: E = sasia * vlera per njesi", hapi2: "Zevendeso: E = 5 * 4", hapi3: "Llogarit: 20 J" }
        }
    ],
    "Elektriciteti": [
        { 
            name: "1. Intensiteti i rrymes", sym: "I",
            form: "I = q / t\nI = U / R",
            unit: "A", otherUnits: "1A = 1C/s",
            teTjera: "Kahu tradicional i Intensitetit merret kahu i lëvizjes së ngarkesës pozitive, pra kahu i kundërt i lëvizjes së elektroneve.",
            nature: "Skalare", desc: "Sasia e ngarkesës elektrike që kalon nëpër seksionin tërthor të përcjellësit në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://i.ytimg.com/vi/_ZpqdJJ5M9U/maxresdefault.jpg", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/Loja inteciteti i rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni intensitetin I nese kalon nje ngarkese q = 20 C per kohen t = 4 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni intensitetin I nese kalon nje ngarkese q = 20 C per kohen t = 4 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: I = q / t", hapi2: "Zevendeso: I = 20 / 4", hapi3: "Llogarit: 5 A" }
        },
        { 
            name: "2. Rezistenca elektrike", sym: "R",
            form: "R = U / I\nR = ρ × L / S",
            unit: "Ω", otherUnits: "1Ω = 1V/A",
            teTjera: "Lidhja në seri: R = R₁ + R₂\nLidhja në paralel: 1/R = 1/R₁ + 1/R₂\nRezistenca varet nga temperatura: ρ = ρ₀{1 + α(t - t₀)}  (t₀ = 20°C)\nρ₀ → rezistiviteti specifik në 20°C\nα → koeficienti i byerjes termike.",
            nature: "Skalare", desc: "Pengesa qe lënda i paraqet kalimit të rrymës elektrike.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electrical-Resistance-1.png", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/loje rezistenca e rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni rezistencen R nese tensioni eshte 12 V dhe rryma eshte 2 A.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni rezistencen R nese tensioni eshte 12 V dhe rryma eshte 2 A.", zgjidhja: "6", hapi1: "Zgjidh formulen: R = U / I", hapi2: "Zevendeso: R = 12 / 2", hapi3: "Llogarit: 6 Ω" }
        },
        { 
            name: "3. Fuqia e rrymes", sym: "P",
            form: "P = UI\nP = I² × R\nP = U² / R",
            unit: "W", otherUnits: "1W = 1J/s", teTjera: "", nature: "Skalare", desc: "Energjia elektrike në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/dccircuits-dcp1.gif", vid: "https://www.youtube.com/embed/LdYNNRKgP9U", gameUrl: "/loje fuqia e rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni fuqine P nese tensioni U = 10 V dhe rryma I = 5 A.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fuqine P nese tensioni U = 10 V dhe rryma I = 5 A.", zgjidhja: "50", hapi1: "Zgjidh formulen: P = U * I", hapi2: "Zevendeso: P = 10 * 5", hapi3: "Llogarit: 50 W" }
        },
        { 
            name: "4. Tensioni", sym: "U",
            form: "U = IR",
            unit: "V", otherUnits: "1V = 1AΩ", teTjera: "", nature: "Skalare", desc: "Diferenca potencialesh ndërmjet 2 pikave. U = V₁ - V₂", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/9VBatteryWithMeter.jpg/250px-9VBatteryWithMeter.jpg", vid: "https://www.youtube.com/embed/v6uEbMc5HaU", gameUrl: "/loja tensioni (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni tensionin U nese rryma eshte 3 A dhe rezistenca eshte 4 Ω.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni tensionin U nese rryma eshte 3 A dhe rezistenca eshte 4 Ω.", zgjidhja: "12", hapi1: "Zgjidh formulen: U = I * R", hapi2: "Zevendeso: U = 3 * 4", hapi3: "Llogarit: 12 V" }
        },
        { 
            name: "5. Ngarkese elektrike", sym: "q",
            form: "q = ne\nq = It",
            unit: "C", otherUnits: "", teTjera: "", nature: "Skalare", desc: "Sasi elektronesh që merr ose jep trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.physicsclassroom.com/Class/estatics/u8l1c1.gif", vid: "https://www.youtube.com/embed/kq34-EKUWUw", gameUrl: "/ngarkesekake.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni ngarkesen q nese intensiteti eshte 2 A dhe koha 5 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni ngarkesen q nese intensiteti eshte 2 A dhe koha 5 s.", zgjidhja: "10", hapi1: "Zgjidh formulen: q = I * t", hapi2: "Zevendeso: q = 2 * 5", hapi3: "Llogarit: 10 C" }
        },
        { 
            name: "6. Intensiteti i fushes elektrike", sym: "E",
            form: "E = F / q\nE = kq / εr²\nE = V / d",
            unit: "N/C", otherUnits: "V/m",
            teTjera: "Parimi i mbivendosjes së fushave: E = E₁ + E₂  (mbledhje vektoriale).",
            nature: "Vektoriale", desc: "Tregon forcën mbi ngarkesën provë ne 1 pikë te fushës.", phetUrl: "https://phet.colorado.edu/en/simulations/charges-and-fields", img: "https://www.physicsclassroom.com/Class/estatics/u8l4a1.gif", vid: "https://www.youtube.com/embed/mRDx78oJisY", gameUrl: "/loje intenciteti i fushes elektrike (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni fushen elektrike E nese forca eshte 10 N per ngarkesen 2 C.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fushen elektrike E nese forca eshte 10 N per ngarkesen 2 C.", zgjidhja: "5", hapi1: "Zgjidh formulen nga E=F/q", hapi2: "Zevendeso: E = 10 / 2", hapi3: "Llogarit: 5 N/C" }
        },
        { 
            name: "7. Kapaciteti elektrik", sym: "C",
            form: "C = q / U  (për kondensator)\nC = ε·ε₀·S / d  (për kondensator të rrafshët)",
            unit: "F", otherUnits: "1F = 1C/V",
            teTjera: "Lidhje në seri: 1/C = 1/C₁ + 1/C₂\nLidhje në paralel: C = C₁ + C₂",
            nature: "Skalare", desc: "Tregon aftësinë për të nxënë ngarkesa.", phetUrl: "https://phet.colorado.edu/en/simulations/capacitor-lab-basics", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/capacitor-cap1.gif", vid: "https://www.youtube.com/embed/dXSJ0xuN14g", gameUrl: "/loja-kapaciteti.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni kapacitetin nese ngarkesa q = 10 C dhe tensioni V = 2 V.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni kapacitetin nese ngarkesa q = 10 C dhe tensioni V = 2 V.", zgjidhja: "5", hapi1: "Zgjidh formulen: C = q / V", hapi2: "Zevendeso: C = 10 / 2", hapi3: "Llogarit: 5 F" }
        },
        { 
            name: "8. Potenciali elektrik", sym: "V",
            form: "V = W_p / q₀\nV = kq / r",
            unit: "V", otherUnits: "1V = 1J/C",
            teTjera: "V = kq / εr\nV = V₁ + V₂\nV pozitive për ngarkesën (+).\nV negative për ngarkesën (-).\nV_tokës = 0",
            nature: "Skalare", desc: "Tregon energjinë potenciale të ngarkesës provë në 1 pikë të fushës.", phetUrl: "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electric-Potential.png", vid: "https://www.youtube.com/embed/16Z_QNZmxOs", gameUrl: "/potencialipipi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni potencialin V nese puna eshte 20 J per ngarkesen 4 C.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni potencialin V nese puna eshte 20 J per ngarkesen 4 C.", zgjidhja: "5", hapi1: "Zgjidh formulen: V = W / q", hapi2: "Zevendeso: V = 20 / 4", hapi3: "Llogarit: 5 V" }
        }
    ],
    "Magnetizmi": [
        { 
            name: "1. Induksioni magnetik", sym: "B",
            form: "B = F_max / (I·L)",
            unit: "T", otherUnits: "G (Gauss),  1T = 1N/Am",
            teTjera: "Parimi i mbivendosjes së fushave: B = B₁ + B₂  (mbledhje vektoriale)\nAfër përcjellësit drejtvizor: B = μ₀I / 2πd\nNë qendër të përcjellësit rrethor: B = μ₀I / 2R\nBobina e ngushtë: B = μ₀NI / 2R\nSolenoid: B = μ₀NI / l",
            nature: "Vektoriale", desc: "Madhësia vektoriale që karakterizon fushën magnetike në çdo pikë të saj.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://cdn.slidesharecdn.com/ss_thumbnails/induksioni-elektromagnetikcopycopy-231216203840-d38d7cd1-thumbnail.jpg?width=640&height=640&fit=bounds", vid: "https://www.youtube.com/embed/BXBhoQG73ZM", gameUrl: "/summagneticshiiii.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni induksionin B nese forca maximale eshte 10 N, rryma 2 A dhe gjatesia 1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni induksionin B nese forca maximale eshte 10 N, rryma 2 A dhe gjatesia 1 m.", zgjidhja: "5", hapi1: "Zgjidh formulen: B = Fmax / (I * L)", hapi2: "Zevendeso: B = 10 / (2 * 1)", hapi3: "Llogarit: 5 T" }
        },
        { 
            name: "2. Forca e Amperit", sym: "F",
            form: "F = BIL·sinα",
            unit: "N", otherUnits: "",
            teTjera: "Kahu i Forcës së Amperit gjendet me rregullin e dorës së majtë.\nPër 2 përcjellës drejtvizorë shumë të gjatë: F/Δl = μ₀I₁I₂ / 2πd",
            nature: "Vektoriale", desc: "Forca me të cilën fusha magnetike vepron mbi një përcjellës me rrymë të vendosur në të.", phetUrl: "https://phet.colorado.edu/en/simulation/magnets-and-electromagnets", img: "https://c8.alamy.com/comp/2AFR2XW/the-principles-of-physics-an-ampere-strength-of-thecurrent-465-galvanometer-this-is-an-instrument-for-measuringcurrent-strength-by-means-of-the-deflection-of-a-magneticneedle-when-placed-in-the-field-of-the-current-it-is-so-con-structed-that-either-the-deflection-angle-itself-or-somefunction-of-it-is-proportional-to-the-current-strength-466-thomsons-mirror-galvanottieter-a-simplified-forniis-shown-in-fig-386-and-the-complete-instrument-is-shownin-fig-386-insulated-wire-is-wound-on-a-bobbin-a-with-in-this-bobbin-is-hung-by-a-silk-fiber-a-little-circular-concavemirror-to-2AFR2XW.jpg", vid: "https://www.youtube.com/embed/xMIEpXxiyQM", gameUrl: "/lorencpipiundkaki.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen e Amperit nese B=2 T, I=3 A, L=1 m dhe pingul me fushen (sin90=1).</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen e Amperit nese B=2 T, I=3 A, L=1 m dhe pingul me fushen (sin90=1).", zgjidhja: "6", hapi1: "Zgjidh formulen: F = B * I * L * sin(a)", hapi2: "Zevendeso: F = 2 * 3 * 1 * 1", hapi3: "Llogarit: 6 N" }
        },
        { 
            name: "3. Fluksi Magnetik", sym: "Φ",
            form: "Φ = BS·cosα",
            unit: "Wb", otherUnits: "Mx (Maxwell),  1Wb = 1T×m²",
            teTjera: "Kur ndryshon B: ΔΦ = ΔB × S·cosα\nKur ndryshon S: ΔΦ = B·ΔS·cosα\nKur ndryshon α: ΔΦ = BS(cosα₂ - cosα₁)",
            nature: "Skalare", desc: "Numri i vijave të forcës së fushës magnetike pingul me një sipërfaqe të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Surface_normal.png/330px-Surface_normal.png", vid: "https://www.youtube.com/embed/60h8RAqX3Yc", gameUrl: "/smbajmendca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni fluksin magnetik nese B=4 T, S=2 m² dhe cos(a)=1.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fluksin magnetik nese B=4 T, S=2 m² dhe cos(a)=1.", zgjidhja: "8", hapi1: "Zgjidh formulen: Φ = B * S * cos(a)", hapi2: "Zevendeso: Φ = 4 * 2 * 1", hapi3: "Llogarit: 8 Wb" }
        },
        { 
            name: "4. F.e.m. e induktuar", sym: "ε",
            form: "ε = -N · ΔΦ / Δt",
            unit: "V", otherUnits: "mV", teTjera: "", nature: "Skalare", desc: "Tensioni elektrik që lind në një qark të mbyllur si pasojë e ndryshimit të fluksit magnetik.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://i.ytimg.com/vi/CAKnbju_0jo/sddefault.jpg", vid: "https://www.youtube.com/embed/FoXIrSy5akw", gameUrl: "/halelujahhhhh.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni vleren absolute te f.e.m nese N=1, ndryshimi i fluksit eshte 10 Wb per koken 2 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni vleren absolute te f.e.m nese N=1, ndryshimi i fluksit eshte 10 Wb per koken 2 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: ε = N * ΔΦ / Δt (vlere absolute)", hapi2: "Zevendeso: ε = 1 * 10 / 2", hapi3: "Llogarit: 5 V" }
        },
        { 
            name: "5. Rryme e induktuar", sym: "I<sub>in</sub>",
            form: "I = ε / R",
            unit: "A", otherUnits: "mA", teTjera: "", nature: "Skalare", desc: "Rryma elektrike që lind në një përcjellës të mbyllur kur ai ndodhet në një fushë magnetike të ndryshueshme.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk5jc32xKcLRo2y10dfbSwmELAekKYKdSSw&s", vid: "https://www.youtube.com/embed/fOeWUbvqRgY", gameUrl: "/halelujahhhhh.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni rrymen e induktuar nese f.e.m = 10 V dhe R = 2 Ω.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni rrymen e induktuar nese f.e.m = 10 V dhe R = 2 Ω.", zgjidhja: "5", hapi1: "Zgjidh formulen: I = ε / R", hapi2: "Zevendeso: I = 10 / 2", hapi3: "Llogarit: 5 A" }
        }
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
    <p>Nje rrezatim ka frekuencen f = 4.0 &times; 10<sup>18</sup> Hz.</p>
    <p>Gjeni energjine e fotonit duke ditur se konstanta e Plankut eshte h = 6.63 &times; 10<sup>-34</sup> J&middot;s.</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Nje rrezatim ka frekuencen f = 4.0 × 10¹⁸ Hz. Gjeni energjine e fotonit duke ditur se konstanta e Plankut eshte h = 6.63 × 10⁻³⁴ J·s.",
              zgjidhja: "2.7*10^-15",
              hapi1: "Zgjidh formulen: E = hf",
              hapi2: "Zevendeso vlerat: E = 6.63 × 10⁻³⁴ × 4.0 × 10¹⁸",
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
            teTjera: "E = A<sub>d</sub> + E<sub>k</sub> është ekuacioni i Ajnshtajnit për fotoefektin. Për E ≥ A_d ndodh fotoefekti.", 
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim mbi fotoefektin:</p>
    <p>Mbi nje pllake metali bie rrezatim elektromagnetik. Duhet te gjendet gjatesia valore maksimale qe shkakton fotoefekt.</p>
    <p>Jepet: A<sub>d</sub> = 3 eV, h = 6.63 &times; 10<sup>-34</sup> J&middot;s, c = 3 &times; 10<sup>8</sup> m/s, e = 1.6 &times; 10<sup>-19</sup> C</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Mbi nje pllake metali bie rrezatim elektromagnetik. Duhet te gjendet gjatesia valore maksimale qe shkakton fotoefekt. Jepet: A_d = 3 eV, h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, e = 1.6 × 10⁻¹⁹ C. (Jep pergjigjen ne μm)",
              zgjidhja: "0.4",
              hapi1: "Zgjidh formulen: A<sub>d</sub> = hf = hc / λ  =>  λ = hc / A_d",
              hapi2: "Zevendeso vlerat: A<sub>d</sub> = 3 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J. λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (4.8 × 10⁻¹⁹)",
              hapi3: "Llogarit: λ = 0.4 × 10⁻⁶ m = 0.4 μm"
            },
            nature: "Skalare", 
            desc: "Energjia minimale që i duhet elektronit për t'u shkëputur nga atomi.", 
            phetUrl: "https://phet.colorado.edu/en/simulation/photoelectric", 
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Photoelectric_effect_in_a_solid_-_diagram.svg/1280px-Photoelectric_effect_in_a_solid_-_diagram.svg.png", 
            vid: "https://www.youtube.com/embed/JNR4aQSGetg", 
            gameUrl: "/loja1-fotoefekti-tower-defense.html" 
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
    <p>Nje elektron ka energji kinetike E<sub>k</sub> = 2 eV. Gjej gjatesine e vales se De Brojit. (Jep pergjigjen ne nm)</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Nje elektron ka energji kinetike E<sub>k</sub> = 2 eV. Gjej gjatesine e vales se De Brojit. (Jep pergjigjen ne nm)",
              zgjidhja: "0.87",
              hapi1: "Zgjidh formulen: λ = h / (mv) dhe E<sub>k</sub> = mv² / 2 => v = √(2E_k / m)",
              hapi2: "Zevendeso vlerat: λ = h / √(2mE<sub>k</sub>)",
              hapi3: "Llogarit: Pas zevendesimit te mases se elektronit dhe h, λ ≈ 0.87 nm"
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
    <p>Nje izotop radioaktiv e ka perioden e gjysmezberthimit 2 ore. Sa pjese ka mbetur pas 4 oresh?</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Nje izotop radioaktiv e ka perioden e gjysmezberthimit 2 ore. Sa pjese ka mbetur pas 4 oresh? (Shkruaj si thyese p.sh. 1/4)",
              zgjidhja: "1/4",
              hapi1: "Zgjidh formulen: N = N₀ / 2^(t/T)",
              hapi2: "Zevendeso vlerat: Pas 1 periode (2 ore): N = N₀ / 2. Pas 2 periodash (4 ore = 2T).",
              hapi3: "Llogarit: N = (N₀ / 2) / 2 = N₀ / 4. Pra ka mbetur 1/4"
            },
            nature: "Skalare", 
            desc: "Koha gjatë së cilës zbërthehet gjysma e bërthamave radioaktive të lëndës së dhëne.", 
            phetUrl: "https://phet.colorado.edu/en/simulation/alpha-decay", 
            img: "https://assets-us-01.kc-usercontent.com/9dd25524-761a-000d-d79f-86a5086d4774/7e6a0ff6-374a-454d-891e-a7377ce7e211/half-life_lg.jpg?w=659&h=800&auto=format&q=75&fit=crop", 
            vid: "https://www.youtube.com/embed/egT-BjjR1kc", 
            gameUrl: "/loja3-gjysmezberthimi.html" 
        },
        { 
            id: 5, 
            catName: "Fizika Kuantike", 
            name: "5. Energjia bërthamore", 
            sym: "E", 
            form: "E = mc²", 
            unit: "J", 
            otherUnits: "MeV,1 MeV=10⁶ • 1,6•10⁻¹⁹J", 
            teTjera: "", 
            nature: "Skalare", 
            desc: "Energjia e çliruar gjatë proceseve të fisionit ose fuzionit të bërthamave atomike.", 
            phetUrl: "https://phet.colorado.edu/en/simulation/nuclear-fission", 
            img: "https://cdn1.byjus.com/wp-content/uploads/2018/01/Nuclear-Energy2-700x416.png", 
            vid: "https://www.youtube.com/embed/fuDOxIveHA4", 
            gameUrl: "/energjia berthamore.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
    <p>Gjeni energjine e cliruar per 1 kg mase. (Shkruaj vleren ne fuqine 10^16, psh nese del 9*10^16 shkruaj 9).</p>
  </div>
</div>`,
            ushtrimInteraktiv: {
              pyetja: "Gjeni energjine e cliruar per 1 kg mase. (Shkruaj vleren ne fuqine 10^16, psh nese del 9*10^16 shkruaj 9).",
              zgjidhja: "9",
              hapi1: "Zgjidh formulen: E = m * c²",
              hapi2: "Zevendeso: E = 1 * (3*10^8)²",
              hapi3: "Llogarit: 9 * 10^16 J"
            }
        }
    ],
    "Termodinamika": [
        {
            name: "1. Numri i molëve", sym: "n",
            form: "n = m / M",
            unit: "mol", otherUnits: "", teTjera: "", nature: "Skalare", desc: "Tregon sasinë e lëndës", phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrh05PBnhvU0qP7RPO3jcyZBK3FDPXZ-WXQ&s", vid: "https://www.youtube.com/embed/lAit7kgABr4", gameUrl: "/loja-numri-moleve.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim (Zbatim):</p><p>Gjeni numrin e moleve për 36g ujë (H₂O). (Masa molare e ujit = 18 g/mol).</p></div></div>`,
            ushtrimInteraktiv: {
              pyetja: "Gjeni numrin e moleve për 36g ujë (Masa molare e ujit = 18 g/mol).",
              zgjidhja: "2",
              hapi1: "Zgjidh formulën: n = m / M",
              hapi2: "Zëvendëso: n = 36 / 18",
              hapi3: "Llogarit: 2 mol"
            }
        },
        {
            name: "2. Vëllimi", sym: "V",
            form: "V = m / d",
            unit: "m³", otherUnits: "l (litër)", teTjera: "", nature: "Skalare", desc: "Hapsira që zë trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Simple_Measuring_Cup.jpg", vid: "https://www.youtube.com/embed/tI0faFkAC2k", gameUrl: "/loja-vellimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim (Zbatim):</p><p>Llogarit dendësinë e trupit me masë 6.6 kg nëse vëllimi i tij është 0.0005 m³.</p></div></div>`,
            ushtrimInteraktiv: {
              pyetja: "Llogarit dendësinë (kg/m³) e trupit me masë 6.6 kg nëse vëllimi i tij është 0.0005 m³.",
              zgjidhja: "13200",
              hapi1: "Përdor formulën e dendësisë: d = m / V (ose kthe V = m / d)",
              hapi2: "Zëvendëso: d = 6.6 / 0.0005",
              hapi3: "Llogarit: 13200 kg/m³"
            }
        },
        {
            name: "3. Temperatura absolute", sym: "T",
            form: "T(k) = t(℃) + 273",
            unit: "K", otherUnits: "-", teTjera: "", nature: "Skalare", desc: "Temperatura që matet me K (kelvin)", phetUrl: "https://phet.colorado.edu/en/simulation/states-of-matter", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-hOUCF0QGFxwKpgxIbUsv6hUUUmG9qapvfQGz74sZELicbCsgjc0W6Pg8hpKrOMkHXmFgOMssQ89IIQSHq-_g0mxRdb3OZ2DPnjOS83kKxAEQk_tYyZyjKbwRAYE45S43qvFymGFM_E6u2HU1xcf_K7U6WvC6REZJXnOnqEPytlll7wsZmnWgNj-D4kU/s636/temperature%20scales.webp", vid: "https://www.youtube.com/embed/MvrME5I3Iu8", gameUrl: "/loja-temperatura-absolute.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim (Zbatim):</p><p>Ktheni temperaturën 27 ℃ në Kelvin.</p></div></div>`,
            ushtrimInteraktiv: {
              pyetja: "Ktheni temperaturën 27 ℃ në Kelvin.",
              zgjidhja: "300",
              hapi1: "Zgjidh formulën: T(k) = t(℃) + 273",
              hapi2: "Zëvendëso: T = 27 + 273",
              hapi3: "Llogarit: 300 K"
            }
        },
        { 
            name: "4. Energjia e brendshme termike", sym: "U",
            form: "U = 3/2 · nRT  (gaz 1 atomik)\nU = 5/2 · nRT  (gaz 2 atomik)",
            unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe potenciale të të gjitha grimcave që përbëjnë një sistem.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg", vid: "https://www.youtube.com/embed/mm_vaHqJvfw", gameUrl:"/loja-energjia-termike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine e brendshme per 2 mole gaz 1 atomik ne temperaturen 100 K. R=8.31.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine e brendshme per 2 mole gaz 1 atomik ne temperaturen 100 K. R=8.31.", zgjidhja: "2493", hapi1: "Zgjidh formulen: U = 3/2 * n * R * T", hapi2: "Zevendeso: U = 3/2 * 2 * 8.31 * 100", hapi3: "Llogarit: 3 * 831 = 2493 J" }
        },
        { 
            name: "5. Shtypja", sym: "P",
            form: "P = F / S",
            unit: "Pa", otherUnits: "atm, bar, mmHg, N/m²",
            teTjera: "Në gazra → shtypja tregon goditjet e molekulave me faqet e enës.\nTek lëngjet në thellësi: P = P_atmo + dgh\nLigji i Paskalit → Në të njëjtin nivel lëngu shtypja është e njëjtë.\nÇdo ndryshim shtypjeje në lëng përhapet njëlloj në të gjitha drejtimet.",
            nature: "Skalare", desc: "Forca që ushtrohet pingul mbi njësinë e sipërfaqes së një trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", img: "https://ademgllavica.wordpress.com/wp-content/uploads/2020/03/image-391.png?w=571", vid: "https://www.youtube.com/embed/LDGohoxWZY4", gameUrl: "/loja-shtypja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shtypjen nese forca pingule eshte 100 N ne nje siperfaqe 2 m².</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shtypjen nese forca pingule eshte 100 N ne nje siperfaqe 2 m².", zgjidhja: "50", hapi1: "Zgjidh formulen: P = F / S", hapi2: "Zevendeso: P = 100 / 2", hapi3: "Llogarit: 50 Pa" }
        },
        {
            name: "6. Nxehtësia specifike e lëndës", sym: "c",
            form: "c = Q / mΔt\nQ = c · m · Δt",
            unit: "J/kg·K", otherUnits: "", teTjera: "Q = c · m · Δt", 
            kuic: {
              titulli: "Nxehtësia dhe Ndryshimi i Gjendjes",
              pyetjet: [
                {
                  pyetja: "1. Në pjesën DE të grafikut të varësisë së temperaturës nga koha gjatë ngrohjes me shpejtësi konstante për ujin, gjendja e lëndës është:",
                  opsionet: [
                    "A) avull dhe ujë i lëngshëm",
                    "B) ujë i lëngshëm",
                    "C) akull dhe ujë i lëngshëm",
                    "D) avull"
                  ],
                  sakte: 0,
                  svg: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="180" stroke="black" stroke-width="2"/><line x1="30" y1="140" x2="280" y2="140" stroke="black" stroke-width="2"/><text x="15" y="100" transform="rotate(-90 15,100)" font-family="Arial" font-size="14">Temperatura / °C</text><text x="240" y="160" font-family="Arial" font-size="14">Koha</text><text x="20" y="145" font-family="Arial" font-size="12">0</text><text x="10" y="65" font-family="Arial" font-size="12">100</text><line x1="35" y1="60" x2="40" y2="60" stroke="black" stroke-width="1"/><line x1="40" y1="60" x2="260" y2="60" stroke="black" stroke-dasharray="5,5"/><polyline points="40,170 80,140 120,140 200,60 260,60 280,30" fill="none" stroke="#22d3ee" stroke-width="3"/><text x="45" y="175" font-family="Arial" font-size="12">A</text><text x="75" y="135" font-family="Arial" font-size="12">B</text><text x="115" y="135" font-family="Arial" font-size="12">C</text><text x="200" y="75" font-family="Arial" font-size="12">D</text><text x="260" y="75" font-family="Arial" font-size="12">E</text><text x="280" y="25" font-family="Arial" font-size="12">F</text></svg>`
                },
                {
                  pyetja: "2. Grafiku tregon ndryshimin e temperaturës në funksion të kohës për 2kg të një lënde që merr nxehtësi në mënyrë konstante prej 80000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Nxehtësia e fshehtë e avullimit të lëndës është:",
                  opsionet: [
                    "A) 20kJ/kg",
                    "B) 40 kJ/kg",
                    "C) 60 kJ/kg",
                    "D) 80 kJ/kg"
                  ],
                  sakte: 3,
                  svg: `<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="20" font-family="Arial" font-size="12">temperatura °C</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="300" y2="160" stroke="black" stroke-width="2"/><text x="290" y="150" font-family="Arial" font-size="12">t(min)</text><text x="15" y="165" font-family="Arial" font-size="10">0</text><text x="15" y="145" font-family="Arial" font-size="10">40</text><text x="15" y="125" font-family="Arial" font-size="10">80</text><text x="10" y="105" font-family="Arial" font-size="10">120</text><text x="10" y="85" font-family="Arial" font-size="10">160</text><text x="10" y="65" font-family="Arial" font-size="10">200</text><text x="10" y="45" font-family="Arial" font-size="10">240</text><text x="62" y="175" font-family="Arial" font-size="10">1</text><text x="87" y="175" font-family="Arial" font-size="10">2</text><text x="112" y="175" font-family="Arial" font-size="10">3</text><text x="137" y="175" font-family="Arial" font-size="10">4</text><text x="162" y="175" font-family="Arial" font-size="10">5</text><text x="187" y="175" font-family="Arial" font-size="10">6</text><text x="212" y="175" font-family="Arial" font-size="10">7</text><text x="237" y="175" font-family="Arial" font-size="10">8</text><text x="262" y="175" font-family="Arial" font-size="10">9</text><line x1="40" y1="120" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="65" y1="160" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="90" y1="160" x2="90" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="60" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="165" y1="160" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="215" y1="160" x2="215" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><polyline points="40,160 65,120 90,120 165,60 215,60 240,40" fill="none" stroke="black" stroke-width="2"/></svg>`
                },
                {
                  pyetja: "3. Një sasi prej 2kg ujë fillimisht në temperaturën 80°C shndërrohet plotësisht në avull. Sasia e nxehtësisë që merr uji është: (cu=4200J/kgK dhe Lv=2,26MJ/kg)",
                  opsionet: [
                    "A) 4,688J",
                    "B) 4,688kJ",
                    "C) 4,688MJ",
                    "D) 4,688TJ"
                  ],
                  sakte: 2
                },
                {
                  pyetja: "4. Një sasi hekuri me masë 100kg ndodhet në gjendje të lëngët në temperaturën e shkrirjes. Gjatë procesit të ngurtësimit të kësaj mase hekuri, sasia e nxehtësisë dhe kahu i shkëmbimit të saj janë: (Lfe=33kJ/kg)",
                  opsionet: [
                    "A) hekuri jep 3 kJ nxehtësi.",
                    "B) hekuri nuk shkëmben nxehtësi.",
                    "C) hekuri merr 33·10⁵ J nxehtësi.",
                    "D) hekuri jep 33·10⁵ J nxehtësi."
                  ],
                  sakte: 3
                },
                {
                  pyetja: "5. Grafiku tregon ndryshimin e temperaturës së 2kg lënde gjatë ngrohjes me shpejtësi konstante prej 2000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Treshja e vlerave të nxehtësisë specifike të ngrohjes së trupit të ngurtë, të nxehtësisë latente të shkrirjes dhe nxehtësisë specifike të ngrohjes së lëngut është:",
                  opsionet: [
                    "A) 8000 J/kg°C ; 6000 J/kg ; 3000 J/kg°C",
                    "B) 1330 J/kg°C ; 6000 J/kg ; 600 J/kg°C",
                    "C) 4000 J/kg°C ; 3000 J/kg ; 1200 J/kg°C",
                    "D) 1330 J/kg°C ; 3000 J/kg ; 600 J/kg°C"
                  ],
                  sakte: 3,
                  svg: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="25" font-family="Arial" font-size="12">t(°C)</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="260" y2="160" stroke="black" stroke-width="2"/><text x="245" y="175" font-family="Arial" font-size="12">t(min)</text><text x="20" y="165" font-family="Arial" font-size="10">0</text><text x="20" y="135" font-family="Arial" font-size="10">2</text><text x="20" y="105" font-family="Arial" font-size="10">4</text><text x="20" y="75" font-family="Arial" font-size="10">6</text><text x="20" y="45" font-family="Arial" font-size="10">8</text><text x="75" y="175" font-family="Arial" font-size="10">2</text><text x="115" y="175" font-family="Arial" font-size="10">4</text><text x="155" y="175" font-family="Arial" font-size="10">6</text><text x="195" y="175" font-family="Arial" font-size="10">8</text><text x="230" y="175" font-family="Arial" font-size="10">10</text><text x="45" y="155" font-family="Arial" font-size="10">O</text><text x="115" y="110" font-family="Arial" font-size="10">A</text><text x="175" y="110" font-family="Arial" font-size="10">B</text><text x="245" y="35" font-family="Arial" font-size="10">C</text><line x1="40" y1="115" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="120" y1="160" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="180" y1="160" x2="180" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><polyline points="40,160 120,115 180,115 240,40" fill="none" stroke="black" stroke-width="2"/></svg>`
                }
              ]
            },
            nature: "Skalare", desc: "Tregon sasinë e nxehtësisë që i duhet 1kg lënde për tia ndrzshuar temperaturën me një gradë.", phetUrl: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYVDdn8xNWJ3UWc7Hm6scbbUimOg5qHpVWg&s", vid: "https://www.youtube.com/embed/Wet3sna514o", gameUrl: "/loja-c-specifike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim (Zbatim):</p><p>Cila është nxehtësia që i duhet një trupi 2kg me c=800 J/kgK për tu ngrohur me 30 gradë?</p></div></div>`,
            ushtrimInteraktiv: {
              pyetja: "Cila është nxehtësia Q që i duhet një trupi 2kg me c=800 J/kgK për tu ngrohur me 30 gradë?",
              zgjidhja: "48000",
              hapi1: "Zgjidh formulën: Q = c * m * Δt",
              hapi2: "Zëvendëso: Q = 800 * 2 * 30",
              hapi3: "Llogarit: 48000 J"
            }
        },
        {
            name: "7. Nxehtësia specifike e shkrirjes", sym: "L<sub>sh</sub>",
            form: "L_sh = Q / m",
            unit: "J/kg", otherUnits: "", teTjera: "Q = L<sub>sh</sub> · m", 
            kuic: {
              titulli: "Nxehtësia dhe Ndryshimi i Gjendjes",
              pyetjet: [
                {
                  pyetja: "1. Në pjesën DE të grafikut të varësisë së temperaturës nga koha gjatë ngrohjes me shpejtësi konstante për ujin, gjendja e lëndës është:",
                  opsionet: [
                    "A) avull dhe ujë i lëngshëm",
                    "B) ujë i lëngshëm",
                    "C) akull dhe ujë i lëngshëm",
                    "D) avull"
                  ],
                  sakte: 0,
                  svg: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="180" stroke="black" stroke-width="2"/><line x1="30" y1="140" x2="280" y2="140" stroke="black" stroke-width="2"/><text x="15" y="100" transform="rotate(-90 15,100)" font-family="Arial" font-size="14">Temperatura / °C</text><text x="240" y="160" font-family="Arial" font-size="14">Koha</text><text x="20" y="145" font-family="Arial" font-size="12">0</text><text x="10" y="65" font-family="Arial" font-size="12">100</text><line x1="35" y1="60" x2="40" y2="60" stroke="black" stroke-width="1"/><line x1="40" y1="60" x2="260" y2="60" stroke="black" stroke-dasharray="5,5"/><polyline points="40,170 80,140 120,140 200,60 260,60 280,30" fill="none" stroke="#22d3ee" stroke-width="3"/><text x="45" y="175" font-family="Arial" font-size="12">A</text><text x="75" y="135" font-family="Arial" font-size="12">B</text><text x="115" y="135" font-family="Arial" font-size="12">C</text><text x="200" y="75" font-family="Arial" font-size="12">D</text><text x="260" y="75" font-family="Arial" font-size="12">E</text><text x="280" y="25" font-family="Arial" font-size="12">F</text></svg>`
                },
                {
                  pyetja: "2. Grafiku tregon ndryshimin e temperaturës në funksion të kohës për 2kg të një lënde që merr nxehtësi në mënyrë konstante prej 80000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Nxehtësia e fshehtë e avullimit të lëndës është:",
                  opsionet: [
                    "A) 20kJ/kg",
                    "B) 40 kJ/kg",
                    "C) 60 kJ/kg",
                    "D) 80 kJ/kg"
                  ],
                  sakte: 3,
                  svg: `<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="20" font-family="Arial" font-size="12">temperatura °C</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="300" y2="160" stroke="black" stroke-width="2"/><text x="290" y="150" font-family="Arial" font-size="12">t(min)</text><text x="15" y="165" font-family="Arial" font-size="10">0</text><text x="15" y="145" font-family="Arial" font-size="10">40</text><text x="15" y="125" font-family="Arial" font-size="10">80</text><text x="10" y="105" font-family="Arial" font-size="10">120</text><text x="10" y="85" font-family="Arial" font-size="10">160</text><text x="10" y="65" font-family="Arial" font-size="10">200</text><text x="10" y="45" font-family="Arial" font-size="10">240</text><text x="62" y="175" font-family="Arial" font-size="10">1</text><text x="87" y="175" font-family="Arial" font-size="10">2</text><text x="112" y="175" font-family="Arial" font-size="10">3</text><text x="137" y="175" font-family="Arial" font-size="10">4</text><text x="162" y="175" font-family="Arial" font-size="10">5</text><text x="187" y="175" font-family="Arial" font-size="10">6</text><text x="212" y="175" font-family="Arial" font-size="10">7</text><text x="237" y="175" font-family="Arial" font-size="10">8</text><text x="262" y="175" font-family="Arial" font-size="10">9</text><line x1="40" y1="120" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="65" y1="160" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="90" y1="160" x2="90" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="60" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="165" y1="160" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="215" y1="160" x2="215" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><polyline points="40,160 65,120 90,120 165,60 215,60 240,40" fill="none" stroke="black" stroke-width="2"/></svg>`
                },
                {
                  pyetja: "3. Një sasi prej 2kg ujë fillimisht në temperaturën 80°C shndërrohet plotësisht në avull. Sasia e nxehtësisë që merr uji është: (cu=4200J/kgK dhe Lv=2,26MJ/kg)",
                  opsionet: [
                    "A) 4,688J",
                    "B) 4,688kJ",
                    "C) 4,688MJ",
                    "D) 4,688TJ"
                  ],
                  sakte: 2
                },
                {
                  pyetja: "4. Një sasi hekuri me masë 100kg ndodhet në gjendje të lëngët në temperaturën e shkrirjes. Gjatë procesit të ngurtësimit të kësaj mase hekuri, sasia e nxehtësisë dhe kahu i shkëmbimit të saj janë: (Lfe=33kJ/kg)",
                  opsionet: [
                    "A) hekuri jep 3 kJ nxehtësi.",
                    "B) hekuri nuk shkëmben nxehtësi.",
                    "C) hekuri merr 33·10⁵ J nxehtësi.",
                    "D) hekuri jep 33·10⁵ J nxehtësi."
                  ],
                  sakte: 3
                },
                {
                  pyetja: "5. Grafiku tregon ndryshimin e temperaturës së 2kg lënde gjatë ngrohjes me shpejtësi konstante prej 2000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Treshja e vlerave të nxehtësisë specifike të ngrohjes së trupit të ngurtë, të nxehtësisë latente të shkrirjes dhe nxehtësisë specifike të ngrohjes së lëngut është:",
                  opsionet: [
                    "A) 8000 J/kg°C ; 6000 J/kg ; 3000 J/kg°C",
                    "B) 1330 J/kg°C ; 6000 J/kg ; 600 J/kg°C",
                    "C) 4000 J/kg°C ; 3000 J/kg ; 1200 J/kg°C",
                    "D) 1330 J/kg°C ; 3000 J/kg ; 600 J/kg°C"
                  ],
                  sakte: 3,
                  svg: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="25" font-family="Arial" font-size="12">t(°C)</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="260" y2="160" stroke="black" stroke-width="2"/><text x="245" y="175" font-family="Arial" font-size="12">t(min)</text><text x="20" y="165" font-family="Arial" font-size="10">0</text><text x="20" y="135" font-family="Arial" font-size="10">2</text><text x="20" y="105" font-family="Arial" font-size="10">4</text><text x="20" y="75" font-family="Arial" font-size="10">6</text><text x="20" y="45" font-family="Arial" font-size="10">8</text><text x="75" y="175" font-family="Arial" font-size="10">2</text><text x="115" y="175" font-family="Arial" font-size="10">4</text><text x="155" y="175" font-family="Arial" font-size="10">6</text><text x="195" y="175" font-family="Arial" font-size="10">8</text><text x="230" y="175" font-family="Arial" font-size="10">10</text><text x="45" y="155" font-family="Arial" font-size="10">O</text><text x="115" y="110" font-family="Arial" font-size="10">A</text><text x="175" y="110" font-family="Arial" font-size="10">B</text><text x="245" y="35" font-family="Arial" font-size="10">C</text><line x1="40" y1="115" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="120" y1="160" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="180" y1="160" x2="180" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><polyline points="40,160 120,115 180,115 240,40" fill="none" stroke="black" stroke-width="2"/></svg>`
                }
              ]
            },
            nature: "Skalare", desc: "Nxehtësia specifike e shkrirjes është nxehtësia që i duhet 1 kg lënde për ta shkrirë plotësisht, marrë në temperaturën e shkrirjes.", phetUrl: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html", img: "https://chemistrytalk.org/wp-content/uploads/2023/03/fusion-article-heating-curve-standard-1-1024x679.png", vid: "https://www.youtube.com/embed/JzaVEQoL578", gameUrl: "/loja-lsh.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim (Zbatim):</p><p>Sa nxehtësi nevojitet për të shkrirë 2kg akull në 0℃? (L_sh = 334000 J/kg)</p></div></div>`,
            ushtrimInteraktiv: {
              pyetja: "Sa nxehtësi nevojitet për të shkrirë 2kg akull në 0℃? (L<sub>sh</sub> = 334000 J/kg)",
              zgjidhja: "668000",
              hapi1: "Zgjidh formulën: Q = L<sub>sh</sub> * m",
              hapi2: "Zëvendëso: Q = 334000 * 2",
              hapi3: "Llogarit: 668000 J"
            }
        },
        {
            name: "8. Nxehtësia specifike e avullimit", sym: "L<sub>av</sub>",
            form: "L_av = Q / m\nQ_av = L_av · m",
            unit: "J/kg", otherUnits: "", teTjera: "Q<sub>av</sub>= L<sub>av</sub> · m", 
            kuic: {
              titulli: "Nxehtësia dhe Ndryshimi i Gjendjes",
              pyetjet: [
                {
                  pyetja: "1. Në pjesën DE të grafikut të varësisë së temperaturës nga koha gjatë ngrohjes me shpejtësi konstante për ujin, gjendja e lëndës është:",
                  opsionet: [
                    "A) avull dhe ujë i lëngshëm",
                    "B) ujë i lëngshëm",
                    "C) akull dhe ujë i lëngshëm",
                    "D) avull"
                  ],
                  sakte: 0,
                  svg: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="180" stroke="black" stroke-width="2"/><line x1="30" y1="140" x2="280" y2="140" stroke="black" stroke-width="2"/><text x="15" y="100" transform="rotate(-90 15,100)" font-family="Arial" font-size="14">Temperatura / °C</text><text x="240" y="160" font-family="Arial" font-size="14">Koha</text><text x="20" y="145" font-family="Arial" font-size="12">0</text><text x="10" y="65" font-family="Arial" font-size="12">100</text><line x1="35" y1="60" x2="40" y2="60" stroke="black" stroke-width="1"/><line x1="40" y1="60" x2="260" y2="60" stroke="black" stroke-dasharray="5,5"/><polyline points="40,170 80,140 120,140 200,60 260,60 280,30" fill="none" stroke="#22d3ee" stroke-width="3"/><text x="45" y="175" font-family="Arial" font-size="12">A</text><text x="75" y="135" font-family="Arial" font-size="12">B</text><text x="115" y="135" font-family="Arial" font-size="12">C</text><text x="200" y="75" font-family="Arial" font-size="12">D</text><text x="260" y="75" font-family="Arial" font-size="12">E</text><text x="280" y="25" font-family="Arial" font-size="12">F</text></svg>`
                },
                {
                  pyetja: "2. Grafiku tregon ndryshimin e temperaturës në funksion të kohës për 2kg të një lënde që merr nxehtësi në mënyrë konstante prej 80000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Nxehtësia e fshehtë e avullimit të lëndës është:",
                  opsionet: [
                    "A) 20kJ/kg",
                    "B) 40 kJ/kg",
                    "C) 60 kJ/kg",
                    "D) 80 kJ/kg"
                  ],
                  sakte: 3,
                  svg: `<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="20" font-family="Arial" font-size="12">temperatura °C</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="300" y2="160" stroke="black" stroke-width="2"/><text x="290" y="150" font-family="Arial" font-size="12">t(min)</text><text x="15" y="165" font-family="Arial" font-size="10">0</text><text x="15" y="145" font-family="Arial" font-size="10">40</text><text x="15" y="125" font-family="Arial" font-size="10">80</text><text x="10" y="105" font-family="Arial" font-size="10">120</text><text x="10" y="85" font-family="Arial" font-size="10">160</text><text x="10" y="65" font-family="Arial" font-size="10">200</text><text x="10" y="45" font-family="Arial" font-size="10">240</text><text x="62" y="175" font-family="Arial" font-size="10">1</text><text x="87" y="175" font-family="Arial" font-size="10">2</text><text x="112" y="175" font-family="Arial" font-size="10">3</text><text x="137" y="175" font-family="Arial" font-size="10">4</text><text x="162" y="175" font-family="Arial" font-size="10">5</text><text x="187" y="175" font-family="Arial" font-size="10">6</text><text x="212" y="175" font-family="Arial" font-size="10">7</text><text x="237" y="175" font-family="Arial" font-size="10">8</text><text x="262" y="175" font-family="Arial" font-size="10">9</text><line x1="40" y1="120" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="65" y1="160" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="90" y1="160" x2="90" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="60" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="165" y1="160" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="215" y1="160" x2="215" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><polyline points="40,160 65,120 90,120 165,60 215,60 240,40" fill="none" stroke="black" stroke-width="2"/></svg>`
                },
                {
                  pyetja: "3. Një sasi prej 2kg ujë fillimisht në temperaturën 80°C shndërrohet plotësisht në avull. Sasia e nxehtësisë që merr uji është: (cu=4200J/kgK dhe Lv=2,26MJ/kg)",
                  opsionet: [
                    "A) 4,688J",
                    "B) 4,688kJ",
                    "C) 4,688MJ",
                    "D) 4,688TJ"
                  ],
                  sakte: 2
                },
                {
                  pyetja: "4. Një sasi hekuri me masë 100kg ndodhet në gjendje të lëngët në temperaturën e shkrirjes. Gjatë procesit të ngurtësimit të kësaj mase hekuri, sasia e nxehtësisë dhe kahu i shkëmbimit të saj janë: (Lfe=33kJ/kg)",
                  opsionet: [
                    "A) hekuri jep 3 kJ nxehtësi.",
                    "B) hekuri nuk shkëmben nxehtësi.",
                    "C) hekuri merr 33·10⁵ J nxehtësi.",
                    "D) hekuri jep 33·10⁵ J nxehtësi."
                  ],
                  sakte: 3
                },
                {
                  pyetja: "5. Grafiku tregon ndryshimin e temperaturës së 2kg lënde gjatë ngrohjes me shpejtësi konstante prej 2000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Treshja e vlerave të nxehtësisë specifike të ngrohjes së trupit të ngurtë, të nxehtësisë latente të shkrirjes dhe nxehtësisë specifike të ngrohjes së lëngut është:",
                  opsionet: [
                    "A) 8000 J/kg°C ; 6000 J/kg ; 3000 J/kg°C",
                    "B) 1330 J/kg°C ; 6000 J/kg ; 600 J/kg°C",
                    "C) 4000 J/kg°C ; 3000 J/kg ; 1200 J/kg°C",
                    "D) 1330 J/kg°C ; 3000 J/kg ; 600 J/kg°C"
                  ],
                  sakte: 3,
                  svg: `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="25" font-family="Arial" font-size="12">t(°C)</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="260" y2="160" stroke="black" stroke-width="2"/><text x="245" y="175" font-family="Arial" font-size="12">t(min)</text><text x="20" y="165" font-family="Arial" font-size="10">0</text><text x="20" y="135" font-family="Arial" font-size="10">2</text><text x="20" y="105" font-family="Arial" font-size="10">4</text><text x="20" y="75" font-family="Arial" font-size="10">6</text><text x="20" y="45" font-family="Arial" font-size="10">8</text><text x="75" y="175" font-family="Arial" font-size="10">2</text><text x="115" y="175" font-family="Arial" font-size="10">4</text><text x="155" y="175" font-family="Arial" font-size="10">6</text><text x="195" y="175" font-family="Arial" font-size="10">8</text><text x="230" y="175" font-family="Arial" font-size="10">10</text><text x="45" y="155" font-family="Arial" font-size="10">O</text><text x="115" y="110" font-family="Arial" font-size="10">A</text><text x="175" y="110" font-family="Arial" font-size="10">B</text><text x="245" y="35" font-family="Arial" font-size="10">C</text><line x1="40" y1="115" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="120" y1="160" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="180" y1="160" x2="180" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><polyline points="40,160 120,115 180,115 240,40" fill="none" stroke="black" stroke-width="2"/></svg>`
                }
              ]
            },
            nature: "Skalare", desc: "Nxehtësia specifike e avullimit është nxehtësia që i duhet 1 kg lënde për ta avulluar plotësisht, marrë në temperaturën e vlimit.", phetUrl: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html", img: "https://www.chemistrylearner.com/wp-content/uploads/2022/10/Heat-of-Vaporization.jpg", vid: "https://www.youtube.com/embed/ocV8l66Ssec", gameUrl: "/loja-lav.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim (Zbatim):</p><p>Sa nxehtësi i duhen 2 kg ujë në 100℃ për tu avulluar plotësisht? (L_av = 2300000 J/kg)</p></div></div>`,
            ushtrimInteraktiv: {
              pyetja: "Sa nxehtësi (Q_av) i duhen 2 kg ujë në 100℃ për tu avulluar plotësisht? (L<sub>av</sub> = 2300000 J/kg)",
              zgjidhja: "4600000",
              hapi1: "Zgjidh formulën: Q = L<sub>av</sub> * m",
              hapi2: "Zëvendëso: Q = 2300000 * 2",
              hapi3: "Llogarit: 4600000 J"
            }
        },
        {
            name: "9. Puna në TD", sym: "A",
            form: "A = p ΔV",
            unit: "J/kg", otherUnits: "1J = 1 N·m", teTjera: "Tek grafiku p(V) puna gjendet me syprinën në grafik. Tek procesi izohorik A = 0 sepse nuk ndryshon vëllimi.", nature: "Skalare", desc: "Efekti zhvendosës i një force të brendshme të gazit. ( Puna e gazit )", phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", img: "https://saylordotorg.github.io/text_general-chemistry-principles-patterns-and-applications-v1.0/section_22/b47b25398b05c27b31c9824243dfa2e0.jpg", vid: "https://www.youtube.com/embed/ocV8l66Ssec", gameUrl: "/loja-puna-td.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim (Zbatim):</p><p>Një gaz ideal zgjerohet duke kaluar nga vëllimi 1 m³ në 3 m³ nën një shtypje konstante prej 100,000 Pa. Gjeni punën e kryer.</p></div><div class="bg-red-50 p-4 rounded-xl border border-red-100"><p class="font-bold text-red-800 mb-2">Ushtrim i vështirë:</p><p>Gjatë një procesi izobarik vëllimi i gazit ideal rritet 2 herë. Shtypja e gazit gjatë këtij procesi: a) rritet 4 herë b) rritet 2 herë; c) zvogëlohet 2 herë; d) nuk ndryshon. (Përgjigje: d)</p></div></div>`,
            ushtrimInteraktiv: {
              pyetja: "Një gaz ideal zgjerohet izobarikisht (p=100,000 Pa) duke kaluar nga vëllimi 1 m³ në 3 m³. Gjeni punën e kryer nga gazi.",
              zgjidhja: "200000",
              hapi1: "Zgjidh formulën e punës: A = p * ΔV",
              hapi2: "Gjej ndryshimin e vëllimit: ΔV = V₂ - V₁ = 3 - 1 = 2 m³",
              hapi3: "Llogarit: A = 100000 * 2 = 200000 J"
            }
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
    url: '/energjiakinetike1.html'
  },
  {
    title: "Eksperimenti i Gravitetit",
    description: "Llogarit energjinë potenciale gravitacionale për të lëshuar objektet saktësisht.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën e objektit dhe lartësinë.", "Llogarit Ep = mgh (g=10).", "Shëno rezultatin dhe lësho objektin!"],
    type: 'digital',
    url: '/energjiapotencialegravitacionale.html'
  },
  {
    title: "Gjuajtësi Elastik",
    description: "Llogarit energjinë potenciale elastike të sustës për të gjuajtur topin.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko konstantin k dhe shtypjen x.", "Llogarit Epe = ½kx².", "Shëno rezultatin dhe lësho topin!"],
    type: 'digital',
    url: '/energjia potenciale elastike.html'
  },
  {
    title: "Roller Coaster",
    description: "Llogarit energjinë mekanike totale për të nisur udhëtimin e trenit.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko lartësinë h dhe shpejtësinë v.", "Llogarit Em = mgh + ½mv².", "Shëno rezultatin dhe nis trenin!"],
    type: 'digital',
    url: '/energjia mekanike.html'
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
    url: '/fuqia1.html'
  },
  {
    title: "Laboratori Termik",
    description: "Llogarit nxehtësinë e nevojshme për të ngrohur ujin në një temperaturë të caktuar.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën m dhe ndryshimin e temperaturës ΔT.", "Llogarit Q = m · c · ΔT.", "Shëno rezultatin dhe furnizo nxehtësi!"],
    type: 'digital',
    url: '/energjia e brendshme termike.html'
  },
  {
    title: "Qarku Elektrik",
    description: "Llogarit energjinë elektrike të konsumuar nga një llambë.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko tensionin U, rrymën I dhe kohën t.", "Llogarit E = U · I · t.", "Shëno rezultatin dhe ndiz llambën!"],
    type: 'digital',
    url: '/energjia elektrike.html'
  },
  {
    title: "Karburanti i Trupit",
    description: "Llogarit energjinë kimike të ushqimit për të mbushur energjinë e trupit.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko sasinë e ushqimit dhe vlerën e tij energjetike.", "Llogarit E = sasia · vlera.", "Shëno rezultatin dhe hani vaktin!"],
    type: 'digital',
    url: '/energjia kimike.html'
  },
  {
    title: "Reaktori Bërthamor",
    description: "Llogarit energjinë e çliruar nga fisioni bërthamor i Uraniumit.",
    materials: ["Kompjuter ose Telefon"],
    steps: ["Shiko masën e lëndës dhe rendimentin.", "Llogarit E = m · rendimenti.", "Shëno rezultatin dhe shkakto fisionin!"],
    type: 'digital',
    url: '/energjia berthamore.html'
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
    },
    "Termodinamika": {
        img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg",
        vid: "https://www.youtube.com/embed/mm_vaHqJvfw"
    }
};
