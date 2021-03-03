const { promises: fs, read } = require('fs');
const readme = require('./readme');

function generateNewREADME() {
  const readmeRow = readme.split('\n');

  // * DBNW = Day Before New Year
  const DBNWIndex = findIndex(readmeRow);
  readmeRow[DBNWIndex] = numCommits();

  return readmeRow.join('\n');
}

function numCommits() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const nextYearDate = new Date(String(nextYear));

  const timeUntilNewYear = nextYearDate - now;
  const dayUntilNewYear = Math.round(timeUntilNewYear / msInOneDay);

  return `**${dayUntilNewYear} day before ${nextYear} ⏱**`;
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
