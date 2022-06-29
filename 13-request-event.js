const http = require('http');

const server = http.createServer();

// Using Event Emitter API
server.on('request', (req, res) => {
    res.end('WELCOME!!!!!')
});

server.listen(8962);