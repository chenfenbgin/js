// 路由模块
// 1.导入express
const express = require("express");
// 2. 创建路由对象
const router = express.Router();

// 3.挂载具体的路由
router.get("/", (req, res) => {
  res.send("hello get");
});
router.post("/", (req, res) => {
  res.send("hello post");
});
// 4. 导出路由对象
module.exports = router;
