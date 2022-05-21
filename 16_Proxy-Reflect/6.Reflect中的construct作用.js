function Student(name, age) {
  // 我们之前是调用super(name, age)
  this.name = name;
  this.age = age;
}

function Teacher() {}

// 执行student里面的内容，创建出来的对象是Teacher类型
const teacher = Reflect.construct(Student, ["chen", 23], Teacher);
console.log(teacher); //Teacher { name: 'chen', age: 23 }
console.log(teacher.__proto__ === Teacher.prototype); //true
