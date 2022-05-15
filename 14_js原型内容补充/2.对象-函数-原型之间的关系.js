var obj = {
  name: "fuyi",
};

console.log(obj.__proto__);

// 对象里面有一个__proto__对象：隐式原型对象

// Foo是一个函数，它有一个显示原型对象： Foo.prototype
// Foo.prototype来自哪里？
// 答案： 创建了一个函数，Foo.prototype = {constructor: Foo}

// Foo是一个对象，那么它会有一个隐式原型对象： Foo.__proto__
// Foo.__proto__ 来自哪里？
// 答案： new Function()  Foo.__proto__ = Function.prototype
// Function.prototype = { constructor: Function}

function Foo() {}

console.log(Foo.prototype === Foo.__proto__); //false
console.log(Foo.prototype.constructor); //[Function: Foo]
console.log(Foo.__proto__.constructor); //[Function: Function]
