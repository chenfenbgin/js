class Person {
  // 类的构造方法： 注意，一个类只能有一个构造函数
  // 1.在内存中创建一个对象
  // 2.将类的原型prototype赋值给创建出来的对象
  // 3.将对象赋值给函数的this new绑定
  // 4.执行函数中的diam
  // 5.自动返回创建出来的对象
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var p1 = new Person();
var p2 = new Person("chen", 23);
console.log(p1); //Person { name: undefined, age: undefined }
console.log(p2); //Person { name: 'chen', age: 23 }
