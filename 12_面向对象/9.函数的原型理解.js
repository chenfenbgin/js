function foo() {}

//函数也是一个对象，也是有隐式原型的
console.log(foo.__proto__); //函数作为对象来说，他也是有[[prototype]]隐式原型的

// 函数因为是一个函数， 所以它还会多出了一个显示原型属性：prototype
console.log(foo.prototype);

// foo.prototype 显示原型的作用：(对象的隐式原型__proto__ -> 指向 构造函数的显示原型[[prototype]])
// 在我们使用new的时候，这个对象内部的[[prototype]]属性会被赋值为该构造函数的[[prototype]]属性

var f1 = new foo();
var f2 = new foo();

f1.__proto__ === foo.prototype;
f2.__proto__ === foo.prototype;



