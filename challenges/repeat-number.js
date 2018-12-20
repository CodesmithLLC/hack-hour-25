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
  const tracker = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!tracker[array[i]]) tracker[array[i]] = 1;
    else return array[i];
  }
}

// function repeatNumbers(array) {
//   for (let i = 0; i < array.length; i += 1) {

//     if (array.includes[])
//   }
// }

// function repeatNumbers(array) {
//   const sum = nums.reduce((acc, current) => {
//     acc = acc + current;
//     return acc;
//   })

// }

//  const nums = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
//  console.log(nums.length)
//  console.log(nums.reduce((acc, current) => {
//   acc = acc + current;
//   return acc;
//  })
//  )
// console.log(repeatNumbers(nums))


module.exports = repeatNumbers;
