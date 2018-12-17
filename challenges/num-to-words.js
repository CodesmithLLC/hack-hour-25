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
  // Declare an array of 0-9 as strings
  const numStringArray = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  // Declare an array of place values: tens, hundreds, thousands, etc.
  const placeValueArray = ['Trillion', 'Billion', 'Million', 'Thousand', 'Hundred', '', ''];
  // Declare an output array
  const output = [];
  // Convert input num to a string and split into an array
  const numArray = num.toString().split('');
  // Iterate through number array checking num array value (convert back to number) against number string array
  for (let i = numArray.length - 1; i >= 0; i -= 1) {
    // If output length is greater than two add place value to output array
    console.log(output.length, placeValueArray.length - output.length);
    if (output.length > 1) output.unshift(placeValueArray[placeValueArray.length - output.length]);
    // Push correct number string to the output array
    output.unshift(numStringArray[Number(numArray[i])]);
    console.log(output);
  }
  // Return output array as string
  return output.join('');

}

// console.log('numToWords(0): ', numToWords(0)); // -> 'Zero'
// console.log('numToWords(43): ', numToWords(43)); // -> 'FortyThree'
console.log('numToWords(2999): ', numToWords(2999)); // -> 'TwoThousandNineHundredNintyNine'


module.exports = numToWords;
