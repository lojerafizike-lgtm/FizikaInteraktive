const fs = require('fs');

let content = fs.readFileSync('/app/applet/src/gameContent.ts', 'utf8');

const encodeValue = (str) => {
    return Buffer.from(str).toString('base64');
};

const injectBase64 = (id, htmlFile) => {
    const rawHTML = fs.readFileSync('/app/applet/' + htmlFile, 'utf8');
    const base64Str = encodeValue(rawHTML);
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

injectBase64('ohms-law-challenge', 'raw_ohms.html');
injectBase64('capacitor-challenge', 'raw_capacitors.html');
injectBase64('power-grid-manager', 'raw_grid.html');
injectBase64('amperes-force-defender', 'raw_ampere.html');

fs.writeFileSync('/app/applet/src/gameContent.ts', content, 'utf8');
console.log('Safe update of Pro Games successful!');
