/* eslint-disable camelcase */
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
  // Declare variable to track lowest price
  let lowestPrice = Infinity;

  // Declare variable to track index of lowest price
  let lowestIndex = 0;

  // Iterate through input array and check each element against lowest price
  for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
    // Handle invalid input by checking if element is a number. If not, return 0
    if (typeof stock_prices_yesterday[i] !== 'number') return 0;

    // If element is lower than lowest price, save element to lowest price
    // If element is lower than lowest price, save index to index of lowest price
    if (stock_prices_yesterday[i] < lowestPrice) {
      lowestPrice = stock_prices_yesterday[i];
      lowestIndex = i;
    }
  }
  // console.log(lowestPrice, lowestIndex);

  // Slice array using index of lowest price to create an array of values occuring after
  const stock_prices_after_lowest = stock_prices_yesterday.slice(lowestIndex + 1);
  // console.log(stock_prices_after_lowest);

  // Declare variable to track highest price
  let highestPrice = lowestPrice;

  // Iterate through input array and check each element against highest price
  for (let i = 0; i < stock_prices_after_lowest.length; i += 1) {
    // If element is higher than higher price, save element to higher price
    // If element is higher than higher price, save index to index of higher price
    if (stock_prices_after_lowest[i] > highestPrice) {
      highestPrice = stock_prices_after_lowest[i];
    }
  }
  // console.log(highestPrice, highestIndex);

  // return result of subtracting lowest price from highest price
  return highestPrice - lowestPrice;
}

// const prices1 = [400, 410, 270, 430, 440, 450, 380, 500];
// console.log(bestProfit(prices1));

// const prices2 = [600, 590, 580, 570, 560, 550, 540, 530];
// console.log(bestProfit(prices2));

// const prices3 = [400, 410, 270, 430, 'Oops', 450, 380, 500];
// console.log(bestProfit(prices3));

module.exports = bestProfit;
