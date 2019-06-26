const fs = require('fs');

const bufferStringJSON = fs.readFileSync('data.json').toString();
const data = JSON.parse(bufferStringJSON);
console.log(data);
data.name = 'Ilya';
data.age = 29;

const newData = JSON.stringify(data);
fs.writeFileSync('data.json',newData);

