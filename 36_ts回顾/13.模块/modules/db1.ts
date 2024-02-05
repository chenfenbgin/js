// 导出方式1：
var dbUrl = "xxx";

function getData(): any[] {
  console.log("获取数据库的数据");
  return [
    {
      title: "123",
    },
    {
      title: "456",
    },
  ];
}

function save() {
  console.log("保存数据成功");
}
export { getData, save };
