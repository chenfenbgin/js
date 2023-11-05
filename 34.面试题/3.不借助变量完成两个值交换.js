/*
 * @des: '不借助变量完成上面值的交换'
 * @author: fengbin.chen
 */
var a = 6;
var b = 5;

// 方式1:
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a, b:", a, b);

// 进行异或
// a = a ^ b; // 用差异对另一个数求异或   0011 = 0110 ^ 0101
// b = a ^ b; // 0110 = 0011 ^ 0101
// a = a ^ b;
// console.log("a, b:", a, b);


// 方式三： 进行结构： 包括对象 （推荐使用）
[b, a ] = [a, b]
console.log("a, b:", a, b);
