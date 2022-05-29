setTimeout(function () {
  console.log("setTimeout1");
  // 构造函数的代码是不会被加入到任务队列里面的，会被放入到main script，会被直接执行
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");
    });
    console.log("then2");
  });
});

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("then1");
});

setTimeout(function () {
  console.log("setTimeout2");
});
console.log(2);

queueMicrotask(() => {
  console.log("queueMicrotask");
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");
});
