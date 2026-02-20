
import { PhysicsData, Simulation, PhysicsGame } from './types';

export const ALL_PHYSICS_DATA: PhysicsData = {
    "Kinematika": [
        { name: "1. Koordinata", sym: "x, y, z", form: "x, y, z", unit: "m", desc: "Vendndodhja e një trupi në hapësirë ndaj një sistemi referimi.", img: "https://rinstinkt.files.wordpress.com/2013/05/koordinatat.jpg", vid: "https://www.youtube.com/embed/fD_H_zX_sS4" },
        { name: "2. Zhvendosja", sym: "Δx", form: "Δx = x - x₀", unit: "m", desc: "Ndryshimi i pozicionit të një trupi.", img: "https://www.sciencefacts.net/wp-content/uploads/2022/10/Displacement.gif", vid: "https://www.youtube.com/embed/V67SreO5x8Q" },
        { name: "3. Rruga e përshkuar", sym: "s", form: "s", unit: "m", desc: "Gjatësia totale e trajektores.", img: "https://d20khd7ddkh5ls.cloudfront.net/distance.png", vid: "https://www.youtube.com/embed/2-un6S6iX7Q" },
        { name: "4. Koha", sym: "t", form: "t", unit: "s", desc: "Intervali gjatë të cilit ndodh lëvizja.", img: "https://physics.aps.org/assets/a1993d66-2b7a-425e-99c7-cecf98a60439/es133_1.png", vid: "https://www.youtube.com/embed/Rso3Es2cFOc" },
        { name: "5. Interval kohor", sym: "Δt", form: "Δt = t - t₀", unit: "s", desc: "Diferenca midis dy momenteve kohore.", img: "https://www.researchgate.net/publication/372784989/figure/fig1/AS:11431281178211047@1690859576568/Sketch-of-a-time-interval-illustrating-the-definition-of-T-and-T.png", vid: "https://www.youtube.com/embed/Xn5vdHkh6Nw" },
        { name: "6. Shpejtësia mesatare", sym: "v_mes", form: "v_mes = Δx / Δt", unit: "m/s", desc: "Zhvendosja për njësi kohe.", img: "https://images.nagwa.com/figures/explainers/548102634541/3.svg", vid: "https://www.youtube.com/embed/9Xf_G91E9sM" },
        { name: "7. Shpejtësia e castit", sym: "v", form: "v = dx / dt", unit: "m/s", desc: "Shpejtësia në një çast të caktuar.", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800", vid: "https://www.youtube.com/embed/3pOnn8xN90c" },
        { name: "8. Nxitimi", sym: "a", form: "a = Δv / Δt", unit: "m/s²", desc: "Ndryshimi i shpejtesise ne njesine e kohes.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800", vid: "https://www.youtube.com/embed/FOkQszgWD_k" },
        { name: "9. Nxitimi i renies se lire", sym: "g", form: "g ≈ 9.81 m/s²", unit: "m/s²", desc: "Fortesia e fushes gravitacionale.", img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800", vid: "https://www.youtube.com/embed/9Xf_G91E9sM" },
        { name: "10. Perioda", sym: "T", form: "T = 1 / f", unit: "s", desc: "Koha për një rrotullim të plotë.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/9zY977U8uCc" },
        { name: "11. Frekuenca", sym: "f", form: "f = 1 / T", unit: "Hz", desc: "Numri i rrotullimeve për sekondë.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/W9PofYInU4w" },
        { name: "12. Shpejtësia këndore", sym: "ω", form: "ω = θ / t", unit: "rad/s", desc: "Kendi i kryer ne njesine e kohes.", img: "https://images.unsplash.com/photo-1461689821077-50c74466441b?w=800", vid: "https://www.youtube.com/embed/W9PofYInU4w" },
        { name: "13. Shpejtësia lineare", sym: "v", form: "v = ω * r", unit: "m/s", desc: "Gjatesia e harkut ne njesine e kohes.", img: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=800", vid: "https://www.youtube.com/embed/W9PofYInU4w" },
        { name: "14. Nxitimi qendërsynues", sym: "a_c", form: "a_c = v² / r", unit: "m/s²", desc: "Ndryshimi i shpejtësisë lineare ne njesine e kohes.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/y2SltD_tSvo" },
        { name: "15. Këndi", sym: "θ", form: "θ = s / r", unit: "rad", desc: "Kendi i matur ne radian.", img: "https://images.unsplash.com/photo-1460518451285-cd7bd76a7562?w=800", vid: "https://www.youtube.com/embed/W9PofYInU4w" },
        { name: "16. Nxitimi këndor", sym: "α", form: "α = dω / dt", unit: "rad/s²", desc: "Ndryshimi i shpejtësisë këndore ne njesine e kohes.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/W9PofYInU4w" }
    ],
    "Dinamika": [
        { name: "1. Forca", sym: "F", form: "F = ma", unit: "N", desc: "Veprim i nje trupi mbi nje tjeter.", img: "https://images.unsplash.com/photo-1535813548-6601f6d90bc8?w=800", vid: "https://www.youtube.com/embed/kKKM8Y-u7ds" },
        { name: "2. Masa", sym: "m", form: "m=d/v", unit: "kg", desc: "Mat sasinë e lëndës dhe inercinë.", img: "https://images.unsplash.com/photo-1596495573175-97520f976514?w=800", vid: "https://www.youtube.com/embed/Xp06X3YFzmc" },
        { name: "3. Pesha", sym: "P", form: "P = N", unit: "N", desc: "Forca me të cilën trupi meshon mbi mbeshtetesen e vet ose terheq fijen ku varet.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/Xp06X3YFzmc" },
        { name: "4. Forca e rendeses", sym: "G", form: "G = mg", unit: "N", desc: "Forca me te cilen Toka terheq trupat afer saj.", img: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800", vid: "https://www.youtube.com/embed/kKKM8Y-u7ds" },
        { name: "5. Forca e fërkimit", sym: "F_f", form: "F_f = μN", unit: "N", desc: "Forca që pengon rreshqitjen.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/8-P5W0qO558" },
        { name: "6. Koeficienti i fërkimit", sym: "μ", form: "μ = F_f / N", unit: "—", desc: "Varet nga lloji i sipërfaqeve takuese.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/8-P5W0qO558" },
        { name: "7. Forca elastike", sym: "F_e", form: "F = -kx", unit: "N", desc: "Forca me te cilen trupi i shformuar kundervepron mbi ate qe shkakton shformim.", img: "https://images.unsplash.com/photo-1460518451285-cd7bd76a7562?w=800", vid: "https://www.youtube.com/embed/U33lGz2GzS0" },
        { name: "8. Konstanta elastike", sym: "k", form: "k = F / x", unit: "N/m", desc: "Elasticiteti i trupit.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/U33lGz2GzS0" },
        { name: "9. Forca qendërsynuese", sym: "F_c", form: "F_c = mv²/r", unit: "N", desc: "Mban trupin në levizje rrethore.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/y2SltD_tSvo" },
        { name: "10. Forca gravitacionale", sym: "F_G", form: "F = G(m1m2)/r²", unit: "N", desc: "Forca terheqese e gjithesishme ndermjet trupave.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/kKKM8Y-u7ds" },
        { name: "11. Impulsi i forcës", sym: "Δp", form: "Δp= FΔt", unit: "N·s", desc: "Efekti i forcës në kohë.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "12. Impuls i trupit", sym: "p", form: "p = mv", unit: "kg·m/s", desc: "Sasi e levizjes se trupit.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "13. Momenti i forcës", sym: "M", form: "M= Fd", unit: "Nm", desc: "Efekti rrotullues i nje forcë.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "14. Krahu i forcës", sym: "d", form: "d", unit: "m", desc: "Largesa e vijes se forces nga boshti i rrotullimit.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "15. Shtypja", sym: "P", form: "P=F/S", unit: "Pa", desc: "Madhesi qe tregon forcen qe ushtrohet ne njesine e siperfaqen.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" }
    ],
    "Energjia": [
        { name: "1. Energjia kinetike", sym: "Ek", form: "Ek = ½mv²", unit: "J", desc: "Energjia që ka një trup për shkak të lëvizjes së tij.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "2. Energjia potenciale gravitacionale", sym: "Ep", form: "Ep = mgh", unit: "J", desc: "Energjia për shkak të pozicionit në fushë gravitacionale.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "3. Energjia potenciale elastike", sym: "Ee", form: "Ee = ½kx²", unit: "J", desc: "Energjia e ruajtur në një trup elastik të shformuar.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "4. Energjia mekanike", sym: "Em", form: "Em = Ek + Ep", unit: "J", desc: "Shuma e energjisë kinetike dhe potenciale.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "5. Puna", sym: "A", form: "A = Fscosθ", unit: "J", desc: "Efekti zhvendoses i nje force.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "6. Fuqia", sym: "P", form: "P = A / t ose P = Fv", unit: "W", desc: "Puna e kryer ne njesine e kohes.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "7. Energjia e brendshme termike", sym: "U", form: "U=3/2 nRT", unit: "J", desc: "Energjia kinetike dhe potenciale e grimcave brenda sistemit.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/cwZMaZ1S_V4" },
        { name: "8. Energjia elektrike", sym: "Ee", form: "E = qV", unit: "J", desc: "Energjia e lidhur me lëvizjen e ngarkesave.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" },
        { name: "9. Energjia kimike", sym: "E_kim", form: "—", unit: "J", desc: "Energjia e ruajtur në lidhjet kimike.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" },
        { name: "10. Energjia bërthamore", sym: "E", form: "E = mc²", unit: "J", desc: "Energjia e ruajtur në bërthamën e atomit (Einstein).", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" }
    ],
    "Elektriciteti": [
        { name: "1. Intensiteti i rrymes", sym: "I", form: "I=q/t ose I=U/R", unit: "A", desc: "Sasia e ngarkeses qe kalon ne percjelles ne njesine e kohes.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" },
        { name: "2. Rezistenca elektrike", sym: "R", form: "R=U/I", unit: "Ω", desc: "Pengesa qe lenda i paraqet kalimit te rrymes.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" },
        { name: "3. Fuqia e rrymes", sym: "P", form: "P=UI", unit: "W", desc: "Energjia elektrike e perdorur ne njesine e kohes.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" },
        { name: "4. Tensioni", sym: "U", form: "U=IR", unit: "V", desc: "Diference potencialesh ndermjet dy pikave.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" },
        { name: "5. Ngarkese elektrike", sym: "q", form: "q=ne", unit: "C", desc: "Sasi elektronesh qe jep ose merr trupi.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/mc979OhitAg" }
    ],
    "Magnetizmi": [
        { name: "1. Induksioni magnetik ", sym: "B", form: "B=Fmax/IL", unit: "T", desc: "Karakterizon fushen magnetike nga pikepamja e forcave.", img: "https://images.unsplash.com/photo-1530533714533-5592c6c1f5c2?w=800", vid: "https://www.youtube.com/embed/YpXpU5y-U-0" },
        { name: "2. Forca e Amperit", sym: "F", form: "F=BILsina", unit: "N", desc: "Forca me te cilen fusha magnetike vepron mbi percjellesin me rryme.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/YpXpU5y-U-0" },
        { name: "3. Fluksi Magnetik", sym: "Φ ", form: "Φ=BScosa", unit: "Wb", desc: "Numrin e vijave te forces qe presin pingul siperfaqen.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/YpXpU5y-U-0" },
        { name: "4. F.e.m. e induktuar", sym: "ε", form: "ε=-NΔΦ/Δt", unit: "V", desc: "Diference potenciale e induktuar nga ndryshimi i fushes magnetike.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/YpXpU5y-U-0" },
        { name: "5. Rryme e induktuar", sym: "Iin", form: "I=ε/R", unit: "A", desc: "Rryma qe lind pa burim te drejtperdrejte.", img: "https://images.unsplash.com/photo-1510133769068-067753177651?w=800", vid: "https://www.youtube.com/embed/YpXpU5y-U-0" }
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
    type: 'home'
  },
  {
    title: "Energjia me Rampë",
    description: "Të vëzhgohet transformimi i energjisë potenciale në energji kinetike.",
    materials: ["Një dërrasë ose libër i madh (si rampë)", "Makine lodër ose top", "Metër"],
    steps: ["Vendos librin në një lartësi të caktuar.", "Lësho makinën nga maja e rampës.", "Mat sa larg shkon.", "Rrit lartësinë dhe përsërite."],
    type: 'home'
  },
  {
    title: "Kompasi i Thjeshtë",
    description: "Të vëzhgohet fusha magnetike e Tokës.",
    materials: ["Gjilpërë", "Magnet", "Tas me ujë", "Copë e vogël letre ose tapë"],
    steps: ["Fërko gjilpërën me magnet në një drejtim për 30–40 sekonda.", "Vendose gjilpërën mbi copën e letrës ose tapës.", "Vendose me kujdes në ujë.", "Vëzhgo drejtimin që merr gjilpëra."],
    type: 'home'
  },
  {
    title: "Ndërtimi i një Elektromagneti",
    description: "Të kuptohet lidhja midis elektricitetit dhe magnetizmit.",
    materials: ["Gozhdë metalike", "Tel bakri i izoluar", "Bateri 1.5V", "Kapëse letrash metalike"],
    steps: ["Mbështill telin rreth gozhdës disa herë.", "Lidh skajet e telit me baterinë.", "Afroje gozhdën te kapëset metalike.", "Shkëpute baterinë dhe vëzhgo ndryshimin."],
    type: 'home'
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
    }
};
