// 装饰器
function logClass(params: any) {
  return function (target: any) {
    console.log("params===: ", params); // hello
    console.log("target---: ", target); // target就是当前类
    target.prototype.apiUrl = params || "扩展的属性";
  };
}

@logClass("www.baidu.com")
class HttpClient {
  constructor() {}
  getData() {}
}

var http: any = new HttpClient();
console.log("http:apiUrl---", http.apiUrl);
