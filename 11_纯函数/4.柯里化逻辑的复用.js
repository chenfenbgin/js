function sum(a, b) {
  return a + b;
}

// 如果我们需要把5和另外一个数字进行相加
console.log(sum(5, 11));
console.log(sum(5, 12));
console.log(sum(5, 13));
console.log(sum(5, 14));

// 柯里化
function makeAdder(count) {
  return function (num) {
    return count + num;
  };
}

var result = makeAdder(5)(13);
console.log("result", result);

// 对上面的进行复用
var add5 = makeAdder(5);
add5(11);
add5(12);
add5(13);