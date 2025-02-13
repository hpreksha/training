import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT || 2000;
const __filename = url.fileURLToPath(import.meta.url); // current file path
const __dirname = path.dirname(__filename); // current directory path

// Array of objects for the API
const obj = [
    { id: 1, name: 'John Doe', age: 32 },
    { id: 2, name: 'Jane Doe', age: 28 }
];

// Function to handle POST request to create new object
const createObj = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newObj = JSON.parse(body);
        obj.push(newObj);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(newObj));
        res.end();
    });
};

// Create the server
const server = http.createServer(async (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'application/json'); // Default to JSON for API responses
    
    if (req.url === '/' && req.method === 'GET') {
        // Serve the home page with a file read
        res.write('<h1>Home Page</h1>');
        let filePath = path.join(__dirname, '00.index.js');
        try {
            const data = await fs.readFile(filePath);
            res.write('File data is read successfully<br>');
            res.write(data);
        } catch (err) {
            console.log(err);
            res.write('Error reading file');
        }
    } else if (req.url === '/about') {
        // Serve About page
        res.write('<h1>About Page</h1>');
    } else if (req.url === '/api/obj' && req.method === 'GET') {
        // Get all objects in the API
        res.statusCode = 200;
        res.write(JSON.stringify(obj));
        res.end();
    } else if (req.url.match(/\/api\/obj\/([0-9]+)/) && req.method === 'GET') {
        // Get a specific object by id
        const id = req.url.split('/')[3];
        const foundObj = obj.find((o) => o.id === parseInt(id));
        res.statusCode = foundObj ? 200 : 404;
        res.write(foundObj ? JSON.stringify(foundObj) : JSON.stringify({ message: 'Object not found' }));
        res.end();
    } else if (req.url === '/api/objs' && req.method === 'POST') {
        // Handle POST request for adding a new object
        createObj(req, res);
    } else {
        // Handle 404
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'Not Found' }));
        res.end();
    }

    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
