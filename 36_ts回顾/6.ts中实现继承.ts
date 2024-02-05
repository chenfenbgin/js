// 2、ts中实现继承 extends super
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name}在运动`;
  }
}
var p = new Person("张三");
p.run();

class Web extends Person {
  constructor(name: string) {
    super(name); // 初始化父类的构造函数
  }
  work() {
    console.log(`${this.name}在运动`);
  }
}
var w = new Web("李四");
w.run();
w.work();
