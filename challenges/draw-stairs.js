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

function drawStairs(n, stair = 1) {
  if (stair > n) {return}
  let string = '';
  for (let i = 0; i < n - stair; i++) {
    string += ' ';
  }
  while (string.length < n) {
    string += '*';
  }
  console.log(string);
  drawStairs(n, stair + 1)
}


module.exports = drawStairs;
