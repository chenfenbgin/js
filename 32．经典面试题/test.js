//  题目1、使用ES6 的Proxy实现数组负索引。
// （负索引：例如，可以简单地使用arr[-1]替代arr[arr.length-1]访问最后一个元素，[-2]访问倒数第二个元素，以此类推）
const targetArr = (sourceArr) => {
    return new Proxy(sourceArr, {
        get(target, key, receiver) {
            // 数组
            if (Array.isArray(sourceArr)) {
                const len = target.length
                const intKey = Number(key)
                return Reflect.get(target, intKey < 0 ? len + intKey : intKey, receiver)
            }
            // 对象
            return Reflect.get(target, key, receiver)
        }
    })
}

const test = targetArr([1, 2, 3, 4, 5])
console.log(test[-1])
console.log(test[-2])

const obj = targetArr({'-1': 'chen', '-2': 'feng' })
console.log(obj[-1])
console.log(obj[-2])


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
console.log('======================')


// 题目3、arguments参数
function side(arr) {
    arr[0] = arr[2];
}
function a(a, b, c = 3) {
    c = 10;
    side(arguments); // 1 1 10
    return a + b + c; // 12
}

console.log('a(1, 1, 1): ', a(1, 1, 1)); // 12
// 加了默认值，则转为严格模式（其实也可以使用 "use strict" 转），这时候参数（a、b、c）与 arguments 没有绑定关系，所以修改 arguments 不会影响到参数（a、b、c）的值，修改参数（a、b、c）也不会影响到 arguments。
// 不加默认值，则为非严格模式，结果和上面的相反。
console.log('=======================')

// 题目4
var min = Math.min(); //
max = Math.max();
console.log(min < max);
// Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。如果没有参数，则返回 Infinity，无穷大。
// 而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false
console.log('=======================')

// 题目5
var a1 = [0];
if (a1) {
    console.log('a1: ', !!a1 === true); // 执行
} else {
    console.log('a1=', a1);
}
console.log('=======================')



// 题目6
var x=1;
if(function f(){}){
    x += typeof f;
}
console.log(x) // 1undefined
// 条件判断为假的情况有：0，false，''，null，undefined，未定义对象。
// 函数声明写在运算符中，其为true，但放在运算符中的函数声明在执行阶段是找不到的。另外，对未声明的变量执行typeOf不会报错，会返回undefined
console.log('=======================')


// 题目7
function f(){
    return f;
}
console.log(new f() instanceof f); // false
// a instanceof b 用于检测a是不是b的实例。如果题目f中没有return f,则答案明显为true;
// 而在本题中new f()其返回的结果为f的函数对象，其并不是f的一个实例。


// 题目8
[typeof null, null instanceof Object]  // ['object', false]
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
    switch(value) {
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefined');
            break;
        default:
            console.log('Do not know!');
    }
}
showCase(new String('A')); // Do not know!
// switch 是严格比较, String 实例和 字符串不一样.
// var str1 = 'str';
// var str2 = new String('str');
// console.log(typeof str1); // "string"
// console.log(typeof str2); //"object"


// 题目9
var arr = [0,1];
arr[5] = 5;
newArr = arr.filter(function(x) { return x === undefined;});
console.log(newArr.length);  // 0
// filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。
// callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
// 也就是说 从 2-4 都是没有初始化的'坑'!, 这些索引并不存在与数组中. 在 array 的函数调用的时候是会跳过这些'坑'的.

