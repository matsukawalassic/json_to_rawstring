const fs = require('fs');

console.log('ATTENTION: adjust space(\s) by yourself');
console.log('because the data may be contained at key or value\n');

var pathToJson = null;
const jsonFileName = process.argv[2];
if(jsonFileName === undefined) {
  console.log('Usage: node index.js yourjsonfile.json\n')
} else {
  pathToJson = __dirname + '/' + jsonFileName;
}

console.log(process.argv[2]);

fs.readFile(pathToJson, (error, data) => {
  if(error) {
    throw error;
  }
  let json = JSON.stringify(data.toString().replace(/\r?\n?/g, ''));
  console.log(json);
  let outputFileName = 'output_' + jsonFileName;
  fs.writeFileSync(__dirname + '/output/' + jsonFileName, json);
  
  console.log('success');
  console.log('check: ' + __dirname + '/output/' + jsonFileName);
});