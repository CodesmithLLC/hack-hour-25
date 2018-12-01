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
  let result = '';
  if (num === 0) return 'Zero';
  const singles = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const copy = num.toString().split('');
  if (copy.length === 1) {
    result = singles[copy[0]] + result;
  } else if (copy.length === 2) {
    if (copy[0] === 1) {
      result = teens[copy[0]] + result;
    } else {
      result = tens[copy[0]] + singles[copy[1]];
    }
  } else if (copy[1] === 1) {
    result = singles[copy[0]] + 'Hundred' + teens[copy[1]] + result;
  } else {
    result = singles[copy[0]] + 'Hundred' + tens[copy[1]] + singles[copy[2]];
  }
  // let result = '';
  // let place = 0;
  // const places = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion','Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion'];
  // const copy = num.toString().split('');
  // while (copy.length) {
  //   const current = copy.splice(copy.length - 3, 3);
  //   if (copy.length === 1) {
      
  //   }
  // }
}

module.exports = numToWords;
