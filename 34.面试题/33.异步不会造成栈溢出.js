/*
 * @des: ''
 * @author: fengbin.chen
 */
function foo() {
  setTimeout(foo, 0);
}
foo();



// 注：什么是数据响应式？
// 数据变化后，会自动重新运行以来该数据的函数