// 4 types of streams :
// 1. Readable (http, fs)
// 2. Writable (http, fs)
// 3. Duplex (net web socket)
// 4. Transform (zlib Gzip creation)


import fs from 'fs';
import server from 'http';

const s = server.createServer();

s.on('request', (req, res)=> {
    // fs.readFile('./demoFile.txt', (err, data)=> {
    //     if (err) console.log(err);
    //     res.end(data);
    // })

    // const readable = fs.createReadStream('./demoFile.txt');
    // readable.on('data', chunk => {
    //     console.log(1);
    //     res.write(chunk);
    //     readable.on('end', ()=> {
    //         res.end();
    //     })
    // })
    
    const readable = fs.createReadStream('./demoFile.txt');
    readable.pipe(res);
})

s.listen(8000, ()=> {
    console.log("Server listning on port 8000.")
})