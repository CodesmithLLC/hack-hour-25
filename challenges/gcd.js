/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
function gcd(a, b) {
  if (a === b) return a
  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }
	let result = 1;
	for (let i = 2; i <= b; i ++) {
		if ( a % i === 0 && b % i ===0) {
			result = i
		}
	}
	return result;
}

module.exports = gcd;