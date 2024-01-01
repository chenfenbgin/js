/*
 * @des: ''
 * @author: fengbin.chen
 */
/*
 * @des: ''
 * @author: fengbin.chen
 */
// 类方法Promise.resolve:
// 将一个对象转成Promise

// 1.传入一个普通的值
const promise = Promise.resolve({
  name: "chen",
}).then((res) => {
  console.log("2. res------", res);
});
console.log('1. wwwwwwwwww')
// 2.传入Promise
const promise3 = Promise.resolve(
  new Promise((resolve, reject) => {
    console.log('promise3...');
    resolve(99999999);
  })
);
promise3.then((res) => {
  console.log("3. res===", res);
});
