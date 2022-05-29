// async function foo() {
//   await 表达式(Promise)
// }

// 1、await跟上表达式
// function requestData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(111);
//     }, 1000);
//   });
// }
// async function foo() {
//   // 什么时候返回res -> 就是requestData()调用resolve的时候
//   const res = await requestData();

//   // 这些后面的代码，相当于await requestData();中Promise then中执行的。
//   console.log('res', res);
//   console.log("=============");
// }
// foo();


function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(111);
    }, 1000);
  });
}
// 2、跟上其他的值
async function foo() {
  // 2.1、await 跟上普通值，它会立即返回
  // const res1 = await 123;

  // 2.2、await跟上对象
  // const res1 = await {
  //   then: function (resolve, reject) {
  //     resolve("aaaaaaa");
  //   },
  // };

  // 2.3、await跟上Promise
  // const res1 = await new Promise((resolve) => {
  //   resolve("bbbb");
  // });
 

  // 2.4、reject值，当我们这里面reject的时候，reject的值，会作为整个异步函数foo()的Promise的reject的值，我们需要在外面catch
  const res1 = await requestData();
   console.log("res", res1);
}
foo().catch((err) => {
  console.log('err---', err);
})

