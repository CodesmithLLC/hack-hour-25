/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let newArr = [];
    for (let i = 0; i < a; i += 1) {
        if (a % i === 0 && b % i === 0) {
            newArr.push(i)
        }
    }
    return Math.max(...newArr)
}

module.exports = gcd;