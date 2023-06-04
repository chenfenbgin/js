// 原型链继承
function Parent() {
  this.name = ["荒天帝"];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child() {}

// 子类的原型链指向父类的实例
Child.prototype = new Parent();
const child = new Child();

console.log(child.name); // [ '荒天帝' ]
console.log(child.getName()); // [ '荒天帝' ]

// 弊端：对某一个子类实例引用变量的修改，会影响到所有的实例
const child2 = new Child();
child2.name[0] = "独断万古";
console.log(child2.name); // 独断万古

const child3 = new Child();
console.log(child.name); //  [ '独断万古' ]
console.log(child3.getName()); // [ '独断万古' ]
