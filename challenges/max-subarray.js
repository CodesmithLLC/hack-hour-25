/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  
  
}

function maxSubarray1(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    let len = 1;
    while (i + len <= arr.length) {
      const currArr = arr.slice(i, i + len);
      const currSum = currArr.reduce((accum, curr) => accum + curr);
      if (currSum > max) max = currSum;
      len += 1;
    }
  }
  return max;
}


console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
module.exports = maxSubarray;
