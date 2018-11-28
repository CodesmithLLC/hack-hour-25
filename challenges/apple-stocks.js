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
	// input is invalid
	if (!(stock_prices_yesterday instanceof Array)) return 0;
	const prices = stock_prices_yesterday.slice();
	prices.sort((a, b) => a - b);

	const profit = [];

	// iterate through until prices is empty
	while (prices.length !== 0) {
		const currInd = stock_prices_yesterday.indexOf(prices[0]);
		const copy = stock_prices_yesterday.slice(currInd);
		const maxInd = stock_prices_yesterday.indexOf(Math.max(...copy));
		profit.push(stock_prices_yesterday[maxInd] - prices[0]);
		prices.shift();
	}
	return profit.sort((a, b) => a - b)[profit.length - 1];
}

module.exports = bestProfit;