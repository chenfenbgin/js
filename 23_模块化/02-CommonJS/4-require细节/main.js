// 情况一：核心模块， node模块path
const path = require("path");
path.resolve();

// 情况二：路径。如果是文件夹，会使用文件夹/index.js
require("./abc");

// 情况三：不是核心模块也不是路径
const chen = require("chen"); // 查找的是main.js所在目录下面的node_modules
// console.log(module.paths);
