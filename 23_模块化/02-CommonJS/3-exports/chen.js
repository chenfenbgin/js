const name = "chen123";
const age = 23;

function sum(num1, num2) {
  return num1 + num2;
}

// exports源码里面是这么实现的
// module.exports = {};
// exports = module.exports;

// 第二种导出方式
exports.age = age;
exports.name = name;
exports.sum = sum;
// 最终导出的一定是module.exports
// 下面的写法是无法导出的
// exports = {
//   name: name,
//   age: age,
// };