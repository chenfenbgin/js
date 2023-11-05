/*
 * @des: '数据传递问题'
 * @author: fengbin.chen
 */
function increase(a) {
  a++;
}

var a = 1;
increase(a);
increase(a);
console.log("a = ", a); // a = 1

console.log('------------------------------------------------');

function increase2(a1) {
  a1 = {
    n: 2,
  };
}

var a1 = {
  n: 1,
};
increase2(a1);
increase2(a1);
console.log("a1 = ", a1); // a1 = {n: 1}

console.log('------------------------------------------------');

function increase3(a2) {
  // 函数里面对形参重新赋值，是不会改变外面的。但是，如果对形参属性重新赋值，会影响到外面的。
  a2.n = 3
}
var a2 = {
  n: 1,
};
increase3(a2);
increase3(a2);
console.log("a2 = ", a2); // a2 =  { n: 3 }