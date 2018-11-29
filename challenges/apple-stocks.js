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

function bestProfit(spy) {
  const priceLow = Math.min(spy);
  if (spy.indexOf(priceLow) !== 0) {
    const spikesArr = [];
    const prevH = 0;
    const prevL = 0;
    //filters array to hold only the high and low points in array
    for(let i = 0; i < spy.length; i+=1){
      if(i === 0){spikesArr.push(spy[0])};
      if(i===spy.length-1){
        spikesArr.push(spy[i])
        break;
        }
      if(spy[i-1] > spy[i] && spy[i+1] > spy[i]){
        spikesArr.push(spy[i]);
      }
      if(spy[i-1] < spy[i] && spy[i+1] < spy[i]){
        spikesArr.push(spy[i]);
      }
    }
    //check the find the differences between the spikes
    const diffArr = [0];
    for(let i = 1; i<spikesArr.length; i+=1){
      if(spikesArr[i-1]>spikesArr[i]){
        diffArr.push(-(spikesArr[i-1]-spikesArr[i]));
      }
      if(spikesArr[i-1]<spikesArr[i]){
        diffArr.push(Math.abs(spikesArr[i-1]-spikesArr[i]));
      }
    }


    //if it ever goes negative then it will not gain more than the next iteration



    console.log(diffArr);
  }
  return 0;
}

console.log(bestProfit([20,70,10,50,30,20,10,30,60,20,90]));


module.exports = bestProfit;
