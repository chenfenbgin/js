// const promise = new Promise((resolve, reject) => {});
// promise.then(
//   (res) => {},
//   (err) => {}
// );

// 完全等价于下面的写法
// 给promise划分状态： pedding
// Promise状态一旦确定下来，那么就是不可更改的（锁定）
new Promise((resolve, reject) => {
  console.log("----------------直接执行"); // promise处于pedding状态
  resolve(res);
  reject(res); //这行代码是没有意义的，已经锁定了
})
  .then((res) => {
    // fulfiled状态（已固定）
    console.log("res成功");
  })
  .catch((err) => {
    // rejected状态（已拒绝）
    console.log("res失败");
  });
