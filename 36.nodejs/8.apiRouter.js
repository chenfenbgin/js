const express = require("express");

const router = express.Router();

router.get("/get", (req, res) => {
  // 通过req.query获取客户端通过查询字符串，发送导服务器的数据
  const query = req.query;
  // 调用send，向客户端响应处理的结果
  res.send({
    status: 0,
    msg: "get请求处理成功！",
    data: query,
  });
});
// 定义post接口
router.post('/post', (req, res) => {
  const body = req.body
  res.send({
    status: 0, 
    msg: 'post请求成功！',
    data: body
  })
})

// 定义delete接口
router.delete('/delete', (req, res) => {
  const body = req.body
  res.send({
    status: 0, 
    msg: 'delete请求成功！',
    data: body
  })
})
module.exports = router;
