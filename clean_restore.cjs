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
    <style>
      :root { --primary-glow: #ffafcc; }
      body { font-family: 'Nunito', sans-serif !important; }
      h1, h2, .title, .header { font-family: 'Orbitron', sans-serif !important; }
      button, .btn { font-family: 'Nunito', sans-serif !important; font-weight: 800 !important; border-radius: 16px !important; box-shadow: 0 4px 15px rgba(255, 175, 204, 0.2) !important; transition: all 0.3s ease !important; }
      button:hover, .btn:hover { transform: translateY(-2px) !important; box-shadow: 0 6px 20px rgba(255, 175, 204, 0.4) !important; }
    </style>
`;

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

function updateGameHTML(id, newHtml) {
    const idKey = 'id: "' + id + '"';
    const startIdx = content.indexOf(idKey);
    if (startIdx === -1) {
        console.log('NOT FOUND:', id);
        return;
    }
    
    const htmlKey = 'html: ';
    const htmlIdx = content.indexOf(htmlKey, startIdx);
    if (htmlIdx === -1) return;
    
    let stringStartIdx = -1;
    let quoteChar = '';
    for (let i = htmlIdx + 5; i < content.length; i++) {
        if (content[i] === '"' || content[i] === '`' || content[i] === "'") {
            stringStartIdx = i;
            quoteChar = content[i];
            break;
        }
    }
    if (stringStartIdx === -1) return;
    
    let stringEndIdx = -1;
    let isEscaped = false;
    for (let i = stringStartIdx + 1; i < content.length; i++) {
        if (content[i] === '\\' && !isEscaped) {
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
    console.log('UPDATED:', id);
}

for (const [id, filename] of Object.entries(fileMap)) {
    try {
        let fileContent = fs.readFileSync('public/' + filename, 'utf8');
        fileContent = fileContent.replace('</head>', extraDesign + '\n</head>');
        updateGameHTML(id, fileContent);
    } catch(err) {
        console.log('Error loading file for', id, ':', filename);
    }
}

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
console.log('SUCCESS!');
