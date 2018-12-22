/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr, sum = 0, highestSum = Math.max(), start = 0, cur = 0) {
  // Edge Case: Empty Array
  if (!arr) return 0;

  // Base Case: when end of trying all combinations we are done
  if (start === (arr.length - 1) && cur === arr.length)  return highestSum;

  // Base Case: if cur at end of array and start not at end, shift, reset sum and try again
  if (cur === arr.length && start < cur) {
    start += 1;
    cur = start;
    sum = 0;
    // console.log(`Trying new Sub Array, starting @ position : ${start} `);
  }

  // add current value to sum
  sum += arr[cur];

  // if sum greater than highestSum
  // record new highestSum
  if (sum > highestSum) highestSum = sum;

  return maxSubarray(arr, sum, highestSum, start, cur + 1); 
}

module.exports = maxSubarray;
