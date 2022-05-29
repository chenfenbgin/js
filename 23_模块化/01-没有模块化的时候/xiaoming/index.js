// 我们把它写到函数里面，函数有自己的作用域
// function foo() {
//   var name = "why";
//   var isFlag = false;
// }
// foo();

// 但是上面的写法还要写foo()执行它，自执行函数可以替换
var moduleA = (function () {
  var name = "chen";
  var isFlag = true;

  // 把对象返回出去,使用变量接收
  return {
    name: name,
    isFlag: isFlag,
  };
})()
