const obj1 = { name: "chen" };
const obj2 = { name: "kobe" };

// 1、javascript中对象是不能使用对象来作为key的
const info = {
  [obj1]: "aaa",
  [obj1]: "ccc",
};

// 转成字符串'[object Object]', 两个key是一样的，后面的覆盖了前面的key
console.log(info); //{ '[object Object]': 'ccc' }

// 2、Map允许对象类型来作为key
const map = new Map();
map.set(obj1, "aaa");
map.set(obj2, "aaa");
map.set(1, "ccc");
console.log(map);
