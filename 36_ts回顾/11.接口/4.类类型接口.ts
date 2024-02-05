// 类类型接口： 对类的约束， 和 抽象类有点相似
interface Animal {
  name: string;
  eat(food: string): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(food: string): void {
    console.log("this.name", this.name + food);
  }
}

var d = new Dog("小黑");
d.eat("狗粮");
