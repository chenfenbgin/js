/*
 * @des: ''
 * @author: fengbin.chen
 */

// 根据属性名，获取数组中对应的对象
const getArrayObject = (array, keyValue, keyName = "key") => {
  return array.filter((v) => v[keyName] === keyValue);
};
// 根据类型获取字典值
const getDict = (type) => {
  return getArrayObject(JSON.parse(StoreManager.dict.get()), type)?.value;
};

// 公共格式化方法
const commonFormatter = (enumType, cellValue) => {
  return enumType.find((each) => each.value == cellValue)?.item ?? "";
};

/**
 * 字典类
 */
class Dict {
  constructor(key) {
    this.key = key;
  }
  static whether = new Dict("whether");
  // 根据类型获取所有字典
  get() {
    return getDict(this.key);
  }
  // 根据字典类型和对应的值返回名字
  format(value) {
    return commonFormatter(this.get(), value);
  }
}
