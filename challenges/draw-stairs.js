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
    if (n >= 1 && n <= 100) {
        const start = n;
        for (let i = 1; i <= start; i++) {
            n -= 1;
            console.log(`${' '.repeat(n)}${'*'.repeat(i)}`)
        }
    }
}


// NOTE TO SELF: REFACTOR -- recursion?
// function drawStairs(n, i = 1) {
//     if (i === n) {
//         console.log(`''${'*'.repeat(n)}`)
//     }
//  

module.exports = drawStairs;
