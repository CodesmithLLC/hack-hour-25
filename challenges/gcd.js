/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b, divisor = Math.ceil(Math.min(a,b))) {
  // console.log(`a: ${a}, b: ${b}, divisor: ${divisor}`);

  // Base Case: if divisor equals 1
  if (divisor === 1) return divisor;

  // If true we have found GCD
  if ((a % divisor === 0) && (b % divisor === 0)) return divisor;

  // Try the next lowest divisor
  return gcd(a, b, divisor - 1);
}

// Test Cases
// console.log(`Expect 2 got : ${gcd(10, 8)}`);
// console.log(`Expect 1 got : ${gcd(10, 9)}`);
// console.log(`Expect 14 got : ${gcd(28, 42)}`)

module.exports = gcd;
