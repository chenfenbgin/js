var obj = {
  name: "chen",
  age: 23,
};

// 原型式继承函数：方式1
function createObject(o) {
  var newObj = {};
  // 设置newObj的原型是o
  Object.setPrototypeOf(newObj, o);
  return newObj;
}

function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

// 原型式继承函数：方式2
var info = createObject2(obj);
console.log(info); //{}
console.log(info.__proto__); //{ name: 'chen', age: 23 }

// 现在的版本中，有Object.create(obj)， 它实现的功能跟我们方式一、方式二是一样的