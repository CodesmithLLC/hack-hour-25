/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

    //check if power equals zero, if so return 1
    if(power === 0) return 1;
    //when power is equal to when 1 return base;
    if(power === 1)return base;

    return pow(base + base, power - 1);
}

console.log(pow(2,3))
module.exports = pow;
