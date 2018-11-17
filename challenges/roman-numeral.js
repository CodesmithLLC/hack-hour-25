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

function romanNumeralUnit(n) {
  let result = '';
  const romans = {
    1: ['I', 'V', 'X'],
    10: ['X', 'L', 'C'],
  }
  const currentRoman = romans[1];
  if (n <= 3) {
    for (let i = 1; i <= n; i += 1) {
      result = result.concat(currentRoman[0]);
    }
  } else if (n === 4) {
    result = result.concat(currentRoman[0]).concat(currentRoman[1]);
  } else if (n === 5) {
    result = result.concat(currentRoman[1]);
  } else if (n <= 8) {
    result = result.concat(currentRoman[1]);
    for (let i = 1; i <= n - 5; i += 1) {
      result = result.concat(currentRoman[0]);
    }
  } else {
    result = result.concat(currentRoman[0]).concat(currentRoman[2]);
  }
  return result;
}

function romanNumeralTens(n) {
  let result = '';
  const romans = {
    1: ['I', 'V', 'X'],
    10: ['X', 'L', 'C'],
  }
  n = n / 10;
  const currentRoman = romans[10];
  if (n <= 3) {
    for (let i = 1; i <= n; i += 1) {
      result = result.concat(currentRoman[0]);
    }
  } else if (n === 4) {
    result = result.concat(currentRoman[0]).concat(currentRoman[1]);
  } else if (n === 5) {
    result = result.concat(currentRoman[1]);
  } else if (n <= 8) {
    result = result.concat(currentRoman[1]);
    for (let i = 1; i <= n - 5; i += 1) {
      result = result.concat(currentRoman[0]);
    }
  } else {
    result = result.concat(currentRoman[0]).concat(currentRoman[2]);
  }
  return result;
}

function romanNumeralHundreds(n) {
  n = n / 100;
  let result = '';
  const romans = {
    1: ['I', 'V', 'X'],
    10: ['X', 'L', 'C'],
    100: ['C', 'D', 'M'],
  }
  const currentRoman = romans[100];
  if (n <= 3) {
    for (let i = 1; i <= n; i += 1) {
      result = result.concat(currentRoman[0]);
    }
  } else if (n === 4) {
    result = result.concat(currentRoman[0]).concat(currentRoman[1]);
  } else if (n === 5) {
    result = result.concat(currentRoman[1]);
  } else if (n <= 8) {
    result = result.concat(currentRoman[1]);
    for (let i = 1; i <= n - 5; i += 1) {
      result = result.concat(currentRoman[0]);
    }
  } else {
    result = result.concat(currentRoman[0]).concat(currentRoman[2]);
  }
  return result;
}


function romanNumeral(n) {
  let numString = n.toString()
  let digits = numString.length;
  let result = '';
  let functions = [romanNumeralHundreds, romanNumeralTens, romanNumeralUnit]
  for (let i = 0; i < digits; i += 1) {
    
  }
}

console.log(romanNumeralUnit(3))
console.log(romanNumeralTens(30))
console.log(romanNumeralHundreds(1000))
module.exports = romanNumeral;
