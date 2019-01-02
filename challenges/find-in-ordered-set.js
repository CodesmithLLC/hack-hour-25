/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// recursive
function findInOrderedSet(arr, target) {
  let midPoint = Math.floor(arr.length / 2);
  if (arr[midPoint] === target) {
    return true;
  }
  if (arr[midPoint] > target && arr.length > 1) {
      return findInOrderedSet(arr.slice(0, midPoint), target);
  } 
  if (arr[midPoint] < target && arr.length > 1) {
      return findInOrderedSet(arr.slice(midPoint, arr.length), target);
  }
  return false;
}

// iterative
// function findInOrderedSet(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor((start + end) / 2);
//   while (arr[mid] !== target && arr[start] < arr[end]) {
//     if (arr[mid] > target) end = mid;
//     if (arr[mid] < target) start = mid; 
//     mid = Math.floor((start + end) / 2);
//     return false;
//   }
//   return true;
// }


const nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(slice(nums))
console.log(findInOrderedSet(nums, 17))

module.exports = findInOrderedSet;