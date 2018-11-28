/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local 
 *      time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 
 *  purchase and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */
//input: array
//output: number (best profit possible)
function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length === 0) return 0;
  // create variables to store lowest price and lowest price indece
  let lowestPrice = Infinity;
  // create variables to store highest price and highest price indece
  let highestPrice = -Infinity;
  let highestIndece;
  // iterate thru array
  for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
    // on each iteration, check if current price is less than lowest price,
    // or greater than highest price. if so, assign to corresponding variable and indece
    if (stock_prices_yesterday[i] > highestPrice) {
      highestPrice = stock_prices_yesterday[i];
      highestIndece = i;
    }
  }
  // create sliced copy of array from highest on
  const slicedArr = stock_prices_yesterday.slice(highestIndece + 1);

  for (let i = 0; i < slicedArr.length; i += 1) {
    if (slicedArr[i] < lowestPrice) {
      lowestPrice = slicedArr[i];
    }
  }

  // check if no profit possible. if so, return 0
  if (highestPrice - lowestPrice <= 0) return 0;
  // otherwise, return best profit possible
  return highestPrice - lowestPrice;
}

module.exports = bestProfit;
