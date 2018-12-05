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
    // DELCARE A MIN VARIBLE AND SET IT TO 0
    // ITERATE OVER THE ARRAY
    // DELCARE MAX VARIABLE TO SET MAX PRICE 
    // CHECK IF 
    let maxProfit = 0;
    let minI = 0;
    // console.log(min)
    for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
        // CHECK IF 
        if (stock_prices_yesterday[i] < stock_prices_yesterday[minI])
            minI = i;
        console.log(minI)

        const currProfit = stock_prices_yesterday[i] - stock_prices_yesterday[minI];

        if (currProfit > maxProfit)
            maxProfit = currProfit;

        // console.log(minI)

    }
    return maxProfit;
}
const prices = [1, 100, 5, 110, 90, 95]

console.log(bestProfit(prices)); //105
module.exports = bestProfit;
