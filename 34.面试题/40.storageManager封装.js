/*
 * @des: 'localStorage缓存类'
 * @author: fengbin.chen
 */

// 缓存统一前缀
const PREFIX = "system-";
// token缓存key
const TOKEN_KEY = PREFIX + "token";

/**
 * 缓存基础类
 */
class StorageManager {
  constructor(key) {
    this.key = key;
  }
  static token = new StorageManager(TOKEN_KEY);
  set(value) {
    localStorage.setItem(this.key, value);
  }
  get() {
    return localStorage.getItem(this.key);
  }
  static clear() {
    localStorage.removeItem(TOKEN_KEY);
    // ...
  }
}

// 测试
const token = "bearer xxx";

StorageManager.token.set(token);
console.log("缓存token: ", StorageManager.token.get());
