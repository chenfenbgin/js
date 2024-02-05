// 多态： 父类定义一个方法不去实现，让继承它的子类去实现， 每一个子类都有不同的表现
// 多态属于继承
class Ainmal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log("吃。。。");
  }
}
class Dog extends Ainmal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log("吃狗粮。。。");
  }
}
