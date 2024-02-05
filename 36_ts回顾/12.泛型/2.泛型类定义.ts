// 泛型类
class MinClass<T> {
  public list: T[] = [];
  add(value: T): void {
    this.list.push(value);
  }
  min(): T {
    var minNum = this.list[0];
    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}
var m1 = new MinClass<number>(); // 实例化类，并且制定了类的T代表的类型是number
// m1.add("aaa"); // 报错
m1.add(12);
m1.add(45);
m1.add(67);
console.log(m1.min());

var m2 = new MinClass<string>(); // 实例化类，并指定了类的T代表的类型是string
m2.add("12");
m2.add("34");
m2.add("56");
console.log("m2===", m2.min());
