var foo = "foo";

if (true) {
  console.log(foo); // 报错， 无法访问，暂时性死区

  let foo = "abc";
}
