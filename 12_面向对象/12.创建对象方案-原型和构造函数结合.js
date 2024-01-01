/*
 * @des: ''
 * @author: fengbin.chen
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eating = function () {
  // this 判定的是调用的那个对象，比如p1; this是动态绑定的，运行的时候绑定的
  console.log(this.name + "吃东西");
};

var p1 = new Person("chen", 12);
var p2 = new Person("fuyi", 23);
console.log(p1.eating() === p2.eating()); //true