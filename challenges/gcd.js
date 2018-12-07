/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(a<1||b<1)return 0;

  let hold = Math.max(a,b);
  while(hold !== 0){
    if(a%hold ===0 && b%hold===0){
      break;
    }
    hold = hold-1;
  }
  return hold;
}


console.log(gcd (100,10));
console.log(gcd (8,2));
console.log(gcd (90,9));
console.log(gcd (1,0));

module.exports = gcd;