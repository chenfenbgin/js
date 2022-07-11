function foo(a, b, c, d) {
  return a + b + c + d;
}
let f = foo(1, 2, 3, 4);
console.log(f); // 10

// 柯里化过程
// 方式一：
function a(a) {
  return function b(b) {
    return function c(c) {
      return function d(d) {
        return a + b + c + d;
      };
    };
  };
}
let a1 = a(1)(2)(3)(4);
console.log(a1); //10

// 简化上面的代码，
var bar = (a) => (b) => (c) => (d) => {
  return a + b + c + d;
};
console.log(bar(10)(20)(30)(40));

var bar2 = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        a + b + c + d;
      };
    };
  };
};
console.log(bar(10)(20)(30)(40));