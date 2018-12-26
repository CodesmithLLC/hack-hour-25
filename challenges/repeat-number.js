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

// // Number theory solution O(N) time O(1) space (N-1*N/2 = the sum of all of the numbers up to N)
// function repeatNumbers(array) {
//   const expected = ((array.length - 1) * array.length) / 2;
//   let actual = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     actual += array[i];
//   }
//   return actual - expected;
// }

// //Bitwise Solution
// function repeatNumbers(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(result, i, array[i]);
//     result = result ^ i ^ array[i];
//   }
//   return result;
// }

const numArray = [1, 6, 3, 4, 4, 5, 12];
console.log(repeatNumbers(numArray));

module.exports = repeatNumbers;
