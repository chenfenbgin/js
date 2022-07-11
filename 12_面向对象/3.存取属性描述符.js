var obj = {
  name: "chen",
  age: 23,
  _address: "北京市",
};

// 有get、set这种就叫存取属性描述符
Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  // value跟get不能共存
  // value: "上海",
  // 1、属性不想暴露可以使用这种, 隐藏私有属性
  // 2、如果我们希望截获一个属性访问和设置值的过程时
  get: function () {
    return this._address;
  },
  // writable跟set也不能共存
  // writable: true,
  set: function (value) {
    this._address = value;
  },
});
console.log(obj.address); //北京市
obj.address = "广州";
console.log(obj.address); //广州
