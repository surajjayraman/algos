const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

// compare func Ascending order
const compareFnAsc = (a,b) => a - b;
months.sort(compareFnAsc);
console.log(months);
array1.sort(compareFnAsc);
console.log(array1);

// compare func Descending order
const compareFnDesc = (a,b) => b - a;
months.reverse();
console.log(months);
array1.sort(compareFnDesc);
console.log(array1);

// Advanced Sorting
const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "zoidberg", age: 23 },
];

students.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  
  // where the names are equal sort by descending age
  return (b.age - a.age);
});

console.log(students);