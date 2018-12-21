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

// function repeatNumbers(array) {
//   const countObj = {};
//   for (let i = 0; i < array.length; i += 1) {
//     if (!countObj[array[i]]) countObj[array[i]] = 1;
//     else return array[i];
//   }
// }

function repeatNumbers(array) {
  let { length } = array;
  while (length >= 0) {
    if (array.lastIndexOf(array[0]) !== 0) return array[0];
    array.shift();
    length -= 1;
  }
  return -1;
}

const numArray = [1, 6, 3, 4, 4, 5, 12];
console.log(repeatNumbers(numArray));

module.exports = repeatNumbers;
