function deepClone(source) {
  if (source === null) return source;
  if (source instanceof Date) return new Date(source);
  if (source instanceof RegExp) return new RegExp(source);
  // 递归出口
  if (typeof source !== "object") return source;
  let obj = Array.isArray(source) ? [] : {};
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      obj[i] = deepClone(source[i]);
    }
  }
  return obj;
}

let person = {
    name: 'John',
    hobby: ['zhangsang', 'lisi'],
    date: new Date()
}
let deepPerson = deepClone(person);
deepPerson.name = '狠人大帝'
console.log('deepPerson',deepPerson)
console.log('person',person)