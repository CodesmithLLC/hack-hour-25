/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  // create empty string
  let str = '';
  // create arrays for numbers and roman numeral
  const rm = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const numArr = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  // iterate up to the array length
  // create a while loop to check if n is currently greater than each numArr
  // if n is greater then push the roman numeral into the str and subtract n
  for (let i = 0; i < numArr.length; i += 1) {
    while (n >= numArr[i]) {
      str += rm[i];
      n -= numArr[i];
    }
  }
  // return the string
  return str;
}
console.log(romanNumeral(2018));
// module.exports = romanNumeral;
