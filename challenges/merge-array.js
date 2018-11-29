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
  let newArr = [];
  let done = true;
  while (done) {
    const element1 = arr1.shift();
    const element2 = arr2.shift();
    if (!element1) {
      done = false;
      newArr = [...newArr, element2, ...arr2];
    }
    if (!element2) {
      done = false;
      newArr = [...newArr, element1, ...arr1];
    }
    if (element1 < element2) {
      newArr.push(element1);
      arr2.unshift(element2);
    }
    if (element2 < element1) {
      newArr.push(element2);
      arr1.unshift(element1);
    }
  }
  return newArr;
}

module.exports = mergeArrays;
