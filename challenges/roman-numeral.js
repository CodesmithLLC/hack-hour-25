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

function romanNumeral(num) {
  let value = num;
  let letterString = '';
  const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (let i = 0; i <= number.length; i += 1) {
    while (value % number[i] < value) {
      letterString += roman[i];
      value -= number[i];
    }
  }
  return letterString;
}

console.log(romanNumeral('40')); // returns XL
console.log(romanNumeral('900')); // returns CM
console.log(romanNumeral('1100')); // returns MC
console.log(romanNumeral('2001')); // returns MMI
console.log(romanNumeral(2018)); // returns 2018 MMXVIII

module.exports = romanNumeral;
