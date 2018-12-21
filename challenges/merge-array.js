/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  let arr3 = [];
  let arr1Count = 0;
  let arr2Count = 0;
  while (arr1Count !== arr1.length) {
    if (arr2Count === arr2.length) {
      arr3 = arr3.concat(arr1.slice(arr1Count));
      break;
    }
    if (arr1[arr1Count] < arr2[arr2Count]) {
      arr3.push(arr1[arr1Count]);
      arr1Count += 1;
    } else {
      arr3.push(arr2[arr2Count]);
      arr2Count += 1;
    }
  }
  if (arr2Count < arr2.length) {
    arr3 = arr3.concat(arr2.slice(arr2Count));
  }
  return arr3;
}

module.exports = mergeArrays;
