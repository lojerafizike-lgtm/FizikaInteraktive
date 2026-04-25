const fs = require('fs');

function updateGame(id, newHtml) {
    let content = fs.readFileSync('src/gameContent.ts', 'utf8');
    
    // Find the start of the object with the given id
    const idIndex = content.indexOf(`id: "${id}"`);
    if (idIndex === -1) {
        console.error(`Game with id ${id} not found.`);
        return;
    }
    
    // Find the 'html:' property after the id
    const htmlIndex = content.indexOf('html:', idIndex);
    if (htmlIndex === -1) {
        console.error(`html property not found for game ${id}.`);
        return;
    }
    
    // Find the start of the string (either ` or ")
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
    
    // Find the end of the string
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
    
    // Replace the string
    const escapedNewHtml = newHtml.replace(/\\/g, '\\\\').replace(new RegExp(quoteChar, 'g'), '\\' + quoteChar);
    const newContent = content.substring(0, stringStartIndex + 1) + escapedNewHtml + content.substring(stringEndIndex);
    
    fs.writeFileSync('src/gameContent.ts', newContent, 'utf8');
    console.log(`Updated game ${id}.`);
}

module.exports = { updateGame };
