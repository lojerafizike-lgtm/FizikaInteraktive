import fs from 'fs';

try {
  let content = fs.readFileSync('src/gameContent.ts', 'utf8');
  const rawHTML = fs.readFileSync('raw_grid.html', 'utf8');
  
  const encodeValue = (str) => Buffer.from(str).toString('base64');
  const base64Str = encodeValue(rawHTML);
  
  const startIdx = content.indexOf('id: "power-grid-manager"');
  if (startIdx !== -1) {
      const htmlIdx = content.indexOf('html: "', startIdx);
      if (htmlIdx !== -1) {
          let quoteIdx = htmlIdx + 7;
          while(quoteIdx < content.length) {
              if (content[quoteIdx] === '"' && content[quoteIdx-1] !== '\\\\') break;
              quoteIdx++;
          }
          const stringified = JSON.stringify(Buffer.from(base64Str, 'base64').toString('utf8'));
          content = content.substring(0, htmlIdx + 6) + stringified + content.substring(quoteIdx + 1);
          fs.writeFileSync('src/gameContent.ts', content, 'utf8');
          console.log('Successfully injected power grid HTML');
      }
  }
} catch (err) {
  console.error(err);
}
