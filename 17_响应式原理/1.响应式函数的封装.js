// 封装一个响应式函数
// name发生改变的所有需要重新执行的函数， 数组不是很方便，如果里面有age呢， 我们该用类
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}

// 对象的响应式
const obj = {
  name: "chen",
  age: 23,
};
watchFn(function () {
  const newName = obj.name;
  console.log("你好");
  console.log(obj.name);
});

watchFn(function () {
  console.log(obj.name, "demo function----");
});

obj.name = "天线大爷";
reactiveFns.forEach((fn) => {
  fn();
});
