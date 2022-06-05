function throttle(
  fn,
  interval,
  options = {
    leading: true,
    training: false,
  }
) {
  const { leading, training } = options;

  // 1、记录上一次的时间
  let lastTime = 0;

  // 2、事件触发时，真正执行的函数
  const _throttle = function () {
    // 对这个函数进行节流
    // fn();
    // 2.1、获取当前事件触发时的时间
    const nowTime = new Date().getTime();

    if (!lastTime && !leading) lastTime = nowTime;
    // 上面的写法等同于下面的写法
    // if(lastTime == 0 && leading == false) lastTime = nowTime;

    // 2.2、使用当前触发的时间和之前的时间间隔以及上一次开始的时间，计算出还剩余多次时间触发事件函数
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      // 2.3、真正触发函数
      fn();
      // 2.4、保留上次触发的时间
      lastTime = nowTime;
    }
  };

  return _throttle;
}
