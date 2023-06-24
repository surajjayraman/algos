/*
Create a function maxProfit, which, given a list of stock prices for a given day,
returns the maximum profit that could have been made by buying a stock at the given price
and then selling the stock later on.
*
*/

const prices = [45, 24, 35, 31, 40, 38, 11];

const maxProfit = () => {
  
  let maxVal = 0;
  let temp;
  let buyDay;
  let sellDay;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      temp = prices[j] - prices[i];
      if (temp > maxVal) {
        maxVal = temp;
        buyDay = i + 1;
        sellDay = j + 1;
      }
    }

  }
  console.log(buyDay, sellDay);
  return maxVal;
};


console.log(maxProfit(prices));
