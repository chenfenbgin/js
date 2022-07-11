// // 案例1
// var name = "chen";

// var foo = () => {
//   console.log(this);
// };

// foo();//window

// var obj = { foo: foo };
// obj.foo(); //window

// foo.call("abc"); //window

// 2. 应用场景
var obj = {
  data: [],
  getData: function () {
    // 在没有箭头函数之前，我们使用var _this = this;
    setTimeout(function () {
      console.log('function中的this', this); // window
      var result = ["abc", "", "", "", "", ""];
      this.data = result; //setTimeout中的this是指向window
    }, 2000);

    // 有了箭头函数，直接使用就行，箭头函数，是不绑定this的，去上层作用域找
    setTimeout(() => {
      console.log('箭头中的this', this); // obj对象
      var result = ["abc", "", "", "", "", ""];
      this.data = result;
    }, 2000);
  },
};

obj.getData();
