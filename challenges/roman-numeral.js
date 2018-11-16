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

// const basics = {
//   1 : I,
//   4 : IV,
//   5 : V,
//   9 : IX,
//   10 : X,
//   40 : XL,
//   50 : L,
//   90 : XC,
//   100 : C,
//   400 : CD,
//   500 : D,
//   900 : CM,
//   1000 : M,
// }

function romanNumeral(n) {
  // const basics = {
  //   1 : 'I',
  //   4 : 'IV',
  //   5 : 'V',
  //   9 : 'IX',
  //   10 : 'X',
  //   40 : 'XL',
  //   50 : 'L',
  //   90 : 'XC',
  //   100 : 'C',
  //   400 : 'CD',
  //   500 : 'D',
  //   900 : 'CM',
  //   1000 : 'M',
  // }
  // for (let basicNum in basics) {
  //   if (basics.hasOwnProperty(n)) return basics[n];

  const basics = [[1, 'I'], [4, 'IV'], [5, 'V'], [9, 'IX']];
  const arr = [];
  for (let i = 0; i < basics.length; i += 1){
    if (n === basics[i][0]) return basics[i][1];
    if (n > basics[i][0]) arr.push(basics[i]);
  }
  //arr = [[1, 'I'], [4, 'IV'], [5, 'V']]
  //finalArr = [5, 'V']
  const finalArr = arr[arr.length - 1];
  let remainder; 
  let result = arr[arr.length - 1][1];
  for (let i = 0; i < arr.length; i += 1){
    while (remainder < arr[i][0]){
      result += arr[i][1];
    }
    // if (remainder === arr[i])
    return result;
  }
}

console.log(romanNumeral(6))

module.exports = romanNumeral;
