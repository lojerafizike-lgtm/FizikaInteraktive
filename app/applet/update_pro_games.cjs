const fs = require('fs');

const ohmsLawHTML = `<!DOCTYPE html>
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
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
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
            display: flex;
            align-items: center;
            justify-content: center;
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
            background: #10b981; color: white; padding: 10px 20px; border-radius: 30px;
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

        @media (max-width: 600px) {
            #game-wrapper { height: 100vh; border-radius: 0; }
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

    let cw, ch;
    function resize() {
        cw = document.getElementById('canvas-container').clientWidth;
        ch = document.getElementById('canvas-container').clientHeight;
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
        if(nx < 0 || ny < 0 || nx+P_SIZE > cw || ny+P_SIZE > ch) return false;
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

    function btnMove(dx, dy) { doMove(dx, dy); }

    window.addEventListener('keydown', e => {
        if(e.key==='w' || e.key==='ArrowUp') doMove(0,-1);
        if(e.key==='s' || e.key==='ArrowDown') doMove(0,1);
        if(e.key==='a' || e.key==='ArrowLeft') doMove(-1,0);
        if(e.key==='d' || e.key==='ArrowRight') doMove(1,0);
    });

    startLevel(0);
</script>
</body>
</html>`;

const capacitorHTML = `<!DOCTYPE html>
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
    
    function loadLevel() {
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

    function toggleCap(btn, val, id) {
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

    function setMode(m) {
        mode = m;
        document.getElementById('btnParalel').classList.toggle('active', m === 'P');
        document.getElementById('btnSeries').classList.toggle('active', m === 'S');
    }

    function checkAnswer() {
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
        
        // rounded to 2 decimals
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
</html>`;

const powerGridHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menaxheri i Rrjetit</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body { margin:0; padding:20px; font-family:'Roboto Mono', monospace; background:#111827; color:#f3f4f6; overflow-x:hidden; }
        .dashboard { max-width:800px; margin:0 auto; background:#1f2937; border-radius:12px; padding:20px; border: 1px solid #374151; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .header { display:flex; justify-content:space-between; border-bottom:2px solid #374151; padding-bottom:15px; margin-bottom:20px; }
        .header h1 { margin:0; font-size:24px; color:#10b981; text-transform:uppercase; letter-spacing:1px; }
        .header .day { font-weight:700; color:#fbbf24; }
        
        .station-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
        .city-card { background:#374151; padding:20px; border-radius:10px; border-left: 5px solid #10b981; position: relative; }
        .city-card.warning { border-left-color: #ef4444; background: #451a1a; }
        .city-name { font-weight:700; font-size:18px; margin-bottom:10px; color:#f9fafb; display:flex; justify-content:space-between; }
        
        .req-pwr { font-size:14px; color:#9ca3af; margin-bottom: 15px; }
        .req-pwr span { padding:2px 6px; background:#1f2937; border-radius:4px; font-weight:bold; color: white; }
        
        .slider-group { margin-bottom: 12px; }
        .slider-group label { display:flex; justify-content:space-between; font-size:12px; color:#9ca3af; margin-bottom:5px; }
        input[type=range] { width: 100%; cursor: pointer; accent-color: #10b981; }
        
        .actual-pwr { margin-top:15px; font-size:16px; font-weight:bold; text-align:center; padding:10px; border-radius:6px; background:#111827; transition:all 0.3s; }
        .actual-pwr.ok { color: #10b981; border: 1px solid #10b981; }
        .actual-pwr.low { color: #fbbf24; border: 1px solid #fbbf24; }
        .actual-pwr.over { color: #ef4444; border: 1px solid #ef4444; animation: pulse 1s infinite alternate; }
        
        @keyframes pulse { to { box-shadow: inset 0 0 10px #ef4444; } }

        .btn-dispatch { display:block; width:100%; padding:15px; font-size:18px; font-weight:700; background:#3b82f6; color:white; border:none; border-radius:8px; margin-top:25px; cursor:pointer; font-family:'Roboto Mono'; transition:all 0.2s; }
        .btn-dispatch:hover { background:#2563eb; }
        .btn-dispatch:disabled { background:#4b5563; color:#9ca3af; cursor:not-allowed; }

        .game-over { text-align: center; display: none; padding: 40px; }
        .game-over h2 { color: #ef4444; font-size: 32px; }
    </style>
</head>
<body>

<div class="dashboard" id="main-dash">
    <div class="header">
        <h1>Centrali Elektrik</h1>
        <div class="day">Dita <span id="day-counter">1</span></div>
    </div>
    <p style="color:#9ca3af; font-size:14px;"><strong>Misioni:</strong> Plotëso kërkesën për Fuqi (P = V &times; I) për çdo qytet pa shkaktuar mbingarkesë apo mungesë drite.</p>
    
    <div class="station-grid" id="cities"></div>

    <button class="btn-dispatch" id="btn-dispatch" onclick="nextDay()">KONFIRMO DËRGESËN</button>
</div>

<div class="dashboard game-over" id="game-over">
    <h2>Dështim i Rrjetit!</h2>
    <p>Qytetarët mbetën pa drita ose transformatorët u dogjën.</p>
    <button class="btn-dispatch" onclick="location.reload()">Ristarto</button>
</div>

<div class="dashboard game-over" id="game-win" style="display:none; border-color: #10b981;">
    <h2 style="color:#10b981">Rrjet i Stabilizuar!</h2>
    <p>Urime Inxhinier! Ke menaxhuar rrjetin në mënyrë perfekte gjatë gjithë javës.</p>
    <button class="btn-dispatch" onclick="location.reload()">Luaj Përsëri</button>
</div>

<script>
    const cityNames = ["Tirana", "Prishtina", "Shkupi"];
    let currentDay = 1;

    // Generate random requests for 3 cities
    let gridData = [];

    function generateDay() {
        const data = [];
        for(let i=0; i<3; i++) {
            // Random target power
            let pTarget = Math.floor(Math.random() * 5 + 1) * 100 * (currentDay); // 100 to 500, increasing by day
            if(pTarget > 3000) pTarget = 3000;
            data.push({
                name: cityNames[i],
                targetP: pTarget,
                v: 10,
                i: 10
            });
        }
        return data;
    }

    function renderUI() {
        document.getElementById('day-counter').innerText = currentDay;
        const container = document.getElementById('cities');
        container.innerHTML = '';
        
        let allOk = true;

        gridData.forEach((city, index) => {
            const actualP = city.v * city.i;
            let statusClass = 'ok';
            let statusText = 'STABËL';
            if(actualP < city.targetP) { statusClass = 'low'; statusText = 'MUNGESË ENERGJIE'; allOk = false; }
            if(actualP > city.targetP) { statusClass = 'over'; statusText = 'MBINGARKESË!'; allOk = false; }
            
            const card = document.createElement('div');
            card.className = 'city-card ' + (statusClass === 'over' ? 'warning' : '');
            
            card.innerHTML = `
                <div class="city-name">${city.name} <i class="fas ${statusClass === 'ok' ? 'fa-check' : 'fa-exclamation-triangle'}"></i></div>
                <div class="req-pwr">Kërkesa: <span>${city.targetP} W</span></div>
                
                <div class="slider-group">
                    <label>Tensioni (V): ${city.v} V</label>
                    <input type="range" min="10" max="100" step="10" value="${city.v}" oninput="updateVal(${index}, 'v', this.value)">
                </div>
                
                <div class="slider-group">
                    <label>Rryma (I): ${city.i} A</label>
                    <input type="range" min="1" max="50" step="1" value="${city.i}" oninput="updateVal(${index}, 'i', this.value)">
                </div>
                
                <div class="actual-pwr ${statusClass}">
                    P = ${actualP} W <br><span style="font-size:12px;font-weight:normal;">(${statusText})</span>
                </div>
            `;
            container.appendChild(card);
        });

        const btn = document.getElementById('btn-dispatch');
        if(allOk) {
            btn.disabled = false;
            btn.innerText = "KONFIRMO DËRGESËN (KALO DITËN)";
        } else {
            btn.disabled = false;
            btn.innerText = "RREGULLO RRJETIN (E RREZIKSHME)";
        }
    }

    function updateVal(index, type, val) {
        gridData[index][type] = parseInt(val);
        renderUI();
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
        renderUI();
    };

    gridData = generateDay();
    renderUI();
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
</body>
</html>`;

const ampereHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mbrojtësi i Forcës së Amperit</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap" rel="stylesheet">
    <style>
        body { margin:0; padding:0; background:#000; overflow:hidden; font-family:'Orbitron', sans-serif; color:white; user-select:none; }
        #canvas { display:block; background: radial-gradient(circle at 50% 100%, #172554, #020617); }
        .ui { position:absolute; top:20px; left:20px; right:20px; display:flex; justify-content:space-between; pointer-events:none; }
        .score { font-size:24px; color:#facc15; text-shadow: 0 0 10px rgba(250, 204, 21, 0.5); }
        .lives { font-size:24px; color:#ef4444; }
        .controls { position:absolute; bottom:30px; left:50%; transform:translateX(-50%); display:flex; gap:20px; background:rgba(15,23,42,0.8); padding:15px; border-radius:12px; border:1px solid #334155; backdrop-filter:blur(5px); }
        .control-group { display:flex; flex-direction:column; align-items:center; gap:5px; }
        .control-group label { font-size:12px; color:#94a3b8; letter-spacing:1px; }
        input[type=range] { width: 150px; accent-color: #38bdf8; cursor:pointer; }
        
        #game-over { position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); text-align:center; background:rgba(0,0,0,0.9); padding:40px; border-radius:16px; border:2px solid #ef4444; display:none; }
        h1 { margin:0 0 20px 0; font-size:36px; color:#ef4444; }
        button { background:#3b82f6; color:white; border:none; padding:12px 24px; font-size:18px; font-family:'Orbitron'; border-radius:8px; cursor:pointer; font-weight:bold; }
        button:hover { background:#2563eb; }
        
        .formula { position:absolute; top:60px; left:50%; transform:translateX(-50%); font-size:18px; color:#cbd5e1; opacity:0.8; pointer-events:none; }
    </style>
</head>
<body>

<canvas id="canvas"></canvas>

<div class="ui">
    <div class="score">Pikët: <span id="scoreVal">0</span></div>
    <div class="lives">Jetë: <span id="livesVal">3</span></div>
</div>

<div class="formula">F = I &times; L &times; B</div>

<div class="controls">
    <div class="control-group">
        <label>Rryma (I) <span id="i-val">5</span> A</label>
        <input type="range" id="inputI" min="1" max="10" value="5">
    </div>
    <div class="control-group">
        <label>Fusha Mag. (B) <span id="b-val">5</span> T</label>
        <input type="range" id="inputB" min="1" max="10" value="5">
    </div>
</div>

<div id="game-over">
    <h1>FUNDI I LOJËS</h1>
    <p style="font-size:20px; margin-bottom:30px;">Puzmat kaluan mbrojtjen tuaj.</p>
    <button onclick="location.reload()">Ristarto Mbrojtjen</button>
</div>

<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    let score = 0;
    let lives = 3;
    let isGameOver = false;
    
    const inputI = document.getElementById('inputI');
    const inputB = document.getElementById('inputB');
    const displayI = document.getElementById('i-val');
    const displayB = document.getElementById('b-val');
    
    inputI.addEventListener('input', () => displayI.innerText = inputI.value);
    inputB.addEventListener('input', () => displayB.innerText = inputB.value);

    // Defender ship
    const defender = {
        width: 100, // L
        height: 20,
        y: canvas.height - 120
    };

    let enemies = [];
    let particles = [];

    function spawnEnemy() {
        if(isGameOver) return;
        const w = 30 + Math.random()*20;
        enemies.push({
            x: Math.random() * (canvas.width - 50) + 25,
            y: -50,
            w: w, h: w,
            speed: 1 + Math.random()*2 + (score/500),
            hp: 20 + Math.random()*40 + (score/10) // Needs force to destroy
        });
        setTimeout(spawnEnemy, Math.random() * 2000 + 1000 - Math.min(score, 800));
    }

    function createExplosion(x, y) {
        for(let i=0; i<15; i++) {
            particles.push({
                x, y,
                vx: (Math.random()-0.5)*10,
                vy: (Math.random()-0.5)*10,
                life: 1,
                color: ['#38bdf8', '#facc15', '#f87171'][Math.floor(Math.random()*3)]
            });
        }
    }

    // Main loop
    function update() {
        if(isGameOver) return;
        
        ctx.clearRect(0,0,canvas.width, canvas.height);
        
        const I = parseInt(inputI.value);
        const B = parseInt(inputB.value);
        const L = defender.width / 10;
        const force = I * L * B; // The force generated by our "wire"

        // Draw Defender Field (visual representation of Force)
        const fx = canvas.width/2;
        const fh = Math.min(canvas.height, force * 4); // Force height
        
        // Draw Magnetic Field Lines based on B
        ctx.strokeStyle = `rgba(56, 189, 248, ${B/20})`;
        ctx.lineWidth = 2;
        for(let i=0; i<canvas.width; i+=40) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }

        // Draw Defender "Wire"
        ctx.fillStyle = '#facc15'; // wire
        ctx.fillRect(fx - defender.width/2, defender.y, defender.width, defender.height);
        
        // Emitting Force wave
        ctx.fillStyle = `rgba(16, 185, 129, ${force/100})`;
        ctx.beginPath();
        ctx.arc(fx, defender.y, force*1.5 + Math.sin(Date.now()/100)*10, Math.PI, 2*Math.PI);
        ctx.fill();

        // Enemies
        for(let i=enemies.length-1; i>=0; i--) {
            let e = enemies[i];
            e.y += e.speed;
            
            // Draw enemy
            ctx.fillStyle = '#ef4444';
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'red';
            ctx.fillRect(e.x - e.w/2, e.y - e.h/2, e.w, e.h);
            ctx.shadowBlur = 0;
            
            // Text HP
            ctx.fillStyle = 'white';
            ctx.font = '12px Orbitron';
            ctx.textAlign = 'center';
            ctx.fillText(Math.floor(e.hp), e.x, e.y - e.h/2 - 5);

            // Check collision with force wave
            const dist = Math.hypot(e.x - fx, e.y - defender.y);
            if(dist < force*1.5 + e.w) {
                // Apply force to enemy
                e.hp -= (force/20);
                e.y -= (force/50); // pushing back
                
                if(e.hp <= 0) {
                    createExplosion(e.x, e.y);
                    enemies.splice(i, 1);
                    score += 10;
                    document.getElementById('scoreVal').innerText = score;
                    continue;
                }
            }

            // Check passed baseline
            if(e.y > canvas.height) {
                enemies.splice(i, 1);
                lives--;
                document.getElementById('livesVal').innerText = lives;
                if(lives <= 0) {
                    isGameOver = true;
                    document.getElementById('game-over').style.display = 'block';
                }
            }
        }

        // Particles
        for(let i=particles.length-1; i>=0; i--) {
            let p = particles[i];
            p.x += p.vx; p.y += p.vy;
            p.life -= 0.05;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI*2); ctx.fill();
            ctx.globalAlpha = 1;
            if(p.life <= 0) particles.splice(i, 1);
        }

        requestAnimationFrame(update);
    }

    spawnEnemy();
    update();
</script>
</body>
</html>`;


let content = fs.readFileSync('src/gameContent.ts', 'utf8');

const encodeValue = (str) => {
    return Buffer.from(str).toString('base64');
};

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

injectBase64('ohms-law-challenge', encodeValue(ohmsLawHTML));
injectBase64('capacitor-challenge', encodeValue(capacitorHTML));
injectBase64('power-grid-manager', encodeValue(powerGridHTML));
injectBase64('amperes-force-defender', encodeValue(ampereHTML));

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
console.log('Update Pro Games was completely successful!');
