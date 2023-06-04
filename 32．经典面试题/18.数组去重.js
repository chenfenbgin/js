const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7];
// 去重方式1：
function unique(arr) {
  // return Array.from(new Set(arr))
  return [...new Set(arr)];
}
console.log(unique(arr));

// 去重方式2：两次循环
function unique2(arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
    for (var j = i + 1, len = arr.length; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
        len--;
      }
    }
  }
  return arr;
}
console.log(unique2(arr));

// 去重方式3：indexOf
function unique3(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(unique3(arr));

// 去重方式4： includes，去上面差不多
function unique4(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(unique4(arr));

// 去重方式5： filter
function unique4(arr) {
  return arr.filter(function (item, index) {
    // indexOf(item, 0)：表示在元素中第一次出现的索引值
    // indexOf查找值，只会找到第一次查到的索引值，后续有相同的值不会找出来
    return arr.indexOf(item, 0) === index;
  });
}
console.log(unique4(arr));
