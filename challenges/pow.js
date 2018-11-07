/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // base case
  // if power is 0, then just return 1
  if (power === 0) {
    return 1;
  }
  // if power is 1, then just return the base
  if (power === 1) {
    return base;
  }
  // recursive function
  return base * pow(base, power - 1);
}

// console.log(pow(5, 2)); // 25
// console.log(pow(3, 2)); // 9
// console.log(pow(3, 3)); // 27
// console.log(pow(6, 2)); // 36
// console.log(pow(6, 0)); // 1


module.exports = pow;
