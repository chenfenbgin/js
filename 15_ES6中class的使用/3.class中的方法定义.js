var names = ["fuyi", "fuer", "fusan"];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = "深圳";
  }
  // 这个类普通的方法，会被放到Person.prototype上的，通过创建出来的对象访问
  eating() {
    console.log(this.name + " eating~");
  }

  // 除了可以定义方法外， 我们还可以定义 -> 类的访问器方法
  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }

  // 类的静态方法（类方法）
  static createPerson() {
    var nameIndex = Math.floor(Math.random() * names.length);
    var name = names[nameIndex];
    var age = Math.floor(Math.random() * 100);
    return new Person(name, age);
  }
}

console.log('Person.prototype===', Person.prototype); // 上面会有eating方法
var p = new Person("chen", 23);
p.eating();
p.address = "北京";
// console.log(Person.prototype.eating());
console.log(p);
console.log(p.address);

// for
console.log("--------------------------------");
for (var i = 0; i < 20; i++) {
  console.log(Person.createPerson());
}
