Function.prototype.nsbind = function (thisArg, ...args) {
  // 1.获取到真实需要调用的函数
  var fn = this;
  // 2.处理绑定的thisArg
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  function proxyFn(...params) {
    // 3. 将函数放到thisArg中进行调用
    thisArg.fn = fn;
    // 特殊：对两个传入的参数进行合并
    var finalArgs = [...args, ...params];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }

  return proxyFn;
};

function foo() {
  console.log("foo执行", this);
  return 20;
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
}

// 系统的bind调用1:
// var bar = foo.bind("abc");//bind这个函数会返回一个新的函数，调的时候，需要使用新函数()
// bar();

// 系统的bind调用2:
// 两种写法，写法1：
// var newSum = sum.bind("abc", 10, 20, 30, 40);
// newSum();

// 写法2：
// var newSum = sum.bind('abc')
// newSum(10, 20, 30, 40);

// 我们自定义实现的bind
var bar = foo.nsbind("abc");
var result = bar();
console.log(result);

// 如果我们使用sum调用
var newSum = sum.nsbind("abc", 12, 23);
var result1 = newSum(30, 40);
