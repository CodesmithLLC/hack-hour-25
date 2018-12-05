/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

//console.log(twoSum([1, 3, 4, 6], 9))

function twoSum(arr, n) {
  let workingArr = arr.slice();
  let remainder;

  for (let i = 0; i < workingArr.length; i += 1) {
    remainder = n - workingArr[i];
    workingArr = workingArr.slice(1);
    if (workingArr.includes(remainder)) {
      return true;
    } else {
      return twoSum(workingArr, n);
    }
  }
  return false;
}

const arr1 = [7, 10, 4, 6];
console.log(twoSum(arr1, 14));

module.exports = twoSum;
