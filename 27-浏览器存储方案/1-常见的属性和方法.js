// 1、setItem
localStorage.setItem("name", "chen123");
localStorage.setItem("age", 13);

// 2、length
console.log(localStorage.length);
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(localStorage.getItem(key));
}

// 3、key方法
console.log(localStorage.key(0)); //age

// 4、getItem(key)
console.log(localStorage.getItem("age")); // 13

// 5、removeItem
localStorage.removeItem("age");

// 6、clear方法
localStorage.clear();
