/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let  smaller = Math.min(a, b), bigger = Math.max(a, b)
  for (let step = 1, gcd = smaller; step < smaller; step) {
    if ( bigger % gcd === 0 ) return gcd 
    while(step++) {
      if (smaller / step < 2) return 1
      if (smaller % step === 0) {
        gcd = smaller / step; 
        break;
      }
    }
  }
}

module.exports = gcd;