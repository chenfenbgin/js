let obj = {
    name: '荒天帝'
}
let obj2 = obj
obj2.name = '石昊'
console.log('obj.name',obj.name) // 石昊
console.log('obj2.name',obj2.name)// 石昊
console.log(obj === obj2) // true
console.log( {} == {}) //false