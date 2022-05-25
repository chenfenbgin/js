// 1.状态的设计
const PROMISE_STATE_PENDING = "pending";
const PROMISE_STATE_FULFILED = "fulfiled";
const PROMISE_STATE_REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATE_PENDING;
    this.value = null;
    this.reason = null;
    this.onfulfilledFns = [];
    this.onrejectedFns = [];

    const resolve = (value) => {
      if (this.status === PROMISE_STATE_PENDING) {
        queueMicrotask(() => {
          this.status = PROMISE_STATE_FULFILED;
          this.value = value;
          console.log("resolve被调用了");
          // 我们需要执行then传进来的第一个函数
          // this.onfulfilled(this.value);
          this.onfulfilledFns.forEach((fn) => fn(this.value));
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
     
        queueMicrotask(() => {
          this.status = PROMISE_STATE_REJECTED;
          this.reason = reason;
          console.log("reject被调用了");
          // 我们需要执行then传进来的第二个函数
          // this.onrejected(this.reason);
          this.onrejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };
    executor(resolve, reject);
  }

  then(onfulfilled, onrejected) {
    // 1.如果在then调用的时候，状态已经确定下来了
    if (this.status === PROMISE_STATE_FULFILED && onfulfilled) {
      onfulfilled(this.value);
    }
    if (this.status === PROMISE_STATE_REJECTED && onrejected) {
      onrejected(this.reason);
    }

    // 2.将成功回调和失败的回调放到数组中
    if (this.status === PROMISE_STATE_PENDING) {
      this.onfulfilledFns.push(onfulfilled);
      this.onrejectedFns.push(onrejected);
      // this.onfulfilled = onfulfilled;
      // this.onrejected = onrejected;
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("传入的函数直接被调用了 pending===");

  reject(111);
  // resolve(222);
});

// 问题1: 调用then方法的多次调用
promise.then(
  (res) => {
    console.log("res===", res);
  },
  (err) => {
    console.log("err===", err);
  }
);

promise.then(
  (res) => {
    console.log("res2===", res);
  },
  (err) => {
    console.log("err2===", err);
  }
);

// 在确定Promise状态之后，在此调用我们的then
// 这是不会被回调的，因为前面放到函数遍历已经执行完了
setTimeout(() => {
  promise.then((res) => {
    console.log("res3---", res);
  });
}, 1000);
