const obj = {
  name: "chen",
  age: 23,
  friends: {
    name: "feng",
  },
  hobbies: ["足球"],
};

// 我们需要使用JSON.stringify():
const objstring = JSON.stringify(obj);// 本质上是一个json格式
// 将对象数据存储localStorage
localStorage.setItem("obj", objstring); // 键要求存的是字符串，我们传的是对象，会被转为字符串
console.log(localStorage.getItem("obj")); //[object Object]， 无法还原
