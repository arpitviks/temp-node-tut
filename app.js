const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    const stream = fs.createReadStream('./content/big.txt', 'utf8');
    stream.on('open', () => {
        stream.pipe(res);
    });
    stream.on('error', (err) => {
        console.log(err);
    })
})

server.listen(8962);