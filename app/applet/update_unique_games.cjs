const fs = require('fs');

// 1. Blackboard Quiz Theme (Inspired by Photo 1)
function getBlackboardTheme(title, topic, questions) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-yellow: #facc15;
            --board-bg: #0f766e;
            --board-border: #f59e0b;
            --text-white: #ffffff;
            --btn-blue: #3b82f6;
            --btn-red: #ef4444;
        }
        body {
            margin: 0; padding: 0; font-family: 'Nunito', sans-serif;
            background-color: var(--bg-yellow);
            display: flex; justify-content: center; align-items: center;
            min-height: 100vh; overflow: hidden;
        }
        .game-wrapper {
            background: white; border-radius: 30px; padding: 20px;
            width: 90%; max-width: 800px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            position: relative;
        }
        .top-bar {
            display: flex; justify-content: space-between; align-items: center;
            background: #f1f5f9; padding: 10px 20px; border-radius: 20px; margin-bottom: 20px;
        }
        .stats { font-size: 1.2rem; font-weight: 800; color: #334155; display: flex; gap: 15px; }
        .board-container {
            background: var(--board-border); padding: 15px; border-radius: 20px;
            position: relative;
        }
        .board {
            background: var(--board-bg); border-radius: 10px; padding: 40px 20px;
            text-align: center; color: var(--text-white); min-height: 250px;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
        }
        .question-badge {
            background: #0ea5e9; color: white; padding: 5px 15px; border-radius: 15px;
            font-size: 1rem; font-weight: 900; position: absolute; top: 25px; left: 25px;
            transform: rotate(-5deg); box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
        }
        .question-text { font-size: 1.8rem; font-weight: 800; margin-bottom: 30px; max-width: 80%; }
        .options { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }
        
        .btn-tf {
            width: 100px; height: 100px; border-radius: 50%;
            font-size: 3rem; font-weight: 900; color: white;
            border: 8px solid white; cursor: pointer;
            display: flex; justify-content: center; align-items: center;
            box-shadow: 0 8px 0 rgba(0,0,0,0.2); transition: transform 0.1s;
        }
        .btn-true { background: var(--btn-blue); }
        .btn-false { background: var(--btn-red); }
        .btn-tf:active { transform: translateY(8px); box-shadow: 0 0 0 rgba(0,0,0,0.2); }
        
        .btn-mcq {
            background: white; color: var(--board-bg); border: none;
            padding: 15px 30px; border-radius: 15px; font-size: 1.2rem; font-weight: 900;
            cursor: pointer; box-shadow: 0 6px 0 #cbd5e1; transition: transform 0.1s;
        }
        .btn-mcq:active { transform: translateY(6px); box-shadow: 0 0 0 #cbd5e1; }

        .characters {
            display: flex; justify-content: space-between; margin-top: 20px;
        }
        .char {
            width: 100px; height: 100px; background-size: contain; background-repeat: no-repeat;
        }
        .char-girl {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23fecaca"/><path d="M 20 50 Q 50 10 80 50" fill="%23ef4444"/><circle cx="35" cy="45" r="5" fill="%231e293b"/><circle cx="65" cy="45" r="5" fill="%231e293b"/><path d="M 40 65 Q 50 75 60 65" stroke="%231e293b" stroke-width="4" fill="none" stroke-linecap="round"/></svg>');
        }
        .char-monster {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="60" r="40" fill="%2386efac"/><circle cx="35" cy="50" r="8" fill="white"/><circle cx="65" cy="50" r="8" fill="white"/><circle cx="35" cy="50" r="3" fill="%231e293b"/><circle cx="65" cy="50" r="3" fill="%231e293b"/><path d="M 40 75 Q 50 85 60 75" stroke="%231e293b" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M 30 20 L 40 30 M 70 20 L 60 30" stroke="%2386efac" stroke-width="6" stroke-linecap="round"/></svg>');
        }
    </style>
</head>
<body>
    <div class="game-wrapper">
        <div class="top-bar">
            <div class="stats">❤️ <span id="lives">3</span></div>
            <div style="font-size: 1.5rem; font-weight: 900; color: #0f766e;">${title}</div>
            <div class="stats">⭐ <span id="score">0</span></div>
        </div>
        <div class="board-container">
            <div class="question-badge">Pyetja</div>
            <div class="board">
                <div class="question-text" id="q-text">Gati për të filluar?</div>
                <div class="options" id="options">
                    <button class="btn-mcq" onclick="startGame()">Fillo Lojën</button>
                </div>
            </div>
        </div>
        <div class="characters">
            <div class="char char-girl"></div>
            <div class="char char-monster"></div>
        </div>
    </div>

    <script>
        const questions = ${JSON.stringify(questions)};
        let currentQ = 0; let score = 0; let lives = 3;

        function startGame() { currentQ = 0; score = 0; lives = 3; updateUI(); nextQ(); }
        function updateUI() { document.getElementById('score').innerText = score; document.getElementById('lives').innerText = lives; }
        
        function nextQ() {
            if (lives <= 0 || currentQ >= questions.length) {
                document.getElementById('q-text').innerText = lives <= 0 ? "Lojë e Përfunduar!" : "Urime, fituat!";
                document.getElementById('options').innerHTML = '<button class="btn-mcq" onclick="startGame()">Luaj Përsëri</button>';
                return;
            }
            const q = questions[currentQ];
            document.getElementById('q-text').innerText = q.q;
            let html = '';
            if (q.type === 'tf') {
                html = \`<button class="btn-tf btn-true" onclick="check(true)">O</button>
                        <button class="btn-tf btn-false" onclick="check(false)">X</button>\`;
            } else {
                q.options.forEach((opt, i) => {
                    html += \`<button class="btn-mcq" onclick="check(\${i})">\${opt}</button>\`;
                });
            }
            document.getElementById('options').innerHTML = html;
        }

        function check(ans) {
            const q = questions[currentQ];
            if (ans === q.a) { score += 10; document.querySelector('.board').style.background = '#15803d'; } 
            else { lives--; document.querySelector('.board').style.background = '#be123c'; }
            updateUI();
            setTimeout(() => { document.querySelector('.board').style.background = 'var(--board-bg)'; currentQ++; nextQ(); }, 600);
        }
    </script>
</body>
</html>`;
}

// 2. Cute Battle Theme (Inspired by Photo 4)
function getCuteBattleTheme(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-sky: #e0f2fe;
            --bg-grass: #bbf7d0;
            --text-main: #334155;
        }
        body {
            margin: 0; padding: 0; font-family: 'Nunito', sans-serif;
            background: linear-gradient(to bottom, var(--bg-sky) 50%, var(--bg-grass) 50%);
            height: 100vh; display: flex; flex-direction: column; overflow: hidden;
        }
        .header {
            padding: 15px; text-align: center; background: rgba(255,255,255,0.8);
            font-size: 1.5rem; font-weight: 900; color: var(--text-main);
            border-bottom: 4px solid #cbd5e1;
        }
        .battle-area {
            flex: 1; display: flex; justify-content: center; align-items: center; gap: 50px;
            position: relative;
        }
        .fighter {
            display: flex; flex-direction: column; align-items: center;
        }
        .hp-bar {
            width: 120px; height: 15px; background: #e2e8f0; border-radius: 10px;
            border: 3px solid white; overflow: hidden; margin-bottom: 10px;
        }
        .hp-fill { height: 100%; background: #22c55e; width: 100%; transition: width 0.3s; }
        .char {
            width: 120px; height: 120px; background-size: contain; background-repeat: no-repeat;
            transition: transform 0.2s; position: relative;
        }
        .char-player {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="60" r="35" fill="white"/><circle cx="35" cy="55" r="4" fill="%231e293b"/><circle cx="65" cy="55" r="4" fill="%231e293b"/><path d="M 45 65 Q 50 70 55 65" stroke="%231e293b" stroke-width="3" fill="none"/><path d="M 80 40 L 90 20 M 80 40 L 95 40 M 80 40 L 90 60" stroke="%233b82f6" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="60" x2="80" y2="40" stroke="%233b82f6" stroke-width="4"/></svg>');
        }
        .char-enemy {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="60" r="35" fill="white"/><circle cx="35" cy="55" r="4" fill="%231e293b"/><circle cx="65" cy="55" r="4" fill="%231e293b"/><path d="M 45 65 Q 50 70 55 65" stroke="%231e293b" stroke-width="3" fill="none"/><path d="M 20 40 L 10 20 M 20 40 L 5 40 M 20 40 L 10 60" stroke="%23ef4444" stroke-width="4" stroke-linecap="round"/><line x1="50" y1="60" x2="20" y2="40" stroke="%23ef4444" stroke-width="4"/></svg>');
            transform: scaleX(-1);
        }
        .ui-panel {
            background: #f8fafc; border-top: 4px solid #cbd5e1; padding: 20px;
            display: flex; flex-direction: column; align-items: center;
        }
        .question { font-size: 1.5rem; font-weight: 800; margin-bottom: 20px; text-align: center; }
        .actions { display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; }
        .btn-action {
            background: white; border: 3px solid #cbd5e1; padding: 15px 25px;
            border-radius: 15px; font-size: 1.2rem; font-weight: 800; color: var(--text-main);
            cursor: pointer; box-shadow: 0 4px 0 #cbd5e1; transition: transform 0.1s;
        }
        .btn-action:active { transform: translateY(4px); box-shadow: 0 0 0 #cbd5e1; }
        .shake { animation: shake 0.4s; }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
    </style>
</head>
<body>
    <div class="header">${title}</div>
    <div class="battle-area">
        <div class="fighter">
            <div class="hp-bar"><div class="hp-fill" id="p-hp"></div></div>
            <div class="char char-player" id="p-char"></div>
        </div>
        <div class="fighter">
            <div class="hp-bar"><div class="hp-fill" id="e-hp"></div></div>
            <div class="char char-enemy" id="e-char"></div>
        </div>
    </div>
    <div class="ui-panel">
        <div class="question" id="q-text">Zgjidhni një veprim!</div>
        <div class="actions" id="actions">
            <button class="btn-action" onclick="startGame()">Fillo Betejën</button>
        </div>
    </div>

    <script>
        let php = 100, ehp = 100, currQ = 0;
        const questions = [
            { q: "Cila është njësia e ${topic}?", opts: ["Joule", "Newton", "Watt", "Volt"], a: 0 },
            { q: "Formula kryesore?", opts: ["F=ma", "E=mc²", "V=IR", "P=VI"], a: 1 },
            { q: "Kush e zbuloi?", opts: ["Newton", "Einstein", "Tesla", "Faraday"], a: 2 }
        ];

        function updateHP() {
            document.getElementById('p-hp').style.width = php + '%';
            document.getElementById('e-hp').style.width = ehp + '%';
        }

        function startGame() { php = 100; ehp = 100; currQ = 0; updateHP(); nextTurn(); }

        function nextTurn() {
            if (php <= 0 || ehp <= 0) {
                document.getElementById('q-text').innerText = php <= 0 ? "Humbët!" : "Fitore!";
                document.getElementById('actions').innerHTML = '<button class="btn-action" onclick="startGame()">Luaj Përsëri</button>';
                return;
            }
            const q = questions[currQ % questions.length];
            document.getElementById('q-text').innerText = q.q;
            let html = '';
            q.opts.forEach((opt, i) => {
                html += \`<button class="btn-action" onclick="attack(\${i === q.a})">\${opt}</button>\`;
            });
            document.getElementById('actions').innerHTML = html;
        }

        function attack(correct) {
            if (correct) {
                document.getElementById('p-char').style.transform = 'translateX(30px)';
                setTimeout(() => {
                    document.getElementById('p-char').style.transform = 'translateX(0)';
                    ehp -= 34; document.getElementById('e-char').classList.add('shake');
                    setTimeout(() => document.getElementById('e-char').classList.remove('shake'), 400);
                    updateHP(); currQ++; setTimeout(nextTurn, 800);
                }, 200);
            } else {
                document.getElementById('e-char').style.transform = 'scaleX(-1) translateX(30px)';
                setTimeout(() => {
                    document.getElementById('e-char').style.transform = 'scaleX(-1) translateX(0)';
                    php -= 34; document.getElementById('p-char').classList.add('shake');
                    setTimeout(() => document.getElementById('p-char').classList.remove('shake'), 400);
                    updateHP(); currQ++; setTimeout(nextTurn, 800);
                }, 200);
            }
        }
    </script>
</body>
</html>`;
}

// 3. Map Explorer Theme (Inspired by Photo 2)
function getMapTheme(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;900&display=swap" rel="stylesheet">
    <style>
        :root { --bg-water: #3b82f6; --bg-land: #22c55e; --text-main: #1e293b; }
        body {
            margin: 0; padding: 0; font-family: 'Nunito', sans-serif;
            background-color: var(--bg-water); height: 100vh; display: flex; flex-direction: column;
            overflow: hidden;
        }
        .header {
            background: white; padding: 15px 20px; display: flex; justify-content: space-between;
            align-items: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); z-index: 10;
        }
        .title { font-size: 1.5rem; font-weight: 900; color: var(--text-main); }
        .map-area {
            flex: 1; position: relative; background: var(--bg-land);
            clip-path: polygon(0 10%, 100% 0, 100% 80%, 0 100%);
            margin: 20px; border-radius: 20px; box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
        }
        .pin {
            position: absolute; width: 40px; height: 40px;
            background: #ef4444; border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg); display: flex; justify-content: center; align-items: center;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.3); cursor: pointer; transition: transform 0.2s;
        }
        .pin::after {
            content: ''; width: 14px; height: 14px; background: white;
            border-radius: 50%; position: absolute;
        }
        .pin:hover { transform: rotate(-45deg) scale(1.2); }
        .pin.locked { background: #94a3b8; cursor: not-allowed; }
        .pin.done { background: #3b82f6; }
        .pin.active { animation: bounce 1s infinite; }
        
        @keyframes bounce { 0%, 100% { transform: rotate(-45deg) translateY(0); } 50% { transform: rotate(-45deg) translateY(-10px); } }
        
        .modal {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); display: none; justify-content: center; align-items: center; z-index: 20;
        }
        .modal-content {
            background: white; padding: 30px; border-radius: 20px; text-align: center;
            width: 90%; max-width: 400px; border: 4px solid #cbd5e1;
        }
        .btn {
            background: #3b82f6; color: white; border: none; padding: 10px 20px;
            border-radius: 10px; font-size: 1.2rem; font-weight: 800; cursor: pointer;
            width: 100%; margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="title">${title}</div>
        <div style="font-weight: 900; color: #059669;">Niveli <span id="lvl">1</span>/4</div>
    </div>
    <div class="map-area" id="map">
        <!-- Pins added via JS -->
    </div>
    <div class="modal" id="modal">
        <div class="modal-content">
            <h2 id="m-title">Sfidë</h2>
            <p>Zgjidh sfidën e ${topic} për të vazhduar.</p>
            <button class="btn" onclick="complete()">Përfundo</button>
            <button class="btn" style="background: #ef4444;" onclick="closeModal()">Mbyll</button>
        </div>
    </div>
    <script>
        const pins = [{x:20, y:30}, {x:40, y:60}, {x:60, y:20}, {x:80, y:70}];
        let curr = 1;
        function render() {
            const map = document.getElementById('map');
            map.innerHTML = '';
            pins.forEach((p, i) => {
                const id = i + 1;
                const div = document.createElement('div');
                div.className = 'pin ' + (id < curr ? 'done' : id === curr ? 'active' : 'locked');
                div.style.left = p.x + '%'; div.style.top = p.y + '%';
                if (id === curr) div.onclick = () => openModal(id);
                map.appendChild(div);
            });
            document.getElementById('lvl').innerText = Math.min(curr, 4);
        }
        function openModal(id) { document.getElementById('m-title').innerText = 'Niveli ' + id; document.getElementById('modal').style.display = 'flex'; }
        function closeModal() { document.getElementById('modal').style.display = 'none'; }
        function complete() { curr++; closeModal(); render(); if(curr > 4) setTimeout(() => alert('Urime! Harta u përfundua!'), 300); }
        render();
    </script>
</body>
</html>`;
}

// 4. Vertical Collector Theme (Inspired by Photo 3)
function getCollectorTheme(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;800;900&display=swap" rel="stylesheet">
    <style>
        :root { --bg-sky: #e0f2fe; --text-main: #334155; }
        body { margin: 0; padding: 0; font-family: 'Nunito', sans-serif; background: var(--bg-sky); height: 100vh; display: flex; flex-direction: column; }
        .scene { height: 40%; background: linear-gradient(to bottom, #bae6fd, #7dd3fc); position: relative; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 20px; }
        .car {
            width: 150px; height: 100px; background: #facc15; border-radius: 40px 40px 10px 10px;
            position: relative; border: 4px solid #1e293b; box-shadow: 0 10px 0 rgba(0,0,0,0.1);
            animation: drive 2s infinite alternate ease-in-out;
        }
        .wheel { width: 30px; height: 30px; background: #1e293b; border-radius: 50%; position: absolute; bottom: -15px; border: 4px solid white; }
        .w1 { left: 20px; } .w2 { right: 20px; }
        .window { width: 80px; height: 40px; background: #bae6fd; border-radius: 20px 20px 0 0; position: absolute; top: 10px; left: 35px; border: 4px solid #1e293b; }
        @keyframes drive { 0% { transform: translateY(0); } 100% { transform: translateY(-5px); } }
        
        .inventory { flex: 1; background: white; border-radius: 30px 30px 0 0; padding: 20px; box-shadow: 0 -5px 20px rgba(0,0,0,0.1); overflow-y: auto; }
        .title { font-size: 1.5rem; font-weight: 900; text-align: center; margin-bottom: 20px; color: var(--text-main); }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 15px; }
        .item {
            background: #f1f5f9; border-radius: 15px; padding: 15px; text-align: center;
            cursor: pointer; transition: transform 0.2s; border: 2px solid transparent;
        }
        .item:hover { transform: translateY(-5px); border-color: #3b82f6; }
        .item-icon { font-size: 2.5rem; margin-bottom: 10px; }
        .item-name { font-weight: 800; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="scene">
        <div class="car">
            <div class="window"></div>
            <div class="wheel w1"></div><div class="wheel w2"></div>
        </div>
    </div>
    <div class="inventory">
        <div class="title">${title}</div>
        <div class="grid" id="grid">
            <!-- Items via JS -->
        </div>
    </div>
    <script>
        const items = ['Einstein', 'Newton', 'Tesla', 'Faraday', 'Curie', 'Galileo'];
        const grid = document.getElementById('grid');
        items.forEach(item => {
            const div = document.createElement('div'); div.className = 'item';
            div.innerHTML = \`<div class="item-icon">👨‍🔬</div><div class="item-name">\${item}</div>\`;
            div.onclick = () => { alert('Zbuluat: ' + item); div.style.background = '#dcfce3'; };
            grid.appendChild(div);
        });
    </script>
</body>
</html>`;
}

// 5. Sound Master Custom Theme
function getSoundMasterCustom() {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mjeshtri i Tingullit</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; padding: 20px; font-family: 'Orbitron', sans-serif; background: #0f172a; color: #38bdf8; display: flex; flex-direction: column; align-items: center; min-height: 100vh; }
        .dj-board { background: #1e293b; padding: 30px; border-radius: 20px; border: 2px solid #38bdf8; box-shadow: 0 0 30px rgba(56,189,248,0.2); width: 100%; max-width: 600px; text-align: center; }
        h1 { margin-top: 0; font-weight: 900; text-shadow: 0 0 10px #38bdf8; }
        canvas { background: #020617; border-radius: 10px; width: 100%; height: 150px; margin-bottom: 20px; border: 1px solid #334155; }
        .sliders { display: flex; justify-content: space-around; margin-bottom: 30px; }
        .slider-col { display: flex; flex-direction: column; align-items: center; }
        input[type=range] { -webkit-appearance: none; width: 150px; background: #334155; height: 6px; border-radius: 3px; outline: none; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #38bdf8; cursor: pointer; box-shadow: 0 0 10px #38bdf8; }
        .btn { background: transparent; border: 2px solid #38bdf8; color: #38bdf8; padding: 15px 40px; font-size: 1.2rem; font-family: 'Orbitron'; font-weight: 700; border-radius: 30px; cursor: pointer; transition: all 0.2s; text-transform: uppercase; }
        .btn:hover { background: #38bdf8; color: #0f172a; box-shadow: 0 0 20px #38bdf8; }
    </style>
</head>
<body>
    <div class="dj-board">
        <h1>Mjeshtri i Tingullit</h1>
        <canvas id="wave"></canvas>
        <div class="sliders">
            <div class="slider-col">
                <label>Frekuenca: <span id="fv">440</span></label>
                <input type="range" id="f" min="100" max="1000" value="440">
            </div>
            <div class="slider-col">
                <label>Amplituda: <span id="av">50</span></label>
                <input type="range" id="a" min="0" max="100" value="50">
            </div>
        </div>
        <button class="btn" id="play" onclick="toggle()">Play</button>
    </div>
    <script>
        const cvs = document.getElementById('wave'), ctx = cvs.getContext('2d');
        cvs.width = 600; cvs.height = 150;
        let actx, osc, gain, play = false, t = 0;
        
        function draw() {
            ctx.clearRect(0,0,cvs.width,cvs.height);
            const f = document.getElementById('f').value, a = document.getElementById('a').value/100;
            ctx.beginPath(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 3; ctx.shadowBlur = 10; ctx.shadowColor = '#38bdf8';
            for(let x=0; x<cvs.width; x++) {
                const y = cvs.height/2 + Math.sin(x*0.05*(f/100) + t) * (a*60);
                if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
            }
            ctx.stroke(); ctx.shadowBlur = 0;
            if(play) t+=0.1; requestAnimationFrame(draw);
        }
        
        document.getElementById('f').oninput = e => { document.getElementById('fv').innerText = e.target.value; if(osc) osc.frequency.value = e.target.value; };
        document.getElementById('a').oninput = e => { document.getElementById('av').innerText = e.target.value; if(gain) gain.gain.value = e.target.value/100; };
        
        function toggle() {
            if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
            const btn = document.getElementById('play');
            if(play) { osc.stop(); osc.disconnect(); osc=null; play=false; btn.innerText='Play'; btn.style.background='transparent'; btn.style.color='#38bdf8'; }
            else {
                osc = actx.createOscillator(); gain = actx.createGain();
                osc.frequency.value = document.getElementById('f').value; gain.gain.value = document.getElementById('a').value/100;
                osc.connect(gain); gain.connect(actx.destination); osc.start();
                play=true; btn.innerText='Stop'; btn.style.background='#ef4444'; btn.style.color='white'; btn.style.borderColor='#ef4444';
            }
        }
        draw();
    </script>
</body>
</html>`;
}

const gamesConfig = [
    { id: 'elektriciteti', type: 'quiz', title: 'Elektriciteti', topic: 'Elektricitetin', q: [{q:"Cila është njësia e rrymës?", options:["Volt", "Amper", "Ohm", "Watt"], a:1}, {q:"Rryma është lëvizje e drejtuar e elektroneve.", type:"tf", a:true}] },
    { id: 'gjej-shkencetarin', type: 'collector', title: 'Gjej Shkencëtarin', topic: 'Shkencëtarët' },
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
    if (game.type === 'quiz') newHtml = getBlackboardTheme(game.title, game.topic, game.q);
    else if (game.type === 'battle') newHtml = getCuteBattleTheme(game.title, game.topic);
    else if (game.type === 'map') newHtml = getMapTheme(game.title, game.topic);
    else if (game.type === 'collector') newHtml = getCollectorTheme(game.title, game.topic);
    else if (game.type === 'sound') newHtml = getSoundMasterCustom();

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
