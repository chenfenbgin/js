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
  // es6之前监听对象属性
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set(newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });
  return obj;
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
