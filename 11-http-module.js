const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Welcome to the about page');
    } else {
        res.end(`
    <h1>Oooppss!!!</>
    <p>You are on the wrong page</p>
    <a href='/'>Back Home</a>
    `);
    }

})


server.listen(8934);