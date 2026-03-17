
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
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Mësojmë Impulsin dhe Momentin</title>\n    <style>\n        :root {\n            --primary: #00f2fe;\n            --secondary: #4facfe;\n            --accent: #f093fb;\n            --bg: #0f172a;\n            --card: #1e293b;\n            --text: #f8fafc;\n            --success: #22c55e;\n            --error: #ef4444;\n        }\n\n        body {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            background-color: var(--bg);\n            color: var(--text);\n            margin: 0;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            min-height: 100vh;\n        }\n\n        .game-header {\n            margin: 20px 0;\n            text-align: center;\n        }\n\n        .container {\n            width: 90%; max-width: 900px;\n            background: var(--card);\n            padding: 30px;\n            border-radius: 20px;\n            box-shadow: 0 20px 50px rgba(0,0,0,0.5);\n            border: 1px solid rgba(255,255,255,0.1);\n        }\n\n        canvas {\n            background: #020617;\n            border-radius: 15px;\n            width: 100%;\n            height: 300px;\n            border: 2px solid var(--secondary);\n            margin-bottom: 20px;\n        }\n\n        .interface {\n            display: grid;\n            grid-template-columns: 1.2fr 0.8fr;\n            gap: 25px;\n        }\n\n        .level-info {\n            background: rgba(255,255,255,0.03);\n            padding: 20px;\n            border-radius: 12px;\n            border-left: 5px solid var(--primary);\n        }\n\n        .control-panel {\n            background: rgba(255,255,255,0.03);\n            padding: 20px;\n            border-radius: 12px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        h2 { color: var(--primary); margin-top: 0; }\n        \n        .formula-box {\n            background: #000;\n            padding: 10px;\n            border-radius: 8px;\n            color: var(--accent);\n            font-family: 'Courier New', Courier, monospace;\n            font-size: 1.2rem;\n            margin: 10px 0;\n            text-align: center;\n        }\n\n        input {\n            background: #334155;\n            border: 2px solid var(--secondary);\n            color: white;\n            padding: 12px;\n            border-radius: 8px;\n            font-size: 1.1rem;\n            margin-bottom: 10px;\n            outline: none;\n        }\n\n        button {\n            background: linear-gradient(135deg, var(--secondary), var(--primary));\n            border: none;\n            color: white;\n            padding: 15px;\n            border-radius: 8px;\n            font-weight: bold;\n            cursor: pointer;\n            transition: 0.3s;\n            text-transform: uppercase;\n        }\n\n        button:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);\n        }\n\n        #feedback {\n            margin-top: 15px;\n            font-weight: bold;\n            height: 20px;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"game-header\">\n        <h1>🚀 Laboratori Virtual i Fizikës</h1>\n        <p>Mjeshtëro Impulsin dhe Momentin përmes sfidave</p>\n    </div>\n\n    <div class=\"container\">\n        <canvas id=\"gameCanvas\" width=\"800\" height=\"300\"></canvas>\n\n        <div class=\"interface\">\n            <div class=\"level-info\">\n                <h2 id=\"lvl-title\">Niveli 1</h2>\n                <p id=\"lvl-desc\">Përshkrimi po ngarkohet...</p>\n                <div class=\"formula-box\" id=\"lvl-formula\">p = m × v</div>\n                <p id=\"lvl-data\">Të dhënat: ...</p>\n            </div>\n\n            <div class=\"control-panel\">\n                <label style=\"margin-bottom: 8px;\">Rezultati yt:</label>\n                <input type=\"number\" id=\"user-input\" placeholder=\"Shëno vlerën...\" step=\"any\">\n                <button onclick=\"checkAnswer()\">Verifiko Fizikën</button>\n                <div id=\"feedback\"></div>\n            </div>\n        </div>\n    </div>\n\n<script>\n    const canvas = document.getElementById(\"gameCanvas\");\n    const ctx = canvas.getContext(\"2d\");\n    let level = 1;\n    let animFrame = 0;\n    let isMoving = false;\n\n    const levels = [\n        {\n            title: \"Niveli 1: Impulsi i Trupit\",\n            desc: \"Një makinë ka masën 1200kg dhe lëviz me shpejtësi 20m/s. Sa është impulsi i saj (p)?\",\n            formula: \"p = m \\u00d7 v\",\n            data: \"m = 1200 kg | v = 20 m/s\",\n            goal: 24000,\n            unit: \"kg·m/s\"\n        },\n        {\n            title: \"Niveli 2: Ruajtja e Impulsit\",\n            desc: \"Sfera A (4kg, 6m/s) godet sferën B (2kg) që është në prehje. Pas goditjes ato lëvizin bashkë. Gjej shpejtësinë finale (V).\",\n            formula: \"m1v1 + m2v2 = (m1+m2)V\",\n            data: \"m1=4kg, v1=6 | m2=2kg, v2=0\",\n            goal: 4,\n            unit: \"m/s\"\n        },\n        {\n            title: \"Niveli 3: Momenti i Forcës\",\n            desc: \"Për të balancuar një levë, një forcë prej 60N vendoset 2m larg qendrës. Sa duhet të jetë forca tjetër në distancë 1.5m?\",\n            formula: \"F1 \\u00d7 d1 = F2 \\u00d7 d2\",\n            data: \"F1=60N, d1=2m | d2=1.5m\",\n            goal: 80,\n            unit: \"N\"\n        },\n        {\n            title: \"Niveli 4: Impulsi i Forcës (Impulsi)\",\n            desc: \"Një lojtar godet topin me një forcë 150N për një kohë prej 0.2 sekonda. Sa është ndryshimi i impulsit (\\u0394p)?\",\n            formula: \"I = F \\u00d7 \\u0394t = \\u0394p\",\n            data: \"F = 150 N | \\u0394t = 0.2 s\",\n            goal: 30,\n            unit: \"kg·m/s\"\n        },\n        {\n            title: \"Niveli 5: Ekuilibri i Momenteve\",\n            desc: \"Një dërrasë 4m e gjatë ka mbështetjen në mes. Një gur 10kg është në skajin e majtë (2m). Sa kg duhet të jetë guri në distancën 1m djathtas?\",\n            formula: \"m1 \\u00d7 d1 = m2 \\u00d7 d2\",\n            data: \"m1=10kg, d1=2m | d2=1m\",\n            goal: 20,\n            unit: \"kg\"\n        }\n    ];\n\n    function draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        const l = levels[level-1];\n\n        if(level === 3 || level === 5) { // Vizatimi i Levës\n            ctx.strokeStyle = \"white\"; ctx.lineWidth = 6;\n            ctx.beginPath(); ctx.moveTo(150, 200); ctx.lineTo(650, 200); ctx.stroke();\n            ctx.fillStyle = \"#475569\";\n            ctx.beginPath(); ctx.moveTo(400, 200); ctx.lineTo(375, 250); ctx.lineTo(425, 250); ctx.fill();\n        } else { // Vizatimi i Impulsit\n            ctx.fillStyle = \"#334155\";\n            ctx.fillRect(0, 250, 800, 50);\n            ctx.fillStyle = varColor();\n            ctx.beginPath();\n            ctx.arc(100 + animFrame, 230, 20, 0, Math.PI*2);\n            ctx.fill();\n            ctx.fillStyle = \"#ef4444\";\n            ctx.fillRect(750, 180, 15, 70);\n        }\n    }\n\n    function varColor() {\n        return level % 2 === 0 ? \"#a855f7\" : \"#00f2fe\";\n    }\n\n    function checkAnswer() {\n        const val = parseFloat(document.getElementById(\"user-input\").value);\n        const current = levels[level-1];\n        const feedback = document.getElementById(\"feedback\");\n\n        if(val === current.goal) {\n            feedback.style.color = \"var(--success)\";\n            feedback.innerText = \"Saktë! Rezultati: \" + current.goal + \" \" + current.unit;\n            animateSuccess();\n        } else {\n            feedback.style.color = \"var(--error)\";\n            feedback.innerText = \"E gabuar. Rishiko formulën!\";\n        }\n    }\n\n    function animateSuccess() {\n        isMoving = true;\n        let start = Date.now();\n        let timer = setInterval(() => {\n            let timePassed = Date.now() - start;\n            if (timePassed >= 1000) {\n                clearInterval(timer);\n                isMoving = false;\n                animFrame = 0;\n                nextLevel();\n            }\n            animFrame += 15;\n            draw();\n        }, 20);\n    }\n\n    function nextLevel() {\n        if(level < levels.length) {\n            level++;\n            initLevel();\n        } else {\n            alert(\"Urime! Ti i kalove të gjitha sfidat e fizikës!\");\n            level = 1;\n            initLevel();\n        }\n    }\n\n    function initLevel() {\n        const l = levels[level-1];\n        document.getElementById(\"lvl-title\").innerText = l.title;\n        document.getElementById(\"lvl-desc\").innerText = l.desc;\n        document.getElementById(\"lvl-formula\").innerText = l.formula;\n        document.getElementById(\"lvl-data\").innerText = \"Të dhënat: \" + l.data;\n        document.getElementById(\"user-input\").value = \"\";\n        document.getElementById(\"feedback\").innerText = \"\";\n        animFrame = 0;\n        draw();\n    }\n\n    initLevel();\n</script>\n</body>\n</html>\n"
  },
  {
    id: "energy-modul",
    title: "Energjia Fizike: Moduli 10",
    category: "Energjia",
    type: "digital",
    html: "<!DOCTYPE html>\n<html lang=\"sq\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Energjia Fizike: Moduli 10</title>\n    <style>\n        :root {\n            --bg: #0b0e14;\n            --card: #161b22;\n            --accent-pink: #d4a5b2; \n            --accent-purple: #7c5cb2;\n            --text-main: #e6edf3;\n            --border: #30363d;\n            --success: #238636;\n        }\n\n        body {\n            font-family: 'Inter', sans-serif;\n            background-color: var(--bg);\n            color: var(--text-main);\n            margin: 0;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            padding: 40px;\n        }\n\n        .container {\n            width: 90%; max-width: 850px;\n            background: var(--card);\n            border: 1px solid var(--border);\n            border-radius: 12px;\n            padding: 35px;\n            box-shadow: 0 10px 30px rgba(0,0,0,0.5);\n        }\n\n        h1 {\n            color: var(--accent-pink);\n            font-weight: 300;\n            letter-spacing: 2px;\n            text-transform: uppercase;\n            font-size: 1.4rem;\n            margin-bottom: 25px;\n        }\n\n        canvas {\n            background: #0d1117;\n            border: 1px solid var(--border);\n            border-radius: 8px;\n            width: 100%;\n            height: 300px;\n        }\n\n        .interface {\n            display: grid;\n            grid-template-columns: 1.2fr 0.8fr;\n            gap: 25px;\n            margin-top: 30px;\n        }\n\n        .task-box {\n            background: rgba(255, 255, 255, 0.02);\n            padding: 20px;\n            border-radius: 8px;\n            border-left: 3px solid var(--accent-pink);\n        }\n\n        .formula-display {\n            display: block;\n            margin: 15px 0;\n            font-family: \"Times New Roman\", serif;\n            font-size: 1.4rem;\n            color: var(--accent-pink);\n            background: rgba(0,0,0,0.3);\n            padding: 10px;\n            border-radius: 5px;\n            text-align: center;\n        }\n\n        input {\n            background: #0d1117;\n            border: 1px solid var(--border);\n            color: white;\n            padding: 15px;\n            border-radius: 6px;\n            width: 100%;\n            margin-bottom: 15px;\n            box-sizing: border-box;\n            font-size: 1rem;\n        }\n\n        button {\n            background: transparent;\n            border: 1px solid var(--accent-pink);\n            color: var(--accent-pink);\n            padding: 15px;\n            width: 100%;\n            border-radius: 6px;\n            cursor: pointer;\n            transition: 0.3s;\n            text-transform: uppercase;\n            font-weight: bold;\n        }\n\n        button:hover {\n            background: var(--accent-pink);\n            color: var(--bg);\n        }\n\n        #feedback {\n            margin-top: 15px;\n            font-size: 0.95rem;\n            font-weight: 500;\n        }\n    </style>\n</head>\n<body>\n\n    <h1>Laboratori Virtual i Energjisë</h1>\n\n    <div class=\"container\">\n        <canvas id=\"canvas\" width=\"800\" height=\"300\"></canvas>\n\n        <div class=\"interface\">\n            <div class=\"task-box\">\n                <h2 id=\"lvl-name\" style=\"margin:0; font-size:1.1rem;\">Niveli 1</h2>\n                <p id=\"lvl-desc\" style=\"color: #8b949e;\"></p>\n                <div class=\"formula-display\" id=\"lvl-formula\"></div>\n                <p id=\"lvl-data\" style=\"font-weight: bold; color: var(--accent-purple);\"></p>\n            </div>\n\n            <div class=\"input-section\">\n                <input type=\"number\" id=\"answer\" placeholder=\"Shëno vlerën (J)...\">\n                <button onclick=\"check()\">Verifiko Rezultatin</button>\n                <div id=\"feedback\"></div>\n            </div>\n        </div>\n    </div>\n\n<script>\n    const canvas = document.getElementById(\"canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    \n    let level = 1;\n    let animPos = 0;\n    let animId;\n\n    const levels = [\n        {\n            name: \"Niveli 1: Energjia Potenciale Gravitacionale\",\n            desc: \"Llogarit Ep për një sferë në lartësi.\",\n            formula: \"E_p = m \\u22c5 g \\u22c5 h\",\n            data: \"m = 5 kg | h = 8 m | g = 10 m/s\\u00b2\",\n            goal: 400,\n            type: \"p\"\n        },\n        {\n            name: \"Niveli 2: Energjia Kinetike\",\n            desc: \"Llogarit Ek për trupin në lëvizje.\",\n            formula: \"E_k = \\u00bd \\u22c5 m \\u22c5 v\\u00b2\",\n            data: \"m = 4 kg | v = 10 m/s\",\n            goal: 200, // 0.5 * 4 * 100\n            type: \"k\"\n        },\n        {\n            name: \"Niveli 3: Puna dhe Energjia\",\n            desc: \"Sa është lartësia (h) nëse E_p = 600 J?\",\n            formula: \"h = E_p / (m \\u22c5 g)\",\n            data: \"E_p = 600 J | m = 3 kg | g = 10 m/s\\u00b2\",\n            goal: 20,\n            type: \"p\"\n        },\n        {\n            name: \"Niveli 4: Shpejtësia nga Energjia\",\n            desc: \"Gjej shpejtësinë (v) duke përdorur E_k.\",\n            formula: \"v = \\u221a(2E_k / m)\",\n            data: \"E_k = 100 J | m = 2 kg\",\n            goal: 10, // sqrt(200/2)\n            type: \"k\"\n        },\n        {\n            name: \"Niveli 5: Ruajtja e Energjisë\",\n            desc: \"Gjej Ep nëse Ek = 150J dhe Etot = 500J.\",\n            formula: \"E_{tot} = E_k + E_p\",\n            data: \"E_{tot} = 500 J | E_k = 150 J\",\n            goal: 350,\n            type: \"p\"\n        }\n    ];\n\n    function draw(offset = 0) {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        const l = levels[level-1];\n\n        // Toka\n        ctx.strokeStyle = \"#30363d\";\n        ctx.lineWidth = 2;\n        ctx.beginPath(); ctx.moveTo(50, 250); ctx.lineTo(750, 250); ctx.stroke();\n\n        ctx.fillStyle = \"#d4a5b2\";\n        if(l.type === \"p\") {\n            // Animimi i rënies (Potenciale)\n            ctx.beginPath();\n            ctx.arc(400, 60 + offset, 15, 0, Math.PI*2);\n            ctx.fill();\n            // Vijë lartësie\n            ctx.strokeStyle = \"#7c5cb2\";\n            ctx.setLineDash([5, 5]);\n            ctx.beginPath(); ctx.moveTo(400, 60 + offset); ctx.lineTo(400, 250); ctx.stroke();\n            ctx.setLineDash([]);\n        } else {\n            // Animimi i lëvizjes (Kinetike)\n            ctx.beginPath();\n            ctx.arc(100 + offset, 235, 15, 0, Math.PI*2);\n            ctx.fill();\n            // Efekti i shpejtësisë\n            ctx.fillStyle = \"rgba(212, 165, 178, 0.3)\";\n            ctx.fillRect(80 + offset, 230, -20, 10);\n        }\n    }\n\n    function check() {\n        const val = parseFloat(document.getElementById(\"answer\").value);\n        const current = levels[level-1];\n        const feedback = document.getElementById(\"feedback\");\n\n        if(Math.abs(val - current.goal) < 0.1) {\n            feedback.style.color = \"#238636\";\n            feedback.innerText = \"Saktë! Simulimi po ekzekutohet...\";\n            animateAction();\n        } else {\n            feedback.style.color = \"#f85149\";\n            feedback.innerText = \"E gabuar. Kontrollo llogaritjen e v\\u00b2 ose produktin mgh.\";\n        }\n    }\n\n    function animateAction() {\n        let start = 0;\n        cancelAnimationFrame(animId);\n        function step() {\n            start += 8;\n            draw(start);\n            if(start < 190) {\n                animId = requestAnimationFrame(step);\n            } else {\n                setTimeout(() => {\n                    level = (level < 5) ? level + 1 : 1;\n                    init();\n                }, 800);\n            }\n        }\n        step();\n    }\n\n    function init() {\n        const l = levels[level-1];\n        document.getElementById(\"lvl-name\").innerText = l.name;\n        document.getElementById(\"lvl-desc\").innerText = l.desc;\n        document.getElementById(\"lvl-formula\").innerText = l.formula;\n        document.getElementById(\"lvl-data\").innerText = l.data;\n        document.getElementById(\"answer\").value = \"\";\n        document.getElementById(\"feedback\").innerText = \"\";\n        draw();\n    }\n\n    init();\n</script>\n</body>\n</html>\n"
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
    category: "Elektriciteti",
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
        .pool { width: 100%; max-width: 300px; display: flex; flex-wrap: wrap; justify-content: center; align-content: center; gap: 12px; background: rgba(255,255,255,0.03); border-radius: 30px; }
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
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratori i Elektricitetit</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #0a0a1a;
            --panel-bg: rgba(20, 20, 40, 0.8);
            --primary: #00f2fe;
            --secondary: #4facfe;
            --accent: #f093fb;
            --text: #e0e0e0;
            --wire-color: #555;
            --wire-active: #00f2fe;
            --electron: #ffeb3b;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text);
            font-family: 'Space Mono', monospace;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
        }

        h1 {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary);
            text-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
            margin-top: 20px;
            text-align: center;
        }

        .game-container {
            display: flex;
            gap: 20px;
            width: 90%;
            max-width: 1200px;
            margin-top: 20px;
        }

        .circuit-board {
            flex: 2;
            background: var(--panel-bg);
            border: 2px solid var(--primary);
            border-radius: 15px;
            position: relative;
            height: 500px;
            box-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
            overflow: hidden;
        }

        .controls-panel {
            flex: 1;
            background: var(--panel-bg);
            border: 2px solid var(--secondary);
            border-radius: 15px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        /* Circuit Elements */
        .component {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.2s;
            z-index: 10;
        }

        .component:hover {
            transform: scale(1.1);
        }

        .battery {
            width: 60px;
            height: 100px;
            border: 3px solid #fff;
            border-radius: 5px;
            background: linear-gradient(to bottom, #ff4444 50%, #4444ff 50%);
            left: 50px;
            top: 200px;
        }

        .battery::before {
            content: '+';
            position: absolute;
            top: 10px;
            color: white;
            font-weight: bold;
            font-size: 20px;
        }

        .battery::after {
            content: '-';
            position: absolute;
            bottom: 10px;
            color: white;
            font-weight: bold;
            font-size: 24px;
        }

        .lightbulb {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 2px solid #fff;
            background: rgba(255, 255, 255, 0.1);
            right: 100px;
            top: 100px;
            transition: all 0.3s;
        }

        .lightbulb.on {
            background: radial-gradient(circle, #fff 0%, #ffeb3b 50%, transparent 100%);
            box-shadow: 0 0 50px #ffeb3b;
            border-color: #ffeb3b;
        }

        .resistor {
            width: 80px;
            height: 30px;
            background: #8b4513;
            border: 2px solid #fff;
            right: 100px;
            bottom: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .resistor-band {
            width: 10px;
            height: 100%;
        }

        .switch {
            width: 60px;
            height: 30px;
            left: 250px;
            top: 50px;
            position: relative;
        }

        .switch-base {
            width: 100%;
            height: 4px;
            background: #fff;
            position: absolute;
            bottom: 0;
        }

        .switch-arm {
            width: 50px;
            height: 4px;
            background: var(--primary);
            position: absolute;
            left: 0;
            bottom: 0;
            transform-origin: left center;
            transform: rotate(-30deg);
            transition: transform 0.3s;
        }

        .switch.closed .switch-arm {
            transform: rotate(0deg);
        }

        /* Wires */
        .wire {
            position: absolute;
            background: var(--wire-color);
            z-index: 1;
        }

        .wire.active {
            background: var(--wire-active);
            box-shadow: 0 0 10px var(--wire-active);
        }

        /* Electrons */
        .electron {
            width: 8px;
            height: 8px;
            background: var(--electron);
            border-radius: 50%;
            position: absolute;
            box-shadow: 0 0 8px var(--electron);
            display: none;
            z-index: 5;
        }

        .active .electron {
            display: block;
        }

        /* Controls */
        .control-group {
            background: rgba(0, 0, 0, 0.5);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .control-group label {
            display: block;
            margin-bottom: 10px;
            color: var(--primary);
            font-weight: bold;
        }

        input[type="range"] {
            width: 100%;
            accent-color: var(--primary);
        }

        .value-display {
            float: right;
            color: var(--accent);
        }

        .btn {
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            border: none;
            padding: 12px;
            color: #000;
            font-family: 'Orbitron', sans-serif;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            text-transform: uppercase;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 242, 254, 0.4);
        }

        .meters {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .meter {
            background: #000;
            border: 2px solid #333;
            border-radius: 8px;
            padding: 10px;
            text-align: center;
        }

        .meter-title {
            font-size: 0.8rem;
            color: #888;
        }

        .meter-value {
            font-size: 1.5rem;
            color: #0f0;
            font-family: 'Orbitron', sans-serif;
        }

        /* Quiz Overlay */
        .quiz-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 100;
            border-radius: 15px;
        }

        .quiz-box {
            background: var(--panel-bg);
            border: 2px solid var(--accent);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            max-width: 80%;
        }

        .quiz-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 20px;
        }

        .quiz-btn {
            background: transparent;
            border: 1px solid var(--primary);
            color: white;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Space Mono', monospace;
            transition: 0.3s;
        }

        .quiz-btn:hover {
            background: var(--primary);
            color: black;
        }
    </style>
</head>
<body>

    <h1>Laboratori i Elektricitetit</h1>

    <div class="game-container">
        <div class="circuit-board" id="board">
            <!-- Wires -->
            <div class="wire" style="top: 65px; left: 80px; width: 170px; height: 4px;"></div>
            <div class="wire" style="top: 65px; left: 310px; width: 200px; height: 4px;"></div>
            <div class="wire" style="top: 65px; right: 130px; width: 4px; height: 35px;"></div>
            
            <div class="wire" style="bottom: 115px; right: 130px; width: 4px; height: 100px;"></div>
            <div class="wire" style="bottom: 115px; left: 80px; width: 390px; height: 4px;"></div>
            
            <div class="wire" style="top: 65px; left: 80px; width: 4px; height: 135px;"></div>
            <div class="wire" style="bottom: 115px; left: 80px; width: 4px; height: 85px;"></div>

            <!-- Components -->
            <div class="component battery" id="battery" title="Burimi i Rrymës (Bateria)"></div>
            
            <div class="component switch" id="switch" onclick="toggleSwitch()" title="Çelësi (Kliko për të hapur/mbyllur)">
                <div class="switch-base"></div>
                <div class="switch-arm"></div>
            </div>
            
            <div class="component lightbulb" id="bulb" title="Llambushka (Konsumatori)"></div>
            
            <div class="component resistor" id="resistor" title="Rezistenca">
                <div class="resistor-band" style="background: red;"></div>
                <div class="resistor-band" style="background: black;"></div>
                <div class="resistor-band" style="background: brown;"></div>
            </div>

            <div class="quiz-overlay" id="quiz">
                <div class="quiz-box">
                    <h2 style="color: var(--accent); margin-top: 0;">Sfidë e Qarkut!</h2>
                    <p id="q-text">Nëse rrisim tensionin (U) dhe rezistenca (R) mbetet e njëjtë, çfarë ndodh me rrymën (I)?</p>
                    <div class="quiz-options" id="q-opts">
                        <!-- Options injected via JS -->
                    </div>
                </div>
            </div>
        </div>

        <div class="controls-panel">
            <div class="meters">
                <div class="meter">
                    <div class="meter-title">TENSIONI (U)</div>
                    <div class="meter-value" id="val-u">12.0 V</div>
                </div>
                <div class="meter">
                    <div class="meter-title">RRYMA (I)</div>
                    <div class="meter-value" id="val-i">0.00 A</div>
                </div>
            </div>

            <div class="control-group">
                <label>
                    Tensioni i Baterisë (V)
                    <span class="value-display" id="disp-v">12 V</span>
                </label>
                <input type="range" id="slider-v" min="0" max="24" value="12" step="1" oninput="updateCircuit()">
            </div>

            <div class="control-group">
                <label>
                    Rezistenca (Ω)
                    <span class="value-display" id="disp-r">10 Ω</span>
                </label>
                <input type="range" id="slider-r" min="1" max="50" value="10" step="1" oninput="updateCircuit()">
            </div>

            <div class="control-group" style="background: rgba(0, 242, 254, 0.1); border-color: var(--primary);">
                <label style="text-align: center; margin-bottom: 5px;">Ligji i Ohmit</label>
                <div style="text-align: center; font-size: 1.5rem; font-family: 'Orbitron'; color: white;">
                    I = <span style="color: var(--primary);">U</span> / <span style="color: var(--accent);">R</span>
                </div>
            </div>

            <button class="btn" onclick="triggerQuiz()">Sfida e Njohurive</button>
        </div>
    </div>

    <script>
        let isClosed = false;
        let animationId;
        const electrons = [];

        // Initialize electrons along the path
        function initElectrons() {
            const board = document.getElementById('board');
            // Simplified path for visual effect
            const path = [
                {x: 80, y: 190, dx: 0, dy: -1}, // Up from battery
                {x: 80, y: 65, dx: 1, dy: 0},   // Right top wire
                {x: 470, y: 65, dx: 0, dy: 1},  // Down to bulb
                {x: 470, y: 385, dx: -1, dy: 0},// Left bottom wire
                {x: 80, y: 385, dx: 0, dy: -1}  // Up to battery
            ];

            for(let i=0; i<20; i++) {
                const el = document.createElement('div');
                el.className = 'electron';
                board.appendChild(el);
                electrons.push({
                    element: el,
                    segment: 0,
                    progress: i * (1000 / 20) // Spread them out
                });
            }
        }

        function toggleSwitch() {
            const sw = document.getElementById('switch');
            isClosed = !isClosed;
            
            if(isClosed) {
                sw.classList.add('closed');
                document.querySelectorAll('.wire').forEach(w => w.classList.add('active'));
                updateCircuit();
                animateElectrons();
            } else {
                sw.classList.remove('closed');
                document.querySelectorAll('.wire').forEach(w => w.classList.remove('active'));
                document.getElementById('bulb').classList.remove('on');
                document.getElementById('val-i').innerText = "0.00 A";
                cancelAnimationFrame(animationId);
            }
        }

        function updateCircuit() {
            const v = parseFloat(document.getElementById('slider-v').value);
            const r = parseFloat(document.getElementById('slider-r').value);
            
            document.getElementById('disp-v').innerText = v + " V";
            document.getElementById('disp-r').innerText = r + " Ω";
            document.getElementById('val-u').innerText = v.toFixed(1) + " V";

            if(isClosed) {
                const i = v / r;
                document.getElementById('val-i').innerText = i.toFixed(2) + " A";
                
                // Adjust bulb brightness based on power (P = V*I)
                const power = v * i;
                const maxPower = 24 * (24/1); // Max possible
                const brightness = Math.min(1, power / 50); // Cap brightness
                
                const bulb = document.getElementById('bulb');
                if(power > 0) {
                    bulb.classList.add('on');
                    bulb.style.boxShadow = \`0 0 \${20 + brightness * 80}px #ffeb3b\`;
                    bulb.style.opacity = 0.3 + brightness * 0.7;
                } else {
                    bulb.classList.remove('on');
                }
            }
        }

        function animateElectrons() {
            if(!isClosed) return;
            
            const v = parseFloat(document.getElementById('slider-v').value);
            const r = parseFloat(document.getElementById('slider-r').value);
            const current = v / r;
            
            // Speed proportional to current
            const speed = current * 2; 

            // Simple rectangular path animation
            // Top-Left: 80,65 | Top-Right: 470,65 | Bot-Right: 470,385 | Bot-Left: 80,385
            const pathLength = (470-80) * 2 + (385-65) * 2;

            electrons.forEach(e => {
                e.progress += speed;
                if(e.progress > pathLength) e.progress = 0;

                let p = e.progress;
                let x, y;

                if(p < (385-65)) { // Up from battery
                    x = 80; y = 385 - p;
                } else if(p < (385-65) + (470-80)) { // Right
                    p -= (385-65);
                    x = 80 + p; y = 65;
                } else if(p < (385-65) + (470-80) + (385-65)) { // Down
                    p -= ((385-65) + (470-80));
                    x = 470; y = 65 + p;
                } else { // Left
                    p -= ((385-65) + (470-80) + (385-65));
                    x = 470 - p; y = 385;
                }

                e.element.style.left = (x - 4) + 'px';
                e.element.style.top = (y - 4) + 'px';
            });

            animationId = requestAnimationFrame(animateElectrons);
        }

        // Quiz Logic
        const questions = [
            {
                q: "Sipas Ligjit të Ohmit (I = U/R), nëse rrisim tensionin (U) dhe rezistenca mbetet e njëjtë, çfarë ndodh me rrymën (I)?",
                opts: ["Rritet", "Zvogëlohet", "Mbetet e njëjtë", "Bëhet zero"],
                ans: 0
            },
            {
                q: "Cila është njësia matëse për Rezistencën Elektrike?",
                opts: ["Volt (V)", "Amper (A)", "Ohm (Ω)", "Vat (W)"],
                ans: 2
            },
            {
                q: "Nëse qarku është i hapur (çelësi i fikur), sa është vlera e rrymës?",
                opts: ["Maksimale", "Varet nga bateria", "Zero", "E pafundme"],
                ans: 2
            }
        ];

        function triggerQuiz() {
            const qObj = questions[Math.floor(Math.random() * questions.length)];
            document.getElementById('q-text').innerText = qObj.q;
            
            const optsDiv = document.getElementById('q-opts');
            optsDiv.innerHTML = '';
            
            qObj.opts.forEach((opt, i) => {
                const btn = document.createElement('button');
                btn.className = 'quiz-btn';
                btn.innerText = opt;
                btn.onclick = () => {
                    if(i === qObj.ans) {
                        btn.style.background = 'var(--primary)';
                        btn.style.color = 'black';
                        setTimeout(() => {
                            document.getElementById('quiz').style.display = 'none';
                        }, 1000);
                    } else {
                        btn.style.background = 'red';
                        btn.style.borderColor = 'red';
                    }
                };
                optsDiv.appendChild(btn);
            });

            document.getElementById('quiz').style.display = 'flex';
        }

        initElectrons();
        updateCircuit();
    </script>
</body>
</html>`
  },
  {
    id: "gjej-shkencetarin",
    title: "Gjej shkencetarin",
    category: "Shkencëtarë",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gjej Shkencëtarin</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #1a1a1a;
            --card-bg: #2a2a2a;
            --primary: #d4af37; /* Gold */
            --text: #f0f0f0;
            --text-muted: #a0a0a0;
            --correct: #2ecc71;
            --wrong: #e74c3c;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text);
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        h1 {
            font-family: 'Playfair Display', serif;
            color: var(--primary);
            font-size: 3rem;
            margin-bottom: 10px;
            text-align: center;
            text-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
        }

        .subtitle {
            color: var(--text-muted);
            margin-bottom: 40px;
            font-size: 1.1rem;
            text-align: center;
        }

        .game-card {
            background: var(--card-bg);
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 15px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            position: relative;
            overflow: hidden;
        }

        .game-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 4px;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
        }

        .score-display {
            position: absolute;
            top: 20px;
            right: 20px;
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            color: var(--primary);
        }

        .clue-container {
            min-height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            border-left: 4px solid var(--primary);
            padding-left: 20px;
            background: rgba(0,0,0,0.2);
            border-radius: 0 10px 10px 0;
        }

        .clue-text {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-size: 1.4rem;
            line-height: 1.6;
            color: #fff;
        }

        .options-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .option-btn {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            color: var(--text);
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 1.1rem;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .option-btn:hover:not(:disabled) {
            background: rgba(212, 175, 55, 0.1);
            border-color: var(--primary);
            transform: translateY(-2px);
        }

        .option-btn.correct {
            background: rgba(46, 204, 113, 0.2);
            border-color: var(--correct);
            color: var(--correct);
        }

        .option-btn.wrong {
            background: rgba(231, 76, 60, 0.2);
            border-color: var(--wrong);
            color: var(--wrong);
        }

        .option-btn:disabled {
            cursor: not-allowed;
            opacity: 0.7;
        }

        .next-btn {
            display: none;
            width: 100%;
            background: var(--primary);
            color: #000;
            border: none;
            padding: 15px;
            border-radius: 8px;
            font-size: 1.2rem;
            font-weight: 600;
            margin-top: 20px;
            cursor: pointer;
            transition: 0.3s;
            font-family: 'Inter', sans-serif;
        }

        .next-btn:hover {
            background: #e5c158;
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
        }

        .progress-container {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 8px;
        }

        .progress-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            transition: 0.3s;
        }

        .progress-dot.active {
            background: var(--primary);
            box-shadow: 0 0 8px var(--primary);
        }

        .progress-dot.completed {
            background: var(--correct);
        }

        @media (max-width: 600px) {
            .options-grid {
                grid-template-columns: 1fr;
            }
            h1 { font-size: 2.2rem; }
            .clue-text { font-size: 1.2rem; }
        }
    </style>
</head>
<body>

    <h1>Gjej Shkencëtarin</h1>
    <div class="subtitle">Zbulo mendjet gjeniale pas zbulimeve të mëdha</div>

    <div class="game-card">
        <div class="score-display">Pikët: <span id="score">0</span></div>
        
        <div class="clue-container">
            <div class="clue-text" id="clue">Po ngarkon...</div>
        </div>

        <div class="options-grid" id="options">
            <!-- Buttons injected here -->
        </div>

        <button class="next-btn" id="next-btn" onclick="nextScientist()">Vazhdo</button>

        <div class="progress-container" id="progress">
            <!-- Dots injected here -->
        </div>
    </div>

    <script>
        const scientists = [
            { 
                name: "Isak Njuton", 
                clue: "Unë formulova ligjin e tërheqjes së gjithësishme dhe tre ligjet e lëvizjes. Legjenda thotë se një mollë më ndihmoi.", 
                options: ["Albert Ajnshtajn", "Isak Njuton", "Nikola Tesla", "Galileo Galilei"] 
            },
            { 
                name: "Albert Ajnshtajn", 
                clue: "Unë zhvillova teorinë e relativitetit. Ekuacioni im E = mc² është ndoshta më i famshmi në botë.", 
                options: ["Niels Bohr", "Isak Njuton", "Albert Ajnshtajn", "Stiven Hoking"] 
            },
            { 
                name: "Nikola Tesla", 
                clue: "Unë shpika sistemin e rrymës alternative (AC) dhe ëndërroja për transmetimin e energjisë pa tela.", 
                options: ["Tomas Edison", "Nikola Tesla", "Aleksandër Volta", "Majkëll Faradej"] 
            },
            { 
                name: "Mari Kyri", 
                clue: "Unë zbulova radiumin dhe poloniumin. Jam gruaja e parë që fitoi çmimin Nobel dhe e vetmja në dy fusha të ndryshme shkencore.", 
                options: ["Mari Kyri", "Lize Majtner", "Rozalind Frenklin", "Ada Lavlejs"] 
            },
            { 
                name: "Galileo Galilei", 
                clue: "Unë përmirësova teleskopin, zbulova hënat e Jupiterit dhe mbështeta idenë se Toka rrotullohet rreth Diellit.", 
                options: ["Nikola Koperniku", "Johanes Kepleri", "Galileo Galilei", "Klaudio Ptolemeu"] 
            },
            { 
                name: "Majkëll Faradej", 
                clue: "Unë zbulova induksionin elektromagnetik dhe ndërtova motorin e parë elektrik, megjithëse kisha pak arsimim formal.", 
                options: ["Xhejms Klark Maksuell", "Hajnrih Herc", "Majkëll Faradej", "Andre-Mari Amper"] 
            }
        ];

        let current = 0;
        let score = 0;
        let answered = false;

        function initGame() {
            const progressDiv = document.getElementById('progress');
            scientists.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.className = 'progress-dot';
                dot.id = 'dot-' + i;
                progressDiv.appendChild(dot);
            });
            loadScientist();
        }

        function loadScientist() {
            if (current >= scientists.length) {
                showFinalResult();
                return;
            }

            answered = false;
            const s = scientists[current];
            
            // Update UI
            document.getElementById('clue').innerText = '"' + s.clue + '"';
            document.getElementById('next-btn').style.display = 'none';
            
            // Update dots
            document.querySelectorAll('.progress-dot').forEach((dot, i) => {
                dot.classList.remove('active');
                if (i < current) dot.classList.add('completed');
                if (i === current) dot.classList.add('active');
            });

            const optsDiv = document.getElementById('options');
            optsDiv.innerHTML = '';

            // Shuffle options
            const shuffledOpts = [...s.options].sort(() => Math.random() - 0.5);

            shuffledOpts.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerText = opt;
                btn.onclick = () => checkAnswer(opt, s.name, btn);
                optsDiv.appendChild(btn);
            });
        }

        function checkAnswer(selected, correct, btn) {
            if (answered) return;
            answered = true;

            const btns = document.querySelectorAll('.option-btn');
            btns.forEach(b => b.disabled = true);

            if (selected === correct) {
                btn.classList.add('correct');
                score += 100;
                document.getElementById('score').innerText = score;
            } else {
                btn.classList.add('wrong');
                btns.forEach(b => {
                    if (b.innerText === correct) b.classList.add('correct');
                });
            }
            document.getElementById('next-btn').style.display = 'block';
        }

        function nextScientist() {
            current++;
            loadScientist();
        }

        function showFinalResult() {
            const card = document.querySelector('.game-card');
            const maxScore = scientists.length * 100;
            const percentage = (score / maxScore) * 100;
            
            let title = "Urime!";
            let msg = "Një performancë e shkëlqyer!";
            
            if (percentage === 100) {
                title = "Gjeni!";
                msg = "Ti i njeh shkencëtarët po aq mirë sa ata njihnin fizikën!";
            } else if (percentage < 50) {
                title = "Përpjekje e Mirë";
                msg = "Ndoshta duhet të lexosh pak më shumë histori shkence.";
            }

            card.innerHTML = \`
                <div style="text-align: center; padding: 20px 0;">
                    <h2 style="color: var(--primary); font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 10px;">\${title}</h2>
                    <div style="font-size: 4rem; color: var(--text); font-weight: bold; margin: 20px 0;">\${score}</div>
                    <p style="color: var(--text-muted); font-size: 1.2rem; margin-bottom: 30px;">Pikët e tua nga \${maxScore} të mundshme.</p>
                    <p style="font-size: 1.1rem; margin-bottom: 40px;">\${msg}</p>
                    <button class="next-btn" style="display: block;" onclick="location.reload()">Luaj Përsëri</button>
                </div>
            \`;
        }

        // Start game
        initGame();
    </script>
</body>
</html>`
  },
  {
    id: "dinamika-adventure",
    title: "Dinamika Adventure: Pro Edition",
    category: "Dinamika",
    type: "digital",
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
    </style>
</head>
<body>
    <div class="game-wrapper">
        <div class="main-panel">
            <div class="title-section">
                <h1>Aventura e Dinamikës</h1>
                <p>Mëso ligjet e Njutonit duke luajtur!</p>
            </div>
            <div class="board" id="board"></div>
        </div>
        <div class="side-panel">
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
            <div id="status">Shtyp zarin për të lëvizur!</div>
        </div>
    </div>
    <script>
        const board = document.getElementById('board');
        const dice = document.getElementById('dice');
        const status = document.getElementById('status');
        let currentPos = 0;
        const totalCells = 36;

        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (i === 0) { cell.classList.add('start'); cell.innerText = 'START'; }
            else if (i === totalCells - 1) { cell.classList.add('finish'); cell.innerText = 'FINISH'; }
            else { cell.innerText = i + 1; }
            board.appendChild(cell);
        }

        function rollDice() {
            if (dice.classList.contains('rolling')) return;
            dice.classList.add('rolling');
            setTimeout(() => {
                dice.classList.remove('rolling');
                const roll = Math.floor(Math.random() * 6) + 1;
                updateDice(roll);
                movePlayer(roll);
            }, 1000);
        }

        function updateDice(roll) {
            const rotations = {
                1: 'rotateX(0deg) rotateY(0deg)',
                2: 'rotateX(-90deg) rotateY(0deg)',
                3: 'rotateX(0deg) rotateY(-90deg)',
                4: 'rotateX(0deg) rotateY(90deg)',
                5: 'rotateX(90deg) rotateY(0deg)',
                6: 'rotateX(0deg) rotateY(180deg)'
            };
            dice.style.transform = rotations[roll];
        }

        function movePlayer(steps) {
            currentPos += steps;
            if (currentPos >= totalCells - 1) {
                currentPos = totalCells - 1;
                status.innerText = 'URIME! KE ARRITUR NË FINALE!';
            } else {
                status.innerText = 'Lëvize ' + steps + ' hapa. Pozicioni: ' + (currentPos + 1);
            }
            updateBoard();
        }

        function updateBoard() {
            const cells = document.querySelectorAll('.cell');
            cells.forEach((cell, i) => {
                cell.classList.remove('active-path');
                if (i === currentPos) cell.classList.add('active-path');
            });
        }
        updateBoard();
    </script>
</body>
</html>`
  },
  {
    id: "resistance-guard",
    title: "Mbrojtësi i Rezistencës",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Mbrojtësi i Rezistencës</title>
    <style>
        body { margin: 0; background: #0a0a1a; color: white; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; overflow: hidden; }
        #game-container { position: relative; width: 100%; max-width: 600px; height: 60vh; max-height: 400px; border: 2px solid #00f2fe; border-radius: 15px; background: rgba(0,0,0,0.5); overflow: hidden; }
        .enemy { position: absolute; width: 40px; height: 40px; background: #ff0055; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: top 0.1s linear; }
        #player { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); width: 60px; height: 20px; background: #00f2fe; border-radius: 5px; }
        #score { position: absolute; top: 10px; left: 10px; font-size: 20px; }
        #formula { position: absolute; top: 10px; right: 10px; font-size: 18px; color: #ffd700; }
        .bullet { position: absolute; width: 5px; height: 15px; background: #ffd700; border-radius: 2px; }
    </style>
</head>
<body>
    <h1>Mbrojtësi i Rezistencës</h1>
    <p>Përdor shigjetat për të lëvizur dhe Space për të gjuajtur!</p>
    <div id="game-container">
        <div id="score">Pikët: 0</div>
        <div id="formula">R = U / I</div>
        <div id="player"></div>
    </div>
    <script>
        const container = document.getElementById('game-container');
        const player = document.getElementById('player');
        const scoreEl = document.getElementById('score');
        let score = 0;
        let playerX = 270;

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && playerX > 0) playerX -= 20;
            if (e.key === 'ArrowRight' && playerX < 540) playerX += 20;
            if (e.key === ' ') shoot();
            player.style.left = playerX + 'px';
        });

        function shoot() {
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            bullet.style.left = (playerX + 27) + 'px';
            bullet.style.bottom = '40px';
            container.appendChild(bullet);
            let bPos = 40;
            const bInt = setInterval(() => {
                bPos += 5;
                bullet.style.bottom = bPos + 'px';
                if (bPos > 400) { clearInterval(bInt); bullet.remove(); }
                document.querySelectorAll('.enemy').forEach(en => {
                    const rect1 = bullet.getBoundingClientRect();
                    const rect2 = en.getBoundingClientRect();
                    if (!(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)) {
                        en.remove(); bullet.remove(); clearInterval(bInt);
                        score += 10; scoreEl.innerText = 'Pikët: ' + score;
                    }
                });
            }, 20);
        }

        function spawnEnemy() {
            const en = document.createElement('div');
            en.className = 'enemy';
            en.innerText = 'Ω';
            en.style.left = Math.random() * 560 + 'px';
            en.style.top = '0px';
            container.appendChild(en);
            let ePos = 0;
            const eInt = setInterval(() => {
                ePos += 2;
                en.style.top = ePos + 'px';
                if (ePos > 380) { clearInterval(eInt); en.remove(); }
            }, 50);
        }
        setInterval(spawnEnemy, 2000);
    </script>
</body>
</html>`
  },
  {
    id: "efield-explorer",
    title: "Eksploruesi i Fushës E",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Eksploruesi i Fushës E</title>
    <style>
        body { margin: 0; background: #050510; color: white; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
        canvas { border: 2px solid #f093fb; border-radius: 10px; cursor: crosshair; }
        .controls { margin-top: 20px; background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; }
    </style>
</head>
<body>
    <h1>Eksploruesi i Fushës E</h1>
    <canvas id="canvas" width="600" height="400"></canvas>
    <div class="controls">Klikoni për të vendosur ngarkesa: Majtas (+), Djathtas (-)</div>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const charges = [];

        canvas.addEventListener('mousedown', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            charges.push({ x, y, q: e.button === 0 ? 1 : -1 });
            draw();
        });
        canvas.addEventListener('contextmenu', e => e.preventDefault());

        function draw() {
            ctx.clearRect(0, 0, 600, 400);
            for (let i = 0; i < 600; i += 30) {
                for (let j = 0; j < 400; j += 30) {
                    let ex = 0, ey = 0;
                    charges.forEach(c => {
                        const dx = i - c.x, dy = j - c.y;
                        const d2 = dx*dx + dy*dy || 1;
                        const f = c.q / d2 * 1000;
                        ex += f * dx / Math.sqrt(d2);
                        ey += f * dy / Math.sqrt(d2);
                    });
                    const angle = Math.atan2(ey, ex);
                    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
                    ctx.beginPath();
                    ctx.moveTo(i, j);
                    ctx.lineTo(i + Math.cos(angle)*15, j + Math.sin(angle)*15);
                    ctx.stroke();
                }
            }
            charges.forEach(c => {
                ctx.fillStyle = c.q > 0 ? '#ff0055' : '#00d2ff';
                ctx.beginPath(); ctx.arc(c.x, c.y, 10, 0, Math.PI*2); ctx.fill();
                ctx.fillStyle = 'white'; ctx.textAlign = 'center'; ctx.fillText(c.q > 0 ? '+' : '-', c.x, c.y+4);
            });
        }
        draw();
    </script>
</body>
</html>`
  },
  {
    id: "power-grid-master",
    title: "Mjeshtri i Rrjetit",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Mjeshtri i Rrjetit</title>
    <style>
        body { background: #111; color: #0f0; font-family: 'Courier New', monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; width: 90%; max-width: 320px; }
        .node { aspect-ratio: 1/1; width: 100%; border: 2px solid #0f0; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 24px; transition: 0.3s; }
        .node.active { background: #0f0; color: #000; box-shadow: 0 0 20px #0f0; }
        #status { margin-top: 20px; font-size: 20px; }
    </style>
</head>
<body>
    <h1>Mjeshtri i Rrjetit: P = U * I</h1>
    <div class="grid" id="grid"></div>
    <div id="status">Aktivizo të gjitha nyjet për të furnizuar qytetin!</div>
    <script>
        const grid = document.getElementById('grid');
        const nodes = [];
        for (let i = 0; i < 9; i++) {
            const node = document.createElement('div');
            node.className = 'node';
            node.innerText = '⚡';
            node.onclick = () => {
                node.classList.toggle('active');
                checkWin();
            };
            grid.appendChild(node);
            nodes.push(node);
        }
        function checkWin() {
            if (nodes.every(n => n.classList.contains('active'))) {
                document.getElementById('status').innerText = 'QYTETI U FURNIZUA! FUQIA MAKSIMALE!';
            }
        }
    </script>
</body>
</html>`
  },
  {
    id: "voltage-stabilizer",
    title: "Stabilizuesi i Tensionit",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Stabilizuesi i Tensionit</title>
    <style>
        body { background: #000; color: #00ff00; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
        #meter { width: 100%; max-width: 300px; height: 30px; border: 2px solid #00ff00; position: relative; }
        #pointer { width: 4px; height: 40px; background: red; position: absolute; top: -5px; left: 50%; transition: left 0.1s; }
        #target { width: 40px; height: 30px; background: rgba(0,255,0,0.3); position: absolute; left: 130px; }
        button { margin-top: 20px; padding: 10px 20px; background: #00ff00; border: none; cursor: pointer; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Stabilizuesi i Tensionit (U)</h1>
    <div id="meter">
        <div id="target"></div>
        <div id="pointer"></div>
    </div>
    <p>Mbaje tensionin në zonën e gjelbër!</p>
    <button onmousedown="powerUp()" onmouseup="powerDown()">FURNIZO</button>
    <script>
        let voltage = 50;
        let target = 40 + Math.random() * 20;
        const pointer = document.getElementById('pointer');
        const targetEl = document.getElementById('target');
        targetEl.style.left = (target * 3) + 'px';

        let interval;
        function powerUp() { clearInterval(interval); interval = setInterval(() => { if(voltage < 100) voltage += 2; update(); }, 50); }
        function powerDown() { clearInterval(interval); interval = setInterval(() => { if(voltage > 0) voltage -= 1.5; update(); }, 50); }
        
        function update() {
            pointer.style.left = (voltage * 3) + 'px';
            if (Math.abs(voltage - (target + 6)) < 6) targetEl.style.background = 'lime';
            else targetEl.style.background = 'rgba(0,255,0,0.3)';
        }
    </script>
</body>
</html>`
  },
  {
    id: "current-master",
    title: "Mjeshtri i Rrymës",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Mjeshtri i Rrymës</title>
    <style>
        body { background: #1a1a1a; color: white; font-family: sans-serif; text-align: center; padding: 20px; }
        .wire { width: 80%; height: 10px; background: #333; margin: 50px auto; position: relative; border-radius: 5px; }
        .electron { width: 15px; height: 15px; background: #00d2ff; border-radius: 50%; position: absolute; top: -2.5px; box-shadow: 0 0 10px #00d2ff; }
        input { width: 200px; }
    </style>
</head>
<body>
    <h1>Intensiteti i Rrymës (I = Q / t)</h1>
    <div class="wire" id="wire"></div>
    <p>Rregullo intensitetin: <input type="range" id="slider" min="1" max="20" value="5"></p>
    <div id="info">Elektronet po lëvizin...</div>
    <script>
        const wire = document.getElementById('wire');
        const slider = document.getElementById('slider');
        function createElectron() {
            const e = document.createElement('div');
            e.className = 'electron';
            e.style.left = '-20px';
            wire.appendChild(e);
            let pos = -20;
            const speed = parseInt(slider.value);
            const move = setInterval(() => {
                pos += speed;
                e.style.left = pos + 'px';
                if (pos > wire.offsetWidth) { clearInterval(move); e.remove(); }
            }, 20);
        }
        setInterval(() => {
            for(let i=0; i<slider.value/5; i++) createElectron();
        }, 500);
    </script>
</body>
</html>`
  },
  {
    id: "capacitor-master",
    title: "Mjeshtri i Kondensatorëve",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Mjeshtri i Kondensatorëve</title>
    <style>
        body { background: #050510; color: white; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
        .plates { display: flex; gap: 40px; align-items: center; }
        .plate { width: 20px; height: 200px; background: #888; border-radius: 5px; position: relative; }
        .charge { width: 10px; height: 10px; border-radius: 50%; position: absolute; left: 5px; }
        #controls { margin-top: 30px; }
        button { padding: 10px 20px; font-size: 18px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Kapaciteti Elektrik (C = Q / U)</h1>
    <div class="plates">
        <div class="plate" id="plate1"></div>
        <div class="plate" id="plate2"></div>
    </div>
    <div id="controls">
        <button onclick="charge()">NGARKONI</button>
        <button onclick="discharge()">SHKARKONI</button>
    </div>
    <p id="stat">Ngarkesa: 0 C</p>
    <script>
        let q = 0;
        function charge() {
            if (q < 10) {
                q++;
                const c1 = document.createElement('div'); c1.className = 'charge'; c1.style.background = 'red'; c1.style.top = (q * 18) + 'px';
                const c2 = document.createElement('div'); c2.className = 'charge'; c2.style.background = 'blue'; c2.style.top = (q * 18) + 'px';
                document.getElementById('plate1').appendChild(c1);
                document.getElementById('plate2').appendChild(c2);
                update();
            }
        }
        function discharge() {
            q = 0;
            document.getElementById('plate1').innerHTML = '';
            document.getElementById('plate2').innerHTML = '';
            update();
        }
        function update() { document.getElementById('stat').innerText = 'Ngarkesa: ' + q + ' C'; }
    </script>
</body>
</html>`
  },
  {
    id: "mjeshtri-tingullit",
    title: "Mjeshtri i Tingullit",
    category: "Valët dhe Tingulli",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Mjeshtri i Tingullit</title>
    <style>
        body { background: #111; color: #0f0; font-family: 'Courier New', Courier, monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        h1 { color: #0f0; text-shadow: 0 0 10px #0f0; }
        .oscilloscope { width: 80%; max-width: 800px; height: 300px; background: #002200; border: 3px solid #0f0; border-radius: 20px; position: relative; overflow: hidden; box-shadow: inset 0 0 50px rgba(0,255,0,0.2); margin-bottom: 30px; }
        canvas { width: 100%; height: 100%; }
        .controls { display: flex; gap: 40px; background: #222; padding: 20px; border-radius: 15px; border: 1px solid #444; }
        .control-group { display: flex; flex-direction: column; align-items: center; }
        label { margin-bottom: 10px; font-size: 1.2rem; font-weight: bold; }
        input[type=range] { width: 200px; accent-color: #0f0; }
        .value-display { margin-top: 10px; font-size: 1.1rem; color: #fff; }
    </style>
</head>
<body>
    <h1>Oshiloskopi Virtual</h1>
    
    <div class="oscilloscope">
        <canvas id="waveCanvas"></canvas>
    </div>

    <div class="controls">
        <div class="control-group">
            <label>Amplituda (Zëri)</label>
            <input type="range" id="ampSlider" min="10" max="100" value="50">
            <div class="value-display" id="ampVal">50</div>
        </div>
        <div class="control-group">
            <label>Frekuenca (Toni)</label>
            <input type="range" id="freqSlider" min="1" max="20" value="5">
            <div class="value-display" id="freqVal">5 Hz</div>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('waveCanvas');
        const ctx = canvas.getContext('2d');
        const ampSlider = document.getElementById('ampSlider');
        const freqSlider = document.getElementById('freqSlider');
        const ampVal = document.getElementById('ampVal');
        const freqVal = document.getElementById('freqVal');

        let time = 0;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function drawWave() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw grid
            ctx.strokeStyle = '#004400';
            ctx.lineWidth = 1;
            for(let i=0; i<canvas.width; i+=50) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,canvas.height); ctx.stroke(); }
            for(let i=0; i<canvas.height; i+=50) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(canvas.width,i); ctx.stroke(); }

            // Draw center line
            ctx.strokeStyle = '#008800';
            ctx.beginPath(); ctx.moveTo(0, canvas.height/2); ctx.lineTo(canvas.width, canvas.height/2); ctx.stroke();

            const amplitude = parseInt(ampSlider.value);
            const frequency = parseInt(freqSlider.value);
            
            ampVal.innerText = amplitude;
            freqVal.innerText = frequency + ' Hz';

            ctx.strokeStyle = '#0f0';
            ctx.lineWidth = 3;
            ctx.beginPath();

            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + Math.sin(x * frequency * 0.01 + time) * amplitude;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            time += 0.1;
            requestAnimationFrame(drawWave);
        }

        drawWave();
    </script>
</body>
</html>`
  },
  {
    id: "sfida-matures",
    title: "Sfida e Maturës",
    category: "Fizika",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Sfida e Maturës - Fizikë</title>
    <style>
        body { background: #f4f4f9; color: #333; font-family: 'Arial', sans-serif; display: flex; flex-direction: column; align-items: center; padding: 40px 20px; margin: 0; min-height: 100vh; }
        .header { text-align: center; margin-bottom: 30px; }
        h1 { color: #2c3e50; font-size: 2.5rem; margin: 0; }
        .subtitle { color: #7f8c8d; font-size: 1.2rem; }
        .quiz-container { background: white; width: 100%; max-width: 700px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 40px; box-sizing: border-box; }
        .question { font-size: 1.4rem; font-weight: bold; color: #2c3e50; margin-bottom: 20px; }
        .options { display: flex; flex-direction: column; gap: 15px; }
        .option { background: #ecf0f1; border: 2px solid #bdc3c7; padding: 15px 20px; border-radius: 10px; font-size: 1.1rem; cursor: pointer; transition: 0.2s; display: flex; align-items: center; }
        .option:hover { background: #e0e6ed; border-color: #95a5a6; }
        .option.selected { background: #3498db; color: white; border-color: #2980b9; }
        .option.correct { background: #2ecc71; color: white; border-color: #27ae60; }
        .option.wrong { background: #e74c3c; color: white; border-color: #c0392b; }
        .controls { display: flex; justify-content: space-between; align-items: center; margin-top: 30px; border-top: 2px solid #ecf0f1; padding-top: 20px; }
        .score { font-size: 1.2rem; font-weight: bold; color: #34495e; }
        .btn { background: #3498db; color: white; border: none; padding: 12px 25px; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.2s; }
        .btn:hover { background: #2980b9; }
        .btn:disabled { background: #bdc3c7; cursor: not-allowed; }
        .progress-bar { width: 100%; height: 10px; background: #ecf0f1; border-radius: 5px; margin-bottom: 30px; overflow: hidden; }
        .progress-fill { height: 100%; background: #3498db; width: 0%; transition: width 0.3s; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Sfida e Maturës</h1>
        <div class="subtitle">Përgatitje për Provimin e Shtetit në Fizikë</div>
    </div>

    <div class="quiz-container">
        <div class="progress-bar"><div class="progress-fill" id="progress"></div></div>
        <div id="quiz-content">
            <div class="question" id="question-text">Po ngarkon pyetjen...</div>
            <div class="options" id="options-container"></div>
        </div>
        <div class="controls">
            <div class="score">Pikët: <span id="score-val">0</span>/<span id="total-val">0</span></div>
            <button class="btn" id="next-btn" onclick="nextQuestion()" disabled>Vazhdo</button>
        </div>
    </div>

    <script>
        const questions = [
            { q: "Cila nga madhësitë e mëposhtme është vektoriale?", options: ["Koha", "Masa", "Nxitimi", "Temperatura"], correct: 2 },
            { q: "Njësia matëse e punës mekanike në sistemin SI është:", options: ["Njuton (N)", "Xhaul (J)", "Vat (W)", "Paskal (Pa)"], correct: 1 },
            { q: "Nëse rezultantja e forcave që veprojnë mbi një trup është zero, trupi:", options: ["Lëviz me nxitim", "Ndalon menjëherë", "Ruan gjendjen e prehjes ose lëvizjes së njëtrajtshme", "Lëviz me shpejtësi të ndryshueshme"], correct: 2 },
            { q: "Cila është formula e ligjit të dytë të Njutonit?", options: ["F = m/a", "F = m*a", "a = m*F", "F = a/m"], correct: 1 },
            { q: "Gjatë rënies së lirë të një trupi (pa fërkim), energjia mekanike e tij:", options: ["Rritet", "Zvogëlohet", "Mbetet konstante", "Bëhet zero"], correct: 2 }
        ];

        let currentQ = 0;
        let score = 0;
        let answered = false;

        function loadQuestion() {
            if (currentQ >= questions.length) {
                showResults();
                return;
            }

            const q = questions[currentQ];
            document.getElementById('question-text').innerText = (currentQ + 1) + ". " + q.q;
            document.getElementById('total-val').innerText = questions.length;
            document.getElementById('progress').style.width = ((currentQ / questions.length) * 100) + '%';
            
            const optsContainer = document.getElementById('options-container');
            optsContainer.innerHTML = '';
            answered = false;
            document.getElementById('next-btn').disabled = true;

            q.options.forEach((opt, index) => {
                const div = document.createElement('div');
                div.className = 'option';
                div.innerText = opt;
                div.onclick = () => selectOption(index, div);
                optsContainer.appendChild(div);
            });
        }

        function selectOption(index, element) {
            if (answered) return;
            answered = true;
            
            const q = questions[currentQ];
            const options = document.querySelectorAll('.option');
            
            if (index === q.correct) {
                element.classList.add('correct');
                score++;
                document.getElementById('score-val').innerText = score;
            } else {
                element.classList.add('wrong');
                options[q.correct].classList.add('correct');
            }
            
            document.getElementById('next-btn').disabled = false;
        }

        function nextQuestion() {
            currentQ++;
            loadQuestion();
        }

        function showResults() {
            document.getElementById('progress').style.width = '100%';
            const percentage = (score / questions.length) * 100;
            let message = "";
            if (percentage === 100) message = "Shkëlqyeshëm! Je gati për maturën!";
            else if (percentage >= 60) message = "Mirë! Por mund të përmirësohesh.";
            else message = "Duhet të studiosh më shumë!";

            document.getElementById('quiz-content').innerHTML = \`
                <div style="text-align: center;">
                    <h2 style="font-size: 2rem; color: #2c3e50; margin-bottom: 10px;">Rezultati Përfundimtar</h2>
                    <div style="font-size: 4rem; font-weight: bold; color: #3498db; margin: 20px 0;">\${score} / \${questions.length}</div>
                    <p style="font-size: 1.2rem; color: #7f8c8d;">\${message}</p>
                </div>
            \`;
            
            const btn = document.getElementById('next-btn');
            btn.innerText = "Luaj Përsëri";
            btn.disabled = false;
            btn.onclick = () => location.reload();
        }

        loadQuestion();
    </script>
</body>
</html>`
  },
  {
    id: "sti-game",
    title: "Beteja e Fizikes",
    category: "Gjithëpërfshirëse",
    type: "school",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Beteja e Fizikës</title>
    <style>
        body { background: #222; color: #fff; font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        h1 { color: #f39c12; }
        .board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background: #444; padding: 10px; border-radius: 10px; }
        .cell { width: 100px; height: 100px; background: #333; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; cursor: pointer; border-radius: 5px; }
        .cell:hover { background: #555; }
        .status { margin-top: 20px; font-size: 1.5rem; }
        button { margin-top: 20px; padding: 10px 20px; font-size: 1.2rem; background: #f39c12; color: #000; border: none; border-radius: 5px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Beteja e Fizikës (Tic-Tac-Toe)</h1>
    <div class="board" id="board">
        <div class="cell" onclick="makeMove(0)"></div>
        <div class="cell" onclick="makeMove(1)"></div>
        <div class="cell" onclick="makeMove(2)"></div>
        <div class="cell" onclick="makeMove(3)"></div>
        <div class="cell" onclick="makeMove(4)"></div>
        <div class="cell" onclick="makeMove(5)"></div>
        <div class="cell" onclick="makeMove(6)"></div>
        <div class="cell" onclick="makeMove(7)"></div>
        <div class="cell" onclick="makeMove(8)"></div>
    </div>
    <div class="status" id="status">Radha e Lojtarit: X</div>
    <button onclick="reset()">Fillo Përsëri</button>

    <script>
        let board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let gameActive = true;
        const cells = document.querySelectorAll('.cell');
        const status = document.getElementById('status');

        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        function makeMove(index) {
            if (board[index] !== '' || !gameActive) return;
            board[index] = currentPlayer;
            cells[index].innerText = currentPlayer;
            cells[index].style.color = currentPlayer === 'X' ? '#3498db' : '#e74c3c';
            checkWin();
        }

        function checkWin() {
            let roundWon = false;
            for (let i = 0; i < winConditions.length; i++) {
                const [a, b, c] = winConditions[i];
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    roundWon = true;
                    break;
                }
            }

            if (roundWon) {
                status.innerText = \`Lojtari \${currentPlayer} fitoi!\`;
                gameActive = false;
                return;
            }

            if (!board.includes('')) {
                status.innerText = 'Barazim!';
                gameActive = false;
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.innerText = \`Radha e Lojtarit: \${currentPlayer}\`;
        }

        function reset() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            gameActive = true;
            status.innerText = \`Radha e Lojtarit: \${currentPlayer}\`;
            cells.forEach(cell => { cell.innerText = ''; });
        }
    </script>
</body>
</html>`
  },
  {
    id: "lojee-game",
    title: "ElektroGame",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>ElektroGame</title>
    <style>
        body { background: #000; color: #0ff; font-family: monospace; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        h1 { text-shadow: 0 0 10px #0ff; }
        .game-area { width: 100%; max-width: 400px; height: 90vw; max-height: 400px; border: 2px solid #0ff; position: relative; overflow: hidden; }
        .player { width: 20px; height: 20px; background: #0f0; position: absolute; bottom: 10px; left: 190px; border-radius: 50%; box-shadow: 0 0 10px #0f0; }
        .enemy { width: 20px; height: 20px; background: #f00; position: absolute; border-radius: 50%; box-shadow: 0 0 10px #f00; }
        #score { font-size: 1.5rem; margin-top: 10px; }
    </style>
</head>
<body>
    <h1>Evito Shkarkimet Elektrike!</h1>
    <div class="game-area" id="gameArea">
        <div class="player" id="player"></div>
    </div>
    <div id="score">Pikët: 0</div>
    <p>Përdor shigjetat Majtas/Djathtas për të lëvizur.</p>

    <script>
        const player = document.getElementById('player');
        const gameArea = document.getElementById('gameArea');
        const scoreDisplay = document.getElementById('score');
        let playerX = 190;
        let score = 0;
        let enemies = [];
        let gameInterval;
        let isGameOver = false;

        document.addEventListener('keydown', (e) => {
            if (isGameOver) return;
            if (e.key === 'ArrowLeft' && playerX > 0) playerX -= 20;
            if (e.key === 'ArrowRight' && playerX < 380) playerX += 20;
            player.style.left = playerX + 'px';
        });

        function spawnEnemy() {
            const enemy = document.createElement('div');
            enemy.className = 'enemy';
            enemy.style.left = Math.floor(Math.random() * 380) + 'px';
            enemy.style.top = '0px';
            gameArea.appendChild(enemy);
            enemies.push({ el: enemy, y: 0 });
        }

        function gameLoop() {
            if (Math.random() < 0.1) spawnEnemy();

            for (let i = 0; i < enemies.length; i++) {
                let enemy = enemies[i];
                enemy.y += 5;
                enemy.el.style.top = enemy.y + 'px';

                // Collision detection
                const pRect = player.getBoundingClientRect();
                const eRect = enemy.el.getBoundingClientRect();

                if (!(pRect.right < eRect.left || 
                      pRect.left > eRect.right || 
                      pRect.bottom < eRect.top || 
                      pRect.top > eRect.bottom)) {
                    gameOver();
                    return;
                }

                if (enemy.y > 400) {
                    enemy.el.remove();
                    enemies.splice(i, 1);
                    i--;
                    score++;
                    scoreDisplay.innerText = 'Pikët: ' + score;
                }
            }
        }

        function gameOver() {
            isGameOver = true;
            clearInterval(gameInterval);
            alert('Lojë e përfunduar! Pikët: ' + score);
            location.reload();
        }

        gameInterval = setInterval(gameLoop, 50);
    </script>
</body>
</html>`
  },
  {
    id: "smartt-game",
    title: "Laboratori i Saktësisë",
    category: "Gjithëpërfshirëse",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Laboratori i Saktësisë</title>
    <style>
        body { background: #e0e5ec; color: #333; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
        .container { background: #e0e5ec; padding: 40px; border-radius: 20px; box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5); text-align: center; width: 90%; max-width: 500px; }
        h1 { color: #2c3e50; }
        .target { width: 100px; height: 100px; background: #e74c3c; border-radius: 50%; margin: 20px auto; cursor: pointer; transition: transform 0.1s; box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2), inset -5px -5px 10px rgba(255,255,255,0.2); }
        .target:active { transform: scale(0.9); }
        #time { font-size: 2rem; font-weight: bold; color: #2980b9; }
        #result { margin-top: 20px; font-size: 1.2rem; }
        button { margin-top: 20px; padding: 10px 20px; border: none; border-radius: 10px; background: #3498db; color: white; font-size: 1.1rem; cursor: pointer; box-shadow: 5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255, 0.5); }
        button:active { box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2); }
    </style>
</head>
<body>
    <div class="container">
        <h1>Testi i Reagimit</h1>
        <p>Kliko rrethin e kuq sa më shpejt të jetë e mundur kur të shfaqet!</p>
        <div id="time">0.000 s</div>
        <div class="target" id="target" style="display: none;" onclick="hitTarget()"></div>
        <button id="startBtn" onclick="startTest()">Fillo Testin</button>
        <div id="result"></div>
    </div>

    <script>
        let startTime;
        let timeoutId;
        const target = document.getElementById('target');
        const timeDisplay = document.getElementById('time');
        const resultDisplay = document.getElementById('result');
        const startBtn = document.getElementById('startBtn');

        function startTest() {
            startBtn.style.display = 'none';
            resultDisplay.innerText = 'Prit...';
            target.style.display = 'none';
            timeDisplay.innerText = '0.000 s';

            const delay = Math.random() * 3000 + 1000; // 1 to 4 seconds
            timeoutId = setTimeout(() => {
                target.style.display = 'block';
                startTime = Date.now();
                resultDisplay.innerText = 'Kliko Tani!';
            }, delay);
        }

        function hitTarget() {
            const reactionTime = (Date.now() - startTime) / 1000;
            target.style.display = 'none';
            timeDisplay.innerText = reactionTime.toFixed(3) + ' s';
            resultDisplay.innerText = 'Koha jote e reagimit!';
            startBtn.style.display = 'inline-block';
            startBtn.innerText = 'Provo Përsëri';
        }
    </script>
</body>
</html>`
  },
  {
    id: "electric-field-master",
    title: "Electric Field Master",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electric Field Master</title>
    <style>
        :root {
            --bg: #0f172a;
            --panel: #1e293b;
            --accent: #38bdf8;
            --positive: #ef4444;
            --negative: #3b82f6;
        }

        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: var(--bg);
            color: white;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }

        #game-container {
            position: relative;
            margin-top: 20px;
            border: 2px solid var(--accent);
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
            background: radial-gradient(circle, #1e293b 1px, transparent 1px);
            background-size: 30px 30px;
        }

        canvas { display: block; cursor: crosshair; }

        .ui-panel {
            background: var(--panel);
            padding: 15px 25px;
            border-radius: 0 0 15px 15px;
            display: flex;
            gap: 20px;
            align-items: center;
            border: 1px solid #334155;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn-pos { background: var(--positive); color: white; }
        .btn-neg { background: var(--negative); color: white; }
        .btn-start { background: #10b981; color: white; }
        .btn-reset { background: #64748b; color: white; }
        .btn:hover { opacity: 0.8; transform: scale(1.05); }

        .stats { font-size: 1.1rem; color: var(--accent); }
        
        #instructions {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0,0,0,0.6);
            padding: 10px;
            border-radius: 5px;
            font-size: 0.8rem;
            pointer-events: none;
        }
    </style>
</head>
<body>

    <div class="ui-panel">
        <div class="stats">Niveli: <span id="lvl">1</span></div>
        <button class="btn btn-pos" onclick="setMode('pos')">+ Shto Pozitive</button>
        <button class="btn btn-neg" onclick="setMode('neg')">- Shto Negative</button>
        <button class="btn btn-start" onclick="startSim()">Lësho Protonin!</button>
        <button class="btn btn-reset" onclick="resetLevel()">Reset</button>
    </div>

    <div id="game-container">
        <div id="instructions">Klikoni në fushë për të vendosur ngarkesat.<br>Drejtoni protonin te rrethi i gjelbër!</div>
        <canvas id="gameCanvas"></canvas>
    </div>

<script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;

    let level = 1;
    let mode = 'pos';
    let charges = [];
    let particle = { x: 50, y: 250, vx: 0, vy: 0, active: false };
    let target = { x: 750, y: 250, r: 20 };
    let walls = [];
    let animationId;

    const levels = [
        { walls: [], target: {x: 750, y: 250} },
        { walls: [{x: 400, y: 150, w: 20, h: 200}], target: {x: 750, y: 250} },
        { walls: [{x: 300, y: 0, w: 20, h: 300}, {x: 500, y: 200, w: 20, h: 300}], target: {x: 750, y: 50} }
    ];

    function setMode(m) { mode = m; }

    canvas.addEventListener('mousedown', (e) => {
        if (particle.active) return;
        const rect = canvas.getBoundingClientRect();
        charges.push({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            type: mode,
            q: mode === 'pos' ? 1 : -1
        });
        draw();
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Vizato Targetin
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.r, 0, Math.PI*2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#10b981';

        // Vizato Muret
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#475569';
        walls.forEach(w => ctx.fillRect(w.x, w.y, w.w, w.h));

        // Vizato Ngarkesat e vendosura
        charges.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, 10, 0, Math.PI*2);
            ctx.fillStyle = c.type === 'pos' ? '#ef4444' : '#3b82f6';
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.fillText(c.type === 'pos' ? "+" : "-", c.x-3, c.y+4);
        });

        // Vizato Protonin
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 6, 0, Math.PI*2);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();
    }

    function update() {
        if (!particle.active) return;

        let fx = 0;
        let fy = 0;
        const k = 5000; // Konstanta e lojës

        charges.forEach(c => {
            let dx = particle.x - c.x;
            let dy = particle.y - c.y;
            let distSq = dx*dx + dy*dy;
            let dist = Math.sqrt(distSq);
            if (dist < 15) dist = 15; // Parandalon shpërthimin e forcës

            let force = (k * c.q) / distSq;
            fx += (dx / dist) * force;
            fy += (dy / dist) * force;
        });

        particle.vx += fx;
        particle.vy += fy;
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Kontrolli i përplasjeve
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            resetAttempt();
        }

        walls.forEach(w => {
            if (particle.x > w.x && particle.x < w.x + w.w && particle.y > w.y && particle.y < w.y + w.h) {
                resetAttempt();
            }
        });

        // Fitore
        let distToTarget = Math.hypot(particle.x - target.x, particle.y - target.y);
        if (distToTarget < target.r) {
            alert("Bravo! Niveli u kalua.");
            level++;
            loadLevel(level);
            return;
        }

        draw();
        animationId = requestAnimationFrame(update);
    }

    function startSim() {
        if (particle.active) return;
        particle.active = true;
        update();
    }

    function resetAttempt() {
        cancelAnimationFrame(animationId);
        particle = { x: 50, y: 250, vx: 0, vy: 0, active: false };
        particle.active = false;
        draw();
    }

    function resetLevel() {
        charges = [];
        resetAttempt();
    }

    function loadLevel(n) {
        if (n > levels.length) {
            alert("Ti je një Gjini i Fizikës! I fitove të gjitha.");
            level = 1;
            n = 1;
        }
        document.getElementById('lvl').innerText = n;
        const config = levels[n-1];
        walls = config.walls;
        target.x = config.target.x;
        target.y = config.target.y;
        resetLevel();
    }

    loadLevel(1);
</script>
</body>
</html>`
  },
  {
    id: "potential-master",
    title: "Potential Master",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Potential Master - Final Fixed</title>
    <style>
        :root {
            --cyan: #00f3ff;
            --rose: #ff0055;
            --dark: #050505;
        }

        body {
            margin: 0;
            background: var(--dark);
            color: white;
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        #ui {
            width: 300px;
            background: #0a0a0a;
            border-right: 1px solid #222;
            padding: 25px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            z-index: 10;
        }

        .level-card {
            background: #111;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid var(--cyan);
        }

        #game-area { flex-grow: 1; position: relative; }
        canvas { width: 100%; height: 100%; cursor: crosshair; }

        .btn {
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #333;
            background: #151515;
            color: white;
            cursor: pointer;
            font-weight: bold;
            transition: 0.2s;
        }

        .btn:hover { border-color: var(--cyan); }
        .active-q { border-color: var(--cyan) !important; background: #002222; }

        /* RREGULLIMI I FORMULES NE FUND */
        .formula-footer {
            margin-top: auto;
            padding-top: 20px;
            border-top: 1px solid #222;
            font-size: 1rem;
            line-height: 1.5;
        }

        .math-fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-family: "Times New Roman", serif;
            font-style: italic;
            font-size: 1.2rem;
        }

        .fraction-top { border-bottom: 1px solid white; padding: 0 5px; }
        .fraction-bottom { padding: 0 5px; }

        #multimeter {
            position: absolute;
            background: rgba(0,0,0,0.9);
            border: 1px solid var(--cyan);
            padding: 8px;
            border-radius: 4px;
            font-family: monospace;
            pointer-events: none;
            display: none;
        }

        .success-overlay {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            background: #00ff88;
            color: black;
            padding: 25px 50px;
            border-radius: 10px;
            display: none;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div id="ui">
        <h2 style="color: var(--cyan); margin: 0; letter-spacing: 1px;">POTENTIAL LAB</h2>
        
        <div class="level-card">
            <div id="lvlNum" style="font-weight: bold;">Niveli 1</div>
            <div id="lvlGoal" style="font-size: 0.85rem; color: #ffcc00;">Synimi: V > 100V</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
            <button id="posBtn" class="btn active-q" onclick="setQ(1)">+ Pozitive</button>
            <button id="negBtn" class="btn" onclick="setQ(-1)">- Negative</button>
            <button class="btn" onclick="resetLevel()" style="margin-top: 10px;">Reset</button>
        </div>

        <div class="formula-footer">
            Formula: 
            <div class="math-fraction">
                V = 
                <div style="display: inline-block; vertical-align: middle;">
                    <div class="fraction-top">E<sub>p</sub></div>
                    <div class="fraction-bottom">q</div>
                </div>
            </div>
            <br><br>
            Shtyp mbi fushë për të vendosur burimin.
        </div>
    </div>

    <div id="game-area">
        <canvas id="canvas"></canvas>
        <div id="multimeter">V: 0.00V</div>
        <div id="success" class="success-overlay">
            <h3>NIVELI U KALUA!</h3>
            <button class="btn" onclick="nextLevel()" style="background: black; border: none;">VAZHDO</button>
        </div>
    </div>

<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const multi = document.getElementById('multimeter');
    const successDiv = document.getElementById('success');

    let currentLevel = 0;
    let charges = [];
    let qType = 1;
    let width, height;

    const levels = [
        { goalV: 100, target: {x: 0.7, y: 0.5}, walls: [] },
        { goalV: -150, target: {x: 0.8, y: 0.2}, walls: [{x: 0.5, y: 0, w: 0.02, h: 0.7}] },
        { goalV: 200, target: {x: 0.5, y: 0.5}, walls: [{x: 0.3, y: 0.3, w: 0.4, h: 0.02}, {x: 0.3, y: 0.7, w: 0.4, h: 0.02}] }
    ];

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function setQ(v) {
        qType = v;
        document.getElementById('posBtn').classList.toggle('active-q', v > 0);
        document.getElementById('negBtn').classList.toggle('active-q', v < 0);
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        multi.style.display = 'block';
        multi.style.left = (mx + 15) + 'px';
        multi.style.top = (my + 15) + 'px';
        let V = calculatePotential(mx, my);
        multi.innerText = 'V: ' + V.toFixed(1) + 'V';
    });

    canvas.addEventListener('mousedown', (e) => {
        if(successDiv.style.display === 'block') return;
        const rect = canvas.getBoundingClientRect();
        charges.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, q: qType * 200 });
    });

    function calculatePotential(px, py) {
        let V = 0;
        charges.forEach(c => {
            let r = Math.hypot(px - c.x, py - c.y) + 20;
            V += (c.q * 10) / (r * 0.1);
        });
        return V;
    }

    function resetLevel() { charges = []; successDiv.style.display = 'none'; }

    function nextLevel() {
        currentLevel++;
        if(currentLevel >= levels.length) { alert("Urime! Keni fituar."); currentLevel = 0; }
        document.getElementById('lvlNum').innerText = "Niveli " + (currentLevel + 1);
        document.getElementById('lvlGoal').innerText = 'Synimi: V > ' + levels[currentLevel].goalV + 'V';
        resetLevel();
    }

    function draw() {
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, width, height);
        const lvl = levels[currentLevel];
        ctx.fillStyle = "#222";
        lvl.walls.forEach(w => ctx.fillRect(w.x * width, w.y * height, w.w * width, w.h * height));
        const tx = lvl.target.x * width;
        const ty = lvl.target.y * height;
        const currentV = calculatePotential(tx, ty);
        const reached = Math.abs(currentV) >= Math.abs(lvl.goalV);
        ctx.beginPath();
        ctx.arc(tx, ty, 35, 0, Math.PI*2);
        ctx.strokeStyle = reached ? "#00ff88" : "#ffcc00";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText('SENSOR: ' + currentV.toFixed(0) + 'V', tx, ty - 45);
        charges.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, 10, 0, Math.PI*2);
            ctx.fillStyle = c.q > 0 ? "#ff0055" : "#0088ff";
            ctx.fill();
        });
        if (reached && successDiv.style.display !== 'block') successDiv.style.display = 'block';
        requestAnimationFrame(draw);
    }
    function varProp(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
    draw();
</script>
</body>
</html>`
  },
  {
    id: "induction-master",
    title: "Induction Master",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Induction Master - I = ε/R</title>
    <style>
        :root {
            --neon-blue: #00f2ff;
            --neon-red: #ff0077;
            --grid-color: #1a1a2e;
        }

        body {
            margin: 0;
            background: #050505;
            color: #fff;
            font-family: 'Orbitron', sans-serif;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        #sidebar {
            width: 300px;
            background: rgba(10, 10, 25, 0.9);
            border-right: 2px solid var(--neon-blue);
            padding: 25px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
        }

        .level-box {
            border: 1px solid var(--neon-blue);
            padding: 15px;
            background: rgba(0, 242, 255, 0.05);
            text-align: center;
        }

        .gauge-container {
            background: #000;
            border: 2px solid #333;
            height: 30px;
            position: relative;
            margin-top: 10px;
        }

        #gauge-fill {
            height: 100%;
            width: 0%;
            background: var(--neon-blue);
            transition: width 0.1s;
            box-shadow: 0 0 15px var(--neon-blue);
        }

        input[type=range] { width: 100%; accent-color: var(--neon-red); }

        /* FORMULA E SAKTË NË FUND */
        .formula-card {
            margin-top: auto;
            padding: 15px;
            background: rgba(0,0,0,0.8);
            border-top: 2px solid var(--neon-red);
            text-align: center;
        }

        .math-style {
            font-size: 1.5rem;
            color: var(--neon-blue);
            font-family: "Times New Roman", serif;
            font-style: italic;
            margin: 10px 0;
        }

        .fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
        }
        .top { border-bottom: 1px solid var(--neon-blue); padding: 0 5px; }
        .bottom { padding: 0 5px; }

        #main-view { flex-grow: 1; position: relative; }
        canvas { width: 100%; height: 100%; }

        .btn {
            background: var(--neon-blue);
            color: #000;
            border: none;
            padding: 10px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
        }
    </style>
</head>
<body>

    <div id="sidebar">
        <h2 style="color: var(--neon-blue); margin: 0; font-size: 1.2rem;">GEN-CONTROLLER</h2>
        
        <div class="level-box">
            <div id="lvlNum">NIVELI 1</div>
            <div style="font-size: 0.7rem; margin-top: 5px;">TARGET I: <span id="targetVal">2.00</span> A</div>
        </div>

        <div class="control-unit">
            <label style="font-size: 0.7rem;">REZISTENCA (R)</label>
            <input type="range" id="resistor" min="1" max="10" step="0.5" value="5">
            <div id="rVal" style="text-align: center;">5.0 Ω</div>
        </div>

        <div class="gauge-container">
            <div id="gauge-fill"></div>
        </div>
        <div style="text-align: center; font-size: 0.8rem;">RRYMA AKTUALE (I)</div>

        <div class="formula-card">
            <div style="font-size: 0.7rem; opacity: 0.6;">LIGJI I INDUKSIONIT</div>
            <div class="math-style">
                I = 
                <div class="fraction">
                    <div class="top">ε</div>
                    <div class="bottom">R</div>
                </div>
            </div>
            <p style="font-size: 0.7rem;">Lëviz magnetin me shpejtësi për të gjeneruar ε (tension)!</p>
        </div>
    </div>

    <div id="main-view">
        <canvas id="gameCanvas"></canvas>
    </div>

<script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const resSlider = document.getElementById('resistor');
    const gauge = document.getElementById('gauge-fill');

    let width, height;
    let magnetX = 100;
    let lastMagnetX = 100;
    let velocity = 0;
    let currentLevel = 0;

    const levels = [
        { target: 2.0, r: 5 },
        { target: 4.5, r: 2 },
        { target: 1.5, r: 8 }
    ];

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        magnetX = e.clientX - rect.left;
    });

    function draw() {
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, width, height);

        // Grid background
        ctx.strokeStyle = "#111";
        for(let i=0; i<width; i+=50) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke();
        }

        // Llogarit ε (FEM) bazuar në shpejtësinë e magnetit
        velocity = Math.abs(magnetX - lastMagnetX);
        lastMagnetX = magnetX;

        const epsilon = velocity * 0.5;
        const R = parseFloat(resSlider.value);
        const I = epsilon / R;

        document.getElementById('rVal').innerText = R.toFixed(1) + " Ω";
        gauge.style.width = Math.min(I * 20, 100) + "%";

        // Vizato Spirën (Coil)
        ctx.strokeStyle = "#555";
        ctx.lineWidth = 5;
        for(let i=0; i<5; i++) {
            ctx.beginPath();
            ctx.ellipse(width/2, height/2, 40, 100, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Vizato Magnetin
        ctx.fillStyle = "#ff0077";
        ctx.fillRect(magnetX - 40, height/2 - 20, 40, 40);
        ctx.fillStyle = "#ccc";
        ctx.fillRect(magnetX, height/2 - 20, 40, 40);
        ctx.fillStyle = "white";
        ctx.fillText("N", magnetX - 25, height/2 + 5);
        ctx.fillText("S", magnetX + 15, height/2 + 5);

        // Kontrollo shënjestrën e nivelit
        const target = levels[currentLevel].target;
        document.getElementById('targetVal').innerText = target.toFixed(2);
        
        if(Math.abs(I - target) < 0.2) {
            ctx.fillStyle = "#00f2ff";
            ctx.font = "20px Orbitron";
            ctx.fillText("STABILIZUAR!", width/2 - 80, 100);
        }

        requestAnimationFrame(draw);
    }

    draw();
</script>
</body>
</html>`
  },
  {
    id: "flux-master",
    title: "Flux Master",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Flux Master - Levels</title>
    <style>
        :root {
            --orange: #ff6b00;
            --bg: #050505;
            --card: #111;
        }

        body {
            margin: 0;
            background: var(--bg);
            color: #eee;
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        #ui {
            width: 300px;
            background: #0a0a0a;
            border-right: 1px solid #222;
            padding: 25px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .level-card {
            background: var(--card);
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid var(--orange);
        }

        .goal-text { color: var(--orange); font-weight: bold; font-size: 1.1rem; }

        input[type=range] { width: 100%; accent-color: var(--orange); cursor: pointer; }

        /* FORMULA E SAKTË DHE E PASTER */
        .formula-footer {
            margin-top: auto;
            padding: 20px;
            background: #000;
            border-radius: 8px;
            border: 1px solid #333;
            text-align: center;
        }

        .math-text {
            font-size: 1.4rem;
            color: var(--orange);
            font-family: "Times New Roman", serif;
            font-style: italic;
            margin: 10px 0;
        }

        #viewport { flex-grow: 1; position: relative; }
        canvas { width: 100%; height: 100%; }

        .overlay {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.9);
            border: 2px solid var(--orange);
            padding: 30px;
            text-align: center;
            display: none;
            border-radius: 12px;
        }

        .btn {
            background: var(--orange);
            color: black;
            border: none;
            padding: 10px 20px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 15px;
        }
    </style>
</head>
<body>

    <div id="ui">
        <h2 style="margin:0; color:var(--orange)">FLUX STATIONS</h2>
        
        <div class="level-card">
            <div id="lvlNum">Niveli 1</div>
            <div style="font-size: 0.8rem; opacity: 0.6;">OBJEKTIVI:</div>
            <div id="targetFlux" class="goal-text">3.00 Wb</div>
        </div>

        <div style="background:#151515; padding:15px; border-radius:8px;">
            <label style="font-size: 0.7rem; opacity: 0.5;">KONTROLLI I KËNDIT (α)</label>
            <input type="range" id="angleSlider" min="0" max="90" step="1" value="45">
            <div id="angleVal" style="text-align:center; margin-top:5px;">45°</div>
        </div>

        <div style="padding:10px; background:#000; border-radius:8px; font-family:monospace;">
            Φ Real: <span id="currentFlux">0.00</span> Wb
        </div>

        <div class="formula-footer">
            Formula:
            <div class="math-text">Φ = B · S · cos(α)</div>
            <p style="font-size: 0.75rem; color: #666;">Përshtat këndin për të kapur fluksin e duhur.</p>
        </div>
    </div>

    <div id="viewport">
        <canvas id="mainCanvas"></canvas>
        <div id="winOverlay" class="overlay">
            <h2 style="color:var(--orange)">STACIONI U AKTIVIZUA!</h2>
            <p>Fluksi magnetik është brenda normës.</p>
            <button class="btn" onclick="nextLevel()">NIVELI TJETËR</button>
        </div>
    </div>

<script>
    const canvas = document.getElementById('mainCanvas');
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('angleSlider');
    const winOverlay = document.getElementById('winOverlay');

    let width, height;
    let currentLevel = 0;
    
    // Parametrat e fushës
    const B = 1.0; 
    const S = 4.0;

    const levels = [
        { target: 4.00, desc: "Maksimizo kapjen (0°)" },
        { target: 2.83, desc: "Kap gjysmën (45°)" },
        { target: 0.00, desc: "Izolo plotësisht (90°)" }
    ];

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function nextLevel() {
        currentLevel++;
        if(currentLevel >= levels.length) {
            alert("Urime! Je një Inxhinier i Fluksit!");
            currentLevel = 0;
        }
        document.getElementById('lvlNum').innerText = "Niveli " + (currentLevel + 1);
        document.getElementById('targetFlux').innerText = levels[currentLevel].target.toFixed(2) + " Wb";
        winOverlay.style.display = 'none';
    }

    function draw() {
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, width, height);

        const alpha = parseInt(slider.value);
        document.getElementById('angleVal').innerText = alpha + "°";
        
        const rad = alpha * Math.PI / 180;
        const flux = B * S * Math.cos(rad);
        document.getElementById('currentFlux').innerText = flux.toFixed(2);

        // Vizato vijat e fushës B
        ctx.strokeStyle = "rgba(255, 107, 0, 0.15)";
        for(let i=0; i<height; i+=40) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(width, i);
            ctx.stroke();
        }

        // Vizato Spirën (Panelin)
        ctx.save();
        ctx.translate(width/2, height/2);
        ctx.rotate(rad);
        
        ctx.fillStyle = "#222";
        ctx.strokeStyle = "#ff6b00";
        ctx.lineWidth = 4;
        ctx.fillRect(-10, -120, 20, 240);
        ctx.strokeRect(-10, -120, 20, 240);
        
        // Vektori Normal S
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.setLineDash([5, 3]);
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        ctx.restore();

        // Kontrollo Fitoren
        const diff = Math.abs(flux - levels[currentLevel].target);
        if(diff < 0.05 && winOverlay.style.display !== 'block') {
            winOverlay.style.display = 'block';
        }

        requestAnimationFrame(draw);
    }

    draw();
</script>
</body>
</html>`
  },
  {
    id: "lorentz-force-lab",
    title: "Lorentz Force Lab",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Lorentz Force Lab</title>
    <style>
        :root {
            --accent: #f0abfc; /* Pink/Purple Astro */
            --bg: #020617;
            --panel: rgba(15, 23, 42, 0.8);
        }

        body {
            margin: 0;
            background: var(--bg);
            color: white;
            font-family: 'Segoe UI', sans-serif;
            display: flex;
            height: 100vh;
        }

        #sidebar {
            width: 320px;
            background: var(--panel);
            backdrop-filter: blur(10px);
            border-right: 1px solid rgba(240, 171, 252, 0.2);
            padding: 25px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .level-display {
            background: linear-gradient(45deg, #2e1065, #701a75);
            padding: 15px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid var(--accent);
        }

        .control-group {
            background: rgba(0,0,0,0.3);
            padding: 15px;
            border-radius: 8px;
        }

        input[type=range] { width: 100%; accent-color: var(--accent); }

        /* FORMULA E SAKTË NË FUND */
        .formula-footer {
            margin-top: auto;
            background: rgba(240, 171, 252, 0.1);
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid var(--accent);
        }

        .formula-text {
            font-size: 1.3rem;
            font-family: "Times New Roman", serif;
            font-style: italic;
            letter-spacing: 1px;
        }

        #viewport { flex-grow: 1; position: relative; }
        canvas { width: 100%; height: 100%; }

        .btn {
            background: var(--accent);
            color: black;
            border: none;
            padding: 12px;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }
        .btn:hover { opacity: 0.8; transform: scale(1.02); }
    </style>
</head>
<body>

    <div id="sidebar">
        <h2 style="margin: 0; color: var(--accent);">LORENTZ PRO</h2>
        
        <div class="level-display">
            <div style="font-size: 0.8rem; opacity: 0.8;">SITUATA</div>
            <div id="lvlName" style="font-size: 1.2rem; font-weight: bold;">Niveli 1: Devijimi</div>
        </div>

        <div class="control-group">
            <label class="label">Fusha Magnetike (B)</label>
            <input type="range" id="bRange" min="-5" max="5" step="0.1" value="0">
            <div id="bVal" style="text-align: center; color: var(--accent);">0.00 T</div>
        </div>

        <button class="btn" onclick="fireParticle()">LËSHO GRIMCËN</button>
        <button class="btn" onclick="resetLevel()" style="background: transparent; color: white; border: 1px solid white;">RESET</button>

        <div class="formula-footer">
            <div style="font-size: 0.7rem; opacity: 0.7; margin-bottom: 5px;">FORCA E LORENCIT:</div>
            <div class="formula-text">F = q · v · B · sin(α)</div>
            <p style="font-size: 0.75rem; margin-top: 10px;">Gjej fushën B që grimca të godasë cakun!</p>
        </div>
    </div>

    <div id="viewport">
        <canvas id="canvas"></canvas>
    </div>

<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const bRange = document.getElementById('bRange');
    
    let width, height;
    let particle = { x: 50, y: 0, vx: 5, vy: 0, active: false, path: [] };
    let target = { x: 0, y: 0, r: 25 };
    let currentLevel = 0;
    
    const levels = [
        { y: 0.5, ty: 0.2, v: 6 },
        { y: 0.8, ty: 0.3, v: 8 },
        { y: 0.2, ty: 0.8, v: 10 }
    ];

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        loadLevel();
    }
    window.addEventListener('resize', resize);

    function loadLevel() {
        const l = levels[currentLevel];
        particle.y = l.y * height;
        particle.vx = l.v;
        target.x = width - 100;
        target.y = l.ty * height;
        resetParticle();
    }

    function resetParticle() {
        particle.x = 50;
        particle.y = levels[currentLevel].y * height;
        particle.vy = 0;
        particle.active = false;
        particle.path = [];
    }

    function fireParticle() {
        resetParticle();
        particle.active = true;
    }

    function resetLevel() { resetParticle(); }

    function draw() {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, width, height);

        // Vizato targetin
        ctx.beginPath();
        ctx.arc(target.x, target.y, target.r, 0, Math.PI*2);
        ctx.strokeStyle = "#f0abfc";
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Vizato B field (Crosses or Dots)
        const B = parseFloat(bRange.value);
        document.getElementById('bVal').innerText = B.toFixed(2) + " T";
        
        ctx.fillStyle = "rgba(240, 171, 252, 0.05)";
        if(B !== 0) {
            for(let i=0; i<width; i+=100) {
                for(let j=0; j<height; j+=100) {
                    ctx.fillText(B > 0 ? "×" : "•", i, j);
                }
            }
        }

        if(particle.active) {
            // Logjika e Fizikës: F = qvB (sin alfa këtu është 1 sepse B është pingul me ekranin)
            // r = mv/qB -> për thjeshtësi, ndryshojmë drejtimin e vy
            const force = particle.vx * B * 0.05;
            particle.vy += force;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.path.push({x: particle.x, y: particle.y});

            // Vizato rrugëtimin
            ctx.beginPath();
            ctx.strokeStyle = "rgba(240, 171, 252, 0.5)";
            particle.path.forEach((p, i) => {
                if(i===0) ctx.moveTo(p.x, p.y);
                else ctx.lineTo(p.x, p.y);
            });
            ctx.stroke();

            // Kontrolli i goditjes
            let dist = Math.hypot(particle.x - target.x, particle.y - target.y);
            if(dist < target.r) {
                alert("GODITJE E SAKTË!");
                currentLevel = (currentLevel + 1) % levels.length;
                loadLevel();
            }
            
            if(particle.x > width || particle.y < 0 || particle.y > height) {
                particle.active = false;
            }
        }

        // Vizato grimcën
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 6, 0, Math.PI*2);
        ctx.fillStyle = "#fff";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#f0abfc";
        ctx.fill();

        requestAnimationFrame(draw);
    }

    resize();
    draw();
</script>
</body>
</html>`
  },
  {
    id: "amperes-force-defender",
    title: "Ampere's Force Defender",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Ampere's Force Defender</title>
    <style>
        :root {
            --neon-green: #00ff9d;
            --radar-bg: #0b1110;
            --wire-gold: #ffcc33;
        }

        body {
            margin: 0;
            background: var(--radar-bg);
            color: white;
            font-family: 'Courier New', Courier, monospace;
            display: flex;
            height: 100vh;
        }

        #ui-sidebar {
            width: 300px;
            background: rgba(0, 20, 20, 0.9);
            border-right: 2px solid var(--neon-green);
            padding: 25px;
            display: flex;
            flex-direction: column;
            box-shadow: 5px 0 20px rgba(0, 255, 157, 0.1);
        }

        .display-panel {
            background: #000;
            border: 1px solid #004422;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 4px;
        }

        .label { font-size: 0.75rem; color: var(--neon-green); opacity: 0.7; }
        .value { font-size: 1.4rem; color: var(--neon-green); text-shadow: 0 0 10px var(--neon-green); }

        /* Formula e pastër në fund */
        .formula-box {
            margin-top: auto;
            background: rgba(0,0,0,0.5);
            padding: 20px;
            border: 1px dashed var(--neon-green);
            text-align: center;
        }

        .math-fraction {
            font-size: 1.4rem;
            color: white;
            margin: 10px 0;
        }

        #game-container { flex-grow: 1; position: relative; overflow: hidden; }
        canvas { width: 100%; height: 100%; }

        .btn {
            background: transparent;
            border: 1px solid var(--neon-green);
            color: var(--neon-green);
            padding: 10px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 10px;
        }

        .btn:hover { background: var(--neon-green); color: black; }
    </style>
</head>
<body>

    <div id="ui-sidebar">
        <h2 style="color: var(--neon-green); margin: 0 0 20px 0;">FORCE RADAR</h2>

        <div class="display-panel">
            <div class="label">KËNDI (α)</div>
            <div id="angle-val" class="value">0°</div>
        </div>

        <div class="display-panel">
            <div class="label">FORCA E AMPERIT (F)</div>
            <div id="force-val" class="value">0.00 N</div>
        </div>

        <div style="font-size: 0.8rem; color: #888;">
            Udhëzim: Rrotulloni përcjellësin me miun. Forca është maksimale kur ai është pingul me fushën (B).
        </div>

        <div class="formula-box">
            <div style="font-size: 0.7rem; color: var(--neon-green);">FORMULA:</div>
            <div class="math-fraction">
                F = B · I · L · sin(α)
            </div>
            <div style="font-size: 0.7rem;">Përcaktoni forcën mbi përcjellës</div>
        </div>
    </div>

    <div id="game-container">
        <canvas id="radarCanvas"></canvas>
    </div>

<script>
    const canvas = document.getElementById('radarCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    
    // Konstante Fizike
    const B = 0.5; // Fusha Magnetike (Tesla)
    const I = 10;  // Rryma (Amper)
    const L = 2;   // Gjatësia (Metra)
    
    let angle = 0; // Këndi në gradë

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        
        // Llogarit këndin në raport me fushën B (horizontale)
        const dx = mx - width/2;
        const dy = my - height/2;
        angle = Math.abs(Math.atan2(dy, dx) * 180 / Math.PI);
        if (angle > 180) angle = 180;
    });

    function draw() {
        ctx.fillStyle = "#0b1110";
        ctx.fillRect(0, 0, width, height);

        // Vizato fushën magnetike B (Vija paralele horizontale)
        ctx.strokeStyle = "rgba(0, 255, 157, 0.1)";
        ctx.lineWidth = 1;
        for(let i=0; i<height; i+=40) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(width, i);
            ctx.stroke();
            // Shigjetat e fushës
            ctx.fillStyle = "rgba(0, 255, 157, 0.2)";
            ctx.fillText("B →", 10, i - 5);
        }

        // Llogarit Forcën
        const rad = angle * Math.PI / 180;
        const F = B * I * L * Math.abs(Math.sin(rad));

        document.getElementById('angle-val').innerText = Math.round(angle) + "°";
        document.getElementById('force-val').innerText = F.toFixed(2) + " N";

        // Vizato Përcjellësin (Wire)
        ctx.save();
        ctx.translate(width/2, height/2);
        ctx.rotate(rad);
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ffcc33";
        ctx.strokeStyle = "#ffcc33";
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(-100, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        
        // Shënimi i rrymës I
        ctx.fillStyle = "white";
        ctx.fillText("I ➔", 20, -15);
        ctx.restore();

        // Vizato Vektorin e Forcës (F)
        if (F > 0.1) {
            ctx.beginPath();
            ctx.strokeStyle = "#ff0055";
            ctx.lineWidth = 4;
            ctx.moveTo(width/2, height/2);
            // Forca e Amperit është pingul me B dhe I
            ctx.lineTo(width/2, height/2 - (F * 20)); 
            ctx.stroke();
            ctx.fillStyle = "#ff0055";
            ctx.fillText("F (Forca)", width/2 + 10, height/2 - (F * 20));
        }

        requestAnimationFrame(draw);
    }

    draw();
</script>
</body>
</html>`
  },
  {
    id: "magnetic-induction-master",
    title: "Magnetic Induction Master",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Magnetic Induction Master</title>
    <style>
        :root {
            --gold: #ffb800;
            --magnetic-blue: #00d1ff;
            --industrial-gray: #1a1a1a;
            --neon-green: #39ff14;
        }

        body {
            margin: 0;
            background-color: #0a0a0a;
            color: #e0e0e0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }

        /* Sidebar UI Moderne */
        #control-panel {
            width: 320px;
            background: var(--industrial-gray);
            border-right: 2px solid #333;
            padding: 30px;
            display: flex;
            flex-direction: column;
            box-shadow: 10px 0 20px rgba(0,0,0,0.5);
        }

        .header-box {
            border-bottom: 1px solid #444;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }

        h1 { font-size: 1.2rem; color: var(--gold); letter-spacing: 2px; margin: 0; }

        .stat-group {
            background: #252525;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            border: 1px solid #333;
        }

        .label { font-size: 0.7rem; color: #888; text-transform: uppercase; }
        .value { font-size: 1.2rem; font-family: 'Courier New', monospace; color: var(--magnetic-blue); }

        .btn {
            background: #333;
            color: white;
            border: 1px solid #444;
            padding: 12px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
            margin-bottom: 10px;
        }

        .btn:hover { background: var(--gold); color: black; }
        .active { border-color: var(--magnetic-blue); box-shadow: 0 0 10px rgba(0,209,255,0.3); }

        /* Formula e rregulluar ne fund */
        .formula-container {
            margin-top: auto;
            padding: 20px;
            background: #000;
            border-radius: 8px;
            border: 1px solid #444;
            text-align: center;
        }

        .math-fraction {
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            font-size: 1.3rem;
            color: var(--gold);
        }

        .frac-top { border-bottom: 1px solid var(--gold); padding: 0 5px; }
        .frac-bottom { padding: 0 5px; }

        #game-viewport { flex-grow: 1; position: relative; }
        canvas { width: 100%; height: 100%; cursor: crosshair; }

        .notification {
            position: absolute;
            top: 20px; right: 20px;
            background: var(--neon-green);
            color: black;
            padding: 15px 30px;
            border-radius: 5px;
            font-weight: bold;
            display: none;
        }
    </style>
</head>
<body>

    <div id="control-panel">
        <div class="header-box">
            <h1>MAG-INDUCTION v1.0</h1>
        </div>

        <div class="stat-group">
            <div class="label">Induksioni (B)</div>
            <div id="b-val" class="value">0.00 T</div>
        </div>

        <div class="stat-group">
            <div class="label">Forca (Fmax)</div>
            <div id="f-val" class="value">0.00 N</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 5px;">
            <button id="northBtn" class="btn active" onclick="setPole(1)">Shto Polin Veri (N)</button>
            <button id="southBtn" class="btn" onclick="setPole(-1)">Shto Polin Jug (S)</button>
            <button class="btn" onclick="resetField()" style="margin-top: 20px; border-color: #ff4444; color: #ff4444;">Reset Fushën</button>
        </div>

        <div class="formula-footer">
            <p style="font-size: 0.8rem; color: #888;">Relacioni:</p>
            <div class="math-fraction">
                B = 
                <div style="display: inline-block; vertical-align: middle;">
                    <div class="frac-top">F<sub>max</sub></div>
                    <div class="frac-bottom">I · L</div>
                </div>
            </div>
            <p style="font-size: 0.75rem; color: #666; margin-top: 10px;">Vendos magnetët për të devijuar rrymën.</p>
        </div>
    </div>

    <div id="game-viewport">
        <div id="success-msg" class="notification">OBJEKTIVI U ARRI!</div>
        <canvas id="canvas"></canvas>
    </div>

<script>
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let magnets = [];
    let poleType = 1; // 1 for North, -1 for South
    let currentI = 2.5; // Amper
    let lengthL = 0.5; // Metra
    
    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function setPole(type) {
        poleType = type;
        document.getElementById('northBtn').classList.toggle('active', type === 1);
        document.getElementById('southBtn').classList.toggle('active', type === -1);
    }

    function resetField() { magnets = []; }

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        magnets.push({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            type: poleType
        });
    });

    function calculateB(px, py) {
        let totalB = 0;
        magnets.forEach(m => {
            let d = Math.hypot(px - m.x, py - m.y) + 50;
            totalB += (m.type * 5000) / (d * d);
        });
        return totalB;
    }

    function draw() {
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, width, height);

        // Vizato përcjellësin (Current Wire)
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(width/2, 0);
        ctx.lineTo(width/2, height);
        ctx.stroke();

        // Llogarit B dhe F në mes të përcjellësit
        let B = calculateB(width/2, height/2);
        let F = Math.abs(B * currentI * lengthL);

        document.getElementById('b-val').innerText = Math.abs(B).toFixed(2) + " T";
        document.getElementById('f-val').innerText = F.toFixed(2) + " N";

        // Vizato grimcat e rrymës (I)
        let offset = (Date.now() % 1000) / 1000 * 50;
        ctx.fillStyle = "#00d1ff";
        for(let i=0; i<height; i+=50) {
            ctx.beginPath();
            ctx.arc(width/2, i + offset, 4, 0, Math.PI*2);
            ctx.fill();
        }

        // Vizato magnetët
        magnets.forEach(m => {
            ctx.fillStyle = m.type === 1 ? "#ff4444" : "#4444ff";
            ctx.fillRect(m.x - 20, m.y - 30, 40, 60);
            ctx.fillStyle = "white";
            ctx.font = "bold 16px Arial";
            ctx.textAlign = "center";
            ctx.fillText(m.type === 1 ? "N" : "S", m.x, m.y + 5);
        });

        // Kontrollo fitoren (Duhet forcë > 10N)
        if(F > 10) {
            document.getElementById('success-msg').style.display = 'block';
        } else {
            document.getElementById('success-msg').style.display = 'none';
        }

        requestAnimationFrame(draw);
    }

    draw();
</script>
</body>
</html>`
  },
  {
    id: "ohms-law-challenge",
    title: "Ohm's Law Challenge",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Ohm's Law Challenge</title>
    <style>
        :root {
            --primary: #3b82f6;
            --bg: #0f172a;
            --card: #1e293b;
        }
        body {
            font-family: system-ui, sans-serif;
            background: var(--bg);
            color: white;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .game-box {
            background: var(--card);
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            width: 100%;
            max-width: 600px;
            text-align: center;
        }
        .circuit-display {
            background: #000;
            height: 200px;
            margin: 20px 0;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            border: 2px solid #334155;
        }
        .wire {
            position: absolute;
            background: #64748b;
        }
        .resistor {
            width: 60px;
            height: 30px;
            background: #94a3b8;
            border: 2px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            font-weight: bold;
            z-index: 2;
        }
        .battery {
            width: 40px;
            height: 60px;
            background: #ef4444;
            border: 2px solid #fff;
            position: absolute;
            left: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px;
            box-sizing: border-box;
        }
        .controls {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }
        .control-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        input[type=range] {
            width: 100%;
            accent-color: var(--primary);
        }
        .stats {
            margin-top: 20px;
            padding: 15px;
            background: rgba(59, 130, 246, 0.1);
            border-radius: 0.5rem;
            font-size: 1.2rem;
        }
        .formula {
            font-family: "Times New Roman", serif;
            font-style: italic;
            font-size: 1.5rem;
            margin: 10px 0;
            color: var(--primary);
        }
        .goal {
            color: #fbbf24;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="game-box">
        <h1>Ligji i Ohmit</h1>
        <div id="goal-text" class="goal">Objektivi: Arri rrymën I = 2.00 A</div>
        
        <div class="circuit-display">
            <div class="battery">
                <div style="text-align:center">+</div>
                <div id="v-label" style="font-size:0.8rem">10V</div>
                <div style="text-align:center">-</div>
            </div>
            <div class="resistor" id="r-box">5Ω</div>
            <!-- Simple wire visualization -->
            <div class="wire" style="width:300px; height:2px; top:100px;"></div>
            <div class="wire" style="width:2px; height:100px; left:50px; top:50px;"></div>
            <div class="wire" style="width:2px; height:100px; left:350px; top:50px;"></div>
        </div>

        <div class="controls">
            <div class="control-group">
                <label>Tensioni (U): <span id="u-val">10</span>V</label>
                <input type="range" id="u-slider" min="1" max="50" value="10">
            </div>
            <div class="control-group">
                <label>Rezistenca (R): <span id="r-val">5</span>Ω</label>
                <input type="range" id="r-slider" min="1" max="100" value="5">
            </div>
        </div>

        <div class="stats">
            Intensiteti i rrymës (I): <span id="i-val">2.00</span> A
        </div>

        <div class="formula">I = U / R</div>
        
        <button id="next-btn" style="display:none; margin-top:20px; padding:10px 20px; background:#10b981; color:white; border:none; border-radius:5px; cursor:pointer;" onclick="nextLevel()">Niveli Tjetër</button>
    </div>

    <script>
        const uSlider = document.getElementById('u-slider');
        const rSlider = document.getElementById('r-slider');
        const uVal = document.getElementById('u-val');
        const rVal = document.getElementById('r-val');
        const iVal = document.getElementById('i-val');
        const vLabel = document.getElementById('v-label');
        const rBox = document.getElementById('r-box');
        const goalText = document.getElementById('goal-text');
        const nextBtn = document.getElementById('next-btn');

        let currentLevel = 0;
        const levels = [
            { target: 2.00 },
            { target: 0.50 },
            { target: 5.00 },
            { target: 1.25 }
        ];

        function update() {
            const u = parseFloat(uSlider.value);
            const r = parseFloat(rSlider.value);
            const i = u / r;

            uVal.innerText = u;
            rVal.innerText = r;
            iVal.innerText = i.toFixed(2);
            vLabel.innerText = u + "V";
            rBox.innerText = r + "Ω";

            if (Math.abs(i - levels[currentLevel].target) < 0.01) {
                goalText.innerText = "SUKSES! Objektivi u arrit.";
                goalText.style.color = "#10b981";
                nextBtn.style.display = "inline-block";
            } else {
                goalText.innerText = "Objektivi: Arri rrymën I = " + levels[currentLevel].target.toFixed(2) + " A";
                goalText.style.color = "#fbbf24";
                nextBtn.style.display = "none";
            }
        }

        function nextLevel() {
            currentLevel++;
            if (currentLevel >= levels.length) {
                alert("Urime! Ke përfunduar të gjitha nivelet e Ligjit të Ohmit.");
                currentLevel = 0;
            }
            update();
        }

        uSlider.addEventListener('input', update);
        rSlider.addEventListener('input', update);
        update();
    </script>
</body>
</html>`
  },
  {
    id: "power-grid-manager",
    title: "Power Grid Manager",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Power Grid Manager</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #020617;
            color: white;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            width: 100%;
            max-width: 800px;
            margin-top: 20px;
        }
        .house {
            background: #1e293b;
            padding: 15px;
            border-radius: 10px;
            border: 2px solid #334155;
            text-align: center;
            transition: 0.3s;
        }
        .house.powered {
            border-color: #fbbf24;
            box-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
        }
        .house.overloaded {
            border-color: #ef4444;
            background: #450a0a;
        }
        .stats-panel {
            background: #0f172a;
            padding: 20px;
            border-radius: 15px;
            width: 100%;
            max-width: 800px;
            display: flex;
            justify-content: space-around;
            border: 1px solid #1e293b;
            margin-bottom: 20px;
        }
        .stat {
            text-align: center;
        }
        .stat-label { font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; }
        .stat-value { font-size: 1.5rem; font-weight: bold; color: #fbbf24; }
        .controls {
            margin-top: 20px;
            display: flex;
            gap: 10px;
        }
        .btn {
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            font-weight: bold;
            transition: 0.2s;
        }
        .btn-primary { background: #3b82f6; color: white; }
        .btn-primary:hover { background: #2563eb; }
        .formula {
            margin-top: 20px;
            font-size: 1.2rem;
            color: #94a3b8;
        }
    </style>
</head>
<body>
    <h1>Menaxheri i Rrjetit Elektrik</h1>
    <p>Shpërndaj fuqinë nëpër shtëpi pa e mbingarkuar rrjetin!</p>

    <div class="stats-panel">
        <div class="stat">
            <div class="stat-label">Fuqia Totale (P)</div>
            <div id="total-p" class="stat-value">0 W</div>
        </div>
        <div class="stat">
            <div class="stat-label">Tensioni (U)</div>
            <div id="u-val" class="stat-value">220 V</div>
        </div>
        <div class="stat">
            <div class="stat-label">Rryma Totale (I)</div>
            <div id="total-i" class="stat-value">0.00 A</div>
        </div>
    </div>

    <div class="grid-container" id="grid">
        <!-- Houses will be generated here -->
    </div>

    <div class="formula">P = U · I</div>

    <div class="controls">
        <button class="btn btn-primary" onclick="addHouse()">Shto Pajisje</button>
        <button class="btn" style="background:#ef4444; color:white;" onclick="resetGrid()">Reset</button>
    </div>

    <script>
        let houses = [];
        const U = 220;
        const maxI = 25; // Limiti i siguresës

        function addHouse() {
            if (houses.length >= 9) return;
            
            const power = Math.floor(Math.random() * 1000) + 200;
            houses.push({ power, id: Date.now() });
            render();
        }

        function resetGrid() {
            houses = [];
            render();
        }

        function render() {
            const grid = document.getElementById('grid');
            grid.innerHTML = '';
            
            let totalP = 0;
            houses.forEach(h => {
                totalP += h.power;
                const div = document.createElement('div');
                div.className = 'house powered';
                div.innerHTML = '<div style="font-size:1.5rem">🏠</div>' +
                    '<div style="font-weight:bold">' + h.power + ' W</div>' +
                    '<div style="font-size:0.7rem; color:#94a3b8">' + (h.power/U).toFixed(2) + ' A</div>';
                grid.appendChild(div);
            });

            const totalI = totalP / U;
            document.getElementById('total-p').innerText = totalP + " W";
            document.getElementById('total-i').innerText = totalI.toFixed(2) + " A";

            if (totalI > maxI) {
                document.getElementById('total-i').style.color = "#ef4444";
                alert("SIGURESA U DOGJ! Mbingarkesë në rrjet.");
                resetGrid();
            } else {
                document.getElementById('total-i').style.color = "#fbbf24";
            }
        }
    </script>
</body>
</html>`
  },
  {
    id: "capacitor-challenge",
    title: "Capacitor Challenge",
    category: "Elektriciteti",
    type: "digital",
    html: `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <title>Capacitor Challenge</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #0f172a;
            color: white;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .capacitor-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin: 40px 0;
            height: 200px;
        }
        .plate {
            width: 20px;
            height: 150px;
            background: #64748b;
            border-radius: 5px;
            position: relative;
            transition: 0.3s;
        }
        .plate.positive { background: #ef4444; }
        .plate.negative { background: #3b82f6; }
        .charge {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            font-size: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .controls {
            background: #1e293b;
            padding: 20px;
            border-radius: 15px;
            width: 100%;
            max-width: 600px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .stat-box {
            text-align: center;
            padding: 10px;
            background: #0f172a;
            border-radius: 8px;
        }
        .formula {
            font-size: 1.5rem;
            margin: 20px 0;
            color: #3b82f6;
            font-style: italic;
        }
    </style>
</head>
<body>
    <h1>Sfidë me Kondensatorë</h1>
    <p>Rregullo sipërfaqen dhe distancën për të ndryshuar kapacitetin!</p>

    <div class="capacitor-container">
        <div id="plate-left" class="plate positive"></div>
        <div id="plate-right" class="plate negative"></div>
    </div>

    <div class="controls">
        <div>
            <label>Sipërfaqja (S): <span id="s-val">100</span> cm²</label>
            <input type="range" id="s-slider" min="10" max="500" value="100" style="width:100%">
        </div>
        <div>
            <label>Distanca (d): <span id="d-val">5</span> mm</label>
            <input type="range" id="d-slider" min="1" max="20" value="5" style="width:100%">
        </div>
        <div class="stat-box">
            <div style="font-size:0.8rem; color:#94a3b8">Kapaciteti (C)</div>
            <div id="c-val" style="font-size:1.2rem; font-weight:bold; color:#10b981">0.18 pF</div>
        </div>
        <div class="stat-box">
            <div style="font-size:0.8rem; color:#94a3b8">Ngarkesa (Q)</div>
            <div id="q-val" style="font-size:1.2rem; font-weight:bold; color:#fbbf24">1.80 pC</div>
        </div>
    </div>

    <div class="formula">C = ε₀ · S / d</div>

    <script>
        const sSlider = document.getElementById('s-slider');
        const dSlider = document.getElementById('d-slider');
        const sVal = document.getElementById('s-val');
        const dVal = document.getElementById('d-val');
        const cVal = document.getElementById('c-val');
        const qVal = document.getElementById('q-val');
        const plateLeft = document.getElementById('plate-left');
        const plateRight = document.getElementById('plate-right');

        const epsilon0 = 8.854; // simplified
        const Voltage = 10; // fixed battery

        function update() {
            const S = parseFloat(sSlider.value);
            const d = parseFloat(dSlider.value);
            
            // C = epsilon0 * S / d
            const C = (epsilon0 * S) / (d * 100); // scaled for display
            const Q = C * Voltage;

            sVal.innerText = S;
            dVal.innerText = d;
            cVal.innerText = C.toFixed(2) + " pF";
            qVal.innerText = Q.toFixed(2) + " pC";

            // Visual updates
            plateLeft.style.height = (50 + S/5) + "px";
            plateRight.style.height = (50 + S/5) + "px";
            
            const gap = d * 10;
            document.querySelector('.capacitor-container').style.gap = gap + "px";
            
            // Add charges visually
            renderCharges(plateLeft, 'positive', Math.floor(Q));
            renderCharges(plateRight, 'negative', Math.floor(Q));
        }

        function renderCharges(plate, type, count) {
            plate.innerHTML = '';
            const limitedCount = Math.min(count, 20);
            for(let i=0; i<limitedCount; i++) {
                const c = document.createElement('div');
                c.className = 'charge';
                c.style.top = (Math.random() * 90) + "%";
                c.style.left = type === 'positive' ? "15px" : "-10px";
                c.innerText = type === 'positive' ? "+" : "-";
                c.style.color = type === 'positive' ? "#fee2e2" : "#dbeafe";
                plate.appendChild(c);
            }
        }

        sSlider.addEventListener('input', update);
        dSlider.addEventListener('input', update);
        update();
    </script>
</body>
</html>`
  }
];
