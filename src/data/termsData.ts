export const TERMS_DATA = [
  // ── KINEMATIKA ──────────────────────────────────────────────────────────
  {
    kategoria: "KINEMATIKA",
    emri: "1. Koordinata",
    simboli: "x, y, z",
    formula: "x = x₀ + vt (L.D.NJ) | x = x₀ + v₀t + at²/2 (L.D.Nj.ND)",
    njesia: "m",
    natyra: "Vektoriale",
    pershkrimi: "Pozicioni i një pike materiale në hapësirë në raport me një sistem referimi të zgjedhur.",
    gaming: {
      ngjashmeri: "Në çdo lojë 3D, koordinatat (x, y, z) janë pozicioni i saktë i karakterit tënd në botën e lojës. Kur GPS i lojës thotë 'je te X=50, Y=120' — ky është sistemi i koordinatave në fizikë.",
      sfida: ["Karakteri fillon te x₀ = 5 m, lëviz me v = 8 m/s.", "Gjeni pozicionin x pas t = 4 s.", "x = 5 + 8 × 4 = 37 m."],
      mindmap: "Pozicioni fillestar x₀ | Shpejtësia v | Koha t | Origjina (0,0,0) | Njësia: metër",
      pyetja: "Pse 'teleportimi' në lojëra ndryshon menjëherë koordinatat pa kaluar nëpër rrugë — cfarë ndryshon fizikisht?",
      pergjigja: "Në fizikë, ndryshimi i koordinatave pa ndryshim kohe do të nënkuptonte shpejtësi të pafundme (v = Δx/Δt, Δt→0). Teleportimi është konventë logjike e lojës, jo fizikë — sepse v = Δx/Δt dhe nëse Δt = 0, shpejtësia bëhet e pafundme gjë që fizika nuk e lejon."
    },
    gatim: {
      ngjashmeri: "Kur receta thotë 'vë tenxheren 20 cm nga buza e sobës' — po caktoni koordinatën e tenxheres. Çdo objekt në kuzhinë ka pozicion të saktë: x (majtë-djathtas), y (para-prapa), z (lartë-poshtë).",
      sfida: ["Tenxherja ndodhet te x₀ = 10 cm, rrëshqet me v = 2 cm/s.", "Pas 3 sekondash: x = 10 + 2 × 3 = 16 cm."],
      mindmap: "Pozicioni fillestar x₀ | Shpejtësia v | Koha t | Sistemi i koordinatave | Njësia: metër",
      pyetja: "Pse receta specifikon 'vë në mes të furrës' — çfarë ndikon pozicioni (koordinata) mbi rezultatin?",
      pergjigja: "Furnoja rrezaton nxehtësi nga të gjitha anët — por shpërndarje jo e barabartë. Koordinata z (lartësi) ndryshon temperaturën e efektshme. Në mes, distanca deri te elementët nxehës (lart e poshtë) është e barabartë — nxehje uniforme. Koordinata optimale = gatim uniform."
    },
    futboll: {
      ngjashmeri: "GPS-i i lojëtarit mat koordinatat (x, y) çdo 0.1 sekonda — ky është sistemi koordinativ që trajnerët përdorin për analizë taktike. Çdo sprint, pasim, pozicion shënohet si koordinatë.",
      sfida: ["Lojtari fillon te x₀ = 10 m, vrapon me v = 7 m/s.", "Pas t = 3 s: x = 10 + 7 × 3 = 31 m."],
      mindmap: "Pozicioni fillestar x₀ | Shpejtësia v | Koha t | GPS stadium | Analiza taktike",
      pyetja: "Pse dy lojtarë me shpejtësi të njëjtë mund të jenë në vende krejtësisht të ndryshme pas 5 sekondash — çfarë ndikon?",
      pergjigja: "Pozicioni fillestar (koordinata fillestare x₀) ndryshon. Formula x = x₀ + vt tregon se me v të njëjtë dhe t të njëjtë, pozicioni final varet nga x₀. Lojtari që fillon 20 m larg do ketë koordinatë 20 m larg secilit tjetër, pavarësisht se kanë lëvizur të njëjtën distancë."
    },
    muzike: {
      ngjashmeri: "Kur prodhuesi vendos një instrumente në panoramën stereo — ai cakton 'koordinatën' e tingullit: sa majtas/djathtas dëgjohet. Kjo koordinatë në hapësirën akustike është tamam si koordinata fizike.",
      sfida: ["Sinjalit i caktohet pozicion x₀ = 0 (qendër), zhvendoset me v = 10 njësi/s.", "Pas 0.5 s: x = 0 + 10 × 0.5 = 5 njësi djathtas."],
      mindmap: "Pozicioni fillestar x₀ | Drejtimi | Koha t | Panorama stereo | Hapësira akustike",
      pyetja: "Pse disa instrumente të regjistruara 'ndjehen' si të jenë mbrapa teje ndërkohë të tjera 'para' — si ndikon fizika e koordinatave?",
      pergjigja: "Prodhuesi manipulon vonesën (delay) dhe reflektimet artificiale midis kanaleve. Truri ynë interpreton koordinatat akustike — diferenca kohore midis veshit të majtë dhe të djathtë, si dhe vonesën e pasqyrimeve — për të lokalizuar burimin e zërit në hapësirë 3D, tamam si sistemi i koordinatave fizike."
    }
  },
  {
    kategoria: "KINEMATIKA",
    emri: "2. Zhvendosja",
    simboli: "Δx",
    formula: "Δx = vt | Δx = v₀t + at²/2 | v² - v₀² = 2aΔx | Δx = (v+v₀)t/2",
    njesia: "m",
    natyra: "Vektoriale",
    pershkrimi: "Vektori që bashkon pozicionin fillestar me atë përfundimtar të trupit gjatë lëvizjes.",
    gaming: {
      ngjashmeri: "Kur karakteri kalon nga fshati A te kshtjella B — zhvendosja është vijë e drejtë nga A te B, pavarësisht sa 'rrugë' ka bërë. Ndryshe nga rruga (sa km ka ecur), zhvendosja tregon distancën dhe drejtimin fillestar→final.",
      sfida: ["Karakteri lëviz me v = 12 m/s për t = 5 s.", "Zhvendosja: Δx = 12 × 5 = 60 m."],
      mindmap: "Pozicioni fillestar → final | Drejtim + vlerë | Vektoriale | ≠ Rruga | Njësia: m",
      pyetja: "Karakteri bën rrethin e plotë rreth qytetit (5 km rrugë) dhe kthehet pikërisht atje ku filloi — sa është zhvendosja dhe sa është rruga?",
      pergjigja: "Rruga = 5 km (sa ka ecur totalisht). Zhvendosja = 0, sepse pozicioni final = pozicioni fillestar. Kjo dallim fundamental: rruga është madhësi skalare (numër), zhvendosja është vektor (ka drejtim). Kur kthehesh te fillimi, Δx = xfinal − xfillestar = 0."
    },
    gatim: {
      ngjashmeri: "Nëse ecni nga furra te frigoriferi (2 m) pastaj te lavamani (3 m) pastaj ktheheni te furra — rruga totale është 10 m, por zhvendosja është 0 (keni nisur dhe mbaruar në të njëjtin vend).",
      sfida: ["Lëvizni 4 m djathtas pastaj 4 m majtas.", "Rruga totale = 8 m. Zhvendosja Δx = 4 − 4 = 0 m."],
      mindmap: "Fillestar → Final | Vektor | ≠ Rruga | Ka drejtim | Mund të jetë zero",
      pyetja: "Pse receta thotë 'trazoni 30 herë djathtas' dhe jo 'trazoni 30 sekonda' — si lidhet kjo me zhvendosjen dhe rrugën?",
      pergjigja: "Trazimi rrethor prodhon zhvendosje neto zero (rrethi mbyllet) por rrugë të madhe. Numri i rrotullimeve kontrollon punën mekanike totale (energjinë e transferuar te lëngu), e cila varet nga rruga e përshkuar, jo zhvendosja. Recetat kontrollojnë procesin nëpërmjet rrugës, jo zhvendosjes."
    },
    futboll: {
      ngjashmeri: "Pasimi i topit nga portieri te sulmuesi — zhvendosja është vija e drejtë mes dy pozicioneve, pavarësisht çdo kthese të topit. GPS mat zhvendosjen e lojtarit gjatë ndeshjes: zakonisht 8-12 km rrugë por zhvendosja neto është shumë më e vogël.",
      sfida: ["Lojtari lëviz me v₀ = 5 m/s, a = 2 m/s², t = 3 s.", "Δx = 5×3 + ½×2×9 = 15 + 9 = 24 m."],
      mindmap: "Fillestar → Final | Vektor | GPS mat saktë | ≠ Rruga totale | Analiza taktike",
      pyetja: "Pse sulmuesi me 'ndeshje të mirë' sipas statistikave (shumë rrugë) mund të mos ketë bërë zhvendosje efektive drejt portës?",
      pergjigja: "Rruga e madhe tregon aktivitet (vrapim total) por jo efektivitet. Zhvendosja drejt portës kundërshtare (komponent i rëndësishëm taktik) mund të jetë e vogël nëse lojtari vrapon shumë horizontalisht. Trajnerët analizojnë si rrugën totale ashtu edhe zhvendosjen neto vertikale (drejt portës) — dy madhësi të ndryshme fizike."
    },
    muzike: {
      ngjashmeri: "Kur vibron teli i kitarës — shkallet e telit lëvizin lart-poshtë (zhvendosje e vogël) por bëjnë rrugë të madhe totale me kalimin e kohës. Amplituda e vibrimeve = zhvendosja maksimale nga pozicioni i qetësisë.",
      sfida: ["Teli zhvendoset me amplitudë A = 0.5 mm.", "Zhvendosja maksimale Δx = 0.5 mm, rruga për një lëkundje = 4A = 2 mm."],
      mindmap: "Amplituda | Pozicioni i qetësisë | Zhvendosja max | Rruga = 4A | Vibrim",
      pyetja: "Pse teli i kitarës zë 'notë' specifike pavarësisht se sa fort e goditni — a ndryshon zhvendosja frekuencën?",
      pergjigja: "Frekuenca e vibrimeve varet nga gjatësia, tensioni dhe masa e telit — jo nga amplituda (zhvendosja maksimale). Nëse goditni fort, zhvendosja rritet (zë më fort/louder) por frekuenca mbetet e njëjtë (e njëjta notë). Kjo është parim i rëndësishëm: amplituda dhe frekuenca janë madhësi të pavarura."
    }
  },
  {
    kategoria: "KINEMATIKA",
    emri: "3. Shpejtësia mesatare",
    simboli: "v_mes",
    formula: "v_mes = l / t",
    njesia: "m/s",
    natyra: "Vektoriale",
    pershkrimi: "Raporti i rrugës me intervalin e kohës gjatë të cilit është përshkruar ajo rrugë.",
    gaming: {
      ngjashmeri: "Speedrun-i në lojë matet me shpejtësi mesatare: sa km lëviz karakteri për çdo minutë lojë. Nëse e mbarove lojën në 20 orë duke kaluar 120 km — shpejtësia mesatare është rreth 6 km/h.",
      sfida: ["Karakteri përshkon 300 m brenda 20 sekondash.", "v_mes = 300/20 = 15 m/s."],
      mindmap: "Rruga l | Koha t | m/s ose km/h | Vektoriale | v_mes ≠ v_cast",
      pyetja: "Speedrunner fiton me kohë të njëjtë si kundërshtari — por kishte shpejtësi mesatare të ndryshme për çdo pjesë. Si është e mundur?",
      pergjigja: "Shpejtësia mesatare totale = rruga totale / koha totale. Nëse dy lojtarë kanë rrugë të njëjtë dhe kohë të njëjtë, shpejtësia mesatare totale është e njëjtë. Por shpërndarjet ndryshojnë: njëri ishte i shpejtë në fillim, tjetri në fund."
    },
    gatim: {
      ngjashmeri: "Kur thoni 'supa gati në 30 minuta' — kjo është 'shpejtësia mesatare' e procesit të gatimit. Ndonjëherë ngrohja është e shpejtë, ndonjëherë e ngadaltë — mesatarja tregon rezultatin e përgjithshëm.",
      sfida: ["Lëngu lëviz 0.5 m brenda tenxheres në 5 sekonda.", "v_mes = 0.5/5 = 0.1 m/s."],
      mindmap: "Rruga l | Koha t | Njësia m/s | Procesi mesatar | Nuk tregon detaje",
      pyetja: "Pse receta thotë 'zieni 20 minuta' por temperatura e ujit ndryshon gjatë gjithë kohës — si lidhet kjo me shpejtësinë mesatare?",
      pergjigja: "Ngjashëm si shpejtësia mesatare nuk tregon shpejtësinë e çastit. Nxehtësia e marrë = shpejtësia mesatare e transferimit termik × koha. Recetat supozojnë kushte standarde — ngrohje mesatare konstante."
    },
    futboll: {
      ngjashmeri: "Radar-i i stadiumit mat shpejtësinë mesatare të topit: largësia / koha e fluturimit. Topi mund të ketë lëvizur jo drejtë — por radar mat vlerën mesatare mbi trajektore.",
      sfida: ["Topi fluturon 40 m brenda 1.5 sekondash.", "v_mes = 40/1.5 = 26.7 m/s ≈ 96 km/h."],
      mindmap: "Rruga l | Koha t | m/s | km/h | Radar mat mesataren",
      pyetja: "Pse statistikat tregojnë '120 km/h goditje maksimale' por topi mbërriti te portierri me 80 km/h?",
      pergjigja: "Rezistenca e ajrit e ngadalëson topin. Shpejtësia maksimale (e çastit) është 120 km/h, por ajo zvogëlohet gradualisht. Shpejtësia mesatare gjatë fluturimit është më e ulët."
    },
    muzike: {
      ngjashmeri: "Tempi i muzikës matet në BPM (goditje për minutë) — kjo është shpejtësia mesatare e ritmit. Drummer mund të variojë pak shpejtësinë gjatë këngës, por BPM mesatar e karakterizon kompozimin.",
      sfida: ["Drummer bën 120 goditje në 60 sekonda.", "Shpejtësia mesatare = 120/60 = 2 goditje/s = 120 BPM."],
      mindmap: "BPM | Goditje/minutë | Tempo | Mesatare | Metronom",
      pyetja: "Pse muzika 'live' ndihet ndryshe nga e njëjta këngë e regjistruar — ndërkohë BPM-i është i njëjtë?",
      pergjigja: "Muzikantët live ndryshojnë shpejtësinë e çastit (accelerando/ritardando) pavarësisht shpejtësisë mesatare konstante përgjatë 3 minutave."
    }
  },
  {
    kategoria: "KINEMATIKA",
    emri: "4. Koha",
    simboli: "t",
    formula: "t = l / v",
    njesia: "s",
    natyra: "Skalare",
    pershkrimi: "Madhësia që përcakton kohëzgjatjen e një procesi fizik ose renditjen e ngjarjeve.",
    gaming: {
      ngjashmeri: "Koha në lojë zakonisht llogaritet në 'frames'. Koha reale tregon sa shpejt karakteri kryen veprimet dhe sa i ngadalët zhvillohet loja.",
      sfida: ["Karakteri duhet të kalojë 100 m me shpejtësi 5 m/s. Gjeni kohën.", "t = 100 / 5 = 20 sekonda."],
      mindmap: "Koha | Framerate | Shpejtësia | Skalare | Sekonda",
      pyetja: "Sa e rëndësishme është koha për speedrunners?",
      pergjigja: "Jashtëzakonisht. Speedrunners përdorin çdo 'frame' për t'i kryer veprimet sa më shpejt të jetë e mundur. Kjo e bën kohën variablin më kritik në këtë interes."
    },
    gatim: {
      ngjashmeri: "Saktësia e kohës gjatë gatimit bën dallimin mes produktit të djegur dhe atij perfekt. Një proces zgjat saktë për t sekonda.",
      sfida: ["Një ushqim duhet gatuar për 600 sekonda, sa minuta janë?", "t = 600 / 60 = 10 minuta."],
      mindmap: "Koha gatimit | Reaksionet kimike | Timer | Nxehtësia",
      pyetja: "Pse duhet kohë për pjekje?",
      pergjigja: "Reaksionet termike (Browning, Maillard) kërkojnë kohë për t'u zhvilluar. Kohë e pamjaftueshme, rezulton në produkte gjysmë të pabëra."
    },
    futboll: {
      ngjashmeri: "Një ndeshje ka një t limit prej 90 minutash. Çdo sekondë e kaluar duhet menaxhuar taktikisht.",
      sfida: ["Lojtari vrapon me 8 m/s per 16 m, per sa kohe i kalon?", "t = 16 / 8 = 2 sekonda."],
      mindmap: "Minutazhi | Vrapimi | Koha | 90 Minuta",
      pyetja: "Cfarë bën koha e reagimit (reaction time)?",
      pergjigja: "Është vonesa (Δt) mes vizionit të aksionit dhe veprimit muskulor. Koha e shkurtër është e favorshme."
    },
    muzike: {
      ngjashmeri: "BPM, note duration (note whole, half, quarter). Të gjitha tregojnë t (kohën) që një notë duhet të qëndrojë e luajtur.",
      sfida: ["Një notë zgjat 2 sekonda në BPM të caktuar. Gjeni sa është total koha për 4 të tilla.", "t = 2 * 4 = 8 sekonda."],
      mindmap: "BPM | Koha | Ritm | Takt | Nota",
      pyetja: "Pse theksi i kohës jep ritëm?",
      pergjigja: "Organizimi i rregullt periodik bën trurin të dallojë paternën. Prandaj koha (t) është baza e ritmit."
    }
  },
  {
    kategoria: "KINEMATIKA",
    emri: "5. Interval kohor",
    simboli: "Δt",
    formula: "Δt = t - t₀",
    njesia: "s",
    natyra: "Skalare",
    pershkrimi: "Diferenca midis dy çasteve kohore të njëpasnjëshme.",
    gaming: {
      ngjashmeri: "Δt në lojërat kompjuterike (delta time) është koha mes frames. Garanton që loja 'fizikisht' të ketë lëvizje uniforme pavarësisht sa fps ke.",
      sfida: ["Koha frame1 është 1.012s, frame2 është 1.028s. Sa është Δt?", "Δt = 1.028 - 1.012 = 0.016s (16ms = rreth 60FPS)."],
      mindmap: "Interval | Delta Time | T-T0 | Frame Time",
      pyetja: "Pse përdoret delta time në kodim lojërash?",
      pergjigja: "Nëse lëvizim pa Δt, pajisjet më të shpejta do e lëvizin më shpejt karakterin. Me Δt, theksohet pavarësia nga performanca."
    },
    gatim: {
      ngjashmeri: "Intervali i rrezatimit në një makinë apo mikrovave. Kur bën një 'pushim' per fermentim, po cakton një Δt të caktuar.",
      sfida: ["Vendoseni në 14:00, hiqeni në 14:45. Sa është intervalli në minuta?", "Δt = 45 minuta."],
      mindmap: "Koha | Delta t | Zhvillimi i ameve",
      pyetja: "Pse thonë 'lëre të pushojë (brumin) për 30 min'?",
      pergjigja: "Kjo diferencë kohore i lejon molekulave theksi të organizohen, pra glutenin të zbutet. Intervali ka rol kimik."
    },
    futboll: {
      ngjashmeri: "Intervali kohor prej kur arbitri fryn bilbilin e fillimit deri kur e mbaron është Δt i pjesës së parë. (T-T0).",
      sfida: ["Goli shënohet në '45 + 3. Arbitri fryu bilbilin për shtesë në 45:00. Sa është Δt i shtesës kur ra goli?", "Δt = 3 minuta.", "Llogaritje shumë thelbësore."],
      mindmap: "Koha mes | Pjesët | Taktikë | Vonesë loja",
      pyetja: "Sa mund të bëjë një lojtar brenda Δt 0.1 sekonda (reaction time)?",
      pergjigja: "Tejet pak, por nervat e lëvizin e bëjnë përgatitjen e muskujve."
    },
    muzike: {
      ngjashmeri: "Pauzat mes notave në një këngë janë thjesht një interval kohor Δt ku s'ka asgjë, vetëm heshtje. Por ato luajnë rol thelbësor.",
      sfida: ["Nota mbaroi pas 2.0s dhe tjetra nis pas 2.5s. Sa është heshtja?", "Δt = 2.5 - 2.0 = 0.5s heshtje."],
      mindmap: "Perioda | Ritam | Notat kufi",
      pyetja: "A konsiderohet pushimi instrument muzikor?",
      pergjigja: "Po, intervalet janë ajo çfarë diferencon tingujt zhurmues nga muzika elegante ritmike."
    }
  },
  {
    kategoria: "KINEMATIKA",
    emri: "7. Shpejtësia e castit",
    simboli: "v",
    formula: "v = Δx / Δt",
    njesia: "m/s",
    natyra: "Vektoriale",
    pershkrimi: "Shpejtësia e trupit në një çast të caktuar të kohës ose në një pikë të dhënë të trajektores.",
    gaming: {
      ngjashmeri: "Spedometer ose treguesi yt mat në atë moment x (frame), kjo është vlera fiks e atij casti. v = limit dt->0 dX/dt.",
      sfida: ["Karakteri është në boost në sekondën 3 dhe ka dhënë shpejtësi të caktuar. Spedometri tregon 20 m/s. Sa është v.cast?", "v = 20 m/s."],
      mindmap: "Speedometer | Çasti t | Vektoriale",
      pyetja: "Pse makina përplaset rëndë nëse theksohet 100km/h prap?",
      pergjigja: "Kur ndodh aksidenti ndodh fiks në atë cast. Shpejtësia mesatare mund të ishte edhe 20 km/h tërë rrugën, por e castit (100km/h) determonon forcën dhe goditjen mv2/2."
    },
    gatim: {
      ngjashmeri: "Temperatura e çastit në thelb luan rol. Por përsa i përket kinetikës - rrotullimi i blenderit me shpejtësinë v maksimale v_cast mund të presë perime të forta.",
      sfida: ["Në sekondën 2, tehin e prekin ushqimet kur po shkon 5 m/s.", "v e çastit = 5 m/s."],
      mindmap: "Blender | Lëvizja prerëse",
      pyetja: "Diferenca mes v.cast dhe v.mesatare në blender?",
      pergjigja: "Ndodh të frenojë (v_cast zvoglohet) ku has fortësi, pavarësisht theksit të rrotullimit mesatar nga motori."
    },
    futboll: {
      ngjashmeri: "Radaret e policisë matnin v e castit. Edhe topat monitorohen për top speed e tyre pikërisht sa këmba shkëputet.",
      sfida: ["Topi niset me goditje. Matësi thotë momentin inicial shpejtësia ishte x, pasi goditjes fiks = 120 km/h.", "v.cast = 120 km/h = 33.3 m/s "],
      mindmap: "Goditje | Top Speed | Rrugë lineare",
      pyetja: "A mbetet shpejtësia e njëjtë?",
      pergjigja: "Vlerat v_cast reduktohen nga fërkimi i dendur ajrit në vazhdim të trajektores."
    },
    muzike: {
      ngjashmeri: "Lëvizja e telit fiks në sekondën që goditet arrin shpejtësinë e castit maksimale.",
      sfida: ["Në T=0, hetohet v_çast max. Më pas ulet gradualisht.", "Po, pasi Vmax është te amplituda maksimale nga ekuilibri."],
      mindmap: "Teli kitarës | Cast goditje | V max e amplitudës",
      pyetja: "Ku ngelet v e castit minimum?",
      pergjigja: "Në skajet maksimale të lëkundjes, për të ndryshuar kah ai bëhet 0 për një dt shumë të vogël."
    }
  },
  {
    kategoria: "KINEMATIKA",
    emri: "8. Nxitimi",
    simboli: "a",
    formula: "a = Δv / Δt | a = F / m",
    njesia: "m/s²",
    natyra: "Vektoriale",
    pershkrimi: "Madhësia që tregon ndryshimin e shpejtësisë në njësinë e kohës.",
    gaming: {
      ngjashmeri: "Kur shtypni 'turbo' dhe makina kalon nga 50 km/h në 150 km/h brenda 3 sekondash — ky ndryshim shpejtësie për sekondë është nxitimi: a = 100 km/h / 3s ≈ 9.3 m/s².",
      sfida: ["Makina shkon nga 0 në 30 m/s brenda 6 sekondash.", "a = 30/6 = 5 m/s²."],
      mindmap: "Δv ndryshimi i v | Δt koha | m/s² | Vektoriale | a = F/m",
      pyetja: "Pse kamioni me turbo ka nxitim më të vogël se makina sportive edhe nëse motori i kamionit ka fuqi (power) shumë herë më të madhe?",
      pergjigja: "a = F/m — nxitimi varet nga forca NDAJ masës. Kamioni ka fuqi të madhe (F e madhe) por edhe masë shumë herë më të madhe. Nëse masa rritet 10x dhe forca 3x, nxitimi zvogëlohet. Sportivja ka masë shumë të vogël — marrëdhënia F/m është shumë e favorshme."
    },
    gatim: {
      ngjashmeri: "Kur derdhni ujë të ftohtë mbi kastravecat e nxehta — temperatura ndryshon shpejt. Ngjashëm, rritja e shpejtë e tehes së një blenderi tregon nxitim rrotullues.",
      sfida: ["Lugë e trazimit shkon nga 0 në 4 m/s brenda 2 sekondave.", "a = 4/2 = 2 m/s²."],
      mindmap: "Δv | Δt | m/s² | Përshpejtim",
      pyetja: "Pse trupa që përshpejtojnë shumë hidhen 'gunga-gunga'?",
      pergjigja: "Kur masa ka nxitim, fërkimi statik kalohet në kinetik vështirë e më forca theksie kudo dërgohen gjërat. Një miell duhet një nxitim konstante."
    },
    futboll: {
      ngjashmeri: "Sprint nga 0 në 10 m/s brenda 2 sekondash = nxitim 5 m/s². Sprinterët elitë të futbollit arrijnë 3-6 m/s² — ky parametër matet dhe trajnohet me GPS.",
      sfida: ["Lojtari shkon nga 0 në 8 m/s brenda 2 sekondave.", "a = 8/2 = 4 m/s² — sprinter i mirë."],
      mindmap: "Δv | Δt | m/s² | Sprint | Ndalim | Nxitimi i parë",
      pyetja: "Pse lojtarët e mëdhenj (masë e madhe) zakonisht kanë nxitim fillestar më të vogël?",
      pergjigja: "Nga a = F/m: nxitimi fillestar kufizohet nga masa. Por pasi arrin shpejtësi maksimale, rezistenca e ajrit bëhet faktor i rëndësishëm, i cili i ndal më pak forcat masive në inerci momentum."
    },
    muzike: {
      ngjashmeri: "Kur DJ bën 'scratch' — disku kalon nga qetësi në rrotullim të shpejtë. Nxitimi këndor (a = Δω/Δt) kontrollon 'karakterin' e sound efektit.",
      sfida: ["Disku shkon nga 0 në 33 rpm = 3.46 rad/s brenda 0.3 s.", "a = 3.46/0.3 = 11.5 rad/s²."],
      mindmap: "Nxitim këndor | Scratch | RPM | Frekuenc",
      pyetja: "Si bëhet që tingulli gërvisht më keq sa më i lartë nxitimi?",
      pergjigja: "Një 'attack' e fuqishme dhe drastike gjeneron disonanca akorde frekuencash, pasi shkëputet stacionarieta e sinjalit (theks thellë harmonish)."
    }
  },
  {
    kategoria: "KINEMATIKA",
    emri: "9. Nxitimi i renies se lire",
    simboli: "g",
    formula: "g = GM/R² | g ≈ 9.8 m/s² (afër Tokës)",
    njesia: "m/s²",
    natyra: "Vektoriale",
    pershkrimi: "Nxitimi me të cilin bien trupat në afërsi të sipërfaqes së Tokës nën veprimin e gravitetit.",
    gaming: {
      ngjashmeri: "Kur karakteri bie nga kreshtë — motorja fizike lojës llogarit saktë pozicionin duke përdorur g = 9.8 m/s². Çdo sekondë shpejtësia e rënies rritet me 9.8 m/s.",
      sfida: ["Karakteri bie nga lartësi h = 20 m.", "Koha e rënies: h = ½gt² → t = √(2×20/9.8) ≈ 2.02 s. Shpejtësia finale: v = gt = 19.8 m/s."],
      mindmap: "g = 9.8 m/s² | Rënia | Kërcim | Gravitet loje",
      pyetja: "Pse në disa lojëra ne fluturojmë më lart lehtësisht (si në hënë)?",
      pergjigja: "Motori i lojës kthen g nga 9.8 (tokë) në 1.6 m/s^2 (hënë), gjë që jep më theks thellësisht atë sensin 'më i lehtë', zgjat koha e rënies."
    },
    gatim: {
      ngjashmeri: "Rënia e pjatës apo një fruti mbi tavoline, tregon fiks acceleration g që thellësisht dërgon theks ngushtë impaktin.",
      sfida: ["Pjata ra për 0.4 sekonda. Sa ishte V?", "v = g*t = 9.8 * 0.4 = 3.92 m/s. S'ka kthim prapa, pjata thehet."],
      mindmap: "g | Toka | Graviteti",
      pyetja: "A thehet gjithnjë në bazë të lartësisë?",
      pergjigja: "Po, pasi v_impakt i është propocional katrorit lartësisë."
    },
    futboll: {
      ngjashmeri: "Krosimet e larta drejt thellësive. Goditja ka vlerë g që ngadalëson lart theksin dhe rikthen shpejt poshtë topin në rënie të lirë pas zenitit.",
      sfida: ["Topi ra fiks pas 2sek nga zeniti", "Kuptojme qe u rrezua me V = 9.8 * 2 = 19.6 m/s."],
      mindmap: "Krosime | Graviteti i Tokes",
      pyetja: "Nese g ishte e ulet cfar do ndodhte ne topin?",
      pergjigja: "Te dergoje nje 40-metersh thellësi, do fluturonte per minutash pasi g te ulte atë v.verticale pak më ulët."
    },
    muzike: {
      ngjashmeri: "Ngritjet ritmike te gishtave dhe zbritjet ne dhoq të pianos perjetojnë fiks efekt g kur bie rënkimi fiks nga lart me shpejtësi dore inertshme.",
      sfida: ["Rënie e gishtit mbështetur teksi poshtë me shtysë g.", "v = g * t"],
      mindmap: "Gishtat thell | Rënia mekanike | Graviteti pianos",
      pyetja: "Fizikisht cfar ngjan tek valët gravitetore t pianos?",
      pergjigja: "Cekiçët luhaten poshtë theks fiks duke rënë mbi tela nga g (edhe suste thelli)."
    }
  },
  {
    kategoria: "DINAMIKA",
    emri: "1. Forca",
    simboli: "F",
    formula: "F = m × a",
    njesia: "N (njuton)",
    natyra: "Vektoriale",
    pershkrimi: "Veprimi i një trupi mbi një tjetër që mund të shkaktojë ndryshim të lëvizjes ose shformim.",
    gaming: {
      ngjashmeri: "Goditja e personazhit mbi armik — ajo 'dëmtim' del nga forca e goditjes. Forca është veprimi që ndryshon lëvizjen. Motori fizike i lojës llogarit F = ma çdo frame.",
      sfida: ["Armiku ka masë 80 kg. Goditja jep nxitim 6 m/s².", "F = 80 × 6 = 480 N."],
      mindmap: "Masa m | Nxitimi a | N = kg·m/s² | 3 ligjet Newton | Forca rezultante",
      pyetja: "Pse të dy personazhet hidhen prapa kur godasin njëri-tjetrin — a nuk duhet vetëm i dobëti të lëvizë?",
      pergjigja: "Ligji i tretë i Njutonit: F_12 = -F_21. Të dy marrin forcë të njëjtë në madhësi por drejtim të kundërt. Lëvizin ndryshe sepse a = F/m — masa e ndryshme jep nxitim të ndryshëm. Personazhi i lehtë lëviz më shumë me të njëjtën forcë."
    },
    gatim: {
      ngjashmeri: "Shtypja e brumit me duart tuaja — aplikoni forcë mbi brumë. Kjo forcë e deformon (punë mekanike). Forca e kthimit të brumit mbi duart tuaja (ligji i tretë i Njutonit) ndihet si rezistencë.",
      sfida: ["Shtypni brumin me forcë 25 N mbi sipërfaqe 50 cm².", "Shtypja = 25/0.005 = 500 Pa — kjo deformon strukturën."],
      mindmap: "Masa m | Nxitimi a | N | Forca normale | Forca fërkimi | Forca elastike",
      pyetja: "Pse duhet më shumë forcë për të prerë karotat e ftohta se ato të ngrohta?",
      pergjigja: "Forca elastike e materialit (F_e = kx) varet nga konstanta elastike k. Karotat e ftohta kanë lidhje ndërmolekulare më të forta (k e madhe). Për të njëjtën zhvendosje x të tehut, duhet forcë shumë herë më e madhe. Ngrohja redukton k duke dobësuar lidhjet — prerja bëhet me forcë më të vogël."
    },
    futboll: {
      ngjashmeri: "Goditja e topit me këmbë — forca e kontaktit i jep nxitim topit. F = ma ku m = 0.45 kg (masa e topit). Forca = nxitim × masë. Goditja zgjat rreth 0.01-0.05 sekonda.",
      sfida: ["Topi (m = 0.45 kg) merr nxitim 600 m/s² gjatë goditjes.", "F = 0.45 × 600 = 270 N ≈ 27 kg peshë."],
      mindmap: "F = ma | N | Impulsi | Kontakti i shkurtër | 3 Ligjet Newton",
      pyetja: "Pse golmadhuesi i vogël mund të godasë topin po aq larg sa ai i madh nëse teknika është e mirë?",
      pergjigja: "F = ma aplikohet mbi TOP, jo mbi lojtarin. Nxitimi i topit varet nga forca e aplikuar NBI topin. Teknika e mirë = transferim efiçient i energjisë nga muskujt → këmba → top. Lojtari i vogël me teknikë optimale mund të gjenerojë forcë të njëjtë mbi top si lojtari i madh me teknikë jo optimale."
    },
    muzike: {
      ngjashmeri: "Goditja e daulles — shkopi ushtron forcë mbi membranë. Forca = m_shkopi × a. Ajo forcë vibrohet te membrana dhe bëhet tingull. Sa më e madhe forca, aq më i fortë tingulli.",
      sfida: ["Shkopi (m = 0.1 kg) nxiton 50 m/s² kur godet daullen.", "F = 0.1 × 50 = 5 N. Kjo forcë vibrohet te membrana."],
      mindmap: "F = ma | N | Amplituda | Timbre | Kontakti shkopi-membranë",
      pyetja: "Pse goditja e daulles me shkopin nga lart vs afër krijon tinguj kaq të ndryshëm?",
      pergjigja: "Nga lartësi h, shkopi ka Ep = mgh. Kjo shndërrohet në Ek = ½mv² → v = √(2gh). Shpejtësia e goditjes dhe nxitimi gjatë kontaktit rriten me h. F = ma → forcë më e madhe → amplitudë vibrimesh më e madhe."
    }
  },
  {
    kategoria: "DINAMIKA",
    emri: "5. Forca e fërkimit",
    simboli: "F_f",
    formula: "F_f = μ × N",
    njesia: "N",
    natyra: "Vektoriale",
    pershkrimi: "Forca që lind në sipërfaqen fërkuese të dy trupave dhe pengon ose reziston lëvizjen.",
    gaming: {
      ngjashmeri: "Kur makina kalon mbi akullin (μ ≈ 0.1) vs asfalt (μ ≈ 0.8) — ndryshimi i koeficientit μ ndryshon plotësisht fërkimin. Motorja fizike e lojës simulon F_f = μN për çdo sipërfaqe.",
      sfida: ["Makina peshon 12000 N, sipërfaqe asfalt μ = 0.7.", "F_f = 0.7 × 12000 = 8400 N — forca frenimit."],
      mindmap: "Koeficienti μ | Forca normale N | Drejtim kundër lëvizjes | Statik vs Dinamik",
      pyetja: "Pse makinat sportive kanë goma shumë të gjera — si ndikon sipërfaqja e kontaktit te fërkimi?",
      pergjigja: "F_f = μN nuk varet nga sipërfaqja e kontaktit (sipas modelit klasik). Por gomat e gjera janë të buta dhe deformohen shumë — ky deformim krijon 'fërkim histeretik' që shton koefiçientin efektiv μ."
    },
    gatim: {
      ngjashmeri: "Tava jo-ngjitëse ka koeficient fërkimi shumë të vogël (μ ≈ 0.04) ndaj ushqimit. Tava prej gize ka μ ≈ 0.4. Fërkimi minimal lejon lëvizje të lehtë.",
      sfida: ["Copë mishi peshon 2 N (N = 2 N) mbi tavë me μ = 0.3.", "F_f = 0.3 × 2 = 0.6 N — forca e nevojshme për ta lëvizur."],
      mindmap: "μ koeficienti | F_f kundër lëvizjes | μ ndryshon me temperatura",
      pyetja: "Pse kuzhinieri e nxeh tiganin para se të hedhë ushqimin — si ndikon temperatura mbi fërkimin?",
      pergjigja: "Ngrohja zvogëlon viskozitetin e vajit. Shtresa e vajit midis ushqimit dhe tiganit vepron si 'film' lubrifikant — zvogëlon drastikisht μ efektiv."
    },
    futboll: {
      ngjashmeri: "Thumbat e këpucëve rrisin μ me sipërfaqen e barit. Pa thumba (μ e vogël), lojtari rrëshqet gjatë ndryshimeve të drejtimit.",
      sfida: ["Lojtari peshon 700 N, μ me bar = 0.6.", "F_f_max = 0.6 × 700 = 420 N — forca max e drejtimit."],
      mindmap: "μ me bar | Thumba | N = pesha | Ndryshim drejtimi",
      pyetja: "Pse arbitri vendos të mos luhet kur bateria është shumë e lagur?",
      pergjigja: "Bara e lagur e zvogëlon drastikisht μ. Kur lojtari bën sprint dhe ndryshim drejtimi, forca e nevojshme F = ma tejkalon F_f_max — lojtari rrëshqet. Rreziku i lëndimeve rritet."
    },
    muzike: {
      ngjashmeri: "Harku i violinës fërkon telin — ky fërkim (μ e madhe midis lëkurës së harkut dhe telit metalik) është mekanizmi i prodhimit të zërit.",
      sfida: ["Harku aplikon F_normale = 3 N mbi tel, μ = 0.4.", "F_f = 0.4 × 3 = 1.2 N — forca që bën telin të vibrojë."],
      mindmap: "Harku | Teli | Resin (kolofonium) | Fërkim statik",
      pyetja: "Pse violinistët aplikojnë resin (kolofonium) mbi hark?",
      pergjigja: "Resini rrit drastikisht μ statik midis harkut dhe telit duke shtuar 'ngjitshmëri' molekulare. Pa resin, harku rrëshqet lehtë (μ i vogël) dhe nuk kap telin mjaftueshëm."
    }
  },
  {
    kategoria: "DINAMIKA",
    emri: "7. Forca elastike",
    simboli: "F_e",
    formula: "F = -k × x | k = F/x",
    njesia: "N",
    natyra: "Vektoriale",
    pershkrimi: "Forca që lind nga trupi i shformuar, proporionale me shformimin dhe me kah të kundërt me të.",
    gaming: {
      ngjashmeri: "Katapulta e lojës — forca elastike e sustës (F = kx) lëshon gurë. Sa më shumë e tërhiqni (x e madhe) dhe sa më e ngurtë sustë (k e madhe), aq më e madhe forca dhe distancë lëshimi.",
      sfida: ["Sustë me k = 500 N/m shtypet x = 0.2 m.", "F = 500 × 0.2 = 100 N — forca e lëshimit."],
      mindmap: "k konstanta | x shformimi | Kufiri elasticitetit | Katapulte",
      pyetja: "Pse katapulta rrudhet në maximum limitues, nuk ngarkohet thellësisht 1 milion m?",
      pergjigja: "Kufiri theks elastik i materialit të drurit deformohet pastaj thehet në copa nëse del nga hooke ligji F=-Kx lineariteti."
    },
    gatim: {
      ngjashmeri: "Brumi elastik — kur e shtypni dhe lëshoni, kthehet. Gluten-i i brumit ka konstantën elastike k.",
      sfida: ["Brumi ka k = 200 N/m. Deformoheni 3 cm = 0.03 m.", "F = 200 × 0.03 = 6 N — forca."],
      mindmap: "Brumi | Elasticiteti k | Zgjatimi i glutenit",
      pyetja: "Pse theksojmë që brumin mos tia kthejmë thellësisht 10 herë thelbesisht e fortësi?",
      pergjigja: "Gluteni rritet si strukturë, mbledh viskoelasticitet, K-i i tij rritet aq fort sa s'ka më nevojë ta punosh F e asht i madh per ti mbajtur formën (zorrë dhemballe thellësisht të dëmton)."
    },
    futboll: {
      ngjashmeri: "Topi i futbollit thellësisht defromohet te këmba si nje susutë e thellë gazit (k e madhe).",
      sfida: ["Top me k_eff = 40000 N/m deformohet 1 cm gjatë goditjes.", "F = 40000 × 0.01 = 400 N."],
      mindmap: "Topi i thell | Hook Ligji | Elasticitet Ajrit Thell",
      pyetja: "Ku dreqin i vete fuqia një goditje e thellë?",
      pergjigja: "Absorbohet thellësisht ne deformimin qe ektendon formen (F e gjerë) k-ja kthen forcën back drejt ajrit me atë potencial formë-ndryshimit elastik mv^2/2."
    },
    muzike: {
      ngjashmeri: "Teli i kitarës është si sustë — kur e tërhiqni, aplikoni forcë dhe ai deformohet (zgjatet).",
      sfida: ["Tel me k = 1000 N/m, zgjatohet x = 2 mm.", "F = 1000 × 0.002 = 2 N."],
      mindmap: "Tingujt Tela | Moduli i Young | Theksi kitar",
      pyetja: "A mbeten thellësisht identike teli gjithmon?",
      pergjigja: "Nuk ngelin ekuiblibër gjeometrik, lëngojne nga tensionet termostatike thellësisht thello theksin plastik(akordim i sërishëm nevojitet te thellësitë)."
    }
  },
  {
    kategoria: "ELEKTRICITETI",
    emri: "1. Intensiteti i rrymës",
    simboli: "I",
    formula: "I = q / t | I = U / R",
    njesia: "A (amper)",
    natyra: "Skalare",
    pershkrimi: "Sasia e ngarkesës elektrike që kalon nëpër seksionin tërthor të përcjellësit në njësinë e kohës.",
    gaming: {
      ngjashmeri: "Bateria e konsolës ka rrymë 2A — 2 kulombë ngarkesë kalon çdo sekondë. Shpenzon më shumë për lojëra intensive.",
      sfida: ["Pajisja terheh ngarkesë q = 180 C brenda t = 60 s.", "I = 180/60 = 3 A."],
      mindmap: "q/t | A = C/s | Lidhja Seri vs Paralel",
      pyetja: "Pse konsolat ngrohen shumë gjatë lojërave intensive?",
      pergjigja: "P = I²R — fuqia termike varet nga katrori i rrymës dhe rezistenca. Gjatë llogaritjeve intensive, CPU/GPU terhehin rrymë të madhe (I↑). Rritja ndikon në ngrohjen Theksuar."
    },
    gatim: {
      ngjashmeri: "Tostierja me 1000W dhe 220V terheh I = P/U = 1000/220 ≈ 4.5 A. Ky rrymë I kalon nëpër rezistorët dhe i ngroh.",
      sfida: ["Tenxherja elektrike: P = 2200 W, U = 220 V.", "I = P/U = 2200/220 = 10 A."],
      mindmap: "I = U/R | I = P/U | A | Siguresa",
      pyetja: "Pse siguresat e shtëpisë 'digjen' kur lidhni shumë pajisje gatimi?",
      pergjigja: "Lidhja paralele: I_total = I₁ + I₂ + ... Çdo pajisje shton rrymën totale dhe mund të kalojë theksuar limitet 16 apo 20 amper thellesisht rrymë (shpërthen asimptot)."
    },
    futboll: {
      ngjashmeri: "Sistemet LED të ndriçimit të stadiumeve dërgojnë thellë rrymë I thellë në amperazh.",
      sfida: ["Sensor GPS i lojtarit: U = 3.7 V, R = 37 Ω.", "I = U/R = 3.7/37 = 0.1 A = 100 mA."],
      mindmap: "I = U/R | Var system | Ndriçimi | J/s",
      pyetja: "Pse theksojme shpesh thellësitë e baterive gps?",
      pergjigja: "Antena transmeton 10-20ms interval Theksuar RF të lartë konsumi amperi (rryme t dëndur t menjëhershme i=Q/t theksuara max)."
    },
    muzike: {
      ngjashmeri: "Mikrofoni kalon sinjal të dobët elektrik (I ≈ mikroamper, μA) te amplifikatori. Amplifikatori rrit rrymën.",
      sfida: ["Mikrofon: V_signal = 0.002 V, R_hyrje = 1000 Ω.", "I_signal = 0.002/1000 = 0.000002 A = 2 μA."],
      mindmap: "I = U/R | Amplifikim | μA | Sinyal Theksuar",
      pyetja: "A theksohet zhurma nese rryma ishte AC ne mjedis?",
      pergjigja: "Zhume Theksuar e rrymes se Rrjetit shtëpiak interferit thellesisht 50hz-60hz sinjal i thelle te kabllot audio nese sjan shielding."
    }
  },
  {
    kategoria: "ELEKTRICITETI",
    emri: "2. Tensioni",
    simboli: "U",
    formula: "U = I × R | U = W / q",
    njesia: "V (volt)",
    natyra: "Skalare",
    pershkrimi: "Diferenca e potencialeve elektrike ndërmjet dy pikave — energjia potenciale elektrike për njësi ngarkese.",
    gaming: {
      ngjashmeri: "Bateria e konsolës 3.7V nënkupton se çdo kulomb ngarkesë e largohet nga bateria me 3.7 J energji.",
      sfida: ["Qarku: R = 6 Ω, I = 2 A.", "U = I × R = 2 × 6 = 12 V."],
      mindmap: "Volt | Burimi E TENSIONIT | AC DC theksuar",
      pyetja: "Pse theksojm me transformatore rënien 220 ne 5v thell?",
      pergjigja: "Ndryshe elektronika e rethuar e chips do Thellohej theks në djegije P=U²/R me qindra watt dëndësi."
    },
    gatim: {
      ngjashmeri: "Thermomixeri/Thermomix operon me 220V — ky tension jep energji mjaftueshme për motorin e fuqishëm.",
      sfida: ["Blenderë: I = 5 A, R_total = 44 Ω.", "U = 5 × 44 = 220 V — tension rrjeti."],
      mindmap: "Volt theks | Priza thelle | EU standard 230v",
      pyetja: "Po futem ne prize Theksuar amerikane 110v?",
      pergjigja: "Thermomix 230v kërkonte tension 230 thell. Në theks te 110v jep vetëm thell çerekun theksuar fuqisë V^2/R, nuk mjafton as thelbi i procesit rotullativ pür t theku rrotat Thell."
    },
    futboll: {
      ngjashmeri: "VAR sistemi i videoarbtrimit ka pajisje me tensione të ndryshme: kamera 12V, serveri 220V, ekrani 24V.",
      sfida: ["LED stadium: U = 220V, P = 50 000 W.", "I = P/U = 50000/220 ≈ 227 A — rrymë e madhe."],
      mindmap: "VAR Thell | Dritat theks | tension thelle V",
      pyetja: "Kabllot Thell në theks qindra kilovolt Thell pse kudo Theks?",
      pergjigja: "Linjat stadjumeve theks transmissioni transmeron V e thell në thell energji p-humabijesh t Theksta thell energjie theks (I thell i thelle bën Theks Rrjedhen)."
    },
    muzike: {
      ngjashmeri: "Kitara elektrike prodhon sinjal 0.1-1V (tension i dobët i pickupit). Amplifikatori e rrit në 10-50V te altoparlanti.",
      sfida: ["Sinjali i kitarës U_in = 0.5V, gain = 50.", "U_out = 0.5 × 50 = 25 V te altoparlanti."],
      mindmap: "V | Rritja Tensionit Thell | Gain",
      pyetja: "Po ndonj theks t drejperdrejt thell V-theksi audiot direkt thell aty boks?",
      pergjigja: "V thel t pick-ups theksuar ska P thell fare (P=U²/R thel ohm). Amp i theksuar zmadhon U qe mjaft Theks dëndësi Thellojnë dhomën t dëgjoj Thellë theks."
    }
  }
];
