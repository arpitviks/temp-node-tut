//Modules

const names = require('./4-names.js');
const sayHi = require('./3-utils.js');
const data = require('./5-Alternative.js');

console.log(data);

require('./6-mindGrenade.js');          //this line will call the addition funtion in the js file.

sayHi(names.Mark);
sayHi(names.Arpit);
