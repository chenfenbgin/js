// 1. 导入mysql模块
const mysql = require("mysql");
// 2. 建立连接关系
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "my_test",
});

// 3. 测试mysql模块是否正常
db.query('select * from user', (err, results) => {
  if(err) return console.log(err.message);
  // 注意：如果执行的是select查询语句，则执行的结果是数组
  console.log('result===', results);
})