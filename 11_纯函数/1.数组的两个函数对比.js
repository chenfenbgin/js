var names = ["abc", "cba", "nab", "a"];

// slice, 只要传入一个start/end
// slice函数本身不会修改原来的数组
// slice就是一个纯函数
var newNames = names.slice(0, 3);
console.log(newNames);
console.log(names);

// splice不是纯函数
var newNames2 = names.splice(2);
console.log(newNames2);
console.log(names);


// baz也不是纯函数，因为我们修改了传入的参数
function baz(info) {
  info.age = 23
}
var obj = {
  name: 'chen',
  age: 34
}
baz(obj);
console.log(obj);

console.log('============');
// 下面这个test是纯函数
function test(info) {
  return {
    ...info,
    age: 123
  }
}
test(obj)
console.log(obj);