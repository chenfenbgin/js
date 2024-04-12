const express = require("express");

const app = express();
// 1.定义一个最简单的中间件函数
const mw = function (req, res, next) {
  console.log("这是最简单的中间件函数。。。");
  // 2. next() 把流转关系，转交给下一个中间件或路由
  next();
};

// 6. 局部中间件函数
const selfFn = function (req, res, next) {
  console.log("局部中间件函数测试。。。");
  next();
};
// 7 局部中间件函数1
const selfFn1 = function (req, res, next) {
  console.log("局部中间件函数测试1。。。");
  next();
};


// 4. 简化写法
// app.use((req, res, next) => {
//   console.log('这是中间件简化写法');
//   next()
// })

// 5.定义多个全局中间件
app.use((req, res, next) => {
  console.log("这是第二个全局中间件");
  next();
});

// 3.注册全局生效的中间件函数
app.use(mw);

// 8.定义路由
app.get("/", (req, res) => {
  throw new Error('服务器内部发生了错误信息！')
  res.send('Home Page。。。')
});

// 9.定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {
  console.log('服务器发生了错误', err.message);
  res.send('Error', err.message);
})
// app.get("/", (req, res) => {
//   res.send("home page");
// });
app.get("/user", (req, res) => {
  res.send("user page");
});

// 6. 创建局部的中间件函数, 先中间件函数处理，再交给路由函数处理
app.get("/about", selfFn, (req, res) => {
  res.send("about page");
});
// 7.调用多个局部中间件函数。selfFn, selfFn1可以写成数组[selfFn, selfFn1]
app.get("/about1", selfFn, selfFn1, (req, res) => {
  res.send("about1 page");
});

app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
