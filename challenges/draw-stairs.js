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
//input: number;
//output:
//strategy: 
    //creating an array with given number of elements;
    // \n
    //

function drawStairs(n) {
    if (isNaN(n) || n < 0 || n > 100) return;
    for (let i = 1; i <= n; i++){
        let spaces = ' '.repeat(n-i);
        let star = '*'.repeat(n);
    }
    console.log(spaces+star);
}

console.log(drawStairs(10));

module.exports = drawStairs;
