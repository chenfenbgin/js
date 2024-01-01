/*
 * @des: ''
 * @author: fengbin.chen
 */
var obj = {
  name: "chen",
  foo: function () {
    console.log(this);
  },
};

obj.foo();
// 隐式绑定跟显示绑定，显示绑定优先级比较高，打印abc sting对象
obj.foo.call("abc");
