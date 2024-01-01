/*
  防抖函数的具体应用场景
      搜索框搜索输入。只需用户最后一次输入完，再发送请求,.
      手机号、邮箱验证输入检测
      窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
 */
function debounce(fn, delay) {
  // 1、定义一个定时器，保存上一次的定时器
  let timer = null;

  // 2、真正执行的函数
  return function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer);
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的函数
      // fn(); // 这么执行，相当于独立函数调用。所以this就指向了window，event指向了undefined
      fn.apply(this, args);
    }, delay);
  };
}


const b = debounce(function () {
  console.log('bbbbbbbbbbbbbbbb');
}, 2000)
b()