const fs = require('fs');

const ohmsLawHTML = fs.readFileSync('raw_ohms.html', 'utf8');
const capacitorHTML = fs.readFileSync('raw_capacitors.html', 'utf8');
const powerGridHTML = fs.readFileSync('raw_grid.html', 'utf8');
const ampereHTML = fs.readFileSync('raw_ampere.html', 'utf8');

let content = fs.readFileSync('src/gameContent.ts', 'utf8');

const encodeValue = (str) => {
    return Buffer.from(str).toString('base64');
};

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

injectBase64('ohms-law-challenge', encodeValue(ohmsLawHTML));
injectBase64('capacitor-challenge', encodeValue(capacitorHTML));
injectBase64('power-grid-manager', encodeValue(powerGridHTML));
injectBase64('amperes-force-defender', encodeValue(ampereHTML));

fs.writeFileSync('src/gameContent.ts', content, 'utf8');
console.log('Update of all 4 games successful!');
