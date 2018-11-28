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
  let max = stock_prices_yesterday[0];
  let min = stock_prices_yesterday[0];
  let maxProfit = 0;
  //set up a for loop to go through the array
  //keep track of the maximum profit
  for (let i = 1; i < stock_prices_yesterday.length; i++) {
  //min max is the opening price,
  //if the next price is lower than min, the min and max takes the value of the next price
  //if the next price is higher than max, the next price takes the price of max
  //if the difference between min and max is greater than stored profit, store profit takes the difference
  if (stock_prices_yesterday[i] < min ) {
  	min = stock_prices_yesterday[i];
  	max = stock_prices_yesterday[i];
  }
  if (stock_prices_yesterday[i] > max) {
  	max = stock_prices_yesterday[i];
  }
  let tempProfit = max - min;
  console.log(tempProfit)
  if (tempProfit > maxProfit) maxProfit = tempProfit
  }
  return maxProfit
}

module.exports = bestProfit;
