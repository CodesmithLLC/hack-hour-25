/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	if (array.length === 0) return undefined;
	let possibleSum = 0;
	for (let i = 1; i <= array.length; i += 1) {
		possibleSum += 1;
	}
	const sum = array.reduce((total, current) => total + current);
	return sum - possibleSum;
} 

module.exports = repeatNumbers;
