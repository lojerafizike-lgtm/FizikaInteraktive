const fs = require('fs');

const shkencetaretHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gjej Shkencëtarin</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      body { font-family: 'Nunito', sans-serif; background: #f8fafc; margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
      h1, h2 { font-family: 'Orbitron', sans-serif; }
      .glass-panel { border-radius: 24px; backdrop-filter: blur(10px); box-shadow: 0 10px 40px rgba(0,0,0,0.08); background: white; width: 100%; max-width: 900px; padding: 24px; margin: auto; }
      .card { border-radius: 12px; padding: 8px; cursor: pointer; text-align: center; font-weight: bold; border: 2px solid #e2e8f0; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center; height: 100%; min-height: 70px; font-size: 0.95rem; }
      .card:hover { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-color: #ffafcc; }
      .card.selected { border-color: #ffafcc; background-color: #fff0f6; transform: scale(1.02); }
      .card.matched { background-color: #d1fae5; border-color: #10b981; color: #065f46; cursor: default; transform: none; opacity: 0.5; pointer-events: none; }
      .card.wrong { background-color: #fee2e2; border-color: #ef4444; color: #991b1b; animation: shake 0.4s; }
      @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }
      .grid-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
      .col-list { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
      @media (max-width: 600px) { .col-list { grid-template-columns: 1fr; } }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen text-slate-800 p-4">
    <div class="glass-panel">
        <div class="flex justify-between items-center mb-4 border-b border-slate-100 pb-4">
            <h1 class="text-xl md:text-2xl font-bold text-slate-800"><i class="fas fa-search text-pink-400"></i> Gjej Shkencëtarin</h1>
            <div class="flex gap-4">
                <div class="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-bold shadow-inner">Raundi: <span id="round">1</span>/4</div>
                <div class="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full font-bold shadow-inner"><i class="fas fa-star"></i> <span id="score">0</span></div>
            </div>
        </div>
        <p class="text-center mb-6 font-bold text-slate-600 hidden md:block">Lidh shkencëtarin me shpikjen/zbulimin e tij!</p>
        <div id="game-board" class="grid-container">
            <div><h3 class="text-center mb-4 font-orbitron text-lg bg-pink-100 rounded p-2">Shkencëtarët</h3><div id="scientists" class="col-list"></div></div>
            <div><h3 class="text-center mb-4 font-orbitron text-lg bg-blue-100 rounded p-2">Shpikjet</h3><div id="inventions" class="col-list"></div></div>
        </div>
        <div id="victory" class="hidden text-center mt-8 py-8">
            <h2 class="text-3xl font-bold text-emerald-500 mb-4">Urime! Përfundove të gjitha raundet!</h2>
            <button onclick="startGame()" class="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 text-xl shadow-lg mt-4">Fillo Përsëri</button>
        </div>
    </div>
    <script>
        const allPairs = [
            { s: "Isaac Newton", i: "Ligji i Gravitetit" },
            { s: "Albert Einstein", i: "Teoria e Relativitetit" },
            { s: "Nikola Tesla", i: "Rryma Alternative" },
            { s: "Galileo Galilei", i: "Teleskopi Gjenial" },
            { s: "Marie Curie", i: "Radioaktiviteti" },
            { s: "James Maxwell", i: "Elektromagnetizmi" },
            { s: "Niels Bohr", i: "Modeli i Atomit" },
            { s: "Alessandro Volta", i: "Bateria Elektrike" },
            { s: "Michael Faraday", i: "Induksioni Magnetik" },
            { s: "Archimedes", i: "Ligji i Lundrimit" },
            { s: "Georg Ohm", i: "Ligji i Rezistencës" },
            { s: "Max Planck", i: "Teoria Kuantike" },
            { s: "Edwin Hubble", i: "Zgjerimi i Universit" },
            { s: "Johannes Kepler", i: "Orbitat Planetare" },
            { s: "Blaise Pascal", i: "Shtypja në Lëngje" },
            { s: "Guglielmo Marconi", i: "Radio" },
            { s: "Alexander Graham Bell", i: "Telefoni" },
            { s: "Dmitri Mendeleev", i: "Tabela Periodike" },
            { s: "Werner Heisenberg", i: "Parimi i Papërcaktueshmërisë" },
            { s: "Erwin Schrödinger", i: "Mekanika Kuantike" },
            { s: "Enrico Fermi", i: "Reaktori Bërthamor" },
            { s: "Rosalind Franklin", i: "Struktura e ADN-së" },
            { s: "Stephen Hawking", i: "Rrezatimi i Vrimave të Zeza" },
            { s: "Carl Sagan", i: "Kërkimi SETI" }
        ];
        
        let round = 1;
        let score = 0;
        let currentPairs = [];
        let selS = null;
        let selI = null;
        let matchedInRound = 0;
        const PAIRS_PER_ROUND = 6;
        const TOTAL_ROUNDS = 4;

        function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

        function startGame() {
            round = 1; score = 0; matchedInRound = 0;
            document.getElementById('score').innerText = score;
            document.getElementById('victory').classList.add('hidden');
            document.getElementById('game-board').classList.remove('hidden');
            loadRound();
        }

        function loadRound() {
            document.getElementById('round').innerText = round;
            matchedInRound = 0;
            const shuffledDB = shuffle([...allPairs]);
            currentPairs = shuffledDB.slice(0, PAIRS_PER_ROUND);
            
            const scientists = shuffle(currentPairs.map(p => p.s));
            const inventions = shuffle(currentPairs.map(p => p.i));
            
            const sContainer = document.getElementById('scientists');
            const iContainer = document.getElementById('inventions');
            sContainer.innerHTML = ''; iContainer.innerHTML = '';

            scientists.forEach(s => {
                const el = document.createElement('div');
                el.className = 'card'; el.innerText = s;
                el.onclick = () => selectCard(el, 's', s);
                sContainer.appendChild(el);
            });
            inventions.forEach(i => {
                const el = document.createElement('div');
                el.className = 'card'; el.innerText = i;
                el.onclick = () => selectCard(el, 'i', i);
                iContainer.appendChild(el);
            });
        }

        function selectCard(el, type, val) {
            if (el.classList.contains('matched')) return;
            const container = type === 's' ? document.getElementById('scientists') : document.getElementById('inventions');
            Array.from(container.children).forEach(c => c.classList.remove('selected', 'wrong'));
            el.classList.add('selected');
            
            if (type === 's') selS = {el, val};
            else selI = {el, val};

            if (selS && selI) checkMatch();
        }

        function checkMatch() {
            const isMatch = currentPairs.some(p => p.s === selS.val && p.i === selI.val);
            if (isMatch) {
                selS.el.classList.remove('selected'); selI.el.classList.remove('selected');
                selS.el.classList.add('matched'); selI.el.classList.add('matched');
                score += 10;
                document.getElementById('score').innerText = score;
                matchedInRound++;
                if (matchedInRound === PAIRS_PER_ROUND) {
                    setTimeout(() => {
                        if (round < TOTAL_ROUNDS) {
                            round++;
                            loadRound();
                        } else {
                            document.getElementById('game-board').classList.add('hidden');
                            document.getElementById('victory').classList.remove('hidden');
                        }
                    }, 800);
                }
            } else {
                const eS = selS.el, eI = selI.el;
                eS.classList.add('wrong'); eI.classList.add('wrong');
                setTimeout(() => {
                    eS.classList.remove('selected', 'wrong');
                    eI.classList.remove('selected', 'wrong');
                }, 500);
            }
            selS = null; selI = null;
        }

        startGame();
    </script>
</body>
</html>`;

const solarHTML = `<!DOCTYPE html>
<html lang="sq">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistemi Diellor 3D</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { margin: 0; background: radial-gradient(circle at center, #0B0E14 0%, #000000 100%); color: white; font-family: 'Orbitron', sans-serif; overflow: hidden; height: 100vh; perspective: 1000px; display: flex; align-items: center; justify-content: center; }
        .scene { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transform: rotateX(60deg); }
        .sun { position: absolute; top: 50%; left: 50%; width: 80px; height: 80px; margin-left: -40px; margin-top: -40px; background: radial-gradient(circle, #fcd34d, #f59e0b, #d97706); border-radius: 50%; box-shadow: 0 0 60px 20px rgba(245, 158, 11, 0.6); transform: rotateX(-60deg); z-index: 10; cursor: pointer; }
        .orbit { position: absolute; top: 50%; left: 50%; border: 1px dashed rgba(255,255,255,0.15); border-radius: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; animation: spin linear infinite; }
        .planet-container { position: absolute; top: 50%; left: 0; transform-style: preserve-3d; width: 100%; height: 100%; }
        .planet { position: absolute; top: -10px; left: 50%; border-radius: 50%; transform: rotateX(-60deg); text-align: center; cursor: pointer; transition: transform 0.2s; box-shadow: inset -5px -5px 10px rgba(0,0,0,0.5); }
        .planet:hover { transform: rotateX(-60deg) scale(1.5); }
        .planet-label { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: white; background: rgba(0,0,0,0.6); padding: 2px 6px; border-radius: 4px; pointer-events: none; opacity: 0; transition: opacity 0.2s; white-space: nowrap; }
        .planet:hover .planet-label { opacity: 1; }
        
        .mërkuri { background: #9ca3af; width: 12px; height: 12px; margin-left: -6px; margin-top: -6px; }
        .afërdita { background: #fdba74; width: 18px; height: 18px; margin-left: -9px; margin-top: -9px; }
        .toka { background: #3b82f6; width: 20px; height: 20px; margin-left: -10px; margin-top: -10px; box-shadow: inset -5px -5px 10px rgba(0,0,0,0.5), 0 0 10px rgba(59, 130, 246, 0.5); }
        .marsi { background: #ef4444; width: 16px; height: 16px; margin-left: -8px; margin-top: -8px; }
        .jupiteri { background: #f59e0b; width: 36px; height: 36px; margin-left: -18px; margin-top: -18px; background-image: repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px); }
        .saturni { background: #fcd34d; width: 30px; height: 30px; margin-left: -15px; margin-top: -15px; }
        .saturn-ring { position: absolute; top: 50%; left: 50%; width: 50px; height: 50px; border: 4px solid rgba(252, 211, 77, 0.5); border-radius: 50%; transform: translate(-50%, -50%) rotateX(75deg); }
        .urani { background: #06b6d4; width: 24px; height: 24px; margin-left: -12px; margin-top: -12px; }
        .neptuni { background: #2563eb; width: 24px; height: 24px; margin-left: -12px; margin-top: -12px; }

        @keyframes spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }

        .ui-panel { position: absolute; top: 20px; left: 20px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.2); padding: 20px; border-radius: 16px; backdrop-filter: blur(10px); width: 300px; z-index: 100; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: start; }
        .info-title { color: #fcd34d; font-size: 24px; margin-bottom: 10px; margin-top: 0; }
        .info-text { font-family: sans-serif; font-size: 14px; line-height: 1.5; color: #cbd5e1; }
        .btn-speed { background: #3b82f6; border: none; color: white; padding: 8px 16px; border-radius: 8px; cursor: pointer; font-family: 'Orbitron'; font-weight: bold; margin-top: 15px; width: 100%; transition: background 0.2s; }
        .btn-speed:hover { background: #2563eb; }
        
        .stars { position: absolute; width: 100%; height: 100%; background: transparent; z-index: -1; pointer-events: none;}
    </style>
</head>
<body>
    <div class="stars" id="stars"></div>
    <div class="ui-panel">
        <h2 class="info-title" id="info-title"><i class="fas fa-sun"></i> Sistemi Diellor</h2>
        <div class="info-text" id="info-text">Zgjidhni një planet për të mësuar më shumë rreth tij. Toka është planeti ku jetojmë ne! Kliko mbi to dhe mbaj sytë hapur!</div>
        <button class="btn-speed" onclick="toggleSpeed()">Shpejtësia: 1x</button>
    </div>
    
    <div class="scene">
        <div class="sun" onclick="showInfo('Dielli', 'Ylli ynë ushqen me dritë e ngrohtësi të gjithë sistemin diellor. Ai përbën mbi 99.8% të masës së sistemit!')">
            <div class="planet-label">Dielli</div>
        </div>
        
        <div class="orbit" style="width: 140px; height: 140px; animation-duration: 8.8s;" id="orb-0">
            <div class="planet mërkuri" style="margin-top: -70px;" onclick="showInfo('Mërkuri', 'Planeti më i afërt me Diellin. Ka temperatura ekstreme, shumë të nxehta ditën dhe shumë të ftohta natën.')"><div class="planet-label">Mërkuri</div></div>
        </div>
        
        <div class="orbit" style="width: 200px; height: 200px; animation-duration: 22.5s;" id="orb-1">
            <div class="planet afërdita" style="margin-top: -100px;" onclick="showInfo('Afërdita', 'Planeti i dytë nga Dielli. Ka një atmosferë shumë të dendur dhe të nxehtë, dhe shpesh shihet ashtu si Ylli i Mëngjesit.')"><div class="planet-label">Afërdita</div></div>
        </div>
        
        <div class="orbit" style="width: 280px; height: 280px; animation-duration: 36.5s;" id="orb-2">
            <div class="planet toka" style="margin-top: -140px;" onclick="showInfo('Toka', 'Shtëpia jonë e vetme. Planeti i vetëm i njohur që strehon jetë, me ujë të lëngshëm në sipërfaqe.')"><div class="planet-label">Toka</div></div>
        </div>
        
        <div class="orbit" style="width: 360px; height: 360px; animation-duration: 68.7s;" id="orb-3">
            <div class="planet marsi" style="margin-top: -180px;" onclick="showInfo('Marsi', 'Planeti i Kuq. I ftohtë dhe i thatë sot, por miliona vjet më parë mund të ketë patur lumenj dhe dete.')"><div class="planet-label">Marsi</div></div>
        </div>
        
        <div class="orbit" style="width: 500px; height: 500px; animation-duration: 430s;" id="orb-4">
            <div class="planet jupiteri" style="margin-top: -250px;" onclick="showInfo('Jupiteri', 'Gjigandi i gaztë, planeti më i madh në Sistemin Diellor. Stuhia e tij, Njolla e Madhe e Kuqe, zien prej shekujsh.')"><div class="planet-label">Jupiteri</div></div>
        </div>
        
        <div class="orbit" style="width: 650px; height: 650px; animation-duration: 1070s;" id="orb-5">
            <div class="planet saturni" style="margin-top: -325px;" onclick="showInfo('Saturni', 'I njohur për unazat e tij spektakolare prej akulli dhe shkëmbinjsh. Ёshtë planeti i dytë më i madh i sistemit.')">
                <div class="saturn-ring"></div>
                <div class="planet-label">Saturni</div>
            </div>
        </div>
        
        <div class="orbit" style="width: 780px; height: 780px; animation-duration: 3060s;" id="orb-6">
            <div class="planet urani" style="margin-top: -390px;" onclick="showInfo('Urani', 'Gjigandi i akullt që rrotullohet i përkulur në një krah. Rrezaton një ngjyrë të qetë bojëqielli.')"><div class="planet-label">Urani</div></div>
        </div>
        
        <div class="orbit" style="width: 900px; height: 900px; animation-duration: 6010s;" id="orb-7">
            <div class="planet neptuni" style="margin-top: -450px;" onclick="showInfo('Neptuni', 'Planeti më i largët dhe me erërat më të forta në të gjithë sistemin diellor. Gji i thellë blu i ftohtësisë.')"><div class="planet-label">Neptuni</div></div>
        </div>
    </div>
    
    <script>
        function showInfo(title, desc) {
            document.getElementById('info-title').innerText = title;
            document.getElementById('info-text').innerText = desc;
        }

        let speedMultiplier = 1;
        const baseDurations = [8.8, 22.5, 36.5, 68.7, 430, 1070, 3060, 6010];
        
        function toggleSpeed() {
            speedMultiplier = speedMultiplier === 1 ? 5 : (speedMultiplier === 5 ? 20 : 1);
            document.querySelector('.btn-speed').innerText = 'Shpejtësia: ' + speedMultiplier + 'x';
            for (let i = 0; i < 8; i++) {
                document.getElementById('orb-' + i).style.animationDuration = (baseDurations[i] / speedMultiplier) + 's';
            }
        }

        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = Math.random() * 2 + 'px';
            star.style.height = star.style.width;
            star.style.background = 'rgba(255,255,255,' + Math.random() + ')';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.borderRadius = '50%';
            starsContainer.appendChild(star);
        }
    </script>
</body>
</html>`;

const encodeValue = (str) => {
    return Buffer.from(str).toString('base64');
};

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

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

injectBase64('gjej-shkencetarin', encodeValue(shkencetaretHTML));
injectBase64('sistemi-diellor-3d', encodeValue(solarHTML));

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
console.log('Update part 2 successful!');
