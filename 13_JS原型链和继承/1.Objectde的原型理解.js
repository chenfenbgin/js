var obj = {
  name: 'chen'
};
console.log(obj.address);

// 字面对象obj的原型是 
console.log(obj.__proto__); // [Object: null prototype] {}
console.log(obj.__proto__.__proto__); // null