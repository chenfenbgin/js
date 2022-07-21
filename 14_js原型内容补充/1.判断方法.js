var obj = {
  name: "chen",
  age: 30,
};

var info = Object.create(obj, {
  // 这个属性，是添加到info上的，不是原型上
  address: {
    value: "北京",
    enumerable: true,
  },
});

console.log(info); //{ address: '北京' }
console.log(info.__proto__); //{ name: 'chen', age: 30 }

// hasOwnProperty判断
console.log(info.hasOwnProperty("address")); // true
console.log(info.hasOwnProperty("name")); // false

// in操作符： 不管在当前对象还是原型中， 返回的都是true
console.log("address" in info); // true
console.log("name" in info); // true

// for-in 跟 in 都是一样的
// for (const key in object) {
// }

// instanceof: 用于检测构造函数的prototype， 是否出现在某个对象的原型上面

// isPropertyOf:用于检测某个对象，是否出现在某个实例对象的原型链上
console.log("----------");
console.log(obj.isPrototypeOf(info)); //true
