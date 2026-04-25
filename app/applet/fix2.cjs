const fs = require('fs');

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
            
            if (x < -10 || x > 640 - 20 || y < -10 || y > 480 - 20) return true;
            
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
                px -= 32; updatePlayer();
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

const encodeValue = (str) => {
    return Buffer.from(str).toString('base64');
};

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

// Title translations
for (const [id, title] of Object.entries(dict)) {
    // using split join to strictly replace without regex issues
    const parts = content.split(`id: "${id}",\n    title: "`);
    if(parts.length > 1) {
        const nextQuote = parts[1].indexOf('"');
        const rest = parts[1].substring(nextQuote);
        content = parts[0] + `id: "${id}",\n    title: "` + title + rest;
    }
}

const injectBase64 = (id, base64Str) => {
    const startIdx = content.indexOf(`id: "${id}"`);
    if (startIdx !== -1) {
        const htmlIdx = content.indexOf('html: "', startIdx);
        if (htmlIdx !== -1) {
            let quoteIdx = htmlIdx + 7;
            while(quoteIdx < content.length) {
                if (content[quoteIdx] === '"' && content[quoteIdx-1] !== '\\') {
                    break;
                }
                quoteIdx++;
            }
            const stringified = JSON.stringify(Buffer.from(base64Str, 'base64').toString('utf8'));
            content = content.substring(0, htmlIdx + 6) + stringified + content.substring(quoteIdx + 1);
        }
    }
};

injectBase64('ohms-law-challenge', encodeValue(ohmsHTML));

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
console.log('Update part 1 successful!');
