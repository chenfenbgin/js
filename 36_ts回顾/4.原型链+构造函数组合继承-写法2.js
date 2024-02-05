// es5里面的继承
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.run = function () {
    // 实例方法
    alert(this.name + "在运动");
  };
}
Person.prototype.sex = "男";
Person.prototype.work = function () {
  alert(this.name + "在工作");
};
var p = new Person('李四', 20);
p.run(); // 李四在运动


function Web (name, age) {
  Person.call(this, name, age) // 对象冒充继承，实例化子类
}
Web.prototype = Person.prototype; // 

var w = new Web('王五', 33);
var w1 = new Web('李七', 43);
w.run();
w.work();

