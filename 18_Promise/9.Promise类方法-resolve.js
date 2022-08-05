// 类方法Promise.resolve:
// 将一个对象转成Promise

// 1.传入一个普通的值
const promise = Promise.resolve({
  name: "chen",
}).then((res) => {
  console.log("res------", res);
});
console.log('wwwwwwwwww')
// 2.传入Promise
const promise3 = Promise.resolve(
  new Promise((resolve, reject) => {
    resolve(99999999);
  })
);
promise3.then((res) => {
  console.log("res===", res);
});
