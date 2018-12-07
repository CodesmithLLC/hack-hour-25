/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // create highestDiv variable to store greatest common divisor
  let highestDiv = 0;
  // check if a is greater than b. if so,
  if (a > b) {
    // iterate from 1 up to a
    for (let i = 0; i < a; i += 1) {
      // on each iteration, check if a divided by current num yields 
      // remainder of 0 and b divided by num yields remainder of 0.
      // if so, set highestDiv equal to current num
      if (a % i === 0 && b % i === 0) highestDiv = i;
    }
  } else {
    // otherwise, do same, but going up to b
    for (let i = 0; i < b; i += 1) {
      // on each iteration, check if a divided by current num yields 
      // remainder of 0 and b divided by num yields remainder of 0.
      // if so, set highestDiv equal to current num
      if (a % i === 0 && b % i === 0) highestDiv = i;
    }
  }
  return highestDiv;
}

module.exports = gcd;