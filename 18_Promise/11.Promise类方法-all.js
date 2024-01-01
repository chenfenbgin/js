/*
 * @des: ''
 * @author: fengbin.chen
 */
// 创建多个promise
const p1 = new Promise((resolve, reject) => {
  console.log('1----------');
  resolve(111);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2----------');
    resolve(222);
  }, 2020);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('3----------');
    // reject(333);
    resolve(333);
  }, 3000);
});

// 需求：3个都有结果在调用后面的函数。当然，也可以放’444‘
// all也是返回一个Promise
// 意外：如果我们在拿到所有结果之前，有一个Promise变成了rejected, 那么整个Promise是rejected
Promise.all([p1, p2, p3, "444"])
  .then((res) => {
    console.log(res);
    // 返回的是一个数组，是按照数组中的顺序返回的
  })
  .catch((err) => {
    console.log('err=========', err);
  });
