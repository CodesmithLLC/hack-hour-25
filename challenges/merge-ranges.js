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
  for (let j = 0; j < array.length; j += 1) {
    const currTime = array[j];
    const resultLength = result.length;
    for (let i = 0; i <= resultLength; i += 1) {
      if (resultLength === 0) {
        result.push(currTime);
        break;
      }
      if (i === resultLength) {
        result.push(currTime);
      }
      const oldStart = result[i][0];
      const oldEnd = result[i][1];
      const newStart = currTime[0];
      const newEnd = currTime[1];
      if (newStart >= oldStart && newStart <= oldEnd && newEnd > oldEnd) {
        result[i] = [oldStart, newEnd];
        break;
      } else if (newEnd >= oldStart && newEnd <= oldEnd && newStart < oldStart) {
        result[i] = [newStart, oldEnd];
        break;
      } else if (newStart < oldStart && newEnd > oldEnd) {
        result[i] = currTime;
        break;
      }
    }
    console.log('result: ', result);
  }
  return result;
}

// const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

// console.log(mergeRanges(times));
module.exports = mergeRanges;
