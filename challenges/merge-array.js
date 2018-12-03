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
  // Calculate the length of the longest array
  const maxLength = (arr1.length > arr2.length) ? arr1.length : arr2.length;

  // Define a temporary array for sorting
  const resultArray = [];

  // Iterate through the arrays
  for (let i = 0; i < maxLength; i += 1) {
    // console.log(arr1[0], arr2[0]);
    if (arr1[0] < arr2[0]) {
      console.log('top: ', arr1[0], arr2[0]);
      if (arr1[0] !== undefined) resultArray.push(arr1[0]);
      if (arr2[0] !== undefined) resultArray.push(arr2[0]);
    } else {
      console.log('bottom: ', arr1[0], arr2[0]);
      if (arr2[0] !== undefined) resultArray.push(arr2[0]);
      if (arr1[0] !== undefined) resultArray.push(arr1[0]);
    }
    arr1.shift();
    arr2.shift();
  }
  return resultArray;
}

const myArray = [3, 4, 6, 10, 11, 15, 21];
const anotherArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, anotherArray)); // -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
