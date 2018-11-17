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
  const pairs = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C',
    90, 'XC', 50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];
  let result = '';
  // loop through array, if number is greater than element, add the string to result and subtract number from input
  for (let i = 0; i < pairs.length; i += 2) {
    while (pairs[i] <= n) {
      result += pairs[i + 1];
      n -= pairs[i];
    }
  }
  return result;
}

console.log(romanNumeral(3))
console.log(romanNumeral(30))
console.log(romanNumeral(986))

/* function romanNumeralUnit(n) {
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
*/

module.exports = romanNumeral;
