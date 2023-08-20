/*
 * @des: ''
 * @author: fengbin.chen
 */
var data =[{  //模拟数据库接口返回的 分类数据
  "status": 1,
  "_id": "5b9a68538f041546600439e7",
  "title": "技术团队",
  "describe": "这是一个技术团队",
  "keywords": "技术团队",
  "pid": "0",
  "addTime": "2018-01-01T00:00:00.000Z"
}, {
  "status": 1,
  "_id": "5b9a696c3e7dc24660bd9b7e",
  "title": "数码",
  "describe": "这是数码",
  "keywords": "数码",
  "pid": "0",
  "addTime": "2018-01-01T00:00:00.000Z"
}, {
  "status": 1,
  "_id": "5b9a69a63e7dc24660bd9b7f",
  "title": "前端开发1",
  "describe": "这是前端开发",
  "keywords": "前端",
  "pid": "5b9a68538f041546600439e7",
  "addTime": "2018-01-01T00:00:00.000Z"
}, {
  "status": 1,
  "_id": "5b9a69d83e7dc24660bd9b80",
  "title": "后端开发",
  "describe": "这是后端开发",
  "keywords": "后端",
  "pid": "5b9a68538f041546600439e7",
  "addTime": "2018-01-01T00:00:00.000Z"
}, {
  "status": 1,
  "_id": "5b9a69fb3e7dc24660bd9b81",
  "title": "iphone",
  "describe": "这是iphone",
  "keywords": "iphone",
  "pid": "5b9a696c3e7dc24660bd9b7e",
  "addTime": "2018-01-01T00:00:00.000Z"
}, {
  "status": 1,
  "_id": "5b9a6a173e7dc24660bd9b82",
  "title": "华为",
  "describe": "这是华为",
  "keywords": "华为",
  "pid": "5b9a696c3e7dc24660bd9b7e",
  "addTime": "2018-01-01T00:00:00.000Z"
}, {
  "status": 1,
  "_id": "5b9a79f13e7dc24660bd9b83",
  "title": "iphone6s",
  "describe": "这是iphone6s",
  "keywords": "iphone6s",
  "pid": "5b9a69fb3e7dc24660bd9b81",
  "addTime": "2018-01-01T00:00:00.000Z"
}]

function toTreeAndMap(data) { //递归树算法 将pid-id的数据库返回的json 转为树json
  // 删除 所有 children,以防止多次调用
  data.forEach(function (item) {
      delete item.children;
  });

  // 将数据存储为 以id为KEY的map索引数据列 
  let map = {};
  data.forEach(function (item) {
      map[item._id] = item;
  });
  // console.log(map);

  let val = [];
  data.forEach(function (item) {
      // 以当前遍历项，的pid,去map对象中找到索引的id
      var parent = map[item.pid];
      // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
      if (parent) {
          (parent.children || ( parent.children = [] )).push(item); //这里更改的是map对象的数据(索引数据)
          // console.log(map);
      } else {
          //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
          val.push(item);
      }
  });

console.log('val..........', val);
  return {
      treeData:val, //树结构json数据 可以渲染html
      map    //索引数据 方便通过ID查找所有子节点ID
  };
}

let jsonData = toTreeAndMap(data); 
console.log(jsonData.treeData);  //将data数据 转换成树
console.log(jsonData.map);  //将data数据 转换成 map索引对象