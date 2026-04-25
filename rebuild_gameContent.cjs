const fs = require('fs');

const fontLinks = `
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Nunito', 'sans-serif'],
              orbitron: ['Orbitron', 'sans-serif'],
            },
            colors: {
              primary: '#ffafcc',
              secondary: '#ffc8dd',
              dark: '#4a4e69',
              slate800: '#1e293b',
              slate100: '#f1f5f9',
            }
          }
        }
      }
    </script>
    <style>
      body { font-family: 'Nunito', sans-serif; background-color: #f8fafc; color: #1e293b; overflow: hidden; }
      .glass-panel { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.5); }
      .game-btn { transition: all 0.2s; cursor: pointer; }
      .game-btn:active { transform: scale(0.95); }
      * { user-select: none; }
    </style>
`;

function getProQuiz(title, topic, questions) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${title}</title>
    ${fontLinks}
</head>
<body class="flex items-center justify-center h-screen bg-slate-50">
    <div class="w-full max-w-2xl p-6 glass-panel rounded-3xl shadow-xl border border-slate-200">
        <div class="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <h1 class="text-2xl font-orbitron font-bold text-dark flex items-center gap-3">
                <i class="fas fa-bolt text-primary"></i> ${title}
            </h1>
            <div class="flex gap-4">
                <div class="bg-red-50 text-red-500 px-4 py-2 rounded-full font-bold shadow-inner"><i class="fas fa-heart"></i> <span id="lives">3</span></div>
                <div class="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full font-bold shadow-inner"><i class="fas fa-star"></i> <span id="score">0</span></div>
            </div>
        </div>

        <div id="game-area" class="text-center">
            <div class="bg-white rounded-2xl p-8 mb-6 shadow-sm border border-slate-100 min-h-[150px] flex items-center justify-center relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <h2 id="question" class="text-2xl font-extrabold text-slate-800 leading-tight z-10">Gati për të testuar njohuritë?</h2>
            </div>
            <div id="options" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button onclick="startGame()" class="game-btn col-span-full bg-dark text-white p-4 rounded-xl font-bold text-lg shadow-md hover:bg-slate-700">Fillo Sfidën</button>
            </div>
        </div>
    </div>

    <script>
        const questions = ${JSON.stringify(questions)};
        let currentQ = 0, score = 0, lives = 3;

        function startGame() { currentQ = 0; score = 0; lives = 3; updateUI(); nextQ(); }
        function updateUI() { document.getElementById('score').innerText = score; document.getElementById('lives').innerText = lives; }
        
        function nextQ() {
            if (lives <= 0 || currentQ >= questions.length) {
                document.getElementById('question').innerHTML = lives <= 0 ? "<span class='text-red-500'>Lojë e Përfunduar!</span>" : "<span class='text-emerald-500'>Urime, Fitore!</span>";
                document.getElementById('options').innerHTML = '<button onclick="startGame()" class="game-btn col-span-full bg-primary text-white p-4 rounded-xl font-bold text-lg hover:bg-pink-500 shadow-md">Luaj Përsëri</button>';
                return;
            }
            const q = questions[currentQ];
            document.getElementById('question').innerText = q.q;
            let html = '';
            if (q.type === 'tf') {
                html = \`
                    <button onclick="check(true)" class="game-btn bg-white border-2 border-emerald-400 text-emerald-600 p-6 rounded-2xl font-bold text-xl hover:bg-emerald-50 shadow-sm flex flex-col items-center gap-2"><i class="fas fa-check text-3xl"></i> E Vërtetë</button>
                    <button onclick="check(false)" class="game-btn bg-white border-2 border-red-400 text-red-600 p-6 rounded-2xl font-bold text-xl hover:bg-red-50 shadow-sm flex flex-col items-center gap-2"><i class="fas fa-times text-3xl"></i> E Gabuar</button>
                \`;
            } else {
                q.options.forEach((opt, i) => {
                    html += \`<button onclick="check(\${i})" class="game-btn bg-white border border-slate-200 text-slate-700 p-4 rounded-xl font-bold hover:border-primary hover:text-primary shadow-sm text-left pl-6">\${opt}</button>\`;
                });
            }
            document.getElementById('options').innerHTML = html;
        }

        function check(ans) {
            const q = questions[currentQ];
            const isCorrect = ans === q.a;
            if (isCorrect) score += 10; else lives--;
            
            const area = document.getElementById('game-area');
            area.style.transform = isCorrect ? 'scale(1.02)' : 'translateX(-10px)';
            setTimeout(() => {
                area.style.transform = isCorrect ? 'scale(1)' : 'translateX(10px)';
                setTimeout(() => area.style.transform = 'none', 100);
            }, 100);

            updateUI();
            currentQ++;
            setTimeout(nextQ, 200);
        }
    </script>
</body>
</html>`;
}

function getProMap(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${fontLinks}
</head>
<body class="bg-slate-100 flex items-center justify-center min-h-screen p-4">
    <div class="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[600px] border border-slate-200">
        <div class="bg-dark p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 20px 20px;"></div>
            <h1 class="text-2xl font-orbitron font-bold z-10 flex items-center gap-3"><i class="fas fa-map-marked-alt text-primary"></i> ${title}</h1>
            <div class="bg-white/20 px-4 py-2 rounded-full font-bold z-10 backdrop-blur-sm">Progresi: <span id="lvl">1</span>/5</div>
        </div>
        
        <div class="flex-1 relative bg-slate-50 p-8" id="map-area">
            <!-- svg path connecting nodes -->
            <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path id="path-line" d="M 20% 80% Q 40% 20% 60% 50% T 90% 20%" fill="none" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round" stroke-dasharray="16 16" />
            </svg>
            <div id="nodes" class="absolute inset-0 w-full h-full"></div>
        </div>
        
        <div id="modal" class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-50 hidden items-center justify-center">
            <div class="bg-white p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl transform scale-95 transition-transform duration-200" id="modal-content">
                <div class="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center text-4xl mx-auto mb-4"><i class="fas fa-star"></i></div>
                <h2 class="text-2xl font-bold text-slate-800 mb-2">Niveli <span id="m-lvl">1</span></h2>
                <p class="text-slate-600 mb-8 font-medium">Zgjidheni sfidën e radhës për ${topic} për të kaluar përpara.</p>
                <button onclick="completeLevel()" class="w-full bg-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-700 shadow-md transition-colors mb-3">Zgjidh Sfidën</button>
                <button onclick="closeModal()" class="w-full bg-slate-100 text-slate-500 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">Anulo</button>
            </div>
        </div>
    </div>

    <script>
        const nodesData = [
            { x: '20%', y: '80%', icon: 'fa-play' },
            { x: '35%', y: '40%', icon: 'fa-bolt' },
            { x: '55%', y: '60%', icon: 'fa-atom' },
            { x: '75%', y: '35%', icon: 'fa-magnet' },
            { x: '90%', y: '20%', icon: 'fa-trophy' }
        ];
        
        let currentLevel = 1;

        function renderMap() {
            const container = document.getElementById('nodes');
            container.innerHTML = '';
            
            nodesData.forEach((pos, idx) => {
                const level = idx + 1;
                const isLocked = level > currentLevel;
                const isActive = level === currentLevel;
                const isCompleted = level < currentLevel;
                
                const node = document.createElement('div');
                node.className = \`absolute w-16 h-16 -ml-8 -mt-8 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all \${
                    isActive ? 'bg-primary text-white scale-110 ring-4 ring-secondary animate-bounce cursor-pointer' : 
                    isCompleted ? 'bg-emerald-500 text-white cursor-pointer' : 
                    'bg-slate-300 text-slate-500 cursor-not-allowed opacity-70'
                }\`;
                node.style.left = pos.x;
                node.style.top = pos.y;
                node.innerHTML = \`<i class="fas \${pos.icon}"></i>\`;
                
                if (isActive || isCompleted) {
                    node.onclick = () => openModal(level);
                }
                container.appendChild(node);
            });
            document.getElementById('lvl').innerText = Math.min(currentLevel, 5);
        }

        function openModal(lvl) {
            if (lvl > currentLevel) return;
            document.getElementById('m-lvl').innerText = lvl;
            const modal = document.getElementById('modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            setTimeout(() => document.getElementById('modal-content').classList.replace('scale-95', 'scale-100'), 10);
        }

        function closeModal() {
            document.getElementById('modal-content').classList.replace('scale-100', 'scale-95');
            setTimeout(() => {
                document.getElementById('modal').classList.remove('flex');
                document.getElementById('modal').classList.add('hidden');
            }, 200);
        }

        function completeLevel() {
            const lvl = parseInt(document.getElementById('m-lvl').innerText);
            if (lvl === currentLevel) {
                currentLevel++;
                renderMap();
                if (currentLevel > 5) {
                    setTimeout(() => alert('Urime! Keni përfunduar të gjithë hartën e suksesit!'), 500);
                }
            }
            closeModal();
        }

        renderMap();
    </script>
</body>
</html>`;
}

function getProBattle(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${fontLinks}
</head>
<body class="bg-slate-900 text-slate-100 h-screen overflow-hidden flex flex-col font-sans">
    <div class="p-6 flex justify-between items-center bg-slate-800 border-b border-slate-700 shadow-lg">
        <h1 class="text-2xl font-orbitron font-bold text-primary flex items-center gap-3"><i class="fas fa-shield-alt"></i> ${title}</h1>
        <div class="text-sm font-bold bg-slate-700 px-4 py-2 rounded-full text-slate-300">Tema: ${topic}</div>
    </div>
    
    <div class="flex-1 relative flex items-center justify-center gap-16 md:gap-32 px-4" style="background: radial-gradient(circle at center, #1e293b 0%, #0f172a 100%);">
        
        <!-- Player -->
        <div class="flex flex-col items-center z-10 w-40">
            <div class="w-full bg-slate-800 h-4 rounded-full mb-4 border border-slate-600 overflow-hidden shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                <div id="p-hp" class="bg-emerald-500 h-full w-full transition-all duration-300"></div>
            </div>
            <div id="p-char" class="w-32 h-32 bg-slate-800 border-4 border-slate-600 rounded-2xl flex items-center justify-center text-6xl shadow-xl transition-transform duration-200">🤖</div>
        </div>

        <div class="text-4xl font-black text-rose-500 opacity-50 font-orbitron z-10">VS</div>

        <!-- Enemy -->
        <div class="flex flex-col items-center z-10 w-40">
            <div class="w-full bg-slate-800 h-4 rounded-full mb-4 border border-slate-600 overflow-hidden shadow-[0_0_10px_rgba(244,63,94,0.3)]">
                <div id="e-hp" class="bg-rose-500 h-full w-full transition-all duration-300"></div>
            </div>
            <div id="e-char" class="w-32 h-32 bg-slate-800 border-4 border-slate-600 rounded-2xl flex items-center justify-center text-6xl shadow-xl transition-transform duration-200">👾</div>
        </div>
    </div>

    <div class="bg-slate-800 border-t border-slate-700 p-8 z-20">
        <div class="max-w-3xl mx-auto flex flex-col items-center">
            <h2 id="question" class="text-xl md:text-2xl font-bold mb-6 text-center text-blue-200 min-h-[60px]">Zgjidhni një sulm për të filluar!</h2>
            <div id="actions" class="grid grid-cols-2 gap-4 w-full">
                <button onclick="startGame()" class="col-span-2 bg-primary text-slate-900 py-4 rounded-xl font-bold text-xl hover:bg-pink-400 transition-colors shadow-[0_0_15px_rgba(255,175,204,0.5)]">Sipërmarrje Betëje</button>
            </div>
        </div>
    </div>

    <script>
        let php = 100, ehp = 100, currQ = 0;
        const questions = [
            { q: 'Cila është njësi e fizikes?', opts: ['Joule', 'Newton', 'Watt', 'Volt'], a: 0 },
            { q: 'Si ndërvepron energjia?', opts: ['Rritet', 'Zvogëlohet', 'Ruhet', 'Zhduket'], a: 2 },
            { q: 'Kush e zbuloi ligjin gravitacional?', opts: ['Tesla', 'Newton', 'Einstein', 'Faraday'], a: 1 }
        ];

        function startGame() { php = 100; ehp = 100; currQ = 0; updateHP(); nextTurn(); }
        function updateHP() { 
            document.getElementById('p-hp').style.width = php + '%'; 
            document.getElementById('e-hp').style.width = ehp + '%';
        }

        function nextTurn() {
            if (php <= 0 || ehp <= 0) {
                document.getElementById('question').innerHTML = php <= 0 ? "<span class='text-rose-500'>Humbje Civile...</span>" : "<span class='text-emerald-400'>Fitore e Pavdekshme!</span>";
                document.getElementById('actions').innerHTML = '<button onclick="startGame()" class="col-span-2 bg-primary text-slate-900 py-4 rounded-xl font-bold text-xl hover:bg-pink-400 transition-colors">Ritento</button>';
                return;
            }
            const q = questions[currQ % questions.length];
            document.getElementById('question').innerText = q.q;
            let html = '';
            q.opts.forEach((opt, i) => {
                html += \`<button onclick="attack(\${i === q.a})" class="bg-slate-700 text-slate-200 py-4 px-6 rounded-xl font-bold text-lg hover:bg-slate-600 hover:text-white transition-colors border border-slate-600">\${opt}</button>\`;
            });
            document.getElementById('actions').innerHTML = html;
        }

        function attack(correct) {
            const p = document.getElementById('p-char');
            const e = document.getElementById('e-char');
            
            if (correct) {
                p.style.transform = 'translate(30px, -10px) rotate(10deg)';
                p.style.borderColor = '#10b981';
                setTimeout(() => {
                    p.style.transform = 'none'; p.style.borderColor = '#475569';
                    ehp -= 40; e.style.transform = 'translateX(20px)'; e.style.borderColor = '#f43f5e';
                    setTimeout(() => { e.style.transform = 'none'; e.style.borderColor = '#475569'; }, 200);
                    updateHP(); currQ++; setTimeout(nextTurn, 600);
                }, 200);
            } else {
                e.style.transform = 'translate(-30px, -10px) rotate(-10deg)';
                e.style.borderColor = '#3b82f6';
                setTimeout(() => {
                    e.style.transform = 'none'; e.style.borderColor = '#475569';
                    php -= 40; p.style.transform = 'translateX(-20px)'; p.style.borderColor = '#f43f5e';
                    setTimeout(() => { p.style.transform = 'none'; p.style.borderColor = '#475569'; }, 200);
                    updateHP(); currQ++; setTimeout(nextTurn, 600);
                }, 200);
            }
        }
    </script>
</body>
</html>`;
}

function getProSound() {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mjeshtri i Tingullit</title>
    ${fontLinks}
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center p-4">
    <div class="bg-slate-800 w-full max-w-3xl rounded-[2rem] shadow-2xl p-8 border border-slate-700">
        <h1 class="text-3xl font-orbitron font-bold text-center mb-2 text-white"><i class="fas fa-headphones-alt text-primary"></i> Mjeshtri i Tingullit</h1>
        <p class="text-center text-slate-400 mb-8 font-medium">Bordi i Gjenerimit dhe Modulimit të Valëve Akustike</p>

        <div class="bg-slate-900 rounded-2xl p-4 mb-8 border border-slate-700 shadow-inner overflow-hidden relative">
            <canvas id="visualizer" class="w-full h-40"></canvas>
            <div class="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] rounded-2xl"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                <div class="flex justify-between items-center mb-4">
                    <label class="font-bold text-slate-300"><i class="fas fa-wave-square text-blue-400"></i> Frekuenca (Hz)</label>
                    <span id="f-val" class="text-primary font-orbitron font-bold text-xl">440</span>
                </div>
                <input type="range" id="freq" min="100" max="2000" value="440" class="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-primary">
            </div>
            
            <div class="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                <div class="flex justify-between items-center mb-4">
                    <label class="font-bold text-slate-300"><i class="fas fa-volume-up text-emerald-400"></i> Amplituda (%)</label>
                    <span id="a-val" class="text-emerald-400 font-orbitron font-bold text-xl">50</span>
                </div>
                <input type="range" id="amp" min="0" max="100" value="50" class="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500">
            </div>
        </div>

        <div class="text-center">
            <button id="toggleBtn" onclick="toggleAudio()" class="bg-primary text-slate-900 font-bold text-xl px-12 py-4 rounded-full shadow-[0_0_20px_rgba(255,175,204,0.4)] hover:shadow-[0_0_30px_rgba(255,175,204,0.6)] hover:bg-pink-400 transition-all transform hover:scale-105 active:scale-95">
                <i class="fas fa-play mr-2"></i> FILLO TINGULLIN
            </button>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('visualizer');
        const ctx = canvas.getContext('2d');
        let actx, osc, gain, isPlaying = false, time = 0;

        function resize() {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        window.addEventListener('resize', resize);
        resize();

        function drawWave() {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;
            
            ctx.clearRect(0, 0, width, height);
            
            const freq = document.getElementById('freq').value;
            const amp = document.getElementById('amp').value / 100;
            
            ctx.beginPath();
            ctx.strokeStyle = isPlaying ? '#ffafcc' : '#475569';
            ctx.lineWidth = 4;
            ctx.shadowBlur = isPlaying ? 15 : 0;
            ctx.shadowColor = '#ffafcc';
            
            for (let x = 0; x < width; x++) {
                const yOffset = Math.sin(x * 0.02 * (freq / 200) + time) * (amp * (height / 2.5));
                const y = height / 2 + (isPlaying ? yOffset : 0);
                
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            
            ctx.stroke();
            if (isPlaying) time += 0.15;
            requestAnimationFrame(drawWave);
        }
        drawWave();

        document.getElementById('freq').oninput = e => {
            document.getElementById('f-val').innerText = e.target.value;
            if (osc) osc.frequency.value = e.target.value;
        };
        
        document.getElementById('amp').oninput = e => {
            document.getElementById('a-val').innerText = e.target.value;
            if (gain) gain.gain.value = e.target.value / 100;
        };

        function toggleAudio() {
            if (!actx) {
                actx = new (window.AudioContext || window.webkitAudioContext)();
            }
            const btn = document.getElementById('toggleBtn');
            const freqInput = document.getElementById('freq');
            
            if (isPlaying) {
                osc.stop(); osc.disconnect(); osc = null;
                isPlaying = false;
                btn.innerHTML = '<i class="fas fa-play mr-2"></i> FILLO TINGULLIN';
                btn.classList.replace('bg-slate-700', 'bg-primary');
                btn.classList.replace('text-white', 'text-slate-900');
            } else {
                osc = actx.createOscillator();
                gain = actx.createGain();
                
                osc.type = 'sine';
                osc.frequency.value = freqInput.value;
                gain.gain.value = document.getElementById('amp').value / 100;
                
                osc.connect(gain);
                gain.connect(actx.destination);
                osc.start();
                
                isPlaying = true;
                btn.innerHTML = '<i class="fas fa-stop mr-2"></i> NDALO';
                btn.classList.replace('bg-primary', 'bg-slate-700');
                btn.classList.replace('text-slate-900', 'text-white');
            }
        }
    </script>
</body>
</html>`;
}

function getProCollector(title, topic) {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${fontLinks}
    <style>
        .grid-bg { background-image: linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px); background-size: 20px 20px; }
        .collectible { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .collectible:hover { transform: translateY(-5px) scale(1.05); }
    </style>
</head>
<body class="bg-white text-slate-800 min-h-screen grid-bg p-8 flex justify-center items-center">
    <div class="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
            <h1 class="text-2xl font-black text-dark font-orbitron flex items-center gap-3">
                <div class="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center"><i class="fas fa-box-open"></i></div>
                ${title}
            </h1>
            <div class="bg-slate-100 px-4 py-2 rounded-full font-bold text-slate-500 text-sm">Tema: ${topic}</div>
        </div>
        
        <div class="flex-1 p-6 overflow-y-auto">
            <div class="text-center mb-8">
                <p class="text-slate-500 text-lg">Zbuloni dhe mblidhni elementet e këtij laboratori digjital.</p>
            </div>
            
            <div id="grid" class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <!-- Items injected here -->
            </div>
        </div>
    </div>

    <script>
        const entities = ['Zbulimi 1', 'Eksperimenti X', 'Teoria Y', 'Elementi A', 'Sistemi B', 'Objekti C'];
        const grid = document.getElementById('grid');
        
        entities.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = "collectible bg-slate-50 border border-slate-200 rounded-2xl p-6 cursor-pointer flex flex-col items-center justify-center gap-4 group";
            card.innerHTML = \`
                <div class="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                    <i class="fas fa-flask"></i>
                </div>
                <div class="font-bold text-slate-700 font-orbitron text-center">\${item}</div>
                <div class="text-xs text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">Kliko për të hapur</div>
            \`;
            
            card.onclick = () => {
                card.classList.replace('bg-slate-50', 'bg-emerald-50');
                card.classList.replace('border-slate-200', 'border-emerald-200');
                card.querySelector('.bg-blue-100').classList.replace('bg-blue-100', 'bg-emerald-500');
                card.querySelector('.text-blue-500').classList.replace('text-blue-500', 'text-white');
                card.querySelector('.group-hover\\\\:bg-blue-500').classList.replace('group-hover\\\\:bg-blue-500', 'group-hover\\\\:bg-emerald-600');
                
                const badge = card.querySelector('.text-xs');
                badge.innerText = "Zbuluar!";
                badge.classList.replace('text-slate-400', 'text-emerald-600');
                badge.classList.add('bg-emerald-100');
            };
            
            grid.appendChild(card);
        });
    </script>
</body>
</html>`;
}

function get3DSystem() {
    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistemi Diellor 3D</title>
    ${fontLinks}
    <style>
        .orbit { border: 1px dashed rgba(255,255,255,0.2); border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .planet { position: absolute; border-radius: 50%; transform: translate(-50%, -50%); box-shadow: inset -5px -5px 10px rgba(0,0,0,0.5); }
        .sun { background: radial-gradient(circle, #fcd34d, #f59e0b, #d97706); box-shadow: 0 0 50px #f59e0b, 0 0 100px #fcd34d; }
    </style>
</head>
<body class="bg-black text-white m-0 h-screen overflow-hidden font-orbitron">
    <div class="absolute top-6 left-6 z-10 glass-panel p-4 rounded-2xl border border-white/10 bg-black/50">
        <h1 class="text-xl font-bold text-primary"><i class="fas fa-solar-panel"></i> Sistemi Diellor 3D</h1>
        <p class="text-xs text-slate-400 mt-1">Simulim i Lëvizjes Planetare</p>
    </div>

    <div class="relative w-full h-full flex items-center justify-center perspective-[1000px]">
        <div id="system" class="relative w-[800px] h-[800px] transform-gpu preserve-3d" style="transform: rotateX(60deg);">
            <!-- Sun -->
            <div class="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 rounded-full sun z-50 transform-gpu" style="transform: rotateX(-60deg);"></div>
        </div>
    </div>

    <script>
        const planets = [
            { name: 'Mërkuri', dist: 80, size: 8, color: '#94a3b8', speed: 4 },
            { name: 'Afërdita', dist: 130, size: 12, color: '#fcd34d', speed: 3 },
            { name: 'Toka', dist: 190, size: 14, color: '#3b82f6', speed: 2.5 },
            { name: 'Marsi', dist: 250, size: 10, color: '#ef4444', speed: 2 }
        ];

        const system = document.getElementById('system');

        planets.forEach((p, i) => {
            const orbit = document.createElement('div');
            orbit.className = 'orbit';
            orbit.style.width = \`\${p.dist * 2}px\`;
            orbit.style.height = \`\${p.dist * 2}px\`;
            system.appendChild(orbit);

            const container = document.createElement('div');
            container.className = 'absolute top-1/2 left-1/2 w-full h-full -mt-1/2 -ml-1/2 origin-center transform-gpu';
            
            const planet = document.createElement('div');
            planet.className = 'planet';
            planet.style.width = \`\${p.size}px\`;
            planet.style.height = \`\${p.size}px\`;
            planet.style.top = '0';
            planet.style.left = '50%';
            planet.style.backgroundColor = p.color;
            planet.title = p.name;
            
            planet.style.transform = 'translate(-50%, -50%) rotateX(-60deg)';

            container.appendChild(planet);
            system.appendChild(container);

            let angle = Math.random() * 360;
            function animate() {
                angle += p.speed * 0.2;
                container.style.transform = \`translate(-50%, -50%) rotateZ(\${angle}deg)\`;
                planet.style.transform = \`translate(-50%, -50%) rotateX(-60deg) rotateY(\${-angle}deg)\`;
                requestAnimationFrame(animate);
            }
            animate();
        });
    </script>
</body>
</html>`;
}

const gamesConfig = [
    { id: 'elektriciteti', type: 'quiz', title: 'Elektriciteti', topic: 'Elektriciteti', q: [{q:"Njësia e rrymës elektrike?", options:["Volt", "Amper", "Ohm", "Watt"], a:1}, {q:"Rryma është lëvizje e përhershme e ngarkesave.", type:"tf", a:true}] },
    { id: 'gjej-shkencetarin', type: 'collector', title: 'Gjej Shkencëtarin', topic: 'Shkencëtarët' },
    { id: 'resistance-guard', type: 'battle', title: 'Mbrojtësi i Rezistencës', topic: 'Rezistenca' },
    { id: 'efield-explorer', type: 'map', title: 'Eksploruesi i Fushës E', topic: 'Fusha Elektrike' },
    { id: 'power-grid-master', type: 'map', title: 'Mjeshtri i Rrjetit', topic: 'Rrjeti Elektrik' },
    { id: 'voltage-stabilizer', type: 'quiz', title: 'Stabilizuesi i Tensionit', topic: 'Tensioni', q: [{q:"Tensioni matet me Volt.", type:"tf", a:true}, {q:"Pajisja për matjen e tensionit:", options:["Ampermetër", "Voltmetër", "Barometër", "Termometër"], a:1}] },
    { id: 'current-master', type: 'quiz', title: 'Mjeshtri i Rrymës', topic: 'Rryma', q: [{q:"Cila pajisje mat rrymën?", options:["Kronometër", "Voltmetër", "Ampermetër", "Kondensator"], a:2}, {q:"A matet rryma në Amper?", type:"tf", a:true}] },
    { id: 'capacitor-master', type: 'battle', title: 'Mjeshtri i Kondensatorëve', topic: 'Kondensatori' },
    { id: 'mjeshtri-tingullit', type: 'sound', title: 'Mjeshtri i Tingullit', topic: 'Tingulli' },
    { id: 'sfida-matures', type: 'map', title: 'Sfida e Maturës', topic: 'Përgatitje' },
    { id: 'sti-game', type: 'battle', title: 'Beteja e Fizikes', topic: 'Fizika Globale' },
    { id: 'lojee-game', type: 'quiz', title: 'ElektroGame', topic: 'Rryma', q: [{q:"Material i mirë përcjellës?", options:["Goma", "Qelqi", "Bakri", "Druri"], a:2}, {q:"Tensioni i lartë është i rrezikshëm.", type:"tf", a:true}] },
    { id: 'smartt-game', type: 'quiz', title: 'Laboratori i Saktësisë', topic: 'Matjet', q: [{q:"Njësia e masës SI:", options:["Gram", "Kilogram", "Ton", "Litër"], a:1}, {q:"Mikrometri është i saktë?", type:"tf", a:true}] },
    { id: 'electric-field-master', type: 'battle', title: 'Electric Field Master', topic: 'Fusha Elektrike' },
    { id: 'potential-master', type: 'map', title: 'Potential Master', topic: 'Potenciali' },
    { id: 'induction-master', type: 'quiz', title: 'Induction Master', topic: 'Induksioni', q: [{q:"Zbuluesi i Induksionit:", options:["Faraday", "Newton", "Einstein", "Bohr"], a:0}, {q:"A bazohet transformatori tek induksioni?", type:"tf", a:true}] },
    { id: 'flux-master', type: 'quiz', title: 'Flux Master', topic: 'Fluksi', q: [{q:"Njësia e fluksit magnetik?", options:["Tesla", "Weber", "Henry", "Farad"], a:1}, {q:"Masa e fluksit varet nga fusha magnetike.", type:"tf", a:true}] },
    { id: 'lorentz-force-lab', type: 'map', title: 'Lorentz Force Lab', topic: 'Forca Lorenc' },
    { id: 'amperes-force-defender', type: 'battle', title: 'Ampere Force Defender', topic: 'Forca Amper' },
    { id: 'magnetic-induction-master', type: 'quiz', title: 'Magnetic Induction', topic: 'Magnetizmi', q: [{q:"Fusha magnetike matet me...", options:["Weber", "Tesla", "Amper", "Ohm"], a:1}, {q:"Gjeneratori prodhon rrymë?", type:"tf", a:true}] },
    { id: 'ohms-law-challenge', type: 'quiz', title: 'Ohm Law Challenge', topic: 'Ligji Ohm', q: [{q:"Formula V=?", options:["I/R", "R/I", "I*R", "I+R"], a:2}, {q:"A tregohet rezistenca në Ohm?", type:"tf", a:true}] },
    { id: 'power-grid-manager', type: 'map', title: 'Power Grid Manager', topic: 'Rrjeti Elektrik' },
    { id: 'capacitor-challenge', type: 'quiz', title: 'Capacitor Challenge', topic: 'Kondensatorët', q: [{q:"Kapaciteti matet në:", options:["Ohm", "Farad", "Henry", "Tesla"], a:1}, {q:"Kondensatori ruan ngarkesë.", type:"tf", a:true}] },
    { id: 'sistemi-diellor-3d', type: '3d', title: 'Sistemi Diellor 3D', topic: 'Hapësira' }
];

let s = fs.readFileSync('src/gameContent.ts', 'utf8');

let pIdx = s.indexOf('id: "paketa-e-gjelber"');
let nextBrace = s.indexOf('},', pIdx);
let correctPart = s.substring(0, nextBrace + 2);

let newContent = correctPart + '\n';

gamesConfig.forEach((game, index) => {
    let newHtml = '';
    if (game.type === 'quiz') newHtml = getProQuiz(game.title, game.topic, game.q);
    else if (game.type === 'battle') newHtml = getProBattle(game.title, game.topic);
    else if (game.type === 'map') newHtml = getProMap(game.title, game.topic);
    else if (game.type === 'collector') newHtml = getProCollector(game.title, game.topic);
    else if (game.type === 'sound') newHtml = getProSound();
    else if (game.type === '3d') newHtml = get3DSystem();

    newContent += `  {
    id: "${game.id}",
    title: "${game.title}",
    category: "${game.topic}",
    type: "digital",
    html: ${JSON.stringify(newHtml)}
  }`;
    if (index < gamesConfig.length - 1) {
        newContent += ',\n';
    } else {
        newContent += '\n';
    }
});

newContent += '];\n';

fs.writeFileSync('src/gameContent.ts', newContent, 'utf8');
