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