/* Write a function that calculates x^y, where x is given as the
base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // guard clause --> if base is less than 1, return 1
  if (power < 1) return 1;
  // base case --> if power is equal to one, return base
  if (power === 1) return base;
  // otherwise, return base * recursive call to pow passed base and pow - 1
  return base * pow(base, power - 1);
}

module.exports = pow;
