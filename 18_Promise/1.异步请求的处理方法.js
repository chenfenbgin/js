// 以前是使用回调函数
// 这种回调的方式有很多的弊端：
//  1> 如果是我们自己缝制的requestData,那么我们在封装的时候必须自己设计好callback名称
//  2> 如果是别人封装的，那我们必须去看别人的源码，看参数等，才能获取到结果

// request.js
function requestData(url, successCallback, errorCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求的结果
    // url传入的是chen, 请求成功
    if (url === "chen") {
      // 成功
      let names = ["a", "b", "c", "d", "e", "f"];
      successCallback(names);
    } else {
      // 失败
      let errMessage = "请求失败";
      failCallback(errMessage);
    }
  }, 3000);
}

requestData(
  "chen",
  () => {
    console.log("成功他妈");
  },
  () => {
    console.log("失败他爹");
  }
);
