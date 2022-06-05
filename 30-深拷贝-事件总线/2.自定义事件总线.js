class MYEventBus {
  constructor() {
    this.eventBus = {};
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    handlers.push({ eventCallback, thisArg });
  }

  off(eventName, eventCallback) {
    let handlers = this.eventBus[eventName];
    if (!handlers) {
      return;
    }
    const newHandlers = [...handlers];
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i];
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler);
        handlers.splice(index, 1);
      }
    }
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];
    if (!handlers) {
      return;
    }
    handlers.forEach((handler) => {
      handler.eventCallback.apply(handler.thisArg, payload);
    });
  }
}

const eventBus = new MYEventBus();

// main.js, 监听， 参数：事件名称，跟传递的参数payload
eventBus.on(
  "abc",
  function (payload) {
    console.log("监听abc", this);
  },
  { name: "zhangsan" }
);
// 是可以监听多个事件的
const handleCallback = function (payload) {
  console.log("监听abc", this);
};
eventBus.on("abc", handleCallback, { name: "zhangsan" });

// utils.js
eventBus.emit("abc", 123);

// 移除
eventBus.off("abc", handleCallback);
eventBus.emit("abc", 123);
