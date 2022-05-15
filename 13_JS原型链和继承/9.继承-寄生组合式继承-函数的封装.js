// 继承函数封装
function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype);
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: SubType,
  });
}

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

// Student.prototype = Object.create(Person.prototype);
// Object.defineProperty(Student.prototype, "constructor", {
//   enumerable: false,
//   writable: true,
//   configurable: true,
//   value: Student,
// });
// 01180D1D.png的代码不用，只需要下面的就行
inheritPrototype(Student, Person);

Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var stu = new Student("chen", 23, ["fuyi"], 222, 30);
console.log(stu);
stu.studying();
stu.eating();
