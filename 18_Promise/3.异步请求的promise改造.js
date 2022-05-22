// request.js
function requestData(url) {
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "chen") {
        let names = ["a", "b", "c"];
        resolve(names);
      } else {
        // 失败
        let errMessage = "请求失败";
        reject(errMessage);
      }
    }, 3000);
  });
}

// requestData(
//   "chen",
//   () => {
//     console.log("成功他妈");
//   },
//   () => {
//     console.log("失败他爹");
//   }
// );

const promise = requestData("chen");
promise.then((res) => {
  console.log("成功 " + res);
});
promise.catch(() => {
  console.log("失败");
});
// 开发中一般直接写成这样
promise
  .then(() => {
    console.log("成功");
  })
  .catch(() => {
    console.log("失败");
  });
// 其实then里面也是可以放两个函数的， 第一是成功的回调，第二个是执行reject是的回调
promise.then(
  (res) => {
    console.log('成功');
  },
  (err) => {}
);
