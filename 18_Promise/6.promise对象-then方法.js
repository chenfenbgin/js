// Promise有哪些对象方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype)); // constructor  then catch

const promise = new Promise(function (resolve, reject) {
  resolve("hahahha");
});

// 1.同一个Promise可以被多次调用then方法
// 当我们的resolve被回调是，所有的then方法都会被回调
promise.then((res) => {
  console.log("res1===", res);
});
promise.then((res) => {
  console.log("res2===", res);
  console.log('---------------');
});

// 2.then方法传入的'回调函数'是可以有返回值的
//     then方法本身也是有返回值的，他的返回值是Promise
//     1> 如果我们返回的是一个普通的值(数值/字符串/普通对象/undefined)，那么这个普通的值会被当成Promise中的resolve值
// 链式调用
promise
  .then((res) => {
    // 相当于new Promise((resolve, reject) =>{ resolve(111)})
    return 111; //这个值会被包裹成Promise。如果没有写返回值，返回的是undefined;
  })
  .then((res) => {
    console.log("res1---", res); //res1--- 111
    return "aaaa";
  })
  .then((res) => {
    console.log("res2===", res); //res2=== aaaa
  });
//  2> 如果返回的是一个Promise，依然会继续使用new Promise()进行包裹
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1111);
      }, 4000);
    });
  })
  .then((res) => {
    console.log(
      "这里也是会被延迟3秒的，由then里面return 传入的promise状态决定外面的promise状态",
      res
    );
  });

// 3> 如果返回的是一个对象，并且该对象实现了thenable，那么下一次.then(res)中的res，是由对象中的then决定的
promise
  .then((res) => {
    return {
      then: function (resolve, reject) {
        resolve(2222);
      },
    };
  })
  .then((res) => {
    console.log("对象中的then决定", res);
  });
