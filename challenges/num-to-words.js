// Write a function that takes a number as an argument and 
// returns its english word representation as a string.
// Answers should be in upper camel case (a.k.a. Pascal case).
// Don't worry about spaces.
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
  let answer = '';
  let digitFinderRegExp;
  const ones = [
    'Zero', 'One', 'Two', 'Three', 'Four',
    'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const tens = [
    '', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty',
    'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  // Edge Case: if argument is not a number
  if (!(typeof num === 'number')) return NaN;

  // Edge Case: Validate if number is larger than our current support
  if (num > 99) return 'Argument value too large. Currently support (0-99)';

  // Process Tens
  digitFinderRegExp = RegExp(/\d{1,2}/,'g');
  answer += tens[digitFinderRegExp.exec(num)];

  // Process Ones
  digitFinderRegExp = RegExp(/[0-9]{1,1}$/,'g');
  answer += ones[digitFinderRegExp.exec(num)];

  // return result
  return answer;
}

module.exports = numToWords;
