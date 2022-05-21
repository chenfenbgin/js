class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

// const depend = new Depend();
let activeReactiveFn = null;
function watchFn(fn) {
  // depend.addDepend(fn);
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

const targetMap = new WeakMap();
function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

const obj = {
  name: "chen",
  age: 23,
};

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // 根据target，key获取可以对应的depend
    const depend = getDepend(target, key);
    // 给depend对象添加响应函数
    depend.addDepend(activeReactiveFn);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
    const depend = getDepend(target, key);
    console.log(depend.reactiveFns);
    depend.notify();
  },
});

watchFn(function () {
  console.log('第一次执行')
  console.log("你好name");
  console.log(objProxy.name);
});

watchFn(function () {
  console.log(objProxy.name, "name function----");
});
watchFn(function () {
  console.log(objProxy.age, "age 变化1----");
});
watchFn(function () {
  console.log(objProxy.age, "age 变化2----");
});

objProxy.name = "天线大爷";
// objProxy.name = "天线大爷2";
// objProxy.name = "天线大爷3";
// objProxy.age = 200;

// const info = {
//   address: "深圳",
// };
// watchFn(function () {
//   console.log(info.address, "address变化1------");
// });
// watchFn(function () {
//   console.log(info.address, "address变化2------");
// });
