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
  // use a for loop to create a stirng of current space and n - current asterix
  let current = 0;
  while (current <= n) {
    let result = '';
    for (let i = 0; i < n; i += 1) {
      if (i < n - current) {
        result += ' ';
      } else {
        result += '*';
      }
    }
    console.log(result);
    current += 1;
  }
  // if (current <= n) drawStairs(n, current);
  // recurse drawStairs current + 1 unti current = n
}

drawStairs(5);
module.exports = drawStairs;
