// 构造函数继承：
//    在子类的构造函数中，需要执行父类的构造函数，并且为其绑定子类的this(其实就是改变this指向)

function Animals(name) {
  this.name = [name];
}
Animals.prototype.getName = function () {
  return this.name;
};
function Dog() {
  // 子类中调用父类的构造函数，直接使用Animals()调用就行
  Animals.call(this, "大黄");
}
const dog1 = new Dog();
const dog2 = new Dog();

dog1.name[0] = "小黄";
console.log(dog1.name); // [ '小黄' ]
console.log(dog2.name); // [ '大黄' ]

// 构造函数继承缺点： 继承不到父类原型上的方法和属性
dog1.getName(); // 报错
