class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setCache(key, value) {
    if (value) this.storage.setItem(key, JSON.stringify(value));
  }

  getCache(key) {
    let value = this.storage.getItem(key);
    if (value) value = JSON.parse(value);
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index) {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }
}

const localCache = new Cache();
const sessionCache = new Cache(false);

export { localCache, sessionCache };
