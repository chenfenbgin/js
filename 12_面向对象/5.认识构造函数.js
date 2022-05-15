function foo(){
  console.log('foo~, 函数体代码');
}
// 1、这么调用foo就是一个普通函数
// foo()

// 2、换一种方式来调用foo，那么它就是构造函数
// new foo() //需要参数的时候
// new foo

// 执行函数体代码 创建出来一个对象并返回
let f1 = new foo(); // foo {} （foo是类型）
console.log(f1);