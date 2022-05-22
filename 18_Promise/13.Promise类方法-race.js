const p1 = new Promise((resolve, reject) => {
  resolve(111);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 2020);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(222); //allSettled是不会来到catch里面的
  }, 3000);
});

// 只要有一个变成fulfilled, 那么就结束。
Promise.race([p1, p2, p3, "aaa"])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
