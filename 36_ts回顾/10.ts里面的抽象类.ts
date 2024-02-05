// ts中的抽象类，提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现，并且需要在派生类中实现。
// abstract抽象方法只能放在抽象类里面

// 抽象类和抽象方法用来定义标准，标准： Animal这个类要求它的子类必须包含eat方法
abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): void;
}

class Dog extends Animal {
  name: string;
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log("吃狗粮...");
  }
}
