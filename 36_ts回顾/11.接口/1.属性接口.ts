function printLabel(labelObj: { label: string }): void {
  console.log("--------------", labelObj.label);
}

printLabel({ label: "张三。。。" });

// 接口：行为和动作的规范，对批量方法进行约束
// 1、属性接口
interface FullName {
  firstName: string;
  secondName: string;
  sex?: string; // 接口可选属性
}
function printName(name: FullName) {
  // 必须传入对象  firstName、secondName
  console.log("打印名字： ", name.firstName + "-" + name.secondName);
}

// 使用
// printName(123)
console.log(
  printName({
    firstName: "张三",
    secondName: "李四",
  })
);

// 报错：
// printName({
//   age: 12,
//   firstName: "张三",
//   secondName: "李四",
// })

// 可以用这种方式传入，先定义对象
var obj = {
  age: 12,
  firstName: "张三",
  secondName: "李四",
};
printName(obj); // 传入的参数必须包含firstName、secondName
