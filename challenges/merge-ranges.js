/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  const result = [];

  // Edge Case - Empty Array
  if (!array || array.length === 0) return result;

  // Sort Array
  array.sort((a, b) => a[0] - b[0]);

  // Initialize result with lowest range
  result.push(array[0]);

  // iterate array
  for (let i = 0; i < array.length; i += 1) {
    const curRange = array[i];
    const lastRange = result[result.length - 1];
    if (curRange[0] <= lastRange[1]) {
      // update if match
      if (curRange[1] > lastRange[1]) lastRange[1] = curRange[1]; 
    } else {
      // add if not match
      result.push(curRange);
    }
  }
  return result;
}

module.exports = mergeRanges;
