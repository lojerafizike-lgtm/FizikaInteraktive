const fs = require('fs');
console.log('--- CAPACITOR ---');
console.log(fs.readFileSync('cap.html', 'utf8').substring(0, 1500));
console.log('\n--- GRID ---');
console.log(fs.readFileSync('grid.html', 'utf8').substring(0, 1500));
console.log('\n--- AMPERE ---');
console.log(fs.readFileSync('ampere.html', 'utf8').substring(0, 1500));
