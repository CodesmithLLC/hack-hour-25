/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

/* DO AGAINNNNN */

function getAllProducts(array) {
	if (array.length === 0) return [0];
	let product = 1; 
	let isZero = 0;
	let result = new Set();
	const count = {};
	array.forEach(num => (num === 0) ? isZero += 1 : product *= num);
	(isZero !== 0) ? result = ((isZero === array.length) ? [0] : [0, product]) : array.map(num => result.add(product / num));
	return [...result];
}

module.exports = getAllProducts;

// console.log(getAllProducts([0, 0, 0]))