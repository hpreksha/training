import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url); // current file path
const __dirname = path.dirname(__filename); // current directory path

const server = http.createServer(async (req, res) => {
    // console.log(__dirname, __filename);
    // console.log(req.url, req.method);


    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/' && req.method === 'GET') {
        res.write('<h1>Home Page</h1>');
        let filePath = path.join(__dirname, req.url === '/' ? '00.index.js' : req.url);
        await fs.readFile(filePath)
            .then(data => {
                res.write('File data is read successfully<br>');
                res.write(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    else if(req.url === '/about') {
        res.write('<h1>About Page</h1>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Page Not Found</h1>');
    }
    res.end();
    return;
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});