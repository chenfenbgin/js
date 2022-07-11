function foo() {
  console.log(this);
}

// foo.call('aaaa')
// foo.call('aaaa')
// foo.call('aaaa')
// foo.call('aaaa')

// bind其实跟call、apply一样的，只不过他会生成一个新函数
// 默认绑定和显示绑定bind冲突： 优先级（显示绑定）
var newFoo = foo.bind("aaaa");
newFoo(); //独立函数调用 但是打印出来的是aaaa
