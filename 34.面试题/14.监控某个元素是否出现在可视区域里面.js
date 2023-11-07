/*
 * @des: ''
 * @author: fengbin.chen
 */
var loading = document.querySelector(".loading");

// 建立观察者: 第一个参数（重叠了要做什么）；第二个参数（与可视视口重叠了百分之几）
var ob = new IntersectionObserver(
  function (entries) {
    var entry = entries[0];
    console.log("entry", entry);
    // 为true表示进入，超过10%；为false表示小于10%
    if (entry.isIntersecting) {
      // 加载更多列表
    }
  },
  {
    thresholds: 0.1,
  }
);
// 观察
ob.observe(loading);
