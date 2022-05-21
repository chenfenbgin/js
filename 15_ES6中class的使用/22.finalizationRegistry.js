const finalRegistry = new FinalizationRegistry((value) => {
  console.log("注册对象，某个对象呗销毁" + value);
});

let obj = {
  name: "chen1",
};
let obj1 = {
  name: "chen1",
};
// 需要在浏览器查看
finalRegistry.register(obj, 'obj');
finalRegistry.register(obj1, 'ifo');
obj = null;
obj1 = null;
