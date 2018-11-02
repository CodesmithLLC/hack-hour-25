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
// using recursion to build stairs
function drawStairs(n, whiteSpace = "") {
  
  //edge case: if n = 0, no stairs is build and will return an empty string

  if (n === 0) {return ""}

  //edge case: n cannot be bigger than 100
  if (n >100) {  
    console.log("the maximum of the height of the staircase is 100")
    return
    }	
  //number of astericks will depend on the number of n passed in for each recursive calls
  let astericks = "*".repeat(n)
  //base case for recursion: when n is 0, so that way the top level will have one asterick instead of zero
  if (n > 0) drawStairs(n - 1, whiteSpace + " ")
	console.log(whiteSpace,astericks)
}


module.exports = drawStairs;
