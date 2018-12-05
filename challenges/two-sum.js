/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	const obj = {};
	arr.map((el) => obj[el.toString()] = el);
	for (let i = 0; i < arr.length; i += 1) {
		const difference = n - arr[i];
		if (obj[difference.toString()] && arr[i] !== obj[difference.toString()]) return true;
	}
	return false;
}

module.exports = twoSum;