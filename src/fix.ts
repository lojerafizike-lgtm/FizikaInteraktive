import * as fs from 'fs';
const lines = fs.readFileSync('src/gameContent.ts', 'utf8').split('\n');
lines.splice(1952, 370);
fs.writeFileSync('src/gameContent.ts', lines.join('\n'));
