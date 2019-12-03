/*
 * @Author: ymt
 * @Date: 2019-12-03 16:04:17
 * @LastEditors: ymt
 * @LastEditTime: 2019-12-03 16:08:44
 * @Description: test path
 */
const fs = require('fs');


module.exports.printPath = function () {
  /**
   * 目录位置
   * 
   * 运行目录 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js
   * 文件位置 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer/test/test.js
   */
  console.log(process.cwd()) // 工作目录 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js
  console.log(__dirname) // 文件目录 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer/test
  console.log(__filename) // 文件绝对地址 =》 /Users/mtmac/mt/code/knowledge/note/了不起的Node.js/file-explorer/test/test.js
}