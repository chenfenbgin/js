// 都是同步代码，跟普通函数代码没区别
async function foo() {
  console.log("内部代码执行1");
  console.log("内部代码执行2");
  console.log("内部代码执行3");
}

console.log("script start");
foo();
console.log("script end");

// script start
// 内部代码执行1
// 内部代码执行2
// 内部代码执行3
// script end