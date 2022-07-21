// 开发中不会实现下面的实现继承的所有代码， 下面的只是帮助理解的
// 父类： 公共属性和方法
function Person() {
  this.name = "chen";
  this.friend = [];
}

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};
// 子类： 特有属性和方法
function Student() {
  this.sno = 111;
}

// 现在我们使用原型方式继承
Student.prototype = new Person();

Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var stu = new Student();
console.log("stu--------", stu); // Student { sno: 111 }
console.log(stu.name); //chen
stu.eating(); //chen eating~ // Student上没有eating方法， 我们把undefined当成函数调用了，报错。Person上有eating方法

// 原型链实现继承弊端
// 1.打印stu对象，继承的属性是看不到的
console.log("stu=====", stu);

// 2.创建出两个stu
var stu1 = new Student();
var stu2 = new Student();
// 获取引用，修改引用中的值，会相互影响
stu1.friend.push("fuyi");
console.log(stu1.friend); // [ 'fuyi' ]
// 我们发现， 下面的stu2也改了
console.log(stu2.friend); // [ 'fuyi' ]

// 但是，如果是下面这种方式，不会改的，只添加在stu1对象上
// 直接修改对象上的属性，是给本对象添加了一个新属性
stu1.name = "chen";
console.log(stu1, stu2); //Person { sno: 111, name: 'chen' } Person { sno: 111 }

// 3.第三个弊端：在前面实现类的过程中都没有传参数
var stu3 = new Student("fuer", 23);