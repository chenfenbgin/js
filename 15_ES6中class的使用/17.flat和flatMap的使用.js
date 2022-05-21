const messages = ["hello world", "hello lyh", "my name is fuyi"];

const words = messages.flatMap((item) => {
  return item.split(" ");
});
console.log(words);
// [
//   'hello', 'world',
//   'hello', 'lyh',
//   'my',    'name',
//   'is',    'fuyi'
// ]
