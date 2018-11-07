/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    //Base case : check if does exsit return base


    if (power === 0) return 1;

    return base * pow(base, power - 1)
}

module.exports = pow;


console.log(pow(9, 2))