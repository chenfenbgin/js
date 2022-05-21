function foo() {}

const fooProxy = new Proxy(foo, {
  apply: function (target, thisArg, argArray) {
    console.log("对apply进行调用");
    return target.apply(thisArg, argArray);
  },
  construct: function (target, argArray) {
    console.log("对new进行调用");
    return new target(...argArray);
  },
});
foo();

fooProxy.apply({}, ["abc", "cde"]); // apply进行调用
new fooProxy("abc", "cdd"); // new进行调用
