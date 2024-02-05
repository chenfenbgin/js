/**
 * 定义一个User的类，这个类的作用是映射数据库字段
 * 然后定义一个MysqlDb的类，这个类用来操作数据库
 * 然后把User类作为参数传入到MysqlDb中
 */

// 1、定义一个User类和数据库进行映射
class User {
  username: string | undefined;
  password: string | undefined;
}

// 操作数据库的泛型类
class MysqlDb<T> {
  add(user: T): boolean {
    console.log("进行校验", user);
    return true;
  }
}
var u = new User();
u.username = "张三";
u.password = "123456";

var db = new MysqlDb<User>();
db.add(u);
// db.add("123456"); // 报错

// 2、定义一个ArticleCate类 和 数据库进行映射
class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: string | undefined;
  constructor(params: {
    title: string | undefined;
    desc: string | undefined;
    status?: string | undefined;
  }) {
    this.desc = params.desc;
    this.title = params.title;
    this.status = params.status;
  }
}

var a = new ArticleCate({
  title: "分类",
  desc: "描述111111111",
});
// 类当做参数的泛型类
var Db = new MysqlDb<ArticleCate>();
Db.add(a);
