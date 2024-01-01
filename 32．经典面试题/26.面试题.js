//  题目1、使用ES6 的Proxy实现数组负索引。
// （负索引：例如，可以简单地使用arr[-1]替代arr[arr.length-1]访问最后一个元素，[-2]访问倒数第二个元素，以此类推）
const targetArr = (sourceArr) => {
  return new Proxy(sourceArr, {
    get(target, key, receiver) {
      // 数组
      if (Array.isArray(sourceArr)) {
        const len = target.length;
        const intKey = Number(key);
        return Reflect.get(
          target,
          intKey < 0 ? len + intKey : intKey,
          receiver
        );
      }
      // 对象
      return Reflect.get(target, key, receiver);
    },
  });
};

const test = targetArr([1, 2, 3, 4, 5]);
console.log(test[-1]);
console.log(test[-2]);

const obj = targetArr({ "-1": "chen", "-2": "feng" });
console.log(obj[-1]);
console.log(obj[-2]);

// 题目2、宏任务、微任务
// console.log(1);
// setTimeout(() => {
//     console.log(2);
//     process.nextTick(() => {
//         console.log(3);
//     });
//     new Promise((resolve) => {
//         console.log(4);
//         resolve();
//     }).then(() => {
//         console.log(5);
//     });
// });
// new Promise((resolve) => {
//     console.log(7);
//     resolve();
// }).then(() => {
//     console.log(8);
// });
// process.nextTick(() => {
//     console.log(6);
// });
// setTimeout(() => {
//     console.log(9);
//     process.nextTick(() => {
//         console.log(10);
//     });
//     new Promise((resolve) => {
//         console.log(11);
//         resolve();
//     }).then(() => {
//         console.log(12);
//     });
// });

// 1 7 6 8 2 4 3 5 9 11 10 12
console.log("======================");

// 题目3、arguments参数
function side(arr) {
  arr[0] = arr[2];
}
function a(a, b, c = 3) {
  c = 10;
  console.log('arguments---', arguments);
  side(arguments); // 1 1 10
  return a + b + c; // 12
}

console.log("a(1, 1, 1): ", a(1, 1, 1)); // 12
// 加了默认值，则转为严格模式（其实也可以使用 "use strict" 转），这时候参数（a、b、c）与 arguments 没有绑定关系，所以修改 arguments 不会影响到参数（a、b、c）的值，修改参数（a、b、c）也不会影响到 arguments。
// 不加默认值，则为非严格模式，结果和上面的相反。
console.log("=======================");

// 题目4
var min = Math.min(); //
max = Math.max();
console.log(min < max);
// Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。如果没有参数，则返回 Infinity，无穷大。
// 而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false
console.log("=======================");

// 题目5
var a1 = [0];
if (a1) {
  console.log("a1: ", !!a1 === true); // 执行
} else {
  console.log("a1=", a1);
}
console.log("=======================");

// 题目6
var x = 1;
if (function f() {}) {
  x += typeof f;
}
console.log(x); // 1undefined
// 条件判断为假的情况有：0，false，''，null，undefined，未定义对象。
// 函数声明写在运算符中，其为true，但放在运算符中的函数声明在执行阶段是找不到的。另外，对未声明的变量执行typeOf不会报错，会返回undefined
console.log("=======================");

// 题目7
function f() {
  return f;
}
console.log(new f() instanceof f); // false
// a instanceof b 用于检测a是不是b的实例。如果题目f中没有return f,则答案明显为true;
// 而在本题中new f()其返回的结果为f的函数对象，其并不是f的一个实例。

// 题目8
[typeof null, null instanceof Object]; // ['object', false]
// typeof 的结果列表
//      Undefined "undefined"
//      Null "object"
//      Boolean "boolean"
//      Number "number"
//      String "string"
//      Symbol "symbol"
//      Function "function"
//      Object "object"

// 题目8
function showCase(value) {
  switch (value) {
    case "A":
      console.log("Case A");
      break;
    case "B":
      console.log("Case B");
      break;
    case undefined:
      console.log("undefined");
      break;
    default:
      console.log("Do not know!");
  }
}
showCase(new String("A")); // Do not know!
// switch 是严格比较, String 实例和 字符串不一样.
// var str1 = 'str';
// var str2 = new String('str');
// console.log(typeof str1); // "string"
// console.log(typeof str2); //"object"

// 题目9
var arr = [0, 1];
arr[5] = 5;
newArr = arr.filter(function (x) {
  return x === undefined;
});
console.log(newArr.length); // 0
// filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。
// callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
// 也就是说 从 2-4 都是没有初始化的'坑'!, 这些索引并不存在与数组中. 在 array 的函数调用的时候是会跳过这些'坑'的.

// 题目13
function user(obj) {
  // obj传入的是引用
  obj.name = "京程一灯"; // 修改引用的值
  obj = new Object(); // obj 指向了一个新地址
  obj.name = "精英班"; //  修改的是新对象，没法改变传入的对象
}
let person = new Object();
user(person);
console.log(person.name); // 京程一灯
console.log("==========================");

// 题目14
// let x, y;
// try {
//   throw new Error();
// } catch (x) {
//   x = 1;
//   y = 2;
//   console.log(x);
// }
// console.log(x);
// console.log(y);
// 1
// undefined
// 2
console.log("15==========================");

// 题目15
let length = 10;
function fn() {
  console.log(this.length);
}
var obj2 = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};
obj2.method(fn, 1);
// 0 2
// window对象原先上有length属性，所以输出的是原先的值0
// arguments[0]指向 fn,所以 arguments[0]() 是作为 arguments对象的属性[0]来调用 fn的，所以 fn 中的 this 指向属性访问主体的对象 arguments；
// 这里this指向arguments.因为fn作为一个参数存储在arg对象里，argumengts的长度为2，所以输出2

// 题目16
var a = 10;
var foo = {
  a: 20,
  bar: function () {
    var a = 30;
    return this.a;
  },
};
console.log(foo.bar());
console.log(foo.bar());
console.log((foo.bar = foo.bar)());
console.log((foo.bar, foo.bar)());
// 20 20 10 10
// 1）第一问 foo.bar(), foo调用，this指向foo , 此时的 this 指的是foo，输出20
// 2) 第二问 (foo.bar)(), 给表达式加了括号，而括号的作用是改变表达式的运算顺序，而在这里加与不加括号并无影响；相当于foo.bar(),输出20
// 3）第三问 (foo.bar=foo.bar)(), 所以这里的this指代的是window,输出10）
// 4) 第四问 (foo.bar,foo.bar)(), 逗号表达式，求解过程是：先计算表达式1的值，再计算表达式2的值，……一直计算到表达式n的值。最后整个逗号表达式的值是表达式n的值。逗号运算符的返回值是最后一个表达式的值。
//    经过赋值，运算符运算后，都是纯粹的函数，不是对象方法的引用。所以函数指向的this都是windows的。

// 题目17
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply();
multiply();
multiply(value);
multiply(value);
// 我们前两次调用 multiply 函数且不传递值，那么每一次 x 的默认值都为 {number：10} ，因此打印出该数字的乘积值为 20。
// 第三次调用 multiply 时，我们传递了一个参数，即对象 value。*=运算符实际上是 x.number=x.number*2的简写，我们修改了 x.number的值，并打印出值 20。
// 第四次，我们再次传递 value对象。x.number之前被修改为 20，所以 x.number*=2打印为 40。
console.log("17=========================");

// 题目18
// 能否以某种方式为下面的语句使用展开运算而不导致类型错误
var obj3 = { x: 1, y: 2, z: 3 };
// [...obj]; // TypeError
// 能否以某种方式为上面的语句使用展开运算而不导致类型错误
// 如果可以，写出解决方式
obj3[Symbol.iterator] = function* () {
  const values = Object.values(this);
  for (const value of values) {
    yield value;
  }
};
console.log('obj3: ', [...obj3]); // [1, 2, 3]
console.log("18=====================");

// 题目19: 完成一个safeGet函数，可以安全的获取无限多层次的数据
var data = { a: { b: { c: "yideng" } } };
// safeGet(data, 'a.b.c') // => yideng
// safeGet(data, 'a.b.c.d') // => undefined
// safeGet(data, 'a.b.c.d.e.f.g') // => undefined
var safeGet = (data, path) => {
  try {
    return path.split(".").reduce((data, k) => data[k], data);
  } catch (error) {
    return undefined;
  }
};
console.log("a.b.c ", safeGet(data, "a.b.c")); // yideng
console.log(" a.b.c.d", safeGet(data, "a.b.c.d")); // => undefined
console.log("a.b.c.d.e.f.g", safeGet(data, "a.b.c.d.e.f.g")); // => undefined
console.log("19=====================");

// 题目20： 数组sort
const arr1 = ["a", "b", "c"];
const arr2 = ["b", "c", "a"];
console.log(
  arr1.sort() === arr1,
  arr2.sort() === arr2,
  arr1.sort() === arr2.sort()
);
// true true false
console.log("20=====================");

// 题目21
const arrLike = {
  length: 4,
  0: 0,
  1: 1,
  "-1": 2,
  3: 3,
  4: 4,
};
console.log(Array.from(arrLike)); // [0, 1, undefined, 3]
console.log(Array.prototype.slice.call(arrLike)); // [0, 1, 空白, 3]
// Array.from(伪数组对象, 可迭代对象)，
// Array.prototype.slice.call(伪数组对象)能把类数组对象转化成数组，arrLike规定了长度4的数组。

// 题目22
console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false

// 题目23
// Vue父组件可以监听到子组件的生命周期吗？如果能请写出你的实现方法。
// 可以

// 1）、实现方式一
// 比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：
// // Parent.vue
// <Child @mounted="doSomething"/>
// // Child.vue
// mounted() {
//   this.$emit("mounted");
// }

// 2）、实现方式二
//  Parent.vue
{
  /* <Child @hook:mounted="doSomething" ></Child>
doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
}, */
}
//  Child.vue
// mounted(){
//    console.log('子组件触发 mounted 钩子函数 ...');
// },
// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...
console.log("23================================");

// 题目23
// 请写一个函数，输出出多级嵌套结构的 Object 的所有 key 值
var objData = {
  a: "12",
  b: "23",
  first: {
    c: "34",
    d: "45",
    second: { 3: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
  },
};
// => [a,b,c,d,e,f,g,h,i]
function getObjectAllKey(obj, keys = []) {
  for (const key in obj) {
    if (obj[key] instanceof Object) {
      getObjectAllKey(obj[key], keys);
    } else {
      keys.push(key);
    }
  }
  return keys;
}
console.log("getAllKey: ", getObjectAllKey(objData));
console.log("24================================");

// 题目25
// 用尽量短的代码实现一个 arrary 的链式操作，将数组中的大于 10 的值进行一个累加
console.log(
  "25:",
  [9, 11, 12, 13].filter((v) => v > 10).reduce((pre, val) => pre + val, 0)
);

// 题目26
// 通过 link 进来的 css 会阻塞页面渲染吗，Js 会阻塞吗，如果会如何解决?
// 答：
//    DOM解析和CSS解析是两个并行的进程，所以这也解释了为什么CSS加载不会阻塞DOM的解析。
//    然而，由于Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待到CSSOM Tree构建完成，也就是CSS资源加载完成(或者CSS资源加载失败)后，才能开始渲染。因此，CSS加载是会阻塞Dom的渲染的。
//    由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，样式表会在后面的js执行前先加载执行完毕。所以css会阻塞后面js的执行。

// 题目27
// Css 如何画出一个扇形，动手实现下
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Css画出一个扇形</title>
//     <style>
//         #sector {
//             width: 0;
//             height: 0;
//             border: 100px solid;
//             border-radius: 100px;
//             border-color: orangered transparent transparent transparent;
//         }
//     </style>
// </head>
// <body>
//     <div id="sector"></div>
// </body>
// </html>

// 题目28
// 箭头函数和普通函数的区别
// 1、箭头函数不能绑定argruments，取而代之的是rest
// 2、箭头函数是匿名函数，不能作为构造函数，不能new
// 3、箭头函数没有原型属性
// 4、箭头函数不能绑定this，会将离自己最近的一个普通函数的this作为自己的this
// 5、call、apply、bind都无法改变箭头函数中this的指向
console.log("28=================================");

// 题目29
// 将 153812.7 转化为 153,812.7
function parseMoney(num) {
  let [interger, decimal] = String.prototype.split.call(num, ".");
  interger = interger.replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,");
  decimal = decimal ? `.${decimal}` : "";
  return interger + decimal;
}
console.log(parseMoney(153812.7)); // 153,812.7
console.log("29=================================");

// 题目30
// [] == ![] 为什么
console.log("[] == ![]===", [] == ![]);
// 按照一定的规则
// ![] 转为布尔值false，实际上比较的是[] == false
// 进行比较之前，会转为Number类型，Number([]) = 0 , Number(false) = 0
// 所以 [] == ![] 成立
// [] == [] false, {} == {} false 都是引用类型
// {} == !{} false，转换为{} == false -> Number({}) = NAN
console.log("30==================================");

// 题目31
// 给一个字符串比如'abca'，返回第一个不重复的字母
// function fn(str){
//   const map = new Map();
//   for (const s of str) {
//     console.log('s===', s);
//     if(map.has(s)){
//       map.delete(s);
//     }else {
//       map.set(s, 1)
//     }
//   }
//   console.log('map=====', map);
//   return Array.from(map.keys())[0];
// }
// console.log('fn======', fn('abcdea'));
// console.log('31==================================');

// 题目32
// 判断一个对象是否为空
const aa = {
  name: "a",
};
const bb = {};
// 1) Object.keys()
console.log("aa===", Object.keys(aa).length === 0); // false
console.log("bb===", Object.keys(bb).length === 0); // true
// 2) JSON.stringify()
console.log("aa===", JSON.stringify(aa) === "{}"); // false
console.log("bb===", JSON.stringify(bb) === "{}"); // true

// 题目33
// ES6 中的 map 和原生的对象有什么区别
//    object的键是字符串。
//    map的键可以是任意类型。

//    object获取键值使用Object.keys（返回数组）；
//    Map获取键值使用 map变量.keys() (返回迭代器)。

// 题目34
// a 标签默认事件禁掉之后做了什么才实现了跳转
// 首先，preventDefault()会导致阻止默认行为（即链接跳转），如果需要在阻止了默认行为后，依旧能够实现页面跳转，可以使用location.href

// 题目35
// function say(word) {
//   let word = "hello";
//   console.log(word);
// }
// say("hello Lili"); // 报错：Identifier 'word' has already been declared

// 题目36
var yideng = Array(3);
yideng[0] = 2;
var result = yideng.map((elem) => {
  return "1";
});
console.log("result======", result); // ['1', 空属性 × 2]
console.log("36===============================");

// 题目36
var length1 = 10;
function fn() {
  console.log(this.length1);
}
var yideng = {
  length1: 5,
  method: function (fn) {
    fn();
    console.log("arguments", arguments); // Arguments(2) [ƒ, 1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    arguments[0]();
  },
};
yideng.method(fn, 1); // 10 2
console.log("36================================");

// 题目37
// 介绍 instanceof 原理，并手动实现
function myInstanceof(son, parent) {
  const prototype = parent.prototype;
  let proto = Object.getPrototypeOf(son);
  while (true) {
    // 说明已经找到原型链最顶层
    if (proto === null) return false;
    // 构造函数的原型(R.prototype)存在于实例的原型链上(L.__proto__)
    if (proto === prototype) return true;
    // 递归原型链向上查找
    proto = Object.getPrototypeOf(proto);
  }
}
function C() {}
function D() {}

const o = new C();
console.log(myInstanceof(o, C)); // true
console.log(myInstanceof(o, D)); // false

// 题目38
// webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin
// https://github.com/lgwebdream/FE-Interview/issues/936
// ignore-plugin：忽略文件
// uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前使用)
// terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
// webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
// mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载
// serviceworker-webpack-plugin：为网页应用增加离线缓存功能
// clean-webpack-plugin: 目录清理
// speed-measure-webpack-plugin: 可以看到每个 Loader 和 Plugin 执行耗时
// webpack内置UglifyJsPlugin，压缩和混淆代码。
// webpack内置CommonsChunkPlugin，提高打包效率，将第三方库和业务代码分开打包。
// ProvidePlugin：自动加载模块，代替require和import
// html-webpack-plugin可以根据模板自动生成html代码，并自动引用css和js文件
// extract-text-webpack-plugin 将js文件中引用的样式单独抽离成css文件
// DefinePlugin 编译时配置全局变量，这对开发模式和发布模式的构建允许不同的行为非常有用。
// HotModuleReplacementPlugin 热更新
// DllPlugin和DllReferencePlugin相互配合，前者第三方包的构建，只构建业务代码，同时能解决Externals多次引用问题。DllReferencePlugin引用DllPlugin配置生成的manifest.json文件，manifest.json包含了依
// 赖模块和module id的映射关系
// optimize-css-assets-webpack-plugin 不同组件中重复的css可以快速去重
// webpack-bundle-analyzer 一个webpack的bundle文件分析工具，将bundle文件以可交互缩放的treemap的形式展示。
// compression-webpack-plugin 生产环境可采用gzip压缩JS和CSS
// happypack：通过多进程模型，来加速代码构建

// 题目39
// for..of 和 for...in 是否可以直接遍历对象？为什么？如果不可以有什么解决方案？
// for..of 不能直接遍历对象，for...in 可以直接遍历对象
// 1）Object.key()
const obj11 = { a: 1, b: 2, c: 3 };
for (const prop of Object.keys(obj11)) {
  console.log(prop);
}
// a
// b
// c

// 2）Object.values()
for (const val of Object.values(obj11)) {
  console.log(val);
}
// 1
// 2
// 3

// 3）Object.entries()
for (const item of Object.entries(obj11)) {
  console.log(item);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

// 4）Iterator
// obj11{Symbol.iterator} = function () {
// 	let index = 0
// 	const _this = this
// 	const keys = Object.keys(_this)
// 	const len = keys.length
// 	return {
// 		next() {
// 			if (index < len) {
// 				return {
// 					value {
// 						value: _this[keys[index++]],
// 						done: false
// 					}
// 				}
// 				return {
// 					value: null,
// 					done: true
// 				}
// 			}
// 		}
// 	}
// }

// 5）Generator
object[Symbol.iterator] = function* () {
  const keys = Object.keys(this);
  for (let i = 0, len = keys.length; i < len; i++) {
    yield this[keys[i]];
  }
};
for (const item of obj) {
  console.log(item);
}

// 40、主流浏览器， 内核是什么？
// 主流浏览器： 有自己独立内核的浏览器。6个吧
//    1） Navigator(网景公司，内核Gecko)
//    2)  Opera(内核Preston, 现在更新为Blink)
//    3） IE(Trident)，现在是Edge(内核为Chromium)
//    4） Firefox(内核Gecko)
//    5） Safari(Webkit)
//    6） Chrome(Webkit, 分支Chromium, Blink)

// 41、进程、线程
// 浏览器是一个多进程、多线程的应用程序
// 浏览器主进程只有一个
// GPU进程（3D渲染效果）
// 第三方插件进程（扩展插件）
// 浏览器渲染进程（内核）：
//     GUI渲染线程（HTML、CSS）、
//     JS解析引擎线程（js)、
//     事件触发线程（事件会被放到一个事件队列里面）、
//     定时器触发线程（setTimeOut）、
//     异步网络请求线程（Ajax）

// 42、关于article 和 section标签
// article表示文章，范围更大； 强调一个整体，比较独立的一部分
// section表示部分，范围相对较少；强调的是分块

// 43、块元素
// p, div(display: block)
// 独占一行，不能与其他元素共享
// 浏览器默认排布，自上而下
// 块元素内部，可以包含块元素也可以包含行内元素
// 宽度：默认撑满父元素
// 高度：内容撑开，可以通过css来设置宽高

// 44、行内元素
// a，span
// 不能独占一行，不能与其他元素共享一行
// 如果一行中不能容纳一个行内元素，会自动换行
// 行内元素只能嵌套行内元素，不能嵌套款元素，a元素除外
// 宽度，高度都是由内容决定

// 45、css样式优先级
// 行内样式 > 内部样式=外部样式
//         （当内部样式和外部样式冲突的时候，
//         后写的样式会覆盖先写的样式）

// HTML标签的全局属性：
// style（样式）、 id（唯一标识）、class（分类）、title（图片提示）

// 46、复合选择器
// 伪类选择器（不是类，但很像类），选中的是元素的某种状态描述
// 伪类选择器分为
//    动态伪类（link、visited、hover、active四个）、link和visited是a元素独有的；hover和active是所有元素都有的；
//        link没有被访问过
//        visited被访问过
//        hover鼠标悬停
//        active被激活的状态
//        link
//        link hover
//        link hover active
//    结构伪类（）

// 47、复合选择器
// <h1 class="rich">张三 </h1>
// <h1 class="beauty">张三2 </h1>
// <p class="rich">3</p>
// <p class="beauty">4</p>
//     1交集选择器（两个选择器条件同时满足） p.beauty{} 并且的关系
//     2并集选择器（两个选择器条件同时满足） p, beauty{} 或者的关系
//     3兄弟选择器： +：紧邻的兄弟    ~：所有相邻的兄弟
//     4属性选择器： [属性名=""]    ^以什么开头，$以什么结尾  *表示含有
//     5后代选择器： 直接后代使用 >    所有后代，使用空格
//     6伪类选择器：
//     7伪元素选择器：像是元素，但不是元素，可以理解为某些元素的某些位置，语法通过两个冒号::实现(before, after, fist-letter, first-line)
//          <span>999</span>
//          span::before {
//              content: '$'
//          }

// 48、line-height写法
// line-height行高和文字大小尽量不要一样
// line-height值： 1,像素  2,normal  3,数值（没有单位--相当于倍数）  4,百分比
// line-height: 1.5 相当于font-siz e的1.5倍（比较常用）
// 一行中，如果有两个行高，行高值大的生效（可以使用倍数），使用line-height可以居中，但是并不是真正一样的居中，看着没什么区别，跟字体有关系，偏下一点


// 50、颜色表示
// 色相环（0-360） 饱和度（0-100%） 明亮度（0-100%）
// color: hsl(180deg, 100%, 50%)

// 51、选择器权重计算
// id选择器   找#
// 类、伪类、属性选择器   找. 找：找[]
// 元素、伪元素选择器   找名  找::

// 52、什么使用使用css属性继承？
// 整个网页做统一的样式处理的时候， 比如统一文字字族，统一文字大小，统一行高

// 53、浏览器渲染原理
//   1.解析  html树   css树
//   2.从父元素开始渲染，才是子元素
//   3.渲染的时候，每一个元素的所有css属性必须有值
//     a.样式声明（自定义声明/浏览器默认）
//     b.计算层叠（权重问题）
//     c.如果可以，则从父元素那里继承
//     d.赋予默认值


// 54、margin合并的问题
// a. margin合并，块元素且上下结构才会出现合并。如果是行元素，左右设置margin-right,margin-left是不会被合并的

// 55、行元素padding的问题： padding左右有空间，纵向显示但不占空间

// 56、margin塌陷的问题：

