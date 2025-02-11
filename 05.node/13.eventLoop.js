import fs from 'fs';

setImmediate(()=> console.log("Immediate() called"));
setTimeout(()=> console.log("Timeout() finished"), 10);

fs.readFile('./demoFile.txt', () => {
    setTimeout(()=> console.log("Timeout2() finished"), 0);
    setTimeout(()=> console.log("Timeout3() finished"), 20);
    setImmediate(()=> console.log("Immediate2() called"));
    console.log("File read completed.");
})

// const data = fs.readFileSync('./demoFile.txt')
console.log('Top level code');