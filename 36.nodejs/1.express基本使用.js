const express = require("express");

const app = express();
// 挂载路由
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/", (req, res) => {
  res.send("hello world");
});
app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
