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
  // store the roman numerals in an object
  const romans = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  // create an empty string to add the roman numerals to
  let newNumber = '';
  // have an empty array to fill in the letters as we go through the number
  const romanHolder = [];
  // have a new variable equal to the parameter
  let numArg = n;
  // have a number for the digits, starting at 1
  let digits = 10;
  // from the last digit, go through the number, taking away the last digit after finding the roman numeral for it
  while (numArg > 0) {
    // grab the last digit
    let lastDigit = numArg % digits;
    // check to see if lastDigits is in the key of roman numerals object
    if (lastDigit.toString() === Object.keys(romans)) {
      // if it is in there, add the roman version of the last digit to the romanHolder
      romanHolder.push(romans[lastDigit]);
    } else {
      // if it isn't in there, we have to build the roman numeral first
      
    }
    // after pushing the roman numeral change numArg and digits
    numArg = Math.floor(numArg / digits) * digits;
    digits *= 10;
  }
  // after the while loop, go and build out the string by going through the romanHolder backwards
  for (let i = romanHolder.length - 1; i > 0; i -= 1) {
    newNumber += romanHolder[i];
  }
  // return the roman numeral string
  return newNumber;
}

module.exports = romanNumeral;
