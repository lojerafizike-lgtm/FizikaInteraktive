import fs from 'fs';
let content = fs.readFileSync('src/constants.ts', 'utf8');

content = content.replace(/teTjera:\s*"([^"]+)"/g, (match, p1) => {
    if (p1.trim() === "" || p1.includes('<span')) {
        return match;
    }
    return `teTjera: "<span style=\\"font-family: 'Nunito', sans-serif;\\">${p1}</span>"`;
});

fs.writeFileSync('src/constants.ts', content);
console.log("Updated constants.ts");
