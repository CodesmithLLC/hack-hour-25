/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const sorted = arr.sort((a, b) => a - b);
  let end = sorted.length - 1;
  let beginning = 0;
  while (beginning < end) {
    const sum = sorted[beginning] + sorted[end];
    if (sum === n) {
      return true;
    }
    if (sum < n) {
      beginning += 1;
    }
    if (sum > n) {
      end -= 1;
    }
  }
  return false;
}


module.exports = twoSum;
