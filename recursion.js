// using recursion instead of a for loop
const countEvenToTwelve = function(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
};
countEvenToTwelve(0);