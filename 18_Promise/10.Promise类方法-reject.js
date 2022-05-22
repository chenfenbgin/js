const promise = Promise.reject("reject message");
// 相当于
// const promise2 = new Promise((resolve, reject) => {
//   reject("reject message");
// });

// reject不管传入什么值，都是一样的，
promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err===", err);
  });
