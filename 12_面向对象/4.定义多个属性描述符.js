var obj = {
  _age: 32,
};

Object.defineProperties(obj, {
  name: {
    enumerable: true,
    writable: true,
    value: "chen",
  },
  age: {
    configurable: false,
    enumerable: false,
    get() {
      return this._age;
    },
    set(value) {
      this._age = value;
    },
  },
});

console.log(obj, obj.age); // { _age: 32, name: 'chen' } 32
