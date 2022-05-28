// 生成器替代迭代器
function* createArrayIterator(arr) {
  let index = 0;
  yield* arr;
}

// 2.创建一个函数，这个函数可以迭代一个范围内的数字
// 10 20
// function createRangeIterator(start, end) {
//   // 写法一：
//   let index = start;
//   return {
//     next: function () {
//       if (index < end) {
//         return {
//           done: false,
//           value: index++,
//         };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

function* createRangeIterator(start, end) {
  // 写法一：
  let index = start;
  while (index < end) {
    yield index++;
  }
}


const iterator = createRangeIterator(10, 20);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 输出如下：
// { done: false, value: 10 }
// { done: false, value: 11 }
// { done: false, value: 12 }
// { done: false, value: 13 }
