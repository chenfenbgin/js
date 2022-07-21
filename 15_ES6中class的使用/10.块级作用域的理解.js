// 1、es5中没有块级作用域
// 快代码block code
// {
//   // 声明一个变量
//   var foo = "foo";
// }
// console.log(foo);//foo

// 2、在es5中只有两个东西会形成作用域
// a. 全局作用域
// b. 函数作用域
function foo2(){
  var foo = "foo";
}

console.log(foo2);

// es6的代码块级作用域
// 对let/const/function/class声明的类型是有效的
{
  let foo = "foo";
  function demo() {
    console.log("demo function");
  }
  class Person {}
}
// console.log(foo);//报错
demo(); //可以打印，不同浏览器有不同的实现，为了兼容以前的代码，让function是没有块级作用域的
// var p = new Person(); //报错

// 注： if/switch/for写出来的语句，作用域，其实是块作用域
if (true) {
  var foo = "foo";
  let bar = "bar";
}
console.log(foo); //foo, 可以访问
// console.log(bar);// 报错
