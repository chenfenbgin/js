class Person{}

// 研究一下类的特点
console.log(Person.prototype); // {}
console.log(Person.prototype.__proto__);//[Object: null prototype] {}
console.log(Person.prototype.constructor);//[class Person]
console.log(typeof Person);//function 这里只是typeof返回的东西是固定的，不会提示是class的

var p = new Person(); 
console.log(p.__proto__ === Person.prototype);  // true