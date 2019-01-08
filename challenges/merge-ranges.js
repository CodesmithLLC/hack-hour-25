/* eslint-disable prefer-destructuring */
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

/**
  * SUMMARY: Take input array and return an array of condensed ranges
  *
  * @param {array} array - an array of arrays
  * @returns {array} array - an array of arrays
 */
function mergeRanges(array) {
  // Sort the input array
  array.sort((a, b) => a[0] - b[0]);
  // Declare an output array and add first index
  const output = [array[0]];
  // Iterate through input array (outer)
  for (let i = 0; i < array.length; i += 1) {
    // Declare variable to store value of last element of the output array
    const last = output[output.length - 1];
    // If the first element of the current array element if greater than the last element of last...
    if (array[i][0] > last[1]) {
      // Push the array element to output
      output.push(array[i]);
      // If the second element of the current array element is greater than the last element of last...
    } else if (array[i][1] > last[1]) {
      // Make the second element of last equal to the second element of the current array
      last[1] = array[i][1];
    }
  }
  // Return output array
  return output;
}

// const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// console.log(mergeRanges(times)); // Returns [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
