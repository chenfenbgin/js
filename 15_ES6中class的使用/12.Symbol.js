// es6之前，对象的属性名key
// var obj = {
//   name: "chen",
//   age: 23,
// };

// obj["name"] = "liu";
// console.log(obj); //{ name: 'liu', age: 23 }

// 1、es6中的symbol的使用
const s1 = Symbol();
const s2 = Symbol();
console.log(s1, s2, s1 === s2); //Symbol() Symbol() false

// 2、es10中，Symbol还有一个描述
const s3 = Symbol("aaa");
console.log(s3.description);

// 3、Symbol值作为key, 在定义对象字面量时使用
const obj = {
  [s1]: "abc",
  [s2]: "cba",
};
console.log(obj);

// 4、新增属性
obj[s3] = "aaa";

// 5、Object.defineProperty方式
const s4 = Symbol();
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "bbb",
});

// 注意： 不能通过.语法来获取
console.log(obj.s1); //undefined
console.log(obj[s1]); //abc

// 6、使用Symbol作为key的属性名，在遍历/Object.keys()等中是获取不到这些Symbol的，
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

// 遍历所有Symbol中的key
const keys = Object.getOwnPropertySymbols(obj);
for (const key of keys) {
  console.log(obj[key]);
}

// 7、Symbol.for(key)
const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
console.log(sa === sb); //true

const key = Symbol.keyFor(sa);
console.log(key);
const sc = Symbol.for(key);
console.log(sa === sc); // true
