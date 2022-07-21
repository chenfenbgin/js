// 判断一个值是不是对象
function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }

  // 判断是否是一个Map类型
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }

  // 判断如果是Symbol的value,那么就创建一个新的Symbol
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description);
  }

  // 判断函数，函数的直接复用即可，没有必要拷贝,this也是动态绑定的
  if (typeof originValue === "function") {
    return originValue;
  }

  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue;
  }

  if (map.has(originValue)) {
    return map.get(originValue);
  }

  // 判断传入的对象是数组，还是普通对象
  const newObject = Array.isArray(originValue) ? [] : {};
  map.set(originValue, newObject);
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key], map);
  }

  // Symbol作为key，for是遍历不出来的
  // 对Symbol的key进行特殊的处理
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const sKey of symbolKeys) {
    newObject[sKey] = deepClone(originValue[sKey], map);
  }

  return newObject;
}

let s1 = Symbol("aaa");
let s2 = Symbol("bbb");

// 测试代码
const obj = {
  name: "chen",
  age: 23,
  friends: {
    name: "zhangsan",
    address: {
      city: "广州",
    },
  },
  hobbies: ["a", "b", "c"],
  foo: function () {
    console.log("foo");
  },
  [s1]: "abc",
  s2: s2,
  set: new Set(["a", "b", "c"]),
  map: new Map([
    ["aaa", "bbb"],
    ["bbb", "ccc"],
  ]),
};

// 存在循环引用问题
obj.info = obj;

const newObj = deepClone(obj);
console.log(newObj === obj);
obj.friends.name = "lisi";
console.log(newObj);
