/*
 * @des: ''
 * @author: fengbin.chen
 */
var str = "fagaesfdjakljklewrw";

// 方式一：传统方式
var result = {};
for (let i = 0; i < str.length; i++) {
  if (result[str[i]]) {
    result[str[i]]++;
  } else {
    result[str[i]] = 1;
  }
}
console.log("result: ", result);

// 方式二
var result1 = str.split("").reduce((a, b) => (a[b]++ || (a[b] = 1), a), {});
console.log('result1: ', result1);