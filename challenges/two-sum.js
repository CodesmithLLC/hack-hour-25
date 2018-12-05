/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 1; j < arr.length; j += 1) {
//       if (i !== j) {
//         if (arr[i] + arr[j] === n) return true;
//       }
//     }
//   }
//   return false;
// }


function twoSum(arr, n, i = 0, j = i + 1) {
  if (i === arr.length - 1) return false;
  if (n - arr[i] === arr[j]) return true;
  if (j < arr.length) return twoSum(arr, n, i, j + 1);
  return twoSum(arr, n, i + 1, j = 1);
}

module.exports = twoSum;
