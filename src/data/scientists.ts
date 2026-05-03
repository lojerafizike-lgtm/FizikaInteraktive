export interface Post {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  likes: number;
  comments: { user: string; text: string }[];
  date: string;
}

export interface Scientist {
  id: string;
  name: string;
  tag: string;
  bio: string;
  image: string;
  vibe: string;
  stats: { subject: string; A: number; fullMark: number }[];
  posts: Post[];
  summonItem: {
    name: string;
    icon: string;
    description: string;
    color: string;
  };
}

const defaultStats = () => [
  { subject: 'Matematikë', A: 85 + Math.floor(Math.random() * 15), fullMark: 100 },
  { subject: 'Logjikë', A: 90 + Math.floor(Math.random() * 10), fullMark: 100 },
  { subject: 'Këmbëngulje', A: 80 + Math.floor(Math.random() * 20), fullMark: 100 },
  { subject: 'Polemikë', A: 40 + Math.floor(Math.random() * 60), fullMark: 100 },
  { subject: 'Eksperiment', A: 70 + Math.floor(Math.random() * 30), fullMark: 100 },
];

export const SCIENTISTS_DATA: Scientist[] = [
  {
    id: 'newton',
    name: "Isaac Newton",
    tag: "Graviteti",
    bio: "Isaac Newton (1643–1727) renditet ndër shkencëtarët me ndikim më të gjerë në historinë e njerëzimit. Në vitin 1687 botoi Principia Mathematica, vepër ku formuloi tri ligjet e lëvizjes dhe ligjin e gravitetit universal, duke shpjeguar nëpërmjet të njëjtës formulë si rënien e trupave pranë sipërfaqes së Tokës, ashtu edhe lëvizjen e Hënës në orbitë. Paralelisht me fizikën, Newton zhvilloi llogaritjen infitezimale, zbulim i realizuar njëkohësisht nga Leibniz, çka gjeneroi një polemikë shkencore të njohur. Gjithashtu demonstruoi se drita e bardhë është përbërëse e të gjitha ngjyrave të spektrit dhe shpiku teleskopin reflektues. Drejtoi Monedhërinë Mbretërore britanike dhe shërbeu si president i Shoqatës Mbretërore të Shkencave. Konsiderohet themeluesi i mekanikës klasike.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
    vibe: "Mollët nuk po më lënë të qetë sot. Kam një teori... 🍎",
    stats: defaultStats(),
    posts: [
      {
        id: 'p1',
        author: 'Isaac Newton',
        authorImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg',
        content: "Sapo pashë një mollë duke rënë nga pema. Nuk e di pse por jam i bindur se kjo ka lidhje me Hënën. Do ta shpjegoj shpejt. #PritniFjalën",
        likes: 14200,
        comments: [
          { user: 'Robert Hooke', text: 'Këtë ide ma more prej meje, Isaac. Nuk të kam harruar.' },
          { user: 'Gottfried Leibniz', text: 'Edhe llogaritjen? 🙂' }
        ],
        date: '2 orë më parë'
      }
    ],
    summonItem: { name: "Prizmi i Dritës", icon: "🌈", description: "Ndan dritën e bardhë në shtatë ngjyrat e spektrit.", color: "from-blue-400 to-indigo-600" }
  },
  {
    id: 'einstein',
    name: "Albert Einstein",
    tag: "Relativiteti",
    bio: "Albert Einstein (1879–1955) transformoi në mënyrë rrënjësore konceptin e hapësirës, kohës dhe materies. Në vitin 1905, të shënuar si 'annus mirabilis', publikoi katër artikuj shkencorë me rëndësi themelore: mbi efektin fotoelektrik, lëvizjen Browniane, relativitetin special dhe ekuivalencën masë-energji, shprehur nëpërmjet ekuacionit E=mc². Në vitin 1915 formuloi teorinë e relativitetit të përgjithshëm, e cila përshkruan gravitetin si deformim të gjeometrisë hapësirakohore. Fitoi Çmimin Nobel të Fizikës në 1921 për shpjegimin e efektit fotoelektrik. Pavarësisht kontributeve vendimtare në lindjen e mekanikës kuantike, Einstein nuk pranoi asnjëherë interpretimin probabilist të saj si përshkrim të plotë të realitetit. Mbetet simbol ndërkombëtar i gjeniusit shkencor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    vibe: "Koha ecën ndryshe kur je me dikë të mençur. Provuar empirikisht. ⏱️",
    stats: defaultStats(),
    posts: [
      {
        id: 'p2',
        author: 'Albert Einstein',
        authorImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg',
        content: "Imagjinata është më e rëndësishme se njohuria. Njohuria ka kufij; imagjinata jo. E=mc² është thjesht fillimi. 🌌",
        likes: 56000,
        comments: [
          { user: 'Niels Bohr', text: 'Albert, mos u merr me Zotin dhe zararet tani...' },
          { user: 'Max Planck', text: 'Dakord me imagjinatën. Aq dakord sa sfidoj fizikën klasike.' }
        ],
        date: '5 orë më parë'
      }
    ],
    summonItem: { name: "Ora e Relativitetit", icon: "🕰️", description: "Tregon si koha ngadalësohet pranë objekteve masive.", color: "from-amber-400 to-orange-600" }
  },
  {
    id: 'galileo',
    name: "Galileo Galilei",
    tag: "Astronomia",
    bio: "Galileo Galilei (1564–1642) njihet gjerësisht si babai i metodës shkencore eksperimentale moderne. Ishte ndër të parët që drejtoi teleskopin drejt qiellit dhe vëzhgimet e tij sollën ndryshime rrënjësore: zbuloi malet e sipërfaqes hënore, katër satelitët e Jupiterit (të quajtur sot satelitët galileanë), fazat e Venusit dhe njollat diellore. Zbulimi i satelitëve të Jupiterit paraqiti evidencë vendimtare kundër konceptit të Tokës si qendër e universit. Mbrojti teorinë heliocentrike të Kopernikut, çka e çoi para gjykatës së Inkuizicionit, e cila e dënoi me arrest shtëpiak deri në fund të jetës. Kontributet e tij përfshijnë gjithashtu studimin e rënies së lirë dhe analizën e lëvizjes pendulare.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
    vibe: "Eppur si muove. E megjithatë lëviz. (E kanë shkruar librat, jo unë.) 🌍",
    stats: defaultStats(),
    posts: [
      {
        id: 'pg1',
        author: 'Galileo Galilei',
        authorImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg',
        content: "Sot drejta teleskopin drejt Jupiterit dhe pashë katër yje të vegjël rreth tij. Sikur orbitonin... Çudi. Do ta vëzhgoj sërish nesër. 🔭",
        likes: 8900,
        comments: [
          { user: 'Inkuizicioni', text: 'Kujdes se ku e drejtoni atë tub, zotëri.' },
          { user: 'Johannes Kepler', text: 'Galileo! Kjo është prova! Shkruaja!' }
        ],
        date: '1 ditë më parë'
      }
    ],
    summonItem: { name: "Teleskopi i Galileos", icon: "🔭", description: "Instrumenti që ia hapi sytë njerëzimit.", color: "from-slate-600 to-slate-900" }
  },
  {
    id: 'curie',
    name: "Marie Curie",
    tag: "Radioaktiviteti",
    bio: "Marie Curie (1867–1934) është gruaja e parë dhe personi i vetëm që ka fituar dy Çmime Nobel në fusha të ndryshme shkencore: Fizikë në vitin 1903 dhe Kimi në vitin 1911. E lindur në Varshavë, u vendos në Paris ku ndoqi studimet dhe zhvilloi karrierën shkencore përkundër pengesave institucionale të kohës ndaj grave. Bashkë me bashkëshortin Pierre Curie izoloi dy elementë të rinj: poloniumin dhe radiumin. Ajo shpiku termin 'radioaktivitet' dhe demonstroi se fenomeni ishte veti intrinsike e atomit dhe jo produkt i reaksionit kimik, zbulim që revolucionizoi fizikën atomike. Gjatë Luftës së Parë Botërore organizoi njësi lëvizëse me rreze X për përdorim mjekësor. Vdiq nga anemia aplastike, e lidhur me shumë gjasë me ekspozimin afatgjatë ndaj rrezatimit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg",
    vibe: "Dy Nobele. Të dyja të mia. Vazhdoni të flisni. ✨",
    stats: defaultStats(),
    posts: [
      {
        id: 'pc1',
        author: 'Marie Curie',
        authorImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg',
        content: "Njerëzit mendojnë se shkenca është për burra. Unë mendoj se është për kuriozët. Dhe unë jam shumë kurioz. 🧪",
        likes: 42000,
        comments: [
          { user: 'Pierre Curie', text: 'Dashuria ime, ke plotësisht të drejtë. Gjithmonë.' },
          { user: 'Henri Becquerel', text: 'Radioaktiviteti ishte zbulimi im fillimisht, por ju e shpjeguatë...' }
        ],
        date: '3 orë më parë'
      }
    ],
    summonItem: { name: "Radiumi Shkëlqyes", icon: "🧪", description: "Elementi që ndriçon në errësirë dhe ndryshoi mjekësinë.", color: "from-green-400 to-emerald-600" }
  },
  {
    id: 'tesla',
    name: "Nikola Tesla",
    tag: "Rryma AC",
    bio: "Nikola Tesla (1856–1943) ishte inxhinier dhe fizikant serbo-amerikan i njohur kryesisht për kontributet e tij themelore në zhvillimin e sistemit të rrymës alternative (AC). Punoi fillimisht me Thomas Edison përpara se të ndiqte drejtim të pavarur shkencor. Projektimet e tij për motorët elektrikë me shumë faza dhe transformatorët u bënë baza e rrjeteve moderne të shpërndarjes së energjisë elektrike. Shpiku bobinën Tesla, e cila gjeneron tensione shumë të larta me frekuencë të lartë, dhe realizoi eksperimente extensive në fushën e transmetimit pa tela të energjisë elektrike. Kontributet e tij mbetën për dekada të nënvlerësuara krahasuar me bashkëkohësit e tij.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
    vibe: "Ndihem elektrik! AC > DC. ⚡",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Bobina Tesla", icon: "⚡", description: "Krijon rrufe artificiale.", color: "from-purple-400 to-indigo-600" }
  },
  {
    id: 'maxwell',
    name: "James Clerk Maxwell",
    tag: "Elektromagnetizmi",
    bio: "James Clerk Maxwell (1831–1879) formuloi katër ekuacionet diferenciale që mbajnë emrin e tij dhe që bashkuan elektricitetin, magnetizmin dhe optikën në një teori të vetme të fushës elektromagnetike. Ky unifikim konsiderohet nga historiografët e shkencës si arritja e dytë e madhe e fizikës teorike pas sistemit mekanik të Newtonit. Nëpërmjet matematikës, Maxwell parashikoi se drita është valë elektromagnetike, një konkluzion që çeli rrugën për radion, televizionin dhe të gjithë komunikimin modern. Einstein mbante portretin e tij bashkë me ato të Newtonit dhe Faraday-t. Maxwell themeloi gjithashtu termodinamikën statistikore dhe realizoi fotografinë e parë me ngjyra të vërteta të dokumentuara.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/James-Clerk-Maxwell-1831-1879.jpg",
    vibe: "Guxoni të thoni: le të jetë dritë! (Dhe ishin ekuacionet e mia). 🕯️🌊",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Ekuacionet e Fushës", icon: "🧲", description: "Sekreti që zbuloi se drita, elektriciteti dhe magnetizmi janë një.", color: "from-red-400 to-rose-600" }
  },
  {
    id: 'bohr',
    name: "Niels Bohr",
    tag: "Atomi",
    bio: "Niels Bohr (1885–1962) propozoi në vitin 1913 modelin atomik që mban emrin e tij: elektronet rrotullohen rreth bërthamës vetëm në nivele energjetike të caktuara dhe kalojnë midis tyre duke lëshuar ose absorbuar kuanta rrezatimi. Ky model zgjidhi anomalitë serioze të fizikës klasike lidhur me stabilitetin e atomit dhe hapi rrugën drejt mekanikës kuantike. Gjatë Luftës së Dytë Botërore ndihmoi drejtpërsëdrejti hebrenjtë danezë të arratiseshin nga persekutimi nazist. Drejtoi Institutin e Fizikës Teorike në Kopenhagen, i cili u bë qendra botërore e zhvillimit të mekanikës kuantike dhe burimi i Interpretimit të Kopenhagenit. Shquhet gjithashtu për debatet e tij filozofike me Einstein-in mbi natyrën e realitetit kuantik.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Niels_Bohr_Nobel.jpg",
    vibe: "Einstein, mos i trego Zotit se çfarë të bëjë. Kërcimet kuantike ndodhin! ⚛️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Atomi Kuantik", icon: "⚛️", description: "Baza e kuantikes. Atomet kanë kufij të prerë.", color: "from-blue-400 to-cyan-500" }
  },
  {
    id: 'planck',
    name: "Max Planck",
    tag: "Kuantet e Energjisë",
    bio: "Max Planck (1858–1947) shënon fillimin e fizikës kuantike nëpërmjet hipotezës së tij të vitit 1900: për të shpjeguar saktësisht spektrin e rrezatimit të trupit të zi, energjia duhet të lëshohet jo vazhdimisht, por në njësi të diskrete që ai i quajti 'kuante'. Konstantja e Planck-ut, h, është madhësia fundamentale që karakterizon shkallën kuantike të fenomeneve fizike. Ky postulat tronditi themelet e fizikës klasike, e cila supozonte energjinë si madhësi tërësisht të vazhdueshme. Planck fitoi Çmimin Nobel të Fizikës në vitin 1918. Jeta e tij familjare u shënua nga tragjedi të rënda: djali i tij Erwin u ekzekutua nga regjimi nazist në vitin 1944 pas pjesëmarrjes në komplotin kundër Hitlerit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Max_Planck_%281858-1947%29.jpg",
    vibe: "Energjia vjen me porcione. Zbulimi që theu gjithçka. 🔢",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Konstanta e Planck", icon: "✨", description: "Pakoja minimale elementare e energjisë, guri i parë i kuantikes.", color: "from-purple-400 to-pink-500" }
  },
  {
    id: 'hawking',
    name: "Stephen Hawking",
    tag: "Kozmologjia e Vrimave të Zeza",
    bio: "Stephen Hawking (1942–2018) dha kontribute themelore në astrofizikën teorike, pavarësisht sëmundjes degenerative ALS që e kufizoi progressivisht nga viti 1963 e tutje. Zbulimi i tij më i rëndësishëm teorik, i formuluar në vitin 1974, tregoi se vrimat e zeza lëshojnë rrezatim termik nëpërmjet efekteve kuantike pranë horizontit të ngjarjeve, fenomen i njohur sot si Rrezatimi Hawking. Ky rezultat paraqiti lidhjen e parë të njohur matematikore midis relativitetit të përgjithshëm dhe mekanikës kuantike. Libri i tij popullor 'Një Histori e Shkurtër e Kohës', botuar në vitin 1988, u shit në mbi 25 milionë kopje botërisht dhe ndikoi thellë në njohjen publike të kozmologjisë.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
    vibe: "Vrimat e zeza nuk janë plotësisht të zeza. Asgjë s'është e pashpresë! 🕳️🌠",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Rrezatimi Hawking", icon: "🕳️", description: "Avullimi i yjeve të vdekur...", color: "from-gray-700 to-black" }
  },
  {
    id: 'feynman',
    name: "Richard Feynman",
    tag: "Elektrodinamika Kuantike",
    bio: "Richard Feynman (1918–1988) zhvilloi diagramet që mbajnë emrin e tij në vitin 1948: përfaqësime grafike që thjeshtuan llogaritjet e ndërveprimeve ndërmjet grimcave elementare në mënyrë radikale. Fitoi Çmimin Nobel të Fizikës në vitin 1965 për kontributet në Elektrodinamikën Kuantike (QED), e cila mbetet ndër teoritë me saktësinë parashikuese më të lartë në historinë e shkencës. Feynman është njohur njëkohësisht si pedagog i jashtëzakonshëm dhe personalitet publik i gjallë. Kryeu dëshminë e tij famëmadhe para Komisionit të Hetimit të aksidentit të anijes kozmike Challenger në vitin 1986, duke demonstruar shkakun e dështimit me një eksperiment të thjeshtë por efektshëm.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Richard_Feynman_1959.jpg",
    vibe: "Shkenca përqendrohet tek dyshimi. Nëse jeni i sigurt, e merrni gabim. 🥁",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Diagrami i Feynman", icon: "🖊️", description: "Harta grafike që zbuloi sjelljet kuantike.", color: "from-orange-400 to-yellow-500" }
  },
  {
    id: 'heisenberg',
    name: "Werner Heisenberg",
    tag: "Mekanika Kuantike",
    bio: "Werner Heisenberg (1901–1976) formuloi në vitin 1925 mekanikën matricore, formulimin e parë rigoroz dhe funksionalisht të plotë të mekanikës kuantike. Në vitin 1927 shpalli Parimin e Pasigurisë: pozicioni dhe momenti i një grimce nuk mund të dihen njëkohësisht me saktësi arbitrare. Ky kufizim nuk është pasojë e instrumenteve të papërsosura matëse, por veti themelore e natyrës. Fitoi Çmimin Nobel të Fizikës në vitin 1932. Gjatë Luftës së Dytë Botërore drejtoi programin bërthamor gjerman, i njohur si 'Uranprojekt', i cili nuk arriti të prodhonte armën bërthamore. Roli i tij në atë periudhë mbetet objekt debati historik.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Bundesarchiv_Bild183-R57262%2C_Werner_Heisenberg.jpg",
    vibe: "Jemi të qartë! Sa më me saktësi mat pozicionin, aq më pak njeh shpejtësinë. 📈",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Parimi i Pasigurisë", icon: "📊", description: "Baza statistikore — nuk di dot gjithçka njëkohësisht.", color: "from-indigo-400 to-blue-600" }
  },
  {
    id: 'schrodinger',
    name: "Erwin Schrödinger",
    tag: "Mekanika Valore",
    bio: "Erwin Schrödinger (1887–1961) formuloi në vitin 1926 ekuacionin diferencial që mban emrin e tij, duke vendosur bazën matematikore të mekanikës kuantike valore. Ekuacioni i Schrödinger-it përshkruan evoluimin në kohë të funksionit të valës së një sistemi kuantik, në analogji me rolin që luajnë ligjet e Newtonit në mekanikën klasike. Pavarësisht kontributit vendimtar, Schrödinger nuk pranoi asnjëherë interpretimin probabilist të funksionit të valës të propozuar nga Born. Për të ilustruar absurdin e interpretimit ortodoks kuantik kur aplikohet në shkallë makroskopike, propozoi në vitin 1935 eksperimentin mendor të njohur si 'Macja e Schrödinger-it': një mace e mbyllur në një kuti lihet teorikisht në superpozicion të gjallë dhe e vdekur njëkohësisht deri në momentin e vëzhgimit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Erwin_Schrodinger.jpg",
    vibe: "Hape kutinë që ta mbyllim debatin! Macja ime mbase s'ia di për probablitetet tuaja. 🐈📦",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Macja e Schrödinger", icon: "📦", description: "Njëherësh fat i mundshëm — vdekjekalur e jetëgjatë (supozim.)", color: "from-teal-400 to-emerald-600" }
  },
  {
    id: 'dirac',
    name: "Paul Dirac",
    tag: "Mekanika Kuantike Relativiste",
    bio: "Paul Dirac (1902–1984) formuloi në vitin 1928 ekuacionin relativist kuantik që mban emrin e tij, duke integruar mekanikën kuantike me relativitetin special në një formalizëm të vetëm koherent. Ekuacioni i Dirac-ut jo vetëm që zgjidhi anomali ekzistuese, por parashikoi domosdoshmërisht ekzistencën e antimaterisë, konkretisht të pozitronit, i cili u zbulua eksperimentalisht katër vjet më vonë. Fitoi Çmimin Nobel të Fizikës në vitin 1933 bashkë me Schrödinger-in. Dirac është shënuar gjithashtu për stilin e tij matematikor tepër ekonomik dhe për bindjen se ligjet themelore të fizikës duhet të kenë bukuri matematikore.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Paul_Dirac%2C_1933.jpg",
    vibe: "Mos folni shumë, thelbi i botës vlen matematkisht kaq bukur sa mjafton një resht. ⚖️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Ekuacioni i Dirac & Antimateria", icon: "💥", description: "Materia dritë hijuese — shpiku bazën e asgjësimit.", color: "from-violet-500 to-purple-600" }
  },
  {
    id: 'faraday',
    name: "Michael Faraday",
    tag: "Induksioni",
    bio: "Michael Faraday (1791–1867) paraqet shembullin klasik të shkencëtarit autodidakt të madh: pa arsim formal universitar, u bë ndër eksperimentuesit më të rëndësishëm në historinë e fizikës. Zbuloi induksionin elektromagnetik në vitin 1831, duke treguar se lëvizja e një magneti nëpër një spirale gjeneratë rrymë elektrike, parim mbi të cilin bazohen gjeneratorët dhe transformatorët modernë. Zbuloi gjithashtu elektrolizën, efektin Faraday në ndërveprimim dritë-magnetizëm, dhe zhvilloi konceptin e vijave të fushës si mjet vizualizimi. Maxwell mori punën cilësorë-eksperimentale të Faraday-t dhe e shndërroi në aparaturë matematikore rigoroze. Faraday është vlerësuar gjithashtu për ciklin e tij të ligjëratave popullore për fëmijë mbi 'Kiminë e Qiririt'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Michael_Faraday_sitting_crop.jpg",
    vibe: "Nuk di matematikë të avancuar. Di si funksionon bota. Ndonjëherë mjafton. 🧲",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Gjeneratori i Parë", icon: "🌀", description: "Lëvizja + magneti = rrymë elektrike.", color: "from-amber-600 to-yellow-600" }
  },
  {
    id: 'fermi',
    name: "Enrico Fermi",
    tag: "Fizika Bërthamore",
    bio: "Enrico Fermi (1901–1954) ishte fizikant italian-amerikan i shquar si teoricien ashtu edhe si eksperimentues, kombinim i rrallë në fizikën e shekullit të njëzetë. Në vitin 1942 drejtoi ndërtimin e reaktorit të parë bërthamor, Chicago Pile-1, nën tribunat e stadiumit universitar të Çikagos, duke realizuar reaksionin e parë të kontrolluar bërthamor zinxhir. Ky ngjarje shënoi hapjen e epokës atomike. Gjatë Luftës së Dytë Botërore ishte kontribuues kryesor i Projektit Manhattan. Njihet gjithashtu për metodën e 'vlerësimeve Fermi', teknikë llogaritjeje të shpejtë dhe të arsyeshme të madhësive të panjohura. Pyetja e tij mbi mungesën e shenjave të jetës inteligjente jashtëtokësore njihet sot si Paradoksi Fermi.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Enrico_Fermi_1943-49_crop.jpg",
    vibe: "Pyetni sa pianistë ka në Chicago. Do ta keni numrin për 60 sekonda. ☢️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Reaktori CP-1", icon: "🧱", description: "Reaktori i parë bërthamor — nën stadium futbolli.", color: "from-red-600 to-orange-600" }
  },
  {
    id: 'pauli',
    name: "Wolfgang Pauli",
    tag: "Parimi i Përjashtimit",
    bio: "Wolfgang Pauli (1900–1958) formuloi Parimin e Përjashtimit në vitin 1925: dy elektrone brenda të njëjtit sistem kuantik nuk mund të ndajnë të njëjtin gjendje kuantike. Ky parim shpjegon strukturën e tabelës periodike të elementeve, ngurtësinë e materies dhe stabilitetin e yjeve xhuxhë të bardhë kundër kolapsit gravitacional. Fitoi Çmimin Nobel të Fizikës në vitin 1945. Parashikoi teorikisht ekzistencën e neutrinës në vitin 1930 për të ruajtur konservimin e energjisë dhe momentit në dezintegrimin beta; neutrino u zbulua eksperimentalisht 26 vjet më vonë. Pauli ishte i njohur për kritikën e tij rigoroze dhe rrallëherë të butë ndaj punëve shkencore të dobëta.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Pauli.jpg",
    vibe: "'Kjo nuk është as e gabuar.' — citati im i preferuar. I imi. 🚫",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Neutrino", icon: "👻", description: "Grimca fantazmë — shkon nëpër Tokë pa e prekur.", color: "from-indigo-500 to-blue-700" }
  },
  {
    id: 'broglie',
    name: "Louis de Broglie",
    tag: "Dualiteti Valë-Grimcë",
    bio: "Louis de Broglie (1892–1987) propozoi në disertacionin e tij të doktoratës të vitit 1924 hipotezën se grimcat e materies kanë natyrë valore, në simetri me dualitetin valë-grimcë të dritës të propozuar nga Einstein. Nëse fotoni sillej si grimcë, theksonte de Broglie, atëherë elektroni dhe grimca të tjera materiale duhet të sillnin gjithashtu si valë. Kjo hipotezë u konfirmua eksperimentalisht përmes difraksionit të elektroneve dhe u bë shtyllë e mekanikës kuantike. Fitoi Çmimin Nobel të Fizikës në vitin 1929. Disertacioni i tij mbetet ndoshta rasti i vetëm historik ku një punim doktorature çoi direkt në një Çmim Nobel.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Broglie_Big.jpg",
    vibe: "Elektroni lëviz si grimcë dhe dyfytohet si valë. Njëkohësisht. Mësohu. 〰️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Gjatësia de Broglie", icon: "🌊", description: "Gjatësia e valës të çdo grimce me masë.", color: "from-cyan-400 to-blue-500" }
  },
  {
    id: 'rutherford',
    name: "Ernest Rutherford",
    tag: "Bërthama Atomike",
    bio: "Ernest Rutherford (1871–1937) ndryshoi konceptin e strukturës atomike nëpërmjet eksperimentit të famshëm të fletës së arit të viteve 1909–1911: shumica e grimcave alfa bombarduese kalonin pa pengesa, por disa reflektoheshin në kënde të mëdha, duke treguar se atomi përmban një bërthamë shumë të vogël dhe shumë të dendur. Zbuloi gjithashtu protonin, dalloi rrezatimet alfa nga ato beta dhe realizoi reaksionin e parë artificial bërthamor. Fitoi Çmimin Nobel të Kimisë në vitin 1908, ironikisht për punimet e tij mbi radioaktivitetin, pasi vetë e konsideronte veten fizikant. Thënia e tij se 'Gjithë shkenca është ose fizikë ose koleksionim pullash' mbetet citim i shpeshtë.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ernest_Rutherford_LOC.jpg",
    vibe: "Atomi është pothuajse bosh hapësirë. Edhe ju. Mirëpritur. 🎯",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Fleta e Arit", icon: "✨", description: "Eksperimenti që zbuloi bërthamën — me një fletë ari dhe grimca alfa.", color: "from-yellow-400 to-orange-500" }
  },
  {
    id: 'thomson',
    name: "J. J. Thomson",
    tag: "Elektroni",
    bio: "Joseph John Thomson (1856–1940) zbuloi elektronin në vitin 1897 gjatë studimit sistematik të rrezeve katodike. Zbulimi tregoi se atomi, i menduar deri atëherë si i pandashëm, përmban grimca nënatomike me ngarkesë negative. Thomson propozoi modelin 'xhemit me rrush' të atomit, ku elektronet shpërndaheshin brenda një sfere me ngarkesë pozitive të shpërndarë uniformisht. Ky model u zëvendësua nga modeli bërthamor i Rutherford-it, por zbulimi i elektronit mbeti arritje themelore. Fitoi Çmimin Nobel të Fizikës në vitin 1906. Ndikim i veçantë i tij ndjehet edhe nëpërmjet trashëgimisë pedagogjike: gjashtë studentë të formuar nën drejtimin e tij fituan gjithashtu Çmimin Nobel.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/J.J_Thomson.jpg",
    vibe: "Atomi nuk është i pandashëm. E provova. 6 studentë të mi Nobel. Vetëm po them. ⚡",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Rrezet Katodike", icon: "🏮", description: "Rrjedha e elektroneve — zbulimi i grimcës së parë subatomike.", color: "from-emerald-500 to-green-600" }
  },
  {
    id: 'oppenheimer',
    name: "J. Robert Oppenheimer",
    tag: "Fizika Teorike",
    bio: "J. Robert Oppenheimer (1904–1967) drejtoi Laboratorin Shkencor të Los Alamos gjatë Projektit Manhattan në vitet 1943–1945, duke koordinuar zhvillimin e bombave atomike të para. Kontributet e tij teorike përfshijnë gjithashtu studimin e kolapsit gravitacional të yjeve masive, punë pararendëse e teorisë moderne të vrimave të zeza. Pas shpërthimit të parë bërthamor, gjatë testit Trinity, Oppenheimer citoi vargjet nga Bhagavad Gita: 'Tani jam bërë Vdekja, shkatërrues i botërave'. Pas luftës u bë zë i spikatur kundër proliferimit bërthamor. Në vitin 1954, gjatë periudhës McCarthyste, i u hoq çertifikata e sigurisë nëpërmjet një procesi të kontestuar gjerësisht si politikisht i motivuar.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/J.RobertOppenheimer.jpg",
    vibe: "Dija ka pasoja. Çdo fizikant duhet ta dijë këtë. 💣",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Shpërthimi Trinity", icon: "🍄", description: "Testi i parë bërthamor — 16 korrik 1945.", color: "from-gray-800 to-slate-900" }
  },
  {
    id: 'kepler',
    name: "Johannes Kepler",
    tag: "Orbitat Planetare",
    bio: "Johannes Kepler (1571–1630) formuloi tri ligjet e lëvizjes planetare nëpërmjet analizës rigoroze të të dhënave vëzhguese të Tycho Brahe: planetët lëvizin në orbita eliptike me Diellin në njërin fokus; vektori rreze planet-Diell përshkon sipërfaqe të barabarta në intervale kohore të barabarta; katratet e periodeve orbitale janë proporcionale me kubët e gjysëm-boshteve të mëdha. Newton shpjegoi më vonë këto ligje si pasojë e drejtpërdrejtë e gravitetit universal. Kepler besonte se planetet ndiqnin proporcionet harmonike të 'muzikës së sferave', imazh metaforik, por metodologjia e tij shkencore mbeti rigoroze dhe e bazuar mbi të dhëna.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Johannes_Kepler_1610.jpg",
    vibe: "Planetët nuk lëvizin në rrathë. Mezi e bindën të pranonin elipsat. 🪐",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Ligjet e Orbitaleve", icon: "📐", description: "Tri ligjet që përshkruajnë vallëzimin e planetëve.", color: "from-blue-700 to-indigo-900" }
  },
  {
    id: 'huygens',
    name: "Christiaan Huygens",
    tag: "Optika",
    bio: "Christiaan Huygens (1629–1695) zhvilloi teorinë valore të dritës dhe shpiku orën e parë me lavjerrës në vitin 1656, e cila bëri të mundshme matjen precize të kohës për nevoja të navigacionit dhe kërkimit shkencor. Zbuloi se aneksi i çuditshëm i Saturnit, i vërejtur fillimisht nga Galileo, ishte unaza e hollë rrethore. Zbuloi gjithashtu Titanin, satelitin më të madh të Saturnit. Kontribuoi në teorinë e goditjeve elastike, teorinë e probabilitetit dhe zhvillimin e sistemeve optike teleskopike. Parimi Huygens, sipas të cilit çdo pikë e frontit të valës funksionon si burim i ri vale sferike, mbetet bazë e teorisë moderne të optikës.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Christiaan_Huygens-painting.jpg",
    vibe: "Saturni ka unazë. Drita është valë. E dija para kohës. ⏳",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Ora me Lavjerrës", icon: "⏳", description: "Revolucionoi matjen precize të kohës.", color: "from-amber-700 to-orange-800" }
  },
  {
    id: 'ampere',
    name: "André-Marie Ampère",
    tag: "Elektrodinamika",
    bio: "André-Marie Ampère (1775–1836) themeloi elektrodinamikën si disiplinë shkencore rigoroze pas zbulimit të Ørsted-it të vitit 1820 se rryma elektrike krijon fushë magnetike. Brenda javësh nga ai zbulim, Ampère formuloi ligjet matematike që përshkruajnë forcën midis dy telave paralele me rrymë dhe ofroi shpjegimin e parë koherent të magnetizmit si pasojë e lëvizjes së ngarkesave elektrike. Maxwell e cilësoi si 'Newtonin e elektricitetit'. Njësia SI e intensitetit të rrymës elektrike, Amperi (A), mban emrin e tij. Vdiq pa marrë njohjen institucionale që meritonte gjatë jetës.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Ampere_Andre_1825.jpg",
    vibe: "Dy tela me rrymë paralele tërhiqen. Diçka ka mes tyre — e kam provuar. ⚡",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Solenoidi", icon: "🌀", description: "Spiralja e telit që krijon fushë magnetike uniforme.", color: "from-red-600 to-red-800" }
  },
  {
    id: 'ohm',
    name: "Georg Simon Ohm",
    tag: "Rezistenca",
    bio: "Georg Simon Ohm (1789–1854) formuloi ligjin themelor të qarkut elektrik, botuar në vitin 1827: tensioni elektrik midis dy pikave është i barabartë me produktin e intensitetit të rrymës dhe rezistencës së segmentit (V = I·R). Ky ligj u dha inxhinierëve elektrikë bazën matematikore për analitën e qarkeve. Puna e tij u kundërshtua fillimisht ashpër nga komuniteti shkencor gjerman dhe Ohm humbi postin e tij universitar si pasojë. Njohja erdhi nëpërmjet komunitetit britanik: Shoqëria Mbretërore i dhuroi Medaljen Copley. Njësia SI e rezistencës elektrike, Omi (Ω), mban emrin e tij.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Georg_Simon_Ohm_%281789-1854%29.jpg",
    vibe: "V = I·R. Thjesht. Shpresoj ta mësojnë edhe ata që nuk më besuan. ⚡",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Rezistori", icon: "🔌", description: "Elementi bazë i çdo qarku elektrik.", color: "from-blue-500 to-blue-700" }
  },
  {
    id: 'pascal',
    name: "Blaise Pascal",
    tag: "Presioni",
    bio: "Blaise Pascal (1623–1662) ishte matematikan, fizikant dhe filozof francez i shquar, prodhues shkencor i jashtëzakonshëm duke marrë parasysh moshën kur vdiq, tridhjetë e nëntë vjeç. Formuloi parimin e Pascalit: presioni i ushtruar mbi një lëng të mbyllur transmetohet me intensitet të barabartë në të gjitha drejtimet dhe mbi të gjitha sipërfaqet. Ky parim qëndron pas hidraulikës moderne. Ndërtoi njërën nga makinat e para llogaritëse mekanike, Pascalinën, në vitin 1642. Dha kontribute thelbësore në teorinë e probabilitetit në korrespondencë me Fermat-in, gjeometrinë projective dhe studimin e presionit atmosferik. Shpiku trekëndëshin aritmetik që mban emrin e tij.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Blaise_Pascal_Versailles.JPG",
    vibe: "Lëngu nuk zgjedh drejtim. As presioni. As unë. 💧",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Barometri", icon: "🌡️", description: "Matësi i presionit atmosferik — ideja e Pascal-it.", color: "from-cyan-600 to-blue-800" }
  },
  {
    id: 'curiep',
    name: "Pierre Curie",
    tag: "Magnetizmi",
    bio: "Pierre Curie (1859–1906) zbuloi piezoelektricitetin në vitin 1880 bashkë me vëllanë Jacques: efekti nëpërmjet të cilit kristale të caktuara gjenerojnë tension elektrik kur u nënshtrohen presionit mekanik dhe anasjelltas. Zbuloi gjithashtu pikën Curie, temperatura kritike mbi të cilën materialet ferromagnetike humbasin magnetizmin spontan. Bashkëpunimi shkencor dhe bashkëshortësor me Marie Curie çoi në izolimin e poloniumit dhe radiumit si elementë të rinj. Fituan bashkë Çmimin Nobel të Fizikës në vitin 1903. Pierre Curie vdiq aksidentalisht në vitin 1906 duke u goditur nga një qerre, duke lënë pas mundësinë e dekadave të mëtejshme të punës shkencore.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Pierre_Curie_by_Dujardin_photogravure.jpg",
    vibe: "Kristali nën presion gjeneronte rrymë. Edhe unë nën presion prodhoj ide. 💎",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Efekti Piezolektrik", icon: "💎", description: "Presion meknik → rrymë elektrike. Baza e shumë sensorëve.", color: "from-sky-400 to-blue-600" }
  },
  {
    id: 'meitner',
    name: "Lise Meitner",
    tag: "Fisioni Bërthamor",
    bio: "Lise Meitner (1878–1968) ofroi shpjegimin teorik të fisionit bërthamor në vitin 1938, duke interpretuar rezultatet eksperimentale të bashkëpunëtorit Otto Hahn: bërthama e uraniumit, nën bombardim neutronik, ndahej në bërthama më të vogla duke liruar energji të madhe në përputhje me ekuacionin e Einstein-it E=mc². Bashkëpunimi i saj tridhjetëvjeçar me Hahn-in prodhoi rezultate shkencore thelbësore, por vetëm Hahn mori Çmimin Nobel të Kimisë në vitin 1944, pa përfshirë Meitner-in, rast i cituar gjerësisht si shembull i padrejtësisë gjinore në historinë e Nobelit. Elementi 109 i tabelës periodike, Meitneriumi (Mt), u emërtua në nderim të saj.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Lise_Meitner_1928.jpg",
    vibe: "Shpjegova fisionin. Nuk e mora Nobeliun. Historia e di të vërtetën. ☢️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Fisioni i Uraniumit", icon: "🧬", description: "Bërthama ndahet — dhe lëshon energji të madhe.", color: "from-orange-500 to-red-600" }
  },
  {
    id: 'wu',
    name: "Chien-Shiung Wu",
    tag: "Fizika Eksperimentale",
    bio: "Chien-Shiung Wu (1912–1997) njihet si eksperimentuesja më e shquar e fizikës bërthamore të shekullit të njëzetë. Eksperimenti i saj i vitit 1956 rrëzoi konservimin e paritetit, duke treguar se natyrë bën dallim asimetrik midis drejtimit të majtë dhe të djathtë në rrezatimet beta. Dy fizikanë teorikë, Lee dhe Yang, parashikuan teorikisht këtë rrëzim dhe fituan Çmimin Nobel të Fizikës në vitin 1957; Wu, eksperimentuesja që e vërtetoi, nuk u përfshi. Kontributet e saj shtrihen gjithashtu në studimin e dezintegrimit beta dhe verifikimin e mekanikës kuantike nëpërmjet matjeve precize.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Chien-Shiung_Wu_%281912-1997%29_in_1958.jpg",
    vibe: "Natyra nuk është simetrike. Universi zgjedh anë. E provova unë. 🌀",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Matja e Paritetit", icon: "⚖️", description: "Eksperimenti që tregoi asimetrinë e natyrës.", color: "from-rose-500 to-pink-600" }
  },
  {
    id: 'salam',
    name: "Abdus Salam",
    tag: "Forca Elektrodobët",
    bio: "Abdus Salam (1926–1996) ishte fizikant pakistanez dhe nobelist i parë i origjinës pakistaneze. Bashkë me Sheldon Glashow dhe Steven Weinberg formuloi teorinë elektrodobëte, e cila bashkon forcën elektromagnetike me forcën e dobët bërthamore brenda një kornize teorike të vetme. Ky kontribut u nderua me Çmimin Nobel të Fizikës në vitin 1979. Salam ishte anëtar i komunitetit fetar Ahmadi dhe u njoh ndërkombëtarisht nga institucione shkencore botërore, ndonëse Pakistan nuk e vlerësoi zyrtarisht trashëgiminë e tij. Themeloi Qendrën Ndërkombëtare të Fizikës Teorike (ICTP) në Trieste me misionin e mbështetjes aktive të shkencëtarëve nga vendet në zhvillim.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Abdus_Salam_1987.jpg",
    vibe: "Dy forca, një teori. Unifikimi është rruga e shkencës. ✨",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Bozoni W dhe Z", icon: "✨", description: "Mbajtësit e forcës së dobët bërthamore.", color: "from-indigo-600 to-blue-800" }
  },
  {
    id: 'chandrasekhar',
    name: "Subrahmanyan Chandrasekhar",
    tag: "Yjet",
    bio: "Subrahmanyan Chandrasekhar (1910–1995) zbuloi kufirin e masës për stabilitetin e yjeve xhuxhë të bardhë në vitin 1930: nëse masa e yllit tejkalon rreth 1.4 herë masën e Diellit, presioni i degjenereimit elektronik nuk mjafton për të mbajtur ekuilibrin hidrosttatik dhe ylli kolapson. Ky kufi, i njohur sot si kufiri Chandrasekhar, parashikoi teorikisht ekzistencën e yjeve neutronike dhe vrimave të zeza. Kur e prezantoi rezultatin si student njëzet vjeçar, astronomu i njohur Arthur Eddington e rrëzoi publikisht. Chandrasekhar vazhdoi punën e tij dhe u vërtetua plotësisht. Fitoi Çmimin Nobel të Fizikës në vitin 1983. Teleskopi kozmik Chandra i NASA-s mban emrin e tij.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Chandrasekhar_Subrahmanyan.jpg",
    vibe: "E parashikova kufirin e yjeve kur isha 19 vjeç. Eddington nuk më besoi. NASA e emërtoi teleskop pas meje. 🌟",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Kufiri Chandrasekhar", icon: "☀️", description: "1.4 masë diellore — mbi këtë kufi, ylli shpërthen.", color: "from-yellow-600 to-orange-700" }
  },
  {
    id: 'hubble',
    name: "Edwin Hubble",
    tag: "Kozmologjia",
    bio: "Edwin Hubble (1889–1953) ndryshoi kuptimin shkencor të universit nëpërmjet dy zbulimeve themelore. Në vitin 1923 demonstroi se disa 'rete' të yjeve ishin galaktika të tëra, të vendosura shumë përtej kufijve të Rrugës së Qumështit, duke zgjeruar dramatikisht pamjen e madhësisë së universit. Në vitin 1929 zbuloi se galaktikat largësohen dhe se shpejtësia e largimit është proporcionale me distancën, parim i njohur si Ligji i Hubble-it, i cili paraqiti evidencën e parë observacionale të zgjerimit të universit. Einstein, pasi u njoh me zbulimin, e cilësoi shtimin e konstantit kozmologjik në ekuacionet e tij si 'gabimin e tij më të madh'. Teleskopi hapësinor Hubble mban emrin e tij.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Edwin_Hubble.jpg",
    vibe: "Universi po zgjerohet. Gjithçka po ikin. Jo personalisht. 🌌",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Ligjin e Hubble-it", icon: "🛰️", description: "Galaktikat largësohen — universi ka origjinë.", color: "from-blue-800 to-slate-900" }
  },
  {
    id: 'landau',
    name: "Lev Landau",
    tag: "Fizika Teorike",
    bio: "Lev Landau (1908–1968) ishte fizikant teorik sovjetik i konsideruar ndër mendjet më të shquara të fizikës teorike të shekullit të njëzetë. Kontributet e tij shtrihen në superfluiditet, ku ofroi teorinë e parë sasiore të heliumit të lëngshëm, teorinë e gjendjes kondensuar, fizikën e plazmës, termodinamikën statistikore dhe mekanikën kuantike. Fitoi Çmimin Nobel të Fizikës në vitin 1962. Bashkë me E. M. Lifshitz shkroi Kursin e Fizikës Teorike në dhjetë vëllime, referencë standarde e universiteteve botërore edhe sot. Pas akuzave të rreme, u burgos nga regjimi i Stalinit për një vit në vitin 1938; lirimi i tij u sigurua nëpërmjet ndërhyrjes personale të kolegëve fizikanë.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Lev_Landau.jpg",
    vibe: "Nëse nuk mund ta shkruash, nuk e ke kuptuar. Kurs i plotë teorik: 10 vëllime. 📕",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Superfluiditeti", icon: "💧", description: "Heliumi nën 2.17K rrjedh pa rezistencë.", color: "from-blue-400 to-blue-600" }
  },
  {
    id: 'bose',
    name: "Satyendra Nath Bose",
    tag: "Statistika Kuantike",
    bio: "Satyendra Nath Bose (1894–1974) ishte fizikant indian i cili, në vitin 1924, dërgoi drejtpërdrejt te Einstein një artikull ku propozonte statistikën kuantike të re për fotonet. Einstein e vlerësoi punën menjëherë, e përktheu vetë në gjermanisht dhe e botoi, pastaj e zgjeroi në statistikën Bose-Einstein, e vlefshme për të gjitha grimcat me spin numër i plotë, të quajtura sot bozonet. Parashikimet e tyre çuan në konceptin teorik të kondensatit Bose-Einstein, gjendja e pestë e materies, e realizuar eksperimentalisht vetëm në vitin 1995, shtatëdhjetë e një vjet pas punës origjinale. Klasa e grimcave bozonet, duke përfshirë bozonet Higgs dhe bozonin W dhe Z, mban emrin e Bose-it.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/S_N_Bose_1930s.jpg",
    vibe: "Dërgova artikullin te Einstein sepse revistat nuk e pranonin. Einstein e kuptoi menjëherë. ⚛️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Kondensati Bose-Einstein", icon: "🧊", description: "Gjendja e pestë e materies — të gjitha atomet në të njëjtin gjendje kuantike.", color: "from-sky-300 to-blue-400" }
  },
  {
    id: 'compton',
    name: "Arthur Holly Compton",
    tag: "Rrezet X",
    bio: "Arthur Compton (1892–1962) zbuloi efektin që mban emrin e tij në vitin 1923: fotoni i rrezeve X, pas përplasjes me një elektron të lirë, shpërndahet me gjatësi vale të rritur, duke transferuar energji dhe moment elektronit. Ky rezultat provoi vendimtarisht natyrën grimcore të rrezatimit elektromagnetik dhe konfirmoi postulatën e Einstein-it mbi fotonet. Fitoi Çmimin Nobel të Fizikës në vitin 1927. Gjatë Projektit Manhattan drejtoi 'Metallurgical Laboratory' në Çikago, ku Fermi realizoi reaktorin e parë bërthamor. Dha kontribute gjithashtu në astrofizikë dhe në studimin e rrezatimit kozmik.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Arthur_Compton.jpg",
    vibe: "Fotoni godet elektronin si bilardo. Drita ka masë efektive. Provuar. 📸",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Efekti Compton", icon: "🏮", description: "Fotoni + elektroni → foton me gjatësi vale të ndryshuar.", color: "from-red-500 to-orange-500" }
  },
  {
    id: 'yukawa',
    name: "Hideki Yukawa",
    tag: "Fizika Bërthamore",
    bio: "Hideki Yukawa (1907–1981) parashikoi teorikisht në vitin 1935 ekzistencën e mezonit pi, grimca ndërmjetëse e forcës së fortë bërthamore midis protoneve dhe neutroneve. Modeli i tij shpjegoi se si bërthama atomike mbetet e bashkuar pavarësisht repulsionit elektromagnetik midis protoneve: grimca ndërmjetëse e masës mesatare transmetonin forcën kohezione. Mezoni pi u zbulua eksperimentalisht në vitin 1947 nga Powell dhe bashkëpunëtorë. Yukawa fitoi Çmimin Nobel të Fizikës në vitin 1949, duke u bërë i pari japonez që mori këtë çmim. Modeli i tij shërbeu si prototip konceptual i teorisë moderne të forcave bërthamore.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Hideki_Yukawa_1950.jpg",
    vibe: "Bërthama mbahet bashkë nga grimcat e mia. Mesazheri i forcës së fortë. 🧱",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Mezoni Pi", icon: "🧬", description: "Grimca që mban bashkë protonin dhe neutronin.", color: "from-green-600 to-emerald-700" }
  },
  {
    id: 'gellmann',
    name: "Murray Gell-Mann",
    tag: "Kuarket",
    bio: "Murray Gell-Mann (1929–2019) propozoi modelin e kuarkeve në vitin 1964: protonet, neutronet dhe mezonet janë ndërtuar nga grimca subatomike edhe më themelore, të quajtura kuarke, emër i huazuar nga romanet e James Joyce-it. Ekzistojnë gjashtë lloje kuarkesh: up, down, charm, strange, top dhe bottom, të organizuara sipas ngarkesës dhe karakteristikave kuantike. Kjo propozim dha themelin e Kromodinamikës Kuantike dhe u integrua si shtyllë e Modelit Standard të fizikës së grimcave. Fitoi Çmimin Nobel të Fizikës në vitin 1969. Gell-Mann ishte njëkohësisht linguist amator, ornitolog dhe aktivist për ruajtjen e biodiversitetit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Murray_Gell-Mann_at_Le_Web_2011.jpg",
    vibe: "Gjashtë shije, tre ngjyra, kuarke kudo. Emrin e mora nga Joyce. 🍦",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Kuarku", icon: "💎", description: "Blloqet ndërtues të protoneve — nuk ekzistojnë të lirshëm.", color: "from-purple-500 to-indigo-600" }
  },
  {
    id: 'higgs',
    name: "Peter Higgs",
    tag: "Bozoni Higgs",
    bio: "Peter Higgs (1929–2024) propozoi në vitin 1964 ekzistencën e një fushe kuantike skalare pervazive, sot të njohur si Fusha Higgs, dhe të grimcës shoqëruese, bozoni Higgs. Mekanizmi i Higgs-it shpjegon si grimcat elementare fitojnë masë nëpërmjet ndërveprimeve me këtë fushë; pa të, simetria e Modelit Standard do të impononte masë zero për bozonët W dhe Z. Bozoni Higgs u zbulua eksperimentalisht në CERN nëpërmjet akseleratorit LHC më 4 korrik 2012, dyzet e tetë vjet pas parashikimit teorik. Higgs dhe François Englert fituan Çmimin Nobel të Fizikës në vitin 2013. Higgs shpreh publikisht pakënaqësi me emërtimin popullor 'grimca e Zotit'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Higgs%2C_Peter_%281929%29.jpg",
    vibe: "48 vjet pritja. CERN e gjeti. Dhe mos e quani 'grimcë të Zotit'. ⚓",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Fusha Higgs", icon: "🕸️", description: "Fushe kuantike që i jep masë gjithçkaje.", color: "from-slate-600 to-indigo-900" }
  },
  {
    id: 'rubbia',
    name: "Carlo Rubbia",
    tag: "Grimcat W dhe Z",
    bio: "Carlo Rubbia (lindur 1934) drejtoi eksperimentin UA1 në CERN që zbuloi bozonët W dhe Z në vitin 1983, ndërmjetësit e forcës së dobët bërthamore. Zbulimi konfirmoi eksperimentalisht teorinë elektrodobëte të Salam, Glashow dhe Weinberg dhe paraqiti një nga sukseset më të mëdha të fizikës eksperimentale të shekullit të njëzetë. Fitoi Çmimin Nobel të Fizikës në vitin 1984 bashkë me Simon van der Meer. Rubbia shërbeu si Drejtor i Përgjithshëm i CERN-it nga viti 1989 deri në vitin 1994. Gjatë karrierës ka promovuar energjinë bërthamore si alternativë strategjike ndaj karburanteve fosile.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Carlo_Rubbia_CERN.jpg",
    vibe: "CERN nuk është vetëm rrethore. Është vendi ku zbulohen legjitësimet e universit. 🇨🇭",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Bozonet W dhe Z", icon: "🧨", description: "Ndërmjetësit e forcës së dobët bërthamore.", color: "from-orange-600 to-red-700" }
  },
  {
    id: 'weinberg',
    name: "Steven Weinberg",
    tag: "Modeli Standard",
    bio: "Steven Weinberg (1933–2021) formuloi teorinë elektrodobëte në vitin 1967, duke bashkuar forcën elektromagnetike me forcën e dobët bërthamore dhe parashikuar bozonët W, Z si dhe mekanizmin Higgs të thyerjes spontane të simetrisë. Bashkë me Salam dhe Glashow fitoi Çmimin Nobel të Fizikës në vitin 1979. Modeli Standard i fizikës së grimcave, ndërtesa teorike me suksesin parashikues më të lartë të shkencës, bazohet mbi këtë unifikim si bërthamë. Weinberg ishte gjithashtu autor i rëndësishëm i shkencës për audiencë të gjerë; libri 'The First Three Minutes', botuar në vitin 1977, shpjegoi kozmologjinë e Big Bang-ut me qartësi dhe precizion shembullor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Steven_Weinberg_cropped.jpg",
    vibe: "Universi nuk ka qëllim. Ka ligje. Kjo është shumë më interesante. 📚",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Modeli Standard", icon: "🏛️", description: "Teoria që përshkruan të gjitha grimcat dhe forcat (pa gravitin).", color: "from-blue-700 to-indigo-900" }
  },
  {
    id: 'thorne',
    name: "Kip Thorne",
    tag: "Valët Gravitacionale",
    bio: "Kip Thorne (lindur 1940) është fizikant amerikan i specializuar në astrofizikën relativiste dhe fizikën e vrimave të zeza. Ishte ndër themeluesit e projektit LIGO, Observatori Interferometrik Lazer i Valëve Gravitacionale, i cili zbuloi valët gravitacionale në vitin 2015, njëqind vjet pas parashikimit teorik të Einstein-it. Fitoi Çmimin Nobel të Fizikës në vitin 2017. Kontributet teorike të Thorne-it përfshijnë gjithashtu studimet e fizikës së vrimave të zeza dhe vrimave krimbësh. Shërbeu si konsulent shkencor kryesor i filmit Interstellar të vitit 2014, duke kontribuar në paraqitjet vizuale shkencore të besueshme të vrimave të zeza.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Kip_Thorne_2017.jpg",
    vibe: "Hapësirakohja dridhet. LIGO e dëgjoi. Sinjali zgjati 0.2 sekonda. 〰️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "LIGO", icon: "📡", description: "Detektori i valëve gravitacionale — prek deformime më të vogla se protoni.", color: "from-gray-600 to-blue-800" }
  },
  {
    id: 'greene',
    name: "Brian Greene",
    tag: "Teoria e Fijeve",
    bio: "Brian Greene (lindur 1963) është fizikant amerikan dhe komunikues i shquar shkencor, i specializuar në Teorinë e Fijeve dhe kozmologjinë teorike. Teoria e Fijeve propozoi se grimcat elementare nuk janë pika pa dimensione, por objekte njëdimensionale vibruese, 'fije', ku vibrimet e ndryshme korrespondojnë me grimca të ndryshme. Librat e tij 'The Elegant Universe' dhe 'The Fabric of the Cosmos' u bënë bestseller ndërkombëtarë dhe u adaptuan si dokumentarë. Greene drejton Festivalin Botëror të Shkencës në Nju Jork. Teoria e Fijeve mbetet deri më sot pa konfirmim eksperimental të drejtpërdrejtë.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Brian_Greene_2015.jpg",
    vibe: "Universi vibroi para Big Bang-ut. Ndoshta. Punojmë. 🎸",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Fija Kuantike", icon: "🎻", description: "Objekti njëdimensional që vibrimi i tij krijon çdo grimcë.", color: "from-purple-500 to-pink-500" }
  },
  {
    id: 'randall',
    name: "Lisa Randall",
    tag: "Dimensionet e Fshehura",
    bio: "Lisa Randall (lindur 1962) është fizikante teorike amerikane dhe profesore në Universitetin Harvard. Bashkë me Raman Sundrum propozoi modelin Randall-Sundrum në vitin 1999: dimensione shtesë hapësinore të deformuara ('warped') të cilat mund të jenë të mëdha por të pandikueshme drejtpërdrejt, duke ofruar zgjidhje origjinale për problemin e hierarkisë, pra dobësinë relative të gravitetit krahasuar me forcat e tjera. Librat e saj 'Warped Passages' dhe 'Knocking on Heaven's Door' shpjegojnë fizikën teorike moderne për audiencë të gjerë me rreptësi shkencore të lartë. U rendit si fizikantja me numrin më të lartë të citimeve shkencore për vitin 2007.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Lisa_Randall_July_2006.jpg",
    vibe: "Dimensionet e fshehura nuk janë ëndërr. Janë matematikë e patestuar ende. 🌀",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Brana", icon: "📑", description: "Universi ynë si membranë në hapësirë me dimensione shtesë.", color: "from-indigo-400 to-blue-600" }
  },
  {
    id: 'penrose',
    name: "Roger Penrose",
    tag: "Kozmologjia Matematikore",
    bio: "Roger Penrose (lindur 1931) është matematikan dhe fizikant britanik. Në vitet 1960 demonstroi, nëpërmjet metodave të topologjisë diferenciale, se vrimat e zeza janë pasojë e pashmangshme e relativitetit të përgjithshëm: kur dendësia e materies kalon një prag kritik, formimi i singularitetit bëhet i domosdoshëm. Ky rezultat, i arritur pavarësisht skepticizmit fillestar të vetë Einstein-it, u nderua me Çmimin Nobel të Fizikës në vitin 2020. Bashkë me Hawking-un kontribuoi gjithashtu në teoritë e Big Bang-ut. Penrose është i njohur gjithashtu për mozaikun Penrose, sistemet gjeometrike apériodike që mbulojnë rrafshin pa asnjë periodiciteti.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Roger_Penrose_at_Festival_della_Scienza.jpg",
    vibe: "Vrimat e zeza nuk janë opsionale. Janë të domosdoshme matemakisht. 🔢",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Singulariteti i Zhveshur", icon: "🕳️", description: "Pika e dendësisë së pafund. Nuk mund ta shohësh.", color: "from-gray-800 to-black" }
  },
  {
    id: 'witten',
    name: "Edward Witten",
    tag: "Teoria M",
    bio: "Edward Witten (lindur 1951) konsiderohet gjerësisht fizikani teorik më me ndikim i gjallë. Është i vetmi fizikant që ka fituar Medaljen Fields, çmimi më i lartë i matematikës, për kontributet e tij fizike me implikim të thellë në topologji dhe gjeometri. Në vitin 1995 tregoi se pesë versionet e ndryshme të Teorisë së Fijeve ishin limite të ndryshme të një teorie të vetme dhe më themelore me njëmbëdhjetë dimensione, të quajtur Teoria M. Ky unifikim nisi të ashtuquajturin Revolucionin e Dytë të Fijeve dhe ristrukturoi fushën e fizikës teorike të energjive të larta.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Edward_Witten_at_Harvard_University.jpg",
    vibe: "Gjeometria është fizikë. Fizika është gjeometri. Teoria M ka 11 dimensione. 📏",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Teoria M", icon: "🧬", description: "Mund të nënkuptojë Membranë, Magji, Misticizëm, apo Nënë e të gjitha teorive.", color: "from-slate-700 to-slate-900" }
  },
  {
    id: 'ehrenfest',
    name: "Paul Ehrenfest",
    tag: "Fizika Statistikore",
    bio: "Paul Ehrenfest (1880–1933) ishte fizikant austriak-holandez i shquar për kontributet në termodinamikën statistikore dhe për rolin e tij si kritik dhe pedagog i pazëvendësueshëm në periudhën formative të mekanikës kuantike. Teorema e tij tregon se vlerat pritëse të madhësive kuantike evoluojnë sipas ligjeve klasike të Newtonit, duke vendosur lidhjen formale midis mekanikës kuantike dhe asaj klasike. Miqësia e tij e ngushtë me Einstein-in dhe Bohr-in e vendosi në qendër të debateve kryesore të fizikës teorike të kohës. Kontributet e tij, ndonëse shpesh pa zbulime që mbajnë vetëm emrin e tij, sqaruan me rreptësi logjike disa nga pyetjet themelore të interpretimit kuantik. Vdiq tragjiksht si pasojë e depresionit klinik.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Paul_Ehrenfest.jpg",
    vibe: "Të kuptosh pyetjen vlen sa gjysma e përgjigjes. Teorema ime lidh Newtonin me Kuantikun. 🗣️",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Teori-Lidhës", icon: "🔗", description: "Mekanika kuantike → Mekanika klasike.", color: "from-gray-500 to-slate-700" }
  },
  {
    id: 'lorentz',
    name: "Hendrik Antoon Lorentz",
    tag: "Elektrodinamika",
    bio: "Hendrik Lorentz (1853–1928) ishte figura dominuese e fizikës teorike në periudhën para Einstein-it. Duke punuar mbi anomalitë e elektrodinamikës së Maxwell-it, propozoi se atomet përmbajnë ngarkesa të oscilueshme dhe formuloi transformimet matematike që mbajnë emrin e tij: ekuacionet që përshkruajnë shkurtimin e gjatësisë dhe zgjatimin e kohës si funksion i shpejtësisë. Lorentz i konceptoi fillimisht këto si mekanizma matematikore ndihmëse; dhjetë vjet më vonë Einstein demonstroi se paraqitnin realitetin fizik të hapësirakohës. Fitoi Çmimin Nobel të Fizikës në vitin 1902 bashkë me Pieter Zeeman. Transformimet e Lorentz-it janë themel i çdo trajte të relativitetit special.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Hendrik_Antoon_Lorentz_%281853-1928%29.jpg",
    vibe: "Bëra matematikën e relativitetit. Einstein i dha kupëtimin. 📐",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Transformimet e Lorentz", icon: "↔️", description: "Koha zgjatet, hapësira ngushtohet.", color: "from-blue-600 to-indigo-700" }
  },
  {
    id: 'noether',
    name: "Emmy Noether",
    tag: "Simetria Matematike",
    bio: "Amalie Emmy Noether (1882–1935) ishte matematikane gjermane e cilësuar nga Einstein si 'gjenia më e shquar kreative që nga fillimi i arsimit të lartë për gratë'. Teorema e saj e vitit 1915 vendos lidhjen themelore midis simetrive të natyrës dhe ligjeve të konservimit: çdo simetri e vazhdueshme e ekuacioneve fizike korrespondon saktësisht me një madhësi të konservuar. Simetria kohore korrespondon me konservimin e energjisë; simetria hapësinore me konservimin e momentit linear; simetria rrotacionale me konservimin e momentit këndor. Kjo teorem u bë guri themelor i të gjitha teorive moderne të fushës. Noether u përjashtua nga posti akademik nga regjimi nazist dhe vdiq pak pasi emigroi në Shtetet e Bashkuara.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Noether.jpg",
    vibe: "Simetri do të thotë konservim. Kjo është matematika që dirigjon universin. 💠",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Teorema Noether", icon: "👑", description: "Lidhja e padukshme mes simetrisë dhe ligjeve të ruajtjes.", color: "from-amber-400 to-orange-500" }
  },
  {
    id: 'volta',
    name: "Alessandro Volta",
    tag: "Elektriciteti",
    bio: "Alessandro Volta (1745–1827) shpiku baterinë e parë elektrike, Pila Voltiane, në vitin 1799. Përpara Voltës, elektriciteti ishte studiuar kryesisht si ngarkesë statike dhe shkarkim momentan. Pila e tij, e ndërtuar me disqe sinku dhe argjendi të ndara me letër të njomur në tretësirë kripore, prodhonte rrymë të vazhdueshme dhe të qëndrueshme për herë të parë. Ky shpikje çeli rrugën e të gjitha zbulimeve të shekullit të nëntëmbëdhjetë në elektricitet dhe magnetizëm, duke bërë të mundur punën eksperimentale të Ampère-it, Faraday-t dhe Ohm-it. Njësia SI e tensionit elektrik, Volti (V), mban emrin e tij.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Alessandro_Volta.jpg",
    vibe: "Shkëndijën e ktheva në lumë energjie të vazhdueshme. Tensioni mban emrin tim. 🔋",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Pila Voltiane", icon: "🕯️", description: "Bateria e parë — zink dhe bakër.", color: "from-yellow-600 to-yellow-800" }
  },
  {
    id: 'kirchhoff',
    name: "Gustav Robert Kirchhoff",
    tag: "Ligjet e Qarkut",
    bio: "Gustav Kirchhoff (1824–1887) ishte fizikant gjerman. Në vitin 1845, ende student, formuloi Ligjet e Kirchhoff-it të qarkut elektrik: ligji i nyjeve, sipas të cilit shuma e rrymave që hyjnë në çdo nyje të qarkut është e barabartë me shumën e atyre që dalin, dhe ligji i laçeve, sipas të cilit shuma algjebrike e tensioneve në çdo laç të mbyllur është zero. Këto ligje u mundësojnë inxhinierëve llogaritjen e rrymave dhe tensioneve në qarqe të ndërlikuara. Bashkë me Robert Bunsen zhvilloi spektroskopinë si metodë diagnostike: çdo element kimik lëshon spektër karakteristik dritash kur nxehet, metodë që lejoi identifikimin e përbërjes kimike të yjeve nga distanca.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Kirchhoff_Gustav_Robert.jpg",
    vibe: "ΣI(hyrje) = ΣI(dalje). Asgjë nuk humbet në qarkun tim. As në elementët e ndezur. 🔌",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Rregulla e Nyjeve", icon: "🕸️", description: "Ç'ka hyn në qark duhet të dalë nga qarku.", color: "from-red-500 to-rose-600" }
  },
  {
    id: 'born',
    name: "Max Born",
    tag: "Kuantika i Probabilitetit",
    bio: "Max Born (1882–1970) ishte fizikant gjerman-britanik i cili propozoi në vitin 1926 interpretimin statistikor të funksionit të valës së Schrödinger-it. Ndërsa Schrödinger e konceptonte funksionin e valës si shpërndarje fizike të materies, Born demonstroi se moduli në katror i funksionit të valës jep densitetin e probabilitetit të gjendjes grimcore. Ky interpretim u bë bërthama e Interpretimit të Kopenhagenit dhe do të thotë se realiteti kuantik është në thelb probabilistik. Fitoi Çmimin Nobel të Fizikës relativisht vonë, në vitin 1954. Ndikimi i tij pedagogjik qe gjithashtu i gjerë nëpërmjet studentëve të tij, ndër të cilët figurojnë disa nobelistë.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Max_Born.jpg",
    vibe: "Vala nuk është e masës, por e mundësisë. Zoti asgjë s'është pos bixhozxhi. 🎲",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Bordi I Probabilitetit", icon: "🌊", description: "Tregon shansin se ku mund të fshehet elektroni.", color: "from-blue-400 to-indigo-500" }
  },
];
