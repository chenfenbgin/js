/*
 * @des: ''
 * @author: fengbin.chen
 */

/**
 * 去掉字符串左边空格
 */
function trimLeft(str) {
  const empty = new RegExp("^[\\s]+", "gi");
  return str.replace(empty, "");
}

/**
 * 去掉字符串右边空格
 */
function trimRight(str) {
  const empty = new RegExp("[\\s]+$", "gi");
  return str.replace(empty, "");
}

/**
 * 去掉字符串左右空格
 */
function trim(str) {
  return trimRight(trimLeft(str));
}

/**
 * 去掉字符串最后一个逗号
 */
function delLastComma(str) {
  if (str.charAt(str.length - 1) == ",") {
    str = str.substring(0, str.length - 1);
  }
  return str;
}

export { trim, delLastComma };
