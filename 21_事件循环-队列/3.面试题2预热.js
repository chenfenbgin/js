async function bar() {
  console.log("2222222");
  return new Promise((resolve) => {
    resolve();
  });
}

async function foo() {
  console.log("1111111");
  await bar();
  // 3333的执行必须等到bar()调用了resovle才会执行。
  // 因为调了resolve，所以可以3333是被放到then()里面了，被放到微任务里面
  console.log("3333333");
}

foo();
console.log("4444444");

// 输出：
// 1111111
// 2222222
// 4444444
// 3333333
