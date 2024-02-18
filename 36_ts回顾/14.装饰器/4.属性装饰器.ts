// 类装饰器
function logClass(target: any) {
  console.log("target---: ", target); // target就是当前类

  return function (target: any) {};
}
// 属性装饰器
function logProperty(params: any) {
  return function (target: any, attr: any) {
    console.log(target);
    console.log(attr);
    target[attr] = params;
  };
}

@logClass
class HttpClient {
  @logProperty("http://www.baidu.com")
  public apiUrl: string | undefined;
  constructor() {}
  getData() {}
}
var http = new HttpClient();
http.getData();
