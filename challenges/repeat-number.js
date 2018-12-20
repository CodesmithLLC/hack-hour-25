/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[Math.abs(array[i])] < 0) return Math.abs(array[i])
    else {array[Math.abs(array[i])] = array[Math.abs(array[i])] * -1}
  }
}

console.log(repeatNumbers([1,2,3,4,5,1]))
module.exports = repeatNumbers;
