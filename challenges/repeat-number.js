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
  let result = {};
  for (let i = 0; i < array.length; i += 1) {
    result[array[i]] = ((result[array[i]] += 1) || 1);
    if (result[array[i]] > 1) {
      return array[i];
    }
  }
}

module.exports = repeatNumbers;
