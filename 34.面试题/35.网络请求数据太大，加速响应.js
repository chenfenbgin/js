/*
 * @des: ''
 * @author: fengbin.chen
 */
async function loadNovel() {
  const url = "https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt";
  const resp = await fetch(url);
  const reader = resp.body.getReader(); // 获取已经返回的哪一部分内容
  // 新建一个文本解码器
  const decoder = new TextDecoder();
  for (;;) {
    const { value, done } = await reader.read(); // value是字节数组
    if (done) {
      break;
    }
    const text = decoder.decode(value);
    console.log("value, text", text, value);
  }
}
loadNovel()