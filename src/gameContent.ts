
import { DigitalGame } from './types';

export const DIGITAL_GAMES: DigitalGame[] = [
  {
    id: "kinematika-final",
    title: "Kinematika: Edicioni Final",
    category: "Kinematika",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n    <title>Kinematika: Final Edition</title>\n    <link href=\"https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Orbitron:wght@500;900&family=Share+Tech+Mono&display=swap\" rel=\"stylesheet\">\n    <style>\n        :root {\n            --gold: #ffd700;\n            --parchment: #f4e4bc;\n            --ocean: #001220;\n            --neon-blue: #00f3ff;\n            --neon-green: #00ff9d;\n            --neon-pink: #ff00ff;\n            --panel-bg: rgba(10, 20, 30, 0.95);\n        }\n\n        * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-tap-highlight-color: transparent; }\n\n        body {\n            background-color: var(--ocean);\n            color: white;\n            font-family: 'Share Tech Mono', monospace;\n            overflow: hidden;\n            height: 100vh;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        /* Klasa per Thyesat Vertikale */\n        .frac {\n            display: inline-flex;\n            flex-direction: column;\n            align-items: center;\n            vertical-align: middle;\n            font-size: 0.9em;\n            line-height: 1.1;\n            margin: 0 4px;\n        }\n        .frac > span:first-child {\n            border-bottom: 1px solid white;\n            padding: 0 2px;\n        }\n        .frac > span:last-child {\n            padding: 0 2px;\n        }\n\n        /* --- 1. INTRO: OLD MAP --- */\n        #intro-screen {\n            position: fixed; top: 0; left: 0; width: 100%; height: 100%;\n            background: rgba(0,0,0,0.95); z-index: 100;\n            display: flex; justify-content: center; align-items: center;\n            perspective: 1000px;\n        }\n\n        .map-scroll {\n            width: 320px; height: 0;\n            background: var(--parchment);\n            background-image: repeating-linear-gradient(rgba(0,0,0,0.05) 0px, transparent 2px);\n            border-top: 15px solid #5e3b1f;\n            border-bottom: 15px solid #5e3b1f;\n            overflow: hidden;\n            display: flex; flex-direction: column; align-items: center; justify-content: center;\n            animation: openMap 2.5s forwards ease-in-out;\n            box-shadow: 0 0 50px #000;\n        }\n\n        @keyframes openMap {\n            0% { height: 0; transform: rotateX(90deg); }\n            100% { height: 550px; transform: rotateX(0deg); }\n        }\n\n        .map-content { opacity: 0; animation: fadeIn 1s forwards 2s; text-align: center; color: #3e2b14; }\n        .ink-title { font-family: 'Cinzel Decorative'; font-size: 2.8rem; margin-bottom: 10px; }\n        .ink-btn {\n            background: transparent; border: 2px solid #3e2b14; color: #3e2b14;\n            padding: 10px 30px; font-family: 'Cinzel Decorative'; font-size: 1.2rem;\n            cursor: pointer; margin-top: 20px; transition: 0.3s;\n        }\n        .ink-btn:hover { background: #3e2b14; color: var(--parchment); }\n        @keyframes fadeIn { to { opacity: 1; } }\n\n        /* --- 2. GAME UI --- */\n        #game-container {\n            width: 100%; max-width: 800px; height: 100%;\n            display: none; flex-direction: column; padding: 10px; position: relative;\n        }\n\n        .island-nav {\n            display: flex; justify-content: space-between; align-items: center;\n            background: rgba(255,255,255,0.05); padding: 10px; border-radius: 50px; margin-bottom: 10px;\n        }\n        .island {\n            width: 35px; height: 35px; border-radius: 50%; background: #222;\n            border: 2px solid #555; display: flex; align-items: center; justify-content: center;\n            font-size: 1rem; position: relative; transition: 0.3s;\n        }\n        .island.active { border-color: var(--gold); box-shadow: 0 0 15px var(--gold); transform: scale(1.2); }\n        .island.done { background: var(--neon-green); border-color: var(--neon-green); color: black; }\n        .ship { position: absolute; top: -25px; font-size: 1.8rem; transition: left 1s ease; left: 5%; }\n\n        /* PANELS */\n        .panel {\n            flex: 1; background: var(--panel-bg); border: 1px solid var(--neon-blue);\n            border-radius: 15px; padding: 15px; display: none; flex-direction: column;\n            overflow-y: auto; box-shadow: 0 0 20px rgba(0, 243, 255, 0.15);\n            animation: slideUp 0.5s;\n        }\n        .panel.active { display: flex; }\n        @keyframes slideUp { from {transform: translateY(20px); opacity:0;} to {transform: translateY(0); opacity:1;} }\n\n        h2 { text-align: center; color: var(--neon-blue); font-family: 'Orbitron'; margin-bottom: 15px; font-size: 1.3rem; }\n        .btn {\n            background: rgba(0, 243, 255, 0.1); border: 1px solid var(--neon-blue); color: white;\n            padding: 12px; margin: 5px; cursor: pointer; font-family: 'Orbitron'; width: 100%;\n            transition: 0.2s;\n        }\n        .btn:hover { background: var(--neon-blue); color: black; }\n\n        /* FILLER VISUAL – KINEMATIKA */\n        .kinematika-visual {\n            position:relative; width:100%; height:300px; margin:40px 0;\n            background: radial-gradient(circle at top,#0f2027,#000); color:white;\n            overflow:hidden; border-radius:15px;\n        }\n        .kv-title { text-align:center; font-size:26px; padding-top:15px; letter-spacing:2px; }\n        .kv-formula {\n            display:flex; justify-content:center; align-items:center; gap:10px;\n            text-align:center; font-size:18px; opacity:0.8; margin-bottom:20px;\n        }\n        .kv-axis { position:absolute; bottom:100px; left:10%; width:80%; height:2px; background:white; }\n        .kv-object {\n            position:absolute; bottom:85px; left:10%; width:30px; height:30px;\n            border-radius:50%; background:#00eaff; box-shadow:0 0 15px #00eaff;\n        }\n        .kv-vector { position:absolute; bottom:100px; left:10%; width:60px; height:3px; background:yellow; }\n        .kv-info { position:absolute; bottom:20px; width:100%; text-align:center; font-size:16px; }\n\n        /* --- STAGE ELEMENTS --- */\n        .road { width: 100%; height: 80px; background: #222; border-bottom: 3px dashed white; position: relative; margin: 10px 0; overflow: hidden; border-radius: 5px; }\n        /* Tani makina shikon para falë scaleX(-1) */\n        .car { font-size: 2.5rem; position: absolute; bottom: 5px; left: 0; transform: scaleX(-1); }\n        .graph-area { width: 100%; height: 200px; background: #000; border: 2px solid white; display: none; }\n\n        /* Math Section */\n        .step-box { border-left: 2px solid #555; padding-left: 10px; margin-bottom: 15px; }\n        .step-box.active { border-color: var(--neon-pink); }\n        .math-board {\n            background: #000; border: 1px solid #fff; padding: 10px; font-family: 'Courier New';\n            color: var(--neon-green); font-size: 1.2rem; min-height: 60px; display: flex; align-items: center;\n        }\n        .slot { border: 1px dashed #777; min-width: 30px; padding: 0 5px; margin: 0 2px; text-align: center; cursor: pointer; color: white; }\n        .slot.active { border-color: var(--neon-blue); background: rgba(0,243,255,0.2); }\n        \n        .star-hint {\n            display: inline-block; font-size: 1.5rem; cursor: pointer;\n            filter: drop-shadow(0 0 5px var(--gold)); animation: pulse 1.5s infinite;\n        }\n        @keyframes pulse { 0% {transform: scale(1);} 50% {transform: scale(1.2);} 100% {transform: scale(1);} }\n        .hint-text { color: var(--neon-pink); font-size: 0.9rem; display: none; margin-top: 5px; font-style: italic; }\n\n        /* Game Dashboard */\n        .dashboard {\n            height: 80px; background: #222; border-top: 4px solid #444;\n            display: flex; justify-content: space-around; align-items: center;\n            padding: 10px; margin-top: auto;\n        }\n        .dial {\n            width: 60px; height: 30px; background: #000; border-radius: 30px 30px 0 0;\n            border: 2px solid var(--neon-blue); position: relative; overflow: hidden;\n        }\n        .needle {\n            width: 2px; height: 25px; background: red; position: absolute;\n            bottom: 0; left: 50%; transform-origin: bottom center;\n            animation: needleMove 2s infinite alternate;\n        }\n        @keyframes needleMove { from {transform: rotate(-80deg);} to {transform: rotate(80deg);} }\n\n        /* Victory */\n        #victory-screen {\n            position: fixed; top: 0; left: 0; width: 100%; height: 100%;\n            background: rgba(0,0,0,0.95); z-index: 2000; display: none;\n            flex-direction: column; align-items: center; justify-content: center;\n        }\n        .chest { font-size: 6rem; cursor: pointer; animation: shake 1s infinite; margin-bottom: 20px; z-index: 2001; }\n        .chest.open { animation: none; transform: scale(1.2); }\n        @keyframes shake { 0%, 100% {transform: rotate(0);} 25% {transform: rotate(-10deg);} 75% {transform: rotate(10deg);} }\n        canvas#confetti { position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none; z-index: 2000; }\n\n        /* Keyboard */\n        .keyboard { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-top: 10px; }\n        .k-btn { background: #333; padding: 10px; text-align: center; border-radius: 4px; cursor: pointer; }\n        .k-btn:active { background: var(--neon-blue); color: black; }\n        .wrong-btn { border: 2px solid red; }\n        .wrong-btn:active { background: red; color: white; }\n\n    </style>\n</head>\n<body>\n\n    <div id=\"intro-screen\">\n        <div class=\"map-scroll\">\n            <div class=\"map-content\">\n                <h1 class=\"ink-title\">HARTA E<br>FIZIKËS 10</h1>\n                <p>Nis udhëtimin drejt thesarit!</p>\n                <button class=\"ink-btn\" onclick=\"startAdventure()\">HAP HARTËN</button>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"game-container\">\n        <div class=\"island-nav\">\n            <div style=\"position:relative; width:100%; display:flex; justify-content:space-between;\">\n                <div class=\"ship\" id=\"ship\">⛵</div>\n                <div class=\"island active\" id=\"isl-1\">1</div>\n                <div class=\"island\" id=\"isl-2\">2</div>\n                <div class=\"island\" id=\"isl-3\">3</div>\n                <div class=\"island\" id=\"isl-4\">4</div>\n            </div>\n        </div>\n\n        <div class=\"panel active\" id=\"stg-1\">\n            <h2>ISHULLI 1: LABORATORI</h2>\n            <p style=\"text-align:center; font-size:0.9rem;\">Krijo grafikun e lëvizjes.</p>\n            <div style=\"display:flex; gap:10px; margin:10px 0;\">\n                <button class=\"btn\" onclick=\"runSim('uniform')\">Lëvizje e Njëtrajtshme</button>\n                <button class=\"btn\" onclick=\"runSim('varied')\">Lëvizje e Ndryshueshme</button>\n            </div>\n            <div class=\"road\"><div class=\"car\" id=\"sim-car\">🏎️</div></div>\n            <div class=\"graph-area\" id=\"sim-graph\"><canvas id=\"cvs-graph\"></canvas></div>\n            <button class=\"btn\" id=\"btn-next-1\" style=\"display:none; border-color:var(--neon-green);\" onclick=\"goStage(2)\">VAZHDO ➡</button>\n        </div>\n\n        <div class=\"panel\" id=\"stg-2\">\n            <h2>ISHULLI 2: KUIZI</h2>\n            <div id=\"quiz-container\"></div>\n            \n            <div class=\"kinematika-visual\">\n                <div class=\"kv-title\">KINEMATIKA</div>\n                <div class=\"kv-formula\">\n                    <span>V = </span>\n                    <span class=\"frac\"><span>Δx</span><span>Δt</span></span>\n                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\n                    <span>a = </span>\n                    <span class=\"frac\"><span>Δv</span><span>Δt</span></span>\n                </div>\n                <div class=\"kv-axis\"></div>\n                <div class=\"kv-object\"></div>\n                <div class=\"kv-vector\"></div>\n                <div class=\"kv-info\">Lëvizje drejtvizore me nxitim konstant</div>\n            </div>\n        </div>\n\n        <div class=\"panel\" id=\"stg-3\">\n            <h2>ISHULLI 3: ANALIZA E THELLË</h2>\n            <canvas id=\"math-graph\" style=\"width:100%; height:120px; background:#000; border:1px solid #fff; margin-bottom:10px;\"></canvas>\n\n            <div class=\"step-box active\" id=\"step-1\">\n                <p>1. Emërto lëvizjen (0-5s):</p>\n                <div style=\"display:flex; gap:5px;\">\n                    <button class=\"btn\" onclick=\"wrongChoice(1)\">E Njëtrajtshme</button>\n                    <button class=\"btn\" onclick=\"rightChoice(1)\">Njëtrajtësisht e Ndryshueshme</button>\n                </div>\n                <p id=\"msg-1\" style=\"color:var(--neon-pink); font-size:0.8rem;\"></p>\n            </div>\n\n            <div class=\"step-box\" id=\"step-2\" style=\"display:none;\">\n                <p>2. Gjej nxitimin (a): <span class=\"star-hint\" onclick=\"toggleHint(1)\">🌟</span></p>\n                <p id=\"hint-text-1\" class=\"hint-text\">Formula është thyesë: Ndryshimi i shpejtësisë përmbi kohën.</p>\n                \n                <div class=\"math-board\" id=\"board-1\">\n                    a = <div class=\"slot active\" id=\"slot-1\" onclick=\"setSlot('slot-1')\">?</div>\n                </div>\n                <div class=\"keyboard\" id=\"kb-1\">\n                    <div class=\"k-btn\" onclick=\"typeKey('Δv')\">Δv</div>\n                    <div class=\"k-btn\" onclick=\"typeKey('Δt')\">Δt</div>\n                    <div class=\"k-btn\" onclick=\"typeKey('6')\">6</div>\n                    <div class=\"k-btn\" onclick=\"typeKey('5')\">5</div>\n                    <div class=\"k-btn\" style=\"grid-column: span 2; background:var(--neon-purple);\" onclick=\"addFraction()\">[ ■ / ■ ]</div>\n                    <div class=\"k-btn\" onclick=\"typeKey('1.2 m/s^2')\">1.2 m/s²</div>\n                    <div class=\"k-btn\" style=\"color:red\" onclick=\"clearSlot()\">C</div>\n                    <div class=\"k-btn wrong-btn\" onclick=\"alert('Gabim! Provo përsëri.')\">0.8 m/s²</div>\n                    <div class=\"k-btn\" style=\"background:var(--neon-green); color:black;\" onclick=\"checkCalc()\">OK</div>\n                </div>\n                <p id=\"calc-msg\" style=\"color:var(--neon-pink); font-size:0.8rem;\"></p>\n            </div>\n\n            <div class=\"step-box\" id=\"step-3\" style=\"display:none;\">\n                <p>3. Emërto lëvizjen (5-10s):</p>\n                <div style=\"display:flex; gap:5px;\">\n                    <button class=\"btn\" onclick=\"rightChoice(2)\">E Njëtrajtshme</button>\n                    <button class=\"btn\" onclick=\"wrongChoice(2)\">E Ndryshueshme</button>\n                </div>\n                <p id=\"msg-2\" style=\"color:var(--neon-pink); font-size:0.8rem;\"></p>\n            </div>\n\n            <div class=\"step-box\" id=\"step-4\" style=\"display:none;\">\n                <p>4. Sa është nxitimi këtu? <span class=\"star-hint\" onclick=\"toggleHint(2)\">🌟</span></p>\n                <p id=\"hint-text-2\" class=\"hint-text\">Nëse shpejtësia nuk ndryshon, a është zero.</p>\n                <div style=\"display:flex; gap:5px;\">\n                    <button class=\"btn\" onclick=\"finishMath(0)\">a = 0</button>\n                    <button class=\"btn\" onclick=\"finishMath(1)\">a > 0</button>\n                </div>\n            </div>\n            \n            <button class=\"btn\" id=\"btn-next-3\" style=\"display:none; border-color:var(--neon-green); margin-top:10px;\" onclick=\"goStage(4)\">FINALE ➡</button>\n        </div>\n\n        <div class=\"panel\" id=\"stg-4\">\n            <h2>ISHULLI 4: MBLIDH 10 FORMULA TË SAKTA</h2>\n            <canvas id=\"game-cvs\" style=\"width:100%; height:250px; background:#000; border:2px solid var(--neon-blue);\"></canvas>\n            \n            <div class=\"dashboard\">\n                <div style=\"color:var(--neon-blue); font-size:0.8rem;\">SCORE</div>\n                <div class=\"dial\"><div class=\"needle\"></div></div>\n                <div style=\"display:flex; gap:10px;\">\n                    <button class=\"k-btn\" style=\"padding:15px;\" ontouchstart=\"move(-1)\" ontouchend=\"move(0)\" onmousedown=\"move(-1)\" onmouseup=\"move(0)\">⬅</button>\n                    <button class=\"k-btn\" style=\"padding:15px;\" ontouchstart=\"move(1)\" ontouchend=\"move(0)\" onmousedown=\"move(1)\" onmouseup=\"move(0)\">➡</button>\n                </div>\n            </div>\n            <button class=\"btn\" onclick=\"startGame()\">NIS LOJËN</button>\n        </div>\n    </div>\n\n    <div id=\"victory-screen\">\n        <canvas id=\"confetti\"></canvas>\n        <div class=\"chest\" id=\"chest\" onclick=\"openChest()\">🎁</div>\n        <h1 id=\"vic-title\" style=\"opacity:0; color:gold; text-shadow:0 0 20px gold; font-family:'Cinzel Decorative'; margin-top:20px;\">TË LUMTË!</h1>\n        <p id=\"vic-sub\" style=\"opacity:0;\">Ke fituar thesarin e dijës!</p>\n        <button class=\"ink-btn\" style=\"margin-top:30px; border-color:white; color:white;\" onclick=\"location.reload()\">LUAJ PËRSËRI</button>\n    </div>\n\n    <script>\n        // --- NAVIGATION ---\n        function startAdventure() {\n            document.getElementById('intro-screen').style.display = 'none';\n            document.getElementById('game-container').style.display = 'flex';\n        }\n\n        function goStage(n) {\n            if(n === 5) {\n                document.getElementById('game-container').style.display = 'none';\n                document.getElementById('victory-screen').style.display = 'flex';\n                return;\n            }\n\n            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));\n            document.getElementById('stg-' + n).classList.add('active');\n            \n            for(let i=1; i<n; i++) document.getElementById('isl-'+i).classList.add('done');\n            document.getElementById('isl-'+n).classList.add('active');\n            \n            const ship = document.getElementById('ship');\n            ship.style.left = ((n-1)*25 + 5) + '%';\n\n            if(n===2) loadQuiz();\n            if(n===3) initMath();\n        }\n\n        // --- STAGE 1: LAB ---\n        const car = document.getElementById('sim-car');\n        const scvs = document.getElementById('cvs-graph');\n        const sctx = scvs.getContext('2d');\n        let simInterval;\n\n        function runSim(type) {\n            clearInterval(simInterval);\n            car.style.left='0'; document.getElementById('sim-graph').style.display='none';\n            \n            // Ndryshimet në shpejtësi për t'i bërë më të dallueshme\n            let pos=0, spd = type==='uniform' ? 0.8 : 0; \n            \n            simInterval = setInterval(()=>{\n                if(type==='varied') spd += 0.02; // rritet dukshëm ngadalë por vazhdimisht\n                pos += spd;\n                car.style.left = Math.min(pos,90)+'%';\n                if(pos>=90) { clearInterval(simInterval); drawSimGraph(type); }\n            }, 20);\n        }\n\n        function drawSimGraph(type) {\n            let b = document.getElementById('sim-graph');\n            b.style.display='block';\n            scvs.width = b.offsetWidth; scvs.height = b.offsetHeight;\n            let w=scvs.width, h=scvs.height;\n\n            sctx.fillStyle=\"#000\"; sctx.fillRect(0,0,w,h);\n            sctx.strokeStyle=\"#fff\"; sctx.lineWidth=2;\n            sctx.beginPath(); sctx.moveTo(30,10); sctx.lineTo(30,h-20); sctx.lineTo(w-10,h-20); sctx.stroke();\n            sctx.fillStyle=\"#fff\"; sctx.fillText(\"v (m/s)\", 10,20); sctx.fillText(\"t (s)\", w-30,h-10);\n            \n            sctx.strokeStyle=\"#00f3ff\"; sctx.lineWidth=4; sctx.beginPath();\n            let sy = type==='uniform'?h/2 : h-20;\n            let ey = type==='uniform'?h/2 : 20;\n            sctx.moveTo(30, sy); sctx.lineTo(w-20, ey); sctx.stroke();\n\n            document.getElementById('btn-next-1').style.display='block';\n        }\n\n        // --- STAGE 2: QUIZ ---\n        const qs = [\n            {q:\"Cila njësi mat nxitimin?\", o:[\"m/s\", \"m/s²\", \"kg\"], a:1},\n            {q:\"Nëse a=0, lëvizja është:\", o:[\"E njëtrajtshme\", \"E ndryshueshme\", \"Nuk lëviz\"], a:0},\n            {q:\"Grafiku v(t) për v=konstante është:\", o:[\"Vijë e pjerrët\", \"Vijë horizontale\", \"Parabolë\"], a:1},\n            {q:\"a = Δv / Δt tregon:\", o:[\"Rrugën\", \"Shpejtësinë\", \"Nxitimin\"], a:2},\n            {q:\"Shpejtësia është madhësi:\", o:[\"Vektoriale\", \"Skalare\", \"Pa njësi\"], a:0}\n        ];\n        let qi=0;\n\n        function loadQuiz() {\n            let c = document.getElementById('quiz-container');\n            if(qi>=qs.length) {\n                c.innerHTML = \"<h3 style='color:var(--gold); text-align:center;'>KUIZI U PËRFUNDUA!</h3>\";\n                setTimeout(()=>goStage(3), 1500);\n                return;\n            }\n            let q = qs[qi];\n            c.innerHTML = `<p style=\"margin-bottom:10px;\">${qi+1}. ${q.q}</p>` +\n                q.o.map((opt,i)=>`<button class=\"btn\" onclick=\"chkQuiz(${i})\">${opt}</button>`).join('');\n        }\n        function chkQuiz(i) {\n            if(i===qs[qi].a) { qi++; loadQuiz(); }\n            else alert(\"Gabim! Provo përsëri.\");\n        }\n\n        // --- STAGE 3: MATH (STEPS) ---\n        let activeSlot='slot-1';\n        let mathStep=0; \n\n        function initMath() {\n            let c = document.getElementById('math-graph');\n            let x = c.getContext('2d');\n            c.width=c.offsetWidth; c.height=120;\n            x.strokeStyle=\"#fff\"; x.moveTo(30,110); x.lineTo(c.width,110); x.moveTo(30,10); x.lineTo(30,110); x.stroke();\n            x.strokeStyle=\"#bc13fe\"; x.lineWidth=3; x.beginPath();\n            x.moveTo(30,110); x.lineTo(c.width/2, 40); x.lineTo(c.width-30, 40); x.stroke();\n            x.fillStyle=\"#fff\"; x.fillText(\"6m/s\", 35, 30); x.fillText(\"5s\", c.width/2, 100); x.fillText(\"10s\", c.width-30, 100);\n        }\n\n        function toggleHint(id) {\n            let h = document.getElementById('hint-text-'+id);\n            h.style.display = h.style.display==='block'?'none':'block';\n        }\n\n        function wrongChoice(n) { document.getElementById(n===1?'msg-1':'msg-2').innerText = \"Jo. Shiko grafikun me kujdes.\"; }\n        function rightChoice(n) {\n            let msg = document.getElementById(n===1?'msg-1':'msg-2');\n            msg.innerText = \"SAKTË! ✅\"; msg.style.color = \"var(--neon-green)\";\n            if(n===1) document.getElementById('step-2').style.display='block';\n            if(n===2) document.getElementById('step-4').style.display='block';\n        }\n\n        function setSlot(id) {\n            if(document.querySelector('.slot.active')) document.querySelector('.slot.active').classList.remove('active');\n            activeSlot=id;\n            document.getElementById(id).classList.add('active');\n        }\n        function typeKey(v) {\n            let el=document.getElementById(activeSlot);\n            if(!el || el.classList.contains('filled')) return;\n            if(el.innerText==='?') el.innerText=v; else el.innerText+=v;\n        }\n        function clearSlot() {\n            let el=document.getElementById(activeSlot);\n            if(el && !el.classList.contains('filled')) el.innerText='?';\n        }\n        function addFraction() {\n            let el=document.getElementById(activeSlot);\n            if(!el || el.classList.contains('filled')) return;\n            let id = Date.now();\n            el.innerHTML=`<div style=\"display:inline-flex; flex-direction:column; vertical-align:middle; margin:0 5px;\"><div class=\"slot\" id=\"t-${id}\" onclick=\"event.stopPropagation(); setSlot('t-${id}')\">?</div><div style=\"border-top:1px solid white;\"></div><div class=\"slot\" id=\"b-${id}\" onclick=\"event.stopPropagation(); setSlot('b-${id}')\">?</div></div>`;\n            el.classList.remove('slot','active');\n            setSlot('t-'+id);\n        }\n        function checkCalc() {\n            let msg = document.getElementById('calc-msg');\n            let board = document.getElementById('board-1');\n            if(mathStep===0) {\n                if(board.innerHTML.includes('Δv') && board.innerHTML.includes('Δt')) {\n                    msg.innerText = \"Mirë. Tani zëvendëso numrat (6 dhe 5).\";\n                    mathStep++;\n                    board.innerHTML += ' = <div class=\"slot\" id=\"slot-sub\" onclick=\"setSlot(\\'slot-sub\\')\">?</div>';\n                    setSlot('slot-sub');\n                } else msg.innerText = \"Përdor thyesën [■/■] dhe Δv, Δt.\";\n            } else if(mathStep===1) {\n                if(board.innerText.includes('6') && board.innerText.includes('5')) {\n                    msg.innerText = \"Saktë. Rezultati?\";\n                    mathStep++;\n                    board.innerHTML += ' = <div class=\"slot\" id=\"slot-res\" onclick=\"setSlot(\\'slot-res\\')\">?</div>';\n                    setSlot('slot-res');\n                } else msg.innerText = \"Krijo thyesë me 6 dhe 5.\";\n            } else if(mathStep===2) {\n                if(document.getElementById('slot-res').innerText === '1.2' || document.getElementById('slot-res').innerText === '1.2 m/s^2') {\n                    msg.innerText = \"BRAVO! a = 1.2 m/s²\";\n                    msg.style.color=\"var(--neon-green)\";\n                    document.getElementById('step-3').style.display='block';\n                    document.getElementById('kb-1').style.display='none';\n                } else msg.innerText = \"Sa bëjnë 6 pjesëtim për 5?\";\n            }\n        }\n\n        function finishMath(opt) {\n            if(opt===0) {\n                document.getElementById('btn-next-3').style.display='block';\n                alert(\"Saktë! a=0.\");\n            } else alert(\"Gabim. Shpejtësia nuk ndryshon.\");\n        }\n\n        // --- STAGE 4: GAME ---\n        const gc = document.getElementById('game-cvs');\n        const gx = gc.getContext('2d');\n        let px=150, runG=false, items=[], gS=0, dir=0;\n\n        const correctFormulas = [\n            { pre: \"V=\", num: \"Δx\", den: \"Δt\" },\n            { pre: \"a=\", num: \"Δv\", den: \"Δt\" },\n            { text: \"V=Vo+at\" },\n            { text: \"V²-Vo²=2gh\" },\n            { text: \"Δx=v•t\" }\n        ];\n\n        const wrongFormulas = [\n            { pre: \"V=\", num: \"Δt\", den: \"Δx\" },\n            { pre: \"a=\", num: \"V\", den: \"t²\" },\n            { pre: \"Δx=\", num: \"v\", den: \"t\" },\n            { pre: \"V=\", num: \"Vo-a\", den: \"t\" },\n            { text: \"a=V•t\" }\n        ];\n\n        function startGame() {\n            if(runG) return;\n            runG=true; gc.width=gc.offsetWidth; gc.height=250; px=gc.width/2; items=[]; gS=0;\n            loop();\n        }\n        function move(d){dir=d;}\n        \n        function loop() {\n            if(!runG) return;\n            gx.clearRect(0,0,gc.width,gc.height);\n            px += dir*5; if(px<0)px=0; if(px>gc.width-40)px=gc.width-40;\n            \n            gx.fillStyle=\"#00f3ff\"; gx.fillRect(px, gc.height-20, 40, 20);\n\n            if(Math.random()<0.02) {\n                let isGood = Math.random()>0.5;\n                let src = isGood ? correctFormulas : wrongFormulas;\n                let form = src[Math.floor(Math.random()*src.length)];\n                \n                let obj = { x: Math.random()*(gc.width-80)+10, y: 0, g: isGood };\n                if(form.num) {\n                    obj.pre = form.pre; obj.num = form.num; obj.den = form.den;\n                } else {\n                    obj.text = form.text;\n                }\n                items.push(obj);\n            }\n\n            for(let i=0; i<items.length; i++) {\n                let o = items[i]; o.y+=1.5; \n                \n                gx.fillStyle = \"#fff\";\n                gx.font = \"14px monospace\";\n                \n                if(o.num) {\n                    let preW = gx.measureText(o.pre).width;\n                    let numW = gx.measureText(o.num).width;\n                    let denW = gx.measureText(o.den).width;\n                    let fracW = Math.max(numW, denW);\n                    \n                    gx.fillText(o.pre, o.x, o.y);\n                    gx.fillText(o.num, o.x + preW + (fracW-numW)/2, o.y - 8);\n                    gx.fillRect(o.x + preW, o.y - 3, fracW, 1.5);\n                    gx.fillText(o.den, o.x + preW + (fracW-denW)/2, o.y + 10);\n                } else {\n                    gx.fillText(o.text, o.x, o.y);\n                }\n\n                if(o.y>gc.height-30 && o.y<gc.height && o.x>px-30 && o.x<px+40) {\n                    if(o.g) gS++; else gS--;\n                    items.splice(i,1); i--;\n                    if(gS>=10) { runG=false; goStage(5); }\n                }\n            }\n            gx.fillStyle=\"#fff\"; gx.fillText(\"Pikët: \"+gS+\"/10\", 10, 20);\n            requestAnimationFrame(loop);\n        }\n\n        // --- VICTORY ---\n        function openChest() {\n            document.getElementById('chest').innerText=\"🥇\";\n            document.getElementById('chest').classList.add('open');\n            document.getElementById('vic-title').style.opacity=1;\n            document.getElementById('vic-title').style.transition=\"opacity 1s\";\n            document.getElementById('vic-sub').style.opacity=1;\n            document.getElementById('vic-sub').style.transition=\"opacity 1s 0.5s\";\n            \n            const cc = document.getElementById('confetti');\n            const cx = cc.getContext('2d');\n            cc.width=window.innerWidth; cc.height=window.innerHeight;\n            let parts=[];\n            for(let i=0; i<100; i++) parts.push({x:Math.random()*cc.width, y:Math.random()*cc.height-cc.height, c:`hsl(${Math.random()*360},100%,50%)`, s:Math.random()*5+5});\n            function anim() {\n                cx.clearRect(0,0,cc.width,cc.height);\n                parts.forEach(p=>{\n                    p.y+=3; if(p.y>cc.height) p.y=-10;\n                    cx.fillStyle=p.c; cx.fillRect(p.x,p.y,p.s,p.s);\n                });\n                requestAnimationFrame(anim);\n            }\n            anim();\n        }\n\n        // ANIMIMI VISUAL KINEMATIKA\n        let kvPos = 10;\n        let kvV = 0.3;\n        let kvA = 0.01;\n        const kvObject = document.querySelector(\".kv-object\");\n        const kvVector = document.querySelector(\".kv-vector\");\n\n        function animateKV(){\n            kvV += kvA;\n            kvPos += kvV;\n            kvObject.style.left = kvPos + \"%\";\n            kvVector.style.left = kvPos + \"%\";\n            kvVector.style.width = (40 + kvV*25) + \"px\";\n            if(kvPos > 85){\n                kvPos = 10;\n                kvV = 0.3;\n            }\n            requestAnimationFrame(animateKV);\n        }\n        animateKV();\n    </script>\n</body>\n</html>\n"
  },
  {
    id: "impulsi-momenti",
    title: "Mësojmë Impulsin dhe Momentin",
    category: "Dinamika",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Mësojmë Impulsin dhe Momentin</title>\n    <style>\n        :root {\n            --primary: #00f2fe;\n            --secondary: #4facfe;\n            --accent: #f093fb;\n            --bg: #0f172a;\n            --card: #1e293b;\n            --text: #f8fafc;\n            --success: #22c55e;\n            --error: #ef4444;\n        }\n\n        body {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            background-color: var(--bg);\n            color: var(--text);\n            margin: 0;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            min-height: 100vh;\n        }\n\n        .game-header {\n            margin: 20px 0;\n            text-align: center;\n        }\n\n        .container {\n            width: 900px;\n            background: var(--card);\n            padding: 30px;\n            border-radius: 20px;\n            box-shadow: 0 20px 50px rgba(0,0,0,0.5);\n            border: 1px solid rgba(255,255,255,0.1);\n        }\n\n        canvas {\n            background: #020617;\n            border-radius: 15px;\n            width: 100%;\n            height: 300px;\n            border: 2px solid var(--secondary);\n            margin-bottom: 20px;\n        }\n\n        .interface {\n            display: grid;\n            grid-template-columns: 1.2fr 0.8fr;\n            gap: 25px;\n        }\n\n        .level-info {\n            background: rgba(255,255,255,0.03);\n            padding: 20px;\n            border-radius: 12px;\n            border-left: 5px solid var(--primary);\n        }\n\n        .control-panel {\n            background: rgba(255,255,255,0.03);\n            padding: 20px;\n            border-radius: 12px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        h2 { color: var(--primary); margin-top: 0; }\n        \n        .formula-box {\n            background: #000;\n            padding: 10px;\n            border-radius: 8px;\n            color: var(--accent);\n            font-family: 'Courier New', Courier, monospace;\n            font-size: 1.2rem;\n            margin: 10px 0;\n            text-align: center;\n        }\n\n        input {\n            background: #334155;\n            border: 2px solid var(--secondary);\n            color: white;\n            padding: 12px;\n            border-radius: 8px;\n            font-size: 1.1rem;\n            margin-bottom: 10px;\n            outline: none;\n        }\n\n        button {\n            background: linear-gradient(135deg, var(--secondary), var(--primary));\n            border: none;\n            color: white;\n            padding: 15px;\n            border-radius: 8px;\n            font-weight: bold;\n            cursor: pointer;\n            transition: 0.3s;\n            text-transform: uppercase;\n        }\n\n        button:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);\n        }\n\n        #feedback {\n            margin-top: 15px;\n            font-weight: bold;\n            height: 20px;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"game-header\">\n        <h1>🚀 Laboratori Virtual i Fizikës</h1>\n        <p>Mjeshtëro Impulsin dhe Momentin përmes sfidave</p>\n    </div>\n\n    <div class=\"container\">\n        <canvas id=\"gameCanvas\" width=\"800\" height=\"300\"></canvas>\n\n        <div class=\"interface\">\n            <div class=\"level-info\">\n                <h2 id=\"lvl-title\">Niveli 1</h2>\n                <p id=\"lvl-desc\">Përshkrimi po ngarkohet...</p>\n                <div class=\"formula-box\" id=\"lvl-formula\">p = m × v</div>\n                <p id=\"lvl-data\">Të dhënat: ...</p>\n            </div>\n\n            <div class=\"control-panel\">\n                <label style=\"margin-bottom: 8px;\">Rezultati yt:</label>\n                <input type=\"number\" id=\"user-input\" placeholder=\"Shëno vlerën...\" step=\"any\">\n                <button onclick=\"checkAnswer()\">Verifiko Fizikën</button>\n                <div id=\"feedback\"></div>\n            </div>\n        </div>\n    </div>\n\n<script>\n    const canvas = document.getElementById(\"gameCanvas\");\n    const ctx = canvas.getContext(\"2d\");\n    let level = 1;\n    let animFrame = 0;\n    let isMoving = false;\n\n    const levels = [\n        {\n            title: \"Niveli 1: Impulsi i Trupit\",\n            desc: \"Një makinë ka masën 1200kg dhe lëviz me shpejtësi 20m/s. Sa është impulsi i saj (p)?\",\n            formula: \"p = m \\u00d7 v\",\n            data: \"m = 1200 kg | v = 20 m/s\",\n            goal: 24000,\n            unit: \"kg·m/s\"\n        },\n        {\n            title: \"Niveli 2: Ruajtja e Impulsit\",\n            desc: \"Sfera A (4kg, 6m/s) godet sferën B (2kg) që është në prehje. Pas goditjes ato lëvizin bashkë. Gjej shpejtësinë finale (V).\",\n            formula: \"m1v1 + m2v2 = (m1+m2)V\",\n            data: \"m1=4kg, v1=6 | m2=2kg, v2=0\",\n            goal: 4,\n            unit: \"m/s\"\n        },\n        {\n            title: \"Niveli 3: Momenti i Forcës\",\n            desc: \"Për të balancuar një levë, një forcë prej 60N vendoset 2m larg qendrës. Sa duhet të jetë forca tjetër në distancë 1.5m?\",\n            formula: \"F1 \\u00d7 d1 = F2 \\u00d7 d2\",\n            data: \"F1=60N, d1=2m | d2=1.5m\",\n            goal: 80,\n            unit: \"N\"\n        },\n        {\n            title: \"Niveli 4: Impulsi i Forcës (Impulsi)\",\n            desc: \"Një lojtar godet topin me një forcë 150N për një kohë prej 0.2 sekonda. Sa është ndryshimi i impulsit (\\u0394p)?\",\n            formula: \"I = F \\u00d7 \\u0394t = \\u0394p\",\n            data: \"F = 150 N | \\u0394t = 0.2 s\",\n            goal: 30,\n            unit: \"kg·m/s\"\n        },\n        {\n            title: \"Niveli 5: Ekuilibri i Momenteve\",\n            desc: \"Një dërrasë 4m e gjatë ka mbështetjen në mes. Një gur 10kg është në skajin e majtë (2m). Sa kg duhet të jetë guri në distancën 1m djathtas?\",\n            formula: \"m1 \\u00d7 d1 = m2 \\u00d7 d2\",\n            data: \"m1=10kg, d1=2m | d2=1m\",\n            goal: 20,\n            unit: \"kg\"\n        }\n    ];\n\n    function draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        const l = levels[level-1];\n\n        if(level === 3 || level === 5) { // Vizatimi i Levës\n            ctx.strokeStyle = \"white\"; ctx.lineWidth = 6;\n            ctx.beginPath(); ctx.moveTo(150, 200); ctx.lineTo(650, 200); ctx.stroke();\n            ctx.fillStyle = \"#475569\";\n            ctx.beginPath(); ctx.moveTo(400, 200); ctx.lineTo(375, 250); ctx.lineTo(425, 250); ctx.fill();\n        } else { // Vizatimi i Impulsit\n            ctx.fillStyle = \"#334155\";\n            ctx.fillRect(0, 250, 800, 50);\n            ctx.fillStyle = varColor();\n            ctx.beginPath();\n            ctx.arc(100 + animFrame, 230, 20, 0, Math.PI*2);\n            ctx.fill();\n            ctx.fillStyle = \"#ef4444\";\n            ctx.fillRect(750, 180, 15, 70);\n        }\n    }\n\n    function varColor() {\n        return level % 2 === 0 ? \"#a855f7\" : \"#00f2fe\";\n    }\n\n    function checkAnswer() {\n        const val = parseFloat(document.getElementById(\"user-input\").value);\n        const current = levels[level-1];\n        const feedback = document.getElementById(\"feedback\");\n\n        if(val === current.goal) {\n            feedback.style.color = \"var(--success)\";\n            feedback.innerText = \"Saktë! Rezultati: \" + current.goal + \" \" + current.unit;\n            animateSuccess();\n        } else {\n            feedback.style.color = \"var(--error)\";\n            feedback.innerText = \"E gabuar. Rishiko formulën!\";\n        }\n    }\n\n    function animateSuccess() {\n        isMoving = true;\n        let start = Date.now();\n        let timer = setInterval(() => {\n            let timePassed = Date.now() - start;\n            if (timePassed >= 1000) {\n                clearInterval(timer);\n                isMoving = false;\n                animFrame = 0;\n                nextLevel();\n            }\n            animFrame += 15;\n            draw();\n        }, 20);\n    }\n\n    function nextLevel() {\n        if(level < levels.length) {\n            level++;\n            initLevel();\n        } else {\n            alert(\"Urime! Ti i kalove të gjitha sfidat e fizikës!\");\n            level = 1;\n            initLevel();\n        }\n    }\n\n    function initLevel() {\n        const l = levels[level-1];\n        document.getElementById(\"lvl-title\").innerText = l.title;\n        document.getElementById(\"lvl-desc\").innerText = l.desc;\n        document.getElementById(\"lvl-formula\").innerText = l.formula;\n        document.getElementById(\"lvl-data\").innerText = \"Të dhënat: \" + l.data;\n        document.getElementById(\"user-input\").value = \"\";\n        document.getElementById(\"feedback\").innerText = \"\";\n        animFrame = 0;\n        draw();\n    }\n\n    initLevel();\n</script>\n</body>\n</html>\n"
  },
  {
    id: "energy-modul",
    title: "Energjia Fizike: Moduli 10",
    category: "Energjia",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Energjia Fizike: Moduli 10</title>\n    <style>\n        :root {\n            --bg: #0b0e14;\n            --card: #161b22;\n            --accent-pink: #d4a5b2; \n            --accent-purple: #7c5cb2;\n            --text-main: #e6edf3;\n            --border: #30363d;\n            --success: #238636;\n        }\n\n        body {\n            font-family: 'Inter', sans-serif;\n            background-color: var(--bg);\n            color: var(--text-main);\n            margin: 0;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            padding: 40px;\n        }\n\n        .container {\n            width: 850px;\n            background: var(--card);\n            border: 1px solid var(--border);\n            border-radius: 12px;\n            padding: 35px;\n            box-shadow: 0 10px 30px rgba(0,0,0,0.5);\n        }\n\n        h1 {\n            color: var(--accent-pink);\n            font-weight: 300;\n            letter-spacing: 2px;\n            text-transform: uppercase;\n            font-size: 1.4rem;\n            margin-bottom: 25px;\n        }\n\n        canvas {\n            background: #0d1117;\n            border: 1px solid var(--border);\n            border-radius: 8px;\n            width: 100%;\n            height: 300px;\n        }\n\n        .interface {\n            display: grid;\n            grid-template-columns: 1.2fr 0.8fr;\n            gap: 25px;\n            margin-top: 30px;\n        }\n\n        .task-box {\n            background: rgba(255, 255, 255, 0.02);\n            padding: 20px;\n            border-radius: 8px;\n            border-left: 3px solid var(--accent-pink);\n        }\n\n        .formula-display {\n            display: block;\n            margin: 15px 0;\n            font-family: \"Times New Roman\", serif;\n            font-size: 1.4rem;\n            color: var(--accent-pink);\n            background: rgba(0,0,0,0.3);\n            padding: 10px;\n            border-radius: 5px;\n            text-align: center;\n        }\n\n        input {\n            background: #0d1117;\n            border: 1px solid var(--border);\n            color: white;\n            padding: 15px;\n            border-radius: 6px;\n            width: 100%;\n            margin-bottom: 15px;\n            box-sizing: border-box;\n            font-size: 1rem;\n        }\n\n        button {\n            background: transparent;\n            border: 1px solid var(--accent-pink);\n            color: var(--accent-pink);\n            padding: 15px;\n            width: 100%;\n            border-radius: 6px;\n            cursor: pointer;\n            transition: 0.3s;\n            text-transform: uppercase;\n            font-weight: bold;\n        }\n\n        button:hover {\n            background: var(--accent-pink);\n            color: var(--bg);\n        }\n\n        #feedback {\n            margin-top: 15px;\n            font-size: 0.95rem;\n            font-weight: 500;\n        }\n    </style>\n</head>\n<body>\n\n    <h1>Laboratori Virtual i Energjisë</h1>\n\n    <div class=\"container\">\n        <canvas id=\"canvas\" width=\"800\" height=\"300\"></canvas>\n\n        <div class=\"interface\">\n            <div class=\"task-box\">\n                <h2 id=\"lvl-name\" style=\"margin:0; font-size:1.1rem;\">Niveli 1</h2>\n                <p id=\"lvl-desc\" style=\"color: #8b949e;\"></p>\n                <div class=\"formula-display\" id=\"lvl-formula\"></div>\n                <p id=\"lvl-data\" style=\"font-weight: bold; color: var(--accent-purple);\"></p>\n            </div>\n\n            <div class=\"input-section\">\n                <input type=\"number\" id=\"answer\" placeholder=\"Shëno vlerën (J)...\">\n                <button onclick=\"check()\">Verifiko Rezultatin</button>\n                <div id=\"feedback\"></div>\n            </div>\n        </div>\n    </div>\n\n<script>\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    let level = 1;\n    let animPos = 0;\n    let animId;\n\n    const levels = [\n        {\n            name: \"Niveli 1: Energjia Potenciale Gravitacionale\",\n            desc: \"Llogarit Ep për një sferë në lartësi.\",\n            formula: \"E_p = m \\u22c5 g \\u22c5 h\",\n            data: \"m = 5 kg | h = 8 m | g = 10 m/s\\u00b2\",\n            goal: 400,\n            type: \"p\"\n        },\n        {\n            name: \"Niveli 2: Energjia Kinetike\",\n            desc: \"Llogarit Ek për trupin në lëvizje.\",\n            formula: \"E_k = \\u00bd \\u22c5 m \\u22c5 v\\u00b2\",\n            data: \"m = 4 kg | v = 10 m/s\",\n            goal: 200, // 0.5 * 4 * 100\n            type: \"k\"\n        },\n        {\n            name: \"Niveli 3: Puna dhe Energjia\",\n            desc: \"Sa është lartësia (h) nëse E_p = 600 J?\",\n            formula: \"h = E_p / (m \\u22c5 g)\",\n            data: \"E_p = 600 J | m = 3 kg | g = 10 m/s\\u00b2\",\n            goal: 20,\n            type: \"p\"\n        },\n        {\n            name: \"Niveli 4: Shpejtësia nga Energjia\",\n            desc: \"Gjej shpejtësinë (v) duke përdorur E_k.\",\n            formula: \"v = \\u221a(2E_k / m)\",\n            data: \"E_k = 100 J | m = 2 kg\",\n            goal: 10, // sqrt(200/2)\n            type: \"k\"\n        },\n        {\n            name: \"Niveli 5: Ruajtja e Energjisë\",\n            desc: \"Gjej Ep nëse Ek = 150J dhe Etot = 500J.\",\n            formula: \"E_{tot} = E_k + E_p\",\n            data: \"E_{tot} = 500 J | E_k = 150 J\",\n            goal: 350,\n            type: \"p\"\n        }\n    ];\n\n    function draw(offset = 0) {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        const l = levels[level-1];\n\n        // Toka\n        ctx.strokeStyle = \"#30363d\";\n        ctx.lineWidth = 2;\n        ctx.beginPath(); ctx.moveTo(50, 250); ctx.lineTo(750, 250); ctx.stroke();\n\n        ctx.fillStyle = \"#d4a5b2\";\n        if(l.type === \"p\") {\n            // Animimi i rënies (Potenciale)\n            ctx.beginPath();\n            ctx.arc(400, 60 + offset, 15, 0, Math.PI*2);\n            ctx.fill();\n            // Vijë lartësie\n            ctx.strokeStyle = \"#7c5cb2\";\n            ctx.setLineDash([5, 5]);\n            ctx.beginPath(); ctx.moveTo(400, 60 + offset); ctx.lineTo(400, 250); ctx.stroke();\n            ctx.setLineDash([]);\n        } else {\n            // Animimi i lëvizjes (Kinetike)\n            ctx.beginPath();\n            ctx.arc(100 + offset, 235, 15, 0, Math.PI*2);\n            ctx.fill();\n            // Efekti i shpejtësisë\n            ctx.fillStyle = \"rgba(212, 165, 178, 0.3)\";\n            ctx.fillRect(80 + offset, 230, -20, 10);\n        }\n    }\n\n    function check() {\n        const val = parseFloat(document.getElementById(\"answer\").value);\n        const current = levels[level-1];\n        const feedback = document.getElementById(\"feedback\");\n\n        if(Math.abs(val - current.goal) < 0.1) {\n            feedback.style.color = \"#238636\";\n            feedback.innerText = \"Saktë! Simulimi po ekzekutohet...\";\n            animateAction();\n        } else {\n            feedback.style.color = \"#f85149\";\n            feedback.innerText = \"E gabuar. Kontrollo llogaritjen e v\\u00b2 ose produktin mgh.\";\n        }\n    }\n\n    function animateAction() {\n        let start = 0;\n        cancelAnimationFrame(animId);\n        function step() {\n            start += 8;\n            draw(start);\n            if(start < 190) {\n                animId = requestAnimationFrame(step);\n            } else {\n                setTimeout(() => {\n                    level = (level < 5) ? level + 1 : 1;\n                    init();\n                }, 800);\n            }\n        }\n        step();\n    }\n\n    function init() {\n        const l = levels[level-1];\n        document.getElementById(\"lvl-name\").innerText = l.name;\n        document.getElementById(\"lvl-desc\").innerText = l.desc;\n        document.getElementById(\"lvl-formula\").innerText = l.formula;\n        document.getElementById(\"lvl-data\").innerText = l.data;\n        document.getElementById(\"answer\").value = \"\";\n        document.getElementById(\"feedback\").innerText = \"\";\n        draw();\n    }\n\n    init();\n</script>\n</body>\n</html>\n"
  },
  {
    id: "zhvendosja-quiz",
    title: "Zhvendosja",
    category: "Kinematika",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Zhvendosja</title>\n    <script src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>\n    <script id=\"MathJax-script\" async src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js\"></script>\n    <link href=\"https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap\" rel=\"stylesheet\">\n    <style>\n        :root {\n            --primary: #00d2ff;\n            --secondary: #3a7bd5;\n            --accent: #00ff88;\n            --glass: rgba(255, 255, 255, 0.1);\n            --text: #ffffff;\n        }\n\n        body, html {\n            margin: 0; padding: 0; height: 100%;\n            font-family: 'Poppins', sans-serif;\n            background: #0f0c29;\n            background: linear-gradient(135deg, #24243e, #302b63, #0f0c29);\n            color: var(--text);\n            overflow: hidden;\n        }\n\n        /* Animate Background */\n        .bg-animate {\n            position: fixed; top: 0; left: 0; width: 100%; height: 100%;\n            z-index: -1; background: radial-gradient(circle at 50% 50%, rgba(58, 123, 213, 0.1) 0%, transparent 80%);\n            animation: pulse 8s infinite alternate;\n        }\n        @keyframes pulse { from { transform: scale(1); } to { transform: scale(1.2); } }\n\n        .container {\n            width: 100%; height: 100vh;\n            display: flex; justify-content: center; align-items: center;\n        }\n\n        .card {\n            width: 90%; max-width: 550px;\n            background: rgba(20, 20, 40, 0.85);\n            backdrop-filter: blur(15px);\n            border: 2px solid rgba(0, 210, 255, 0.3);\n            border-radius: 30px;\n            padding: 40px;\n            box-shadow: 0 0 50px rgba(0,0,0,0.5);\n            position: relative;\n            transform-style: preserve-3d;\n        }\n\n        /* Screens */\n        .screen { display: none; text-align: center; }\n        .screen.active { display: block; animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n\n        @keyframes slideIn { from { opacity: 0; transform: translateY(50px) rotateX(-10deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }\n\n        /* Typography */\n        h1 { font-family: 'Orbitron', sans-serif; text-transform: uppercase; letter-spacing: 4px; color: var(--primary); text-shadow: 0 0 15px var(--primary); }\n        \n        /* Buttons */\n        .btn-game {\n            background: linear-gradient(90deg, var(--primary), var(--secondary));\n            border: none; border-radius: 50px; padding: 15px 40px;\n            color: white; font-family: 'Orbitron', sans-serif; font-weight: bold;\n            cursor: pointer; transition: 0.3s; margin-top: 20px;\n            box-shadow: 0 5px 15px rgba(0, 210, 255, 0.4);\n        }\n        .btn-game:hover { transform: scale(1.1); box-shadow: 0 0 25px var(--primary); }\n\n        /* Math Keyboard & Input */\n        .math-display {\n            background: rgba(0,0,0,0.3); border: 2px solid var(--primary);\n            border-radius: 15px; padding: 20px; margin: 15px 0; min-height: 50px;\n            font-size: 1.5rem; display: flex; align-items: center; justify-content: center;\n        }\n        \n        .math-keyboard {\n            display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;\n            background: rgba(255,255,255,0.05); padding: 15px; border-radius: 20px;\n        }\n        .m-key {\n            background: var(--glass); border: 1px solid rgba(255,255,255,0.1);\n            color: white; padding: 12px; border-radius: 10px; cursor: pointer;\n            font-weight: bold; transition: 0.2s;\n        }\n        .m-key:hover { background: var(--primary); color: #000; transform: translateY(-2px); }\n        .m-key.op { color: var(--accent); }\n\n        /* Options */\n        .option-box {\n            background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n            padding: 15px; border-radius: 15px; margin: 10px 0; cursor: pointer;\n            transition: 0.3s; font-weight: 500; text-align: left;\n        }\n        .option-box:hover { background: var(--glass); border-color: var(--primary); padding-left: 25px; }\n        .correct { background: rgba(0, 255, 136, 0.2) !important; border-color: var(--accent) !important; }\n        .wrong { background: rgba(255, 0, 85, 0.2) !important; border-color: #ff0055 !important; }\n\n        /* Progress Bar */\n        .progress-cont { width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 10px; margin: 20px 0; }\n        .progress-fill { height: 100%; background: var(--primary); border-radius: 10px; width: 0%; transition: 0.5s; box-shadow: 0 0 10px var(--primary); }\n\n        /* Calc */\n        .mini-calc { position: absolute; top: -100px; right: 0; background: #1a1a2e; border: 1px solid var(--primary); border-radius: 10px; padding: 10px; display: none; z-index: 100; }\n    </style>\n</head>\n<body>\n\n<div class=\"bg-animate\"></div>\n\n<div class=\"container\">\n    <div class=\"card\">\n        <div id=\"start-screen\" class=\"screen active\">\n            <div style=\"font-size: 4rem; margin-bottom: 10px;\">🌌</div>\n            <h1>Kuic - Zhvendosja</h1>\n            <p style=\"opacity: 0.7;\">Loja po të pret!</p>\n            <button class=\"btn-game\" onclick=\"changeScreen('quiz-screen'); startTimer();\">Fillo Misionin</button>\n        </div>\n\n        <div id=\"quiz-screen\" class=\"screen\">\n            <div style=\"display: flex; justify-content: space-between; font-size: 0.8rem; font-family: 'Orbitron';\">\n                <span>Pikët: <span id=\"score\">0</span></span>\n                <span id=\"timer\">05:00</span>\n            </div>\n            <div class=\"progress-cont\"><div class=\"progress-fill\" id=\"p-fill\"></div></div>\n            \n            <div id=\"question-area\"></div>\n            \n            <button id=\"next-btn\" class=\"btn-game\" style=\"display: none; width: 100%;\" onclick=\"nextQuestion()\">Vazhdo</button>\n        </div>\n\n        <div id=\"result-screen\" class=\"screen\">\n            <h1 id=\"res-title\">Misioni u Krye!</h1>\n            <div id=\"res-score\" style=\"font-size: 3rem; margin: 20px 0;\">0</div>\n            <p id=\"res-msg\"></p>\n            <button class=\"btn-game\" onclick=\"location.reload()\">Rinis Misionin</button>\n        </div>\n    </div>\n</div>\n\n<script>\n    const questions = [\n        { q: \"Çfarë paraqet zhvendosja (\\\\(S\\\\) ose \\\\(\\\\Delta x\\\\))?\", type: \"choice\", options: [\"Gjatësinë totale të rrugës\", \"Një madhësi skalare\", \"Vektor që bashkon fillimin me fundin\", \"Shpejtësinë mesatare\"], correct: 2 },\n        { q: \"Cila është formula në lëvizje të njëtrajtshme?\", type: \"choice\", options: [\"\\\\(\\\\Delta x = v_0 t + at^2/2\\\\)\", \"\\\\(\\\\Delta x = v \\\\cdot t\\\\)\", \"\\\\(v^2 = v_0^2 + 2aS\\\\)\", \"\\\\(h = v_0 t + gt^2\\\\)\"], correct: 1 },\n        { q: \"Njësia matëse e zhvendosjes në SI:\", type: \"choice\", options: [\"Sekonda\", \"Metër\", \"m/s\", \"Njuton\"], correct: 1 },\n        { q: \"Formula e zhvendosjes kur \\\\(v_0 = 0\\\\):\", type: \"open\", answer: \"S =at^2/2\" },\n        { q: \"Llogarit: \\\\(v_0=2, a=3, t=4\\\\). Gjej \\\\(\\\\Delta x\\\\).\", type: \"open\", answer: \"32\" }\n    ];\n\n    let current = 0;\n    let score = 0;\n    let userMathInput = \"\";\n\n    function changeScreen(id) {\n        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));\n        document.getElementById(id).classList.add('active');\n        if(id === 'quiz-screen') loadQuestion();\n    }\n\n    function loadQuestion() {\n        const q = questions[current];\n        const area = document.getElementById('question-area');\n        document.getElementById('next-btn').style.display = 'none';\n        document.getElementById('p-fill').style.width = \\`\\${(current / questions.length) * 100}%\\`;\n        \n        let html = \\`<h3 style=\"margin-bottom:20px;\">\\${q.q}</h3>\\`;\n        \n        if(q.type === 'choice') {\n            q.options.forEach((opt, i) => {\n                html += \\`<div class=\"option-box\" onclick=\"checkChoice(\\${i}, this)\">\\${opt}</div>\\`;\n            });\n        } else {\n            userMathInput = \"\";\n            html += \\`\n                <div class=\"math-display\" id=\"m-preview\">Pritet përgjigja...</div>\n                <div class=\"math-keyboard\">\n                    <button class=\"m-key\" onclick=\"press('S=')\">S=</button>\n                    <button class=\"m-key\" onclick=\"press('v0')\">v₀</button>\n                    <button class=\"m-key\" onclick=\"press('at^2/2')\">$\\\\frac{at^2}{2}$</button>\n                    <button class=\"m-key op\" onclick=\"press('DEL')\">⌫</button>\n                    <button class=\"m-key\" onclick=\"press('7')\">7</button><button class=\"m-key\" onclick=\"press('8')\">8</button><button class=\"m-key\" onclick=\"press('9')\">9</button><button class=\"m-key op\" onclick=\"press('/')\">÷</button>\n                    <button class=\"m-key\" onclick=\"press('4')\">4</button><button class=\"m-key\" onclick=\"press('5')\">5</button><button class=\"m-key\" onclick=\"press('6')\">6</button><button class=\"m-key op\" onclick=\"press('*')\">×</button>\n                    <button class=\"m-key\" onclick=\"press('1')\">1</button><button class=\"m-key\" onclick=\"press('2')\">2</button><button class=\"m-key\" onclick=\"press('3')\">3</button><button class=\"m-key op\" onclick=\"press('+')\">+</button>\n                </div>\n            \\`;\n            setTimeout(() => { document.getElementById('next-btn').style.display = 'block'; }, 500);\n        }\n        \n        area.innerHTML = html;\n        MathJax.typeset();\n    }\n\n    window.press = (val) => {\n        const prev = document.getElementById('m-preview');\n        if(val === 'DEL') userMathInput = userMathInput.slice(0, -1);\n        else userMathInput += val;\n        \n        // Visualizing fractions and math nicely\n        let display = userMathInput.replace('at^2/2', '\\\\frac{at^2}{2}').replace('*', '\\\\cdot');\n        prev.innerHTML = \\`\\\\(\\${display}\\\\)\\`;\n        MathJax.typesetPromise([prev]);\n    }\n\n    window.checkChoice = (idx, el) => {\n        if(document.querySelector('.correct')) return;\n        if(idx === questions[current].correct) {\n            el.classList.add('correct');\n            score += 20;\n        } else {\n            el.classList.add('wrong');\n        }\n        document.getElementById('score').innerText = score;\n        document.getElementById('next-btn').style.display = 'block';\n    }\n\n    function nextQuestion() {\n        current++;\n        if(current < questions.length) loadQuestion();\n        else {\n            changeScreen('result-screen');\n            document.getElementById('res-score').innerText = score;\n            document.getElementById('res-msg').innerText = score >= 60 ? \"Te Lumte!.\" : \"Provo përsëri! Shkenca kërkon mund.\";\n        }\n    }\n\n    function startTimer() {\n        let time = 300;\n        setInterval(() => {\n            time--;\n            let m = Math.floor(time/60), s = time%60;\n            document.getElementById('timer').innerText = \\`\\${m}:\\${s < 10 ? '0'+s : s}\\`;\n        }, 1000);\n    }\n</script>\n\n</body>\n</html>\n"
  },
  {
    id: "njutoni-levels",
    title: "Ligjet e Njutonit",
    category: "Dinamika",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Ligjet e Njutonit</title>\n    <link href=\"https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Outfit:wght@300;600&display=swap\" rel=\"stylesheet\">\n    <style>\n        :root {\n            --primary: #6c5ce7;\n            --secondary: #a29bfe;\n            --success: #00b894;\n            --danger: #ff7675;\n            --warning: #fdcb6e;\n            --dark: #2d3436;\n            --glass: rgba(255, 255, 255, 0.95);\n        }\n\n        * { box-sizing: border-box; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n\n        body {\n            margin: 0; padding: 0;\n            font-family: 'Fredoka', sans-serif;\n            background: #0f0c29;\n            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);\n            height: 100vh;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            overflow: hidden;\n            color: var(--dark);\n        }\n\n        /* SFONDI DINAMIK */\n        #stars-container {\n            position: fixed; top: 0; left: 0; width: 100%; height: 100%;\n            z-index: -1; pointer-events: none;\n        }\n\n        .star {\n            position: absolute; background: white; border-radius: 50%;\n            animation: twinkle var(--d) infinite; opacity: 0.5;\n        }\n\n        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }\n\n        /* KONTENIERI KRYESOR - PC OPTIMIZED */\n        #game-window {\n            width: 90%;\n            max-width: 1000px; /* Më i gjerë për PC */\n            height: 85vh;\n            background: var(--glass);\n            border-radius: 40px;\n            display: flex;\n            flex-direction: column;\n            box-shadow: 0 25px 50px rgba(0,0,0,0.4);\n            border: 8px solid rgba(255,255,255,0.1);\n            backdrop-filter: blur(10px);\n            position: relative;\n            z-index: 10;\n        }\n\n        /* HEADER */\n        .header {\n            padding: 20px 40px;\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-bottom: 3px solid #f0f0f0;\n        }\n\n        .stat-badge {\n            background: #f8f9fa;\n            padding: 8px 15px;\n            border-radius: 15px;\n            font-weight: 700;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);\n        }\n\n        .progress-container { flex-grow: 1; margin: 0 30px; height: 16px; background: #eee; border-radius: 20px; overflow: hidden; position: relative; }\n        #fill { width: 0%; height: 100%; background: linear-gradient(90deg, var(--success), #55efc4); transition: width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n\n        /* SCREENS */\n        .screen { display: none; padding: 40px; height: 100%; overflow-y: auto; }\n        .screen.active { display: flex; flex-direction: column; animation: slideIn 0.5s ease; }\n\n        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }\n\n        /* LAYOUTI I PYETJEVE PËR PC */\n        .question-layout {\n            display: grid;\n            grid-template-columns: 1fr 1fr; /* Ndarja në dy kolona */\n            gap: 30px;\n            align-items: start;\n        }\n\n        @media (max-width: 768px) { .question-layout { grid-template-columns: 1fr; } }\n\n        /* ELEMENTET E DIZAJNIT */\n        .bubble-card {\n            background: white;\n            padding: 25px;\n            border-radius: 30px;\n            border: 2px solid #e0e0e0;\n            box-shadow: 0 10px 0 #eee;\n            margin-bottom: 20px;\n            font-size: 1.3rem;\n            line-height: 1.4;\n        }\n\n        .opt-btn {\n            background: white;\n            border: 2px solid #e0e0e0;\n            border-bottom: 6px solid #e0e0e0;\n            border-radius: 20px;\n            padding: 18px 25px;\n            margin-bottom: 12px;\n            cursor: pointer;\n            font-family: 'Fredoka', sans-serif;\n            font-size: 1.1rem;\n            font-weight: 600;\n            text-align: left;\n            width: 100%;\n        }\n\n        .opt-btn:hover:not(.locked) { transform: translateY(-3px); background: #fcfcfc; border-color: var(--secondary); }\n        .opt-btn:active { transform: translateY(2px); border-bottom-width: 2px; }\n\n        .opt-btn.selected { border-color: var(--primary); background: #f0edff; color: var(--primary); }\n        .opt-btn.correct { background: #d7ffb8; border-color: var(--success); border-bottom-color: #218c74; color: #1e6b52; animation: celebrate 0.4s ease; }\n        .opt-btn.wrong { background: #ffdfe0; border-color: var(--danger); border-bottom-color: #c0392b; color: #8e2a2a; animation: shake 0.4s ease; }\n\n        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }\n        @keyframes celebrate { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }\n\n        .action-btn {\n            background: var(--primary);\n            color: white;\n            border: none;\n            padding: 20px 40px;\n            border-radius: 25px;\n            border-bottom: 6px solid #4834d4;\n            font-size: 1.2rem;\n            font-weight: 700;\n            cursor: pointer;\n            margin-top: 20px;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n        }\n\n        .action-btn:hover { background: #5f27cd; transform: scale(1.02); }\n\n        /* VISUAL DEMO AREA */\n        #demo-area {\n            background: #f1f2f6;\n            border-radius: 25px;\n            height: 150px;\n            position: relative;\n            overflow: hidden;\n            border: 2px dashed #ccc;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .ball {\n            width: 50px; height: 50px;\n            background: radial-gradient(circle at 30% 30%, var(--primary), #341f97);\n            border-radius: 50%;\n            position: absolute;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n        }\n\n        /* MAPA - STIL MODERN */\n        .path-container { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 20px; }\n        .node {\n            width: 90px; height: 90px; border-radius: 30px;\n            display: flex; align-items: center; justify-content: center;\n            font-size: 2rem; font-weight: 700; cursor: pointer;\n            color: white; transform: rotate(-5deg);\n            box-shadow: 0 10px 0 rgba(0,0,0,0.1);\n        }\n        .node:hover:not(.locked) { transform: rotate(0deg) scale(1.1); }\n        .node.locked { filter: grayscale(1); opacity: 0.4; cursor: not-allowed; }\n\n        textarea {\n            width: 100%; border-radius: 20px; padding: 20px; border: 2px solid #ddd;\n            font-family: 'Outfit', sans-serif; font-size: 1.1rem; resize: none;\n        }\n    </style>\n</head>\n<body>\n\n    <div id=\"stars-container\"></div>\n\n    <div id=\"game-window\">\n        <div class=\"header\" id=\"header\" style=\"display: none;\">\n            <div class=\"stat-badge\">❤️ <span id=\"lives\">3</span></div>\n            <div class=\"progress-container\"><div id=\"fill\"></div></div>\n            <div class=\"stat-badge\" style=\"color: var(--warning);\">⭐ <span id=\"xp\">0</span></div>\n        </div>\n\n        <div id=\"home-screen\" class=\"screen active\" style=\"text-align:center; justify-content: center;\">\n            <h1 style=\"font-size: 3.5rem; margin-bottom: 0; color: var(--primary);\">Ligjet e Njutonit</h1>\n            <p style=\"font-size: 1.4rem; color: #666;\">Ligjet e Fizikës fillojnë këtu!</p>\n            <div style=\"font-size: 8rem; margin: 30px;\">🚀</div>\n            <button class=\"action-btn\" onclick=\"showMap()\">Nis Udhëtimin</button>\n        </div>\n\n        <div id=\"map-screen\" class=\"screen\">\n            <h2 style=\"text-align:center; font-size: 2rem;\">Zgjidh Sistemin</h2>\n            <div class=\"path-container\">\n                <div class=\"node\" style=\"background: var(--primary);\" onclick=\"startLevel(1, 1)\">1</div>\n                <div style=\"width:6px; height:40px; background:#ddd;\"></div>\n                <div class=\"node locked\" id=\"node-1-2\" style=\"background: var(--primary);\" onclick=\"startLevel(1, 2)\">2</div>\n                <div style=\"width:6px; height:40px; background:#ddd;\"></div>\n                <div class=\"node locked\" id=\"node-2-1\" style=\"background: var(--danger);\" onclick=\"startLevel(2, 1)\">3</div>\n                <div style=\"width:6px; height:40px; background:#ddd;\"></div>\n                <div class=\"node locked\" id=\"node-2-2\" style=\"background: var(--danger);\" onclick=\"startLevel(2, 2)\">4</div>\n                <div style=\"width:6px; height:40px; background:#ddd;\"></div>\n                <div class=\"node locked\" id=\"node-3-1\" style=\"background: var(--success);\" onclick=\"startLevel(3, 1)\">5</div>\n                <div style=\"width:6px; height:40px; background:#ddd;\"></div>\n                <div class=\"node locked\" id=\"node-3-2\" style=\"background: var(--success);\" onclick=\"startLevel(3, 2)\">6</div>\n            </div>\n        </div>\n\n        <div id=\"q-screen\" class=\"screen\">\n            <div class=\"question-layout\">\n                <div class=\"left-panel\">\n                    <div id=\"demo-area\">\n                        <div id=\"ball\" class=\"ball\"></div>\n                        <p id=\"visual-text\" style=\"color:#999; font-weight:600;\"></p>\n                    </div>\n                    <div id=\"q-text\" class=\"bubble-card\"></div>\n                    <div id=\"feedback\" style=\"padding:15px; border-radius:15px; font-weight:bold; text-align:center; display:none;\"></div>\n                </div>\n                \n                <div class=\"right-panel\">\n                    <div id=\"options-box\"></div>\n                    <div id=\"open-box\" style=\"display:none;\">\n                        <textarea id=\"answer-in\" rows=\"4\" placeholder=\"Shkruaj shpjegimin tënd këtu...\"></textarea>\n                    </div>\n                    <button id=\"next-btn\" class=\"action-btn\" style=\"width:100%\" onclick=\"handleAction()\">Kontrollo</button>\n                    <button class=\"opt-btn\" style=\"border:none; text-align:center; color: var(--primary); margin-top:10px;\" onclick=\"showHint()\">💡 Kam nevojë për një ndihmë</button>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"checkpoint-screen\" class=\"screen\" style=\"text-align:center; justify-content:center;\">\n            <div style=\"font-size:6rem;\">🏆</div>\n            <h1 style=\"font-size:3rem;\">Niveli u Krye!</h1>\n            <div class=\"bubble-card\">Të lumtë! Vazhdo kështu për të hapur sfidat e radhës.</div>\n            <button class=\"action-btn\" onclick=\"showMap()\">Kthehu tek Harta</button>\n        </div>\n    </div>\n\n    <script>\n        // Të dhënat mbeten të njëjta siç i kërkove\n        const levels = {\n            \"1-1\": { type: \"mcq\", questions: [\n                { q: \"Ligji i Parë i Njutonit thotë se:\", opts: [\"Ndryshon shpejtësinë pa forcë\", \"Nëse rezultantja është zero, trupi ruan qetësinë ose lëvizjen e njëtrajtshme\", \"Trupi ndalon pa forcë\", \"Forcat janë të pabarabarta\"], c: 1, hint: \"Mendo për Inercinë.\" },\n                { q: \"Kur rezultantja e forcave mbi një trup është zero, atëherë:\", opts: [\"Trupi akseleron\", \"Forcat janë të barabarta dhe kemi baraspeshë\", \"Ndryshon drejtim\", \"Ndalohet menjëherë\"], c: 1, hint: \"Forcat thjeshtohen.\" },\n                { q: \"Çfarë quhet gjendja kur mbi një trup nuk vepron asnjë forcë?\", opts: [\"Nxitim konstant\", \"Baraspesh e masave\", \"Gjendje prehje ose lëvizje drejtvijzore të njëtrajtshme\", \"Lëvizje e përshpejtuar\"], c: 2, hint: \"Trupi mbetet siç ishte.\" }\n            ]},\n            \"1-2\": { type: \"open\", questions: [\n                { q: \"Jep një shembull nga jeta që tregon Ligjin e Parë.\", c: \"Kur makina ndalon papritur, ne lëvizim përpara.\", hint: \"Inercia në makinë.\" },\n                { q: \"Nëse një kuti pa fërkim nuk shtyhet, çfarë ndodh?\", c: \"Mbetet në prehje.\", hint: \"Pa forcë = Pa lëvizje.\" },\n                { q: \"Shpjego çfarë do të thotë 'baraspeshë e forcave'.\", c: \"Rezultantja e forcave është zero.\", hint: \"Shuma e forcave.\" }\n            ]},\n            \"2-1\": { type: \"mcq\", questions: [\n                { q: \"Ligji i Dytë thotë se:\", opts: [\"Shpejtësia rritet me forcën\", \"Nxitimi është në përpjesëtim të drejtë me forcën dhe të zhdrejtë me masën\", \"Nxitimi nuk varet nga forca\", \"F = m + a\"], c: 1, hint: \"F = m * a\" },\n                { q: \"Nëse masa dyfishohet dhe forca mbetet e njëjtë, nxitimi:\", opts: [\"Dyfishohet\", \"Zvogëlohet\", \"Nuk ndryshon\", \"Shkon në zero\"], c: 1, hint: \"Më shumë masë = Më pak nxitim.\" },\n                { q: \"Cila formulë është korrekte?\", opts: [\"F = m / a\", \"F = m · a\", \"a = F / m²\", \"F = a / m\"], c: 1, hint: \"Masa herë nxitim.\" }\n            ]},\n            \"2-2\": { type: \"open\", questions: [\n                { q: \"Masa = 5 kg, Forca = 20 N. Gjeni nxitimin.\", c: \"a = 20/5 = 4 m/s²\", hint: \"F pjesëtuar me m.\" },\n                { q: \"Shpjego lidhjen forcë-masë-nxitim.\", c: \"Sa më e madhe forca, aq më i madh nxitimi. Sa më e madhe masa, aq më i vogël nxitimi.\", hint: \"Sipas F=ma.\" }\n            ]},\n            \"3-1\": { type: \"mcq\", questions: [\n                { q: \"Ligji i Tretë thotë se:\", opts: [\"Forcat prekin vetëm tokën\", \"F₂₁ = -F₁₂\", \"Forcat janë në një drejtim\", \"Vepron vetëm rëndesa\"], c: 1, hint: \"Veprim-Kundërveprim.\" },\n                { q: \"Kur dy trupa ndërveprojnë, forcat e tyre:\", opts: [\"Janë të barabarta dhe me kahe të kundërt\", \"Njëra është më e madhe\", \"Bëhen një e vetme\", \"Zhduken\"], c: 0, hint: \"Shty murin, muri të shtyn ty.\" },\n                { q: \"Karakteristika e forcave të Ligjit të 3-të:\", opts: [\"Veprojnë mbi të njëjtin trup\", \"Janë të barabarta, të kundërta, veprojnë mbi DY trupa të ndryshëm\", \"Nuk kanë drejtim\", \"Janë gjithmonë zero\"], c: 1, hint: \"Arsyeja pse nuk baraspeshohen.\" }\n            ]},\n            \"3-2\": { type: \"open\", questions: [\n                { q: \"Jep një shembull të Ligjit të Tretë.\", c: \"Kur shtyjmë murin, muri na shtyn mbrapsht.\", hint: \"Mendo për notin.\" },\n                { q: \"Pse forcat nuk barazpeshohen në Ligjin e 3-të?\", c: \"Sepse veprojnë mbi dy trupa të ndryshëm.\", hint: \"A prekin të njëjtën gjë?\" }\n            ]}\n        };\n\n        let currentId = \"1-1\";\n        let qIdx = 0;\n        let lives = 3;\n        let xp = 0;\n        let state = \"check\"; \n        let unlocked = [\"1-1\"];\n        let selected = null;\n\n        // Background stars\n        const container = document.getElementById('stars-container');\n        for(let i=0; i<100; i++) {\n            const star = document.createElement('div');\n            star.className = 'star';\n            star.style.left = Math.random()*100 + '%';\n            star.style.top = Math.random()*100 + '%';\n            const size = Math.random()*3 + 'px';\n            star.style.width = size; star.style.height = size;\n            star.style.setProperty('--d', (Math.random()*3+2)+'s');\n            container.appendChild(star);\n        }\n\n        function showMap() {\n            hideAll();\n            document.getElementById('map-screen').classList.add('active');\n            document.getElementById('header').style.display = 'flex';\n            unlocked.forEach(id => {\n                const node = document.getElementById(`node-${id}`);\n                if (node) node.classList.remove('locked');\n            });\n        }\n\n        function startLevel(w, l) {\n            const id = `${w}-${l}`;\n            if (!unlocked.includes(id)) return;\n            currentId = id;\n            qIdx = 0;\n            loadQuestion();\n        }\n\n        function loadQuestion() {\n            hideAll();\n            document.getElementById('q-screen').classList.add('active');\n            const data = levels[currentId];\n            const q = data.questions[qIdx];\n            \n            document.getElementById('q-text').innerText = q.q;\n            const feedback = document.getElementById('feedback');\n            feedback.style.display = 'none';\n            document.getElementById('next-btn').innerText = \"Kontrollo\";\n            document.getElementById('next-btn').style.background = \"var(--primary)\";\n            state = \"check\";\n            selected = null;\n\n            if (data.type === \"mcq\") {\n                document.getElementById('options-box').style.display = 'block';\n                document.getElementById('open-box').style.display = 'none';\n                renderMCQ(q.opts);\n            } else {\n                document.getElementById('options-box').style.display = 'none';\n                document.getElementById('open-box').style.display = 'block';\n                document.getElementById('answer-in').value = '';\n            }\n            animateObject();\n            updateStats();\n        }\n\n        function renderMCQ(opts) {\n            const box = document.getElementById('options-box');\n            box.innerHTML = '';\n            opts.forEach((o, i) => {\n                const b = document.createElement('button');\n                b.className = 'opt-btn';\n                b.innerHTML = o;\n                b.onclick = () => { \n                    if(state === \"check\") {\n                        document.querySelectorAll('.opt-btn').forEach(btn => btn.classList.remove('selected'));\n                        b.classList.add('selected');\n                        selected = i;\n                    }\n                };\n                box.appendChild(b);\n            });\n        }\n\n        function handleAction() {\n            const data = levels[currentId];\n            const q = data.questions[qIdx];\n            const feedback = document.getElementById('feedback');\n\n            if (state === \"check\") {\n                if (data.type === \"mcq\" && selected === null) return;\n                \n                feedback.style.display = 'block';\n                if (data.type === \"mcq\") {\n                    const btns = document.querySelectorAll('.opt-btn');\n                    btns.forEach(b => b.classList.add('locked'));\n                    if (selected === q.c) {\n                        btns[selected].classList.add('correct');\n                        feedback.innerHTML = \"SHKËLQYESHËM! ✨ +10 XP\";\n                        feedback.style.color = \"var(--success)\";\n                        xp += 10;\n                    } else {\n                        btns[selected].classList.add('wrong');\n                        btns[q.c].classList.add('correct');\n                        feedback.innerHTML = \"GABIM! ❌ -1 Jeta\";\n                        feedback.style.color = \"var(--danger)\";\n                        lives--;\n                    }\n                } else {\n                    feedback.innerHTML = `<div style=\"text-align:left; font-size:0.9rem;\">Përgjigja e sugjeruar: <br><i style=\"color:var(--primary)\">${q.c}</i></div>`;\n                    xp += 15;\n                }\n                \n                state = \"next\";\n                document.getElementById('next-btn').innerText = \"Vazhdo\";\n                document.getElementById('next-btn').style.background = \"var(--success)\";\n                updateStats();\n                if (lives <= 0) { \n                    alert(\"Uops! Mbaruan jetët. Provo përsëri!\"); \n                    location.reload(); \n                }\n            } else {\n                qIdx++;\n                if (qIdx < data.questions.length) loadQuestion();\n                else completeLevel();\n            }\n        }\n\n        function animateObject() {\n            const ball = document.getElementById('ball');\n            ball.style.left = '0%';\n            setTimeout(() => {\n                ball.style.transition = 'left 3s cubic-bezier(0.4, 0, 0.2, 1)';\n                ball.style.left = '85%';\n            }, 100);\n        }\n\n        function showHint() {\n            alert(\"Sugjerim: \" + levels[currentId].questions[qIdx].hint);\n        }\n\n        function updateStats() {\n            document.getElementById('lives').innerText = lives;\n            document.getElementById('xp').innerText = xp;\n            const total = levels[currentId].questions.length;\n            document.getElementById('fill').style.width = ((qIdx) / total * 100) + \"%\";\n        }\n\n        function completeLevel() {\n            const keys = Object.keys(levels);\n            const currentIdx = keys.indexOf(currentId);\n            if (currentIdx < keys.length - 1) {\n                const nextId = keys[currentIdx + 1];\n                if (!unlocked.includes(nextId)) unlocked.push(nextId);\n                hideAll();\n                document.getElementById('checkpoint-screen').classList.add('active');\n            } else {\n                alert(\"URIME! Ti i përfundove të gjitha!\");\n                location.reload();\n            }\n        }\n\n        function hideAll() {\n            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));\n        }\n    </script>\n</body>\n</html>\n"
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
    url: "/asteriana.html",
    html: ""
  },
  {
    id: "gjej-shkencetarin",
    title: "Gjej shkencetarin",
    category: "Shkencëtarë",
    type: "digital",
    url: "/fuckuuu.html",
    html: ""
  },
  {
    id: "dinamika-adventure",
    title: "Dinamika",
    category: "Dinamika",
    type: "digital",
    url: "/loja-dinamika.html",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aventura e Dinamikës - Pro Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #00f2fe;
            --secondary: #4facfe;
            --accent: #f093fb;
            --bg: #050510;
            --card: rgba(30, 41, 59, 0.7);
            --text: #f8fafc;
            --success: #22c55e;
            --error: #ef4444;
            --gold: #ffd700;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Space Grotesk', sans-serif;
        }

        body {
            background-color: var(--bg);
            background-image: 
                radial-gradient(circle at 20% 30%, rgba(0, 242, 254, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(240, 147, 251, 0.1) 0%, transparent 40%);
            color: var(--text);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
            padding: 20px;
        }

        .game-wrapper {
            width: 100%;
            max-width: 1000px;
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 30px;
        }

        @media (max-width: 900px) {
            .game-wrapper {
                grid-template-columns: 1fr;
            }
        }

        .main-panel {
            background: var(--card);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 30px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .side-panel {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .title-section {
            text-align: center;
            margin-bottom: 30px;
        }

        .title-section h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 2rem;
            background: linear-gradient(to right, var(--primary), var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* --- 3D DICE --- */
        .dice-container {
            perspective: 1000px;
            width: 100px;
            height: 100px;
            margin: 20px auto;
            cursor: pointer;
        }

        .dice {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .dice-face {
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid var(--primary);
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            font-weight: bold;
            color: var(--bg);
            box-shadow: inset 0 0 15px rgba(0, 242, 254, 0.3);
        }

        .front  { transform: rotateY(0deg) translateZ(50px); }
        .back   { transform: rotateY(180deg) translateZ(50px); }
        .right  { transform: rotateY(90deg) translateZ(50px); }
        .left   { transform: rotateY(-90deg) translateZ(50px); }
        .top    { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }

        .dice.rolling {
            animation: roll 0.5s infinite linear;
        }

        @keyframes roll {
            0% { transform: rotateX(0deg) rotateY(0deg); }
            100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        /* --- BOARD --- */
        .board {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 12px;
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 16px;
            position: relative;
        }

        .cell {
            aspect-ratio: 1;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.4);
            position: relative;
            transition: all 0.3s;
        }

        .cell.active-path {
            background: rgba(0, 242, 254, 0.1);
            border-color: var(--primary);
            color: var(--text);
        }

        .cell.finish {
            background: linear-gradient(135deg, #22c55e, #16a34a);
            color: white;
            border: none;
        }

        .cell.start {
            background: linear-gradient(135deg, var(--secondary), var(--primary));
            color: white;
            border: none;
        }

        .player-token {
            width: 34px;
            height: 34px;
            background: var(--accent);
            border: 3px solid white;
            border-radius: 50%;
            position: absolute;
            z-index: 100;
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 0 20px var(--accent);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }

        /* --- MODAL --- */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .modal-content {
            background: #1e293b;
            width: 90%;
            max-width: 500px;
            padding: 40px;
            border-radius: 32px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            animation: modalIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes modalIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        .question-text {
            font-size: 1.2rem;
            margin-bottom: 25px;
            line-height: 1.5;
            color: var(--text);
        }

        .options-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .option-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 16px;
            border-radius: 16px;
            color: var(--text);
            cursor: pointer;
            transition: all 0.2s;
            text-align: left;
            font-size: 1rem;
        }

        .option-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--primary);
            transform: translateX(5px);
        }

        .option-btn.correct {
            background: rgba(34, 197, 94, 0.2);
            border-color: var(--success);
            color: var(--success);
        }

        .option-btn.wrong {
            background: rgba(239, 68, 68, 0.2);
            border-color: var(--error);
            color: var(--error);
        }

        .btn-action {
            margin-top: 20px;
            padding: 14px 28px;
            background: var(--primary);
            border: none;
            border-radius: 12px;
            color: var(--bg);
            font-weight: 700;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: 0.3s;
        }

        .btn-action:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 242, 254, 0.3);
        }

        /* --- STATS --- */
        .stat-card {
            background: var(--card);
            padding: 20px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            font-family: 'Orbitron', sans-serif;
        }

        .stat-label {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.6;
            margin-top: 5px;
        }

        .hidden { display: none !important; }

        /* Victory Screen */
        #victory-screen {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: var(--bg);
            z-index: 2000;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .victory-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 4rem;
            color: var(--gold);
            text-shadow: 0 0 30px var(--gold);
            margin-bottom: 20px;
        }
    </style>
</head>
<body>

    <div class="game-wrapper">
        <div class="main-panel">
            <div class="title-section">
                <h1>Aventura e Dinamikës</h1>
                <p style="opacity: 0.6; font-size: 0.9rem; margin-top: 5px;">Mjeshtëro forcat dhe ligjet e Njutonit</p>
            </div>

            <div class="board" id="board">
                <div id="player" class="player-token">🚀</div>
                <!-- Cells will be generated here -->
            </div>
        </div>

        <div class="side-panel">
            <div class="stat-card">
                <div class="stat-value" id="score-val">0</div>
                <div class="stat-label">Pikët</div>
            </div>

            <div class="stat-card">
                <div class="stat-label" style="margin-bottom: 10px;">Kliko për të hedhur zarin</div>
                <div class="dice-container" onclick="rollDice()">
                    <div class="dice" id="dice">
                        <div class="dice-face front">1</div>
                        <div class="dice-face back">6</div>
                        <div class="dice-face right">3</div>
                        <div class="dice-face left">4</div>
                        <div class="dice-face top">2</div>
                        <div class="dice-face bottom">5</div>
                    </div>
                </div>
            </div>

            <div class="stat-card" style="font-size: 0.85rem; text-align: left; line-height: 1.4;">
                <strong style="color: var(--primary);">Rregullat:</strong><br>
                1. Hidh zarin për të lëvizur.<br>
                2. Përgjigju saktë pyetjes për të qëndruar në vend.<br>
                3. Nëse gabon, kthehesh 2 hapa pas!<br>
                4. Arri në FINISH për të fituar.
            </div>
        </div>
    </div>

    <div class="modal-overlay" id="modal">
        <div class="modal-content">
            <div class="question-text" id="q-text">Pyetja po ngarkohet...</div>
            <div class="options-list" id="options"></div>
            <button class="btn-action hidden" id="btn-continue" onclick="closeModal()">Vazhdo</button>
        </div>
    </div>

    <div id="victory-screen">
        <h1 class="victory-title">FITORE!</h1>
        <p style="font-size: 1.5rem; margin-bottom: 30px;">Ti je mjeshtër i Dinamikës!</p>
        <button class="btn-action" onclick="location.reload()">Luaj Përsëri</button>
    </div>

    <script>
        const board = document.getElementById('board');
        const player = document.getElementById('player');
        const dice = document.getElementById('dice');
        const modal = document.getElementById('modal');
        const qText = document.getElementById('q-text');
        const optionsDiv = document.getElementById('options');
        const btnContinue = document.getElementById('btn-continue');
        const scoreVal = document.getElementById('score-val');

        const totalCells = 24;
        let playerPos = 0;
        let isRolling = false;
        let score = 0;

        const questions = [
            { q: "Forca me të cilën Toka tërheq trupin quhet:", options: ["Forca e fërkimit", "Forca e rëndesës", "Forca e elasticitetit", "Forca e tensionit"], correct: 1 },
            { q: "Ku zbatohet forca e rëndesës?", options: ["Në sipërfaqen e trupit", "Në qendër të trupit", "Në pikën e mbështetjes", "Në skajet e trupit"], correct: 1 },
            { q: "Drejtimi i forcës së rëndesës është:", options: ["Horizontal", "Vertikalisht lart", "Pingul me sipërfaqen e Tokës", "Paralel me lëvizjen"], correct: 2 },
            { q: "Pesha është forca që trupi ushtron:", options: ["Mbi veten e tij", "Atje ku varet ose mbështetet", "Mbi ajrin", "Mbi qendrën e Tokës"], correct: 1 },
            { q: "Kur është Forca e Rëndesës (G) e barabartë me Peshën (P)?", options: ["Kur trupi lëviz me nxitim", "Kur trupi është në prehje ose lëviz me v=konst", "Kur trupi bie lirshëm", "Asnjëherë"], correct: 1 },
            { q: "Formula e Ligjit të tërheqjes së gjithësishme është:", options: ["F = m*g", "F = k*x", "F = G * (m1*m2)/R²", "F = mu * N"], correct: 2 },
            { q: "Me rritjen e lartësisë (h) nga Toka, nxitimi i rënies së lirë (g):", options: ["Rritet", "Zvogëlohet", "Nuk ndryshon", "Bëhet zero menjëherë"], correct: 1 },
            { q: "Formula e Ligjit të Hukut është:", options: ["F = m*a", "Fe = -k*x", "F = mu * N", "P = m*g"], correct: 1 },
            { q: "Çfarë tregon shenja minus te formula Fe = -kx?", options: ["Forca është negative", "Drejtimi i forcës është i njëjtë me shformimin", "Drejtimi i forcës është i kundërt me shformimin", "Nuk tregon asgjë"], correct: 2 },
            { q: "Forca e fërkimit ka gjithmonë kah:", options: ["Të njëjtë me lëvizjen", "Të kundërt me lëvizjen", "Pingul me lëvizjen", "Të rastësishëm"], correct: 1 },
            { q: "Formula e forcës së fërkimit është:", options: ["f = m*g", "f = k*x", "f = mu * N", "f = G/R"], correct: 2 },
            { q: "Nëse m2 = m1/4 dhe F2 = 2F1, sa herë zmadhohet nxitimi a2?", options: ["2 herë", "4 herë", "8 herë", "16 herë"], correct: 2 },
            { q: "Nëse m2 = 8m1 dhe F2 = F1/4, sa bëhet nxitimi a2?", options: ["a1/2", "a1/8", "a1/32", "4*a1"], correct: 2 },
            { q: "Nëse m = 2kg dhe trupi është i varur në fije, sa është Tensioni (T)? (g=10)", options: ["10 N", "20 N", "5 N", "40 N"], correct: 1 },
            { q: "Nëse F=600N, f=300N dhe a=4m/s², sa është masa (m)?", options: ["50 kg", "75 kg", "100 kg", "150 kg"], correct: 1 },
            { q: "Nëse v0=10m/s dhe mu=0.5, sa rrugë bën trupi derisa ndalon?", options: ["5 m", "10 m", "20 m", "50 m"], correct: 1 },
            { q: "Kur një trup ndalon vetëm për shkak të fërkimit, nxitimi a është:", options: ["a = g", "a = mu * g", "a = F/m", "a = 0"], correct: 1 }
        ];

        function initBoard() {
            for (let i = 0; i < totalCells; i++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                if (i === 0) {
                    cell.classList.add('start');
                    cell.innerText = 'START';
                } else if (i === totalCells - 1) {
                    cell.classList.add('finish');
                    cell.innerText = 'FINISH';
                } else {
                    cell.classList.add('active-path');
                    cell.innerText = i;
                }
                board.appendChild(cell);
            }
            updatePlayer();
        }

        function updatePlayer() {
            const cells = document.querySelectorAll('.cell');
            const target = cells[playerPos];
            player.style.top = (target.offsetTop + (target.offsetHeight / 2) - 17) + 'px';
            player.style.left = (target.offsetLeft + (target.offsetWidth / 2) - 17) + 'px';
        }

        function rollDice() {
            if (isRolling) return;
            isRolling = true;
            dice.classList.add('rolling');

            const result = Math.floor(Math.random() * 6) + 1;
            
            setTimeout(() => {
                dice.classList.remove('rolling');
                applyDiceRotation(result);
                setTimeout(() => movePlayer(result), 600);
            }, 1000);
        }

        function applyDiceRotation(n) {
            const rotations = {
                1: 'rotateX(0deg) rotateY(0deg)',
                2: 'rotateX(-90deg) rotateY(0deg)',
                3: 'rotateX(0deg) rotateY(-90deg)',
                4: 'rotateX(0deg) rotateY(90deg)',
                5: 'rotateX(90deg) rotateY(0deg)',
                6: 'rotateX(180deg) rotateY(0deg)'
            };
            dice.style.transform = rotations[n];
        }

        async function movePlayer(steps) {
            for (let i = 0; i < steps; i++) {
                if (playerPos < totalCells - 1) {
                    playerPos++;
                    updatePlayer();
                    await new Promise(r => setTimeout(r, 300));
                }
            }

            if (playerPos === totalCells - 1) {
                document.getElementById('victory-screen').style.display = 'flex';
            } else {
                showQuestion();
            }
        }

        function showQuestion() {
            const q = questions[Math.floor(Math.random() * questions.length)];
            qText.innerText = q.q;
            optionsDiv.innerHTML = '';
            btnContinue.classList.add('hidden');

            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerText = opt;
                btn.onclick = () => checkAnswer(idx, q.correct, btn);
                optionsDiv.appendChild(btn);
            });

            modal.style.display = 'flex';
        }

        function checkAnswer(idx, correct, btn) {
            const allBtns = document.querySelectorAll('.option-btn');
            allBtns.forEach(b => b.style.pointerEvents = 'none');

            if (idx === correct) {
                btn.classList.add('correct');
                score += 10;
                scoreVal.innerText = score;
                setTimeout(closeModal, 1000);
            } else {
                btn.classList.add('wrong');
                allBtns[correct].classList.add('correct');
                score = Math.max(0, score - 5);
                scoreVal.innerText = score;
                
                // Penalty: move back
                setTimeout(() => {
                    playerPos = Math.max(0, playerPos - 2);
                    updatePlayer();
                    closeModal();
                }, 1500);
            }
        }

        function closeModal() {
            modal.style.display = 'none';
            isRolling = false;
        }

        window.addEventListener('resize', updatePlayer);
        initBoard();
    </script>
</body>
</html>`
  },
  {
    id: "mjeshtri-tingullit",
    title: "Mjeshtri i Tingullit",
    category: "Valët dhe Tingulli",
    type: "digital",
    url: "/mjeshtri-tingullit.html",
    html: ""
  },
  {
    id: "sfida-matures",
    title: "Sfida e Maturës",
    category: "Fizika",
    type: "digital",
    url: "/sfida-matures.html",
    html: ""
  }
];
