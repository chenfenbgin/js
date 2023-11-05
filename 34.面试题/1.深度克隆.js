/*
 * @des: '深度克隆-------任意数据类型'
 * @author: fengbin.chen
 */
function deepClone(value) {
  // 非原始值的情况
  // 数组
  if (Array.isArray(value)) {
    var clone = [];
    for (var i = 0; i < value.length; i++) {
      clone[i] = deepClone(value[i]);
    }
    return clone;
  }
  // 对象
  if (typeof value === "object" && value !== null) {
    var clone = {};
    for (const key in value) {
      clone[key] = deepClone(value[key]);
    }
    return clone
  }
  // 原始类型直接返回
  return value;
}

var o1 = [1, 2, {a: 1, b: [1, 3, 2, 24]}]
var o2 = deepClone(o1);
console.log('o1', o1);
console.log('o2', o2);
console.log('o1===o2', o1 === o2);