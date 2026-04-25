const fs = require('fs');

const fileMap = {
    'elektriciteti': 'energjia elektrike.html',
    'resistance-guard': 'loje rezistenca e rrymes (1).html',
    'efield-explorer': 'loje intenciteti i fushes elektrike (1).html',
    'power-grid-master': 'loje fuqia e rrymes (1).html',
    'voltage-stabilizer': 'loja tensioni (1).html',
    'current-master': 'Loja inteciteti i rrymes (1).html',
    'capacitor-master': 'kapaciteti elektrik (1).html',
    'mjeshtri-tingullit': 'mjeshtri-tingullit.html',
    'sfida-matures': 'sfida-matures.html',
    'sti-game': 'sti.html',
    'lojee-game': 'lojee.html',
    'smartt-game': 'smartt.html',
    'electric-field-master': 'ngarkesekake.html',
    'potential-master': 'potencialipipi.html',
    'induction-master': 'halelujahhhhh.html',
    'flux-master': 'smbajmendca.html',
    'lorentz-force-lab': 'lorencpipiundkaki.html',
    'magnetic-induction-master': 'summagneticshiiii.html',
    'sistemi-diellor-3d': 'exo3d.html'
};

const extraDesign = `
    <!-- DIZAJNI SUPERR INJECTION -->
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
      :root { --primary-glow: #ffafcc; }
      body { font-family: 'Nunito', sans-serif !important; }
      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }
      button, .btn { font-family: 'Nunito', sans-serif; font-weight: 800; border-radius: 16px; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2); transition: all 0.3s ease; }
      button:hover, .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4); }
    </style>
`;

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

function updateGameHTML(id, newHtml) {
    const idKey = 'id: "' + id + '"';
    const startIdx = content.indexOf(idKey);
    if (startIdx === -1) {
        console.log("NOT FOUND:", id);
        return;
    }
    
    const htmlKey = 'html: ';
    const htmlIdx = content.indexOf(htmlKey, startIdx);
    if (htmlIdx === -1) return;
    
    let stringStartIdx = -1;
    let quoteChar = '';
    for (let i = htmlIdx + 5; i < content.length; i++) {
        if (content[i] === '"' || content[i] === "\`" || content[i] === "'") {
            stringStartIdx = i;
            quoteChar = content[i];
            break;
        }
    }
    if (stringStartIdx === -1) return;
    
    let stringEndIdx = -1;
    let isEscaped = false;
    for (let i = stringStartIdx + 1; i < content.length; i++) {
        if (content[i] === '\\\\' && !isEscaped) {
            isEscaped = true;
        } else {
            if (content[i] === quoteChar && !isEscaped) {
                stringEndIdx = i;
                break;
            }
            isEscaped = false;
        }
    }
    if (stringEndIdx === -1) return;
    
    const before = content.substring(0, htmlIdx + 6);
    const after = content.substring(stringEndIdx + 1);
    
    content = before + JSON.stringify(newHtml) + after;
    console.log("UPDATED:", id);
}

for (const [id, filename] of Object.entries(fileMap)) {
    try {
        let fileContent = fs.readFileSync('public/' + filename, 'utf8');
        fileContent = fileContent.replace('</head>', extraDesign + '\\n</head>');
        updateGameHTML(id, fileContent);
    } catch(err) {
        console.log("Error loading file for", id, ":", filename);
    }
}

// ---------------------------------------------------------
// FIX FOR THE MISSING ONES TO BE REAL GAMES
// ---------------------------------------------------------
const missingGames = [
    { id: 'gjej-shkencetarin', type: 'quiz', title: 'Gjej Shkencëtarin', topic: 'Shkencëtarët', q: [
        {q:"Kush e zbuloi ligjin e gravitetit universal?", options:["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Niels Bohr"], a:1},
        {q:"E Vërtetë apo e Gabuar: Nikola Tesla zbuloi rrymën alternative (AC).", type:"tf", a:true},
        {q:"Kush fitoi Çmimin Nobel për Fotoefektin?", options:["Max Planck", "Marie Curie", "Albert Einstein", "Galileo Galilei"], a:2},
        {q:"Kush cilësohet si babai i fizikës bërthamore?", options:["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Werner Heisenberg"], a:0}
    ]},
    { id: 'ohms-law-challenge', type: 'quiz', title: 'Ohm Law Challenge', topic: 'Ligji Ohm', q: [
        {q:"Formula e ligjit të Ohmit?", options:["I = R/V", "V = I * R", "R = V * I", "V = I / R"], a:1},
        {q:"Rezistenca elektrike matet me Ohms (Ω).", type:"tf", a:true},
        {q:"Nëse V=10V dhe R=2Ω, sa është I?", options:["5A", "20A", "10A", "0.2A"], a:0},
        {q:"Rryma është në përpjesëtim të zhdrejtë me rezistencën.", type:"tf", a:true}
    ]},
    { id: 'capacitor-challenge', type: 'quiz', title: 'Capacitor Challenge', topic: 'Kondensatorët', q: [
        {q:"Kapaciteti elektrik matet me:", options:["Volt", "Amper", "Farad", "Weber"], a:2},
        {q:"Kondensatori shërben për grumbullimin e ngarkesave elektrike.", type:"tf", a:true},
        {q:"Si llogaritet kapaciteti?", options:["C = Q/V", "C = V/Q", "C = Q*V", "C = R*I"], a:0},
        {q:"Nëse shtojmë një dielektrik, kapaciteti rritet.", type:"tf", a:true}
    ]},
    { id: 'amperes-force-defender', type: 'quiz', title: 'Ampere Force Defender', topic: 'Forca Amper', q: [
        {q:"Formula e Forcës së Amperit?", options:["F = B*I*L*sin(a)", "F = m*a", "F = k*q1*q2/r^2", "F = I*U*t"], a:0},
        {q:"Rregulla e dorës së majtë përdoret për gjetjen e kahut të F.", type:"tf", a:true},
        {q:"Forca Ampere vepron mbi:", options:["Përcjellësin me rrymë", "Një rreze drite", "Një foton", "Bërthamë atomike"], a:0},
        {q:"Forca bëhet 0 kur përcjellësi është paralel me fushën B.", type:"tf", a:true}
    ]}
];

const fontLinks = extraDesign;

function getProQuiz(title, topic, questions) {
    return \`<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>\${title}</title>
    \${fontLinks}
</head>
<body class="flex items-center justify-center h-screen bg-slate-50">
    <div class="w-full max-w-2xl p-6 glass-panel rounded-3xl shadow-xl border border-slate-200">
        <div class="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <h1 class="text-2xl font-orbitron font-bold text-dark flex items-center gap-3">
                <i class="fas fa-bolt text-primary"></i> \${title}
            </h1>
            <div class="flex gap-4">
                <div class="bg-red-50 text-red-500 px-4 py-2 rounded-full font-bold shadow-inner"><i class="fas fa-heart"></i> <span id="lives">3</span></div>
                <div class="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full font-bold shadow-inner"><i class="fas fa-star"></i> <span id="score">0</span></div>
            </div>
        </div>

        <div id="game-area" class="text-center">
            <div class="bg-white rounded-2xl p-8 mb-6 shadow-sm border border-slate-100 min-h-[150px] flex flex-col items-center justify-center relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <h2 id="question" class="text-2xl font-extrabold text-slate-800 leading-tight z-10">Gati për të testuar njohuritë e \${topic}?</h2>
                <p id="feedback" class="h-6 mt-4 font-bold text-lg opacity-0 transition-opacity"></p>
            </div>
            <div id="options" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button onclick="startGame()" class="game-btn col-span-full bg-dark text-white p-4 rounded-xl font-bold text-lg shadow-md hover:bg-slate-700">Fillo Sfidën</button>
            </div>
        </div>
    </div>

    <script>
        const questions = \${JSON.stringify(questions)};
        let currentQ = 0, score = 0, lives = 3;

        function startGame() { currentQ = 0; score = 0; lives = 3; updateUI(); nextQ(); }
        function updateUI() { document.getElementById('score').innerText = score; document.getElementById('lives').innerText = lives; }
        
        function nextQ() {
            if (lives <= 0 || currentQ >= questions.length) {
                document.getElementById('question').innerHTML = lives <= 0 ? "<span class='text-red-500'>Lojë e Përfunduar!</span>" : "<span class='text-emerald-500'>Urime, Fitore! Ke zotëruar \${topic}!</span>";
                document.getElementById('feedback').style.opacity = 0;
                document.getElementById('options').innerHTML = '<button onclick="startGame()" class="game-btn col-span-full bg-primary text-white p-4 rounded-xl font-bold text-lg hover:bg-pink-500 shadow-md">Luaj Përsëri</button>';
                return;
            }
            const q = questions[currentQ];
            document.getElementById('question').innerText = q.q;
            document.getElementById('feedback').style.opacity = 0;
            
            let html = '';
            if (q.type === 'tf') {
                html = \\\`
                    <button onclick="check(true)" class="game-btn bg-white border-2 border-emerald-400 text-emerald-600 p-6 rounded-2xl font-bold text-xl hover:bg-emerald-50 shadow-sm flex flex-col items-center gap-2"><i class="fas fa-check text-3xl"></i> E Vërtetë</button>
                    <button onclick="check(false)" class="game-btn bg-white border-2 border-red-400 text-red-600 p-6 rounded-2xl font-bold text-xl hover:bg-red-50 shadow-sm flex flex-col items-center gap-2"><i class="fas fa-times text-3xl"></i> E Gabuar</button>
                \\\`;
            } else {
                q.options.forEach((opt, i) => {
                    html += \\\`<button onclick="check(\${i})" class="game-btn bg-white border border-slate-200 text-slate-700 p-4 rounded-xl font-bold hover:border-primary hover:text-primary shadow-sm text-left pl-6">\${opt}</button>\\\`;
                });
            }
            document.getElementById('options').innerHTML = html;
        }

        function check(ans) {
            const q = questions[currentQ];
            const isCorrect = ans === q.a;
            
            const fb = document.getElementById('feedback');
            fb.style.opacity = 1;
            
            if (isCorrect) {
                score += 10;
                fb.innerText = "E Saktë! +10 Pikë";
                fb.className = "h-6 mt-4 font-bold text-lg transition-opacity text-emerald-500";
            } else {
                lives--;
                fb.innerText = "E Pasaktë! -1 Jetë";
                fb.className = "h-6 mt-4 font-bold text-lg transition-opacity text-red-500";
            }
            
            const area = document.getElementById('game-area');
            area.style.transform = isCorrect ? 'scale(1.02)' : 'translateX(-10px)';
            setTimeout(() => {
                area.style.transform = isCorrect ? 'scale(1)' : 'translateX(10px)';
                setTimeout(() => area.style.transform = 'none', 100);
            }, 100);

            updateUI();
            currentQ++;
            
            // disable buttons
            document.getElementById('options').querySelectorAll('button').forEach(b => b.disabled = true);
            
            setTimeout(nextQ, 1000);
        }
    </script>
</body>
</html>\`;
}

missingGames.forEach(game => {
    updateGameHTML(game.id, getProQuiz(game.title, game.topic, game.q));
});

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
