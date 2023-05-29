// using recursion instead of a for loop
const countEvenToTwelve = function(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
};
countEvenToTwelve(0);
  
// final implementation
const sumToOne = function(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1);
};
  
console.log(sumToOne(4));
