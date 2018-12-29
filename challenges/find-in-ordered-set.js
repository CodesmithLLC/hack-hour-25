/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// Binary Search
function findInOrderedSet(arr, target) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2;
    currentElement = arr[currentIndex];

    if (currentElement < target) {
      minIndex = currentIndex + 1;
    } else if (currentElement > target) {
      maxIndex = currentIndex - 1;
    } else {
      return true;
    }
  }
  return false;
}

const nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;
