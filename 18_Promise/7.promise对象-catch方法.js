const promise = new Promise((resolve, reject) => {
  reject("Error");
  // 其实抛出异常，也会执行第二个回调
  // throw new Error("reject error");
});

// 1、当executor抛出异常时，也是会调用错误捕获的回调函数的
promise.then(
  () => {},
  (err) => {
    console.log("err----", err);
  }
);
// 2、通过catch方法传入错误捕获的回调函数，只是另外一种写法
// promise/a+规范
promise.catch((err) => {
  console.log("err===", err);
});

// 3、es6中的语法糖
promise
  .then((res) => {
    return 4444;
  })
  .catch((err) => {
    console.log("es6红=====", err);
  });

  
// 4、catch方法的返回值.catch 返回值也是会被包裹成promise
const promise1 = new Promise((resolve, reject) => {
  reject("2222");
});

promise1
  .then((res) => {
    console.log("res====", res);
  })
  .catch((err) => {
    console.log("err:", err);
    return "catch return value";
  })
  .then((res) => {
    console.log("res result===", res);
  })
  .catch((err) => {
    console.log("err result===", err);
  });
