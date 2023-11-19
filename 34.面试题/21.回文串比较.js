/*
 * @des: '验证回文串：一个字符串，忽略大小写和非字母数字，正反都一样'
 * @author: fengbin.chen
 */
const isPlaindrome = (s) => {
  const isValid = (c) => (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
  let i = 0,
    j = s.length - 1;
  while ((j) => i) {
    console.log('i, j', s[i].toLowerCase());
    let left = s[i].toLowerCase(), right = s[j].toLowerCase();
    if (isValid(left)) {
      i++;
    } else if (isValid(right)) {
      j--;
    } else if (left === right) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

isPlaindrome("race A car");


// 可以滚动到对应的元素
document.querySelector('.mar-t50').scrollIntoView({
  behavior: 'smooth'
})

