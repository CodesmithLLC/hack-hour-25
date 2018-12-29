/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let beginning = 0;
  let end = arr.length - 1;
  let middle = Math.floor(arr.length / 2);
  if (target === arr[beginning] || target === arr[end]) {
    return true;
  }
  while (middle !== beginning && middle !== end) {
    if (target < arr[middle]) {
      end = middle;
      middle = Math.floor((beginning + middle) / 2);
    }
    if (target > arr[middle]) {
      beginning = middle;
      middle = Math.floor((middle + end) / 2);
    }
    if (target === arr[middle]) {
      return true;
    }
  }
  return false;
}


module.exports = findInOrderedSet;
