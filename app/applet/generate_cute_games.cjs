const fs = require('fs');

function getBlackboardQuizTemplate(title, topic, questions) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-outer: #f4c20d;
            --bg-inner: #ffffff;
            --board-bg: #0f766e;
            --board-border: #f59e0b;
            --text-main: #334155;
            --text-board: #ffffff;
            --btn-blue: #3b82f6;
            --btn-red: #ef4444;
        }
        body {
            margin: 0; padding: 20px;
            background-color: var(--bg-outer);
            font-family: 'Nunito', sans-serif;
            display: flex; justify-content: center; align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
        }
        .game-container {
            background: var(--bg-inner);
            border-radius: 30px;
            padding: 20px;
            width: 100%; max-width: 800px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            position: relative;
        }
        .header {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px;
            padding: 10px 20px;
            background: #f1f5f9;
            border-radius: 20px;
        }
        .lives { color: #ef4444; font-size: 1.5rem; font-weight: 900; }
        .score { color: #3b82f6; font-size: 1.5rem; font-weight: 900; }
        .board-container {
            background: var(--board-border);
            padding: 15px;
            border-radius: 20px;
            margin-bottom: 20px;
        }
        .board {
            background: var(--board-bg);
            border-radius: 10px;
            padding: 40px 20px;
            text-align: center;
            color: var(--text-board);
            min-height: 200px;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            position: relative;
        }
        .question { font-size: 1.8rem; font-weight: 700; margin-bottom: 30px; }
        .options {
            display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;
        }
        .btn-option {
            background: white; color: var(--board-bg);
            border: none; border-radius: 15px;
            padding: 15px 30px; font-size: 1.2rem; font-weight: 900;
            cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 6px 0 #cbd5e1;
        }
        .btn-option:hover { transform: translateY(-2px); box-shadow: 0 8px 0 #cbd5e1; }
        .btn-option:active { transform: translateY(4px); box-shadow: 0 2px 0 #cbd5e1; }
        .btn-tf {
            width: 80px; height: 80px; border-radius: 50%;
            font-size: 2.5rem; font-weight: 900; color: white;
            border: 6px solid white; cursor: pointer;
            display: flex; justify-content: center; align-items: center;
            box-shadow: 0 6px 0 rgba(0,0,0,0.2);
            transition: transform 0.2s;
        }
        .btn-true { background: var(--btn-blue); }
        .btn-false { background: var(--btn-red); }
        .btn-tf:hover { transform: scale(1.1); }
        .btn-tf:active { transform: scale(0.95); }
        .character {
            position: absolute; bottom: -20px; right: -20px;
            width: 120px; height: 120px;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23a7f3d0"/><circle cx="35" cy="40" r="5" fill="%230f172a"/><circle cx="65" cy="40" r="5" fill="%230f172a"/><path d="M 40 65 Q 50 75 60 65" stroke="%230f172a" stroke-width="4" fill="none" stroke-linecap="round"/></svg>') no-repeat center center;
            background-size: contain;
        }
        .game-over { display: none; text-align: center; padding: 40px; }
        .game-over h2 { font-size: 3rem; color: var(--board-bg); margin-bottom: 20px; }
        .btn-restart {
            background: var(--board-border); color: white;
            border: none; border-radius: 15px;
            padding: 15px 40px; font-size: 1.5rem; font-weight: 900;
            cursor: pointer; box-shadow: 0 6px 0 #d97706;
        }
    </style>
</head>
<body>
    <div class="game-container" id="game-screen">
        <div class="header">
            <div class="lives">❤️ <span id="lives">3</span></div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #64748b;">${title}</div>
            <div class="score">⭐ <span id="score">0</span></div>
        </div>
        <div class="board-container">
            <div class="board">
                <div class="question" id="question-text">Gati për të filluar?</div>
                <div class="options" id="options-container">
                    <button class="btn-option" onclick="startGame()">Fillo Lojën</button>
                </div>
                <div class="character"></div>
            </div>
        </div>
    </div>

    <div class="game-container game-over" id="game-over-screen">
        <h2>Lojë e Përfunduar!</h2>
        <p style="font-size: 1.5rem; margin-bottom: 30px; font-weight: 700;">Pikët tuaja: <span id="final-score" style="color: #3b82f6; font-size: 2rem;">0</span></p>
        <button class="btn-restart" onclick="location.reload()">Luaj Përsëri</button>
    </div>

    <script>
        const questions = ${JSON.stringify(questions)};
        let currentQ = 0;
        let score = 0;
        let lives = 3;

        function startGame() {
            currentQ = 0; score = 0; lives = 3;
            updateUI();
            nextQuestion();
        }

        function updateUI() {
            document.getElementById('score').innerText = score;
            document.getElementById('lives').innerText = lives;
        }

        function nextQuestion() {
            if (lives <= 0 || currentQ >= questions.length) {
                endGame();
                return;
            }
            const q = questions[currentQ];
            document.getElementById('question-text').innerText = q.q;
            const opts = document.getElementById('options-container');
            opts.innerHTML = '';

            if (q.type === 'tf') {
                opts.innerHTML = \`
                    <button class="btn-tf btn-true" onclick="checkAnswer(true)">O</button>
                    <button class="btn-tf btn-false" onclick="checkAnswer(false)">X</button>
                \`;
            } else {
                q.options.forEach((opt, i) => {
                    opts.innerHTML += \`<button class="btn-option" onclick="checkAnswer(\${i})">\${opt}</button>\`;
                });
            }
        }

        function checkAnswer(ans) {
            const q = questions[currentQ];
            const isCorrect = ans === q.a;
            
            if (isCorrect) {
                score += 10;
                document.querySelector('.board').style.backgroundColor = '#15803d';
            } else {
                lives--;
                document.querySelector('.board').style.backgroundColor = '#be123c';
            }
            
            updateUI();
            setTimeout(() => {
                document.querySelector('.board').style.backgroundColor = 'var(--board-bg)';
                currentQ++;
                nextQuestion();
            }, 500);
        }

        function endGame() {
            document.getElementById('game-screen').style.display = 'none';
            document.getElementById('game-over-screen').style.display = 'block';
            document.getElementById('final-score').innerText = score;
        }
    </script>
</body>
</html>`;
}

function getBattleRPGTemplate(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-sky: #bae6fd;
            --bg-grass: #86efac;
            --text-main: #1e293b;
            --panel-bg: rgba(255, 255, 255, 0.9);
        }
        body {
            margin: 0; padding: 0; font-family: 'Nunito', sans-serif;
            background: linear-gradient(to bottom, var(--bg-sky) 60%, var(--bg-grass) 60%);
            height: 100vh; display: flex; flex-direction: column;
            overflow: hidden;
        }
        .header {
            padding: 20px; text-align: center;
            background: var(--panel-bg);
            border-bottom: 4px solid #cbd5e1;
            font-size: 1.5rem; font-weight: 900; color: var(--text-main);
        }
        .battlefield {
            flex: 1; display: flex; justify-content: space-around; align-items: center;
            padding: 0 50px; position: relative;
        }
        .character-container {
            display: flex; flex-direction: column; align-items: center;
            width: 200px;
        }
        .health-bar-bg {
            width: 100%; height: 20px; background: #e2e8f0;
            border-radius: 10px; border: 3px solid white;
            margin-bottom: 10px; overflow: hidden;
        }
        .health-bar-fill {
            height: 100%; background: #22c55e; width: 100%;
            transition: width 0.3s, background-color 0.3s;
        }
        .character {
            width: 150px; height: 150px;
            background-size: contain; background-repeat: no-repeat; background-position: center;
            transition: transform 0.2s;
        }
        .player .character {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23fcd34d"/><circle cx="35" cy="40" r="6" fill="%231e293b"/><circle cx="65" cy="40" r="6" fill="%231e293b"/><path d="M 35 65 Q 50 80 65 65" stroke="%231e293b" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="80" y="40" width="10" height="40" fill="%2394a3b8" rx="5"/><circle cx="85" cy="35" r="10" fill="%2338bdf8"/></svg>');
        }
        .enemy .character {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 20 80 L 50 20 L 80 80 Z" fill="%23f87171"/><circle cx="40" cy="60" r="5" fill="%231e293b"/><circle cx="60" cy="60" r="5" fill="%231e293b"/><path d="M 40 70 L 60 70" stroke="%231e293b" stroke-width="4" stroke-linecap="round"/><path d="M 30 40 L 45 50 M 70 40 L 55 50" stroke="%231e293b" stroke-width="4" stroke-linecap="round"/></svg>');
        }
        .controls {
            background: var(--panel-bg);
            padding: 20px; border-top: 4px solid #cbd5e1;
            display: flex; flex-direction: column; align-items: center;
        }
        .question-box {
            font-size: 1.5rem; font-weight: 700; margin-bottom: 20px; text-align: center;
        }
        .actions {
            display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;
        }
        .btn-action {
            background: white; border: 3px solid #cbd5e1;
            padding: 15px 30px; border-radius: 15px;
            font-size: 1.2rem; font-weight: 800; color: var(--text-main);
            cursor: pointer; box-shadow: 0 4px 0 #cbd5e1;
            transition: all 0.1s;
        }
        .btn-action:hover { transform: translateY(-2px); box-shadow: 0 6px 0 #cbd5e1; border-color: #94a3b8; }
        .btn-action:active { transform: translateY(4px); box-shadow: 0 0 0 #cbd5e1; }
        
        .damage-text {
            position: absolute; font-size: 2rem; font-weight: 900; color: #ef4444;
            text-shadow: 2px 2px 0 white; opacity: 0; pointer-events: none;
        }
        @keyframes floatUp {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-50px); }
        }
        .animate-damage { animation: floatUp 1s ease-out forwards; }
        .shake { animation: shake 0.5s; }
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
    </style>
</head>
<body>
    <div class="header">${title} - Mposht Armikun!</div>
    
    <div class="battlefield">
        <div class="character-container player">
            <div class="health-bar-bg"><div class="health-bar-fill" id="player-hp"></div></div>
            <div style="font-weight: 800; margin-bottom: 10px;">Lojtari</div>
            <div class="character" id="player-char"></div>
            <div class="damage-text" id="player-dmg">-20</div>
        </div>
        
        <div style="font-size: 3rem; font-weight: 900; color: white; text-shadow: 2px 2px 0 rgba(0,0,0,0.2);">VS</div>
        
        <div class="character-container enemy">
            <div class="health-bar-bg"><div class="health-bar-fill" id="enemy-hp"></div></div>
            <div style="font-weight: 800; margin-bottom: 10px;">Armiku i ${topic}</div>
            <div class="character" id="enemy-char"></div>
            <div class="damage-text" id="enemy-dmg">-25</div>
        </div>
    </div>
    
    <div class="controls">
        <div class="question-box" id="q-text">Zgjidh sulmin e duhur për të filluar!</div>
        <div class="actions" id="actions-box">
            <button class="btn-action" onclick="startGame()">Fillo Betejën</button>
        </div>
    </div>

    <script>
        let playerHp = 100;
        let enemyHp = 100;
        let currentQ = 0;
        
        const questions = [
            { q: "Cila është njësia e ${topic}?", opts: ["Joule", "Newton", "Watt", "Volt"], a: 0 },
            { q: "Formula kryesore?", opts: ["F=ma", "E=mc²", "V=IR", "P=VI"], a: 1 },
            { q: "Kush e zbuloi?", opts: ["Newton", "Einstein", "Tesla", "Faraday"], a: 2 },
            { q: "Çfarë ndodh nëse rritet?", opts: ["Zvogëlohet", "Rritet", "Nuk ndryshon", "Zero"], a: 1 },
            { q: "A është madhësi vektoriale?", opts: ["Po", "Jo", "Ndonjëherë", "Asnjëra"], a: 0 }
        ];

        function updateHP() {
            document.getElementById('player-hp').style.width = playerHp + '%';
            document.getElementById('enemy-hp').style.width = enemyHp + '%';
            
            if (playerHp <= 50) document.getElementById('player-hp').style.background = '#eab308';
            if (playerHp <= 20) document.getElementById('player-hp').style.background = '#ef4444';
            if (enemyHp <= 50) document.getElementById('enemy-hp').style.background = '#eab308';
            if (enemyHp <= 20) document.getElementById('enemy-hp').style.background = '#ef4444';
        }

        function startGame() {
            playerHp = 100; enemyHp = 100; currentQ = 0;
            updateHP();
            nextTurn();
        }

        function nextTurn() {
            if (playerHp <= 0) {
                document.getElementById('q-text').innerText = "Humbët! Armiku fitoi.";
                document.getElementById('actions-box').innerHTML = '<button class="btn-action" onclick="startGame()">Provo Përsëri</button>';
                return;
            }
            if (enemyHp <= 0) {
                document.getElementById('q-text').innerText = "Fitore! E mposhtët armikun!";
                document.getElementById('actions-box').innerHTML = '<button class="btn-action" onclick="startGame()">Luaj Përsëri</button>';
                return;
            }
            if (currentQ >= questions.length) currentQ = 0; // Loop questions

            const q = questions[currentQ];
            document.getElementById('q-text').innerText = q.q;
            
            let html = '';
            q.opts.forEach((opt, i) => {
                html += \`<button class="btn-action" onclick="attack(\${i === q.a})">\${opt}</button>\`;
            });
            document.getElementById('actions-box').innerHTML = html;
        }

        function attack(isCorrect) {
            if (isCorrect) {
                // Player attacks
                document.getElementById('player-char').style.transform = 'translateX(50px)';
                setTimeout(() => {
                    document.getElementById('player-char').style.transform = 'translateX(0)';
                    enemyHp -= 25;
                    showDamage('enemy-dmg', '-25');
                    document.getElementById('enemy-char').classList.add('shake');
                    setTimeout(() => document.getElementById('enemy-char').classList.remove('shake'), 500);
                    updateHP();
                    currentQ++;
                    setTimeout(nextTurn, 1000);
                }, 200);
            } else {
                // Enemy attacks
                document.getElementById('enemy-char').style.transform = 'translateX(-50px)';
                setTimeout(() => {
                    document.getElementById('enemy-char').style.transform = 'translateX(0)';
                    playerHp -= 20;
                    showDamage('player-dmg', '-20');
                    document.getElementById('player-char').classList.add('shake');
                    setTimeout(() => document.getElementById('player-char').classList.remove('shake'), 500);
                    updateHP();
                    currentQ++;
                    setTimeout(nextTurn, 1000);
                }, 200);
            }
        }

        function showDamage(id, text) {
            const el = document.getElementById(id);
            el.innerText = text;
            el.classList.remove('animate-damage');
            void el.offsetWidth; // trigger reflow
            el.classList.add('animate-damage');
        }
    </script>
</body>
</html>`;
}

function getMapExplorerTemplate(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-map: #10b981;
            --path-color: #fef08a;
            --node-locked: #94a3b8;
            --node-active: #f59e0b;
            --node-done: #3b82f6;
            --text-main: #1e293b;
        }
        body {
            margin: 0; padding: 0; font-family: 'Nunito', sans-serif;
            background-color: var(--bg-map);
            height: 100vh; display: flex; flex-direction: column;
            background-image: radial-gradient(#059669 2px, transparent 2px);
            background-size: 30px 30px;
        }
        .header {
            background: rgba(255,255,255,0.9); padding: 15px 20px;
            display: flex; justify-content: space-between; align-items: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 10;
        }
        .title { font-size: 1.5rem; font-weight: 900; color: var(--text-main); }
        .progress { font-size: 1.2rem; font-weight: 700; color: #059669; background: #d1fae5; padding: 5px 15px; border-radius: 20px; }
        
        .map-container {
            flex: 1; position: relative; overflow: hidden;
        }
        
        .path-svg {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;
        }
        
        .node {
            position: absolute; width: 60px; height: 60px;
            border-radius: 50%; display: flex; justify-content: center; align-items: center;
            font-size: 1.5rem; font-weight: 900; color: white;
            cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
            border: 4px solid white; box-shadow: 0 4px 0 rgba(0,0,0,0.2);
            transform: translate(-50%, -50%);
        }
        .node:hover { transform: translate(-50%, -50%) scale(1.1); }
        .node.locked { background: var(--node-locked); cursor: not-allowed; }
        .node.active { background: var(--node-active); animation: pulse 1.5s infinite; }
        .node.done { background: var(--node-done); }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(245, 158, 11, 0); }
            100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
        }

        .modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); backdrop-filter: blur(5px);
            display: none; justify-content: center; align-items: center; z-index: 20;
        }
        .modal {
            background: white; padding: 30px; border-radius: 25px;
            width: 90%; max-width: 500px; text-align: center;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
            border: 4px solid #cbd5e1;
        }
        .modal h2 { margin-top: 0; color: var(--text-main); font-size: 2rem; }
        .modal p { font-size: 1.2rem; color: #475569; margin-bottom: 20px; }
        .btn-modal {
            background: #3b82f6; color: white; border: none;
            padding: 12px 25px; border-radius: 15px; font-size: 1.2rem; font-weight: 800;
            cursor: pointer; box-shadow: 0 4px 0 #2563eb; width: 100%; margin-bottom: 10px;
        }
        .btn-modal:active { transform: translateY(4px); box-shadow: 0 0 0 #2563eb; }
    </style>
</head>
<body>
    <div class="header">
        <div class="title">${title}</div>
        <div class="progress">Niveli: <span id="level-display">1/5</span></div>
    </div>
    
    <div class="map-container" id="map">
        <svg class="path-svg">
            <path d="M 100 80 Q 300 20 500 80 T 900 80" stroke="var(--path-color)" stroke-width="10" stroke-dasharray="20,10" fill="none" stroke-linecap="round"/>
        </svg>
        <!-- Nodes will be placed via JS -->
    </div>

    <div class="modal-overlay" id="modal">
        <div class="modal">
            <h2 id="modal-title">Niveli 1</h2>
            <p id="modal-desc">Zgjidh sfidën e ${topic} për të kaluar më tej.</p>
            <button class="btn-modal" onclick="completeLevel()">Përfundo me Sukses</button>
            <button class="btn-modal" style="background: #ef4444; box-shadow: 0 4px 0 #dc2626;" onclick="closeModal()">Mbyll</button>
        </div>
    </div>

    <script>
        const nodesData = [
            { id: 1, x: 10, y: 80 },
            { id: 2, x: 30, y: 30 },
            { id: 3, x: 50, y: 80 },
            { id: 4, x: 70, y: 30 },
            { id: 5, x: 90, y: 80 }
        ];
        
        let currentLevel = 1;
        let selectedLevel = 1;

        function renderMap() {
            const map = document.getElementById('map');
            // Keep SVG, remove old nodes
            const nodes = map.querySelectorAll('.node');
            nodes.forEach(n => n.remove());

            nodesData.forEach(nd => {
                const div = document.createElement('div');
                div.className = 'node';
                div.style.left = nd.x + '%';
                div.style.top = nd.y + '%';
                div.innerText = nd.id;
                
                if (nd.id < currentLevel) {
                    div.classList.add('done');
                    div.innerHTML = '⭐';
                } else if (nd.id === currentLevel) {
                    div.classList.add('active');
                    div.onclick = () => openModal(nd.id);
                } else {
                    div.classList.add('locked');
                    div.innerHTML = '🔒';
                }
                
                map.appendChild(div);
            });
            
            document.getElementById('level-display').innerText = \`\${Math.min(currentLevel, 5)}/5\`;
        }

        function openModal(level) {
            selectedLevel = level;
            document.getElementById('modal-title').innerText = \`Niveli \${level}\`;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        function completeLevel() {
            currentLevel++;
            closeModal();
            renderMap();
            if (currentLevel > 5) {
                setTimeout(() => {
                    alert("Urime! Keni përfunduar të gjithë hartën!");
                    currentLevel = 1;
                    renderMap();
                }, 500);
            }
        }

        // Draw SVG Path dynamically based on nodes
        function drawPath() {
            const svg = document.querySelector('.path-svg');
            const mapRect = document.getElementById('map').getBoundingClientRect();
            let d = '';
            nodesData.forEach((nd, i) => {
                const px = (nd.x / 100) * mapRect.width;
                const py = (nd.y / 100) * mapRect.height;
                if (i === 0) d += \`M \${px} \${py} \`;
                else {
                    const prev = nodesData[i-1];
                    const prevPx = (prev.x / 100) * mapRect.width;
                    const prevPy = (prev.y / 100) * mapRect.height;
                    const cpX = (px + prevPx) / 2;
                    const cpY = Math.min(py, prevPy) - 50;
                    d += \`Q \${cpX} \${cpY} \${px} \${py} \`;
                }
            });
            svg.innerHTML = \`<path d="\${d}" stroke="var(--path-color)" stroke-width="8" stroke-dasharray="15,10" fill="none" stroke-linecap="round"/>\`;
        }

        window.addEventListener('resize', drawPath);
        setTimeout(() => { renderMap(); drawPath(); }, 100);
    </script>
</body>
</html>`;
}

function getSoundMasterTemplate() {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mjeshtri i Tingullit</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #1e1b4b;
            --text-main: #e0e7ff;
            --accent: #818cf8;
            --wave-color: #38bdf8;
        }
        body {
            margin: 0; padding: 20px; font-family: 'Nunito', sans-serif;
            background-color: var(--bg-color); color: var(--text-main);
            display: flex; flex-direction: column; align-items: center;
            min-height: 100vh; box-sizing: border-box;
        }
        .header { text-align: center; margin-bottom: 30px; }
        .title { font-size: 2.5rem; font-weight: 900; color: var(--wave-color); text-shadow: 0 0 10px rgba(56, 189, 248, 0.5); }
        
        .canvas-container {
            background: rgba(0,0,0,0.3); border-radius: 20px;
            padding: 20px; border: 2px solid var(--accent);
            box-shadow: 0 0 20px rgba(129, 140, 248, 0.2);
            margin-bottom: 30px;
        }
        canvas { background: #0f172a; border-radius: 10px; }
        
        .controls {
            display: flex; gap: 30px; background: rgba(255,255,255,0.05);
            padding: 20px 40px; border-radius: 20px; flex-wrap: wrap; justify-content: center;
        }
        .control-group { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        label { font-weight: 700; font-size: 1.2rem; }
        input[type=range] {
            -webkit-appearance: none; width: 200px; background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none; height: 24px; width: 24px;
            border-radius: 50%; background: var(--wave-color);
            cursor: pointer; margin-top: -8px; box-shadow: 0 0 10px var(--wave-color);
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%; height: 8px; cursor: pointer;
            background: #475569; border-radius: 4px;
        }
        .btn-play {
            background: var(--wave-color); color: #0f172a;
            border: none; padding: 15px 40px; border-radius: 30px;
            font-size: 1.5rem; font-weight: 900; cursor: pointer;
            transition: all 0.2s; box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
            margin-top: 20px;
        }
        .btn-play:hover { transform: scale(1.05); box-shadow: 0 0 25px rgba(56, 189, 248, 0.6); }
        .btn-play:active { transform: scale(0.95); }
    </style>
</head>
<body>
    <div class="header">
        <div class="title">Mjeshtri i Tingullit</div>
        <p>Eksploro valët zanore duke ndryshuar frekuencën dhe amplitudën!</p>
    </div>

    <div class="canvas-container">
        <canvas id="waveCanvas" width="600" height="200"></canvas>
    </div>

    <div class="controls">
        <div class="control-group">
            <label>Frekuenca: <span id="freq-val">440</span> Hz</label>
            <input type="range" id="freq" min="100" max="1000" value="440">
        </div>
        <div class="control-group">
            <label>Amplituda: <span id="amp-val">50</span>%</label>
            <input type="range" id="amp" min="0" max="100" value="50">
        </div>
    </div>
    
    <button class="btn-play" id="playBtn" onclick="toggleSound()">Luaj Tingullin</button>

    <script>
        const canvas = document.getElementById('waveCanvas');
        const ctx = canvas.getContext('2d');
        const freqSlider = document.getElementById('freq');
        const ampSlider = document.getElementById('amp');
        const freqVal = document.getElementById('freq-val');
        const ampVal = document.getElementById('amp-val');
        
        let audioCtx = null;
        let oscillator = null;
        let gainNode = null;
        let isPlaying = false;
        let time = 0;

        function drawWave() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const freq = parseInt(freqSlider.value);
            const amp = parseInt(ampSlider.value) / 100;
            
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);
            
            // Draw grid
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height/2); ctx.lineTo(canvas.width, canvas.height/2);
            ctx.stroke();
            
            // Draw wave
            ctx.beginPath();
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 4;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#38bdf8';
            
            for (let x = 0; x < canvas.width; x++) {
                // Map frequency to visual wave count
                const visualFreq = freq / 100; 
                const y = canvas.height / 2 + Math.sin(x * 0.05 * visualFreq + time) * (amp * 80);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
            
            if (isPlaying) time += 0.1;
            requestAnimationFrame(drawWave);
        }

        freqSlider.oninput = function() {
            freqVal.innerText = this.value;
            if (oscillator) oscillator.frequency.value = this.value;
        }
        
        ampSlider.oninput = function() {
            ampVal.innerText = this.value;
            if (gainNode) gainNode.gain.value = this.value / 100;
        }

        function toggleSound() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            const btn = document.getElementById('playBtn');
            
            if (isPlaying) {
                if (oscillator) {
                    oscillator.stop();
                    oscillator.disconnect();
                    oscillator = null;
                }
                isPlaying = false;
                btn.innerText = "Luaj Tingullin";
                btn.style.background = "var(--wave-color)";
            } else {
                oscillator = audioCtx.createOscillator();
                gainNode = audioCtx.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.value = freqSlider.value;
                gainNode.gain.value = ampSlider.value / 100;
                
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                oscillator.start();
                isPlaying = true;
                btn.innerText = "Ndal Tingullin";
                btn.style.background = "#ef4444";
            }
        }

        drawWave();
    </script>
</body>
</html>`;
}

const gamesConfig = [
    { id: 'elektriciteti', type: 'quiz', title: 'Elektriciteti', topic: 'Elektricitetin', q: [{q:"Cila është njësia e rrymës?", options:["Volt", "Amper", "Ohm", "Watt"], a:1}, {q:"Rryma është lëvizje e drejtuar e elektroneve.", type:"tf", a:true}] },
    { id: 'gjej-shkencetarin', type: 'quiz', title: 'Gjej Shkencëtarin', topic: 'Shkencëtarët', q: [{q:"Kush zbuloi ligjin e gravitetit?", options:["Einstein", "Newton", "Galileo", "Tesla"], a:1}, {q:"Tesla shpiku rrymën alternative.", type:"tf", a:true}] },
    { id: 'resistance-guard', type: 'battle', title: 'Mbrojtësi i Rezistencës', topic: 'Rezistencës' },
    { id: 'efield-explorer', type: 'map', title: 'Eksploruesi i Fushës E', topic: 'Fushës Elektrike' },
    { id: 'power-grid-master', type: 'map', title: 'Mjeshtri i Rrjetit', topic: 'Rrjetit Elektrik' },
    { id: 'voltage-stabilizer', type: 'quiz', title: 'Stabilizuesi i Tensionit', topic: 'Tensionin', q: [{q:"Njësia e tensionit është Volt.", type:"tf", a:true}, {q:"Tensioni matet me:", options:["Ampermetër", "Voltmetër", "Ohmmetër", "Termometër"], a:1}] },
    { id: 'current-master', type: 'quiz', title: 'Mjeshtri i Rrymës', topic: 'Rrymën', q: [{q:"Rryma matet me Amper.", type:"tf", a:true}, {q:"Instrumenti për matjen e rrymës:", options:["Voltmetër", "Ampermetër", "Dinamometër", "Barometër"], a:1}] },
    { id: 'capacitor-master', type: 'battle', title: 'Mjeshtri i Kondensatorëve', topic: 'Kondensatorëve' },
    { id: 'mjeshtri-tingullit', type: 'sound', title: 'Mjeshtri i Tingullit', topic: 'Tingullit' },
    { id: 'sfida-matures', type: 'map', title: 'Sfida e Maturës', topic: 'Fizikës' },
    { id: 'sti-game', type: 'battle', title: 'Beteja e Fizikes', topic: 'Fizikës' },
    { id: 'lojee-game', type: 'quiz', title: 'ElektroGame', topic: 'Elektricitetin', q: [{q:"Rryma elektrike është e rrezikshme.", type:"tf", a:true}, {q:"Materiali më i mirë përcjellës:", options:["Druri", "Plastika", "Bakri", "Goma"], a:2}] },
    { id: 'smartt-game', type: 'quiz', title: 'Laboratori i Saktësisë', topic: 'Matjeve', q: [{q:"Saktësia është e rëndësishme në fizikë.", type:"tf", a:true}, {q:"Mjeti më i saktë për gjatësi:", options:["Vizorja", "Mikrometri", "Metri shirit", "Hapi"], a:1}] },
    { id: 'electric-field-master', type: 'battle', title: 'Electric Field Master', topic: 'Fushës Elektrike' },
    { id: 'potential-master', type: 'map', title: 'Potential Master', topic: 'Potencialit' },
    { id: 'induction-master', type: 'quiz', title: 'Induction Master', topic: 'Induksionin', q: [{q:"Kush e zbuloi induksionin?", options:["Newton", "Faraday", "Ohm", "Volt"], a:1}, {q:"Induksioni krijon rrymë.", type:"tf", a:true}] },
    { id: 'flux-master', type: 'quiz', title: 'Flux Master', topic: 'Fluksin', q: [{q:"Njësia e fluksit magnetik:", options:["Tesla", "Weber", "Henry", "Farad"], a:1}, {q:"Fluksi varet nga sipërfaqja.", type:"tf", a:true}] },
    { id: 'lorentz-force-lab', type: 'map', title: 'Lorentz Force Lab', topic: 'Forcës së Lorencit' },
    { id: 'amperes-force-defender', type: 'battle', title: 'Ampere Force Defender', topic: 'Forcës së Amperit' },
    { id: 'magnetic-induction-master', type: 'quiz', title: 'Magnetic Induction', topic: 'Induksionit Magnetik', q: [{q:"Fusha magnetike matet me Tesla.", type:"tf", a:true}, {q:"Gjeneratori punon me induksion.", type:"tf", a:true}] },
    { id: 'ohms-law-challenge', type: 'quiz', title: 'Ohm Law Challenge', topic: 'Ligjit të Ohmit', q: [{q:"Formula e Ohmit:", options:["V=I/R", "V=IR", "I=VR", "R=VI"], a:1}, {q:"Rezistenca matet me Ohm.", type:"tf", a:true}] },
    { id: 'power-grid-manager', type: 'map', title: 'Power Grid Manager', topic: 'Rrjetit' },
    { id: 'capacitor-challenge', type: 'quiz', title: 'Capacitor Challenge', topic: 'Kondensatorëve', q: [{q:"Kapaciteti matet me Farad.", type:"tf", a:true}, {q:"Kondensatori ruan energji.", type:"tf", a:true}] },
    { id: 'sistemi-diellor-3d', type: 'map', title: 'Sistemi Diellor 3D', topic: 'Sistemit Diellor' }
];

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

gamesConfig.forEach(game => {
    let newHtml = '';
    if (game.type === 'quiz') newHtml = getBlackboardQuizTemplate(game.title, game.topic, game.q);
    else if (game.type === 'battle') newHtml = getBattleRPGTemplate(game.title, game.topic);
    else if (game.type === 'map') newHtml = getMapExplorerTemplate(game.title, game.topic);
    else if (game.type === 'sound') newHtml = getSoundMasterTemplate();

    const idIndex = content.indexOf(`id: "${game.id}"`);
    if (idIndex === -1) {
        console.error(`Game ${game.id} not found.`);
        return;
    }
    
    const htmlIndex = content.indexOf('html:', idIndex);
    if (htmlIndex === -1) return;
    
    let quoteChar = '';
    let stringStartIndex = -1;
    for (let i = htmlIndex + 5; i < content.length; i++) {
        if (content[i] === '`' || content[i] === '"') {
            quoteChar = content[i];
            stringStartIndex = i;
            break;
        }
    }
    
    if (stringStartIndex === -1) return;
    
    let stringEndIndex = -1;
    let isEscaped = false;
    for (let i = stringStartIndex + 1; i < content.length; i++) {
        if (content[i] === '\\' && !isEscaped) {
            isEscaped = true;
        } else {
            if (content[i] === quoteChar && !isEscaped) {
                stringEndIndex = i;
                break;
            }
            isEscaped = false;
        }
    }
    
    if (stringEndIndex === -1) return;
    
    const escapedNewHtml = newHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    content = content.substring(0, stringStartIndex) + '`' + escapedNewHtml + '`' + content.substring(stringEndIndex + 1);
    console.log(`Updated ${game.id}`);
});

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
