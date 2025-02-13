import path from 'path';
import url from 'url';
const filePath = './demoFile.txt'

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));
// demoFile.txt
// .
// .txt
// {
//   root: '',
//   dir: '.',
//   base: 'demoFile.txt',
//   ext: '.txt',
//   name: 'demoFile'
// }

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
console.log(__filename, __dirname);
// /home/preksha/Desktop/training/05.node/07.pathName.js /home/preksha/Desktop/training/05.node



const fp2 = path.join(__dirname, '', 'demoFile.txt');
const fp3 = path.resolve(__dirname, '', 'demoFile.txt');
console.log(fp2, fp3);
// /home/preksha/Desktop/training/05.node/demoFile.txt /home/preksha/Desktop/training/05.node/demoFile.txt