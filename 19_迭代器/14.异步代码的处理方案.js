function requestData(url) {
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
}

// 1.第一种方案： 多次回调
// 回调地狱
requestData("chen").then((res) => {
  requestData(res + "/aaaa").then((res) => {
    requestData(res + "/bbbb").then((res) => {
      console.log("回调地狱=", res);
    });
  });
});

// 2.第二种方案： Promise中then的返回值来解决
requestData("chen")
  .then((res) => {
    return requestData(res + "/aaaa");
  })
  .then((res) => {
    return requestData(res + "/bbbb");
  })
  .then((res) => {
    console.log("Promise 返回的res=", res);
  });

console.log("------------------------------------");
// 3.第三种方案： Promise + generator实现(手动执行)
function* getData() {
  const res1 = yield requestData("chen");
  const res2 = yield requestData(res1 + "/aaaa");
  const res3 = yield requestData(res2 + "/bbbb");
  console.log(res3);
}

const generator = getData();
generator.next().value.then((res) => {
  // console.log(res); //如果想要拿到这个res，需要执行下一次next()，并把值传回去
  generator.next(res).value.then((res) => {
    // console.log(res);
    generator.next(res).value.then((res) => {
      console.log(res);
    });
  });
});

// 3.第三种方案： Promise + generator实现（自动执行）
function execGenerator(getFn) {
  const generator = getFn();
  // 使用递归
  function exec(res) {
    const result = generator.next(res);
    if (result.done) {
      return result.value;
    } else {
      result.value.then((res) => {
        exec(res);
      });
    }
  }
  exec();
}
execGenerator(getData);

// 4.第四种方案： await/async
// function* getData() {
//   const res1 = yield requestData("chen");
//   const res2 = yield requestData(res1 + "/aaaa");
//   const res3 = yield requestData(res2 + "/bbbb");
//   console.log(res3);
// }
// 其实是yield的语法糖
async function getData() {
  const res1 = await requestData("chen");
  const res2 = await requestData(res1 + "/aaaa");
  const res3 = await requestData(res2 + "/bbbb");
  console.log(res3);
}
getData();
