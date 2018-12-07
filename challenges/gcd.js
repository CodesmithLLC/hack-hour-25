/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {        
    //find the smallest value between both args and store it into a variable
    const min = Math.min(a, b);
    //create a variable and set it equal to one (divisor)
    let divisor = 0;
    //iterate until you reach the min val between both arrays
    for(let i = 1; i <= min; i+=1){
        if(a % i === 0 && b % i === 0){
            divisor = i;
        }
    }
    return divisor
}
console.log(gcd(10,0));
module.exports = gcd;