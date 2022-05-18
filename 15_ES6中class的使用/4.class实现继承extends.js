class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log(this.name + " eating~");
  }
  personMethod() {
    console.log("1");
    console.log("2");
    console.log("3");
  }
}

// Student称之为子类
class Student extends Person {
  // JS引擎在解析子类的时候，如果我们有实现继承，那么子类的构造方法，在使用this之前，需要使用super
  // super两种用法, 用法二是在子类中对父类方法的重写。
  constructor(name, age, sno) {
    // 方式一
    // super();
    // this.sno = sno;
    // this.age = age;
    // this.sno = sno;

    // 方式一优化： 跟父类有重复的代码
    super(name, age, sno);
  }
  personMethod() {
    // 复用父类的处理逻辑。 复用父类静态也是一样的
    super.personMethod();

    console.log("4");
    console.log("5");
    console.log("6");
  }
}

let stu = new Student("chen", 21, 33);
console.log(stu); //Student { name: 'chen', age: 21 }
stu.eating(); //chen eating~

// 1
// 2
// 3
// 4
// 5
// 6
stu.personMethod();
