// export const name = "chen123";
// export const age = 23;
// export function foo() {
//   console.log("foo function");
// }

// export class Person{

// }

// 第二种方式： export 导出 和 声明分开
const name = "chen123";
const age = 23;
function foo() {
  console.log("foo function");
}

// export {} 这里不是对象，{}是语法。
export {
  name,
  age,
  foo,
  // 不能这么写： name: name
};


// 第三种方式： 第二种导出时起别名
// export {
//   name as fName,
//   age as fAge,
//   foo as Ffoo,
// };