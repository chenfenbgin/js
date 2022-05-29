async function foo() {
  console.log("foo function start~");
  console.log("中间代码");

  // 异步函数中的异常，会被作为异步函数返回的Promise的reject值的，可以在catch中拿到错误信息
  throw new Error("error Message~");

  console.log("foo function end");
}

foo().catch((err) => {
  console.log('chen', err);
});
console.log("后续还有代码~");
