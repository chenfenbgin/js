const obj = {
  _name: "chen",
  get name() {
    return this._name; //不好确定this，
  },
  set name(value) {
    this._name = value;
  },
};

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // receiver是创建出来的代理对象objProxy,
    console.log("get方法被访问---", key, receiver);
    console.log(receiver === objProxy);
    // Reflect第三个参数，如果传了，那么就会被传递到的obj调用get name()方法对象里面
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log("set方法被访问---", key, receiver);
    Reflect.set(target, key, value, receiver);
  },
});
console.log(objProxy.name);
objProxy.name = "天选之子";
// 注：set、get都会别访问两次
