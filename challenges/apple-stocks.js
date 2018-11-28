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
  // initiate empty result array
  const result = [];
  // create helper function that at every element returns the max trade price
  function maxPrice(current, index, arr) {
    const prices = [];
    while (index < arr.length) {
      prices.push(current - arr[index]);
      index += 1;
    }
    result.push(Math.max(...prices));
  }
  // run the maxPrice func at every element
  stock_prices_yesterday.forEach(maxPrice);
  // find the max of result array.  If <= 0 return 0
  const maxVal = Math.max(...result);
  if (maxVal > 0) return maxVal;
  return 0;
}

module.exports = bestProfit;
