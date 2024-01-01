/*
 * @des: ''
 * @author: fengbin.chen
 */
// 不改变下面的代码，让其成立
// var [a, b] = { a: 1, b: 2 };

Object.prototype[Symbol.iterator] = function () {
  console.log('Object.values(this)===', this, Object.values(this));
  return Object.values(this)[Symbol.iterator]();
};

var [a, b] = { a: 1, b: 2 };