console.log("main.js代码开始运行");

// foo什么时候开始加载运行。require
require("./foo.js");
require("./foo.js");
const obj = require("./foo.js");
console.log(obj.name);

console.log("main.js代码结束");

