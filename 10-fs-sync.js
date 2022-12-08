const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

//creating a new file
writeFileSync('./content/result-sync.txt',
    `Here is the result : ${first} , ${second}`,
    { flag: 'a' }
);
console.log('end');
console.log('end of operation');
