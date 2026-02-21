const fs = require('fs');

let content = fs.readFileSync('/app/applet/src/gameContent.ts', 'utf-8');

const html1 = fs.readFileSync('/app/applet/src/html1.html', 'utf-8'); // zhvendosja-quiz

function replaceHtml(id, newHtml) {
    const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?html:\\s*)(?:\`[\\s\\S]*?\`|".*?")(\\n\\s*},)`, 'g');
    content = content.replace(regex, `$1` + JSON.stringify(newHtml) + `$2`);
}

replaceHtml('zhvendosja-quiz', html1);

fs.writeFileSync('/app/applet/src/gameContent.ts', content);
console.log("Updated gameContent.ts with zhvendosja-quiz");
