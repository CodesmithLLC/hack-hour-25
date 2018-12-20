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
	let possibleSum = ((array.length - 1) * ((array.length - 1) + 1)) / 2;
	const sum = array.reduce((total, current) => total + current);
	return sum - possibleSum;
} 

module.exports = repeatNumbers;