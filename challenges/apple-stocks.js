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

  // Edge Cases: Check if an array
  if (!(stock_prices_yesterday instanceof Array)) return 0;

  // Find the highest price
  const highestPrice = stock_prices_yesterday.reduce((accum, currentValue, currentIndex) => {
    if (currentValue > accum.value) {
      accum.value = currentValue;
      accum.index = currentIndex;
    }
    return accum;
  }, { index: null, value: Math.max() });

  // Filter lowest Price before highest
  const lowestPrice = stock_prices_yesterday.reduce((accum, currentValue, currentIndex) => {
    if (currentValue < accum.value && currentIndex <= accum.index) {
      accum.value = currentValue;
      accum.index = currentIndex;
    }
    return accum;
  }, { index: highestPrice.index, value: highestPrice.value });
  
  // console.log(highestPrice);
  // console.log(lowestPrice);

  return (highestPrice.value - lowestPrice.value);
}

// let priceList_1 = [];
// priceList_1[0] = 5;
// priceList_1[30] = 2;
// priceList_1[40] = 1.50;
// priceList_1[60] = 10;
// priceList_1[100] = 2;

// console.log(`My Best Profit would be: ${bestProfit(priceList_1)}`);


module.exports = bestProfit;
