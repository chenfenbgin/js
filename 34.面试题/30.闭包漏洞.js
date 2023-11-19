/*
 * @des: ''
 * @author: fengbin.chen
 */
var o = (function () {
  var obj = {
    a: 1,
    b: 2,
  };
  return {
    get: function (k) {
      // 所以这里需要加上判断
      // if (obj.hadOwnProperty(k)) {
      //   return obj[k];
      // }
      // return undefined;
      return obj[k];
    },
  };
})();

// 上面使用的是闭包的思想，提供一个get函数，让访问obj
// 问题：如何在不改变上面代码的情况下，修改obj对象

// 如果这么调用报错，this指向是有问题的
// console.log(o.get('valueOf')());
Object.defineProperty(Object.prototype, "abc", {
  get() {
    return this;
  },
});
var obj2 = o.get("abc");
obj2.c = 2;
console.log(o.get("c"));
