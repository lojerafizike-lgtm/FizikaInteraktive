const fs = require('fs');

const id = 'kinematika-final';
const newHtml = fs.readFileSync('kinematika_final.html', 'utf8');
let content = fs.readFileSync('src/gameContent.ts', 'utf8');

const idIndex = content.indexOf(`id: "${id}"`);
if (idIndex === -1) {
    console.error('Game not found.');
    process.exit(1);
}

const htmlIndex = content.indexOf('html:', idIndex);
if (htmlIndex === -1) {
    console.error('html property not found.');
    process.exit(1);
}

let quoteChar = '';
let stringStartIndex = -1;
for (let i = htmlIndex + 5; i < content.length; i++) {
    if (content[i] === '`' || content[i] === '"') {
        quoteChar = content[i];
        stringStartIndex = i;
        break;
    }
}

if (stringStartIndex === -1) {
    console.error('Could not find start of html string.');
    process.exit(1);
}

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

if (stringEndIndex === -1) {
    console.error('Could not find end of html string.');
    process.exit(1);
}

const escapedNewHtml = newHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
const newContent = content.substring(0, stringStartIndex) + '`' + escapedNewHtml + '`' + content.substring(stringEndIndex + 1);

fs.writeFileSync('src/gameContent.ts', newContent, 'utf8');
console.log('Updated game ' + id);
