var x = 1;

// 如果函数参数有默认值，参数本身会形成一个作用域，这个作用域用于保存参数的值
function foo(
  x,
  y = function () {
    x = 3;
    console.log('x....', x);
  }
) {
  console.log(x);
  var x = 2;
  y();
  console.log('x===',x);
}

foo();
console.log('x---', x);

// undefined
// x.... 3
// x=== 2
// x--- 1