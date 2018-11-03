/* Write a function that console logs a staircase of any given height where
  1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only
 consist of asterisks,
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
  // create variable to store spaces
  const str = ' ';
  // create variable to store *
  const star = '*';
  // iterate up from 1 to n
  for (let i = 1; i <= n; i += 1) {
    let result = '';
    result += str.repeat(n - i) + star.repeat(i);
    console.log(result);
  }
}

drawStairs(6);


module.exports = drawStairs;
