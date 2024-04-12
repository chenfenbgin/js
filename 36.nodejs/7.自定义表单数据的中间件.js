const express = require("express");
// 7. 导入nodejs的内置 querystring模块
const qs = require("querystring");
const app = express();

// 1.这是解析表单数据的中间件
app.use((req, res, next) => {
  // 2.定义中间件具体的业务逻辑
  // 3. 定义一个str字符串，专门用来存储客户端发送过来的请求体数据
  let str = "";
  // 4. 监听req的data事件
  req.on("data", (chunk) => {
    str += chunk;
  });

  // 5. 监听req的end事件
  req.on("end", () => {
    // 在str中存放的是完整的请求体数据
    console.log("str===", str);
    // 8. 解析字符串， 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str);
    console.log("解析bodystr===", body);
    req.body = body;
    next();
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
