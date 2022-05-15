function foo() {}

// 我们打印出来是一个{} ，其实是它属性设置了可枚举的属性: false
console.log(foo.prototype); //{}

// {
//   constructor: {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
console.log(Object.getOwnPropertyDescriptors(foo.prototype)); 
// foo.prototype对象中是有这么一个属性的constructor

// prototype.constructor = 构造函数本身
console.log(foo.prototype.constructor); //[Function: foo]
console.log(foo.prototype.constructor.name); //所有函数都有一个name属性可以拿到函数名

console.log(foo.prototype.constructor.prototype.constructor);