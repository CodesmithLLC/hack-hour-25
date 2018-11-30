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
 const numToArray = num.toString().split('');
 const smallOptions = {
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
   19: 'Nineteen',
 }
 const mediumOptions = {
   2: 'Twenty',
   3: 'Thirty',
   4: 'Forty',
   5: 'Fifty', 
   6: 'Sixty',
   7: 'Seventy',
   8: 'Eighty',
   9: 'Ninety',
 }
 const biggerOptions = {
   3: 'Hundred',
   4: 'Thousand',
   5: 'Thousand',
   6: 'Million',
   7: 'Million',
   8: 'Million'
   9: 'Billion',
 }
  if (num < 20) return smallOptions[num];
  else if (num > 20 && num < 100) {
    return `${mediumOptions[numToArray[0]]}${smallOptions[numToArray[1]]}`;
  } 
}

module.exports = numToWords;
