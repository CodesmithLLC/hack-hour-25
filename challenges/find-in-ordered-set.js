/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	// edge cases
	if (arr.length === 0) return false;
	if (isNaN(target)) return false;
	
	if (arr.length === 1 && arr[0] === target) return true;
	if (arr.length === 1 && arr[0] !== target) return false;

	const middle = Math.floor(arr.length / 2);
	if (target === arr[middle]) return true;
	if (target > arr[middle]) return findInOrderedSet(arr.slice(middle, arr.length + 1), target);
	if (target < arr[middle]) return findInOrderedSet(arr.slice(0, middle), target);

	return false;
}


module.exports = findInOrderedSet;