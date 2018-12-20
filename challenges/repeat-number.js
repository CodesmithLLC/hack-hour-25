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

const arr = [1, 3, 4, 2, 5];

function repeatNumbers(array) {
  // create object to store els of array as keys, and number of times they occur as value
  const trackerObj = {};
  // iterate thru array
  for (let i = 0; i < arr.length; i += 1) {
    // if el exists, return el
    if (trackerObj[array[i]]) return array[i];
    // otherwise, check if el exists as key on obj. if not, set as key, and value to 1
    trackerObj[array[i]] = 1;
  }
  return;
}

module.exports = repeatNumbers;
