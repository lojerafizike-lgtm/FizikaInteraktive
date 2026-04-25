const fs = require('fs');
let s = fs.readFileSync('src/gameContent.ts', 'utf8');

function removeCorrupted(idToRemove, nextId) {
    let idx1 = s.indexOf(`id: "${idToRemove}"`);
    let idx2 = s.indexOf(`id: "${nextId}"`);
    if (idx1 > -1 && idx2 > -1) {
        // find the start of the object for idx1
        let startObj = s.lastIndexOf('{', idx1);
        // find the start of the object for idx2
        let startNext = s.lastIndexOf('{', idx2);
        
        s = s.substring(0, startObj) + s.substring(startNext);
    }
}

removeCorrupted('elektriciteti', 'gjej-shkencetarin');
removeCorrupted('resistance-guard', 'efield-explorer');
removeCorrupted('power-grid-master', 'voltage-stabilizer');
removeCorrupted('current-master', 'capacitor-master');
removeCorrupted('mjeshtri-tingullit', 'sfida-matures');
removeCorrupted('sti-game', 'lojee-game');
removeCorrupted('smartt-game', 'electric-field-master');
removeCorrupted('potential-master', 'induction-master');
removeCorrupted('flux-master', 'lorentz-force-lab');
removeCorrupted('amperes-force-defender', 'magnetic-induction-master');
removeCorrupted('ohms-law-challenge', 'power-grid-manager');
removeCorrupted('capacitor-challenge', 'sistemi-diellor-3d');

fs.writeFileSync('src/gameContent.ts', s, 'utf8');
