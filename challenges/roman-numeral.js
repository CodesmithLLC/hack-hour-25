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

function romanNumeral(n, romanNumeralStr='', remainder=n) {
  // Base Case: n must be positive (> 0)
  if (remainder < 0) return 'Please provide a positive integer';
  if (remainder === 0) return romanNumeralStr;

  // Process from largest to smallest
  switch (true) {
    case (remainder >= 1000):  // M
      romanNumeralStr += 'M';
      remainder -= 1000;
      break;
    case (remainder >= 900):
      romanNumeralStr += 'CM';
      remainder -= 900;
      break;
    case (remainder >= 500):
      romanNumeralStr += 'D';
      remainder -= 500;
      break;
    case (remainder >= 400):
      romanNumeralStr += 'CD';
      remainder -= 400;
      break;
    case (remainder >= 100):
      romanNumeralStr += 'C';
      remainder -= 100;
      break;
    case (remainder >= 90):
      romanNumeralStr += 'XC';
      remainder -= 90;
      break;
    case (remainder >= 50):
      romanNumeralStr += 'L';
      remainder -= 50;
      break;
    case (remainder >= 40):
      romanNumeralStr += 'XL';
      remainder -= 40;
      break;
    case (remainder >= 10):
      romanNumeralStr += 'X';
      remainder -= 10;
      break;
    case (remainder >= 9):
      romanNumeralStr += 'IX';
      remainder -= 9;
      break;
    case (remainder >= 5):
      romanNumeralStr += 'V';
      remainder -= 5;
      break;
    case (remainder >= 4):
      romanNumeralStr += 'IV';
      remainder -= 4;
      break;
    case (remainder >= 1):
      romanNumeralStr += 'I';
      remainder -= 1;
      break;
  }

  // Recursively Call
  return romanNumeral(remainder, romanNumeralStr, remainder);
}

module.exports = romanNumeral;
