// 不建议使用的
function Person(name, age, friend) {
  this.name = name;
  this.age = age;
  this.friend = friend;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};
function Student(name, age, friend) {
  Person.call(this, name, age, friend);
  this.sno = 111;
}

// 父类原型直接赋值给子类 
Student.prototype = Person.prototype;

// 这styding会被加到Person.prototype中，是不对的，应该加到父类上的
Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var stu = new Student('fuer', 23, ['fuyi']);
console.log(stu); 
console.log(stu.name); 
stu.eating();

// var stu1 = new Student('fuer', 23, ['fuyi']);
// var stu2 = new Student('fuer', 23, ['zhangsan']);
// console.log(stu1.friend); // [ 'fuyi' ]
// console.log(stu2.friend); // [ 'fuyi' ]

// stu1.name = "chen";
// console.log(stu1, stu2); // 不一样
