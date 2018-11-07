/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1) {


  // Base Case: when the power is equal to zero exit recursion
  if (power === 0) return result;

  // Edge case if base is zero return 0
  if (base === 0) return 0;

  // Edge case if power is zero return 1
  if (power === 0) return 1;

  return pow(base, (power -1), base * result);

}

module.exports = pow;
