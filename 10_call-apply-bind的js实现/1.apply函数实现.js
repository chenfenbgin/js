/*
 * @des: ''
 * @author: fengbin.chen
 */
// 自己实现的apply函数
Function.prototype.nsapply = function (thisArg, args) {
  // 1.获取到要执行的函数
  console.log('参数： ', thisArg, args);
  console.log('真实需要调用的this===', this); // 这里是 sum()
  var fn = this;
  // 2.处理绑定的thisArg
  thisArg = thisArg ? Object(thisArg) : window;
  // 3.执行函数
  thisArg.fn = fn;
  //判断第二个参数是否有值： 写法1
  args = args ? args : [];
  // 写法2
  // args = args || []
  var result = thisArg.fn(...args);
  delete thisArg.fn;

  return result;
};

function sum(num1, num2) {
  console.log("sum函数被调用", num1, num2);
  return num1 + num2;
}

// 系统实现的apply
// var result = sum.apply("abc", [10, 20, 30, 40, 50]);
// console.log('result...', result);

// 自己实现的apply调用
var result = sum.nsapply("abc", [10, 20, 30, 40]);
console.log(result);

// 最后打印：
// sum函数被调用 10 20
// 30
