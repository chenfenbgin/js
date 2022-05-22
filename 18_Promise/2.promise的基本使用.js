class Person {
  constructor(callback) {
    let foo = function () {};
    let bar = function () {};
    callback(foo, bar);
  }
}
// const p = new Person("chen", 23);
const p = new Person((foo, bar) => {
  console.log("hello");
  // 这两个foo, bar又是函数，本身是可以执行的
});

// promise需要传入一个回调函数() => {}, 传入的这个函数会立即执行, 这个函数叫executor
const promise = new Promise((resolve, reject) => {
  console.log("promise传入的参数被执行了");
  // 本身是可以执行的
  resolve();    // resolve(), 来到promise.then(() =>{})
  // reject();  如果是调用reject(), 它会来到promise.catch(()=>{})
});

// then方法传入的函数，会在promise执行resolve函数是被回调。
promise.then(() => {});
