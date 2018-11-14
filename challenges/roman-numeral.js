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
// if character is I and comes before another character, subtract 1
// if character is X and comes before another character, subtract 10
// if character is C and comes before another character, subtract 100...
function romanNumeral(n) {
  const romans = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 10000
  }
  const romanKeys = Object.keys(romans);
  const string = '';
  romanKeys.forEach(function(key) {
    if (n === romans[key]) return key;
  })
}
console.log(romanNumeral(10)) 
module.exports = romanNumeral;
