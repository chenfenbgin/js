// 功能： 定义一个操作数据库的库，支持mysql、mssql、mongodb，要求都有一样的功能：add、update、delete、get方法
// 注意：约束统一的规范、以及代码的重用
// 解决方法： 需要约束规范，所以要定义接口；  需要代码重用，所以要用到泛型

interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// 定义一个操作mysql数据库的类， 注意： 要实现泛型接口，这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 定义一个操作mssql数据库的类
class MsSqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 操作用户表，定义一个User类和数据表做映射
class User {
  username: string | undefined;
  password: string | undefined;
}
var u = new User();
u.username = "张三";
u.password = "123456";

// 需要写上<>
var oMysql = new MysqlDb<User>(); // 类作为参数约束数据传入的类型
