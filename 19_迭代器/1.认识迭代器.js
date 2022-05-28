// 下面是我们编写的一个迭代器,就是一个对象。帮我们遍历容器结构
// const iterator = {
//   next: function () {
//     return {
//       done: true,
//       value: 123,
//     };
//   },
// };

// 数组
const names = ["a", "b", "c"];
const iterator = names[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// 控制台依次打印：
// { value: 'a', done: false }
// { value: 'b', done: false }
// { value: 'c', done: false }
// { value: undefined, done: true }

console.log("================================");
// 创建一个迭代器对象来访问数组
let index = 0;
const namesIterator = {
  next: function () {
    // return { done: false, value: "a" };
    // return { done: false, value: "b" };
    // return { done: false, value: "c" };
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: true, value: undefined };
    }
  },
};
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
