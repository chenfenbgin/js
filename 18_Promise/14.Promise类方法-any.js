const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 2020);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333); 
  }, 500);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
