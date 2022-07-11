function person(name, age) {
  // this 是指向我们创建出来的对象的
  this.name = name;
  this.age = age;
  this.eating = function () {
    console.log(this.name + "正在吃饭");
  };
}

var p1 = new person("张三", 23);
var p2 = new person("张三", 23);
console.log(p1);

console.log("---");
console.log(p1.eating === p2.eating); // false
