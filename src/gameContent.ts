
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
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Orbitron:wght@500;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
    <style>
        :root { --gold: #ffd700; --parchment: #f4e4bc; --ocean: #001220; --neon-blue: #00f3ff; --neon-green: #00ff9d; --neon-pink: #ff00ff; --panel-bg: rgba(10, 20, 30, 0.95); }
        * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }
        body { background-color: var(--ocean); color: white; font-family: 'Share Tech Mono', monospace; overflow: hidden; height: 100vh; display: flex; flex-direction: column; align-items: center; }
        .frac { display: inline-flex; flex-direction: column; align-items: center; vertical-align: middle; font-size: 0.9em; line-height: 1.1; margin: 0 4px; }
        .frac > span:first-child { border-bottom: 1px solid white; padding: 0 2px; }
        .frac > span:last-child { padding: 0 2px; }
        #intro-screen { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 100; display: flex; justify-content: center; align-items: center; perspective: 1000px; }
        .map-scroll { width: 320px; height: 0; background: var(--parchment); border-top: 15px solid #5e3b1f; border-bottom: 15px solid #5e3b1f; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; animation: openMap 2.5s forwards ease-in-out; box-shadow: 0 0 50px #000; }
        @keyframes openMap { 0% { height: 0; transform: rotateX(90deg); } 100% { height: 550px; transform: rotateX(0deg); } }
        .map-content { opacity: 0; animation: fadeIn 1s forwards 2s; text-align: center; color: #3e2b14; }
        .ink-title { font-family: 'Cinzel Decorative'; font-size: 2.8rem; margin-bottom: 10px; }
        .ink-btn { background: transparent; border: 2px solid #3e2b14; color: #3e2b14; padding: 10px 30px; font-family: 'Cinzel Decorative'; font-size: 1.2rem; cursor: pointer; margin-top: 20px; transition: 0.3s; }
        .ink-btn:hover { background: #3e2b14; color: var(--parchment); }
        @keyframes fadeIn { to { opacity: 1; } }
        #game-container { width: 100%; max-width: 800px; height: 100%; display: none; flex-direction: column; padding: 10px; position: relative; }
        .island-nav { display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 50px; margin-bottom: 10px; }
        .island { width: 35px; height: 35px; border-radius: 50%; background: #222; border: 2px solid #555; display: flex; align-items: center; justify-content: center; font-size: 1rem; position: relative; transition: 0.3s; }
        .island.active { border-color: var(--gold); box-shadow: 0 0 15px var(--gold); transform: scale(1.2); }
        .island.done { background: var(--neon-green); border-color: var(--neon-green); color: black; }
        .ship { position: absolute; top: -25px; font-size: 1.8rem; transition: left 1s ease; left: 5%; }
        .panel { flex: 1; background: var(--panel-bg); border: 1px solid var(--neon-blue); border-radius: 15px; padding: 15px; display: none; flex-direction: column; overflow-y: auto; box-shadow: 0 0 20px rgba(0, 243, 255, 0.15); animation: slideUp 0.5s; }
        .panel.active { display: flex; }
        @keyframes slideUp { from {transform: translateY(20px); opacity:0;} to {transform: translateY(0); opacity:1;} }
        h2 { text-align: center; color: var(--neon-blue); font-family: 'Orbitron'; margin-bottom: 15px; font-size: 1.3rem; }
        .btn { background: rgba(0, 243, 255, 0.1); border: 1px solid var(--neon-blue); color: white; padding: 12px; margin: 5px; cursor: pointer; font-family: 'Orbitron'; width: 100%; transition: 0.2s; }
        .btn:hover { background: var(--neon-blue); color: black; }
        .road { width: 100%; height: 80px; background: #222; border-bottom: 3px dashed white; position: relative; margin: 10px 0; overflow: hidden; border-radius: 5px; }
        .car { font-size: 2.5rem; position: absolute; bottom: 5px; left: 0; transform: scaleX(-1); }
        .graph-area { width: 100%; height: 200px; background: #000; border: 2px solid white; display: none; }
    </style>
</head>
<body>
    <div id="intro-screen"><div class="map-scroll"><div class="map-content"><h1 class="ink-title">HARTA E<br>FIZIKËS 10</h1><p>Nis udhëtimin drejt thesarit!</p><button class="ink-btn" onclick="startAdventure()">HAP HARTËN</button></div></div></div>
    <div id="game-container">
        <div class="island-nav"><div style="position:relative; width:100%; display:flex; justify-content:space-between;"><div class="ship" id="ship">⛵</div><div class="island active" id="isl-1">1</div><div class="island" id="isl-2">2</div><div class="island" id="isl-3">3</div><div class="island" id="isl-4">4</div></div></div>
        <div class="panel active" id="stg-1"><h2>ISHULLI 1: LABORATORI</h2><div style="display:flex; gap:10px; margin:10px 0;"><button class="btn" onclick="runSim('uniform')">Lëvizje e Njëtrajtshme</button><button class="btn" onclick="runSim('varied')">Lëvizje e Ndryshueshme</button></div><div class="road"><div class="car" id="sim-car">🏎️</div></div><div class="graph-area" id="sim-graph"><canvas id="cvs-graph"></canvas></div><button class="btn" id="btn-next-1" style="display:none; border-color:var(--neon-green);" onclick="goStage(2)">VAZHDO ➡</button></div>
    </div>
    <script>
        function startAdventure() { document.getElementById('intro-screen').style.display = 'none'; document.getElementById('game-container').style.display = 'flex'; }
        function goStage(n) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.getElementById('stg-' + n).classList.add('active'); const ship = document.getElementById('ship'); ship.style.left = ((n-1)*25 + 5) + '%'; }
        function runSim(type) { document.getElementById('sim-graph').style.display='block'; document.getElementById('btn-next-1').style.display='block'; }
    </script>
</body>
</html>`
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
    <title>Mësojmë Impulsin dhe Momentin</title>
    <style>
        :root { --primary: #00f2fe; --secondary: #4facfe; --accent: #f093fb; --bg: #0f172a; --card: #1e293b; --text: #f8fafc; --success: #22c55e; --error: #ef4444; }
        body { font-family: 'Segoe UI', sans-serif; background-color: var(--bg); color: var(--text); margin: 0; display: flex; flex-direction: column; align-items: center; min-height: 100vh; }
        .game-header { margin: 20px 0; text-align: center; }
        .container { width: 900px; background: var(--card); padding: 30px; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }
        canvas { background: #020617; border-radius: 15px; width: 100%; height: 300px; border: 2px solid var(--secondary); margin-bottom: 20px; }
        .interface { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 25px; }
        .level-info { background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border-left: 5px solid var(--primary); }
        .control-panel { background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; }
        h2 { color: var(--primary); margin-top: 0; }
        .formula-box { background: #000; padding: 10px; border-radius: 8px; color: var(--accent); font-family: 'Courier New'; font-size: 1.2rem; margin: 10px 0; text-align: center; }
        input { background: #334155; border: 2px solid var(--secondary); color: white; padding: 12px; border-radius: 8px; font-size: 1.1rem; margin-bottom: 10px; outline: none; }
        button { background: linear-gradient(135deg, var(--secondary), var(--primary)); border: none; color: white; padding: 15px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.3s; text-transform: uppercase; }
        #feedback { margin-top: 15px; font-weight: bold; height: 20px; }
    </style>
</head>
<body>
    <div class="game-header"><h1>🚀 Laboratori Virtual i Fizikës</h1><p>Mjeshtëro Impulsin dhe Momentin përmes sfidave</p></div>
    <div class="container">
        <canvas id="gameCanvas" width="800" height="300"></canvas>
        <div class="interface">
            <div class="level-info"><h2 id="lvl-title">Niveli 1</h2><p id="lvl-desc">Një makinë ka masën 1200kg dhe lëviz me shpejtësi 20m/s. Sa është impulsi i saj (p)?</p><div class="formula-box">p = m × v</div><p>m = 1200 kg | v = 20 m/s</p></div>
            <div class="control-panel"><input type="number" id="user-input" placeholder="Shëno vlerën..."><button onclick="check()">Verifiko</button><div id="feedback"></div></div>
        </div>
    </div>
    <script>function check(){ const v = document.getElementById('user-input').value; if(v == 24000) alert('Saktë!'); }</script>
</body>
</html>`
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
    <title>Energjia Fizike: Moduli 10</title>
    <style>
        :root { --bg: #0b0e14; --card: #161b22; --accent-pink: #d4a5b2; --accent-purple: #7c5cb2; --text-main: #e6edf3; --border: #30363d; --success: #238636; }
        body { font-family: 'Inter', sans-serif; background-color: var(--bg); color: var(--text-main); margin: 0; display: flex; flex-direction: column; align-items: center; padding: 40px; }
        .container { width: 850px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 35px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        canvas { background: #0d1117; border: 1px solid var(--border); border-radius: 8px; width: 100%; height: 300px; }
        .interface { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 25px; margin-top: 30px; }
        .task-box { background: rgba(255, 255, 255, 0.02); padding: 20px; border-radius: 8px; border-left: 3px solid var(--accent-pink); }
        .formula-display { display: block; margin: 15px 0; font-family: "Times New Roman"; font-size: 1.4rem; color: var(--accent-pink); background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; text-align: center; }
        input { background: #0d1117; border: 1px solid var(--border); color: white; padding: 15px; border-radius: 6px; width: 100%; margin-bottom: 15px; box-sizing: border-box; font-size: 1rem; }
        button { background: transparent; border: 1px solid var(--accent-pink); color: var(--accent-pink); padding: 15px; width: 100%; border-radius: 6px; cursor: pointer; transition: 0.3s; text-transform: uppercase; font-weight: bold; }
        button:hover { background: var(--accent-pink); color: var(--bg); }
        #feedback { margin-top: 15px; font-size: 0.95rem; font-weight: 500; }
    </style>
</head>
<body>
    <h1>Laboratori Virtual i Energjisë</h1>
    <div class="container">
        <canvas id="canvas" width="800" height="300"></canvas>
        <div class="interface">
            <div class="task-box">
                <h2 id="lvl-name" style="margin:0; font-size:1.1rem;">Niveli 1</h2>
                <p id="lvl-desc" style="color: #8b949e;"></p>
                <div class="formula-display" id="lvl-formula"></div>
                <p id="lvl-data" style="font-weight: bold; color: var(--accent-purple);"></p>
            </div>
            <div class="input-section">
                <input type="number" id="answer" placeholder="Shëno vlerën (J)...">
                <button onclick="check()">Verifiko Rezultatin</button>
                <div id="feedback"></div>
            </div>
        </div>
    </div>
    <script>
        const canvas = document.getElementById("canvas"); const ctx = canvas.getContext("2d");
        let level = 1; let animPos = 0; let animId;
        const levels = [
            { name: "Niveli 1: Energjia Potenciale Gravitacionale", desc: "Llogarit Ep për një sferë në lartësi.", formula: "E_p = m ⋅ g ⋅ h", data: "m = 5 kg | h = 8 m | g = 10 m/s²", goal: 400, type: "p" },
            { name: "Niveli 2: Energjia Kinetike", desc: "Llogarit Ek për trupin në lëvizje.", formula: "E_k = ½ ⋅ m ⋅ v²", data: "m = 4 kg | v = 10 m/s", goal: 200, type: "k" },
            { name: "Niveli 3: Puna dhe Energjia", desc: "Sa është lartësia (h) nëse E_p = 600 J?", formula: "h = E_p / (m ⋅ g)", data: "E_p = 600 J | m = 3 kg | g = 10 m/s²", goal: 20, type: "p" },
            { name: "Niveli 4: Shpejtësia nga Energjia", desc: "Gjej shpejtësinë (v) duke përdorur E_k.", formula: "v = √(2E_k / m)", data: "E_k = 100 J | m = 2 kg", goal: 10, type: "k" },
            { name: "Niveli 5: Ruajtja e Energjisë", desc: "Gjej Ep nëse Ek = 150J dhe Etot = 500J.", formula: "E_{tot} = E_k + E_p", data: "E_{tot} = 500 J | E_k = 150 J", goal: 350, type: "p" }
        ];
        function draw(offset = 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); const l = levels[level-1];
            ctx.strokeStyle = "#30363d"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(50, 250); ctx.lineTo(750, 250); ctx.stroke();
            ctx.fillStyle = "#d4a5b2";
            if(l.type === "p") {
                ctx.beginPath(); ctx.arc(400, 60 + offset, 15, 0, Math.PI*2); ctx.fill();
                ctx.strokeStyle = "#7c5cb2"; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(400, 60 + offset); ctx.lineTo(400, 250); ctx.stroke(); ctx.setLineDash([]);
            } else {
                ctx.beginPath(); ctx.arc(100 + offset, 235, 15, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = "rgba(212, 165, 178, 0.3)"; ctx.fillRect(80 + offset, 230, -20, 10);
            }
        }
        function check() {
            const val = parseFloat(document.getElementById("answer").value);
            const current = levels[level-1]; const feedback = document.getElementById("feedback");
            if(Math.abs(val - current.goal) < 0.1) { feedback.style.color = "#238636"; feedback.innerText = "Saktë! Simulimi po ekzekutohet..."; animateAction(); }
            else { feedback.style.color = "#f85149"; feedback.innerText = "E gabuar. Kontrollo llogaritjen."; }
        }
        function animateAction() {
            let start = 0; cancelAnimationFrame(animId);
            function step() { start += 8; draw(start); if(start < 190) { animId = requestAnimationFrame(step); } else { setTimeout(() => { level = (level < 5) ? level + 1 : 1; init(); }, 800); } }
            step();
        }
        function init() {
            const l = levels[level-1];
            document.getElementById("lvl-name").innerText = l.name; document.getElementById("lvl-desc").innerText = l.desc;
            document.getElementById("lvl-formula").innerText = l.formula; document.getElementById("lvl-data").innerText = l.data;
            document.getElementById("answer").value = ""; document.getElementById("feedback").innerText = "";
            draw();
        }
        init();
    </script>
</body>
</html>`
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
    <title>Zhvendosja</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root { --primary: #00d2ff; --secondary: #3a7bd5; --accent: #00ff88; --glass: rgba(255, 255, 255, 0.1); --text: #ffffff; }
        body, html { margin: 0; padding: 0; height: 100%; font-family: 'Poppins', sans-serif; background: #0f0c29; color: var(--text); overflow: hidden; }
        .bg-animate { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background: radial-gradient(circle at 50% 50%, rgba(58, 123, 213, 0.1) 0%, transparent 80%); animation: pulse 8s infinite alternate; }
        @keyframes pulse { from { transform: scale(1); } to { transform: scale(1.2); } }
        .container { width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; }
        .card { width: 90%; max-width: 550px; background: rgba(20, 20, 40, 0.85); backdrop-filter: blur(15px); border: 2px solid rgba(0, 210, 255, 0.3); border-radius: 30px; padding: 40px; box-shadow: 0 0 50px rgba(0,0,0,0.5); position: relative; }
        .screen { display: none; text-align: center; }
        .screen.active { display: block; animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes slideIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        h1 { font-family: 'Orbitron', sans-serif; text-transform: uppercase; letter-spacing: 4px; color: var(--primary); text-shadow: 0 0 15px var(--primary); }
        .btn-game { background: linear-gradient(90deg, var(--primary), var(--secondary)); border: none; border-radius: 50px; padding: 15px 40px; color: white; font-family: 'Orbitron'; cursor: pointer; transition: 0.3s; margin-top: 20px; box-shadow: 0 5px 15px rgba(0, 210, 255, 0.4); }
        .btn-game:hover { transform: scale(1.1); box-shadow: 0 0 25px var(--primary); }
        .math-display { background: rgba(0,0,0,0.3); border: 2px solid var(--primary); border-radius: 15px; padding: 20px; margin: 15px 0; min-height: 50px; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; }
        .math-keyboard { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 20px; }
        .m-key { background: var(--glass); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 12px; border-radius: 10px; cursor: pointer; font-weight: bold; }
        .m-key:hover { background: var(--primary); color: #000; }
        .option-box { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 15px; border-radius: 15px; margin: 10px 0; cursor: pointer; transition: 0.3s; text-align: left; }
        .option-box:hover { border-color: var(--primary); padding-left: 25px; }
        .correct { background: rgba(0, 255, 136, 0.2) !important; border-color: var(--accent) !important; }
        .wrong { background: rgba(255, 0, 85, 0.2) !important; border-color: #ff0055 !important; }
        .progress-cont { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 10px; margin: 20px 0; }
        .progress-fill { height: 100%; background: var(--primary); width: 0%; transition: 0.5s; }
    </style>
</head>
<body>
    <div class="bg-animate"></div>
    <div class="container">
        <div class="card">
            <div id="start-screen" class="screen active"><h1>Kuic - Zhvendosja</h1><button class="btn-game" onclick="changeScreen('quiz-screen'); startTimer();">Fillo Misionin</button></div>
            <div id="quiz-screen" class="screen">
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem;"><span>Pikët: <span id="score">0</span></span><span id="timer">05:00</span></div>
                <div class="progress-cont"><div class="progress-fill" id="p-fill"></div></div>
                <div id="question-area"></div>
                <button id="next-btn" class="btn-game" style="display: none; width: 100%;" onclick="nextQuestion()">Vazhdo</button>
            </div>
            <div id="result-screen" class="screen"><h1 id="res-title">Misioni u Krye!</h1><div id="res-score" style="font-size: 3rem;">0</div><button class="btn-game" onclick="location.reload()">Rinis Misionin</button></div>
        </div>
    </div>
    <script>
        const questions = [
            { q: "Çfarë paraqet zhvendosja (\\(S\\) ose \\(\\Delta x\\))?", type: "choice", options: ["Gjatësinë totale të rrugës", "Një madhësi skalare", "Vektor që bashkon fillimin me fundin", "Shpejtësinë mesatare"], correct: 2 },
            { q: "Cila është formula në lëvizje të njëtrajtshme?", type: "choice", options: ["\\\\(\\\\Delta x = v_0 t + at^2/2\\\\)", "\\\\(\\\\Delta x = v \\\\cdot t\\\\)", "\\\\(v^2 = v_0^2 + 2aS\\\\)", "\\\\(h = v_0 t + gt^2\\\\)"], correct: 1 },
            { q: "Njësia matëse e zhvendosjes në SI:", type: "choice", options: ["Sekonda", "Metër", "m/s", "Njuton"], correct: 1 },
            { q: "Formula e zhvendosjes kur \\(v_0 = 0\\):", type: "open", answer: "S =at^2/2" },
            { q: "Llogarit: \\(v_0=2, a=3, t=4\\). Gjej \\(\\\\Delta x\\\\).", type: "open", answer: "32" }
        ];
        let current = 0; let score = 0; let userMathInput = "";
        function changeScreen(id) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(id).classList.add('active'); if(id === 'quiz-screen') loadQuestion(); }
        function loadQuestion() {
            const q = questions[current]; const area = document.getElementById('question-area');
            document.getElementById('next-btn').style.display = 'none'; document.getElementById('p-fill').style.width = \`\${(current / questions.length) * 100}%\`;
            let html = \`<h3 style="margin-bottom:20px;">\${q.q}</h3>\`;
            if(q.type === 'choice') { q.options.forEach((opt, i) => { html += \`<div class="option-box" onclick="checkChoice(\${i}, this)">\${opt}</div>\`; }); }
            else { userMathInput = ""; html += \`<div class="math-display" id="m-preview">Pritet përgjigja...</div><div class="math-keyboard"><button class="m-key" onclick="press('S=')">S=</button><button class="m-key" onclick="press('v0')">v₀</button><button class="m-key" onclick="press('at^2/2')">$$\\\\frac{at^2}{2}$$</button><button class="m-key" onclick="press('DEL')">⌫</button><button class="m-key" onclick="press('7')">7</button><button class="m-key" onclick="press('8')">8</button><button class="m-key" onclick="press('9')">9</button><button class="m-key" onclick="press('4')">4</button><button class="m-key" onclick="press('5')">5</button><button class="m-key" onclick="press('6')">6</button><button class="m-key" onclick="press('1')">1</button><button class="m-key" onclick="press('2')">2</button><button class="m-key" onclick="press('3')">3</button></div>\`; setTimeout(() => { document.getElementById('next-btn').style.display = 'block'; }, 500); }
            area.innerHTML = html; MathJax.typeset();
        }
        window.press = (val) => { const prev = document.getElementById('m-preview'); if(val === 'DEL') userMathInput = userMathInput.slice(0, -1); else userMathInput += val; let display = userMathInput.replace('at^2/2', '\\\\frac{at^2}{2}').replace('*', '\\\\cdot'); prev.innerHTML = \`\\\\(\${display}\\\\)\`; MathJax.typesetPromise([prev]); }
        window.checkChoice = (idx, el) => { if(document.querySelector('.correct')) return; if(idx === questions[current].correct) { el.classList.add('correct'); score += 20; } else { el.classList.add('wrong'); } document.getElementById('score').innerText = score; document.getElementById('next-btn').style.display = 'block'; }
        function nextQuestion() { current++; if(current < questions.length) loadQuestion(); else { changeScreen('result-screen'); document.getElementById('res-score').innerText = score; } }
        function startTimer() { let time = 300; setInterval(() => { time--; let m = Math.floor(time/60), s = time%60; document.getElementById('timer').innerText = \`\${m}:\${s < 10 ? '0'+s : s}\`; }, 1000); }
    </script>
</body>
</html>`
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
    <title>Ligjet e Njutonit</title>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Outfit:wght@300;600&display=swap" rel="stylesheet">
    <style>
        :root { --primary: #6c5ce7; --secondary: #a29bfe; --success: #00b894; --danger: #ff7675; --warning: #fdcb6e; --dark: #2d3436; --glass: rgba(255, 255, 255, 0.95); }
        * { box-sizing: border-box; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        body { margin: 0; padding: 0; font-family: 'Fredoka', sans-serif; background: #0f0c29; height: 100vh; display: flex; justify-content: center; align-items: center; overflow: hidden; color: var(--dark); }
        #stars-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; }
        .star { position: absolute; background: white; border-radius: 50%; animation: twinkle var(--d) infinite; opacity: 0.5; }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
        #game-window { width: 90%; max-width: 1000px; height: 85vh; background: var(--glass); border-radius: 40px; display: flex; flex-direction: column; box-shadow: 0 25px 50px rgba(0,0,0,0.4); border: 8px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); position: relative; z-index: 10; }
        .header { padding: 20px 40px; display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #f0f0f0; }
        .stat-badge { background: #f8f9fa; padding: 8px 15px; border-radius: 15px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
        .progress-container { flex-grow: 1; margin: 0 30px; height: 16px; background: #eee; border-radius: 20px; overflow: hidden; }
        #fill { width: 0%; height: 100%; background: linear-gradient(90deg, var(--success), #55efc4); }
        .screen { display: none; padding: 40px; height: 100%; overflow-y: auto; flex-direction: column; }
        .screen.active { display: flex; animation: slideIn 0.5s ease; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .question-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: start; }
        .bubble-card { background: white; padding: 25px; border-radius: 30px; border: 2px solid #e0e0e0; box-shadow: 0 10px 0 #eee; margin-bottom: 20px; font-size: 1.3rem; }
        .opt-btn { background: white; border: 2px solid #e0e0e0; border-bottom: 6px solid #e0e0e0; border-radius: 20px; padding: 18px 25px; margin-bottom: 12px; cursor: pointer; font-family: 'Fredoka'; font-size: 1.1rem; font-weight: 600; text-align: left; width: 100%; }
        .opt-btn.selected { border-color: var(--primary); background: #f0edff; color: var(--primary); }
        .opt-btn.correct { background: #d7ffb8; border-color: var(--success); }
        .opt-btn.wrong { background: #ffdfe0; border-color: var(--danger); }
        .action-btn { background: var(--primary); color: white; border: none; padding: 20px 40px; border-radius: 25px; font-size: 1.2rem; font-weight: 700; cursor: pointer; margin-top: 20px; text-transform: uppercase; }
        #demo-area { background: #f1f2f6; border-radius: 25px; height: 150px; position: relative; overflow: hidden; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center; }
        .ball { width: 50px; height: 50px; background: radial-gradient(circle at 30% 30%, var(--primary), #341f97); border-radius: 50%; position: absolute; }
        .path-container { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 20px; }
        .node { width: 90px; height: 90px; border-radius: 30px; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; cursor: pointer; color: white; box-shadow: 0 10px 0 rgba(0,0,0,0.1); }
        .node.locked { filter: grayscale(1); opacity: 0.4; cursor: not-allowed; }
        textarea { width: 100%; border-radius: 20px; padding: 20px; border: 2px solid #ddd; font-family: 'Fredoka'; font-size: 1.1rem; resize: none; }
    </style>
</head>
<body>
    <div id="stars-container"></div>
    <div id="game-window">
        <div class="header" id="header" style="display: none;"><div class="stat-badge">❤️ <span id="lives">3</span></div><div class="progress-container"><div id="fill"></div></div><div class="stat-badge" style="color: var(--warning);">⭐ <span id="xp">0</span></div></div>
        <div id="home-screen" class="screen active" style="text-align:center; justify-content: center;"><h1>Ligjet e Njutonit</h1><div style="font-size: 8rem; margin: 30px;">🚀</div><button class="action-btn" onclick="showMap()">Nis Udhëtimin</button></div>
        <div id="map-screen" class="screen"><h2 style="text-align:center; font-size: 2rem;">Zgjidh Sistemin</h2><div class="path-container"><div class="node" style="background: var(--primary);" onclick="startLevel(1, 1)">1</div><div style="width:6px; height:40px; background:#ddd;"></div><div class="node locked" id="node-1-2" style="background: var(--primary);" onclick="startLevel(1, 2)">2</div><div style="width:6px; height:40px; background:#ddd;"></div><div class="node locked" id="node-2-1" style="background: var(--danger);" onclick="startLevel(2, 1)">3</div><div style="width:6px; height:40px; background:#ddd;"></div><div class="node locked" id="node-2-2" style="background: var(--danger);" onclick="startLevel(2, 2)">4</div><div style="width:6px; height:40px; background:#ddd;"></div><div class="node locked" id="node-3-1" style="background: var(--success);" onclick="startLevel(3, 1)">5</div><div style="width:6px; height:40px; background:#ddd;"></div><div class="node locked" id="node-3-2" style="background: var(--success);" onclick="startLevel(3, 2)">6</div></div></div>
        <div id="q-screen" class="screen"><div class="question-layout"><div class="left-panel"><div id="demo-area"><div id="ball" class="ball"></div></div><div id="q-text" class="bubble-card"></div><div id="feedback" style="padding:15px; border-radius:15px; font-weight:bold; display:none;"></div></div><div class="right-panel"><div id="options-box"></div><div id="open-box" style="display:none;"><textarea id="answer-in" rows="4" placeholder="Shpjegimi yt..."></textarea></div><button id="next-btn" class="action-btn" style="width:100%" onclick="handleAction()">Kontrollo</button></div></div></div>
    </div>
    <script>
        const levels = {
            "1-1": { type: "mcq", questions: [
                { q: "Ligji i Parë i Njutonit thotë se:", opts: ["Ndryshon shpejtësinë pa forcë", "Nëse rezultantja është zero, trupi ruan qetësinë ose lëvizjen e njëtrajtshme", "Trupi ndalon pa forcë"], c: 1 },
                { q: "Kur rezultantja e forcave është zero, kemi:", opts: ["Trupi akseleros", "Baraspeshë", "Ndryshim drejtimi"], c: 1 },
                { q: "Gjendja pa forca quhet:", opts: ["Nxitim", "Baraspeshë masash", "Prehje ose lëvizje e njëtrajtshme"], c: 2 }
            ]},
            "1-2": { type: "open", questions: [{ q: "Shembull i Ligjit të Parë?", c: "Inercia në makinë.", hint: "Mendo kur makina frenon." }] },
            "2-1": { type: "mcq", questions: [{ q: "Ligji i Dytë (F=ma):", opts: ["Nxitimi varet nga forca dhe masa", "Forca është vetëm peshë"], c: 0 }] },
            "2-2": { type: "open", questions: [{ q: "M=5kg, F=20N. Gjej a.", c: "4 m/s²" }] },
            "3-1": { type: "mcq", questions: [{ q: "Ligji i Tretë:", opts: ["F21 = -F12", "F=ma"], c: 0 }] },
            "3-2": { type: "open", questions: [{ q: "Shembull i Ligjit të Tretë?", c: "Shtyrja e murit." }] }
        };
        let currentId = "1-1", qIdx = 0, lives = 3, xp = 0, unlocked = ["1-1"], selected = null, state = "check";
        function showMap() { document.getElementById('home-screen').classList.remove('active'); document.getElementById('map-screen').classList.add('active'); document.getElementById('header').style.display='flex'; unlocked.forEach(id => { const n = document.getElementById('node-'+id); if(n) n.classList.remove('locked'); }); }
        function startLevel(w, l) { currentId = \`\${w}-\${l}\`; if(!unlocked.includes(currentId)) return; qIdx = 0; loadQ(); }
        function loadQ() { document.getElementById('map-screen').classList.remove('active'); document.getElementById('q-screen').classList.add('active'); const q = levels[currentId].questions[qIdx]; document.getElementById('q-text').innerText = q.q; state = "check"; selected = null; if(levels[currentId].type === "mcq") { renderMCQ(q.opts); } else { document.getElementById('options-box').style.display='none'; document.getElementById('open-box').style.display='block'; } }
        function renderMCQ(opts) { const box = document.getElementById('options-box'); box.style.display='block'; document.getElementById('open-box').style.display='none'; box.innerHTML = ''; opts.forEach((o, i) => { const b = document.createElement('button'); b.className = 'opt-btn'; b.innerText = o; b.onclick = () => { if(state === "check") { document.querySelectorAll('.opt-btn').forEach(btn => btn.classList.remove('selected')); b.classList.add('selected'); selected = i; } }; box.appendChild(b); }); }
        function handleAction() { const q = levels[currentId].questions[qIdx]; if(state === "check") { state = "next"; document.getElementById('next-btn').innerText = "Vazhdo"; if(levels[currentId].type === "mcq") { const btns = document.querySelectorAll('.opt-btn'); if(selected === q.c) { btns[selected].classList.add('correct'); xp+=10; } else { btns[selected].classList.add('wrong'); lives--; } } else { xp+=15; } updateStats(); } else { qIdx++; if(qIdx < levels[currentId].questions.length) loadQ(); else complete(); } }
        function updateStats() { document.getElementById('lives').innerText = lives; document.getElementById('xp').innerText = xp; }
        function complete() { const keys = Object.keys(levels); const idx = keys.indexOf(currentId); if(idx < keys.length-1) { const next = keys[idx+1]; if(!unlocked.includes(next)) unlocked.push(next); } showMap(); }
        const stars = document.getElementById('stars-container'); for(let i=0; i<50; i++) { const s = document.createElement('div'); s.className = 'star'; s.style.left = Math.random()*100+'%'; s.style.top = Math.random()*100+'%'; s.style.width = s.style.height = Math.random()*3+'px'; s.style.setProperty('--d', Math.random()*3+2+'s'); stars.appendChild(s); }
    </script>
</body>
</html>`
  },
  {
    id: "energy-battle-formula",
    title: "Energy Battle: Formula Challenge",
    category: "Energjia",
    type: "school",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Energy Master: Formula Battle</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        :root {
            --bg: #0a0a12;
            --blue: #00d2ff;
            --red: #ff4757;
            --gold: #ffcc00;
            --glass: rgba(255, 255, 255, 0.05);
        }

        body {
            margin: 0; padding: 0; height: 100vh;
            font-family: 'Poppins', sans-serif;
            background: var(--bg); color: white; overflow: hidden;
            display: flex; flex-direction: column;
        }

        /* HEADER */
        .header {
            background: rgba(255,255,255,0.03); padding: 15px;
            text-align: center; border-bottom: 2px solid var(--blue);
        }
        h1 { font-family: 'Orbitron'; margin: 0; color: var(--blue); text-shadow: 0 0 10px var(--blue); }

        /* ARENA */
        .arena {
            display: flex; flex: 1; padding: 20px; gap: 20px;
        }

        .team-box {
            flex: 1; background: var(--glass); border: 2px solid rgba(255,255,255,0.1);
            border-radius: 30px; display: flex; flex-direction: column; padding: 20px;
            position: relative;
        }

        .team-a { border-color: var(--blue); }
        .team-b { border-color: var(--red); }

        .score-label { font-family: 'Orbitron'; font-size: 1.2rem; margin-bottom: 10px; }

        /* Qendra e Pyetjeve */
        .question-card {
            background: white; color: #111; border-radius: 20px;
            padding: 20px; margin-bottom: 20px; text-align: center;
            min-height: 100px; display: flex; align-items: center; justify-content: center;
            font-weight: bold; font-size: 1.2rem;
        }

        /* Keyboard-et */
        .math-kb {
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
            background: rgba(0,0,0,0.3); padding: 15px; border-radius: 15px;
        }

        .key {
            background: #222; border: 1px solid #444; color: white;
            padding: 12px; border-radius: 8px; cursor: pointer;
            font-family: 'Orbitron'; font-size: 0.9rem; transition: 0.2s;
        }
        .key:active { background: var(--blue); transform: scale(0.9); }
        .key.special { background: #333; color: var(--gold); }

        .formula-display {
            background: #000; padding: 15px; border-radius: 10px;
            margin-bottom: 15px; min-height: 40px; border: 1px solid #333;
            font-size: 1.4rem; color: var(--gold); display: flex; align-items: center;
        }

        /* Butonat e Energjise */
        .energy-selector {
            display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 15px;
        }
        .energy-btn {
            padding: 10px; border-radius: 10px; border: none; cursor: pointer;
            font-weight: bold; text-transform: uppercase;
        }

        /* Efektet */
        .correct { background: #2ed573 !important; }
        .wrong { background: #ff4757 !important; }
        .hidden { display: none; }
    </style>
</head>
<body>

    <div class="header">
        <h1>ENERGY BATTLE: FORMULA CHALLENGE</h1>
    </div>

    <div class="arena">
        <div class="team-box team-a" id="box-a">
            <div class="score-label" style="color: var(--blue);">GRUPI A: <span id="score-a">0</span></div>
            <div id="q-a" class="question-card">Shtyp "START"</div>
            
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
                    <button class="key special" style="grid-column: span 2; background: var(--blue);" onclick="submitFormula('a')">DËRGO</button>
                </div>
            </div>
            <button id="start-a" class="key" style="background: var(--blue);" onclick="nextQuestion('a')">START MISIONIN</button>
        </div>

        <div class="team-box team-b" id="box-b">
            <div class="score-label" style="color: var(--red);">GRUPI B: <span id="score-b">0</span></div>
            <div id="q-b" class="question-card">Shtyp "START"</div>
            
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
                    <button class="key special" style="grid-column: span 2; background: var(--red);" onclick="submitFormula('b')">DËRGO</button>
                </div>
            </div>
            <button id="start-b" class="key" style="background: var(--red);" onclick="nextQuestion('b')">START MISIONIN</button>
        </div>
    </div>

    <script>
        const questions = [
            { text: "Një makinë që po lëviz në autostradë", type: "Ek", formula: "Ek=mv^2/2" },
            { text: "Një mollë që qëndron në degën e pemës", type: "Ep", formula: "Ep=mgh" },
            { text: "Një aeroplan që fluturon (ka lartësi dhe shpejtësi)", type: "Em", formula: "Em=Ek+Ep" },
            { text: "Një gur që bie nga maja e malit", type: "Em", formula: "Em=Ek+Ep" },
            { text: "Uji i mbledhur në digën e hidrocentralit", type: "Ep", formula: "Ep=mgh" }
        ];

        let state = {
            a: { currentQ: null, score: 0, input: "", typeChecked: false },
            b: { currentQ: null, score: 0, input: "", typeChecked: false }
        };

        function nextQuestion(team) {
            document.getElementById('start-' + team).classList.add('hidden');
            document.getElementById('controls-' + team).classList.remove('hidden');
            
            const rand = Math.floor(Math.random() * questions.length);
            state[team].currentQ = questions[rand];
            state[team].typeChecked = false;
            state[team].input = "";
            
            document.getElementById('q-' + team).innerText = state[team].currentQ.text;
            document.getElementById('display-' + team).innerText = "Zgjidh llojin...";
            document.getElementById('q-' + team).style.background = "white";
        }

        function checkType(team, type) {
            if (state[team].currentQ.type === type) {
                state[team].typeChecked = true;
                document.getElementById('display-' + team).innerText = "Tani shkruaj formulën!";
                showFeedback(team, true);
            } else {
                showFeedback(team, false);
            }
        }

        function typeKey(team, key) {
            if (!state[team].typeChecked) return;
            state[team].input += key;
            updateDisplay(team);
        }

        function updateDisplay(team) {
            let val = state[team].input
                .replace('^2', '²')
                .replace('Ek', 'E<sub>k</sub>')
                .replace('Ep', 'E<sub>p</sub>')
                .replace('Em', 'E<sub>m</sub>');
            document.getElementById('display-' + team).innerHTML = val;
        }

        function clearDisplay(team) {
            state[team].input = "";
            updateDisplay(team);
        }

        function submitFormula(team) {
            if (!state[team].typeChecked) return;
            
            // Verifikim i thjeshtuar i formules
            let correctF = state[team].currentQ.formula;
            if (state[team].input === correctF || state[team].input.includes(correctF)) {
                state[team].score += 50;
                document.getElementById('score-' + team).innerText = state[team].score;
                document.getElementById('q-' + team).innerText = "E SAKTË! +50 pikë";
                document.getElementById('q-' + team).style.background = "#2ed573";
                setTimeout(() => nextQuestion(team), 1500);
            } else {
                showFeedback(team, false);
                state[team].input = "";
                updateDisplay(team);
            }
        }

        function showFeedback(team, isCorrect) {
            const card = document.getElementById('q-' + team);
            const originalColor = "white";
            card.style.background = isCorrect ? "#2ed573" : "#ff4757";
            setTimeout(() => {
                if (state[team].currentQ) card.style.background = originalColor;
            }, 500);
        }

        function showVictory(team) {
            alert("GRUPI " + team.toUpperCase() + " FITOI!");
            location.reload();
        }
    </script>
</body>
</html>`
  },
  {
    id: "physics-battle-pro",
    title: "Physics Battle Pro: SmartBoard Edition",
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
        .pool { width: 300px; display: flex; flex-wrap: wrap; justify-content: center; align-content: center; gap: 12px; background: rgba(255,255,255,0.03); border-radius: 30px; }
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
  }
];
