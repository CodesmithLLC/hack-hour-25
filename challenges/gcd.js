/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */



function gcd(a, b) {
  // start with the smaller of the two, check if it divides into other
  const smaller = Math.min(a, b);
  const bigger = Math.max(a, b);
  const smallerDenoms = [];
  // start with the smaller of the two
  // increment a counter from 1 until sqrt of smaller
  let increment = 1;
  
  // keep incrementing until increment < sqrt of smaller
  while (increment <= Math.sqrt(smaller)) {
    const currentDivisor = smaller / increment;
    const commonDenom = bigger / currentDivisor;
    console.log('commonDenom: ', commonDenom);
    if (commonDenom % 1 === 0) return currentDivisor;
    if (currentDivisor % 1 === 0) smallerDenoms.push(increment);
    increment += 1;
  }
  while (smallerDenoms.length > 0) {
    const potential = smallerDenoms.pop();
    const divides = bigger / potential;
    if (divides % 1 === 0) return potential;
  }
  return 1;
  // set the current divisor as start / increment
  // set current common denominator to check as bigger/currentDivisor
  // as long as commonDenom is not a whole number, keep incrementing increment
  // if reached up until sqrt and nothing, return 1.
}
console.log(gcd(24, 16));
module.exports = gcd;