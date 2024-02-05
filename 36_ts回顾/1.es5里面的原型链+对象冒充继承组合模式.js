// es5里面的继承
function Person() {
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

// Web类，继承Person类， 我们使用： 原型链+对象冒充的组合继承模式
function Web() {
  Person.call(this); // 对象冒充实现继承
}
var w = new Web();
w.run(); // 对象冒充可以继承构造函数里面的属性和方法，打印： 张三在运动

w.work(); // 报错，因为对象冒充，可以继承构造函数里面的属性和方法，但是没法继承原型链里面的属性和方法
