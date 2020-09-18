const http = require('http');
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;


function setFile(fileName, res) {
    fs.readFile(fileName, null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
}

function mainController(url){
     if(url === "/") {
            setFile('list-users.html',res);
        }
        else if (url === '/listusers/' || url == '/listusers') {
            setFile('list-users.html', res);
        }
        else if(url === '/adduser/') {
            setFile('add-user.html', res);
        }
        else {
            setFile('404.html', res);
        }
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    var url = req.url;

   mainController(url);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

