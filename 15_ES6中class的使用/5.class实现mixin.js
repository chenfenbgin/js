class Student {
  styding() {
    console.log("styding");
  }
}
class Runner {
  running() {
    console.log("running");
  }
}

class Eater {
  eating() {
    console.log("eating");
  }
}
// 实现混入：新建一个函数(开发中不常见): 因为如果想要混入一些属性个传入构造函数新的参数，就不太行了
function mixinRunner(BaseClass) {
  class NewClass extends BaseClass {
    running() {
      console.log("running");
    }
  }
  return NewClass;
}

function mixinEater(BaseClass) {
  return class extends BaseClass {
    eating() {
      console.log("eating~");
    }
  };
}

// 在JS类中只能有一个父类：单继承
// class Student extends Person {}

// 使用
// var NewStudent = mixinRunner(Student);
// var ns = new NewStudent();
// ns.running()
// 继续扩展上面的功能
var NewStudent = mixinEater(mixinRunner(Student));
var ns = new NewStudent();
ns.eating();
ns.running();
