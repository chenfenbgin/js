/*
 * @des: ''
 * @author: fengbin.chen
 */
/**
 * 并发请求：urls: 待请求的url数组，
 * maxNum：最大并发数
 */
function concurRequest(urls, maxNum) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }
    const results = [];

    let index = 0; // 下一个请求的下标
    let count = 0; // 当前请求的完成数量
    // 发送请求
    async function request() {
      if (index === urls.length) return;
      const i = index;
      const url = urls[index];
      index++;
      try {
         const resp = await fetch(url);
        // 成功加入
        results[i] = resp;
      } catch (error) {
        // 失败加入
        results[i] = error;
      } finally {
        // 判断是否所有的请求都完成
        count++;
        if (count === urls.length) {
          resolve(results);
        }
        request();
      }
    }

    const times = Math.min(maxNum, urls.length);
    for (let i = 0; i < times; i++) {
      request();
    }
  });
}
