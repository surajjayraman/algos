
const series = (start, end) => {
  let numberseries = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      numberseries.push(i);
    }
  }
  console.log(numberseries);
  return numberseries;
};



module.exports = {series};