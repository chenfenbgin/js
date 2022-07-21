function* foo() {
  console.log('函数开始执行~')

  const value = 100
  console.log(value)
  const n = yield value

  const value1 = n * 10
  console.log(value1)
  yield

  const value2 = 300
  console.log(value2)
  yield

  console.log('函数执行结束！')
}

// foo()


// 1. 生成器上的next方法可以传递参数
const generator = foo()
console.log(generator.next())
console.log(generator.next(10))
console.log(generator.next())
console.log(generator.next())