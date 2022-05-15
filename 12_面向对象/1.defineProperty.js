var obj = {
  name: 'chen',
  age: 12,
};

// 属性描述符是一个对象. 返回的是同一个对象
var newObj = Object.defineProperty(obj, 'height', {
  value: 1.8
})

console.log(obj) //{ name: 'chen', age: 12 }
console.log(newObj) //{ name: 'chen', age:12}
console.log(obj === newObj) // true

// 因为他是不可枚举的，但是我们obj.height是可以拿到的
console.log(obj.height);  // 1.8
