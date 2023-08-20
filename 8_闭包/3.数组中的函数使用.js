/*
 * @des: ''
 * @author: fengbin.chen
 */
// map: 映射
var nums = [1, 2, 3, 4, 5, 6];
var newNums = nums.map(function (item) {
  return item * 10;
});
console.log('newNums: ', newNums); //[ 10, 20, 30, 40, 560 ]
console.log('nums:', nums); // [ 1, 2, 3, 4, 5, 6 ]

// reduce: 映射
// 第一次： pre: 0, item: 1
// 第二次： pre: 1, item: 2
// 第三次： pre: 3, item: 3
var total = nums.reduce(function (pre, item) {
  return pre + item;
}, 0);
console.log(total);
