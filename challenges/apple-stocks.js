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
	if (!Array.isArray(stock_prices_yesterday)) return 0;
	
	let maxPrice = Math.max(...stock_prices_yesterday);
	let minPrice = Math.min(...stock_prices_yesterday);
	let profit = maxPrice - minPrice;
	
	if (profit > 0) return profit;
	return 0;
}

// // console.log(bestProfit(5));
// // console.log(bestProfit([500,560,600,700,300,750,450,350,300,500,750]));
// console.log(bestProfit([500,500,500,500,500,500]));

module.exports = bestProfit;
