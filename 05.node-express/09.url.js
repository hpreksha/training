import url from 'url';

const urlStr = new URL('https://example.com:8080');

const urlObj = new URL(urlStr);
// console.log(urlObj);

// URL {
//     href: 'https://example.com:8080/',
//     origin: 'https://example.com:8080',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'example.com:8080',
//     hostname: 'example.com',
//     port: '8080',
//     pathname: '/',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: ''
//   }


// console.log(url.format(urlObj));
// https://example.com:8080/


// console.log(import.meta.url);
// file:///Users/username/Documents/learn-nodejs/05.node/09.url.js

// console.log(url.fileURLToPath(import.meta.url));
// C:\Users\PREKSHA\Desktop\t\training\05.node\09.url.js


// console.log(urlObj.search);


const params = new URLSearchParams(urlObj.search);
console.log(params);
params.append('key', 'value');
console.log(params);