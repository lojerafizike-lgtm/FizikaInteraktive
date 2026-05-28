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
    bio: "Isaac Newton (1643–1727) është ndoshta shkencëtari më me ndikim që ka jetuar ndonjëherë. Në vitin 1687 botoi Principia Mathematica, ku formuloi tre ligjet e lëvizjes dhe ligjin e gravitetit universal — duke shpjeguar me të njëjtën formulë si bie një mollë dhe si lëviz Hëna. Krahas fizikës, Newton shpiku llogaritjen infitezimale (njëkohësisht me Leibniz, gjë që i solli një sherr të famshëm historik), zbuloi se drita e bardhë është bashkim i të gjitha ngjyrave dhe shpiku teleskopin reflektues. Drejtoi Monedhërinë Mbretërore britanike dhe u bë president i Shoqatës Mbretërore të Shkencave. Konsiderohet themeluesi i mekanikës klasike.",
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
    bio: "Albert Einstein (1879–1955) e ndryshoi kuptimin tonë të hapësirës, kohës dhe materies. Në vitin 1905 — të quajtur 'annus mirabilis' (viti mrekullie) — publikoi katër artikuj revolucionarë: mbi efektin fotoelektrik, lëvizjen Browniane, relativitetin special dhe ekuivalencën masë-energji (E=mc²). Në vitin 1915 formuloi teorinë e relativitetit të përgjithshëm, duke përshkruar gravitetin si deformim të hapësirakohës. Fitoi Çmimin Nobel të Fizikës në 1921 për efektin fotoelektrik, jo për relativitetin — njëra nga ironitë e mëdha të historisë së shkencës. Mbeti simbol i gjeniut edhe dhjetëra vjet pas vdekjes.",
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
    bio: "Galileo Galilei (1564–1642) quhet me të drejtë babai i shkencës moderne eksperimentale. Ishte i pari që drejti një teleskop drejt qiellit dhe ajo që pa e ndryshoi gjithçka: malet e Hënës, katër satelitët e Jupiterit (sot të quajtura 'satelitë galileanë'), fazat e Venusit dhe njollat diellore. Zbulimi i satelitëve të Jupiterit ishte goditja vendimtare ndaj pikëpamjes se Toka ishte qendra e gjithçkaje. Mbrojti teorinë heliocentrike të Kopernikut, gjë që e çoi përpara Inkuizicionit dhe u dënua me burg shtëpie deri në fund të jetës. Mes studjeve të tij spikat edhe analiza e rënies së lirë dhe pendulumit.",
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
    bio: "Marie Curie (1867–1934) është gruaja e parë dhe e vetmja person që ka fituar dy Çmime Nobel në fusha të ndryshme shkencore — Fizikë (1903) dhe Kimi (1911). E lindur në Varshavë, u transferua në Paris ku studioi dhe punoi pavarësisht pengesave të shumta si grua në shkencë. Ajo dhe bashkëshorti Pierre Curie izoluan dy elementë të rinj: poloniumin (të emërtuar pas Polonisë) dhe radiumin. Curie shpiku termin 'radioaktivitet' dhe kuptoi se ai ishte veti e atomit, jo e reaksionit kimik — zbulim që revolucionizoi fizikën. Gjatë Luftës së Parë Botërore organizoi stacione lëvizëse me rreze X. Vdiq nga anemia aplastike, me shumë gjasë pasojë e ekspozimit afatgjatë ndaj rrezatimit.",
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
    bio: "Nikola Tesla lindi në vitin 1856... zhvilloi sistemin e rrymës alternative (AC). Kontribuoi në motorët elektrikë dhe transformatorët. Shpiku bobinën Tesla dhe bëri eksperimente me transmetimin pa tela të energjisë. Pionier i botës moderne elektrike.",
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
    bio: "James Clerk Maxwell (1831–1879) shkroi Ekuacionet e Maxwell-it — katër ekuacionet diferenciale që bashkuan elektricitetin dhe magnetizmin në një fushë të vetme (elektromagnetizmi). Kjo konsiderohet 'unifikimi i dytë i madh në fizikë' (pas Newton-it). Supozoi, vetëm me matematikë, se drita ishte një valë elektromagnetike. Kjo përgatiti rrugën për radiot, televizorët dhe gjithë komunikimin modern. Einstein e mbante një portret të Maxwell-it në zyrën e tij bashkë me Newton-in dhe Faraday-n. Gjithashtu themeloi termodinamikën statistikore dhe realizoi fotografinë e parë me ngjyra të vërteta në botë.",
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
    bio: "Niels Bohr (1885–1962) propozoi (1913) Modelin e Bohr-it për atomin: ku elektronet rrotullohen rreth bërthamës vetëm në orbita specifike dhe 'kërcejnë' (kërcim kuantik) duke lëshuar apo thithur rrezatim. Kjo zgjidhi paradokset e thella të fizikës klasike dhe hapi theksin për zhvillimin e mekanikës kuantike. Gjatë Luftës II ndihmoi hebrenjtë të arratiseshin nga Danimarka. Drejtoi Institutin e Fizikës Teorike në Kopenhagen që u bë qendra botërore ku lindi 'Interpretimi i Kopenhagenit' (Mekanika Kuantike siç njihet sot). Bënte debate filozofike pafund me Einstein-in, të cilat ai zakonisht i fitonte.",
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
    bio: "Max Planck (1858–1947) ishte babai, me dëshirë të munguar, i teorisë kuantike. Në vitin 1900, ai zbuloi se për të shpjeguar dritën që lëshojnë trupat e nxhetë saktësisht, duhej supozuar se energjia lëshohej në 'pako' të vogla, që ai i quajti 'kuante' — kjo tronditi themelet e fizikës klasike, ku energia supozohej e vazhdueshme. Konstanta e Planck-ut, h, përshkruan madhësinë e kësaj pakete. Jeta e tij private po u mbushej me tragjedi: djali i tij u ekzekutua nga nazistët pasi mori pjesë në komplot për të vrarë Hitler-in (1944). Fitoi Nobeliun 1918.",
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
    bio: "Stephen Hawking (1942–2018) ndonëse vuante nga sëmundja ALS (Sëmundja e Loe Gehrig, i detyruar në karrige me rrota qe nga 1960), kontribuoi ndoshta një nga teoritë më të forta të astrofizikës. Zbuloi se vrimat e zeza mund të 'avullojnë' duke lëshuar rrezatim — të quajtur Rrezatimi Hawking (1974). Ky ishte lidhësi i parë matematikan mes Relativitetit të Përgjithshëm dhe Mekanikës Kuantike. Libri i tij popullor 'Një Histori e Shkurtër e Kohës' (1988) u shit mbi 25 milionë kopje.",
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
    bio: "Richard Feynman (1918–1988) shpiku Diagramet e Feynman-it (1948) — përfaqësime grafike shumë të thjeshta dhe gjeniale që i shpëtuan fizikantët nga ekuacione rraskapitëse gjatë llogaritjeve të ndërveprimeve ndërgrimcore. Fitoi Nobeliun (1965) për zhvillimin e QED-së (Elektrodinamikës Kuantike), ndoshta teoria jonë më e saktë deri më sot. Librot e tij 'Një Fjalë Farsi të Feynman-it' na rrëfejnë aventurat — e si i rëmbeu thesarit në Los Alamos apo refuzimet që bënte te NASA (Aksidenti i Challenger-it, dëshmuar prej tij, tregoi fajin qartazi me një gjakftohtësi legendare).",
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
    bio: "Werner Heisenberg (1901–1976) formuloi 1925 Mekanikën Matricore, formulimin e parë rigoroz të Mekanikës Kuantike plotësisht funksionues. Në 1927 shpalli 'Parimin e Pasigurisë' famëmadh: është e pamundur që pozicioni e momenti vërtet dihen njëkohësisht. Jo shkaku i një pajisje të dobët, kjo është veti themelor i universit tonë. Puna tij gjatë Luftës II mbart polemika (A synoi të sabotonte, a ngeli i paaftë?) Ai ishte kryesia i 'UranoProjekt-it' (bombës) nazi i cila deshtoi.",
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
    bio: "Erwin Schrödinger (1887–1961) zhvilloi me 1926 ekuacionin që mban emrin e tij — Ekuacioni i Schrödinger-it — formulën supreme për t'i parashikuar sistemet valore kuantike në kohë, ashtu siç luajnë ligjet e Newton-it. Megjithë kontributin madhor në krijimin kuantike, nuk pranoi asnjëherë interpretimin stohastik probabilist (të pritur). Në 1935 formësoi fjalën 'Rraheshi Kuantik' edhe eksperimentin mendor famëmadh: Macja e Schrödinger — një mace në një kuti mbyllur e cila është 'dhe' e gjallë 'dhe' e vdekur njekohësisht... Për sa kohë askush s'heton kutinë.",
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
    bio: "Paul Dirac (1902–1984) ishte anglezi më fjalëpak dhe mbresëlënës që bëri 'bisedat' në mësimet vetëm të ndriçuara nëpërmjet ekuacioneve shumë të thella të bukura. Formuloi me 1928, Ekuacionin e Dirac-ut (duke ngjyrosur Kuantiken dhe Relativitetin tek i njejti ujë), teori që jo vetëm zgjidhi anomali — po parashikoi domosdo Antimaterien. 4 vite pra mbas ekuacionit Antimateria u dëshmua fizikisht (pozitroni u zbulua)!! Ofron llogaritjet matematike mbi monopollet magnetike. Gjithnjë me thënien: 'Ligjet fizike kanë bukuri matematikore'.",
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
    bio: "Michael Faraday (1791–1867) është shembulli klasik i gjeniut autodidakt — pa arsim formal të lartë, u bë njëri nga eksperimentuesit më të mëdhenj të historisë. Zbuloi induksionin elektromagnetik (1831), duke treguar se lëvizja e magnetit brenda spirales gjeneronte rrymë — ky parim qëndron pas gjeneratorëve dhe transformatorëve modernë. Zbuloi gjithashtu elektrolizën, efektin Faraday (ndërveprim dritë-magnetizëm), dhe shpiku konceptin e 'vijave të fushës'. Maxwell e mori punën e Faraday-t dhe e shndërroi në matematikë të plotë. Faraday dha ligjërata të famshme popullore për fëmijë — cikli 'Kimia e Qiririt' lexohet ende sot.",
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
    bio: "Enrico Fermi (1901–1954) ishte fizikant italian-amerikan i jashtëzakonshëm si teoricien ashtu edhe eksperimentues — aftësi e rrallë. Në 1942 drejtoi ndërtimin e reaktorit të parë bërthamor nën tribuna stadiumi në Chicago — Chicago Pile-1 — duke realizuar reaksionin e parë të kontrolluar bërthamor zinxhir. Kjo çeli epokën atomike. Gjatë Luftës së Dytë Botërore ishte pjesë kyçe e Projektit Manhattan. I njohur edhe për 'vlerësimet Fermi' — metoda e llogaritjes shpejt të numrave të panjohur me supozime të arsyeshme. Pyetja 'Ku janë të gjithë?' për jetën jashtëterake quhet sot 'Paradoksi Fermi'.",
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
    bio: "Wolfgang Pauli (1900–1958) formuloi Parimi i Përjashtimit (1925): dy elektrone nuk mund të ndajnë të njëjtin gjendje kuantike. Ky parim shpjegon strukturën e tabelës periodike, pse materja është e ngurtë dhe pse yjet bëhen xhuxhë të bardhë. Fitoi Çmimin Nobel të Fizikës në 1945. Parashikoi teorikisht ekzistencën e neutrinës (1930), e cila u zbulua eksperimentalisht 26 vjet më vonë. I famshëm për kritikën e ashpër: ligjëratave ku kolegë prezantonin gjetje jo të sakta, Pauli thoshte shpesh: 'Kjo nuk është as e gabuar.' (Thënia është ikonike sot.)",
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
    bio: "Louis de Broglie (1892–1987) propozoi në disertacionin e tij të doktoratës (1924) se, nëse drita mund të sillej si grimcë (fotoni i Einstein), atëherë grimcat e materies duhet të kenë edhe natyrë valore. Kjo ide — dualiteti valë-grimcë për materien — u konfirmua eksperimentalisht me difraksionin e elektroneve dhe u bë themel i mekanikës kuantike. Fitoi Çmimin Nobel të Fizikës në 1929. Është ndoshta rasti i vetëm ku doktoratë e vetme fitoi Nobel.",
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
    bio: "Ernest Rutherford (1871–1937) e ndryshoi kuptimin e atomit përmes eksperimentit të famshëm të fletës së arit (1909–1911): shumica e grimcave alfa kalonin drejtpërdrejt, por disa reflektoheshin fort — sikur kishin rënë në 'diçka shumë të vogël dhe të dendur'. Kjo 'diçka' ishte bërthama atomike. Rutherford zbuloi gjithashtu protonin, dalloi rrezatimin alfa nga beta dhe realizoi reaksionin e parë artificial bërthamor. Fitoi Çmimin Nobel të Kimisë në 1908 — ironikisht, si fizikant i bindur. Tha: 'Gjithë shkenca është ose fizikë ose koleksionim pullash.'",
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
    bio: "Joseph John Thomson (1856–1940) zbuloi elektronin në 1897 duke studiuar rrezet katodike. Para tij, atomi mendohej si i pandashëm. Thomson tregoi se kishte grimca shumë më të vogla brenda — me ngarkesë negative. Propozoi modelin 'xhemit me rrush' (plum pudding) të atomit, ku elektronet ishin të shpërndara brenda sferës pozitive. Edhe pse ky model u zëvendësua nga modeli i Rutherford-it, zbulimi i elektronit mbeti revolucionar. Fitoi Çmimin Nobel të Fizikës në 1906. Gjashtë studentë të tij fituan gjithashtu Nobel — rekord akademik i jashtëzakonshëm.",
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
    bio: "J. Robert Oppenheimer (1904–1967) drejtoi Laboratorin e Los Alamos gjatë Projektit Manhattan (1943–1945), duke koordinuar zhvillimin e bombës atomike. Fizikant teorik brilant, kontribuoi edhe në kolapsin gravitacional (pararendës i teorisë së vrimave të zeza). Kur panë shpërthimin e parë bërthamor në Trinity Test, Oppenheimer tha: 'Tani jam bërë Vdekja, shkatërrues i botërave' — citim nga Bhagavad Gita. Pas luftës u bë zë i rëndësishëm kundër proliferimit bërthamor, gjë që i solli probleme me McCarthizmin: në 1954 i hoqën çertifikatën e sigurisë.",
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
    bio: "Johannes Kepler (1571–1630) formuloi tre ligjet e lëvizjes planetare: planetët lëvizin në elipsa (jo rrathë) me Diellin në njërin fokus; vija planet-Diell përshkon zona të barabarta në kohë të barabarta; katratet e periodeve të orbitave janë proporcionale me kubët e distancave mesatare. Këto ligje ishin rezultat i analizës së kujdesshme të të dhënave vëzhguese të Tycho Brahe. Newton më vonë i shpjegoi si pasojë e gravitetit. Kepler besonte se universi ndiqte proporcionet matematikore të 'harmonisë së sferave' — ide mistike, por metoda e tij shkencore ishte e fortë.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Johannes_Kepler_1610.jpg",
    vibe: "Planetët nuk lëvizin në rrathë. Mezi e bindën të pranonin elipsat. 🪐",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Ligjet e Orbitaleve", icon: "📐", description: "Tre ligjet që përshkruajnë vallëzimin e planetëve.", color: "from-blue-700 to-indigo-900" }
  },
  {
    id: 'huygens',
    name: "Christiaan Huygens",
    tag: "Optika",
    bio: "Christiaan Huygens (1629–1695) zhvilloi teorinë valore të dritës dhe shpiku orën e parë me lavjerrës (1656) — e cila bëri matjen precize të kohës të mundshme për lundrim dhe shkencë. Zbuloi se aneksi i çuditshëm i Saturnit (i vërejtur nga Galileo) ishte unaza e tij e hollë. Zbuloi gjithashtu Titanin, satelitin më të madh të Saturnit. Kontribuoi në teorinë e goditjeve (kolizioneve), probabilitetit dhe optikat e sistemeve teleskopike. Principi Huygens — se çdo pikë e frontit të valës bëhet burim i ri valve — qëndron ende si bazë e optikës.",
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
    bio: "André-Marie Ampère (1775–1836) themeloi elektrodinamikën si shkencë pas zbulimit të Ørsted-it se rryma elektrike krijon fushë magnetike (1820). Brenda javësh Ampère formuloi ligjet matematike që përshkruajnë forcën mes dy telave me rrymë dhe shpjegoi magnetizmin si pasojë e lëvizjes së ngarkesave. Maxwell e quajti 'Newtoni i elektricitetit'. Njësia SI e rrymës elektrike — Amperi (A) — mban emrin e tij. Vdiq i varfër dhe i lodhur, pa marrë njohejen që meritonte gjatë jetës.",
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
    bio: "Georg Simon Ohm (1789–1854) formuloi ligjin themelor të qarkut elektrik: tensioni është i barabartë me produktin e rrymës dhe rezistencës (V = I·R). Ky ligj, i botuar në 1827, i dha inxhinierisë elektrike bazën e saj matematike. Fillimisht u kundërshtua ashpër nga shoqëria shkencore gjermane dhe humbi postin e tij universiteti. Vetëm vite më vonë, pasi anglosaksonët e pranuan punën e tij, erdhi njohja: Shoqëria Mbretërore britanike i dha Medaljen Copley dhe njësia e rezistencës elektrike — Omi (Ω) — mban emrin e tij.",
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
    bio: "Blaise Pascal (1623–1662) ishte matematikan, fizikant dhe filozof francez i jashtëzakonshëm, shumë prodhimtar pavarësisht se vdiq në moshën 39 vjeç. Zbuloi parimin e Pascalit: presioni i ushtruar mbi lëng të mbyllur transmetohet njëlloj në të gjitha drejtimet. Ky parim qëndron pas hidraulikës moderne. Ndërtoi një nga makinat e para llogaritëse mekanike (Pascalina, 1642) për të ndihmuar të atin llogaritar. Dha kontribute thelbësore në probabilitetin (me Fermat), gjeometrinë projective dhe studioi presionin atmosferik. Shpiku trekëndëshin e Pascalit dhe bëri eksperimente me barometrin.",
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
    bio: "Pierre Curie (1859–1906) zbuloi piezoelektricitetin (1880) bashkë me vëllanë Jacques — efektin ku kristale të caktuara gjenerojnë rrymë nën presion mekanism. Zbuloi gjithashtu pikën Curie: temperatura mbi të cilën materialet magnetike humbasin magnetizmin e tyre. Bashkëpunimi shkencor dhe jetësor me Marie Curie çoi në izolimin e poloniumit dhe radiumit. Fituan bashkë Nobeliun e Fizikës 1903. Pierre vdiq tragjikisht duke u shkelur nga një karrocë (1906) — botës i mungoi tridhjetë vjet punë e tij shkencore potenciale.",
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
    bio: "Lise Meitner (1878–1968) ishte fizikante austriake që dha shpjegimin teorik të fisionit bërthamor (1938) — ndarjen e bërthamës së uraniumit nën bombardim neutronik. Bashkëpunoi 30 vjet me kimistin Otto Hahn; kur ai zbuloi eksperimentalisht produktet e çuditshme, Meitner i dha shpjegimin: bërthama ndahet duke liruar energji të madhe sipas E=mc². Hahn fitoi Nobeliun e Kimisë 1944 pa e përfshirë Meitner-in — një nga rastet më të diskutuara të padrejtësisë në histori të Nobelit. Element 109 u emërtua Meitnerium (Mt) në nderim të saj.",
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
    bio: "Chien-Shiung Wu (1912–1997) quhet 'Madame Curie e fizikës' dhe ishte eksperimentuesja më e mirë e fizikës bërthamore të shekullit XX. Eksperimenti i saj i famshëm i vitit 1956 rrëzoi ligjin e konservimit të paritetit — duke treguar se natyra bën dallim mes majtas dhe djathtas në rrezatimet beta. Dy fizikanë teorikë (Lee dhe Yang) fituan Nobeliun 1957 për parashikimin e kësaj rrëzimi; Wu, eksperimentuesja që e provoi, nuk e mori. Dha gjithashtu kontribute themelore në çelimet e mekanikës kuantike dhe fizikës bërthamore.",
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
    bio: "Abdus Salam (1926–1996) ishte fizikant pakistanez dhe nobelist i parë i Pakistanit. Bashkë me Sheldon Glashow dhe Steven Weinberg formuloi teorinë elektrodobëte — unifikim i forcës elektromagnetike dhe forcës së dobët bërthamore. Kjo punë fitoi Çmimin Nobel të Fizikës në 1979. Salam ishte gjithashtu anëtar i komunitetit Ahmadi dhe u dekorua nga shtete ndërkombëtare, ndonëse Pakistani nuk e njohu kurrë zyrtarisht trashëgiminë e tij. Themeloi Qendrën Ndërkombëtare të Fizikës Teorike (ICTP) në Trieste — për të mbështetur shkencëtarët nga vendet në zhvillim.",
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
    bio: "Subrahmanyan Chandrasekhar (1910–1995) zbuloi kufirin e masës për yjet xhuxhë të bardhë (1930): nëse masa tejkalon rreth 1.4 herë masën e Diellit, ylli nuk mund të mbajë ekuilibrin — do të kolapsojë. Ky 'kufiri Chandrasekhar' parashikon ekzistencën e yjeve neutronike dhe vrimave të zeza. Kur e prezantoi rezultatin si 20 vjeçar, astronomi i famshëm Eddington e hodhi poshtë publikisht. Chandrasekhar nuk u dorëzua dhe u vërtetua plotësisht. Fitoi Çmimin Nobel të Fizikës në 1983. Teleskopi kozmik Chandra i NASA-s mban emrin e tij.",
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
    bio: "Edwin Hubble (1889–1953) ndryshoi kuptimin tonë të universit me dy zbulime të mëdha. Së pari, tregoi (1923) se 'rethat' e caktuara ishin galaktika të tjera jashtë Rrugës së Qumështit — universi ishte shumë, shumë më i madh nga sa mendohej. Së dyti, zbuloi (1929) se galaktikat largësohen nga ne dhe se sa më larg janë, aq shpejt ikin — Ligji i Hubble-it, prova e zgjerimit të universit. Einstein, kur e dëgjoi këtë, tha se kostanti kozmologjik kishte qenë 'gabimi i tij më i madh'. Teleskopi Hubble Space mban emrin e tij.",
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
    bio: "Lev Landau (1908–1968) ishte fizikant teorik sovjetik i konsideruar si ndër dy-tre mendjet më të mëdha të fizikës teorike të shekullit XX. Dha kontribute themelore në superfluiditetin (shpjegoi heliuminë e lëngshme), teoritë e gjendjes kondensuar, plazma, fizikën statistikore, mekanikën kuantike dhe fizikën e grimcave. Fitoi Çmimin Nobel të Fizikës 1962. Shkroi (me Lifshitz) Kurs Fizike Teorike — 10 vëllime që mbeten referencë standarde. Pas akuzimit të rremë, u burgos nga Stalini një vit (1938); miqtë e tij fizikanë siguruan lirimin.",
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
    bio: "Satyendra Nath Bose (1894–1974) ishte fizikant indian që dërgoi në 1924 një artikull te Einstein, duke propozuar statistikë të re kuantike për fotonet. Einstein e vërejti rëndësinë, e përktheu vetë, e botoi dhe e zgjeroi në statistikën Bose–Einstein — valide për të gjitha grimcat me spin të plotë numër (sot quhen 'bozonet'). Parashikimet e tyre çuan në zbulimin teorik të kondensatit Bose–Einstein, gjë të realizuar eksperimentalisht vetëm në 1995, 71 vjet pas punës origjinale. Grimcat Bozon (si bozoni Higgs) mbajnë emrin e tij.",
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
    bio: "Arthur Compton (1892–1962) zbuloi Efektin Compton (1923): kur fotonet e rrezeve X përplasen me elektrone, ato shpërndahen me gjatësi vale të ndryshuar — sikur pallë goditjeje. Kjo provoi vendimtarisht se drita ka natyrë grimcash (fotonesh), jo vetëm valore. Fitoi Çmimin Nobel të Fizikës 1927. Gjatë Projektit Manhattan drejtoi 'Metallurgical Laboratory' në Chicago, ku Fermi realizoi reaktorin e parë. Dha edhe kontribute në astrofizikë dhe studimin e rrezatimit kozmik.",
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
    bio: "Hideki Yukawa (1907–1981) parashikoi teorikisht (1935) ekzistencën e mezonit pi — grimcës që mediaton forcën e fortë bërthamore mes protoneve dhe neutroneve. Kjo shpjegoi pse bërthama mbetet e bashkuar pavarës nga repulsioni elektromagnetik mes protoneve. Mezoni pi u zbulua eksperimentalisht në 1947 nga Powell dhe të tjerë. Yukawa fitoi Çmimin Nobel të Fizikës 1949 — i pari japonez që e mori. Modeli i tij shërbeu si bazë e teorisë moderne të forcave bërthamore.",
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
    bio: "Murray Gell-Mann (1929–2019) propozoi (1964) modelin e kuarkeve — se protonet, neutronet dhe mezonet janë ndërtuar nga grimca edhe më të vogla, të quajtura 'kuarke' (emër nga James Joyce). Ekzistojnë gjashtë 'shije' kuarkesh: up, down, charm, strange, top, bottom. Kjo dha themelin e Kromodinamikës Kuantike (QCD), pjesë e Modelit Standard. Fitoi Çmimin Nobel të Fizikës 1969. Gell-Mann ishte gjithashtu linguist amator, ornitolog dhe mbrojtës i biodiversitetit — mendim multidisiplinar i rrallë.",
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
    bio: "Peter Higgs (1929–2024) propozoi (1964) ekzistencën e një fushe kuantike (Fusha Higgs) dhe grimcës përkatëse shoqëruese — bozoni Higgs — i cili u jep masë grimcave elementare. Pa këtë mekanizëm, protonet, elektronet dhe çdo gjë tjetër nuk do të kishin masë. Bozoni Higgs u zbulua eksperimentalisht në CERN (LHC) më 4 korrik 2012 — 48 vjet pas parashikimit. Higgs dhe François Englert fituan Çmimin Nobel të Fizikës 2013. Media e quajti 'grimca e Zotit' — emër që Higgs e urrente.",
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
    bio: "Carlo Rubbia (lindur 1934) drejtoi eksperimentin UA1 në CERN që zbuloi bozonët W dhe Z (1983) — mbajtësit e forcës së dobët bërthamore. Kjo konfirmoi teorinë elektrodobëte të Salam, Glashow dhe Weinberg. Fitoi Çmimin Nobel të Fizikës 1984 bashkë me Simon van der Meer. Rubbia drejtoi CERN-in si Drejtor i Përgjithshëm (1989–1994). Gjatë karrierës promovoi energjinë bërthamore si alternativë ndaj karburanteve fosile dhe eksperimentoi me reaktorë të gjeneratës së re.",
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
    bio: "Steven Weinberg (1933–2021) bashkoi forcat elektromagnetike dhe të dobëta bërthamore në teorinë elektrodobëte (1967), duke parashikuar bozonët W, Z dhe mekanizmin Higgs. Bashkë me Salam dhe Glashow fitoi Çmimin Nobel të Fizikës 1979. Modeli Standard i fizikës së grimcave — ndërtesa teorike më e suksesshme e shkencës — bazohet mbi këtë unifikim. Weinberg ishte gjithashtu shkrimtar i njohur i shkencës: libri 'The First Three Minutes' (1977) shpjegoi fillimin e universit për audiencë të gjerë.",
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
    bio: "Kip Thorne (lindur 1940) është fizikant amerikan i specializuar në astrofizikën relativiste. Ishte ndër themeluesit e projektit LIGO (Laser Interferometer Gravitational-Wave Observatory) — instrumenti që zbuloi valët gravitacionale në 2015, 100 vjet pas parashikimit të Einstein-it. Fitoi Çmimin Nobel të Fizikës 2017. Thorne dha gjithashtu kontribute teorike në fizikën e vrimave të zeza dhe vrima krimbësh. Ishte konsulent shkencor i filmit Interstellar (2014), duke siguruar saktësinë shkencore të paraqitjeve vizuale të vrimave të zeza.",
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
    bio: "Brian Greene (lindur 1963) është fizikant amerikan dhe komunikues i shquar shkencor, i specializuar në Teorinë e Fijeve dhe kozmologjinë. Teoria e Fijeve propozoi se grimcat elementare nuk janë pika, por 'fije' njëdimensionale që vibrojnë — vibrimet e ndryshme japin grimca të ndryshme. Librat e tij 'The Elegant Universe' dhe 'The Fabric of the Cosmos' u bënë bestseller dhe u kthyen në dokumentarë. Greene drejtoi Festivalin Botëror të Shkencës në New York. Ndërkohë, Teoria e Fijeve ende pret konfirmim eksperimental.",
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
    bio: "Lisa Randall (lindur 1962) është fizikante teorike amerikane dhe profesore në Harvard. Bashkë me Raman Sundrum propozoi modelin Randall-Sundrum (1999): dimensione shtesë të hapësirës të cilat mund të jenë shumë të mëdha por të 'fshehura' — ky model ofroi zgjidhje të reja për problemin e hierarkisë (pse graviteti është aq i dobët krahasuar me forcat e tjera). Librat e saj 'Warped Passages' dhe 'Knocking on Heaven's Door' shpjegojnë fizikën teorike moderne për audiencë të gjerë. Ishte fizikantja me citimet më të larta shkencore e vitit 2007.",
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
    bio: "Roger Penrose (lindur 1931) është matematikan dhe fizikant britanik. Ndërmjet viteve 1960 tregoi, duke përdorur matematikë topologjike gjeniale, se vrimat e zeza janë pasojë e pashmangshme e Relativitetit të Përgjithshëm të Einstein-it (Vetë Einstein nuk ishte i sigurt nëse ato mund të formoheshin fizikisht). Për këtë fitoi Çmimin Nobel të Fizikës 2020. Dha gjithashtu kontribute themelore në teoritë e Big Bang-ut (me Stephen Hawking) dhe shpiku rrjetet e spinit. Është i njohur për 'mozaikun Penrose' (Penrose tiling) — modele gjeometrike që mbulojnë rrafshin pa u përsëritur kurrë periodikisht.",
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
    bio: "Edward Witten (lindur 1951) konsiderohet gjerësisht si fizikani teorik më i shquar i gjallë. Është i vetmi fizikant që ka fituar Medaljen Fields (ekuivalenti i Nobelit në matematikë) për ndikimin e jashtëzakonshëm të ideve të tij fizike në matematikën e pastër (p.sh., në topologji dhe gjeometri). Në 1995 ai zgjidhi kaosin e Teorisë së Fijeve duke treguar se 5 versionet e ndryshme të saj ishin thjesht limite të ndryshme të një teorie të vetme, më të madhe — që e quajti Teoria M (me 11 dimensione). Ky unifikim nisi 'Revolucionin e Dytë të Fjeve'.",
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
    bio: "Paul Ehrenfest (1880–1933) ishte fizikant austriak-holandez i njohur për kontributin në termodinamikën statistikore dhe si një nga mësuesit dhe kritikët më të mëdhenj të fizikës kuantike. Teorema e tij (Teorema Ehrenfest) tregon se si mekanika kuantike kalon në mekanikë klasike (e Newton-it) kur sistemet zmadhohen. Ndonëse mund të mos ketë zbulime që mbajnë vetëm emrin e tij si rasti i Bohr ose Einstein (të cilët i kishte miq të ngushtë), kritikat e tij përpikta sqaruan shumë thelbe konfuze në fillimet e teorisë kuantike. Përfundoi jetën e tij tragjikisht për shkak të depresionit të thellë.",
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
    bio: "Hendrik Lorentz (1853–1928) ishte gjiganti i fizikës teorike para Einstein-it. Zgjodhi problemet e mbetura të elektrodinamikës së Maxwell-it duke propozuar se atomet përmbajnë ngarkesa osciluese. Ai formuloi 'Transformimet e Lorentz-it' (1892) — ekuacionet matematike që përshkruajnë se si hapësira mblidhet (tkurret) dhe koha ngadalësohet (zgjatet) kur diçka lëviz afër shpejtësisë së dritës. Lorentz i mendoi këto si truke matematike, por 10 vjet më vonë Einstein tregoi se ishin realitet fizik tjetër. Lorentz fitoi Çmimin Nobel të Fizikës 1902 me Zeeman.",
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
    bio: "Amalie Emmy Noether (1882–1935) ishte matematikania gjermane e quajtur nga Einstein si 'gjenia më domethënëse kreative që nga koha që gratë filluan edukimin e lartë'. Teorema e saj e vitit 1915 (Teorema e Noether-it) formon ndoshta idenë më të thellë në fizikën moderne: tregoi se çdo simetri e natyrës korrespondon me një ligj konservimi. P.sh., simetria e kohës = konservimi i energjisë; simetria e hapësirës = konservimi i momentit. Kjo teoremë u bë guri i themelit për të gjitha teoritë e mëvonshme të fizikës së grimcave. U përjashtua nga puna nga nazistët dhe vdiq pak pas asaj në ekzil.",
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
    bio: "Alessandro Volta (1745–1827) ishte fizikant italian që shpiku baterinë e parë elektrike (Pila Voltiane) në 1799. Para Voltës, elektriciteti ishte parë vetëm si shkëndi statike (si vetëtima). Pila e tij, me disqe sinku dhe argjendi të ndara me letër të njomur në ujë të kripur, prodhonte rrymë të vazhdueshme dhe të qëndrueshme. Kjo çeli derën për të gjitha zbulimet e mëvonshme të shekullit XIX në elektricitet dhe magnetizëm. Njësia SI për tensionin elektrik — Volti (V) — e mban emrin e tij.",
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
    bio: "Gustav Kirchhoff (1824–1887) ishte fizikant gjerman. Në 1845, kur ishte ende student, formuloi Ligjet e Kirchhoff-it, të cilat u lejojnë inxhinijerëve të llogaritin rrymat dhe tensionet në çdo qark sado të ndërlikuar. Më vonë, bashkë me R. Bunsen, zbuloi se çdo element kimik lëshon një spektër të veçantë dritash kur nxehet — kjo doli të ishte spektroskopia, e cila i lejoi njerëzimit të zbulonte nga se përbëhen yjet pa fshehur atje fare. Gjithashtu studioi emetimin e trupit të zi.",
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
    bio: "Max Born (1882–1970) ishte fizikant gjerman-britanik. Ndërsa Schrödinger mendoi se funksioni i tij i valës kuantike ishte pasqyrim real, fizik, i shpërndarjes së elektronit mrena hapësirës, Born propozoi interpretimin e tij statistikor (1926): vala nuk është materie, është valë probabiliteti. Domethënë jep shansin (nënshtresuar në kvadrat) për të gjetur grimcën në një pikë. Ky u bë thelbi i 'Interpretimit të Kopenhagenit' — realiteti në thelb është probabilistike. Fitoi Çmimin Nobel të Fizikës relativisht vonë, në 1954.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Max_Born.jpg",
    vibe: "Vala nuk është e masës, por e mundësisë. Zoti asgjë s'është pos bixhozxhi. 🎲",
    stats: defaultStats(),
    posts: [],
    summonItem: { name: "Bordi I Probabilitetit", icon: "🌊", description: "Tregon shansin se ku mund të fshehet elektroni.", color: "from-blue-400 to-indigo-500" }
  },
];
