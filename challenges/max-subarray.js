/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  while (arr[0] < 1) {
    arr.shift();
  };
  while (arr[arr.length-1] < 1) {
    arr.pop();
  };
  let max = arr.reduce((max, num) => {
    return max += num
  }, 0);
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = arr.length-1; j >= 0; j -= 1) {
      let sum = 0
      for (let k = i; k <= arr.length - j; k += 1) {
        sum += arr[k]
      }
      if (sum > max) max = sum;
    }
  }
  return max
} 
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))
console.log(maxSubarray([15,20,-5,10]))
module.exports = maxSubarray;
