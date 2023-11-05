/*
 * @des: ''
 * @author: fengbin.chen
 */
var arr = []
arr[1] = 1;
arr['1'] = 3;
console.log('arr[1] = ' , arr[1]); // 3

var obj1 = {a: 1, b: 2 }
var obj2 = {c: 3, d: 4 }

console.log(obj1.toString(), obj2.toString); // [object Object]
/**
 * 对象的属性，只有两种情况，Symbol 和 字符串
 */