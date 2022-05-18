// 传统面向对象多态三个前提：
// 1.必须有继承（是多态的前提）
// 2.必须有重写（子类重写父类的方法）
// 3.父类引用指向创建出来的子类对象

class Shape {
  getArea() {}
}

class Rectangle extends Shape {
  getArea() {
    return 100;
  }
}

class Circle extends Shape {
  getArea() {
    return 200;
  }
}

var r = new Rectangle();
var c = new Circle();
// 多态：当对不同的数据类型执行同一个操作时，如果表现出来的行为（形态）不一样，那么就是多态的体现
function calcArea(shape: Shape) {
  console.log(shape.getArea());
}

calcArea(r);
calcArea(c);

// js相对宽松一点
// 下面这个也是多态的体现
function sum(m, n) {
  return m + n;
}
sum(20, 30);
sum("20", "30");
