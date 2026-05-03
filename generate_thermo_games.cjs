const fs = require('fs');

const createHTML = (title, icon, color, textColor, scriptContent, htmlContent) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        body { background-color: ${color}; color: #334155; font-family: 'Inter', system-ui, sans-serif; overflow: hidden; margin: 0; display:flex; justify-content:center; align-items:center; height: 100vh;}
        .game-card { background: white; border-radius: 2.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.1); width: 90%; max-width: 500px; padding: 2rem; text-align: center; position: relative; overflow: hidden; border: 4px solid white;}
        .btn { padding: 1rem 2rem; border-radius: 1.5rem; font-weight: 800; cursor: pointer; transition: all 0.3s; display: inline-block; margin-top: 1rem; text-transform: uppercase; letter-spacing: 0.1em; border:none; outline:none;}
        .btn-primary { background-color: ${textColor}; color: white; box-shadow: 0 10px 20px ${textColor}66; }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 30px ${textColor}88; }
        .input-field { padding: 1rem; border-radius: 1rem; border: 3px solid #e2e8f0; width: 100%; max-width: 200px; text-align: center; font-size: 1.5rem; font-weight: 900; margin: 1rem 0; outline: none; transition: all 0.3s; color: ${textColor}}
        .input-field:focus { border-color: ${textColor}; }
        .icon-large { font-size: 5rem; color: ${textColor}; margin-bottom: 1rem; text-shadow: 0 10px 20px ${textColor}44; }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes shake { 0%, 100% {transform: translateX(0);} 25% {transform: translateX(-10px);} 75% {transform: translateX(10px);} }
        .animate-pop { animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
        .result-msg { font-size: 1.25rem; font-weight: 800; min-height: 2.5rem; margin-top: 1rem; border-radius: 1rem; padding: 0.5rem; transition: all 0.3s;}
        .level-badge { position: absolute; top: 1rem; right: 1rem; background: ${color}; color: ${textColor}; padding: 0.5rem 1rem; border-radius: 1rem; font-weight: 900; font-size: 0.875rem; text-transform: uppercase;}
        .question-box { background: #f8fafc; padding: 1.5rem; border-radius: 1.5rem; margin-bottom: 1.5rem; font-size: 1.125rem; font-weight: 700; color: #475569; border: 2px dashed ${color};}
    </style>
</head>
<body>
    <div class="game-card animate-pop" id="card">
        <div class="level-badge" id="level">Niveli 1</div>
        <i class="fas ${icon} icon-large"></i>
        <h1 class="text-3xl font-black mb-2 text-slate-800 tracking-tight">${title}</h1>
        ${htmlContent}
    </div>
    <script>
        ${scriptContent}
    </script>
</body>
</html>
`;

const games = [
    {
        file: 'loja-numri-moleve.html',
        title: 'Mjeshtri i Moleve',
        icon: 'fa-balance-scale',
        color: '#dbeafe', // blue-100
        textColor: '#3b82f6', // blue-500
        html: `
            <div class="question-box" id="question">Sa mole ka në ...?</div>
            <input type="number" step="0.1" class="input-field" id="answer" placeholder="0.0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">Pritja e përgjigjes...</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const questions = [
                { m: 36, M: 18, substance: "ujë (H2O)" },
                { m: 88, M: 44, substance: "gaz karbonik (CO2)" },
                { m: 10, M: 2, substance: "hidrogjen (H2)" },
                { m: 96, M: 32, substance: "oksigjen (O2)" },
                { m: 140, M: 28, substance: "azot (N2)" }
            ];
            
            function loadLevel() {
                if(level > questions.length) {
                    qEl.innerHTML = "Urime! Ti je Mjeshtri i Moleve! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = questions[level-1];
                currentAnswer = q.m / q.M;
                qEl.innerHTML = \`Një mostër ka masë <b>\${q.m}g</b> \${q.substance}. Masa molare <b>\${q.M} g/mol</b>.<br><br>Sa mole (n) janë?\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "n = m / M";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseFloat(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "Saktë! 🎉";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Gabim! Provo sërish.";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-vellimi.html', // Fixed game
        title: 'Sfida e Vëllimit',
        icon: 'fa-cube',
        color: '#ffedd5', // orange-100
        textColor: '#f97316', // orange-500
        html: `
            <div class="question-box" id="question">Sa hapësirë zë...?</div>
            <input type="number" step="0.001" class="input-field" id="answer" placeholder="0.0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">V = m / d</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const questions = [
                { m: 10, d: 1000, desc: "trup zhyts (ujë, d=1000 kg/m³)", unit: "m³" },
                { m: 15.6, d: 7800, desc: "bllok hekuri (d=7800 kg/m³)", unit: "m³" },
                { m: 2.7, d: 2700, desc: "kub alumini (d=2700 kg/m³)", unit: "m³" },
                { m: 1.29, d: 1.29, desc: "ajër dhome (d=1.29 kg/m³)", unit: "m³" }
            ];
            
            function loadLevel() {
                if(level > questions.length) {
                    qEl.innerHTML = "Urime! Ekspert i Vëllimit! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = questions[level-1];
                currentAnswer = q.m / q.d;
                qEl.innerHTML = \`Masa është <b>\${q.m}kg</b>. Dendësia është <b>\${q.d} kg/m³</b>.<br><br>Gjeni vëllimin e \${q.desc}.\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "V = m / d";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseFloat(aEl.value);
                // Allow floating point precision
                if(Math.abs(ans - currentAnswer) < 0.0001) {
                    msgEl.innerHTML = "E Gjete! 🎉";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Gabim! provo sërish.";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-temperatura-absolute.html',
        title: 'Konvertuesi Kelvin',
        icon: 'fa-temperature-half',
        color: '#fce7f3', // pink-100
        textColor: '#ec4899', // pink-500
        html: `
            <div class="question-box" id="question">℃ në K</div>
            <input type="number" class="input-field" id="answer" placeholder="0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">T(K) = t(℃) + 273</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            function getRand(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
            
            function loadLevel() {
                if(level > 6) {
                    qEl.innerHTML = "Termometër njerëzor! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let c = getRand(-50, 150);
                currentAnswer = c + 273;
                qEl.innerHTML = \`Temperatura jepet <b>\${c} ℃</b>.<br><br>Sa është kjo në gradë Kelvin?\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "T(K) = t(℃) + 273";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseInt(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "Aaaaa e nxehtë! Saktë! 🔥";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Gabim matematik! Kujdes formën.";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-shtypja.html',
        title: 'Presioni Maksimal',
        icon: 'fa-compress-arrows-alt',
        color: '#e0e7ff', // indigo-100
        textColor: '#6366f1', // indigo-500
        html: `
            <div class="question-box" id="question">P = F / S</div>
            <input type="number" class="input-field" id="answer" placeholder="0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">Gjeni shtypjen në Pa</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const qs = [
                { f: 100, s: 2, obj: 'Këpucë bore' },
                { f: 600, s: 0.1, obj: 'Njeri në këmbë' },
                { f: 20000, s: 4, obj: 'Elefant' },
                { f: 15000, s: 0.05, obj: 'Gozhdë (Maja e saj)' },
                { f: 50, s: 0.001, obj: 'Gjilpërë' }
            ];
            
            function loadLevel() {
                if(level > qs.length) {
                    qEl.innerHTML = "Shtypja nuk të mposhti! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = qs[level-1];
                currentAnswer = q.f / q.s;
                qEl.innerHTML = \`Forca është <b>\${q.f} N</b>.<br>Sipërfaqja <b>\${q.s} m²</b>. (\${q.obj})<br><br>Gjeni shtypjen (P).\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "P = F / S";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseInt(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "Goditje e saktë! 🎯";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Jo saktë!";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-c-specifike.html',
        title: 'Kalorimetri Lab',
        icon: 'fa-fire-flame-simple',
        color: '#fef08a', // yellow-200
        textColor: '#ca8a04', // yellow-600
        html: `
            <div class="question-box" id="question">Q = c · m · Δt</div>
            <input type="number" class="input-field" id="answer" placeholder="0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">Gjeni nxehtësinë në J</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const qs = [
                { m: 1, c: 4200, dt: 10, obj: "Ujë (c=4200)" },
                { m: 2, c: 460, dt: 50, obj: "Hekur (c=460)" },
                { m: 5, c: 880, dt: 20, obj: "Alumin (c=880)" },
                { m: 0.5, c: 130, dt: 100, obj: "Plumb (c=130)" }
            ];
            
            function loadLevel() {
                if(level > qs.length) {
                    qEl.innerHTML = "Mjeshtër i Nxehtësisë! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = qs[level-1];
                currentAnswer = q.c * q.m * q.dt;
                qEl.innerHTML = \`Masa <b>\${q.m} kg</b> \${q.obj}.<br>Ndryshon me <b>\${q.dt} ℃</b>.<br><br>Gjeni Nxehtësinë Q.\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "Q = c * m * Δt";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseInt(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "Saktë! 🌡️";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "LLogaritje e gabuar.";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-lsh.html',
        title: 'Akullthyesi',
        icon: 'fa-icicles',
        color: '#cffafe', // cyan-100
        textColor: '#0891b2', // cyan-600
        html: `
            <div class="question-box" id="question">Q = L_sh · m</div>
            <input type="number" class="input-field" id="answer" placeholder="0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">Gjeni Q për shkrirje</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const qs = [
                { m: 1, l: 334000, obj: "Akull (L=334kJ/kg)" },
                { m: 2, l: 334000, obj: "Akull" },
                { m: 1, l: 25000, obj: "Plumb shkrirje (L=25kJ/kg)" },
                { m: 5, l: 393000, obj: "Alumin shkrirje (L=393kJ/kg)" }
            ];
            
            function loadLevel() {
                if(level > qs.length) {
                    qEl.innerHTML = "Ke shkrirë çdo gjë! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = qs[level-1];
                currentAnswer = q.l * q.m;
                qEl.innerHTML = \`A do të shkrijmë <b>\${q.m} kg</b> \${q.obj}?<br><br>Sa J nxehtësi duhen?\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "Shumëzo Masën me L_sh";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseInt(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "U shkri plotësisht! 💧";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Jo saktë. Kujdes zerot!";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-lav.html',
        title: 'Laboratori i Avullit',
        icon: 'fa-cloud-meatball',
        color: '#f3e8ff', // fuchsia-100/purple
        textColor: '#9333ea', // purple-600
        html: `
            <div class="question-box" id="question">Q = L_av · m</div>
            <input type="number" class="input-field" id="answer" placeholder="0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">Gjeni Q për avullim</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const qs = [
                { m: 1, l: 2260000, obj: "Ujë në 100C (L=2260kJ/kg)" },
                { m: 3, l: 2260000, obj: "Ujë në 100C" },
                { m: 2, l: 850000, obj: "Alkool avullim (L=850kJ/kg)" },
            ];
            
            function loadLevel() {
                if(level > qs.length) {
                    qEl.innerHTML = "Avulluat gjithçka! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = qs[level-1];
                currentAnswer = q.l * q.m;
                qEl.innerHTML = \`Trupi: <b>\${q.m} kg</b> \${q.obj}.<br><br>Sa J duhen për ta avulluar gjer në fund?\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "Q = L_av * m";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseInt(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "U bë avull! ☁️";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Kujdes vlerat e mëdha!";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-puna-td.html',
        title: 'Motori Piston',
        icon: 'fa-cogs',
        color: '#f1f5f9', // slate-100
        textColor: '#334155', // slate-700
        html: `
            <div class="question-box" id="question">A = P · ΔV</div>
            <input type="number" class="input-field" id="answer" placeholder="0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">Gjeni Punën në J</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const qs = [
                { p: 100000, v1: 1, v2: 2, desc: "Zgjerim izobarik" },
                { p: 250000, v1: 2, v2: 4, desc: "Zgjerim motori" },
                { p: 50000, v1: 5, v2: 1, desc: "Ngjeshje izobarike" },
                { p: 100000, v1: 3, v2: 3, desc: "Proces Izohorik" }
            ];
            
            function loadLevel() {
                if(level > qs.length) {
                    qEl.innerHTML = "Inxhinier Termodinamik! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = qs[level-1];
                currentAnswer = q.p * (q.v2 - q.v1);
                qEl.innerHTML = \`Shtypja: <b>\${q.p} Pa</b><br>Vëllimi 1: \${q.v1}m³ --> Vëllimi 2: \${q.v2}m³<br>(\${q.desc})<br><br>Gjeni Punën (A).\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "ΔV = V2 - V1, A = P * ΔV";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseInt(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "Saktë! ⚙️";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Kujdes shenjën ose vlerën.";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    },
    {
        file: 'loja-energjia-termike.html',
        title: 'Ekuilibri Kinetik',
        icon: 'fa-atom',
        color: '#ecfdf5', // emerald-50
        textColor: '#059669', // emerald-600
        html: `
            <div class="question-box" id="question">U = 3/2 · nRT</div>
            <input type="number" class="input-field" id="answer" placeholder="0">
            <div>
                <button class="btn btn-primary" onclick="checkAnswer()">KONTROLLO</button>
            </div>
            <div id="msg" class="result-msg text-slate-400">Gaz Monoatomik (R=8.31)</div>
        `,
        script: `
            const qEl = document.getElementById('question');
            const aEl = document.getElementById('answer');
            const msgEl = document.getElementById('msg');
            const levelEl = document.getElementById('level');
            const card = document.getElementById('card');
            
            let level = 1;
            let currentAnswer = 0;
            
            const qs = [
                { n: 2, t: 100 },
                { n: 1, t: 300 },
                { n: 4, t: 50 }
            ];
            
            function loadLevel() {
                if(level > qs.length) {
                    qEl.innerHTML = "Energji në maksimum! 🏆";
                    aEl.style.display = 'none';
                    document.querySelector('.btn').style.display = 'none';
                    msgEl.innerHTML = "Perfekt!";
                    msgEl.style.color = '#10b981';
                    return;
                }
                levelEl.innerText = "Niveli " + level;
                let q = qs[level-1];
                currentAnswer = 1.5 * q.n * 8.31 * q.t;
                // Round to nearest integer for game simplicity
                currentAnswer = Math.round(currentAnswer);
                qEl.innerHTML = \`Kemi <b>\${q.n} mole</b> gaz monoatomik.<br>Në temperaturën <b>\${q.t} K</b>.<br><br>Gjeni U (Rrumbullakoni në të plotë)\`;
                aEl.value = '';
                aEl.focus();
                msgEl.innerText = "U = 1.5 * n * 8.31 * T";
                msgEl.style.color = '#94a3b8';
                card.classList.remove('animate-shake');
            }
            
            function checkAnswer() {
                let ans = parseInt(aEl.value);
                if(ans === currentAnswer) {
                    msgEl.innerHTML = "Shumë saktë! ⚛️";
                    msgEl.style.color = '#10b981';
                    level++;
                    setTimeout(loadLevel, 1500);
                } else {
                    msgEl.innerHTML = "Rillogarit... R=8.31";
                    msgEl.style.color = '#ef4444';
                    card.classList.remove('animate-shake');
                    void card.offsetWidth;
                    card.classList.add('animate-shake');
                }
            }
            loadLevel();
            aEl.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') checkAnswer();
            });
        `
    }
];

games.forEach(g => {
    fs.writeFileSync('./public/' + g.file, createHTML(g.title, g.icon, g.color, g.textColor, g.script, g.html));
});

console.log('Created games successfully!');
