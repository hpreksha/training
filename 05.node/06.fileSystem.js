import fs from 'fs';
import fs1 from 'fs/promises';
// Asynchronously reads the entire contents of a file.
fs.readFile('./demoFile.txt', 'utf-8', (err, data)=> {
    if(err) throw err;
    console.log(data);
})



// Synchronously reads the entire contents of a file.
// utp-8 will not return any buffer, only return text.
// const data = fs.readFileSync('./demoFile.txt', 'utf-8');
// console.log(data);


// fs1.readFile('./demoFile.txt', 'utf-8')
// .then((data)=>console.log(data))
// .catch((err)=> console.log(err));


// const readFile = async () => {
//     try {
//         const data = await fs1.readFile('./demoFile.txt', 'utf8');
//         console.log(data);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// readFile();



// fs.writeFileSync('./demoFile.txt', "This text is added from writeFileSync()");

// const writeFile = async () => {
//     try {
//         await fs1.writeFile('./demoFile.txt', 'Content Added.');
//         console.log('writeFile() called.');
//     }
//     catch(err) {
//         console.log(err);
//     }
// }
// writeFile();


// fs.appendFile('./demoFile.txt', '\nAppended Content', (err) => {
//     if (err) throw err;
//     console.log('Data appended successfully!');
// });

// Hello World
// Data appended successfully!
// writeFile() called.
// Content Added.
// Appended Content
// Content Added.
// Appended Content
// Content Added.
// Appended Content