// 1、递归的方式实现
// 考察三个知识点：闭包、递归、全局变量
function add(n) {
  // 递归的出口
  if (!n) return res;
  res = n
  return function (n) {
    return add(res + n);
  };
}

add(1)(2)(); // 3
console.log('add(1)(2)(): ',add(1)(2)())
add(); // 函数的调用
