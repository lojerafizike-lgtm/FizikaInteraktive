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
  { name: "Forcat & Lëvizja", short: "Forcat", icon: "fa-bolt" },
  { name: "Tingujt", short: "Tingujt", icon: "fa-volume-up" },
  { name: "Drita", short: "Drita", icon: "fa-sun" },
  { name: "Magnetizmi", short: "Magnetizmi", icon: "fa-magnet" }
];

const PILCOLORS = ["#4F46E5", "#0D9488", "#F59E0B", "#EF4444"];

const QS = [
  // ── KAPITULLI I ──
  [
    {q:"Një biçikletist lëviz me shpejtësi 12 m/s për 30 sekonda. Sa rrugë përshkon?",opts:["240 m","360 m","420 m","180 m"],ans:1,sol:"l = v × t = 12 × 30 = 360 m\nFormula: l = v × t (rrugë = shpejtësi × kohë)"},
    {q:"Nëse F = 30 N dhe m = 6 kg, sa është nxitimi?",opts:["180 m/s²","5 m/s²","24 m/s²","3 m/s²"],ans:1,sol:"a = F / m = 30 / 6 = 5 m/s²"},
    {q:"Cili ligj i Njutonit thotë: 'çdo veprim ka një kundërveprim të barabartë por me kah të kundërt'?",opts:["Ligji I","Ligji II","Ligji III","Ligji IV"],ans:2,sol:"Ligji i Tretë i Njutonit: çdo veprim ka një kundërveprim të barabartë por me kah të kundërt."},
    {q:"Automobil nga 0 në 20 m/s në 4 sekonda. Sa nxitim?",opts:["4 m/s²","10 m/s²","5 m/s²","80 m/s²"],ans:2,sol:"a = Δv / t = (20 − 0) / 4 = 5 m/s²"},
    {q:"Me cilin numër shumëzojmë km/orë për ta kthyer në m/s?",opts:["3600","24","3.6","0.278"],ans:3,sol:"1 km/orë = 1000 m / 3600 s = 0.278 m/s"},
    {q:"Makinë: nga 120 m arrin 400 m në 10 sekonda. Sa shpejtësi?",opts:["28 m/s","40 m/s","12 m/s","52 m/s"],ans:0,sol:"Rruga: 400 − 120 = 280 m\nv = l / t = 280 / 10 = 28 m/s"},
    {q:"50 m/s krahasuar me 144 km/orë — cila është më e madhe?",opts:["50 m/s","144 km/orë","Janë të barabarta","Nuk krahasohen"],ans:0,sol:"144 km/orë × 0.278 = 40 m/s\nPra 50 m/s > 40 m/s"},
    {q:"Për lëvizjen drejtvizore cili kusht duhet plotësuar?",opts:["Shpejtësia të jetë konstante","Trajektorja përputhet me segment drejtvizor","Grafiku rrugë-kohë vijë e drejtë","Nxitimi = 0"],ans:1,sol:"Lëvizja drejtvizore = trajektorja është segment drejtvizor."},
    {q:"Për vizatimin e trajektores duhet të dimë:",opts:["Pozicionin fillestar dhe përfundimtar","Drejtimin e lëvizjes","Të gjithë pozicionet njëpasnjëshëm","Shpejtësinë mesatare"],ans:2,sol:"Trajektorja = vija e të gjitha pozicioneve njëpasnjëshëm gjatë lëvizjes."},
    {q:"Pse matja me porta fotometrike është më e saktë se kronometri?",opts:["Është më e shpejtë","Eliminon gabimet subjektive njerëzore","Mat kohën në minuta","Është elektrike"],ans:1,sol:"Portat fotometrike: çasti përcaktohet elektronikisht — pa gabim njerëzor."},
  ],
  // ── KAPITULLI II ──
  [
    {q:"Cila është njësia e fortësisë së zërit?",opts:["Hz","N","dB","W"],ans:2,sol:"Decibel (dB) mat fortësinë e zërit."},
    {q:"Zëri lëviz më shpejt në:",opts:["Vakum","Ajër","Ujë","Çelik"],ans:3,sol:"Çeliku (ngurtë) ~5100 m/s > Uji ~1500 m/s > Ajri ~340 m/s"},
    {q:"Frekuenca e lartë e zërit korrespondon me:",opts:["Zë të fortë","Zë të ulët","Zë të lartë (akut)","Amplitudë të madhe"],ans:2,sol:"Frekuenca e lartë → zë i lartë (akut)"},
    {q:"Pse zëri nuk përhapet në vakum?",opts:["Është shumë i shpejtë","Është valë mekanike — kërkon mjedis lëndor","Vakumi e absorbon","Temperatura e ulët"],ans:1,sol:"Valët zanore janë mekanike — në vakum nuk ka grimca."},
    {q:"Jehona formohet pas vonesës minimale prej:",opts:["0.01 sek","0.1 sek","1 sek","10 sek"],ans:1,sol:"Jehona kërkon min. 0.1 sekonda vonesë."},
  ],
  // ── KAPITULLI III ──
  [
    {q:"Shpejtësia e dritës në vakum:",opts:["300 km/s","3 000 km/s","300 000 km/s","30 000 km/s"],ans:2,sol:"c = 3×10⁸ m/s = 300 000 km/s"},
    {q:"Pse formohet ylberi?",opts:["Pasqyrimi","Dispersioni","Absorbimi","Interferenca"],ans:1,sol:"Dispersioni: pikat e shiut ndajnë dritën e bardhë."},
    {q:"Këndi rënie 30° nga sipërfaqja. Këndi mes rrezes rënëse dhe të pasqyruar?",opts:["30°","60°","90°","120°"],ans:3,sol:"Këndi rënies nga normalia = 90° − 30° = 60°. Këndi pasqyrimit = 60°. Total = 120°"},
    {q:"Pse AMBULANCË shkruhet mbrapsht në pjesën ballore?",opts:["Të jetë dekorative","Shoferi para lexon drejtë në pasqyrën e tij","Është rregull ligjor","Të jetë i dukshëm natën"],ans:1,sol:"Pasqyra këmben anët. Duke shkruar mbrapsht, shoferi lexon AMBULANCË drejtë."},
    {q:"Kur shikojmë yjet natën, çfarë shohim?",opts:["Dritën e tyre aktuale","Mbrapa në kohë — dritën e tyre të vjetër","Reflektimin e Diellit","Dritën e Hënës"],ans:1,sol:"Drita ka udhëtuar vite deri te ne — shohim si ishin yjet, jo si janë."},
  ],
  // ── KAPITULLI IV ──
  [
    {q:"Polë të njëjtë magnetikë:",opts:["Tërhiqen","Zbëthejnë/shtyhen","Nuk reagojnë","Bashkohen"],ans:1,sol:"Polë të njëjtë (V-V ose J-J) → zbëthejnë."},
    {q:"Cilat janë lëndët magnetike: bronz, çelik, hekur, bakër, nikel?",opts:["Bronz, bakër","Çelik, hekur, nikel","Të gjitha","Asnj'ë"],ans:1,sol:"Magnetike: çeliku, hekuri, nikeli."},
    {q:"Kur afroni magnetin pranë materialit magnetik, materiali do:",opts:["E shtyjë magnetin","E tërheqë gjithmonë","Nuk reagojë","Shkatërrohë"],ans:1,sol:"Materiali magnetik gjithmonë TËRHIQET nga magneti."},
    {q:"Pse çeliku mbetet i magnetizuar por hekuri jo?",opts:["Hekuri është i fortë","Çeliku ka magnetizëm mbetës — domenet mbeten të orientuara","Çeliku ka temp. të lartë","Hekuri është i rëndë"],ans:1,sol:"Çeliku = lëndë ferromagnetike me magnetizëm mbetës."},
    {q:"Pse nuk merret vetëm poli Veri duke prenë magnetin?",opts:["Magneti është i fortë","Çdo pjesë ka N dhe S — domenet","Polët janë të ngjitura","Temperatura ndryshon"],ans:1,sol:"Çdo magnet ka domene. Kur presim, secila pjesë ka të dy polët."},
  ]
];

const FACTS = [
  {t:"Nëse do të lëvizje me shpejtësinë e dritës, do të arrije Hënën në vetëm 1.3 sekonda!",tag:"Drita", icon:"fa-sun"},
  {t:"Zëri lëviz 15 herë më shpejt nëpër çelik sesa nëpër ajër — rreth 5100 m/s!",tag:"Tingujt", icon:"fa-volume-up"},
  {t:"Fusha magnetike e Tokës na mbron nga rrezet kozmike — pa të, jeta s'do ekzistonte!",tag:"Magnetizmi", icon:"fa-magnet"},
  {t:"Ylberi është plotësisht rrethor! Shohim gjysmën sepse toka bllokon gjysmën tjetër.",tag:"Drita", icon:"fa-rainbow"},
  {t:"Ligji III i Njutonit shpjegon si fluturojnë raketat: gazrat dalin poshtë → raketa shkon lart!",tag:"Forcat", icon:"fa-rocket"},
  {t:"Lakuriqët e natës 'shohin' me jehonë (sonar biologjik) — gjuajnë insekte në errësirë totale!",tag:"Tingujt", icon:"fa-broadcast-tower"},
];

const PHET_DATA = [
  {
    ch: 0, chName: 'Forcat & Lëvizja',
    phet: {
      title: 'Forcat dhe Lëvizja: Bazat',
      desc: 'Eksploro si forcat ndikojnë lëvizjen. Shtyj objektet, ndryshoj masën dhe fërkimin.',
      url: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_sq.html',
      color: '#4F46E5'
    },
    video: {
      title: 'Ligjet e Njutonit — Shpjegim',
      desc: 'Video shpjeguese për të 3 ligjet e Njutonit me shembuj praktikë.',
      ytId: 'kKKM8Y-u7ds',
      color: '#EF4444'
    }
  },
  {
    ch: 1, chName: 'Tingujt',
    phet: {
      title: 'Vala e Zërit',
      desc: 'Shiko si lëvizin molekulat e ajrit kur krijohet zëri. Ndrysho frekuencën dhe amplitudën.',
      url: 'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_sq.html',
      color: '#0D9488'
    },
    video: {
      title: 'Si funksionon zëri — Valët zanore',
      desc: 'Animacion vizual i valëve zanore, dendësimeve dhe rrallimeve.',
      ytId: 'GkNJvywCx6Q',
      color: '#EF4444'
    }
  },
  {
    ch: 2, chName: 'Drita',
    phet: {
      title: 'Optika Gjeometrike',
      desc: 'Dërgo rreze drite nëpër prizma, pasqyra dhe thjerrëza.',
      url: 'https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_sq.html',
      color: '#F59E0B'
    },
    video: {
      title: 'Drita — Pasqyrimi dhe Dispersioni',
      desc: 'Video mësimore që tregon si funksionon drita dhe ylberi.',
      ytId: 'IRBfpBPELmE',
      color: '#EF4444'
    }
  },
  {
    ch: 3, chName: 'Magnetizmi',
    phet: {
      title: 'Magneti dhe Kompasi',
      desc: 'Eksploroni vijat e fushës magnetike dhe orientimin e busullës.',
      url: 'https://phet.colorado.edu/sims/html/magnets-and-electromagnets/latest/magnets-and-electromagnets_sq.html',
      color: '#EF4444'
    },
    video: {
      title: 'Fushë Magnetike dhe Elektromagneti',
      desc: 'Shpjegim vizual i fushës magnetike dhe elektromagnetit.',
      ytId: 'hFAOXdXZ5TM',
      color: '#EF4444'
    }
  }
];

const FLASHCARDS = [
  {ch:0, term:"Shpejtësia", def:"Rruga e përshkuar në njësi kohe. Formula: v = l / t."},
  {ch:0, term:"Nxitimi", def:"Ndryshimi i shpejtësisë në njësi kohe. Formula: a = Δv / t."},
  {ch:2, term:"Vala zanore", def:"Valë mekanike gjatësore ku grimcat lëkunden para-mbrapa."},
  {ch:2, term:"Dispersioni", def:"Ndarja e dritës së bardhë në ngjyrat e spektrit nga një prizëm."},
  {ch:3, term:"Elektromagneti", def:"Magnet i krijuar nga rryma elektrike që kalon nëpër një spirale."},
];

const WORDLE_WORDS = ["FORCA", "MASA", "DRITA", "VALA", "ZERI", "LENTE", "PUNA", "FUQIA", "NXITIM", "RRUGA"];

const DEBATE_TOPICS = [
  { t: "A, është e mundur! të udhëtojmë më shpejt se drita?", d: "Diskutoni mbi teorinë e relativitetit dhe vrimat e krimbit." },
  { t: "Energjia Bërthamore: Mik apo Armik?", d: "Përparësitë e energjisë së pastër kundrejt rreziqeve të mbetjeve." },
  { t: "A ka fund univeri?", d: "Teoritë mbi zgjerimin e universit dhe fatin e tij përfundimtar." }
];

const WORKSHEETS = [
  { n: "Ushtrime: Kinematika", l: "#" },
  { n: "Laborator: Tingulli", l: "#" },
  { n: "Test: Drita & Optika", l: "#" }
];

// --- COMPONENT ---

interface Fizika8DashboardProps {
  onBack: () => void;
}

const Fizika8Dashboard: React.FC<Fizika8DashboardProps> = ({ onBack }) => {
  const [activeChapter, setActiveChapter] = useState<number | null>(0);
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
  const [diceVal, setDiceVal] = useState("1");
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
      showToast("Koha mbaroi!");
    }
    return () => clearInterval(timer);
  }, [battleActive, battleTime]);

  // Confetti
  const fireConfetti = () => {
    const cols=['#4F46E5','#0D9488','#F59E0B','#EF4444'];
    for(let i=0;i<20;i++){
      const el=document.createElement('div');
      el.className='conf';
      const sz=6+Math.random()*10;
      el.style.cssText=`left:${Math.random()*100}vw;top:0;width:${sz}px;height:${sz}px;background:${cols[Math.floor(Math.random()*cols.length)]};animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*0.4}s;border-radius:2px;position:fixed;pointer-events:none;z-index:9998;animation:confFall linear forwards;`;
      document.body.appendChild(el);
      setTimeout(()=>el.remove(),3500);
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
    showToast(`Kapitull: ${CH[idx].name}`);
  };

  const handleGameOpen = (id: string) => {
    if (activeChapter === null && id !== 'facts' && id !== 'phet' && id !== 'worksheet') {
        showToast("Zgjidh kapitullin së pari!");
        return;
    }
    setActiveGame(id);
    if (id === 'phet') setPhetTab(activeChapter ?? 0);
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
    const iv = setInterval(() => {
        const r = Math.floor(Math.random() * 6) + 1; // 1-6
        setDiceVal(`${r}`);
        n++;
        if (n > 12) {
            clearInterval(iv);
            setDiceRolling(false);
            const val = r;
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
                    showToast('Ulime! Ke përfunduar rrugën! +50 pikë');
                    setScore(s => s + 50);
                    fireConfetti();
                }
            }, 500);
        }
    }, 70);
  };

  const resetDice = () => {
      setDicePos(0);
      setDiceVal("1");
      showToast('Rruga u rifillua!');
  };

  // Modal Logic
  const checkAnswer = (idx: number) => {
      if (!modalQ) return;
      if (idx === modalQ.ans) {
          setModalCorrect(true);
          setScore(s => s + 10);
          showToast('Saktë! +10 pikë');
          fireConfetti();
      } else {
          setModalCorrect(false);
          showToast('Gabim!');
      }
      setShowSolution(true);
  };

  const games = [
    {id:'dice', n:'Zari Magjik', d:'Hidh zarin & zgjidh ushtrimet', icon: 'fa-dice'},
    {id:'facts', n:'Fun Facts', d:'Fakte mahnitëse nga fizika', icon: 'fa-lightbulb'},
    {id:'phet', n:'PhET & Video', d:'Simulime interaktive', icon: 'fa-vial'},
    {id:'flash', n:'Flashcards', d:'Kartëla studimi', icon: 'fa-clone'},
    {id:'wordle', n:'Wordle Fizika', d:'Gjej fjalën e fshehur', icon: 'fa-font'},
    {id:'battle', n:'Squad Battle', d:'Sfido veten në formula', icon: 'fa-shield-halved'},
    {id:'debate', n:'Debat Fizik', d:'Diskuto mbi teoritë', icon: 'fa-comments'},
    {id:'worksheet', n:'Fletë Pune', d:'Ushtrime për printim', icon: 'fa-file-pdf'},
    {id:'anim', n:'Animacione', d:'Eksperimente vizuale', icon: 'fa-film'},
  ];

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
              onClick={() => handleChapterSelect(i)}
            >
              <i className={`fas ${c.icon}`}></i> {c.short}
            </button>
          ))}
        </div>
        <button className="f8-close-btn" onClick={onBack}>Dil</button>
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
                            <h1>Mirë se vini</h1>
                            <p>Zgjidhni kapitullin dhe lojën tuaj</p>
                        </div>
                        {activeChapter !== null && (
                            <div className="f8-badge" style={{ background: PILCOLORS[activeChapter] }}>
                                {CH[activeChapter].name}
                            </div>
                        )}
                    </div>

                    <div className="f8-section">
                        <div className="f8-section-title"><i className="fas fa-book"></i> Zgjidh Kapitullin</div>
                        <div className="f8-chapter-grid">
                            {CH.map((c, i) => (
                                <button
                                    key={i}
                                    className="f8-chapter-card"
                                    style={{ outline: activeChapter === i ? `2px solid ${PILCOLORS[i]}` : 'none' }}
                                    onClick={() => handleChapterSelect(i)}
                                >
                                    <div>
                                        <div className="f8-chapter-emoji"><i className={`fas ${c.icon}`}></i></div>
                                        <div className="f8-chapter-name">{c.name}</div>
                                        <div className="f8-chapter-sub">{QS[i].length} ushtrime</div>
                                    </div>
                                    <span className="f8-chapter-badge">Zgjidh &rarr;</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="f8-section">
                        <div className="f8-section-title"><i className="fas fa-gamepad"></i> Lojërat & Mjetet</div>
                        <div className="f8-games-grid">
                            {games.map((g, i) => (
                                <button
                                    key={g.id}
                                    className="f8-game-card"
                                    onClick={() => handleGameOpen(g.id)}
                                >
                                    <div className="f8-game-card-top">
                                        <span className="f8-game-card-emoji"><i className={`fas ${g.icon}`}></i></span>
                                        <div className="f8-game-card-name">{g.n}</div>
                                        <div className="f8-game-card-desc">{g.d}</div>
                                    </div>
                                    <div className="f8-game-card-bottom">Hap &rarr;</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                // GAME OVERLAY
                <div className="f8-overlay">
                    <div className="f8-overlay-header">
                        <button className="f8-overlay-close" onClick={handleCloseGame}><i className="fas fa-times"></i></button>
                        <div className="f8-overlay-title">
                            {games.find(g => g.id === activeGame)?.n || 'Lojë'}
                        </div>
                        {activeChapter !== null && (
                            <div className="f8-overlay-chapter-tag" style={{ background: PILCOLORS[activeChapter] }}>
                                {CH[activeChapter].name}
                            </div>
                        )}
                        <div className="f8-overlay-score-badge">
                            <i className="fas fa-star"></i> {score}
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
                                                <div key={i} className={`f8-road-stop ${i === dicePos ? 'active' : ''} ${i < dicePos ? 'visited' : ''}`}>
                                                    <span className="f8-stop-num">{isS ? 'S' : isE ? 'F' : isQ ? '?' : i}</span>
                                                    {i === dicePos && <span className="f8-player-token"><i className="fas fa-user"></i></span>}
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
                                        <p className="f8-dice-hint">Kliko për të hedhur</p>
                                    </div>
                                    <div className="f8-dice-info">
                                        <h3>Gjendja</h3>
                                        <p>Pozicioni: {dicePos}/{diceTotal}</p>
                                        <button className="f8-btn f8-btn-ghost" onClick={resetDice} style={{ marginTop: '10px' }}>Rifillo</button>
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
                                                let color = '#E2E8F0';
                                                let tc = '#475569';
                                                if (wordleWord[j] === char) { color = '#0D9488'; tc = '#fff'; }
                                                else if (wordleWord.includes(char)) { color = '#F59E0B'; tc = '#fff'; }
                                                return <div key={j} className="f8-wordle-cell" style={{ background: color, color: tc }}>{char}</div>;
                                            })}
                                        </div>
                                    ))}
                                    {wordleStatus === 'playing' && wordleTries.length < 6 && (
                                        <div className="f8-wordle-row current">
                                            {Array.from({ length: wordleWord.length }).map((_, i) => (
                                                <div key={i} className="f8-wordle-cell" style={{ borderColor: wordleGuess[i] ? '#4F46E5' : '#E2E8F0' }}>{wordleGuess[i] || ''}</div>
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
                                            placeholder={`${wordleWord.length} shkronja...`}
                                        />
                                        <button className="f8-btn" style={{background: '#4F46E5', color: '#fff'}} onClick={submitWordle}>Provo</button>
                                    </div>
                                ) : (
                                    <div className="f8-wordle-result" style={{textAlign: 'center'}}>
                                        <h3>{wordleStatus === 'won' ? 'Fitove!' : 'Humbje!'}</h3>
                                        <p>Fjala ishte: <strong>{wordleWord}</strong></p>
                                        <button className="f8-btn" style={{background: '#4F46E5', color: '#fff'}} onClick={startWordle}>Luaj përsëri</button>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeGame === 'battle' && activeChapter !== null && (
                            <div className="f8-battle-game">
                                {battleActive ? (
                                    <div className="f8-battle-box">
                                        <div className="f8-battle-timer"><i className="fas fa-clock"></i> {battleTime}s</div>
                                        <div className="f8-battle-q">
                                            {QS[activeChapter][battleQIdx].q}
                                        </div>
                                        <div className="f8-battle-opts">
                                            {QS[activeChapter][battleQIdx].opts.map((o, i) => (
                                                <button key={i} className="f8-qopt" onClick={() => {
                                                    if (i === QS[activeChapter][battleQIdx].ans) {
                                                        setScore(s => s + 20);
                                                        showToast("Saktë! +20");
                                                        if (battleQIdx < QS[activeChapter].length - 1) setBattleQIdx(battleQIdx + 1);
                                                        else { setBattleActive(false); fireConfetti(); showToast("Fitore!"); }
                                                    } else {
                                                        setBattleTime(t => Math.max(0, t - 5));
                                                        showToast("-5 sekonda!");
                                                    }
                                                }}>{o}</button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="f8-battle-start">
                                        <h2>Squad Battle</h2>
                                        <p>Zgjidh sa më shumë saktë brenda 30 sekondave!</p>
                                        <button className="f8-btn" style={{background: '#4F46E5', color: '#fff'}} onClick={startBattle}>Fillo Betejën</button>
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
                                        <button className="f8-btn f8-btn-ghost" onClick={() => showToast("Debati u regjistrua!")}>Bashkohu debatit</button>
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
                                            <a href={w.l} target="_blank" rel="noreferrer" className="f8-btn f8-btn-ghost">Shiko PDF</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeGame === 'anim' && (
                            <div className="f8-anim-game">
                                <div className="f8-anim-container">
                                    <div className="f8-anim-car-track">
                                        <div className="f8-anim-car"><i className="fas fa-car"></i></div>
                                    </div>
                                    <p className="f8-anim-desc">Animacion i lëvizjes drejtvizore të njëtrajtshme</p>
                                    <div className="f8-anim-controls">
                                        <button className="f8-btn" style={{background: '#4F46E5', color: '#fff'}} onClick={() => {
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
                                <div className="f8-fact-card">
                                    <div className="f8-fact-tag">{FACTS[factIdx].tag}</div>
                                    <div className="f8-fact-emoji"><i className={`fas ${FACTS[factIdx].icon}`}></i></div>
                                    <p className="f8-fact-text">"{FACTS[factIdx].t}"</p>
                                    <div className="f8-fact-actions">
                                        <button className="f8-btn f8-btn-ghost" onClick={() => setFactIdx((factIdx - 1 + FACTS.length) % FACTS.length)}>Para</button>
                                        <button className="f8-btn" style={{ background: '#4F46E5', color: '#fff' }} onClick={() => { setScore(s => s + 2); showToast('+2 pikë!'); fireConfetti(); }}>Interesante!</button>
                                        <button className="f8-btn f8-btn-ghost" onClick={() => setFactIdx((factIdx + 1) % FACTS.length)}>Tjetri</button>
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
                                    <button className="f8-btn f8-btn-ghost" onClick={() => { setFcIdx((fcIdx - 1 + FLASHCARDS.length) % FLASHCARDS.length); setFcFlipped(false); }}>Para</button>
                                    <button className="f8-btn" style={{ background: '#0D9488', color: '#fff' }} onClick={() => { setScore(s => s + 5); showToast('+5 pikë!'); fireConfetti(); }}>E di</button>
                                    <button className="f8-btn f8-btn-ghost" onClick={() => { setFcIdx((fcIdx + 1) % FLASHCARDS.length); setFcFlipped(false); }}>Tjetri</button>
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
                                            onClick={() => setPhetTab(i)}
                                        >
                                            {d.chName}
                                        </button>
                                    ))}
                                </div>
                                <div className="f8-phet-body">
                                    {/* PhET Card */}
                                    <div className="f8-phet-card">
                                        <div className="f8-phet-card-header">
                                            <h3><i className="fas fa-flask"></i> {" "}{PHET_DATA[phetTab].phet.title}</h3>
                                            <a href={PHET_DATA[phetTab].phet.url} target="_blank" rel="noreferrer" className="f8-phet-open-btn" style={{ background: PHET_DATA[phetTab].phet.color }}>Hap</a>
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
                                        <div className="f8-phet-card-header">
                                            <h3><i className="fas fa-play-circle"></i>{" "}{PHET_DATA[phetTab].video.title}</h3>
                                            <a href={`https://www.youtube.com/watch?v=${PHET_DATA[phetTab].video.ytId}`} target="_blank" rel="noreferrer" className="f8-phet-open-btn" style={{ background: PHET_DATA[phetTab].video.color }}>YouTube</a>
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
          <div className="f8-modal" onClick={() => setModalQ(null)}>
              <div className="f8-modal-box" onClick={e => e.stopPropagation()}>
                  <div className="f8-modal-header">
                      <span className="f8-modal-tag" style={{ background: PILCOLORS[activeChapter ?? 0] }}>Ushtrimi</span>
                      <button className="f8-modal-close" onClick={() => setModalQ(null)}><i className="fas fa-times"></i></button>
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
                          <strong>Zgjidhja:</strong><br />
                          {modalQ.sol}
                          <div className="f8-modal-actions">
                              <button className="f8-btn" style={{ background: '#0D9488', color: '#fff' }} onClick={() => setModalQ(null)}>Vazhdo &rarr;</button>
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
