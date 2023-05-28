function fn(a, c) {
  console.log("a", a); // a [Function: a]
  var a = 123;
  console.log("a", a); // a 123
  console.log("c", c); // c [Function: c]
  function a() {}
  if (false) {
    var d = 678;
  }
  console.log("d", d); // d undefined
  console.log("b ", b); // b  undefined
  var b = function () {};
  console.log("b ", b); // b  [Function: b]
  function c() {}
  console.log("c ", c); // c  [Function: c]
}

fn(1, 2);

// 分析：
/**
 * 1、创建了AO对象
 * 2、找形参和变量的声明，作为AO对象的属性名，值是undefined，实参和形参相统一
 * 3、找函数声明，会覆盖变量的声明
 */
AO: {
    a: undefined 1 function a() {}
    c: undefined 2 function c() {}
    d: undefined
    b: undefined
}