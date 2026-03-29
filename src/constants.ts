      import { PhysicsData, Simulation, PhysicsGame } from './types';

export const ALL_PHYSICS_DATA: PhysicsData = {
    "Kinematika": [
        { 
            name: "1. Koordinata", sym: "x, y, z", form: "x = xo + vt (L.D.NJ)<br>x = xo + vot + at²/2 (L.D.Nj.ND)", unit: "m", otherUnits: "miles(1km=0.621milje), foot(1ft=30.48cm), inch(1ft=12inch)", teTjera: "", nature: "Vektoriale", desc: "Pozicioni i një pike materiale në hapësirë në raport me një sistem referimi të zgjedhur.", phetUrl: "https://phet.colorado.edu/en/simulation/graphing-lines", img: "https://d20khd7ddkh5ls.cloudfront.net/img11_66.jpg", vid: "https://www.youtube.com/embed/MCDL8EXYIFo", gameUrl: "/loja-koordinata.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nje trup niset nga pozicioni fillestar xo = 2 m me shpejtesi v = 5 m/s. Gjeni pozicionin x pas kohes t = 3 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nje trup niset nga pozicioni fillestar xo = 2 m me shpejtesi v = 5 m/s. Gjeni pozicionin x pas kohes t = 3 s.", zgjidhja: "17", hapi1: "Zgjidh formulen: x = xo + vt", hapi2: "Zevendeso: x = 2 + 5 * 3", hapi3: "Llogarit: x = 17 m" }
        },
        { 
            name: "2. Zhvendosja", sym: "Δx", form: "Δx = vt<br>Δx = vot + at²/2<br>v² - vo² = 2aΔx<br>Δx = (v + vo)t / 2", unit: "m", otherUnits: " miles(1milje=1.609km), 1 pash=1.5m, foot(1ft=30.48cm), inch(1 inch=`2.54 cm)", teTjera: "", nature: "Vektoriale", desc: "Vektori që bashkon pozicionin fillestar me atë përfundimtar të trupit gjatë lëvizjes.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://www.sciencefacts.net/wp-content/uploads/2022/10/Displacement-Formula.jpg", vid: "https://www.youtube.com/embed/m4jrhAckbK0", gameUrl: "/loja-zhvendosja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nje makine leviz me shpejtesi v = 10 m/s per nje kohe t = 5 s. Sa eshte zhvendosja e saj?</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nje makine leviz me shpejtesi v = 10 m/s per nje kohe t = 5 s. Sa eshte zhvendosja e saj?", zgjidhja: "50", hapi1: "Zgjidh formulen: Δx = v * t", hapi2: "Zevendeso: Δx = 10 * 5", hapi3: "Llogarit: Δx = 50 m" }
        },
        { 
            name: "3. Rruga e përshkuar", sym: "l", form: "l = vt (L.D.NJ)<br>l = 2ΠR (L.RR.NJ)", unit: "m", otherUnits: "cm, km", teTjera: "", nature: "Skalare", desc: "Gjatësia e trajektores së përshkuar nga trupi gjatë një intervali kohe.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://i.ytimg.com/vi/XS4QMCYGgtM/maxresdefault.jpg", vid: "https://www.youtube.com/embed/m4jrhAckbK0", gameUrl: "/loja-rruga.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nje trup pershkon rrugen me shpejtesi 4 m/s per 5 s. Gjeni rrugen l.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nje trup pershkon rrugen me shpejtesi 4 m/s per 5 s. Gjeni rrugen l.", zgjidhja: "20", hapi1: "Zgjidh formulen: l = v * t", hapi2: "Zevendeso: l = 4 * 5", hapi3: "Llogarit: l = 20 m" }
        },
        { 
            name: "4. Koha", sym: "t", form: "t = l / v", unit: "s", otherUnits: "min, ore, ditë", teTjera: "", nature: "Skalare", desc: "Madhësia që përcakton kohëzgjatjen e një procesi fizik ose renditjen e ngjarjeve.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://rhapsodyinbooks.wordpress.com/wp-content/uploads/2017/05/worldline.jpg?w=584&h=519", vid: "https://www.youtube.com/embed/Rso3Es2cFOc", gameUrl: "/loja-koha.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni kohen t nese rruga l = 100 m dhe shpejtesia v = 20 m/s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni kohen t nese rruga l = 100 m dhe shpejtesia v = 20 m/s.", zgjidhja: "5", hapi1: "Zgjidh formulen: t = l / v", hapi2: "Zevendeso: t = 100 / 20", hapi3: "Llogarit: t = 5 s" }
        },
        { 
            name: "5. Interval kohor", sym: "Δt", form: "Δt = t - t₀", unit: "s", otherUnits: "min, ore, ditë", teTjera: "", nature: "Skalare", desc: "Diferenca midis dy çasteve kohore të njëpasnjëshme.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", vid: "https://www.youtube.com/embed/HyyGiVpSk6c", gameUrl: "/loja-intervali.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni intervalin kohor nese koha fillestare t0 = 2 s dhe koha perfundimtare t = 8 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni intervalin kohor nese koha fillestare t0 = 2 s dhe koha perfundimtare t = 8 s.", zgjidhja: "6", hapi1: "Zgjidh formulen: Δt = t - t0", hapi2: "Zevendeso: Δt = 8 - 2", hapi3: "Llogarit: Δt = 6 s" }
        },
        { 
            name: "6. Shpejtësia mesatare", sym: "Vmes", form: "V_mes = l / t", unit: "m/s", otherUnits: "km/h", teTjera: "", nature: "Vektoriale", desc: "Raporti i zhvendosjes me intervalin e kohës gjatë të cilit ka ndodhur kjo zhvendosje.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://study.com/cimages/videopreview/screencapture_measuringspeed_140291.jpg", vid: "https://www.youtube.com/embed/UVKbAAw07Bg", gameUrl: "/loja-shpejtesia-mesatare.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine mesatare nese rruga eshte 150 m dhe koha 10 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine mesatare nese rruga eshte 150 m dhe koha 10 s.", zgjidhja: "15", hapi1: "Zgjidh formulen: v.mes = l / t", hapi2: "Zevendeso: v.mes = 150 / 10", hapi3: "Llogarit: 15 m/s" }
        },
        { 
            name: "7. Shpejtësia e castit", sym: "v", form: "v = Δx / Δt", unit: "m/s", otherUnits: "km/h  c=3 x 10⁸m/s eshte shpejtesia e drites ne zbrazeti (shpejtesia me e madhe ne natyre)", teTjera: "", nature: "Vektoriale", desc: "Shpejtësia e trupit në një çast të caktuar të kohës ose në një pikë të dhënë të trajektores.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://upload.wikimedia.org/wikipedia/sq/e/e2/Shpejt%C3%ABsia_e_castit.png", vid: "https://www.youtube.com/embed/9fWp9nlEJHo", gameUrl: "/loja-shpejtesia-castit.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine nese ndryshimi i pozicionit eshte 40 m per nje kohe prej 4 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine nese ndryshimi i pozicionit eshte 40 m per nje kohe prej 4 s.", zgjidhja: "10", hapi1: "Zgjidh formulen: v = Δx / Δt", hapi2: "Zevendeso: v = 40 / 4", hapi3: "Llogarit: 10 m/s" }
        },
        { 
            name: "8. Nxitimi", sym: "a", form: "a = Δv / Δt<br>a = F / m", unit: "m/s²", otherUnits: "N/kg", teTjera: "Te grafiku v(t) pjerrtësia tregon nxitimin.    Në lëvizje të përshpejtuar a dhe vo kanë shenjë të njëjtë.  Në lëvizje të ngadalësuar a dhe vo kanë shenjë të kundërt.", nature: "Vektoriale", desc: "Madhësia që tregon ndryshimin e shpejtësisë në njësinë e kohë.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-7.png?w=929", vid: "https://www.youtube.com/embed/ks-yBHtiRqM", gameUrl: "/nxitimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni nxitimin nese shpejtesia ndryshon me 20 m/s gjate 4 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni nxitimin nese shpejtesia ndryshon me 20 m/s gjate 4 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: a = Δv / Δt", hapi2: "Zevendeso: a = 20 / 4", hapi3: "Llogarit: 5 m/s²" }
        },
        { 
            name: "9. Nxitimi i renies se lire", sym: "g", form: "g = G M / R²<br>G = 6,67 × 10⁻¹¹ Nm² / kg²<br>G → γ", unit: "N/kg", otherUnits: "m/s²", teTjera: " Afër tokës g=9,8 m/s². Në pole g rritet pak. Në lartësi h nga planeti → g= M/(R+h)² ", nature: "Vektoriale", desc: "Nxitimi me të cilin bien trupat në afërsi të sipërfaqes së Tokës nën veprimin e gravitetit.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levizja_e_projektilit.jpg", vid: "https://www.youtube.com/embed/Mr-KXDD6-5g" , gameUrl:"/nxitimi i renies se lire",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Sa eshte vlera e nxitimit te renies se lire afer siperfaqes se Tokes? (Jep vleren me nje shifer pas presjes)</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Sa eshte vlera e nxitimit te renies se lire afer siperfaqes se Tokes? (Jep vleren me nje shifer pas presjes)", zgjidhja: "9.8", hapi1: "Kujto vleren konstante per g", hapi2: "Zevendeso vleren e njohur", hapi3: "Pergjigja eshte 9.8" }
        },
        { 
            name: "10. Perioda", sym: "T", form: "T = 1 / f<br>T = t / N", unit: "s", otherUnits: "min, h", teTjera: "", nature: "Skalare", desc: "Koha e nevojshme për të kryer një rrotullim të plotë ose një lëkundje të plotë.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Simple_harmonic_motion.svg", vid: "https://www.youtube.com/embed/_LPGBHpSZpA" , gameUrl:"/perioda.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni perioden T nese frekuenca f eshte 0.5 Hz.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni perioden T nese frekuenca f eshte 0.5 Hz.", zgjidhja: "2", hapi1: "Zgjidh formulen: T = 1 / f", hapi2: "Zevendeso: T = 1 / 0.5", hapi3: "Llogarit: 2 s" }
        },
        { 
            name: "11. Frekuenca", sym: "f", form: "f = 1 / T<br>f = N / t", unit: "Hz", otherUnits: "s⁻¹, rrotullime/s ose lëkundje/s ", teTjera: "", nature: "Skalare", desc: "Numri i lëkundjeve (ose rrotullimeve) në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", vid: "https://www.youtube.com/embed/TT4oSP4VdkA" ,gameUrl:"/frekuenca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni frekuencen f nese perioda T eshte 0.2 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni frekuencen f nese perioda T eshte 0.2 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: f = 1 / T", hapi2: "Zevendeso: f = 1 / 0.2", hapi3: "Llogarit: 5 Hz" }
        },
        { 
            name: "12. Shpejtësia këndore", sym: "ω", form: "ω = θ / t", unit: "rad/s", otherUnits: "-", teTjera: " w=2Π/T=2Πf ose w=V/R (L.RR.NS)", nature: "Vektoriale", desc: "Këndi në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Angular_velocity.svg/1280px-Angular_velocity.svg.png", vid: "https://www.youtube.com/embed/WQ9AH2S8B6Y" , gameUrl:"/shpejtesiakendore.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine kendore ω nese kendi eshte 10 rad dhe koha 2 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine kendore ω nese kendi eshte 10 rad dhe koha 2 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: ω = θ / t", hapi2: "Zevendeso: ω = 10 / 2", hapi3: "Llogarit: 5 rad/s" }
        },
        { 
            name: "13. Shpejtësia lineare", sym: "v", form: "V = ω × r<br>V = l / t = 2πr / T", unit: "m/s", otherUnits: "km/h, c=3 x 10⁸m/s eshte shpejtesia e drites ne zbrazeti (shpejtesia me e madhe ne natyre)", teTjera: "", nature: "Vektoriale", desc: "Rruga e kryer ne njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExpNKbYnHRikFuixua9cmGqedwh3bo81Y3Q&s", vid: "https://www.youtube.com/embed/udhu6-bp_O0" , gameUrl:"/shpejtesialineare.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shpejtesine lineare v nese shpejtesia kendore eshte 4 rad/s dhe rrezja 2 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shpejtesine lineare v nese shpejtesia kendore eshte 4 rad/s dhe rrezja 2 m.", zgjidhja: "8", hapi1: "Zgjidh formulen: V = ω * r", hapi2: "Zevendeso: V = 4 * 2", hapi3: "Llogarit: 8 m/s" }
        },
        { 
            name: "14. Nxitimi qendërsynues", sym: "a_c", form: "a_c = v² / r<br>a_qs = v² / R = ω² R = 4π² f² R", unit: "m/s²", otherUnits: "-", teTjera: "", nature: "Vektoriale", desc: "Nxitimi qendërsynues lidhet me ndryshimin e vektorit të shpejtësisë në njësinë e kohës gjatë lëvizjes rrethore.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", vid: "https://www.youtube.com/embed/c2rgbtG43_4" , gameUrl:"/aqs.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni nxitimin qendersynues nese shpejtesia eshte 6 m/s dhe rrezja 3 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni nxitimin qendersynues nese shpejtesia eshte 6 m/s dhe rrezja 3 m.", zgjidhja: "12", hapi1: "Zgjidh formulen: a_c = v² / r", hapi2: "Zevendeso: a_c = 6² / 3", hapi3: "Llogarit: 36 / 3 = 12 m/s²" }
        },
        { 
            name: "15. Këndi", sym: "θ", form: "θ = s / r", unit: "rad", otherUnits: "gradë", teTjera: "", nature: "Skalare", desc: "Hapësira midis dy rrezeve që nisin nga e njëjta pikë, e matur në radian.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Angle_measure.svg/250px-Angle_measure.svg.png", vid: "https://www.youtube.com/embed/XhEX-4eDb-c" , gameUrl:"/shpejtesiakendore",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni kendin θ ne radian nese harku s eshte 10 m dhe rrezja r eshte 2 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni kendin θ ne radian nese harku s eshte 10 m dhe rrezja r eshte 2 m.", zgjidhja: "5", hapi1: "Zgjidh formulen: θ = s / r", hapi2: "Zevendeso: θ = 10 / 2", hapi3: "Llogarit: 5 rad" }
        },
        { 
            name: "16. Nxitimi këndor", sym: "α", form: "α = Δω / Δt", unit: "rad/s²", otherUnits: "-", teTjera: "α=w-wo/t  at=αR lidhja ndërmjet nxitimit kongurencial dhe këndor.  w=wo+αt (L.RR.NJ.ND.). ", nature: "Vektoriale", desc: "Ndryshimi i shpejtësise këndore ne njësine e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", vid: "https://www.youtube.com/embed/kXj4We-it4k" , gameUrl:"/akendore.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni nxitimin kendor α nese shpejtesia kendore ndryshon me 12 rad/s per 3 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni nxitimin kendor α nese shpejtesia kendore ndryshon me 12 rad/s per 3 s.", zgjidhja: "4", hapi1: "Zgjidh formulen: α = Δω / Δt", hapi2: "Zevendeso: α = 12 / 3", hapi3: "Llogarit: 4 rad/s²" }
        }
    ],
    "Dinamika": [
        { 
            name: "1. Forca", sym: "F", form: "F = m a", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "3 Ligjet e Njutonit:   1- Nëse s'ka F ose Fʀ=0 trupi në prehje ose L.D.NJ.  2- a= F/m a⁓F a⌁m  3- F₂,₁ = – F₁,₂ ", nature: "Vektoriale", desc: "Veprimi i një trupi mbi një tjetër.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDRnwxNuMkmLvPY5p1CvEK61OuaW7qVGHb1pcym-TbWBBNj1s1PxvkIwFjcHVjtAysPbi-93OW7bIcQCc5vSX_jHq9B0gmYAhjaJOOsG8XO5qCvo6wmz1N3W2_JRNtIUKZkdFrMv-6bkA/s1600/4c004beab8150bef9ba245b7f3b589f4cf708850.gif", vid: "https://www.youtube.com/embed/56y06xK21es", gameUrl: "/loja-forca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen F nese masa m = 5 kg dhe nxitimi a = 3 m/s².</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen F nese masa m = 5 kg dhe nxitimi a = 3 m/s².", zgjidhja: "15", hapi1: "Zgjidh formulen: F = m * a", hapi2: "Zevendeso: F = 5 * 3", hapi3: "Llogarit: 15 N" }
        },
        { 
            name: "2. Masa", sym: "m", form: "m = d × v", unit: "kg", otherUnits: "1 pound=0,454kg,1 ton=1000 kg, 1 oke≈ 1,3kg( njësi e vjetër shtëpiake ) ", teTjera: "", nature: "Skalare", desc: "Masa e trupit lidhet me sasinë e lëndës që ai përmban dhe tegon inertësinë e trupit.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://kluszeljka.weebly.com/uploads/3/8/5/5/38551443/published/te-ina-tela.jpg?1615759127", vid: "https://www.youtube.com/embed/6NV5ltITNx4", gameUrl: "/loja-masa.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni masen nese dendsia d = 2 kg/m³ dhe vellimi v = 4 m³.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni masen nese dendsia d = 2 kg/m³ dhe vellimi v = 4 m³.", zgjidhja: "8", hapi1: "Zgjidh formulen: m = d * v", hapi2: "Zevendeso: m = 2 * 4", hapi3: "Llogarit: 8 kg" }
        },
        { 
            name: "3. Pesha", sym: "P", form: "P = N", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca me të cilën trupi mëshon mbi mbështetësen ose tërheq fijen ku është varur.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-6.jpeg?w=332", vid: "https://www.youtube.com/embed/g4mGv0g3Tq0", gameUrl: "/loja-pesha.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni peshen P te nje trupi ne ekuiliber nese forca e reagimit normal N = 60 N.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni peshen P te nje trupi ne ekuiliber nese forca e reagimit normal N = 60 N.", zgjidhja: "60", hapi1: "Zgjidh formulen: P = N", hapi2: "Zevendeso: P = 60", hapi3: "Llogarit: 60 N" }
        },
        { 
            name: "4. Forca e rendeses", sym: "G", form: "G = m g", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca me të cilën Toka tërheq trupat drejt qendrës së saj.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", img: "https://askabiologist.asu.edu/sites/default/files/resources/articles/space_physiology/shuttle_earth_albanian.gif", vid: "https://www.youtube.com/embed/gTL_WeQ3H7o", gameUrl: "/loja-rendesa.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen e rendeses G per masen m = 10 kg (merr g = 9.8).</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen e rendeses G per masen m = 10 kg (merr g = 9.8).", zgjidhja: "98", hapi1: "Zgjidh formulen: G = m * g", hapi2: "Zevendeso: G = 10 * 9.8", hapi3: "Llogarit: 98 N" }
        },
        { 
            name: "5. Forca e fërkimit", sym: "F_f", form: "F_f = μ N", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca që lind gjatë sipërfaqes fërkuese të 2 trupave dhe pengon rrëshqitjen.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://images.my.labster.com/v2/NL1/803332e1-5a17-4356-90f0-4daa5a9584f0/NL1_Friction_Force_.en.x1024.png", vid: "https://www.youtube.com/embed/2Tz7osdJkiM", gameUrl: "/loja-ferkimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen e ferkimit nese koeficienti eshte 0.2 dhe forca normale N = 50 N.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen e ferkimit nese koeficienti eshte 0.2 dhe forca normale N = 50 N.", zgjidhja: "10", hapi1: "Zgjidh formulen: F_f = μ * N", hapi2: "Zevendeso: F_f = 0.2 * 50", hapi3: "Llogarit: 10 N" }
        },
        { 
            name: "6. Koeficienti i fërkimit", sym: "μ", form: "μ = F_f / N", unit: "—", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Skalare", desc: "Madhësi pa njësi që tregon ashpërsine e sipërfaqeve takuese.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://force-channel.com/wp-content/uploads/2023/11/en_%E6%91%A9%E6%93%A6%E5%8A%9B%E3%81%A8%E6%91%A9%E6%93%A6%E4%BF%82%E6%95%B0%E3%81%AE%E9%96%A2%E4%BF%82.jpg", vid: "https://www.youtube.com/embed/BKQ8gQLQRnI", gameUrl: "/loja-koef-ferkimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni koeficientin μ nese forca e ferkimit eshte 20 N dhe N = 100 N.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni koeficientin μ nese forca e ferkimit eshte 20 N dhe N = 100 N.", zgjidhja: "0.2", hapi1: "Zgjidh formulen: μ = F_f / N", hapi2: "Zevendeso: μ = 20 / 100", hapi3: "Llogarit: 0.2" }
        },
        { 
            name: "7. Forca elastike", sym: "F_e", form: "F = -k x", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "Ligji i Hukut  Forca elastike është në përpjestim të drejtë me shformimin dhe ka kah të kundërt me të.", nature: "Vektoriale", desc: "Forca elastike është forca që lind nga trupi i shformuar mbi atë që shkakton shformimin.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Spring-mass2.svg/250px-Spring-mass2.svg.png", vid: "https://www.youtube.com/embed/XaXpwQK_UjI", gameUrl: "/loja-elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni vleren absolute te forces elastike nese k = 100 N/m dhe zgjatja x = 0.1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni vleren absolute te forces elastike nese k = 100 N/m dhe zgjatja x = 0.1 m.", zgjidhja: "10", hapi1: "Zgjidh formulen: F = k * x (vlera absolute)", hapi2: "Zevendeso: F = 100 * 0.1", hapi3: "Llogarit: 10 N" }
        },
        { 
            name: "8. Konstanta elastike", sym: "k", form: "k = F / x", unit: "N/m", otherUnits: "-", teTjera: " Kufiri i elasticitetit është pika .  Kufiri i soliditetit është pika ku teli këputet. Tek grafiku F(x) → k=përpjestim", nature: "Skalare", desc: "Karakteristikë e trupit që tregon rezistencën e tij ndaj shformimit elastik.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://www.bio-meca.com/wp-content/uploads/hookes-law-schema-1-1024x609.jpg", vid: "https://www.youtube.com/embed/aLOzqPgBpV0", gameUrl: "/loja-konst-elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni konstanten k nese forca F = 50 N shkakton shformim x = 0.5 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni konstanten k nese forca F = 50 N shkakton shformim x = 0.5 m.", zgjidhja: "100", hapi1: "Zgjidh formulen: k = F / x", hapi2: "Zevendeso: k = 50 / 0.5", hapi3: "Llogarit: 100 N/m" }
        },
        { 
            name: "9. Forca qendërsynuese", sym: "F_c", form: "F_c = m v² / r", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: " Forca qendërsynuese nuk është force e re shtesë, Por rolin e saj mund ta luajë cdo force apo grup forcash.", nature: "Vektoriale", desc: "Forca rezultante që detyron një trup të lëvizë sipas një trajektoreje rrethore.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Force_acting_as_centripetal_force.svg/500px-Force_acting_as_centripetal_force.svg.png", vid: "https://www.youtube.com/embed/aLOzqPgBpV0", gameUrl: "/loja-qendersynuese.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni forcen qendersynuese nese m = 2 kg, v = 3 m/s dhe r = 1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen qendersynuese nese m = 2 kg, v = 3 m/s dhe r = 1 m.", zgjidhja: "18", hapi1: "Zgjidh formulen: F_c = m * v² / r", hapi2: "Zevendeso: F_c = 2 * 3² / 1", hapi3: "Llogarit: 2 * 9 = 18 N" }
        },
        { 
            name: "10. Forca gravitacionale", sym: "F_G", form: "F_G = G (m₁ m₂) / r²", unit: "N", otherUnits: "1N=1kg m/s² G → γ", teTjera: "", nature: "Vektoriale", desc: "Forca tërheqëse e gjithësisë që vepron midis çdo dy trupave që kanë masë.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rpECqNLFAKZhNUiLZtbt2Q-pgPY88-b4uw&s", vid: "https://www.youtube.com/embed/yzjB32cooEo", gameUrl: "/loja-gravitacionale.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Sa eshte forca gravitacionale nese prodhimi i masave eshte 100 dhe rrezja 1 m? (Jep pergjigjen ne funksion te G, psh shkruaj 100)</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Sa eshte forca gravitacionale nese prodhimi i masave eshte 100 dhe rrezja 1 m? (Jep pergjigjen ne funksion te G, psh shkruaj 100)", zgjidhja: "100", hapi1: "Zgjidh formulen: F_G = G * (m1*m2) / r²", hapi2: "Zevendeso: F_G = G * 100 / 1²", hapi3: "Llogarit: 100 * G" }
        },
        { 
            name: "11. Impulsi i forcës", sym: "Δp", form: "Δp = F Δt", unit: "N·s", otherUnits: "kg·m/s", teTjera: "Δp=mΔv", nature: "Vektoriale", desc: "Prodhimi i forcës me intervalin e kohës gjatë të cilit ajo vepron mbi trupin.", phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", img: "https://media.geeksforgeeks.org/wp-content/uploads/20230601131523/Impulse-Curve.png", vid: "https://www.youtube.com/embed/BWhluW5_1vc", gameUrl: "/loja-impuls-force.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni impulsin e forces nese forca eshte 10 N dhe vepron per 2 s.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri:</p>
                    <p>Topi me masë 200g lëviz me shpejtësi 10m/s dhe godet murin pingul dhe kthehet me 8m/s. Goditja zgjati 0,4s. Gjeni impulsin e topit para dhe pas goditjes, ndryshimin e impulsit dhe forcën goditëse.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhëna:</b> m = 200 g = 0.2 kg; v1 = 10 m/s; v2 = -8 m/s (kthehet mbrapsht); t = 0.4 s.</p>
                        <p><b>Zgjidhje:</b><br>p_para = 0.2 &times; 10 = 2 kg&middot;m/s.<br>p_pas = 0.2 &times; (-8) = -1.6 kg&middot;m/s.<br>&Delta;p = p_pas - p_para = -1.6 - 2 = -3.6 kg&middot;m/s.<br>F = &Delta;p / t = -3.6 / 0.4 = -9 N.</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni impulsin e forces nese forca eshte 10 N dhe vepron per 2 s.", zgjidhja: "20", hapi1: "Zgjidh formulen: Δp = F * Δt", hapi2: "Zevendeso: Δp = 10 * 2", hapi3: "Llogarit: 20 N·s" }
        },
        { 
            name: "12. Impuls i trupit", sym: "p", form: "p = m v", unit: "kg·m/s", otherUnits: "", teTjera: "", nature: "Vektoriale", desc: "Sasia e lëvizjes së trupit.", phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", img: "https://mechanicsmap.psu.edu/websites/15_impulse_momentum_rigid_body/15-2_impulse_momentum_theorem_rigid_body/images/problem_diagram.png", vid: "https://www.youtube.com/embed/XreBwpNk9no", gameUrl: "/loja-impuls-trupi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni impulsin e trupit me mase 5 kg qe leviz me shpejtesi 4 m/s.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100 mb-4">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri 1:</p>
                    <p>Sfera e bilardos lëviz drejt me 10m/s dhe godet një sferë tjetër të njëjtë në prehje, ngjitet me të dhe lëvizin së bashku. Gjeni shpejtësinë e tyre pas bashkimit.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhëna:</b> m1 = m2 = m; v1 = 10 m/s; v2 = 0. Pas goditjes ngjiten: V = ?.</p>
                        <p><b>Zgjidhje:</b><br>m &middot; v1 + 0 = (m + m) &middot; V<br>m &middot; 10 = 2m &middot; V &rArr; V = 5 m/s.</p>
                    </div>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100 mb-4">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri 2:</p>
                    <p>Sportisiti me masë 50kg në prehje qëndron mbi patina dhe hedh një top me masë 100g para me shpejtësi 10m/s. Gjeni shpejtësinë që fiton sportisti.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhëna:</b> M = 50 kg; m = 100 g = 0.1 kg; v_topi = 10 m/s.</p>
                        <p><b>Zgjidhje:</b><br>Sistemi në fillim në prehje (p=0).<br>0 = M &middot; V + m &middot; v &rArr; V = -(m &middot; v) / M = -(0.1 &middot; 10) / 50 = -0.02 m/s. (Shenja minus tregon se sportisti lëviz prapa).</p>
                    </div>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri 3:</p>
                    <p>Një grimcë radioaktive në prehje, ndahet në 2 pjesë që lëvizin në kahe diametralisht të kundërta, në mënyrë të tillë që raporti i shpejtësive është v1 = 4v2. Gjeni raportin e masave të tyre.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhëna:</b> v1 = 4v2. Sistemi në prehje.</p>
                        <p><b>Zgjidhje:</b><br>m1 v1 = m2 v2 &rArr; m1 (4v2) = m2 v2 &rArr; m1 / m2 = 1/4. Masa e dytë është 4 herë më e madhe.</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni impulsin e trupit me mase 5 kg qe leviz me shpejtesi 4 m/s.", zgjidhja: "20", hapi1: "Zgjidh formulen: p = m * v", hapi2: "Zevendeso: p = 5 * 4", hapi3: "Llogarit: 20 kg·m/s" }
        },
        { 
            name: "13. Momenti i forcës", sym: "M", form: "M = F d", unit: "Nm", otherUnits: "", teTjera: "Në rrotullim orar Momenti merret (+) Në rrotullim Kundër orar Momenti merret(-).   Kushti i ekuilibrit të një trupi të ngurtë.    Shuma e momentit orar = Shuma e momentit kundërorar. M_Rezultante=0    M_cift=F1 x d_cift   ", nature: "Vektoriale", desc: "Efekti rrotullues i një force. ", phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", img: "https://cloudfront.jove.com/files/media/science-education/science-education-thumbs/14253.jpg", vid: "https://www.youtube.com/embed/D7xq8gNwMRQ", gameUrl: "/loja-momenti.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni momentin e forces nese F = 20 N dhe krahu d = 2 m.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100 mb-4">
                    <p class="font-bold text-green-800 mb-2">Pyetja 1:</p>
                    <p>Pse dorezat e dyerve i bëjnë në cep të derës e jo p.sh në mes?</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Përgjigje:</b> Dorezat vendosen në cep sepse duke rritur krahun e forcës (d), na duhet më pak forcë (F) për të krijuar të njëjtin moment rrotullues (M = F &middot; d).</p>
                    </div>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Pyetja 2:</p>
                    <p>Pse nuk rrëzohet kulla e Pizes në Itali? Përshkruaj deri sa mund të pjerësohet ajo e të mos bjerë?</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Përgjigje:</b> Kulla e Pizës nuk rrëzohet sepse vija vertikale që kalon nga qendra e saj e rëndesës bie brenda bazës së mbështetjes së kullës. Ajo do të rrëzohet vetëm nëse pjerësohet aq shumë sa kjo vijë të dalë jashtë kufijve të bazës.</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni momentin e forces nese F = 20 N dhe krahu d = 2 m.", zgjidhja: "40", hapi1: "Zgjidh formulen: M = F * d", hapi2: "Zevendeso: M = 20 * 2", hapi3: "Llogarit: 40 Nm" }
        },
        { 
            name: "14. Krahu i forcës", sym: "d", form: "d = x - x₀", unit: "m", otherUnits: "", teTjera: "ne gaze-> shtypja tregon goditjet e molekulave me faqet e enes.", nature: "Skalare", desc: "Largësia më e shkurtër (pingulja) nga boshti i rrotullimit deri te vija e veprimit të forcës.", phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", img: "https://www.datocms-assets.com/117510/1722388028-science_learning_hub_mechanical-advantage_v1.png", vid: "https://www.youtube.com/embed/H3lwoQJ_OZA", gameUrl: "/loja-krahu.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni krahun e forces nese momenti eshte 40 Nm dhe forca 20 N.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri:</p>
                    <p>Një djalë po hap portën duke ushtruar një forcë pingule 400N në skajin e saj 1m larg boshtit të rrotullimit. Gjeni sa duhet të jetë forca që duhet të ushtrojë një tjetër në mesin e saj që porta mos të hapet. (boshti i rrotullimit në skaj djathtas)</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhëna:</b> F1 = 400 N; d1 = 1 m; d2 = 0.5 m (mesi).</p>
                        <p><b>Zgjidhje:</b><br>F1 &middot; d1 = F2 &middot; d2 &rArr; 400 &middot; 1 = F2 &middot; 0.5 &rArr; F2 = 800 N.</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni krahun e forces nese momenti eshte 40 Nm dhe forca 20 N.", zgjidhja: "2", hapi1: "Zgjidh formulen nga M = F * d => d = M / F", hapi2: "Zevendeso: d = 40 / 20", hapi3: "Llogarit: 2 m" }
        },
        { 
            name: "15. Shtypja", sym: "P", form: "P = F / S", unit: "Pa", otherUnits: "atm, bar, mmHg, N/m²", teTjera: "Në gaze->shtypja tregon goditjet e molekulave me faqet e enës.  Tek lëngjet në thellësi  P=P_atmo+dgh   Ligji i  Paskalit-> Në të njëjtin nivel lëngu shtypja është e  njëjtë.  Cdo ndryshim shtypjeje në lëng përhapet njëlloj në të gjitha drejtimet.", nature: "Skalare", desc: "Forca që ushtrohet pingul mbi njësinë e sipërfaqes së një trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", img: "https://ademgllavica.wordpress.com/wp-content/uploads/2020/03/image-391.png?w=571", vid: "https://www.youtube.com/embed/LDGohoxWZY4", gameUrl: "/loja-shtypja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni shtypjen nese forca pingule eshte 100 N ne nje siperfaqe 2 m².</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni shtypjen nese forca pingule eshte 100 N ne nje siperfaqe 2 m².", zgjidhja: "50", hapi1: "Zgjidh formulen: P = F / S", hapi2: "Zevendeso: P = 100 / 2", hapi3: "Llogarit: 50 Pa" }
        }
    ],
    "Energjia": [
        { 
            name: "1. Energjia kinetike", sym: "Ek", form: "E_k = ½ m v²", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të lëvizjes së tij me një shpejtësi të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://img.jagranjosh.com/images/2024/July/1072024/kinetic-energy-definition-formula-derivation-types-examples-and-calculations.webp", vid: "https://www.youtube.com/embed/bSwFLr4kO6g",gameUrl:"/energjiakinetike1.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine kinetike te nje trupi me mase 2 kg qe leviz me shpejtesi 4 m/s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine kinetike te nje trupi me mase 2 kg qe leviz me shpejtesi 4 m/s.", zgjidhja: "16", hapi1: "Zgjidh formulen: Ek = 1/2 * m * v²", hapi2: "Zevendeso: Ek = 1/2 * 2 * 4²", hapi3: "Llogarit: 16 J" }
        },
        { 
            name: "2. Energjia potenciale gravitacionale", sym: "Ep", form: "E_p = m g h", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të pozicionit të tij në një fushë gravitacionale.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://www.meracalculator.com/images/blog/2020/11/1605613981potential-energy-png.png", vid: "https://www.youtube.com/embed/XCl0Dx8g5Pc" , gameUrl:"/energjiapotencialegravitacionale.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine potenciale te nje trupi 2 kg ne lartesine 5 m (merr g=10).</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine potenciale te nje trupi 2 kg ne lartesine 5 m (merr g=10).", zgjidhja: "100", hapi1: "Zgjidh formulen: Ep = m * g * h", hapi2: "Zevendeso: Ep = 2 * 10 * 5", hapi3: "Llogarit: 100 J" }
        },
        { 
            name: "3. Energjia potenciale elastike", sym: "Ee", form: "E_e = ½ k x²", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në një trup elastik si pasojë e shformimit të tij.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://energyeducation.ca/wiki/images/1/11/Mxcpcrossbow-elastic-potential.gif", vid: "https://www.youtube.com/embed/CvJHBOssY5Q" , gameUrl:"/energjia potenciale elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine potenciale elastike nese k = 200 N/m dhe x = 0.1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine potenciale elastike nese k = 200 N/m dhe x = 0.1 m.", zgjidhja: "1", hapi1: "Zgjidh formulen: Ee = 1/2 * k * x²", hapi2: "Zevendeso: Ee = 1/2 * 200 * 0.1²", hapi3: "Llogarit: 100 * 0.01 = 1 J" }
        },
        { 
            name: "4. Energjia mekanike", sym: "Em", form: "E_m = E_k + E_p", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe asaj potenciale të një sistemi fizik.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://engineerfix.com/wp-content/uploads/2021/04/Mechanical-Energy.png", vid: "https://www.youtube.com/embed/4bNajhqV8ws" , gameUrl:"energjia mekanike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni energjine mekanike totale nese Ek = 10 J dhe Ep = 20 J.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri:</p>
                    <p>Trupi me masë 5kg ndodhet në lartësi 20m nga toka. Ferkimi me ajrin është i papërfillshëm. Gjeni: a) Energjinë kinetike, potenciale dhe mekanike në këtë gjendje; b) Energjinë mekanike, potenciale dhe kinetike kur zbret me 5m; c) Në ç’lartësi nga toka energjia kinetike barazohet me atë potenciale.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhëna:</b> m = 5kg, h = 20m.</p>
                        <p><b>Zgjidhje:</b><br>
                        a) Ep = mgh = 5 &middot; 10 &middot; 20 = 1000 J. Ek = 0. Emek = 1000 J.<br>
                        b) Zbret me 5m &rArr; lartësia e re h' = 15m.<br>
                        Ep = 5 &middot; 10 &middot; 15 = 750 J.<br>
                        Ek = Emek - Ep = 1000 - 750 = 250 J.<br>
                        c) Ek = Ep &rArr; mgh = Emek / 2 &rArr; 50h = 500 &rArr; h = 10 m.</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine mekanike totale nese Ek = 10 J dhe Ep = 20 J.", zgjidhja: "30", hapi1: "Zgjidh formulen: Em = Ek + Ep", hapi2: "Zevendeso: Em = 10 + 20", hapi3: "Llogarit: 30 J" }
        },
        { 
            name: "5. Puna", sym: "A", form: "A = F s cosθ<br>A_G = m g h<br>A_pl = ΔE_k", unit: "J", otherUnits: "cal,", teTjera: "Kur forca ndihmon zhvendosjen  A>0.     Kur forca pengon zhvendosjen A<0.  Kur forca nuk ndikon A=0.      Puna e forcave konservative në një rrugë të mbyllur=0.    Puna e forcave konservative nuk varet nga forma e rrugës.", nature: "Skalare", desc: "Energjia e transferuar te një trup ose nga një trup përmes veprimit të një force gjatë një zhvendosjeje.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://williamqin.com/assets/blog/Energy%20Blog%20Graphics/work.jpg", vid: "https://www.youtube.com/embed/G86VPx8ywyU" , gameUrl:"/puna.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni punen e nje force 10 N qe e zhvendos trupin 5 m ne te njejtin drejtim.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100 mb-4">
                    <p class="font-bold text-green-800 mb-2">Pyetja 1:</p>
                    <p>Fjala “punë” në jetën e përditshme dhe në fizikë. Bëj dallimin</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Dallimi:</b> Në jetën e përditshme "punë" quajmë çdo angazhim (edhe mendor). Në fizikë, kryhet punë vetëm kur një forcë shkakton zhvendosje të trupit në drejtimin e saj.</p>
                    </div>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Pyetja 2:</p>
                    <p>A kryen punë forca qendërsynuese?</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Përgjigje:</b> Jo, forca qendërsynuese nuk kryen punë sepse është gjithmonë pingul me zhvendosjen momentale (W = F &middot; s &middot; cos(90&deg;) = 0).</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni punen e nje force 10 N qe e zhvendos trupin 5 m ne te njejtin drejtim.", zgjidhja: "50", hapi1: "Zgjidh formulen: A = F * s * cos(0)", hapi2: "Zevendeso: A = 10 * 5 * 1", hapi3: "Llogarit: 50 J" }
        },
        { 
            name: "6. Fuqia", sym: "P", form: "P = A / t<br>P = F v", unit: "W", otherUnits: "1W=1J/S, 1 Kuaj fuqi(HP)=745.7W ", teTjera: "", nature: "Skalare", desc: "Puna e kryer ne njësine e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://i.ytimg.com/vi/irSJL1U_gOQ/maxresdefault.jpg", vid: "https://www.youtube.com/embed/aHKEy7Oa0-A" , gameUrl:"/fuqia1.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni fuqine nese kryhet puna 100 J per 5 s.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri:</p>
                    <p>Mbi trupin me masë 10kg vepron forca horizontale 100N dhe trupi kryen lëvizje drejtvizore të njëtrajtshme në dysheme horizontale ku zhvendoset me 10m për 5s. Gjeni: a) Punën e forcës tërheqëse; b) Punën e kryer nga forca e rëndesës dhe e kundërveprimit; c) Fuqinë e forcës tërheqëse; d) Forcën rezultante dhe forcën e fërkimit; e) Punën e forcës së fërkimit.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhëna:</b> m = 10kg, F = 100N, s = 10m, t = 5s, v = konstante.</p>
                        <p><b>Zgjidhje:</b><br>
                        a) WF = F &middot; s = 100 &middot; 10 = 1000 J.<br>
                        b) Puna e rëndesës dhe kundërveprimit është 0 (janë pingul me lëvizjen).<br>
                        c) P = W / t = 1000 / 5 = 200 W.<br>
                        d) Frez = 0 (sepse lëvizja është e njëtrajtshme). Ffërkimit = F = 100 N.<br>
                        e) Wff = -Ff &middot; s = -100 &middot; 10 = -1000 J.</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fuqine nese kryhet puna 100 J per 5 s.", zgjidhja: "20", hapi1: "Zgjidh formulen: P = A / t", hapi2: "Zevendeso: P = 100 / 5", hapi3: "Llogarit: 20 W" }
        },
        { 
            name: "7. Energjia e brendshme termike", sym: "U", form: "U = 3/2 n R T (1 atomike)<br>U = 5/2 n R T (2 atomike) ", unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe potenciale të të gjitha grimcave që përbëjnë një sistem.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg", vid: "https://www.youtube.com/embed/mm_vaHqJvfw" ,gameUrl:"/energjia e brendshme termike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni energjine e brendshme per 2 mole gaz 1 atomik ne temperaturen 100 K. R=8.31.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine e brendshme per 2 mole gaz 1 atomik ne temperaturen 100 K. R=8.31.", zgjidhja: "2493", hapi1: "Zgjidh formulen: U = 3/2 * n * R * T", hapi2: "Zevendeso: U = 3/2 * 2 * 8.31 * 100", hapi3: "Llogarit: 3 * 831 = 2493 J" }
        },
        { 
            name: "8. Energjia elektrike", sym: "Ee", form: "E = P t", unit: "J", otherUnits: "kWh", teTjera: "", nature: "Skalare", desc: "Energjia që mat bashkëveprimin elektrik.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://electricalampere.com/wp-content/uploads/2025/08/Electrical-Energy-Sources-%E2%80%93-Types-Examples-and-How-Electricity-is-Produced.png", vid: "https://www.youtube.com/embed/LdYNNRKgP9U" , gameUrl:"/energjia elektrike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni energjine elektrike nese pajisja ka fuqi 100 W dhe punon per 10 s.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri:</p>
                    <p>Ne rezistencen 10Ω kalon rryma 2.2A gjate 25s. Njehsoni: a) sasine e nxhetesise qe çlirohet ne kete rezistence; b) kohen gjate se ciles e njejta nxehtesi do te çlirohej ne nje rezistence tjeter ku kalon rryma 0.8A dhe tensioni eshte 24V.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhënat:</b> R = 10Ω, I = 2.2A, t = 25s, Q¹ = ?, I² = 0.8A, U² = 24V, t² = ?, Q¹ = Q²</p>
                        <p><b>Zgjidhje:</b><br>
                        Q¹ = I²Rt<br>
                        Q¹ = 2.2² &times; 10 &times; 25 = 1210J<br>
                        R² = U² / I² = 24V / 0.8A = 30Ω<br>
                        Q¹ = Q² = 1210J<br>
                        t² = Q² / ((I²)² &times; R²)<br>
                        t² = 1210 / ((0.8)² &times; 30) = 63s</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni energjine elektrike nese pajisja ka fuqi 100 W dhe punon per 10 s.", zgjidhja: "1000", hapi1: "Zgjidh formulen: E = P * t", hapi2: "Zevendeso: E = 100 * 10", hapi3: "Llogarit: 1000 J" }
        },
        { 
            name: "9. Energjia kimike", sym: "E_kim", form: "—", unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në lidhjet kimike të substancave, e cila çlirohet gjatë reaksioneve.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://www.sciencefacts.net/wp-content/uploads/2022/07/Chemical-Energy.jpg", vid: "https://www.youtube.com/embed/Iqwrl79a55A" , gameUrl:"/energjia kimike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Nese 1 gram i nje lende jep 4 J, sa energji japin 5 gram?</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Nese 1 gram i nje lende jep 4 J, sa energji japin 5 gram?", zgjidhja: "20", hapi1: "Kupto lidhjen propozicionale: E = sasia * vlera per njesi", hapi2: "Zevendeso: E = 5 * 4", hapi3: "Llogarit: 20 J" }
        }
    ],
    "Elektriciteti": [
        { 
            name: "1. Intensiteti i rrymes", sym: "I", form: "I = q / t<br>I = U / R", unit: "A", otherUnits: "1A=1C/S", teTjera: " Kahu tradicional i Intensitetit merret kahu i lëvizjes së ngarkesës pozitive , pra kahu i kundërt i lëvizjes së elektroneve.", nature: "Skalare", desc: "Sasia e ngarkesës elektrike që kalon nëpër seksionin tërthor të përcjellësit në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://i.ytimg.com/vi/_ZpqdJJ5M9U/maxresdefault.jpg", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/Loja inteciteti i rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni intensitetin I nese kalon nje ngarkese q = 20 C per kohen t = 4 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni intensitetin I nese kalon nje ngarkese q = 20 C per kohen t = 4 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: I = q / t", hapi2: "Zevendeso: I = 20 / 4", hapi3: "Llogarit: 5 A" }
        },
        { 
            name: "2. Rezistenca elektrike", sym: "R", form: "R = U / I<br>R = ρ × L / S ", unit: "Ω", otherUnits: "1Ω=1 V/A", teTjera: " Lidhja në seri R=R₁ + R₂  Lidhja në paralel 1/R=1/R₁ + 1/R₂.   Rezistenca varet nga temperatura.  ρ=ρo{1+∝(t-to)  (to=20℃)  ρo→ Resistencia specified në 20℃.     ∝→ koeficienti I bymimit termik.", nature: "Skalare", desc: "Pengesa qe lënda i paraqet kalimit të rrymës elektrike.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electrical-Resistance-1.png", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/loje rezistenca e rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni rezistencen R nese tensioni eshte 12 V dhe rryma eshte 2 A.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri:</p>
                    <p>Jane lidhur 4 llamba me fuqi secila 40W ne seri ne tension 200V: a)Vizato nje skeme; b)gjej fuqine e plote; c)gjeni rrymen qe kalon ne gjdo llambe; d) gjeni rezistencen ekuivalente te llambave; e) gjeni tensionin ne gjdo llambe.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhënat:</b> P1,2,3,4 = 40W, Up = 200V, Pp = ?, I¹ = ?, I² = ?, I³ = ?, I⁴ = ?, Rek = ?, U¹ = ?, U² = ?, U³ = ?, U⁴ = ?</p>
                        <p><b>Zgjidhje:</b><br>
                        P = 40 + 40 + 40 + 40<br>
                        Pp = 160W<br>
                        Lidhje ne seri: Ikr = I¹ = I² = I³ = I⁴<br>
                        Up = U¹ + U² + U³ + U⁴<br>
                        Rek = R¹ + R² + R³ + R⁴<br>
                        Ikr = P / U = 160W / 200V = 0.8A<br>
                        Ikr = I¹ = I² = I³ = I⁴ = 0.8A<br>
                        Up / 4 = 200 / 4 = 50V<br>
                        U¹ = U² = U³ = U⁴ = 50V<br>
                        Rek = Up / I = 200 / 0.8 = 250Ω<br>
                        Rek / 4 = 250Ω / 4 = 62.5Ω<br>
                        R¹ = R² = R³ = R⁴ = 62.5Ω</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni rezistencen R nese tensioni eshte 12 V dhe rryma eshte 2 A.", zgjidhja: "6", hapi1: "Zgjidh formulen: R = U / I", hapi2: "Zevendeso: R = 12 / 2", hapi3: "Llogarit: 6 Ω" }
        },
        { 
            name: "3. Fuqia e rrymes", sym: "P", form: "P = U I<br>P = I² × R<br>P = U² / R", unit: "W", otherUnits: "1W= 1 J/S", teTjera: "", nature: "Skalare", desc: "Energjia elektrike në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/dccircuits-dcp1.gif", vid: "https://www.youtube.com/embed/LdYNNRKgP9U", gameUrl: "/loje fuqia e rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni fuqine P nese tensioni U = 10 V dhe rryma I = 5 A.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fuqine P nese tensioni U = 10 V dhe rryma I = 5 A.", zgjidhja: "50", hapi1: "Zgjidh formulen: P = U * I", hapi2: "Zevendeso: P = 10 * 5", hapi3: "Llogarit: 50 W" }
        },
        { 
            name: "4. Tensioni", sym: "U", form: "U = I R", unit: "V", otherUnits: "1V=1AΩ", teTjera: "", nature: "Skalare", desc: "diferenca potencialesh ndërmjet 2 pikave. U=V₁-V₂", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/9VBatteryWithMeter.jpg/250px-9VBatteryWithMeter.jpg", vid: "https://www.youtube.com/embed/v6uEbMc5HaU", gameUrl: "/loja tensioni (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni tensionin U nese rryma eshte 3 A dhe rezistenca eshte 4 Ω.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni tensionin U nese rryma eshte 3 A dhe rezistenca eshte 4 Ω.", zgjidhja: "12", hapi1: "Zgjidh formulen: U = I * R", hapi2: "Zevendeso: U = 3 * 4", hapi3: "Llogarit: 12 V" }
        },
        { 
            name: "5. Ngarkese elektrike", sym: "q", form: "q = n e<br>q = I t", unit: "C", otherUnits: "", teTjera: "", nature: "Skalare", desc: "Sasi elektronesh që merr ose jep trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.physicsclassroom.com/Class/estatics/u8l1c1.gif", vid: "https://www.youtube.com/embed/kq34-EKUWUw", gameUrl: "/ngarkesekake.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni ngarkesen q nese intensiteti eshte 2 A dhe koha 5 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni ngarkesen q nese intensiteti eshte 2 A dhe koha 5 s.", zgjidhja: "10", hapi1: "Zgjidh formulen: q = I * t", hapi2: "Zevendeso: q = 2 * 5", hapi3: "Llogarit: 10 C" }
        },
        { 
            name: "6. Intensiteti i fushes elektrike", sym: "E", form: "E = F / q<br>E = k q / e r²<br>E = V / d", unit: "N/C", otherUnits: "V/m", teTjera: " Parimi i mbivendosjes së fushave E=E₁+E₂ mbledhje vektoriale.", nature: "Vektoriale", desc: "Tregon forcën mbi ngarkesën provë ne 1 pikë te fushës.", phetUrl: "https://phet.colorado.edu/en/simulations/charges-and-fields", img: "https://www.physicsclassroom.com/Class/estatics/u8l4a1.gif", vid: "https://www.youtube.com/embed/mRDx78oJisY", gameUrl: "/loje intenciteti i fushes elektrike (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni fushen elektrike E nese forca eshte 10 N per ngarkesen 2 C.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fushen elektrike E nese forca eshte 10 N per ngarkesen 2 C.", zgjidhja: "5", hapi1: "Zgjidh formulen nga E=F/q", hapi2: "Zevendeso: E = 10 / 2", hapi3: "Llogarit: 5 N/C" }
        },
        { 
            name: "7. Kapaciteti elektrik", sym: "q", form: "C = q V<br>C = q / U (për kondensator)<br>C = ε εο S / d (për kondensator të rrafshët)", unit: "1F=1C/V", otherUnits: "1F=1C/V", teTjera: " Lidhje në seri 1/C=1/C₁+1/C₂.  Lidhje në paralel C=C₁+C₂", nature: "Skalare", desc: "Tregon aftësine për të nxënë ngarkesa.", phetUrl: "https://phet.colorado.edu/en/simulations/capacitor-lab-basics", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/capacitor-cap1.gif", vid: "https://www.youtube.com/embed/dXSJ0xuN14g", gameUrl: "/loja-kapaciteti.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni kapacitetin nese ngarkesa q = 10 C dhe tensioni V = 2 V.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni kapacitetin nese ngarkesa q = 10 C dhe tensioni V = 2 V.", zgjidhja: "5", hapi1: "Zgjidh formulen: C = q / V", hapi2: "Zevendeso: C = 10 / 2", hapi3: "Llogarit: 5 F" }
        },
        { 
            name: "8. Potenciali elektrik", sym: "q", form: "V = W_p / q₀<br>V = k q / r", unit: "volt(V) 1V=1J/C", otherUnits: "-", teTjera: "Formula :V= kq/εr, V=V₁+V₂.   V pozitive për ngarkesën (+).   V negative për ngarkesën (-)   Vtokës=0", nature: "Skalare", desc: "Tregon energjine potenciale te ngarkesës provë ne 1 pikë te fushës.", phetUrl: "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electric-Potential.png", vid: "https://www.youtube.com/embed/16Z_QNZmxOs", gameUrl: "/potencialipipi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni potencialin V nese puna eshte 20 J per ngarkesen 4 C.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni potencialin V nese puna eshte 20 J per ngarkesen 4 C.", zgjidhja: "5", hapi1: "Zgjidh formulen: V = W / q", hapi2: "Zevendeso: V = 20 / 4", hapi3: "Llogarit: 5 V" }
        }
    ],
    "Magnetizmi": [
        { 
            name: "1. Induksioni magnetik ", sym: "B", form: "B = F_max / (I L)", unit: "T", otherUnits: "G (Gauss), 1T=1N/Am", teTjera: " Parimi I mbivendosjes së fushave  B= B₁+ B₂ ( mbledhje vektoriale)   Afër përcjellësit drejtvizor  B= μo I/2πd.  Në qëndër të përcjellësit rrethor B= μoI/ 2R.  Bobina e ngushtë B=μo NI/2R.  Solenoid  B= μο NI/l", nature: "Vektoriale", desc: "Madhësia vektoriale që karakterizon fushën magnetike në çdo pikë të saj.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://cdn.slidesharecdn.com/ss_thumbnails/induksioni-elektromagnetikcopycopy-231216203840-d38d7cd1-thumbnail.jpg?width=640&height=640&fit=bounds", vid: "https://www.youtube.com/embed/BXBhoQG73ZM", gameUrl: "/summagneticshiiii.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni induksionin B nese forca maximale eshte 10 N, rryma 2 A dhe gjatesia 1 m.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni induksionin B nese forca maximale eshte 10 N, rryma 2 A dhe gjatesia 1 m.", zgjidhja: "5", hapi1: "Zgjidh formulen: B = Fmax / (I * L)", hapi2: "Zevendeso: B = 10 / (2 * 1)", hapi3: "Llogarit: 5 T" }
        },
        { 
            name: "2. Forca e Amperit", sym: "F", form: "F = B I L sin(a)", unit: "N", otherUnits: "", teTjera: " Krahu I Forcës së Amperit gjendet me rregullin e dorës së majtë.  Për 2 përcjellës drejtvizorë shumë të gjatë  F/∆l= μo I₁I₂/2πd", nature: "Vektoriale", desc: "Forca me të cilën fusha magnetike vepron mbi një përcjellës me rrymë të vendosur në të.", phetUrl: "https://phet.colorado.edu/en/simulation/magnets-and-electromagnets", img: "https://c8.alamy.com/comp/2AFR2XW/the-principles-of-physics-an-ampere-strength-of-thecurrent-465-galvanometer-this-is-an-instrument-for-measuringcurrent-strength-by-means-of-the-deflection-of-a-magneticneedle-when-placed-in-the-field-of-the-current-it-is-so-con-structed-that-either-the-deflection-angle-itself-or-somefunction-of-it-is-proportional-to-the-current-strength-466-thomsons-mirror-galvanottieter-a-simplified-forniis-shown-in-fig-386-and-the-complete-instrument-is-shownin-fig-386-insulated-wire-is-wound-on-a-bobbin-a-with-in-this-bobbin-is-hung-by-a-silk-fiber-a-little-circular-concavemirror-to-2AFR2XW.jpg", vid: "https://www.youtube.com/embed/xMIEpXxiyQM", gameUrl: "/lorencpipiundkaki.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
                <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                    <p class="font-bold text-blue-800 mb-2">Ushtrim:</p>
                    <p>Gjeni forcen e Amperit nese B=2 T, I=3 A, L=1 m dhe pingul me fushen (sin90=1).</p>
                </div>
                <div class="bg-green-50 p-4 rounded-xl border border-green-100">
                    <p class="font-bold text-green-800 mb-2">Ushtrimi i ri:</p>
                    <p>Gjeni forcen magnetike te Amperit qe vepron mbi percjellesin e gjate 20 cm me rryme 0.1A nese induksioni magnetik, pingul me te e ka vleren 2T.</p>
                    <div class="text-sm mt-2 border-t pt-2 border-green-200">
                        <p><b>Të dhënat:</b> l = 20cm = 0.2m, I = 0.1A, B = 2T, Fa = ?</p>
                        <p><b>Zgjidhje:</b><br>
                        Fa = B &times; I &times; l &times; sinL<br>
                        Fa = 2 &times; 0.1 &times; 20 &times; 90<br>
                        Fa = 0.04N</p>
                    </div>
                </div>
            </div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni forcen e Amperit nese B=2 T, I=3 A, L=1 m dhe pingul me fushen (sin90=1).", zgjidhja: "6", hapi1: "Zgjidh formulen: F = B * I * L * sin(a)", hapi2: "Zevendeso: F = 2 * 3 * 1 * 1", hapi3: "Llogarit: 6 N" }
        },
        { 
            name: "3. Fluksi Magnetik", sym: "Φ ", form: "Φ = B S cos(a)", unit: "Wb", otherUnits: "Mx (Maxwell), 1W=1T×m²", teTjera: " Kur ≠ B  ∆Φ=∆B x Scos∝.      Kur ≠ S   ∆Φ=B∆S cos∝.      Kur ≠ ∝   ∆Φ= BS(cosx₂ - cosx₁)  ", nature: "Skalare", desc: "Numri i vijave të forcës së fushës magnetike pingul me një sipërfaqe të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Surface_normal.png/330px-Surface_normal.png", vid: "https://www.youtube.com/embed/60h8RAqX3Yc", gameUrl: "/smbajmendca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni fluksin magnetik nese B=4 T, S=2 m² dhe cos(a)=1.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni fluksin magnetik nese B=4 T, S=2 m² dhe cos(a)=1.", zgjidhja: "8", hapi1: "Zgjidh formulen: Φ = B * S * cos(a)", hapi2: "Zevendeso: Φ = 4 * 2 * 1", hapi3: "Llogarit: 8 Wb" }
        },
        { 
            name: "4. F.e.m. e induktuar", sym: "ε", form: "ε = -N (ΔΦ / Δt)", unit: "V", otherUnits: "mV", teTjera: "", nature: "Skalare", desc: "Tensioni elektrik që lind në një qark të mbyllur si pasojë e ndryshimit të fluksit magnetik.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://i.ytimg.com/vi/CAKnbju_0jo/sddefault.jpg", vid: "https://www.youtube.com/embed/FoXIrSy5akw", gameUrl: "/halelujahhhhh.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left"><div class="bg-blue-50 p-4 rounded-xl border border-blue-100"><p class="font-bold text-blue-800 mb-2">Ushtrim:</p><p>Gjeni vleren absolute te f.e.m nese N=1, ndryshimi i fluksit eshte 10 Wb per koken 2 s.</p></div></div>`,
            ushtrimInteraktiv: { pyetja: "Gjeni vleren absolute te f.e.m nese N=1, ndryshimi i fluksit eshte 10 Wb per koken 2 s.", zgjidhja: "5", hapi1: "Zgjidh formulen: ε = N * ΔΦ / Δt (vlere absolute)", hapi2: "Zevendeso: ε = 1 * 10 / 2", hapi3: "Llogarit: 5 V" }
        },
        { 
            name: "5. Rryme e induktuar", sym: "Iin", form: "I = ε / R", unit: "A", otherUnits: "mA", teTjera: "", nature: "Skalare", desc: "Rryma elektrike që lind në një përcjellës të mbyllur kur ai ndodhet në një fushë magnetike të ndryshueshme.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk5jc32xKcLRo2y10dfbSwmELAekKYKdSSw&s", vid: "https://www.youtube.com/embed/fOeWUbvqRgY", gameUrl: "/halelujahhhhh.html",
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
            form: "E = h f", 
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
            teTjera: "E = A_d + E_k është ekuacioni i Ajnshtajnit për fotoefektin. Për E ≥ A_d ndodh fotoefekti.", 
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
              hapi1: "Zgjidh formulen: A_d = hf = hc / λ  =>  λ = hc / A_d",
              hapi2: "Zevendeso vlerat: A_d = 3 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J. λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (4.8 × 10⁻¹⁹)",
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
            form: "λ = h / (m v)", 
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
              pyetja: "Nje elektron ka energji kinetike E_k = 2 eV. Gjej gjatesine e vales se De Brojit. (Jep pergjigjen ne nm)",
              zgjidhja: "0.87",
              hapi1: "Zgjidh formulen: λ = h / (mv) dhe E_k = mv² / 2 => v = √(2E_k / m)",
              hapi2: "Zevendeso vlerat: λ = h / √(2mE_k)",
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
            form: "T<sub>1/2</sub> = ln(2) / λ", 
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
              hapi1: "Zgjidh formulen: N = N_0 / 2^(t/T)",
              hapi2: "Zevendeso vlerat: Pas 1 periode (2 ore): N = N_0 / 2. Pas 2 periodash (4 ore = 2T).",
              hapi3: "Llogarit: N = (N_0 / 2) / 2 = N_0 / 4. Pra ka mbetur 1/4"
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
            form: "E = m c²", 
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
    }
};
