var obj = {
  name: "chen",
  foo: function () {
    console.log(this);
  },
};

var f = new obj.foo(); //foo {}
console.log('f============', f);
