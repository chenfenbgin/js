/*
 * @des: ''
 * @author: fengbin.chen
 */
/**
 * 判断对象中是否存在某个属性, in可以判断原型链上的
 */
function hasProperty(obj, key) {
  return key in obj 
}

let a = {
  name: 'foo'
}
console.log(' hasProperty: ', hasProperty(a, 'name')); // true