/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
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
 */
// helper function
const isLessThan10 = (num) => {
  let i = 0;
  let tracker;
  if (num < 10) {
    while (i <= num) {
      if (i < 4) tracker += 'I';
      if (i === 4) tracker = 'IV';
      if (i === 5) tracker = 'V';
      if (i > 5 && i < 9) tracker += 'I';
      if (i === 9) tracker = 'IX';
      i += 1;
    }
    return tracker;
  }
}

const isLessThan40 = (num) => {
  let strNumArr = num.toString();
  let numArr = [Number(strNumArr[0]), Number(strNumArr[1])];
  let i = numArr[0];
  let x = 0;
  let tracker;
  while (i > 0) {
    tracker += 'X';
    i--;
  }
  while (x < numArr[1]) {
    tracker += isLessThan10(x);
    x++;
  }
  return tracker;
}

function romanNumeral(n) {
  if (n < 10) return isLessThan10(n);
  if (n < 40) return isLessThan40(n);
}

console.log(romanNumeral(11));

module.exports = romanNumeral;
