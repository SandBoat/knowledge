/*
 * @Author: ymt
 * @Date: 2019-12-03 15:54:22
 * @LastEditors: ymt
 * @LastEditTime: 2019-12-03 21:44:32
 * @Description: file content
 */
const util = require('util');
const fs = require('fs');

const {
  printPath
} = require('./test/test');

console.log('node start');

// /**
//  * 目录位置
//  * 
//  * 运行目录 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js
//  * 文件位置 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer/index.js
//  */
// console.log(process.cwd()) // 工作目录 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js
// console.log(__dirname) // 文件目录 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer
// console.log(__filename) // 文件绝对地址 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer/index.js
// printPath();


// const stat = util.promisify(fs.stat);
// const readdir = util.promisify(fs.readdir);

// const outputFile = function (dirname, filename, level = 1) {
//   const filePath = dirname + '/' + filename;

//   return stat(filePath).then(stats => {
//     if (stats.isDirectory()) {
//       return readdir(filePath).then(files => {
//         return Promise.all(files.map(file => outputFile(filePath, file, level + 1)))
//       });
//     } else {
//       return Promise.resolve([filename])
//     }
//   });
// }

const stat = util.promisify(fs.stat);
const readdir = util.promisify(fs.readdir);

const outputFile = function (dirname, filename, level = 1) {
  const filePath = dirname + '/' + filename;
  return stat(filePath).then(stats =>
    stats.isDirectory() ?
    readdir(filePath).then(files => Promise.all(files.map(file => outputFile(filePath, file, level + 1)))) :
    Promise.resolve([filename])
  );
}


outputFile('/Users/mtmac/mt/code/knowledge/note/了不起的Node.js/', 'file-explorer').then(res => {
  console.log(res);
});

console.log('node end');