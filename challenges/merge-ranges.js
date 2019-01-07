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
  // for every element in array, compare both digits in item to every digit in every other item in array
  // either either digit is within the range other elements, push min and max of all digits of those two elements
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    let check = true;
    for (let j = 0; j < array.length; j += 1) {
      if (i !== j && ((array[i][0] >= array[j][0] && array[i][0] <= array[j][1]) || (array[i][1] >= array[j][0] && array[i][1] <= array[j][1]))) {
        const min = Math.min(...array[i], ...array[j]);
        const max = Math.max(...array[i], ...array[j]);
        result.push([min, max]);
        check = false;
      }
    }
    if (check) {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = mergeRanges;
