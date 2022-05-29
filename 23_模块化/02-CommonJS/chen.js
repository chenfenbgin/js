const name = "chen123";
const age = 23;

function sum(num1, num2) {
  return num1 + num2;
}

// 导出
// 导出方案： 1、module.exports
// module本身也是一个对象，exports也是
module.exports = {
  aaa: "aaaa",
  bbb: "bbb",
  name: name,
  age: age,
  sum: sum,
  // es6增强写法:
  // name, age,sum
};

// 导出方案： 2、exports
