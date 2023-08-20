/*
 * @des: ''
 * @author: fengbin.chen
 */
const arr = [
  { id: "75bf8bb7-83bd-409f-8f2b-eed6ec7697d2" },
  {
    id: "5fcee50a-52b4-4395-982c-596a2afe967d",
    pid: "75bf8bb7-83bd-409f-8f2b-eed6ec7697d2",
  },
  {
    id: "41564933-f68f-4311-8b00-f1229d640f8f",
    pid: "5fcee50a-52b4-4395-982c-596a2afe967d",
  },
  {
    id: "c15e1b59-0a88-44c1-9415-46cccaaa8f1b",
    pid: "5fcee50a-52b4-4395-982c-596a2afe967d",
  },
  {
    id: "5c2ae17e-ac23-4590-a915-0ddcc633ad3b",
    pid: "75bf8bb7-83bd-409f-8f2b-eed6ec7697d2",
  },
  {
    id: "5322dee1-7c38-47c7-b565-c68daae46072",
    pid: "5c2ae17e-ac23-4590-a915-0ddcc633ad3b",
  },
  {
    id: "c1025aaf-2cdd-4979-9433-b9c6bb9c9ac0",
    pid: "5c2ae17e-ac23-4590-a915-0ddcc633ad3b",
  },
  { id: "66258361-75be-48f8-a3d3-8b4ebd79affc" },
  {
    id: "68c8475a-86aa-49a6-9a42-2ef58c758530",
    pid: "66258361-75be-48f8-a3d3-8b4ebd79affc",
  },
  {
    id: "03475aba-2ce8-4425-8175-323daaa5299c",
    pid: "68c8475a-86aa-49a6-9a42-2ef58c758530",
  },
  {
    id: "02728803-b529-4aaf-8da6-95062198fea9",
    pid: "68c8475a-86aa-49a6-9a42-2ef58c758530",
  },
  {
    id: "00b2c8ba-5a20-4ec0-9909-05a634a4a721",
    pid: "66258361-75be-48f8-a3d3-8b4ebd79affc",
  },
  {
    id: "07d0d642-f2c2-4d23-b1b9-12c64fb243cf",
    pid: "00b2c8ba-5a20-4ec0-9909-05a634a4a721",
  },
  {
    id: "1ff9c031-abef-4c7e-a868-7416f18d3092",
    pid: "00b2c8ba-5a20-4ec0-9909-05a634a4a721",
  },
];

// 将id-pid数组转成树结构
const arrayToTree = (array) => {
  const map = new Map(); 
  array.forEach(item => {
    map[item.id] = item
  })
  const tree = []
  array.forEach(item =>{
    if(map[item.pid]){
      (map[item.pid].children || (map[item.pid].children = [])).push(item)
    }else {
      tree.push(item)
    }
  })
  console.log('tree', tree);
  return tree
}

arrayToTree(arr)