// const clickHandler = () => {
//   console.log('window发生了点击');
// }

// window.addEventListener('click', clickHandler);
// window.removeEventListener('click', clickHandler);


window.addEventListener('chen', () => {
  console.log('监听到了chen事件');
})
window.dispatchEvent(new Event('chen'))
