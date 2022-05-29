// 这种是同步代码，如果不想解析完解析完，不阻塞后面的代码，可以当成函数使用
// import { name, age, foo } from "./foo.js";

// import 函数返回的是一个Promise。整个代码是异步的，不会影响后面代码的运行
import('./foo.js').then(res => {
  // 拿到的res，其实就是整个的{ name, age, foo }
  console.log(res, res.age);
})

// console.log(name);
// 在import导入之前，后面的代码是不会执行的，相当与同步的代码
console.log("后续的代码");


// ES11新增的特性
// meta属性本身就是一个对象，{url: '当前模块所在的路径'}
console.log(import.meta);