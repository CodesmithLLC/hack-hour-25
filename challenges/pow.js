/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // handles base = 0
  if (base === 0 && power < 1) return NaN;
  // handles power = 0
  if (power === 0) return 1
  // handles power < 0
  if (power < 0) {
    power = Math.abs(power);
    if (power === 1) return 1 / base;
    return 1 / base * pow(1 / base, power - 1);
  } else {
  // handles power > 0
    if (power === 0) return 1;
    if (power === 1) return base;
    return base * pow(base, power - 1);
  }
}

module.exports = pow;
