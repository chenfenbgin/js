const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('1-----');
    resolve(111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2------');
    resolve(222);
  }, 2020);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('3------');
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
