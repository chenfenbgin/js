const express = require("express");
const apiRouter = require("./8.apiRouter");
const app = express();
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

// 必须在配置cors中间件之前，配置jsonp的接口
app.get("/api/jsonp", (req, res) => {
  // 定义jsonp接口的实现过程

  // 1.得到函数的名称
  const fn = req.query.callback;
  // 2.定义要发送到客户端的数据对象
  const data = { name: "chefnengbin", age: 12 };
  // 3.拼接出一个函数的调用
  const str = `${fn}(${JSON.stringify(data)})`;
  // 4.把拼接的字符串，响应给客户端
  res.send(str);
});
// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域的问题
const cors = require("cors");

app.use(cors());
app.use("/api", apiRouter);

app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
