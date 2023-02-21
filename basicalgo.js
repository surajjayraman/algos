
const series = (start, end) => {
  let numberseries = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      numberseries.push(i);
    }
  }
  
  return numberseries;
};

console.log(series(4,10));