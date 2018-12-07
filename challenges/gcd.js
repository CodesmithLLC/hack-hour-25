/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // an array to hold all the common denominators
  const result = [];
  // assign the smaller and larger integer
  let larger;
  let smaller;
  if (a > b) {
    larger = a;
    smaller = b;
  } else {
    larger = b;
    smaller = a;
  }
  // go through a for loop to find the common denominator up to the smaller integer
  for (let i = 1; i <= b; i += 1) {
    // check to see if both can be divisible by the index
    if (larger % i === 0 && smaller % i === 0) {
      result.push(i);
    }
  }
  // return the largest from the result array
  return Math.max(...result);
}

// console.log(gcd(10, 8));
// console.log(gcd(10, 9));
// console.log(gcd(11, 9));
// console.log(gcd(135, 60));

module.exports = gcd;