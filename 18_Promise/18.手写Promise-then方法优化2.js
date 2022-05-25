// 1.状态的设计
const PROMISE_STATE_PENDING = "pending";
const PROMISE_STATE_FULFILED = "fulfiled";
const PROMISE_STATE_REJECTED = "rejected";

// 工具函数封装
function execFnTryAndCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}
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
          if (this.status !== PROMISE_STATE_PENDING) return;
          this.status = PROMISE_STATE_FULFILED;
          this.value = value;
          // console.log("resolve被调用了");
          this.onfulfilledFns.forEach((fn) => fn(this.value));
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATE_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATE_PENDING) return;
          this.status = PROMISE_STATE_REJECTED;
          this.reason = reason;
          // console.log("reject被调用了");
          this.onrejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onfulfilled, onrejected) {
    return new MyPromise((resolve, reject) => {
      // 1.如果在then调用的时候，状态已经确定下来了
      if (this.status === PROMISE_STATE_FULFILED && onfulfilled) {
        // try {
        //   const value = onfulfilled(this.value);
        //   resolve(value);
        // } catch (err) {
        //   reject(err);
        // }
        // 简写
        execFnTryAndCatchError(onfulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATE_REJECTED && onrejected) {
        // try {
        //   const reason = onrejected(this.reason);
        //   resolve(reason);
        // } catch (err) {
        //   reject(err);
        // }
        execFnTryAndCatchError(onrejected, this.reason, resolve, reject);
      }

      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATE_PENDING) {
        this.onfulfilledFns.push(() => {
          // try {
          //   const value = onfulfilled(this.value);
          //   resolve(value);
          // } catch (err) {
          //   reject(err);
          // }
          execFnTryAndCatchError(onfulfilled, this.value, resolve, reject);
        });
        this.onrejectedFns.push(() => {
          // try {
          //   const reason = onrejected(this.reason);
          //   resolve(reason);
          // } catch (err) {
          //   reject(err);
          // }
          execFnTryAndCatchError(onrejected, this.reason, resolve, reject);
        });
        // this.onfulfilled = onfulfilled;
        // this.onrejected = onrejected;
      }
    });
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("状态 pending===");
  // reject(111);
  // throw new Error("executor error");
  resolve(222);
});

promise
  .then(
    (res) => {
      console.log("res1:", res);
      return 'aaa'
      // throw new Error("错误");
    },
    (err) => {
      console.log("err1:", err);
      return "bbb";
    }
  )
  .then(
    (res) => {
      console.log("res2:", res);
    },
    // 只有上一个中抛出异常，才会来到这个catch
    (err) => {
      console.log("err2", err);
    }
  );
