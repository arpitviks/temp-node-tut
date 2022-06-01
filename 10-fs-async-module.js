const { readFile, writeFile } = require('fs');

console.log('Start');
//name of the fuction should be readFile and writeFile only
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result;
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
            ` Hello the new text is ${first} && ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Done with the task');
                console.log(result);
            }
        )
    })

});
console.log('Start the next task');