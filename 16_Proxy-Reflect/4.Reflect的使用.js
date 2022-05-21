const obj = {
  name: "chen",
  age: 23,
};

const objProxy = new Proxy(obj, {
  get(target, key) {
    // return target[key];
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    // target[key] = value;
    // 其实Reflect设置值会返回一个布尔值的
    Reflect.set(target, key, value);
  },
});
objProxy.name = "陈胜";
console.log(objProxy.age); //23
console.log(objProxy.name); // 陈胜

console.log(obj.age); //23
console.log(obj.name); //陈胜
