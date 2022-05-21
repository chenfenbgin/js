// 1、 ||= 逻辑或赋值运算
let message = undefined;
// message = message || '空值';

message ||= "空值";
console.log(message); // 空值

// 2、&&= 逻辑与赋值运算，用得很少
// 3、??= 逻辑空赋值运算， 跟 ||=有区别，||=中如果是''/undefined，会是false
let message1 = 0; //这不是undefined和null
let message2 = "";
message1 ??= "空值";
console.log(message1);//0
console.log(message2);
