/*
 * @Author: ymt
 * @Date: 2019-12-03 15:54:22
 * @LastEditors: ymt
 * @LastEditTime: 2019-12-03 16:07:52
 * @Description: file content
 */
const fs = require('fs');
const {
  printPath
} = require('./test/test');

console.log('node start');

/**
 * 目录位置
 * 
 * 运行目录 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js
 * 文件位置 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer/index.js
 */
console.log(process.cwd()) // 工作目录 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js
console.log(__dirname) // 文件目录 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer
console.log(__filename) // 文件绝对地址 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer/index.js
printPath();




console.log('node end');