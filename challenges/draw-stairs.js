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
    let air = Array(n).fill(' ').join('')
    let wood = Array(n).fill('*').join('')
    while (n) {
        let step = air.substr(0,n-1).concat(wood.substr(n-1))
        console.log(step)
        n -= 1
    }
}


module.exports = drawStairs;
