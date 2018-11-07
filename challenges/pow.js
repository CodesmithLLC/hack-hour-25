/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 1) return base
    if (power === 0) return 1
    if (power < 0)  return Math.exp(power*Math.log(base));
    return base * pow(base, power-1)
}

module.exports = pow;
