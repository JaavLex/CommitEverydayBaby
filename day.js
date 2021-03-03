const { promises: fs, read } = require('fs');
const readme = require('./readme');

function generateNewREADME() {
  const readmeRow = readme.split('\n');

  // * DBNW = Day Before New Year
  const Index = findIndex(readmeRow);
  readmeRow[Index] = numCommits();

  return readmeRow.join('\n');
}

function numCommits() {
  const curCommits = 0;
  
  fs.readFile('./commits.txt', 'utf8', function(err, data) {
    if (err) throw err;
    curCommits = data;
  });
  
  curCommits++;
  
  fs.writeFile('./commits.txt', curCommits, (e) => console.log(curCommits));
  
  return curCommits;
}

const findIndex = (rows) =>
  rows.findIndex((r) => Boolean(r.match(/<#num_commits>/i)));

const updateREADMEFile = (text) =>
  fs.writeFile('./README.md', text, (e) => console.log(text));

function main() {
  const newREADME = generateNewREADME();
  console.log(newREADME);
  updateREADMEFile(newREADME);
}
main();
