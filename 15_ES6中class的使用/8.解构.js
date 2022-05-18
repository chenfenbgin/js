var obj = {
  name: "chen",
  age: 23,
};

// 对象的解构
var { name, age } = obj;
console.log(name, age); //chen 23

// 对解构出来的新属性重新命个名字
var { name: newName } = obj;
console.log(newName);
