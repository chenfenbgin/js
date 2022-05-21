const obj = {
  name: "chen",
  age: 23,
};

// 参数： 对象， 捕获器对象
const objProxy = new Proxy(obj, {
  // 1、获取值时的捕获器, 会替换调原来获取值的，自动回调get
  // target:就是被代理的对象  key:obj中的key
  get(target, key) {
    return target[key];
  },
  // 2、设置值时的捕获器
  set(target, key, value) {
    target[key] = value;
  },

  // 3、监听in捕获器
  has(target, key){
    console.log('监听in操作');
    return key in target;
  },
  // 4、监听delete操作
  delete(target, key){
    console.log('监听删除操作');
    delete target[key];
  }
});
objProxy.name = "陈胜";
console.log(objProxy.age); //23
console.log(objProxy.name); //chen

// 发现原来的obj对象也被改掉了
console.log(obj.age); //23
console.log(obj.name); //chen

// in操作符
console.log("name" in objProxy);//true

// delete操作
delete objProxy.name;
console.log(obj);
