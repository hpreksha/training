import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const obj = [
    { id: 1, name: 'John Doe', age: 32 },
    { id: 2, name: 'Jane Doe', age: 28 }
];

const createObj = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
        console.log(body);
    });
    req.on('end', () => {
        const newObj = JSON.parse(body);
        console.log('Parsed new object:', newObj);
        obj.push(newObj);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(newObj));
        console.log(obj);
        res.end();
    });
};

const server = createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);  // Log method and URL
    
    res.setHeader('Content-Type', 'application/json'); // Set default content type
    if (req.url === '/api/obj' && req.method === 'GET') {
        res.statusCode = 200;
        res.write(JSON.stringify(obj));res.end();
    }
    else if (req.url.match(/\/api\/obj\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const o = obj.find((o) => o.id === parseInt(id));
        res.statusCode = o ? 200 : 404;
        res.write(o ? JSON.stringify(o) : JSON.stringify({ message: 'Object not found' }));
        res.end();
    }
    else if (req.url === '/api/objs' && req.method === 'POST') {
        console.log('Handling POST request for /api/objs');  // Log the POST request handling
        createObj(req, res);  // Handle POST request
    }
    else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'Not Found' }));
        res.end();
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
