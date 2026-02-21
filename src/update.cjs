const fs = require('fs');

let content = fs.readFileSync('/app/applet/src/gameContent.ts', 'utf-8');

const html1 = fs.readFileSync('/app/applet/src/html1.html', 'utf-8'); // zhvendosja-quiz
const html2 = fs.readFileSync('/app/applet/src/html2.html', 'utf-8'); // njutoni-levels
const html3 = fs.readFileSync('/app/applet/src/html3.html', 'utf-8'); // energy-modul
const html4 = fs.readFileSync('/app/applet/src/html4.html', 'utf-8'); // kinematika-final
const html5 = fs.readFileSync('/app/applet/src/html5.html', 'utf-8'); // impulsi-momenti

function replaceHtml(id, newHtml) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?html:\\s*)(?:\`[\\s\\S]*?\`|".*?")(\\n\\s*},)`, 'g');
    content = content.replace(regex, `$1` + JSON.stringify(newHtml) + `$2`);
}

replaceHtml('zhvendosja-quiz', html1);
replaceHtml('njutoni-levels', html2);
replaceHtml('energy-modul', html3);
replaceHtml('kinematika-final', html4);
replaceHtml('impulsi-momenti', html5);

fs.writeFileSync('/app/applet/src/gameContent.ts', content);
console.log("Updated gameContent.ts");
