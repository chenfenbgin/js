//1、我们每个对象中都有一个[[prototype]], 这个属性可以称之为对象的原型（隐式原型）
var obj = { name: "chen" }; //[[prototype]]
var info = {}; //[[prototype]]

// 早期的ECMA是没有规范如何去查看[[prototype]],
// 给对象中提供了一个属性，可以让我们查看一下这个原型对象（浏览器提供）
// __proto__

console.log(obj.__proto__); //[Object: null prototype] {}

let obj1 = {
  name: "fu",
  // 这么定义，相当于下面还有一行代码 __proto__: {}
};

// 开发中是不推荐使用__proto__的           //obj.__proto__拿到的我们称为隐式原型
console.log(Object.getPrototypeOf(obj)); //拿到的我们称为隐式原型

// 2、原型的作用： 当我们从一个对象中获取某一个属性时，它会触发[[get]]操作
// a.在当前对象中查找对应的属性，如果找到就直接使用
// b.如果没有找到，那么会沿着它的原型链去查找[[prototype]]
console.log(obj.age);
