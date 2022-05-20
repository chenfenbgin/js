const obj1 = {
  name: "chen",
  age: 23,
};
function obj1NameF1() {
  console.log("obj1NameF1被执行");
}
function obj1NameF2() {
  console.log("obj2NameF2被执行");
}
function obj1AgeF1() {
  console.log("obj1AgeF1被执行");
}
function obj1AgeF2() {
  console.log("obj1AgeF2被执行");
}
// vue3响应式原理
// 1.创建weakMap
const weakmap = new WeakMap();

// 2.收集obj1的数据结构
const obj1Map = new Map();
obj1Map.set("name", [obj1NameF1, obj1NameF2]);
obj1Map.set("age", [obj1AgeF1, obj1AgeF2]);
weakmap.set(obj1, obj1Map);

// 3.如果obj1.name发生改变，
obj1.name = "james";
const targetMap = weakmap.get(obj1);
const fns = targetMap.get("name");
fns.forEach((item) => item());
