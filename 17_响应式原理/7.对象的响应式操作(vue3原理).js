let activeReactiveFn = null;

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

function watchFn(fn) {
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

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const depend = getDepend(target, key);
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
}

const obj = {
  name: "chen",
  age: 23,
};

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    const depend = getDepend(target, key);
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

const info = {
  address: "深圳",
  height: 1.6,
};
const infoProxy = reactive(info);
watchFn(function () {
  console.log(infoProxy.address);
});

infoProxy.address = "广州";

// 简化操作
const foo = reactive({
  name: "foo",
});
watchFn(function () {
  console.log(foo.name + " hello");
});
foo.name = "bar";

// 总结:
// 1. 什么是响应式
// 2. 响应式函数的封装
// 3. Depend 类的封装
// 4. 监听对象的变化
//       a. new Proxy(, set: depend.notify)
// 5. 依赖收集的数据结构 weakMap
// 6. 正确的收集依赖
//       a. Proxy 的get方法中收集对应的函数
//       b. 在全局activeReactiveFn变量
//       c. 在get中找到depend对象，addDepend(全局activeReactiveFn变量)
// 7. 对Depend进行优化
//       a. addDepend函数换成depend函数
//       b. 将保存的数组换成set
// 8. 对对象的响应式操作
//       a. new Proxy() vue3
//       b. Object.defineProperty() vue2
