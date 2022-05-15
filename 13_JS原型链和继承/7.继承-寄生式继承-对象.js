var personObj = {
  running: function() {
    console.log('runing');
  }
};

// var stuObj = Object.create(personObj);
// // 如果我们想在stuObj上扩展对象，需要.的方式
// stuObj.name = 'chen';
// stuObj.studing = function() {
// }

// 寄生式继承: 原型 + 工厂函数
function createStudent(name){
  var stu = Object.create(personObj);
  stu.name = name;
  stu.styding = function(){
    console.log('studying');
  }
  return stu;
}

var stu1 = Object.create('fuyi');
var stu2 = Object.create('fuer');
// var stu1 = Object.create(personObj);
// var stu2 = Object.create(personObj);