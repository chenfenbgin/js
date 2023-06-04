// 组合式继承：解决原型链继承 和 构造函数继承缺点
function Car(name) {
  this.name = [name];
}
Car.prototype.getName = function () {
  return this.name;
};

// 构造函数继承
function BMW(name) {
  Car.call(this, name);
}

// 原型链继承
// BMW.prototype = new Car(); // 上面这样的写法，每次都创建一下，影响性能。直接指向父类的原型即可
// BMW.prototype = Car.prototype // 这么写，加在子类上的方法，父类也可以调用，我们需要使用一下浅拷贝、
BMW.prototype = Object.create(Car.prototype);
// 原型链的一个规则
BMW.prototype.constructor = BMW

const bmw1 = new BMW("宝马三系");
const bmw2 = new BMW("宝马五系");

bmw1.name[0] = '宝马7系'

console.log(bmw1.name); // [ '宝马7系' ]
console.log(bmw2.name); // [ '宝马五系' ]
console.log(bmw1.getName()); // [ '宝马7系' ]