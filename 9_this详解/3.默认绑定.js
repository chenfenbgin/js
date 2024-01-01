/*
 * @des: ''
 * @author: fengbin.chen
 */
//默认绑定：独立函数调用
// 案例1
// function foo() {
//   console.log(this); //window
// }

// foo();

//案例2
function foo1() {
  console.log(this); //window
}
function foo2() {
  console.log(this); //window
  foo1();
}
function foo3() {
  console.log(this); //window
  foo2();
}

foo3();

// 案例3
// var obj = {
//   name: "chen",
//   foo: function () {
//     console.log(this);
//   },
// };
// var bar = obj.foo;
// bar(); // window

// 案例4
function foo() {
  function bar() {
    console.log(this);
  }
  return bar;
}
var fn = foo();
fn(); // window
