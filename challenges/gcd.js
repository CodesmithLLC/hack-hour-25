/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let divisor = 1;
  const smallest = (a < b) ? a : b

  for (let i = 0; i <= smallest; i++) {
    if ( (a % i === 0) && (b % i === 0) ) {
      divisor = i;
    }
  }
  
  return divisor;
}

module.exports = gcd;