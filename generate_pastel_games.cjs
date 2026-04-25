const fs = require('fs');

function getPastelTemplate(title, topic, mechanic) {
    let mechanicHtml = '';
    let mechanicJs = '';

    if (mechanic === 'quiz') {
        mechanicHtml = `
            <div id="quiz-container" class="glass-panel">
                <h2 id="question-text" class="text-2xl mb-4 text-slate-700">Pyetja do të shfaqet këtu</h2>
                <div id="options-container" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
            </div>
            <div id="score-display" class="mt-6 text-xl font-bold text-slate-600">Pikët: <span id="score">0</span></div>
        `;
        mechanicJs = `
            const questions = [
                { q: "Cila është njësia matëse për ${topic}?", options: ["Joule", "Newton", "Watt", "Ampere"], a: 0 },
                { q: "Cila formulë lidhet me ${topic}?", options: ["F = m*a", "E = m*c^2", "V = I*R", "P = W/t"], a: 1 },
                { q: "Kush e zbuloi ligjin për ${topic}?", options: ["Newton", "Einstein", "Tesla", "Faraday"], a: 2 },
                { q: "Në cilin vit u bë zbulimi kryesor për ${topic}?", options: ["1687", "1905", "1831", "1899"], a: 1 },
                { q: "Çfarë ndodh kur rritet ${topic}?", options: ["Zvogëlohet energjia", "Rritet forca", "Nuk ndryshon asgjë", "Krijohet fushë magnetike"], a: 1 }
            ];
            let currentQ = 0;
            let score = 0;

            function loadQuestion() {
                if (currentQ >= questions.length) {
                    document.getElementById('quiz-container').innerHTML = \`<h2 class="text-3xl text-green-600">Urime! Përfunduat lojën me \${score} pikë!</h2>\`;
                    return;
                }
                const q = questions[currentQ];
                document.getElementById('question-text').innerText = q.q;
                const opts = document.getElementById('options-container');
                opts.innerHTML = '';
                q.options.forEach((opt, i) => {
                    const btn = document.createElement('button');
                    btn.className = 'btn-pastel';
                    btn.innerText = opt;
                    btn.onclick = () => checkAnswer(i);
                    opts.appendChild(btn);
                });
            }

            function checkAnswer(idx) {
                if (idx === questions[currentQ].a) {
                    score += 20;
                    document.getElementById('score').innerText = score;
                    // Add some visual feedback
                    document.body.style.backgroundColor = '#d4edda';
                    setTimeout(() => document.body.style.backgroundColor = 'var(--bg-color)', 300);
                } else {
                    document.body.style.backgroundColor = '#f8d7da';
                    setTimeout(() => document.body.style.backgroundColor = 'var(--bg-color)', 300);
                }
                currentQ++;
                loadQuestion();
            }

            loadQuestion();
        `;
    } else if (mechanic === 'puzzle') {
        mechanicHtml = `
            <div id="puzzle-board" class="glass-panel grid grid-cols-3 gap-2 w-64 h-64 mx-auto mb-6"></div>
            <div class="text-center">
                <button onclick="shuffle()" class="btn-pastel">Përziej</button>
            </div>
            <div id="status" class="mt-4 text-xl font-bold text-slate-600 text-center">Rendit numrat nga 1 në 8!</div>
        `;
        mechanicJs = `
            const board = document.getElementById('puzzle-board');
            let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];

            function draw() {
                board.innerHTML = '';
                tiles.forEach((t, i) => {
                    const div = document.createElement('div');
                    div.className = 'flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer transition-all ' + (t === 0 ? 'bg-transparent' : 'bg-white shadow-sm border-2 border-slate-200 text-slate-700 hover:bg-slate-50');
                    div.innerText = t === 0 ? '' : t;
                    div.onclick = () => move(i);
                    board.appendChild(div);
                });
                checkWin();
            }

            function move(i) {
                const emptyIdx = tiles.indexOf(0);
                const validMoves = [emptyIdx - 1, emptyIdx + 1, emptyIdx - 3, emptyIdx + 3];
                if (validMoves.includes(i) && !(emptyIdx % 3 === 0 && i === emptyIdx - 1) && !(emptyIdx % 3 === 2 && i === emptyIdx + 1)) {
                    [tiles[i], tiles[emptyIdx]] = [tiles[emptyIdx], tiles[i]];
                    draw();
                }
            }

            function shuffle() {
                for (let i = tiles.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
                }
                draw();
                document.getElementById('status').innerText = 'Rendit numrat nga 1 në 8!';
            }

            function checkWin() {
                if (tiles.slice(0, 8).every((t, i) => t === i + 1)) {
                    document.getElementById('status').innerText = 'Urime! E zgjidhët enigmën e ${topic}!';
                    document.getElementById('status').className = 'mt-4 text-2xl font-bold text-green-500 text-center';
                }
            }

            draw();
        `;
    } else if (mechanic === 'clicker') {
        mechanicHtml = `
            <div class="glass-panel text-center">
                <div class="text-6xl mb-4" id="energy-icon">⚡</div>
                <h2 class="text-3xl font-bold text-slate-700 mb-2">Energjia: <span id="energy-count">0</span></h2>
                <p class="text-slate-500 mb-6">Gjenero energji për të zhbllokuar përmirësime!</p>
                
                <button onclick="clickEnergy()" class="btn-pastel text-xl px-8 py-4 mb-8 transform hover:scale-105 transition-transform">Gjenero Energji</button>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div class="bg-white p-4 rounded-xl border-2 border-slate-100">
                        <h3 class="font-bold text-lg">Gjenerator Automatik</h3>
                        <p class="text-sm text-slate-500 mb-2">Kosto: <span id="cost-auto">50</span> energji</p>
                        <button onclick="buyAuto()" class="btn-pastel text-sm w-full">Bli (+1/sek)</button>
                    </div>
                    <div class="bg-white p-4 rounded-xl border-2 border-slate-100">
                        <h3 class="font-bold text-lg">Përmirësim Klikimi</h3>
                        <p class="text-sm text-slate-500 mb-2">Kosto: <span id="cost-click">100</span> energji</p>
                        <button onclick="buyClick()" class="btn-pastel text-sm w-full">Bli (+1/klik)</button>
                    </div>
                </div>
            </div>
        `;
        mechanicJs = `
            let energy = 0;
            let clickPower = 1;
            let autoPower = 0;
            let costAuto = 50;
            let costClick = 100;

            function updateUI() {
                document.getElementById('energy-count').innerText = Math.floor(energy);
                document.getElementById('cost-auto').innerText = costAuto;
                document.getElementById('cost-click').innerText = costClick;
            }

            function clickEnergy() {
                energy += clickPower;
                const icon = document.getElementById('energy-icon');
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => icon.style.transform = 'scale(1)', 100);
                updateUI();
            }

            function buyAuto() {
                if (energy >= costAuto) {
                    energy -= costAuto;
                    autoPower += 1;
                    costAuto = Math.floor(costAuto * 1.5);
                    updateUI();
                }
            }

            function buyClick() {
                if (energy >= costClick) {
                    energy -= costClick;
                    clickPower += 1;
                    costClick = Math.floor(costClick * 1.8);
                    updateUI();
                }
            }

            setInterval(() => {
                energy += autoPower;
                updateUI();
            }, 1000);
        `;
    }

    return `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Pastel Edition</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --bg-color: #fdf6e3;
            --text-main: #475569;
            --pastel-blue: #a2d2ff;
            --pastel-pink: #ffafcc;
            --pastel-purple: #cdb4db;
            --pastel-green: #bde0fe;
            --pastel-yellow: #fcf6bd;
        }
        
        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: 'Nunito', sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(255, 175, 204, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(162, 210, 255, 0.1) 0%, transparent 20%);
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }

        header {
            text-align: center;
            margin-bottom: 3rem;
        }

        h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 3rem;
            color: var(--text-main);
            text-shadow: 2px 2px 0px var(--pastel-blue), 4px 4px 0px var(--pastel-pink);
            margin-bottom: 0.5rem;
        }

        .subtitle {
            font-size: 1.2rem;
            color: #64748b;
            font-weight: 600;
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 24px;
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
            border: 2px solid rgba(255, 255, 255, 0.4);
        }

        .btn-pastel {
            background: white;
            border: 2px solid var(--pastel-blue);
            border-radius: 16px;
            padding: 1rem 1.5rem;
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
            color: var(--text-main);
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 0 var(--pastel-blue);
        }

        .btn-pastel:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 0 var(--pastel-blue);
            background: var(--pastel-blue);
            color: white;
        }

        .btn-pastel:active {
            transform: translateY(4px);
            box-shadow: 0 0 0 var(--pastel-blue);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: var(--bg-color); }
        ::-webkit-scrollbar-thumb { background: var(--pastel-purple); border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--pastel-pink); }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${title}</h1>
            <p class="subtitle">Eksploro botën e ${topic} me këtë lojë interaktive!</p>
        </header>

        <main>
            ${mechanicHtml}
        </main>
    </div>

    <script>
        ${mechanicJs}
    </script>
</body>
</html>`;
}

const gamesToUpdate = [
    { id: 'power-grid-master', title: 'Mjeshtri i Rrjetit', topic: 'Rrjeteve Elektrike', mechanic: 'clicker' },
    { id: 'voltage-stabilizer', title: 'Stabilizuesi i Tensionit', topic: 'Tensionit', mechanic: 'puzzle' },
    { id: 'current-master', title: 'Mjeshtri i Rrymës', topic: 'Rrymës Elektrike', mechanic: 'quiz' },
    { id: 'capacitor-master', title: 'Mjeshtri i Kondensatorëve', topic: 'Kapacitetit', mechanic: 'clicker' },
    { id: 'mjeshtri-tingullit', title: 'Mjeshtri i Tingullit', topic: 'Valëve dhe Tingullit', mechanic: 'puzzle' },
    { id: 'sti-game', title: 'Beteja e Fizikes', topic: 'Fizikës së Përgjithshme', mechanic: 'quiz' },
    { id: 'lojee-game', title: 'ElektroGame', topic: 'Elektricitetit', mechanic: 'clicker' },
    { id: 'smartt-game', title: 'Laboratori i Saktësisë', topic: 'Matjeve Fizike', mechanic: 'puzzle' },
    { id: 'resistance-guard', title: 'Mbrojtësi i Rezistencës', topic: 'Rezistencës Elektrike', mechanic: 'quiz' }
];

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

gamesToUpdate.forEach(game => {
    const newHtml = getPastelTemplate(game.title, game.topic, game.mechanic);
    
    const idIndex = content.indexOf(`id: "${game.id}"`);
    if (idIndex === -1) {
        console.error(`Game with id ${game.id} not found.`);
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
