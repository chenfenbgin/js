// const names = ["a", "b", "c"];
// // 创建一个迭代器对象来访问数组
// let index = 0;
// const namesIterator = {
//   next: function () {
//     if (index < names.length) {
//       return { done: false, value: names[index++] };
//     } else {
//       return { done: true, value: undefined };
//     }
//   },
// };

// 可迭代对象
const iteratorObj = {
  names: ["a", "b", "c"],
  // 满足可迭代协议
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      // 这里需要改成箭头函数
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};
console.log(iteratorObj[Symbol.iterator]);

// 1.第一次调用iteratorObj[Symbol.iterator]
const iterator = iteratorObj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 第二次调用iteratorObj[Symbol.iterator]： 生成新的迭代器
const iterator1 = iteratorObj[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// 3.for...of 可以遍历的东西必须是一个可迭代对象
// for其实是语法糖，做的就是iterator.next()，拿到对象，然后在取.value。当done:false,就把value取出来。done为true的时候，就停止遍历
const obj = {
  name: "chen",
  age: 23,
};
for (const item of obj) {
  console.log(item); //TypeError: obj is not iterable
}
