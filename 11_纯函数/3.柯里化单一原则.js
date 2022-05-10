function add(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z - 2;
  return x + y + z;
}
console.log(add(1, 2, 3));

// 柯里化:单一职责原则
function sum(x) {
  // 业务代码一
  x = x + 2;
  return function (y) {
    // 业务代码二
    y = y * 2;
    return function (z) {
      // 业务代码三
      z = z - 2;
      return x + y + z;
    };
  };
}
console.log(sum(1)(2)(3));
