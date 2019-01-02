/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// function uniqueNumber(array) {
//   const output = {};
//   for (let i = 0; i < array.length; i += 1) {
//     if (!output[array[i]]) output[array[i]] = array[i];
//     else delete output[array[i]];
//   }
//   console.log(output);
//   return Object.keys(output)[0];
// }

function uniqueNumber(array) {
  // eslint-disable-next-line prefer-destructuring
  const { length } = array;
  let res = array[0];
  for (let i = 1; i < length; i += 1) {
    console.log(res, array[i]);
    console.log(res ^ array[i]);
    res = res ^ array[i]; 
  }
  return res;
}


console.log(uniqueNumber([1, 2, 1, 3, 3])); // Returns 2

module.exports = uniqueNumber;
