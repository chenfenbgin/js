// 案例1
// function foo() {
//   console.log(this);
// }

// var obj = {
//   name: "chen",
//   foo: foo,
// };
// obj.foo(); //obj对象， js引擎执行上下文绑定的时候会把obj绑定到this上

// 案例2
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this); // obj2
  },
};

var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};
obj2.bar(); // obj2
