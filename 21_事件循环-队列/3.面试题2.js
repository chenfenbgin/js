/*
 * @des: ''
 * @author: fengbin.chen
 */
async function async1() {
  console.log("2. async1 start");
  await async2();
  console.log("6. async1 end");
}

async function async2() {
  console.log("3. async2");
}

console.log("1. script start");

setTimeout(function () {
  console.log("8. setTimeout");
}, 0);

async1();

new Promise(function (resolve, reject) {
  console.log("4. promise1");
  resolve();
}).then(function () {
  console.log("7. promise2");
});

console.log("5. script end ");

// 1. script start
// 2. async1 start
// 3. async2
// 4. promise1
// 5. script end
// 6 .async1 end
// 7. promise2
// 8. setTimeout