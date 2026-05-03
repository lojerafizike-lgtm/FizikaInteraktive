const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  if (!fs.existsSync(dir)) return filesList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, filesList);
    } else {
      filesList.push(fullPath);
    }
  }
  return filesList;
}

const localFiles = getFiles('src').map(p => p.replace('src/', ''));
const repoFiles = getFiles('repo_clone/src').map(p => p.replace('repo_clone/src/', ''));

const allFiles = new Set([...localFiles, ...repoFiles]);
const changedFiles = [];
const newInRepo = [];
const onlyInLocal = [];

for (const file of allFiles) {
  const localFP = path.join('src', file);
  const repoFP = path.join('repo_clone/src', file);

  if (!fs.existsSync(localFP)) {
    newInRepo.push(file);
  } else if (!fs.existsSync(repoFP)) {
    onlyInLocal.push(file);
  } else {
    const lCon = fs.readFileSync(localFP, 'utf8');
    const rCon = fs.readFileSync(repoFP, 'utf8');
    if (lCon !== rCon) {
      changedFiles.push(file);
    }
  }
}

console.log("Changed:");
console.log(changedFiles.join('\n'));
console.log("\nNew in Repo:");
console.log(newInRepo.join('\n'));
console.log("\nOnly in Local:");
console.log(onlyInLocal.join('\n'));
