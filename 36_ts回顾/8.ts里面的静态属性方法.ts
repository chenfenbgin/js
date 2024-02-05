// 1、es5里面的： 静态属性  静态方法
// function Person() {
//   this.run1 = function () {}; // 实例化方法
// }

// Person.run2 = function () {
//   // 静态方法
// };
// var p = new Person(); // 实例方法的调用，需要实例化对象
// Person.run2(); // 静态方法的调用

// 2、ts里面的
class Person {
  public name: string;
  public age: number = 20;
  static sex: string = "男";
  constructor(name: string) {
    this.name = name;
  }
  run() {
    // 实例方法
    alert(`${this.name}在运动`);
  }
  work() {
    alert(`${this.name}在工作`);
  }
  // 定义静态方法，使用static关键词
  static print() {
    alert("print方法");
    // 报错： ts静态方法里面，没法直接调用类里面的属性，如果想要调用，需要改成静态属性
    // alert("print方法", this.age);
    alert("print方法", Person.sex);
  }
}
var p = new Person("张三");
p.run();
// 调用静态方法
Person.print();
// 调用静态属性
alert(Person.sex);
