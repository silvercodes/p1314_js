const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 8080;

const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.eot': 'application/vnd.ms-fontobject',
  '.ttf': 'application/x-font-ttf',
};

const server = http.createServer((req, res) => {
    console.log(`Request: ${req.method} ${req.url}`);

    const parsedUrl = url.parse(req.url);

    const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
    let pathname = path.join(__dirname, sanitizePath);

    fs.exists(pathname, function (exist) {
        if(!exist) {
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);

            return;
        }

        if (fs.statSync(pathname).isDirectory()) {
            pathname += '/index.html';
        }

        fs.readFile(pathname, function(err, data){
            if(err){
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
            } else {
                const ext = path.parse(pathname).ext;
                res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
                res.end(data);
            }
        });
    });


});

server.listen(port, host);

console.log(`Server started at ${host}:${port}`);