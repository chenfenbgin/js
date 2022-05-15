function foo() {
  function bar() {}
  return bar;
}

// foo返回一个函数对象，但是每次都是不同的对象。
var fn1 = foo();
var fn2 = foo();
// 用变量接受，产生了两个函数对象
console.log(fn1 === fn2);
