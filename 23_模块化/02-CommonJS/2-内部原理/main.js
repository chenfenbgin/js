const chen = require('./chen.js');

console.log(chen); // { name: 'chen', age: 23, foo: [Function: foo] }

setTimeout(() => {
  console.log(chen);
}, 2000)