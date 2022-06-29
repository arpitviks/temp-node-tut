const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request sent');
    res.end(`<h1>Hello World</h1>`);
})

server.listen(7843, () => {
    console.log('Server listening on a port no. 7843');
})