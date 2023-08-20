/*
 * @des: ''
 * @author: fengbin.chen
 */
setTimeout(function () {
  console.log("5.......setTimeout1");
  // 构造函数的代码是不会被加入到任务队列里面的，会被放入到main script，会被直接执行
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("7......then4");
    });
    console.log("6.......then2");
  });
});

new Promise(function (resolve) {
  console.log("1. promise1");
  resolve();
}).then(function () {
  console.log("3......then1");
});

setTimeout(function () {
  console.log("8.......setTimeout2");
});
console.log('2........');

queueMicrotask(() => {
  console.log("queueMicrotask");
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("4.......then3");
});
