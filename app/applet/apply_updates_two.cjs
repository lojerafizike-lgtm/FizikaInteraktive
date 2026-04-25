const fs = require('fs');

const fontLinks = `
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&family=VT323&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
`;

const shkencetaretHtml = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gjej Shkencëtarin</title>
    ${fontLinks}
    <style>
      :root { --primary-glow: #ffafcc; }
      body { font-family: 'Nunito', sans-serif; background: #f8fafc; margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
      h1, h2 { font-family: 'Orbitron', sans-serif; }
      .glass-panel { border-radius: 24px; backdrop-filter: blur(10px); box-shadow: 0 10px 40px rgba(0,0,0,0.08); background: white; width: 100%; max-width: 800px; margin: auto; padding: 24px; }
      .card { border-radius: 12px; padding: 16px; margin: 8px 0; cursor: pointer; text-align: center; font-weight: bold; border: 2px solid #e2e8f0; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
      .card:hover { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-color: #ffafcc; }
      .card.selected { border-color: #ffafcc; background-color: #fff0f6; transform: scale(1.02); }
      .card.matched { background-color: #d1fae5; border-color: #10b981; color: #065f46; cursor: default; transform: none; opacity: 0.8; }
      .card.wrong { background-color: #fee2e2; border-color: #ef4444; color: #991b1b; animation: shake 0.4s; }
      @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }
      .grid-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen text-slate-800 p-4">
    <div class="glass-panel">
        <div class="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
            <h1 class="text-2xl font-bold text-slate-800"><i class="fas fa-user-astronaut text-pink-400"></i> Gjej Shkencëtarin</h1>
            <div class="flex gap-4">
                <div class="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full font-bold shadow-inner"><i class="fas fa-star"></i> <span id="score">0</span>/5</div>
            </div>
        </div>

        <div class="text-center mb-6">
            <p class="text-lg font-bold text-slate-600">Lidh shkencëtarin me shpikjen ose teorinë e tij duke klikuar mbi të dy.</p>
        </div>

        <div class="grid-container" id="game-board">
            <div id="scientists" class="flex flex-col gap-2"></div>
            <div id="inventions" class="flex flex-col gap-2"></div>
        </div>

        <div id="victory" class="hidden text-center mt-8">
            <h2 class="text-3xl font-bold text-emerald-500 mb-4">Urime! I gjete të gjithë!</h2>
            <button onclick="initGame()" class="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-700">Luaj Përsëri</button>
        </div>
    </div>

    <script>
        const pairs = [
            { s: "Isaac Newton", i: "Ligji i Gravitetit Universal" },
            { s: "Albert Einstein", i: "Teoria e Relativitetit" },
            { s: "Nikola Tesla", i: "Rryma Alternative (AC)" },
            { s: "Galileo Galilei", i: "Teleskopi Astronomik" },
            { s: "Marie Curie", i: "Zbulimi i Radioaktivitetit" },
            { s: "James Clerk Maxwell", i: "Ekuacionet e Elektromagnetizmit" },
            { s: "Michael Faraday", i: "Induksioni Elektromagnetik" },
            { s: "Niels Bohr", i: "Modeli Kuantik i Atomit" },
        ];

        let currentPairs = [];
        let selectedScientist = null;
        let selectedInvention = null;
        let score = 0;

        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        function initGame() {
            score = 0;
            document.getElementById('score').innerText = score;
            document.getElementById('victory').classList.add('hidden');
            document.getElementById('game-board').classList.remove('hidden');

            const selected = shuffle([...pairs]).slice(0, 5);
            currentPairs = selected;

            const scientists = shuffle(selected.map(p => p.s));
            const inventions = shuffle(selected.map(p => p.i));

            const sContainer = document.getElementById('scientists');
            const iContainer = document.getElementById('inventions');
            
            sContainer.innerHTML = '<h3 class="text-xl text-center mb-2 font-orbitron">Shkencëtarët</h3>';
            iContainer.innerHTML = '<h3 class="text-xl text-center mb-2 font-orbitron">Shpikja / Teoria</h3>';

            scientists.forEach(s => {
                const div = document.createElement('div');
                div.className = 'card bg-white';
                div.innerText = s;
                div.onclick = () => selectCard(div, 'scientist', s);
                sContainer.appendChild(div);
            });

            inventions.forEach(i => {
                const div = document.createElement('div');
                div.className = 'card bg-white';
                div.innerText = i;
                div.onclick = () => selectCard(div, 'invention', i);
                iContainer.appendChild(div);
            });
        }

        function selectCard(element, type, value) {
            if (element.classList.contains('matched')) return;

            const container = type === 'scientist' ? document.getElementById('scientists') : document.getElementById('inventions');
            Array.from(container.children).forEach(c => c.classList.remove('selected', 'wrong'));

            element.classList.add('selected');

            if (type === 'scientist') {
                selectedScientist = { element, value };
            } else {
                selectedInvention = { element, value };
            }

            if (selectedScientist && selectedInvention) {
                checkMatch();
            }
        }

        function checkMatch() {
            const isMatch = currentPairs.some(p => p.s === selectedScientist.value && p.i === selectedInvention.value);

            if (isMatch) {
                selectedScientist.element.classList.remove('selected');
                selectedInvention.element.classList.remove('selected');
                selectedScientist.element.classList.add('matched');
                selectedInvention.element.classList.add('matched');
                
                score++;
                document.getElementById('score').innerText = score;

                if (score === 5) {
                    setTimeout(() => {
                        document.getElementById('game-board').classList.add('hidden');
                        document.getElementById('victory').classList.remove('hidden');
                    }, 500);
                }
            } else {
                const sEl = selectedScientist.element;
                const iEl = selectedInvention.element;
                sEl.classList.add('wrong');
                iEl.classList.add('wrong');
                
                setTimeout(() => {
                    sEl.classList.remove('selected', 'wrong');
                    iEl.classList.remove('selected', 'wrong');
                }, 500);
            }

            selectedScientist = null;
            selectedInvention = null;
        }

        initGame();
    </script>
</body>
</html>`;

const pokemonHtml = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ohm Law Challenge</title>
    ${fontLinks}
    <style>
      body { margin: 0; background: #000; display: flex; align-items: center; justify-content: center; height: 100vh; font-family: 'VT323', monospace; color: white; overflow: hidden; }
      #game-container { position: relative; width: 640px; height: 480px; background: #88c070; image-rendering: pixelated; box-shadow: 0 0 20px rgba(255,255,255,0.2); border: 8px solid #346856; border-radius: 8px; }
      .dialog-box { position: absolute; bottom: 10px; left: 10px; right: 10px; height: 120px; background: white; border: 4px solid #1e293b; border-radius: 8px; padding: 16px; color: #1e293b; font-size: 24px; display: none; z-index: 100; box-shadow: 4px 4px 0 rgba(0,0,0,0.2); font-family: 'VT323', monospace; }
      .character { position: absolute; width: 32px; height: 32px; background: #ffafcc; border: 2px solid #000; border-radius: 4px; z-index: 10; transition: top 0.2s, left 0.2s; box-shadow: 2px 2px 0 rgba(0,0,0,0.3); }
      .character::after { content: ''; position: absolute; top: 6px; left: 6px; width: 6px; height: 6px; background: black; border-radius: 50%; box-shadow: 10px 0 0 black; }
      .obstacle { position: absolute; background: #475569; border: 2px solid #0f172a; border-radius: 4px; box-shadow: 2px 2px 0 rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #cbd5e1; }
      .goal { position: absolute; width: 64px; height: 64px; background: #fde047; border: 4px dashed #ca8a04; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #854d0e; font-weight: bold; font-size: 20px; animation: pulse 1s infinite alternate; }
      @keyframes pulse { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
      .options-container { display: flex; gap: 10px; margin-top: 10px; }
      .option-btn { font-family: 'VT323', monospace; font-size: 20px; background: #e2e8f0; border: 2px solid #64748b; padding: 8px 16px; cursor: pointer; border-radius: 4px; }
      .option-btn:hover { background: #cbd5e1; }
      #ui-layer { position: absolute; top: 10px; left: 10px; font-size: 24px; color: #1e293b; background: rgba(255,255,255,0.8); padding: 4px 12px; border-radius: 4px; border: 2px solid #1e293b; z-index: 50; }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="ui-layer">Ligji i Ohmit - Nivel <span id="level-display">1</span></div>
        <div id="player" class="character" style="top: 224px; left: 32px;"></div>
        <div id="objects-layer"></div>

        <div id="dialog" class="dialog-box">
            <div id="dialog-text"></div>
            <div id="dialog-options" class="options-container"></div>
        </div>
    </div>

    <script>
        const player = document.getElementById('player');
        const dialog = document.getElementById('dialog');
        const dialogText = document.getElementById('dialog-text');
        const dialogOptions = document.getElementById('dialog-options');
        const objectsLayer = document.getElementById('objects-layer');
        const levelDisplay = document.getElementById('level-display');

        let px = 32, py = 224;
        let isDialogActive = false;
        let currentObstacle = null;
        let level = 1;

        const levels = [
            {
                obstacles: [
                    { id: 1, x: 200, y: 160, w: 32, h: 160, puzzle: {
                        q: "Një pajisje ka R = 10 Ω dhe V = 50 V. Sa është rryma I?",
                        options: ["5 A", "500 A", "0.2 A", "25 A"],
                        answer: 0,
                        cleared: false
                    }}
                ],
                goal: { x: 500, y: 200 }
            },
            {
                obstacles: [
                    { id: 2, x: 200, y: 0, w: 32, h: 250, puzzle: {
                        q: "Për të kaluar, llogarit Tensionin (V) nëse I = 2 A dhe R = 15 Ω.",
                        options: ["30 V", "7.5 V", "17 V", "20 V"],
                        answer: 0,
                        cleared: false
                    }},
                    { id: 3, x: 400, y: 250, w: 32, h: 230, puzzle: {
                        q: "Porta e dytë: Sa është Rezistenca nëse V = 120 V dhe I = 10 A?",
                        options: ["1200 Ω", "12 Ω", "100 Ω", "130 Ω"],
                        answer: 1,
                        cleared: false
                    }}
                ],
                goal: { x: 540, y: 350 }
            },
             {
                obstacles: [
                    { id: 4, x: 150, y: 100, w: 32, h: 300, puzzle: {
                        q: "Ligji i Ohmit është: I = V / R. E Vërtetë apo e Gabuar?",
                        options: ["E Vërtetë", "E Gabuar"],
                        answer: 0,
                        cleared: false
                    }},
                    { id: 5, x: 350, y: 50, w: 32, h: 300, puzzle: {
                        q: "Sa rrymë kalon nëse V = 24 V dhe R = 8 Ω?",
                        options: ["16 A", "32 A", "3 A", "192 A"],
                        answer: 2,
                        cleared: false
                    }}
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
                objectsLayer.innerHTML = '<div style="position:absolute; top:200px; left:120px; font-size:40px; color:#1e293b; font-weight:bold; background:white; padding:10px; border-radius:10px;">Ke fituar! Zotërues i Ohmit!</div>';
                player.style.display = 'none';
                return;
            }

            const current = levels[level - 1];

            current.obstacles.forEach(obs => {
                if (!obs.cleared) {
                    const el = document.createElement('div');
                    el.className = 'obstacle';
                    el.style.left = obs.x + 'px';
                    el.style.top = obs.y + 'px';
                    el.style.width = obs.w + 'px';
                    el.style.height = obs.h + 'px';
                    el.id = 'obs-' + obs.id;
                    el.innerText = 'BLLOK';
                    objectsLayer.appendChild(el);
                }
            });

            const goal = document.createElement('div');
            goal.className = 'goal';
            goal.style.left = current.goal.x + 'px';
            goal.style.top = current.goal.y + 'px';
            goal.innerText = 'FUND';
            objectsLayer.appendChild(goal);
        }

        function updatePlayer() {
            player.style.left = px + 'px';
            player.style.top = py + 'px';
        }

        function checkCollision(x, y) {
            const pw = 32, ph = 32;
            const current = levels[level - 1];

            const gx = current.goal.x, gy = current.goal.y, gw = 64, gh = 64;
            if (x < gx + gw && x + pw > gx && y < gy + gh && y + ph > gy) {
                level++;
                initLevel();
                return true;
            }

            if (x < 0 || x > 640 - pw || y < 0 || y > 480 - ph) return true;

            for (let obs of current.obstacles) {
                if (!obs.cleared) {
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
            dialogText.innerText = obs.puzzle.q;
            
            dialogOptions.innerHTML = '';
            obs.puzzle.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerText = opt;
                btn.onclick = () => answerPuzzle(idx);
                dialogOptions.appendChild(btn);
            });
        }

        function answerPuzzle(idx) {
            if (idx === currentObstacle.puzzle.answer) {
                dialogText.innerText = "Përgjigje e saktë! Udha është e lirë.";
                dialogOptions.innerHTML = '';
                currentObstacle.cleared = true;
                const el = document.getElementById('obs-' + currentObstacle.id);
                if (el) el.remove();

                setTimeout(() => {
                    dialog.style.display = 'none';
                    isDialogActive = false;
                }, 1000);
            } else {
                dialogText.innerText = "E gabuar! Provo përsëri.";
                px -= 16; updatePlayer(); // push back
                setTimeout(() => {
                    dialog.style.display = 'none';
                    isDialogActive = false;
                }, 1000);
            }
        }

        window.addEventListener('keydown', (e) => {
            if (isDialogActive) return;
            
            const speed = 16;
            let nx = px, ny = py;

            if (e.key === 'ArrowUp' || e.key === 'w') ny -= speed;
            if (e.key === 'ArrowDown' || e.key === 's') ny += speed;
            if (e.key === 'ArrowLeft' || e.key === 'a') nx -= speed;
            if (e.key === 'ArrowRight' || e.key === 'd') nx += speed;

            if (nx !== px || ny !== py) {
                if (!checkCollision(nx, ny)) {
                    px = nx;
                    py = ny;
                    updatePlayer();
                }
            }
        });

        const controls = document.createElement('div');
        controls.style.position = 'absolute';
        controls.style.bottom = '10px';
        controls.style.right = '10px';
        controls.style.display = 'grid';
        controls.style.gridTemplateColumns = 'repeat(3, 40px)';
        controls.style.gap = '5px';
        controls.innerHTML = \`
            <div></div>
            <button class="option-btn" style="padding:0" onclick="simulateKey('ArrowUp')">W</button>
            <div></div>
            <button class="option-btn" style="padding:0" onclick="simulateKey('ArrowLeft')">A</button>
            <button class="option-btn" style="padding:0" onclick="simulateKey('ArrowDown')">S</button>
            <button class="option-btn" style="padding:0" onclick="simulateKey('ArrowRight')">D</button>
        \`;
        document.getElementById('game-container').appendChild(controls);

        function simulateKey(key) {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: key }));
        }

        initLevel();
    </script>
</body>
</html>`;

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

function updateGameHTML(id, newHtml) {
    const idKey = 'id: "' + id + '"';
    const startIdx = content.indexOf(idKey);
    if (startIdx === -1) {
        console.log('NOT FOUND:', id);
        return;
    }
    
    // Find where html: starts
    const htmlKey = 'html: ';
    const htmlIdx = content.indexOf(htmlKey, startIdx);
    if (htmlIdx === -1) return;
    
    // Find the opening quote
    let stringStartIdx = -1;
    let quoteChar = '';
    for (let i = htmlIdx + 5; i < content.length; i++) {
        if (content[i] === '"' || content[i] === "\`" || content[i] === "'") {
            stringStartIdx = i;
            quoteChar = content[i];
            break;
        }
    }
    if (stringStartIdx === -1) return;
    
    // Find the closing quote properly handling escapes
    let stringEndIdx = -1;
    let isEscaped = false;
    for (let i = stringStartIdx + 1; i < content.length; i++) {
        if (content[i] === '\\\\' && !isEscaped) {
            isEscaped = true;
        } else {
            if (content[i] === quoteChar && !isEscaped) {
                stringEndIdx = i;
                break;
            }
            isEscaped = false;
        }
    }
    if (stringEndIdx === -1) return;
    
    const before = content.substring(0, htmlIdx + 6);
    const after = content.substring(stringEndIdx + 1);
    
    content = before + JSON.stringify(newHtml) + after;
    console.log('UPDATED:', id);
}

updateGameHTML('gjej-shkencetarin', shkencetaretHtml);
updateGameHTML('ohms-law-challenge', pokemonHtml);

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
console.log('SUCCESS DONE UPDATES');
