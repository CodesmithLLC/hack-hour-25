/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  const prices = stock_prices_yesterday;
  if (!Array.isArray(prices)) return 0;

  let profit = 0;
  let minEl = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - minEl > profit) {
      profit = prices[i] - minEl;
    }
    if (prices[i] < minEl) {
      minEl = prices[i];
    }
  }
  return profit;
}

const array = [5, 4, 3, 2, 1, 2, 7]

console.log(bestProfit(array))

module.exports = bestProfit;
