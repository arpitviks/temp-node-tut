const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home Page</h1>')
    }
    if (req.url === '/about') {
        // blocking code: Untill ad unless this block of code doesn't get executed n0 other requests will be served.
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('<h1>About Page</h1>')
    }
})

server.listen(8976, () => {
    console.log('Server listening on port : ' + 8976)
})

