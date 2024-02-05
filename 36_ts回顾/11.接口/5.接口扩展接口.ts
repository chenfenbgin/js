// 接口扩展： 接口可以扩展接口
interface Animal {
  eat(): void;
}

interface Person extends Animal {
  work(): void;
}

class Web implements Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log("this.name.eat...", this.name + "大米");
  }
  work() {
    console.log("work...", this.name + "上逼");
  }
}

var w = new Web("张三");
w.work();
