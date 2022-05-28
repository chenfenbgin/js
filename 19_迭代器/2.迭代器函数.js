const names = ["a", "b", "c"];
const num = [10, 20, 30];

function createArrayIterator(arr) {
  let index = 0;
  return {
    next: function () {
      if (index < arr.length) {
        return {
          done: false,
          value: arr[index++],
        };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
}
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

const numIterator = createArrayIterator(num);
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());