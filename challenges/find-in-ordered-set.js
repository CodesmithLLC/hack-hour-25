/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let midIndex = Math.floor(arr.length / 2);
  let topIndex = arr.length - 1;
  let bottomIndex = arr[0];
  if (arr[0] === target || arr[arr.length - 1] === target) return true

  while (arr[midIndex] !== target && bottomIndex !== topIndex) {
  	if (target > arr[midIndex]) {
  	  bottomIndex = midIndex
  	  midIndex = Math.floor((topIndex + bottomIndex)/2)
      console.log(midIndex)
  	}

  	if (target < arr[midIndex]) {
  	  topIndex = midIndex
  	  midIndex = Math.floor((topIndex + bottomIndex)/2)
  	}
  }
    return (arr[midIndex] === target)? true: false;
}


module.exports = findInOrderedSet;
