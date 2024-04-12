const express = require("express");
// 1.导入路由模块
const router = require("./3.router.js");

const app = express();
// 2.模块化方式挂载路由, 注册路由模块
app.use(router);

// 注意：app.use() 函数的作用，就是用来注册全局中间件

app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
