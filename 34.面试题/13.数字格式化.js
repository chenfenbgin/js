/*
 * @des: ''
 * @author: fengbin.chen
 */
/*
 * @des: ''
 * @author: fengbin.chen
 */
var str = "10000000000000";

// 1.使用正则表达式匹配一个或多个 000
// /(\d{3})+$)/g
// 2.我们要匹配的是000前面的位置，需要使用前瞻
// /(?=(\d{3})+$)/g
// \B非单词边界
var result = str.replace(/(?=\B(\d{3})+$)/g, ",");
console.log(result); // 10,000,000,000,000
