// 1.状态的设计
const PROMISE_STATE_PENDING = "pending";
const PROMISE_STATE_FULFILED = "fulfiled";
const PROMISE_STATE_REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATE_PENDING;
    this.value = null;
    this.reason = null;

    const resolve = (value) => {
      if (this.status === PROMISE_STATE_PENDING) {
        this.status = PROMISE_STATE_FULFILED;
        this.value = value;
        console.log("resolve被调用了");
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
        this.status = PROMISE_STATE_REJECTED;
      }
      console.log("reject被调用了");
    };
    executor(resolve, reject);
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("传入的函数直接被调用了 pending===");

  reject(111);
  // resolve(222);
});

// 当我们调用then的时候，应该需要两个变量来保存
promise.then(
  (res) => {},
  (err) => {}
);
