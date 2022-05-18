var name = "chen";
var age = 23;

var obj = {
  name,
  age,

  foo: function () {},
  bar() {},
  // 计算属性名
  [name + 123]: 'hahaha'
};
console.log(obj);
// {
//   name: 'chen',
//   age: 23,
//   foo: [Function: foo],
//   bar: [Function: bar],
//   chen123: 'hahaha'
// }