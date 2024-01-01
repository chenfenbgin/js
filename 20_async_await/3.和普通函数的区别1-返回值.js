/*
 * @des: ''
 * @author: fengbin.chen
 */
// 异步函数的返回值一定是个Promise
async function foo() {
  console.log("foo start...");
  // 1、如果默认不写，默认返回的是undefined

  // 2、返回一个值
  // return "aaa";

  // 3、返回一个thenable
  // return {
  //   then: function (resolve, reject) {
  //     resolve("haaaaaa");
  //   },
  // };

  // 4、返回一个Promise
  // return new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     resolve("hehehehhehe");
  //   }, 2000);
  // });
}

const promise = foo();
// 这个then是在foo()有return的时候才会被执行，而且是被加到微任务队列里面的
promise.then((res) => {
  console.log('res===', res);
});
