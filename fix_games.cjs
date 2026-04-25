const fs = require('fs');

function fixGame(id) {
    let content = fs.readFileSync('src/gameContent.ts', 'utf8');
    
    const idIndex = content.indexOf(`id: "${id}"`);
    if (idIndex === -1) {
        console.error(`Game with id ${id} not found.`);
        return;
    }
    
    const htmlIndex = content.indexOf('html:', idIndex);
    if (htmlIndex === -1) {
        console.error(`html property not found for game ${id}.`);
        return;
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
        console.error(`Could not find start of html string for game ${id}.`);
        return;
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
        console.error(`Could not find end of html string for game ${id}.`);
        return;
    }
    
    // Extract the HTML content, unescape the quoteChar
    let htmlContent = content.substring(stringStartIndex + 1, stringEndIndex);
    if (quoteChar === '"') {
        htmlContent = htmlContent.replace(/\\"/g, '"');
    } else if (quoteChar === '`') {
        htmlContent = htmlContent.replace(/\\`/g, '`');
    }
    
    // Now escape for backticks
    const escapedNewHtml = htmlContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    
    const newContent = content.substring(0, stringStartIndex) + '`' + escapedNewHtml + '`' + content.substring(stringEndIndex + 1);
    
    fs.writeFileSync('src/gameContent.ts', newContent, 'utf8');
    console.log(`Fixed game ${id}.`);
}

const games = [
    'impulsi-momenti',
    'energy-modul',
    'zhvendosja-quiz',
    'njutoni-levels',
    'energy-battle-formula',
    'dinamika-adventure',
    'sfida-matures',
    'kinematika-final'
];

games.forEach(fixGame);
