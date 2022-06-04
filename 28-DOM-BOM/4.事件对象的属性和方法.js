const spanEL = document.querySelector(".span");

// 在回调这个函数的时候，会传递event参数
spanEL.addEventListener("click", function (event) {
  console.log("span被点击", event);
  console.log("事件的类型", event.type);
  // 当发生点击和处理点击的元素不一样
  console.log("事件的元素", event.target, event.currentTarget);
  console.log("事件发生的位置", event.offsetX, event.offsetY);
});

// 常用的方法
// preventDefault, 防止默认行为
const aEl = document.querySelector("a")
aEl.addEventListener("click", (event) => {
  event.preventDefault();
})

// stopPropagation ，可阻止事件捕获