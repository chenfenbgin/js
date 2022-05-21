const obj = {
  name: "chen",
  age: 23,
};
// 1.监听一个属性
// Object.defineProperty(obj, "name", {
//   get: function () {
//     console.log("监听到name被访问");
//     return this;
//   },
//   set: function () {
//     console.log("监听到被设置");
//   },
// });
// console.log(obj.name);
// obj.name = '天选之子'

// 2.监听两个属性
Object.keys(obj).forEach((item) => {
  console.log(item);
  Object.defineProperty(obj, item, {
    get() {
      console.log("get监听");
    },
    set(value) {
      obj['item'] = value;
      console.log("set设置");
    },
  });
});
obj.name = "kobe";
obj.age = 23;
console.log(obj);
