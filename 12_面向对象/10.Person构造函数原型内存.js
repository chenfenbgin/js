/*
 * @des: ''
 * @author: fengbin.chen
 */
function Person(){

}
var p1 = new Person();
var p2 = new Person();

p1.__proto__.name = 'fnCu'
console.log('新增属性：', p1.name);
// 我们也可以这么添加name
Person.prototype.name = 'fuer'
console.log('新增属性2：', p1.name);