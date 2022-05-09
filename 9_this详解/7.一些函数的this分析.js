// function， 是独立函数调用
setTimeout(function () {
  console.log(this); // window
}, 2000);
