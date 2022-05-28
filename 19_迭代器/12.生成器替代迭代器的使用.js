// 生成器替代迭代器
function* createArrayIterator(arr) {
  let index = 0;

  // 写法一：
  // yield arr[index++]; //{ done: true, value: undefined };
  // yield arr[index++];
  // yield arr[index++];
  
  // 写法二：
  // yield 'a'; 
  // yield 'b'; 
  // yield 'c'; 

  // 写法三：
  // for (const item of arr) {
  //   yield item;
  // }

  // 写法四： yield* 可迭代对象
  yield* arr

  // return {
  //   next: function () {
  //     if (index < arr.length) {
  //       return {
  //         done: false,
  //         value: arr[index++],
  //       };
  //     } else {
  //       return { done: true, value: undefined };
  //     }
  //   },
  // };
}

const names = ["a", "b", "c"]
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());