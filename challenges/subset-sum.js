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

console.log(subsetSum([8, -2, 1, -3], 6));

// function subsetSum(array, target) {
//   return array.length > 0 ? possibleSums(array).includes(target) : false;
// }

function subsetSum(array, target, index = 0) {
  // base case if target is 0 then sum matched
  if (target === 0) return true;
  // base case if run out of items then false
  if (index > array.length) return false;
  // recurse with using this item
  const newVal = target - array[index];
  // either use the first itme or not use;
  return subsetSum(array, newVal, index + 1) || subsetSum(array, target, index + 1);
}


module.exports = subsetSum;
