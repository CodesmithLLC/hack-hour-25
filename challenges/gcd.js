/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let div = Math.min(a, b);
  while (!Number.isInteger(b / div) || !Number.isInteger(a / div)) {
    div -= 1;
  }
  return div;
}


module.exports = gcd;