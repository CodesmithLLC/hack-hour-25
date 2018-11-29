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
  // empty array to return
  const returnArr = [];
  // two pointers for each array
  let arr1p = 0;
  let arr2p = 0;
  // while loop to go through and push an array element from either based on order
  while (arr1p < arr1.length || arr2p < arr2.length) {
    // push arr1 to the rest of the array if arr 2 is done
    if (arr2p === arr2.length) {
      const restOfArr1 = arr1.slice(arr1p, arr1.length);
      returnArr.push(...restOfArr1);
      arr1p = arr1.length;
      continue;
    }
    // push arr2 to the rest of the array if arr 1 is done
    if (arr1p === arr1.length) {
      const restOfArr2 = arr2.slice(arr2p, arr2.length);
      returnArr.push(...restOfArr2);
      arr2p = arr2.length;
      continue;
    }
    // push arr2 index if it is smaller than arr1 index
    if (arr1[arr1p] > arr2[arr2p]) {
      returnArr.push(arr2[arr2p]);
      arr2p += 1;
      continue;
    }
    // push arr1 index if it is smaller than arr2 index
    if (arr1[arr1p] < arr2[arr2p]) {
      returnArr.push(arr1[arr1p]);
      arr1p += 1;
      continue;
    }
  }
  // return the result
  return returnArr;
}

// var my_array = [3,4,6,10];
// var my_array = [3,4,6,10,11,15,21];

// var another_array = [1,5,8];
// var another_array = [1,5,8,12,14,19];


// console.log(mergeArrays(my_array, another_array)); // [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
