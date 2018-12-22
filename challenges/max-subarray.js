/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr, max = Number.NEGATIVE_INFINITY, first = true) {
	// base case
	if (arr.length === 0 && first) return 0;
	else if (arr.length === 0) return max;

	let copyArr = arr;
	// only copy the array once and manipulate that array
	if (first) copyArr = arr.slice();

	// reduce array to find some, and during the process, set max if found
	const sum = copyArr.reduce((acc, cur) => {
		if (acc > max) max = acc;
		return acc + cur;
	});

	// check the final sum to see if it the new max
	if (sum > max) max = sum;

	// remove first element of copyArr to pass to next recursive call
	copyArr.shift();

	return maxSubarray(copyArr, max, false);
}

module.exports = maxSubarray;