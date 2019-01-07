/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an
 * array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

//input: array of arrays
//output: array of arrays

function mergeRanges(array) {
  // sort array of arrays
  const arrSorted = array.sort((a, b) => a[0] - b[0]);
  // create empty array to store results
  const mergeArr = [];
  // iterate thru array of arrays
  for (let i = 0, x = i + 1; x < array.length;) {
    // console.log(array[x][1])
    // for each array, check if 0th el of i is less than 0th el of x && 1st el of i is greater than
    // 0th el of x. if so, push new array onto mergeArr containing 0th el of i and 1st el of x
    if (array[i][0] <= array[x][0] && array[i][1] >= array[x][0]) {
      mergeArr.push([array[i][0], array[x][1]]);
      i += 2, x += 2;
    } else {
      // otherwise, push i onto mergeArr
      mergeArr.push(array[i]);
      i += 1, x += 1
    }
  }
  return mergeArr;
}

module.exports = mergeRanges;
