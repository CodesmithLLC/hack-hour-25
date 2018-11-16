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
    
  // Iterate through array storing the first index to a total variable
  for (let i = 0; i < array.length; i += 1) {
    // Declare a total variable
    let total = array[0];

    // Iterate through array starting at index 1 and adding each element to the total
    for (let j = 1; j < array.length; j += 1) {
      total += array[j];
      
      // Check of the total matches the target
      if (total === target) return true;

      // Shift the first element of the array and push it to the end
      array.push(array.shift());
    }
  }
  return false;
}

console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;
