/*
 * @des: ''
 * @author: fengbin.chen
 */
const JSONString =
  '{"name":"chen","age":24,"friends":{"name":"feng"},"hobbies":["足球"]}';

// 第二个参数同样可以进行拦截
const info = JSON.parse(JSONString, (key, value) => {
  console.log('key, value===', key, value);
  if (key === "age") {
    return value - 1;
  }
  return value;
});
console.log(info);
