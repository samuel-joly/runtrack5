const http = require('http');
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
});

server.listen(port, hostname, () => {
    console.log('Hello world !');
});

