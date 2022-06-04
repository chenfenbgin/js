function debounce(fn, delay, immediate = false) {
  // 1、定义一个定时器，保存上一次的定时器
  let timer = null;
  let isInvoke = false;

  // 2、真正执行的函数
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);

    // 判断是否需要立即执行
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的函数
        // fn(); // 这么执行，相当于独立函数调用。所以this就指向了window，event指向了undefined
        fn.apply(this, args);
        isInvoke = false;
      }, delay);
    }
  };
  return _debounce;
}
