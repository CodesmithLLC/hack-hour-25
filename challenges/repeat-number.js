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
  const n = array.length - 1;
  let sumN = 0;
  for (let j = 1; j <= n; j += 1) {
    sumN += j;
  }
  let sumArr = 0;
  for (let i = 0; i < array.length; i += 1) {
    sumArr += array[i];
  }
  return sumArr - sumN;
}


console.log('repeatNumbers: ', repeatNumbers([1, 2, 5, 4, 2, 6, 3]));

module.exports = repeatNumbers;
