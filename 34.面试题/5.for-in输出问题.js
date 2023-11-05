/*
 * @des: ''
 * @author: fengbin.chen
 */
var obj = {
  p2: 'aaa',
  2: 'aaa',
  1: 'aaa',
  p1: 'aaa',
}

for (const key in obj) {
  console.log('key: ', key);
}
// 控制台输出：
// key:  1
// key:  2
// key:  p2
// key:  p1

// 原因：浏览器会对数值的属性进行提升，然后升序排序（数值属性方便定义内存地址），然后再对字符串属性（按照书写的顺序进行排序）