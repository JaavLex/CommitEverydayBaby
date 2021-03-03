const { promises: fs, read } = require('fs');
const readme = require('./readme');

function makeRandString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

function generateRickRoll() {
  const readmeRow = readme.split('\n');
  
  const Index = findIndex(readmeRow);
  readmeRow[Index] = `https://www.youtube.com/watch?v=dQw4w9WgXcQ&{makeRandString(6)}`;

  return readmeRow.join('\n');
}

const findIndex = (rows) =>
  rows.findIndex((r) => Boolean(r.match(/<#rick_roll>/i)));

const updateRickRoll = (text) =>
  fs.writeFile('./README.md', text, (e) => console.log(text));

function main() {
  const newREADME = generateRickRoll();
  console.log(newREADME);
  updateRickRoll(newREADME);
}
main();
