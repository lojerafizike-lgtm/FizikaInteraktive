
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
    id: "testi-pisa",
    title: "Testi PISA Shkencë",
    category: "Vlerësim",
    type: "school",
    html: "",
    url: "https://test-pisa.vercel.app/"
  }
];
