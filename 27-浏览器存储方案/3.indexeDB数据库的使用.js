// 1、打开数据库（建立连接的过程）
const dbRequest = indexedDB.open("chen"); // 拿到一个对象，我们可以写一些监听的回调函数
dbRequest.onerror = function (err) {
  console.log("err打开数据库失败", err);
};

let db = null;
dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

// 第一次打开数据库/或者新版本发生更新
dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;
  //  创建一些存储对象，相当于mysql中的表, keypath:主键
  db.createObjectStore("users", { keyPath: "id" });
};

class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
const users = [
  new User(1, "zhangsan", 21),
  new User(2, "lisi", 22),
  new User(3, "wangwu", 34),
];

// 获取btns，监听点击
const btns = document.querySelectorAll("button");
// console.log(btns);
btns.forEach((item, index) => {
  console.log(item, index);
  item.onclick = function () {
    // 每次都创建新的事物
    const transaction = db.transaction("users", "readwrite");
    console.log(transaction);
    // 因为上面的transaction是可以传多个的，db.transaction(["users", "students"], 'readwrite')
    const store = transaction.objectStore("users");

    switch (index) {
      case 0:
        console.log("点击了新增");
        for (const user of users) {
          const request1 = store.add(user);
          request1.onsuccess = function () {
            console.log(`${user.name}插入成功`);
          };
        }
        // 事物操作成功会回调oncomplete
        transaction.oncomplete = function () {
          console.log("添加全部成功");
        };
        break;
      case 1:
        console.log("点击了查询");
        // 1.查询方式一：(知道主键，根据主键查询)
        // const request = store.get(1);
        // request.onsuccess = function(event){
        //   console.log(event.target.result);
        // }

        // 2、查询方式二：(查询所有)
        const request = store.openCursor();
        request.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            console.log(cursor.key, cursor.value);
            // 继续往下
            cursor.continue();
          } else {
            console.log("查询完成");
          }
        };
        break;
      case 2:
        console.log("点击了删除");
        const request3 = store.openCursor();
        request3.onsuccess = function (event) {
          const cursor = event.target.result;
          if (cursor) {
            console.log(cursor.key, cursor.value);
            // 继续往下
            if (cursor.key === 1) {
              cursor.delete();
            }
            cursor.continue();
          } else {
            console.log("查询完成");
          }
        };
        break;
      case 3:
        console.log("点击了修改");
    }
  };
});
