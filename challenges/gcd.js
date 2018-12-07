/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(...args) {
  // Declare a constant and pass args values as an array
  const values = Object.values(args);

  // Handle the edge case of a zero in the values array
  if (values.indexOf(0) !== -1) return 0;

  // Declare a variable to store the common divisor
  let gcdNum = 0;

  // Iterate through each element of the values array
  for (let i = 0; i < values.length; i += 1) {
    // Iterate from one to the highest value in the values array
    for (let j = 1; j < Math.max(...values); j += 1) {
      // If the modulo of i equals 0 for value in the values array
      if (values[0] % j === 0 && values[1] % j === 0) {
        // push i to the common divisor variable
        gcdNum = j;
      }
    }
  }
  // Return the common divisor value
  return gcdNum;
}

console.log(gcd(10, 8)); // -> 2
console.log(gcd(10, 9)); // -> 1
console.log(gcd(3, 6)); // -> 3
console.log(gcd(-4, 8)); // -> 4
console.log(gcd(22, 52)); // -> 2
console.log(gcd(3, 0)); // -> 0

module.exports = gcd;