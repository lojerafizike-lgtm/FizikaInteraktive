import React, { useState, useEffect } from 'react';
import './Fizika8Dashboard.css';

// --- DATA CONSTANTS ---

interface Question {
  q: string;
  opts: string[];
  ans: number;
  sol: string;
}

const CH = [
  { name: "Forcat & Lëvizja", emoji: "⚡", short: "Forcat", color: "#F7C5C0", accent: "#F9897B", bg: "linear-gradient(135deg,#F7C5C0,#FAE0CC)" },
  { name: "Tingujt", emoji: "🔊", short: "Tingujt", color: "#C5E8F5", accent: "#5BB8A8", bg: "linear-gradient(135deg,#C5E8F5,#C2EAE0)" },
  { name: "Drita", emoji: "💡", short: "Drita", color: "#FEF3CC", accent: "#E8B84B", bg: "linear-gradient(135deg,#FEF3CC,#FAE0CC)" },
  { name: "Magnetizmi", emoji: "🧲", short: "Magnetizmi", color: "#D8D4F0", accent: "#7B72CC", bg: "linear-gradient(135deg,#D8D4F0,#C2EAE0)" }
];

const PILCOLORS = ["#F9897B", "#5BB8A8", "#E8B84B", "#7B72CC"];

const QS = [
  // ── KAPITULLI I: FORCAT & Lëvizja ──
  [
    {q:"Një biçikletist lëviz me shpejtësi 12 m/s për 30 sekonda. Sa rrugë përshkon?",opts:["240 m","360 m","420 m","180 m"],ans:1,sol:"l = v × t = 12 × 30 = 360 m\nFormula: l = v × t (rrugë = shpejtësi × kohë)"},
    {q:"Nëse F = 30 N dhe m = 6 kg, sa është nxitimi?",opts:["180 m/s²","5 m/s²","24 m/s²","3 m/s²"],ans:1,sol:"a = F / m = 30 / 6 = 5 m/s²"},
    {q:"Cili ligj i Njutonit thotë: 'çdo veprim ka një kundërveprim të barabartë por me kah të kundërt'?",opts:["Ligji I","Ligji II","Ligji III","Ligji IV"],ans:2,sol:"Ligji i Tretë i Njutonit: çdo veprim ka një kundërveprim të barabartë por me kah të kundërt.\nShembull: raketa lëshon gazra poshtë → forcat shtyjnë raketën lart."},
    {q:"Automobil nga 0 në 20 m/s në 4 sekonda. Sa nxitim?",opts:["4 m/s²","10 m/s²","5 m/s²","80 m/s²"],ans:2,sol:"a = Δv / t = (20 − 0) / 4 = 5 m/s²"},
    {q:"Me cilin numër shumëzojmë km/orë për ta kthyer në m/s?",opts:["3600","24","3.6","0.278"],ans:3,sol:"1 km/orë = 1000 m / 3600 s = 0.278 m/s\nShembull: 72 km/orë × 0.278 = 20 m/s"},
    {q:"Makinë: nga 120 m arrin 400 m në 10 sekonda. Sa shpejtësi?",opts:["28 m/s","40 m/s","12 m/s","52 m/s"],ans:0,sol:"Rruga: 400 − 120 = 280 m\nv = l / t = 280 / 10 = 28 m/s"},
    {q:"50 m/s krahasuar me 144 km/orë — cila është më e madhe?",opts:["50 m/s","144 km/orë","Janë të barabarta","Nuk krahasohen"],ans:0,sol:"144 km/orë × 0.278 = 40 m/s\nPra 50 m/s > 40 m/s — nxënësi kishte të drejtë!"},
    {q:"Për lëvizjen drejtvizore cili kusht duhet plotësuar?",opts:["Shpejtësia të jetë konstante","Trajektorja përputhet me segment drejtvizor","Grafiku rrugë-kohë vijë e drejtë","Nxitimi = 0"],ans:1,sol:"Lëvizja drejtvizore = trajektorja është segment drejtvizor.\nShpejtësia mund të ndryshojë — trupi lëviz gjithmonë drejt."},
    {q:"Për vizatimin e trajektores duhet të dimë:",opts:["Pozicionin fillestar dhe përfundimtar","Drejtimin e lëvizjes","Të gjithë pozicionet njëpasnjëshëm","Shpejtësinë mesatare"],ans:2,sol:"Trajektorja = vija e të gjitha pozicioneve njëpasnjëshëm gjatë lëvizjes."},
    {q:"Pse matja me porta fotometrike është më e saktë se kronometri?",opts:["Është më e shpejtë","Eliminon gabimet subjektive njerëzore","Mat kohën në minuta","Është elektrike"],ans:1,sol:"Kronometri: operatori shtyp me vonesë subjektive.\nPortat fotometrike: çasti i fillimit/mbarimit përcaktohet elektronikisht — pa gabim njerëzor."},
  ],
  // ── KAPITULLI II: TINGUJT ──
  [
    {q:"Cila është njësia e fortësisë së zërit?",opts:["Hz","N","dB","W"],ans:2,sol:"Decibel (dB) mat fortësinë e zërit.\nBisedë normale ≈ 60 dB. Mbi 85 dB dëmton veshët."},
    {q:"Zëri lëviz më shpejt në:",opts:["Vakum","Ajër","Ujë","Çelik"],ans:3,sol:"Çeliku (ngurtë) ~5100 m/s > Uji ~1500 m/s > Ajri ~340 m/s\nNë vakum zëri NUK lëviz — janë valë mekanike!"},
    {q:"Frekuenca e lartë e zërit korrespondon me:",opts:["Zë të fortë","Zë të ulët","Zë të lartë (akut)","Amplitudë të madhe"],ans:2,sol:"Frekuenca e lartë → zë i lartë (akut)\nAmplituda e lartë → zë i fortë\nVargu: 20 Hz – 20 000 Hz"},
    {q:"Pse zëri nuk përhapet në vakum?",opts:["Është shumë i shpejtë","Është valë mekanike — kërkon mjedis lëndor","Vakumi e absorbon","Temperatura e ulët"],ans:1,sol:"Valët zanore janë mekanike — përhapen nëpër dendësime e rrallime grimcash.\nNë vakum nuk ka grimca → zëri nuk udhëton."},
    {q:"Jehona formohet pas vonesës minimale prej:",opts:["0.01 sek","0.1 sek","1 sek","10 sek"],ans:1,sol:"Jehona kërkon min. 0.1 sekonda vonesë nga zëri origjinal.\nNë distanca të vogla të dy tingujt bashkohen."},
  ],
  // ── KAPITULLI III: DRITA ──
  [
    {q:"Shpejtësia e dritës në vakum:",opts:["300 km/s","3 000 km/s","300 000 km/s","30 000 km/s"],ans:2,sol:"c = 3×10⁸ m/s = 300 000 km/s\nDrita lëviz pak më ngadalë në ujë dhe qelq."},
    {q:"Pse formohet ylberi?",opts:["Pasqyrimi","Dispersioni","Absorbimi","Interferenca"],ans:1,sol:"Dispersioni: pikat e shiut ndajnë dritën e bardhë.\ni Kuq, Portokalli, i Verdhë, i Gjelbër, i Kaltër, Indigo, Vjollcë."},
    {q:"Këndi rënie 30° nga sipërfaqja. Këndi mes rrezes rënëse dhe të pasqyruar?",opts:["30°","60°","90°","120°"],ans:3,sol:"Këndi rënies nga normalia = 90° − 30° = 60°\nKëndi pasqyrimit = 60° (ligji pasqyrimit)\nKëndi ndërmjet dy rrezeve = 60° + 60° = 120°"},
    {q:"Pse AMBULANCË shkruhet mbrapsht në pjesën ballore?",opts:["Të jetë dekorative","Shoferi para lexon drejtë në pasqyrën e tij","Është rregull ligjor","Të jetë i dukshëm natën"],ans:1,sol:"Pasqyra këmben anët: e djathta duket si e majtë.\nDuke shkruar mbrapsht, shoferi lexon AMBULANCË drejtë në pasqyrë."},
    {q:"Kur shikojmë yjet natën, çfarë shohim?",opts:["Dritën e tyre aktuale","Mbrapa në kohë — dritën e tyre të vjetër","Reflektimin e Diellit","Dritën e Hënës"],ans:1,sol:"Proksima Centauri = 4.3 vite dritë larg.\nDrita ka udhëtuar vite deri te ne — shohim si ishin yjet, jo si janë."},
  ],
  // ── KAPITULLI IV: MAGNETIZMI ──
  [
    {q:"Polë të njëjtë magnetikë:",opts:["Tërhiqen","Zbëhejnë/shtyhen","Nuk reagojnë","Bashkohen"],ans:1,sol:"Polë të njëjtë (V-V ose J-J) → zbëhejnë.\nPolë të kundërt (V-J) → tërhiqen."},
    {q:"Cilat janë lëndët magnetike: bronz, çelik, hekur, bakër, nikel?",opts:["Bronz, bakër","Çelik, hekur, nikel","Të gjitha","Asnjë"],ans:1,sol:"Magnetike: çeliku, hekuri, nikeli.\nBronzi dhe bakri: jo-magnetike."},
    {q:"Kur afroni magnetin pranë materialit magnetik, materiali do:",opts:["E shtyjë magnetin","E tërheqë gjithmonë","Nuk reagojë","Shkatërrohë"],ans:1,sol:"Materiali magnetik gjithmonë TËRHIQET nga magneti.\nNuk e shtyp kurrë — kjo ndodh vetëm ndërmjet polëve të njëjtë magnetikë."},
    {q:"Pse çeliku mbetet i magnetizuar por hekuri jo?",opts:["Hekuri është i fortë","Çeliku ka magnetizëm mbetës — domenet mbeten të orientuara","Çeliku ka temp. të lartë","Hekuri është i rëndë"],ans:1,sol:"Çeliku = lëndë ferromagnetike me magnetizëm mbetës.\nDomenet e çelikut mbeten të orientuara edhe pa fushë.\nHekuri çmagnetizohet lehtë kur largohet fusha."},
    {q:"Pse nuk merret vetëm poli Veri duke prerë magnetin?",opts:["Magneti është i fortë","Çdo pjesë ka N dhe S — domenet","Polët janë të ngjitura","Temperatura ndryshon"],ans:1,sol:"Çdo magnet ka domene — magnetë elementarë me N dhe S.\nKur presim, te vija ndarjes secila pjesë ka të dy polët.\nPolët magnetikë nuk izolohen kurrë."},
  ]
];

const FACTS = [
  {e:"⚡",t:"Nëse do të lëvizje me shpejtësinë e dritës, do të arrije Hënën në vetëm 1.3 sekonda!",tag:"Drita",bg:"#FEF3CC"},
  {e:"🔊",t:"Zëri lëviz 15 herë më shpejt nëpër çelik sesa nëpër ajër — rreth 5100 m/s!",tag:"Tingujt",bg:"#C5E8F5"},
  {e:"🧲",t:"Fusha magnetike e Tokës na mbron nga rrezet kozmike — pa të, jeta s'do ekzistonte!",tag:"Magnetizmi",bg:"#D8D4F0"},
  {e:"🌈",t:"Ylberi është plotësisht rrethor! Shohim gjysmën sepse toka bllokon gjysmën tjetër.",tag:"Drita",bg:"#FEF3CC"},
  {e:"🚀",t:"Ligji III i Njutonit shpjegon si fluturojnë raketat: gazrat dalin poshtë → raketa shkon lart!",tag:"Forcat",bg:"#F7C5C0"},
  {e:"🦇",t:"Lakuriqët e natës 'shohin' me jehonë (sonar biologjik) — gjuajnë insekte në errësirë totale!",tag:"Tingujt",bg:"#C2EAE0"},
];

const PHET_DATA = [
  {
    ch: 0, chName: '⚡ Forcat & Lëvizja',
    phet: {
      title: 'Forcat dhe Lëvizja: Bazat',
      desc: 'Eksploro si forcat ndikojnë lëvizjen. Shtyj objektet, ndryshoj masën dhe fërkimin. Shiko grafikët në kohë reale.',
      url: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_sq.html',
      preview: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/screenshot.png',
      color: '#F7C5C0'
    },
    video: {
      title: 'Ligjet e Njutonit — Shpjegim i thjeshtë',
      desc: 'Video shpjeguese për të 3 ligjet e Njutonit me shembuj praktikë nga jeta e përditshme.',
      ytId: 'kKKM8Y-u7ds',
      color: '#FAE0CC'
    }
  },
  {
    ch: 1, chName: '🔊 Tingujt',
    phet: {
      title: 'Vala e Zërit',
      desc: 'Shiko si lëvizin molekulat e ajrit kur krijohet zëri. Ndrysho frekuencën dhe amplitudën — dëgjo ndryshimet.',
      url: 'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_sq.html',
      preview: 'https://phet.colorado.edu/sims/html/wave-interference/latest/screenshot.png',
      color: '#C5E8F5'
    },
    video: {
      title: 'Si funksionon zëri — Valët zanore',
      desc: 'Animacion vizual i valëve zanore, dendësimeve dhe rrallimeve. Tregon si dëgjon veshi i njeriut.',
      ytId: 'GkNJvywCx6Q',
      color: '#C2EAE0'
    }
  },
  {
    ch: 2, chName: '💡 Drita',
    phet: {
      title: 'Optika Gjeometrike — Pasqyrimi & Përthyerja',
      desc: 'Dërgo rreze drite nëpër prizma, pasqyra dhe thjerrëza. Shiko si ndryshon drejtimi i dritës në kohë reale.',
      url: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_sq.html',
      preview: 'https://phet.colorado.edu/sims/html/bending-light/latest/screenshot.png',
      color: '#FEF3CC'
    },
    video: {
      title: 'Drita — Pasqyrimi, Përthyerja dhe Dispersioni',
      desc: 'Video mësimore që tregon si funksionon drita, ylberi, pasqyrat dhe fibrat optike.',
      ytId: 'IRBfpBPELmE',
      color: '#C5E8F5'
    }
  },
  {
    ch: 3, chName: '🧲 Magnetizmi',
    phet: {
      title: 'Magneti dhe Kompasi',
      desc: 'Eksploroni vijat e fushës magnetike, orientimin e busullës dhe si ndikojnë pole V dhe J mbi njëri-tjetrin.',
      url: 'https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets_sq.html',
      preview: 'https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/screenshot.png',
      color: '#D8D4F0'
    },
    video: {
      title: 'Magnetizmi — Fushë Magnetike dhe Elektromagneti',
      desc: 'Shpjegim vizual i fushës magnetike, domeneve, busullës dhe elektromagnetit me eksperimente.',
      ytId: 'hFAOXdXZ5TM',
      color: '#C2EAE0'
    }
  }
];

const FLASHCARDS = [
  {ch:0, term:"Shpejtësia", def:"Rruga e përshkuar në njësi kohe. Formula: v = l / t."},
  {ch:0, term:"Nxitimi", def:"Ndryshimi i shpejtësisë në njësi kohe. Formula: a = Δv / t."},
  {ch:1, term:"Vala zanore", def:"Valë mekanike gjatësore ku grimcat lëkunden para-mbrapa."},
  {ch:2, term:"Dispersioni", def:"Ndarja e dritës së bardhë në ngjyrat e spektrit nga një prizëm."},
  {ch:3, term:"Elektromagneti", def:"Magnet i krijuar nga rryma elektrike që kalon nëpër një spirale."},
];

const WORDLE_WORDS = ["FORCA", "MASA", "DRITA", "VALA", "ZERI", "LENTE", "PUNA", "FUQIA", "NXITIM", "RRUGA"];

const DEBATE_TOPICS = [
  { t: "A është e mundur të udhëtojmë më shpejt se drita?", d: "Diskutoni mbi teorinë e relativitetit dhe vrimat e krimbit." },
  { t: "Energjia Bërthamore: Mik apo Armik?", d: "Përparësitë e energjisë së pastër kundrejt rreziqeve të mbetjeve." },
  { t: "A ka fund universi?", d: "Teoritë mbi zgjerimin e universit dhe fatin e tij përfundimtar." }
];

const WORKSHEETS = [
  { n: "Ushtrime: Kinematika", l: "flete-pune-fizika.html" },
  { n: "Laborator: Tingulli", l: "flete-pune-fizika.html" },
  { n: "Test: Drita & Optika", l: "flete-pune-fizika.html" }
];

// --- COMPONENT ---

interface Fizika8DashboardProps {
  onBack: () => void;
}

const Fizika8Dashboard: React.FC<Fizika8DashboardProps> = ({ onBack }) => {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  
  // Modal State
  const [modalQ, setModalQ] = useState<Question | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [modalCorrect, setModalCorrect] = useState<boolean | null>(null);

  // Dice State
  const [dicePos, setDicePos] = useState(0);
  const [diceRolling, setDiceRolling] = useState(false);
  const [diceVal, setDiceVal] = useState("🎲");
  const diceTotal = 14;

  // PhET State
  const [phetTab, setPhetTab] = useState(0);

  // Flashcards State
  const [fcIdx, setFcIdx] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);

  // Facts State
  const [factIdx, setFactIdx] = useState(0);

  // Wordle State
  const [wordleWord, setWordleWord] = useState("");
  const [wordleGuess, setWordleGuess] = useState("");
  const [wordleTries, setWordleTries] = useState<string[]>([]);
  const [wordleStatus, setWordleStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  // Battle State
  const [battleQIdx, setBattleQIdx] = useState(0);
  const [battleTime, setBattleTime] = useState(30);
  const [battleActive, setBattleActive] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (battleActive && battleTime > 0) {
      timer = setInterval(() => setBattleTime(t => t - 1), 1000);
    } else if (battleTime === 0) {
      setBattleActive(false);
      showToast("⌛ Koha mbaroi!");
    }
    return () => clearInterval(timer);
  }, [battleActive, battleTime]);

  // Confetti
  const fireConfetti = () => {
    const cols=['#F7C5C0','#C2EAE0','#D8D4F0','#FAE0CC','#C5E8F5','#FEF3CC','#F9897B','#5BB8A8'];
    for(let i=0;i<30;i++){
      const el=document.createElement('div');
      el.className='conf';
      const sz=8+Math.random()*14;
      el.style.cssText=`left:${Math.random()*100}vw;top:0;width:${sz}px;height:${sz}px;background:${cols[Math.floor(Math.random()*cols.length)]};animation-duration:${1.5+Math.random()*2.5}s;animation-delay:${Math.random()*0.4}s;border-radius:${Math.random()>.5?'50%':'4px'};position:fixed;pointer-events:none;z-index:9998;animation:confFall linear forwards;`;
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),4000);
    }
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.innerHTML = `@keyframes confFall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}`;
        document.head.appendChild(style);
    }
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleChapterSelect = (idx: number) => {
    setActiveChapter(idx);
    showToast(`${CH[idx].emoji} Kapitull: ${CH[idx].name}`);
  };

  const handleGameOpen = (id: string) => {
    if (activeChapter === null && id !== 'facts' && id !== 'phet' && id !== 'worksheet') {
        showToast("⚠️ Zgjidh kapitullin së pari!");
        return;
    }
    setActiveGame(id);
    if (id === 'phet') setPhetTab(activeChapter || 0);
    if (id === 'wordle') startWordle();
    if (id === 'battle') startBattle();
  };

  const startWordle = () => {
    setWordleWord(WORDLE_WORDS[Math.floor(Math.random() * WORDLE_WORDS.length)]);
    setWordleGuess("");
    setWordleTries([]);
    setWordleStatus('playing');
  };

  const submitWordle = () => {
    if (wordleGuess.length !== wordleWord.length) return;
    const newTries = [...wordleTries, wordleGuess.toUpperCase()];
    setWordleTries(newTries);
    setWordleGuess("");
    if (wordleGuess.toUpperCase() === wordleWord) {
      setWordleStatus('won');
      setScore(s => s + 30);
      fireConfetti();
    } else if (newTries.length >= 6) {
      setWordleStatus('lost');
    }
  };

  const startBattle = () => {
    setBattleActive(true);
    setBattleQIdx(0);
    setBattleTime(30);
  };

  const handleCloseGame = () => {
    setActiveGame(null);
  };

  // Dice Logic
  const rollDice = () => {
    if (diceRolling) return;
    setDiceRolling(true);
    let n = 0;
    const diceEmj = ["⚀","⚁","⚂","⚃","⚄","⚅"];
    const iv = setInterval(() => {
        const r = Math.floor(Math.random() * 6);
        setDiceVal(diceEmj[r]);
        n++;
        if (n > 12) {
            clearInterval(iv);
            setDiceRolling(false);
            const val = r + 1;
            const newPos = Math.min(dicePos + val, diceTotal);
            setDicePos(newPos);
            showToast(`Hodhe ${val}! Pozicioni: ${newPos}/${diceTotal}`);
            
            setTimeout(() => {
                const isQ = newPos > 0 && newPos < diceTotal && newPos % 3 === 0;
                if (isQ && activeChapter !== null) {
                    const qs = QS[activeChapter];
                    const q = qs[Math.floor(Math.random() * qs.length)];
                    setModalQ(q);
                    setShowSolution(false);
                    setModalCorrect(null);
                } else if (newPos === diceTotal) {
                    showToast('🏆 Urime! Ke përfunduar rrugën! +50 pikë');
                    setScore(s => s + 50);
                    fireConfetti();
                }
            }, 500);
        }
    }, 70);
  };

  const resetDice = () => {
      setDicePos(0);
      setDiceVal("🎲");
      showToast('🔄 Rruga u rifillua!');
  };

  // Modal Logic
  const checkAnswer = (idx: number) => {
      if (!modalQ) return;
      if (idx === modalQ.ans) {
          setModalCorrect(true);
          setScore(s => s + 10);
          showToast('🎉 Saktë! +10 pikë');
          fireConfetti();
      } else {
          setModalCorrect(false);
          showToast('❌ Gabim!');
      }
      setShowSolution(true);
  };

  const games = [
    {id:'dice',e:'🎲',n:'Zari Magjik',d:'Hidh zarin & zgjidh ushtrimet', icon: 'fa-dice'},
    {id:'facts',e:'💡',n:'Fun Facts',d:'Fakte mahnitëse nga fizika', icon: 'fa-lightbulb'},
    {id:'phet',e:'🔬',n:'PhET & Video',d:'Simulime interaktive + video mësimore', icon: 'fa-vial'},
    {id:'flash',e:'🔄',n:'Flashcards',d:'Kartëla studimi — term & përkufizim', icon: 'fa-clone'},
    {id:'wordle',e:'🔡',n:'Wordle Fizika',d:'Gjej fjalën e fshehur', icon: 'fa-font'},
    {id:'battle',e:'⚔️',n:'Squad Battle',d:'Sfido veten në formula', icon: 'fa-shield-halved'},
    {id:'debate',e:'💬',n:'Debat Fizik',d:'Diskuto mbi teoritë', icon: 'fa-comments'},
    {id:'worksheet',e:'📝',n:'Fletë Pune',d:'Ushtrime për printim', icon: 'fa-file-pdf'},
    {id:'anim',e:'🎬',n:'Animacione',d:'Eksperimente vizuale', icon: 'fa-film'},
  ];

  const gcols = ['#FFE0ED','#D4F0FF','#E8E0FF','#D4FFE8','#FFE8D4','#FFF8D4','#E8D4FF','#D4FFD4','#FFD4E8'];

  return (
    <div className="f8-dashboard">
      {/* TOP BAR */}
      <div className="f8-topbar">
        <div className="f8-logo">Fizika <span>8</span></div>
        <div className="f8-chapter-pills">
          {CH.map((c, i) => (
            <button
              key={i}
              className={`f8-pill ${activeChapter === i ? 'active' : ''}`}
              style={{
                background: activeChapter === i ? PILCOLORS[i] : `${PILCOLORS[i]}28`,
                borderColor: `${PILCOLORS[i]}44`,
                color: activeChapter === i ? '#fff' : 'var(--t2)'
              }}
              onClick={() => handleChapterSelect(i)}
            >
              {c.emoji} {c.short}
            </button>
          ))}
        </div>
        <button className="f8-close-btn" onClick={onBack} title="Kthehu">✕ Dil</button>
      </div>

      {/* MAIN CONTENT */}
      <div className="f8-main">
        {/* SIDEBAR */}
        <div className="f8-sidebar">
          <button className={`f8-sidebar-btn ${!activeGame ? 'active' : ''}`} onClick={() => setActiveGame(null)}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </button>
          {games.map(g => (
            <button 
              key={g.id}
              className={`f8-sidebar-btn ${activeGame === g.id ? 'active' : ''}`} 
              onClick={() => handleGameOpen(g.id)}
              style={{ background: activeGame === g.id && activeChapter !== null ? PILCOLORS[activeChapter] : '' }}
            >
              <i className={`fas ${g.icon}`}></i>
              <span>{g.n.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="f8-content">
            {!activeGame ? (
                <div className="f8-home">
                    <div className="f8-greeting">
                        <div>
                            <h1>Mirë se vini! 👋</h1>
                            <p>Zgjidhni kapitullin dhe lojën tuaj</p>
                        </div>
                        {activeChapter !== null && (
                            <div className="f8-badge" style={{ background: PILCOLORS[activeChapter] }}>
                                {CH[activeChapter].emoji} {CH[activeChapter].name}
                            </div>
                        )}
                    </div>

                    <div className="f8-section">
                        <div className="f8-section-title">📚 Zgjidh Kapitullin</div>
                        <div className="f8-chapter-grid">
                            {CH.map((c, i) => (
                                <button
                                    key={i}
                                    className="f8-chapter-card"
                                    style={{ background: c.bg, outline: activeChapter === i ? `4px solid ${PILCOLORS[i]}` : 'none' }}
                                    onClick={() => handleChapterSelect(i)}
                                >
                                    <div>
                                        <div className="f8-chapter-emoji">{c.emoji}</div>
                                        <div className="f8-chapter-name">{c.name}</div>
                                        <div className="f8-chapter-sub">{QS[i].length} ushtrime • Lojëra</div>
                                    </div>
                                    <span className="f8-chapter-badge">Kliko për të zgjedhur →</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="f8-section">
                        <div className="f8-section-title">🎮 Lojërat & Mjetet</div>
                        <div className="f8-games-grid">
                            {games.map((g, i) => (
                                <button
                                    key={g.id}
                                    className="f8-game-card"
                                    style={{ background: gcols[i % gcols.length] }}
                                    onClick={() => handleGameOpen(g.id)}
                                >
                                    <div className="f8-game-card-top" style={{ background: gcols[i % gcols.length] }}>
                                        <span className="f8-game-card-emoji">{g.e}</span>
                                        <div className="f8-game-card-name">{g.n}</div>
                                        <div className="f8-game-card-desc">{g.d}</div>
                                    </div>
                                    <div className="f8-game-card-bottom">Hap →</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                // GAME OVERLAY
                <div className="f8-overlay">
                    <div className="f8-overlay-header">
                        <button className="f8-overlay-close" onClick={handleCloseGame}>✕</button>
                        <div className="f8-overlay-title">
                            {games.find(g => g.id === activeGame)?.n || 'Lojë'}
                        </div>
                        {activeChapter !== null && (
                            <div className="f8-overlay-chapter-tag" style={{ background: PILCOLORS[activeChapter] }}>
                                {CH[activeChapter].emoji} {CH[activeChapter].name}
                            </div>
                        )}
                        <div className="f8-overlay-score-badge">
                            ⭐ {score}
                        </div>
                    </div>
                    <div className="f8-overlay-body">
                        {activeGame === 'dice' && (
                            <div className="f8-dice-game">
                                <div className="f8-road-wrap">
                                    <div className="f8-road">
                                        {Array.from({ length: diceTotal + 1 }).map((_, i) => {
                                            const isQ = i > 0 && i < diceTotal && i % 3 === 0;
                                            const isS = i === 0, isE = i === diceTotal;
                                            return (
                                                <div key={i} className={`f8-road-stop ${i === dicePos ? 'active' : ''} ${i < dicePos ? 'visited' : ''}`}
                                                    style={{ color: !isS && !isE && !isQ ? 'var(--t3)' : '' }}>
                                                    <span className="f8-stop-num">{isS ? '🚩' : isE ? '🏆' : isQ ? '❓' : i}</span>
                                                    {i === dicePos && <span className="f8-player-token">🏃</span>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="f8-dice-zone">
                                    <div className="f8-dice-container">
                                        <div className={`f8-dice-el ${diceRolling ? 'rolling' : ''}`} onClick={rollDice}>
                                            {diceVal}
                                        </div>
                                        <p className="f8-dice-hint">Kliko për të hedhur!</p>
                                    </div>
                                    <div className="f8-dice-info">
                                        <h3>📍 Gjendja</h3>
                                        <p>Pozicioni: {dicePos}/{diceTotal}</p>
                                        <button className="f8-btn f8-btn-ghost" onClick={resetDice} style={{ marginTop: '10px' }}>🔄 Rifillo</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeGame === 'wordle' && (
                            <div className="f8-wordle-game">
                                <div className="f8-wordle-grid">
                                    {wordleTries.map((tryWord, i) => (
                                        <div key={i} className="f8-wordle-row">
                                            {tryWord.split('').map((char, j) => {
                                                let color = 'var(--t3)';
                                                if (wordleWord[j] === char) color = 'var(--acc2)';
                                                else if (wordleWord.includes(char)) color = 'var(--yellow2)';
                                                return <div key={j} className="f8-wordle-cell" style={{ background: color }}>{char}</div>;
                                            })}
                                        </div>
                                    ))}
                                    {wordleStatus === 'playing' && wordleTries.length < 6 && (
                                        <div className="f8-wordle-row current">
                                            {Array.from({ length: wordleWord.length }).map((_, i) => (
                                                <div key={i} className="f8-wordle-cell">{wordleGuess[i] || ''}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {wordleStatus === 'playing' ? (
                                    <div className="f8-wordle-input-zone">
                                        <input 
                                            maxLength={wordleWord.length} 
                                            value={wordleGuess} 
                                            onChange={e => setWordleGuess(e.target.value.toUpperCase())}
                                            onKeyDown={e => e.key === 'Enter' && submitWordle()}
                                            placeholder={`Shtyp ${wordleWord.length} shkronja...`}
                                        />
                                        <button className="f8-btn" onClick={submitWordle}>Provo</button>
                                    </div>
                                ) : (
                                    <div className="f8-wordle-result">
                                        <h3>{wordleStatus === 'won' ? '🎉 Fitove!' : '💀 Humbje!'}</h3>
                                        <p>Fjala ishte: <strong>{wordleWord}</strong></p>
                                        <button className="f8-btn" onClick={startWordle}>Luaj përsëri</button>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeGame === 'battle' && (
                            <div className="f8-battle-game">
                                {battleActive ? (
                                    <div className="f8-battle-box">
                                        <div className="f8-battle-timer">⌛ {battleTime}s</div>
                                        <div className="f8-battle-q">
                                            {QS[activeChapter || 0][battleQIdx].q}
                                        </div>
                                        <div className="f8-battle-opts">
                                            {QS[activeChapter || 0][battleQIdx].opts.map((o, i) => (
                                                <button key={i} className="f8-qopt" onClick={() => {
                                                    if (i === QS[activeChapter || 0][battleQIdx].ans) {
                                                        setScore(s => s + 20);
                                                        showToast("🔥 Saktë! +20");
                                                        if (battleQIdx < QS[activeChapter || 0].length - 1) setBattleQIdx(battleQIdx + 1);
                                                        else { setBattleActive(false); fireConfetti(); showToast("🏆 Fitore!"); }
                                                    } else {
                                                        setBattleTime(t => Math.max(0, t - 5));
                                                        showToast("❌ -5 sekonda!");
                                                    }
                                                }}>{o}</button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="f8-battle-start">
                                        <h2>⚔️ Squad Battle</h2>
                                        <p>Zgjidh sa më shumë saktë brenda 30 sekondave!</p>
                                        <button className="f8-btn" onClick={startBattle}>Fillo Betejën!</button>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeGame === 'debate' && (
                            <div className="f8-debate-game">
                                {DEBATE_TOPICS.map((topic, i) => (
                                    <div key={i} className="f8-debate-card">
                                        <h3>{topic.t}</h3>
                                        <p>{topic.d}</p>
                                        <button className="f8-btn f8-btn-ghost" onClick={() => showToast("💬 Debati u regjistrua!")}>Bashkohu debatit</button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeGame === 'worksheet' && (
                            <div className="f8-worksheet-game">
                                <div className="f8-worksheet-grid">
                                    {WORKSHEETS.map((w, i) => (
                                        <div key={i} className="f8-worksheet-card">
                                            <i className="fas fa-file-pdf"></i>
                                            <h4>{w.n}</h4>
                                            <a href={w.l} target="_blank" rel="noreferrer" className="f8-btn">Shiko PDF</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeGame === 'anim' && (
                            <div className="f8-anim-game">
                                <div className="f8-anim-container">
                                    <div className="f8-anim-car-track">
                                        <div className="f8-anim-car">🚗</div>
                                    </div>
                                    <p className="f8-anim-desc">Animacion i lëvizjes drejtvizore të njëtrajtshme</p>
                                    <div className="f8-anim-controls">
                                        <button className="f8-btn" onClick={() => {
                                            const car = document.querySelector('.f8-anim-car') as HTMLElement;
                                            if (car) {
                                                car.style.transition = 'left 2s linear';
                                                car.style.left = '85%';
                                                setTimeout(() => {
                                                    car.style.transition = 'none';
                                                    car.style.left = '0';
                                                }, 2500);
                                            }
                                        }}>Fillo Lëvizjen</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeGame === 'facts' && (
                            <div className="f8-facts-game">
                                <div className="f8-fact-card" style={{ background: `linear-gradient(135deg, ${FACTS[factIdx].bg}, #fff)` }}>
                                    <div className="f8-fact-tag">{FACTS[factIdx].tag}</div>
                                    <div className="f8-fact-emoji">{FACTS[factIdx].e}</div>
                                    <p className="f8-fact-text">"{FACTS[factIdx].t}"</p>
                                    <div className="f8-fact-actions">
                                        <button className="f8-btn f8-btn-ghost" onClick={() => setFactIdx((factIdx - 1 + FACTS.length) % FACTS.length)}>← Para</button>
                                        <button className="f8-btn" style={{ background: 'var(--acc1)', color: '#fff' }} onClick={() => { setScore(s => s + 2); showToast('⭐ +2 pikë!'); fireConfetti(); }}>⭐ Interesante!</button>
                                        <button className="f8-btn f8-btn-ghost" onClick={() => setFactIdx((factIdx + 1) % FACTS.length)}>Tjetri →</button>
                                    </div>
                                </div>
                                <div className="f8-fact-dots">
                                    {FACTS.map((_, i) => (
                                        <div key={i} className={`f8-fdot ${i === factIdx ? 'active' : ''}`} onClick={() => setFactIdx(i)}></div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeGame === 'flash' && (
                            <div className="f8-flash-game">
                                <div className="f8-flash-card-container" onClick={() => setFcFlipped(!fcFlipped)}>
                                    <div className={`f8-flash-card-inner ${fcFlipped ? 'flipped' : ''}`}>
                                        <div className="f8-flash-card-front">
                                            <div className="f8-flash-label">Termi</div>
                                            <h2 className="f8-flash-term">{FLASHCARDS[fcIdx].term}</h2>
                                            <p className="f8-flash-hint">(Kliko për të rrotulluar)</p>
                                        </div>
                                        <div className="f8-flash-card-back">
                                            <div className="f8-flash-label">Përkufizimi</div>
                                            <p className="f8-flash-def">{FLASHCARDS[fcIdx].def}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="f8-flash-actions">
                                    <button className="f8-btn f8-btn-ghost" onClick={() => { setFcIdx((fcIdx - 1 + FLASHCARDS.length) % FLASHCARDS.length); setFcFlipped(false); }}>← Para</button>
                                    <button className="f8-btn" style={{ background: 'var(--acc2)', color: '#fff' }} onClick={() => { setScore(s => s + 5); showToast('⭐ +5 pikë!'); fireConfetti(); }}>✓ E di</button>
                                    <button className="f8-btn f8-btn-ghost" onClick={() => { setFcIdx((fcIdx + 1) % FLASHCARDS.length); setFcFlipped(false); }}>Tjetri →</button>
                                </div>
                            </div>
                        )}

                        {activeGame === 'phet' && (
                            <div className="f8-phet-game">
                                <div className="f8-phet-tabs">
                                    {PHET_DATA.map((d, i) => (
                                        <button
                                            key={i}
                                            className={`f8-phet-tab ${phetTab === i ? 'active' : ''}`}
                                            style={{
                                                borderBottomColor: phetTab === i ? PILCOLORS[i] : 'transparent',
                                                color: phetTab === i ? PILCOLORS[i] : 'var(--t2)'
                                            }}
                                            onClick={() => setPhetTab(i)}
                                        >
                                            {d.chName}
                                        </button>
                                    ))}
                                </div>
                                <div className="f8-phet-body">
                                    {/* PhET Card */}
                                    <div className="f8-phet-card">
                                        <div className="f8-phet-card-header" style={{ background: `${PHET_DATA[phetTab].phet.color}20` }}>
                                            <h3>🔬 {PHET_DATA[phetTab].phet.title}</h3>
                                            <a href={PHET_DATA[phetTab].phet.url} target="_blank" rel="noreferrer" className="f8-phet-open-btn" style={{ background: PILCOLORS[phetTab] }}>↗ Hap</a>
                                        </div>
                                        <div className="f8-phet-card-content">
                                            <p>{PHET_DATA[phetTab].phet.desc}</p>
                                            <div className="f8-iframe-wrap">
                                                <iframe src={PHET_DATA[phetTab].phet.url} title="PhET" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Video Card */}
                                    <div className="f8-phet-card">
                                        <div className="f8-phet-card-header" style={{ background: `${PHET_DATA[phetTab].video.color}40` }}>
                                            <h3>▶️ {PHET_DATA[phetTab].video.title}</h3>
                                            <a href={`https://www.youtube.com/watch?v=${PHET_DATA[phetTab].video.ytId}`} target="_blank" rel="noreferrer" className="f8-phet-open-btn" style={{ background: '#FF0000' }}>↗ YouTube</a>
                                        </div>
                                        <div className="f8-phet-card-content">
                                            <p>{PHET_DATA[phetTab].video.desc}</p>
                                            <div className="f8-iframe-wrap">
                                                <iframe src={`https://www.youtube.com/embed/${PHET_DATA[phetTab].video.ytId}`} title="Video" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
      </div>

      {/* MODAL */}
      {modalQ && (
          <div className="f8-modal">
              <div className="f8-modal-box">
                  <div className="f8-modal-header">
                      <span className="f8-modal-tag" style={{ background: PILCOLORS[activeChapter || 0] }}>Ushtrimi</span>
                      <button className="f8-modal-close" onClick={() => setModalQ(null)}>✕</button>
                  </div>
                  <div className="f8-modal-q">
                      {modalQ.q}
                  </div>
                  <div className="f8-modal-opts">
                      {modalQ.opts.map((o: string, i: number) => (
                          <button
                              key={i}
                              className={`f8-qopt ${showSolution ? (i === modalQ.ans ? 'correct' : (modalCorrect === false && i !== modalQ.ans && 'wrong')) : ''}`}
                              onClick={() => !showSolution && checkAnswer(i)}
                          >
                              <div className="f8-qopt-letter">
                                  {['A', 'B', 'C', 'D'][i]}
                              </div>
                              {o}
                          </button>
                      ))}
                  </div>
                  {showSolution && (
                      <div className="f8-modal-sol">
                          <strong>💡 Zgjidhja:</strong><br />
                          {modalQ.sol}
                          <div className="f8-modal-actions">
                              <button className="f8-btn" style={{ background: 'var(--acc2)', color: '#fff' }} onClick={() => setModalQ(null)}>Vazhdo →</button>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      )}

      {/* TOAST */}
      {toastMsg && <div className="f8-toast">{toastMsg}</div>}
    </div>
  );
};

export default Fizika8Dashboard;
