// 每个属性对应一个Depend对象
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

// 封装一个获取Depend函数
const targetMap = new WeakMap();
function getDepend(target, key) {
  // 1.根据target对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  // 2.根据key获取depend对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
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
    // depend.notify();
    const depend = getDepend(target, key);
    console.log(depend.reactiveFns);
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

const info = {
  address: "深圳",
};
watchFn(function () {
  console.log(info.address, "address变化1------");
});
watchFn(function () {
  console.log(info.address, "address变化2------");
});
