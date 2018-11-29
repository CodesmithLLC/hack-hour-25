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
  // create empty array to store results in
  const resultArr = [];
  // check if arr1 or arr2 don't exist, return accordingly
  if (arr1.length === 0 && arr2.length === 0) return [];
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  // if both exist, iterate thru both arrays, checking if current value is less than
  // other current value. if so, push onto empty array
  for (let i = 0, x = 0; i < arr1.length, x < arr2.length;) {
    if (arr1[i] < arr2[x]) resultArr.push(arr1[i++]);
    if (arr2[x] < arr1[i]) resultArr.push(arr2[x++]);
    if (arr1[i + 1] === undefined) {
      resultArr.push(...arr2.slice(x));
      return resultArr;
    }
    if (arr2[x + 1] === undefined) {
      resultArr.push(...arr1.slice(i));
      return resultArr;
    }
  }
  // return result array
  return resultArr;
}

// var my_array = [3, 4, 6, 10, 11, 15, 21];
// var another_array = [1, 5, 8, 12, 14, 19];

// [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

// console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
