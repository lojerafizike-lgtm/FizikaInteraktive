const fs = require('fs');

const htmls = {
    'capacitor-master': \`<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Capacitor Master - Fizika Lab</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #1a1a2e;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }

        #game-ui {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            backdrop-filter: blur(5px);
            border: 1px solid #4e4e6a;
            margin-bottom: 20px;
            width: 600px;
            display: flex;
            justify-content: space-between;
        }

        canvas {
            background: #16213e;
            border: 3px solid #0f3460;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,210,255,0.2);
        }

        .stat-box { text-align: center; }
        .stat-value { font-size: 24px; font-weight: bold; color: #00d2ff; }
        .controls { margin-top: 15px; color: #aaa; font-size: 0.8rem; }
        
        #message {
            position: absolute;
            top: 20%;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(0,0,0,0.5);
            pointer-events: none;
        }
    </style>
</head>
<body>

    <div id="game-ui">
        <div class="stat-box">
            <div>Kapaciteti (C)</div>
            <div id="cap-val" class="stat-value">0</div>
        </div>
        <div class="stat-box">
            <div>Ngarkesa (Q)</div>
            <div id="charge-val" class="stat-value">0</div>
        </div>
        <div class="stat-box">
            <div>Energjia (W)</div>
            <div id="energy-val" class="stat-value">0</div>
        </div>
    </div>

    <div id="message"></div>
    <canvas id="capCanvas" width="700" height="400"></canvas>

    <div class="controls">
        Lëviz MIUN lart/poshtë për të ndryshuar distancën (d) | Mbaj shtypur BUTONIN e miut për të shtuar dielektrikun (ε)
    </div>

    <script>
        const canvas = document.getElementById('capCanvas');
        const ctx = canvas.getContext('2d');
        const capDisp = document.getElementById('cap-val');
        const qDisp = document.getElementById('charge-val');
        const wDisp = document.getElementById('energy-val');
        const msgDisp = document.getElementById('message');

        let d = 100; // Distanca mes pllakave
        let epsilon = 1; // Dielektriku
        let area = 200; // Sipërfaqja e pllakave
        let charge = 0;
        let isPressing = false;

        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            let mouseY = e.clientY - rect.top;
            // Ndryshimi i distancës d bazuar në lartësinë e miut
            d = Math.max(20, Math.min(180, mouseY - 100));
        });

        window.addEventListener('mousedown', () => isPressing = true);
        window.addEventListener('mouseup', () => isPressing = false);

        function update() {
            // Formula: C = ε * (A / d)
            if (isPressing) epsilon = Math.min(5, epsilon + 0.05);
            else epsilon = Math.max(1, epsilon - 0.05);

            let C = (epsilon * area) / d;
            
            // Ngarkesa rritet gradualisht nëse kapaciteti është i lartë
            charge += C * 0.01;
            
            // Energjia: W = 0.5 * Q^2 / C
            let W = 0.5 * (charge * charge) / C;

            // UI Update
            capDisp.innerText = C.toFixed(1) + " μF";
            qDisp.innerText = charge.toFixed(0) + " nC";
            wDisp.innerText = W.toFixed(0) + " J";

            // Kushti i humbjes (Mbingarkesa)
            if (W > 5000) {
                msgDisp.innerText = "KONDENSATORI SHPËRTHEU! 💥";
                msgDisp.style.color = "#ff4d4d";
                charge = 0;
                setTimeout(() => msgDisp.innerText = "", 2000);
            } else if (W > 3000) {
                msgDisp.innerText = "QYTETI U NNDIZ! ⚡🏙️";
                msgDisp.style.color = "#00ff88";
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            let centerY = canvas.height / 2;
            let plateWidth = 300;
            let startX = (canvas.width - plateWidth) / 2;

            // Vizatimi i Dielektrikut (mushkëria mes pllakave)
            ctx.fillStyle = \\\`rgba(0, 210, 255, \\\${epsilon / 10})\\\`;
            ctx.fillRect(startX, centerY - d/2, plateWidth, d);

            // Pllaka e sipërme (Pozitive)
            ctx.fillStyle = "#ff4d4d";
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#ff4d4d";
            ctx.fillRect(startX, centerY - d/2 - 10, plateWidth, 10);

            // Pllaka e poshtme (Negative)
            ctx.fillStyle = "#4d79ff";
            ctx.shadowColor = "#4d79ff";
            ctx.fillRect(startX, centerY + d/2, plateWidth, 10);
            
            // Vizatimi i ngarkesave (Grimcat që lëvizin)
            ctx.shadowBlur = 0;
            ctx.fillStyle = "white";
            for(let i=0; i < charge/10; i++) {
                let rx = startX + (Math.random() * plateWidth);
                let ry = (centerY - d/2 - 5) + (Math.random() > 0.5 ? 0 : d + 10);
                ctx.beginPath();
                ctx.arc(rx, ry, 2, 0, Math.PI*2);
                ctx.fill();
            }

            // Etiketat e formulës
            ctx.fillStyle = "#aaa";
            ctx.font = "12px Arial";
            ctx.fillText("Distanca (d): " + d.toFixed(0) + "px", 20, 380);
            ctx.fillText("Permitiviteti (ε): " + epsilon.toFixed(1), 200, 380);
        }

        function loop() {
            update();
            draw();
            requestAnimationFrame(loop);
        }

        loop();
    </script>
</body>
</html>\`,
    'current-master': \`<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Current Master - Intensitetit i Rrymës</title>
    <style>
        body { background: #1a1a2e; color: #fff; font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; }
        #game-container { position: relative; border: 3px solid #16213e; border-radius: 20px; background: #0f3460; padding: 20px; box-shadow: 0 0 20px rgba(0,255,255,0.2); }
        canvas { background: #16213e; border-radius: 10px; }
        .controls { display: flex; gap: 20px; margin-top: 20px; background: #16213e; padding: 20px; border-radius: 10px; }
        .stat-box { text-align: center; min-width: 100px; }
        .amp-meter { font-size: 24px; color: #00d2ff; font-weight: bold; }
        input[type=range] { cursor: pointer; }
        .target-box { color: #e94560; font-weight: bold; font-size: 1.2em; }
        button { padding: 10px 25px; background: #e94560; border: none; color: white; border-radius: 5px; cursor: pointer; font-weight: bold; }
        button:hover { background: #ff4d6d; }
    </style>
</head>
<body>

    <h1>⚡ Current Master ⚡</h1>
    <p>Gjej Intensitetin e duhur ($I$) për të ndezur pajisjen pa e djegur atë!</p>

    <div id="game-container">
        <div style="display:flex; justify-content: space-between; margin-bottom: 10px;">
            <div class="target-box" id="targetDisplay">Target: 2.50 A</div>
            <div id="scoreDisplay">Pikët: 0</div>
        </div>
        <canvas id="circuitCanvas" width="500" height="250"></canvas>
        <div class="amp-meter" id="currentDisplay">I = 0.00 A</div>
    </div>

    <div class="controls">
        <div class="stat-box">
            <label>Tensioni (U): <span id="uVal">10</span>V</label><br>
            <input type="range" id="uInput" min="1" max="50" value="10">
        </div>
        <div class="stat-box">
            <label>Rezistenca (R): <span id="rVal">10</span>Ω</label><br>
            <input type="range" id="rInput" min="1" max="50" value="10">
        </div>
        <button onclick="checkCircuit()">AKTIVIZO</button>
    </div>

    <script>
        const canvas = document.getElementById('circuitCanvas');
        const ctx = canvas.getContext('2d');
        
        let targetI = (Math.random() * 4 + 0.5).toFixed(2);
        let score = 0;
        let particles = [];

        function updateUI() {
            let u = document.getElementById('uInput').value;
            let r = document.getElementById('rInput').value;
            let i = u / r;
            
            document.getElementById('uVal').innerText = u;
            document.getElementById('rVal').innerText = r;
            document.getElementById('currentDisplay').innerText = \\\`I = \\\${i.toFixed(2)} A\\\`;
            document.getElementById('targetDisplay').innerText = \\\`Target: \\\${targetI} A\\\`;
            return i;
        }

        function drawCircuit() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "#4ecca3";
            ctx.lineWidth = 4;

            // Vizatimi i qarkut (katror)
            ctx.strokeRect(100, 50, 300, 150);

            // Bateria (U)
            ctx.fillStyle = "#16213e";
            ctx.fillRect(80, 100, 40, 50);
            ctx.fillStyle = "#fff";
            ctx.fillText("U", 95, 130);

            // Rezistenca (R)
            ctx.fillStyle = "#e94560";
            ctx.fillRect(225, 40, 50, 20);
            ctx.fillStyle = "#fff";
            ctx.fillText("R", 245, 35);

            // Animacioni i rrymës (elektronet)
            let i = updateUI();
            if (particles.length < i * 20) {
                particles.push({pos: 0, speed: i * 2});
            }
            if (particles.length > i * 20) particles.pop();

            ctx.fillStyle = "#00d2ff";
            particles.forEach(p => {
                p.pos += p.speed;
                if (p.pos > 900) p.pos = 0;

                let x, y;
                if (p.pos < 300) { x = 100 + p.pos; y = 50; }
                else if (p.pos < 450) { x = 400; y = 50 + (p.pos-300); }
                else if (p.pos < 750) { x = 400 - (p.pos-450); y = 200; }
                else { x = 100; y = 200 - (p.pos-750); }
                
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI*2);
                ctx.fill();
            });

            requestAnimationFrame(drawCircuit);
        }

        function checkCircuit() {
            let currentI = updateUI();
            let diff = Math.abs(currentI - targetI);

            if (diff < 0.1) {
                alert("SUKSES! Intensiteti është perfekt.");
                score++;
                targetI = (Math.random() * 4 + 0.5).toFixed(2);
                document.getElementById('scoreDisplay').innerText = \\\`Pikët: \\\${score}\\\`;
            } else if (currentI > targetI) {
                alert("BOOM! Rryma është shumë e lartë, dogje pajisjen!");
                score = 0;
                document.getElementById('scoreDisplay').innerText = \\\`Pikët: \\\${score}\\\`;
            } else {
                alert("Shumë dobët... Pajisja nuk ndizet.");
            }
        }

        drawCircuit();
    </script>
</body>
</html>\`,
    'voltage-stabilizer': \`<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Voltage Stabilizer - Loja e Tensionit</title>
    <style>
        :root { --volt-color: #ffd700; --bg-dark: #121212; }
        body { background: var(--bg-dark); color: white; font-family: 'Arial', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        #game-container { background: #222; padding: 30px; border-radius: 20px; border: 4px solid #444; box-shadow: 0 0 50px rgba(255, 215, 0, 0.1); width: 500px; text-align: center; }
        .voltmeter { background: #000; padding: 20px; border-radius: 50% 50% 0 0; border: 5px solid #666; position: relative; height: 120px; overflow: hidden; }
        #needle { width: 4px; height: 100px; background: red; position: absolute; bottom: 0; left: 50%; transform-origin: bottom; transform: rotate(-90deg); transition: 0.2s; }
        .screen { background: #1a1a1a; padding: 15px; margin: 20px 0; border-radius: 10px; font-family: 'Courier New', monospace; font-size: 24px; color: #0f0; border: 2px solid #333; }
        .controls { display: flex; flex-direction: column; gap: 15px; margin-top: 20px; }
        input[type=range] { width: 100%; cursor: pointer; accent-color: var(--volt-color); }
        .device-icon { font-size: 50px; margin-bottom: 10px; transition: 0.3s; }
        button { padding: 12px; background: var(--volt-color); border: none; color: #000; font-weight: bold; border-radius: 8px; cursor: pointer; }
        button:hover { transform: scale(1.05); }
        .target-info { color: #aaa; font-size: 0.9em; margin-bottom: 5px; }
    </style>
</head>
<body>

    <div id="game-container">
        <h2>⚡ VOLTAGE STABILIZER ⚡</h2>
        <div class="target-info">Pajisja kërkon saktësisht: <b id="targetU">220</b> V</div>
        
        <div class="voltmeter">
            <div id="needle"></div>
        </div>

        <div class="device-icon" id="device">📺</div>
        
        <div class="screen">
            <span id="displayU">0</span> VOLT
        </div>

        <div class="controls">
            <label>Rregullo Transformatorin (U):</label>
            <input type="range" id="uSlider" min="0" max="400" value="0" oninput="updateVoltage()">
            <button onclick="checkVoltage()">NDIZ PAJISJEN</button>
        </div>
        <p id="message" style="margin-top: 15px; font-weight: bold;"></p>
    </div>

    <script>
        let targetVoltage = 220;
        let currentLevel = 1;
        const devices = ["📺", "💻", "💡", "🚀", "🤖"];

        function updateVoltage() {
            const val = document.getElementById('uSlider').value;
            document.getElementById('displayU').innerText = val;
            
            // Lëvizja e gjilpërës së Voltmetrit
            // Map 0-400 në -90 deri në 90 gradë
            const angle = (val / 400) * 180 - 90;
            document.getElementById('needle').style.transform = \\\`translateX(-50%) rotate(\\\${angle}deg)\\\`;
            
            // Efekti vizual i pajisjes
            const device = document.getElementById('device');
            if (val > targetVoltage + 20) {
                device.style.filter = "drop-shadow(0 0 10px red) saturate(2)";
            } else if (val < targetVoltage - 20) {
                device.style.filter = "grayscale(1)";
            } else {
                device.style.filter = "drop-shadow(0 0 15px yellow)";
            }
        }

        function checkVoltage() {
            const val = parseInt(document.getElementById('uSlider').value);
            const msg = document.getElementById('message');
            const diff = Math.abs(val - targetVoltage);

            if (diff <= 5) {
                msg.style.color = "#4ade80";
                msg.innerText = "PERFEKT! Pajisja punon me efikasitet maksimal.";
                nextLevel();
            } else if (val > targetVoltage) {
                msg.style.color = "#f87171";
                msg.innerText = "BOOM! Tensioni shumë i lartë. Pajisja u dogj!";
                resetGame();
            } else {
                msg.style.color = "#fbbf24";
                msg.innerText = " Tension i ulët. Pajisja nuk ka fuqi të ndizet.";
            }
        }

        function nextLevel() {
            currentLevel++;
            targetVoltage = Math.floor(Math.random() * 300) + 50;
            document.getElementById('targetU').innerText = targetVoltage;
            document.getElementById('device').innerText = devices[currentLevel % devices.length];
            document.getElementById('uSlider').value = 0;
            updateVoltage();
        }

        function resetGame() {
            currentLevel = 1;
            targetVoltage = 220;
            document.getElementById('targetU').innerText = targetVoltage;
            document.getElementById('device').innerText = devices[0];
            document.getElementById('uSlider').value = 0;
            updateVoltage();
        }

        updateVoltage();
    </script>
</body>
</html>\`,
    'power-grid-master': \`<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Power Grid Master - Fuqia Elektrike</title>
    <style>
        body { background: #0f172a; color: #f8fafc; font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; padding: 20px; }
        #game-board { background: #1e293b; border: 4px solid #38bdf8; border-radius: 20px; padding: 25px; box-shadow: 0 0 30px rgba(56, 189, 248, 0.2); width: 650px; }
        canvas { background: #020617; border-radius: 10px; margin-bottom: 20px; width: 100%; }
        .ui-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat-card { background: #334155; padding: 15px; border-radius: 12px; text-align: center; }
        .power-value { font-size: 2em; font-weight: bold; color: #fbbf24; }
        .slider-group { margin: 15px 0; }
        input[type=range] { width: 100%; cursor: pointer; accent-color: #38bdf8; }
        button { grid-column: span 2; padding: 15px; background: #0ea5e9; border: none; color: white; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 1.1em; transition: 0.3s; }
        button:hover { background: #0284c7; transform: scale(1.02); }
        .alert { color: #f87171; font-weight: bold; margin-top: 10px; display: none; }
    </style>
</head>
<body>

    <h1>🏙️ Power Grid Master</h1>
    <p>Rregullo Tensionin ($U$) dhe Rrymën ($I$) për të plotësuar nevojat e qytetit!</p>

    <div id="game-board">
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
            <div>Niveli: <span id="level">1</span></div>
            <div style="color: #4ade80;">Maksimumi i Sigurt: <span id="maxP">2500</span> W</div>
        </div>

        <canvas id="powerCanvas" width="600" height="150"></canvas>

        <div class="ui-grid">
            <div class="stat-card">
                <div>Kërkesa e Qytetit</div>
                <div class="power-value" id="targetP">1200 W</div>
            </div>
            <div class="stat-card">
                <div>Fuqia Juaj (P)</div>
                <div class="power-value" id="currentP">0 W</div>
            </div>
            
            <div class="slider-group">
                <label>Tensioni (U): <span id="uVal">120</span> V</label>
                <input type="range" id="uInput" min="10" max="240" value="120" oninput="calculatePower()">
            </div>
            <div class="slider-group">
                <label>Intensiteti (I): <span id="iVal">10</span> A</label>
                <input type="range" id="iInput" min="1" max="50" value="10" oninput="calculatePower()">
            </div>

            <button onclick="supplyPower()">DËRGO ENERGJINË</button>
        </div>
        <div id="alertMsg" class="alert">⚠️ KUJDES: Mbingarkesë! Sistemi do të digjet!</div>
    </div>

    <script>
        const canvas = document.getElementById('powerCanvas');
        const ctx = canvas.getContext('2d');
        
        let targetPower = 1500;
        let maxPower = 3000;
        let level = 1;

        function calculatePower() {
            const u = document.getElementById('uInput').value;
            const i = document.getElementById('iInput').value;
            const p = u * i;

            document.getElementById('uVal').innerText = u;
            document.getElementById('iVal').innerText = i;
            document.getElementById('currentP').innerText = p + " W";

            if (p > maxPower) {
                document.getElementById('alertMsg').style.display = "block";
            } else {
                document.getElementById('alertMsg').style.display = "none";
            }
            drawGlow(p);
        }

        function drawGlow(p) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const intensity = Math.min(p / maxPower, 1);
            
            // Vizatimi i "telave" të qytetit
            ctx.strokeStyle = \\\`rgba(56, 189, 248, \\\${0.2 + intensity})\\\`;
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(50, 75);
            ctx.lineTo(550, 75);
            ctx.stroke();

            // Vizatimi i qytetit (ndërtesat)
            ctx.fillStyle = \\\`rgba(251, 191, 36, \\\${intensity})\\\`;
            ctx.fillRect(450, 40, 40, 80);
            ctx.fillRect(500, 20, 30, 100);
            ctx.fillRect(410, 60, 30, 60);
            
            // Centrali
            ctx.fillStyle = "#94a3b8";
            ctx.fillRect(20, 50, 60, 50);
            ctx.fillStyle = "#fff";
            ctx.fillText("⚡", 40, 80);
        }

        function supplyPower() {
            const u = document.getElementById('uInput').value;
            const i = document.getElementById('iInput').value;
            const p = u * i;
            
            if (p > maxPower) {
                alert("BOOM! Rrjeti u dogj nga mbingarkesa. Qyteti mbeti në errësirë!");
                resetGame();
            } else if (Math.abs(p - targetPower) <= 200) {
                alert("SUKSES! Qyteti ka energji të mjaftueshme.");
                nextLevel();
            } else if (p < targetPower) {
                alert("Shumë pak energji. Qyteti po përjeton ndërprerje (Blackout).");
            } else {
                alert("Energjia është shumë e lartë, por jo fatale. Mundohu të jesh më i saktë!");
            }
        }

        function nextLevel() {
            level++;
            targetPower = Math.floor(Math.random() * 2000) + 1000;
            maxPower = targetPower + 1000;
            
            document.getElementById('level').innerText = level;
            document.getElementById('targetP').innerText = targetPower + " W";
            document.getElementById('maxP').innerText = maxPower;
            
            document.getElementById('uInput').value = 120;
            document.getElementById('iInput').value = 10;
            calculatePower();
        }

        function resetGame() {
            level = 1;
            targetPower = 1200;
            maxPower = 2500;
            
            document.getElementById('level').innerText = level;
            document.getElementById('targetP').innerText = targetPower + " W";
            document.getElementById('maxP').innerText = maxPower;
            
            document.getElementById('uInput').value = 120;
            document.getElementById('iInput').value = 10;
            calculatePower();
        }

        calculatePower();
    </script>
</body>
</html>\`,
    'efield-explorer': \`<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Field Explorer</title>
    <style>
        :root {
            --bg-color: #fff0f5;
            --primary-pink: #ffb6c1;
            --electric-blue: #87cefa;
            --text-color: #5d5d5d;
        }

        body {
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--bg-color);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: var(--text-color);
            overflow: hidden;
        }

        h1 { margin-bottom: 10px; color: #ff69b4; }
        #game-container {
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border-radius: 15px;
            overflow: hidden;
            background: white;
            border: 4px solid var(--primary-pink);
        }

        canvas { display: block; background: #fafafa; cursor: none; }

        .ui-panel {
            position: absolute;
            top: 10px;
            left: 10px;
            pointer-events: none;
            background: rgba(255, 255, 255, 0.8);
            padding: 10px;
            border-radius: 10px;
            font-size: 14px;
        }

        .instructions {
            margin-top: 15px;
            max-width: 500px;
            text-align: center;
            font-size: 0.9rem;
        }

        #intensity-meter {
            font-weight: bold;
            color: #ff1493;
        }
    </style>
</head>
<body>

    <h1>⚡ Intensiti i Fushës ⚡</h1>

    <div id="game-container">
        <div class="ui-panel">
            Pikët: <span id="score">0</span><br>
            Intensiteti (E): <span id="intensity-meter">0</span> N/C
        </div>
        <canvas id="gameCanvas" width="600" height="400"></canvas>
    </div>

    <div class="instructions">
        <p>Lëviz miun (mouse) për të kontrolluar <b>ngarkesën provë (+q)</b>. 
        Mblidh sferat pastel për pikë, por kujdes: <b>burimi i fushës</b> në qendër të shtyn me forcë më të madhe sa më afër t'i shkosh!</p>
    </div>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreElement = document.getElementById('score');
        const intensityMeter = document.getElementById('intensity-meter');

        let score = 0;
        let mouse = { x: 300, y: 200 };
        let player = { x: 300, y: 200, radius: 10 };
        
        // Burimi i fushës (ngarkesë e madhe pozitive në qendër)
        const source = { x: 300, y: 200, q: 5000 }; 
        
        let collectibles = [];

        function spawnCollectible() {
            collectibles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 8,
                color: \\\`hsl(\\\${Math.random() * 360}, 70%, 80%)\\\`
            });
        }

        // Krijo disa mbledhëse në fillim
        for(let i=0; i<5; i++) spawnCollectible();

        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        function update() {
            // Llogarit distancën nga qendra (r)
            let dx = mouse.x - source.x;
            let dy = mouse.y - source.y;
            let r = Math.sqrt(dx*dx + dy*dy);
            if (r < 20) r = 20; // Parandalon forcën pafundësi

            // Formula e Intensitetit: E = k * Q / r^2
            const k = 8987; 
            let E = (k * source.q) / (r * r);
            
            // Shfaq intensitetin në ekran
            intensityMeter.innerText = Math.round(E);

            // "Shtytja" elektrike - e bën kontrollin e vështirë
            // Ngarkesa provë ndjen një forcë që e largon nga qendra
            let pushX = (dx / r) * (E / 100);
            let pushY = (dy / r) * (E / 100);

            player.x = mouse.x + pushX;
            player.y = mouse.y + pushY;

            // Kontrolli i mbledhjes së pikëve
            collectibles.forEach((c, index) => {
                let dist = Math.sqrt((player.x - c.x)**2 + (player.y - c.y)**2);
                if (dist < player.radius + c.radius) {
                    collectibles.splice(index, 1);
                    score += 10;
                    scoreElement.innerText = score;
                    spawnCollectible();
                }
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Vizatimi i vijave të fushës (vizuale)
            ctx.strokeStyle = '#f0f0f0';
            ctx.beginPath();
            for(let i=0; i<360; i+=30) {
                let rad = i * Math.PI / 180;
                ctx.moveTo(source.x, source.y);
                ctx.lineTo(source.x + Math.cos(rad) * 600, source.y + Math.sin(rad) * 600);
            }
            ctx.stroke();

            // Burimi i fushës (+Q)
            ctx.fillStyle = '#ff1493';
            ctx.beginPath();
            ctx.arc(source.x, source.y, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.font = "bold 16px Arial";
            ctx.fillText("+Q", source.x - 10, source.y + 6);

            // Mbledhëset
            collectibles.forEach(c => {
                ctx.fillStyle = c.color;
                ctx.beginPath();
                ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Lojtari (ngarkesa provë +q)
            ctx.fillStyle = '#87cefa';
            ctx.beginPath();
            ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ff69b4';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        function gameLoop() {
            update();
            draw();
            requestAnimationFrame(gameLoop);
        }

        gameLoop();
    </script>
</body>
</html>\`,
    'resistance-guard': \`<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Resistance Guard - Loja e Rezistencës</title>
    <style>
        :root { --main-bg: #2c3e50; --wire-copper: #d35400; --wire-silver: #bdc3c7; --wire-gold: #f1c40f; }
        body { background: var(--main-bg); color: white; font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; }
        #game-box { background: #34495e; padding: 20px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); text-align: center; width: 600px; }
        canvas { background: #1a1a1a; border-radius: 8px; margin: 20px 0; border: 2px solid #555; }
        .controls { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; background: #2c3e50; padding: 15px; border-radius: 10px; }
        .slider-group { display: flex; flex-direction: column; align-items: flex-start; }
        input[type=range] { width: 100%; cursor: pointer; }
        select { padding: 5px; border-radius: 5px; width: 100%; cursor: pointer; }
        .status { font-size: 1.2em; margin: 10px 0; color: #3498db; font-weight: bold; }
        .danger { color: #e74c3c; animation: blink 0.5s infinite; }
        @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
        button { grid-column: span 2; padding: 12px; background: #27ae60; border: none; color: white; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 1.1em; }
        button:hover { background: #2ecc71; }
    </style>
</head>
<body>

    <h1>🛡️ Resistance Guard</h1>
    <p>Rregullo parametrat e telit për të arritur <b>Rezistencën Target</b>!</p>

    <div id="game-box">
        <div id="levelDisplay">Niveli: 1</div>
        <div class="status" id="targetDisplay">Target R: 15.00 Ω</div>
        
        <canvas id="wireCanvas" width="550" height="150"></canvas>
        
        <div class="status" id="currentR">R aktuale: 0.00 Ω</div>

        <div class="controls">
            <div class="slider-group">
                <label>Materiali (ρ):</label>
                <select id="materialSelect" onchange="updateWire()">
                    <option value="0.017">Bakër (Bakër)</option>
                    <option value="0.016">Argjend (Më pak rezistent)</option>
                    <option value="0.024">Ar (Mesatar)</option>
                    <option value="0.10">Hekur (Më shumë rezistent)</option>
                </select>
            </div>
            <div class="slider-group">
                <label>Gjatësia (l): <span id="lVal">10</span>m</label>
                <input type="range" id="lInput" min="1" max="100" value="10" oninput="updateWire()">
            </div>
            <div class="slider-group" style="grid-column: span 2;">
                <label>Trashësia/Prerja (S): <span id="sVal">1.0</span> mm²</label>
                <input type="range" id="sInput" min="0.1" max="5.0" step="0.1" value="1.0" oninput="updateWire()">
            </div>
            <button onclick="checkResult()">TESTO QARKUN</button>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('wireCanvas');
        const ctx = canvas.getContext('2d');
        
        let level = 1;
        let targetR = 8.5;

        function updateWire() {
            const rho = parseFloat(document.getElementById('materialSelect').value);
            const l = parseFloat(document.getElementById('lInput').value);
            const s = parseFloat(document.getElementById('sInput').value);
            
            // Formula: R = rho * (l / s)
            // (Shënim: Multiplikojmë me 100 për ta bërë vlerën më "lojë")
            const r = (rho * (l / s) * 100).toFixed(2);
            
            document.getElementById('lVal').innerText = l;
            document.getElementById('sVal').innerText = s;
            document.getElementById('currentR').innerText = \\\`R aktuale: \\\${r} Ω\\\`;

            drawWire(l, s, rho);
            return r;
        }

        function drawWire(l, s, rho) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Ngjyra sipas materialit
            if(rho == 0.017) ctx.fillStyle = "#d35400"; // Baker
            else if(rho == 0.016) ctx.fillStyle = "#bdc3c7"; // Argjend
            else if(rho == 0.024) ctx.fillStyle = "#f1c40f"; // Ar
            else ctx.fillStyle = "#7f8c8d"; // Hekur

            const wireHeight = s * 10;
            const wireWidth = l * 5;
            
            ctx.fillRect(275 - wireWidth/2, 75 - wireHeight/2, wireWidth, wireHeight);
            
            // Shkëlqimi i telit
            ctx.fillStyle = "rgba(255,255,255,0.2)";
            ctx.fillRect(275 - wireWidth/2, 75 - wireHeight/2, wireWidth, wireHeight/3);
        }

        function checkResult() {
            const currentR = parseFloat(updateWire());
            const diff = Math.abs(currentR - targetR);

            if (diff < 0.5) {
                alert("SUKSES! Rezistenca është e saktë për pajisjen.");
                level++;
                targetR = (Math.random() * 20 + 5).toFixed(2);
                document.getElementById('levelDisplay').innerText = \\\`Niveli: \\\${level}\\\`;
                document.getElementById('targetDisplay').innerText = \\\`Target R: \\\${targetR} Ω\\\`;
            } else {
                alert("GABIM! Qarku nuk punon. Rregullo vlerat!");
            }
        }

        updateWire();
    </script>
</body>
</html>\`
};

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

for (const [id, html] of Object.entries(htmls)) {
    const regex = new RegExp(\`id:\\s*"\${id}"[\\s\\S]*?html:\\s*\` + "\\`[\\\\s\\\\S]*?\\`", "g");
    const match = content.match(regex);
    if (match) {
        const replacement = match[0].replace(/html:\s*`[\s\S]*?`/, \`html: \\\`\${html}\\\`\`);
        content = content.replace(regex, replacement);
    }
}

fs.writeFileSync('src/gameContent.ts', content);
