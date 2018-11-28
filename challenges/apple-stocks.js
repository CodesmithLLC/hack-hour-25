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
  // check to see if the input is valid
  if (Array.isArray(stock_prices_yesterday)) {
    // have variables for low and high price as objects
    const lowPrice = { value: Infinity, time: 0 };
    const highPrice = { value: -Infinity, time: 0 };
    // go through the array and find the lowest and highest stock price
    for (let i = 0; i < stock_prices_yesterday; i += 1) {
      // look for low and highs
      if (stock_prices_yesterday[i] > highPrice.value) {
        highPrice.value = stock_prices_yesterday[i];
      }
      if (stock_prices_yesterday[i] < lowPrice.value) {
        // if (i >= lowPrice.time) {
        // }
        lowPrice.value = stock_prices_yesterday[i];
      }
    }
    // after finding the low and highs, check to see if there is a profit
    if ((highPrice.time - lowPrice.time) > 0) {
      return highPrice.value - lowPrice.value;
    }
    // if there is no profit, then return 0
    return 0;
  }
  // if it isn't an array, return 0
  return 0;
}

module.exports = bestProfit;
