/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // Declare a variable to track the max sum
  let maxSum = Number.NEGATIVE_INFINITY;
  // Declare a variable to track the left index
  let leftIndex = 0;
  // Declare a variable to track the right index
  let rightIndex = arr.length - 1;
  // Iterate through input array and track a temp sum
  for (let i = 0; i < arr.length; i += 1) {
    let tempSum = 0;
    // Iterate through input array and add each element to sum
    for (let j = i; j < arr.length; j += 1) {
    // If temp sum is greater than max sum, max sum equals temp sum,
    // outer index equals left index, inner index equals right index
      tempSum += arr[j];
      if (maxSum < tempSum) {
        leftIndex = i;
        rightIndex = j;
        maxSum = tempSum;
      }
    }
  }
  // Return max sum
  return maxSum;
}

// SOLUTION 1
// function maxSubarray(arr) {
//   let currentMax = Number.NEGATIVE_INFINITY;
//   let finalMax = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i += 1) {
//     currentMax = Math.max(arr[i], currentMax + arr[i]);
//     finalMax = Math.max(finalMax, currentMax);
//   }
//   return finalMax;
// }
// const test = [1, -2, 3, 10, -4, 7, 2, -5];

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); // returns 18
// console.log(maxSubarray([15, 20, -5, 10])); // returns 40

module.exports = maxSubarray;
