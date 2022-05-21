const foo = 0;
const foo1 = "";
const bar = foo || "空值";
console.log(bar); //  打印空值，其实是拿不到0的

// 空值合并运算符， 可以明确判断foo是否是null、undefined,如果是null和undefined才会用后面的值
const bar1 = foo ?? "空值";
console.log(bar1); // 0
