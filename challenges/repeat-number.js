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
	let numOccur = {};
	for (let i = 0; i < array.length;i++){
		numOccur[array[i]] = numOccur[array[i]] + 1 || 1;
	}
	
	
	for (let key in numOccur){
		if (numOccur[key] > 1) return key;
	}

}

console.log(repeatNumbers([1,2,3,4]));
console.log(repeatNumbers([1,2,4,3,4])); //4
console.log(repeatNumbers([1,2,3,2,4,5,6])); //2
module.exports = repeatNumbers;
