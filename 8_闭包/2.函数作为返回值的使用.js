//js语法允许函数内部再定义函数
function foo() {
  function bar() {
    console.log("bar");
  }
  return bar;
}

var fn = foo();
fn();

// 例子2
function makeAdder(count) {
  function add(num) {
    return count + num;
  }
  return add;
}
var add5 = makeAdder(5);
console.log(add5(6));
console.log(add5(10));

//高价函数： 把一个函数如果接受另外一个函数作为参数，
//或者该函数会返回另外一个函数作为返回值的函数，就叫高阶函数