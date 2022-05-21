class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  // 让每个属性对应一个Depend类
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

// 封装一个响应式函数
// name发生改变的所有需要重新执行的函数， 数组不是很方便，如果里面有age呢， 我们该用类
// let reactiveFns = [];
const depend = new Depend();
function watchFn(fn) {
  // reactiveFns.push(fn);
  depend.addDepend(fn);
}

// 对象的响应式
const obj = {
  name: "chen",
  age: 23,
};

// 监听对象的属性变化：
// 两种方式： 1、Proxy(vue3实现原理)  2、Object.defineProperty(value, property, receiver)
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
    // 改变属性自动执行notify
    depend.notify();
  },
});

watchFn(function () {
  const newName = objProxy.name;
  console.log("你好");
  console.log(objProxy.name);
});

watchFn(function () {
  console.log(objProxy.name, "demo function----");
});
watchFn(function () {
  console.log(objProxy.age, "age 变化1----");
});
watchFn(function () {
  console.log(objProxy.age, "age 变化2----");
});

// 监听对象变化，执行三次，响应式
objProxy.name = "天线大爷";
objProxy.name = "天线大爷2";
objProxy.name = "天线大爷3";
objProxy.age = 200;

// 不应该手动，应该监听对象属性变化
// 所以有回到了 监听对象的属性变化： 两种方式： 1、Proxy(vue3实现原理)、2、Object.defineProperty(value, property, receiver)
// depend.notify();
// reactiveFns.forEach((fn) => {
//   fn();
// });
