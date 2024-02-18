// 装饰器
function logClass(target: any) {
  console.log("target---: ", target); // target就是当前类

  return class extends target {
    apiUrl: any = "我是修改后的数据";
    getData() {
      this.apiUrl = this.apiUrl + "0000000000";
      console.log("--------------", this.apiUrl);
    }
  };
}

@logClass
class HttpClient {
  public apiUrl: string | undefined;
  constructor() {
    this.apiUrl = "我是构造函数里面的apiUrl...";
  }
  getData() {
    console.log(this.apiUrl);
  }
}

var http: any = new HttpClient();
http.getData();
