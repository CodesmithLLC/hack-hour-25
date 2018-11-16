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
  // define variable result and initialize to false
  let result = false;
  let upperLimit;
  let sum = 0;
  // make a shallow copy of array
  let arrayCopy = [...array];
  // sort the array
  arrayCopy.sort((a, b) => a - b);
  // filter array copy for any number that meets the following rules
  // number is less than target
  // number is  no greater than (target + the absolute of lowest negative number)
  upperLimit = arrayCopy[0];
  if (upperLimit < 0) upperLimit = Math.abs(upperLimit) + target;
  else upperLimit = target;
  // console.log(`Upper Limit: ${upperLimit}`);
  // console.log(`arrayCopy: ${arrayCopy}`);
  arrayCopy = arrayCopy.filter(val => val <= upperLimit);
  // console.log(`arrayCopy after filter: ${arrayCopy}`);
  // iterate filtered array and try to get to target
  result = arrayCopy.reduce((accum, val, indx, arr) => {
    // console.log(`val: ${val}`);
    // console.log(`sum: ${sum}`);
    // console.log(`accum: ${accum}`);
    // console.log(`target: ${target}`);
    // console.log('-------');
    if (!accum) {
      sum += val;
      if (sum === target) {
        accum = true;
        return accum;
      }
      if ((sum > target) || (indx === (arrayCopy.length - 1) && arrayCopy[0] < 0)) {
        // before we consider it a fail let's loop backwards
        // to see if any of the past numbers removed will equal our target
        for (let i = indx; i >= 0; i -= 1) {
          // console.log(`testing backwards: ${target} = ${sum} - ${arr[i]}`);
          if ((sum - arr[i]) === target) {
            accum = true;
            return accum;
          }
        }
      }
    }
    return accum;
  }, false);
  // return result
  return result;
}

module.exports = subsetSum;
