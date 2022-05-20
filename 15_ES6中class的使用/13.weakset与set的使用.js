// 区别：
// 1、WeakSet只能存放对象类型，不能存放基本类型
// 2、WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，会被GC回收

// 这个对象是不会被销毁的
// let obj = {
//   name: "chen",
//   friend: {
//     name: "john",
//   },
// };
let obj = {
  name: "chen",
};
const weakSet = new WeakSet();
const set = new Set();
weakSet.add(obj);
set.add(obj); //强引用
