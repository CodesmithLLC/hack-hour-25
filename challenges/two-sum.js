/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// one loop
function twoSum(arr, n) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    } else {
      set.add(n - arr[i]);
    }
  }
  return false;
}

module.exports = twoSum;
