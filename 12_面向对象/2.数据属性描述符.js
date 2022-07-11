// 这种方式定义，name和age虽然没有使用属性描述符来定义，但是他们也是具备特性的
// value: 就是赋值的value
// configurable： ture
var obj = {
  name: "chen",
  age: 23,
};

// 数据属性描述符, 默认值都是false,value:undefined
Object.defineProperty(obj, "address", {
  value: "深圳",
  // configurable: false：该属性不可删除，也不可修改或者重新定义属性描述符
  configurable: false,
});

delete obj.name;
console.log(obj);
delete obj.address;
console.log(obj, obj.address); //{ age: 23 }  深圳
console.log("----------------------------------------------------");

var obj2 = {
  name: "chen",
  age: 23,
};

Object.defineProperty(obj2, "address", {
  value: "深圳",
  configurable: false,
  enumerable: true,
  // 是否可以修改值
  writable: false,
});

// 测试enumerable的作用
console.log(obj2);
for (const key in obj2) {
  console.log(key);
}
console.log(Object.keys(obj2));
obj2.address = "北京";
console.log(obj2);
