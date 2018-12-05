/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let sum = false;
  function inner(_, thisIndex) {
    // let sum = false;
    arr.forEach((el, i) => {
      if (el + arr[thisIndex] === n && i !== thisIndex) sum = true;
    });
  }
  arr.forEach(inner);
  return sum;
}

console.log(twoSum([1, 3, 4, -30, 12, 22], -26));
module.exports = twoSum;
