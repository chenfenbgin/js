console.log("start---");

// 业务代码,setTimeout()本身不是异步的，是传入的被回调的函数才是异步的
setTimeout(() => {

}, 1000);

console.log("end----");
