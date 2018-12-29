/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let arrCopy = arr;
  // create pointer variable for start, end and center
  let start = arr[0];
  let end = arr[arr.length - 1];
  let center = arr[Math.floor(arr.length / 2)];

  if (center === target) return true;
  // iterate thru array
  while (center !== target && arr.length > 2) {
    if (center === target) return true;
    // if target is greater than center, start now equals center
    if (center < target) {
      start = center;
      arrCopy = arrCopy.slice(arr[Math.floor(arrCopy.length / 2)]);
      center = arrCopy[Math.floor(arr.length / 2)];
    }
    // if target is less than center, end now equals center
    if (center > target) {
      end = center;
      arrCopy = arrCopy.slice(0, Math.floor(arrCopy.length / 2));
      center = arrCopy[Math.floor(arrCopy.length / 2)];
    }
    // console.log('center: ', center)
  }
  if (center === target) return true;
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 2)); // -> true
// findInOrderedSet(nums, 2); // -> false


module.exports = findInOrderedSet;
