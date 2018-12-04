// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

const ONES_PLACE = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const TENS_PLACE = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const ALT_TENS = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const COARSE_PLACES = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

function numToWords(num) {
  if (num === 0) return 'Zero';
  
  // convert number into array of three digit strings,
  // with ascending order of place value
  const numStrs = chunkNumber(num);
  
  // turn array of number strings into array of words
  const finalNumStrs = numStrs.map((numStr, i) => {
    // create word from three digits
    const threeDigit = parseThreeDigit(numStr);
    // if word is nonempty, add thousands/millions place value
    return threeDigit && threeDigit + COARSE_PLACES[i];
  });
  
  // Reverse array of words to be in descending place value, then join together
  return finalNumStrs.reverse().join('');
}

// Takes in a number, and returns an array of three digit strings
// The place value of these strings is in ascending order
function chunkNumber(num) {
  // create number string
  let numStr = num.toString();
  
  // pad number string with frontal zeroes, so that its length is a multiple of 3
  const remainder = numStr.length % 3;
  const frontalZeroes = remainder && 3 - remainder;
  numStr = '0'.repeat(frontalZeroes) + numStr;
  
  // create groups of three digit strings
  const numStrs = [];
  let j = numStr.length;
  while (j > 0) {
    const i = j - 3;
    
    const threeDigits = numStr.slice(i, j);
    numStrs.push(threeDigits);
    
    j = i;
  }
  
  return numStrs;
}

// create word from three digits, not including thousands/millions place value
function parseThreeDigit(numStr) {
  let result = '';
  
  // parse hundreds place
  if (numStr[0] !== '0')
    result += ONES_PLACE[numStr[0]] + 'Hundred';
  // parse tens/once place for non-teen numbers
  if (numStr[1] !== '1')
    result += TENS_PLACE[numStr[1]] + ONES_PLACE[numStr[2]];
  // parse tens/once place for teen numbers
  else
    result += ALT_TENS[numStr[2]];
  
  return result;
}

function numToWordsTriple(num) {
  const digits = { 
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Ninteen',
  };
  const tens = ['hundred', 'twenty', 'etc'];

}

module.exports = numToWords;
