
import { DigitalGame } from './types';

export const DIGITAL_GAMES: DigitalGame[] = [
  {
    id: "kinematika-final",
    title: "Kinematika: Edicioni Final",
    category: "Kinematika",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Kinematika: Final Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --gold: #3b82f6; /* Blue 500 */
            --parchment: #ffffff; /* White */
            --ocean: #f0f9ff; /* Sky 50 */
            --neon-blue: #2563eb; /* Blue 600 */
            --neon-green: #10b981; /* Emerald 500 */
            --neon-pink: #f43f5e; /* Rose 500 */
            --panel-bg: rgba(255, 255, 255, 0.95);
            --text-main: #1e293b;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }

        body {
            background-color: var(--ocean);
            color: var(--text-main);
            font-family: 'Nunito', sans-serif;
            overflow: hidden;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Klasa per Thyesat Vertikale */
        .frac {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            vertical-align: middle;
            font-size: 0.9em;
            line-height: 1.1;
            margin: 0 4px;
        }
        .frac > span:first-child {
            border-bottom: 1px solid var(--text-main);
            padding: 0 2px;
        }
        .frac > span:last-child {
            padding: 0 2px;
        }

        /* --- 1. INTRO: OLD MAP --- */
        #intro-screen {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.95); z-index: 100;
            display: flex; justify-content: center; align-items: center;
            perspective: 1000px;
        }

        .map-scroll {
            width: 320px; height: 0;
            background: var(--parchment);
            background-image: repeating-linear-gradient(rgba(0,0,0,0.05) 0px, transparent 2px);
            border-top: 15px solid #5e3b1f;
            border-bottom: 15px solid #5e3b1f;
            overflow: hidden;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            animation: openMap 2.5s forwards ease-in-out;
            box-shadow: 0 0 50px #000;
        }

        @keyframes openMap {
            0% { height: 0; transform: rotateX(90deg); }
            100% { height: 550px; transform: rotateX(0deg); }
        }

        .map-content { opacity: 0; animation: fadeIn 1s forwards 2s; text-align: center; color: #3e2b14; }
        .ink-title { font-family: 'Cinzel Decorative'; font-size: 2.8rem; margin-bottom: 10px; }
        .ink-btn {
            background: transparent; border: 2px solid #3e2b14; color: #3e2b14;
            padding: 10px 30px; font-family: 'Cinzel Decorative'; font-size: 1.2rem;
            cursor: pointer; margin-top: 20px; transition: 0.3s;
        }
        .ink-btn:hover { background: #3e2b14; color: var(--parchment); }
        @keyframes fadeIn { to { opacity: 1; } }

        /* --- 2. GAME UI --- */
        #game-container {
            width: 100%; max-width: 800px; height: 100%;
            display: none; flex-direction: column; padding: 10px; position: relative;
        }

        .island-nav {
            display: flex; justify-content: space-between; align-items: center;
            background: rgba(255,255,255,0.05); padding: 10px; border-radius: 50px; margin-bottom: 10px;
        }
        .island {
            width: 35px; height: 35px; border-radius: 50%; background: #e2e8f0;
            border: 2px solid #555; display: flex; align-items: center; justify-content: center;
            font-size: 1rem; position: relative; transition: 0.3s;
        }
        .island.active { border-color: var(--gold); box-shadow: 0 0 15px var(--gold); transform: scale(1.2); }
        .island.done { background: var(--neon-green); border-color: var(--neon-green); color: black; }
        .ship { position: absolute; top: -25px; font-size: 1.8rem; transition: left 1s ease; left: 5%; }

        /* PANELS */
        .panel {
            flex: 1; background: var(--panel-bg); border: 2px solid var(--neon-blue); border-radius: 12px; border-radius: 12px;
            border-radius: 15px; padding: 15px; display: none; flex-direction: column;
            overflow-y: auto; box-shadow: 0 0 20px rgba(0, 243, 255, 0.15);
            animation: slideUp 0.5s;
        }
        .panel.active { display: flex; }
        @keyframes slideUp { from {transform: translateY(20px); opacity:0;} to {transform: translateY(0); opacity:1;} }

        h2 { text-align: center; color: var(--neon-blue); font-family: 'Orbitron'; margin-bottom: 15px; font-size: 1.3rem; }
        .btn {
            background: #eff6ff; border: 2px solid var(--neon-blue); border-radius: 12px; border-radius: 12px; color: var(--text-main);
            padding: 12px; margin: 5px; cursor: pointer; font-family: 'Orbitron'; width: 100%;
            transition: 0.2s;
        }
        .btn:hover { background: var(--neon-blue); color: black; }

        /* FILLER VISUAL – KINEMATIKA */
        .kinematika-visual {
            position:relative; width:100%; height:300px; margin:40px 0;
            background: #ffffff; box-shadow: 0 10px 25px rgba(0,0,0,0.05); color: var(--text-main);
            overflow:hidden; border-radius:15px;
        }
        .kv-title { text-align:center; font-size:26px; padding-top:15px; letter-spacing:2px; }
        .kv-formula {
            display:flex; justify-content:center; align-items:center; gap:10px;
            text-align:center; font-size:18px; opacity:0.8; margin-bottom:20px;
        }
        .kv-axis { position:absolute; bottom:100px; left:10%; width:80%; height:2px; background:var(--text-main); }
        .kv-object {
            position:absolute; bottom:85px; left:10%; width:30px; height:30px;
            border-radius:50%; background:#00eaff; box-shadow:0 0 15px #00eaff;
        }
        .kv-vector { position:absolute; bottom:100px; left:10%; width:60px; height:3px; background:yellow; }
        .kv-info { position:absolute; bottom:20px; width:100%; text-align:center; font-size:16px; }

        /* --- STAGE ELEMENTS --- */
        .road { width: 100%; height: 80px; background: #e2e8f0; border-bottom: 3px dashed var(--text-main); position: relative; margin: 10px 0; overflow: hidden; border-radius: 5px; }
        /* Tani makina shikon para falë scaleX(-1) */
        .car { font-size: 2.5rem; position: absolute; bottom: 5px; left: 0; transform: scaleX(-1); }
        .graph-area { width: 100%; height: 200px; background: #f8fafc; border: 2px solid var(--text-main); display: none; }

        /* Math Section */
        .step-box { border-left: 2px solid #555; padding-left: 10px; margin-bottom: 15px; }
        .step-box.active { border-color: var(--neon-pink); }
        .math-board {
            background: #f8fafc; border: 1px solid #fff; padding: 10px; font-family: 'Courier New';
            color: var(--neon-green); font-size: 1.2rem; min-height: 60px; display: flex; align-items: center;
        }
        .slot { border: 1px dashed #777; min-width: 30px; padding: 0 5px; margin: 0 2px; text-align: center; cursor: pointer; color: var(--text-main); }
        .slot.active { border-color: var(--neon-blue); background: rgba(0,243,255,0.2); }
        
        .star-hint {
            display: inline-block; font-size: 1.5rem; cursor: pointer;
            filter: drop-shadow(0 0 5px var(--gold)); animation: pulse 1.5s infinite;
        }
        @keyframes pulse { 0% {transform: scale(1);} 50% {transform: scale(1.2);} 100% {transform: scale(1);} }
        .hint-text { color: var(--neon-pink); font-size: 0.9rem; display: none; margin-top: 5px; font-style: italic; }

        /* Game Dashboard */
        .dashboard {
            height: 80px; background: #e2e8f0; border-top: 4px solid #444;
            display: flex; justify-content: space-around; align-items: center;
            padding: 10px; margin-top: auto;
        }
        .dial {
            width: 60px; height: 30px; background: #f8fafc; border-radius: 30px 30px 0 0;
            border: 2px solid var(--neon-blue); border-radius: 12px; position: relative; overflow: hidden;
        }
        .needle {
            width: 2px; height: 25px; background: red; position: absolute;
            bottom: 0; left: 50%; transform-origin: bottom center;
            animation: needleMove 2s infinite alternate;
        }
        @keyframes needleMove { from {transform: rotate(-80deg);} to {transform: rotate(80deg);} }

        /* Victory */
        #victory-screen {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.95); z-index: 2000; display: none;
            flex-direction: column; align-items: center; justify-content: center;
        }
        .chest { font-size: 6rem; cursor: pointer; animation: shake 1s infinite; margin-bottom: 20px; z-index: 2001; }
        .chest.open { animation: none; transform: scale(1.2); }
        @keyframes shake { 0%, 100% {transform: rotate(0);} 25% {transform: rotate(-10deg);} 75% {transform: rotate(10deg);} }
        canvas#confetti { position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none; z-index: 2000; }

        /* Keyboard */
        .keyboard { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-top: 10px; }
        .k-btn { background: #333; padding: 10px; text-align: center; border-radius: 4px; cursor: pointer; }
        .k-btn:active { background: var(--neon-blue); color: black; }
        .wrong-btn { border: 2px solid red; }
        .wrong-btn:active { background: red; color: var(--text-main); }

    </style>
</head>
<body>

    <div id="intro-screen">
        <div class="map-scroll">
            <div class="map-content">
                <h1 class="ink-title">HARTA E<br>FIZIKËS 10</h1>
                <p>Nis udhëtimin drejt thesarit!</p>
                <button class="ink-btn" onclick="startAdventure()">HAP HARTËN</button>
            </div>
        </div>
    </div>

    <div id="game-container">
        <div class="island-nav">
            <div style="position:relative; width:100%; display:flex; justify-content:space-between;">
                <div class="ship" id="ship">⛵</div>
                <div class="island active" id="isl-1">1</div>
                <div class="island" id="isl-2">2</div>
                <div class="island" id="isl-3">3</div>
                <div class="island" id="isl-4">4</div>
            </div>
        </div>

        <div class="panel active" id="stg-1">
            <h2>ISHULLI 1: LABORATORI</h2>
            <p style="text-align:center; font-size:0.9rem;">Krijo grafikun e lëvizjes.</p>
            <div style="display:flex; gap:10px; margin:10px 0;">
                <button class="btn" onclick="runSim('uniform')">Lëvizje e Njëtrajtshme</button>
                <button class="btn" onclick="runSim('varied')">Lëvizje e Ndryshueshme</button>
            </div>
            <div class="road"><div class="car" id="sim-car">🏎️</div></div>
            <div class="graph-area" id="sim-graph"><canvas id="cvs-graph"></canvas></div>
            <button class="btn" id="btn-next-1" style="display:none; border-color:var(--neon-green);" onclick="goStage(2)">VAZHDO ➡</button>
        </div>

        <div class="panel" id="stg-2">
            <h2>ISHULLI 2: KUIZI</h2>
            <div id="quiz-container"></div>
            
            <div class="kinematika-visual">
                <div class="kv-title">KINEMATIKA</div>
                <div class="kv-formula">
                    <span>V = </span>
                    <span class="frac"><span>Δx</span><span>Δt</span></span>
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <span>a = </span>
                    <span class="frac"><span>Δv</span><span>Δt</span></span>
                </div>
                <div class="kv-axis"></div>
                <div class="kv-object"></div>
                <div class="kv-vector"></div>
                <div class="kv-info">Lëvizje drejtvizore me nxitim konstant</div>
            </div>
        </div>

        <div class="panel" id="stg-3">
            <h2>ISHULLI 3: ANALIZA E THELLË</h2>
            <canvas id="math-graph" style="width:100%; height:120px; background:#000; border:1px solid #fff; margin-bottom:10px;"></canvas>

            <div class="step-box active" id="step-1">
                <p>1. Emërto lëvizjen (0-5s):</p>
                <div style="display:flex; gap:5px;">
                    <button class="btn" onclick="wrongChoice(1)">E Njëtrajtshme</button>
                    <button class="btn" onclick="rightChoice(1)">Njëtrajtësisht e Ndryshueshme</button>
                </div>
                <p id="msg-1" style="color:var(--neon-pink); font-size:0.8rem;"></p>
            </div>

            <div class="step-box" id="step-2" style="display:none;">
                <p>2. Gjej nxitimin (a): <span class="star-hint" onclick="toggleHint(1)">🌟</span></p>
                <p id="hint-text-1" class="hint-text">Formula është thyesë: Ndryshimi i shpejtësisë përmbi kohën.</p>
                
                <div class="math-board" id="board-1">
                    a = <div class="slot active" id="slot-1" onclick="setSlot('slot-1')">?</div>
                </div>
                <div class="keyboard" id="kb-1">
                    <div class="k-btn" onclick="typeKey('Δv')">Δv</div>
                    <div class="k-btn" onclick="typeKey('Δt')">Δt</div>
                    <div class="k-btn" onclick="typeKey('6')">6</div>
                    <div class="k-btn" onclick="typeKey('5')">5</div>
                    <div class="k-btn" style="grid-column: span 2; background:var(--neon-purple);" onclick="addFraction()">[ ■ / ■ ]</div>
                    <div class="k-btn" onclick="typeKey('1.2 m/s^2')">1.2 m/s²</div>
                    <div class="k-btn" style="color:red" onclick="clearSlot()">C</div>
                    <div class="k-btn wrong-btn" onclick="alert('Gabim! Provo përsëri.')">0.8 m/s²</div>
                    <div class="k-btn" style="background:var(--neon-green); color:black;" onclick="checkCalc()">OK</div>
                </div>
                <p id="calc-msg" style="color:var(--neon-pink); font-size:0.8rem;"></p>
            </div>

            <div class="step-box" id="step-3" style="display:none;">
                <p>3. Emërto lëvizjen (5-10s):</p>
                <div style="display:flex; gap:5px;">
                    <button class="btn" onclick="rightChoice(2)">E Njëtrajtshme</button>
                    <button class="btn" onclick="wrongChoice(2)">E Ndryshueshme</button>
                </div>
                <p id="msg-2" style="color:var(--neon-pink); font-size:0.8rem;"></p>
            </div>

            <div class="step-box" id="step-4" style="display:none;">
                <p>4. Sa është nxitimi këtu? <span class="star-hint" onclick="toggleHint(2)">🌟</span></p>
                <p id="hint-text-2" class="hint-text">Nëse shpejtësia nuk ndryshon, a është zero.</p>
                <div style="display:flex; gap:5px;">
                    <button class="btn" onclick="finishMath(0)">a = 0</button>
                    <button class="btn" onclick="finishMath(1)">a > 0</button>
                </div>
            </div>
            
            <button class="btn" id="btn-next-3" style="display:none; border-color:var(--neon-green); margin-top:10px;" onclick="goStage(4)">FINALE ➡</button>
        </div>

        <div class="panel" id="stg-4">
            <h2>ISHULLI 4: MBLIDH 10 FORMULA TË SAKTA</h2>
            <canvas id="game-cvs" style="width:100%; height:250px; background:#000; border:2px solid var(--neon-blue);"></canvas>
            
            <div class="dashboard">
                <div style="color:var(--neon-blue); font-size:0.8rem;">SCORE</div>
                <div class="dial"><div class="needle"></div></div>
                <div style="display:flex; gap:10px;">
                    <button class="k-btn" style="padding:15px;" ontouchstart="move(-1)" ontouchend="move(0)" onmousedown="move(-1)" onmouseup="move(0)">⬅</button>
                    <button class="k-btn" style="padding:15px;" ontouchstart="move(1)" ontouchend="move(0)" onmousedown="move(1)" onmouseup="move(0)">➡</button>
                </div>
            </div>
            <button class="btn" onclick="startGame()">NIS LOJËN</button>
        </div>
    </div>

    <div id="victory-screen">
        <canvas id="confetti"></canvas>
        <div class="chest" id="chest" onclick="openChest()">🎁</div>
        <h1 id="vic-title" style="opacity:0; color:gold; text-shadow:0 0 20px gold; font-family:'Cinzel Decorative'; margin-top:20px;">TË LUMTË!</h1>
        <p id="vic-sub" style="opacity:0;">Ke fituar thesarin e dijës!</p>
        <button class="ink-btn" style="margin-top:30px; border-color: var(--text-main); color: var(--text-main);" onclick="location.reload()">LUAJ PËRSËRI</button>
    </div>

    <script>
        // --- NAVIGATION ---
        function startAdventure() {
            document.getElementById('intro-screen').style.display = 'none';
            document.getElementById('game-container').style.display = 'flex';
        }

        function goStage(n) {
            if(n === 5) {
                document.getElementById('game-container').style.display = 'none';
                document.getElementById('victory-screen').style.display = 'flex';
                return;
            }

            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            document.getElementById('stg-' + n).classList.add('active');
            
            for(let i=1; i<n; i++) document.getElementById('isl-'+i).classList.add('done');
            document.getElementById('isl-'+n).classList.add('active');
            
            const ship = document.getElementById('ship');
            ship.style.left = ((n-1)*25 + 5) + '%';

            if(n===2) loadQuiz();
            if(n===3) initMath();
        }

        // --- STAGE 1: LAB ---
        const car = document.getElementById('sim-car');
        const scvs = document.getElementById('cvs-graph');
        const sctx = scvs.getContext('2d');
        let simInterval;

        function runSim(type) {
            clearInterval(simInterval);
            car.style.left='0'; document.getElementById('sim-graph').style.display='none';
            
            // Ndryshimet në shpejtësi për t'i bërë më të dallueshme
            let pos=0, spd = type==='uniform' ? 0.8 : 0; 
            
            simInterval = setInterval(()=>{
                if(type==='varied') spd += 0.02; // rritet dukshëm ngadalë por vazhdimisht
                pos += spd;
                car.style.left = Math.min(pos,90)+'%';
                if(pos>=90) { clearInterval(simInterval); drawSimGraph(type); }
            }, 20);
        }

        function drawSimGraph(type) {
            let b = document.getElementById('sim-graph');
            b.style.display='block';
            scvs.width = b.offsetWidth; scvs.height = b.offsetHeight;
            let w=scvs.width, h=scvs.height;

            sctx.fillStyle="#000"; sctx.fillRect(0,0,w,h);
            sctx.strokeStyle="#fff"; sctx.lineWidth=2;
            sctx.beginPath(); sctx.moveTo(30,10); sctx.lineTo(30,h-20); sctx.lineTo(w-10,h-20); sctx.stroke();
            sctx.fillStyle="#fff"; sctx.fillText("v (m/s)", 10,20); sctx.fillText("t (s)", w-30,h-10);
            
            sctx.strokeStyle="#00f3ff"; sctx.lineWidth=4; sctx.beginPath();
            let sy = type==='uniform'?h/2 : h-20;
            let ey = type==='uniform'?h/2 : 20;
            sctx.moveTo(30, sy); sctx.lineTo(w-20, ey); sctx.stroke();

            document.getElementById('btn-next-1').style.display='block';
        }

        // --- STAGE 2: QUIZ ---
        const qs = [
            {q:"Cila njësi mat nxitimin?", o:["m/s", "m/s²", "kg"], a:1},
            {q:"Nëse a=0, lëvizja është:", o:["E njëtrajtshme", "E ndryshueshme", "Nuk lëviz"], a:0},
            {q:"Grafiku v(t) për v=konstante është:", o:["Vijë e pjerrët", "Vijë horizontale", "Parabolë"], a:1},
            {q:"a = Δv / Δt tregon:", o:["Rrugën", "Shpejtësinë", "Nxitimin"], a:2},
            {q:"Shpejtësia është madhësi:", o:["Vektoriale", "Skalare", "Pa njësi"], a:0}
        ];
        let qi=0;

        function loadQuiz() {
            let c = document.getElementById('quiz-container');
            if(qi>=qs.length) {
                c.innerHTML = "<h3 style='color:var(--gold); text-align:center;'>KUIZI U PËRFUNDUA!</h3>";
                setTimeout(()=>goStage(3), 1500);
                return;
            }
            let q = qs[qi];
            c.innerHTML = \`<p style="margin-bottom:10px;">\${qi+1}. \${q.q}</p>\` +
                q.o.map((opt,i)=>\`<button class="btn" onclick="chkQuiz(\${i})">\${opt}</button>\`).join('');
        }
        function chkQuiz(i) {
            if(i===qs[qi].a) { qi++; loadQuiz(); }
            else alert("Gabim! Provo përsëri.");
        }

        // --- STAGE 3: MATH (STEPS) ---
        let activeSlot='slot-1';
        let mathStep=0; 

        function initMath() {
            let c = document.getElementById('math-graph');
            let x = c.getContext('2d');
            c.width=c.offsetWidth; c.height=120;
            x.strokeStyle="#fff"; x.moveTo(30,110); x.lineTo(c.width,110); x.moveTo(30,10); x.lineTo(30,110); x.stroke();
            x.strokeStyle="#bc13fe"; x.lineWidth=3; x.beginPath();
            x.moveTo(30,110); x.lineTo(c.width/2, 40); x.lineTo(c.width-30, 40); x.stroke();
            x.fillStyle="#fff"; x.fillText("6m/s", 35, 30); x.fillText("5s", c.width/2, 100); x.fillText("10s", c.width-30, 100);
        }

        function toggleHint(id) {
            let h = document.getElementById('hint-text-'+id);
            h.style.display = h.style.display==='block'?'none':'block';
        }

        function wrongChoice(n) { document.getElementById(n===1?'msg-1':'msg-2').innerText = "Jo. Shiko grafikun me kujdes."; }
        function rightChoice(n) {
            let msg = document.getElementById(n===1?'msg-1':'msg-2');
            msg.innerText = "SAKTË! ✅"; msg.style.color = "var(--neon-green)";
            if(n===1) document.getElementById('step-2').style.display='block';
            if(n===2) document.getElementById('step-4').style.display='block';
        }

        function setSlot(id) {
            if(document.querySelector('.slot.active')) document.querySelector('.slot.active').classList.remove('active');
            activeSlot=id;
            document.getElementById(id).classList.add('active');
        }
        function typeKey(v) {
            let el=document.getElementById(activeSlot);
            if(!el || el.classList.contains('filled')) return;
            if(el.innerText==='?') el.innerText=v; else el.innerText+=v;
        }
        function clearSlot() {
            let el=document.getElementById(activeSlot);
            if(el && !el.classList.contains('filled')) el.innerText='?';
        }
        function addFraction() {
            let el=document.getElementById(activeSlot);
            if(!el || el.classList.contains('filled')) return;
            let id = Date.now();
            el.innerHTML=\`<div style="display:inline-flex; flex-direction:column; vertical-align:middle; margin:0 5px;"><div class="slot" id="t-\${id}" onclick="event.stopPropagation(); setSlot('t-\${id}')">?</div><div style="border-top:1px solid var(--text-main);"></div><div class="slot" id="b-\${id}" onclick="event.stopPropagation(); setSlot('b-\${id}')">?</div></div>\`;
            el.classList.remove('slot','active');
            setSlot('t-'+id);
        }
        function checkCalc() {
            let msg = document.getElementById('calc-msg');
            let board = document.getElementById('board-1');
            if(mathStep===0) {
                if(board.innerHTML.includes('Δv') && board.innerHTML.includes('Δt')) {
                    msg.innerText = "Mirë. Tani zëvendëso numrat (6 dhe 5).";
                    mathStep++;
                    board.innerHTML += ' = <div class="slot" id="slot-sub" onclick="setSlot(\\'slot-sub\\')">?</div>';
                    setSlot('slot-sub');
                } else msg.innerText = "Përdor thyesën [■/■] dhe Δv, Δt.";
            } else if(mathStep===1) {
                if(board.innerText.includes('6') && board.innerText.includes('5')) {
                    msg.innerText = "Saktë. Rezultati?";
                    mathStep++;
                    board.innerHTML += ' = <div class="slot" id="slot-res" onclick="setSlot(\\'slot-res\\')">?</div>';
                    setSlot('slot-res');
                } else msg.innerText = "Krijo thyesë me 6 dhe 5.";
            } else if(mathStep===2) {
                if(document.getElementById('slot-res').innerText === '1.2' || document.getElementById('slot-res').innerText === '1.2 m/s^2') {
                    msg.innerText = "BRAVO! a = 1.2 m/s²";
                    msg.style.color="var(--neon-green)";
                    document.getElementById('step-3').style.display='block';
                    document.getElementById('kb-1').style.display='none';
                } else msg.innerText = "Sa bëjnë 6 pjesëtim për 5?";
            }
        }

        function finishMath(opt) {
            if(opt===0) {
                document.getElementById('btn-next-3').style.display='block';
                alert("Saktë! a=0.");
            } else alert("Gabim. Shpejtësia nuk ndryshon.");
        }

        // --- STAGE 4: GAME ---
        const gc = document.getElementById('game-cvs');
        const gx = gc.getContext('2d');
        let px=150, runG=false, items=[], gS=0, dir=0;

        const correctFormulas = [
            { pre: "V=", num: "Δx", den: "Δt" },
            { pre: "a=", num: "Δv", den: "Δt" },
            { text: "V=Vo+at" },
            { text: "V²-Vo²=2gh" },
            { text: "Δx=v•t" }
        ];

        const wrongFormulas = [
            { pre: "V=", num: "Δt", den: "Δx" },
            { pre: "a=", num: "V", den: "t²" },
            { pre: "Δx=", num: "v", den: "t" },
            { pre: "V=", num: "Vo-a", den: "t" },
            { text: "a=V•t" }
        ];

        function startGame() {
            if(runG) return;
            runG=true; gc.width=gc.offsetWidth; gc.height=250; px=gc.width/2; items=[]; gS=0;
            loop();
        }
        function move(d){dir=d;}
        
        function loop() {
            if(!runG) return;
            gx.clearRect(0,0,gc.width,gc.height);
            px += dir*5; if(px<0)px=0; if(px>gc.width-40)px=gc.width-40;
            
            gx.fillStyle="#00f3ff"; gx.fillRect(px, gc.height-20, 40, 20);

            if(Math.random()<0.02) {
                let isGood = Math.random()>0.5;
                let src = isGood ? correctFormulas : wrongFormulas;
                let form = src[Math.floor(Math.random()*src.length)];
                
                let obj = { x: Math.random()*(gc.width-80)+10, y: 0, g: isGood };
                if(form.num) {
                    obj.pre = form.pre; obj.num = form.num; obj.den = form.den;
                } else {
                    obj.text = form.text;
                }
                items.push(obj);
            }

            for(let i=0; i<items.length; i++) {
                let o = items[i]; o.y+=1.5; 
                
                gx.fillStyle = "#fff";
                gx.font = "14px monospace";
                
                if(o.num) {
                    let preW = gx.measureText(o.pre).width;
                    let numW = gx.measureText(o.num).width;
                    let denW = gx.measureText(o.den).width;
                    let fracW = Math.max(numW, denW);
                    
                    gx.fillText(o.pre, o.x, o.y);
                    gx.fillText(o.num, o.x + preW + (fracW-numW)/2, o.y - 8);
                    gx.fillRect(o.x + preW, o.y - 3, fracW, 1.5);
                    gx.fillText(o.den, o.x + preW + (fracW-denW)/2, o.y + 10);
                } else {
                    gx.fillText(o.text, o.x, o.y);
                }

                if(o.y>gc.height-30 && o.y<gc.height && o.x>px-30 && o.x<px+40) {
                    if(o.g) gS++; else gS--;
                    items.splice(i,1); i--;
                    if(gS>=10) { runG=false; goStage(5); }
                }
            }
            gx.fillStyle="#fff"; gx.fillText("Pikët: "+gS+"/10", 10, 20);
            requestAnimationFrame(loop);
        }

        // --- VICTORY ---
        function openChest() {
            document.getElementById('chest').innerText="🥇";
            document.getElementById('chest').classList.add('open');
            document.getElementById('vic-title').style.opacity=1;
            document.getElementById('vic-title').style.transition="opacity 1s";
            document.getElementById('vic-sub').style.opacity=1;
            document.getElementById('vic-sub').style.transition="opacity 1s 0.5s";
            
            const cc = document.getElementById('confetti');
            const cx = cc.getContext('2d');
            cc.width=window.innerWidth; cc.height=window.innerHeight;
            let parts=[];
            for(let i=0; i<100; i++) parts.push({x:Math.random()*cc.width, y:Math.random()*cc.height-cc.height, c:\`hsl(\${Math.random()*360},100%,50%)\`, s:Math.random()*5+5});
            function anim() {
                cx.clearRect(0,0,cc.width,cc.height);
                parts.forEach(p=>{
                    p.y+=3; if(p.y>cc.height) p.y=-10;
                    cx.fillStyle=p.c; cx.fillRect(p.x,p.y,p.s,p.s);
                });
                requestAnimationFrame(anim);
            }
            anim();
        }

        // ANIMIMI VISUAL KINEMATIKA
        let kvPos = 10;
        let kvV = 0.3;
        let kvA = 0.01;
        const kvObject = document.querySelector(".kv-object");
        const kvVector = document.querySelector(".kv-vector");

        function animateKV(){
            kvV += kvA;
            kvPos += kvV;
            kvObject.style.left = kvPos + "%";
            kvVector.style.left = kvPos + "%";
            kvVector.style.width = (40 + kvV*25) + "px";
            if(kvPos > 85){
                kvPos = 10;
                kvV = 0.3;
            }
            requestAnimationFrame(animateKV);
        }
        animateKV();
    </script>
</body>
</html>
`
  },
  {
    id: "impulsi-momenti",
    title: "Mësojmë Impulsin dhe Momentin",
    category: "Dinamika",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mësojmë Impulsin dhe Momentin - Pro Pixel Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #fdf6e3;
            --text-main: #5c6b73;
            --primary: #ffb5a7;
            --secondary: #fcd5ce;
            --accent: #f8edeb;
            --success: #a8dadc;
            --danger: #ffcad4;
            --border-color: #9d8189;
            --pixel-border: 4px solid var(--border-color);
            --pixel-shadow: 4px 4px 0px var(--border-color);
        }

        body {
            font-family: 'VT323', monospace;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            font-size: 1.2rem;
        }

        h1 {
            color: var(--border-color);
            text-transform: uppercase;
            text-shadow: 2px 2px 0px var(--primary);
            font-size: 3rem;
            margin-bottom: 5px;
            text-align: center;
        }

        .subtitle {
            font-size: 1.5rem;
            margin-bottom: 30px;
            color: #9d8189;
            text-align: center;
        }

        .game-container {
            width: 100%;
            max-width: 900px;
            background: var(--accent);
            border: var(--pixel-border);
            box-shadow: var(--pixel-shadow);
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .stats-bar {
            display: flex;
            justify-content: space-between;
            background: var(--secondary);
            border: var(--pixel-border);
            padding: 10px 20px;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .canvas-container {
            width: 100%;
            height: 350px;
            background: #e0e1dd;
            border: var(--pixel-border);
            position: relative;
            overflow: hidden;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .interface {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        @media (max-width: 768px) {
            .interface {
                grid-template-columns: 1fr;
            }
        }

        .panel {
            background: white;
            border: var(--pixel-border);
            padding: 20px;
            box-shadow: 2px 2px 0px var(--border-color);
        }

        .level-title {
            font-size: 1.8rem;
            color: var(--border-color);
            margin-top: 0;
            border-bottom: 2px dashed var(--border-color);
            padding-bottom: 10px;
        }

        .formula-box {
            background: var(--primary);
            color: white;
            padding: 10px;
            text-align: center;
            font-size: 1.5rem;
            border: 2px solid var(--border-color);
            margin: 15px 0;
            text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
        }

        .data-box {
            background: var(--secondary);
            padding: 10px;
            border: 2px solid var(--border-color);
            font-size: 1.3rem;
            margin-bottom: 15px;
        }

        input[type="number"] {
            width: 100%;
            padding: 10px;
            font-family: 'VT323', monospace;
            font-size: 1.5rem;
            border: var(--pixel-border);
            background: var(--bg-color);
            color: var(--text-main);
            box-sizing: border-box;
            margin-bottom: 15px;
            outline: none;
        }

        input[type="number"]:focus {
            background: white;
            border-color: var(--primary);
        }

        button {
            width: 100%;
            padding: 15px;
            font-family: 'VT323', monospace;
            font-size: 1.8rem;
            background: var(--success);
            color: var(--border-color);
            border: var(--pixel-border);
            box-shadow: var(--pixel-shadow);
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.1s;
        }

        button:hover {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px var(--border-color);
        }

        button:active {
            transform: translate(4px, 4px);
            box-shadow: 0px 0px 0px var(--border-color);
        }

        #feedback {
            margin-top: 15px;
            font-size: 1.5rem;
            text-align: center;
            min-height: 30px;
        }

        .overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(253, 246, 227, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10;
            display: none;
        }

        .overlay h2 {
            font-size: 4rem;
            color: var(--primary);
            text-shadow: 2px 2px 0px var(--border-color);
            margin: 0 0 20px 0;
        }

        .overlay button {
            width: auto;
            padding: 10px 40px;
        }
    </style>
</head>
<body>

    <h1>Impulsi & Momenti Pro</h1>
    <div class="subtitle">Laboratori Digjital i Fizikës - Edicioni Pastel Pixel</div>

    <div class="game-container">
        <div class="stats-bar">
            <div>Niveli: <span id="ui-level">1</span>/10</div>
            <div>Pikët: <span id="ui-score">0</span></div>
        </div>

        <div class="canvas-container">
            <canvas id="gameCanvas"></canvas>
            <div id="success-overlay" class="overlay">
                <h2>Saktë!</h2>
                <button onclick="nextLevel()">Vazhdo</button>
            </div>
            <div id="end-overlay" class="overlay">
                <h2>Misioni u Krye!</h2>
                <p style="font-size: 2rem; margin-bottom: 20px;">Pikët totale: <span id="final-score"></span></p>
                <button onclick="location.reload()">Luaj Përsëri</button>
            </div>
        </div>

        <div class="interface">
            <div class="panel">
                <h2 id="lvl-title" class="level-title">Titulli</h2>
                <p id="lvl-desc">Përshkrimi...</p>
                <div class="formula-box" id="lvl-formula">Formula</div>
                <div class="data-box" id="lvl-data">Të dhënat...</div>
            </div>

            <div class="panel">
                <label style="display: block; margin-bottom: 10px; font-size: 1.5rem;">Përgjigja Jote:</label>
                <input type="number" id="user-input" placeholder="Shkruaj vlerën..." step="any">
                <button onclick="checkAnswer()">Verifiko</button>
                <div id="feedback"></div>
            </div>
        </div>
    </div>

<script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    let level = 1;
    let score = 0;
    let animFrame = 0;
    let isAnimating = false;

    function resizeCanvas() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        draw();
    }
    window.addEventListener('resize', resizeCanvas);

    const levels = [
        {
            title: "1: Impulsi i Trupit",
            desc: "Një makinë ka masën 1200kg dhe lëviz me shpejtësi 20m/s. Sa është impulsi i saj (p)?",
            formula: "p = m × v",
            data: "m = 1200 kg | v = 20 m/s",
            goal: 24000,
            unit: "kg·m/s",
            type: "impulse"
        },
        {
            title: "2: Ruajtja e Impulsit",
            desc: "Sfera A (4kg, 6m/s) godet sferën B (2kg) që është në prehje. Pas goditjes ato lëvizin bashkë. Gjej shpejtësinë finale (V).",
            formula: "m1v1 + m2v2 = (m1+m2)V",
            data: "m1=4kg, v1=6 | m2=2kg, v2=0",
            goal: 4,
            unit: "m/s",
            type: "collision"
        },
        {
            title: "3: Momenti i Forcës",
            desc: "Për të balancuar një levë, një forcë prej 60N vendoset 2m larg qendrës. Sa duhet të jetë forca tjetër në distancë 1.5m?",
            formula: "F1 × d1 = F2 × d2",
            data: "F1=60N, d1=2m | d2=1.5m",
            goal: 80,
            unit: "N",
            type: "lever"
        },
        {
            title: "4: Impulsi i Forcës",
            desc: "Një lojtar godet topin me një forcë 150N për një kohë prej 0.2 sekonda. Sa është ndryshimi i impulsit (Δp)?",
            formula: "I = F × Δt = Δp",
            data: "F = 150 N | Δt = 0.2 s",
            goal: 30,
            unit: "kg·m/s",
            type: "kick"
        },
        {
            title: "5: Ekuilibri i Momenteve",
            desc: "Një dërrasë 4m e gjatë ka mbështetjen në mes. Një gur 10kg është në skajin e majtë (2m). Sa kg duhet të jetë guri në distancën 1m djathtas?",
            formula: "m1 × d1 = m2 × d2",
            data: "m1=10kg, d1=2m | d2=1m",
            goal: 20,
            unit: "kg",
            type: "lever"
        },
        {
            title: "6: Goditje Elastike",
            desc: "Sfera 1 (2kg, 5m/s) godet Sferën 2 (2kg, prehje). Sfera 1 ndalon. Sa është shpejtësia e Sferës 2?",
            formula: "m1v1 = m2v2'",
            data: "m1=2kg, v1=5m/s | m2=2kg",
            goal: 5,
            unit: "m/s",
            type: "collision_elastic"
        },
        {
            title: "7: Momenti i Inercisë",
            desc: "Një disk me masë 4kg dhe rreze 0.5m rrotullohet. Llogarit momentin e inercisë (I).",
            formula: "I = 1/2 × m × r²",
            data: "m = 4kg | r = 0.5m",
            goal: 0.5,
            unit: "kg·m²",
            type: "rotation"
        },
        {
            title: "8: Momenti Këndor",
            desc: "Një trup ka moment inercie 2 kg·m² dhe shpejtësi këndore 10 rad/s. Sa është momenti këndor (L)?",
            formula: "L = I × ω",
            data: "I = 2 kg·m² | ω = 10 rad/s",
            goal: 20,
            unit: "kg·m²/s",
            type: "rotation"
        },
        {
            title: "9: Forca e Frenimit",
            desc: "Një makinë 1000kg me shpejtësi 15m/s ndalon në 5 sekonda. Sa është forca e frenimit?",
            formula: "F × Δt = m × Δv",
            data: "m=1000kg, Δv=15m/s, Δt=5s",
            goal: 3000,
            unit: "N",
            type: "impulse"
        },
        {
            title: "10: Sfida Finale - Momenti",
            desc: "Një derë kërkon moment force 40 N·m për t'u hapur. Nëse e shtyn 0.8m larg menteshës, sa forcë duhet?",
            formula: "M = F × d",
            data: "M = 40 N·m | d = 0.8m",
            goal: 50,
            unit: "N",
            type: "lever"
        }
    ];

    function drawPixelRect(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);
    }

    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Background grid
        ctx.strokeStyle = "rgba(157, 129, 137, 0.1)";
        ctx.lineWidth = 1;
        for(let i=0; i<canvas.width; i+=20) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
        }
        for(let i=0; i<canvas.height; i+=20) {
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
        }

        const l = levels[level-1];
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        if (l.type === "lever") {
            // Vizatimi i Levës
            drawPixelRect(cx - 150, cy + 50, 300, 10, "#9d8189"); // Leva
            
            // Mbeshtetesja
            ctx.fillStyle = "#ffb5a7";
            ctx.beginPath();
            ctx.moveTo(cx, cy + 50);
            ctx.lineTo(cx - 20, cy + 90);
            ctx.lineTo(cx + 20, cy + 90);
            ctx.fill();
            ctx.stroke();

            // Peshat
            drawPixelRect(cx - 130, cy + 10 + (isAnimating ? Math.sin(animFrame/5)*10 : 0), 40, 40, "#a8dadc");
            drawPixelRect(cx + 90, cy + 10 - (isAnimating ? Math.sin(animFrame/5)*10 : 0), 40, 40, "#ffcad4");

        } else if (l.type === "impulse" || l.type === "kick") {
            // Vizatimi i Impulsit
            drawPixelRect(0, cy + 50, canvas.width, 20, "#9d8189"); // Rruga
            
            let xPos = 50 + (isAnimating ? animFrame * 5 : 0);
            if (xPos > canvas.width - 100) xPos = canvas.width - 100;
            
            drawPixelRect(xPos, cy + 10, 60, 40, "#a8dadc"); // Objekti
            
            // Efekti i shpejtesise
            if (isAnimating && xPos < canvas.width - 100) {
                ctx.fillStyle = "#ffcad4";
                ctx.fillRect(xPos - 20, cy + 20, 15, 5);
                ctx.fillRect(xPos - 35, cy + 30, 20, 5);
            }

        } else if (l.type === "collision" || l.type === "collision_elastic") {
            drawPixelRect(0, cy + 50, canvas.width, 20, "#9d8189"); // Rruga
            
            let x1 = cx - 150 + (isAnimating ? animFrame * 4 : 0);
            let x2 = cx + 50;
            
            if (x1 > x2 - 40) {
                x1 = x2 - 40;
                if (l.type === "collision") {
                    x2 += (animFrame * 4) - 200; // Levizin bashke
                    x1 = x2 - 40;
                } else {
                    x2 += (animFrame * 4) - 200; // Sfera 2 leviz
                }
            }
            
            drawPixelRect(x1, cy + 10, 40, 40, "#a8dadc"); // Sfera 1
            drawPixelRect(x2, cy + 10, 40, 40, "#ffcad4"); // Sfera 2
            
        } else if (l.type === "rotation") {
            // Rrotullimi
            ctx.save();
            ctx.translate(cx, cy);
            if (isAnimating) ctx.rotate(animFrame * 0.1);
            
            ctx.fillStyle = "#fcd5ce";
            ctx.beginPath();
            ctx.arc(0, 0, 80, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = "#9d8189";
            ctx.beginPath();
            ctx.arc(0, 0, 10, 0, Math.PI*2);
            ctx.fill();
            
            // Shenje per te pare rrotullimin
            drawPixelRect(20, -10, 40, 20, "#a8dadc");
            
            ctx.restore();
        }
    }

    function checkAnswer() {
        const val = parseFloat(document.getElementById("user-input").value);
        const current = levels[level-1];
        const feedback = document.getElementById("feedback");

        if(Math.abs(val - current.goal) < 0.01) {
            feedback.style.color = "var(--success)";
            feedback.innerText = "Saktë! " + current.goal + " " + current.unit;
            score += 100;
            document.getElementById("ui-score").innerText = score;
            animateSuccess();
        } else {
            feedback.style.color = "#ff4d6d";
            feedback.innerText = "E gabuar. Provo përsëri!";
            score = Math.max(0, score - 10);
            document.getElementById("ui-score").innerText = score;
        }
    }

    function animateSuccess() {
        isAnimating = true;
        animFrame = 0;
        
        function step() {
            animFrame++;
            draw();
            if (animFrame < 60) {
                requestAnimationFrame(step);
            } else {
                isAnimating = false;
                document.getElementById("success-overlay").style.display = "flex";
            }
        }
        requestAnimationFrame(step);
    }

    function nextLevel() {
        document.getElementById("success-overlay").style.display = "none";
        if(level < levels.length) {
            level++;
            initLevel();
        } else {
            document.getElementById("final-score").innerText = score;
            document.getElementById("end-overlay").style.display = "flex";
        }
    }

    function initLevel() {
        const l = levels[level-1];
        document.getElementById("ui-level").innerText = level;
        document.getElementById("lvl-title").innerText = l.title;
        document.getElementById("lvl-desc").innerText = l.desc;
        document.getElementById("lvl-formula").innerText = l.formula;
        document.getElementById("lvl-data").innerText = l.data;
        document.getElementById("user-input").value = "";
        document.getElementById("feedback").innerText = "";
        animFrame = 0;
        isAnimating = false;
        setTimeout(resizeCanvas, 100);
    }

    window.onload = initLevel;
</script>
</body>
</html>
`
  },
  {
    id: "energy-modul",
    title: "Energjia Fizike: Moduli 10",
    category: "Energjia",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Energjia Fizike: Moduli 10 - Pro Pixel Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #fdf6e3;
            --text-main: #5c6b73;
            --primary: #bde0fe;
            --secondary: #a2d2ff;
            --accent: #f8edeb;
            --success: #cdb4db;
            --danger: #ffc8dd;
            --border-color: #718096;
            --pixel-border: 4px solid var(--border-color);
            --pixel-shadow: 4px 4px 0px var(--border-color);
        }

        body {
            font-family: 'VT323', monospace;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            font-size: 1.2rem;
        }

        h1 {
            color: var(--border-color);
            text-transform: uppercase;
            text-shadow: 2px 2px 0px var(--primary);
            font-size: 3rem;
            margin-bottom: 5px;
            text-align: center;
        }

        .subtitle {
            font-size: 1.5rem;
            margin-bottom: 30px;
            color: #718096;
            text-align: center;
        }

        .game-container {
            width: 100%;
            max-width: 900px;
            background: var(--accent);
            border: var(--pixel-border);
            box-shadow: var(--pixel-shadow);
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .stats-bar {
            display: flex;
            justify-content: space-between;
            background: var(--secondary);
            border: var(--pixel-border);
            padding: 10px 20px;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .canvas-container {
            width: 100%;
            height: 350px;
            background: #e2e8f0;
            border: var(--pixel-border);
            position: relative;
            overflow: hidden;
        }

        canvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .interface {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        @media (max-width: 768px) {
            .interface {
                grid-template-columns: 1fr;
            }
        }

        .panel {
            background: white;
            border: var(--pixel-border);
            padding: 20px;
            box-shadow: 2px 2px 0px var(--border-color);
        }

        .level-title {
            font-size: 1.8rem;
            color: var(--border-color);
            margin-top: 0;
            border-bottom: 2px dashed var(--border-color);
            padding-bottom: 10px;
        }

        .formula-box {
            background: var(--primary);
            color: var(--text-main);
            padding: 10px;
            text-align: center;
            font-size: 1.5rem;
            border: 2px solid var(--border-color);
            margin: 15px 0;
            text-shadow: 1px 1px 0px rgba(255,255,255,0.5);
        }

        .data-box {
            background: var(--secondary);
            padding: 10px;
            border: 2px solid var(--border-color);
            font-size: 1.3rem;
            margin-bottom: 15px;
        }

        input[type="number"] {
            width: 100%;
            padding: 10px;
            font-family: 'VT323', monospace;
            font-size: 1.5rem;
            border: var(--pixel-border);
            background: var(--bg-color);
            color: var(--text-main);
            box-sizing: border-box;
            margin-bottom: 15px;
            outline: none;
        }

        input[type="number"]:focus {
            background: white;
            border-color: var(--primary);
        }

        button {
            width: 100%;
            padding: 15px;
            font-family: 'VT323', monospace;
            font-size: 1.8rem;
            background: var(--success);
            color: var(--border-color);
            border: var(--pixel-border);
            box-shadow: var(--pixel-shadow);
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.1s;
        }

        button:hover {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px var(--border-color);
        }

        button:active {
            transform: translate(4px, 4px);
            box-shadow: 0px 0px 0px var(--border-color);
        }

        #feedback {
            margin-top: 15px;
            font-size: 1.5rem;
            text-align: center;
            min-height: 30px;
        }

        .overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(253, 246, 227, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10;
            display: none;
        }

        .overlay h2 {
            font-size: 4rem;
            color: var(--primary);
            text-shadow: 2px 2px 0px var(--border-color);
            margin: 0 0 20px 0;
        }

        .overlay button {
            width: auto;
            padding: 10px 40px;
        }
    </style>
</head>
<body>

    <h1>Energjia Fizike Pro</h1>
    <div class="subtitle">Moduli 10 - Edicioni Pastel Pixel</div>

    <div class="game-container">
        <div class="stats-bar">
            <div>Niveli: <span id="ui-level">1</span>/10</div>
            <div>Pikët: <span id="ui-score">0</span></div>
        </div>

        <div class="canvas-container">
            <canvas id="gameCanvas"></canvas>
            <div id="success-overlay" class="overlay">
                <h2>Saktë!</h2>
                <button onclick="nextLevel()">Vazhdo</button>
            </div>
            <div id="end-overlay" class="overlay">
                <h2>Misioni u Krye!</h2>
                <p style="font-size: 2rem; margin-bottom: 20px;">Pikët totale: <span id="final-score"></span></p>
                <button onclick="location.reload()">Luaj Përsëri</button>
            </div>
        </div>

        <div class="interface">
            <div class="panel">
                <h2 id="lvl-title" class="level-title">Titulli</h2>
                <p id="lvl-desc">Përshkrimi...</p>
                <div class="formula-box" id="lvl-formula">Formula</div>
                <div class="data-box" id="lvl-data">Të dhënat...</div>
            </div>

            <div class="panel">
                <label style="display: block; margin-bottom: 10px; font-size: 1.5rem;">Përgjigja Jote:</label>
                <input type="number" id="user-input" placeholder="Shkruaj vlerën..." step="any">
                <button onclick="checkAnswer()">Verifiko</button>
                <div id="feedback"></div>
            </div>
        </div>
    </div>

<script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    let level = 1;
    let score = 0;
    let animFrame = 0;
    let isAnimating = false;

    function resizeCanvas() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        draw();
    }
    window.addEventListener('resize', resizeCanvas);

    const levels = [
        {
            title: "1: Energjia Potenciale",
            desc: "Llogarit Ep për një sferë në lartësi.",
            formula: "Ep = m × g × h",
            data: "m = 5 kg | h = 8 m | g = 10 m/s²",
            goal: 400,
            unit: "J",
            type: "potential"
        },
        {
            title: "2: Energjia Kinetike",
            desc: "Llogarit Ek për trupin në lëvizje.",
            formula: "Ek = 1/2 × m × v²",
            data: "m = 4 kg | v = 10 m/s",
            goal: 200,
            unit: "J",
            type: "kinetic"
        },
        {
            title: "3: Puna dhe Energjia",
            desc: "Sa është lartësia (h) nëse Ep = 600 J?",
            formula: "h = Ep / (m × g)",
            data: "Ep = 600 J | m = 3 kg | g = 10 m/s²",
            goal: 20,
            unit: "m",
            type: "potential"
        },
        {
            title: "4: Shpejtësia nga Energjia",
            desc: "Gjej shpejtësinë (v) duke përdorur Ek.",
            formula: "v = √(2Ek / m)",
            data: "Ek = 100 J | m = 2 kg",
            goal: 10,
            unit: "m/s",
            type: "kinetic"
        },
        {
            title: "5: Ruajtja e Energjisë",
            desc: "Gjej Ep nëse Ek = 150J dhe Etot = 500J.",
            formula: "Etot = Ek + Ep",
            data: "Etot = 500 J | Ek = 150 J",
            goal: 350,
            unit: "J",
            type: "conservation"
        },
        {
            title: "6: Puna e Forcës",
            desc: "Një forcë 50N zhvendos trupin 4m. Sa është puna?",
            formula: "A = F × d",
            data: "F = 50 N | d = 4 m",
            goal: 200,
            unit: "J",
            type: "work"
        },
        {
            title: "7: Fuqia Mekanike",
            desc: "Një motor kryen punë 1000J në 5 sekonda. Sa është fuqia?",
            formula: "P = A / t",
            data: "A = 1000 J | t = 5 s",
            goal: 200,
            unit: "W",
            type: "power"
        },
        {
            title: "8: Energjia e Sustës",
            desc: "Një sustë me k=200 N/m ngjeshet 0.1m. Sa është energjia potenciale elastike?",
            formula: "Epe = 1/2 × k × x²",
            data: "k = 200 N/m | x = 0.1 m",
            goal: 1,
            unit: "J",
            type: "spring"
        },
        {
            title: "9: Rënia e Lirë",
            desc: "Një trup 2kg bie nga 5m. Sa është Ek para se të prekë tokën? (g=10)",
            formula: "Ek = Ep = mgh",
            data: "m = 2 kg | h = 5 m",
            goal: 100,
            unit: "J",
            type: "potential"
        },
        {
            title: "10: Sfida e Energjisë",
            desc: "Një makinë 1000kg rrit shpejtësinë nga 10m/s në 20m/s. Sa punë u krye?",
            formula: "A = ΔEk = 1/2m(v2² - v1²)",
            data: "m=1000kg, v1=10, v2=20",
            goal: 150000,
            unit: "J",
            type: "kinetic"
        }
    ];

    function drawPixelRect(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);
    }

    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Background grid
        ctx.strokeStyle = "rgba(113, 128, 150, 0.1)";
        ctx.lineWidth = 1;
        for(let i=0; i<canvas.width; i+=20) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
        }
        for(let i=0; i<canvas.height; i+=20) {
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
        }

        const l = levels[level-1];
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        if (l.type === "potential") {
            drawPixelRect(0, canvas.height - 40, canvas.width, 40, "#718096"); // Toka
            
            let yPos = 40 + (isAnimating ? animFrame * 4 : 0);
            if (yPos > canvas.height - 80) yPos = canvas.height - 80;
            
            drawPixelRect(cx - 20, yPos, 40, 40, "#bde0fe"); // Trupi
            
            // Vija e lartesise
            ctx.strokeStyle = "#a2d2ff";
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(cx + 40, 40);
            ctx.lineTo(cx + 40, canvas.height - 40);
            ctx.stroke();
            ctx.setLineDash([]);

        } else if (l.type === "kinetic" || l.type === "work") {
            drawPixelRect(0, cy + 50, canvas.width, 20, "#718096"); // Rruga
            
            let xPos = 50 + (isAnimating ? animFrame * 5 : 0);
            if (xPos > canvas.width - 100) xPos = canvas.width - 100;
            
            drawPixelRect(xPos, cy + 10, 60, 40, "#cdb4db"); // Objekti
            
            if (isAnimating && xPos < canvas.width - 100) {
                ctx.fillStyle = "#ffc8dd";
                ctx.fillRect(xPos - 20, cy + 20, 15, 5);
                ctx.fillRect(xPos - 35, cy + 30, 20, 5);
            }

        } else if (l.type === "conservation") {
            // Nje lavjerres
            ctx.save();
            ctx.translate(cx, 20);
            
            let angle = Math.PI/4;
            if (isAnimating) {
                angle = (Math.PI/4) * Math.cos(animFrame * 0.1);
            }
            
            ctx.rotate(angle);
            
            drawPixelRect(-2, 0, 4, 150, "#718096"); // Fija
            drawPixelRect(-20, 150, 40, 40, "#bde0fe"); // Sfera
            
            ctx.restore();
            
            drawPixelRect(cx - 50, 10, 100, 10, "#718096"); // Tavani
            
        } else if (l.type === "spring") {
            drawPixelRect(0, cy + 50, canvas.width, 20, "#718096"); // Rruga
            drawPixelRect(20, cy - 50, 20, 100, "#718096"); // Muri
            
            let springLen = 150;
            if (isAnimating) {
                springLen = 150 + Math.sin(animFrame * 0.2) * 50;
            }
            
            // Susta (zig-zag)
            ctx.strokeStyle = "#a2d2ff";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(40, cy + 30);
            for(let i=1; i<=10; i++) {
                ctx.lineTo(40 + (springLen/10)*i, cy + 30 + (i%2===0 ? 15 : -15));
            }
            ctx.stroke();
            
            drawPixelRect(40 + springLen, cy + 10, 40, 40, "#cdb4db"); // Trupi
            
        } else if (l.type === "power") {
            // Nje motor qe ngre nje peshe
            drawPixelRect(cx - 30, 20, 60, 40, "#bde0fe"); // Motori
            
            let yPos = canvas.height - 80 - (isAnimating ? animFrame * 2 : 0);
            if (yPos < 60) yPos = 60;
            
            drawPixelRect(cx - 2, 60, 4, yPos - 60, "#718096"); // Litari
            drawPixelRect(cx - 20, yPos, 40, 40, "#ffc8dd"); // Pesha
        }
    }

    function checkAnswer() {
        const val = parseFloat(document.getElementById("user-input").value);
        const current = levels[level-1];
        const feedback = document.getElementById("feedback");

        if(Math.abs(val - current.goal) < 0.1) {
            feedback.style.color = "var(--success)";
            feedback.innerText = "Saktë! " + current.goal + " " + current.unit;
            score += 100;
            document.getElementById("ui-score").innerText = score;
            animateSuccess();
        } else {
            feedback.style.color = "#ff4d6d";
            feedback.innerText = "E gabuar. Provo përsëri!";
            score = Math.max(0, score - 10);
            document.getElementById("ui-score").innerText = score;
        }
    }

    function animateSuccess() {
        isAnimating = true;
        animFrame = 0;
        
        function step() {
            animFrame++;
            draw();
            if (animFrame < 60) {
                requestAnimationFrame(step);
            } else {
                isAnimating = false;
                document.getElementById("success-overlay").style.display = "flex";
            }
        }
        requestAnimationFrame(step);
    }

    function nextLevel() {
        document.getElementById("success-overlay").style.display = "none";
        if(level < levels.length) {
            level++;
            initLevel();
        } else {
            document.getElementById("final-score").innerText = score;
            document.getElementById("end-overlay").style.display = "flex";
        }
    }

    function initLevel() {
        const l = levels[level-1];
        document.getElementById("ui-level").innerText = level;
        document.getElementById("lvl-title").innerText = l.title;
        document.getElementById("lvl-desc").innerText = l.desc;
        document.getElementById("lvl-formula").innerText = l.formula;
        document.getElementById("lvl-data").innerText = l.data;
        document.getElementById("user-input").value = "";
        document.getElementById("feedback").innerText = "";
        animFrame = 0;
        isAnimating = false;
        setTimeout(resizeCanvas, 100);
    }

    window.onload = initLevel;
</script>
</body>
</html>
`
  },
  {
    id: "zhvendosja-quiz",
    title: "Zhvendosja",
    category: "Kinematika",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zhvendosja - Pastel Edition</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #fdf6e3;
            --text-main: #5c6b73;
            --primary: #ffb5a7;
            --secondary: #fcd5ce;
            --accent: #f8edeb;
            --success: #a8dadc;
            --danger: #ffcad4;
            --border-color: #9d8189;
        }

        body, html {
            margin: 0; padding: 0; height: 100%;
            font-family: 'Nunito', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            width: 100%; height: 100vh;
            display: flex; justify-content: center; align-items: center;
            padding: 20px;
            box-sizing: border-box;
        }

        .card {
            width: 100%; max-width: 600px;
            background: white;
            border: 4px solid var(--border-color);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 8px 8px 0px var(--secondary);
            position: relative;
        }

        /* Screens */
        .screen { display: none; text-align: center; }
        .screen.active { display: block; animation: fadeIn 0.5s ease; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* Typography */
        h1 { font-size: 2.5rem; color: var(--border-color); margin-bottom: 10px; }
        p { font-size: 1.2rem; }
        
        /* Buttons */
        .btn-game {
            background: var(--primary);
            border: 3px solid var(--border-color);
            border-radius: 15px;
            padding: 15px 40px;
            color: white;
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            font-size: 1.2rem;
            cursor: pointer;
            transition: 0.2s;
            margin-top: 20px;
            box-shadow: 4px 4px 0px var(--border-color);
        }
        .btn-game:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0px var(--border-color); }
        .btn-game:active { transform: translate(4px, 4px); box-shadow: 0px 0px 0px var(--border-color); }

        /* Math Keyboard & Input */
        .math-display {
            background: var(--accent);
            border: 3px solid var(--border-color);
            border-radius: 15px; padding: 20px; margin: 15px 0; min-height: 50px;
            font-size: 1.5rem; display: flex; align-items: center; justify-content: center;
        }
        
        .math-keyboard {
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
            background: var(--secondary); padding: 15px; border-radius: 20px;
            border: 3px solid var(--border-color);
        }
        .m-key {
            background: white; border: 2px solid var(--border-color);
            color: var(--text-main); padding: 12px; border-radius: 10px; cursor: pointer;
            font-weight: bold; font-size: 1.1rem; transition: 0.1s;
            box-shadow: 2px 2px 0px var(--border-color);
        }
        .m-key:active { transform: translate(2px, 2px); box-shadow: 0px 0px 0px var(--border-color); }
        .m-key.op { background: var(--primary); color: white; }

        /* Options */
        .option-box {
            background: white; border: 3px solid var(--border-color);
            padding: 15px; border-radius: 15px; margin: 10px 0; cursor: pointer;
            transition: 0.2s; font-weight: 600; text-align: left; font-size: 1.1rem;
            box-shadow: 3px 3px 0px var(--secondary);
        }
        .option-box:hover { transform: translate(2px, 2px); box-shadow: 1px 1px 0px var(--secondary); }
        .correct { background: var(--success) !important; border-color: var(--border-color) !important; color: white; }
        .wrong { background: var(--danger) !important; border-color: var(--border-color) !important; color: white; }

        /* Progress Bar */
        .progress-cont { width: 100%; height: 15px; background: var(--accent); border: 2px solid var(--border-color); border-radius: 10px; margin: 20px 0; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--success); width: 0%; transition: 0.5s; }

        .top-bar {
            display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: bold; color: var(--border-color);
        }
    </style>
</head>
<body>

<div class="container">
    <div class="card">
        <div id="start-screen" class="screen active">
            <div style="font-size: 4rem; margin-bottom: 10px;">📏</div>
            <h1>Kuic - Zhvendosja</h1>
            <p>Testo njohuritë e tua në Kinematikë!</p>
            <button class="btn-game" onclick="changeScreen('quiz-screen'); startTimer();">Fillo Misionin</button>
        </div>

        <div id="quiz-screen" class="screen">
            <div class="top-bar">
                <span>Pikët: <span id="score">0</span></span>
                <span id="timer">05:00</span>
            </div>
            <div class="progress-cont"><div class="progress-fill" id="p-fill"></div></div>
            
            <div id="question-area"></div>
            
            <button id="next-btn" class="btn-game" style="display: none; width: 100%;" onclick="nextQuestion()">Vazhdo</button>
        </div>

        <div id="result-screen" class="screen">
            <h1 id="res-title">Misioni u Krye!</h1>
            <div id="res-score" style="font-size: 4rem; margin: 20px 0; color: var(--primary); font-weight: bold;">0</div>
            <p id="res-msg" style="font-size: 1.5rem;"></p>
            <button class="btn-game" onclick="location.reload()">Rinis Misionin</button>
        </div>
    </div>
</div>

<script>
    const questions = [
        { q: "Çfarë paraqet zhvendosja (S ose Δx)?", type: "choice", options: ["Gjatësinë totale të rrugës", "Një madhësi skalare", "Vektor që bashkon fillimin me fundin", "Shpejtësinë mesatare"], correct: 2 },
        { q: "Cila është formula në lëvizje të njëtrajtshme?", type: "choice", options: ["Δx = v₀t + at²/2", "Δx = v · t", "v² = v₀² + 2aS", "h = v₀t + gt²"], correct: 1 },
        { q: "Njësia matëse e zhvendosjes në SI:", type: "choice", options: ["Sekonda", "Metër", "m/s", "Njuton"], correct: 1 },
        { q: "Llogarit: v₀=2 m/s, a=3 m/s², t=4 s. Gjej Δx.", type: "open", answer: "32" },
        { q: "Një makinë lëviz me 10 m/s për 5 s. Sa është zhvendosja?", type: "open", answer: "50" }
    ];

    let current = 0;
    let score = 0;
    let userMathInput = "";
    let timerInterval;

    function changeScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        if(id === 'quiz-screen') loadQuestion();
    }

    function loadQuestion() {
        const q = questions[current];
        const area = document.getElementById('question-area');
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('p-fill').style.width = \`\${(current / questions.length) * 100}%\`;
        
        let html = \`<h3 style="margin-bottom:20px; font-size: 1.4rem; color: var(--border-color);">\${q.q}</h3>\`;
        
        if(q.type === 'choice') {
            q.options.forEach((opt, i) => {
                html += \`<div class="option-box" onclick="checkChoice(\${i}, this)">\${opt}</div>\`;
            });
        } else {
            userMathInput = "";
            html += \`
                <div class="math-display" id="m-preview">Pritet përgjigja...</div>
                <div class="math-keyboard">
                    <button class="m-key" onclick="press('7')">7</button><button class="m-key" onclick="press('8')">8</button><button class="m-key" onclick="press('9')">9</button><button class="m-key op" onclick="press('DEL')">⌫</button>
                    <button class="m-key" onclick="press('4')">4</button><button class="m-key" onclick="press('5')">5</button><button class="m-key" onclick="press('6')">6</button><button class="m-key op" onclick="checkOpenAnswer()">OK</button>
                    <button class="m-key" onclick="press('1')">1</button><button class="m-key" onclick="press('2')">2</button><button class="m-key" onclick="press('3')">3</button><button class="m-key" onclick="press('0')">0</button>
                </div>
            \`;
        }
        
        area.innerHTML = html;
        if (window.MathJax) MathJax.typeset();
    }

    window.press = (val) => {
        const prev = document.getElementById('m-preview');
        if(val === 'DEL') userMathInput = userMathInput.slice(0, -1);
        else userMathInput += val;
        
        prev.innerHTML = userMathInput || "Pritet përgjigja...";
    }

    window.checkOpenAnswer = () => {
        if (userMathInput === questions[current].answer) {
            score += 20;
            document.getElementById('m-preview').style.background = "var(--success)";
            document.getElementById('m-preview').style.color = "white";
        } else {
            document.getElementById('m-preview').style.background = "var(--danger)";
            document.getElementById('m-preview').style.color = "white";
            document.getElementById('m-preview').innerHTML = \`Gabim! E saktë: \${questions[current].answer}\`;
        }
        document.getElementById('score').innerText = score;
        document.getElementById('next-btn').style.display = 'block';
        // Disable keyboard
        document.querySelectorAll('.m-key').forEach(btn => btn.disabled = true);
    }

    window.checkChoice = (idx, el) => {
        if(document.querySelector('.correct') || document.querySelector('.wrong')) return;
        if(idx === questions[current].correct) {
            el.classList.add('correct');
            score += 20;
        } else {
            el.classList.add('wrong');
            // Trego te sakten
            document.querySelectorAll('.option-box')[questions[current].correct].classList.add('correct');
        }
        document.getElementById('score').innerText = score;
        document.getElementById('next-btn').style.display = 'block';
    }

    function nextQuestion() {
        current++;
        if(current < questions.length) loadQuestion();
        else {
            clearInterval(timerInterval);
            changeScreen('result-screen');
            document.getElementById('res-score').innerText = score;
            document.getElementById('res-msg').innerText = score >= 60 ? "Të Lumtë! Ke njohuri të shkëlqyera." : "Provo përsëri! Shkenca kërkon mund.";
        }
    }

    function startTimer() {
        let time = 300;
        timerInterval = setInterval(() => {
            time--;
            if (time < 0) {
                clearInterval(timerInterval);
                nextQuestion(); // Ose mbyll lojen
                return;
            }
            let m = Math.floor(time/60), s = time%60;
            document.getElementById('timer').innerText = \`\${m}:\${s < 10 ? '0'+s : s}\`;
        }, 1000);
    }
</script>

</body>
</html>
`
  },
  {
    id: "njutoni-levels",
    title: "Ligjet e Njutonit",
    category: "Dinamika",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ligjet e Njutonit - Pastel Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #ffb5a7;
            --secondary: #fcd5ce;
            --success: #a8dadc;
            --danger: #ffcad4;
            --warning: #f8edeb;
            --dark: #5c6b73;
            --glass: rgba(253, 246, 227, 0.95);
            --bg-color: #fdf6e3;
            --border-color: #9d8189;
        }

        * { box-sizing: border-box; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }

        body {
            margin: 0; padding: 0;
            font-family: 'Nunito', sans-serif;
            background: var(--bg-color);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            color: var(--dark);
        }

        /* KONTENIERI KRYESOR */
        #game-window {
            width: 90%;
            max-width: 1000px;
            height: 85vh;
            background: var(--glass);
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            box-shadow: 8px 8px 0px var(--secondary);
            border: 4px solid var(--border-color);
            position: relative;
            z-index: 10;
        }

        /* HEADER */
        .header {
            padding: 20px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 4px dashed var(--border-color);
        }

        .stat-badge {
            background: white;
            padding: 8px 15px;
            border-radius: 15px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 2px solid var(--border-color);
            box-shadow: 2px 2px 0px var(--secondary);
        }

        .progress-container { flex-grow: 1; margin: 0 30px; height: 20px; background: white; border-radius: 20px; overflow: hidden; border: 2px solid var(--border-color); }
        #fill { width: 0%; height: 100%; background: var(--success); transition: width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

        /* SCREENS */
        .screen { display: none; padding: 40px; height: 100%; overflow-y: auto; }
        .screen.active { display: flex; flex-direction: column; animation: slideIn 0.5s ease; }

        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* LAYOUTI I PYETJEVE */
        .question-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: start;
        }

        @media (max-width: 768px) { .question-layout { grid-template-columns: 1fr; } }

        /* ELEMENTET E DIZAJNIT */
        .bubble-card {
            background: white;
            padding: 25px;
            border-radius: 30px;
            border: 3px solid var(--border-color);
            box-shadow: 4px 4px 0px var(--secondary);
            margin-bottom: 20px;
            font-size: 1.3rem;
            line-height: 1.4;
            font-weight: 600;
        }

        .opt-btn {
            background: white;
            border: 3px solid var(--border-color);
            border-radius: 20px;
            padding: 18px 25px;
            margin-bottom: 12px;
            cursor: pointer;
            font-family: 'Nunito', sans-serif;
            font-size: 1.1rem;
            font-weight: 700;
            text-align: left;
            width: 100%;
            box-shadow: 3px 3px 0px var(--secondary);
            color: var(--dark);
        }

        .opt-btn:hover:not(.locked) { transform: translate(2px, 2px); box-shadow: 1px 1px 0px var(--secondary); }
        .opt-btn:active { transform: translate(3px, 3px); box-shadow: 0px 0px 0px var(--secondary); }

        .opt-btn.selected { border-color: var(--primary); background: var(--warning); }
        .opt-btn.correct { background: var(--success); color: white; animation: celebrate 0.4s ease; }
        .opt-btn.wrong { background: var(--danger); color: white; animation: shake 0.4s ease; }

        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
        @keyframes celebrate { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }

        .action-btn {
            background: var(--primary);
            color: white;
            border: 3px solid var(--border-color);
            padding: 15px 40px;
            border-radius: 25px;
            font-size: 1.2rem;
            font-weight: 800;
            cursor: pointer;
            margin-top: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 4px 4px 0px var(--border-color);
        }

        .action-btn:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0px var(--border-color); }

        /* VISUAL DEMO AREA */
        #demo-area {
            background: white;
            border-radius: 25px;
            height: 150px;
            position: relative;
            overflow: hidden;
            border: 3px dashed var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .ball {
            width: 50px; height: 50px;
            background: var(--primary);
            border-radius: 50%;
            position: absolute;
            border: 3px solid var(--border-color);
        }

        /* MAPA */
        .path-container { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 20px; }
        .node {
            width: 90px; height: 90px; border-radius: 30px;
            display: flex; align-items: center; justify-content: center;
            font-size: 2rem; font-weight: 800; cursor: pointer;
            color: white; transform: rotate(-5deg);
            border: 3px solid var(--border-color);
            box-shadow: 4px 4px 0px var(--secondary);
        }
        .node:hover:not(.locked) { transform: rotate(0deg) scale(1.1); }
        .node.locked { filter: grayscale(1); opacity: 0.4; cursor: not-allowed; }

        textarea {
            width: 100%; border-radius: 20px; padding: 20px; border: 3px solid var(--border-color);
            font-family: 'Nunito', sans-serif; font-size: 1.1rem; resize: none;
            box-shadow: inset 2px 2px 5px rgba(0,0,0,0.05);
        }
    </style>
</head>
<body>

    <div id="game-window">
        <div class="header" id="header" style="display: none;">
            <div class="stat-badge">❤️ <span id="lives">3</span></div>
            <div class="progress-container"><div id="fill"></div></div>
            <div class="stat-badge" style="color: #f39c12;">⭐ <span id="xp">0</span></div>
        </div>

        <div id="home-screen" class="screen active" style="text-align:center; justify-content: center;">
            <h1 style="font-size: 3.5rem; margin-bottom: 0; color: var(--border-color);">Ligjet e Njutonit</h1>
            <p style="font-size: 1.4rem; color: var(--dark);">Zbuloni sekretet e lëvizjes!</p>
            <div style="font-size: 8rem; margin: 30px;">🍎</div>
            <button class="action-btn" onclick="showMap()">Nis Udhëtimin</button>
        </div>

        <div id="map-screen" class="screen">
            <h2 style="text-align:center; font-size: 2.5rem; color: var(--border-color);">Harta e Njutonit</h2>
            <div class="path-container">
                <div class="node" style="background: var(--primary);" onclick="startLevel(1, 1)">1</div>
                <div style="width:6px; height:40px; background:var(--border-color);"></div>
                <div class="node locked" id="node-1-2" style="background: var(--primary);" onclick="startLevel(1, 2)">2</div>
                <div style="width:6px; height:40px; background:var(--border-color);"></div>
                <div class="node locked" id="node-2-1" style="background: var(--danger);" onclick="startLevel(2, 1)">3</div>
                <div style="width:6px; height:40px; background:var(--border-color);"></div>
                <div class="node locked" id="node-2-2" style="background: var(--danger);" onclick="startLevel(2, 2)">4</div>
                <div style="width:6px; height:40px; background:var(--border-color);"></div>
                <div class="node locked" id="node-3-1" style="background: var(--success);" onclick="startLevel(3, 1)">5</div>
                <div style="width:6px; height:40px; background:var(--border-color);"></div>
                <div class="node locked" id="node-3-2" style="background: var(--success);" onclick="startLevel(3, 2)">6</div>
            </div>
        </div>

        <div id="q-screen" class="screen">
            <div class="question-layout">
                <div class="left-panel">
                    <div id="demo-area">
                        <div id="ball" class="ball"></div>
                        <p id="visual-text" style="color:#999; font-weight:600;"></p>
                    </div>
                    <div id="q-text" class="bubble-card"></div>
                    <div id="feedback" style="padding:15px; border-radius:15px; font-weight:bold; text-align:center; display:none; border: 3px solid var(--border-color);"></div>
                </div>
                
                <div class="right-panel">
                    <div id="options-box"></div>
                    <div id="open-box" style="display:none;">
                        <textarea id="answer-in" rows="4" placeholder="Shkruaj shpjegimin tënd këtu..."></textarea>
                    </div>
                    <button id="next-btn" class="action-btn" style="width:100%" onclick="handleAction()">Kontrollo</button>
                    <button class="opt-btn" style="border:none; text-align:center; color: var(--dark); margin-top:10px; background: transparent; box-shadow: none;" onclick="showHint()">💡 Kam nevojë për ndihmë</button>
                </div>
            </div>
        </div>

        <div id="checkpoint-screen" class="screen" style="text-align:center; justify-content:center;">
            <div style="font-size:6rem;">🏆</div>
            <h1 style="font-size:3rem; color: var(--border-color);">Niveli u Krye!</h1>
            <div class="bubble-card">Të lumtë! Vazhdo kështu për të hapur sfidat e radhës.</div>
            <button class="action-btn" onclick="showMap()">Kthehu tek Harta</button>
        </div>
    </div>

    <script>
        const levels = {
            "1-1": { type: "mcq", questions: [
                { q: "Ligji i Parë i Njutonit thotë se:", opts: ["Ndryshon shpejtësinë pa forcë", "Nëse rezultantja është zero, trupi ruan qetësinë ose lëvizjen e njëtrajtshme", "Trupi ndalon pa forcë", "Forcat janë të pabarabarta"], c: 1, hint: "Mendo për Inercinë." },
                { q: "Kur rezultantja e forcave mbi një trup është zero, atëherë:", opts: ["Trupi akseleron", "Forcat janë të barabarta dhe kemi baraspeshë", "Ndryshon drejtim", "Ndalohet menjëherë"], c: 1, hint: "Forcat thjeshtohen." },
                { q: "Çfarë quhet gjendja kur mbi një trup nuk vepron asnjë forcë?", opts: ["Nxitim konstant", "Baraspesh e masave", "Gjendje prehje ose lëvizje drejtvijzore të njëtrajtshme", "Lëvizje e përshpejtuar"], c: 2, hint: "Trupi mbetet siç ishte." }
            ]},
            "1-2": { type: "open", questions: [
                { q: "Jep një shembull nga jeta që tregon Ligjin e Parë.", c: "Kur makina ndalon papritur, ne lëvizim përpara.", hint: "Inercia në makinë." },
                { q: "Nëse një kuti pa fërkim nuk shtyhet, çfarë ndodh?", c: "Mbetet në prehje.", hint: "Pa forcë = Pa lëvizje." },
                { q: "Shpjego çfarë do të thotë 'baraspeshë e forcave'.", c: "Rezultantja e forcave është zero.", hint: "Shuma e forcave." }
            ]},
            "2-1": { type: "mcq", questions: [
                { q: "Ligji i Dytë thotë se:", opts: ["Shpejtësia rritet me forcën", "Nxitimi është në përpjesëtim të drejtë me forcën dhe të zhdrejtë me masën", "Nxitimi nuk varet nga forca", "F = m + a"], c: 1, hint: "F = m * a" },
                { q: "Nëse masa dyfishohet dhe forca mbetet e njëjtë, nxitimi:", opts: ["Dyfishohet", "Zvogëlohet", "Nuk ndryshon", "Shkon në zero"], c: 1, hint: "Më shumë masë = Më pak nxitim." },
                { q: "Cila formulë është korrekte?", opts: ["F = m / a", "F = m · a", "a = F / m²", "F = a / m"], c: 1, hint: "Masa herë nxitim." }
            ]},
            "2-2": { type: "open", questions: [
                { q: "Masa = 5 kg, Forca = 20 N. Gjeni nxitimin.", c: "a = 20/5 = 4 m/s²", hint: "F pjesëtuar me m." },
                { q: "Shpjego lidhjen forcë-masë-nxitim.", c: "Sa më e madhe forca, aq më i madh nxitimi. Sa më e madhe masa, aq më i vogël nxitimi.", hint: "Sipas F=ma." }
            ]},
            "3-1": { type: "mcq", questions: [
                { q: "Ligji i Tretë thotë se:", opts: ["Forcat prekin vetëm tokën", "F₂₁ = -F₁₂", "Forcat janë në një drejtim", "Vepron vetëm rëndesa"], c: 1, hint: "Veprim-Kundërveprim." },
                { q: "Kur dy trupa ndërveprojnë, forcat e tyre:", opts: ["Janë të barabarta dhe me kahe të kundërt", "Njëra është më e madhe", "Bëhen një e vetme", "Zhduken"], c: 0, hint: "Shty murin, muri të shtyn ty." },
                { q: "Karakteristika e forcave të Ligjit të 3-të:", opts: ["Veprojnë mbi të njëjtin trup", "Janë të barabarta, të kundërta, veprojnë mbi DY trupa të ndryshëm", "Nuk kanë drejtim", "Janë gjithmonë zero"], c: 1, hint: "Arsyeja pse nuk baraspeshohen." }
            ]},
            "3-2": { type: "open", questions: [
                { q: "Jep një shembull të Ligjit të Tretë.", c: "Kur shtyjmë murin, muri na shtyn mbrapsht.", hint: "Mendo për notin." },
                { q: "Pse forcat nuk barazpeshohen në Ligjin e 3-të?", c: "Sepse veprojnë mbi dy trupa të ndryshëm.", hint: "A prekin të njëjtën gjë?" }
            ]}
        };

        let currentId = "1-1";
        let qIdx = 0;
        let lives = 3;
        let xp = 0;
        let state = "check"; 
        let unlocked = ["1-1"];
        let selected = null;

        function showMap() {
            hideAll();
            document.getElementById('map-screen').classList.add('active');
            document.getElementById('header').style.display = 'flex';
            unlocked.forEach(id => {
                const node = document.getElementById(\`node-\${id}\`);
                if (node) node.classList.remove('locked');
            });
        }

        function startLevel(w, l) {
            const id = \`\${w}-\${l}\`;
            if (!unlocked.includes(id)) return;
            currentId = id;
            qIdx = 0;
            loadQuestion();
        }

        function loadQuestion() {
            hideAll();
            document.getElementById('q-screen').classList.add('active');
            const data = levels[currentId];
            const q = data.questions[qIdx];
            
            document.getElementById('q-text').innerText = q.q;
            const feedback = document.getElementById('feedback');
            feedback.style.display = 'none';
            document.getElementById('next-btn').innerText = "Kontrollo";
            document.getElementById('next-btn').style.background = "var(--primary)";
            state = "check";
            selected = null;

            if (data.type === "mcq") {
                document.getElementById('options-box').style.display = 'block';
                document.getElementById('open-box').style.display = 'none';
                renderMCQ(q.opts);
            } else {
                document.getElementById('options-box').style.display = 'none';
                document.getElementById('open-box').style.display = 'block';
                document.getElementById('answer-in').value = '';
            }
            animateObject();
            updateStats();
        }

        function renderMCQ(opts) {
            const box = document.getElementById('options-box');
            box.innerHTML = '';
            opts.forEach((o, i) => {
                const b = document.createElement('button');
                b.className = 'opt-btn';
                b.innerHTML = o;
                b.onclick = () => { 
                    if(state === "check") {
                        document.querySelectorAll('.opt-btn').forEach(btn => btn.classList.remove('selected'));
                        b.classList.add('selected');
                        selected = i;
                    }
                };
                box.appendChild(b);
            });
        }

        function handleAction() {
            const data = levels[currentId];
            const q = data.questions[qIdx];
            const feedback = document.getElementById('feedback');

            if (state === "check") {
                if (data.type === "mcq" && selected === null) return;
                
                feedback.style.display = 'block';
                if (data.type === "mcq") {
                    const btns = document.querySelectorAll('.opt-btn');
                    btns.forEach(b => b.classList.add('locked'));
                    if (selected === q.c) {
                        btns[selected].classList.add('correct');
                        feedback.innerHTML = "SHKËLQYESHËM! ✨ +10 XP";
                        feedback.style.background = "var(--success)";
                        feedback.style.color = "white";
                        xp += 10;
                    } else {
                        btns[selected].classList.add('wrong');
                        btns[q.c].classList.add('correct');
                        feedback.innerHTML = "GABIM! ❌ -1 Jeta";
                        feedback.style.background = "var(--danger)";
                        feedback.style.color = "white";
                        lives--;
                    }
                } else {
                    feedback.innerHTML = \`<div style="text-align:left; font-size:1.1rem;">Përgjigja e sugjeruar: <br><i style="color:var(--dark)">\${q.c}</i></div>\`;
                    feedback.style.background = "var(--warning)";
                    feedback.style.color = "var(--dark)";
                    xp += 15;
                }
                
                state = "next";
                document.getElementById('next-btn').innerText = "Vazhdo";
                document.getElementById('next-btn').style.background = "var(--success)";
                updateStats();
                if (lives <= 0) { 
                    alert("Uops! Mbaruan jetët. Provo përsëri!"); 
                    location.reload(); 
                }
            } else {
                qIdx++;
                if (qIdx < data.questions.length) loadQuestion();
                else completeLevel();
            }
        }

        function animateObject() {
            const ball = document.getElementById('ball');
            ball.style.left = '0%';
            setTimeout(() => {
                ball.style.transition = 'left 3s cubic-bezier(0.4, 0, 0.2, 1)';
                ball.style.left = '85%';
            }, 100);
        }

        function showHint() {
            alert("Sugjerim: " + levels[currentId].questions[qIdx].hint);
        }

        function updateStats() {
            document.getElementById('lives').innerText = lives;
            document.getElementById('xp').innerText = xp;
            const total = levels[currentId].questions.length;
            document.getElementById('fill').style.width = ((qIdx) / total * 100) + "%";
        }

        function completeLevel() {
            const keys = Object.keys(levels);
            const currentIdx = keys.indexOf(currentId);
            if (currentIdx < keys.length - 1) {
                const nextId = keys[currentIdx + 1];
                if (!unlocked.includes(nextId)) unlocked.push(nextId);
                hideAll();
                document.getElementById('checkpoint-screen').classList.add('active');
            } else {
                alert("URIME! Ti i përfundove të gjitha!");
                location.reload();
            }
        }

        function hideAll() {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        }
    </script>
</body>
</html>
`
  },
  {
    id: "energy-battle-formula",
    title: "Beteja e Energjisë: Formulat",
    category: "Elektriciteti",
    type: "school",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Energy Master: Formula Battle - Pastel Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        :root {
            --bg-color: #fdf6e3;
            --text-main: #5c6b73;
            --primary: #ffb5a7;
            --secondary: #fcd5ce;
            --accent: #f8edeb;
            --success: #a8dadc;
            --danger: #ffcad4;
            --border-color: #9d8189;
            --team-a: #bde0fe;
            --team-b: #ffc8dd;
        }

        body {
            margin: 0; padding: 0; height: 100vh;
            font-family: 'Nunito', sans-serif;
            background: var(--bg-color); color: var(--text-main); overflow: hidden;
            display: flex; flex-direction: column;
        }

        /* HEADER */
        .header {
            background: white; padding: 15px;
            text-align: center; border-bottom: 4px dashed var(--border-color);
        }
        h1 { font-family: 'Nunito'; font-weight: 700; margin: 0; color: var(--border-color); text-transform: uppercase; }

        /* ARENA */
        .arena {
            display: flex; flex: 1; padding: 20px; gap: 20px;
        }

        .team-box {
            flex: 1; background: white; border: 4px solid var(--border-color);
            border-radius: 30px; display: flex; flex-direction: column; padding: 20px;
            position: relative; box-shadow: 8px 8px 0px var(--secondary);
        }

        .team-a { border-color: var(--team-a); box-shadow: 8px 8px 0px var(--team-a); }
        .team-b { border-color: var(--team-b); box-shadow: 8px 8px 0px var(--team-b); }

        .score-label { font-family: 'Nunito'; font-size: 1.5rem; margin-bottom: 10px; font-weight: bold; }

        /* Qendra e Pyetjeve */
        .question-card {
            background: var(--accent); color: var(--text-main); border-radius: 20px;
            padding: 20px; margin-bottom: 20px; text-align: center;
            min-height: 100px; display: flex; align-items: center; justify-content: center;
            font-weight: bold; font-size: 1.2rem; border: 2px solid var(--border-color);
        }

        /* Keyboard-et */
        .math-kb {
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
            background: var(--secondary); padding: 15px; border-radius: 15px;
            border: 2px solid var(--border-color);
        }

        .key {
            background: white; border: 2px solid var(--border-color); color: var(--text-main);
            padding: 12px; border-radius: 10px; cursor: pointer;
            font-family: 'Nunito'; font-size: 1.1rem; font-weight: bold; transition: 0.1s;
            box-shadow: 2px 2px 0px var(--border-color);
        }
        .key:active { transform: translate(2px, 2px); box-shadow: 0px 0px 0px var(--border-color); }
        .key.special { background: var(--primary); color: white; }

        .formula-display {
            background: white; padding: 15px; border-radius: 10px;
            margin-bottom: 15px; min-height: 40px; border: 2px solid var(--border-color);
            font-size: 1.4rem; color: var(--text-main); display: flex; align-items: center; justify-content: center;
        }

        /* Butonat e Energjise */
        .energy-selector {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 15px;
        }
        .energy-btn {
            padding: 10px; border-radius: 10px; border: 2px solid var(--border-color); cursor: pointer;
            font-weight: bold; text-transform: uppercase; background: white; color: var(--text-main);
            box-shadow: 2px 2px 0px var(--border-color); transition: 0.1s;
        }
        .energy-btn:active { transform: translate(2px, 2px); box-shadow: 0px 0px 0px var(--border-color); }

        /* Efektet */
        .correct { background: var(--success) !important; color: white !important; }
        .wrong { background: var(--danger) !important; color: white !important; }
        .hidden { display: none; }
    </style>
</head>
<body>

    <div class="header">
        <h1>Beteja e Energjisë: Sfida e Formulave</h1>
    </div>

    <div class="arena">
        <div class="team-box team-a" id="box-a">
            <div class="score-label" style="color: #6495ED;">GRUPI A: <span id="score-a">0</span></div>
            <div id="q-a" class="question-card">Shtyp "START MISIONIN"</div>
            
            <div id="controls-a" class="hidden">
                <div class="energy-selector">
                    <button class="energy-btn" onclick="checkType('a', 'Ek')">Kinetike</button>
                    <button class="energy-btn" onclick="checkType('a', 'Ep')">Potenciale</button>
                    <button class="energy-btn" onclick="checkType('a', 'Em')">Mekanike</button>
                </div>
                
                <div class="formula-display" id="display-a">Pritet formula...</div>
                
                <div class="math-kb">
                    <button class="key" onclick="typeKey('a','E')">E</button>
                    <button class="key" onclick="typeKey('a','k')">k</button>
                    <button class="key" onclick="typeKey('a','p')">p</button>
                    <button class="key" onclick="typeKey('a','m')">m</button>
                    <button class="key" onclick="typeKey('a','=')">=</button>
                    <button class="key" onclick="typeKey('a','m')">m</button>
                    <button class="key" onclick="typeKey('a','g')">g</button>
                    <button class="key" onclick="typeKey('a','h')">h</button>
                    <button class="key" onclick="typeKey('a','v')">v</button>
                    <button class="key" onclick="typeKey('a','^2')">²</button>
                    <button class="key" onclick="typeKey('a','/')">/</button>
                    <button class="key" onclick="typeKey('a','2')">2</button>
                    <button class="key" onclick="typeKey('a','+')">+</button>
                    <button class="key special" onclick="clearDisplay('a')">C</button>
                    <button class="key special" style="grid-column: span 2; background: var(--success);" onclick="submitFormula('a')">DËRGO</button>
                </div>
            </div>
            <button id="start-a" class="key" style="background: var(--team-a); color: var(--text-main); font-size: 1.5rem; padding: 20px;" onclick="nextQuestion('a')">START MISIONIN</button>
        </div>

        <div class="team-box team-b" id="box-b">
            <div class="score-label" style="color: #FF69B4;">GRUPI B: <span id="score-b">0</span></div>
            <div id="q-b" class="question-card">Shtyp "START MISIONIN"</div>
            
            <div id="controls-b" class="hidden">
                <div class="energy-selector">
                    <button class="energy-btn" onclick="checkType('b', 'Ek')">Kinetike</button>
                    <button class="energy-btn" onclick="checkType('b', 'Ep')">Potenciale</button>
                    <button class="energy-btn" onclick="checkType('b', 'Em')">Mekanike</button>
                </div>
                
                <div class="formula-display" id="display-b">Pritet formula...</div>
                
                <div class="math-kb">
                    <button class="key" onclick="typeKey('b','E')">E</button>
                    <button class="key" onclick="typeKey('b','k')">k</button>
                    <button class="key" onclick="typeKey('b','p')">p</button>
                    <button class="key" onclick="typeKey('b','m')">m</button>
                    <button class="key" onclick="typeKey('b','=')">=</button>
                    <button class="key" onclick="typeKey('b','m')">m</button>
                    <button class="key" onclick="typeKey('b','g')">g</button>
                    <button class="key" onclick="typeKey('b','h')">h</button>
                    <button class="key" onclick="typeKey('b','v')">v</button>
                    <button class="key" onclick="typeKey('b','^2')">²</button>
                    <button class="key" onclick="typeKey('b','/')">/</button>
                    <button class="key" onclick="typeKey('b','2')">2</button>
                    <button class="key" onclick="typeKey('b','+')">+</button>
                    <button class="key special" onclick="clearDisplay('b')">C</button>
                    <button class="key special" style="grid-column: span 2; background: var(--success);" onclick="submitFormula('b')">DËRGO</button>
                </div>
            </div>
            <button id="start-b" class="key" style="background: var(--team-b); color: var(--text-main); font-size: 1.5rem; padding: 20px;" onclick="nextQuestion('b')">START MISIONIN</button>
        </div>
    </div>

<script>
    const questions = [
        { q: "Cila energji lidhet me lartësinë?", type: "Ep", f: "Ep=mgh" },
        { q: "Shkruaj formulën e energjisë së lëvizjes.", type: "Ek", f: "Ek=mv^2/2" },
        { q: "Shuma e energjisë kinetike dhe potenciale.", type: "Em", f: "Em=Ek+Ep" },
        { q: "Energjia që zotëron një zog në fluturim (vetëm lëvizja).", type: "Ek", f: "Ek=mv^2/2" },
        { q: "Energjia e një guri në majë të malit.", type: "Ep", f: "Ep=mgh" }
    ];

    let state = {
        a: { score: 0, qIdx: 0, typeOk: false, input: "" },
        b: { score: 0, qIdx: 0, typeOk: false, input: "" }
    };

    function nextQuestion(team) {
        document.getElementById('start-' + team).classList.add('hidden');
        document.getElementById('controls-' + team).classList.remove('hidden');
        
        let s = state[team];
        if(s.qIdx >= questions.length) {
            document.getElementById('q-' + team).innerHTML = "MISIONI PËRFUNDOI!";
            document.getElementById('controls-' + team).classList.add('hidden');
            return;
        }

        document.getElementById('q-' + team).innerHTML = questions[s.qIdx].q;
        s.typeOk = false;
        clearDisplay(team);
        
        // Reset buttons
        document.querySelectorAll(\`#box-\${team} .energy-btn\`).forEach(b => {
            b.classList.remove('correct', 'wrong');
        });
    }

    function checkType(team, type) {
        let s = state[team];
        let correctType = questions[s.qIdx].type;
        
        document.querySelectorAll(\`#box-\${team} .energy-btn\`).forEach(b => {
            if(b.innerText.toLowerCase().includes(type.toLowerCase().replace('e',''))) {
                if(type === correctType) {
                    b.classList.add('correct');
                    s.typeOk = true;
                } else {
                    b.classList.add('wrong');
                    setTimeout(() => b.classList.remove('wrong'), 1000);
                }
            }
        });
    }

    function typeKey(team, val) {
        state[team].input += val;
        updateDisplay(team);
    }

    function clearDisplay(team) {
        state[team].input = "";
        updateDisplay(team);
    }

    function updateDisplay(team) {
        let disp = document.getElementById('display-' + team);
        let raw = state[team].input;
        if(raw === "") {
            disp.innerHTML = "Pritet formula...";
            return;
        }
        
        // Format for MathJax
        let mathStr = raw.replace('^2', '^2').replace('/', '\\\\\\\\over ');
        disp.innerHTML = \`\\\\\\\\(\${mathStr}\\\\\\\\)\`;
        if (window.MathJax) MathJax.typesetPromise([disp]);
    }

    function submitFormula(team) {
        let s = state[team];
        if(!s.typeOk) {
            alert("Zgjidh llojin e energjisë saktë fillimisht!");
            return;
        }

        let correctF = questions[s.qIdx].f;
        let userF = s.input;

        // Simple validation (can be improved)
        if(userF === correctF || (userF.includes('m') && userF.includes('g') && userF.includes('h') && correctF.includes('mgh'))) {
            s.score += 10;
            document.getElementById('score-' + team).innerText = s.score;
            document.getElementById('display-' + team).classList.add('correct');
            
            setTimeout(() => {
                document.getElementById('display-' + team).classList.remove('correct');
                s.qIdx++;
                nextQuestion(team);
            }, 1500);
        } else {
            document.getElementById('display-' + team).classList.add('wrong');
            setTimeout(() => {
                document.getElementById('display-' + team).classList.remove('wrong');
                clearDisplay(team);
            }, 1000);
        }
    }
</script>

</body>
</html>
`
  },
  {
    id: "physics-battle-pro",
    title: "Beteja e Fizikës: Pro",
    category: "Gjithëpërfshirëse",
    type: "school",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Physics Battle Pro: SmartBoard Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@600;800&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #050510; --blue: #00d2ff; --red: #ff0055; --gold: #ffcc00; }
        body { margin: 0; padding: 0; height: 100vh; font-family: 'Poppins', sans-serif; background: var(--bg); color: white; overflow: hidden; touch-action: none; }
        .game-header { text-align: center; padding: 15px; background: rgba(255,255,255,0.05); border-bottom: 2px solid rgba(255,255,255,0.1); }
        h1 { font-family: 'Orbitron', sans-serif; margin: 0; font-size: 2rem; color: var(--gold); text-shadow: 0 0 20px var(--gold); }
        .arena { display: flex; width: 100%; height: 85vh; padding: 20px; box-sizing: border-box; gap: 20px; }
        .zone { flex: 1; border-radius: 40px; display: flex; flex-direction: column; align-items: center; position: relative; transition: 0.3s; border: 4px solid transparent; background: rgba(255,255,255,0.02); }
        #zone-A { border-color: var(--blue); box-shadow: inset 0 0 30px rgba(0, 210, 255, 0.1); }
        #zone-B { border-color: var(--red); box-shadow: inset 0 0 30px rgba(255, 0, 85, 0.1); }
        .zone-title { font-family: 'Orbitron'; font-size: 1.5rem; margin-top: 20px; text-transform: uppercase; letter-spacing: 2px; }
        .pool { width: 100%; max-width: 300px; display: flex; flex-wrap: wrap; justify-content: center; align-content: center; gap: 12px; background: rgba(255,255,255,0.03); border-radius: 30px; }
        .item { padding: 18px 22px; background: white; color: #000; border-radius: 12px; font-weight: 800; font-size: 1rem; cursor: pointer; touch-action: none; user-select: none; box-shadow: 0 6px 0 #bbb; transition: 0.1s; z-index: 100; text-align: center; }
        .slot { display: inline-block; padding: 10px 15px; margin: 5px; background: rgba(255,255,255,0.1); border-radius: 10px; font-size: 0.9rem; color: #fff; animation: emerge 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes emerge { from { transform: scale(0) rotate(-10deg); } to { transform: scale(1) rotate(0); } }
        #win-screen { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); display: none; flex-direction: column; justify-content: center; align-items: center; z-index: 9999; }
        .win-box { background: linear-gradient(145deg, #1a1a2e, #0f0c29); padding: 50px; border-radius: 50px; border: 3px solid var(--gold); text-align: center; box-shadow: 0 0 100px rgba(255, 204, 0, 0.3); }
        .winner-name { font-size: 4rem; font-family: 'Orbitron'; color: var(--gold); }
    </style>
</head>
<body>
    <div class="game-header"><h1>PHYSICS BATTLE: SMARTBOARD EDITION</h1></div>
    <div class="arena"><div class="zone" id="zone-A"><div class="zone-title" style="color: var(--blue);">GRUPI A: SKALARE</div><div id="results-A" style="padding: 20px; display: flex; flex-wrap: wrap; justify-content: center;"></div></div><div class="pool" id="main-pool"></div><div class="zone" id="zone-B"><div class="zone-title" style="color: var(--red);">GRUPI B: VEKTORIALE</div><div id="results-B" style="padding: 20px; display: flex; flex-wrap: wrap; justify-content: center;"></div></div></div>
    <div id="win-screen"><div class="win-box"><h2>MISIONI U KRYE!</h2><div class="winner-name" id="winner-tag">GRUPI A</div><button onclick="location.reload()" style="padding: 20px 40px; font-size: 1.2rem; font-family: 'Orbitron'; background: var(--gold); border: none; border-radius: 15px; cursor: pointer;">LUUAJ PËRSËRI</button></div></div>
    <script>
        const physicsData = [
            { n: "Masa", t: "A" }, { n: "Koha", t: "A" }, { n: "Vëllimi", t: "A" }, { n: "Dendësia", t: "A" }, { n: "Energjia", t: "A" }, { n: "Shtypja", t: "A" }, { n: "Fuqia", t: "A" }, 
            { n: "Forca", t: "B" }, { n: "Shpejtësia", t: "B" }, { n: "Zhvendosja", t: "B" }, { n: "Nxitimi", t: "B" }, { n: "Pesha", t: "B" }, { n: "Impulsi", t: "B" }, { n: "Momenti Forcës", t: "B" }
        ];
        let totalItems = physicsData.length, found = 0;
        const pool = document.getElementById('main-pool');
        physicsData.sort(() => Math.random() - 0.5).forEach((item, i) => {
            const el = document.createElement('div'); el.className = 'item'; el.innerText = item.n; el.dataset.type = item.t; el.onpointerdown = handleDrag; pool.appendChild(el);
        });
        function handleDrag(e) {
            const el = e.target; el.setPointerCapture(e.pointerId); el.style.zIndex = 1000;
            el.onpointermove = (move) => { el.style.position = 'fixed'; el.style.left = (move.clientX - el.offsetWidth/2) + 'px'; el.style.top = (move.clientY - el.offsetHeight/2) + 'px'; };
            el.onpointerup = (up) => { el.onpointermove = null; el.releasePointerCapture(e.pointerId); checkZone(el, up.clientX, up.clientY); };
        }
        function checkZone(el, x, y) {
            const rectA = document.getElementById('zone-A').getBoundingClientRect(), rectB = document.getElementById('zone-B').getBoundingClientRect();
            if (isOver(x, y, rectA)) { if (el.dataset.type === 'A') capture(el, 'results-A'); else bounceBack(el); }
            else if (isOver(x, y, rectB)) { if (el.dataset.type === 'B') capture(el, 'results-B'); else bounceBack(el); }
            else bounceBack(el);
        }
        function isOver(x, y, rect) { return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom; }
        function capture(el, targetId) { const target = document.getElementById(targetId); const slot = document.createElement('div'); slot.className = 'slot'; slot.innerHTML = "🔹 " + el.innerText; target.appendChild(slot); el.remove(); found++; if (found === totalItems) announceWinner(); }
        function bounceBack(el) { el.style.position = 'static'; el.animate([{ transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(0)' }], { duration: 200, iterations: 2 }); }
        function announceWinner() { document.getElementById('win-screen').style.display = 'flex'; }
    </script>
</body>
</html>`
  },
  {
    id: "testi-pisa",
    title: "Testi PISA Shkencë",
    category: "Vlerësim",
    type: "school",
    html: "",
    url: "https://test-pisa.vercel.app/"
  },
  {
    id: "loja-energjise",
    title: "Loja e Energjisë",
    category: "Energjia",
    type: "school",
    html: "",
    url: "https://loja-e-energjise-8fes.vercel.app/"
  },
  {
    id: "ushtrime-fizike",
    title: "ushtrime fizike",
    category: "Ushtrime",
    type: "digital",
    url: "https://ushtrimefizike.manus.space/",
    html: ""
  },
  {
    id: "paketa-e-gjelber",
    title: "Paketa e Gjelber",
    category: "Mjedisi",
    type: "school",
    url: "https://portiergame-bjm8icrv.manus.space/",
    html: ""
  },
  {
    id: "elektriciteti",
    title: "Elektriciteti",
    category: "Elektriciteti",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Laboratori i Fizikës: Energjia Elektrike</title>\r\n    <style>\r\n        :root {\r\n            --primare: #2980b9;\r\n            --sekondare: #3498db;\r\n            --sukses: #27ae60;\r\n            --gabim: #c0392b;\r\n            --sfondi: #f4f7f6;\r\n            --teksti: #2c3e50;\r\n            --llamba-off: #7f8c8d;\r\n            --llamba-on: #f1c40f;\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n            background-color: var(--sfondi);\r\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            min-height: 100vh;\r\n            color: var(--teksti);\r\n        }\r\n\r\n        .karta {\r\n            background: white;\r\n            width: 850px;\r\n            padding: 40px;\r\n            border-radius: 24px;\r\n            box-shadow: 0 20px 50px rgba(0,0,0,0.1);\r\n            text-align: center;\r\n            border-top: 10px solid var(--primare);\r\n        }\r\n\r\n        h1 { margin-top: 0; color: var(--primare); }\r\n        \r\n        .shfaqja-formules {\r\n            background: #e1f5fe;\r\n            color: var(--primare);\r\n            display: inline-block;\r\n            padding: 10px 25px;\r\n            border-radius: 50px;\r\n            font-weight: bold;\r\n            font-size: 1.2rem;\r\n            margin-bottom: 30px;\r\n            border: 2px solid var(--sekondare);\r\n        }\r\n\r\n        .parametrat {\r\n            display: grid;\r\n            grid-template-columns: repeat(3, 1fr);\r\n            gap: 15px;\r\n            margin-bottom: 30px;\r\n        }\r\n\r\n        .kutia-param {\r\n            background: #f8f9fa;\r\n            padding: 15px;\r\n            border-radius: 16px;\r\n            border-bottom: 4px solid var(--sekondare);\r\n        }\r\n\r\n        .kutia-param span { font-size: 0.8rem; color: #7f8c8d; text-transform: uppercase; font-weight: bold; }\r\n        .kutia-param b { font-size: 1.2rem; display: block; margin-top: 5px; color: var(--teksti); }\r\n\r\n        /* Skena Elektrike */\r\n        .skena-elektrike {\r\n            height: 300px;\r\n            background: #2d3436;\r\n            border-radius: 20px;\r\n            position: relative;\r\n            margin-bottom: 30px;\r\n            border: 3px solid #636e72;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            overflow: hidden;\r\n        }\r\n\r\n        .qarku {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 50px;\r\n            z-index: 2;\r\n        }\r\n\r\n        .bateria {\r\n            width: 80px;\r\n            height: 120px;\r\n            background: #dcdde1;\r\n            border: 4px solid #718093;\r\n            border-radius: 10px;\r\n            position: relative;\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            align-items: center;\r\n            font-weight: bold;\r\n        }\r\n\r\n        .bateria::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: -15px;\r\n            width: 30px;\r\n            height: 15px;\r\n            background: #718093;\r\n            border-top-left-radius: 5px;\r\n            border-top-right-radius: 5px;\r\n        }\r\n\r\n        .llamba-container {\r\n            position: relative;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n        }\r\n\r\n        .llamba {\r\n            width: 80px;\r\n            height: 80px;\r\n            background: var(--llamba-off);\r\n            border-radius: 50%;\r\n            border: 4px solid #7f8c8d;\r\n            transition: all 0.5s;\r\n            position: relative;\r\n        }\r\n\r\n        .llamba.ndezur {\r\n            background: var(--llamba-on);\r\n            border-color: #f39c12;\r\n            box-shadow: 0 0 50px #f1c40f;\r\n        }\r\n\r\n        .teli {\r\n            height: 4px;\r\n            background: #7f8c8d;\r\n            width: 100px;\r\n            position: absolute;\r\n            transition: background 0.5s;\r\n        }\r\n\r\n        .teli.ndezur {\r\n            background: #f1c40f;\r\n        }\r\n\r\n        /* Kontrollet */\r\n        .kontrollet {\r\n            display: flex;\r\n            justify-content: center;\r\n            gap: 15px;\r\n        }\r\n\r\n        input {\r\n            padding: 15px;\r\n            border: 2px solid #ced4da;\r\n            border-radius: 12px;\r\n            font-size: 1.1rem;\r\n            width: 250px;\r\n            text-align: center;\r\n            outline: none;\r\n        }\r\n\r\n        input:focus { border-color: var(--primare); }\r\n\r\n        button {\r\n            padding: 15px 35px;\r\n            background-color: var(--primare);\r\n            color: white;\r\n            border: none;\r\n            border-radius: 12px;\r\n            font-weight: bold;\r\n            font-size: 1.1rem;\r\n            cursor: pointer;\r\n            transition: all 0.3s;\r\n        }\r\n\r\n        button:hover { background-color: #1a5276; transform: scale(1.05); }\r\n        \r\n        #mesazhi { margin-top: 20px; font-weight: bold; font-size: 1.1rem; min-height: 30px; }\r\n        .butoni-reset { background: var(--sukses); color: white; border: none; padding: 12px 25px; border-radius: 10px; cursor: pointer; display: none; margin: 15px auto; font-weight: bold;}\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n<div class=\"karta\">\r\n    <h1>Laboratori i Energjisë Elektrike ⚡</h1>\r\n    <div class=\"shfaqja-formules\">E = U · I · t</div>\r\n    <p style=\"margin-top: -20px; font-size: 0.9rem; color: #7f8c8d;\">Llogarit energjinë totale të konsumuar në <b>Joule (J)</b></p>\r\n\r\n    <div class=\"parametrat\">\r\n        <div class=\"kutia-param\">\r\n            <span>Tensioni (U)</span>\r\n            <b id=\"u-vlera\">0 V</b>\r\n        </div>\r\n        <div class=\"kutia-param\">\r\n            <span>Rryma (I)</span>\r\n            <b id=\"i-vlera\">0 A</b>\r\n        </div>\r\n        <div class=\"kutia-param\">\r\n            <span>Koha (t)</span>\r\n            <b id=\"t-vlera\">0 s</b>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"skena-elektrike\">\r\n        <div class=\"qarku\">\r\n            <div class=\"bateria\">\r\n                <span>+</span>\r\n                <span>BATERIA</span>\r\n                <span>-</span>\r\n            </div>\r\n            <div class=\"llamba-container\">\r\n                <div id=\"llamba\" class=\"llamba\"></div>\r\n                <div style=\"color: white; margin-top: 10px; font-weight: bold;\">KONSUMATORI</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"kontrollet\">\r\n        <input type=\"number\" id=\"inputE\" placeholder=\"Shëno Energjinë (J)\">\r\n        <button onclick=\"ndizQarkun()\">NDIZ QARKUN 💡</button>\r\n    </div>\r\n\r\n    <div id=\"mesazhi\"></div>\r\n    <button id=\"reset\" class=\"butoni-reset\" onclick=\"init()\">EKSPERIMENT I RI</button>\r\n</div>\r\n\r\n<script>\r\n    let u, i, t, targetE;\r\n\r\n    function init() {\r\n        // Gjenerojmë të dhëna të rastësishme\r\n        u = Math.floor(Math.random() * 12) + 12; // 12V deri 24V\r\n        i = parseFloat((Math.random() * 2 + 0.5).toFixed(1)); // 0.5A deri 2.5A\r\n        t = Math.floor(Math.random() * 50) + 10; // 10s deri 60s\r\n        \r\n        // Formula: E = U * I * t\r\n        targetE = Math.round(u * i * t);\r\n\r\n        document.getElementById('u-vlera').innerText = u + \" V\";\r\n        document.getElementById('i-vlera').innerText = i + \" A\";\r\n        document.getElementById('t-val-hidden'); // Not used, keep IDs consistent\r\n        document.getElementById('t-vlera').innerText = t + \" s\";\r\n        \r\n        document.getElementById('inputE').value = \"\";\r\n        document.getElementById('mesazhi').innerText = \"\";\r\n        document.getElementById('reset').style.display = \"none\";\r\n        \r\n        const llamba = document.getElementById('llamba');\r\n        llamba.classList.remove('ndezur');\r\n    }\r\n\r\n    function ndizQarkun() {\r\n        const vleraUser = parseFloat(document.getElementById('inputE').value);\r\n        const llamba = document.getElementById('llamba');\r\n        const mesazhi = document.getElementById('mesazhi');\r\n        const resetBtn = document.getElementById('reset');\r\n\r\n        if(isNaN(vleraUser)) {\r\n            mesazhi.innerText = \"Ju lutem vendosni një vlerë!\";\r\n            mesazhi.style.color = \"var(--gabim)\";\r\n            return;\r\n        }\r\n\r\n        // Kontrollojmë saktësinë\r\n        if(Math.abs(vleraUser - targetE) <= 2) {\r\n            llamba.classList.add('ndezur');\r\n            \r\n            mesazhi.innerText = \"✅ SAKTË! Qarku u mbyll dhe energjia e konsumuar është llogaritur drejt.\";\r\n            mesazhi.style.color = \"var(--sukses)\";\r\n            resetBtn.style.display = \"block\";\r\n        } else {\r\n            mesazhi.innerText = \"❌ GABIM! Llogaritja nuk doli saktë. Duheshin \" + formatNr(targetE) + \" Joule.\";\r\n            mesazhi.style.color = \"var(--gabim)\";\r\n            resetBtn.style.display = \"block\";\r\n        }\r\n    }\r\n\r\n    function formatNr(x) {\r\n        return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \".\");\r\n    }\r\n\r\n    // Nisja\r\n    init();\r\n</script>\r\n\r\n</body>\r\n</html>"
  },
  {
    id: "gjej-shkencetarin",
    title: "Gjej Shkencëtarin",
    category: "Shkencëtarët",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Gjej Shkencëtarin</title>\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      body { font-family: 'Nunito', sans-serif; background: #f8fafc; margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; }\n      h1, h2 { font-family: 'Orbitron', sans-serif; }\n      .glass-panel { border-radius: 24px; backdrop-filter: blur(10px); box-shadow: 0 10px 40px rgba(0,0,0,0.08); background: white; width: 100%; max-width: 900px; padding: 24px; margin: auto; }\n      .card { border-radius: 12px; padding: 8px; cursor: pointer; text-align: center; font-weight: bold; border: 2px solid #e2e8f0; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; height: 100%; min-height: 70px; font-size: 0.95rem; }\n      .card:hover { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-color: #ffafcc; }\n      .card.selected { border-color: #ffafcc; background-color: #fff0f6; transform: scale(1.02); }\n      .card.matched { background-color: #d1fae5; border-color: #10b981; color: #065f46; cursor: default; transform: none; opacity: 0.5; pointer-events: none; }\n      .card.wrong { background-color: #fee2e2; border-color: #ef4444; color: #991b1b; animation: shake 0.4s; }\n      @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }\n      .grid-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }\n      .col-list { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\n      @media (max-width: 600px) { .col-list { grid-template-columns: 1fr; } }\n    </style>\n</head>\n<body class=\"flex items-center justify-center min-h-screen text-slate-800 p-4\">\n    <div class=\"glass-panel\">\n        <div class=\"flex justify-between items-center mb-4 border-b border-slate-100 pb-4\">\n            <h1 class=\"text-xl md:text-2xl font-bold text-slate-800\"><i class=\"fas fa-search text-pink-400\"></i> Gjej Shkencëtarin</h1>\n            <div class=\"flex gap-4\">\n                <div class=\"bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold shadow-inner\">Raundi: <span id=\"round\">1</span>/4</div>\n                <div class=\"bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full font-bold shadow-inner\"><i class=\"fas fa-star\"></i> <span id=\"score\">0</span></div>\n            </div>\n        </div>\n        <p class=\"text-center mb-6 font-bold text-slate-600 hidden md:block\">Lidh shkencëtarin me shpikjen/zbulimin e tij!</p>\n        <div id=\"game-board\" class=\"grid-container\">\n            <div><h3 class=\"text-center mb-4 font-orbitron text-lg bg-pink-100 rounded p-2\">Shkencëtarët</h3><div id=\"scientists\" class=\"col-list\"></div></div>\n            <div><h3 class=\"text-center mb-4 font-orbitron text-lg bg-blue-100 rounded p-2\">Shpikjet</h3><div id=\"inventions\" class=\"col-list\"></div></div>\n        </div>\n        <div id=\"victory\" class=\"hidden text-center mt-8 py-8\">\n            <h2 class=\"text-3xl font-bold text-emerald-500 mb-4\">Urime! Përfundove të gjitha raundet!</h2>\n            <button onclick=\"startGame()\" class=\"bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 text-xl shadow-lg mt-4\">Fillo Përsëri</button>\n        </div>\n    </div>\n    <script>\n        const allPairs = [\n            { s: \"Isaac Newton\", i: \"Ligji i Gravitetit\" },\n            { s: \"Albert Einstein\", i: \"Teoria e Relativitetit\" },\n            { s: \"Nikola Tesla\", i: \"Rryma Alternative\" },\n            { s: \"Galileo Galilei\", i: \"Teleskopi Gjenial\" },\n            { s: \"Marie Curie\", i: \"Radioaktiviteti\" },\n            { s: \"James Maxwell\", i: \"Elektromagnetizmi\" },\n            { s: \"Niels Bohr\", i: \"Modeli i Atomit\" },\n            { s: \"Alessandro Volta\", i: \"Bateria Elektrike\" },\n            { s: \"Michael Faraday\", i: \"Induksioni Magnetik\" },\n            { s: \"Archimedes\", i: \"Ligji i Lundrimit\" },\n            { s: \"Georg Ohm\", i: \"Ligji i Rezistencës\" },\n            { s: \"Max Planck\", i: \"Teoria Kuantike\" },\n            { s: \"Edwin Hubble\", i: \"Zgjerimi i Universit\" },\n            { s: \"Johannes Kepler\", i: \"Orbitat Planetare\" },\n            { s: \"Blaise Pascal\", i: \"Shtypja në Lëngje\" },\n            { s: \"Guglielmo Marconi\", i: \"Radio\" },\n            { s: \"Alexander Graham Bell\", i: \"Telefoni\" },\n            { s: \"Dmitri Mendeleev\", i: \"Tabela Periodike\" },\n            { s: \"Werner Heisenberg\", i: \"Parimi i Papërcaktueshmërisë\" },\n            { s: \"Erwin Schrödinger\", i: \"Mekanika Kuantike\" },\n            { s: \"Enrico Fermi\", i: \"Reaktori Bërthamor\" },\n            { s: \"Rosalind Franklin\", i: \"Struktura e ADN-së\" },\n            { s: \"Stephen Hawking\", i: \"Rrezatimi i Vrimave të Zeza\" },\n            { s: \"Carl Sagan\", i: \"Kërkimi SETI\" }\n        ];\n        \n        let round = 1;\n        let score = 0;\n        let currentPairs = [];\n        let selS = null;\n        let selI = null;\n        let matchedInRound = 0;\n        const PAIRS_PER_ROUND = 6;\n        const TOTAL_ROUNDS = 4;\n\n        function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }\n\n        function startGame() {\n            round = 1; score = 0; matchedInRound = 0;\n            document.getElementById('score').innerText = score;\n            document.getElementById('victory').classList.add('hidden');\n            document.getElementById('game-board').classList.remove('hidden');\n            loadRound();\n        }\n\n        function loadRound() {\n            document.getElementById('round').innerText = round;\n            matchedInRound = 0;\n            const shuffledDB = shuffle([...allPairs]);\n            currentPairs = shuffledDB.slice(0, PAIRS_PER_ROUND);\n            \n            const scientists = shuffle(currentPairs.map(p => p.s));\n            const inventions = shuffle(currentPairs.map(p => p.i));\n            \n            const sContainer = document.getElementById('scientists');\n            const iContainer = document.getElementById('inventions');\n            sContainer.innerHTML = ''; iContainer.innerHTML = '';\n\n            scientists.forEach(s => {\n                const el = document.createElement('div');\n                el.className = 'card'; el.innerText = s;\n                el.onclick = () => selectCard(el, 's', s);\n                sContainer.appendChild(el);\n            });\n            inventions.forEach(i => {\n                const el = document.createElement('div');\n                el.className = 'card'; el.innerText = i;\n                el.onclick = () => selectCard(el, 'i', i);\n                iContainer.appendChild(el);\n            });\n        }\n\n        function selectCard(el, type, val) {\n            if (el.classList.contains('matched')) return;\n            const container = type === 's' ? document.getElementById('scientists') : document.getElementById('inventions');\n            Array.from(container.children).forEach(c => c.classList.remove('selected', 'wrong'));\n            el.classList.add('selected');\n            \n            if (type === 's') selS = {el, val};\n            else selI = {el, val};\n\n            if (selS && selI) checkMatch();\n        }\n\n        function checkMatch() {\n            const isMatch = currentPairs.some(p => p.s === selS.val && p.i === selI.val);\n            if (isMatch) {\n                selS.el.classList.remove('selected'); selI.el.classList.remove('selected');\n                selS.el.classList.add('matched'); selI.el.classList.add('matched');\n                score += 10;\n                document.getElementById('score').innerText = score;\n                matchedInRound++;\n                if (matchedInRound === PAIRS_PER_ROUND) {\n                    setTimeout(() => {\n                        if (round < TOTAL_ROUNDS) {\n                            round++;\n                            loadRound();\n                        } else {\n                            document.getElementById('game-board').classList.add('hidden');\n                            document.getElementById('victory').classList.remove('hidden');\n                        }\n                    }, 800);\n                }\n            } else {\n                const eS = selS.el, eI = selI.el;\n                eS.classList.add('wrong'); eI.classList.add('wrong');\n                setTimeout(() => {\n                    eS.classList.remove('selected', 'wrong');\n                    eI.classList.remove('selected', 'wrong');\n                }, 500);\n            }\n            selS = null; selI = null;\n        }\n\n        startGame();\n    </script>\n</body>\n</html>"
  },
  {
    id: "resistance-guard",
    title: "Mbrojtësi i Rezistencës",
    category: "Rezistenca",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Resistance Guard - Loja e Rezistencës</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n            background: var(--bg);\r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text);\r\n            font-family: 'Inter', sans-serif;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            min-height: 100vh;\r\n            padding: 20px;\r\n        }\r\n\r\n        h1 {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 4rem;\r\n            color: var(--accent);\r\n            text-shadow: 3px 3px 0px var(--border);\r\n            margin: 0 0 10px 0;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        p {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            margin-bottom: 20px;\r\n        }\r\n\r\n        #game-box {\r\n            background: var(--surface);\r\n            padding: 30px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 8px 8px 0px var(--border);\r\n            text-align: center;\r\n            width: 600px;\r\n            max-width: 90%;\r\n        }\r\n\r\n        #levelDisplay {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            color: var(--text);\r\n            font-weight: bold;\r\n            text-align: left;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .status {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2.5rem;\r\n            margin: 10px 0;\r\n            color: var(--accent2);\r\n            font-weight: bold;\r\n            text-shadow: 2px 2px 0px var(--border);\r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            padding: 10px;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        #currentR {\r\n            color: var(--accent);\r\n        }\r\n\r\n        canvas {\r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            margin: 20px 0;\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.1);\r\n            width: 100%;\r\n            height: 150px;\r\n        }\r\n\r\n        .controls {\r\n            display: grid;\r\n            grid-template-columns: 1fr 1fr;\r\n            gap: 20px;\r\n            background: var(--bg);\r\n            padding: 20px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            margin-top: 20px;\r\n        }\r\n\r\n        .slider-group {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: flex-start;\r\n        }\r\n\r\n        .slider-group label {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            margin-bottom: 8px;\r\n        }\r\n\r\n        input[type=range] {\r\n            width: 100%;\r\n            cursor: pointer;\r\n            -webkit-appearance: none;\r\n            height: 12px;\r\n            border: 2px solid var(--border);\r\n            background: #e2e8f0;\r\n            outline: none;\r\n        }\r\n\r\n        input[type=range]::-webkit-slider-thumb {\r\n            -webkit-appearance: none;\r\n            width: 24px;\r\n            height: 24px;\r\n            background: var(--accent);\r\n            border: 3px solid var(--border);\r\n            cursor: pointer;\r\n        }\r\n\r\n        select {\r\n            padding: 10px;\r\n            border: 4px solid var(--border);\r\n            background: var(--surface);\r\n            color: var(--text);\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.2rem;\r\n            width: 100%;\r\n            cursor: pointer;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            outline: none;\r\n        }\r\n\r\n        button {\r\n            grid-column: span 2;\r\n            padding: 15px;\r\n            background: var(--green);\r\n            border: 4px solid var(--border);\r\n            color: var(--border);\r\n            cursor: pointer;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            font-weight: bold;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            transition: transform 0.1s, box-shadow 0.1s;\r\n            margin-top: 10px;\r\n        }\r\n\r\n        button:active {\r\n            transform: translate(4px, 4px);\r\n            box-shadow: 0px 0px 0px var(--border);\r\n        }\r\n\r\n        .formula-card {\r\n            margin-top: 20px;\r\n            padding: 15px;\r\n            background: var(--surface);\r\n            border: 4px solid var(--border);\r\n            text-align: center;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            width: 600px;\r\n            max-width: 90%;\r\n        }\r\n\r\n        .math-fraction {\r\n            display: inline-block;\r\n            vertical-align: middle;\r\n            text-align: center;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            color: var(--accent);\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        .frac-top { border-bottom: 2px solid var(--border); padding: 0 5px; }\r\n        .frac-bottom { padding: 0 5px; }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <h1><i class=\"fas fa-shield-alt\"></i> RESISTANCE GUARD</h1>\r\n    <p>Rregullo parametrat e telit për të arritur <b>Rezistencën Target</b>!</p>\r\n\r\n    <div id=\"game-box\">\r\n        <div id=\"levelDisplay\">Niveli: 1</div>\r\n        <div class=\"status\" id=\"targetDisplay\">Target R: 15.00 Ω</div>\r\n        \r\n        <canvas id=\"wireCanvas\" width=\"550\" height=\"150\"></canvas>\r\n        \r\n        <div class=\"status\" id=\"currentR\">R aktuale: 0.00 Ω</div>\r\n\r\n        <div class=\"controls\">\r\n            <div class=\"slider-group\">\r\n                <label>Materiali (ρ):</label>\r\n                <select id=\"materialSelect\" onchange=\"updateWire()\">\r\n                    <option value=\"0.017\">Bakër (Bakër)</option>\r\n                    <option value=\"0.016\">Argjend (Më pak rezistent)</option>\r\n                    <option value=\"0.024\">Ar (Mesatar)</option>\r\n                    <option value=\"0.10\">Hekur (Më shumë rezistent)</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"slider-group\">\r\n                <label>Gjatësia (l): <span id=\"lVal\">10</span>m</label>\r\n                <input type=\"range\" id=\"lInput\" min=\"1\" max=\"100\" value=\"10\" oninput=\"updateWire()\">\r\n            </div>\r\n            <div class=\"slider-group\" style=\"grid-column: span 2;\">\r\n                <label>Trashësia/Prerja (S): <span id=\"sVal\">1.0</span> mm²</label>\r\n                <input type=\"range\" id=\"sInput\" min=\"0.1\" max=\"5.0\" step=\"0.1\" value=\"1.0\" oninput=\"updateWire()\">\r\n            </div>\r\n            <button onclick=\"checkResult()\"><i class=\"fas fa-bolt\"></i> TESTO QARKUN</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"formula-card\">\r\n        <span style=\"font-family: 'VT323', monospace; font-size: 1.5rem; color: var(--text);\">Formula:</span>\r\n        <div class=\"math-fraction\">\r\n            R = ρ · \r\n            <div style=\"display: inline-block; vertical-align: middle;\">\r\n                <div class=\"frac-top\">l</div>\r\n                <div class=\"frac-bottom\">S</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <script>\r\n        const canvas = document.getElementById('wireCanvas');\r\n        const ctx = canvas.getContext('2d');\r\n        \r\n        let level = 1;\r\n        let targetR = 8.5;\r\n\r\n        function updateWire() {\r\n            const rho = parseFloat(document.getElementById('materialSelect').value);\r\n            const l = parseFloat(document.getElementById('lInput').value);\r\n            const s = parseFloat(document.getElementById('sInput').value);\r\n            \r\n            // Formula: R = rho * (l / s)\r\n            // (Shënim: Multiplikojmë me 100 për ta bërë vlerën më \"lojë\")\r\n            const r = (rho * (l / s) * 100).toFixed(2);\r\n            \r\n            document.getElementById('lVal').innerText = l;\r\n            document.getElementById('sVal').innerText = s;\r\n            document.getElementById('currentR').innerText = `R aktuale: ${r} Ω`;\r\n\r\n            drawWire(l, s, rho);\r\n            return r;\r\n        }\r\n\r\n        function drawWire(l, s, rho) {\r\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n            \r\n            // Ngjyra sipas materialit\r\n            if(rho == 0.017) ctx.fillStyle = \"#ffafcc\"; // Baker\r\n            else if(rho == 0.016) ctx.fillStyle = \"#a2d2ff\"; // Argjend\r\n            else if(rho == 0.024) ctx.fillStyle = \"#ffc8dd\"; // Ar\r\n            else ctx.fillStyle = \"#94a3b8\"; // Hekur\r\n\r\n            const wireHeight = s * 15;\r\n            const wireWidth = l * 5;\r\n            \r\n            const x = 275 - wireWidth/2;\r\n            const y = 75 - wireHeight/2;\r\n\r\n            ctx.fillRect(x, y, wireWidth, wireHeight);\r\n            \r\n            ctx.strokeStyle = \"#4a4e69\";\r\n            ctx.lineWidth = 4;\r\n            ctx.strokeRect(x, y, wireWidth, wireHeight);\r\n            \r\n            // Shkëlqimi i telit\r\n            ctx.fillStyle = \"rgba(255,255,255,0.4)\";\r\n            ctx.fillRect(x, y, wireWidth, wireHeight/3);\r\n        }\r\n\r\n        function checkResult() {\r\n            const currentR = parseFloat(updateWire());\r\n            const diff = Math.abs(currentR - targetR);\r\n\r\n            if (diff < 0.5) {\r\n                alert(\"SUKSES! Rezistenca është e saktë për pajisjen.\");\r\n                level++;\r\n                targetR = (Math.random() * 40 + 5).toFixed(2);\r\n                document.getElementById('levelDisplay').innerText = `Niveli: ${level}`;\r\n                document.getElementById('targetDisplay').innerText = `Target R: ${targetR} Ω`;\r\n            } else {\r\n                alert(\"Kujdes! Rryma nuk është e duhura. Provo përsëri.\");\r\n            }\r\n        }\r\n\r\n        // Initialize\r\n        document.getElementById('targetDisplay').innerText = `Target R: ${targetR} Ω`;\r\n        updateWire();\r\n    </script>\r\n</body>\r\n</html>"
  },
  {
    id: "efield-explorer",
    title: "Eksploruesi i Fushës E",
    category: "Fusha Elektrike",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>E-Field Explorer</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n            min-height: 100vh;\r\n            background: var(--bg); \r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            font-family: 'Inter', sans-serif;\r\n            color: var(--text);\r\n            overflow: hidden;\r\n            padding: 20px;\r\n        }\r\n\r\n        h1 { \r\n            font-family: 'VT323', monospace; \r\n            font-size: 3.5rem; \r\n            color: var(--accent); \r\n            text-shadow: 3px 3px 0px var(--border); \r\n            margin-bottom: 10px; \r\n            letter-spacing: 2px; \r\n            text-transform: uppercase; \r\n        }\r\n        \r\n        #game-container {\r\n            position: relative;\r\n            background: var(--surface); \r\n            border: 4px solid var(--border); \r\n            padding: 24px; \r\n            box-shadow: 8px 8px 0px var(--border); \r\n            width: 100%;\r\n            max-width: 650px;\r\n            margin-bottom: 20px;\r\n        }\r\n\r\n        canvas { \r\n            display: block; \r\n            background: #e2e8f0; \r\n            border: 4px solid var(--border); \r\n            width: 100%;\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.05);\r\n            cursor: none; \r\n        }\r\n\r\n        .ui-panel {\r\n            position: absolute;\r\n            top: 30px;\r\n            left: 30px;\r\n            pointer-events: none;\r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            padding: 10px;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n        }\r\n\r\n        .instructions {\r\n            margin-top: 15px;\r\n            max-width: 650px;\r\n            text-align: center;\r\n            font-size: 1.2rem;\r\n            font-family: 'VT323', monospace;\r\n            color: var(--text);\r\n        }\r\n\r\n        #intensity-meter {\r\n            font-weight: bold;\r\n            color: var(--accent);\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n        #score {\r\n            color: var(--accent2);\r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <h1><i class=\"fas fa-magnet\"></i> Intensiti i Fushës</h1>\r\n\r\n    <div id=\"game-container\">\r\n        <div class=\"ui-panel\">\r\n            Pikët: <span id=\"score\">0</span><br>\r\n            Intensiteti (E): <span id=\"intensity-meter\">0</span> N/C\r\n        </div>\r\n        <canvas id=\"gameCanvas\" width=\"600\" height=\"400\"></canvas>\r\n    </div>\r\n\r\n    <div class=\"instructions\">\r\n        <p>Lëviz miun (mouse) për të kontrolluar <b>ngarkesën provë (+q)</b>. \r\n        Mblidh sferat pastel për pikë, por kujdes: <b>burimi i fushës</b> në qendër të shtyn me forcë më të madhe sa më afër t'i shkosh!</p>\r\n    </div>\r\n\r\n    <script>\r\n        const canvas = document.getElementById('gameCanvas');\r\n        const ctx = canvas.getContext('2d');\r\n        const scoreElement = document.getElementById('score');\r\n        const intensityMeter = document.getElementById('intensity-meter');\r\n\r\n        let score = 0;\r\n        let mouse = { x: 300, y: 200 };\r\n        let player = { x: 300, y: 200, radius: 10 };\r\n        \r\n        // Burimi i fushës (ngarkesë e madhe pozitive në qendër)\r\n        const source = { x: 300, y: 200, q: 5000 }; \r\n        \r\n        let collectibles = [];\r\n\r\n        function spawnCollectible() {\r\n            const colors = ['#ffafcc', '#a2d2ff', '#ffc8dd', '#baffc9'];\r\n            collectibles.push({\r\n                x: Math.random() * (canvas.width - 40) + 20,\r\n                y: Math.random() * (canvas.height - 40) + 20,\r\n                radius: 8,\r\n                color: colors[Math.floor(Math.random() * colors.length)]\r\n            });\r\n        }\r\n\r\n        // Krijo disa mbledhëse në fillim\r\n        for(let i=0; i<5; i++) spawnCollectible();\r\n\r\n        window.addEventListener('mousemove', (e) => {\r\n            const rect = canvas.getBoundingClientRect();\r\n            // Scale mouse coordinates to match canvas internal resolution\r\n            const scaleX = canvas.width / rect.width;\r\n            const scaleY = canvas.height / rect.height;\r\n            mouse.x = (e.clientX - rect.left) * scaleX;\r\n            mouse.y = (e.clientY - rect.top) * scaleY;\r\n        });\r\n\r\n        function update() {\r\n            // Llogarit distancën nga qendra (r)\r\n            let dx = mouse.x - source.x;\r\n            let dy = mouse.y - source.y;\r\n            let r = Math.sqrt(dx*dx + dy*dy);\r\n            if (r < 20) r = 20; // Parandalon forcën pafundësi\r\n\r\n            // Formula e Intensitetit: E = k * Q / r^2\r\n            const k = 8987; \r\n            let E = (k * source.q) / (r * r);\r\n            \r\n            // Shfaq intensitetin në ekran\r\n            intensityMeter.innerText = Math.round(E);\r\n\r\n            // \"Shtytja\" elektrike - e bën kontrollin e vështirë\r\n            // Ngarkesa provë ndjen një forcë që e largon nga qendra\r\n            let pushX = (dx / r) * (E / 100);\r\n            let pushY = (dy / r) * (E / 100);\r\n\r\n            player.x = mouse.x + pushX;\r\n            player.y = mouse.y + pushY;\r\n\r\n            // Kontrolli i mbledhjes së pikëve\r\n            collectibles.forEach((c, index) => {\r\n                let dist = Math.sqrt((player.x - c.x)**2 + (player.y - c.y)**2);\r\n                if (dist < player.radius + c.radius) {\r\n                    collectibles.splice(index, 1);\r\n                    score += 10;\r\n                    scoreElement.innerText = score;\r\n                    spawnCollectible();\r\n                }\r\n            });\r\n        }\r\n\r\n        function draw() {\r\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n\r\n            // Vizatimi i vijave të fushës (vizuale)\r\n            ctx.strokeStyle = '#cbd5e1';\r\n            ctx.lineWidth = 2;\r\n            ctx.beginPath();\r\n            for(let i=0; i<360; i+=30) {\r\n                let rad = i * Math.PI / 180;\r\n                ctx.moveTo(source.x, source.y);\r\n                ctx.lineTo(source.x + Math.cos(rad) * 600, source.y + Math.sin(rad) * 600);\r\n            }\r\n            ctx.stroke();\r\n\r\n            // Burimi i fushës (+Q)\r\n            ctx.fillStyle = '#ffafcc';\r\n            ctx.beginPath();\r\n            ctx.arc(source.x, source.y, 20, 0, Math.PI * 2);\r\n            ctx.fill();\r\n            ctx.strokeStyle = '#4a4e69';\r\n            ctx.lineWidth = 4;\r\n            ctx.stroke();\r\n            \r\n            ctx.fillStyle = \"#4a4e69\";\r\n            ctx.font = \"bold 20px VT323\";\r\n            ctx.fillText(\"+Q\", source.x - 10, source.y + 6);\r\n\r\n            // Mbledhëset\r\n            collectibles.forEach(c => {\r\n                ctx.fillStyle = c.color;\r\n                ctx.beginPath();\r\n                ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);\r\n                ctx.fill();\r\n                ctx.strokeStyle = '#4a4e69';\r\n                ctx.lineWidth = 2;\r\n                ctx.stroke();\r\n            });\r\n\r\n            // Lojtari (ngarkesa provë +q)\r\n            ctx.fillStyle = '#a2d2ff';\r\n            ctx.beginPath();\r\n            ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);\r\n            ctx.fill();\r\n            ctx.strokeStyle = '#4a4e69';\r\n            ctx.lineWidth = 3;\r\n            ctx.stroke();\r\n        }\r\n\r\n        function gameLoop() {\r\n            update();\r\n            draw();\r\n            requestAnimationFrame(gameLoop);\r\n        }\r\n\r\n        gameLoop();\r\n    </script>\r\n</body>\r\n</html>"
  },
  {
    id: "power-grid-master",
    title: "Mjeshtri i Rrjetit",
    category: "Rrjeti Elektrik",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Power Grid Master - Fuqia Elektrike</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n        * { box-sizing: border-box; margin: 0; padding: 0; }\r\n        body { \r\n            background: var(--bg); \r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text); \r\n            font-family: 'Inter', sans-serif; \r\n            display: flex; \r\n            flex-direction: column; \r\n            align-items: center; \r\n            min-height: 100vh;\r\n            padding: 20px;\r\n        }\r\n        h1 { \r\n            font-family: 'VT323', monospace; \r\n            font-size: 3.5rem; \r\n            color: var(--accent); \r\n            text-shadow: 3px 3px 0px var(--border); \r\n            margin-bottom: 4px; \r\n            letter-spacing: 2px; \r\n            text-transform: uppercase; \r\n        }\r\n        p {\r\n            color: var(--text); \r\n            font-size: 1.5rem; \r\n            margin-bottom: 24px; \r\n            font-family: 'VT323', monospace;\r\n        }\r\n        #game-board { \r\n            background: var(--surface); \r\n            border: 4px solid var(--border); \r\n            padding: 24px; \r\n            box-shadow: 8px 8px 0px var(--border); \r\n            width: 100%;\r\n            max-width: 700px;\r\n            margin-bottom: 20px;\r\n        }\r\n        canvas { \r\n            background: #e2e8f0; \r\n            border: 4px solid var(--border); \r\n            display: block;\r\n            width: 100%;\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.05);\r\n            margin-bottom: 20px;\r\n        }\r\n        .ui-grid { \r\n            display: grid; \r\n            grid-template-columns: 1fr 1fr; \r\n            gap: 20px; \r\n        }\r\n        .stat-card { \r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            padding: 15px; \r\n            text-align: center; \r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n        .stat-card div:first-child {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            margin-bottom: 8px;\r\n        }\r\n        .power-value { \r\n            font-family: 'VT323', monospace;\r\n            font-size: 2.5rem; \r\n            color: var(--accent2); \r\n            font-weight: bold; \r\n            text-shadow: 2px 2px 0px var(--border);\r\n        }\r\n        .slider-group { \r\n            margin: 15px 0; \r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            padding: 15px;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n        .slider-group label {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            display: block;\r\n            margin-bottom: 8px;\r\n        }\r\n        input[type=range] { \r\n            cursor: pointer; \r\n            -webkit-appearance: none;\r\n            width: 100%;\r\n            height: 12px;\r\n            border: 2px solid var(--border);\r\n            background: #e2e8f0;\r\n            outline: none;\r\n        }\r\n        input[type=range]::-webkit-slider-thumb {\r\n            -webkit-appearance: none;\r\n            width: 24px;\r\n            height: 24px;\r\n            background: var(--accent);\r\n            border: 3px solid var(--border);\r\n            cursor: pointer;\r\n        }\r\n        button { \r\n            grid-column: span 2; \r\n            padding: 15px; \r\n            background: var(--accent); \r\n            border: 4px solid var(--border); \r\n            color: var(--text); \r\n            cursor: pointer; \r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            transition: transform 0.1s, box-shadow 0.1s;\r\n            width: 100%;\r\n        }\r\n        button:active { \r\n            transform: translate(4px, 4px);\r\n            box-shadow: 0px 0px 0px var(--border);\r\n        }\r\n        .alert { \r\n            color: var(--red); \r\n            font-weight: bold; \r\n            margin-top: 10px; \r\n            display: none; \r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            text-align: center;\r\n        }\r\n        .top-info {\r\n            display: flex; \r\n            justify-content: space-between; \r\n            margin-bottom: 15px;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n        }\r\n        .max-p {\r\n            color: var(--green);\r\n            font-weight: bold;\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <h1><i class=\"fas fa-city\"></i> Power Grid Master</h1>\r\n    <p>Rregullo Tensionin (U) dhe Rrymën (I) për të plotësuar nevojat e qytetit!</p>\r\n\r\n    <div id=\"game-board\">\r\n        <div class=\"top-info\">\r\n            <div>Niveli: <span id=\"level\">1</span></div>\r\n            <div class=\"max-p\">Maksimumi i Sigurt: <span id=\"maxP\">3000</span> W</div>\r\n        </div>\r\n\r\n        <canvas id=\"powerCanvas\" width=\"600\" height=\"150\"></canvas>\r\n\r\n        <div class=\"ui-grid\">\r\n            <div class=\"stat-card\">\r\n                <div>Kërkesa e Qytetit</div>\r\n                <div class=\"power-value\" id=\"targetP\">1500 W</div>\r\n            </div>\r\n            <div class=\"stat-card\">\r\n                <div>Fuqia Juaj (P)</div>\r\n                <div class=\"power-value\" id=\"currentP\">0 W</div>\r\n            </div>\r\n            \r\n            <div class=\"slider-group\">\r\n                <label>Tensioni (U): <span id=\"uVal\">120</span> V</label>\r\n                <input type=\"range\" id=\"uInput\" min=\"10\" max=\"240\" value=\"120\" oninput=\"calculatePower()\">\r\n            </div>\r\n            <div class=\"slider-group\">\r\n                <label>Intensiteti (I): <span id=\"iVal\">10</span> A</label>\r\n                <input type=\"range\" id=\"iInput\" min=\"1\" max=\"50\" value=\"10\" oninput=\"calculatePower()\">\r\n            </div>\r\n\r\n            <button onclick=\"supplyPower()\">DËRGO ENERGJINË</button>\r\n        </div>\r\n        <div id=\"alertMsg\" class=\"alert\"><i class=\"fas fa-exclamation-triangle\"></i> KUJDES: Mbingarkesë! Sistemi do të digjet!</div>\r\n    </div>\r\n\r\n    <script>\r\n        const canvas = document.getElementById('powerCanvas');\r\n        const ctx = canvas.getContext('2d');\r\n        \r\n        let targetPower = 1500;\r\n        let maxPower = 3000;\r\n        let level = 1;\r\n\r\n        function calculatePower() {\r\n            const u = document.getElementById('uInput').value;\r\n            const i = document.getElementById('iInput').value;\r\n            const p = u * i;\r\n\r\n            document.getElementById('uVal').innerText = u;\r\n            document.getElementById('iVal').innerText = i;\r\n            document.getElementById('currentP').innerText = p + \" W\";\r\n\r\n            if (p > maxPower) {\r\n                document.getElementById('alertMsg').style.display = \"block\";\r\n            } else {\r\n                document.getElementById('alertMsg').style.display = \"none\";\r\n            }\r\n            drawGlow(p);\r\n        }\r\n\r\n        function drawGlow(p) {\r\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n            const intensity = Math.min(p / maxPower, 1);\r\n            \r\n            // Vizatimi i \"telave\" të qytetit\r\n            ctx.strokeStyle = \"#4a4e69\";\r\n            ctx.lineWidth = 8;\r\n            ctx.beginPath();\r\n            ctx.moveTo(50, 75);\r\n            ctx.lineTo(550, 75);\r\n            ctx.stroke();\r\n\r\n            if (p > 0) {\r\n                ctx.strokeStyle = p > maxPower ? \"#ffb3ba\" : \"#a2d2ff\";\r\n                ctx.lineWidth = 4 + (intensity * 6);\r\n                ctx.beginPath();\r\n                ctx.moveTo(50, 75);\r\n                ctx.lineTo(550, 75);\r\n                ctx.stroke();\r\n            }\r\n\r\n            // Qyteti\r\n            ctx.fillStyle = \"#4a4e69\";\r\n            ctx.fillRect(450, 30, 80, 90);\r\n            ctx.fillRect(420, 50, 40, 70);\r\n            ctx.fillRect(520, 40, 50, 80);\r\n\r\n            // Dritaret\r\n            ctx.fillStyle = p >= targetPower && p <= maxPower ? \"#baffc9\" : (p > maxPower ? \"#ffb3ba\" : \"#e2e8f0\");\r\n            for(let x=460; x<520; x+=20) {\r\n                for(let y=40; y<110; y+=20) {\r\n                    ctx.fillRect(x, y, 10, 10);\r\n                }\r\n            }\r\n        }\r\n\r\n        function supplyPower() {\r\n            const u = document.getElementById('uInput').value;\r\n            const i = document.getElementById('iInput').value;\r\n            const p = u * i;\r\n\r\n            if (p > maxPower) {\r\n                alert(\"Sistemi u dogj! Keni tejkaluar maksimumin e sigurt.\");\r\n                level = 1;\r\n            } else if (Math.abs(p - targetPower) <= 100) {\r\n                alert(\"Shkëlqyeshëm! Qyteti ka energji të mjaftueshme.\");\r\n                level++;\r\n                targetPower = Math.floor(Math.random() * 2000) + 1000;\r\n                maxPower = targetPower + 1000;\r\n                document.getElementById('level').innerText = level;\r\n                document.getElementById('targetP').innerText = targetPower + \" W\";\r\n                document.getElementById('maxP').innerText = maxPower;\r\n            } else if (p < targetPower) {\r\n                alert(\"Energjia nuk mjafton. Qyteti është në errësirë.\");\r\n            } else {\r\n                alert(\"Keni dërguar shumë energji, por jo aq sa të digjet sistemi. Mundohuni të jeni më afër kërkesës.\");\r\n            }\r\n            calculatePower();\r\n        }\r\n\r\n        calculatePower();\r\n    </script>\r\n</body>\r\n</html>"
  },
  {
    id: "voltage-stabilizer",
    title: "Stabilizuesi i Tensionit",
    category: "Tensioni",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Voltage Stabilizer - Loja e Tensionit</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n\r\n        body {\r\n            background: var(--bg);\r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text);\r\n            font-family: 'Inter', sans-serif;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n            height: 100vh;\r\n            margin: 0;\r\n        }\r\n\r\n        #game-container {\r\n            background: var(--surface);\r\n            padding: 30px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 8px 8px 0px var(--border);\r\n            width: 500px;\r\n            text-align: center;\r\n        }\r\n\r\n        h2 {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 3.5rem;\r\n            color: var(--accent);\r\n            text-shadow: 2px 2px 0px var(--border);\r\n            margin: 0 0 10px 0;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .target-info {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            color: var(--text);\r\n            margin-bottom: 20px;\r\n            background: var(--bg);\r\n            padding: 10px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        #targetU {\r\n            color: var(--accent2);\r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        .voltmeter {\r\n            background: var(--bg);\r\n            padding: 20px;\r\n            border-radius: 50% 50% 0 0;\r\n            border: 4px solid var(--border);\r\n            position: relative;\r\n            height: 120px;\r\n            overflow: hidden;\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.1);\r\n            margin: 0 auto 20px auto;\r\n            width: 240px;\r\n        }\r\n\r\n        #needle {\r\n            width: 6px;\r\n            height: 100px;\r\n            background: var(--accent);\r\n            position: absolute;\r\n            bottom: 0;\r\n            left: 50%;\r\n            transform-origin: bottom;\r\n            transform: translateX(-50%) rotate(-90deg);\r\n            transition: transform 0.2s;\r\n            border: 2px solid var(--border);\r\n        }\r\n\r\n        .device-icon {\r\n            font-size: 60px;\r\n            margin-bottom: 20px;\r\n            transition: filter 0.3s;\r\n        }\r\n\r\n        .screen {\r\n            background: var(--bg);\r\n            padding: 15px;\r\n            margin: 20px 0;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 3rem;\r\n            color: var(--accent2);\r\n            border: 4px solid var(--border);\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.1);\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        .controls {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 15px;\r\n            margin-top: 20px;\r\n            background: var(--bg);\r\n            padding: 20px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        .controls label {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            text-align: left;\r\n        }\r\n\r\n        input[type=range] {\r\n            width: 100%;\r\n            cursor: pointer;\r\n            -webkit-appearance: none;\r\n            height: 12px;\r\n            border: 2px solid var(--border);\r\n            background: #e2e8f0;\r\n            outline: none;\r\n        }\r\n\r\n        input[type=range]::-webkit-slider-thumb {\r\n            -webkit-appearance: none;\r\n            width: 24px;\r\n            height: 24px;\r\n            background: var(--accent);\r\n            border: 3px solid var(--border);\r\n            cursor: pointer;\r\n        }\r\n\r\n        button {\r\n            padding: 15px;\r\n            background: var(--green);\r\n            border: 4px solid var(--border);\r\n            color: var(--border);\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            font-weight: bold;\r\n            cursor: pointer;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            transition: transform 0.1s, box-shadow 0.1s;\r\n        }\r\n\r\n        button:active {\r\n            transform: translate(4px, 4px);\r\n            box-shadow: 0px 0px 0px var(--border);\r\n        }\r\n\r\n        #message {\r\n            margin-top: 20px;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            font-weight: bold;\r\n            min-height: 2.5rem;\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <div id=\"game-container\">\r\n        <h2><i class=\"fas fa-bolt\"></i> VOLTAGE STABILIZER</h2>\r\n        <div class=\"target-info\">Pajisja kërkon saktësisht: <span id=\"targetU\">220</span> V</div>\r\n        \r\n        <div class=\"voltmeter\">\r\n            <div id=\"needle\"></div>\r\n        </div>\r\n\r\n        <div class=\"device-icon\" id=\"device\">📺</div>\r\n        \r\n        <div class=\"screen\">\r\n            <span id=\"displayU\">0</span> VOLT\r\n        </div>\r\n\r\n        <div class=\"controls\">\r\n            <label>Rregullo Transformatorin (U):</label>\r\n            <input type=\"range\" id=\"uSlider\" min=\"0\" max=\"400\" value=\"0\" oninput=\"updateVoltage()\">\r\n            <button onclick=\"checkVoltage()\"><i class=\"fas fa-power-off\"></i> NDIZ PAJISJEN</button>\r\n        </div>\r\n        <div id=\"message\"></div>\r\n    </div>\r\n\r\n    <script>\r\n        let targetVoltage = 220;\r\n        let currentLevel = 1;\r\n        const devices = [\"📺\", \"💻\", \"💡\", \"🚀\", \"🤖\"];\r\n\r\n        function updateVoltage() {\r\n            const val = document.getElementById('uSlider').value;\r\n            document.getElementById('displayU').innerText = val;\r\n            \r\n            // Lëvizja e gjilpërës së Voltmetrit\r\n            // Map 0-400 në -90 deri në 90 gradë\r\n            const angle = (val / 400) * 180 - 90;\r\n            document.getElementById('needle').style.transform = `translateX(-50%) rotate(${angle}deg)`;\r\n            \r\n            // Efekti vizual i pajisjes\r\n            const device = document.getElementById('device');\r\n            if (val > targetVoltage + 20) {\r\n                device.style.filter = \"drop-shadow(0 0 10px #ffb3ba) saturate(2)\";\r\n            } else if (val < targetVoltage - 20) {\r\n                device.style.filter = \"grayscale(1)\";\r\n            } else {\r\n                device.style.filter = \"drop-shadow(0 0 15px #ffc8dd)\";\r\n            }\r\n        }\r\n\r\n        function checkVoltage() {\r\n            const val = parseInt(document.getElementById('uSlider').value);\r\n            const msg = document.getElementById('message');\r\n            const diff = Math.abs(val - targetVoltage);\r\n\r\n            if (diff <= 5) {\r\n                msg.style.color = \"#4a4e69\";\r\n                msg.style.textShadow = \"1px 1px 0px #baffc9\";\r\n                msg.innerText = \"PERFEKT! Pajisja punon me efikasitet maksimal.\";\r\n                setTimeout(nextLevel, 2000);\r\n            } else if (val > targetVoltage) {\r\n                msg.style.color = \"#4a4e69\";\r\n                msg.style.textShadow = \"1px 1px 0px #ffb3ba\";\r\n                msg.innerText = \"BOOM! Tensioni shumë i lartë. Pajisja u dogj!\";\r\n                setTimeout(resetGame, 2000);\r\n            } else {\r\n                msg.style.color = \"#4a4e69\";\r\n                msg.style.textShadow = \"1px 1px 0px #ffc8dd\";\r\n                msg.innerText = \" Tension i ulët. Pajisja nuk ka fuqi të ndizet.\";\r\n            }\r\n        }\r\n\r\n        function nextLevel() {\r\n            currentLevel++;\r\n            targetVoltage = Math.floor(Math.random() * 300) + 50;\r\n            document.getElementById('targetU').innerText = targetVoltage;\r\n            document.getElementById('device').innerText = devices[currentLevel % devices.length];\r\n            document.getElementById('uSlider').value = 0;\r\n            document.getElementById('message').innerText = \"\";\r\n            updateVoltage();\r\n        }\r\n\r\n        function resetGame() {\r\n            currentLevel = 1;\r\n            targetVoltage = 220;\r\n            document.getElementById('targetU').innerText = targetVoltage;\r\n            document.getElementById('device').innerText = devices[0];\r\n            document.getElementById('uSlider').value = 0;\r\n            document.getElementById('message').innerText = \"\";\r\n            updateVoltage();\r\n        }\r\n\r\n        updateVoltage();\r\n    </script>\r\n</body>\r\n</html>"
  },
  {
    id: "current-master",
    title: "Mjeshtri i Rrymës",
    category: "Rryma",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Current Master - Intensitetit i Rrymës</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n        * { box-sizing: border-box; margin: 0; padding: 0; }\r\n        body { \r\n            background: var(--bg); \r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text); \r\n            font-family: 'Inter', sans-serif; \r\n            display: flex; \r\n            flex-direction: column; \r\n            align-items: center; \r\n            min-height: 100vh;\r\n            padding: 20px;\r\n        }\r\n        h1 { \r\n            font-family: 'VT323', monospace; \r\n            font-size: 3.5rem; \r\n            color: var(--accent); \r\n            text-shadow: 3px 3px 0px var(--border); \r\n            margin-bottom: 4px; \r\n            letter-spacing: 2px; \r\n            text-transform: uppercase; \r\n        }\r\n        p {\r\n            color: var(--text); \r\n            font-size: 1.5rem; \r\n            margin-bottom: 24px; \r\n            font-family: 'VT323', monospace;\r\n        }\r\n        #game-container { \r\n            position: relative; \r\n            border: 4px solid var(--border); \r\n            background: var(--surface); \r\n            padding: 24px; \r\n            box-shadow: 8px 8px 0px var(--border); \r\n            width: 100%;\r\n            max-width: 600px;\r\n            margin-bottom: 20px;\r\n        }\r\n        canvas { \r\n            background: #e2e8f0; \r\n            border: 4px solid var(--border); \r\n            display: block;\r\n            width: 100%;\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.05);\r\n        }\r\n        .controls { \r\n            display: flex; \r\n            gap: 20px; \r\n            background: var(--surface); \r\n            padding: 20px; \r\n            border: 4px solid var(--border);\r\n            box-shadow: 8px 8px 0px var(--border); \r\n            width: 100%;\r\n            max-width: 600px;\r\n            flex-wrap: wrap;\r\n            justify-content: center;\r\n        }\r\n        .stat-box { \r\n            text-align: center; \r\n            min-width: 120px; \r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            padding: 10px;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n        .stat-box label {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            display: block;\r\n            margin-bottom: 8px;\r\n        }\r\n        .amp-meter { \r\n            font-family: 'VT323', monospace;\r\n            font-size: 2.5rem; \r\n            color: var(--accent2); \r\n            font-weight: bold; \r\n            text-align: center;\r\n            margin-top: 10px;\r\n            text-shadow: 2px 2px 0px var(--border);\r\n        }\r\n        input[type=range] { \r\n            cursor: pointer; \r\n            -webkit-appearance: none;\r\n            width: 100%;\r\n            height: 12px;\r\n            border: 2px solid var(--border);\r\n            background: #e2e8f0;\r\n            outline: none;\r\n        }\r\n        input[type=range]::-webkit-slider-thumb {\r\n            -webkit-appearance: none;\r\n            width: 24px;\r\n            height: 24px;\r\n            background: var(--accent);\r\n            border: 3px solid var(--border);\r\n            cursor: pointer;\r\n        }\r\n        .target-box { \r\n            color: var(--accent); \r\n            font-weight: bold; \r\n            font-size: 1.8rem; \r\n            font-family: 'VT323', monospace;\r\n            text-shadow: 2px 2px 0px var(--border);\r\n        }\r\n        #scoreDisplay {\r\n            color: var(--accent2); \r\n            font-weight: bold; \r\n            font-size: 1.8rem; \r\n            font-family: 'VT323', monospace;\r\n            text-shadow: 2px 2px 0px var(--border);\r\n        }\r\n        button { \r\n            padding: 10px 25px; \r\n            background: var(--accent); \r\n            border: 4px solid var(--border); \r\n            color: var(--text); \r\n            cursor: pointer; \r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            transition: transform 0.1s, box-shadow 0.1s;\r\n            width: 100%;\r\n        }\r\n        button:active { \r\n            transform: translate(4px, 4px);\r\n            box-shadow: 0px 0px 0px var(--border);\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <h1><i class=\"fas fa-bolt\"></i> Current Master</h1>\r\n    <p>Gjej Intensitetin e duhur (I) për të ndezur pajisjen pa e djegur atë!</p>\r\n\r\n    <div id=\"game-container\">\r\n        <div style=\"display:flex; justify-content: space-between; margin-bottom: 10px;\">\r\n            <div class=\"target-box\" id=\"targetDisplay\">Target: 2.50 A</div>\r\n            <div id=\"scoreDisplay\">Pikët: 0</div>\r\n        </div>\r\n        <canvas id=\"circuitCanvas\" width=\"500\" height=\"250\"></canvas>\r\n        <div class=\"amp-meter\" id=\"currentDisplay\">I = 0.00 A</div>\r\n    </div>\r\n\r\n    <div class=\"controls\">\r\n        <div class=\"stat-box\">\r\n            <label>Tensioni (U): <span id=\"uVal\">10</span>V</label>\r\n            <input type=\"range\" id=\"uInput\" min=\"1\" max=\"50\" value=\"10\">\r\n        </div>\r\n        <div class=\"stat-box\">\r\n            <label>Rezistenca (R): <span id=\"rVal\">10</span>Ω</label>\r\n            <input type=\"range\" id=\"rInput\" min=\"1\" max=\"50\" value=\"10\">\r\n        </div>\r\n        <button onclick=\"checkCircuit()\">AKTIVIZO</button>\r\n    </div>\r\n\r\n    <script>\r\n        const canvas = document.getElementById('circuitCanvas');\r\n        const ctx = canvas.getContext('2d');\r\n        \r\n        let targetI = (Math.random() * 4 + 0.5).toFixed(2);\r\n        let score = 0;\r\n        let particles = [];\r\n\r\n        function updateUI() {\r\n            let u = document.getElementById('uInput').value;\r\n            let r = document.getElementById('rInput').value;\r\n            let i = u / r;\r\n            \r\n            document.getElementById('uVal').innerText = u;\r\n            document.getElementById('rVal').innerText = r;\r\n            document.getElementById('currentDisplay').innerText = `I = ${i.toFixed(2)} A`;\r\n            document.getElementById('targetDisplay').innerText = `Target: ${targetI} A`;\r\n            return i;\r\n        }\r\n\r\n        function drawCircuit() {\r\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n            ctx.strokeStyle = \"#4a4e69\";\r\n            ctx.lineWidth = 6;\r\n\r\n            // Vizatimi i qarkut (katror)\r\n            ctx.strokeRect(100, 50, 300, 150);\r\n\r\n            // Bateria (U)\r\n            ctx.fillStyle = \"#ffafcc\";\r\n            ctx.fillRect(80, 100, 40, 50);\r\n            ctx.strokeRect(80, 100, 40, 50);\r\n            ctx.fillStyle = \"#4a4e69\";\r\n            ctx.font = \"20px VT323\";\r\n            ctx.fillText(\"U\", 95, 130);\r\n\r\n            // Rezistenca (R)\r\n            ctx.fillStyle = \"#a2d2ff\";\r\n            ctx.fillRect(225, 40, 50, 20);\r\n            ctx.strokeRect(225, 40, 50, 20);\r\n            ctx.fillStyle = \"#4a4e69\";\r\n            ctx.fillText(\"R\", 245, 55);\r\n\r\n            // Animacioni i rrymës (elektronet)\r\n            let i = updateUI();\r\n            if (particles.length < i * 20) {\r\n                particles.push({pos: 0, speed: i * 2});\r\n            }\r\n            if (particles.length > i * 20) particles.pop();\r\n\r\n            ctx.fillStyle = \"#ffc8dd\";\r\n            ctx.strokeStyle = \"#4a4e69\";\r\n            ctx.lineWidth = 2;\r\n            particles.forEach(p => {\r\n                p.pos += p.speed;\r\n                if (p.pos > 900) p.pos = 0;\r\n\r\n                let x, y;\r\n                if (p.pos < 300) { x = 100 + p.pos; y = 50; }\r\n                else if (p.pos < 450) { x = 400; y = 50 + (p.pos-300); }\r\n                else if (p.pos < 750) { x = 400 - (p.pos-450); y = 200; }\r\n                else { x = 100; y = 200 - (p.pos-750); }\r\n                \r\n                ctx.beginPath();\r\n                ctx.arc(x, y, 6, 0, Math.PI*2);\r\n                ctx.fill();\r\n                ctx.stroke();\r\n            });\r\n\r\n            requestAnimationFrame(drawCircuit);\r\n        }\r\n\r\n        function checkCircuit() {\r\n            let currentI = updateUI();\r\n            let diff = Math.abs(currentI - targetI);\r\n\r\n            if (diff < 0.1) {\r\n                alert(\"SUKSES! Intensiteti është perfekt.\");\r\n                score++;\r\n                targetI = (Math.random() * 4 + 0.5).toFixed(2);\r\n                document.getElementById('scoreDisplay').innerText = `Pikët: ${score}`;\r\n            } else if (currentI > targetI) {\r\n                alert(\"BOOM! Rryma është shumë e lartë, dogje pajisjen!\");\r\n                score = 0;\r\n                document.getElementById('scoreDisplay').innerText = `Pikët: ${score}`;\r\n            } else {\r\n                alert(\"Shumë dobët... Pajisja nuk ndizet.\");\r\n            }\r\n        }\r\n\r\n        drawCircuit();\r\n    </script>\r\n</body>\r\n</html>"
  },
  {
    id: "capacitor-master",
    title: "Mjeshtri i Kondensatorëve",
    category: "Kondensatori",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Capacitor Master - Fizika Lab</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n\r\n        body {\r\n            font-family: 'Inter', sans-serif;\r\n            background: var(--bg);\r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text);\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content: center;\r\n            height: 100vh;\r\n            margin: 0;\r\n            overflow: hidden;\r\n        }\r\n\r\n        #game-ui {\r\n            background: var(--surface);\r\n            padding: 20px;\r\n            border: 4px solid var(--border);\r\n            margin-bottom: 20px;\r\n            width: 600px;\r\n            display: flex;\r\n            justify-content: space-between;\r\n            box-shadow: 8px 8px 0px var(--border);\r\n        }\r\n\r\n        canvas {\r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.1), 8px 8px 0px var(--border);\r\n        }\r\n\r\n        .stat-box { \r\n            text-align: center; \r\n            background: var(--bg);\r\n            padding: 10px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            flex: 1;\r\n            margin: 0 10px;\r\n        }\r\n        .stat-box div:first-child {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            text-transform: uppercase;\r\n        }\r\n        .stat-value { \r\n            font-family: 'VT323', monospace;\r\n            font-size: 2.5rem; \r\n            font-weight: bold; \r\n            color: var(--accent2); \r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n        \r\n        .controls { \r\n            margin-top: 20px; \r\n            color: var(--text); \r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem; \r\n            background: var(--surface);\r\n            padding: 15px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            text-align: center;\r\n        }\r\n        \r\n        #message {\r\n            position: absolute;\r\n            top: 20%;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 4rem;\r\n            font-weight: bold;\r\n            text-shadow: 2px 2px 0px var(--surface), -2px -2px 0px var(--surface), 2px -2px 0px var(--surface), -2px 2px 0px var(--surface);\r\n            pointer-events: none;\r\n            z-index: 100;\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <div id=\"game-ui\">\r\n        <div class=\"stat-box\">\r\n            <div>Kapaciteti (C)</div>\r\n            <div id=\"cap-val\" class=\"stat-value\">0</div>\r\n        </div>\r\n        <div class=\"stat-box\">\r\n            <div>Ngarkesa (Q)</div>\r\n            <div id=\"charge-val\" class=\"stat-value\">0</div>\r\n        </div>\r\n        <div class=\"stat-box\">\r\n            <div>Energjia (W)</div>\r\n            <div id=\"energy-val\" class=\"stat-value\">0</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"message\"></div>\r\n    <canvas id=\"capCanvas\" width=\"700\" height=\"400\"></canvas>\r\n\r\n    <div class=\"controls\">\r\n        <i class=\"fas fa-mouse\"></i> Lëviz MIUN lart/poshtë për të ndryshuar distancën (d) | Mbaj shtypur BUTONIN e miut për të shtuar dielektrikun (ε)\r\n    </div>\r\n\r\n    <script>\r\n        const canvas = document.getElementById('capCanvas');\r\n        const ctx = canvas.getContext('2d');\r\n        const capDisp = document.getElementById('cap-val');\r\n        const qDisp = document.getElementById('charge-val');\r\n        const wDisp = document.getElementById('energy-val');\r\n        const msgDisp = document.getElementById('message');\r\n\r\n        let d = 100; // Distanca mes pllakave\r\n        let epsilon = 1; // Dielektriku\r\n        let area = 200; // Sipërfaqja e pllakave\r\n        let charge = 0;\r\n        let isPressing = false;\r\n\r\n        window.addEventListener('mousemove', (e) => {\r\n            const rect = canvas.getBoundingClientRect();\r\n            let mouseY = e.clientY - rect.top;\r\n            // Ndryshimi i distancës d bazuar në lartësinë e miut\r\n            d = Math.max(20, Math.min(180, mouseY - 100));\r\n        });\r\n\r\n        window.addEventListener('mousedown', () => isPressing = true);\r\n        window.addEventListener('mouseup', () => isPressing = false);\r\n\r\n        function update() {\r\n            // Formula: C = ε * (A / d)\r\n            if (isPressing) epsilon = Math.min(5, epsilon + 0.05);\r\n            else epsilon = Math.max(1, epsilon - 0.05);\r\n\r\n            let C = (epsilon * area) / d;\r\n            \r\n            // Ngarkesa rritet gradualisht nëse kapaciteti është i lartë\r\n            charge += C * 0.01;\r\n            \r\n            // Energjia: W = 0.5 * Q^2 / C\r\n            let W = 0.5 * (charge * charge) / C;\r\n\r\n            // UI Update\r\n            capDisp.innerText = C.toFixed(1) + \" μF\";\r\n            qDisp.innerText = charge.toFixed(0) + \" nC\";\r\n            wDisp.innerText = W.toFixed(0) + \" J\";\r\n\r\n            // Kushti i humbjes (Mbingarkesa)\r\n            if (W > 5000) {\r\n                msgDisp.innerText = \"KONDENSATORI SHPËRTHEU! 💥\";\r\n                msgDisp.style.color = \"#ffb3ba\";\r\n                charge = 0;\r\n                setTimeout(() => msgDisp.innerText = \"\", 2000);\r\n            } else if (W > 3000) {\r\n                msgDisp.innerText = \"QYTETI U NDEZ! ⚡🏙️\";\r\n                msgDisp.style.color = \"#baffc9\";\r\n            }\r\n        }\r\n\r\n        function draw() {\r\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n            \r\n            let centerY = canvas.height / 2;\r\n            let plateWidth = 300;\r\n            let startX = (canvas.width - plateWidth) / 2;\r\n\r\n            // Vizatimi i Dielektrikut (mushkëria mes pllakave)\r\n            ctx.fillStyle = `rgba(162, 210, 255, ${epsilon / 5})`; // accent2 color with opacity\r\n            ctx.fillRect(startX, centerY - d/2, plateWidth, d);\r\n            \r\n            if(epsilon > 1) {\r\n                ctx.strokeStyle = \"#4a4e69\";\r\n                ctx.lineWidth = 2;\r\n                ctx.setLineDash([5, 5]);\r\n                ctx.strokeRect(startX, centerY - d/2, plateWidth, d);\r\n                ctx.setLineDash([]);\r\n            }\r\n\r\n            // Pllaka e sipërme (Pozitive)\r\n            ctx.fillStyle = \"#ffafcc\";\r\n            ctx.fillRect(startX, centerY - d/2 - 15, plateWidth, 15);\r\n            ctx.strokeStyle = \"#4a4e69\";\r\n            ctx.lineWidth = 4;\r\n            ctx.strokeRect(startX, centerY - d/2 - 15, plateWidth, 15);\r\n\r\n            // Pllaka e poshtme (Negative)\r\n            ctx.fillStyle = \"#a2d2ff\";\r\n            ctx.fillRect(startX, centerY + d/2, plateWidth, 15);\r\n            ctx.strokeStyle = \"#4a4e69\";\r\n            ctx.lineWidth = 4;\r\n            ctx.strokeRect(startX, centerY + d/2, plateWidth, 15);\r\n            \r\n            // Vizatimi i ngarkesave (Grimcat që lëvizin)\r\n            ctx.fillStyle = \"#4a4e69\";\r\n            for(let i=0; i < charge/10; i++) {\r\n                let rx = startX + (Math.random() * plateWidth);\r\n                let ry = (centerY - d/2 - 8) + (Math.random() > 0.5 ? 0 : d + 15);\r\n                ctx.beginPath();\r\n                ctx.arc(rx, ry, 3, 0, Math.PI*2);\r\n                ctx.fill();\r\n            }\r\n\r\n            // Etiketat e formulës\r\n            ctx.fillStyle = \"#4a4e69\";\r\n            ctx.font = \"bold 20px VT323\";\r\n            ctx.fillText(\"Distanca (d): \" + d.toFixed(0) + \"px\", 20, 380);\r\n            ctx.fillText(\"Permitiviteti (ε): \" + epsilon.toFixed(1), 200, 380);\r\n        }\r\n\r\n        function loop() {\r\n            update();\r\n            draw();\r\n            requestAnimationFrame(loop);\r\n        }\r\n\r\n        loop();\r\n    </script>\r\n</body>\r\n</html>"
  },
  {
    id: "mjeshtri-tingullit",
    title: "Mjeshtri i Tingullit",
    category: "Tingulli",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Mjeshtri i Tingullit</title>\n    <link href=\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Outfit:wght@400;700&display=swap\" rel=\"stylesheet\">\n    <style>\n        :root {\n            --bg: #fdfbfb;\n            --surface: #ffffff;\n            --primary: #8ab4f8;\n            --primary-glow: rgba(138, 180, 248, 0.4);\n            --secondary: #ffb7b2;\n            --accent: #a8e6cf;\n            --text: #4a4a4a;\n            --text-muted: #888888;\n            --danger: #ff9aa2;\n            --border: rgba(0,0,0,0.08);\n        }\n\n        * {\n            box-sizing: border-box;\n            margin: 0;\n            padding: 0;\n            font-family: 'Space Grotesk', sans-serif;\n        }\n\n        body {\n            background-color: var(--bg);\n            color: var(--text);\n            min-height: 100vh;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            overflow-x: hidden;\n            background-image: \n                radial-gradient(circle at 15% 50%, rgba(138, 180, 248, 0.15), transparent 25%),\n                radial-gradient(circle at 85% 30%, rgba(255, 183, 178, 0.15), transparent 25%);\n        }\n\n        /* Header */\n        header {\n            width: 100%;\n            padding: 2rem;\n            text-align: center;\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(10px);\n            border-bottom: 1px solid var(--border);\n            margin-bottom: 2rem;\n            box-shadow: 0 4px 30px rgba(0,0,0,0.05);\n        }\n\n        h1 {\n            font-family: 'Outfit', sans-serif;\n            font-size: 2.5rem;\n            background: linear-gradient(to right, #6ba4ff, #ff9e99);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            margin-bottom: 0.5rem;\n        }\n\n        p.subtitle {\n            color: var(--text-muted);\n            font-size: 1.1rem;\n        }\n\n        /* Game Container */\n        .game-container {\n            width: 90%;\n            max-width: 1000px;\n            display: flex;\n            flex-direction: column;\n            gap: 2rem;\n            padding-bottom: 4rem;\n        }\n\n        /* Level Cards */\n        .level-card {\n            background: var(--surface);\n            border: 1px solid var(--border);\n            border-radius: 20px;\n            padding: 2rem;\n            box-shadow: 0 10px 30px rgba(0,0,0,0.05);\n            display: none;\n            animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n        }\n\n        .level-card.active {\n            display: block;\n        }\n\n        @keyframes slideUp {\n            from { opacity: 0; transform: translateY(30px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n\n        .level-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 1.5rem;\n            padding-bottom: 1rem;\n            border-bottom: 1px solid var(--border);\n        }\n\n        .level-title {\n            font-size: 1.5rem;\n            color: var(--primary);\n            font-family: 'Outfit', sans-serif;\n        }\n\n        .question-text {\n            font-size: 1.2rem;\n            line-height: 1.6;\n            margin-bottom: 2rem;\n        }\n\n        /* Drag and Drop Areas */\n        .dnd-container {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 2rem;\n        }\n\n        @media (max-width: 768px) {\n            .dnd-container { grid-template-columns: 1fr; }\n        }\n\n        .options-area {\n            background: rgba(0,0,0,0.02);\n            border-radius: 15px;\n            padding: 1.5rem;\n            min-height: 200px;\n            display: flex;\n            flex-wrap: wrap;\n            gap: 10px;\n            align-content: flex-start;\n            border: 2px dashed var(--border);\n        }\n\n        .target-area {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n        }\n\n        .drop-zone {\n            background: rgba(138, 180, 248, 0.1);\n            border: 2px dashed var(--primary);\n            border-radius: 12px;\n            padding: 1.5rem;\n            min-height: 80px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.3s ease;\n            position: relative;\n        }\n\n        .drop-zone.drag-over {\n            background: rgba(138, 180, 248, 0.2);\n            border-color: #6ba4ff;\n            transform: scale(1.02);\n            box-shadow: 0 0 20px var(--primary-glow);\n        }\n\n        .drop-zone::before {\n            content: attr(data-label);\n            position: absolute;\n            top: -10px;\n            left: 15px;\n            background: var(--surface);\n            padding: 0 10px;\n            font-size: 0.85rem;\n            color: var(--primary);\n            border-radius: 10px;\n        }\n\n        /* Draggable Items */\n        .draggable {\n            background: linear-gradient(135deg, #8ab4f8, #ffb7b2);\n            color: white;\n            padding: 10px 20px;\n            border-radius: 30px;\n            cursor: grab;\n            user-select: none;\n            font-weight: 500;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.08);\n            transition: transform 0.2s, box-shadow 0.2s;\n            display: inline-block;\n            z-index: 10;\n        }\n\n        .draggable:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 6px 20px var(--primary-glow);\n        }\n\n        .draggable:active {\n            cursor: grabbing;\n            transform: scale(0.95);\n        }\n\n        .draggable.dragging {\n            opacity: 0.5;\n        }\n\n        /* Fill in the blanks specific */\n        .sentence {\n            line-height: 2.5;\n            font-size: 1.1rem;\n        }\n\n        .inline-drop {\n            display: inline-flex;\n            min-width: 150px;\n            height: 40px;\n            background: rgba(0,0,0,0.02);\n            border: 2px dashed var(--text-muted);\n            border-radius: 20px;\n            vertical-align: middle;\n            margin: 0 5px;\n            align-items: center;\n            justify-content: center;\n            transition: 0.3s;\n        }\n\n        .inline-drop.drag-over {\n            border-color: #88d49e;\n            background: rgba(168, 230, 207, 0.2);\n        }\n\n        .inline-drop .draggable {\n            margin: 0;\n            padding: 5px 15px;\n            font-size: 0.9rem;\n        }\n\n        /* Buttons & Controls */\n        .controls {\n            display: flex;\n            justify-content: space-between;\n            margin-top: 2rem;\n            padding-top: 1.5rem;\n            border-top: 1px solid var(--border);\n        }\n\n        button {\n            background: transparent;\n            border: 2px solid var(--primary);\n            color: var(--primary);\n            padding: 12px 24px;\n            border-radius: 30px;\n            font-size: 1.1rem;\n            font-weight: bold;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            font-family: 'Outfit', sans-serif;\n        }\n\n        button:hover {\n            background: var(--primary);\n            color: white;\n            box-shadow: 0 0 20px var(--primary-glow);\n        }\n\n        button:disabled {\n            border-color: var(--text-muted);\n            color: var(--text-muted);\n            cursor: not-allowed;\n            background: transparent;\n            box-shadow: none;\n        }\n\n        .btn-check {\n            background: #88d49e;\n            border-color: #88d49e;\n            color: white;\n        }\n\n        .btn-check:hover {\n            background: #76c28c;\n            box-shadow: 0 0 20px rgba(168, 230, 207, 0.6);\n        }\n\n        /* Feedback */\n        .feedback {\n            text-align: center;\n            font-size: 1.2rem;\n            font-weight: bold;\n            min-height: 30px;\n            margin-top: 1rem;\n            opacity: 0;\n            transition: opacity 0.3s;\n        }\n\n        .feedback.show {\n            opacity: 1;\n        }\n\n        .feedback.success { color: #76c28c; }\n        .feedback.error { color: var(--danger); }\n\n        /* Audio Wave Animation */\n        .wave-container {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 5px;\n            height: 50px;\n            margin-bottom: 2rem;\n        }\n\n        .bar {\n            width: 6px;\n            background: var(--primary);\n            border-radius: 3px;\n            animation: soundWave 1s ease-in-out infinite alternate;\n        }\n\n        .bar:nth-child(1) { height: 20%; animation-delay: 0.0s; }\n        .bar:nth-child(2) { height: 50%; animation-delay: 0.1s; }\n        .bar:nth-child(3) { height: 90%; animation-delay: 0.2s; }\n        .bar:nth-child(4) { height: 60%; animation-delay: 0.3s; }\n        .bar:nth-child(5) { height: 30%; animation-delay: 0.4s; }\n        .bar:nth-child(6) { height: 80%; animation-delay: 0.5s; }\n        .bar:nth-child(7) { height: 40%; animation-delay: 0.6s; }\n\n        @keyframes soundWave {\n            0% { transform: scaleY(0.2); background: var(--primary); }\n            100% { transform: scaleY(1); background: var(--secondary); }\n        }\n\n        /* Victory Screen */\n        #victory-screen {\n            text-align: center;\n            padding: 4rem 2rem;\n        }\n\n        .trophy {\n            font-size: 6rem;\n            margin-bottom: 1rem;\n            animation: bounce 2s infinite;\n        }\n\n        @keyframes bounce {\n            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }\n            40% { transform: translateY(-30px); }\n            60% { transform: translateY(-15px); }\n        }\n\n    </style>\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\n<body>\n\n    <header>\n        <h1>Mjeshtri i Tingullit</h1>\n        <p class=\"subtitle\">Eksploro botën e valëve zanore dhe akustikës</p>\n    </header>\n\n    <div class=\"wave-container\">\n        <div class=\"bar\"></div><div class=\"bar\"></div><div class=\"bar\"></div>\n        <div class=\"bar\"></div><div class=\"bar\"></div><div class=\"bar\"></div><div class=\"bar\"></div>\n    </div>\n\n    <div class=\"game-container\">\n        \n        <!-- Level 1: Burimet -->\n        <div class=\"level-card active\" id=\"level-1\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 1: Burimet e Tingullit</span>\n                <span>1 / 10</span>\n            </div>\n            <p class=\"question-text\">Kordat vokale të njeriut dhe altoparlanti janë burime valësh zanore. Tërhiq 3 burime të tjera të sakta në zonën e përgjigjeve!</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-1\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"zile\">Zilja e derës</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"drite\">Llambushka e dritës</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"kitar\">Telat e kitarës</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"hije\">Hija e pemës</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"det\">Valët e detit</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"pasqyre\">Pasqyra</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Burimet e sakta\" id=\"target-1\" data-max=\"3\">\n                        <!-- Drop here -->\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-1\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(1)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel1()\">Kontrollo</button>\n                <button id=\"next-1\" disabled onclick=\"nextLevel(2)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 2: Vakumi -->\n        <div class=\"level-card\" id=\"level-2\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 2: Tingulli në Vakum</span>\n                <span>2 / 10</span>\n            </div>\n            <p class=\"question-text\">Shpjegoni përse tingulli nuk mund të përhapet në vakum! Gjej shpjegimin e saktë dhe vendose në kuti.</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-2\" style=\"flex-direction: column;\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong1\" style=\"width: 100%; white-space: normal; text-align: left;\">Sepse vakumi është shumë i ftohtë dhe ngrin valët.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"correct\" style=\"width: 100%; white-space: normal; text-align: left;\">Valët zanore janë valë mekanike dhe kërkojnë mjedis lëndor (thërrmija) për t'u përhapur.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong2\" style=\"width: 100%; white-space: normal; text-align: left;\">Sepse drita udhëton më shpejt se tingulli në vakum.</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Shpjegimi i saktë\" id=\"target-2\" data-max=\"1\"></div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-2\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(2)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel2()\">Kontrollo</button>\n                <button id=\"next-2\" disabled onclick=\"nextLevel(3)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 3: Shpejtësia -->\n        <div class=\"level-card\" id=\"level-3\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 3: Shpejtësia e Tingullit</span>\n                <span>3 / 10</span>\n            </div>\n            <p class=\"question-text\">Në lidhje me shpejtësinë e përhapjes së tingullit, tërhiq pohimin e VËRTETË në kutinë e saktë.</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-3\" style=\"flex-direction: column;\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong1\" style=\"width: 100%; white-space: normal; text-align: left;\">Shpejtësia nuk varet nga temperatura e ambientit.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong2\" style=\"width: 100%; white-space: normal; text-align: left;\">Shpejtësia varet nga teknologjia e burimit.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong3\" style=\"width: 100%; white-space: normal; text-align: left;\">Shpejtësia është më e madhe në lëngje se në trupat e ngurtë.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"correct\" style=\"width: 100%; white-space: normal; text-align: left;\">Të gjitha pohimet e mësipërme janë të gabuara.</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Pohimi i vërtetë\" id=\"target-3\" data-max=\"1\"></div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-3\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(3)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel3()\">Kontrollo</button>\n                <button id=\"next-3\" disabled onclick=\"nextLevel(4)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 4: Veshi -->\n        <div class=\"level-card\" id=\"level-4\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 4: Anatomia e Dëgjimit</span>\n                <span>4 / 10</span>\n            </div>\n            <p class=\"question-text\">Plotëso fjalitë duke tërhequr fjalët e duhura në hapësirat boshe.</p>\n            \n            <div class=\"options-area\" id=\"options-4\" style=\"margin-bottom: 2rem; min-height: auto;\">\n                <div class=\"draggable\" draggable=\"true\" data-id=\"kanali\">kanalin e dëgjimit</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"timpani\">timpani i veshit</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"kockat\">kockave të vogla</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"kermilli\">kërmilli</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"veshi_brendshem\">veshin e brendshëm</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"nervi\">nervit të dëgjimit</div>\n            </div>\n\n            <div class=\"sentence\">\n                Kur dëgjojmë muzikë vala zanore kalon nëpër <div class=\"inline-drop\" id=\"t4-1\" data-ans=\"kanali\"></div> \n                dhe bën që <div class=\"inline-drop\" id=\"t4-2\" data-ans=\"timpani\"></div> të lëkundet. \n                Këto lëkundje i tejçohen <div class=\"inline-drop\" id=\"t4-3\" data-ans=\"kockat\"></div>. \n                Kanalet gjysmë rrethorë dhe <div class=\"inline-drop\" id=\"t4-4\" data-ans=\"kermilli\"></div> \n                përbëjnë <div class=\"inline-drop\" id=\"t4-5\" data-ans=\"veshi_brendshem\"></div>. \n                Lëngu brenda tij lëkundet dhe shkakton sinjale bioelektrikë që me anë të \n                <div class=\"inline-drop\" id=\"t4-6\" data-ans=\"nervi\"></div> kalojnë në tru.\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-4\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(4)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel4()\">Kontrollo</button>\n                <button id=\"next-4\" disabled onclick=\"nextLevel(5)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 5: Përputhja -->\n        <div class=\"level-card\" id=\"level-5\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 5: Fjalori i Valëve</span>\n                <span>5 / 10</span>\n            </div>\n            <p class=\"question-text\">Përputhni termat me përcaktimet e sakta.</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-5\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"dendesim\">Dendësim</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"mjedis\">Mjedis</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"rrallim\">Rrallim</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"lekundet\">Lëkundet</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Pjesëzat pranë njëra tjetrës\" id=\"t5-1\" data-ans=\"dendesim\" data-max=\"1\" style=\"min-height: 60px; padding: 1rem;\"></div>\n                    <div class=\"drop-zone\" data-label=\"Trupi ku përhapet vala\" id=\"t5-2\" data-ans=\"mjedis\" data-max=\"1\" style=\"min-height: 60px; padding: 1rem;\"></div>\n                    <div class=\"drop-zone\" data-label=\"Pjesëzat larg njëra tjetrës\" id=\"t5-3\" data-ans=\"rrallim\" data-max=\"1\" style=\"min-height: 60px; padding: 1rem;\"></div>\n                    <div class=\"drop-zone\" data-label=\"Vala prodhohet nga trupi që...\" id=\"t5-4\" data-ans=\"lekundet\" data-max=\"1\" style=\"min-height: 60px; padding: 1rem;\"></div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-5\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(5)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel5()\">Kontrollo</button>\n                <button id=\"next-5\" disabled onclick=\"nextLevel(6)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 6: Ngjashmëria Vesh-Mikrofon -->\n        <div class=\"level-card\" id=\"level-6\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 6: Veshi dhe Mikrofoni</span>\n                <span>6 / 10</span>\n            </div>\n            <p class=\"question-text\">Në çfarë kuptimi veshi i njeriut është i ngjashëm me një mikrofon? Tërhiq shpjegimin e saktë.</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-6\" style=\"flex-direction: column;\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong1\" style=\"width: 100%; white-space: normal; text-align: left;\">Të dy prodhojnë valë zanore nga energjia elektrike.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"correct\" style=\"width: 100%; white-space: normal; text-align: left;\">Të dy shndërrojnë valët zanore në sinjale (veshi në bioelektrikë, mikrofoni në elektrikë).</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong2\" style=\"width: 100%; white-space: normal; text-align: left;\">Të dy përdorin magnete për të kapur tingullin.</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Shpjegimi i saktë\" id=\"target-6\" data-max=\"1\"></div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-6\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(6)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel6()\">Kontrollo</button>\n                <button id=\"next-6\" disabled onclick=\"nextLevel(7)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 7: Molekulat e Ajrit -->\n        <div class=\"level-card\" id=\"level-7\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 7: Molekulat e Ajrit</span>\n                <span>7 / 10</span>\n            </div>\n            <p class=\"question-text\">Çfarë ndodh me molekulat e ajrit kur flisni? Tërhiq pohimin e VËRTETË.</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-7\" style=\"flex-direction: column;\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong1\" style=\"width: 100%; white-space: normal; text-align: left;\">Molekulat e ajrit zhvendosen në largësi.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong2\" style=\"width: 100%; white-space: normal; text-align: left;\">Molekulat e ajrit lëkunden lart-poshtë.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"correct\" style=\"width: 100%; white-space: normal; text-align: left;\">Vala zanore bën që molekulat e ajrit të lëkunden para-mbrapa.</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Pohimi i vërtetë\" id=\"target-7\" data-max=\"1\"></div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-7\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(7)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel7()\">Kontrollo</button>\n                <button id=\"next-7\" disabled onclick=\"nextLevel(8)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 8: Karakteristikat e Tingullit -->\n        <div class=\"level-card\" id=\"level-8\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 8: Karakteristikat e Tingullit</span>\n                <span>8 / 10</span>\n            </div>\n            <p class=\"question-text\">Ndër pohimet e mëposhtme, tërhiq 2 pohimet e VËRTETA në kuti.</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-8\" style=\"flex-direction: column;\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"correct1\" style=\"width: 100%; white-space: normal; text-align: left;\">Një tingull mund të jetë i ulët dhe i fortë.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong1\" style=\"width: 100%; white-space: normal; text-align: left;\">Një tingull mund të jetë i ulët dhe me frekuencë të madhe.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"correct2\" style=\"width: 100%; white-space: normal; text-align: left;\">Një tingull mund të jetë i lartë dhe i dobët.</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"wrong2\" style=\"width: 100%; white-space: normal; text-align: left;\">Një tingull mund të jetë i lartë dhe me frekuencë të vogël.</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Pohimet e vërteta (2)\" id=\"target-8\" data-max=\"2\"></div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-8\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(8)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel8()\">Kontrollo</button>\n                <button id=\"next-8\" disabled onclick=\"nextLevel(9)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 9: Lartësia dhe Frekuenca -->\n        <div class=\"level-card\" id=\"level-9\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 9: Lartësia dhe Frekuenca</span>\n                <span>9 / 10</span>\n            </div>\n            <p class=\"question-text\">Zgjidh fjalët e sakta për të plotësuar fjalitë.</p>\n            \n            <div class=\"options-area\" id=\"options-9\" style=\"margin-bottom: 2rem; min-height: auto;\">\n                <div class=\"draggable\" draggable=\"true\" data-id=\"frekuenca\">frekuenca</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"madhe\">më të madhe</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"mije\">mijë</div>\n                <div class=\"draggable\" draggable=\"true\" data-id=\"sekonda\">sekondë</div>\n            </div>\n\n            <div class=\"sentence\">\n                Lartësia e tingullit varet nga <div class=\"inline-drop\" id=\"t9-1\" data-ans=\"frekuenca\"></div> e valës zanore.<br>\n                Tingulli i lartë ka frekuencë <div class=\"inline-drop\" id=\"t9-2\" data-ans=\"madhe\"></div> se tingulli i ulët.<br>\n                Veshi i njeriut percepton tinguj me frekuencë nga 20 Hz deri 20 <div class=\"inline-drop\" id=\"t9-3\" data-ans=\"mije\"></div> Hz.<br>\n                Frekuenca e shprehur në Hz është numri i valëve në një <div class=\"inline-drop\" id=\"t9-4\" data-ans=\"sekonda\"></div>.\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-9\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(9)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel9()\">Kontrollo</button>\n                <button id=\"next-9\" disabled onclick=\"nextLevel(10)\">Vazhdo ➡</button>\n            </div>\n        </div>\n\n        <!-- Level 10: Sonari -->\n        <div class=\"level-card\" id=\"level-10\">\n            <div class=\"level-header\">\n                <span class=\"level-title\">Niveli 10: Llogaritje me Sonar</span>\n                <span>10 / 10</span>\n            </div>\n            <p class=\"question-text\">Një impuls ultratingujsh i dërguar nga sonari kapet 0.4 s pas pasqyrimit. Shpejtësia e tingullit në ujë është 1500 m/s. Përputh vlerat me pyetjet.</p>\n            \n            <div class=\"dnd-container\">\n                <div class=\"options-area\" id=\"options-10\">\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"koha\">0.2 s</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"largesia\">300 m</div>\n                    <div class=\"draggable\" draggable=\"true\" data-id=\"tjeter\">Objekt tjetër më larg</div>\n                </div>\n                <div class=\"target-area\">\n                    <div class=\"drop-zone\" data-label=\"Koha nga anija te peshqit\" id=\"t10-1\" data-ans=\"koha\" data-max=\"1\" style=\"min-height: 60px; padding: 1rem;\"></div>\n                    <div class=\"drop-zone\" data-label=\"Largësia e peshqve nga anija\" id=\"t10-2\" data-ans=\"largesia\" data-max=\"1\" style=\"min-height: 60px; padding: 1rem;\"></div>\n                    <div class=\"drop-zone\" data-label=\"Pse ka një sinjal tjetër?\" id=\"t10-3\" data-ans=\"tjeter\" data-max=\"1\" style=\"min-height: 60px; padding: 1rem;\"></div>\n                </div>\n            </div>\n\n            <div class=\"feedback\" id=\"feedback-10\"></div>\n            \n            <div class=\"controls\">\n                <button onclick=\"resetLevel(10)\">Rifillo</button>\n                <button class=\"btn-check\" onclick=\"checkLevel10()\">Kontrollo</button>\n                <button id=\"next-10\" disabled onclick=\"showVictory()\">Përfundo ➡</button>\n            </div>\n        </div>\n\n        <!-- Victory -->\n        <div class=\"level-card\" id=\"victory-screen\">\n            <div class=\"trophy\">🏆</div>\n            <h2 style=\"font-size: 2.5rem; color: var(--accent); margin-bottom: 1rem; font-family: 'Outfit';\">Urime, Mjeshtër!</h2>\n            <p style=\"font-size: 1.2rem; margin-bottom: 2rem;\">Ke zotëruar me sukses njohuritë mbi valët zanore dhe akustikën.</p>\n            <button class=\"btn-check\" onclick=\"location.reload()\">Luaj Përsëri</button>\n        </div>\n\n    </div>\n\n    <script>\n        // --- Drag and Drop Logic ---\n        let draggedItem = null;\n\n        document.addEventListener('dragstart', (e) => {\n            if (e.target.classList.contains('draggable')) {\n                draggedItem = e.target;\n                setTimeout(() => e.target.classList.add('dragging'), 0);\n            }\n        });\n\n        document.addEventListener('dragend', (e) => {\n            if (e.target.classList.contains('draggable')) {\n                e.target.classList.remove('dragging');\n                draggedItem = null;\n                document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));\n            }\n        });\n\n        const dropZones = document.querySelectorAll('.drop-zone, .inline-drop, .options-area');\n\n        dropZones.forEach(zone => {\n            zone.addEventListener('dragover', e => {\n                e.preventDefault();\n                if (zone.classList.contains('options-area')) return;\n                \n                // Check capacity\n                const max = parseInt(zone.getAttribute('data-max') || '1');\n                const currentCount = zone.querySelectorAll('.draggable').length;\n                \n                if (currentCount < max || zone === draggedItem.parentElement) {\n                    zone.classList.add('drag-over');\n                }\n            });\n\n            zone.addEventListener('dragleave', () => {\n                zone.classList.remove('drag-over');\n            });\n\n            zone.addEventListener('drop', e => {\n                e.preventDefault();\n                zone.classList.remove('drag-over');\n                \n                if (!draggedItem) return;\n\n                if (zone.classList.contains('options-area')) {\n                    zone.appendChild(draggedItem);\n                    return;\n                }\n\n                const max = parseInt(zone.getAttribute('data-max') || '1');\n                const currentCount = zone.querySelectorAll('.draggable').length;\n\n                if (currentCount < max) {\n                    zone.appendChild(draggedItem);\n                } else if (max === 1 && currentCount === 1) {\n                    // Swap items if max is 1\n                    const existingItem = zone.querySelector('.draggable');\n                    const sourceZone = draggedItem.parentElement;\n                    zone.appendChild(draggedItem);\n                    sourceZone.appendChild(existingItem);\n                }\n            });\n        });\n\n        // --- Game Logic ---\n        function showFeedback(level, isCorrect, msg) {\n            const fb = document.getElementById(`feedback-${level}`);\n            fb.innerText = msg;\n            fb.className = `feedback show ${isCorrect ? 'success' : 'error'}`;\n            if (isCorrect) {\n                document.getElementById(`next-${level}`).disabled = false;\n            }\n        }\n\n        function resetLevel(level) {\n            const optionsArea = document.getElementById(`options-${level}`);\n            const targets = document.querySelectorAll(`#level-${level} .drop-zone, #level-${level} .inline-drop`);\n            \n            targets.forEach(t => {\n                const items = t.querySelectorAll('.draggable');\n                items.forEach(item => optionsArea.appendChild(item));\n            });\n            \n            document.getElementById(`feedback-${level}`).className = 'feedback';\n            document.getElementById(`next-${level}`).disabled = true;\n        }\n\n        function nextLevel(n) {\n            document.querySelectorAll('.level-card').forEach(c => c.classList.remove('active'));\n            document.getElementById(`level-${n}`).classList.add('active');\n        }\n\n        function showVictory() {\n            document.querySelectorAll('.level-card').forEach(c => c.classList.remove('active'));\n            document.getElementById('victory-screen').classList.add('active');\n        }\n\n        // Specific Checks\n        function checkLevel1() {\n            const target = document.getElementById('target-1');\n            const items = Array.from(target.querySelectorAll('.draggable')).map(el => el.getAttribute('data-id'));\n            \n            const correctAnswers = ['zile', 'kitar', 'det'];\n            const isCorrect = items.length === 3 && items.every(i => correctAnswers.includes(i));\n            \n            if (items.length < 3) showFeedback(1, false, \"Të lutem vendos 3 burime.\");\n            else if (isCorrect) showFeedback(1, true, \"Saktë! Këto janë burime tingujsh.\");\n            else showFeedback(1, false, \"E gabuar. Disa nga këto nuk prodhojnë tingull (p.sh. drita, hija, pasqyra).\");\n        }\n\n        function checkLevel2() {\n            const target = document.getElementById('target-2');\n            const item = target.querySelector('.draggable');\n            \n            if (!item) showFeedback(2, false, \"Të lutem zgjidh një përgjigje.\");\n            else if (item.getAttribute('data-id') === 'correct') showFeedback(2, true, \"Saktë! Tingulli ka nevojë për mjedis lëndor.\");\n            else showFeedback(2, false, \"E gabuar. Lexo me kujdes vetitë e valëve mekanike.\");\n        }\n\n        function checkLevel3() {\n            const target = document.getElementById('target-3');\n            const item = target.querySelector('.draggable');\n            \n            if (!item) showFeedback(3, false, \"Të lutem zgjidh një përgjigje.\");\n            else if (item.getAttribute('data-id') === 'correct') showFeedback(3, true, \"Saktë! Të gjitha pohimet a, b, c janë të gabuara.\");\n            else showFeedback(3, false, \"E gabuar. Kujto: shpejtësia varet nga temperatura dhe është më e madhe në trupa të ngurtë.\");\n        }\n\n        function checkLevel4() {\n            let correct = true;\n            for(let i=1; i<=6; i++) {\n                const drop = document.getElementById(`t4-${i}`);\n                const item = drop.querySelector('.draggable');\n                const ans = drop.getAttribute('data-ans');\n                \n                if (!item || item.getAttribute('data-id') !== ans) {\n                    correct = false;\n                    drop.style.borderColor = 'var(--danger)';\n                } else {\n                    drop.style.borderColor = '#88d49e';\n                }\n            }\n\n            if (correct) showFeedback(4, true, \"Shkëlqyeshëm! Ke plotësuar saktë rrugën e tingullit në vesh.\");\n            else showFeedback(4, false, \"Ka disa gabime. Kontrollo ngjyrat e kutive.\");\n        }\n\n        function checkLevel5() {\n            let correct = true;\n            for(let i=1; i<=4; i++) {\n                const drop = document.getElementById(`t5-${i}`);\n                const item = drop.querySelector('.draggable');\n                const ans = drop.getAttribute('data-ans');\n                \n                if (!item || item.getAttribute('data-id') !== ans) {\n                    correct = false;\n                    drop.style.borderColor = 'var(--danger)';\n                } else {\n                    drop.style.borderColor = '#88d49e';\n                }\n            }\n\n            if (correct) showFeedback(5, true, \"Perfekt! I ke përputhur saktë të gjitha termat.\");\n            else showFeedback(5, false, \"Ka disa gabime. Provo t'i ndryshosh vendet.\");\n        }\n\n        function checkLevel6() {\n            const target = document.getElementById('target-6');\n            const item = target.querySelector('.draggable');\n            \n            if (!item) showFeedback(6, false, \"Të lutem zgjidh një përgjigje.\");\n            else if (item.getAttribute('data-id') === 'correct') showFeedback(6, true, \"Saktë! Të dy bëjnë shndërrimin e valëve zanore në sinjale.\");\n            else showFeedback(6, false, \"E gabuar. Mendo për funksionin e tyre kryesor të shndërrimit të energjisë.\");\n        }\n\n        function checkLevel7() {\n            const target = document.getElementById('target-7');\n            const item = target.querySelector('.draggable');\n            \n            if (!item) showFeedback(7, false, \"Të lutem zgjidh një përgjigje.\");\n            else if (item.getAttribute('data-id') === 'correct') showFeedback(7, true, \"Saktë! Valët zanore janë valë gjatësore ku molekulat lëkunden para-mbrapa.\");\n            else showFeedback(7, false, \"E gabuar. Kujto që valët zanore në ajër janë valë gjatësore.\");\n        }\n\n        function checkLevel8() {\n            const target = document.getElementById('target-8');\n            const items = Array.from(target.querySelectorAll('.draggable')).map(el => el.getAttribute('data-id'));\n            \n            const correctAnswers = ['correct1', 'correct2'];\n            const isCorrect = items.length === 2 && items.every(i => correctAnswers.includes(i));\n            \n            if (items.length < 2) showFeedback(8, false, \"Të lutem vendos 2 pohime.\");\n            else if (isCorrect) showFeedback(8, true, \"Saktë! Lartësia varet nga frekuenca, ndërsa fortësia varet nga amplituda.\");\n            else showFeedback(8, false, \"E gabuar. Kujto: Tingulli i lartë = frekuencë e madhe. Tingulli i ulët = frekuencë e vogël.\");\n        }\n\n        function checkLevel9() {\n            let correct = true;\n            for(let i=1; i<=4; i++) {\n                const drop = document.getElementById(`t9-${i}`);\n                const item = drop.querySelector('.draggable');\n                const ans = drop.getAttribute('data-ans');\n                \n                if (!item || item.getAttribute('data-id') !== ans) {\n                    correct = false;\n                    drop.style.borderColor = 'var(--danger)';\n                } else {\n                    drop.style.borderColor = '#88d49e';\n                }\n            }\n\n            if (correct) showFeedback(9, true, \"Shkëlqyeshëm! Ke plotësuar saktë fjalitë.\");\n            else showFeedback(9, false, \"Ka disa gabime. Kontrollo ngjyrat e kutive.\");\n        }\n\n        function checkLevel10() {\n            let correct = true;\n            for(let i=1; i<=3; i++) {\n                const drop = document.getElementById(`t10-${i}`);\n                const item = drop.querySelector('.draggable');\n                const ans = drop.getAttribute('data-ans');\n                \n                if (!item || item.getAttribute('data-id') !== ans) {\n                    correct = false;\n                    drop.style.borderColor = 'var(--danger)';\n                } else {\n                    drop.style.borderColor = '#88d49e';\n                }\n            }\n\n            if (correct) showFeedback(10, true, \"Perfekt! Llogaritjet dhe arsyetimi janë të sakta.\");\n            else showFeedback(10, false, \"Ka disa gabime. Kujto: Koha te peshqit është gjysma e kohës totale (0.4 / 2 = 0.2s).\");\n        }\n\n    </script>\n</body>\n</html>\n"
  },
  {
    id: "sfida-matures",
    title: "Sfida e Maturës",
    category: "Përgatitje",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Sfida e Maturës - Fizika</title>\n    <link href=\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Orbitron:wght@400;700&family=Outfit:wght@300;400;600&display=swap\" rel=\"stylesheet\">\n    <style>\n        :root {\n            --bg: #fdfbfb;\n            --card: #ffffff;\n            --primary: #8ab4f8;\n            --secondary: #ffb7b2;\n            --accent: #a8e6cf;\n            --success: #88d49e;\n            --error: #ff9aa2;\n            --text: #4a4a4a;\n            --border: rgba(0, 0, 0, 0.08);\n        }\n\n        * {\n            box-sizing: border-box;\n            margin: 0;\n            padding: 0;\n            font-family: 'Outfit', sans-serif;\n        }\n\n        body {\n            background-color: var(--bg);\n            color: var(--text);\n            min-height: 100vh;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            overflow: hidden;\n            background-image: \n                radial-gradient(circle at 10% 20%, rgba(138, 180, 248, 0.15) 0%, transparent 40%),\n                radial-gradient(circle at 90% 80%, rgba(255, 183, 178, 0.15) 0%, transparent 40%);\n        }\n\n        .game-container {\n            width: 95%;\n            max-width: 1200px;\n            height: 90vh;\n            display: grid;\n            grid-template-columns: 300px 1fr;\n            grid-template-rows: auto 1fr;\n            gap: 20px;\n            padding: 20px;\n        }\n\n        @media (max-width: 900px) {\n            .game-container {\n                grid-template-columns: 1fr;\n                grid-template-rows: auto auto 1fr;\n                height: auto;\n                overflow-y: auto;\n            }\n        }\n\n        /* --- HEADER --- */\n        .header {\n            grid-column: 1 / -1;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            background: var(--card);\n            padding: 20px 30px;\n            border-radius: 24px;\n            border: 1px solid var(--border);\n            backdrop-filter: blur(10px);\n        }\n\n        .header h1 {\n            font-family: 'Orbitron', sans-serif;\n            font-size: 1.5rem;\n            background: linear-gradient(to right, var(--primary), var(--accent));\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            letter-spacing: 2px;\n        }\n\n        .stats-row {\n            display: flex;\n            gap: 20px;\n        }\n\n        .stat-pill {\n            background: rgba(0, 0, 0, 0.03);\n            padding: 8px 16px;\n            border-radius: 100px;\n            border: 1px solid var(--border);\n            font-size: 0.9rem;\n            font-weight: 600;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n\n        /* --- SIDEBAR --- */\n        .sidebar {\n            background: var(--card);\n            border-radius: 24px;\n            border: 1px solid var(--border);\n            padding: 25px;\n            display: flex;\n            flex-direction: column;\n            gap: 20px;\n            overflow-y: auto;\n        }\n\n        .level-card {\n            background: rgba(0, 0, 0, 0.02);\n            border: 1px solid var(--border);\n            padding: 15px;\n            border-radius: 16px;\n            cursor: pointer;\n            transition: 0.3s;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .level-card.active {\n            border-color: var(--primary);\n            background: rgba(138, 180, 248, 0.1);\n        }\n\n        .level-card.locked {\n            opacity: 0.5;\n            cursor: not-allowed;\n        }\n\n        .level-card.locked::after {\n            content: '🔒';\n            position: absolute;\n            right: 15px;\n            top: 50%;\n            transform: translateY(-50%);\n        }\n\n        .level-title {\n            font-weight: 700;\n            font-size: 1rem;\n            margin-bottom: 4px;\n        }\n\n        .level-desc {\n            font-size: 0.8rem;\n            opacity: 0.6;\n        }\n\n        /* --- MAIN AREA --- */\n        .main-area {\n            background: var(--card);\n            border-radius: 24px;\n            border: 1px solid var(--border);\n            padding: 40px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .question-box {\n            width: 100%;\n            max-width: 700px;\n            text-align: center;\n            animation: fadeIn 0.5s ease-out;\n        }\n\n        @keyframes fadeIn {\n            from { opacity: 0; transform: translateY(20px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n\n        .question-text {\n            font-size: 1.8rem;\n            font-weight: 600;\n            margin-bottom: 40px;\n            line-height: 1.4;\n            font-family: 'Space Grotesk', sans-serif;\n        }\n\n        .options-grid {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 15px;\n            width: 100%;\n        }\n\n        @media (max-width: 600px) {\n            .options-grid {\n                grid-template-columns: 1fr;\n            }\n        }\n\n        .option-btn {\n            background: rgba(0, 0, 0, 0.02);\n            border: 1px solid var(--border);\n            padding: 20px;\n            border-radius: 16px;\n            color: var(--text);\n            font-size: 1.1rem;\n            font-weight: 500;\n            cursor: pointer;\n            transition: all 0.2s;\n            text-align: left;\n            display: flex;\n            align-items: center;\n            gap: 15px;\n        }\n\n        .option-btn:hover:not(.disabled) {\n            background: rgba(0, 0, 0, 0.05);\n            border-color: var(--primary);\n            transform: translateX(5px);\n        }\n\n        .option-btn.correct {\n            background: rgba(136, 212, 158, 0.2);\n            border-color: var(--success);\n            color: #2e7d32;\n        }\n\n        .option-btn.wrong {\n            background: rgba(255, 154, 162, 0.2);\n            border-color: var(--error);\n            color: #c62828;\n        }\n\n        .option-btn.disabled {\n            cursor: default;\n        }\n\n        .progress-container {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            height: 6px;\n            background: rgba(0, 0, 0, 0.05);\n        }\n\n        .progress-bar {\n            height: 100%;\n            background: linear-gradient(to right, var(--primary), var(--accent));\n            width: 0%;\n            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        /* --- VICTORY SCREEN --- */\n        .victory-overlay {\n            position: fixed;\n            top: 0; left: 0; width: 100%; height: 100%;\n            background: var(--bg);\n            display: none;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            z-index: 1000;\n            text-align: center;\n            padding: 40px;\n        }\n\n        .victory-title {\n            font-family: 'Orbitron', sans-serif;\n            font-size: 4rem;\n            color: var(--primary);\n            margin-bottom: 20px;\n            text-shadow: 0 0 30px rgba(138, 180, 248, 0.5);\n        }\n\n        .btn-restart {\n            margin-top: 30px;\n            padding: 15px 40px;\n            background: var(--primary);\n            color: var(--bg);\n            border: none;\n            border-radius: 12px;\n            font-weight: 700;\n            font-family: 'Orbitron', sans-serif;\n            cursor: pointer;\n            transition: 0.3s;\n        }\n\n        .btn-restart:hover {\n            transform: scale(1.05);\n            box-shadow: 0 0 20px var(--primary);\n        }\n\n        .hidden { display: none; }\n\n        /* --- DECORATIONS --- */\n        .floating-particle {\n            position: absolute;\n            background: var(--primary);\n            border-radius: 50%;\n            opacity: 0.2;\n            pointer-events: none;\n            z-index: 0;\n        }\n    </style>\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\n<body>\n\n    <div class=\"game-container\">\n        <div class=\"header\">\n            <h1>Sfida e Maturës</h1>\n            <div class=\"stats-row\">\n                <div class=\"stat-pill\">🚀 <span id=\"score\">0</span> Pikë</div>\n                <div class=\"stat-pill\">⚡ <span id=\"streak\">0</span> Combo</div>\n            </div>\n        </div>\n\n        <div class=\"sidebar\" id=\"level-list\">\n            <!-- Levels will be generated here -->\n        </div>\n\n        <div class=\"main-area\">\n            <div class=\"question-box\" id=\"question-box\">\n                <div class=\"question-text\" id=\"q-text\">Zgjidh një sektor për të filluar sfidën!</div>\n                <div class=\"options-grid\" id=\"options\">\n                    <!-- Options will be generated here -->\n                </div>\n            </div>\n            <div class=\"progress-container\">\n                <div class=\"progress-bar\" id=\"progress\"></div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"victory-overlay\" id=\"victory\">\n        <div style=\"font-size: 5rem; margin-bottom: 20px;\">🎓</div>\n        <h1 class=\"victory-title\">Maturant i Shkëlqyer!</h1>\n        <p style=\"font-size: 1.5rem; opacity: 0.8;\">Ti ke kaluar të gjitha sfidat e fizikës me sukses.</p>\n        <div style=\"margin-top: 30px; font-size: 2rem; font-weight: 700; color: var(--accent);\">\n            Pikët Totale: <span id=\"final-score\">0</span>\n        </div>\n        <button class=\"btn-restart\" onclick=\"location.reload()\">Rinis Sfidën</button>\n    </div>\n\n    <script>\n        const levels = [\n            {\n                id: 1,\n                title: \"Kinematika\",\n                desc: \"Lëvizja dhe Zhvendosja\",\n                questions: [\n                    { q: \"Çfarë paraqet zhvendosja (S ose Δx)?\", options: [\"Gjatësinë totale të rrugës\", \"Një madhësi skalare\", \"Vektor që bashkon fillimin me fundin\", \"Shpejtësinë mesatare\"], correct: 2 },\n                    { q: \"Cila është formula në lëvizje të njëtrajtshme?\", options: [\"Δx = v0t + at²/2\", \"Δx = v * t\", \"v² = v0² + 2aS\", \"h = v0t + gt²\"], correct: 1 },\n                    { q: \"Njësia matëse e zhvendosjes në SI:\", options: [\"Sekonda\", \"Metër\", \"m/s\", \"Njuton\"], correct: 1 }\n                ]\n            },\n            {\n                id: 2,\n                title: \"Dinamika I\",\n                desc: \"Forcat dhe Ligjet e Njutonit\",\n                questions: [\n                    { q: \"Forca me të cilën Toka tërheq trupin quhet:\", options: [\"Forca e fërkimit\", \"Forca e rëndesës\", \"Forca e elasticitetit\", \"Forca e tensionit\"], correct: 1 },\n                    { q: \"Ku zbatohet forca e rëndesës?\", options: [\"Në sipërfaqen e trupit\", \"Në qendër të trupit\", \"Në pikën e mbështetjes\", \"Në skajet e trupit\"], correct: 1 },\n                    { q: \"Drejtimi i forcës së rëndesës është:\", options: [\"Horizontal\", \"Vertikalisht lart\", \"Pingul me sipërfaqen e Tokës\", \"Paralel me lëvizjen\"], correct: 2 }\n                ]\n            },\n            {\n                id: 3,\n                title: \"Dinamika II\",\n                desc: \"Fërkimi dhe Elasticiteti\",\n                questions: [\n                    { q: \"Formula e Ligjit të Hukut është:\", options: [\"F = m*a\", \"Fe = -k*x\", \"F_f = μN\", \"P = m*g\"], correct: 1 },\n                    { q: \"Forca e fërkimit ka gjithmonë kah:\", options: [\"Të njëjtë me lëvizjen\", \"Të kundërt me lëvizjen\", \"Pingul me lëvizjen\", \"Të rastësishëm\"], correct: 1 },\n                    { q: \"Formula e forcës së fërkimit është:\", options: [\"F = m*g\", \"F = k*x\", \"F_f = μN\", \"F = G/R\"], correct: 2 }\n                ]\n            },\n            {\n                id: 4,\n                title: \"Graviteti\",\n                desc: \"Ligji i Tërheqjes së Gjithësishme\",\n                questions: [\n                    { q: \"Formula e Ligjit të tërheqjes së gjithësishme është:\", options: [\"F = m*g\", \"F = k*x\", \"F = G * (m1*m2)/R²\", \"F_f = μN\"], correct: 2 },\n                    { q: \"Me rritjen e lartësisë (h) nga Toka, nxitimi g:\", options: [\"Rritet\", \"Zvogëlohet\", \"Nuk ndryshon\", \"Bëhet zero\"], correct: 1 }\n                ]\n            },\n            {\n                id: 5,\n                title: \"Matura Shtetërore\",\n                desc: \"Pyetje nga provimet e maturës\",\n                questions: [\n                    { q: `Një sfere hidhet vertikalisht lart. Rezistenca e ajrit nuk merret parasysh. Si kah pozitiv i lëvizjes merret kahu i drejtuar vertikalisht lart. Cilët nga grafikët e mëposhtem paraqet shpejtësine në funksion të kohës.<br><svg viewBox=\"0 0 400 300\" width=\"100%\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:white; border-radius:8px; margin-top:20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"black\"/></marker></defs><g transform=\"translate(20, 20)\"><rect x=\"60\" y=\"0\" width=\"40\" height=\"40\" rx=\"10\" fill=\"white\" stroke=\"#ccc\"/><text x=\"80\" y=\"28\" font-size=\"24\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"black\">1</text><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"20\" y1=\"100\" x2=\"150\" y2=\"100\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><polyline points=\"20,100 70,40 120,100\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><text x=\"5\" y=\"20\" font-size=\"14\" fill=\"black\">v</text><text x=\"140\" y=\"115\" font-size=\"14\" fill=\"black\">t</text></g><g transform=\"translate(220, 20)\"><rect x=\"60\" y=\"0\" width=\"40\" height=\"40\" rx=\"10\" fill=\"white\" stroke=\"#ccc\"/><text x=\"80\" y=\"28\" font-size=\"24\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"black\">2</text><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"20\" y1=\"100\" x2=\"150\" y2=\"100\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><path d=\"M20,100 Q70,0 120,100\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><text x=\"5\" y=\"20\" font-size=\"14\" fill=\"black\">v</text><text x=\"140\" y=\"115\" font-size=\"14\" fill=\"black\">t</text></g><g transform=\"translate(20, 160)\"><rect x=\"60\" y=\"0\" width=\"40\" height=\"40\" rx=\"10\" fill=\"white\" stroke=\"#ccc\"/><text x=\"80\" y=\"28\" font-size=\"24\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"black\">3</text><line x1=\"20\" y1=\"120\" x2=\"20\" y2=\"10\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"20\" y1=\"65\" x2=\"150\" y2=\"65\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"20\" y1=\"30\" x2=\"110\" y2=\"100\" stroke=\"black\" stroke-width=\"2\"/><text x=\"5\" y=\"20\" font-size=\"14\" fill=\"black\">v</text><text x=\"140\" y=\"80\" font-size=\"14\" fill=\"black\">t</text></g><g transform=\"translate(220, 160)\"><rect x=\"60\" y=\"0\" width=\"40\" height=\"40\" rx=\"10\" fill=\"white\" stroke=\"#ccc\"/><text x=\"80\" y=\"28\" font-size=\"24\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"black\">4</text><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><line x1=\"20\" y1=\"100\" x2=\"150\" y2=\"100\" stroke=\"black\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/><polyline points=\"20,40 70,100 120,40\" fill=\"none\" stroke=\"black\" stroke-width=\"2\"/><text x=\"5\" y=\"20\" font-size=\"14\" fill=\"black\">v</text><text x=\"140\" y=\"115\" font-size=\"14\" fill=\"black\">t</text></g></svg>`, options: [\"1\", \"2\", \"3\", \"4\"], correct: 3 },\n                    { q: \"Një trup me masë 1t lëviz me nxitim 3m/s². Sa eshtë moduli i tensionit të kavos që ngre trupin (g=10m/s²)?\", options: [\"13000N\", \"10000N\", \"1300N\", \"700N\"], correct: 0 },\n                    { q: \"Nje force horizontale 5N ushtrohet mbi nje kuti me mase 10kg, si ne figure. Kutia léviz me nxitim 2m/s². Sa do te jete vlera e koeficientit te ferkimit ndermjet kutise dhe dyshemese (g=10m/s²)?\", options: [\"0.5\", \"0.25\", \"0.05\", \"0.15\"], correct: 1 },\n                    { q: \"Karroca me rëre, me masë 20kg, léviz me shpejtësi vk=3m/s në nje sipërfaqe horizontale te lemuar. Perballe karrocës lëviz sfera me masë 5kg dhe shpejtësi vs=5m/s. Sfera godet karrocën dhe mbetet në të. Shpejtësia e karrocës pas goditjes me sferën do të jetë:\", options: [\"2m/s\", \"1,4m/s\", \"0,8m/s\", \"0,5m/s\"], correct: 1 },\n                    { q: \"Nje sfere me mase 3kg ngjesh me 5cm susten me koeficient elasticiteti k=1200N/m. Pasi susta lihet e lire sfera leviz pa ferkim ne rafshin OA dhe pastaj ngjitet ne rafshin e pjerrrët AB. Lartësia h e ngjitjes se sferes ne rrafshin e pjcrret do te jete: (g=10m/s²)\", options: [\"15cm\", \"10cm\", \"5cm\", \"3cm\"], correct: 2 },\n                    { q: \"Nje trup me masë m qe léviz me shpejtësi v e rrit shpejtësië tri herë. Energjia kinetike e trupit nê këtë rast:\", options: [\"rritet 3 herë\", \"zvogëlohet tri herë\", \"rritet 9 herë\", \"zvogëlohet 9 herë\"], correct: 2 },\n                    { q: \"Sasia e nxehtësisë qe merr një gaz ideal është 700J. Forcat jashtme kryejnë pune 200J. Ndryshimi i energjisë së brendshme t gazit do te jetë:\", options: [\"900J\", \"500J\", \"-500J\", \"350J\"], correct: 1 },\n                    { q: \"Një bateri me f.e.m.=6V është e lidhur me një rezistencë prej 3Ω. Ngarkesa qe kalon nepër rezistencë gjate 20s do të jetë:\", options: [\"5C\", \"10C\", \"20C\", \"40C\"], correct: 3 }\n                ]\n            }\n        ];\n\n        let currentLevelIdx = 0;\n        let currentQuestionIdx = 0;\n        let score = 0;\n        let streak = 0;\n        let unlockedLevels = [1];\n\n        const levelListEl = document.getElementById('level-list');\n        const qTextEl = document.getElementById('q-text');\n        const optionsEl = document.getElementById('options');\n        const scoreEl = document.getElementById('score');\n        const streakEl = document.getElementById('streak');\n        const progressEl = document.getElementById('progress');\n        const victoryEl = document.getElementById('victory');\n        const finalScoreEl = document.getElementById('final-score');\n\n        function init() {\n            renderLevels();\n            createParticles();\n        }\n\n        function renderLevels() {\n            levelListEl.innerHTML = '';\n            levels.forEach((lvl, idx) => {\n                const isLocked = !unlockedLevels.includes(lvl.id);\n                const card = document.createElement('div');\n                card.className = `level-card ${isLocked ? 'locked' : ''} ${currentLevelIdx === idx ? 'active' : ''}`;\n                card.onclick = () => !isLocked && selectLevel(idx);\n                \n                card.innerHTML = `\n                    <div class=\"level-title\">${lvl.title}</div>\n                    <div class=\"level-desc\">${lvl.desc}</div>\n                `;\n                levelListEl.appendChild(card);\n            });\n        }\n\n        function selectLevel(idx) {\n            currentLevelIdx = idx;\n            currentQuestionIdx = 0;\n            renderLevels();\n            loadQuestion();\n        }\n\n        function loadQuestion() {\n            const level = levels[currentLevelIdx];\n            const q = level.questions[currentQuestionIdx];\n            \n            qTextEl.innerHTML = q.q;\n            optionsEl.innerHTML = '';\n            \n            q.options.forEach((opt, idx) => {\n                const btn = document.createElement('button');\n                btn.className = 'option-btn';\n                btn.innerHTML = `<span>${String.fromCharCode(65 + idx)}</span> ${opt}`;\n                btn.onclick = () => checkAnswer(idx, q.correct, btn);\n                optionsEl.appendChild(btn);\n            });\n\n            const progress = (currentQuestionIdx / level.questions.length) * 100;\n            progressEl.style.width = `${progress}%`;\n        }\n\n        function checkAnswer(idx, correct, btn) {\n            const allBtns = document.querySelectorAll('.option-btn');\n            allBtns.forEach(b => b.classList.add('disabled'));\n\n            if (idx === correct) {\n                btn.classList.add('correct');\n                score += 100 + (streak * 10);\n                streak++;\n                scoreEl.innerText = score;\n                streakEl.innerText = streak;\n                \n                setTimeout(() => {\n                    nextQuestion();\n                }, 1000);\n            } else {\n                btn.classList.add('wrong');\n                allBtns[correct].classList.add('correct');\n                streak = 0;\n                streakEl.innerText = streak;\n                \n                setTimeout(() => {\n                    loadQuestion(); // Retry or stay\n                }, 1500);\n            }\n        }\n\n        function nextQuestion() {\n            const level = levels[currentLevelIdx];\n            currentQuestionIdx++;\n\n            if (currentQuestionIdx < level.questions.len     b.style.borderColor = \"#22c55e\";\n                    }\n                });\n            }\n\n            updateUI();\n\n            // Kalo radhën te ekipi tjetër pas 2 sekondash\n            setTimeout(() => {\n                currentTeam = currentTeam === 1 ? 2 : 1;\n                updateUI();\n                nextTurn();\n            }, 2500);\n        }\n\n        function declareWinner(team) {\n            const screen = document.getElementById('winner-screen');\n            const text = document.getElementById('winner-text');\n            const icon = document.getElementById('winner-icon');\n            \n            screen.style.display = 'flex';\n            if(team === 1) {\n                text.innerText = \"Ekipi Elektron Fitoi!\";\n                text.style.color = \"#0369a1\";\n                icon.innerText = \"⚡🏆⚡\";\n            } else {\n                text.innerText = \"Ekipi Foton Fitoi!\";\n                text.style.color = \"#c2410c\";\n                icon.innerText = \"🌟🏆🌟\";\n            }\n\n            var duration = 5 * 1000;\n            var end = Date.now() + duration;\n            (function frame() {\n                confetti({ particleCount: 10, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#38bdf8', '#fb923c'] });\n                confetti({ particleCount: 10, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#38bdf8', '#fb923c'] });\n                if (Date.now() < end) { requestAnimationFrame(frame); }\n            }());\n        }\n\n        function launchMiniConfetti() {\n            confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });\n        }\n    </script>\n</body>\n</html>\n"
  },
  {
    id: "lojee-game",
    title: "ElektroGame",
    category: "Rryma",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>ElektroGame⚛️</title>\n    <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js\"></script>\n    <style>\n        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;900&display=swap');\n\n        /* Sfond i errët pastel */\n        body {\n            font-family: 'Nunito', sans-serif; \n            background: #1a1a2e; \n            color: #e2e8f0;\n            margin: 0; padding: 0; display: flex; flex-direction: column; align-items: center;\n            height: 100vh; overflow: hidden; \n        }\n        \n        /* Shiriti i progresit në krye (Pa titull) */\n        .header { text-align: center; padding: 10px 15px; width: 100%; z-index: 10; background: rgba(26, 26, 46, 0.9); }\n        .progress-bar { width: 80%; max-width: 600px; height: 8px; background: #2a2a4a; border-radius: 10px; margin: 10px auto; overflow: hidden; }\n        .progress-fill { height: 100%; background: #4facf7; width: 0%; transition: width 0.4s ease; }\n\n        /* Kontejneri i Ekraneve */\n        .app-container {\n            width: 100%; max-width: 800px; flex-grow: 1; position: relative;\n            display: flex; justify-content: center; align-items: center;\n        }\n\n        /* Stili i Faqeve me Animacion */\n        .screen {\n            position: absolute; width: 90%; max-height: 85vh; overflow-y: auto;\n            background: #24243e; border-radius: 30px; padding: 30px;\n            box-shadow: 0 15px 35px rgba(0,0,0,0.3); border: 3px solid #303050;\n            display: none; \n            opacity: 0; transform: translateX(50px) scale(0.95);\n            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n        }\n        .screen.active {\n            display: block; opacity: 1; transform: translateX(0) scale(1);\n        }\n        .screen::-webkit-scrollbar { width: 8px; }\n        .screen::-webkit-scrollbar-thumb { background: #4facf7; border-radius: 10px; }\n\n        /* Titulli Kryesor (Vetëm për faqen e parë) */\n        h1.main-title { color: #4facf7; font-size: 2.6em; margin: 0 0 15px 0; font-weight: 900; text-align: center; text-shadow: 0 5px 15px rgba(0,0,0,0.4); }\n\n        .screen-icon { font-size: 3.5em; text-align: center; margin-bottom: 10px; display: block; filter: drop-shadow(0 0 10px rgba(79,172,247,0.5)); }\n        .screen-title { color: #f1f5f9; text-align: center; font-size: 1.5em; margin-bottom: 20px; }\n\n        /* Butonat e Navigimit (Poshtë) */\n        .nav-buttons { width: 100%; max-width: 800px; display: flex; justify-content: space-between; padding: 15px 20px; box-sizing: border-box; z-index: 10; }\n        .btn-nav { background: #303050; color: #fff; border: none; padding: 12px 25px; font-size: 1.1em; font-weight: bold; border-radius: 15px; cursor: pointer; transition: all 0.2s; box-shadow: 0 5px 0 #1a1a2e; }\n        .btn-nav:hover { background: #4facf7; box-shadow: 0 5px 0 #287dc2; }\n        .btn-nav:active { transform: translateY(5px); box-shadow: none; }\n\n        /* --- STILI I USHTRIMEVE --- */\n        .question-text { font-size: 1.1em; font-weight: 700; margin-bottom: 10px; color: #cbd5e1;}\n        .option-label { display: block; background: #2a2a4a; border: 2px solid #303050; border-radius: 15px; padding: 15px; margin-bottom: 10px; cursor: pointer; transition: 0.2s; font-weight: bold; }\n        .option-label:hover { background: #303050; }\n        .option-label input { display: none; }\n        .option-label.selected { background: #1b3a57; border-color: #4facf7; color: #4facf7; box-shadow: 0 4px 0 #132a40; }\n\n        /* Drag & Drop */\n        .draggable { background: #e07a5f; color: white; padding: 10px 15px; border-radius: 12px; font-weight: bold; display: inline-block; margin: 5px; cursor: pointer; border: 2px solid #fff; box-shadow: 0 4px 0 #b3563d; transition: 0.2s; }\n        .draggable.selected-mobile { transform: scale(1.1); box-shadow: 0 0 15px #e07a5f; }\n        .drop-zone { background: #2a2a4a; border: 2px dashed #81b29a; border-radius: 15px; padding: 15px; min-height: 20px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap; text-align: center; color: #81b29a; font-weight: bold; cursor: pointer;}\n        .drop-zone.correct-match { background: #81b29a; color: #1a1a2e; border-style: solid; }\n\n        /* Formulat */\n        .formula-row { background: #2a2a4a; padding: 15px; border-radius: 15px; margin-bottom: 15px; text-align: center;}\n        .formula-slot { width: 45px; height: 45px; background: #1a1a2e; border: 2px dashed #f2cc8f; border-radius: 10px; display: inline-flex; justify-content: center; align-items: center; font-size: 1.2em; font-weight: bold; margin: 0 5px; vertical-align: middle; color: #f2cc8f; cursor: pointer;}\n\n        /* --- SIMULIMET PHET STYLE --- */\n        .sim-box { background: #1a1a2e; border-radius: 20px; padding: 20px; text-align: center; border: 2px solid #303050; margin-bottom: 20px;}\n        input[type=range] { width: 90%; margin: 15px 0; accent-color: #4facf7; }\n        \n        .capacitor-area { height: 120px; display: flex; flex-direction: column; justify-content: space-between; align-items: center; margin: 10px 0; position: relative;}\n        .cap-plate { background: #81b29a; width: 100px; height: 15px; border-radius: 5px; display: flex; justify-content: space-evenly; align-items: center; color: #1a1a2e; font-weight: bold; font-size: 12px; transition: 0.2s; z-index: 2;}\n        .e-field-lines { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 50px; background: repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(224, 122, 95, 0.5) 15px, rgba(224, 122, 95, 0.5) 17px); z-index: 1;}\n\n        .optics-box { height: 150px; background: linear-gradient(180deg, #1a1a2e 50%, #3d5a80 50%); border-radius: 10px; position: relative; overflow: hidden; margin: 10px 0; border: 2px solid #cbd5e1;}\n        .laser-beam-in { position: absolute; width: 200px; height: 4px; background: #ef476f; top: 25%; left: 0; transform-origin: left center; transform: rotate(30deg); box-shadow: 0 0 10px #ef476f;}\n        .laser-beam-out { position: absolute; width: 200px; height: 4px; background: #ef476f; top: 50%; left: 50%; transform-origin: left center; transform: rotate(15deg); box-shadow: 0 0 10px #ef476f;}\n        .normal-line { position: absolute; width: 2px; height: 100%; background: dashed rgba(255,255,255,0.3); left: 50%; }\n\n        .wire { height: 40px; background: #3d5a80; border-radius: 20px; position: relative; overflow: hidden; margin: 10px 0; border: 2px solid #98c1d9;}\n        .electron { width: 16px; height: 16px; background: #f2cc8f; border-radius: 50%; position: absolute; top: 10px; font-size: 10px; display: flex; align-items: center; justify-content: center; color: #1a1a2e; font-weight: bold;}\n        .electron::after { content: '-'; }\n\n        /* Modal */\n        #apple-drop { position: fixed; top: -100px; left: 50%; transform: translateX(-50%); font-size: 80px; z-index: 1000; display: none; }\n        .apple-anim { animation: drop 1s forwards cubic-bezier(0.5, 0, 0.5, 1); }\n        @keyframes drop { to { top: 50%; transform: translate(-50%, -50%) scale(1.5); opacity: 0; } }\n\n    </style>\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\n<body>\n\n    <div class=\"header\">\n        <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"progress\"></div></div>\n    </div>\n\n    <div id=\"apple-drop\">🍎</div>\n\n    <div class=\"app-container\">\n\n        <div class=\"screen active\" id=\"screen-0\">\n            <h1 class=\"main-title\">ElektroGame ⚛️</h1>\n            <span class=\"screen-icon\">🔬</span>\n            <h2 class=\"screen-title\">Mirësevini!</h2>\n            <p style=\"text-align: center; color: #cbd5e1;\">Zbuloni ligjet e elektricitetit, optikës dhe fushës magnetike. Përdorni butonat poshtë për të kaluar faqet.</p>\n        </div>\n\n        <div class=\"screen\" id=\"screen-1\">\n            <span class=\"screen-icon\">🔋</span>\n            <h2 class=\"screen-title\">1. Simulimi i Kondensatorit</h2>\n            <div class=\"sim-box\">\n                <div class=\"capacitor-area\" id=\"cap-gap\">\n                    <div class=\"e-field-lines\" id=\"e-field\"></div>\n                    <div class=\"cap-plate\" id=\"plate1\"><span>+</span><span>+</span><span>+</span></div>\n                    <div class=\"cap-plate\" id=\"plate2\"><span>-</span><span>-</span><span>-</span></div>\n                </div>\n                <h3 style=\"color: #4facf7; margin:5px 0;\">Kapaciteti: <span id=\"cap-val\">0.0</span> F</h3>\n                <label style=\"color:#cbd5e1; font-size:0.9em;\">Sipërfaqja (S)</label>\n                <input type=\"range\" id=\"sl-area\" min=\"80\" max=\"200\" value=\"120\" oninput=\"simCap()\"><br>\n                <label style=\"color:#cbd5e1; font-size:0.9em;\">Largësia (d)</label>\n                <input type=\"range\" id=\"sl-dist\" min=\"30\" max=\"100\" value=\"60\" oninput=\"simCap()\">\n            </div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-2\">\n            <span class=\"screen-icon\">⚡</span>\n            <h2 class=\"screen-title\">2. Ligji i Ohmit</h2>\n            <div class=\"sim-box\">\n                <div class=\"wire\">\n                    <div class=\"electron\" id=\"el1\" style=\"left: 0;\"></div>\n                    <div class=\"electron\" id=\"el2\" style=\"left: 100px;\"></div>\n                    <div class=\"electron\" id=\"el3\" style=\"left: 200px;\"></div>\n                </div>\n                <h3 style=\"color: #f2cc8f; margin:5px 0;\">Rryma (I): <span id=\"ohm-val\">5.0</span> A</h3>\n                <label style=\"color:#cbd5e1; font-size:0.9em;\">Tensioni (U)</label>\n                <input type=\"range\" id=\"sl-volt\" min=\"1\" max=\"10\" value=\"5\" oninput=\"simOhm()\"><br>\n                <label style=\"color:#cbd5e1; font-size:0.9em;\">Rezistenca (R)</label>\n                <input type=\"range\" id=\"sl-res\" min=\"1\" max=\"10\" value=\"5\" oninput=\"simOhm()\">\n            </div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-3\">\n            <span class=\"screen-icon\">🌈</span>\n            <h2 class=\"screen-title\">3. Përthyerja e Dritës</h2>\n            <div class=\"sim-box\">\n                <div class=\"optics-box\">\n                    <div class=\"normal-line\"></div>\n                    <div class=\"laser-beam-in\" id=\"laser-in\"></div>\n                    <div class=\"laser-beam-out\" id=\"laser-out\"></div>\n                    <span style=\"position: absolute; top:5px; left:5px; color:#fff; font-size:10px;\">Ajër (n=1)</span>\n                    <span style=\"position: absolute; bottom:5px; left:5px; color:#fff; font-size:10px;\">Qelq (n=1.5)</span>\n                </div>\n                <label style=\"color:#cbd5e1; font-size:0.9em;\">Këndi i Rënies</label>\n                <input type=\"range\" id=\"sl-angle\" min=\"10\" max=\"80\" value=\"45\" oninput=\"simOptics()\">\n            </div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-4\">\n            <span class=\"screen-icon\">📐</span>\n            <h2 class=\"screen-title\">Ndërto Formulat</h2>\n            <p style=\"text-align: center; color: #cbd5e1; font-size: 0.9em;\">Kliko simbolin, pastaj kliko kutinë bosh.</p>\n            \n            <div class=\"formula-row\">\n                <div class=\"question-text\">1. Intensiteti Fushës (E):</div>\n                <span class=\"formula-slot\" data-target=\"E1\"></span> = <span class=\"formula-slot\" data-target=\"F1\"></span> / <span class=\"formula-slot\" data-target=\"q1\"></span><br>\n                <div style=\"margin-top: 10px;\">\n                    <div class=\"draggable\" draggable=\"true\" id=\"F1\" style=\"background:#4facf7;\">F</div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"q1\" style=\"background:#4facf7;\">q<sub>0</sub></div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"E1\" style=\"background:#4facf7;\">E</div>\n                </div>\n            </div>\n\n            <div class=\"formula-row\">\n                <div class=\"question-text\">2. Kapaciteti (C):</div>\n                <span class=\"formula-slot\" data-target=\"C2\"></span> = <span class=\"formula-slot\" data-target=\"Q2\"></span> / <span class=\"formula-slot\" data-target=\"U2\"></span><br>\n                <div style=\"margin-top: 10px;\">\n                    <div class=\"draggable\" draggable=\"true\" id=\"U2\" style=\"background:#e07a5f;\">U</div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"Q2\" style=\"background:#e07a5f;\">Q</div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"C2\" style=\"background:#e07a5f;\">C</div>\n                </div>\n            </div>\n\n            <div class=\"formula-row\">\n                <div class=\"question-text\">3. Intensiteti Rrymës (I):</div>\n                <span class=\"formula-slot\" data-target=\"I3\"></span> = Δ<span class=\"formula-slot\" data-target=\"Q3\"></span> / Δ<span class=\"formula-slot\" data-target=\"t3\"></span><br>\n                <div style=\"margin-top: 10px;\">\n                    <div class=\"draggable\" draggable=\"true\" id=\"t3\" style=\"background:#81b29a;\">t</div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"I3\" style=\"background:#81b29a;\">I</div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"Q3\" style=\"background:#81b29a;\">Q</div>\n                </div>\n            </div>\n\n            <div class=\"formula-row\">\n                <div class=\"question-text\">4. Fluksi Elektrik (Φ):</div>\n                <span class=\"formula-slot\" data-target=\"Phi4\"></span> = <span class=\"formula-slot\" data-target=\"E4\"></span> · <span class=\"formula-slot\" data-target=\"S4\"></span><br>\n                <div style=\"margin-top: 10px;\">\n                    <div class=\"draggable\" draggable=\"true\" id=\"S4\" style=\"background:#f2cc8f; color:#1a1a2e;\">S</div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"Phi4\" style=\"background:#f2cc8f; color:#1a1a2e;\">Φ</div>\n                    <div class=\"draggable\" draggable=\"true\" id=\"E4\" style=\"background:#f2cc8f; color:#1a1a2e;\">E</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-5\">\n            <span class=\"screen-icon\">🧲</span>\n            <h2 class=\"screen-title\">Ndarja & Lidhjet</h2>\n            \n            <div class=\"question-text\">Ndaj Përcjellësit nga Dielektrikët:</div>\n            <div style=\"display: flex; gap: 10px; margin-bottom: 20px;\">\n                <div style=\"flex: 1;\">\n                    <div class=\"drop-zone sort-zone\" data-group=\"diel\" style=\"border-color:#e07a5f; color:#e07a5f;\">Dielektrikë 🚫</div>\n                </div>\n                <div style=\"flex: 1;\">\n                    <div class=\"drop-zone sort-zone\" data-group=\"perc\" style=\"border-color:#81b29a; color:#81b29a;\">Përcjellës ⚡</div>\n                </div>\n            </div>\n            <div style=\"text-align: center; margin-bottom:30px;\">\n                <div class=\"draggable sort-item\" draggable=\"true\" id=\"s1\" data-type=\"diel\" style=\"background:#3d5a80;\">Qelqi</div>\n                <div class=\"draggable sort-item\" draggable=\"true\" id=\"s2\" data-type=\"perc\" style=\"background:#3d5a80;\">Hekuri</div>\n                <div class=\"draggable sort-item\" draggable=\"true\" id=\"s3\" data-type=\"diel\" style=\"background:#3d5a80;\">Letra</div>\n                <div class=\"draggable sort-item\" draggable=\"true\" id=\"s4\" data-type=\"perc\" style=\"background:#3d5a80;\">Bakri</div>\n            </div>\n\n            <div class=\"question-text\">Lidh Përkufizimet:</div>\n            <div class=\"drop-zone\" data-target=\"m1\">2 ngarkesa të barabarta e të kundërta</div>\n            <div class=\"drop-zone\" data-target=\"m2\">Sipërfaqe ku potenciali është i njëjtë</div>\n            <div class=\"drop-zone\" data-target=\"m3\">F.E.M nga lëvizja e fushës</div>\n            <div class=\"drop-zone\" data-target=\"m4\">Prodhimi E me sipërfaqen pingule S</div>\n            \n            <div style=\"text-align: center; margin-top: 15px;\">\n                <div class=\"draggable\" draggable=\"true\" id=\"m2\" style=\"background:#8e44ad;\">Sip. Ekuipotenciale</div>\n                <div class=\"draggable\" draggable=\"true\" id=\"m4\" style=\"background:#8e44ad;\">Fluksi Elektrik</div>\n                <div class=\"draggable\" draggable=\"true\" id=\"m1\" style=\"background:#8e44ad;\">Dipoli Elektrik</div>\n                <div class=\"draggable\" draggable=\"true\" id=\"m3\" style=\"background:#8e44ad;\">F.E.M Dinamike</div>\n            </div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-6\">\n            <span class=\"screen-icon\">📝</span>\n            <h2 class=\"screen-title\">Kuizi (Pjesa 1)</h2>\n            <div id=\"quiz-part1\"></div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-7\">\n            <span class=\"screen-icon\">🧠</span>\n            <h2 class=\"screen-title\">Kuizi (Pjesa 2)</h2>\n            <div id=\"quiz-part2\"></div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-8\">\n            <span class=\"screen-icon\">⚖️</span>\n            <h2 class=\"screen-title\">E Vërtetë apo E Gabuar?</h2>\n            <div id=\"tf-container\"></div>\n            \n            <div style=\"text-align:center; margin-top:30px;\">\n                <button class=\"btn-nav\" style=\"background: #e07a5f; padding: 15px 30px; font-size: 1.2em;\" onclick=\"finishApp()\">Përfundo & Shiko Rezultatin</button>\n            </div>\n        </div>\n\n        <div class=\"screen\" id=\"screen-9\" style=\"text-align: center;\">\n            <span class=\"screen-icon\" id=\"res-icon\" style=\"font-size: 5em;\">🏆</span>\n            <h2 class=\"screen-title\" id=\"res-msg\" style=\"font-size: 2em; color: #4facf7;\">Urime!</h2>\n            <p id=\"res-score\" style=\"font-size: 1.3em; font-weight: bold; color: #cbd5e1;\">Ke mbledhur X nga Y pikë.</p>\n            <p style=\"color: #81b29a; margin-top: 20px;\">Faleminderit që përdorët ElektroGame!</p>\n        </div>\n\n    </div>\n\n    <div class=\"nav-buttons\">\n        <button class=\"btn-nav\" id=\"btn-prev\" onclick=\"prevScreen()\">⬅️ Kthehu</button>\n        <button class=\"btn-nav\" id=\"btn-next\" onclick=\"nextScreen()\">Vazhdo ➡️</button>\n    </div>\n\n    <script>\n        // --- 1. NAVIGIMI I FAQEVE (SISTEMI PA SCROLL) ---\n        let currentScreen = 0;\n        const totalScreens = 10; \n\n        function updateNav() {\n            document.querySelectorAll('.screen').forEach((el, i) => {\n                el.classList.remove('active');\n                if(i === currentScreen) el.classList.add('active');\n            });\n            \n            document.getElementById('btn-prev').style.visibility = (currentScreen === 0 || currentScreen === 9) ? 'hidden' : 'visible';\n            document.getElementById('btn-next').style.visibility = (currentScreen >= 8) ? 'hidden' : 'visible';\n            \n            document.getElementById('progress').style.width = ((currentScreen) / 8) * 100 + \"%\";\n        }\n\n        function nextScreen() { if(currentScreen < 8) { currentScreen++; updateNav(); } }\n        function prevScreen() { if(currentScreen > 0) { currentScreen--; updateNav(); } }\n\n        // --- 2. SIMULIMET E AVANCUARA ---\n        function simCap() {\n            const area = document.getElementById('sl-area').value;\n            const dist = document.getElementById('sl-dist').value;\n            const p1 = document.getElementById('plate1');\n            const p2 = document.getElementById('plate2');\n            const field = document.getElementById('e-field');\n            \n            p1.style.width = area + 'px'; p2.style.width = area + 'px';\n            document.getElementById('cap-gap').style.height = dist + 'px';\n            \n            field.style.width = (area - 10) + 'px'; field.style.height = (dist - 15) + 'px';\n            field.style.opacity = 1 - (dist / 150);\n            document.getElementById('cap-val').innerText = ((area / dist) * 1.5).toFixed(2);\n        }\n        simCap();\n\n        let ohmAnim, p1=0, p2=100, p3=200;\n        function simOhm() {\n            const v = document.getElementById('sl-volt').value;\n            const r = document.getElementById('sl-res').value;\n            let speed = v / r;\n            document.getElementById('ohm-val').innerText = speed.toFixed(1);\n            \n            cancelAnimationFrame(ohmAnim);\n            function animate() {\n                let s = speed * 1.5;\n                p1 += s; p2 += s; p3 += s;\n                const w = document.querySelector('.wire').offsetWidth;\n                if(p1>w) p1=-20; if(p2>w) p2=-20; if(p3>w) p3=-20;\n                \n                document.getElementById('el1').style.left = p1 + 'px';\n                document.getElementById('el2').style.left = p2 + 'px';\n                document.getElementById('el3').style.left = p3 + 'px';\n                ohmAnim = requestAnimationFrame(animate);\n            }\n            animate();\n        }\n        simOhm();\n\n        function simOptics() {\n            const angleIn = document.getElementById('sl-angle').value;\n            const n1 = 1.0; \n            const n2 = 1.5; \n            \n            const radIn = angleIn * (Math.PI / 180);\n            const radOut = Math.asin((n1 / n2) * Math.sin(radIn));\n            const angleOut = radOut * (180 / Math.PI);\n\n            const laserIn = document.getElementById('laser-in');\n            const laserOut = document.getElementById('laser-out');\n            \n            laserIn.style.transform = `rotate(${angleIn}deg)`;\n            laserOut.style.transform = `rotate(${angleOut}deg)`;\n        }\n        simOptics();\n\n        // --- 3. KUIZET DHE TË DHËNAT ---\n        const mcqData = [\n            { q: \"Raporti i forcës së ushtruar nga fusha mbi njësinë e ngarkesës provë quhet:\", o: [\"Fluks\", \"Intensitet i fushës elektrike\", \"Potencial\"], c: 1 },\n            { q: \"Ç'ndodh me kapacitetin e kondensatorit kur shtohet një dielektrik?\", o: [\"Zvogëlohet\", \"Mbetet i njëjtë\", \"Rritet\"], c: 2 },\n            { q: \"Ligji i Lencit thotë se rryma e induktuar ka një kah që:\", o: [\"Kundërshton shkakun që e krijon\", \"Ndihmon shkakun\", \"Është paralel me fushën\"], c: 0 },\n            { q: \"Kufizimi i Teoremës së Amperit është se:\", o: [\"Vlen vetëm në vakum\", \"Vlen vetëm për vija të mbyllura\", \"Zbatohet vetëm te kondensatorët\"], c: 1 },\n            { q: \"Parimi i Huygensit thotë se çdo pikë e një fronti valor shërben si:\", o: [\"Pasqyrë\", \"Burim i valëve sferike sekondare\", \"Pengesë\"], c: 1 },\n            { q: \"Kur këndi i rënies është më i madh se këndi kufi, ndodh:\", o: [\"Përthyerje\", \"Difraksion\", \"Pasqyrim i plotë i brendshëm\"], c: 2 },\n            { q: \"Dukuria e polarizimit tregon se drita është një valë:\", o: [\"Tërthore\", \"Gjatësore\", \"Mekanike\"], c: 0 },\n            { q: \"Dispersioni është varësia e treguesit të përthyerjes nga:\", o: [\"Koha\", \"Gjatësia e valës\", \"Temperatura\"], c: 1 },\n            { q: \"Kur vala ndesh një pengesë me një çarje të vogël dhe përkulet, kjo quhet:\", o: [\"Difraksion\", \"Pasqyrim\", \"Kondensim\"], c: 0 },\n            { q: \"Cila është njësia matëse e Kapacitetit elektrik?\", o: [\"Volt\", \"Farad\", \"Ohm\"], c: 1 }\n        ];\n\n        const tfData = [\n            { q: \"Vijat e fushës elektrike mund të priten me njëra-tjetrën.\", c: 1 }, \n            { q: \"Sipas Teoremës së Gausit, fluksi varet thellësisht nga forma gjeometrike e sipërfaqes.\", c: 1 },\n            { q: \"Kondensatori shërben për të grumbulluar ngarkesë elektrike.\", c: 0 },\n            { q: \"Teorema e Gausit për magnetizmin tregon se fluksi magnetik në një sipërfaqe të mbyllur është 0.\", c: 0 },\n            { q: \"Pasqyrat janë shembull i difraksionit të dritës.\", c: 1 }\n        ];\n\n        function renderQuestions(data, containerId, prefix, isTF, startIndex = 0, limit = data.length) {\n            const container = document.getElementById(containerId);\n            for(let i = startIndex; i < startIndex + limit; i++) {\n                if(!data[i]) break;\n                const item = data[i];\n                let optionsHTML = '';\n                const options = isTF ? [\"E Vërtetë\", \"E Gabuar\"] : item.o;\n                options.forEach((opt, optIndex) => {\n                    optionsHTML += `<label class=\"option-label\" onclick=\"selectOpt(this)\"><input type=\"radio\" name=\"${prefix}${i}\" value=\"${optIndex}\">${opt}</label>`;\n                });\n                container.innerHTML += `<div style=\"margin-bottom:20px;\"><div class=\"question-text\">${i + 1}. ${item.q}</div>${optionsHTML}</div>`;\n            }\n        }\n        \n        renderQuestions(mcqData, 'quiz-part1', 'mcq', false, 0, 5);\n        renderQuestions(mcqData, 'quiz-part2', 'mcq', false, 5, 5);\n        renderQuestions(tfData, 'tf-container', 'tf', true, 0, 5);\n\n        function selectOpt(lbl) {\n            lbl.parentElement.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));\n            lbl.classList.add('selected');\n        }\n\n        // --- 4. DRAG & DROP ---\n        let selectedElement = null;\n        function initDragDrop() {\n            const draggables = document.querySelectorAll('.draggable');\n            const zones = document.querySelectorAll('.drop-zone, .formula-slot');\n\n            draggables.forEach(item => {\n                item.addEventListener('dragstart', e => e.dataTransfer.setData('text', e.target.id));\n                item.addEventListener('click', () => {\n                    if(item.style.display === 'none') return;\n                    draggables.forEach(d => d.classList.remove('selected-mobile'));\n                    selectedElement = item;\n                    item.classList.add('selected-mobile');\n                });\n            });\n\n            zones.forEach(zone => {\n                zone.addEventListener('dragover', e => e.preventDefault());\n                zone.addEventListener('drop', e => { e.preventDefault(); processDrop(e.dataTransfer.getData('text'), zone); });\n                zone.addEventListener('click', () => {\n                    if(selectedElement) { processDrop(selectedElement.id, zone); selectedElement.classList.remove('selected-mobile'); selectedElement = null; }\n                });\n            });\n        }\n\n        function processDrop(dragId, zone) {\n            const el = document.getElementById(dragId);\n            \n            if(zone.classList.contains('sort-zone')) {\n                if(el.getAttribute('data-type') === zone.getAttribute('data-group')) {\n                    zone.appendChild(el); el.style.margin = '5px';\n                } else flashError(zone);\n                return;\n            }\n\n            if(dragId === zone.getAttribute('data-target')) {\n                if(zone.classList.contains('formula-slot')) {\n                    zone.innerHTML = el.innerHTML; el.style.display = 'none';\n                    zone.style.background = el.style.background; zone.style.color = '#1a1a2e'; zone.style.borderColor = 'transparent';\n                } else {\n                    zone.innerHTML = ''; zone.appendChild(el); el.style.margin = '0'; zone.classList.add('correct-match');\n                }\n            } else flashError(zone);\n        }\n\n        function flashError(el) {\n            const oldBorder = el.style.borderColor;\n            el.style.borderColor = \"#ef476f\";\n            setTimeout(() => el.style.borderColor = oldBorder, 400);\n        }\n        initDragDrop();\n\n        // --- 5. LLOGARITJA DHE MOLLA ---\n        function finishApp() {\n            let score = 0; let total = mcqData.length + tfData.length;\n            mcqData.forEach((q, i) => { const s = document.querySelector(`input[name=\"mcq${i}\"]:checked`); if(s && parseInt(s.value) === q.c) score++; });\n            tfData.forEach((q, i) => { const s = document.querySelector(`input[name=\"tf${i}\"]:checked`); if(s && parseInt(s.value) === q.c) score++; });\n\n            document.getElementById('res-score').innerText = `Pikët tuaja nga Kuizi: ${score} / ${total}`;\n            const msg = document.getElementById('res-msg');\n            const icon = document.getElementById('res-icon');\n            \n            if(score >= 12) { msg.innerText = \"Gjeni si Ajnshtajni!\"; msg.style.color = \"#81b29a\"; icon.innerText = \"🚀\"; }\n            else if(score >= 7) { msg.innerText = \"Goxha Mirë!\"; msg.style.color = \"#f2cc8f\"; icon.innerText = \"👍\"; }\n            else { msg.innerText = \"Duhet më shumë praktikë!\"; msg.style.color = \"#e07a5f\"; icon.innerText = \"📚\"; }\n\n            const apple = document.getElementById('apple-drop');\n            apple.style.display = 'block';\n            apple.classList.add('apple-anim');\n\n            setTimeout(() => {\n                currentScreen = 9; updateNav(); \n                if(score >= 7) confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }});\n                apple.style.display = 'none'; apple.classList.remove('apple-anim');\n            }, 1000);\n        }\n\n        updateNav(); \n    </script>\n</body>\n</html>\n"
  },
  {
    id: "smartt-game",
    title: "Laboratori i Saktësisë",
    category: "Matjet",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Laboratori i Saktësisë </title>\n    <script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js\"></script>\n    <style>\n        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap');\n\n        body {\n            font-family: 'Nunito', sans-serif; background-color: #f7f9fa; color: #4b4b4b;\n            margin: 0; padding: 15px; display: flex; justify-content: center;\n        }\n        .container { width: 100%; max-width: 800px; }\n        h1 { text-align: center; color: #ce82ff; font-size: 2.2em; margin-bottom: 5px; }\n        p.subtitle { text-align: center; color: #afafaf; font-weight: bold; margin-bottom: 30px; }\n\n        /* Kartat e Përbashkëta */\n        .card {\n            background-color: #ffffff; border: 2px solid #e5e5e5; border-radius: 16px;\n            padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 0 #e5e5e5;\n        }\n        .section-title { color: #1cb0f6; text-transform: uppercase; font-weight: 800; margin-bottom: 15px; border-bottom: 2px dashed #e5e5e5; padding-bottom: 5px; }\n\n        .question-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }\n        .icon-circle {\n            background-color: #ddf4ff; font-size: 24px; width: 50px; height: 50px;\n            display: flex; justify-content: center; align-items: center; border-radius: 50%; flex-shrink: 0;\n        }\n        .question-text { font-size: 1.1em; font-weight: 700; }\n\n        /* Alternativat */\n        .option-label {\n            display: block; border: 2px solid #e5e5e5; border-radius: 12px;\n            padding: 12px 15px; margin-bottom: 10px; cursor: pointer;\n            font-weight: 700; transition: all 0.2s ease;\n        }\n        .option-label:hover { background-color: #f1f1f1; }\n        .option-label input { display: none; }\n        .option-label.selected { background-color: #ddf4ff; border-color: #1cb0f6; color: #1cb0f6; }\n\n        /* Teksti me Vende Bosh */\n        .fill-blanks-text { font-size: 1.1em; line-height: 2.2; font-weight: 700; }\n        .blank-zone {\n            display: inline-flex; justify-content: center; align-items: center;\n            min-width: 100px; height: 35px; background-color: #f7f9fa;\n            border: 2px dashed #afafaf; border-radius: 8px; margin: 0 5px;\n            vertical-align: middle; color: #1cb0f6; font-size: 0.9em; cursor: pointer;\n        }\n        .blank-zone.correct-match { border: 2px solid #58cc02; background-color: #d7ffb8; color: #58a700; }\n\n        .word-draggable {\n            background-color: #1cb0f6; color: white; font-weight: 800;\n            padding: 10px 15px; border-radius: 12px; cursor: pointer; /* Ndryshuar në pointer për celularet */\n            box-shadow: 0 4px 0 #1899d6; display: inline-block; margin: 5px;\n            transition: transform 0.2s;\n        }\n        .word-draggable:active { transform: translateY(2px); box-shadow: 0 2px 0 #1899d6; }\n        .word-draggable.selected-mobile { transform: scale(1.1); box-shadow: 0 0 10px rgba(28, 176, 246, 0.5); }\n\n        /* Lidh me Shigjetë */\n        .drag-container { display: flex; gap: 20px; margin-top: 20px; }\n        .column { flex: 1; display: flex; flex-direction: column; gap: 10px; }\n        .block-draggable {\n            background-color: #ffc800; color: white; font-weight: 800;\n            padding: 15px; border-radius: 12px; cursor: pointer; text-align: center; \n            box-shadow: 0 4px 0 #e5b400; transition: transform 0.2s;\n        }\n        .block-draggable.prefix { background-color: #ff9600; box-shadow: 0 4px 0 #cc7800; }\n        .block-draggable.selected-mobile { transform: scale(1.05); box-shadow: 0 0 10px rgba(255, 200, 0, 0.8); }\n        \n        .block-drop-zone {\n            background-color: #f7f9fa; border: 2px dashed #afafaf; border-radius: 12px;\n            padding: 15px; min-height: 24px; font-weight: 700; color: #777; \n            display: flex; justify-content: space-between; align-items: center; cursor: pointer;\n        }\n        .block-drop-zone.correct-match { background-color: #d7ffb8; border-color: #58cc02; border-style: solid; color: #58a700; }\n\n        /* Butoni Kryesor */\n        .btn-check {\n            width: 100%; background-color: #58cc02; color: white; font-size: 1.2em; font-weight: 800; \n            padding: 15px; border: none; border-radius: 16px; cursor: pointer; \n            box-shadow: 0 4px 0 #58a700; text-transform: uppercase; margin-top: 20px; margin-bottom: 40px;\n        }\n        .btn-check:active { transform: translateY(4px); box-shadow: 0 0 0 #58a700; }\n\n        /* Modal */\n        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: none; justify-content: center; align-items: center; z-index: 1000; padding: 20px; box-sizing: border-box; }\n        .modal-card { background: white; padding: 30px; border-radius: 24px; text-align: center; width: 100%; max-width: 400px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); animation: popUp 0.3s ease-out; }\n        @keyframes popUp { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }\n        .modal-title { font-size: 2em; margin-bottom: 10px; }\n        .modal-score { font-size: 1.1em; color: #777; margin-bottom: 20px; font-weight: bold; }\n        .btn-close { background-color: #1cb0f6; color: white; border: none; padding: 15px; font-size: 1.1em; font-weight: 800; border-radius: 12px; cursor: pointer; box-shadow: 0 4px 0 #1899d6; width: 100%; text-transform: uppercase; }\n\n        /* Përshtatja për Celular (Mobile Responsiveness) */\n        @media (max-width: 600px) {\n            .drag-container { flex-direction: column; gap: 30px; }\n            .question-header { flex-direction: column; text-align: center; }\n            .question-text { font-size: 1em; }\n            .card { padding: 15px; }\n        }\n    </style>\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\n<body>\n\n    <div class=\"container\">\n        <h1>Laboratori i Saktësisë 🚀</h1>\n        <p class=\"subtitle\">Zgjidh, tërhiq ose kliko për të luajtur!</p>\n\n        <h2 class=\"section-title\">Pjesa 1: Alternativat</h2>\n        <div id=\"quiz-container\"></div>\n\n        <h2 class=\"section-title\">Pjesa 2: Plotëso Fjalinë</h2>\n        \n        <div class=\"card\">\n            <div class=\"question-header\">\n                <div class=\"icon-circle\">🧩</div>\n                <div class=\"question-text\">Ushtrimi 1: Çfarë është matja?</div>\n            </div>\n            <div class=\"fill-blanks-text\">\n                Matja e një madhësie fizike do të thotë \n                <span class=\"blank-zone\" data-target=\"w1\"></span> i saj me një \n                <span class=\"blank-zone\" data-target=\"w2\"></span> standarte. Madhësitë fizike vlerësojnë nga ana \n                <span class=\"blank-zone\" data-target=\"w3\"></span> vetitë e materies.\n            </div>\n            <div style=\"margin-top: 15px; text-align: center;\">\n                <div class=\"word-draggable\" draggable=\"true\" id=\"w2\">njësi</div>\n                <div class=\"word-draggable\" draggable=\"true\" id=\"w3\">sasiore</div>\n                <div class=\"word-draggable\" draggable=\"true\" id=\"w1\">krahasimi</div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"question-header\">\n                <div class=\"icon-circle\">💡</div>\n                <div class=\"question-text\">Ushtrimi 2: Thelbi i Shkencës</div>\n            </div>\n            <div class=\"fill-blanks-text\">\n                Thelbi i <span class=\"blank-zone\" data-target=\"w4\"></span> kërkon që \n                <span class=\"blank-zone\" data-target=\"w5\"></span> të testohet në \n                <span class=\"blank-zone\" data-target=\"w6\"></span> praktike.\n            </div>\n            <div style=\"margin-top: 15px; text-align: center;\">\n                <div class=\"word-draggable\" draggable=\"true\" id=\"w6\">eksperimente</div>\n                <div class=\"word-draggable\" draggable=\"true\" id=\"w4\">shkencës</div>\n                <div class=\"word-draggable\" draggable=\"true\" id=\"w5\">teoria</div>\n            </div>\n        </div>\n\n        <h2 class=\"section-title\">Pjesa 3: Lidh me Shigjetë</h2>\n        \n        <div class=\"card\">\n            <div class=\"question-header\">\n                <div class=\"icon-circle\">📏</div>\n                <div class=\"question-text\">Lidh Madhësitë me Njësitë e tyre (SI):</div>\n            </div>\n            <p style=\"font-size: 0.9em; color: #777; text-align: center;\">(Në celular: Kliko ngjyrën e verdhë, pastaj kliko kutinë bosh ku do ta vendosësh)</p>\n            <div class=\"drag-container\">\n                <div class=\"column\">\n                    <div class=\"block-draggable\" draggable=\"true\" id=\"t1\">Gjatësia</div>\n                    <div class=\"block-draggable\" draggable=\"true\" id=\"t2\">Masa</div>\n                    <div class=\"block-draggable\" draggable=\"true\" id=\"t3\">Koha</div>\n                    <div class=\"block-draggable\" draggable=\"true\" id=\"t4\">Temperatura</div>\n                </div>\n                <div class=\"column\">\n                    <div class=\"block-drop-zone\" data-target=\"t3\">Sekonda ⏱️</div>\n                    <div class=\"block-drop-zone\" data-target=\"t1\">Metri 📏</div>\n                    <div class=\"block-drop-zone\" data-target=\"t4\">Kelvin 🌡️</div>\n                    <div class=\"block-drop-zone\" data-target=\"t2\">Kilogrami ⚖️</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <div class=\"question-header\">\n                <div class=\"icon-circle\">🔢</div>\n                <div class=\"question-text\">Lidh Prefikset me vlerat e tyre matematikore:</div>\n            </div>\n            <div class=\"drag-container\">\n                <div class=\"column\">\n                    <div class=\"block-draggable prefix\" draggable=\"true\" id=\"p1\">Kilo</div>\n                    <div class=\"block-draggable prefix\" draggable=\"true\" id=\"p2\">Mega</div>\n                    <div class=\"block-draggable prefix\" draggable=\"true\" id=\"p3\">Giga</div>\n                    <div class=\"block-draggable prefix\" draggable=\"true\" id=\"p4\">Tera</div>\n                </div>\n                <div class=\"column\">\n                    <div class=\"block-drop-zone\" data-target=\"p2\">10<sup>6</sup></div>\n                    <div class=\"block-drop-zone\" data-target=\"p4\">10<sup>12</sup></div>\n                    <div class=\"block-drop-zone\" data-target=\"p1\">10<sup>3</sup></div>\n                    <div class=\"block-drop-zone\" data-target=\"p3\">10<sup>9</sup></div>\n                </div>\n            </div>\n        </div>\n        \n        <button class=\"btn-check\" onclick=\"checkAllAnswers()\">Përfundo & Kontrollo</button>\n    </div>\n\n    <div class=\"modal-overlay\" id=\"result-modal\">\n        <div class=\"modal-card\">\n            <h2 class=\"modal-title\" id=\"modal-msg\">Të Lumtë! 🎉</h2>\n            <div class=\"modal-score\" id=\"modal-score-text\">Ke gjetur X nga Y pyetje.</div>\n            <button class=\"btn-close\" onclick=\"closeModal()\">Mbyll & Shiko Gabimet</button>\n        </div>\n    </div>\n\n    <script>\n        // --- 1. Të 8 Pyetjet me Alternativa ---\n        const quizData = [\n            { question: \"Pse shkenca ndryshon nga fusha të tjera të dijes?\", options: [\"Nuk përdor instrumente.\", \"Kërkon që teoria të testohet në eksperimente praktike.\", \"Bazohet vetëm në imagjinatë.\"], correctIndex: 1, icon: \"🔬\" },\n            { question: \"Çfarë quhet gabimi që ndodh kur lexoni shkallën nga një pikë e gabuar?\", options: [\"Gabimi i paralaksit\", \"Gabimi absolut\", \"Gabimi relativ\"], correctIndex: 0, icon: \"👀\" },\n            { question: \"Cilat instrumente masin me saktësi më të madhe se vizorja?\", options: [\"Gota e shkallëzuar\", \"Peshorja dhe termometri\", \"Kalibri dhe mikrometri\"], correctIndex: 2, icon: \"🎯\" },\n            { question: \"Si vlerësohet pasiguria në matje nga ndarjet e shkallës së instrumentit?\", options: [\"Gjysma e precizionit maksimal\", \"Sa dyfishi i gabimit\", \"E barabartë me vlerën e matur\"], correctIndex: 0, icon: \"📏\" },\n            { question: \"Çfarë dallimi ka midis 'gabimit' dhe 'pasigurisë' në matje?\", options: [\"Gabimi është problem, pasiguria është interval\", \"Janë ekzaktësisht e njëjta gjë\", \"Pasiguria është problem, gabimi është interval\"], correctIndex: 0, icon: \"⚖️\" },\n            { question: \"Çfarë karakteristike ka një madhësi skalare?\", options: [\"Ka drejtim dhe kah\", \"Ka vetëm vlerë numerike (dhe njësi)\", \"Nuk mund të matet asnjëherë\"], correctIndex: 1, icon: \"🔢\" },\n            { question: \"Si llogaritet pasiguria relative në matje?\", options: [\"Pasiguria absolute / vlera e matur\", \"Duke mbledhur gabimet\", \"Gjysma e precizionit\"], correctIndex: 0, icon: \"➗\" },\n            { question: \"Çfarë duhet të kenë madhësitë fizike që mblidhen ose zbriten?\", options: [\"Mund të jenë çfarëdo lloji\", \"Të njëjtin lloj dhe njësi\", \"Vetëm të njëjtën vlerë numerike\"], correctIndex: 1, icon: \"➕\" }\n        ];\n\n        const quizContainer = document.getElementById('quiz-container');\n        quizData.forEach((q, index) => {\n            const card = document.createElement('div');\n            card.className = 'card';\n            let optionsHTML = '';\n            q.options.forEach((opt, optIndex) => {\n                optionsHTML += `\n                    <label class=\"option-label\" onclick=\"selectOption(this)\">\n                        <input type=\"radio\" name=\"q${index}\" value=\"${optIndex}\">\n                        ${opt}\n                    </label>`;\n            });\n            card.innerHTML = `\n                <div class=\"question-header\">\n                    <div class=\"icon-circle\">${q.icon}</div>\n                    <div class=\"question-text\">${q.question}</div>\n                </div>\n                <div class=\"options-container\">${optionsHTML}</div>`;\n            quizContainer.appendChild(card);\n        });\n\n        function selectOption(labelElement) {\n            const labels = labelElement.parentElement.querySelectorAll('.option-label');\n            labels.forEach(lbl => lbl.classList.remove('selected'));\n            labelElement.classList.add('selected');\n        }\n\n        // --- 2. Logjika Hibride Drag & Drop (Tërhiq PËR PC / Kliko PËR Telefon) ---\n        let selectedElementForMobile = null;\n\n        function setupInteractions(draggableClass, dropZoneClass, isTextReplacement) {\n            const draggables = document.querySelectorAll(draggableClass);\n            const dropZones = document.querySelectorAll(dropZoneClass);\n\n            // Logjika e PC (Drag & Drop)\n            draggables.forEach(item => {\n                item.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text', e.target.id); });\n                \n                // Logjika e Celularit (Kliko për të zgjedhur)\n                item.addEventListener('click', () => {\n                    if (item.getAttribute('draggable') === 'false') return;\n                    draggables.forEach(d => d.classList.remove('selected-mobile'));\n                    selectedElementForMobile = item;\n                    item.classList.add('selected-mobile');\n                });\n            });\n\n            dropZones.forEach(zone => {\n                // Për PC\n                zone.addEventListener('dragover', e => e.preventDefault());\n                zone.addEventListener('drop', e => {\n                    e.preventDefault();\n                    handleMatch(e.dataTransfer.getData('text'), zone, isTextReplacement);\n                });\n\n                // Për Celular (Kliko kutinë bosh për ta hedhur)\n                zone.addEventListener('click', () => {\n                    if (selectedElementForMobile) {\n                        handleMatch(selectedElementForMobile.id, zone, isTextReplacement);\n                        selectedElementForMobile.classList.remove('selected-mobile');\n                        selectedElementForMobile = null; // Pastro zgjedhjen\n                    }\n                });\n            });\n        }\n\n        // Funksioni që menaxhon përputhjen (përdoret nga PC dhe Celulari njëlloj)\n        function handleMatch(draggedId, zone, isTextReplacement) {\n            const expectedId = zone.getAttribute('data-target');\n            if (draggedId === expectedId) {\n                const draggedElement = document.getElementById(draggedId);\n                if (isTextReplacement) {\n                    zone.innerHTML = draggedElement.innerText;\n                    draggedElement.style.display = 'none';\n                } else {\n                    zone.innerHTML = ''; \n                    zone.appendChild(draggedElement);\n                    draggedElement.style.boxShadow = 'none';\n                    draggedElement.style.margin = '0';\n                }\n                zone.classList.add('correct-match');\n                draggedElement.setAttribute('draggable', 'false');\n            } else {\n                const originalColor = zone.style.borderColor;\n                zone.style.borderColor = \"#ff4b4b\"; // Kuqe për gabim\n                setTimeout(() => zone.style.borderColor = originalColor, 500);\n            }\n        }\n\n        // Aktivizo ndërveprimet\n        setupInteractions('.word-draggable', '.blank-zone', true);\n        setupInteractions('.block-draggable', '.block-drop-zone', false);\n\n        // --- 3. Kontrolli Përfundimtar ---\n        function checkAllAnswers() {\n            let score = 0;\n            quizData.forEach((q, index) => {\n                const selected = document.querySelector(`input[name=\"q${index}\"]:checked`);\n                const card = document.querySelectorAll('.card')[index];\n                if (selected && parseInt(selected.value) === q.correctIndex) {\n                    card.style.borderColor = \"#58cc02\";\n                    score++;\n                } else {\n                    card.style.borderColor = \"#ff4b4b\";\n                }\n            });\n\n            const modalMsg = document.getElementById('modal-msg');\n            const modalScoreText = document.getElementById('modal-score-text');\n            const modal = document.getElementById('result-modal');\n\n            modalScoreText.innerHTML = `Ke gjetur saktë <strong style=\"color:#58cc02\">${score}</strong> nga ${quizData.length} pyetje me alternativa. <br><br> (Sigurohu që kutitë e tjera të jenë të gjitha me ngjyrë të gjelbër!)`;\n\n            if (score === quizData.length) {\n                modalMsg.innerText = \"Të Lumtë! 🎉\";\n                modalMsg.style.color = \"#58cc02\";\n                launchConfetti();\n            } else if (score >= 4) {\n                modalMsg.innerText = \"Goxha Mirë! 💪\";\n                modalMsg.style.color = \"#ffc800\";\n            } else {\n                modalMsg.innerText = \"Provo Sërish! 🔄\";\n                modalMsg.style.color = \"#ff4b4b\";\n            }\n            modal.style.display = \"flex\";\n        }\n\n        function closeModal() { document.getElementById('result-modal').style.display = \"none\"; }\n\n        function launchConfetti() {\n            var duration = 3 * 1000;\n            var end = Date.now() + duration;\n            (function frame() {\n                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#58cc02', '#1cb0f6', '#ce82ff', '#ffc800'] });\n                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#58cc02', '#1cb0f6', '#ce82ff', '#ffc800'] });\n                if (Date.now() < end) requestAnimationFrame(frame);\n            }());\n        }\n    </script>\n</body>\n</html>\n"
  },
  {
    id: "electric-field-master",
    title: "Mjeshtri i Fushës Elektrike",
    category: "Fusha Elektrike",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Electric Field Master</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n\r\n        body {\r\n            font-family: 'Inter', sans-serif;\r\n            background: var(--bg);\r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text);\r\n            margin: 0;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            overflow: hidden;\r\n            padding: 20px;\r\n        }\r\n\r\n        h1 {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 3.5rem;\r\n            color: var(--accent);\r\n            text-shadow: 3px 3px 0px var(--border);\r\n            margin-bottom: 10px;\r\n            letter-spacing: 2px;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        #game-container {\r\n            position: relative;\r\n            margin-top: 20px;\r\n            border: 4px solid var(--border);\r\n            background: var(--surface);\r\n            box-shadow: 8px 8px 0px var(--border);\r\n            padding: 10px;\r\n        }\r\n\r\n        canvas { \r\n            display: block; \r\n            cursor: crosshair; \r\n            background: #e2e8f0;\r\n            border: 4px solid var(--border);\r\n            box-shadow: inset 4px 4px 0px rgba(0,0,0,0.05);\r\n        }\r\n\r\n        .ui-panel {\r\n            background: var(--surface);\r\n            padding: 15px 25px;\r\n            display: flex;\r\n            gap: 20px;\r\n            align-items: center;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 8px 8px 0px var(--border);\r\n            margin-bottom: 10px;\r\n            flex-wrap: wrap;\r\n            justify-content: center;\r\n        }\r\n\r\n        .btn {\r\n            padding: 10px 20px;\r\n            border: 4px solid var(--border);\r\n            cursor: pointer;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            font-weight: bold;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            transition: transform 0.1s, box-shadow 0.1s;\r\n        }\r\n\r\n        .btn-pos { background: var(--red); color: var(--border); }\r\n        .btn-neg { background: var(--accent2); color: var(--border); }\r\n        .btn-start { background: var(--green); color: var(--border); }\r\n        .btn-reset { background: var(--muted); color: var(--border); }\r\n        \r\n        .btn:active { \r\n            transform: translate(4px, 4px);\r\n            box-shadow: 0px 0px 0px var(--border);\r\n        }\r\n\r\n        .stats { \r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem; \r\n            color: var(--accent); \r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n        \r\n        #instructions {\r\n            position: absolute;\r\n            top: 20px;\r\n            left: 20px;\r\n            background: var(--surface);\r\n            padding: 15px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.2rem;\r\n            color: var(--text);\r\n            pointer-events: none;\r\n            z-index: 10;\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <h1><i class=\"fas fa-atom\"></i> Electric Field Master</h1>\r\n\r\n    <div class=\"ui-panel\">\r\n        <div class=\"stats\">Niveli: <span id=\"lvl\">1</span></div>\r\n        <button class=\"btn btn-pos\" onclick=\"setMode('pos')\"><i class=\"fas fa-plus-circle\"></i> Shto Pozitive</button>\r\n        <button class=\"btn btn-neg\" onclick=\"setMode('neg')\"><i class=\"fas fa-minus-circle\"></i> Shto Negative</button>\r\n        <button class=\"btn btn-start\" onclick=\"startSim()\"><i class=\"fas fa-play\"></i> Lësho Protonin!</button>\r\n        <button class=\"btn btn-reset\" onclick=\"resetLevel()\"><i class=\"fas fa-undo\"></i> Reset</button>\r\n    </div>\r\n\r\n    <div id=\"game-container\">\r\n        <div id=\"instructions\">Klikoni në fushë për të vendosur ngarkesat.<br>Drejtoni protonin te rrethi i gjelbër!</div>\r\n        <canvas id=\"gameCanvas\"></canvas>\r\n    </div>\r\n\r\n<script>\r\n    const canvas = document.getElementById('gameCanvas');\r\n    const ctx = canvas.getContext('2d');\r\n    canvas.width = 800;\r\n    canvas.height = 500;\r\n\r\n    let level = 1;\r\n    let mode = 'pos';\r\n    let charges = [];\r\n    let particle = { x: 50, y: 250, vx: 0, vy: 0, active: false };\r\n    let target = { x: 750, y: 250, r: 20 };\r\n    let walls = [];\r\n    let animationId;\r\n\r\n    const levels = [\r\n        { walls: [], target: {x: 750, y: 250} },\r\n        { walls: [{x: 400, y: 150, w: 20, h: 200}], target: {x: 750, y: 250} },\r\n        { walls: [{x: 300, y: 0, w: 20, h: 300}, {x: 500, y: 200, w: 20, h: 300}], target: {x: 750, y: 50} }\r\n    ];\r\n\r\n    function setMode(m) { mode = m; }\r\n\r\n    canvas.addEventListener('mousedown', (e) => {\r\n        if (particle.active) return;\r\n        const rect = canvas.getBoundingClientRect();\r\n        // Scale coordinates if canvas is resized by CSS\r\n        const scaleX = canvas.width / rect.width;\r\n        const scaleY = canvas.height / rect.height;\r\n        charges.push({\r\n            x: (e.clientX - rect.left) * scaleX,\r\n            y: (e.clientY - rect.top) * scaleY,\r\n            type: mode,\r\n            q: mode === 'pos' ? 1 : -1\r\n        });\r\n        draw();\r\n    });\r\n\r\n    function draw() {\r\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n        \r\n        // Vizato Targetin\r\n        ctx.beginPath();\r\n        ctx.arc(target.x, target.y, target.r, 0, Math.PI*2);\r\n        ctx.fillStyle = '#baffc9';\r\n        ctx.fill();\r\n        ctx.strokeStyle = '#4a4e69';\r\n        ctx.lineWidth = 4;\r\n        ctx.stroke();\r\n\r\n        // Vizato Muret\r\n        ctx.fillStyle = '#4a4e69';\r\n        walls.forEach(w => {\r\n            ctx.fillRect(w.x, w.y, w.w, w.h);\r\n            ctx.strokeStyle = '#f8fafc';\r\n            ctx.lineWidth = 2;\r\n            ctx.strokeRect(w.x+2, w.y+2, w.w-4, w.h-4);\r\n        });\r\n\r\n        // Vizato Ngarkesat e vendosura\r\n        charges.forEach(c => {\r\n            ctx.beginPath();\r\n            ctx.arc(c.x, c.y, 12, 0, Math.PI*2);\r\n            ctx.fillStyle = c.type === 'pos' ? '#ffb3ba' : '#a2d2ff';\r\n            ctx.fill();\r\n            ctx.strokeStyle = '#4a4e69';\r\n            ctx.lineWidth = 3;\r\n            ctx.stroke();\r\n            \r\n            ctx.fillStyle = \"#4a4e69\";\r\n            ctx.font = \"bold 16px VT323\";\r\n            ctx.textAlign = \"center\";\r\n            ctx.textBaseline = \"middle\";\r\n            ctx.fillText(c.type === 'pos' ? \"+\" : \"-\", c.x, c.y);\r\n        });\r\n\r\n        // Vizato Protonin\r\n        ctx.beginPath();\r\n        ctx.arc(particle.x, particle.y, 8, 0, Math.PI*2);\r\n        ctx.fillStyle = '#ffc8dd';\r\n        ctx.fill();\r\n        ctx.strokeStyle = '#4a4e69';\r\n        ctx.lineWidth = 3;\r\n        ctx.stroke();\r\n    }\r\n\r\n    function update() {\r\n        if (!particle.active) return;\r\n\r\n        let fx = 0;\r\n        let fy = 0;\r\n        const k = 5000; // Konstanta e lojës\r\n\r\n        charges.forEach(c => {\r\n            let dx = particle.x - c.x;\r\n            let dy = particle.y - c.y;\r\n            let distSq = dx*dx + dy*dy;\r\n            let dist = Math.sqrt(distSq);\r\n            if (dist < 15) dist = 15; // Parandalon shpërthimin e forcës\r\n\r\n            let force = (k * c.q) / distSq;\r\n            fx += (dx / dist) * force;\r\n            fy += (dy / dist) * force;\r\n        });\r\n\r\n        particle.vx += fx;\r\n        particle.vy += fy;\r\n        particle.x += particle.vx;\r\n        particle.y += particle.vy;\r\n\r\n        // Kontrolli i përplasjeve\r\n        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {\r\n            resetAttempt();\r\n        }\r\n\r\n        walls.forEach(w => {\r\n            if (particle.x > w.x && particle.x < w.x + w.w && particle.y > w.y && particle.y < w.y + w.h) {\r\n                resetAttempt();\r\n            }\r\n        });\r\n\r\n        // Fitore\r\n        let distToTarget = Math.hypot(particle.x - target.x, particle.y - target.y);\r\n        if (distToTarget < target.r) {\r\n            alert(\"Bravo! Niveli u kalua.\");\r\n            level++;\r\n            loadLevel(level);\r\n            return;\r\n        }\r\n\r\n        draw();\r\n        animationId = requestAnimationFrame(update);\r\n    }\r\n\r\n    function startSim() {\r\n        if (particle.active) return;\r\n        particle.active = true;\r\n        update();\r\n    }\r\n\r\n    function resetAttempt() {\r\n        cancelAnimationFrame(animationId);\r\n        particle = { x: 50, y: 250, vx: 0, vy: 0, active: false };\r\n        particle.active = false;\r\n        draw();\r\n    }\r\n\r\n    function resetLevel() {\r\n        charges = [];\r\n        resetAttempt();\r\n    }\r\n\r\n    function loadLevel(n) {\r\n        if (n > levels.length) {\r\n            alert(\"Ti je një Gjini i Fizikës! I fitove të gjitha.\");\r\n            level = 1;\r\n            n = 1;\r\n        }\r\n        document.getElementById('lvl').innerText = n;\r\n        const config = levels[n-1];\r\n        walls = config.walls;\r\n        target.x = config.target.x;\r\n        target.y = config.target.y;\r\n        resetLevel();\r\n    }\r\n\r\n    loadLevel(1);\r\n</script>\r\n</body>\r\n</html>"
  },
  {
    id: "potential-master",
    title: "Mjeshtri i Potencialit",
    category: "Potenciali",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Potential Master - Final Fixed</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&family=Orbitron:wght@500;700&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f0f4f8;\r\n            --surface: #ffffff;\r\n            --primary: #3b82f6;\r\n            --primary-hover: #2563eb;\r\n            --secondary: #10b981;\r\n            --text: #1e293b;\r\n            --muted: #64748b;\r\n            --border: #e2e8f0;\r\n            --danger: #ef4444;\r\n            --warning: #f59e0b;\r\n            --radius: 24px;\r\n            --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n            background-color: var(--bg);\r\n            color: var(--text);\r\n            font-family: 'Nunito', sans-serif;\r\n            display: flex;\r\n            height: 100vh;\r\n            overflow: hidden;\r\n        }\r\n\r\n        #ui {\r\n            width: 380px;\r\n            background: var(--surface);\r\n            border-right: 1px solid var(--border);\r\n            padding: 30px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 20px;\r\n            z-index: 10;\r\n            box-shadow: var(--shadow);\r\n        }\r\n\r\n        h2 {\r\n            font-family: 'Orbitron', sans-serif;\r\n            font-size: 2.2rem;\r\n            color: var(--primary);\r\n            margin: 0;\r\n            text-transform: uppercase;\r\n            text-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);\r\n        }\r\n\r\n        .level-card {\r\n            background: #f8fafc;\r\n            padding: 20px;\r\n            border: 1px solid var(--border);\r\n            border-radius: 16px;\r\n            box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);\r\n            text-align: center;\r\n        }\r\n\r\n        #lvlNum {\r\n            font-family: 'Orbitron', sans-serif;\r\n            font-size: 1.8rem;\r\n            color: var(--primary);\r\n            font-weight: 700;\r\n        }\r\n\r\n        #lvlGoal {\r\n            font-weight: 700;\r\n            font-size: 1.1rem;\r\n            margin-top: 10px;\r\n            color: var(--muted);\r\n        }\r\n\r\n        #game-area { flex-grow: 1; position: relative; background: #f8fafc; }\r\n        canvas { width: 100%; height: 100%; cursor: crosshair; }\r\n\r\n        .btn {\r\n            padding: 12px;\r\n            border: none;\r\n            background: var(--surface);\r\n            color: var(--text);\r\n            cursor: pointer;\r\n            font-family: 'Nunito', sans-serif;\r\n            font-size: 1.1rem;\r\n            font-weight: 800;\r\n            border-radius: 12px;\r\n            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\r\n            transition: all 0.2s;\r\n            border: 1px solid var(--border);\r\n        }\r\n\r\n        .btn:hover {\r\n            transform: translateY(-2px);\r\n            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\r\n        }\r\n\r\n        .btn:active {\r\n            transform: translateY(0);\r\n        }\r\n\r\n        .active-q { \r\n            background: linear-gradient(135deg, var(--primary), var(--primary-hover)) !important;\r\n            color: white !important;\r\n            border-color: transparent !important;\r\n            box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3) !important;\r\n        }\r\n        #posBtn.active-q { \r\n            background: linear-gradient(135deg, var(--danger), #dc2626) !important; \r\n            box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3) !important;\r\n        }\r\n\r\n        .formula-footer {\r\n            margin-top: auto;\r\n            padding: 20px;\r\n            background: var(--surface);\r\n            border-radius: 16px;\r\n            border: 1px solid var(--border);\r\n            text-align: center;\r\n            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\r\n            font-size: 1rem;\r\n            color: var(--muted);\r\n            font-weight: 600;\r\n        }\r\n\r\n        .math-fraction {\r\n            display: inline-block;\r\n            vertical-align: middle;\r\n            text-align: center;\r\n            font-size: 1.5rem;\r\n            color: var(--primary);\r\n            font-family: 'Orbitron', sans-serif;\r\n            font-weight: 700;\r\n            margin: 10px 0;\r\n        }\r\n\r\n        .fraction-top { border-bottom: 2px solid var(--primary); padding: 0 5px; }\r\n        .fraction-bottom { padding: 0 5px; }\r\n\r\n        #multimeter {\r\n            position: absolute;\r\n            background: var(--surface);\r\n            border: 1px solid var(--border);\r\n            border-radius: 8px;\r\n            padding: 8px 12px;\r\n            font-family: 'Orbitron', sans-serif;\r\n            font-size: 1.2rem;\r\n            font-weight: 700;\r\n            color: var(--primary);\r\n            pointer-events: none;\r\n            display: none;\r\n            box-shadow: 0 4px 10px rgba(0,0,0,0.1);\r\n            z-index: 20;\r\n        }\r\n\r\n        .success-overlay {\r\n            position: absolute;\r\n            top: 50%; left: 50%;\r\n            transform: translate(-50%, -50%);\r\n            background: var(--surface);\r\n            color: var(--text);\r\n            padding: 40px;\r\n            border-radius: 24px;\r\n            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r\n            display: none;\r\n            text-align: center;\r\n            border: 1px solid var(--border);\r\n            z-index: 30;\r\n        }\r\n        .success-overlay h3 {\r\n            font-size: 2.5rem;\r\n            margin-top: 0;\r\n            color: var(--secondary);\r\n            font-family: 'Orbitron', sans-serif;\r\n            text-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);\r\n        }\r\n        \r\n        .success-overlay .btn {\r\n            background: linear-gradient(135deg, var(--primary), var(--primary-hover));\r\n            color: white;\r\n            border: none;\r\n            padding: 12px 24px;\r\n            margin-top: 20px;\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <div id=\"ui\">\r\n        <h2><i class=\"fas fa-bolt\"></i> POTENTIAL LAB</h2>\r\n        \r\n        <div class=\"level-card\">\r\n            <div id=\"lvlNum\">Niveli 1</div>\r\n            <div id=\"lvlGoal\">Synimi: V > <span style=\"color: var(--warning); font-weight: 800; font-family: 'Orbitron', sans-serif; font-size: 1.4rem;\">100</span>V</div>\r\n        </div>\r\n\r\n        <div style=\"display: flex; flex-direction: column; gap: 10px;\">\r\n            <button id=\"posBtn\" class=\"btn active-q\" onclick=\"setQ(1)\"><i class=\"fas fa-plus-circle\"></i> Pozitive</button>\r\n            <button id=\"negBtn\" class=\"btn\" onclick=\"setQ(-1)\"><i class=\"fas fa-minus-circle\"></i> Negative</button>\r\n            <button class=\"btn\" onclick=\"resetLevel()\" style=\"margin-top: 10px; background: #f8fafc;\"><i class=\"fas fa-undo\"></i> Reset</button>\r\n        </div>\r\n\r\n        <div class=\"formula-footer\">\r\n            <div style=\"font-weight: 800; font-size: 1.1rem; color: var(--muted); text-transform: uppercase;\">Formula</div>\r\n            <div class=\"math-fraction\">\r\n                V = \r\n                <div style=\"display: inline-block; vertical-align: middle;\">\r\n                    <div class=\"fraction-top\">E<sub>p</sub></div>\r\n                    <div class=\"fraction-bottom\">q</div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <p style=\"font-size: 0.95rem; color: var(--muted); margin-bottom: 0;\">Shtyp mbi fushë për të vendosur burimin.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"main-view\">\r\n        <canvas id=\"canvas\"></canvas>\r\n        <div id=\"multimeter\">V: 0.00V</div>\r\n        <div id=\"success\" class=\"success-overlay\">\r\n            <h3><i class=\"fas fa-check-circle\"></i> NIVELI U KALUA!</h3>\r\n            <button class=\"btn\" onclick=\"nextLevel()\">VAZHDO <i class=\"fas fa-arrow-right\"></i></button>\r\n        </div>\r\n    </div>\r\n\r\n<script>\r\n    const canvas = document.getElementById('canvas');\r\n    const ctx = canvas.getContext('2d');\r\n    const multi = document.getElementById('multimeter');\r\n    const successDiv = document.getElementById('success');\r\n\r\n    let currentLevel = 0;\r\n    let charges = [];\r\n    let qType = 1;\r\n    let width, height;\r\n\r\n    const levels = [\r\n        { goalV: 100, target: {x: 0.7, y: 0.5}, walls: [] },\r\n        { goalV: -150, target: {x: 0.8, y: 0.2}, walls: [{x: 0.5, y: 0, w: 0.02, h: 0.7}] },\r\n        { goalV: 200, target: {x: 0.5, y: 0.5}, walls: [{x: 0.3, y: 0.3, w: 0.4, h: 0.02}, {x: 0.3, y: 0.7, w: 0.4, h: 0.02}] }\r\n    ];\r\n\r\n    function resize() {\r\n        width = canvas.width = canvas.offsetWidth;\r\n        height = canvas.height = canvas.offsetHeight;\r\n    }\r\n    window.addEventListener('resize', resize);\r\n    resize();\r\n\r\n    function setQ(v) {\r\n        qType = v;\r\n        document.getElementById('posBtn').classList.toggle('active-q', v > 0);\r\n        document.getElementById('negBtn').classList.toggle('active-q', v < 0);\r\n    }\r\n\r\n    canvas.addEventListener('mousemove', (e) => {\r\n        const rect = canvas.getBoundingClientRect();\r\n        const mx = e.clientX - rect.left;\r\n        const my = e.clientY - rect.top;\r\n        multi.style.display = 'block';\r\n        multi.style.left = (mx + 15) + 'px';\r\n        multi.style.top = (my + 15) + 'px';\r\n        let V = calculatePotential(mx, my);\r\n        multi.innerText = `V: ${V.toFixed(1)}V`;\r\n    });\r\n\r\n    canvas.addEventListener('mousedown', (e) => {\r\n        if(successDiv.style.display === 'block') return;\r\n        const rect = canvas.getBoundingClientRect();\r\n        charges.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, q: qType * 200 });\r\n    });\r\n\r\n    function calculatePotential(px, py) {\r\n        let V = 0;\r\n        charges.forEach(c => {\r\n            let r = Math.hypot(px - c.x, py - c.y) + 20;\r\n            V += (c.q * 10) / (r * 0.1);\r\n        });\r\n        return V;\r\n    }\r\n\r\n    function resetLevel() { charges = []; successDiv.style.display = 'none'; }\r\n\r\n    function nextLevel() {\r\n        currentLevel++;\r\n        if(currentLevel >= levels.length) { alert(\"Urime! Keni fituar.\"); currentLevel = 0; }\r\n        document.getElementById('lvlNum').innerText = \"Niveli \" + (currentLevel + 1);\r\n        document.getElementById('lvlGoal').innerHTML = `Synimi: V > <span style=\"color: var(--warning); font-weight: 800; font-family: 'Orbitron', sans-serif; font-size: 1.4rem;\">${levels[currentLevel].goalV}</span>V`;\r\n        resetLevel();\r\n    }\r\n\r\n    function draw() {\r\n        ctx.clearRect(0, 0, width, height);\r\n        const lvl = levels[currentLevel];\r\n        \r\n        // Draw walls\r\n        ctx.fillStyle = \"#cbd5e1\";\r\n        lvl.walls.forEach(w => {\r\n            ctx.beginPath();\r\n            ctx.roundRect(w.x * width, w.y * height, w.w * width, w.h * height, 8);\r\n            ctx.fill();\r\n        });\r\n\r\n        const tx = lvl.target.x * width;\r\n        const ty = lvl.target.y * height;\r\n        const currentV = calculatePotential(tx, ty);\r\n        const reached = Math.abs(currentV) >= Math.abs(lvl.goalV);\r\n        \r\n        // Draw target area\r\n        ctx.beginPath();\r\n        ctx.arc(tx, ty, 35, 0, Math.PI*2);\r\n        ctx.strokeStyle = reached ? \"#10b981\" : \"#f59e0b\";\r\n        ctx.lineWidth = 4;\r\n        ctx.stroke();\r\n        ctx.fillStyle = reached ? \"rgba(16, 185, 129, 0.2)\" : \"rgba(245, 158, 11, 0.2)\";\r\n        ctx.fill();\r\n        \r\n        ctx.fillStyle = \"#64748b\";\r\n        ctx.font = \"bold 16px Nunito\";\r\n        ctx.textAlign = \"center\";\r\n        ctx.fillText(`SENSOR: ${currentV.toFixed(0)}V`, tx, ty - 45);\r\n        \r\n        // Draw charges\r\n        charges.forEach(c => {\r\n            ctx.beginPath();\r\n            ctx.arc(c.x, c.y, 15, 0, Math.PI*2);\r\n            \r\n            if (c.q > 0) {\r\n                ctx.fillStyle = \"linear-gradient(135deg, #ef4444, #dc2626)\";\r\n                ctx.fill();\r\n                ctx.fillStyle = \"#ef4444\";\r\n                ctx.fill();\r\n                ctx.shadowColor = \"rgba(239, 68, 68, 0.4)\";\r\n            } else {\r\n                ctx.fillStyle = \"linear-gradient(135deg, #3b82f6, #2563eb)\";\r\n                ctx.fill();\r\n                ctx.fillStyle = \"#3b82f6\";\r\n                ctx.fill();\r\n                ctx.shadowColor = \"rgba(59, 130, 246, 0.4)\";\r\n            }\r\n            \r\n            ctx.shadowBlur = 10;\r\n            ctx.fill();\r\n            ctx.shadowBlur = 0;\r\n            \r\n            ctx.fillStyle = \"#ffffff\";\r\n            ctx.font = \"bold 20px Nunito\";\r\n            ctx.textBaseline = \"middle\";\r\n            ctx.fillText(c.q > 0 ? \"+\" : \"-\", c.x, c.y);\r\n        });\r\n        \r\n        if (reached && successDiv.style.display !== 'block') successDiv.style.display = 'block';\r\n        requestAnimationFrame(draw);\r\n    }\r\n    \r\n    draw();\r\n</script>\r\n</body>\r\n</html>"
  },
  {
    id: "induction-master",
    title: "Mjeshtri i Induksionit",
    category: "Induksioni",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Induction Master - I = ε/R</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&family=Orbitron:wght@500;700&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f0f4f8;\r\n            --surface: #ffffff;\r\n            --primary: #3b82f6;\r\n            --primary-hover: #2563eb;\r\n            --secondary: #10b981;\r\n            --text: #1e293b;\r\n            --muted: #64748b;\r\n            --border: #e2e8f0;\r\n            --danger: #ef4444;\r\n            --warning: #f59e0b;\r\n            --radius: 24px;\r\n            --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n            background-color: var(--bg);\r\n            color: var(--text);\r\n            font-family: 'Nunito', sans-serif;\r\n            display: flex;\r\n            height: 100vh;\r\n            overflow: hidden;\r\n        }\r\n\r\n        #sidebar {\r\n            width: 380px;\r\n            background: var(--surface);\r\n            border-right: 1px solid var(--border);\r\n            padding: 30px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 20px;\r\n            box-shadow: var(--shadow);\r\n            z-index: 10;\r\n        }\r\n\r\n        .level-box {\r\n            border: 1px solid var(--border);\r\n            border-radius: 16px;\r\n            padding: 20px;\r\n            background: #f8fafc;\r\n            text-align: center;\r\n            box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);\r\n        }\r\n\r\n        #lvlNum {\r\n            font-family: 'Orbitron', sans-serif;\r\n            font-size: 1.8rem;\r\n            color: var(--primary);\r\n            font-weight: 700;\r\n        }\r\n\r\n        .gauge-container {\r\n            background: var(--border);\r\n            border-radius: 12px;\r\n            height: 24px;\r\n            position: relative;\r\n            margin-top: 10px;\r\n            overflow: hidden;\r\n            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);\r\n        }\r\n\r\n        #gauge-fill {\r\n            height: 100%;\r\n            width: 0%;\r\n            background: linear-gradient(90deg, var(--primary), var(--secondary));\r\n            transition: width 0.1s ease-out;\r\n            border-radius: 12px;\r\n        }\r\n\r\n        .control-unit {\r\n            background: #f8fafc;\r\n            padding: 20px;\r\n            border-radius: 16px;\r\n            border: 1px solid var(--border);\r\n        }\r\n\r\n        .control-unit label {\r\n            font-weight: 700;\r\n            font-size: 1rem;\r\n            color: var(--text);\r\n            display: block;\r\n            margin-bottom: 12px;\r\n        }\r\n\r\n        input[type=range] { \r\n            width: 100%; \r\n            cursor: pointer; \r\n            -webkit-appearance: none;\r\n            height: 8px;\r\n            border-radius: 4px;\r\n            background: var(--border);\r\n            outline: none;\r\n        }\r\n        input[type=range]::-webkit-slider-thumb {\r\n            -webkit-appearance: none;\r\n            width: 24px;\r\n            height: 24px;\r\n            border-radius: 50%;\r\n            background: var(--primary);\r\n            cursor: pointer;\r\n            box-shadow: 0 2px 5px rgba(59, 130, 246, 0.4);\r\n            transition: transform 0.1s;\r\n        }\r\n        input[type=range]::-webkit-slider-thumb:hover {\r\n            transform: scale(1.1);\r\n        }\r\n\r\n        #rVal {\r\n            font-family: 'Orbitron', sans-serif;\r\n            font-size: 1.5rem;\r\n            color: var(--primary);\r\n            font-weight: 700;\r\n            margin-top: 10px;\r\n            text-align: center;\r\n        }\r\n\r\n        .formula-card {\r\n            margin-top: auto;\r\n            padding: 20px;\r\n            background: var(--surface);\r\n            border-radius: 16px;\r\n            border: 1px solid var(--border);\r\n            text-align: center;\r\n            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\r\n        }\r\n\r\n        .math-style {\r\n            font-size: 1.8rem;\r\n            color: var(--primary);\r\n            font-family: 'Orbitron', sans-serif;\r\n            margin: 15px 0;\r\n            font-weight: 700;\r\n        }\r\n\r\n        .fraction {\r\n            display: inline-block;\r\n            vertical-align: middle;\r\n            text-align: center;\r\n        }\r\n        .top { border-bottom: 2px solid var(--primary); padding: 0 5px; }\r\n        .bottom { padding: 0 5px; }\r\n\r\n        #main-view { flex-grow: 1; position: relative; background: #f8fafc; }\r\n        canvas { width: 100%; height: 100%; }\r\n\r\n        h2 {\r\n            font-family: 'Orbitron', sans-serif;\r\n            font-size: 2.2rem;\r\n            color: var(--primary);\r\n            margin: 0;\r\n            text-transform: uppercase;\r\n            text-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <div id=\"sidebar\">\r\n        <h2><i class=\"fas fa-bolt\"></i> GEN-CONTROLLER</h2>\r\n        \r\n        <div class=\"level-box\">\r\n            <div id=\"lvlNum\">NIVELI 1</div>\r\n            <div style=\"font-weight: 700; font-size: 1.1rem; margin-top: 10px; color: var(--muted);\">TARGET I: <span id=\"targetVal\" style=\"color: var(--warning); font-weight: 800; font-family: 'Orbitron', sans-serif; font-size: 1.4rem;\">2.00</span> A</div>\r\n        </div>\r\n\r\n        <div class=\"control-unit\">\r\n            <label>REZISTENCA (R)</label>\r\n            <input type=\"range\" id=\"resistor\" min=\"1\" max=\"10\" step=\"0.5\" value=\"5\">\r\n            <div id=\"rVal\">5.0 Ω</div>\r\n        </div>\r\n\r\n        <div>\r\n            <div style=\"text-align: center; font-weight: 700; font-size: 1rem; color: var(--text); margin-bottom: 8px;\">RRYMA AKTUALE (I)</div>\r\n            <div class=\"gauge-container\">\r\n                <div id=\"gauge-fill\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"formula-card\">\r\n            <div style=\"font-weight: 800; font-size: 1.1rem; color: var(--muted); text-transform: uppercase;\">Ligji i Induksionit</div>\r\n            <div class=\"math-style\">\r\n                I = \r\n                <div class=\"fraction\">\r\n                    <div class=\"top\">ε</div>\r\n                    <div class=\"bottom\">R</div>\r\n                </div>\r\n            </div>\r\n            <p style=\"font-size: 0.95rem; color: var(--muted); margin-bottom: 0; font-weight: 600;\">Lëviz magnetin me shpejtësi për të gjeneruar ε (tension)!</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"main-view\">\r\n        <canvas id=\"gameCanvas\"></canvas>\r\n    </div>\r\n\r\n<script>\r\n    const canvas = document.getElementById('gameCanvas');\r\n    const ctx = canvas.getContext('2d');\r\n    const resSlider = document.getElementById('resistor');\r\n    const gauge = document.getElementById('gauge-fill');\r\n\r\n    let width, height;\r\n    let magnetX = 100;\r\n    let lastMagnetX = 100;\r\n    let velocity = 0;\r\n    let currentLevel = 0;\r\n\r\n    const levels = [\r\n        { target: 2.0, r: 5 },\r\n        { target: 4.5, r: 2 },\r\n        { target: 1.5, r: 8 }\r\n    ];\r\n\r\n    function resize() {\r\n        width = canvas.width = canvas.offsetWidth;\r\n        height = canvas.height = canvas.offsetHeight;\r\n    }\r\n    window.addEventListener('resize', resize);\r\n    resize();\r\n\r\n    canvas.addEventListener('mousemove', (e) => {\r\n        const rect = canvas.getBoundingClientRect();\r\n        magnetX = e.clientX - rect.left;\r\n    });\r\n\r\n    function draw() {\r\n        ctx.clearRect(0, 0, width, height);\r\n\r\n        // Llogarit ε (FEM) bazuar në shpejtësinë e magnetit\r\n        velocity = Math.abs(magnetX - lastMagnetX);\r\n        lastMagnetX = magnetX;\r\n\r\n        const epsilon = velocity * 0.5;\r\n        const R = parseFloat(resSlider.value);\r\n        const I = epsilon / R;\r\n\r\n        document.getElementById('rVal').innerText = R.toFixed(1) + \" Ω\";\r\n        gauge.style.width = Math.min(I * 20, 100) + \"%\";\r\n\r\n        // Vizato Spirën (Coil)\r\n        ctx.strokeStyle = \"#cbd5e1\";\r\n        ctx.lineWidth = 8;\r\n        for(let i=0; i<5; i++) {\r\n            ctx.beginPath();\r\n            ctx.ellipse(width/2, height/2, 50, 120, 0, 0, Math.PI * 2);\r\n            ctx.stroke();\r\n            \r\n            ctx.strokeStyle = \"#94a3b8\";\r\n            ctx.lineWidth = 2;\r\n            ctx.stroke();\r\n            ctx.strokeStyle = \"#cbd5e1\";\r\n            ctx.lineWidth = 8;\r\n        }\r\n\r\n        // Vizato Magnetin\r\n        const magWidth = 100;\r\n        const magHeight = 60;\r\n        const cornerRadius = 8;\r\n        \r\n        // North Pole\r\n        ctx.fillStyle = \"linear-gradient(135deg, #ef4444, #dc2626)\";\r\n        ctx.beginPath();\r\n        ctx.roundRect(magnetX - magWidth/2, height/2 - magHeight/2, magWidth/2, magHeight, {tl: cornerRadius, bl: cornerRadius});\r\n        ctx.fill();\r\n        ctx.fillStyle = \"#ef4444\";\r\n        ctx.fill();\r\n        \r\n        // South Pole\r\n        ctx.fillStyle = \"linear-gradient(135deg, #3b82f6, #2563eb)\";\r\n        ctx.beginPath();\r\n        ctx.roundRect(magnetX, height/2 - magHeight/2, magWidth/2, magHeight, {tr: cornerRadius, br: cornerRadius});\r\n        ctx.fill();\r\n        ctx.fillStyle = \"#3b82f6\";\r\n        ctx.fill();\r\n        \r\n        // Text\r\n        ctx.fillStyle = \"#ffffff\";\r\n        ctx.font = \"bold 24px Nunito\";\r\n        ctx.textAlign = \"center\";\r\n        ctx.textBaseline = \"middle\";\r\n        ctx.fillText(\"N\", magnetX - magWidth/4, height/2);\r\n        ctx.fillText(\"S\", magnetX + magWidth/4, height/2);\r\n\r\n        // Kontrollo shënjestrën e nivelit\r\n        const target = levels[currentLevel].target;\r\n        document.getElementById('targetVal').innerText = target.toFixed(2);\r\n        \r\n        if(Math.abs(I - target) < 0.2) {\r\n            ctx.fillStyle = \"#10b981\";\r\n            ctx.font = \"800 48px Orbitron\";\r\n            ctx.textAlign = \"center\";\r\n            ctx.fillText(\"STABILIZUAR!\", width/2, 100);\r\n            ctx.shadowColor = \"rgba(16, 185, 129, 0.4)\";\r\n            ctx.shadowBlur = 15;\r\n            ctx.fillText(\"STABILIZUAR!\", width/2, 100);\r\n            ctx.shadowBlur = 0;\r\n        }\r\n\r\n        requestAnimationFrame(draw);\r\n    }\r\n\r\n    draw();\r\n</script>\r\n</body>\r\n</html>"
  },
  {
    id: "flux-master",
    title: "Mjeshtri i Fluksit",
    category: "Fluksi",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Flux Master - Levels</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n            background: var(--bg);\r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text);\r\n            font-family: 'Inter', sans-serif;\r\n            display: flex;\r\n            height: 100vh;\r\n            overflow: hidden;\r\n        }\r\n\r\n        #ui {\r\n            width: 350px;\r\n            background: var(--surface);\r\n            border-right: 4px solid var(--border);\r\n            padding: 25px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 20px;\r\n            box-shadow: 8px 0px 0px var(--border);\r\n            z-index: 10;\r\n        }\r\n\r\n        h2 {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 3rem;\r\n            color: var(--accent);\r\n            text-shadow: 2px 2px 0px var(--border);\r\n            margin: 0;\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        .level-card {\r\n            background: var(--bg);\r\n            padding: 15px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        #lvlNum {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            color: var(--text);\r\n            font-weight: bold;\r\n        }\r\n\r\n        .goal-text { \r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem; \r\n            color: var(--accent2); \r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        .control-panel {\r\n            background: var(--bg);\r\n            padding: 15px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        .control-panel label {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            display: block;\r\n            margin-bottom: 8px;\r\n        }\r\n\r\n        input[type=range] { \r\n            width: 100%; \r\n            cursor: pointer; \r\n            -webkit-appearance: none;\r\n            height: 12px;\r\n            border: 2px solid var(--border);\r\n            background: #e2e8f0;\r\n            outline: none;\r\n        }\r\n        input[type=range]::-webkit-slider-thumb {\r\n            -webkit-appearance: none;\r\n            width: 24px;\r\n            height: 24px;\r\n            background: var(--accent);\r\n            border: 3px solid var(--border);\r\n            cursor: pointer;\r\n        }\r\n\r\n        #angleVal {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            color: var(--accent2);\r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        .flux-display {\r\n            padding: 15px;\r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            color: var(--text);\r\n            text-align: center;\r\n        }\r\n        #currentFlux {\r\n            color: var(--accent);\r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        /* FORMULA E SAKTË DHE E PASTER */\r\n        .formula-footer {\r\n            margin-top: auto;\r\n            padding: 20px;\r\n            background: var(--bg);\r\n            border: 4px solid var(--border);\r\n            text-align: center;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        .math-text {\r\n            font-size: 2rem;\r\n            color: var(--accent);\r\n            font-family: 'VT323', monospace;\r\n            margin: 10px 0;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        #viewport { flex-grow: 1; position: relative; }\r\n        canvas { width: 100%; height: 100%; }\r\n\r\n        .overlay {\r\n            position: absolute;\r\n            top: 50%; left: 50%;\r\n            transform: translate(-50%, -50%);\r\n            background: var(--green);\r\n            border: 4px solid var(--border);\r\n            padding: 30px;\r\n            text-align: center;\r\n            display: none;\r\n            border-radius: 0;\r\n            box-shadow: 8px 8px 0px var(--border);\r\n            color: var(--border);\r\n        }\r\n\r\n        .overlay h2 {\r\n            font-size: 3rem;\r\n            margin-top: 0;\r\n            text-shadow: 2px 2px 0px rgba(255,255,255,0.5);\r\n        }\r\n\r\n        .overlay p {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            margin-bottom: 20px;\r\n        }\r\n\r\n        .btn {\r\n            background: var(--surface);\r\n            color: var(--text);\r\n            border: 4px solid var(--border);\r\n            padding: 12px 24px;\r\n            font-weight: bold;\r\n            cursor: pointer;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            transition: transform 0.1s, box-shadow 0.1s;\r\n        }\r\n        .btn:active {\r\n            transform: translate(4px, 4px);\r\n            box-shadow: 0px 0px 0px var(--border);\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <div id=\"ui\">\r\n        <h2><i class=\"fas fa-satellite-dish\"></i> FLUX STATIONS</h2>\r\n        \r\n        <div class=\"level-card\">\r\n            <div id=\"lvlNum\">Niveli 1</div>\r\n            <div style=\"font-family: 'VT323', monospace; font-size: 1.2rem; color: var(--text); margin-top: 5px;\">OBJEKTIVI:</div>\r\n            <div id=\"targetFlux\" class=\"goal-text\">3.00 Wb</div>\r\n        </div>\r\n\r\n        <div class=\"control-panel\">\r\n            <label>KONTROLLI I KËNDIT (α)</label>\r\n            <input type=\"range\" id=\"angleSlider\" min=\"0\" max=\"90\" step=\"1\" value=\"45\">\r\n            <div id=\"angleVal\" style=\"text-align:center; margin-top:5px;\">45°</div>\r\n        </div>\r\n\r\n        <div class=\"flux-display\">\r\n            Φ Real: <span id=\"currentFlux\">0.00</span> Wb\r\n        </div>\r\n\r\n        <div class=\"formula-footer\">\r\n            <span style=\"font-family: 'VT323', monospace; font-size: 1.5rem; color: var(--text);\">Formula:</span>\r\n            <div class=\"math-text\">Φ = B · S · cos(α)</div>\r\n            <p style=\"font-family: 'VT323', monospace; font-size: 1.2rem; color: var(--text); margin-bottom: 0;\">Përshtat këndin për të kapur fluksin e duhur.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"viewport\">\r\n        <canvas id=\"mainCanvas\"></canvas>\r\n        <div id=\"winOverlay\" class=\"overlay\">\r\n            <h2>STACIONI U AKTIVIZUA!</h2>\r\n            <p>Fluksi magnetik është brenda normës.</p>\r\n            <button class=\"btn\" onclick=\"nextLevel()\">NIVELI TJETËR <i class=\"fas fa-arrow-right\"></i></button>\r\n        </div>\r\n    </div>\r\n\r\n<script>\r\n    const canvas = document.getElementById('mainCanvas');\r\n    const ctx = canvas.getContext('2d');\r\n    const slider = document.getElementById('angleSlider');\r\n    const winOverlay = document.getElementById('winOverlay');\r\n\r\n    let width, height;\r\n    let currentLevel = 0;\r\n    \r\n    // Parametrat e fushës\r\n    const B = 1.0; \r\n    const S = 4.0;\r\n\r\n    const levels = [\r\n        { target: 4.00, desc: \"Maksimizo kapjen (0°)\" },\r\n        { target: 2.83, desc: \"Kap gjysmën (45°)\" },\r\n        { target: 0.00, desc: \"Izolo plotësisht (90°)\" }\r\n    ];\r\n\r\n    function resize() {\r\n        width = canvas.width = canvas.offsetWidth;\r\n        height = canvas.height = canvas.offsetHeight;\r\n    }\r\n    window.addEventListener('resize', resize);\r\n    resize();\r\n\r\n    function nextLevel() {\r\n        currentLevel++;\r\n        if(currentLevel >= levels.length) {\r\n            alert(\"Urime! Je një Inxhinier i Fluksit!\");\r\n            currentLevel = 0;\r\n        }\r\n        document.getElementById('lvlNum').innerText = \"Niveli \" + (currentLevel + 1);\r\n        document.getElementById('targetFlux').innerText = levels[currentLevel].target.toFixed(2) + \" Wb\";\r\n        winOverlay.style.display = 'none';\r\n    }\r\n\r\n    function draw() {\r\n        ctx.clearRect(0, 0, width, height);\r\n\r\n        const alpha = parseInt(slider.value);\r\n        document.getElementById('angleVal').innerText = alpha + \"°\";\r\n        \r\n        const rad = alpha * Math.PI / 180;\r\n        const flux = B * S * Math.cos(rad);\r\n        document.getElementById('currentFlux').innerText = flux.toFixed(2);\r\n\r\n        // Vizato vijat e fushës B\r\n        ctx.strokeStyle = \"#a2d2ff\";\r\n        ctx.lineWidth = 4;\r\n        for(let i=0; i<height; i+=60) {\r\n            ctx.beginPath();\r\n            ctx.moveTo(0, i);\r\n            ctx.lineTo(width, i);\r\n            ctx.stroke();\r\n        }\r\n\r\n        // Vizato Spirën (Panelin)\r\n        ctx.save();\r\n        ctx.translate(width/2, height/2);\r\n        ctx.rotate(rad);\r\n        \r\n        ctx.fillStyle = \"#ffafcc\";\r\n        ctx.strokeStyle = \"#4a4e69\";\r\n        ctx.lineWidth = 6;\r\n        ctx.fillRect(-15, -120, 30, 240);\r\n        ctx.strokeRect(-15, -120, 30, 240);\r\n        \r\n        // Vektori Normal S\r\n        ctx.beginPath();\r\n        ctx.strokeStyle = \"#4a4e69\";\r\n        ctx.setLineDash([10, 10]);\r\n        ctx.lineWidth = 4;\r\n        ctx.moveTo(0, 0);\r\n        ctx.lineTo(150, 0);\r\n        ctx.stroke();\r\n        \r\n        // Arrow head for Normal vector\r\n        ctx.beginPath();\r\n        ctx.setLineDash([]);\r\n        ctx.moveTo(150, 0);\r\n        ctx.lineTo(130, -10);\r\n        ctx.lineTo(130, 10);\r\n        ctx.closePath();\r\n        ctx.fillStyle = \"#4a4e69\";\r\n        ctx.fill();\r\n        \r\n        ctx.font = \"bold 24px VT323\";\r\n        ctx.fillText(\"S\", 160, 8);\r\n        \r\n        ctx.restore();\r\n\r\n        // Kontrollo Fitoren\r\n        const diff = Math.abs(flux - levels[currentLevel].target);\r\n        if(diff < 0.05 && winOverlay.style.display !== 'block') {\r\n            winOverlay.style.display = 'block';\r\n        }\r\n\r\n        requestAnimationFrame(draw);\r\n    }\r\n\r\n    draw();\r\n</script>\r\n</body>\r\n</html>"
  },
  {
    id: "lorentz-force-lab",
    title: "Laboratori i Forcës së Lorencit",
    category: "Forca Lorenc",
    type: "digital",
    html: "<!DOCTYPE html>\r\n<html lang=\"sq\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Lorentz Force Lab</title>\r\n    <link href=\"https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\r\n    <style>\r\n        :root {\r\n            --bg: #f8fafc;\r\n            --surface: #ffffff;\r\n            --accent: #ffafcc;\r\n            --accent2: #a2d2ff;\r\n            --gold: #ffc8dd;\r\n            --text: #4a4e69;\r\n            --muted: #94a3b8;\r\n            --border: #4a4e69;\r\n            --green: #baffc9;\r\n            --red: #ffb3ba;\r\n        }\r\n\r\n        body {\r\n            margin: 0;\r\n            background: var(--bg);\r\n            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);\r\n            background-size: 20px 20px;\r\n            color: var(--text);\r\n            font-family: 'Inter', sans-serif;\r\n            display: flex;\r\n            height: 100vh;\r\n        }\r\n\r\n        #sidebar {\r\n            width: 320px;\r\n            background: var(--surface);\r\n            border-right: 4px solid var(--border);\r\n            padding: 25px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 20px;\r\n            box-shadow: 8px 0px 0px var(--border);\r\n            z-index: 10;\r\n        }\r\n\r\n        h2 {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 3.5rem;\r\n            color: var(--accent);\r\n            text-shadow: 2px 2px 0px var(--border);\r\n            margin: 0;\r\n            text-transform: uppercase;\r\n            text-align: center;\r\n        }\r\n\r\n        .level-display {\r\n            background: var(--bg);\r\n            padding: 15px;\r\n            text-align: center;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        .level-display div:first-child {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.2rem;\r\n            color: var(--text);\r\n            text-transform: uppercase;\r\n        }\r\n\r\n        #lvlName {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            color: var(--accent2);\r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        .control-group {\r\n            background: var(--bg);\r\n            padding: 15px;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        .label {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.5rem;\r\n            color: var(--text);\r\n            display: block;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        input[type=range] {\r\n            width: 100%;\r\n            cursor: pointer;\r\n            -webkit-appearance: none;\r\n            height: 12px;\r\n            border: 2px solid var(--border);\r\n            background: #e2e8f0;\r\n            outline: none;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        input[type=range]::-webkit-slider-thumb {\r\n            -webkit-appearance: none;\r\n            width: 24px;\r\n            height: 24px;\r\n            background: var(--accent);\r\n            border: 3px solid var(--border);\r\n            cursor: pointer;\r\n        }\r\n\r\n        #bVal {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            color: var(--accent2);\r\n            font-weight: bold;\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        /* FORMULA E SAKTË NË FUND */\r\n        .formula-footer {\r\n            margin-top: auto;\r\n            background: var(--surface);\r\n            padding: 15px;\r\n            text-align: center;\r\n            border: 4px solid var(--border);\r\n            box-shadow: 4px 4px 0px var(--border);\r\n        }\r\n\r\n        .formula-footer div:first-child {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.2rem;\r\n            color: var(--text);\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        .formula-text {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 2rem;\r\n            color: var(--accent);\r\n            text-shadow: 1px 1px 0px var(--border);\r\n        }\r\n\r\n        .formula-footer p {\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.2rem;\r\n            color: var(--text);\r\n            margin-top: 10px;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        #viewport { flex-grow: 1; position: relative; }\r\n        canvas { width: 100%; height: 100%; background: var(--bg); }\r\n\r\n        .btn {\r\n            background: var(--green);\r\n            color: var(--border);\r\n            border: 4px solid var(--border);\r\n            padding: 15px;\r\n            font-family: 'VT323', monospace;\r\n            font-size: 1.8rem;\r\n            font-weight: bold;\r\n            cursor: pointer;\r\n            box-shadow: 4px 4px 0px var(--border);\r\n            transition: transform 0.1s, box-shadow 0.1s;\r\n        }\r\n        .btn:active {\r\n            transform: translate(4px, 4px);\r\n            box-shadow: 0px 0px 0px var(--border);\r\n        }\r\n        \r\n        .btn-reset {\r\n            background: var(--red);\r\n        }\r\n    </style>\r\n\n    <!-- DIZAJNI SUPERR INJECTION -->\n    <link href=\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap\" rel=\"stylesheet\">\n    <script src=\"https://cdn.tailwindcss.com\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <style>\n      :root { --primary-glow: #ffafcc; }\n      body { font-family: 'Nunito', sans-serif !important; }\n      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }\n      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }\n      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }\n    </style>\n\n</head>\r\n<body>\r\n\r\n    <div id=\"sidebar\">\r\n        <h2>LORENTZ PRO</h2>\r\n        \r\n        <div class=\"level-display\">\r\n            <div>SITUATA</div>\r\n            <div id=\"lvlName\">Niveli 1: Devijimi</div>\r\n        </div>\r\n\r\n        <div class=\"control-group\">\r\n            <label class=\"label\">Fusha Magnetike (B)</label>\r\n            <input type=\"range\" id=\"bRange\" min=\"-5\" max=\"5\" step=\"0.1\" value=\"0\">\r\n            <div id=\"bVal\" style=\"text-align: center;\">0.00 T</div>\r\n        </div>\r\n\r\n        <button class=\"btn\" onclick=\"fireParticle()\"><i class=\"fas fa-rocket\"></i> LËSHO GRIMCËN</button>\r\n        <button class=\"btn btn-reset\" onclick=\"resetLevel()\"><i class=\"fas fa-undo\"></i> RESET</button>\r\n\r\n        <div class=\"formula-footer\">\r\n            <div>FORCA E LORENCIT:</div>\r\n            <div class=\"formula-text\">F = q · v · B · sin(α)</div>\r\n            <p>Gjej fushën B që grimca të godasë cakun!</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"viewport\">\r\n        <canvas id=\"canvas\"></canvas>\r\n    </div>\r\n\r\n<script>\r\n    const canvas = document.getElementById('canvas');\r\n    const ctx = canvas.getContext('2d');\r\n    const bRange = document.getElementById('bRange');\r\n    \r\n    let width, height;\r\n    let particle = { x: 50, y: 0, vx: 5, vy: 0, active: false, path: [] };\r\n    let target = { x: 0, y: 0, r: 25 };\r\n    let currentLevel = 0;\r\n    \r\n    const levels = [\r\n        { y: 0.5, ty: 0.2, v: 6 },\r\n        { y: 0.8, ty: 0.3, v: 8 },\r\n        { y: 0.2, ty: 0.8, v: 10 }\r\n    ];\r\n\r\n    function resize() {\r\n        width = canvas.width = canvas.offsetWidth;\r\n        height = canvas.height = canvas.offsetHeight;\r\n        loadLevel();\r\n    }\r\n    window.addEventListener('resize', resize);\r\n\r\n    function loadLevel() {\r\n        const l = levels[currentLevel];\r\n        particle.y = l.y * height;\r\n        particle.vx = l.v;\r\n        target.x = width - 100;\r\n        target.y = l.ty * height;\r\n        resetParticle();\r\n    }\r\n\r\n    function resetParticle() {\r\n        particle.x = 50;\r\n        particle.y = levels[currentLevel].y * height;\r\n        particle.vy = 0;\r\n        particle.active = false;\r\n        particle.path = [];\r\n    }\r\n\r\n    function fireParticle() {\r\n        resetParticle();\r\n        particle.active = true;\r\n    }\r\n\r\n    function resetLevel() { resetParticle(); }\r\n\r\n    function draw() {\r\n        ctx.clearRect(0, 0, width, height);\r\n\r\n        // Vizato targetin\r\n        ctx.beginPath();\r\n        ctx.arc(target.x, target.y, target.r, 0, Math.PI*2);\r\n        ctx.strokeStyle = \"#4a4e69\";\r\n        ctx.lineWidth = 4;\r\n        ctx.setLineDash([5, 5]);\r\n        ctx.stroke();\r\n        ctx.fillStyle = \"#ffafcc\";\r\n        ctx.fill();\r\n        ctx.setLineDash([]);\r\n\r\n        // Vizato B field (Crosses or Dots)\r\n        const B = parseFloat(bRange.value);\r\n        document.getElementById('bVal').innerText = B.toFixed(2) + \" T\";\r\n        \r\n        ctx.fillStyle = \"#94a3b8\";\r\n        ctx.font = \"20px VT323\";\r\n        if(B !== 0) {\r\n            for(let i=0; i<width; i+=100) {\r\n                for(let j=0; j<height; j+=100) {\r\n                    ctx.fillText(B > 0 ? \"×\" : \"•\", i, j);\r\n                }\r\n            }\r\n        }\r\n\r\n        if(particle.active) {\r\n            // Logjika e Fizikës: F = qvB (sin alfa këtu është 1 sepse B është pingul me ekranin)\r\n            // r = mv/qB -> për thjeshtësi, ndryshojmë drejtimin e vy\r\n            const force = particle.vx * B * 0.05;\r\n            particle.vy += force;\r\n            particle.x += particle.vx;\r\n            particle.y += particle.vy;\r\n            particle.path.push({x: particle.x, y: particle.y});\r\n\r\n            // Vizato rrugëtimin\r\n            ctx.beginPath();\r\n            ctx.strokeStyle = \"#a2d2ff\";\r\n            ctx.lineWidth = 4;\r\n            particle.path.forEach((p, i) => {\r\n                if(i===0) ctx.moveTo(p.x, p.y);\r\n                else ctx.lineTo(p.x, p.y);\r\n            });\r\n            ctx.stroke();\r\n\r\n            // Kontrolli i goditjes\r\n            let dist = Math.hypot(particle.x - target.x, particle.y - target.y);\r\n            if(dist < target.r) {\r\n                alert(\"GODITJE E SAKTË!\");\r\n                currentLevel = (currentLevel + 1) % levels.length;\r\n                loadLevel();\r\n            }\r\n            \r\n            if(particle.x > width || particle.y < 0 || particle.y > height) {\r\n                particle.active = false;\r\n            }\r\n        }\r\n\r\n        // Vizato grimcën\r\n        ctx.beginPath();\r\n        ctx.arc(particle.x, particle.y, 10, 0, Math.PI*2);\r\n        ctx.fillStyle = \"#ffc8dd\";\r\n        ctx.fill();\r\n        ctx.strokeStyle = \"#4a4e69\";\r\n        ctx.lineWidth = 3;\r\n        ctx.stroke();\r\n\r\n        requestAnimationFrame(draw);\r\n    }\r\n\r\n    resize();\r\n    draw();\r\n</script>\r\n</body>\r\n</html>"
  },
  {
    id: "amperes-force-defender",
    title: "Mbrojtësi i Forcës së Amperit",
    category: "Forca Amper",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Mbrojtësi i Forcës së Amperit</title>\n    <link href=\"https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap\" rel=\"stylesheet\">\n    <style>\n        body { margin:0; padding:0; background:#000; overflow:hidden; font-family:'Orbitron', sans-serif; color:white; user-select:none; }\n        #canvas { display:block; background: radial-gradient(circle at 50% 100%, #172554, #020617); }\n        .ui { position:absolute; top:20px; left:20px; right:20px; display:flex; justify-content:space-between; pointer-events:none; }\n        .score { font-size:24px; color:#facc15; text-shadow: 0 0 10px rgba(250, 204, 21, 0.5); }\n        .lives { font-size:24px; color:#ef4444; }\n        .controls { position:absolute; bottom:30px; left:50%; transform:translateX(-50%); display:flex; gap:20px; background:rgba(15,23,42,0.8); padding:15px; border-radius:12px; border:1px solid #334155; backdrop-filter:blur(5px); }\n        .control-group { display:flex; flex-direction:column; align-items:center; gap:5px; }\n        .control-group label { font-size:12px; color:#94a3b8; letter-spacing:1px; }\n        input[type=range] { width: 150px; accent-color: #38bdf8; cursor:pointer; }\n        \n        #game-over { position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); text-align:center; background:rgba(0,0,0,0.9); padding:40px; border-radius:16px; border:2px solid #ef4444; display:none; }\n        h1 { margin:0 0 20px 0; font-size:36px; color:#ef4444; }\n        button { background:#3b82f6; color:white; border:none; padding:12px 24px; font-size:18px; font-family:'Orbitron'; border-radius:8px; cursor:pointer; font-weight:bold; }\n        button:hover { background:#2563eb; }\n        \n        .formula { position:absolute; top:60px; left:50%; transform:translateX(-50%); font-size:18px; color:#cbd5e1; opacity:0.8; pointer-events:none; }\n    </style>\n</head>\n<body>\n\n<canvas id=\"canvas\"></canvas>\n\n<div class=\"ui\">\n    <div class=\"score\">Pikët: <span id=\"scoreVal\">0</span></div>\n    <div class=\"lives\">Jetë: <span id=\"livesVal\">3</span></div>\n</div>\n\n<div class=\"formula\">F = I &times; L &times; B</div>\n\n<div class=\"controls\">\n    <div class=\"control-group\">\n        <label>Rryma (I) <span id=\"i-val\">5</span> A</label>\n        <input type=\"range\" id=\"inputI\" min=\"1\" max=\"10\" value=\"5\">\n    </div>\n    <div class=\"control-group\">\n        <label>Fusha Mag. (B) <span id=\"b-val\">5</span> T</label>\n        <input type=\"range\" id=\"inputB\" min=\"1\" max=\"10\" value=\"5\">\n    </div>\n</div>\n\n<div id=\"game-over\">\n    <h1>FUNDI I LOJËS</h1>\n    <p style=\"font-size:20px; margin-bottom:30px;\">Puzmat kaluan mbrojtjen tuaj.</p>\n    <button onclick=\"location.reload()\">Ristarto Mbrojtjen</button>\n</div>\n\n<script>\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n    \n    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }\n    window.addEventListener('resize', resize);\n    resize();\n\n    let score = 0;\n    let lives = 3;\n    let isGameOver = false;\n    \n    const inputI = document.getElementById('inputI');\n    const inputB = document.getElementById('inputB');\n    const displayI = document.getElementById('i-val');\n    const displayB = document.getElementById('b-val');\n    \n    inputI.addEventListener('input', () => displayI.innerText = inputI.value);\n    inputB.addEventListener('input', () => displayB.innerText = inputB.value);\n\n    const defender = {\n        width: 100, \n        height: 20,\n        y: canvas.height - 120\n    };\n\n    let enemies = [];\n    let particles = [];\n\n    function spawnEnemy() {\n        if(isGameOver) return;\n        const w = 30 + Math.random()*20;\n        enemies.push({\n            x: Math.random() * (canvas.width - 50) + 25,\n            y: -50,\n            w: w, h: w,\n            speed: 1 + Math.random()*2 + (score/500),\n            hp: 20 + Math.random()*40 + (score/10) \n        });\n        setTimeout(spawnEnemy, Math.random() * 2000 + 1000 - Math.min(score, 800));\n    }\n\n    function createExplosion(x, y) {\n        for(let i=0; i<15; i++) {\n            particles.push({\n                x, y,\n                vx: (Math.random()-0.5)*10,\n                vy: (Math.random()-0.5)*10,\n                life: 1,\n                color: ['#38bdf8', '#facc15', '#f87171'][Math.floor(Math.random()*3)]\n            });\n        }\n    }\n\n    function update() {\n        if(isGameOver) return;\n        \n        ctx.clearRect(0,0,canvas.width, canvas.height);\n        \n        const I = parseInt(inputI.value);\n        const B = parseInt(inputB.value);\n        const L = defender.width / 10;\n        const force = I * L * B; \n\n        defender.y = canvas.height - 120;\n        \n        const fx = canvas.width/2;\n        const fh = Math.min(canvas.height, force * 4); \n        \n        ctx.strokeStyle = 'rgba(56, 189, 248, ' + (B/20) + ')';\n        ctx.lineWidth = 2;\n        for(let i=0; i<canvas.width; i+=40) {\n            ctx.beginPath();\n            ctx.moveTo(i, 0);\n            ctx.lineTo(i, canvas.height);\n            ctx.stroke();\n        }\n\n        ctx.fillStyle = '#facc15'; \n        ctx.fillRect(fx - defender.width/2, defender.y, defender.width, defender.height);\n        \n        ctx.fillStyle = 'rgba(16, 185, 129, ' + (force/100) + ')';\n        ctx.beginPath();\n        ctx.arc(fx, defender.y, force*1.5 + Math.sin(Date.now()/100)*10, Math.PI, 2*Math.PI);\n        ctx.fill();\n\n        for(let i=enemies.length-1; i>=0; i--) {\n            let e = enemies[i];\n            e.y += e.speed;\n            \n            ctx.fillStyle = '#ef4444';\n            ctx.shadowBlur = 10;\n            ctx.shadowColor = 'red';\n            ctx.fillRect(e.x - e.w/2, e.y - e.h/2, e.w, e.h);\n            ctx.shadowBlur = 0;\n            \n            ctx.fillStyle = 'white';\n            ctx.font = '12px Orbitron';\n            ctx.textAlign = 'center';\n            ctx.fillText(Math.floor(e.hp), e.x, e.y - e.h/2 - 5);\n\n            const dist = Math.hypot(e.x - fx, e.y - defender.y);\n            if(dist < force*1.5 + e.w) {\n                e.hp -= (force/20);\n                e.y -= (force/50); \n                \n                if(e.hp <= 0) {\n                    createExplosion(e.x, e.y);\n                    enemies.splice(i, 1);\n                    score += 10;\n                    document.getElementById('scoreVal').innerText = score;\n                    continue;\n                }\n            }\n\n            if(e.y > canvas.height) {\n                enemies.splice(i, 1);\n                lives--;\n                document.getElementById('livesVal').innerText = lives;\n                if(lives <= 0) {\n                    isGameOver = true;\n                    document.getElementById('game-over').style.display = 'block';\n                }\n            }\n        }\n\n        for(let i=particles.length-1; i>=0; i--) {\n            let p = particles[i];\n            p.x += p.vx; p.y += p.vy;\n            p.life -= 0.05;\n            ctx.fillStyle = p.color;\n            ctx.globalAlpha = Math.max(0, p.life);\n            ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI*2); ctx.fill();\n            ctx.globalAlpha = 1;\n            if(p.life <= 0) particles.splice(i, 1);\n        }\n\n        requestAnimationFrame(update);\n    }\n\n    spawnEnemy();\n    update();\n</script>\n</body>\n</html>\n"
  },
  {
    id: "magnetic-induction-master",
    title: "Induksioni Magnetik",
    category: "Magnetizmi",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Magnetic Induction Master</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --bg: #f8fafc;
            --surface: #ffffff;
            --accent: #ffafcc;
            --accent2: #a2d2ff;
            --gold: #ffc8dd;
            --text: #4a4e69;
            --muted: #94a3b8;
            --border: #4a4e69;
            --green: #baffc9;
            --red: #ffb3ba;
        }

        body {
            margin: 0;
            background: var(--bg);
            background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
            background-size: 20px 20px;
            color: var(--text);
            font-family: 'Inter', sans-serif;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        #control-panel {
            width: 350px;
            background: var(--surface);
            border-right: 4px solid var(--border);
            padding: 30px;
            display: flex;
            flex-direction: column;
            box-shadow: 8px 0px 0px var(--border);
            z-index: 10;
        }

        .header-box {
            border-bottom: 4px dashed var(--border);
            padding-bottom: 20px;
            margin-bottom: 20px;
        }

        h1 { 
            font-family: 'VT323', monospace; 
            font-size: 2.5rem; 
            color: var(--accent); 
            text-shadow: 2px 2px 0px var(--border); 
            margin: 0; 
            letter-spacing: 2px; 
            text-transform: uppercase; 
        }

        .stat-group {
            background: var(--bg);
            padding: 15px;
            margin-bottom: 15px;
            border: 4px solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
        }

        .label { 
            font-family: 'VT323', monospace;
            font-size: 1.5rem; 
            color: var(--text); 
            text-transform: uppercase; 
        }
        .value { 
            font-family: 'VT323', monospace;
            font-size: 2rem; 
            color: var(--accent2); 
            font-weight: bold;
            text-shadow: 1px 1px 0px var(--border);
        }

        .btn {
            background: var(--surface);
            color: var(--text);
            border: 4px solid var(--border);
            padding: 12px;
            cursor: pointer;
            font-family: 'VT323', monospace;
            font-size: 1.5rem;
            box-shadow: 4px 4px 0px var(--border);
            transition: transform 0.1s, box-shadow 0.1s;
            margin-bottom: 10px;
        }

        .btn:active { 
            transform: translate(4px, 4px);
            box-shadow: 0px 0px 0px var(--border);
        }
        
        .active { 
            background: var(--accent2); 
            color: var(--border);
        }
        #northBtn.active { background: var(--accent); }

        .formula-container {
            margin-top: auto;
            padding: 20px;
            background: var(--bg);
            border: 4px solid var(--border);
            text-align: center;
            box-shadow: 4px 4px 0px var(--border);
        }

        .math-fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-family: 'VT323', monospace;
            font-size: 2rem;
            color: var(--accent);
            text-shadow: 1px 1px 0px var(--border);
        }

        .frac-top { border-bottom: 2px solid var(--border); padding: 0 5px; }
        .frac-bottom { padding: 0 5px; }

        #game-viewport { flex-grow: 1; position: relative; }
        canvas { width: 100%; height: 100%; cursor: crosshair; }

        .notification {
            position: absolute;
            top: 20px; right: 20px;
            background: var(--green);
            color: var(--border);
            padding: 15px 30px;
            border: 4px solid var(--border);
            box-shadow: 4px 4px 0px var(--border);
            font-family: 'VT323', monospace;
            font-size: 2rem;
            font-weight: bold;
            display: none;
        }
    </style>
</head>
<body>
    <div id="control-panel">
        <div class="header-box">
            <h1><i class="fas fa-magnet"></i> MAG-INDUCTION</h1>
        </div>
        <div class="stat-group">
            <div class="label">Induksioni (B)</div>
            <div id="b-val" class="value">0.00 T</div>
        </div>
        <div class="stat-group">
            <div class="label">Forca (Fmax)</div>
            <div id="f-val" class="value">0.00 N</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 5px;">
            <button id="northBtn" class="btn active" onclick="setPole(1)"><i class="fas fa-arrow-up"></i> Shto Polin Veri (N)</button>
            <button id="southBtn" class="btn" onclick="setPole(-1)"><i class="fas fa-arrow-down"></i> Shto Polin Jug (S)</button>
            <button class="btn" onclick="resetField()" style="margin-top: 20px; background: var(--gold);"><i class="fas fa-undo"></i> Reset Fushën</button>
        </div>
        <div class="formula-container">
            <p style="font-family: 'VT323', monospace; font-size: 1.5rem; color: var(--text); margin-top: 0;">Relacioni:</p>
            <div class="math-fraction">
                B = 
                <div style="display: inline-block; vertical-align: middle;">
                    <div class="frac-top">F<sub>max</sub></div>
                    <div class="frac-bottom">I · L</div>
                </div>
            </div>
            <p style="font-family: 'VT323', monospace; font-size: 1.2rem; color: var(--text); margin-bottom: 0; margin-top: 10px;">Vendos magnetët për të devijuar rrymën.</p>
        </div>
    </div>
    <div id="game-viewport">
        <div id="success-msg" class="notification"><i class="fas fa-check-circle"></i> OBJEKTIVI U ARRIT!</div>
        <canvas id="canvas"></canvas>
    </div>
<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let magnets = [];
    let poleType = 1;
    let currentI = 2.5;
    let lengthL = 0.5;
    
    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    function setPole(type) {
        poleType = type;
        document.getElementById('northBtn').classList.toggle('active', type === 1);
        document.getElementById('southBtn').classList.toggle('active', type === -1);
    }
    function resetField() { magnets = []; }
    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        magnets.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, type: poleType });
    });
    function calculateB(px, py) {
        let totalB = 0;
        magnets.forEach(m => {
            let d = Math.hypot(px - m.x, py - m.y) + 50;
            totalB += (m.type * 5000) / (d * d);
        });
        return totalB;
    }
    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "#4a4e69";
        ctx.lineWidth = 24;
        ctx.beginPath();
        ctx.moveTo(width/2, 0);
        ctx.lineTo(width/2, height);
        ctx.stroke();
        magnets.forEach(m => {
            ctx.fillStyle = m.type === 1 ? "#ffafcc" : "#a2d2ff";
            ctx.beginPath();
            ctx.arc(m.x, m.y, 25, 0, Math.PI*2);
            ctx.fill();
            ctx.strokeStyle = "#4a4e69";
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.fillStyle = "#4a4e69";
            ctx.font = "bold 20px Inter";
            ctx.textAlign = "center";
            ctx.fillText(m.type === 1 ? "N" : "S", m.x, m.y + 7);
        });
        let b = calculateB(width/2, height/2);
        document.getElementById('b-val').innerText = b.toFixed(2) + " T";
        let f = currentI * lengthL * b;
        document.getElementById('f-val').innerText = f.toFixed(2) + " N";
        requestAnimationFrame(draw);
    }
    draw();
</script>
</body>
</html>`
  },
  {
    id: "ohms-law-challenge",
    title: "Sfida e Ligjit të Ohmit",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sfida e Ligjit të Ohmit - Pro</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #0f172a;
            --grass: #34d399;
            --path: #fcd34d;
            --wall: #475569;
            --player: #3b82f6;
            --goal: #f59e0b;
            --text-dark: #1e293b;
            --text-light: #f8fafc;
        }
        body { margin: 0; background: var(--bg-color); height: 100vh; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; overflow: hidden; color: var(--text-light); }
        
        #game-wrapper {
            position: relative;
            width: 100%;
            max-width: 800px;
            aspect-ratio: 16/9;
            background: #1e293b;
            border-radius: 12px;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5), 0 8px 10px -6px rgba(0,0,0,0.5);
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        #header {
            padding: 15px 20px;
            background: rgba(0,0,0,0.3);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid rgba(255,255,255,0.05);
        }

        .title-text { font-family: 'Press Start 2P', monospace; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #60a5fa; }
        .level-text { font-weight: 800; font-size: 16px; color: #fbbf24; }

        #canvas-container {
            flex: 1;
            position: relative;
            background: #064e3b;
            background-image: 
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),\
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            background-position: center;
        }

        .player {
            position: absolute;
            width: 32px;
            height: 32px;
            background: var(--player);
            border: 3px solid #fff;
            border-radius: 8px;
            transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
            z-index: 10;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        
        .player::after {
            content: '';
            position: absolute;
            top: 6px; left: 6px; width: 6px; height: 6px;
            background: white; border-radius: 50%;
            box-shadow: 10px 0 0 white;
        }

        .obstacle {
            position: absolute;
            background: var(--wall);
            border: 2px solid #334155;
            border-radius: 6px;
            box-shadow: inset 0 2px 0 rgba(255,255,255,0.1), 0 4px 6px rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #94a3b8;
            font-size: 20px;
            font-weight: 800;
            z-index: 5;
        }
        
        .obstacle.door { background: #b91c1c; border-color: #7f1d1d; color: #fecaca; }

        .goal {
            position: absolute;
            width: 48px;
            height: 48px;
            background: var(--goal);
            border-radius: 50%;
            border: 4px solid #fff;
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
            display: flex; align-items: center; justify-content: center;
            animation: pulse 1.5s infinite;
            z-index: 4;
        }
        
        .goal::after {
            content: '★';
            font-size: 24px;
            color: white;
        }

        @keyframes pulse { 0% { transform: scale(1); box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); } 50% { transform: scale(1.1); box-shadow: 0 0 30px rgba(245, 158, 11, 0.8); } 100% { transform: scale(1); box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); } }

        #dialog-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(4px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 100;
        }

        .dialog-box {
            background: white;
            padding: 30px;
            border-radius: 16px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
            transform: scale(0.9);
            opacity: 0;
            transition: all 0.3s ease;
        }

        .dialog-box.active { transform: scale(1); opacity: 1; }

        .dialog-q { color: var(--text-dark); font-size: 20px; font-weight: 600; margin-bottom: 24px; line-height: 1.4; }

        .options-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .opt-btn {
            background: #f1f5f9;
            border: 2px solid #cbd5e1;
            color: #334155;
            font-size: 16px;
            font-weight: 700;
            padding: 12px 16px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
        }
        .opt-btn:hover { background: #e2e8f0; border-color: #94a3b8; transform: translateY(-2px); }
        .opt-btn.correct { background: #10b981; color: white; border-color: #059669; }
        .opt-btn.wrong { background: #ef4444; color: white; border-color: #b91c1c; animation: shake 0.4s; }

        @keyframes shake { 0%, 100% {transform: translateX(0)} 25% {transform: translateX(-5px)} 75% {transform: translateX(5px)} }

        #controls {
            position: absolute;
            bottom: 20px; right: 20px;
            display: grid;
            grid-template-columns: 50px 50px 50px;
            gap: 8px;
            z-index: 50;
        }

        .ctrl-btn {
            width: 50px; height: 50px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            color: white; font-size: 20px; font-weight: bold;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer; backdrop-filter: blur(4px);
            transition: background 0.2s;
        }
        .ctrl-btn:active { background: rgba(255,255,255,0.3); transform: scale(0.9); }
        .up { grid-column: 2; grid-row: 1; }
        .left { grid-column: 1; grid-row: 2; }
        .down { grid-column: 2; grid-row: 2; }
        .right { grid-column: 3; grid-row: 2; }

        #toast {
            position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
            background: #10b981; color: white; padding: 10px 20px; border-radius: 30px;\
            font-weight: 600; font-size: 14px; opacity: 0; pointer-events: none; transition: opacity 0.3s;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 200;
        }
        
        .victory-screen {
            display: none; align-items: center; justify-content: center; flex-direction: column;
            position: absolute; inset: 0; background: rgba(15, 23, 42, 0.95); z-index: 300;
        }
        .victory-title { font-family: 'Press Start 2P', monospace; color: #fcd34d; font-size: 28px; margin-bottom: 20px; text-align: center; line-height: 1.5; }
        .restart-btn { background: #3b82f6; color: white; padding: 15px 30px; font-size: 18px; font-weight: 800; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s; }
        .restart-btn:hover { background: #2563eb; transform: scale(1.05); }

        @media (max-width: 600px) {\
            #game-wrapper { height: 100vh; border-radius: 0; }\
        }
    </style>
</head>
<body>

<div id="game-wrapper">
    <div id="header">
        <div class="title-text">Ligji Ohm</div>
        <div class="level-text">Niveli <span id="lblLevel">1</span></div>
    </div>
    
    <div id="canvas-container">
        <div id="player" class="player" style="left: 40px; top: 40px;"></div>
        <div id="entities-layer"></div>
    </div>

    <div id="controls">
        <div class="ctrl-btn up" onclick="btnMove(0, -1)">↑</div>
        <div class="ctrl-btn left" onclick="btnMove(-1, 0)">←</div>
        <div class="ctrl-btn down" onclick="btnMove(0, 1)">↓</div>
        <div class="ctrl-btn right" onclick="btnMove(1, 0)">→</div>
    </div>

    <div id="dialog-overlay">
        <div class="dialog-box" id="dialog-box">
            <div class="dialog-q" id="question-text">Question?</div>
            <div class="options-grid" id="options-container"></div>
        </div>
    </div>

    <div id="toast">✅ E saktë! Udha u hap.</div>
    
    <div class="victory-screen" id="victory-screen">
        <div class="victory-title">MJESHTËR !<br>LIGJI I OHM-IT</div>
        <button class="restart-btn" onclick="startLevel(0)">Luaj Përsëri</button>
    </div>
</div>

<script>
    const P_SIZE = 40;
    const playerEl = document.getElementById('player');
    const entities = document.getElementById('entities-layer');
    const dialogOver = document.getElementById('dialog-overlay');
    const dialogBox = document.getElementById('dialog-box');
    const toast = document.getElementById('toast');
    let px = 40, py = 40;
    let currLevel = 0;
    let dialogActive = false;
    let activeDoor = null;

    const levels = [
        {
            start: {x: 40, y: 40},
            goal: {x: 640, y: 320},
            walls: [
                {x: 200, y: 0, w: 40, h: 200},
                {x: 200, y: 280, w: 40, h: 200}
            ],
            doors: [
                {id: 1, x: 200, y: 200, w: 40, h: 80, q: "R = 10 Ω, V = 50 V. Gjej rrymën I.", opts: ["5 A", "500 A", "0.2 A", "25 A"], ans: 0}
            ]
        },
        {
            start: {x: 40, y: 200},
            goal: {x: 680, y: 200},
            walls: [
                {x: 240, y: 0, w: 40, h: 160},
                {x: 240, y: 280, w: 40, h: 200},
                {x: 480, y: 120, w: 40, h: 360}
            ],
            doors: [
                {id: 2, x: 240, y: 160, w: 40, h: 120, q: "I = 2 A, R = 15 Ω. Gjej V.", opts: ["30 V", "7.5 V", "17 V", "20 V"], ans: 0},
                {id: 3, x: 480, y: 0, w: 40, h: 120, q: "V = 120 V, I = 10 A. Gjej R.", opts: ["1200 Ω", "12 Ω", "100 Ω", "130 Ω"], ans: 1}
            ]
        },
        {
            start: {x: 60, y: 100},
            goal: {x: 640, y: 320},
            walls: [
                {x: 0, y: 180, w: 200, h: 40},
                {x: 200, y: 180, w: 40, h: 300},
                {x: 440, y: 0, w: 40, h: 220}
            ],
            doors: [
                {id: 4, x: 200, y: 100, w: 40, h: 80, q: "Ekuacioni thelbësor?", opts: ["I = V / R", "I = V * R", "V = I / R", "R = V * I"], ans: 0},
                {id: 5, x: 440, y: 220, w: 40, h: 80, q: "V = 24 V, R = 8 Ω. Sa është I?", opts: ["16 A", "32 A", "3 A", "192 A"], ans: 2}
            ]
        }
    ];

    let cw = 800, ch = 450;
    function resize() {
        if(document.getElementById('canvas-container')){
            cw = document.getElementById('canvas-container').clientWidth;
            ch = document.getElementById('canvas-container').clientHeight;
        }
    }
    window.addEventListener('resize', resize);
    
    function startLevel(l) {
        document.getElementById('victory-screen').style.display = 'none';
        currLevel = l;
        if(l >= levels.length) {
            document.getElementById('victory-screen').style.display = 'flex';
            return;
        }
        document.getElementById('lblLevel').innerText = l + 1;
        const lv = levels[l];
        px = lv.start.x; py = lv.start.y;
        playerEl.style.left = px + 'px'; playerEl.style.top = py + 'px';
        
        entities.innerHTML = '';
        
        lv.walls.forEach(w => {
            let n = document.createElement('div');
            n.className = 'obstacle';
            n.style.left = w.x+'px'; n.style.top = w.y+'px';
            n.style.width = w.w+'px'; n.style.height = w.h+'px';
            entities.appendChild(n);
        });

        lv.doors.forEach(d => {
            if(!d.cleared) {
                let n = document.createElement('div');
                n.className = 'obstacle door';
                n.id = 'door-'+d.id;
                n.style.left = d.x+'px'; n.style.top = d.y+'px';
                n.style.width = d.w+'px'; n.style.height = d.h+'px';
                n.innerHTML = '<i class="fas fa-lock"></i>';
                entities.appendChild(n);
            }
        });

        let g = document.createElement('div');
        g.className = 'goal';
        g.style.left = lv.goal.x+'px'; g.style.top = lv.goal.y+'px';
        entities.appendChild(g);
        resize();
    }

    function checkRectCollide(x1,y1,w1,h1, x2,y2,w2,h2) {
        return x1 < x2+w2 && x1+w1 > x2 && y1 < y2+h2 && y1+h1 > y2;
    }

    function canMove(nx, ny) {
        if(nx < 0 || ny < 0 || nx+P_SIZE > Math.max(cw, 800) || ny+P_SIZE > Math.max(ch, 450)) return false;
        const lv = levels[currLevel];
        
        if (checkRectCollide(nx,ny,P_SIZE,P_SIZE, lv.goal.x, lv.goal.y, 48, 48)) {
            setTimeout(() => startLevel(currLevel + 1), 200);
            return true;
        }

        for(let w of lv.walls) {
            if(checkRectCollide(nx,ny,P_SIZE,P_SIZE, w.x, w.y, w.w, w.h)) return false;
        }
        for(let d of lv.doors) {
            if(!d.cleared && checkRectCollide(nx,ny,P_SIZE,P_SIZE, d.x, d.y, d.w, d.h)) {
                openDialog(d);
                return false;
            }
        }
        return true;
    }

    function doMove(dx, dy) {
        if(dialogActive) return;
        const speed = 20;
        let nx = px + dx*speed, ny = py + dy*speed;
        if(canMove(nx, ny)) {
            px = nx; py = ny;
            playerEl.style.left = px + 'px'; playerEl.style.top = py + 'px';
        }
    }

    function openDialog(door) {
        dialogActive = true;
        activeDoor = door;
        document.getElementById('question-text').innerText = door.q;
        let c = document.getElementById('options-container');
        c.innerHTML = '';
        door.opts.forEach((o, i) => {
            let b = document.createElement('button');
            b.className = 'opt-btn';
            b.innerText = o;
            b.onclick = () => answer(i, b);
            c.appendChild(b);
        });
        dialogOver.style.display = 'flex';
        setTimeout(() => dialogBox.classList.add('active'), 10);
    }

    function answer(idx, btn) {
        if(idx === activeDoor.ans) {
            btn.classList.add('correct');
            activeDoor.cleared = true;
            document.getElementById('door-'+activeDoor.id).remove();
            showToast("E saktë! Rruga u hap.");
            closeDialog();
        } else {
            btn.classList.add('wrong');
            setTimeout(() => btn.classList.remove('wrong'), 400);
        }
    }

    function closeDialog() {
        dialogBox.classList.remove('active');
        setTimeout(() => {
            dialogOver.style.display = 'none';
            dialogActive = false;
        }, 300);
    }

    function showToast(msg) {
        toast.innerText = msg;
        toast.style.opacity = 1;
        setTimeout(() => toast.style.opacity = 0, 2000);
    }

    window.btnMove = function(dx, dy) { doMove(dx, dy); };

    window.addEventListener('keydown', e => {
        if(e.key==='w' || e.key==='ArrowUp') doMove(0,-1);
        if(e.key==='s' || e.key==='ArrowDown') doMove(0,1);
        if(e.key==='a' || e.key==='ArrowLeft') doMove(-1,0);
        if(e.key==='d' || e.key==='ArrowRight') doMove(1,0);
    });

    setTimeout(() => startLevel(0), 100);
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
</body>
</html>`,
  },
  {
    id: "power-grid-manager",
    title: "Menaxheri i Rrjetit",
    category: "Rrjeti Elektrik",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menaxheri i Rrjetit</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { margin:0; padding:20px; font-family:'Roboto Mono', monospace; background:#111827; color:#f3f4f6; overflow-x:hidden; }
        .dashboard { max-width:900px; margin:0 auto; background:#1f2937; border-radius:12px; padding:25px; border: 1px solid #374151; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .header { display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #374151; padding-bottom:15px; margin-bottom:20px; }
        .header h1 { margin:0; font-size:26px; color:#10b981; text-transform:uppercase; letter-spacing:1px; }
        .header .day { font-weight:700; color:#fbbf24; font-size: 20px; background: #451a1a; padding: 5px 15px; border-radius: 8px; border: 1px solid #fbbf24; background: rgba(251, 191, 36, 0.1); }
        
        .station-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .city-card { background:#374151; padding:20px; border-radius:10px; border-left: 5px solid #10b981; position: relative; transition: all 0.3s; }
        .city-card.warning { border-left-color: #ef4444; background: #451a1a; }
        .city-card.low-power { border-left-color: #fbbf24; background: #332701; }
        .city-name { font-weight:700; font-size:20px; margin-bottom:15px; color:#f9fafb; display:flex; justify-content:space-between; align-items:center; }
        
        .req-pwr { font-size:15px; color:#9ca3af; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #4b5563; padding-bottom: 10px;}
        .req-pwr span { padding:4px 10px; background:#111827; border-radius:6px; font-weight:bold; color: #60a5fa; font-size: 18px; }
        
        .slider-group { margin-bottom: 18px; background: #1f2937; padding: 10px; border-radius: 8px; }
        .slider-group label { display:flex; justify-content:space-between; font-size:14px; color:#d1d5db; margin-bottom:8px; font-weight: bold; }
        .val-badge { color: #facc15; }
        input[type=range] { width: 100%; cursor: pointer; accent-color: #10b981; height: 8px; background: #4b5563; outline: none; border-radius: 4px; -webkit-appearance: none; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #10b981; cursor: pointer; }
        input[type=range]::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #10b981; cursor: pointer; border: none; }
        
        .actual-pwr { margin-top:20px; font-size:18px; font-weight:bold; text-align:center; padding:15px; border-radius:8px; background:#111827; transition:all 0.3s; display: flex; flex-direction: column; gap: 5px; }
        .actual-pwr.ok { color: #10b981; border: 2px solid #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.2); }
        .actual-pwr.low { color: #fbbf24; border: 2px solid #fbbf24; }
        .actual-pwr.over { color: #ef4444; border: 2px solid #ef4444; animation: pulse 1s infinite alternate; }
        .status-text { font-size: 13px; font-weight: normal; text-transform: uppercase; letter-spacing: 1px; }
        
        @keyframes pulse { to { box-shadow: inset 0 0 15px #ef4444, 0 0 15px #ef4444; } }

        .btn-dispatch { display:block; width:100%; padding:18px; font-size:20px; font-weight:700; background:#3b82f6; color:white; border:none; border-radius:10px; margin-top:30px; cursor:pointer; font-family:'Roboto Mono'; transition:all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
        .btn-dispatch:hover:not(:disabled) { background:#2563eb; transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.4); }
        .btn-dispatch:disabled { background:#374151; color:#9ca3af; cursor:not-allowed; box-shadow: none; border: 1px dashed #4b5563; }
        .btn-dispatch.danger { background: #ef4444; }
        .btn-dispatch.danger:hover:not(:disabled) { background: #dc2626; }

        .game-over { text-align: center; display: none; padding: 50px 20px; }
        .game-over i { font-size: 60px; margin-bottom: 20px; color: #ef4444; }
        .game-over h2 { color: #ef4444; font-size: 36px; margin-top: 0; }
        .game-over p { font-size: 18px; color: #d1d5db; line-height: 1.6; max-width: 600px; margin: 0 auto 30px auto;}
        
        .game-win { border-color: #10b981; display: none; padding: 50px 20px; text-align: center; }
        .game-win i { color: #10b981; }
        .game-win h2 { color:#10b981 }
    </style>
</head>
<body>

<div class="dashboard" id="main-dash">
    <div class="header">
        <h1><i class="fas fa-bolt"></i> Rrjeti Elektrik</h1>
        <div class="day"><i class="fas fa-calendar-day"></i> Dita <span id="day-counter">1</span> / 5</div>
    </div>
    <p style="color:#9ca3af; font-size:15px; line-height:1.5; border-left: 3px solid #3b82f6; padding-left: 15px; margin-bottom: 25px; background: rgba(59, 130, 246, 0.1); padding: 15px; border-radius: 0 8px 8px 0;">
        <strong>Misioni i menaxherit:</strong> Përshtat saktë Tensionin (V) dhe Rrymën (I) me rrëshqitësit për të plotësuar Kërkesën e Fuqisë (<strong style="color:white;">P = V &times; I</strong>) për secilin qytet.<br>
        Ruaj stabilitetin! Mungesa e energjisë sjell errësirë, ndërsa mbingarkesa djeg transformatorët.
    </p>
    
    <div class="station-grid" id="cities"></div>

    <button class="btn-dispatch" id="btn-dispatch" onclick="nextDay()">KONFIRMO DËRGESËN</button>
</div>

<div class="dashboard game-over" id="game-over">
    <i class="fas fa-biohazard"></i>
    <h2>Blackout Total!</h2>
    <p>Qytetarët mbetën pa drita ose rrjeti u dëmtua rëndë nga mbingarkesat e pakontrolluara. Një menaxher i mirë e llogarit saktë kapacitetin para dërgimit!</p>
    <button class="btn-dispatch" onclick="location.reload()"><i class="fas fa-redo"></i> Ristarto Misionin</button>
</div>

<div class="dashboard game-over game-win" id="game-win">
    <i class="fas fa-trophy"></i>
    <h2>Mision i Suksesshëm!</h2>
    <p>Urime Inxhinier! Ke menaxhuar rrjetin e vendit në mënyrë perfekte gjatë gjithë javës. Qytetet patën energji të pandërprerë!</p>
    <button class="btn-dispatch" onclick="location.reload()" style="background: #10b981;"><i class="fas fa-play"></i> Luaj Përsëri</button>
</div>

<script>
    const cityNames = [
        { name: "Tirana", icon: "fa-city" },
        { name: "Prishtina", icon: "fa-building" },
        { name: "Shkupi", icon: "fa-industry" }
    ];
    let currentDay = 1;
    let gridData = [];

    function generateDay() {
        const data = [];
        for(let i=0; i<3; i++) {
            let pTarget = Math.floor(Math.random() * 5 + 1) * 100 * (currentDay); 
            if(pTarget > 3000) pTarget = 3000;
            // Generate random starting positions so the user has to adjust them
            let initV = Math.floor(Math.random() * 5 + 1) * 10;
            let initI = Math.floor(Math.random() * 20 + 1);
            
            data.push({
                name: cityNames[i].name,
                icon: cityNames[i].icon,
                targetP: pTarget,
                v: initV,
                i: initI
            });
        }
        return data;
    }

    function initUI() {
        document.getElementById('day-counter').innerText = currentDay;
        const container = document.getElementById('cities');
        container.innerHTML = '';
        
        gridData.forEach((city, index) => {
            const card = document.createElement('div');
            card.className = 'city-card';
            card.id = \`card-\${index}\`;

            card.innerHTML = \`
                <div class="city-name"><i class="fas \${city.icon}"></i> \${city.name} <span class="status-icon" id="icon-\${index}"></span></div>
                <div class="req-pwr">Kërkesa e Qytetit: <span>\${city.targetP} W</span></div>
                <div class="slider-group">
                    <label>Tensioni (V): <span class="val-badge" id="val-v-\${index}">\${city.v} V</span></label>
                    <input type="range" min="10" max="100" step="10" value="\${city.v}" oninput="updateVal(\${index}, 'v', this.value)">
                </div>
                <div class="slider-group">
                    <label>Rryma (I): <span class="val-badge" id="val-i-\${index}">\${city.i} A</span></label>
                    <input type="range" min="1" max="50" step="1" value="\${city.i}" oninput="updateVal(\${index}, 'i', this.value)">
                </div>
                <div class="actual-pwr" id="pwr-box-\${index}">
                    <div id="pwr-val-\${index}">P = \${city.v * city.i} W</div>
                    <span class="status-text" id="status-text-\${index}"></span>
                </div>
            \`;
            container.appendChild(card);
        });

        // Update initially
        updateAllCards();
    }

    window.updateVal = function(index, type, val) {
        gridData[index][type] = parseInt(val);
        document.getElementById(\`val-\${type}-\${index}\`).innerText = val + (type === 'v' ? ' V' : ' A');
        updateSingleCard(index);
        checkGlobalStatus();
    };
    
    function updateSingleCard(index) {
        const city = gridData[index];
        const actualP = city.v * city.i;
        const pwrBox = document.getElementById(\`pwr-box-\${index}\`);
        const pwrVal = document.getElementById(\`pwr-val-\${index}\`);
        const statusText = document.getElementById(\`status-text-\${index}\`);
        const card = document.getElementById(\`card-\${index}\`);
        const iconContainer = document.getElementById(\`icon-\${index}\`);
        
        pwrVal.innerText = \`Furnizimi: \${actualP} W\`;
        
        card.classList.remove('warning', 'low-power');
        pwrBox.className = 'actual-pwr';
        
        if(actualP < city.targetP) { 
            card.classList.add('low-power');
            pwrBox.classList.add('low');
            statusText.innerText = 'Rrezik: Nën Kapacitet';
            iconContainer.innerHTML = '<i class="fas fa-arrow-down" style="color: #fbbf24;"></i>';
        } else if(actualP > city.targetP) { 
            card.classList.add('warning');
            pwrBox.classList.add('over');
            statusText.innerText = 'MBINGARKESË KRITIKE!';
            iconContainer.innerHTML = '<i class="fas fa-exclamation-triangle" style="color: #ef4444;"></i>';
        } else {
            pwrBox.classList.add('ok');
            statusText.innerText = 'PARAMETRAT OPTIMALË';
            iconContainer.innerHTML = '<i class="fas fa-check-circle" style="color: #10b981;"></i>';
        }
    }

    function updateAllCards() {
        for(let i=0; i<gridData.length; i++) {
            updateSingleCard(i);
        }
        checkGlobalStatus();
    }

    function checkGlobalStatus() {
        let allOk = true;
        let anyCritical = false;
        
        gridData.forEach(city => {
            const actualP = city.v * city.i;
            if(actualP !== city.targetP) allOk = false;
            if(actualP > city.targetP) anyCritical = true;
        });

        const btn = document.getElementById('btn-dispatch');
        if(allOk) {
            btn.disabled = false;
            btn.className = "btn-dispatch";
            btn.innerHTML = '<i class="fas fa-check"></i> ENERGJIZO RRJETIN (Dita e ardhshme)';
        } else {
            btn.disabled = false; 
            btn.className = "btn-dispatch danger";
            btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> DËRGO ME RREZIK (Do të shkaktojë defekt)';
        }
    }

    window.nextDay = function() {
        let isDead = false;
        gridData.forEach(c => {
            if (c.v * c.i !== c.targetP) isDead = true;
        });

        if(isDead) {
            document.getElementById('main-dash').style.display = 'none';
            document.getElementById('game-over').style.display = 'block';
            return;
        }

        currentDay++;
        if(currentDay > 5) {
            document.getElementById('main-dash').style.display = 'none';
            document.getElementById('game-win').style.display = 'block';
            return;
        }

        gridData = generateDay();
        initUI();
    };

    gridData = generateDay();
    initUI();
</script>
</body>
</html>`
  },
  {
    id: "capacitor-challenge",
    title: "Sfida e Kondensatorëve",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sfida e Kondensatorëve</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; padding: 20px; font-family: 'Inter', sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
        .app-container { max-width: 800px; width: 100%; background: #1e293b; border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); padding: 30px; text-align: center; }
        h1 { color: #38bdf8; font-weight: 800; font-size: 28px; margin-top: 0; }
        p.subtitle { color: #94a3b8; font-size: 16px; margin-bottom: 30px; }
        .target-box { background: #38bdf8; color: #0f172a; border-radius: 12px; padding: 20px; font-size: 24px; font-weight: 800; display: inline-block; margin-bottom: 30px; box-shadow: 0 10px 15px -3px rgba(56, 189, 248, 0.3); }
        .circuit-builder { display: flex; flex-direction: column; gap: 20px; background: #0f172a; padding: 30px; border-radius: 12px; position: relative; border: 2px dashed #334155; }
        
        .caps-grid { display: flex; justify-content: center; gap: 15px; margin-bottom: 20px; flex-wrap: wrap; }
        .cap { background: #1e293b; border: 2px solid #475569; border-radius: 8px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer; transition: all 0.2s; user-select: none; }
        .cap:hover { border-color: #38bdf8; transform: translateY(-3px); }
        .cap.active { background: #0c4a6e; border-color: #38bdf8; box-shadow: 0 0 15px rgba(56, 189, 248, 0.4); }

        .connection-type { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; }
        .btn-conn { padding: 10px 20px; border-radius: 8px; border: none; background: #334155; color: white; cursor: pointer; font-weight: 600; font-size: 16px; outline: none; }
        .btn-conn.active { background: #10b981; }

        .btn-calc { background: #eab308; color: #000; font-size: 18px; font-weight: 800; padding: 15px 30px; border: none; border-radius: 12px; cursor: pointer; transition: transform 0.2s; }
        .btn-calc:hover { transform: scale(1.05); }

        .result { margin-top: 25px; font-size: 22px; font-weight: bold; min-height: 30px; }
        .success { color: #10b981; }
        .error { color: #ef4444; }

        .level-stats { display: flex; justify-content: space-between; font-weight: 600; color: #94a3b8; margin-bottom: 15px; font-size: 14px; }
    </style>
</head>
<body>

<div class="app-container">
    <div class="level-stats">
        <div>Niveli: <span id="lvl">1</span>/5</div>
        <div>Pikët: <span id="score">0</span></div>
    </div>
    <h1>Sfida e Kondensatorëve</h1>
    <p class="subtitle">Krijo kapacitetin e saktë duke zgjedhur kondensatorët dhe lidhjen (Seri ose Paralel). <br>Kujdes: C<sub>paralel</sub> = C₁ + C₂, C<sub>seri</sub> = (C₁ × C₂) / (C₁ + C₂)</p>
    
    <div class="target-box">
        Synimi i Kapacitetit: <span id="targetC">0</span> μF
    </div>

    <div class="circuit-builder">
        <label style="color: #94a3b8; font-weight: 600; font-size: 14px;">Zgjidhni kondensatorët (deri në 2):</label>
        <div class="caps-grid" id="capsGrid"></div>
        
        <label style="color: #94a3b8; font-weight: 600; font-size: 14px; margin-top: 10px;">Lloji i Lidhjes:</label>
        <div class="connection-type">
            <button class="btn-conn active" id="btnParalel" onclick="setMode('P')">Paralel</button>
            <button class="btn-conn" id="btnSeries" onclick="setMode('S')">Seri</button>
        </div>

        <div>
            <button class="btn-calc" onclick="checkAnswer()">Llogarit C(eq)</button>
        </div>
    </div>

    <div class="result" id="resultMsg">Zgjidhni komponentët për të filluar.</div>
</div>

<script>
    const levels = [
        { target: 12, pool: [10, 2, 5, 8], msg: "Krijoni 12 μF nga kondensatorët" },
        { target: 4, pool: [8, 8, 2, 10], msg: "Dy kondensatorë të njëjtë në Seri pergjysmojnë vlerën!" },
        { target: 15, pool: [10, 30, 5, 20], msg: "Krijoni 15 μF" },
        { target: 2.4, pool: [6, 4, 10, 2], msg: "Pak matematikë për C_seri = (C1*C2)/(C1+C2)" },
        { target: 20, pool: [40, 40, 10, 5], msg: "Faza finale!" }
    ];

    let currentLvl = 0;
    let score = 0;
    let mode = 'P';
    let selectedCaps = [];
    
    window.loadLevel = function() {
        if(currentLvl >= levels.length) {
            document.querySelector('.circuit-builder').style.display = 'none';
            document.querySelector('.target-box').innerHTML = "Përfundove lojën me fitorje!";
            document.getElementById('resultMsg').className = 'result success';
            document.getElementById('resultMsg').innerText = "Vlerësimi maksimal! " + score + " Pikë";
            return;
        }
        
        mode = 'P'; setMode('P');
        selectedCaps = [];
        const lv = levels[currentLvl];
        document.getElementById('lvl').innerText = currentLvl + 1;
        document.getElementById('targetC').innerText = lv.target;
        document.getElementById('resultMsg').innerText = lv.msg;
        document.getElementById('resultMsg').className = 'result';
        
        const grid = document.getElementById('capsGrid');
        grid.innerHTML = '';
        lv.pool.forEach((val, i) => {
            const btn = document.createElement('div');
            btn.className = 'cap';
            btn.innerHTML = val + ' μF';
            btn.onclick = () => toggleCap(btn, val, i);
            grid.appendChild(btn);
        });
    }

    window.toggleCap = function(btn, val, id) {
        const idx = selectedCaps.findIndex(c => c.id === id);
        if(idx >= 0) {
            selectedCaps.splice(idx, 1);
            btn.classList.remove('active');
        } else {
            if(selectedCaps.length >= 2) return;
            selectedCaps.push({val, id});
            btn.classList.add('active');
        }
    }

    window.setMode = function(m) {
        mode = m;
        document.getElementById('btnParalel').classList.toggle('active', m === 'P');
        document.getElementById('btnSeries').classList.toggle('active', m === 'S');
    }

    window.checkAnswer = function() {
        const res = document.getElementById('resultMsg');
        if(selectedCaps.length < 2) {
            res.className = 'result error';
            res.innerText = "Duhet të zgjidhni 2 kondensatorë!";
            return;
        }
        const c1 = selectedCaps[0].val;
        const c2 = selectedCaps[1].val;
        let ceq = 0;
        
        if (mode === 'P') {
            ceq = c1 + c2;
        } else {
            ceq = (c1 * c2) / (c1 + c2);
        }
        
        ceq = Math.round(ceq * 100) / 100;
        
        if (ceq === levels[currentLvl].target) {
            res.className = 'result success';
            res.innerText = "Saktë! C_eq = " + ceq + " μF";
            score += 100;
            document.getElementById('score').innerText = score;
            setTimeout(() => {
                currentLvl++;
                loadLevel();
            }, 1500);
        } else {
            res.className = 'result error';
            res.innerText = "Gabim! Lidhja prodhon " + ceq + " μF. Provo përsëri.";
            score = Math.max(0, score - 10);
            document.getElementById('score').innerText = score;
        }
    }

    loadLevel();
</script>
</body>
</html>`
  },
  {
    id: "sistemi-diellor-3d",
    title: "Sistemi Diellor 3D",
    category: "Astronomi",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistemi Diellor 3D</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { margin: 0; background: radial-gradient(circle at center, #0B0E14 0%, #000000 100%); color: white; font-family: 'Orbitron', sans-serif; overflow: hidden; height: 100vh; perspective: 1000px; display: flex; align-items: center; justify-content: center; }
        .scene { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transform: rotateX(60deg); }
        .sun { position: absolute; top: 50%; left: 50%; width: 80px; height: 80px; margin-left: -40px; margin-top: -40px; background: radial-gradient(circle, #fcd34d, #f59e0b, #d97706); border-radius: 50%; box-shadow: 0 0 60px 20px rgba(245, 158, 11, 0.6); transform: rotateX(-60deg); z-index: 10; cursor: pointer; }
        .orbit { position: absolute; top: 50%; left: 50%; border: 1px dashed rgba(255,255,255,0.15); border-radius: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; animation: spin linear infinite; }
        .planet-container { position: absolute; top: 50%; left: 0; transform-style: preserve-3d; width: 100%; height: 100%; }
        .planet { position: absolute; top: -10px; left: 50%; border-radius: 50%; transform: rotateX(-60deg); text-align: center; cursor: pointer; transition: transform 0.2s; box-shadow: inset -5px -5px 10px rgba(0,0,0,0.5); }
        .planet:hover { transform: rotateX(-60deg) scale(1.5); }
        .planet-label { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: white; background: rgba(0,0,0,0.6); padding: 2px 6px; border-radius: 4px; pointer-events: none; opacity: 0; transition: opacity 0.2s; white-space: nowrap; }
        .planet:hover .planet-label { opacity: 1; }
        
        .mërkuri { background: #9ca3af; width: 12px; height: 12px; margin-left: -6px; margin-top: -6px; }
        .afërdita { background: #fdba74; width: 18px; height: 18px; margin-left: -9px; margin-top: -9px; }
        .toka { background: #3b82f6; width: 20px; height: 20px; margin-left: -10px; margin-top: -10px; box-shadow: inset -5px -5px 10px rgba(0,0,0,0.5), 0 0 10px rgba(59, 130, 246, 0.5); }
        .marsi { background: #ef4444; width: 16px; height: 16px; margin-left: -8px; margin-top: -8px; }
        .jupiteri { background: #f59e0b; width: 36px; height: 36px; margin-left: -18px; margin-top: -18px; background-image: repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px); }
        .saturni { background: #fcd34d; width: 30px; height: 30px; margin-left: -15px; margin-top: -15px; }
        .saturn-ring { position: absolute; top: 50%; left: 50%; width: 50px; height: 50px; border: 4px solid rgba(252, 211, 77, 0.5); border-radius: 50%; transform: translate(-50%, -50%) rotateX(75deg); }
        .urani { background: #06b6d4; width: 24px; height: 24px; margin-left: -12px; margin-top: -12px; }
        .neptuni { background: #2563eb; width: 24px; height: 24px; margin-left: -12px; margin-top: -12px; }

        @keyframes spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }

        .ui-panel { position: absolute; top: 20px; left: 20px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.2); padding: 20px; border-radius: 16px; backdrop-filter: blur(10px); width: 300px; z-index: 100; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: start; }
        .info-title { color: #fcd34d; font-size: 24px; margin-bottom: 10px; margin-top: 0; }
        .info-text { font-family: sans-serif; font-size: 14px; line-height: 1.5; color: #cbd5e1; }
        .btn-speed { background: #3b82f6; border: none; color: white; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-family: 'Orbitron'; font-weight: bold; margin-top: 15px; width: 100%; transition: background 0.2s; }
        .btn-speed:hover { background: #2563eb; }
        
        .stars { position: absolute; width: 100%; height: 100%; background: transparent; z-index: -1; pointer-events: none;}
    </style>
</head>
<body>
    <div class="stars" id="stars"></div>
    <div class="ui-panel">
        <h2 class="info-title" id="info-title"><i class="fas fa-sun"></i> Sistemi Diellor</h2>
        <div class="info-text" id="info-text">Zgjidhni një planet për të mësuar më shumë rreth tij. Toka është planeti ku jetojmë ne! Kliko mbi to dhe mbaj sytë hapur!</div>
        <button class="btn-speed" onclick="toggleSpeed()">Shpejtësia: 1x</button>
    </div>
    
    <div class="scene">
        <div class="sun" onclick="showInfo('Dielli', 'Ylli ynë ushqen me dritë e ngrohtësi të gjithë sistemin diellor. Ai përbën mbi 99.8% të masës së sistemit!')">
            <div class="planet-label">Dielli</div>
        </div>
        
        <div class="orbit" style="width: 140px; height: 140px; animation-duration: 8.8s;" id="orb-0">
            <div class="planet mërkuri" style="margin-top: -70px;" onclick="showInfo('Mërkuri', 'Planeti më i afërt me Diellin. Ka temperatura ekstreme, shumë të nxehta ditën dhe shumë të ftohta natën.')"><div class="planet-label">Mërkuri</div></div>
        </div>
        
        <div class="orbit" style="width: 200px; height: 200px; animation-duration: 22.5s;" id="orb-1">
            <div class="planet afërdita" style="margin-top: -100px;" onclick="showInfo('Afërdita', 'Planeti i dytë nga Dielli. Ka një atmosferë shumë të dendur dhe të nxehtë, dhe shpesh shihet ashtu si Ylli i Mëngjesit.')"><div class="planet-label">Afërdita</div></div>
        </div>
        
        <div class="orbit" style="width: 280px; height: 280px; animation-duration: 36.5s;" id="orb-2">
            <div class="planet toka" style="margin-top: -140px;" onclick="showInfo('Toka', 'Shtëpia jonë e vetme. Planeti i vetëm i njohur që strehon jetë, me ujë të lëngshëm në sipërfaqe.')"><div class="planet-label">Toka</div></div>
        </div>
        
        <div class="orbit" style="width: 360px; height: 360px; animation-duration: 68.7s;" id="orb-3">
            <div class="planet marsi" style="margin-top: -180px;" onclick="showInfo('Marsi', 'Planeti i Kuq. I ftohtë dhe i thatë sot, por miliona vjet më parë mund të ketë patur lumenj dhe dete.')"><div class="planet-label">Marsi</div></div>
        </div>
        
        <div class="orbit" style="width: 500px; height: 500px; animation-duration: 430s;" id="orb-4">
            <div class="planet jupiteri" style="margin-top: -250px;" onclick="showInfo('Jupiteri', 'Gjigandi i gaztë, planeti më i madh në Sistemin Diellor. Stuhia e tij, Njolla e Madhe e Kuqe, zien prej shekujsh.')"><div class="planet-label">Jupiteri</div></div>
        </div>
        
        <div class="orbit" style="width: 650px; height: 650px; animation-duration: 1070s;" id="orb-5">
            <div class="planet saturni" style="margin-top: -325px;" onclick="showInfo('Saturni', 'I njohur për unazat e tij spektakolare prej akulli dhe shkëmbinjsh. Ёshtë planeti i dytë më i madh i sistemit.')">
                <div class="saturn-ring"></div>
                <div class="planet-label">Saturni</div>
            </div>
        </div>
        
        <div class="orbit" style="width: 780px; height: 780px; animation-duration: 3060s;" id="orb-6">
            <div class="planet urani" style="margin-top: -390px;" onclick="showInfo('Urani', 'Gjigandi i akullt që rrotullohet i përkulur në një krah. Rrezaton një ngjyrë të qetë bojëqielli.')"><div class="planet-label">Urani</div></div>
        </div>
        
        <div class="orbit" style="width: 900px; height: 900px; animation-duration: 6010s;" id="orb-7">
            <div class="planet neptuni" style="margin-top: -450px;" onclick="showInfo('Neptuni', 'Planeti më i largët dhe me erërat më të forta në të gjithë sistemin diellor. Gji i thellë blu i ftohtësisë.')"><div class="planet-label">Neptuni</div></div>
        </div>
    </div>
    
    <script>
        function showInfo(title, desc) {
            document.getElementById('info-title').innerText = title;
            document.getElementById('info-text').innerText = desc;
        }

        let speedMultiplier = 1;
        const baseDurations = [8.8, 22.5, 36.5, 68.7, 430, 1070, 3060, 6010];
        
        function toggleSpeed() {
            speedMultiplier = speedMultiplier === 1 ? 5 : (speedMultiplier === 5 ? 20 : 1);
            document.querySelector('.btn-speed').innerText = 'Shpejtësia: ' + speedMultiplier + 'x';
            for (let i = 0; i < 8; i++) {
                document.getElementById('orb-' + i).style.animationDuration = (baseDurations[i] / speedMultiplier) + 's';
            }
        }

        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = Math.random() * 2 + 'px';
            star.style.height = star.style.width;
            star.style.background = 'rgba(255,255,255,' + Math.random() + ')';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.borderRadius = '50%';
            starsContainer.appendChild(star);
        }
    </script>
</body>
</html>`,
  },
];

