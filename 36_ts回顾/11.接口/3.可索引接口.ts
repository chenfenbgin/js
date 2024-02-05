// 可索引接口： 对数组、对象的约束   （不常用）
// ts定义数组的方式
var arr: number[] = [1, 2, 3, 4];
var arr1: Array<number> = [5, 6, 7, 8];

// 定义可索引接口，对数组的约束, 第一种写法
interface UseArr {
  [index: number]: string;
}
var arr2: UseArr = ["aaa", "bbb"];
console.log(arr2[0]);

// 可索引接口： 对对象的约束
interface UserObj {
  [index: string]: string;
}
var arr3: UserObj = { name: "李四" };
