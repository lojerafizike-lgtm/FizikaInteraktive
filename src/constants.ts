import { PhysicsData, Simulation, PhysicsGame } from './types';

export const ALL_PHYSICS_DATA: PhysicsData = {
    "Kinematika": [
        { name: "1. Koordinata", sym: "x, y, z", form: "x=xo+vt (L.D.NJ)  x=xo+vot+at²/2 (L.D.Nj.ND)", unit: "m", otherUnits: "miles(1km=0.621milje), foot(1ft=30.48cm), inch(1ft=12inch)", teTjera: "", nature: "Vektoriale", desc: "Pozicioni i një pike materiale në hapësirë në raport me një sistem referimi të zgjedhur.", phetUrl: "https://phet.colorado.edu/en/simulation/graphing-lines", img: "https://d20khd7ddkh5ls.cloudfront.net/img11_66.jpg", vid: "https://www.youtube.com/embed/MCDL8EXYIFo", gameUrl: "/loja-koordinata.html" },
        { name: "2. Zhvendosja", sym: "Δx", form: "Δx = vt   Δx=vot + at²/2  v²-vo²=2aΔx  Δx=(v+vo)t/2", unit: "m", otherUnits: " miles(1milje=1.609km), 1 pash=1.5m, foot(1ft=30.48cm), inch(1 inch=`2.54 cm)", teTjera: "", nature: "Vektoriale", desc: "Vektori që bashkon pozicionin fillestar me atë përfundimtar të trupit gjatë lëvizjes.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://www.sciencefacts.net/wp-content/uploads/2022/10/Displacement-Formula.jpg", vid: "https://www.youtube.com/embed/m4jrhAckbK0", gameUrl: "/loja-zhvendosja.html" },
        { name: "3. Rruga e përshkuar", sym: "l", form: "l=vt (L.D.NJ   l=2ΠR (L.RR.NJ)", unit: "m", otherUnits: "cm, km", teTjera: "", nature: "Skalare", desc: "Gjatësia e trajektores së përshkuar nga trupi gjatë një intervali kohe.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://i.ytimg.com/vi/XS4QMCYGgtM/maxresdefault.jpg", vid: "https://www.youtube.com/embed/m4jrhAckbK0", gameUrl: "/loja-rruga.html" },
        { name: "4. Koha", sym: "t", form: "t=l/v", unit: "s", otherUnits: "min, ore, ditë", teTjera: "", nature: "Skalare", desc: "Madhësia që përcakton kohëzgjatjen e një procesi fizik ose renditjen e ngjarjeve.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://rhapsodyinbooks.wordpress.com/wp-content/uploads/2017/05/worldline.jpg?w=584&h=519", vid: "https://www.youtube.com/embed/Rso3Es2cFOc", gameUrl: "/loja-koha.html" },
        { name: "5. Interval kohor", sym: "Δt", form: "Δt = t - t₀", unit: "s", otherUnits: "min, ore, ditë", teTjera: "", nature: "Skalare", desc: "Diferenca midis dy çasteve kohore të njëpasnjëshme.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", vid: "https://www.youtube.com/embed/HyyGiVpSk6c", gameUrl: "/loja-intervali.html" },
        { name: "6. Shpejtësia mesatare", sym: "Vmes", form: "v.mes = l/t", unit: "m/s", otherUnits: "km/h", teTjera: "", nature: "Vektoriale", desc: "Raporti i zhvendosjes me intervalin e kohës gjatë të cilit ka ndodhur kjo zhvendosje.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://study.com/cimages/videopreview/screencapture_measuringspeed_140291.jpg", vid: "https://www.youtube.com/embed/UVKbAAw07Bg", gameUrl: "/loja-shpejtesia-mesatare.html" },
        { name: "7. Shpejtësia e castit", sym: "v", form: "v =Δx / Δt", unit: "m/s", otherUnits: "km/h  c=3 x 10⁸m/s eshte shpejtesia e drites ne zbrazeti (shpejtesia me e madhe ne natyre)", teTjera: "", nature: "Vektoriale", desc: "Shpejtësia e trupit në një çast të caktuar të kohës ose në një pikë të dhënë të trajektores.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://upload.wikimedia.org/wikipedia/sq/e/e2/Shpejt%C3%ABsia_e_castit.png", vid: "https://www.youtube.com/embed/9fWp9nlEJHo", gameUrl: "/loja-shpejtesia-castit.html" },
        { name: "8. Nxitimi", sym: "a", form: "a = Δv / Δt  a=F/m", unit: "m/s²", otherUnits: "N/kg", teTjera: "Te grafiku v(t) pjerrtësia tregon nxitimin.    Në lëvizje të përshpejtuar a dhe vo kanë shenjë të njëjtë.  Në lëvizje të ngadalësuar a dhe vo kanë shenjë të kundërt.", nature: "Vektoriale", desc: "Madhësia që tregon ndryshimin e shpejtësisë në njësinë e kohë.", phetUrl: "https://phet.colorado.edu/en/simulation/moving-man", img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-7.png?w=929", vid: "https://www.youtube.com/embed/ks-yBHtiRqM", gameUrl: "/nxitimi.html" },
        { name: "9. Nxitimi i renies se lire", sym: "g", form: "g =GM/R²  G=6,67 x 10⁻¹¹Nm²/kg²  G → γ", unit: "N/kg", otherUnits: "m/s²", teTjera: " Afër tokës g=9,8 m/s². Në pole g rritet pak. Në lartësi h nga planeti → g= M/(R+h)² ", nature: "Vektoriale", desc: "Nxitimi me të cilin bien trupat në afërsi të sipërfaqes së Tokës nën veprimin e gravitetit.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Levizja_e_projektilit.jpg", vid: "https://www.youtube.com/embed/Mr-KXDD6-5g" },
        { name: "10. Perioda", sym: "T", form: "T = 1/f ose T=t/N", unit: "s", otherUnits: "min, h", teTjera: "", nature: "Skalare", desc: "Koha e nevojshme për të kryer një rrotullim të plotë ose një lëkundje të plotë.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Simple_harmonic_motion.svg", vid: "https://www.youtube.com/embed/_LPGBHpSZpA" },
        { name: "11. Frekuenca", sym: "f", form: "f = 1/T  f=N/t", unit: "Hz", otherUnits: "s⁻¹, rrotullime/s ose lëkundje/s ", teTjera: "", nature: "Skalare", desc: "Numri i lëkundjeve (ose rrotullimeve) në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://www.guiahardware.es/wp-content/uploads/2023/07/frecuencia-1024x530.png", vid: "https://www.youtube.com/embed/TT4oSP4VdkA" },
        { name: "12. Shpejtësia këndore", sym: "ω", form: "ω = θ / t", unit: "rad/s", otherUnits: "-", teTjera: " w=2Π/T=2Πf ose w=V/R (L.RR.NS)", nature: "Vektoriale", desc: "Këndi në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Angular_velocity.svg/1280px-Angular_velocity.svg.png", vid: "https://www.youtube.com/embed/WQ9AH2S8B6Y" },
        { name: "13. Shpejtësia lineare", sym: "v", form: "V = ω * r, V=l/t=2πr/T", unit: "m/s", otherUnits: "km/h, c=3 x 10⁸m/s eshte shpejtesia e drites ne zbrazeti (shpejtesia me e madhe ne natyre)", teTjera: "", nature: "Vektoriale", desc: "Rruga e kryer ne njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExpNKbYnHRikFuixua9cmGqedwh3bo81Y3Q&s", vid: "https://www.youtube.com/embed/udhu6-bp_O0" },
        { name: "14. Nxitimi qendërsynues", sym: "a_c", form: "a_c = v² / r, aqs=v²/R=w²R=4π²f²R", unit: "m/s²", otherUnits: "-", teTjera: "", nature: "Vektoriale", desc: "Nxitimi qendërsynues lidhet me ndryshimin e vektorit të shpejtësisë në njësinë e kohës gjatë lëvizjes rrethore.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", vid: "https://www.youtube.com/embed/c2rgbtG43_4" },
        { name: "15. Këndi", sym: "θ", form: "θ = s / r", unit: "rad", otherUnits: "gradë", teTjera: "", nature: "Skalare", desc: "Hapësira midis dy rrezeve që nisin nga e njëjta pikë, e matur në radian.", phetUrl: "https://phet.colorado.edu/en/simulation/projectile-motion", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Angle_measure.svg/250px-Angle_measure.svg.png", vid: "https://www.youtube.com/embed/XhEX-4eDb-c" },
        { name: "16. Nxitimi këndor", sym: "α", form: "α = Δω / Δt", unit: "rad/s²", otherUnits: "-", teTjera: "α=w-wo/t  at=αR lidhja ndërmjet nxitimit kongurencial dhe këndor.  w=wo+αt (L.RR.NJ.ND.). ", nature: "Vektoriale", desc: "Ndryshimi i shpejtësise këndore ne njësine e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/pendulum-lab", img: "https://sq.swewe.net/upimage/21/ca/21cac8394f2f5a72c4110c172e1372e0.jpg", vid: "https://www.youtube.com/embed/kXj4We-it4k" }
    ],
    "Dinamika": [
        { name: "1. Forca", sym: "F", form: "F = ma", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "3 Ligjet e Njutonit:   1- Nëse s'ka F ose Fʀ=0 trupi në prehje ose L.D.NJ.  2- a= F/m a⁓F a⌁m  3- F₂,₁ = – F₁,₂ ", nature: "Vektoriale", desc: "Veprimi i një trupi mbi një tjetër.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDRnwxNuMkmLvPY5p1CvEK61OuaW7qVGHb1pcym-TbWBBNj1s1PxvkIwFjcHVjtAysPbi-93OW7bIcQCc5vSX_jHq9B0gmYAhjaJOOsG8XO5qCvo6wmz1N3W2_JRNtIUKZkdFrMv-6bkA/s1600/4c004beab8150bef9ba245b7f3b589f4cf708850.gif", vid: "https://www.youtube.com/embed/56y06xK21es", gameUrl: "/loja-forca.html" },
        { name: "2. Masa", sym: "m", form: "m=d×v", unit: "kg", otherUnits: "1 pound=0,454kg,1 ton=1000 kg, 1 oke≈ 1,3kg( njësi e vjetër shtëpiake ) ", teTjera: "", nature: "Skalare", desc: "Masa e trupit lidhet me sasinë e lëndës që ai përmban dhe tegon inertësinë e trupit.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://kluszeljka.weebly.com/uploads/3/8/5/5/38551443/published/te-ina-tela.jpg?1615759127", vid: "https://www.youtube.com/embed/6NV5ltITNx4", gameUrl: "/loja-masa.html" },
        { name: "3. Pesha", sym: "P", form: "P = N", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca me të cilën trupi mëshon mbi mbështetësen ose tërheq fijen ku është varur.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://bayernboy025.wordpress.com/wp-content/uploads/2025/03/image-6.jpeg?w=332", vid: "https://www.youtube.com/embed/g4mGv0g3Tq0", gameUrl: "/loja-pesha.html" },
        { name: "4. Forca e rendeses", sym: "G", form: "G = mg", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca me të cilën Toka tërheq trupat drejt qendrës së saj.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", img: "https://askabiologist.asu.edu/sites/default/files/resources/articles/space_physiology/shuttle_earth_albanian.gif", vid: "https://www.youtube.com/embed/gTL_WeQ3H7o", gameUrl: "/loja-rendesa.html" },
        { name: "5. Forca e fërkimit", sym: "F_f", form: "F_f = μN", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Vektoriale", desc: "Forca që lind gjatë sipërfaqes fërkuese të 2 trupave dhe pengon rrëshqitjen.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://images.my.labster.com/v2/NL1/803332e1-5a17-4356-90f0-4daa5a9584f0/NL1_Friction_Force_.en.x1024.png", vid: "https://www.youtube.com/embed/2Tz7osdJkiM", gameUrl: "/loja-ferkimi.html" },
        { name: "6. Koeficienti i fërkimit", sym: "μ", form: "μ = F_f / N", unit: "—", otherUnits: "1N=1kg m/s²", teTjera: "", nature: "Skalare", desc: "Madhësi pa njësi që tregon ashpërsine e sipërfaqeve takuese.", phetUrl: "https://phet.colorado.edu/en/simulation/forces-and-motion-basics", img: "https://force-channel.com/wp-content/uploads/2023/11/en_%E6%91%A9%E6%93%A6%E5%8A%9B%E3%81%A8%E6%91%A9%E6%93%A6%E4%BF%82%E6%95%B0%E3%81%AE%E9%96%A2%E4%BF%82.jpg", vid: "https://www.youtube.com/embed/BKQ8gQLQRnI", gameUrl: "/loja-koef-ferkimi.html" },
        { name: "7. Forca elastike", sym: "F_e", form: "F = -kx", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: "Ligji i Hukut  Forca elastike është në përpjestim të drejtë me shformimin dhe ka kah të kundërt me të.", nature: "Vektoriale", desc: "Forca elastike është forca që lind nga trupi i shformuar mbi atë që shkakton shformimin.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Spring-mass2.svg/250px-Spring-mass2.svg.png", vid: "https://www.youtube.com/embed/XaXpwQK_UjI", gameUrl: "/loja-elastike.html" },
        { name: "8. Konstanta elastike", sym: "k", form: "k = F / x", unit: "N/m", otherUnits: "-", teTjera: " Kufiri i elasticitetit është pika .  Kufiri i soliditetit është pika ku teli këputet. Tek grafiku F(x) → k=përpjestim", nature: "Skalare", desc: "Karakteristikë e trupit që tregon rezistencën e tij ndaj shformimit elastik.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://www.bio-meca.com/wp-content/uploads/hookes-law-schema-1-1024x609.jpg", vid: "https://www.youtube.com/embed/aLOzqPgBpV0", gameUrl: "/loja-konst-elastike.html" },
        { name: "9. Forca qendërsynuese", sym: "F_c", form: "F_c = mv²/r", unit: "N", otherUnits: "1N=1kg m/s²", teTjera: " Forca qendërsynuese nuk është force e re shtesë, Por rolin e saj mund ta luajë cdo force apo grup forcash.", nature: "Vektoriale", desc: "Forca rezultante që detyron një trup të lëvizë sipas një trajektoreje rrethore.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-and-orbits", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Force_acting_as_centripetal_force.svg/500px-Force_acting_as_centripetal_force.svg.png", vid: "https://www.youtube.com/embed/aLOzqPgBpV0", gameUrl: "/loja-qendersynuese.html" },
        { name: "10. Forca gravitacionale", sym: "F_G", form: "F = G(m1m2)/r²", unit: "N", otherUnits: "1N=1kg m/s² G → γ", teTjera: "", nature: "Vektoriale", desc: "Forca tërheqëse e gjithësisë që vepron midis çdo dy trupave që kanë masë.", phetUrl: "https://phet.colorado.edu/en/simulation/gravity-force-lab", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rpECqNLFAKZhNUiLZtbt2Q-pgPY88-b4uw&s", vid: "https://www.youtube.com/embed/yzjB32cooEo", gameUrl: "/loja-gravitacionale.html" },
        { name: "11. Impulsi i forcës", sym: "Δp", form: "Δp= FΔt", unit: "N·s", otherUnits: "kg·m/s", teTjera: "Δp=mΔv", nature: "Vektoriale", desc: "Prodhimi i forcës me intervalin e kohës gjatë të cilit ajo vepron mbi trupin.", phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", img: "https://media.geeksforgeeks.org/wp-content/uploads/20230601131523/Impulse-Curve.png", vid: "https://www.youtube.com/embed/BWhluW5_1vc", gameUrl: "/loja-impuls-force.html" },
        { name: "12. Impuls i trupit", sym: "p", form: "p = mv", unit: "kg·m/s", otherUnits: "", teTjera: "", nature: "Vektoriale", desc: "Sasia e lëvizjes së trupit.", phetUrl: "https://phet.colorado.edu/en/simulation/collision-lab", img: "https://mechanicsmap.psu.edu/websites/15_impulse_momentum_rigid_body/15-2_impulse_momentum_theorem_rigid_body/images/problem_diagram.png", vid: "https://www.youtube.com/embed/XreBwpNk9no", gameUrl: "/loja-impuls-trupi.html" },
        { name: "13. Momenti i forcës", sym: "M", form: "M= Fd", unit: "Nm", otherUnits: "", teTjera: "Në rrotullim orar Momenti merret (+) Në rrotullim Kundër orar Momenti merret(-).   Kushti i ekuilibrit të një trupi të ngurtë.    Shuma e momentit orar = Shuma e momentit kundërorar. M_Rezultante=0    M_cift=F1 x d_cift   ", nature: "Vektoriale", desc: "Efekti rrotullues i një force. ", phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", img: "https://cloudfront.jove.com/files/media/science-education/science-education-thumbs/14253.jpg", vid: "https://www.youtube.com/embed/D7xq8gNwMRQ", gameUrl: "/loja-momenti.html" },
        { name: "14. Krahu i forcës", sym: "d", form: "d=x-xo", unit: "m", otherUnits: "", teTjera: "ne gaze-> shtypja tregon goditjet e molekulave me faqet e enes.", nature: "Skalare", desc: "Largësia më e shkurtër (pingulja) nga boshti i rrotullimit deri te vija e veprimit të forcës.", phetUrl: "https://phet.colorado.edu/en/simulation/balancing-act", img: "https://www.datocms-assets.com/117510/1722388028-science_learning_hub_mechanical-advantage_v1.png", vid: "https://www.youtube.com/embed/H3lwoQJ_OZA", gameUrl: "/loja-krahu.html" },
        { name: "15. Shtypja", sym: "P", form: "P=F/S", unit: "Pa", otherUnits: "atm, bar, mmHg,N/m²", teTjera: "Në gaze->shtypja tregon goditjet e molekulave me faqet e enës.  Tek lëngjet në thellësi  P=P_atmo+dgh   Ligji i  Paskalit-> Në të njëjtin nivel lëngu shtypja është e  njëjtë.  Cdo ndryshim shtypjeje në lëng përhapet njëlloj në të gjitha drejtimet.", nature: "Skalare", desc: "Forca që ushtrohet pingul mbi njësinë e sipërfaqes së një trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/gas-properties", img: "https://ademgllavica.wordpress.com/wp-content/uploads/2020/03/image-391.png?w=571", vid: "https://www.youtube.com/embed/LDGohoxWZY4", gameUrl: "/loja-shtypja.html" }
    ],
    "Energjia": [
        { name: "1. Energjia kinetike", sym: "Ek", form: "Ek = ½mv²", unit: "J", otherUnits: "cal,  kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të lëvizjes së tij me një shpejtësi të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://img.jagranjosh.com/images/2024/July/1072024/kinetic-energy-definition-formula-derivation-types-examples-and-calculations.webp", vid: "https://www.youtube.com/embed/bSwFLr4kO6g" },
        { name: "2. Energjia potenciale gravitacionale", sym: "Ep", form: "Ep = mgh", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia që zotëron një trup për shkak të pozicionit të tij në një fushë gravitacionale.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://www.meracalculator.com/images/blog/2020/11/1605613981potential-energy-png.png", vid: "https://www.youtube.com/embed/XCl0Dx8g5Pc" },
        { name: "3. Energjia potenciale elastike", sym: "Ee", form: "Ee = ½kx²", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në një trup elastik si pasojë e shformimit të tij.", phetUrl: "https://phet.colorado.edu/en/simulation/masses-and-springs", img: "https://energyeducation.ca/wiki/images/1/11/Mxcpcrossbow-elastic-potential.gif", vid: "https://www.youtube.com/embed/CvJHBOssY5Q" },
        { name: "4. Energjia mekanike", sym: "Em", form: "Em = Ek + Ep", unit: "J", otherUnits: "cal, kWh", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe asaj potenciale të një sistemi fizik.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://engineerfix.com/wp-content/uploads/2021/04/Mechanical-Energy.png", vid: "https://www.youtube.com/embed/4bNajhqV8ws" },
        { name: "5. Puna", sym: "A", form: "A = Fscosθ   A_G=mgh   A_pl=ΔEk", unit: "J", otherUnits: "cal,", teTjera: "Kur forca ndihmon zhvendosjen  A>0.     Kur forca pengon zhvendosjen A<0.  Kur forca nuk ndikon A=0.      Puna e forcave konservative në një rrugë të mbyllur=0.    Puna e forcave konservative nuk varet nga forma e rrugës.", nature: "Skalare", desc: "Energjia e transferuar te një trup ose nga një trup përmes veprimit të një force gjatë një zhvendosjeje.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://williamqin.com/assets/blog/Energy%20Blog%20Graphics/work.jpg", vid: "https://www.youtube.com/embed/G86VPx8ywyU" },
        { name: "6. Fuqia", sym: "P", form: "P = A / t ose P = Fv", unit: "W", otherUnits: "1W=1J/S, 1 Kuaj fuqi(HP)=745.7W ", teTjera: "", nature: "Skalare", desc: "Puna e kryer ne njësine e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-skate-park", img: "https://i.ytimg.com/vi/irSJL1U_gOQ/maxresdefault.jpg", vid: "https://www.youtube.com/embed/aHKEy7Oa0-A" },
        { name: "7. Energjia e brendshme termike", sym: "U", form: "U=3/2 nRT(1 atomike),U=5/2 nRT(2 atomike) ", unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Shuma e energjisë kinetike dhe potenciale të të gjitha grimcave që përbëjnë një sistem.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://solarschools.net/build/img/learn/energy/types/thermal//heat-tranfer-diagram_400_resize_q95.jpg", vid: "https://www.youtube.com/embed/mm_vaHqJvfw" },
        { name: "8. Energjia elektrike", sym: "Ee", form: "E=Pt", unit: "J", otherUnits: "kWh", teTjera: "", nature: "Skalare", desc: "Energjia që mat bashkëveprimin elektrik.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://electricalampere.com/wp-content/uploads/2025/08/Electrical-Energy-Sources-%E2%80%93-Types-Examples-and-How-Electricity-is-Produced.png", vid: "https://www.youtube.com/embed/LdYNNRKgP9U" },
        { name: "9. Energjia kimike", sym: "E_kim", form: "—", unit: "J", otherUnits: "cal, kcal", teTjera: "", nature: "Skalare", desc: "Energjia e ruajtur në lidhjet kimike të substancave, e cila çlirohet gjatë reaksioneve.", phetUrl: "https://phet.colorado.edu/en/simulation/energy-forms-and-changes", img: "https://www.sciencefacts.net/wp-content/uploads/2022/07/Chemical-Energy.jpg", vid: "https://www.youtube.com/embed/Iqwrl79a55A" },
        { name: "10. Energjia bërthamore", sym: "E", form: "E = mc²", unit: "J", otherUnits: "MeV,1 MeV=10⁶ • 1,6•10⁻¹⁹J", teTjera: "", nature: "Skalare", desc: "Energjia e çliruar gjatë proceseve të fisionit ose fuzionit të bërthamave atomike.", phetUrl: "https://phet.colorado.edu/en/simulation/nuclear-fission", img: "https://cdn1.byjus.com/wp-content/uploads/2018/01/Nuclear-Energy2-700x416.png", vid: "https://www.youtube.com/embed/fuDOxIveHA4" }
    ],
    "Elektriciteti": [
        { name: "1. Intensiteti i rrymes", sym: "I", form: "I=q/t ose I=U/R", unit: "A", otherUnits: "1A=1C/S", teTjera: " Kahu tradicional i Intensitetit merret kahu i lëvizjes së ngarkesës pozitive , pra kahu i kundërt i lëvizjes së elektroneve.", nature: "Skalare", desc: "Sasia e ngarkesës elektrike që kalon nëpër seksionin tërthor të përcjellësit në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://i.ytimg.com/vi/_ZpqdJJ5M9U/maxresdefault.jpg", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/Loja inteciteti i rrymes (1).html" },
        { name: "2. Rezistenca elektrike", sym: "R", form: "R=U/I, R=ρ×L/S ", unit: "Ω", otherUnits: "1Ω=1 V/A", teTjera: " Lidhja në seri R=R₁ + R₂   Lidhja në paralel 1/R=1/R₁ + 1/R₂.   Rezistenca varet nga temperatura.  ρ=ρo{1+∝(t-to)  (to=20℃)  ρo→ Resistencia specified në 20℃.     ∝→ koeficienti I bymimit termik.", nature: "Skalare", desc: "Pengesa qe lënda i paraqet kalimit të rrymës elektrike.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electrical-Resistance-1.png", vid: "https://www.youtube.com/embed/kM72Xa4cOVQ", gameUrl: "/loje rezistenca e rrymes (1).html" },
        { name: "3. Fuqia e rrymes", sym: "P", form: "P=UI=I² x R= U²/R", unit: "W", otherUnits: "1W= 1 J/S", teTjera: "", nature: "Skalare", desc: "Energjia elektrike në njësinë e kohës.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/dccircuits-dcp1.gif", vid: "https://www.youtube.com/embed/LdYNNRKgP9U", gameUrl: "/loje fuqia e rrymes (1).html" },
        { name: "4. Tensioni", sym: "U", form: "U=IR", unit: "V", otherUnits: "1V=1AΩ", teTjera: "", nature: "Skalare", desc: "diferenca potencialesh ndërmjet 2 pikave. U=V₁-V₂", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/9VBatteryWithMeter.jpg/250px-9VBatteryWithMeter.jpg", vid: "https://www.youtube.com/embed/v6uEbMc5HaU", gameUrl: "/loja tensioni(1).html" },
        { name: "5. Ngarkese elektrike", sym: "q", form: "q=ne ose q=It", unit: "C", otherUnits: "", teTjera: "", nature: "Skalare", desc: "Sasi elektronesh që merr ose jep trupi.", phetUrl: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc", img: "https://www.physicsclassroom.com/Class/estatics/u8l1c1.gif", vid: "https://www.youtube.com/embed/kq34-EKUWUw", gameUrl: "/ngarkesekake.html" },
  { name: "6. Intensiteti i fushes elektrike", sym: "E", form: "E=fq ose E=kq/er² , E=V/d", unit: "N/C", otherUnits: "V/m", teTjera: " Parimi i mbivendosjes së fushave E=E₁+E₂ mbledhje vektoriale.", nature: "Vektoriale", desc: "Tregon forcën mbi ngarkesën provë ne 1 pikë te fushës.", phetUrl: "https://phet.colorado.edu/en/simulations/charges-and-fields", img: "https://www.physicsclassroom.com/Class/estatics/u8l4a1.gif", vid: "https://www.youtube.com/embed/mRDx78oJisY", gameUrl: "/loje intenciteti i fushes elektrike (1).html" },
  { name: "7. Kapaciteti elektrik", sym: "q", form: "C=qV  C=q/U (për kondensator)  ose C=ε εο S/d ( për kondensator të rrafshët) ", unit: "1F=1C/V", otherUnits: "1F=1C/V", teTjera: " Lidhje në seri 1/C=1/C₁+1/C₂.  Lidhje në paralel C=C₁+C₂", nature: "Skalare", desc: "Tregon aftësine për të nxënë ngarkesa.", phetUrl: "https://phet.colorado.edu/en/simulations/capacitor-lab-basics", img: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/capacitor-cap1.gif", vid: "https://www.youtube.com/embed/dXSJ0xuN14g", gameUrl: "/loja-kapaciteti.html" },
{ name: "8. Potenciali elektrik", sym: "q", form: "V=Wp/qo, V=kq/r", unit: "volt(V) 1V=1J/C", otherUnits: "-", teTjera: "Formula :V= kq/εr, V=V₁+V₂.   V pozitive për ngarkesën (+).   V negative për ngarkesën (-)   Vtokës=0", nature: "Skalare", desc: "Tregon energjine potenciale te ngarkesës provë ne 1 pikë te fushës.", phetUrl: "https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_all.html", img: "https://www.electrical4u.com/wp-content/uploads/What-is-Electric-Potential.png", vid: "https://www.youtube.com/embed/16Z_QNZmxOs", gameUrl: "/potencialipipi.html" }
    ],
    "Magnetizmi": [
        { name: "1. Induksioni magnetik ", sym: "B", form: "B=Fmax/IL", unit: "T", otherUnits: "G (Gauss), 1T=1N/Am", teTjera: " Parimi I mbivendosjes së fushave  B= B₁+ B₂ ( mbledhje vektoriale)   Afër përcjellësit drejtvizor  B= μo I/2πd.  Në qëndër të përcjellësit rrethor B= μoI/ 2R.  Bobina e ngushtë B=μo NI/2R.  Solenoid  B= μο NI/l", nature: "Vektoriale", desc: "Madhësia vektoriale që karakterizon fushën magnetike në çdo pikë të saj.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://cdn.slidesharecdn.com/ss_thumbnails/induksioni-elektromagnetikcopycopy-231216203840-d38d7cd1-thumbnail.jpg?width=640&height=640&fit=bounds", vid: "https://www.youtube.com/embed/BXBhoQG73ZM", gameUrl: "/summagneticshiiii.html" },
        { name: "2. Forca e Amperit", sym: "F", form: "F=BILsina", unit: "N", otherUnits: "", teTjera: " Krahu I Forcës së Amperit gjendet me rregullin e dorës së majtë.  Për 2 përcjellës drejtvizorë shumë të gjatë  F/∆l= μo I₁I₂/2πd", nature: "Vektoriale", desc: "Forca me të cilën fusha magnetike vepron mbi një përcjellës me rrymë të vendosur në të.", phetUrl: "https://phet.colorado.edu/en/simulation/magnets-and-electromagnets", img: "https://c8.alamy.com/comp/2AFR2XW/the-principles-of-physics-an-ampere-strength-of-thecurrent-465-galvanometer-this-is-an-instrument-for-measuringcurrent-strength-by-means-of-the-deflection-of-a-magneticneedle-when-placed-in-the-field-of-the-current-it-is-so-con-structed-that-either-the-deflection-angle-itself-or-somefunction-of-it-is-proportional-to-the-current-strength-466-thomsons-mirror-galvanottieter-a-simplified-forniis-shown-in-fig-386-and-the-complete-instrument-is-shownin-fig-386-insulated-wire-is-wound-on-a-bobbin-a-with-in-this-bobbin-is-hung-by-a-silk-fiber-a-little-circular-concavemirror-to-2AFR2XW.jpg", vid: "https://www.youtube.com/embed/xMIEpXxiyQM", gameUrl: "/lorencpipiundkaki.html" },
        { name: "3. Fluksi Magnetik", sym: "Φ ", form: "Φ=BScosa", unit: "Wb", otherUnits: "Mx (Maxwell), 1W=1T×m²", teTjera: " Kur ≠ B  ∆d=∆B x Scos∝.  Kur ≠ S   ∆d=B∆S cos∝.      Kur ≠ ∝.     ∆d= BS(cosx₂ - cosx₁)  ", nature: "Skalare", desc: "Numri i vijave të forcës së fushës magnetike pingul me një sipërfaqe të caktuar.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Surface_normal.png/330px-Surface_normal.png", vid: "https://www.youtube.com/embed/60h8RAqX3Yc", gameUrl: "/smbajmendca.html" },
        { name: "4. F.e.m. e induktuar", sym: "ε", form: "ε=-NΔΦ/Δt", unit: "V", otherUnits: "mV", teTjera: "", nature: "Skalare", desc: "Tensioni elektrik që lind në një qark të mbyllur si pasojë e ndryshimit të fluksit magnetik.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://i.ytimg.com/vi/CAKnbju_0jo/sddefault.jpg", vid: "https://www.youtube.com/embed/FoXIrSy5akw", gameUrl: "/halelujahhhhh.html" },
        { name: "5. Rryme e induktuar", sym: "Iin", form: "I=ε/R", unit: "A", otherUnits: "mA", teTjera: "", nature: "Skalare", desc: "Rryma elektrike që lind në një përcjellës të mbyllur kur ai ndodhet në një fushë magnetike të ndryshueshme.", phetUrl: "https://phet.colorado.edu/en/simulation/faradays-law", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk5jc32xKcLRo2y10dfbSwmELAekKYKdSSw&s", vid: "https://www.youtube.com/embed/fOeWUbvqRgY", gameUrl: "/halelujahhhhh.html" }
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
        },
        { id: 5, catName: "Fizika Kuantike", name: "5. Energjia bërthamore", sym: "E", form: "E = mc²", unit: "J", otherUnits: "MeV,1 MeV=10⁶ • 1,6•10⁻¹⁹J", teTjera: "", nature: "Skalare", desc: "Energjia e çliruar gjatë proceseve të fisionit ose fuzionit të bërthamave atomike.", phetUrl: "https://phet.colorado.edu/en/simulation/nuclear-fission", img: "https://cdn1.byjus.com/wp-content/uploads/2018/01/Nuclear-Energy2-700x416.png", vid: "https://www.youtube.com/embed/fuDOxIveHA4", gameUrl: "/energjia berthamore.html" }
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
  
