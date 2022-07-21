const p1 = new Promise((resolve, reject) => {
  console.log('1----');
  resolve(111);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2----');
    resolve(222);
    }, 2020);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('3----');
    reject(333); //allSettled是不会来到catch里面的
  }, 3000);
});

Promise.allSettled([p1, p2, p3, "aaa"])
  .then((res) => {
    console.log('res===', res);
  })
  .catch((err) => {
    console.log('err---', err);
  });
