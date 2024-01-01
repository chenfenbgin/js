/*
 * @des: ''
 * @author: fengbin.chen
 */
const info = {
  name: "chen",
  age: 23,
  foo: function () {
    console.log("foo函数~");
  },
};

setTimeout(() => {
  info.name = '天选之子'
}, 1000)
module.exports = info;