function add(a, b, c) {
  return a + b + c;
}

function fnCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接受的参数个数 和 参数本身需要接受的参数是否已经一致 fn.length是可以拿到函数需要的参数的长度的
    
    // 1.当传入参数大于等于需要的参数是，执行函数
    if (args.length >= fn.length) {
      // fn(...args)
      // fn.call(this, ...args)
      return fn.apply(this, args);
    } else {
      // 参数不够，继续接受
      function curried2(...args2) {
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }
  return curried;
}

var curryAdd = fnCurrying(add);

// add(10, 20, 30)
console.log(curryAdd(10, 20, 30)); 
console.log(curryAdd(10)(20)(30));
console.log(curryAdd(10, 20)(30));

