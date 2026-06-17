import { PhysicsData, Simulation, PhysicsGame } from './types';

export const ALL_PHYSICS_DATA: PhysicsData = {
    "Kinematika": [
        {
            name: "1. Koordinata",
            sym: "x, y, z",
            form: "x = x₀ + vt (L.D.NJ)\nx = x₀ + v₀t + at²/2 (L.D.Nj.ND)",
            unit: "m",
            otherUnits: "miles (1km = 0.621 milje), foot (1ft = 30.48cm), inch (1ft = 12 inch)",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Pozicioni i një pike materiale në hapësirë në raport me një sistem referimi të zgjedhur.",
            phetUrl: "https://phet.colorado.edu/en/simulation/graphing-lines",
            img: "https://d20khd7ddkh5ls.cloudfront.net/img11_66.jpg",
            vid: "https://www.youtube.com/embed/MCDL8EXYIFo",
            gameUrl: "/loja-koordinata.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në grafikun e koordinatës-kohë për një trup që lëviz njëtrajtësisht, koordinata fillestare është x₀=2 m dhe koordinata pas t=5 s është x=22 m. Gjeni shpejtësinë e trupit.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh formulën: x = x₀ + vt ⇒ v = (x - x₀)/t</li>
      <li>Zëvendëso: v = (22 - 2)/5</li>
      <li>Llogarit: v = 4 m/s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në grafikun e koordinatës-kohë për një trup që lëviz njëtrajtësisht, koordinata fillestare është x₀=2 m dhe koordinata pas t=5 s është x=22 m. Gjeni shpejtësinë e trupit.",
                zgjidhja: "4",
                hapi1: "Zgjidh formulën: x = x₀ + vt ⇒ v = (x - x₀)/t",
                hapi2: "Zëvendëso: v = (22 - 2)/5",
                hapi3: "Llogarit: v = 4 m/s"
            }
        },
        {
            name: "2. Zhvendosja",
            sym: "Δx",
            form: "Δx = vt\nΔx = v₀t + at²/2\nv² - v₀² = 2aΔx\nΔx = (v + v₀)t / 2",
            unit: "m",
            otherUnits: "miles (1 milje = 1.609 km), 1 pash = 1.5m, foot (1ft = 30.48cm), inch (1 inch = 2.54 cm)",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Vektori që bashkon pozicionin fillestar me atë përfundimtar të trupit gjatë lëvizjes.",
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man",
            img: "https://www.sciencefacts.net/wp-content/uploads/2022/10/Displacement-Formula.jpg",
            vid: "https://www.youtube.com/embed/m4jrhAckbK0",
            gameUrl: "/loja-zhvendosja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Një makinë lëviz me shpejtësi v=10 m/s për t=5 s, pastaj kthehet mbrapa me të njëjtën shpejtësi për 2 s. Gjeni zhvendosjen totale (merrni kahin e parë si pozitiv).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Δx₁ = v·t = 10·5 = 50 m; Δx₂ = -10·2 = -20 m</li>
      <li>Zëvendëso: Δx_total = 50 - 20</li>
      <li>Llogarit: Δx = 30 m</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Një makinë lëviz me shpejtësi v=10 m/s për t=5 s, pastaj kthehet mbrapa me të njëjtën shpejtësi për 2 s. Gjeni zhvendosjen totale (merrni kahin e parë si pozitiv).",
                zgjidhja: "30",
                hapi1: "Zgjidh: Δx₁ = v·t = 10·5 = 50 m; Δx₂ = -10·2 = -20 m",
                hapi2: "Zëvendëso: Δx_total = 50 - 20",
                hapi3: "Llogarit: Δx = 30 m"
            }
        },
        {
            name: "3. Rruga e përshkuar",
            sym: "l",
            form: "l = vt (L.D.NJ)\nl = 2ΠR (L.RR.NJ)",
            unit: "m",
            otherUnits: "cm, km",
            teTjera: "",
            nature: "Skalare",
            desc: "Gjatësia e trajektores së përshkuar nga trupi gjatë një intervali kohe.",
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man",
            img: "https://i.ytimg.com/vi/XS4QMCYGgtM/maxresdefault.jpg",
            vid: "https://www.youtube.com/embed/m4jrhAckbK0",
            gameUrl: "/loja-rruga.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Një biçikletë lëviz me shpejtësi konstante 5 m/s për 4 s, pastaj bën një rreth rrethore me rreze 2 m (rrethi i plotë). Gjeni rrugën e përgjithshme të përshkuar. (π≈3.14)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Rruga lineare: l₁ = 5·4 = 20 m; Rruga rrethore: l₂ = 2πR = 2·3.14·2 = 12.56 m</li>
      <li>Zëvendëso: l_total = 20 + 12.56</li>
      <li>Llogarit: l ≈ 32.6 m</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Një biçikletë lëviz me shpejtësi konstante 5 m/s për 4 s, pastaj bën një rreth rrethore me rreze 2 m (rrethi i plotë). Gjeni rrugën e përgjithshme të përshkuar. (π≈3.14)",
                zgjidhja: "32.6",
                hapi1: "Rruga lineare: l₁ = 5·4 = 20 m; Rruga rrethore: l₂ = 2πR = 2·3.14·2 = 12.56 m",
                hapi2: "Zëvendëso: l_total = 20 + 12.56",
                hapi3: "Llogarit: l ≈ 32.6 m"
            }
        },
        {
            name: "4. Koha",
            sym: "t",
            form: "t = l / v",
            unit: "s",
            otherUnits: "min, ore, ditë",
            teTjera: "",
            nature: "Skalare",
            desc: "Madhësia që përcakton kohëzgjatjen e një procesi fizik ose renditjen e ngjarjeve.",
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man",
            img: "https://rhapsodyinbooks.wordpress.com/wp-content/uploads/2017/05/worldline.jpg?w=584&h=519",
            vid: "https://www.youtube.com/embed/Rso3Es2cFOc",
            gameUrl: "/loja-koha.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një notar përshkon pishinën 30 m në vajtje për 25 s dhe në kthim për 35 s. Gjeni kohën totale të lëvizjes.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: t_total = t_vajtje + t_kthim</li>
      <li>Zëvendëso: t = 25 + 35</li>
      <li>Llogarit: t = 60 s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një notar përshkon pishinën 30 m në vajtje për 25 s dhe në kthim për 35 s. Gjeni kohën totale të lëvizjes.",
                zgjidhja: "60",
                hapi1: "Zgjidh: t_total = t_vajtje + t_kthim",
                hapi2: "Zëvendëso: t = 25 + 35",
                hapi3: "Llogarit: t = 60 s"
            }
        },
        {
            name: "5. Interval kohor",
            sym: "Δt",
            form: "Δt = t - t₀",
            unit: "s",
            otherUnits: "min, ore, ditë",
            teTjera: "",
            nature: "Skalare",
            desc: "Diferenca midis dy çasteve kohore të njëpasnjëshme.",
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man",
            img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png",
            vid: "https://www.youtube.com/embed/HyyGiVpSk6c",
            gameUrl: "/loja-intervali.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një valë zëri me frekuencë 440 Hz prodhon një ngjeshje çdo 1/440 s. Gjeni intervalin kohor midis dy ngjeshjeve të njëpasnjëshme.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Δt = 1/f</li>
      <li>Zëvendëso: Δt = 1/440</li>
      <li>Llogarit: Δt ≈ 2.27×10⁻³ s ≈ 0.0023 s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një valë zëri me frekuencë 440 Hz prodhon një ngjeshje çdo 1/440 s. Gjeni intervalin kohor midis dy ngjeshjeve të njëpasnjëshme.",
                zgjidhja: "0.0023",
                hapi1: "Zgjidh: Δt = 1/f",
                hapi2: "Zëvendëso: Δt = 1/440",
                hapi3: "Llogarit: Δt ≈ 2.27×10⁻³ s ≈ 0.0023 s"
            }
        },
        {
            name: "6. Shpejtësia mesatare",
            sym: "Vmes",
            form: "v.mes = l / t",
            unit: "m/s",
            otherUnits: "km/h",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Raporti i zhvendosjes me intervalin e kohës gjatë të cilit ka ndodhur kjo zhvendosje.",
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man",
            img: "https://study.com/cimages/videopreview/screencapture_measuringspeed_140291.jpg",
            vid: "https://www.youtube.com/embed/UVKbAAw07Bg",
            gameUrl: "/loja-shpejtesia-mesatare.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një notar përshkon 30 m vajtje për 25 s dhe 30 m kthim për 35 s. Gjeni shpejtësinë mesatare të lëvizjes për gjithë rrugën (vlerë absolute).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Rruga totale: l = 30 + 30 = 60 m; koha totale: t = 25 + 35 = 60 s</li>
      <li>Zëvendëso: v_mes = 60/60</li>
      <li>Llogarit: v_mes = 1 m/s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një notar përshkon 30 m vajtje për 25 s dhe 30 m kthim për 35 s. Gjeni shpejtësinë mesatare të lëvizjes për gjithë rrugën (vlerë absolute).",
                zgjidhja: "1",
                hapi1: "Rruga totale: l = 30 + 30 = 60 m; koha totale: t = 25 + 35 = 60 s",
                hapi2: "Zëvendëso: v_mes = 60/60",
                hapi3: "Llogarit: v_mes = 1 m/s"
            }
        },
        {
            name: "7. Shpejtësia e castit",
            sym: "v",
            form: "v = Δx / Δt",
            unit: "m/s",
            otherUnits: "km/h  c = 3×10⁸ m/s është shpejtësia e dritës në zbrazëti (shpejtësia më e madhe në natyrë)",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Shpejtësia e trupit në një çast të caktuar të kohës ose në një pikë të dhënë të trajektores.",
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man",
            img: "https://upload.wikimedia.org/wikipedia/sq/e/e2/Shpejt%C3%ABsia_e_castit.png",
            vid: "https://www.youtube.com/embed/9fWp9nlEJHo",
            gameUrl: "/loja-shpejtesia-castit.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, grafiku shpejtësi-kohë tregon se për 0-2 s trupi nga 0 arrin 8 m/s, dhe për 2-6 s mbetet konstant 8 m/s. Gjeni shpejtësinë e çastit në t=4 s.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Analizo grafikun: për 2-6 s, shpejtësia është konstante 8 m/s</li>
      <li>Zëvendëso: v(4) = 8 m/s</li>
      <li>Llogarit: v = 8 m/s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, grafiku shpejtësi-kohë tregon se për 0-2 s trupi nga 0 arrin 8 m/s, dhe për 2-6 s mbetet konstant 8 m/s. Gjeni shpejtësinë e çastit në t=4 s.",
                zgjidhja: "8",
                hapi1: "Analizo grafikun: për 2-6 s, shpejtësia është konstante 8 m/s",
                hapi2: "Zëvendëso: v(4) = 8 m/s",
                hapi3: "Llogarit: v = 8 m/s"
            }
        },
        {
            name: "8. Nxitimi",
            sym: "a",
            form: "a = Δv / Δt\na = F / m",
            unit: "m/s²",
            otherUnits: "N/kg",
            teTjera: "Tek grafiku v(t) pjerrësia tregon nxitimin.\nNë lëvizje të përshpejtuar a dhe v₀ kanë shenjë të njëjtë.\nNë lëvizje të ngadalësuar a dhe v₀ kanë shenjë të kundërt.",
            nature: "Vektoriale",
            desc: "Madhësia që tregon ndryshimin e shpejtësisë në njësinë e kohë.",
            phetUrl: "https://phet.colorado.edu/en/simulation/moving-man",
            img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-7.png?w=929",
            vid: "https://www.youtube.com/embed/ks-yBHtiRqM",
            gameUrl: "/nxitimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, grafiku v(t) tregon se trupi nga 0 arrin 8 m/s për 2 s. Gjeni nxitimin e trupit.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: a = Δv/Δt = (8-0)/2</li>
      <li>Zëvendëso: a = 8/2</li>
      <li>Llogarit: a = 4 m/s²</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, grafiku v(t) tregon se trupi nga 0 arrin 8 m/s për 2 s. Gjeni nxitimin e trupit.",
                zgjidhja: "4",
                hapi1: "Zgjidh: a = Δv/Δt = (8-0)/2",
                hapi2: "Zëvendëso: a = 8/2",
                hapi3: "Llogarit: a = 4 m/s²"
            }
        },
        {
            name: "9. Nxitimi i renies se lire",
            sym: "g",
            form: "g = GM / R²\nG = 6.67×10⁻¹¹ Nm²/kg²",
            unit: "N/kg",
            otherUnits: "m/s²",
            teTjera: "Afër tokës g = 9.8 m/s².\nNë pol g rritet pak.\nNë lartësi h nga planeti → g = GM / (R+h)²",
            nature: "Vektoriale",
            desc: "Nxitimi me të cilin bien trupat në afërsi të sipërfaqes së Tokës nën veprimin e gravitetit.",
            phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion",
            img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levizja_e_projektilit.jpg",
            vid: "https://www.youtube.com/embed/Mr-KXDD6-5g",
            gameUrl: "/loja-nxitimi-renies-lire.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një astronaut me masë 60 kg do të peshojë 1560 N në sipërfaqen e planetit X. Gjeni nxitimin e rënies së lirë në këtë planet. (Peshë = m·g)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: g = P/m</li>
      <li>Zëvendëso: g = 1560/60</li>
      <li>Llogarit: g = 26 m/s²</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një astronaut me masë 60 kg do të peshojë 1560 N në sipërfaqen e planetit X. Gjeni nxitimin e rënies së lirë në këtë planet. (Peshë = m·g)",
                zgjidhja: "26",
                hapi1: "Zgjidh: g = P/m",
                hapi2: "Zëvendëso: g = 1560/60",
                hapi3: "Llogarit: g = 26 m/s²"
            }
        },
        {
            name: "10. Perioda",
            sym: "T",
            form: "T = 1 / f\nT = t / N",
            unit: "s",
            otherUnits: "min, h",
            teTjera: "",
            nature: "Skalare",
            desc: "Koha e nevojshme për të kryer një rrotullim të plotë ose një lëkundje të plotë.",
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Simple_harmonic_motion.svg",
            vid: "https://www.youtube.com/embed/_LPGBHpSZpA",
            gameUrl: "/perioda.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një lavjerrës matematik kryen 20 lëkundje të plota për 1 minutë. Gjeni periodën e lëkundjeve.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: T = t/N; t = 60 s, N = 20</li>
      <li>Zëvendëso: T = 60/20</li>
      <li>Llogarit: T = 3 s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një lavjerrës matematik kryen 20 lëkundje të plota për 1 minutë. Gjeni periodën e lëkundjeve.",
                zgjidhja: "3",
                hapi1: "Zgjidh: T = t/N; t = 60 s, N = 20",
                hapi2: "Zëvendëso: T = 60/20",
                hapi3: "Llogarit: T = 3 s"
            }
        },
        {
            name: "11. Frekuenca",
            sym: "f",
            form: "f = 1 / T\nf = N / t",
            unit: "Hz",
            otherUnits: "s⁻¹, rrotullime/s ose lëkundje/s",
            teTjera: "",
            nature: "Skalare",
            desc: "Numri i lëkundjeve (ose rrotullimeve) në njësinë e kohës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab",
            img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png",
            vid: "https://www.youtube.com/embed/TT4oSP4VdkA",
            gameUrl: "/frekuenca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një valë zëri ka shpejtësi 330 m/s dhe distanca midis dy ngjeshjeve të njëpasnjëshme është 0.75 m. Gjeni frekuencën e valës.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: λ = 0.75 m; f = v/λ</li>
      <li>Zëvendëso: f = 330/0.75</li>
      <li>Llogarit: f = 440 Hz</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një valë zëri ka shpejtësi 330 m/s dhe distanca midis dy ngjeshjeve të njëpasnjëshme është 0.75 m. Gjeni frekuencën e valës.",
                zgjidhja: "440",
                hapi1: "Zgjidh: λ = 0.75 m; f = v/λ",
                hapi2: "Zëvendëso: f = 330/0.75",
                hapi3: "Llogarit: f = 440 Hz"
            }
        },
        {
            name: "12. Shpejtësia këndore",
            sym: "ω",
            form: "ω = θ / t\nω = 2Π / T = 2Πf\nω = V / R (L.RR.NS)",
            unit: "rad/s",
            otherUnits: "-",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Këndi në njësinë e kohës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Angular_velocity.svg/1280px-Angular_velocity.svg.png",
            vid: "https://www.youtube.com/embed/WQ9AH2S8B6Y",
            gameUrl: "/shpejtesiakendore.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, Hëna rrotullohet rreth Tokës me shpejtësi 1020 m/s duke kryer një rrotullim të plotë për 2.36×10⁶ s. Gjeni shpejtësinë këndore (π≈3).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: ω = 2π/T; T = 2.36×10⁶ s</li>
      <li>Zëvendëso: ω = 2·3 / (2.36×10⁶) ≈ 6/(2.36×10⁶)</li>
      <li>Llogarit: ω ≈ 2.54×10⁻⁶ rad/s ≈ 2.5×10⁻⁶ rad/s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, Hëna rrotullohet rreth Tokës me shpejtësi 1020 m/s duke kryer një rrotullim të plotë për 2.36×10⁶ s. Gjeni shpejtësinë këndore (π≈3).",
                zgjidhja: "2.5e-6",
                hapi1: "Zgjidh: ω = 2π/T; T = 2.36×10⁶ s",
                hapi2: "Zëvendëso: ω = 2·3 / (2.36×10⁶) ≈ 6/(2.36×10⁶)",
                hapi3: "Llogarit: ω ≈ 2.54×10⁻⁶ rad/s ≈ 2.5×10⁻⁶ rad/s"
            }
        },
        {
            name: "13. Shpejtësia lineare",
            sym: "v",
            form: "V = ω × r\nV = l / t = 2πr / T",
            unit: "m/s",
            otherUnits: "km/h  c = 3×10⁸ m/s është shpejtësia e dritës në zbrazëti (shpejtësia më e madhe në natyrë)",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Rruga e kryer ne njësinë e kohës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExpNKbYnHRikFuixua9cmGqedwh3bo81Y3Q&s",
            vid: "https://www.youtube.com/embed/udhu6-bp_O0",
            gameUrl: "/shpejtesialineare.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, Hëna rrotullohet rreth Tokës me shpejtësi 1020 m/s dhe periodë 2.36×10⁶ s. Gjeni rrezen e trajektores rrethore (π≈3).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: v = 2πR/T ⇒ R = vT/(2π)</li>
      <li>Zëvendëso: R = 1020·(2.36×10⁶)/(2·3) = 1020·2.36×10⁶/6</li>
      <li>Llogarit: R ≈ 4.01×10⁸ m ≈ 4×10⁸ m</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, Hëna rrotullohet rreth Tokës me shpejtësi 1020 m/s dhe periodë 2.36×10⁶ s. Gjeni rrezen e trajektores rrethore (π≈3).",
                zgjidhja: "4e8",
                hapi1: "Zgjidh: v = 2πR/T ⇒ R = vT/(2π)",
                hapi2: "Zëvendëso: R = 1020·(2.36×10⁶)/(2·3) = 1020·2.36×10⁶/6",
                hapi3: "Llogarit: R ≈ 4.01×10⁸ m ≈ 4×10⁸ m"
            }
        },
        {
            name: "14. Nxitimi qendërsynues",
            sym: "a_c",
            form: "a_c = v² / r\na_qs = v² / R = ω²R = 4π²f²R",
            unit: "m/s²",
            otherUnits: "-",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Nxitimi qendërsynues lidhet me ndryshimin e vektorit të shpejtësisë në njësinë e kohës gjatë lëvizjes rrethore.",
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits",
            img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg",
            vid: "https://www.youtube.com/embed/c2rgbtG43_4",
            gameUrl: "/aqs.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, Hëna rrotullohet rreth Tokës me shpejtësi 1020 m/s në trajektore me rreze 4×10⁸ m. Gjeni nxitimin qendërsynues.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: a_c = v²/R</li>
      <li>Zëvendëso: a_c = (1020)²/(4×10⁸) = 1,040,400/(4×10⁸)</li>
      <li>Llogarit: a_c ≈ 2.6×10⁻³ m/s² (në format 2.6 me exponent -3)</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, Hëna rrotullohet rreth Tokës me shpejtësi 1020 m/s në trajektore me rreze 4×10⁸ m. Gjeni nxitimin qendërsynues.",
                zgjidhja: "2.6",
                hapi1: "Zgjidh: a_c = v²/R",
                hapi2: "Zëvendëso: a_c = (1020)²/(4×10⁸) = 1,040,400/(4×10⁸)",
                hapi3: "Llogarit: a_c ≈ 2.6×10⁻³ m/s² (në format 2.6 me exponent -3)"
            }
        },
        {
            name: "15. Këndi",
            sym: "θ",
            form: "θ = s / r",
            unit: "rad",
            otherUnits: "gradë",
            teTjera: "",
            nature: "Skalare",
            desc: "Hapësira midis dy rrezeve që nisin nga e njëjta pikë, e matur në radian.",
            phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Angle_measure.svg/250px-Angle_measure.svg.png",
            vid: "https://www.youtube.com/embed/XhEX-4eDb-c",
            gameUrl: "/loja-kendi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Një biçikletë përshkon një hark rrethi me rreze 10 m. Harku i përshkuar është 25 m. Gjeni këndin në radianë.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: θ = s/r</li>
      <li>Zëvendëso: θ = 25/10</li>
      <li>Llogarit: θ = 2.5 rad</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Një biçikletë përshkon një hark rrethi me rreze 10 m. Harku i përshkuar është 25 m. Gjeni këndin në radianë.",
                zgjidhja: "2.5",
                hapi1: "Zgjidh: θ = s/r",
                hapi2: "Zëvendëso: θ = 25/10",
                hapi3: "Llogarit: θ = 2.5 rad"
            }
        },
        {
            name: "16. Nxitimi këndor",
            sym: "α",
            form: "α = Δω / Δt\nα = (ω - ω₀) / t\na_t = αR  (lidhja ndërmjet nxitimit tangjencial dhe këndor)\nω = ω₀ + αt (L.RR.NJ.ND.)",
            unit: "rad/s²",
            otherUnits: "-",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Ndryshimi i shpejtësise këndore ne njësine e kohës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab",
            img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg",
            vid: "https://www.youtube.com/embed/kXj4We-it4k",
            gameUrl: "/akendore.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Një disk rrotullues kalon nga shpejtësia këndore 2 rad/s në 10 rad/s për 4 s. Gjeni nxitimin këndor.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: α = (ω - ω₀)/t</li>
      <li>Zëvendëso: α = (10 - 2)/4</li>
      <li>Llogarit: α = 2 rad/s²</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Një disk rrotullues kalon nga shpejtësia këndore 2 rad/s në 10 rad/s për 4 s. Gjeni nxitimin këndor.",
                zgjidhja: "2",
                hapi1: "Zgjidh: α = (ω - ω₀)/t",
                hapi2: "Zëvendëso: α = (10 - 2)/4",
                hapi3: "Llogarit: α = 2 rad/s²"
            }
        }
    ],
    "Dinamika": [
        {
            name: "1. Forca",
            sym: "F",
            form: "F = ma",
            unit: "N",
            otherUnits: "1N = 1kg·m/s²",
            teTjera: "3 Ligjet e Njutonit:\n1 - Nëse s'ka F ose F_R = 0 → trupi në prehje ose L.D.NJ.\n2 - a = F/m,  a ∝ F,  a ∝ 1/m\n3 - F₂,₁ = –F₁,₂",
            nature: "Vektoriale",
            desc: "Veprimi i një trupi mbi një tjetër.",
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics",
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDRnwxNuMkmLvPY5p1CvEK61OuaW7qVGHb1pcym-TbWBBNj1s1PxvkIwFjcHVjtAysPbi-93OW7bIcQCc5vSX_jHq9B0gmYAhjaJOOsG8XO5qCvo6wmz1N3W2_JRNtIUKZkdFrMv-6bkA/s1600/4c004beab8150bef9ba245b7f3b589f4cf708850.gif",
            vid: "https://www.youtube.com/embed/56y06xK21es",
            gameUrl: "/loja-forca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një kub me masë 2 kg lëviz me nxitim 2 m/s² nën veprimin e një force horizontale. Gjeni madhësinë e forces (fërkimi i papërfillshëm).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: F = m·a</li>
      <li>Zëvendëso: F = 2·2</li>
      <li>Llogarit: F = 4 N</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një kub me masë 2 kg lëviz me nxitim 2 m/s² nën veprimin e një force horizontale. Gjeni madhësinë e forces (fërkimi i papërfillshëm).",
                zgjidhja: "4",
                hapi1: "Zgjidh: F = m·a",
                hapi2: "Zëvendëso: F = 2·2",
                hapi3: "Llogarit: F = 4 N"
            }
        },
        {
            name: "2. Masa",
            sym: "m",
            form: "m = d × v",
            unit: "kg",
            otherUnits: "1 pound = 0.454 kg,  1 ton = 1000 kg,  1 oke ≈ 1.3 kg (njësi e vjetër shtëpiake)",
            teTjera: "",
            nature: "Skalare",
            desc: "Masa e trupit lidhet me sasinë e lëndës që ai përmban dhe tregon inertësinë e trupit.",
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics",
            img: "https://kluszeljka.weebly.com/uploads/3/8/5/5/38551443/published/te-ina-tela.jpg?1615759127",
            vid: "https://www.youtube.com/embed/6NV5ltITNx4",
            gameUrl: "/loja-masa.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një astronaut me masë 60 kg peshon 1560 N në planetin X. Gjeni masën e astronautit në Tokë (masa nuk ndryshon).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Masa është konstante, nuk varet nga planeti.</li>
      <li>Zëvendëso: m = 60 kg</li>
      <li>Llogarit: m = 60 kg</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një astronaut me masë 60 kg peshon 1560 N në planetin X. Gjeni masën e astronautit në Tokë (masa nuk ndryshon).",
                zgjidhja: "60",
                hapi1: "Zgjidh: Masa është konstante, nuk varet nga planeti.",
                hapi2: "Zëvendëso: m = 60 kg",
                hapi3: "Llogarit: m = 60 kg"
            }
        },
        {
            name: "3. Pesha",
            sym: "P",
            form: "P = N",
            unit: "N",
            otherUnits: "1N = 1kg·m/s²",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Forca me të cilën trupi mëshon mbi mbështetësen ose tërheq fijen ku është varur.",
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics",
            img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-6.jpeg?w=332",
            vid: "https://www.youtube.com/embed/g4mGv0g3Tq0",
            gameUrl: "/loja-pesha.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një objekt peshon 600 N në Tokë. Në Hënë, pesha është 6 herë më e vogël. Sa është pesha në Hënë?</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: P_Hënë = P_Tokë/6</li>
      <li>Zëvendëso: P_Hënë = 600/6</li>
      <li>Llogarit: P_Hënë = 100 N</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një objekt peshon 600 N në Tokë. Në Hënë, pesha është 6 herë më e vogël. Sa është pesha në Hënë?",
                zgjidhja: "100",
                hapi1: "Zgjidh: P_Hënë = P_Tokë/6",
                hapi2: "Zëvendëso: P_Hënë = 600/6",
                hapi3: "Llogarit: P_Hënë = 100 N"
            }
        },
        {
            name: "4. Forca e rendeses",
            sym: "G",
            form: "G = mg",
            unit: "N",
            otherUnits: "1N = 1kg·m/s²",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Forca me të cilën Toka tërheq trupat drejt qendrës së saj.",
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab",
            img: "https://askabiologist.asu.edu/sites/default/files/resources/articles/space_physiology/shuttle_earth_albanian.gif",
            vid: "https://www.youtube.com/embed/gTL_WeQ3H7o",
            gameUrl: "/loja-rendesa.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një astronaut me masë 60 kg do të peshojë 1560 N në sipërfaqen e planetit X. Gjeni nxitimin e rënies së lirë në planetin X.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: G = m·g ⇒ g = G/m</li>
      <li>Zëvendëso: g = 1560/60</li>
      <li>Llogarit: g = 26 m/s²</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një astronaut me masë 60 kg do të peshojë 1560 N në sipërfaqen e planetit X. Gjeni nxitimin e rënies së lirë në planetin X.",
                zgjidhja: "26",
                hapi1: "Zgjidh: G = m·g ⇒ g = G/m",
                hapi2: "Zëvendëso: g = 1560/60",
                hapi3: "Llogarit: g = 26 m/s²"
            }
        },
        {
            name: "5. Forca e fërkimit",
            sym: "F_f",
            form: "F_f = μN",
            unit: "N",
            otherUnits: "1N = 1kg·m/s²",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Forca që lind gjatë sipërfaqes fërkuese të 2 trupave dhe pengon rrëshqitjen.",
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics",
            img: "https://images.my.labster.com/v2/NL1/803332e1-5a17-4356-90f0-4daa5a9584f0/NL1_Friction_Force_.en.x1024.png",
            vid: "https://www.youtube.com/embed/2Tz7osdJkiM",
            gameUrl: "/loja-ferkimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një skiator me masë 80 kg rrëshqet me shpejtësi konstante në një shpat me kënd pjerrësie 24° (sin24°=0.4, cos24°=0.9, g=10). Gjeni forcën e fërkimit.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Me shpejtësi konstante, komponenti i G përgjatë shpatit barabartë me fërkimin: F_f = mg·sinα</li>
      <li>Zëvendëso: F_f = 80·10·0.4</li>
      <li>Llogarit: F_f = 320 N</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një skiator me masë 80 kg rrëshqet me shpejtësi konstante në një shpat me kënd pjerrësie 24° (sin24°=0.4, cos24°=0.9, g=10). Gjeni forcën e fërkimit.",
                zgjidhja: "320",
                hapi1: "Zgjidh: Me shpejtësi konstante, komponenti i G përgjatë shpatit barabartë me fërkimin: F_f = mg·sinα",
                hapi2: "Zëvendëso: F_f = 80·10·0.4",
                hapi3: "Llogarit: F_f = 320 N"
            }
        },
        {
            name: "6. Koeficienti i fërkimit",
            sym: "μ",
            form: "μ = F_f / N",
            unit: "—",
            otherUnits: "-",
            teTjera: "",
            nature: "Skalare",
            desc: "Madhësi pa njësi që tregon ashpërsine e sipërfaqeve takuese.",
            phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics",
            img: "https://force-channel.com/wp-content/uploads/2023/11/en_%E6%91%A9%E6%93%A6%E5%8A%9B%E3%81%A8%E6%91%A9%E6%93%A6%E4%BF%82%E6%95%B0%E3%81%AE%E9%96%A2%E4%BF%82.jpg",
            vid: "https://www.youtube.com/embed/BKQ8gQLQRnI",
            gameUrl: "/loja-koef-ferkimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, skiatori me masë 80 kg lëviz me shpejtësi konstante në shpat me kënd 24° (sin24°=0.4, cos24°=0.9, g=10). Forca e fërkimit është 320 N. Gjeni koeficientin e fërkimit.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: N = mg·cosα = 80·10·0.9 = 720 N; μ = F_f/N</li>
      <li>Zëvendëso: μ = 320/720</li>
      <li>Llogarit: μ ≈ 0.44</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, skiatori me masë 80 kg lëviz me shpejtësi konstante në shpat me kënd 24° (sin24°=0.4, cos24°=0.9, g=10). Forca e fërkimit është 320 N. Gjeni koeficientin e fërkimit.",
                zgjidhja: "0.44",
                hapi1: "Zgjidh: N = mg·cosα = 80·10·0.9 = 720 N; μ = F_f/N",
                hapi2: "Zëvendëso: μ = 320/720",
                hapi3: "Llogarit: μ ≈ 0.44"
            }
        },
        {
            name: "7. Forca elastike",
            sym: "F_e",
            form: "F = -kx",
            unit: "N",
            otherUnits: "1N = 1kg·m/s²",
            teTjera: "Ligji i Hukut.\nForca elastike është në përpjestim të drejtë me shformimin dhe ka kah të kundërt me të.",
            nature: "Vektoriale",
            desc: "Forca elastike është forca që lind nga trupi i shformuar mbi atë që shkakton shformimin.",
            phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Spring-mass2.svg/250px-Spring-mass2.svg.png",
            vid: "https://www.youtube.com/embed/XaXpwQK_UjI",
            gameUrl: "/loja-elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një sustë me gjatësi 0.5 m zgjatet deri në 1 m kur në të varet një objekt. Energjia e ruajtur në sustë është 15 J. Gjeni koeficientin e elasticitetit k. (x = 0.5 m)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: E_e = ½kx² ⇒ k = 2E_e/x²</li>
      <li>Zëvendëso: k = 2·15/(0.5)²</li>
      <li>Llogarit: k = 120 N/m</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një sustë me gjatësi 0.5 m zgjatet deri në 1 m kur në të varet një objekt. Energjia e ruajtur në sustë është 15 J. Gjeni koeficientin e elasticitetit k. (x = 0.5 m)",
                zgjidhja: "120",
                hapi1: "Zgjidh: E_e = ½kx² ⇒ k = 2E_e/x²",
                hapi2: "Zëvendëso: k = 2·15/(0.5)²",
                hapi3: "Llogarit: k = 120 N/m"
            }
        },
        {
            name: "8. Konstanta elastike",
            sym: "k",
            form: "k = F / x",
            unit: "N/m",
            otherUnits: "-",
            teTjera: "Kufiri i elasticitetit është pika pas të cilës trupi nuk kthehet në formën fillestare.\nKufiri i soliditetit është pika ku teli këputet.\nTek grafiku F(x) → k = përpjestimi (pjerrësia).",
            nature: "Skalare",
            desc: "Karakteristikë e trupit që tregon rezistencën e tij ndaj shformimit elastik.",
            phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs",
            img: "https://www.bio-meca.com/wp-content/uploads/hookes-law-schema-1-1024x609.jpg",
            vid: "https://www.youtube.com/embed/aLOzqPgBpV0",
            gameUrl: "/loja-konst-elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një sustë me gjatësi fillestare 0.5 m zgjatet deri në 1 m kur në të varet një objekt. Energjia e ruajtur në sustë të zgjatur është 15 J. Gjeni koeficientin e elasticitetit.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: E_e = ½kx²; x = 1 - 0.5 = 0.5 m; k = 2E/x²</li>
      <li>Zëvendëso: k = 2·15/(0.5)²</li>
      <li>Llogarit: k = 120 N/m</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një sustë me gjatësi fillestare 0.5 m zgjatet deri në 1 m kur në të varet një objekt. Energjia e ruajtur në sustë të zgjatur është 15 J. Gjeni koeficientin e elasticitetit.",
                zgjidhja: "120",
                hapi1: "Zgjidh: E_e = ½kx²; x = 1 - 0.5 = 0.5 m; k = 2E/x²",
                hapi2: "Zëvendëso: k = 2·15/(0.5)²",
                hapi3: "Llogarit: k = 120 N/m"
            }
        },
        {
            name: "9. Forca qendërsynuese",
            sym: "F_c",
            form: "F_c = mv² / r",
            unit: "N",
            otherUnits: "1N = 1kg·m/s²",
            teTjera: "Forca qendërsynuese nuk është forcë e re shtesë.\nRolin e saj mund ta luajë çdo forcë apo grup forcash.",
            nature: "Vektoriale",
            desc: "Forca rezultante që detyron një trup të lëvizë sipas një trajektoreje rrethore.",
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Force_acting_as_centripetal_force.svg/500px-Force_acting_as_centripetal_force.svg.png",
            vid: "https://www.youtube.com/embed/aLOzqPgBpV0",
            gameUrl: "/loja-qendersynuese.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një avion përshkruan një rreth horizontal me rreze 1 km me shpejtësi 200 m/s. Gjeni nxitimin qendërsynues (g=10).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: a_c = v²/r = (200)²/1000</li>
      <li>Zëvendëso: a_c = 40000/1000</li>
      <li>Llogarit: a_c = 40 m/s² = 4g</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një avion përshkruan një rreth horizontal me rreze 1 km me shpejtësi 200 m/s. Gjeni nxitimin qendërsynues (g=10).",
                zgjidhja: "40",
                hapi1: "Zgjidh: a_c = v²/r = (200)²/1000",
                hapi2: "Zëvendëso: a_c = 40000/1000",
                hapi3: "Llogarit: a_c = 40 m/s² = 4g"
            }
        },
        {
            name: "10. Forca gravitacionale",
            sym: "F_G",
            form: "F = G(m₁m₂) / r²",
            unit: "N",
            otherUnits: "1N = 1kg·m/s²  (G → γ)",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Forca tërheqëse e gjithësisë që vepron midis çdo dy trupave që kanë masë.",
            phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rpECqNLFAKZhNUiLZtbt2Q-pgPY88-b4uw&s",
            vid: "https://www.youtube.com/embed/yzjB32cooEo",
            gameUrl: "/loja-gravitacionale.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, dy nxënës secili me masë 50 kg ndodhen 5 m larg njëri-tjetrit. Gjeni forcën gravitacionale. (G=6.67×10⁻¹¹ N·m²/kg²)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: F = G·m₁·m₂/r²</li>
      <li>Zëvendëso: F = 6.67×10⁻¹¹·50·50/25</li>
      <li>Llogarit: F = 6.67×10⁻⁹ N</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, dy nxënës secili me masë 50 kg ndodhen 5 m larg njëri-tjetrit. Gjeni forcën gravitacionale. (G=6.67×10⁻¹¹ N·m²/kg²)",
                zgjidhja: "6.67e-9",
                hapi1: "Zgjidh: F = G·m₁·m₂/r²",
                hapi2: "Zëvendëso: F = 6.67×10⁻¹¹·50·50/25",
                hapi3: "Llogarit: F = 6.67×10⁻⁹ N"
            }
        },
        {
            name: "11. Impulsi i forcës",
            sym: "Δp",
            form: "Δp = FΔt\nΔp = mΔv",
            unit: "N·s",
            otherUnits: "kg·m/s",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Prodhimi i forcës me intervalin e kohës gjatë të cilit ajo vepron mbi trupin.",
            phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab",
            img: "https://media.geeksforgeeks.org/wp-content/uploads/20230601131523/Impulse-Curve.png",
            vid: "https://www.youtube.com/embed/BWhluW5_1vc",
            gameUrl: "/loja-impuls-force.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një trup me masë 0.2 kg godet dyshemenë me shpejtësi 10 m/s dhe kthehet mbrapa me 8 m/s. Koha e kontaktit është 0.4 s. Gjeni forcën mesatare që ushtron dyshemeja.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Δp = m(v₂ - v₁) = 0.2(8 - (-10)) = 0.2·18 = 3.6 kg·m/s; F = Δp/Δt</li>
      <li>Zëvendëso: F = 3.6/0.4</li>
      <li>Llogarit: F = 9 N</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një trup me masë 0.2 kg godet dyshemenë me shpejtësi 10 m/s dhe kthehet mbrapa me 8 m/s. Koha e kontaktit është 0.4 s. Gjeni forcën mesatare që ushtron dyshemeja.",
                zgjidhja: "9",
                hapi1: "Zgjidh: Δp = m(v₂ - v₁) = 0.2(8 - (-10)) = 0.2·18 = 3.6 kg·m/s; F = Δp/Δt",
                hapi2: "Zëvendëso: F = 3.6/0.4",
                hapi3: "Llogarit: F = 9 N"
            }
        },
        {
            name: "12. Impuls i trupit",
            sym: "p",
            form: "p = mv",
            unit: "kg·m/s",
            otherUnits: "",
            teTjera: "",
            nature: "Vektoriale",
            desc: "Sasia e lëvizjes së trupit.",
            phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab",
            img: "https://mechanicsmap.psu.edu/websites/15_impulse_momentum_rigid_body/15-2_impulse_momentum_theorem_rigid_body/images/problem_diagram.png",
            vid: "https://www.youtube.com/embed/XreBwpNk9no",
            gameUrl: "/loja-impuls-trupi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, dy sfera me masa 0.1 kg dhe 0.5 kg lëvizin drejt njëra-tjetrës me shpejtësi 10 m/s dhe 0 m/s. Gjeni impulsin total të sistemit para goditjes.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: p_total = m₁v₁ + m₂v₂ = 0.1·10 + 0.5·0</li>
      <li>Zëvendëso: p_total = 1 + 0</li>
      <li>Llogarit: p_total = 1 kg·m/s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, dy sfera me masa 0.1 kg dhe 0.5 kg lëvizin drejt njëra-tjetrës me shpejtësi 10 m/s dhe 0 m/s. Gjeni impulsin total të sistemit para goditjes.",
                zgjidhja: "1",
                hapi1: "Zgjidh: p_total = m₁v₁ + m₂v₂ = 0.1·10 + 0.5·0",
                hapi2: "Zëvendëso: p_total = 1 + 0",
                hapi3: "Llogarit: p_total = 1 kg·m/s"
            }
        },
        {
            name: "13. Momenti i forcës",
            sym: "M",
            form: "M = F × d",
            unit: "Nm",
            otherUnits: "",
            teTjera: "Në rrotullim orar Momenti merret (+).\nNë rrotullim Kundër orar Momenti merret (-).\nKushti i ekuilibrit të një trupi të ngurtë: Shuma e momentit orar = Shuma e momentit kundërorar → M_Rezultante = 0.\nM_çift = F × d_çift",
            nature: "Vektoriale",
            desc: "Efekti rrotullues i një force.",
            phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act",
            img: "https://cloudfront.jove.com/files/media/science-education/science-education-thumbs/14253.jpg",
            vid: "https://www.youtube.com/embed/D7xq8gNwMRQ",
            gameUrl: "/loja-momenti.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, mbi dorezën e derës veprojnë katër forca të njëjta. Cila forcë krijon moment rrotullues më të madh? (zgjidhni: a) forcë në bosht, b) forcë në gjysmën e derës, c) forcë në skajin e derës, d) forcë paralele me derën).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: M = F·d; momenti maksimal kur krahu d është maksimal.</li>
      <li>Analizo: forca në skajin e derës ka d maksimal dhe pingul me dorezën</li>
      <li>Përgjigja: c) forcë në skajin e derës</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, mbi dorezën e derës veprojnë katër forca të njëjta. Cila forcë krijon moment rrotullues më të madh? (zgjidhni: a) forcë në bosht, b) forcë në gjysmën e derës, c) forcë në skajin e derës, d) forcë paralele me derën).",
                zgjidhja: "c",
                hapi1: "Zgjidh: M = F·d; momenti maksimal kur krahu d është maksimal.",
                hapi2: "Analizo: forca në skajin e derës ka d maksimal dhe pingul me dorezën",
                hapi3: "Përgjigja: c) forcë në skajin e derës"
            }
        },
        {
            name: "14. Krahu i forcës",
            sym: "d",
            form: "d = M / F",
            unit: "m",
            otherUnits: "",
            teTjera: "",
            nature: "Skalare",
            desc: "Largësia më e shkurtër (pingulja) nga boshti i rrotullimit deri te vija e veprimit të forcës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act",
            img: "https://www.datocms-assets.com/117510/1722388028-science_learning_hub_mechanical-advantage_v1.png",
            vid: "https://www.youtube.com/embed/H3lwoQJ_OZA",
            gameUrl: "/loja-krahu.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Për të hapur një derë, një fëmijë ushtron forcë 20 N duke krijuar moment 12 Nm. Gjeni krahun e forcës.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: M = F·d ⇒ d = M/F</li>
      <li>Zëvendëso: d = 12/20</li>
      <li>Llogarit: d = 0.6 m</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Për të hapur një derë, një fëmijë ushtron forcë 20 N duke krijuar moment 12 Nm. Gjeni krahun e forcës.",
                zgjidhja: "0.6",
                hapi1: "Zgjidh: M = F·d ⇒ d = M/F",
                hapi2: "Zëvendëso: d = 12/20",
                hapi3: "Llogarit: d = 0.6 m"
            }
        },
        {
            name: "15. Shtypja",
            sym: "P",
            form: "P = F / S",
            unit: "Pa",
            otherUnits: "atm, bar, mmHg, N/m²",
            teTjera: "Në gazra → shtypja tregon goditjet e molekulave me faqet e enës.\nTek lëngjet në thellësi: P = P_atmo + dgh\nLigji i Paskalit → Në të njëjtin nivel lëngu shtypja është e njëjtë.\nÇdo ndryshim shtypjeje në lëng përhapet njëlloj në të gjitha drejtimet.",
            nature: "Skalare",
            desc: "Forca që ushtrohet pingul mbi njësinë e sipërfaqes së një trupi.",
            phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties",
            img: "https://ademgllavica.wordpress.com/wp-content/uploads/2020/03/image-391.png?w=571",
            vid: "https://www.youtube.com/embed/LDGohoxWZY4",
            gameUrl: "/loja-shtypja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një skiator me masë 80 kg mbështetet në shpat me sipërfaqe 0.05 m² (g=10). Gjeni shtypjen mesatare që ushtron skiatori mbi shpatën.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Shtypja = F/S = mg/S (shtë natyralisht, por këtu marrim komponentin normal për shtypje pingul)</li>
      <li>Zëvendëso: P = 80·10/0.05</li>
      <li>Llogarit: P = 16000 Pa</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një skiator me masë 80 kg mbështetet në shpat me sipërfaqe 0.05 m² (g=10). Gjeni shtypjen mesatare që ushtron skiatori mbi shpatën.",
                zgjidhja: "16000",
                hapi1: "Zgjidh: Shtypja = F/S = mg/S (shtë natyralisht, por këtu marrim komponentin normal për shtypje pingul)",
                hapi2: "Zëvendëso: P = 80·10/0.05",
                hapi3: "Llogarit: P = 16000 Pa"
            }
        }
    ],
    "Energjia": [
        {
            name: "1. Energjia kinetike",
            sym: "Ek",
            form: "Ek = ½mv²",
            unit: "J",
            otherUnits: "cal, kWh",
            teTjera: "",
            nature: "Skalare",
            desc: "Energjia që zotëron një trup për shkak të lëvizjes së tij me një shpejtësi të caktuar.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park",
            img: "https://img.jagranjosh.com/images/2024/July/1072024/kinetic-energy-definition-formula-derivation-types-examples-and-calculations.webp",
            vid: "https://www.youtube.com/embed/bSwFLr4kO6g",
            gameUrl: "/energjiakinetike1.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një trup me masë 200 g niset nga toka me shpejtësi 20 m/s. Gjeni energjinë kinetike në çastin e shkëputjes.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Ek = ½mv²; m = 0.2 kg</li>
      <li>Zëvendëso: Ek = ½·0.2·20²</li>
      <li>Llogarit: Ek = 40 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një trup me masë 200 g niset nga toka me shpejtësi 20 m/s. Gjeni energjinë kinetike në çastin e shkëputjes.",
                zgjidhja: "40",
                hapi1: "Zgjidh: Ek = ½mv²; m = 0.2 kg",
                hapi2: "Zëvendëso: Ek = ½·0.2·20²",
                hapi3: "Llogarit: Ek = 40 J"
            }
        },
        {
            name: "2. Energjia potenciale gravitacionale",
            sym: "Ep",
            form: "Ep = mgh",
            unit: "J",
            otherUnits: "cal, kWh",
            teTjera: "",
            nature: "Skalare",
            desc: "Energjia që zotëron një trup për shkak të pozicionit të tij në një fushë gravitacionale.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park",
            img: "https://www.meracalculator.com/images/blog/2020/11/1605613981potential-energy-png.png",
            vid: "https://www.youtube.com/embed/XCl0Dx8g5Pc",
            gameUrl: "/energjiapotencialegravitacionale.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një trup me masë 200 g niset nga toka me shpejtësi 20 m/s. Gjeni energjinë potenciale në lartësinë 7.2 m (g=10).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Ep = mgh; m = 0.2 kg</li>
      <li>Zëvendëso: Ep = 0.2·10·7.2</li>
      <li>Llogarit: Ep = 14.4 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një trup me masë 200 g niset nga toka me shpejtësi 20 m/s. Gjeni energjinë potenciale në lartësinë 7.2 m (g=10).",
                zgjidhja: "14.4",
                hapi1: "Zgjidh: Ep = mgh; m = 0.2 kg",
                hapi2: "Zëvendëso: Ep = 0.2·10·7.2",
                hapi3: "Llogarit: Ep = 14.4 J"
            }
        },
        {
            name: "3. Energjia potenciale elastike",
            sym: "Ee",
            form: "Ee = ½kx²",
            unit: "J",
            otherUnits: "cal, kWh",
            teTjera: "",
            nature: "Skalare",
            desc: "Energjia e ruajtur në një trup elastik si pasojë e shformimit të tij.",
            phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs",
            img: "https://energyeducation.ca/wiki/images/1/11/Mxcpcrossbow-elastic-potential.gif",
            vid: "https://www.youtube.com/embed/CvJHBOssY5Q",
            gameUrl: "/energjia potenciale elastike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një sustë me k=120 N/m zgjatet x=0.5 m. Gjeni energjinë potenciale elastike.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Ee = ½kx²</li>
      <li>Zëvendëso: Ee = ½·120·0.5²</li>
      <li>Llogarit: Ee = 15 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një sustë me k=120 N/m zgjatet x=0.5 m. Gjeni energjinë potenciale elastike.",
                zgjidhja: "15",
                hapi1: "Zgjidh: Ee = ½kx²",
                hapi2: "Zëvendëso: Ee = ½·120·0.5²",
                hapi3: "Llogarit: Ee = 15 J"
            }
        },
        {
            name: "4. Energjia mekanike",
            sym: "Em",
            form: "Em = Ek + Ep",
            unit: "J",
            otherUnits: "cal, kWh",
            teTjera: "",
            nature: "Skalare",
            desc: "Shuma e energjisë kinetike dhe asaj potenciale të një sistemi fizik.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park",
            img: "https://engineerfix.com/wp-content/uploads/2021/04/Mechanical-Energy.png",
            vid: "https://www.youtube.com/embed/4bNajhqV8ws",
            gameUrl: "/energjia mekanike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një trup me masë 2 kg lëviz me shpejtësi 6 m/s në lartësinë 4 m. Gjeni energjinë mekanike totale (g=10).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Em = Ek + Ep = ½mv² + mgh</li>
      <li>Zëvendëso: Em = ½·2·6² + 2·10·4 = 36 + 80</li>
      <li>Llogarit: Em = 116 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një trup me masë 2 kg lëviz me shpejtësi 6 m/s në lartësinë 4 m. Gjeni energjinë mekanike totale (g=10).",
                zgjidhja: "116",
                hapi1: "Zgjidh: Em = Ek + Ep = ½mv² + mgh",
                hapi2: "Zëvendëso: Em = ½·2·6² + 2·10·4 = 36 + 80",
                hapi3: "Llogarit: Em = 116 J"
            }
        },
        {
            name: "5. Puna",
            sym: "A",
            form: "A = Fs·cosθ\nA_G = mgh\nA_pl = ΔEk",
            unit: "J",
            otherUnits: "cal",
            teTjera: "Kur forca ndihmon zhvendosjen → A > 0.\nKur forca pengon zhvendosjen → A < 0.\nKur forca nuk ndikon → A = 0.\nPuna e forcave konservative në një rrugë të mbyllur = 0.\nPuna e forcave konservative nuk varet nga forma e rrugës.",
            nature: "Skalare",
            desc: "Energjia e transferuar te një trup ose nga një trup përmes veprimit të një force gjatë një zhvendosjeje.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park",
            img: "https://williamqin.com/assets/blog/Energy%20Blog%20Graphics/work.jpg",
            vid: "https://www.youtube.com/embed/G86VPx8ywyU",
            gameUrl: "/puna.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, forca e fushës elektrike me intensitet 2 N/C kryen punë për zhvendosjen e ngarkesës 3 mC ndërmjet dy pikave 0.05 m larg. Gjeni punën e kryer.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: A = F·s = qE·s</li>
      <li>Zëvendëso: A = 3×10⁻³·2·0.05</li>
      <li>Llogarit: A = 3×10⁻⁴ J = 0.0003 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, forca e fushës elektrike me intensitet 2 N/C kryen punë për zhvendosjen e ngarkesës 3 mC ndërmjet dy pikave 0.05 m larg. Gjeni punën e kryer.",
                zgjidhja: "0.0003",
                hapi1: "Zgjidh: A = F·s = qE·s",
                hapi2: "Zëvendëso: A = 3×10⁻³·2·0.05",
                hapi3: "Llogarit: A = 3×10⁻⁴ J = 0.0003 J"
            }
        },
        {
            name: "6. Fuqia",
            sym: "P",
            form: "P = A / t\nP = Fv",
            unit: "W",
            otherUnits: "1W = 1J/s,  1 Kuaj fuqi (HP) = 745.7W",
            teTjera: "",
            nature: "Skalare",
            desc: "Puna e kryer ne njësine e kohës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park",
            img: "https://i.ytimg.com/vi/irSJL1U_gOQ/maxresdefault.jpg",
            vid: "https://www.youtube.com/embed/aHKEy7Oa0-A",
            gameUrl: "/fuqia1.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një makinë zhvendoset nën veprimin e forcës 10 kN me fuqi 100 kW. Sa kohë i duhet për t'u zhvendosur 100 m?</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: P = A/t; A = F·s; t = F·s/P</li>
      <li>Zëvendëso: t = (10000·100)/100000</li>
      <li>Llogarit: t = 10 s</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një makinë zhvendoset nën veprimin e forcës 10 kN me fuqi 100 kW. Sa kohë i duhet për t'u zhvendosur 100 m?",
                zgjidhja: "10",
                hapi1: "Zgjidh: P = A/t; A = F·s; t = F·s/P",
                hapi2: "Zëvendëso: t = (10000·100)/100000",
                hapi3: "Llogarit: t = 10 s"
            }
        },
        {
            name: "7. Energjia e brendshme termike",
            sym: "U",
            form: "U = 3/2 · nRT  (gaz 1 atomik)\nU = 5/2 · nRT  (gaz 2 atomik)",
            unit: "J",
            otherUnits: "cal, kcal",
            teTjera: "",
            nature: "Skalare",
            desc: "Shuma e energjisë kinetike dhe potenciale të të gjitha grimcave që përbëjnë një sistem.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes",
            img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg",
            vid: "https://www.youtube.com/embed/mm_vaHqJvfw",
            gameUrl: "/energjia e brendshme termike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një mol gazi ideal njëatomik fillon në temperaturën 127°C (400 K). Gjeni energjinë e brendshme fillestare (R=8.31).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: U = 3/2 nRT; T = 127 + 273 = 400 K</li>
      <li>Zëvendëso: U = 1.5·1·8.31·400</li>
      <li>Llogarit: U = 4986 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një mol gazi ideal njëatomik fillon në temperaturën 127°C (400 K). Gjeni energjinë e brendshme fillestare (R=8.31).",
                zgjidhja: "4986",
                hapi1: "Zgjidh: U = 3/2 nRT; T = 127 + 273 = 400 K",
                hapi2: "Zëvendëso: U = 1.5·1·8.31·400",
                hapi3: "Llogarit: U = 4986 J"
            }
        },
        {
            name: "8. Energjia elektrike",
            sym: "Ee",
            form: "E = P · t",
            unit: "J",
            otherUnits: "kWh",
            teTjera: "",
            nature: "Skalare",
            desc: "Energjia që mat bashkëveprimin elektrik.",
            phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc",
            img: "https://electricalampere.com/wp-content/uploads/2025/08/Electrical-Energy-Sources-%E2%80%93-Types-Examples-and-How-Electricity-is-Produced.png",
            vid: "https://www.youtube.com/embed/LdYNNRKgP9U",
            gameUrl: "/energjia elektrike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një ngrohës elektrik 220 V 500 W punon për 1 minutë. Gjeni energjinë elektrike të harxhuar.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: E = P·t; t = 60 s</li>
      <li>Zëvendëso: E = 500·60</li>
      <li>Llogarit: E = 30000 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një ngrohës elektrik 220 V 500 W punon për 1 minutë. Gjeni energjinë elektrike të harxhuar.",
                zgjidhja: "30000",
                hapi1: "Zgjidh: E = P·t; t = 60 s",
                hapi2: "Zëvendëso: E = 500·60",
                hapi3: "Llogarit: E = 30000 J"
            }
        },
        {
            name: "9. Energjia kimike",
            sym: "E_kim",
            form: "—",
            unit: "J",
            otherUnits: "cal, kcal",
            teTjera: "",
            nature: "Skalare",
            desc: "Energjia e ruajtur në lidhjet kimike të substancave, e cila çlirohet gjatë reaksioneve.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes",
            img: "https://www.sciencefacts.net/wp-content/uploads/2022/07/Chemical-Energy.jpg",
            vid: "https://www.youtube.com/embed/Iqwrl79a55A",
            gameUrl: "/energjia kimike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në një bateri 1.5 V, 2 A rrjedhin për 1 orë. Gjeni energjinë kimike të shndërruar në elektrike.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: E = U·I·t (ose P·t = UI·t); t = 3600 s</li>
      <li>Zëvendëso: E = 1.5·2·3600</li>
      <li>Llogarit: E = 10800 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në një bateri 1.5 V, 2 A rrjedhin për 1 orë. Gjeni energjinë kimike të shndërruar në elektrike.",
                zgjidhja: "10800",
                hapi1: "Zgjidh: E = U·I·t (ose P·t = UI·t); t = 3600 s",
                hapi2: "Zëvendëso: E = 1.5·2·3600",
                hapi3: "Llogarit: E = 10800 J"
            }
        }
    ],
    "Elektriciteti": [
        {
            name: "1. Intensiteti i rrymes",
            sym: "I",
            form: "I = q / t\nI = U / R",
            unit: "A",
            otherUnits: "1A = 1C/s",
            teTjera: "Kahu tradicional i Intensitetit merret kahu i lëvizjes së ngarkesës pozitive, pra kahu i kundërt i lëvizjes së elektroneve.",
            nature: "Skalare",
            desc: "Sasia e ngarkesës elektrike që kalon nëpër seksionin tërthor të përcjellësit në njësinë e kohës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc",
            img: "https://i.ytimg.com/vi/_ZpqdJJ5M9U/maxresdefault.jpg",
            vid: "https://www.youtube.com/embed/kM72Xa4cOVQ",
            gameUrl: "/Loja inteciteti i rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një ngarkesë 20 C kalon nëpër një tel për 4 s. Gjeni intensitetin e rrymës.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: I = q/t</li>
      <li>Zëvendëso: I = 20/4</li>
      <li>Llogarit: I = 5 A</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një ngarkesë 20 C kalon nëpër një tel për 4 s. Gjeni intensitetin e rrymës.",
                zgjidhja: "5",
                hapi1: "Zgjidh: I = q/t",
                hapi2: "Zëvendëso: I = 20/4",
                hapi3: "Llogarit: I = 5 A"
            }
        },
        {
            name: "2. Rezistenca elektrike",
            sym: "R",
            form: "R = U / I\nR = ρ × L / S",
            unit: "Ω",
            otherUnits: "1Ω = 1V/A",
            teTjera: "Lidhja në seri: R = R₁ + R₂\nLidhja në paralel: 1/R = 1/R₁ + 1/R₂\nRezistenca varet nga temperatura: ρ = ρ₀{1 + α(t - t₀)}  (t₀ = 20°C)\nρ₀ → rezistiviteti specifik në 20°C\nα → koeficienti i byerjes termike.",
            nature: "Skalare",
            desc: "Pengesa qe lënda i paraqet kalimit të rrymës elektrike.",
            phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc",
            img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electrical-Resistance-1.png",
            vid: "https://www.youtube.com/embed/kM72Xa4cOVQ",
            gameUrl: "/loje rezistenca e rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, dy tela me gjatësi të njëjtë kanë rezistenca të barabarta. Telli i parë ka diametër dy herë më të madhe se telli i dytë. Gjeni raportin ρ₁/ρ₂.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: R = ρL/S; S = πd²/4; për R dhe L të njëjtë: ρ₁/S₁ = ρ₂/S₂ ⇒ ρ₁/ρ₂ = S₁/S₂</li>
      <li>Zëvendëso: S₁/S₂ = (d₁/d₂)² = 2² = 4</li>
      <li>Llogarit: ρ₁/ρ₂ = 4, pra ρ₁ = 4ρ₂</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, dy tela me gjatësi të njëjtë kanë rezistenca të barabarta. Telli i parë ka diametër dy herë më të madhe se telli i dytë. Gjeni raportin ρ₁/ρ₂.",
                zgjidhja: "4",
                hapi1: "Zgjidh: R = ρL/S; S = πd²/4; për R dhe L të njëjtë: ρ₁/S₁ = ρ₂/S₂ ⇒ ρ₁/ρ₂ = S₁/S₂",
                hapi2: "Zëvendëso: S₁/S₂ = (d₁/d₂)² = 2² = 4",
                hapi3: "Llogarit: ρ₁/ρ₂ = 4, pra ρ₁ = 4ρ₂"
            }
        },
        {
            name: "3. Fuqia e rrymes",
            sym: "P",
            form: "P = UI\nP = I² × R\nP = U² / R",
            unit: "W",
            otherUnits: "1W = 1J/s",
            teTjera: "",
            nature: "Skalare",
            desc: "Energjia elektrike në njësinë e kohës.",
            phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc",
            img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/dccircuits-dcp1.gif",
            vid: "https://www.youtube.com/embed/LdYNNRKgP9U",
            gameUrl: "/loje fuqia e rrymes (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një ngrohës elektrik ka të shënuar 220 V 500 W. Gjeni rrymën që e kalon.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: P = UI ⇒ I = P/U</li>
      <li>Zëvendëso: I = 500/220</li>
      <li>Llogarit: I ≈ 2.27 A</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një ngrohës elektrik ka të shënuar 220 V 500 W. Gjeni rrymën që e kalon.",
                zgjidhja: "2.27",
                hapi1: "Zgjidh: P = UI ⇒ I = P/U",
                hapi2: "Zëvendëso: I = 500/220",
                hapi3: "Llogarit: I ≈ 2.27 A"
            }
        },
        {
            name: "4. Tensioni",
            sym: "U",
            form: "U = IR",
            unit: "V",
            otherUnits: "1V = 1AΩ",
            teTjera: "",
            nature: "Skalare",
            desc: "Diferenca potencialesh ndërmjet 2 pikave. U = V₁ - V₂",
            phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/9VBatteryWithMeter.jpg/250px-9VBatteryWithMeter.jpg",
            vid: "https://www.youtube.com/embed/v6uEbMc5HaU",
            gameUrl: "/loja tensioni (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, për zhvendosjen e një ngarkese 3 C nga pika A në pika B, forca e fushës kryen punën 15 J. Gjeni diferencën e potencialeve midis A dhe B.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: U = W/q</li>
      <li>Zëvendëso: U = 15/3</li>
      <li>Llogarit: U = 5 V</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, për zhvendosjen e një ngarkese 3 C nga pika A në pika B, forca e fushës kryen punën 15 J. Gjeni diferencën e potencialeve midis A dhe B.",
                zgjidhja: "5",
                hapi1: "Zgjidh: U = W/q",
                hapi2: "Zëvendëso: U = 15/3",
                hapi3: "Llogarit: U = 5 V"
            }
        },
        {
            name: "5. Ngarkese elektrike",
            sym: "q",
            form: "q = ne\nq = It",
            unit: "C",
            otherUnits: "",
            teTjera: "",
            nature: "Skalare",
            desc: "Sasi elektronesh që merr ose jep trupi.",
            phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc",
            img: "https://www.physicsclassroom.com/Class/estatics/u8l1c1.gif",
            vid: "https://www.youtube.com/embed/kq34-EKUWUw",
            gameUrl: "/ngarkesekake.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një grimcë me ngarkesë q=3e qëndron në prehje midis dy pllakave. Gjeni ngarkesën në kulon. (e=1.6×10⁻¹⁹ C)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: q = n·e; n=3</li>
      <li>Zëvendëso: q = 3·1.6×10⁻¹⁹</li>
      <li>Llogarit: q = 4.8×10⁻¹⁹ C</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një grimcë me ngarkesë q=3e qëndron në prehje midis dy pllakave. Gjeni ngarkesën në kulon. (e=1.6×10⁻¹⁹ C)",
                zgjidhja: "4.8e-19",
                hapi1: "Zgjidh: q = n·e; n=3",
                hapi2: "Zëvendëso: q = 3·1.6×10⁻¹⁹",
                hapi3: "Llogarit: q = 4.8×10⁻¹⁹ C"
            }
        },
        {
            name: "6. Intensiteti i fushes elektrike",
            sym: "E",
            form: "E = F / q\nE = kq / εr²\nE = V / d",
            unit: "N/C",
            otherUnits: "V/m",
            teTjera: "Parimi i mbivendosjes së fushave: E = E₁ + E₂  (mbledhje vektoriale).",
            nature: "Vektoriale",
            desc: "Tregon forcën mbi ngarkesën provë ne 1 pikë te fushës.",
            phetUrl: "https://phet.colorado.edu/en/simulations/charges-and-fields",
            img: "https://www.physicsclassroom.com/Class/estatics/u8l4a1.gif",
            vid: "https://www.youtube.com/embed/mRDx78oJisY",
            gameUrl: "/loje intenciteti i fushes elektrike (1).html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një ngarkesë 3 mC zhvendoset 0.05 m midis dy pikash nën veprimin e fushës elektrike 2 N/C. Gjeni punën e kryer nga fusha.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: A = F·s = qE·s</li>
      <li>Zëvendëso: A = 3×10⁻³·2·0.05</li>
      <li>Llogarit: A = 0.0003 J = 3×10⁻⁴ J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një ngarkesë 3 mC zhvendoset 0.05 m midis dy pikash nën veprimin e fushës elektrike 2 N/C. Gjeni punën e kryer nga fusha.",
                zgjidhja: "0.0003",
                hapi1: "Zgjidh: A = F·s = qE·s",
                hapi2: "Zëvendëso: A = 3×10⁻³·2·0.05",
                hapi3: "Llogarit: A = 0.0003 J = 3×10⁻⁴ J"
            }
        },
        {
            name: "7. Kapaciteti elektrik",
            sym: "C",
            form: "C = q / U  (për kondensator)\nC = ε·ε₀·S / d  (për kondensator të rrafshët)",
            unit: "F",
            otherUnits: "1F = 1C/V",
            teTjera: "Lidhje në seri: 1/C = 1/C₁ + 1/C₂\nLidhje në paralel: C = C₁ + C₂",
            nature: "Skalare",
            desc: "Tregon aftësinë për të nxënë ngarkesa.",
            phetUrl: "https://phet.colorado.edu/en/simulations/capacitor-lab-basics",
            img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/capacitor-cap1.gif",
            vid: "https://www.youtube.com/embed/dXSJ0xuN14g",
            gameUrl: "/loja-kapaciteti.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, kapaciteti i një kondensatori është 12 μF. Nëse largësia midis pllakave zvogëlohet dy herë, sa bëhet kapaciteti? (C ∝ 1/d)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: C = εε₀S/d; nëse d bëhet d/2, C dyfishohet</li>
      <li>Zëvendëso: C' = 2·12</li>
      <li>Llogarit: C' = 24 μF</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, kapaciteti i një kondensatori është 12 μF. Nëse largësia midis pllakave zvogëlohet dy herë, sa bëhet kapaciteti? (C ∝ 1/d)",
                zgjidhja: "24",
                hapi1: "Zgjidh: C = εε₀S/d; nëse d bëhet d/2, C dyfishohet",
                hapi2: "Zëvendëso: C' = 2·12",
                hapi3: "Llogarit: C' = 24 μF"
            }
        },
        {
            name: "8. Potenciali elektrik",
            sym: "V",
            form: "V = W_p / q₀\nV = kq / r",
            unit: "V",
            otherUnits: "1V = 1J/C",
            teTjera: "V = kq / εr\nV = V₁ + V₂\nV pozitive për ngarkesën (+).\nV negative për ngarkesën (-).\nV_tokës = 0",
            nature: "Skalare",
            desc: "Tregon energjinë potenciale të ngarkesës provë në 1 pikë të fushës.",
            phetUrl: "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html",
            img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electric-Potential.png",
            vid: "https://www.youtube.com/embed/16Z_QNZmxOs",
            gameUrl: "/potencialipipi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, për zhvendosjen e ngarkesës 3 C nga pika A në B, forca e fushës kryen punën 15 J. Gjeni potencialin (diferencën e potencialeve) midis A dhe B.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: U = W/q = V_A - V_B</li>
      <li>Zëvendëso: U = 15/3</li>
      <li>Llogarit: U = 5 V</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, për zhvendosjen e ngarkesës 3 C nga pika A në B, forca e fushës kryen punën 15 J. Gjeni potencialin (diferencën e potencialeve) midis A dhe B.",
                zgjidhja: "5",
                hapi1: "Zgjidh: U = W/q = V_A - V_B",
                hapi2: "Zëvendëso: U = 15/3",
                hapi3: "Llogarit: U = 5 V"
            }
        }
    ],
    "Magnetizmi": [
        {
            name: "1. Induksioni magnetik",
            sym: "B",
            form: "B = F_max / (I·L)",
            unit: "T",
            otherUnits: "G (Gauss),  1T = 1N/Am",
            teTjera: "Parimi i mbivendosjes së fushave: B = B₁ + B₂  (mbledhje vektoriale)\nAfër përcjellësit drejtvizor: B = μ₀I / 2πd\nNë qendër të përcjellësit rrethor: B = μ₀I / 2R\nBobina e ngushtë: B = μ₀NI / 2R\nSolenoid: B = μ₀NI / l",
            nature: "Vektoriale",
            desc: "Madhësia vektoriale që karakterizon fushën magnetike në çdo pikë të saj.",
            phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law",
            img: "https://cdn.slidesharecdn.com/ss_thumbnails/induksioni-elektromagnetikcopycopy-231216203840-d38d7cd1-thumbnail.jpg?width=640&height=640&fit=bounds",
            vid: "https://www.youtube.com/embed/BXBhoQG73ZM",
            gameUrl: "/summagneticshiiii.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një jon me ngarkesë q dhe masë m lëviz me shpejtësi v, pingul me vijat e fushës magnetike B, me trajektore rrethore me rreze R. Nëse një jon tjetër me ngarkesë 2q dhe të njëjtën masë lëviz në reth me rreze R/2, gjeni raportin B'/B.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: R = mv/(qB); për rreze R/2 me ngarkesë 2q: R/2 = mv/(2qB') ⇒ B' = 4B</li>
      <li>Zëvendëso: B' = 4B</li>
      <li>Llogarit: Raporti B'/B = 4</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një jon me ngarkesë q dhe masë m lëviz me shpejtësi v, pingul me vijat e fushës magnetike B, me trajektore rrethore me rreze R. Nëse një jon tjetër me ngarkesë 2q dhe të njëjtën masë lëviz në reth me rreze R/2, gjeni raportin B'/B.",
                zgjidhja: "4",
                hapi1: "Zgjidh: R = mv/(qB); për rreze R/2 me ngarkesë 2q: R/2 = mv/(2qB') ⇒ B' = 4B",
                hapi2: "Zëvendëso: B' = 4B",
                hapi3: "Llogarit: Raporti B'/B = 4"
            }
        },
        {
            name: "2. Forca e Amperit",
            sym: "F",
            form: "F = BIL·sinα",
            unit: "N",
            otherUnits: "",
            teTjera: "Kahu i Forcës së Amperit gjendet me rregullin e dorës së majtë.\nPër 2 përcjellës drejtvizorë shumë të gjatë: F/Δl = μ₀I₁I₂ / 2πd",
            nature: "Vektoriale",
            desc: "Forca me të cilën fusha magnetike vepron mbi një përcjellës me rrymë të vendosur në të.",
            phetUrl: "https://phet.colorado.edu/en/simulation/magnets-and-electromagnets",
            img: "https://c8.alamy.com/comp/2AFR2XW/the-principles-of-physics-an-ampere-strength-of-thecurrent-465-galvanometer-this-is-an-instrument-for-measuringcurrent-strength-by-means-of-the-deflection-of-a-magneticneedle-when-placed-in-the-field-of-the-current-it-is-so-con-structed-that-either-the-deflection-angle-itself-or-somefunction-of-it-is-proportional-to-the-current-strength-466-thomsons-mirror-galvanottieter-a-simplified-forniis-shown-in-fig-386-and-the-complete-instrument-is-shownin-fig-386-insulated-wire-is-wound-on-a-bobbin-a-with-in-this-bobbin-is-hung-by-a-silk-fiber-a-little-circular-concavemirror-to-2AFR2XW.jpg",
            vid: "https://www.youtube.com/embed/xMIEpXxiyQM",
            gameUrl: "/lorencpipiundkaki.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një përcjellës 2 m me rrymë i vendoset pingul në fushë magnetike 0.5 T. Forca është 1 N. Gjeni intensitetin e rrymës.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: F = BIL ⇒ I = F/(BL)</li>
      <li>Zëvendëso: I = 1/(0.5·2)</li>
      <li>Llogarit: I = 1 A</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një përcjellës 2 m me rrymë i vendoset pingul në fushë magnetike 0.5 T. Forca është 1 N. Gjeni intensitetin e rrymës.",
                zgjidhja: "1",
                hapi1: "Zgjidh: F = BIL ⇒ I = F/(BL)",
                hapi2: "Zëvendëso: I = 1/(0.5·2)",
                hapi3: "Llogarit: I = 1 A"
            }
        },
        {
            name: "3. Fluksi Magnetik",
            sym: "Φ",
            form: "Φ = BS·cosα",
            unit: "Wb",
            otherUnits: "Mx (Maxwell),  1Wb = 1T×m²",
            teTjera: "Kur ndryshon B: ΔΦ = ΔB × S·cosα\nKur ndryshon S: ΔΦ = B·ΔS·cosα\nKur ndryshon α: ΔΦ = BS(cosα₂ - cosα₁)",
            nature: "Skalare",
            desc: "Numri i vijave të forcës së fushës magnetike pingul me një sipërfaqe të caktuar.",
            phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Surface_normal.png/330px-Surface_normal.png",
            vid: "https://www.youtube.com/embed/60h8RAqX3Yc",
            gameUrl: "/smbajmendca.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një spirë katrore me brinjë 2 cm (S = 4×10⁻⁴ m²) vendoset në fushë magnetike 2 T me planin pingul me vijat. Gjeni fluksin.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Φ = B·S (cosα = 1, pasi plani pingul me vijat, normales përgjatë B)</li>
      <li>Zëvendëso: Φ = 2·4×10⁻⁴</li>
      <li>Llogarit: Φ = 8×10⁻⁴ Wb = 0.0008 Wb</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një spirë katrore me brinjë 2 cm (S = 4×10⁻⁴ m²) vendoset në fushë magnetike 2 T me planin pingul me vijat. Gjeni fluksin.",
                zgjidhja: "0.0008",
                hapi1: "Zgjidh: Φ = B·S (cosα = 1, pasi plani pingul me vijat, normales përgjatë B)",
                hapi2: "Zëvendëso: Φ = 2·4×10⁻⁴",
                hapi3: "Llogarit: Φ = 8×10⁻⁴ Wb = 0.0008 Wb"
            }
        },
        {
            name: "4. F.e.m. e induktuar",
            sym: "ε",
            form: "ε = -N · ΔΦ / Δt",
            unit: "V",
            otherUnits: "mV",
            teTjera: "",
            nature: "Skalare",
            desc: "Tensioni elektrik që lind në një qark të mbyllur si pasojë e ndryshimit të fluksit magnetik.",
            phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law",
            img: "https://i.ytimg.com/vi/CAKnbju_0jo/sddefault.jpg",
            vid: "https://www.youtube.com/embed/FoXIrSy5akw",
            gameUrl: "/loja-femi-induktuar.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një bobinë me 30 spira del nga fusha magnetike 0.02 T për 0.5 s. Sipërfaqja e një spire është 4×10⁻⁴ m². Gjeni f.e.m. e induktuar (vlerë absolute).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: ε = N·ΔΦ/Δt; ΔΦ = B·S = 0.02·4×10⁻⁴ = 8×10⁻⁶ Wb</li>
      <li>Zëvendëso: ε = 30·8×10⁻⁶/0.5</li>
      <li>Llogarit: ε = 4.8×10⁻⁴ V = 0.48 mV</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një bobinë me 30 spira del nga fusha magnetike 0.02 T për 0.5 s. Sipërfaqja e një spire është 4×10⁻⁴ m². Gjeni f.e.m. e induktuar (vlerë absolute).",
                zgjidhja: "0.00048",
                hapi1: "Zgjidh: ε = N·ΔΦ/Δt; ΔΦ = B·S = 0.02·4×10⁻⁴ = 8×10⁻⁶ Wb",
                hapi2: "Zëvendëso: ε = 30·8×10⁻⁶/0.5",
                hapi3: "Llogarit: ε = 4.8×10⁻⁴ V = 0.48 mV"
            }
        },
        {
            name: "5. Rryme e induktuar",
            sym: "I_in",
            form: "I = ε / R",
            unit: "A",
            otherUnits: "mA",
            teTjera: "",
            nature: "Skalare",
            desc: "Rryma elektrike që lind në një përcjellës të mbyllur kur ai ndodhet në një fushë magnetike të ndryshueshme.",
            phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk5jc32xKcLRo2y10dfbSwmELAekKYKdSSw&s",
            vid: "https://www.youtube.com/embed/fOeWUbvqRgY",
            gameUrl: "/loja-rryma-induktuar.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2024, një spirë katrore me rezistencë 4 Ω del nga një fushë magnetike duke ndryshuar fluksin me 8×10⁻⁴ Wb për 0.05 s. Gjeni rrymën e induktuar (1 spirë).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: ε = ΔΦ/Δt; I = ε/R</li>
      <li>Zëvendëso: ε = 8×10⁻⁴/0.05 = 0.016 V; I = 0.016/4</li>
      <li>Llogarit: I = 0.004 A = 4 mA</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2024, një spirë katrore me rezistencë 4 Ω del nga një fushë magnetike duke ndryshuar fluksin me 8×10⁻⁴ Wb për 0.05 s. Gjeni rrymën e induktuar (1 spirë).",
                zgjidhja: "0.004",
                hapi1: "Zgjidh: ε = ΔΦ/Δt; I = ε/R",
                hapi2: "Zëvendëso: ε = 8×10⁻⁴/0.05 = 0.016 V; I = 0.016/4",
                hapi3: "Llogarit: I = 0.004 A = 4 mA"
            }
        }
    ],
    "Fizika Kuantike": [
        {
            name: "1. Energjia e fotonit",
            sym: "E",
            form: "E = hf",
            unit: "J",
            otherUnits: "eV  (1eV = 1.6×10⁻¹⁹ J)",
            teTjera: "Drita ka natyrë të dyfishtë: valore dhe grimcore. Ajo nuk rrezatohet në mënyrë të vazhdueshme por të ndërprerë me kuante. Për N grimca. E= N•h•f.",
            nature: "Skalare",
            desc: "Drita përbëhet nga fotonet të cilat kanë energji.",
            phetUrl: "https://phet.colorado.edu/en/simulation/photoelectric",
            img: "https://cdn.britannica.com/17/96917-050-DD28290F/X-rays-beam-effect-Compton-target-material-some.jpg",
            vid: "https://www.youtube.com/embed/ZhXCMoa6j58",
            gameUrl: "/loja4-energjia-fotonit.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një rrezatim elektromagnetik me frekuencë 0.6×10¹⁵ Hz bie mbi cezium (A_d=3×10⁻¹⁹ J) dhe ari (A_d=7.8×10⁻¹⁹ J). Gjeni energjinë e fotonit. (h=6.63×10⁻³⁴ J·s)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: E = hf</li>
      <li>Zëvendëso: E = 6.63×10⁻³⁴ · 0.6×10¹⁵</li>
      <li>Llogarit: E ≈ 3.98×10⁻¹⁹ J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një rrezatim elektromagnetik me frekuencë 0.6×10¹⁵ Hz bie mbi cezium (A_d=3×10⁻¹⁹ J) dhe ari (A_d=7.8×10⁻¹⁹ J). Gjeni energjinë e fotonit. (h=6.63×10⁻³⁴ J·s)",
                zgjidhja: "3.98e-19",
                hapi1: "Zgjidh: E = hf",
                hapi2: "Zëvendëso: E = 6.63×10⁻³⁴ · 0.6×10¹⁵",
                hapi3: "Llogarit: E ≈ 3.98×10⁻¹⁹ J"
            }
        },
        {
            name: "2. Puna e daljes",
            sym: "A<sub>d</sub>",
            form: "A<sub>d</sub> = h f<sub>prag</sub>",
            unit: "J",
            otherUnits: "eV",
            teTjera: "E = A_d + E_k është ekuacioni i Ajnshtajnit për fotoefektin. Për E ≥ A_d ndodh fotoefekti.",
            nature: "Skalare",
            desc: "Energjia minimale që i duhet elektronit për t'u shkëputur nga atomi.",
            phetUrl: "https://phet.colorado.edu/en/simulation/photoelectric",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Photoelectric_effect_in_a_solid_-_diagram.svg/1280px-Photoelectric_effect_in_a_solid_-_diagram.svg.png",
            vid: "https://www.youtube.com/embed/JNR4aQSGetg",
            gameUrl: "/loja1-fotoefekti-tower-defense.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, ceziumi ka punën e daljes 3×10⁻¹⁹ J. Gjeni frekuencën prag. (h=6.63×10⁻³⁴ J·s)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: A_d = hf_prag ⇒ f_prag = A_d/h</li>
      <li>Zëvendëso: f = 3×10⁻¹⁹ / (6.63×10⁻³⁴)</li>
      <li>Llogarit: f ≈ 4.52×10¹⁴ Hz</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, ceziumi ka punën e daljes 3×10⁻¹⁹ J. Gjeni frekuencën prag. (h=6.63×10⁻³⁴ J·s)",
                zgjidhja: "4.52e14",
                hapi1: "Zgjidh: A_d = hf_prag ⇒ f_prag = A_d/h",
                hapi2: "Zëvendëso: f = 3×10⁻¹⁹ / (6.63×10⁻³⁴)",
                hapi3: "Llogarit: f ≈ 4.52×10¹⁴ Hz"
            }
        },
        {
            name: "3. Gjatësia e valës së De Brojit",
            sym: "λ",
            form: "λ = h / mv",
            unit: "m",
            otherUnits: "nm",
            teTjera: "Vetëm për grimcat elementare shfaqet dukshëm vetia valore. Pra grimcat kanë natyrë të dyfishtë.",
            nature: "Skalare",
            desc: "Çdo grimcë me masë m që lëviz me shpejtësi v i përket një procesi valor.",
            phetUrl: "https://phet.colorado.edu/en/simulation/quantum-wave-interference",
            img: "https://www.sciencefacts.net/wp-content/uploads/2023/10/de-Broglie-Wavelength.jpg",
            vid: "https://www.youtube.com/embed/cYyFPFU6s_A",
            gameUrl: "/loja2-de-broglie.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, gjatësia e valës së De Broglit për një grimcë me masë m që lëviz me shpejtësi v llogaritet me: (zgjidhni formulën e saktë).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: λ = h/(mv) = h/p</li>
      <li>Analizo alternativat: A) mv/h, B) m/h, C) h/p, D) hp</li>
      <li>Përgjigja: λ = h/(mv)</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, gjatësia e valës së De Broglit për një grimcë me masë m që lëviz me shpejtësi v llogaritet me: (zgjidhni formulën e saktë).",
                zgjidhja: "h/(mv)",
                hapi1: "Zgjidh: λ = h/(mv) = h/p",
                hapi2: "Analizo alternativat: A) mv/h, B) m/h, C) h/p, D) hp",
                hapi3: "Përgjigja: λ = h/(mv)"
            }
        },
        {
            name: "4. Perioda e gjysmëzbërthimit",
            sym: "T<sub>1/2</sub>",
            form: "T<sub>1/2</sub> = ln2 / λ",
            unit: "s",
            otherUnits: "min, h, vite",
            teTjera: "Ligji i zbërthimit radioaktiv: N = N₀ e^(-λt).",
            nature: "Skalare",
            desc: "Koha gjatë së cilës zbërthehet gjysma e bërthamave radioaktive të lëndës së dhëne.",
            phetUrl: "https://phet.colorado.edu/en/simulation/alpha-decay",
            img: "https://assets-us-01.kc-usercontent.com/9dd25524-761a-000d-d79f-86a5086d4774/7e6a0ff6-374a-454d-891e-a7377ce7e211/half-life_lg.jpg?w=659&h=800&auto=format&q=75&fit=crop",
            vid: "https://www.youtube.com/embed/egT-BjjR1kc",
            gameUrl: "/loja3-gjysmezberthimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë, një izotop radioaktiv ka periodën e gjysmëzbërthimit 2 ore. Sa pjesë ka mbetur pas 6 orësh?</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Pas 6 orë = 3 perioda; mbetja = (1/2)³</li>
      <li>Zëvendëso: mbetja = 1/8</li>
      <li>Llogarit: Ka mbetur 1/8 e masës fillestare</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë, një izotop radioaktiv ka periodën e gjysmëzbërthimit 2 ore. Sa pjesë ka mbetur pas 6 orësh?",
                zgjidhja: "1/8",
                hapi1: "Zgjidh: Pas 6 orë = 3 perioda; mbetja = (1/2)³",
                hapi2: "Zëvendëso: mbetja = 1/8",
                hapi3: "Llogarit: Ka mbetur 1/8 e masës fillestare"
            }
        },
        {
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
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Gjeni energjinë e çliruar kur 1 mg mase shndërrohet plotësisht në energji. (c=3×10⁸ m/s)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: E = mc²; m = 1×10⁻⁶ kg</li>
      <li>Zëvendëso: E = 10⁻⁶·(3×10⁸)²</li>
      <li>Llogarit: E = 9×10¹⁰ J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Gjeni energjinë e çliruar kur 1 mg mase shndërrohet plotësisht në energji. (c=3×10⁸ m/s)",
                zgjidhja: "9e10",
                hapi1: "Zgjidh: E = mc²; m = 1×10⁻⁶ kg",
                hapi2: "Zëvendëso: E = 10⁻⁶·(3×10⁸)²",
                hapi3: "Llogarit: E = 9×10¹⁰ J"
            }
        }
    ],
    "Termodinamika": [
        {
            name: "1. Numri i molëve",
            sym: "n",
            form: "n = m / M",
            unit: "mol",
            otherUnits: "",
            teTjera: "",
            nature: "Skalare",
            desc: "Tregon sasinë e lëndës",
            phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrh05PBnhvU0qP7RPO3jcyZBK3FDPXZ-WXQ&s",
            vid: "https://www.youtube.com/embed/lAit7kgABr4",
            gameUrl: "/loja-numri-moleve.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një bombol me vëllim 5 litra përmban 1 mol gaz ideal. Gjeni numrin e moleve.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: n = m/M (këtu jepet drejtpërdrejt n=1 mol)</li>
      <li>Zëvendëso: n = 1 mol</li>
      <li>Llogarit: 1 mol</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një bombol me vëllim 5 litra përmban 1 mol gaz ideal. Gjeni numrin e moleve.",
                zgjidhja: "1",
                hapi1: "Zgjidh: n = m/M (këtu jepet drejtpërdrejt n=1 mol)",
                hapi2: "Zëvendëso: n = 1 mol",
                hapi3: "Llogarit: 1 mol"
            }
        },
        {
            name: "2. Vëllimi",
            sym: "V",
            form: "V = m / d",
            unit: "m³",
            otherUnits: "l (litër)",
            teTjera: "",
            nature: "Skalare",
            desc: "Hapsira që zë trupi.",
            phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Simple_Measuring_Cup.jpg",
            vid: "https://www.youtube.com/embed/tI0faFkAC2k",
            gameUrl: "/loja-vellimi.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një bombol me vëllim 5 litra përmban 1 mol gaz ideal në 300 K. Gjeni vëllumin në litra.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Vëllimi i enës = 5 litra</li>
      <li>Zëvendëso: V = 5 l</li>
      <li>Llogarit: 5 l</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një bombol me vëllim 5 litra përmban 1 mol gaz ideal në 300 K. Gjeni vëllumin në litra.",
                zgjidhja: "5",
                hapi1: "Zgjidh: Vëllimi i enës = 5 litra",
                hapi2: "Zëvendëso: V = 5 l",
                hapi3: "Llogarit: 5 l"
            }
        },
        {
            name: "3. Temperatura absolute",
            sym: "T",
            form: "T(k) = t(℃) + 273",
            unit: "K",
            otherUnits: "-",
            teTjera: "",
            nature: "Skalare",
            desc: "Temperatura që matet me K (kelvin)",
            phetUrl: "https://phet.colorado.edu/en/simulation/states-of-matter",
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-hOUCF0QGFxwKpgxIbUsv6hUUUmG9qapvfQGz74sZELicbCsgjc0W6Pg8hpKrOMkHXmFgOMssQ89IIQSHq-_g0mxRdb3OZ2DPnjOS83kKxAEQk_tYyZyjKbwRAYE45S43qvFymGFM_E6u2HU1xcf_K7U6WvC6REZJXnOnqEPytlll7wsZmnWgNj-D4kU/s636/temperature%20scales.webp",
            vid: "https://www.youtube.com/embed/MvrME5I3Iu8",
            gameUrl: "/loja-temperatura-absolute.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një gaz ideal fillon në temperaturën 127°C. Gjeni temperaturën absolute në Kelvin.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: T(K) = t(°C) + 273</li>
      <li>Zëvendëso: T = 127 + 273</li>
      <li>Llogarit: T = 400 K</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një gaz ideal fillon në temperaturën 127°C. Gjeni temperaturën absolute në Kelvin.",
                zgjidhja: "400",
                hapi1: "Zgjidh: T(K) = t(°C) + 273",
                hapi2: "Zëvendëso: T = 127 + 273",
                hapi3: "Llogarit: T = 400 K"
            }
        },
        {
            name: "4. Energjia e brendshme termike",
            sym: "U",
            form: "U = 3/2 · nRT  (gaz 1 atomik)\nU = 5/2 · nRT  (gaz 2 atomik)",
            unit: "J",
            otherUnits: "cal, kcal",
            teTjera: "",
            nature: "Skalare",
            desc: "Shuma e energjisë kinetike dhe potenciale të të gjitha grimcave që përbëjnë një sistem.",
            phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes",
            img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg",
            vid: "https://www.youtube.com/embed/mm_vaHqJvfw",
            gameUrl: "/loja-energjia-termike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, 1 mol gaz ideal njëatomik ndodhet në 300 K. Nëse i jepen 200 J nxehtësi në proces izohorik, gjeni ndryshimin e energjisë së brendshme. (R=8.31)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Në proces izohorik A=0; ΔU = Q = 200 J</li>
      <li>Zëvendëso: ΔU = 200 J</li>
      <li>Llogarit: ΔU = 200 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, 1 mol gaz ideal njëatomik ndodhet në 300 K. Nëse i jepen 200 J nxehtësi në proces izohorik, gjeni ndryshimin e energjisë së brendshme. (R=8.31)",
                zgjidhja: "200",
                hapi1: "Zgjidh: Në proces izohorik A=0; ΔU = Q = 200 J",
                hapi2: "Zëvendëso: ΔU = 200 J",
                hapi3: "Llogarit: ΔU = 200 J"
            }
        },
        {
            name: "5. Shtypja",
            sym: "P",
            form: "P = F / S",
            unit: "Pa",
            otherUnits: "atm, bar, mmHg, N/m²",
            teTjera: "Në gazra → shtypja tregon goditjet e molekulave me faqet e enës.\nTek lëngjet në thellësi: P = P_atmo + dgh\nLigji i Paskalit → Në të njëjtin nivel lëngu shtypja është e njëjtë.\nÇdo ndryshim shtypjeje në lëng përhapet njëlloj në të gjitha drejtimet.",
            nature: "Skalare",
            desc: "Forca që ushtrohet pingul mbi njësinë e sipërfaqes së një trupi.",
            phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties",
            img: "https://ademgllavica.wordpress.com/wp-content/uploads/2020/03/image-391.png?w=571",
            vid: "https://www.youtube.com/embed/LDGohoxWZY4",
            gameUrl: "/loja-shtypja.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një gaz ideal në 300 K ndodhet në një bombol 5 litra. Gjeni shtypjen fillestare (1 mol, R=8.31).</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: P·V = nRT ⇒ P = nRT/V; V = 5×10⁻³ m³</li>
      <li>Zëvendëso: P = 1·8.31·300/(5×10⁻³)</li>
      <li>Llogarit: P = 498600 Pa ≈ 4.99×10⁵ Pa</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një gaz ideal në 300 K ndodhet në një bombol 5 litra. Gjeni shtypjen fillestare (1 mol, R=8.31).",
                zgjidhja: "498600",
                hapi1: "Zgjidh: P·V = nRT ⇒ P = nRT/V; V = 5×10⁻³ m³",
                hapi2: "Zëvendëso: P = 1·8.31·300/(5×10⁻³)",
                hapi3: "Llogarit: P = 498600 Pa ≈ 4.99×10⁵ Pa"
            }
        },
        {
            name: "6. Nxehtësia specifike e lëndës",
            sym: "c",
            form: "c = Q / mΔt\nQ = c · m · Δt",
            unit: "J/kg·K",
            otherUnits: "",
            teTjera: "Q = c · m · Δt",
            nature: "Skalare",
            desc: "Tregon sasinë e nxehtësisë që i duhet 1kg lënde për tia ndryshuar temperaturën me një gradë.",
            phetUrl: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYVDdn8xNWJ3UWc7Hm6scbbUimOg5qHpVWg&s",
            vid: "https://www.youtube.com/embed/Wet3sna514o",
            gameUrl: "/loja-c-specifike.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Cila është nxehtësia që i duhet një trupi 2kg me c=800 J/kgK për tu ngrohur me 30 gradë?</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Q = c·m·Δt</li>
      <li>Zëvendëso: Q = 800·2·30</li>
      <li>Llogarit: 48000 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Cila është nxehtësia që i duhet një trupi 2kg me c=800 J/kgK për tu ngrohur me 30 gradë?",
                zgjidhja: "48000",
                hapi1: "Zgjidh: Q = c·m·Δt",
                hapi2: "Zëvendëso: Q = 800·2·30",
                hapi3: "Llogarit: 48000 J"
            },
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
                        svg: "<svg width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"180\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"30\" y1=\"140\" x2=\"280\" y2=\"140\" stroke=\"black\" stroke-width=\"2\"/><text x=\"15\" y=\"100\" transform=\"rotate(-90 15,100)\" font-family=\"Arial\" font-size=\"14\">Temperatura / °C</text><text x=\"240\" y=\"160\" font-family=\"Arial\" font-size=\"14\">Koha</text><text x=\"20\" y=\"145\" font-family=\"Arial\" font-size=\"12\">0</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\">100</text><line x1=\"35\" y1=\"60\" x2=\"40\" y2=\"60\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"40\" y1=\"60\" x2=\"260\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"5,5\"/><polyline points=\"40,170 80,140 120,140 200,60 260,60 280,30\" fill=\"none\" stroke=\"#22d3ee\" stroke-width=\"3\"/><text x=\"45\" y=\"175\" font-family=\"Arial\" font-size=\"12\">A</text><text x=\"75\" y=\"135\" font-family=\"Arial\" font-size=\"12\">B</text><text x=\"115\" y=\"135\" font-family=\"Arial\" font-size=\"12\">C</text><text x=\"200\" y=\"75\" font-family=\"Arial\" font-size=\"12\">D</text><text x=\"260\" y=\"75\" font-family=\"Arial\" font-size=\"12\">E</text><text x=\"280\" y=\"25\" font-family=\"Arial\" font-size=\"12\">F</text></svg>"
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
                        svg: "<svg width=\"320\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"15\" y=\"20\" font-family=\"Arial\" font-size=\"12\">temperatura °C</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><text x=\"290\" y=\"150\" font-family=\"Arial\" font-size=\"12\">t(min)</text><text x=\"15\" y=\"165\" font-family=\"Arial\" font-size=\"10\">0</text><text x=\"15\" y=\"145\" font-family=\"Arial\" font-size=\"10\">40</text><text x=\"15\" y=\"125\" font-family=\"Arial\" font-size=\"10\">80</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"10\">120</text><text x=\"10\" y=\"85\" font-family=\"Arial\" font-size=\"10\">160</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"10\">200</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"10\">240</text><text x=\"62\" y=\"175\" font-family=\"Arial\" font-size=\"10\">1</text><text x=\"87\" y=\"175\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"112\" y=\"175\" font-family=\"Arial\" font-size=\"10\">3</text><text x=\"137\" y=\"175\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"162\" y=\"175\" font-family=\"Arial\" font-size=\"10\">5</text><text x=\"187\" y=\"175\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"212\" y=\"175\" font-family=\"Arial\" font-size=\"10\">7</text><text x=\"237\" y=\"175\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"262\" y=\"175\" font-family=\"Arial\" font-size=\"10\">9</text><line x1=\"40\" y1=\"120\" x2=\"65\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"65\" y1=\"160\" x2=\"65\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"90\" y1=\"160\" x2=\"90\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"60\" x2=\"165\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"165\" y1=\"160\" x2=\"165\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"215\" y1=\"160\" x2=\"215\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"40\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"2,2\"/><polyline points=\"40,160 65,120 90,120 165,60 215,60 240,40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>"
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
                        svg: "<svg width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"15\" y=\"25\" font-family=\"Arial\" font-size=\"12\">t(°C)</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"160\" x2=\"260\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><text x=\"245\" y=\"175\" font-family=\"Arial\" font-size=\"12\">t(min)</text><text x=\"20\" y=\"165\" font-family=\"Arial\" font-size=\"10\">0</text><text x=\"20\" y=\"135\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"20\" y=\"105\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"20\" y=\"75\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"20\" y=\"45\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"75\" y=\"175\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"115\" y=\"175\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"155\" y=\"175\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"195\" y=\"175\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"230\" y=\"175\" font-family=\"Arial\" font-size=\"10\">10</text><text x=\"45\" y=\"155\" font-family=\"Arial\" font-size=\"10\">O</text><text x=\"115\" y=\"110\" font-family=\"Arial\" font-size=\"10\">A</text><text x=\"175\" y=\"110\" font-family=\"Arial\" font-size=\"10\">B</text><text x=\"245\" y=\"35\" font-family=\"Arial\" font-size=\"10\">C</text><line x1=\"40\" y1=\"115\" x2=\"120\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"120\" y1=\"160\" x2=\"120\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"180\" y1=\"160\" x2=\"180\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"40\" y1=\"40\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"4,4\"/><polyline points=\"40,160 120,115 180,115 240,40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>"
                    }
                ]
            }
        },
        {
            name: "7. Nxehtësia specifike e shkrirjes",
            sym: "L_sh",
            form: "L_sh = Q / m",
            unit: "J/kg",
            otherUnits: "",
            teTjera: "Q = L_sh · m",
            nature: "Skalare",
            desc: "Nxehtësia specifike e shkrirjes është nxehtësia që i duhet 1 kg lënde për ta shkrirë plotësisht, marrë në temperaturën e shkrirjes.",
            phetUrl: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html",
            img: "https://chemistrytalk.org/wp-content/uploads/2023/03/fusion-article-heating-curve-standard-1-1024x679.png",
            vid: "https://www.youtube.com/embed/JzaVEQoL578",
            gameUrl: "/loja-lsh.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Sa nxehtësi nevojitet për të shkrirë 2kg akull në 0℃? (L_sh = 334000 J/kg)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Q = L_sh·m</li>
      <li>Zëvendëso: Q = 334000·2</li>
      <li>Llogarit: 668000 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Sa nxehtësi nevojitet për të shkrirë 2kg akull në 0℃? (L_sh = 334000 J/kg)",
                zgjidhja: "668000",
                hapi1: "Zgjidh: Q = L_sh·m",
                hapi2: "Zëvendëso: Q = 334000·2",
                hapi3: "Llogarit: 668000 J"
            },
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
                        svg: "<svg width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"180\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"30\" y1=\"140\" x2=\"280\" y2=\"140\" stroke=\"black\" stroke-width=\"2\"/><text x=\"15\" y=\"100\" transform=\"rotate(-90 15,100)\" font-family=\"Arial\" font-size=\"14\">Temperatura / °C</text><text x=\"240\" y=\"160\" font-family=\"Arial\" font-size=\"14\">Koha</text><text x=\"20\" y=\"145\" font-family=\"Arial\" font-size=\"12\">0</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\">100</text><line x1=\"35\" y1=\"60\" x2=\"40\" y2=\"60\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"40\" y1=\"60\" x2=\"260\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"5,5\"/><polyline points=\"40,170 80,140 120,140 200,60 260,60 280,30\" fill=\"none\" stroke=\"#22d3ee\" stroke-width=\"3\"/><text x=\"45\" y=\"175\" font-family=\"Arial\" font-size=\"12\">A</text><text x=\"75\" y=\"135\" font-family=\"Arial\" font-size=\"12\">B</text><text x=\"115\" y=\"135\" font-family=\"Arial\" font-size=\"12\">C</text><text x=\"200\" y=\"75\" font-family=\"Arial\" font-size=\"12\">D</text><text x=\"260\" y=\"75\" font-family=\"Arial\" font-size=\"12\">E</text><text x=\"280\" y=\"25\" font-family=\"Arial\" font-size=\"12\">F</text></svg>"
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
                        svg: "<svg width=\"320\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"15\" y=\"20\" font-family=\"Arial\" font-size=\"12\">temperatura °C</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><text x=\"290\" y=\"150\" font-family=\"Arial\" font-size=\"12\">t(min)</text><text x=\"15\" y=\"165\" font-family=\"Arial\" font-size=\"10\">0</text><text x=\"15\" y=\"145\" font-family=\"Arial\" font-size=\"10\">40</text><text x=\"15\" y=\"125\" font-family=\"Arial\" font-size=\"10\">80</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"10\">120</text><text x=\"10\" y=\"85\" font-family=\"Arial\" font-size=\"10\">160</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"10\">200</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"10\">240</text><text x=\"62\" y=\"175\" font-family=\"Arial\" font-size=\"10\">1</text><text x=\"87\" y=\"175\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"112\" y=\"175\" font-family=\"Arial\" font-size=\"10\">3</text><text x=\"137\" y=\"175\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"162\" y=\"175\" font-family=\"Arial\" font-size=\"10\">5</text><text x=\"187\" y=\"175\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"212\" y=\"175\" font-family=\"Arial\" font-size=\"10\">7</text><text x=\"237\" y=\"175\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"262\" y=\"175\" font-family=\"Arial\" font-size=\"10\">9</text><line x1=\"40\" y1=\"120\" x2=\"65\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"65\" y1=\"160\" x2=\"65\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"90\" y1=\"160\" x2=\"90\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"60\" x2=\"165\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"165\" y1=\"160\" x2=\"165\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"215\" y1=\"160\" x2=\"215\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"40\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"2,2\"/><polyline points=\"40,160 65,120 90,120 165,60 215,60 240,40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>"
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
                        svg: "<svg width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"15\" y=\"25\" font-family=\"Arial\" font-size=\"12\">t(°C)</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"160\" x2=\"260\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><text x=\"245\" y=\"175\" font-family=\"Arial\" font-size=\"12\">t(min)</text><text x=\"20\" y=\"165\" font-family=\"Arial\" font-size=\"10\">0</text><text x=\"20\" y=\"135\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"20\" y=\"105\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"20\" y=\"75\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"20\" y=\"45\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"75\" y=\"175\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"115\" y=\"175\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"155\" y=\"175\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"195\" y=\"175\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"230\" y=\"175\" font-family=\"Arial\" font-size=\"10\">10</text><text x=\"45\" y=\"155\" font-family=\"Arial\" font-size=\"10\">O</text><text x=\"115\" y=\"110\" font-family=\"Arial\" font-size=\"10\">A</text><text x=\"175\" y=\"110\" font-family=\"Arial\" font-size=\"10\">B</text><text x=\"245\" y=\"35\" font-family=\"Arial\" font-size=\"10\">C</text><line x1=\"40\" y1=\"115\" x2=\"120\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"120\" y1=\"160\" x2=\"120\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"180\" y1=\"160\" x2=\"180\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"40\" y1=\"40\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"4,4\"/><polyline points=\"40,160 120,115 180,115 240,40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>"
                    }
                ]
            }
        },
        {
            name: "8. Nxehtësia specifike e avullimit",
            sym: "L_av",
            form: "L_av = Q / m\nQ_av = L_av · m",
            unit: "J/kg",
            otherUnits: "",
            teTjera: "Q_av = L_av · m",
            nature: "Skalare",
            desc: "Nxehtësia specifike e avullimit është nxehtësia që i duhet 1 kg lënde për ta avulluar plotësisht, marrë në temperaturën e vlimit.",
            phetUrl: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_all.html",
            img: "https://www.chemistrylearner.com/wp-content/uploads/2022/10/Heat-of-Vaporization.jpg",
            vid: "https://www.youtube.com/embed/ocV8l66Ssec",
            gameUrl: "/loja-lav.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Sa nxehtësi (Q_av) i duhen 2 kg ujë në 100℃ për tu avulluar plotësisht? (L_av = 2300000 J/kg)</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: Q = L_av·m</li>
      <li>Zëvendëso: Q = 2300000·2</li>
      <li>Llogarit: 4600000 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Sa nxehtësi (Q_av) i duhen 2 kg ujë në 100℃ për tu avulluar plotësisht? (L_av = 2300000 J/kg)",
                zgjidhja: "4600000",
                hapi1: "Zgjidh: Q = L_av·m",
                hapi2: "Zëvendëso: Q = 2300000·2",
                hapi3: "Llogarit: 4600000 J"
            },
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
                        svg: "<svg width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"180\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"30\" y1=\"140\" x2=\"280\" y2=\"140\" stroke=\"black\" stroke-width=\"2\"/><text x=\"15\" y=\"100\" transform=\"rotate(-90 15,100)\" font-family=\"Arial\" font-size=\"14\">Temperatura / °C</text><text x=\"240\" y=\"160\" font-family=\"Arial\" font-size=\"14\">Koha</text><text x=\"20\" y=\"145\" font-family=\"Arial\" font-size=\"12\">0</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"12\">100</text><line x1=\"35\" y1=\"60\" x2=\"40\" y2=\"60\" stroke=\"black\" stroke-width=\"1\"/><line x1=\"40\" y1=\"60\" x2=\"260\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"5,5\"/><polyline points=\"40,170 80,140 120,140 200,60 260,60 280,30\" fill=\"none\" stroke=\"#22d3ee\" stroke-width=\"3\"/><text x=\"45\" y=\"175\" font-family=\"Arial\" font-size=\"12\">A</text><text x=\"75\" y=\"135\" font-family=\"Arial\" font-size=\"12\">B</text><text x=\"115\" y=\"135\" font-family=\"Arial\" font-size=\"12\">C</text><text x=\"200\" y=\"75\" font-family=\"Arial\" font-size=\"12\">D</text><text x=\"260\" y=\"75\" font-family=\"Arial\" font-size=\"12\">E</text><text x=\"280\" y=\"25\" font-family=\"Arial\" font-size=\"12\">F</text></svg>"
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
                        svg: "<svg width=\"320\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"15\" y=\"20\" font-family=\"Arial\" font-size=\"12\">temperatura °C</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><text x=\"290\" y=\"150\" font-family=\"Arial\" font-size=\"12\">t(min)</text><text x=\"15\" y=\"165\" font-family=\"Arial\" font-size=\"10\">0</text><text x=\"15\" y=\"145\" font-family=\"Arial\" font-size=\"10\">40</text><text x=\"15\" y=\"125\" font-family=\"Arial\" font-size=\"10\">80</text><text x=\"10\" y=\"105\" font-family=\"Arial\" font-size=\"10\">120</text><text x=\"10\" y=\"85\" font-family=\"Arial\" font-size=\"10\">160</text><text x=\"10\" y=\"65\" font-family=\"Arial\" font-size=\"10\">200</text><text x=\"10\" y=\"45\" font-family=\"Arial\" font-size=\"10\">240</text><text x=\"62\" y=\"175\" font-family=\"Arial\" font-size=\"10\">1</text><text x=\"87\" y=\"175\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"112\" y=\"175\" font-family=\"Arial\" font-size=\"10\">3</text><text x=\"137\" y=\"175\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"162\" y=\"175\" font-family=\"Arial\" font-size=\"10\">5</text><text x=\"187\" y=\"175\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"212\" y=\"175\" font-family=\"Arial\" font-size=\"10\">7</text><text x=\"237\" y=\"175\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"262\" y=\"175\" font-family=\"Arial\" font-size=\"10\">9</text><line x1=\"40\" y1=\"120\" x2=\"65\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"65\" y1=\"160\" x2=\"65\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"90\" y1=\"160\" x2=\"90\" y2=\"120\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"60\" x2=\"165\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"165\" y1=\"160\" x2=\"165\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"215\" y1=\"160\" x2=\"215\" y2=\"60\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"40\" y1=\"40\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"2,2\"/><line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"2,2\"/><polyline points=\"40,160 65,120 90,120 165,60 215,60 240,40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>"
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
                        svg: "<svg width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"15\" y=\"25\" font-family=\"Arial\" font-size=\"12\">t(°C)</text><line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"40\" y1=\"160\" x2=\"260\" y2=\"160\" stroke=\"black\" stroke-width=\"2\"/><text x=\"245\" y=\"175\" font-family=\"Arial\" font-size=\"12\">t(min)</text><text x=\"20\" y=\"165\" font-family=\"Arial\" font-size=\"10\">0</text><text x=\"20\" y=\"135\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"20\" y=\"105\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"20\" y=\"75\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"20\" y=\"45\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"75\" y=\"175\" font-family=\"Arial\" font-size=\"10\">2</text><text x=\"115\" y=\"175\" font-family=\"Arial\" font-size=\"10\">4</text><text x=\"155\" y=\"175\" font-family=\"Arial\" font-size=\"10\">6</text><text x=\"195\" y=\"175\" font-family=\"Arial\" font-size=\"10\">8</text><text x=\"230\" y=\"175\" font-family=\"Arial\" font-size=\"10\">10</text><text x=\"45\" y=\"155\" font-family=\"Arial\" font-size=\"10\">O</text><text x=\"115\" y=\"110\" font-family=\"Arial\" font-size=\"10\">A</text><text x=\"175\" y=\"110\" font-family=\"Arial\" font-size=\"10\">B</text><text x=\"245\" y=\"35\" font-family=\"Arial\" font-size=\"10\">C</text><line x1=\"40\" y1=\"115\" x2=\"120\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"120\" y1=\"160\" x2=\"120\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"180\" y1=\"160\" x2=\"180\" y2=\"115\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"40\" y1=\"40\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"4,4\"/><line x1=\"240\" y1=\"160\" x2=\"240\" y2=\"40\" stroke=\"black\" stroke-dasharray=\"4,4\"/><polyline points=\"40,160 120,115 180,115 240,40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/></svg>"
                    }
                ]
            }
        },
        {
            name: "9. Puna në TD",
            sym: "A",
            form: "A = p ΔV",
            unit: "J/kg",
            otherUnits: "1J = 1 N·m",
            teTjera: "Tek grafiku p(V) puna gjendet me syprinën në grafik. Tek procesi izohorik A = 0 sepse nuk ndryshon vëllimi.",
            nature: "Skalare",
            desc: "Efekti zhvendosës i një force të brendshme të gazit. ( Puna e gazit )",
            phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties",
            img: "https://saylordotorg.github.io/text_general-chemistry-principles-patterns-and-applications-v1.0/section_22/b47b25398b05c27b31c9824243dfa2e0.jpg",
            vid: "https://www.youtube.com/embed/ocV8l66Ssec",
            gameUrl: "/loja-puna-td.html",
            ushtrime: `<div class="space-y-4 text-slate-600 text-left">
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
    <p class="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs">1</span>
      Ushtrim (stil Maturë):
    </p>
    <p class="leading-relaxed">Në Maturë 2025, një gaz ideal zgjerohet izobarikisht nga V₁=1 m³ në V₂=3 m³ nën shtypje 100000 Pa. Gjeni punën e kryer.</p>
  </div>
  <div class="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
    <p class="font-bold text-emerald-800 mb-2">Zgjidhje:</p>
    <ul class="list-decimal list-inside space-y-1 text-emerald-900">
      <li>Zgjidh: A = p·ΔV; ΔV = 3 - 1 = 2 m³</li>
      <li>Zëvendëso: A = 100000·2</li>
      <li>Llogarit: A = 200000 J</li>
    </ul>
  </div>
</div>`,
            ushtrimInteraktiv: {
                pyetja: "Në Maturë 2025, një gaz ideal zgjerohet izobarikisht nga V₁=1 m³ në V₂=3 m³ nën shtypje 100000 Pa. Gjeni punën e kryer.",
                zgjidhja: "200000",
                hapi1: "Zgjidh: A = p·ΔV; ΔV = 3 - 1 = 2 m³",
                hapi2: "Zëvendëso: A = 100000·2",
                hapi3: "Llogarit: A = 200000 J"
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
    steps: ["Fërko gjilpërën me magnet në një drejtim për 30–40 sekonda.", "Vendose gjilpërën mbi copën e letrës ose tapës.", "Vendose me kujdes në ujë.", "Vëzhgo drejtimin që merr gjilpëra."],
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
