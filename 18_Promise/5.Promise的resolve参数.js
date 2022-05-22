/**
 * resolve(参数)
 *    1> 普通的值或者对象 pedding -> fulfiled
 *    2> 传入一个Promise, 那么当前的Promise的状态会有传入的Promise来决定
 *       相当于状态进行移交
 *
 *    3> 传入一个对象，并且这个对象有实现then方法，那么也会执行该then方法，并且有该then方法决定后续状态
 */

// 2.传入一个Promise
// new Promise((resolve, reject) => {
//   // resolve({ name: "chen" }); //普通的对象
//   resolve(
//     new Promise((resolve, reject) => {
//       // 当传入的是Promise的时候，需要先调用这个promise
//       // resolve('aaaa'); //来到下面then中的res
//       reject("bbb"); //来到下面then中的err
//     })
//   );
// }).then(
//   (res) => {
//     console.log("res===", res);
//   },
//   (err) => {
//     console.log("err", err);
//   }
// );

// 3.传入一个对象
new Promise((resolve, reject) => {
  const obj = {
    then(resolve, reject) {
      resolve("resolve message");
    },
  };
  resolve(obj);
}).then(
  (res) => {
    console.log("res===", res);
  },
  (err) => {
    console.log("err", err);
  }
);
