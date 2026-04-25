const fs = require('fs');

try {
  let content = fs.readFileSync('src/gameContent.ts', 'utf8');
  const rawHTML = fs.readFileSync('raw_grid.html', 'utf8');
  
  const startIdx = content.indexOf('id: "power-grid-manager"');
  if (startIdx !== -1) {
      const htmlIdx = content.indexOf('html: "', startIdx);
      if (htmlIdx !== -1) {
          let quoteIdx = htmlIdx + 7;
          while(quoteIdx < content.length) {
              if (content[quoteIdx] === '"' && content[quoteIdx-1] !== '\\\\') {
                  break;
              }
              quoteIdx++;
          }
          const before = content.substring(0, htmlIdx + 6);
          const after = content.substring(quoteIdx + 1);
          
          const newHTML = JSON.stringify(rawHTML);
          
          fs.writeFileSync('src/gameContent.ts', before + newHTML + after, 'utf8');
          console.log('Successfully injected power grid HTML');
      } else {
        console.log('html: not found');
      }
  } else {
    console.log('id not found');
  }
} catch (err) {
  console.error(err);
}
