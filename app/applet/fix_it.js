const fs = require('fs');

let code = fs.readFileSync('inject_direct.cjs', 'utf8');

const replacement = "controls.innerHTML = '<div></div><button class=\"option-btn\" style=\"padding:0\" onclick=\"simulateKey(\\'ArrowUp\\')\">W</button><div></div><button class=\"option-btn\" style=\"padding:0\" onclick=\"simulateKey(\\'ArrowLeft\\')\">A</button><button class=\"option-btn\" style=\"padding:0\" onclick=\"simulateKey(\\'ArrowDown\\')\">S</button><button class=\"option-btn\" style=\"padding:0\" onclick=\"simulateKey(\\'ArrowRight\\')\">D</button>';";

code = code.replace(/controls\.innerHTML = `[\s\S]*?`;/g, replacement);

fs.writeFileSync('inject_direct_fixed.cjs', code, 'utf8');
console.log('Fixed file generated');
