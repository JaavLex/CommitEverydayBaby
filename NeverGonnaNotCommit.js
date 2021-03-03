const { promises: fs, read } = require('fs');
const readme = require('./readme');

function generateRickRoll() {
  const readmeRow = readme.split('\n');
  
  const Index = findIndex(readmeRow);
  readmeRow[Index] = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return readmeRow.join('\n');
}

const findIndex = (rows) =>
  rows.findIndex((r) => Boolean(r.match(/<#num_commits>/i)));

const updateRickRoll = (text) =>
  fs.writeFile('./README.md', text, (e) => console.log(text));

function main() {
  const newREADME = generateRickRoll();
  console.log(newREADME);
  updateRickRoll(newREADME);
}
main();
