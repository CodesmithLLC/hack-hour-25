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
  const star = '*';
  const spaces = ' ';
  // start with a for loop that goes from n to 1
  for (let i = 1; i <= n; i += 1) {
    // create an empty string for each line
    let newStr = '';
    // add by repeating the spaces and star
    newStr = newStr + spaces.repeat(n - i) + star.repeat(i);
    // after running through all the loops, print the new string and go through the loop again, starting fresh on each line of the stair
    console.log(newStr);
  }
}
drawStairs(6);


module.exports = drawStairs;
