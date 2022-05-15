function Person(){

}

console.log(Person.prototype);  // {}

// {
//   constructor: {
//     value: [Function: Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
console.log(Object.getOwnPropertyDescriptors(Person.prototype)); 
console.log(Person.prototype.__proto__); //[Object: null prototype] {}
