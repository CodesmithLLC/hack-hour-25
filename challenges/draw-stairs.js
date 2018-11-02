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

  // do nothing if n is less than 1 or greater than 100
  if (n < 1 || n > 100) return "Please provide a number between 1-100. drawStairs(x)";

  // iterate from 1 to and including n.
  for (let i = 1; i <= n; i += 1) {
    // console log a string that has an asterisk the number of times for loop counter
    // This string should be left padded with loop counter - n spaces
    console.log(`${' '.repeat(n-i)}${'*'.repeat(i)}`);
  }

}


module.exports = drawStairs;
