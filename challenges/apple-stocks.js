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
  let minPrice = Math.min(...stock_prices_yesterday);
  let maxPrice = Math.max(...stock_prices_yesterday);
  let minIndex = stock_prices_yesterday.findIndex((x) => x === minPrice);
  let maxIndex = stock_prices_yesterday.findIndex((x) => x === maxPrice);
  if (maxIndex > minIndex) return maxPrice - minPrice;
  return 0;
  // while (minIndex > maxIndex) {
  //   stock_prices_yesterday.splice(minPrice, 1);
  //   console.log(stock_prices_yesterday)
  //   minPrice = Math.min(...stock_prices_yesterday);
  //   minIndex = stock_prices_yesterday.findIndex((x) => x === minPrice);
  // }
  // return maxPrice - minPrice;

  // for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
  //   if (stock_prices_yesterday[i] === minPrice) minIndex = i;
  //   if (stock_prices_yesterday[i] === maxPrice) maxIndex = i;
  //   if (maxIndex > minIndex) return maxPrice - minPrice;
  //   }
  
  }

const stocks = [50, 150, 2, 20, 100, 40, 25, 7, 20]
console.log(bestProfit(stocks));

module.exports = bestProfit;
