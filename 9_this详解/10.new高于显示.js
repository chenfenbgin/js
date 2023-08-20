/*
 * @des: ''
 * @author: fengbin.chen
 */
//结论： new关键字不能跟apply、call一起使用

function foo() {
  console.log(this);
}

var bar = foo.bind("aaaa");

var obj = new bar(); //foo {}
