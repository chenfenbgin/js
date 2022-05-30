const obj = {
  name: "chen",
  age: 23,
  friends: {
    name: "feng",
  },
  hobbies: ["足球"],
};

// 需求：将上面的对象转成jSON字符串
// 1、直接转化
const jsonString1 = JSON.stringify(obj);
console.log(jsonString1); //{"name":"chen","age":23,"friends":{"name":"feng"},"hobbies":["足球"]}

// 2、stringify第二个参数replacer
// 2.1、传入数组：设定哪些是需要转换的。放入那个key就会转换
const jsonString2 = JSON.stringify(obj, ["name", "friends"]);
console.log(jsonString2); //{"name":"chen","friends":{"name":"feng"}}

// 2.2、传入回调函数,可以对key/value做拦截
const jsonString3 = JSON.stringify(obj, (key, value) => {
  // return value;
  if (key === "age") {
    return value + 1;
  }
  return value;
});
console.log(jsonString3); //{"name":"chen","age":24,"friends":{"name":"feng"},"hobbies":["足球"]}

// 3、stringify第三个参数 space
const jsonString4 = JSON.stringify(obj, null, 2);
console.log(jsonString4);