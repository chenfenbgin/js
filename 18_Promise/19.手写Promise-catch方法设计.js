const PROMISE_STATE_PENDING = "pending";
const PROMISE_STATE_FULFILED = "fulfiled";
const PROMISE_STATE_REJECTED = "rejected";

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
    onrejected =
      onrejected === undefined
        ? (err) => {
            throw err;
          }
        : onrejected;
    return new MyPromise((resolve, reject) => {
      // 1.如果在then调用的时候，状态已经确定下来了
      if (this.status === PROMISE_STATE_FULFILED && onfulfilled) {
        execFnTryAndCatchError(onfulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATE_REJECTED && onrejected) {
        execFnTryAndCatchError(onrejected, this.reason, resolve, reject);
      }

      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATE_PENDING) {
        if (onfulfilled)
          this.onfulfilledFns.push(() => {
            execFnTryAndCatchError(onfulfilled, this.value, resolve, reject);
          });
        if (onrejected)
          this.onrejectedFns.push(() => {
            execFnTryAndCatchError(onrejected, this.reason, resolve, reject);
          });
      }
    });
  }

  catch(onrejected) {
    this.then(undefined, onrejected);
  }
}

const promise = new MyPromise((resolve, reject) => {
  console.log("状态 pending===");
  reject(111);
  // throw new Error("executor error");
  // resolve(222);
});

// 如果then第二个参数不传，就交给catch。如果传了，就给then第二个参数。
promise
  .then((res) => {
    console.log("res1:", res);
    // throw new Error("错误");
  })
  .catch((err) => {
    console.log("err1", err);
  });
