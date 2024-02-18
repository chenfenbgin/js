/**
 * 装饰器： 是一种特殊类型的声明，它能被附加到类声明，方法，属性或者参数上，可以修改类的行为。
 * 通俗的讲： 是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
 * 常见的装饰器： 类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 装饰器的写法： 普通装饰器（无法传参） 、装饰器工厂（可传参）
 * 装饰器： es7的特性
 */
// 装饰器
function logClass(params: any) {
  console.log("params: ", params);

  // params就是当前类
  params.prototype.apiUrl = "动态扩展的属性：www.baidu.com";
}

@logClass
class HttpClient {
  constructor() {}
  getData() {}
}

var http: any = new HttpClient();
console.log("http:apiUrl---", http.apiUrl);
