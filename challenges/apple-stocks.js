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
  // let highestProfit = 0;
  //iterate thru the array;
  // for (let i = 0 ; i = stock_prices_yesterday.length; i += 1){
  //   for (let j = 1; j = stock_prices_yesterday.length; j += 1){
  //     if (stock_prices_yesterday[j] > stock_prices_yesterday[i]){
  //       highestProfit = stock_prices_yesterday[j] - stock_prices_yesterday[i];
  //     }
  //   }
  // }  
  // return highestProfit;
  let sortedArr = stock_prices_yesterday.slice().sort(function(a, b) {
    return b - a;
  });

  if (sortedArr[0] === stock_prices_yesterday[0]) return 0;

  return stock_prices_yesterday.reduce((acc, price, i) => {
    let highestProfit = 0;
    let nextPrice = stock_prices_yesterday[i + 1];
    if (nextPrice === null) return acc;
    if ((nextPrice > price) && acc < (nextPrice - price)) {
      acc = nextPrice - price;
      if (highestProfit > acc) highestProfit = acc;
    } 
    return acc;
  }, 0);
}

console.log(bestProfit([200, 300, 300, 700]));

module.exports = bestProfit;
