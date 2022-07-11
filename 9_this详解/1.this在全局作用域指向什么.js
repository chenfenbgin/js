//在大多数情况下，this都是出现在函数中
// 在全局作用域下，浏览器中this指向window，
//而node环境下，指向{},因为node下，js会被当成一个module，加载-> 编译->放到一个函数中->执行这个函数.apply({})
console.log(this);
