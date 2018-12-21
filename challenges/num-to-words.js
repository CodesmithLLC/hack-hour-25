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
  const englishNumbers = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine"
  ];
  const stupidEnglishNumbers = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const bigNumbers = [
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion",
    "Decillion",
  ]
  const numArr = num.toString().split("");
  const nLength = numArr.length;
  let output = "";
  if (nLength === 1 && numArr[0] === 0) {
    return "Zero";
  }
  let bigNumberTracker = Math.floor(nLength/3)-1;
  for (let i = 0; i < numArr.length; i += 1) {
    if ((nLength - i) % 3 === 2) {
      if (numArr[i] !== 0) {
        if (numArr[i] === '1') {
          output += stupidEnglishNumbers[numArr[i + 1]];
          i += 1;
        } else {
          if (numArr[i] == '4') {
            output += "For";
          } else if (numArr[i] == '5') {
            output += "Fif";
          }else if(numArr[i] =='2'){
            output += "Twen"
          } 
          else {
            output += englishNumbers[numArr[i]];
          }
          output += "ty";
        }
      }
    } else {
      if (numArr[i] !== 0) {
        output += englishNumbers[numArr[i]];
      }
    }
    if((nLength - i)%3 === 0){
      output += 'Hundred'
    }
    if((nLength - i)%3 === 1 && i !){
      output += bigNumbers[bigNumberTracker];
      bigNumberTracker -= 1;
    }
  }
  return output;
}

console.log(numToWords(4563212899));

module.exports = numToWords;
