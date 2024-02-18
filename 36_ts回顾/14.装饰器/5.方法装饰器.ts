/**
 * 方法装饰器： 会被应用到方法的属性描述符上，可以用来监视，修改或替换方法定义
 * 需要传入3个参数： 1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
 *                  2. 成员的名字
 *                  3. 成员的属性描述符
 */
function get(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target);
    console.log(methodName);
    console.log(desc);
    // 1、方法装饰器可以修改当前的属性和方法
    target.apiUrl = "xxx";
    target.run = function () {
      console.log("run---");
    };
    // 2.1. 保存当前的方法
    // 2、方法装饰器可以修改当前的方法
    var oMethod = desc.value;
    desc.value = function (...args: any[]) {
      args = args.map((value) => {
        return String(value);
      });
      console.log("修改后args--------", args);
      oMethod.apply(this, args);
    };
  };
}

class HttpClient {
  public apiUrl: string | undefined;
  constructor() {}

  @get("http://www.baidu.com")
  getData(...args: any[]) {
    console.log("方法装饰器可以修改当前的方法--------", args);
    console.log(this.apiUrl);
  }
}
var http: any = new HttpClient();
console.log("apiUrl===", http.apiUrl);
http.run();
http.getData(123, "xxx");

// 装饰器的执行顺序：
// 属性 > 方法 > 方法参数 > 类
// 如果有多个同样的装饰器，它会先执行后面的
