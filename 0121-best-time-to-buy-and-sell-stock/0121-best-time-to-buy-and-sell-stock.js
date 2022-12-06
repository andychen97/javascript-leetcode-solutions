/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 3]);
