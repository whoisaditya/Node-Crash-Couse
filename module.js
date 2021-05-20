//const xyz = require('./people');

//console.log(xyz);  will return null if there's no manual exports

// you can't log 'people' directly from this file

//This is good when you have to export multiple files
const {people, ages} = require('./people');

console.log(people, ages); 

const os = require('os');

//console.log(os); this can be used for info on the operating system, examples below

console.log(os.platform(), os.homedir());