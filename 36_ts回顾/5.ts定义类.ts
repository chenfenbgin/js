// 1. es5里面定义的类
// function Person (name) {
//   this.name = name;
//   this.run = function () {
//     console.log('this.name', this.name);
//   }
// }
// var p = new Person('张三')
// p.run();

// 2. ts里面定义类
class Person {
  name: string; // 定义属性： 前面省略了public关键词
  constructor(name: string) {
    this.name = name;
  }
  run(): void {
    alert(this.name);
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
var p = new Person("张三");
p.run();
