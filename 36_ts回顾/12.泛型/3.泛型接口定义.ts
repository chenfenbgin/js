// 函数类型接口， 只能支持sting,返回也是。所以我们下面使用泛型
interface ConfigFn {
  (value1: string, value2: string): string;
}

var setData: ConfigFn = function (value1: string, value2: string): string {
  return value1 + value2;
};
setData("name", "李四");

// 第一种定义泛型接口
interface ConfigFn2 {
  //定义泛型接口，需要在前面加个: <T>
  <T>(value: T): T;
}
var getData1: ConfigFn2 = function <T>(value: T): T {
  return value;
};
getData1<string>("张三。。。");
getData1<number>(123);

// 第二种定义泛型接口的办法
interface ConfigFn3<T> {
  (value: T): T;
}
function getData2<T>(value: T): T {
  return value;
}
var myGetData: ConfigFn3<string> = getData2;
console.log(myGetData("20"));
// console.log(myGetData(20));  // 报错
