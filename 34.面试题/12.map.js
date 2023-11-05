/*
 * @des: ''
 * @author: fengbin.chen
 */
const map1 = ["1", "2", "3"].map(parseInt);
/**
 * [
 *  parseInt('1', 0),
 *  parseInt('2', 1),
 *  parseInt('3', 2),
 * ]
 */

console.log(map1); // [ 1, NaN, NaN ]
