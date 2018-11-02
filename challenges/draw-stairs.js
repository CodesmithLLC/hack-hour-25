/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  const stairArray = Array(n).fill(' ');
  const stair = '*';
  for (let i = stairArray.length; i > 0; i -= 1) {
    stairArray[i] = stair;
    console.log(stairArray.join(''));
  }
}


module.exports = drawStairs;

// drawStairs(6);