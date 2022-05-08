// 我们通过一个new关键字调用一个函数时（构造器）,这个时候this是在调用这个构造器是创建出来的对象
// this = 创建出来的对象， 这个过程就是new绑定

// function Person(){
//   return this
// }

// var p = new Person()

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var p1 = new Person("chen", 32);
console.log(p1.name, p1.age);
