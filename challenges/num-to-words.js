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

function numToWords(num) {
  // num to words bank
  const words = {
    0: 'Zero',
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
    17: 'Eighteen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Fourty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    // more needed, like hundred, thousands, etc
  };
  // have an array that will be the number backwards
  const numPlace = [];
  // have a number to remember the digit place, starting with the first digit
  let digits = 10;
  // do a while loop to put numbers into the array
  while (num > 0) {
    // push the remainder of the num / digit
    numPlace.push(num % digits);
    // then reassign num to be the division of the digits, then round down
    num = Math.floor(num / digits);
    // increase digits for the next digit place
    digits *= 10;
  }
  // after getting the numbers in the array, now we will go through the array and replace them with words
  // have an array to hold words
  const wordsArr = [];
  // have an index to keep track
  let numInd = 0;
  // put digits back to 10;
  digits = 10;
  // have a while loop to go through the numPlace array and push words into wordsArr based on the num
  while (numInd > numPlace.length) {
    // check to see if numInd is 0, since we need to be more careful of the first two numbers
    if (numInd === 0) {
      // check to see if numPlace[1] is zero
      if (numPlace[1] === 0) {
        // push only numPlace[0] and then increase numInd
        wordsArr.push(words[numPlace[0]]);
        numInd += 2;
        digits *= 10;
        continue;
      } else if (numPlace[1] === 1) {
        // if the ten digit is 1, then combine the two numbers and find the word in the bank and push
        const teens = (numPlace[1] * digits) + numPlace[0];
        wordsArr.push(words[teens]);
        numInd += 2;
        digits *= 10;
        continue;
      } else {
        // if the second digit is not equal to 0, then find the number matching and push into wordsArr
        const tenDigit = words[(numPlace[1] * digits)];
        const firstDigit = words[numPlace[0]];
        wordsArr.push(firstDigit);
        wordsArr.push(tenDigit);
        numInd += 2;
        digits *= 10;
        continue;
      }
    } else {
      // more code here...
    }
  }
}

module.exports = numToWords;
