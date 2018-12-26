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

  let arrSum = 0;

  for (let i = 0; i < array[array.length - 1]; i++) {
    arrSum += array[i];
  }

  let arraySum = array.reduce((a, b) => a + b);

  console.log('arrSum: ', arrSum, 'arraySum: ', arraySum)

  return arraySum - arrSum;

}

const array = [1,2,3,4,5,6,6]

console.log(repeatNumbers(array));



// function repeatNumbers(array) {
//   const cache = {};

//   for (let i = 0; i < array.length; i++) {
//     if (cache[array[i]]) {
//       return array[i];
//     } else {
//       cache[array[i]] = array[i];
//     }
//   }
//   return undefined;
// }


// function repeatNumbers(array) {
//   const sorted = array.sort()

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       return sorted[i];
//     }
//   }
//   return undefined;
// }

module.exports = repeatNumbers;
