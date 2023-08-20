/*
 * @des: ''
 * @author: fengbin.chen
 */
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

var m = 30;
var n = 10;
calc(m, n, add); // 40
calc(m, n, sub); // 20
calc(m, n, mul); //300
