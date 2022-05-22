// let activeReactiveFn: 当前需要收集的响应式函数
let activeReactiveFn = null;

/**
 * Depend优化：
 *  1、depeng方法
 *  2、使用Set来保存依赖函数，而不是数组[]
 */
class Depend {
  constructor() {
    // this.reactiveFns = [];
    this.reactiveFns = new Set();
  }
  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn);
  }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

// const depend = new Depend();

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
    const depend = getDepend(target, key);
    // depend.addDepend(activeReactiveFn);
    depend.depend();
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
    const depend = getDepend(target, key);
    console.log(depend.reactiveFns);
    depend.notify();
  },
});

watchFn(() => {
  // 被执行了 两次，objProxy.name收集了两次。改成set就执行一次
  console.log(objProxy.name, "/==========");
  console.log(objProxy.name, "+++++++++++++");
});
objProxy.name = "陈胜";
