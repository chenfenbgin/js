const express = require("express");
// 导入解析表单数据的中间件 body-parser
const parser = require("body-parser");
const app = express();

app.use(parser.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log("req.body", req.body);
  res.send("ok...");
});

app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
