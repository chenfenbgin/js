/*
 * @des: ''
 * @author: fengbin.chen
 */
function* foo() {
  console.log('函数开始执行~')

  const value = 100
  console.log('value:', value) //100
  const n = yield value

  const value1 = n * 10
  console.log('value1:',value1) // 100
  yield

  const value2 = 300
  console.log('value2:',value2) // 300
  yield

  console.log('函数执行结束！')
}

// foo()


// 1. 生成器上的next方法可以传递参数
const generator = foo()
console.log('1...', generator.next()) // {value: 100, done: false}
console.log('2...',generator.next(10)) // {value: undefined, done: false}
console.log('3...',generator.next()) // {value: undefined, done: false}
console.log('4...',generator.next()) // {value: undefined, done: true}