/* You are given an array of integers with both positive and negative numbers.
   Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive
   elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
// input: array of nums

function maxSubarray(arr) {
  // create object to store key:value pairs, with each consecutive sum
  const obj = {};
  // create count variable
  let count = 0;
  // iterate thru arr
  for (let i = 0; i < arr.length; i += 1) {
    let sum = 0;
    // on each iteration, store the key as incrementing number, and value as sum
    for (let x = i; x < arr.length; x += 1) {
      sum += arr[x];
      obj[count] = sum;
      count += 1;
    }
  }
  // create values array from values of object
  const valArr = Object.values(obj);
  // return max value in values array
  return Math.max(...valArr);
}

module.exports = maxSubarray;
