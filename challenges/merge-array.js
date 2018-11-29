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

function mergeArrays(arr1, arr2, output = []) {
  // if both input arrays are empty, return output array
  if (arr1.length === 0 && arr2.length === 0) return output;

  // check if first element of array1 is less than first element of array 2, or if array2 has no elements
  if (arr1[0] < arr2[0] || arr2.length === 0) {
    // if true, push first element of array 1 to output array
    output.push(arr1[0]);
    // recursively call mergeArrays, slicing off pushed element
    return mergeArrays(arr1.slice(1), arr2, output)
  }
  // check if first element of array2 is less than first element of array 1, or if array1 has no elements
  if (arr1[0] > arr2[0] || arr1.length === 0) {
    output.push(arr2[0]); 
    // recursively call mergeArrays, slicing off pushed element
    return mergeArrays(arr1, arr2.slice(1), output)
  }
}

module.exports = mergeArrays;
