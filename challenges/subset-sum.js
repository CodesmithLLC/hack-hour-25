/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  function innerSubsetSum(sliceArr, num) {
    if (num === target) {
      return 1;
    }
    const newArr = sliceArr.slice(1);
    if (sliceArr.length > 0) {
      return (
        innerSubsetSum(newArr, num + sliceArr[0]) + innerSubsetSum(newArr, num)
      );
    }
    return 0;
  }
  return (innerSubsetSum(array.slice(), 0)>0);
}

module.exports = subsetSum;

console.log(subsetSum([3, 7, 4, 2], 5));
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
console.log(subsetSum([8, 2, 4, 12], 13));
console.log(subsetSum([8, -2, 1, -3], 6));
