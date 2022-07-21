function Person(name, age, friend) {
  // 这里的this就是传过来的studnet对象了
  this.name = name;
  this.age = age;
  this.friend = friend;
}

Person.prototype.eating = function () {
  console.log(this.name + " eating~");
};
function Student(name, age, friend) {
  // 这个this是创建Student出来的对象, call 交给Person函数进行统一处理
  Person.call(this, name, age, friend);
  this.sno = 111;
}

Student.prototype = new Person();

Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var stu = new Student("fuer", 23, ["fuyi"]);
console.log(stu); //Person { name: 'fuer', age: 23, friend: [ 'fuyi' ], sno: 111 }
console.log(stu.name); //fuer
stu.eating(); //fuer eating~

var stu1 = new Student("fuer", 23, ["fuyi"]);
var stu2 = new Student("fuer", 23, ["zhangsan"]);
console.log(stu1.friend); // [ 'fuyi' ]
console.log(stu2.friend); // [ 'zhangsan' ]

stu1.name = "chen";
console.log(stu1, stu2); // 不一样 //Person { name: 'chen', age: 23, friend: [ 'fuyi' ], sno: 111 } Person { name: 'fuer', age: 23, friend: [ 'zhangsan' ], sno: 111 }

// 强调： 借用过程也是存在弊端的
// 弊端1：Person函数至少被调用了两次
// 弊端2：stu的原型对象上会多出一些属性，但是当前没有存在的必要
