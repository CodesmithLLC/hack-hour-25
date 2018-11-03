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
  if (n < 1 || n > 100) return 'argument is out of range';

  const arr = Array(n).fill(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = '*';
    let copy = arr.slice(0);
    copy = copy.reverse().join('');
    console.log(copy);
  }
}


// create an array with n elements, each element is a single space
// iterate over array
  // reassign element at index i to *
  // declare a variable (let), to store a copy of array, create copy of array
  // update value of copy, invoking reverse and join methonds on copy
  // log copy to the console

module.exports = drawStairs;
