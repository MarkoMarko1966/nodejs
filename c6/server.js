const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('test server');
    console.log(req.url);
    if(req.url == '/wiki/Main_Page'){
        res.end('Ova e Wikipedia main page')
    } else if(req.url == '/about'){
        // let data = (fs.readFile(path.join(__dirname, 'about.html'), 'utf8', (err,data)=> {
        //     if(err) return err;
        //     return data;

        // }));
        // res.end('<html><head><title>About</title></head><body></body><h1>Ova e about strana</h1></html>');
        // res.writeHead(301, { Location: "https://www.w3docs.com/"});
        res.writeHead(200, 'Status OK');
        res.writeHead('Content-type', 'text/plain');
        res.end('<html><head><title>About</title></head><body></body><h1>Ova e about strana</h1></html>');
    }else{
        res.end('Ovaa strana ne postoi');
    }
});

console.log('Server is started...');
server.listen(8080);