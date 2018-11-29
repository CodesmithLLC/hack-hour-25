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
  if (!arr1 || typeof(arr1) !== 'Object') return arr2
  if (!arr2 || typeof(arr1) !== 'Object') return arr1
  let resArray = [], i = arr1.length-1, j = arr2.length-1
  while (true) {
    resArray.unshift( arr1[i] > arr2[j] ? arr1[i--] : arr2[j--])
    if (i < 0) {
      resArray = arr2.slice(0, j+1).concat(resArray)
      break
    } else if (j < 0) {
      resArray = arr1.slice(0, i+1).concat(resArray) 
      break
    }
  }
  return resArray
}

module.exports = mergeArrays;
