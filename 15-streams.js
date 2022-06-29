const { createReadStream } = require('fs');
const http = require('http');


//default buffer size = 64kb
//highWaterMark = control size
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 400,            //handles the size of the buffer, to understand try to print it without providing the encoding
    encoding: 'utf8'
});

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
})

