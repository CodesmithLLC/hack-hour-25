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
  const cache = {};

  for (let i = 0; i < array.length; i++) {
    if (cache[array[i]]) {
      return array[i];
    } else {
      cache[array[i]] = array[i];
    }
  }
  return undefined;
}


// function repeatNumbers(array) {
//   const sorted = array.sort()

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       return sorted[i];
//     }
//   }
//   return undefined;
// }


const array = [5,7,4,3,9,1,8,2,7]

console.log(repeatNumbers(array));

module.exports = repeatNumbers;
