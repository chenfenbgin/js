/*
 * @des: ''
 * @author: fengbin.chen
 */
class A {
  #abc; // 定义一个私有字段,这么写，只要在类里面可以调用
  constructor(){
    this.abc = 1
  }
  // 定义方法
  #def () {
    console.log('私有方法');
  }
}

var a = new A();
console.log('a: ', a);