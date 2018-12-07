/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	const aDivisors = new Set();
	const bDivisors = new Set();

	for (let i = 0; i <= a; i += 1) {
		if (a % i === 0) aDivisors.add(i);
	}
	for (let x = 0; x <= b; x += 1) {
		if (b % x === 0) bDivisors.add(x);
	}

	let length = 0;
	if (a < b) length = a;
	else length = b;

	let result = 0;
	for (let y = 0; y <= length; y += 1) {
		if (aDivisors.has(y) && bDivisors.has(y) && y > result) result = y; 
	}
	return result;
}

module.exports = gcd;