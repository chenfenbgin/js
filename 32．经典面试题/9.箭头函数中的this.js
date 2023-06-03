var x = 11;
var obj = {
  x: 22,
  say: () => {
    console.log(this.x); // 打印出来的是11，因为箭头函数不绑定this,即使满足 obj.say.call(obj)
  },
};

obj.say(); // node 环境下执行的是undefined
