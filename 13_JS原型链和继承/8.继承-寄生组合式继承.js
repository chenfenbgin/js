function Person(name, age, friend) {
  this.name = name;
  this.age = age;
  this.friend = friend;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};
function Student(name, age, friend, sno, score) {
  Person.call(this, name, age, friend);
  this.sno = sno;
  this.score = score;
}

// 创建一个新对象指向Person.prototype。
// 原来的Student.prototype是指向直接的构造函数Student()的,Object.create(Person.prototype)创建出来的新的对象上是没有constructor的
Student.prototype = Object.create(Person.prototype);
// 控制台打印出来的stu， 类型是Person,因为它找的是stu.contructor.name, 在student没有找到，就去Person上找了
// 需要给student重新指向一下, 这样打印出来的就是Student的
Object.defineProperty(Student.prototype, "constructor", {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Student,
});

Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var stu = new Student("chen", 23, ["fuyi"], 222, 30);
console.log(stu);
stu.studying();
stu.eating();
