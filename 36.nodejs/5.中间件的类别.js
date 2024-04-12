const express = require("express");

const app = express();

// 注意： 除了错误级别的中间件，其他中间件，必须在路由之前进行配置
app.use(express.json())
// 通过express.urlencoded()这个中间件，来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false}))

app.post('/user', (req, res) => {
  // 在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body 默认为undefined
  console.log('req.body', req.body);
  res.send('ok...')
})

app.post('/book', (req, res) => {
  console.log(req.body);
  res.send('book...')
})

app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
