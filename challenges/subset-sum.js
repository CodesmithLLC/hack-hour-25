/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function possibleSums(array) {
  if (array.length === 1) return array;
  let result = [];
  result.push(array[0]);
  const remaining = possibleSums(array.slice(1));
  for (let i = 0; i < remaining.length; i += 1) {
    result.push(array[0] + remaining[i]);
  }
  result = result.concat(remaining);
  return result;
}

console.log(possibleSums([8, -2, 1, -3], 6));

function subsetSum(array, target) {
  const sumsArr = possibleSums(array);
  for (let i = 0; i < sumsArr.length - 1; i += 1) {
    if (target === sumsArr[i]) return true;
  }
  return false;
}


module.exports = subsetSum;
