const fs = require('fs');

const shkencetaretHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gjej Shkencëtarin</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      body { font-family: 'Nunito', sans-serif; background: #f8fafc; margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
      h1, h2 { font-family: 'Orbitron', sans-serif; }
      .glass-panel { border-radius: 24px; backdrop-filter: blur(10px); box-shadow: 0 10px 40px rgba(0,0,0,0.08); background: white; width: 100%; max-width: 900px; padding: 24px; }
      .card { border-radius: 12px; padding: 12px; cursor: pointer; text-align: center; font-weight: bold; border: 2px solid #e2e8f0; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; height: 100%; min-height: 80px; }
      .card:hover { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-color: #ffafcc; }
      .card.selected { border-color: #ffafcc; background-color: #fff0f6; transform: scale(1.02); }
      .card.matched { background-color: #d1fae5; border-color: #10b981; color: #065f46; cursor: default; transform: none; opacity: 0.5; pointer-events: none; }
      .card.wrong { background-color: #fee2e2; border-color: #ef4444; color: #991b1b; animation: shake 0.4s; }
      @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }
      .grid-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
      .col-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen text-slate-800 p-4">
    <div class="glass-panel">
        <div class="flex justify-between items-center mb-4 border-b border-slate-100 pb-4">
            <h1 class="text-2xl font-bold text-slate-800"><i class="fas fa-search text-pink-400"></i> Gjej Shkencëtarin</h1>
            <div class="flex gap-4">
                <div class="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold shadow-inner">Raundi: <span id="round">1</span>/3</div>
                <div class="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full font-bold shadow-inner"><i class="fas fa-star"></i> <span id="score">0</span></div>
            </div>
        </div>
        <p class="text-center mb-6 font-bold text-slate-600">Lidh shkencëtarin me shpikjen/zbulimin e tij!</p>
        <div id="game-board" class="grid-container">
            <div><h3 class="text-center mb-4 font-orbitron text-lg">Shkencëtarët</h3><div id="scientists" class="col-list"></div></div>
            <div><h3 class="text-center mb-4 font-orbitron text-lg">Shpikjet / Zbulimet</h3><div id="inventions" class="col-list"></div></div>
        </div>
        <div id="victory" class="hidden text-center mt-8 py-8">
            <h2 class="text-3xl font-bold text-emerald-500 mb-4">Urime! Përfundove të gjitha raundet!</h2>
            <button onclick="startGame()" class="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 text-xl shadow-lg mt-4">Fillo Lojën nga e Para</button>
        </div>
    </div>
    <script>
        const allPairs = [
            { s: "Isaac Newton", i: "Ligji i Gravitetit" },
            { s: "Albert Einstein", i: "Teoria e Relativitetit" },
            { s: "Nikola Tesla", i: "Rryma Alternative (AC)" },
            { s: "Galileo Galilei", i: "Teleskopi Gjenial" },
            { s: "Marie Curie", i: "Radioaktiviteti" },
            { s: "James Maxwell", i: "Elektromagnetizmi" },
            { s: "Niels Bohr", i: "Modeli i Atomit" },
            { s: "Alessandro Volta", i: "Bateria Elektrike" },
            { s: "Michael Faraday", i: "Induksioni Magnetik" },
            { s: "Archimedes", i: "Ligji i Lundrimit" },
            { s: "Georg Ohm", i: "Ligji i Rezistencës" },
            { s: "Max Planck", i: "Teoria Kuantike" },
            { s: "Edwin Hubble", i: "Zgjerimi i Universit" },
            { s: "Johannes Kepler", i: "Orbitat Planetare" },
            { s: "Blaise Pascal", i: "Shtypja në Lëngje" },
            { s: "Guglielmo Marconi", i: "Radio-Komunikimi" },
            { s: "Alexander Graham Bell", i: "Telefoni" },
            { s: "Dmitri Mendeleev", i: "Tabela Periodike" }
        ];
        
        let round = 1;
        let score = 0;
        let currentPairs = [];
        let selS = null;
        let selI = null;
        let matchedInRound = 0;
        const PAIRS_PER_ROUND = 6;

        function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

        function startGame() {
            round = 1; score = 0; matchedInRound = 0;
            document.getElementById('score').innerText = score;
            document.getElementById('victory').classList.add('hidden');
            document.getElementById('game-board').classList.remove('hidden');
            loadRound();
        }

        function loadRound() {
            document.getElementById('round').innerText = round;
            matchedInRound = 0;
            const shuffledDB = shuffle([...allPairs]);
            currentPairs = shuffledDB.slice(0, PAIRS_PER_ROUND);
            
            const scientists = shuffle(currentPairs.map(p => p.s));
            const inventions = shuffle(currentPairs.map(p => p.i));
            
            const sContainer = document.getElementById('scientists');
            const iContainer = document.getElementById('inventions');
            sContainer.innerHTML = ''; iContainer.innerHTML = '';

            scientists.forEach(s => {
                const el = document.createElement('div');
                el.className = 'card'; el.innerText = s;
                el.onclick = () => selectCard(el, 's', s);
                sContainer.appendChild(el);
            });
            inventions.forEach(i => {
                const el = document.createElement('div');
                el.className = 'card'; el.innerText = i;
                el.onclick = () => selectCard(el, 'i', i);
                iContainer.appendChild(el);
            });
        }

        function selectCard(el, type, val) {
            if (el.classList.contains('matched')) return;
            const container = type === 's' ? document.getElementById('scientists') : document.getElementById('inventions');
            Array.from(container.children).forEach(c => c.classList.remove('selected', 'wrong'));
            el.classList.add('selected');
            
            if (type === 's') selS = {el, val};
            else selI = {el, val};

            if (selS && selI) checkMatch();
        }

        function checkMatch() {
            const isMatch = currentPairs.some(p => p.s === selS.val && p.i === selI.val);
            if (isMatch) {
                selS.el.classList.remove('selected'); selI.el.classList.remove('selected');
                selS.el.classList.add('matched'); selI.el.classList.add('matched');
                score += 10;
                document.getElementById('score').innerText = score;
                matchedInRound++;
                if (matchedInRound === PAIRS_PER_ROUND) {
                    setTimeout(() => {
                        if (round < 3) {
                            round++;
                            loadRound();
                        } else {
                            document.getElementById('game-board').classList.add('hidden');
                            document.getElementById('victory').classList.remove('hidden');
                        }
                    }, 800);
                }
            } else {
                const eS = selS.el, eI = selI.el;
                eS.classList.add('wrong'); eI.classList.add('wrong');
                setTimeout(() => {
                    eS.classList.remove('selected', 'wrong');
                    eI.classList.remove('selected', 'wrong');
                }, 500);
            }
            selS = null; selI = null;
        }

        startGame();
    </script>
</body>
</html>`;

const ohmsHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sfida e Ligjit të Ohmit</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <style>
      body { margin: 0; background: #0f172a; display: flex; align-items: center; justify-content: center; height: 100vh; font-family: 'VT323', monospace; color: white; overflow: hidden; }
      #game-container { position: relative; width: 640px; height: 480px; background: #88c070; image-rendering: auto; box-shadow: 0 0 20px rgba(255,255,255,0.1); border: 8px solid #346856; border-radius: 8px; overflow: hidden; transform-origin: center; }
      @media (max-width: 700px) { #game-container { transform: scale(0.6); } }
      .dialog-box { position: absolute; bottom: 10px; left: 10px; right: 10px; height: 130px; background: white; border: 4px solid #1e293b; border-radius: 8px; padding: 12px; color: #1e293b; font-size: 20px; display: none; z-index: 100; box-shadow: 4px 4px 0 rgba(0,0,0,0.2); }
      .character { position: absolute; width: 32px; height: 32px; background: #ffafcc; border: 2px solid #000; border-radius: 4px; z-index: 10; transition: top 0.15s, left 0.15s; box-shadow: 2px 2px 0 rgba(0,0,0,0.3); }
      .character::after { content: ''; position: absolute; top: 6px; left: 6px; width: 6px; height: 6px; background: black; border-radius: 50%; box-shadow: 10px 0 0 black; }
      .obstacle { position: absolute; background: #475569; border: 2px solid #0f172a; border-radius: 4px; box-shadow: 2px 2px 0 rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #cbd5e1; }
      .goal { position: absolute; width: 64px; height: 64px; background: #fde047; border: 4px dashed #ca8a04; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #854d0e; font-size: 18px; font-weight: bold; animation: pulse 1s infinite alternate; }
      @keyframes pulse { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
      .options-container { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
      .option-btn { font-family: 'VT323', monospace; font-size: 18px; background: #e2e8f0; border: 2px solid #64748b; padding: 6px 12px; cursor: pointer; border-radius: 4px; color: #1e293b; }
      .option-btn:hover { background: #cbd5e1; }
      #ui-layer { position: absolute; top: 10px; left: 10px; font-size: 24px; color: #1e293b; background: rgba(255,255,255,0.8); padding: 4px 12px; border-radius: 4px; border: 2px solid #1e293b; z-index: 50; }
      #msg-overlay { position: absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size: 40px; color: white; background: rgba(0,0,0,0.8); padding: 20px; border-radius: 10px; border: 4px solid white; display: none; z-index: 200; text-align: center; }
      .control-panel { position: absolute; bottom: 10px; right: 10px; display: grid; grid-template-columns: 40px 40px 40px; gap: 5px; z-index: 90; }
      .dpad-btn { width: 40px; height: 40px; background: rgba(255,255,255,0.8); border: 2px solid #1e293b; border-radius: 4px; font-weight: bold; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      .dpad-btn:active { background: #ccc; }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="ui-layer">Niveli <span id="level-display">1</span></div>
        <div id="player" class="character" style="top: 224px; left: 32px;"></div>
        <div id="objects-layer"></div>
        <div id="msg-overlay"></div>
        <div id="dialog" class="dialog-box">
            <div id="dialog-text"></div>
            <div id="dialog-options" class="options-container"></div>
        </div>
        <div class="control-panel">
            <div></div><button class="dpad-btn" onclick="move('up')">↑</button><div></div>
            <button class="dpad-btn" onclick="move('left')">←</button><button class="dpad-btn" onclick="move('down')">↓</button><button class="dpad-btn" onclick="move('right')">→</button>
        </div>
    </div>
    <script>
        const player = document.getElementById('player');
        const dialog = document.getElementById('dialog');
        const dialogText = document.getElementById('dialog-text');
        const dialogOptions = document.getElementById('dialog-options');
        const objectsLayer = document.getElementById('objects-layer');
        const levelDisplay = document.getElementById('level-display');
        const msgOverlay = document.getElementById('msg-overlay');
        
        let px = 32, py = 224;
        let isDialogActive = false;
        let currentObstacle = null;
        let level = 1;

        const levels = [
            {
                obstacles: [
                    { id: 1, x: 200, y: 160, w: 32, h: 160, q: "Nëse R = 10 Ω dhe V = 50 V. Sa është I?", opts: ["5 A", "500 A", "0.2 A", "25 A"], ans: 0, clear: false }
                ],
                goal: { x: 500, y: 200 }
            },
            {
                obstacles: [
                    { id: 2, x: 200, y: 0, w: 32, h: 250, q: "Gjej Tensionin V (I = 2 A, R = 15 Ω)", opts: ["30 V", "7.5 V", "17 V", "20 V"], ans: 0, clear: false },
                    { id: 3, x: 400, y: 250, w: 32, h: 230, q: "Sa është Rezistenca nëse V = 120 V dhe I = 10 A?", opts: ["1200 Ω", "12 Ω", "100 Ω", "130 Ω"], ans: 1, clear: false }
                ],
                goal: { x: 540, y: 350 }
            },
            {
                obstacles: [
                    { id: 4, x: 150, y: 100, w: 32, h: 300, q: "Cila është formula e Ligjit Ohm?", opts: ["I = V / R", "I = V * R", "V = I / R", "R = V * I"], ans: 0, clear: false },
                    { id: 5, x: 350, y: 50, w: 32, h: 300, q: "Nëse V = 24 V dhe R = 8 Ω, sa është I?", opts: ["16 A", "32 A", "3 A", "192 A"], ans: 2, clear: false }
                ],
                goal: { x: 500, y: 200 }
            }
        ];

        function initLevel() {
            objectsLayer.innerHTML = '';
            levelDisplay.innerText = level;
            px = 32; py = 224;
            updatePlayer();
            
            if (level > levels.length) {
                msgOverlay.innerText = "Ke Fituar! Mjeshtri i Ohmit!";
                msgOverlay.style.display = 'block';
                player.style.display = 'none';
                return;
            }
            
            const current = levels[level - 1];
            current.obstacles.forEach(obs => {
                if (!obs.clear) {
                    const el = document.createElement('div');
                    el.className = 'obstacle';
                    el.style.left = obs.x + 'px'; el.style.top = obs.y + 'px';
                    el.style.width = obs.w + 'px'; el.style.height = obs.h + 'px';
                    el.id = 'obs-' + obs.id;
                    el.innerText = 'X';
                    objectsLayer.appendChild(el);
                }
            });
            const goal = document.createElement('div');
            goal.className = 'goal';
            goal.style.left = current.goal.x + 'px'; goal.style.top = current.goal.y + 'px';
            goal.innerText = 'FUND';
            objectsLayer.appendChild(goal);
        }

        function updatePlayer() {
            player.style.left = px + 'px';
            player.style.top = py + 'px';
        }

        function checkCollision(x, y) {
            const pw = 32, ph = 32, current = levels[level - 1];
            const gx = current.goal.x, gy = current.goal.y, gw = 64, gh = 64;
            
            if (x < gx + gw && x + pw > gx && y < gy + gh && y + ph > gy) {
                level++;
                initLevel();
                return true;
            }
            
            if (x < 0 || x > 640 - pw || y < 0 || y > 480 - ph) return true;
            
            for (let obs of current.obstacles) {
                if (!obs.clear) {
                    if (x < obs.x + obs.w && x + pw > obs.x && y < obs.y + obs.h && y + ph > obs.y) {
                        triggerPuzzle(obs);
                        return true;
                    }
                }
            }
            return false;
        }

        function triggerPuzzle(obs) {
            isDialogActive = true;
            currentObstacle = obs;
            dialog.style.display = 'block';
            dialogText.innerText = obs.q;
            dialogOptions.innerHTML = '';
            obs.opts.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn'; btn.innerText = opt;
                btn.onclick = () => answerPuzzle(idx);
                dialogOptions.appendChild(btn);
            });
        }

        function answerPuzzle(idx) {
            if (idx === currentObstacle.ans) {
                dialogText.innerText = "Përgjigje e saktë! Udha është e lirë.";
                dialogOptions.innerHTML = '';
                currentObstacle.clear = true;
                const el = document.getElementById('obs-' + currentObstacle.id);
                if (el) el.remove();
                setTimeout(() => { dialog.style.display = 'none'; isDialogActive = false; }, 800);
            } else {
                dialogText.innerText = "E gabuar! Kthehu prapa.";
                px -= 32; updatePlayer(); // push back further to prevent immediate re-trigger
                setTimeout(() => { dialog.style.display = 'none'; isDialogActive = false; }, 800);
            }
        }

        window.move = function(dir) {
            if (isDialogActive) return;
            const speed = 16;
            let nx = px, ny = py;
            if (dir === 'up') ny -= speed;
            if (dir === 'down') ny += speed;
            if (dir === 'left') nx -= speed;
            if (dir === 'right') nx += speed;
            if (nx !== px || ny !== py) {
                if (!checkCollision(nx, ny)) {
                    px = nx; py = ny;
                    updatePlayer();
                }
            }
        };

        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === 'w') move('up');
            if (e.key === 'ArrowDown' || e.key === 's') move('down');
            if (e.key === 'ArrowLeft' || e.key === 'a') move('left');
            if (e.key === 'ArrowRight' || e.key === 'd') move('right');
        });

        initLevel();
    </script>
</body>
</html>`;

const solarHTML = `<!DOCTYPE html>
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

        .ui-panel { position: absolute; top: 20px; left: 20px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.2); padding: 20px; border-radius: 16px; backdrop-filter: blur(10px); width: 300px; z-index: 100; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .info-title { color: #fcd34d; font-size: 24px; margin-bottom: 10px; margin-top: 0; }
        .info-text { font-family: sans-serif; font-size: 14px; line-height: 1.5; color: #cbd5e1; }
        .btn-speed { background: #3b82f6; border: none; color: white; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-family: 'Orbitron'; font-weight: bold; margin-top: 15px; width: 100%; transition: background 0.2s; }
        .btn-speed:hover { background: #2563eb; }
        
        .stars { position: absolute; width: 100%; height: 100%; background: transparent; z-index: -1; }
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

        // Generate stars
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
</html>`;

const dict = {
    'electric-field-master': 'Mjeshtri i Fushës Elektrike',
    'potential-master': 'Mjeshtri i Potencialit',
    'induction-master': 'Mjeshtri i Induksionit',
    'flux-master': 'Mjeshtri i Fluksit',
    'lorentz-force-lab': 'Laboratori i Forcës së Lorencit',
    'amperes-force-defender': 'Mbrojtësi i Forcës së Amperit',
    'magnetic-induction-master': 'Induksioni Magnetik',
    'ohms-law-challenge': 'Sfida e Ligjit të Ohmit',
    'power-grid-manager': 'Menaxheri i Rrjetit',
    'capacitor-challenge': 'Sfida e Kondensatorëve',
    'energy-battle-formula': 'Beteja e Energjisë: Formulat',
    'physics-battle-pro': 'Beteja e Fizikës: Pro'
};

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

// Title translations
for (const [id, title] of Object.entries(dict)) {
    const regex = new RegExp(\`id:\\s*['"]\${id}['"],\\s*title:\\s*['"][^'"]+['"]\`);
    content = content.replace(regex, \`id: "\${id}",\\n    title: "\${title}"\`);
}

// Inject new HTML
function replaceHTML(id, newHTML) {
    const idIndex = content.indexOf(\`id: "\${id}"\`);
    if (idIndex === -1) return;
    
    const htmlStart = content.indexOf('html: "', idIndex);
    if (htmlStart === -1) return;
    
    // Find the end of the HTML string (we must track escape characters and backticks if any)
    let inQuotes = true;
    let endIndex = htmlStart + 7;
    while(endIndex < content.length) {
        if (content[endIndex] === '"') {
            if (content[endIndex-1] !== '\\\\') {
                break;
            }
        }
        endIndex++;
    }
    
    const newHtmlEncoded = newHTML.replace(/\\"/g, '\\\\"').replace(/\\n/g, '\\\\n').replace(/"/g, '\\"');
    
    content = content.substring(0, htmlStart + 7) + newHtmlEncoded + content.substring(endIndex);
}

replaceHTML('gjej-shkencetarin', shkencetaretHTML);
replaceHTML('ohms-law-challenge', ohmsHTML);
replaceHTML('sistemi-diellor-3d', solarHTML);

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
console.log('Update successful!');
