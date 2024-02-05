// es5里面的继承
function Person () {
  this.name = "张三";
  this.age = 20;
  this.run = function () {
    // 实例方法
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function () {
  alert(this.name + "在工作");
};

// Web类，继承Person类， 
function Web () {
}
Web.prototype = new Person(); // 原型链实现继承, 可以继承构造函数里面的属性和方法，也可以继承原型链上的属性和方法

var w = new Web();
w.run();
w.work();
