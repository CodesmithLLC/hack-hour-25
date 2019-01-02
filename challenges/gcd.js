/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  const aDivisor = [];
  const bDivisor = [];
  
  for (let i = 0; i < prime.length; i += 1) {
    if ((prime[i] < a) && Number.isInteger(a / prime[i])) aDivisor.push(prime[i]);
    if ((prime[i] < b) && Number.isInteger(b / prime[i])) bDivisor.push(prime[i]);
  }
  console.log('aDivisor: ' + aDivisor);
  console.log('bDivisor: ' + bDivisor);
  return aDivisor.reduce((acc, el) => {
    if (bDivisor.includes(el)) acc.push(el);
    return acc;
  }, []);
}

console.log(gcd(45, 54));

module.exports = gcd;