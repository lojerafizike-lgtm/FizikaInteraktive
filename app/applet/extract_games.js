const fs = require("fs");
const c = fs.readFileSync("src/gameContent.ts", "utf8");

function extractHtml(id) {
    const idIdx = c.indexOf(`id: "${id}"`);
    if(idIdx === -1) return "ID not found";
    const htmlIdx = c.indexOf('html: "', idIdx);
    if(htmlIdx === -1) return "HTML not found";
    let start = htmlIdx + 7;
    let end = start;
    while(end < c.length) {
        if(c[end] === '"' && c[end-1] !== '\\') break;
        end++;
    }
    return c.substring(start, end);
}

try {
    fs.writeFileSync("cap.html", JSON.parse('"' + extractHtml("capacitor-challenge") + '"'));
    fs.writeFileSync("grid.html", JSON.parse('"' + extractHtml("power-grid-manager") + '"'));
    fs.writeFileSync("ampere.html", JSON.parse('"' + extractHtml("amperes-force-defender") + '"'));
} catch(e) {
    console.error("Parse error", e);
}
