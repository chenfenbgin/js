const express = require("express");
const bodyParser = require('./custom-body-parser')
const app = express();

app.use(bodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("启动成功, http://localhost");
});
