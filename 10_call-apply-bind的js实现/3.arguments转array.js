// 箭头函数中是没有arguments的
function foo(num1, num2) {
  console.log("arguments=", arguments); //arguments= [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
  // 取出参数 并乘10
  // 1.方式一：
  // var newArr = [];
  // for (var i = 0; i < arguments.length; i++) {
  //   newArr.push(arguments[i] * 10);
  // }

  // 2.方式二： 是不可以使用map、forEach的
  // 我们可以讲数组转成数组类型
  // 2.1 、自己遍历arguments中所有的元素放到新的数组中
  // 2.2 、Array.prototype.slice (slice方法： 是可以传入参数的)
  var newArray = Array.prototype.slice.call(arguments);
  // var newArray = [].slice.call(arguments) 跟上面的写法也是一样的
  console.log(newArray);

  // 2.3 可以使用ES 6 的语法 Array.from
  var newArray3 = Array.from(arguments);
  console.log(newArray3);
}

foo(1, 2, 3, 4);
console.log('-----------------');
// slice内部是这么实现的
Array.prototype.nsslice = function (start, end) {
  var arr = this;
  start = start || 0;
  end = end || arr.length;

  var newarr = [];
  for (var i = start; i < end; i++) {
    newarr.push(arr[i]);
  }
  return newarr;
};
var newArr1 = Array.prototype.nsslice.call(["aaa", "bbb", "ccc", "ddd"], 1, 3);
console.log(newArr1);
