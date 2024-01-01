/*
 * @des: ''
 * @author: fengbin.chen
 */
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
        queueMicrotask(() => {
          this.value = value;
          console.log("resolve被调用了", this.value);
          // 我们需要执行then传进来的第一个函数
          this.onfulfilled(this.value);
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
        this.status = PROMISE_STATE_REJECTED;
        queueMicrotask(() => {
          this.reason = reason;
          console.log("reject被调用了", this.reason);
          // 我们需要执行then传进来的第二个函数
          this.onrejected(this.reason);
        });
      }
    };
    executor(resolve, reject);
  }

  then(onfulfilled, onrejected) {
    this.onfulfilled = onfulfilled;
    this.onrejected = onrejected;
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("传入的函数直接被调用了 pending===");

  reject(111);
  resolve(222);
});

// 当我们调用then的时候，应该需要两个变量来保存
promise.then(
  (res) => {
    console.log("res:----", res);
  },
  (err) => {
    console.log("err===", err);
  }
);
promise.then(
  (res) => {
    console.log("res2:----", res);
  },
  (err) => {
    console.log("err2===", err);
  }
);
