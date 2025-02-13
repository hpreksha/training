import http from 'http';
import fs from 'fs';
import url from 'url';


const data = fs.readFileSync('./data.json', 'utf-8');
const studentDataObj = JSON.parse(data);

const PORT = 3000;
const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);
    if(pathname === '/' || pathname === '/overview') {
        res.end("This is Home page.");
    } else if(pathname === '/api') {
        res.writeHead(200, {
            'Content-type':'application/json'
        })
        res.end(data);
    } else if(pathname === '/student') {
        const student = studentDataObj[query.id];
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
            <html>
                <head>
                    <title>Student Information</title>
                </head>
                <body>
                    <h1>Student Information</h1>
                    <p><strong>ID:</strong> ${student.id}</p>
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Age:</strong> ${student.age}</p>
                    <p><strong>Email:</strong> ${student.email}</p>
                    <p><strong>Courses:</strong> ${student.courses.join(', ')}</p>
                </body>
            </html>
            `);
        // console.log(student);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);
})