import os from 'os';
import path from 'path';
import { URL } from 'url';

// Simplified controller
export const getSystemInfo = (req, res) => {
  while(1) {
    console.log('Infinite loop');
  }
  // Get system info (os module)
  const osInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    uptime: os.uptime(),
    userInfo: os.userInfo(),
  };

  // File path info (path module)
  const exampleFilePath = './example.txt';
  const fileInfo = {
    fileName: path.basename(exampleFilePath),
    dirName: path.dirname(exampleFilePath),
    extName: path.extname(exampleFilePath),
    filePath: path.resolve(exampleFilePath),
  };

  // URL parsing (url module)
  const parsedUrl = new URL('https://www.example.com/path?name=JohnDoe');
  const urlInfo = {
    host: parsedUrl.host,              // 'www.example.com'
    pathname: parsedUrl.pathname,      // '/path'
    searchParams: parsedUrl.search,    // '?name=JohnDoe'
  };

  // Return combined info
  res.json({ osInfo, fileInfo, urlInfo });
};
