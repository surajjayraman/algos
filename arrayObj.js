// use the map method to loop through an array of objects.
let myArr = [
  {
    studenName: "jack",
    studenClass: 6,
    studenSection: "a"
  },
  {
    studenName: "tom",
    studenClass: 6,
    studenSection: "a"
  }
];
const loopArray = myArr.map((value) => {
  for (let property in value) {
    console.log(`${property}: ${value[property]}`);
  }
});


