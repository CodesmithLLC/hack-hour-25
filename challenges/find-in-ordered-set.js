/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  const middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) return true;
  if (target < arr[middle]) {
    const leftArr = arr.slice(0, middle);
    if (leftArr.length > 0) {
      return findInOrderedSet(leftArr, target);
    }
    return false;
  }
  if (target > arr[middle]) {
    const rightArr = arr.slice(middle, arr.length);
    if (rightArr.length > 0) {
      return findInOrderedSet(rightArr, target);
    }
    return false;
  }
}

module.exports = findInOrderedSet;
