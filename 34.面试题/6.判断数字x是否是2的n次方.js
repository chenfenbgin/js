/*
 * @des: ''
 * @author: fengbin.chen
 * 与运算：
 *    1.两个二进制的数字，来求且运算（两个都为1，就得到1，其他都为0）
 *    2.二进制的数字有个特点：转为二进制，只有一位是1
 * 注：只有2的n次方这个数字减一之后，求&运算，才会得到0 
 * 
 */
function isPowerOf2(x){
  return (x & (x -1 )) === 0
}
console.log('isPowerOf2', isPowerOf2(8));
console.log('isPowerOf2', isPowerOf2(7));