/**
 * Given a string, determine if any of the permutations of that
 * string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let result = false;

  // Let's make everything equal
  str = str.toLowerCase();

  // Create utility function that reverses
  // a string and returns boolean if a Palindrome
  const isPalin = (permStr) => {
    const reversedStr = permStr.split('').reverse().join('');
    return (permStr === reversedStr);
  };

  const shiftString = (originalStr) => {
    // rotate originalStr by calling .shift then .push on tmpStrArray
    let tmpStrArray = originalStr.split('');
    const tmpStr2 = tmpStrArray.shift();
    tmpStrArray.push(tmpStr2);
    tmpStrArray = tmpStrArray.join('');
    console.log(`original: ${originalStr}`);
    console.log(`new: ${tmpStrArray}`);
    return tmpStrArray;
  };

  // iterate thru argument until we get a true from the
  // utility function or we get to the end of the string
  for (let i = 0; i < str.length; i += 1) {
    if (isPalin(str)) result = true;
    str = shiftString(str);
  }

  return result;
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));
console.log(permPalin('racecar'));

module.exports = permPalin;