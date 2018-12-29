/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

const nums = [1, 4, 6, 7, 9, 17, 45];

// // 1 loop, O(n)
// function findInOrderedSet(arr, target) {
//   return arr.includes(target);
// }


// faster
function findInOrderedSet(arr, target) {
  let track = 0;
  while (track < arr.length) {
    if (arr[track] > target) {
      return false;
    }
    if (arr[track] === target) {
      return true;
    }
    track += 1;
  }
}

console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
