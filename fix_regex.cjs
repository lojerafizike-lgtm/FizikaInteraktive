const fs = require('fs');
let s = fs.readFileSync('src/gameContent.ts', 'utf8');

// The replacement substituted valid JSON strings ending in </html>"
// The garbage is between </html>" and the next },
s = s.replace(/(<\/html>")[\s\S]*?(?=\s*\},\s*\{)/g, '$1');

// Also for the very last game in the array, it might be followed by } ];
s = s.replace(/(<\/html>")[\s\S]*?(?=\s*\}\s*\];)/g, '$1');

fs.writeFileSync('src/gameContent.ts', s, 'utf8');
