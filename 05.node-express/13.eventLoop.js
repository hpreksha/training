import fs from 'fs';
import crypto from 'crypto';

const startTime = Date.now();
setImmediate(() => console.log("Immediate() called"));
setTimeout(() => console.log("Timeout() finished"), 10);
process.nextTick(() => {
    console.log("nextTick()1 called");
});

fs.readFile('./demoFile.txt', () => {
    setTimeout(() => console.log("Timeout2() finished"), 0);
    setTimeout(() => console.log("Timeout3() finished"), 20);
    setImmediate(() => console.log("Immediate2() called"));
    process.nextTick(() => {
        console.log("nextTick()2 called");
    });
    console.log("File read completed.");
});
process.nextTick(() => {
    console.log("nextTick()3 called");
});

// Crypto operations with the thread pool
crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log("pwd encrypted in :", Date.now() - startTime);
});
crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log("pwd encrypted in :", Date.now() - startTime);
});
crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log("pwd encrypted in :", Date.now() - startTime);
});
crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log("pwd encrypted in :", Date.now() - startTime);
});
crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512', () => {
    console.log("pwd encrypted in :", Date.now() - startTime);
});

console.log('Top level code');


// Top level code
// nextTick()1 called
// nextTick()3 called
// Immediate() called
// Timeout() finished
// pwd encrypted in : 117
// pwd encrypted in : 119
// File read completed.
// nextTick()2 called
// Immediate2() called
// Timeout2() finished
// Timeout3() finished
// pwd encrypted in : 173
// pwd encrypted in : 174
// pwd encrypted in : 237