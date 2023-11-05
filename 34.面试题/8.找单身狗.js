/*
 * @des: ''
 * @author: fengbin.chen
 */
/**
 * nums数组中包含1个或多个正整数，只有一个数字只出现1次,其他数字出现两次
 */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];
function uniqueNumber(nums) {
  return nums.reduce((a, b) => a ^ b);
}

console.log(uniqueNumber(nums));// 8