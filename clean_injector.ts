import * as fs from "fs";

try {
  let content = fs.readFileSync("./src/gameContent.ts", "utf8");
  const rawHTML = fs.readFileSync("./raw_grid.html", "utf8");
  
  const startId = "id: \\"power-grid-manager\\"";
  const startIdx = content.indexOf(startId);
  
  if (startIdx !== -1) {
      const htmlIdx = content.indexOf("html: \\"", startIdx);
      if (htmlIdx !== -1) {
          let quoteIdx = htmlIdx + 7;
          while(quoteIdx < content.length) {
              if (content[quoteIdx] === "\\"" && content[quoteIdx-1] !== "\\\\") {
                  break;
              }
              quoteIdx++;
          }
          const beforeStr = content.substring(0, htmlIdx + 6);
          const afterStr = content.substring(quoteIdx + 1);
          
          const newHTML = JSON.stringify(rawHTML);
          
          fs.writeFileSync("./src/gameContent.ts", beforeStr + newHTML + afterStr, "utf8");
          console.log("SUCCESS");
      }
  }
} catch (err) {
  console.log("ERROR");
  console.log(err);
}
