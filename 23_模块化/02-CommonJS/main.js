// 使用另一个模块导出的对象，那么就需要进行导入 require，函数可以跟不同的参数
const chen = require("./chen.js"); //require后面跟路径, 这个require函数会返回一个对象
const { aaa, bbb } = require("./chen.js"); // 返回的是一个对象，可以结构

console.log(chen.aaa);
console.log(aaa);
console.log(bbb);

console.log(chen.name);
console.log(chen.age);
console.log(chen.sum(20, 30));
