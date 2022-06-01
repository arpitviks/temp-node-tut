const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log('Start');
console.log(first);
console.log(second);

writeFileSync(
    './content/result-sync.txt',
    ` Here is the result : ${first} APPENDED WITH ${second}`,
    { flag: 'a' }                               //The flag parameter will append the given text to existing text                                                 
);
console.log('Start the next task');
console.log('Done with the task');