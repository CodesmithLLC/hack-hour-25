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
  let accum = '';
  let numObj2 = {
    1000 : "Thousand",
    1000000 : "Million",
    1000000000 : "Billion",
    1000000000000 : "Quadillion"
  } 
  let arr2 = [];
 for (let i in numObj2) {
    arr2.push(parseInt(i))
 }

for (let i = arr2.length - 1; i >= 0 ; i -- ){
    if (num >= arr2[i]) {
      let counter = 0;
      while (num >= arr2[i]) {
        counter ++;
        num -= arr2[i]
      }
      accum += determineBelowThousand(counter) + numObj2[arr2[i]]
  }
}
  accum +=determineBelowThousand(num)
  return accum;
}

function determineBelowHundred(num) {
  let numObj1 = {
  1 : "One",
  2 : "Two", 
  3 : "Three", 
  4 : "Four", 
  5 : "Five", 
  6 : "Six", 
  7 : "Seven", 
  8 : "Eight", 
  9 : "Nine", 
  10 : "Ten",  
  11 : "Eleven", 
  12 : "Twelve", 
  13 : "Thirteen", 
  14 : "Fourteen", 
  15 : "Fifteen", 
  16 : "Sixteen", 
  17 : "Seventeen",
  18 : "Eighteen",
  19 : "Nineteen",
  20 : "Twenty",
  30 : "Thirty",
  40 : "Forty",
  50 : "Fifty",
  60 : "Sixty",
  70 : "Seventy",
  80 : "Eighty",
  90 : "Ninety"
  }
let arr1 = [];
for (let i in numObj1) {
  arr1.push(parseInt(i))
}
  let accum = '';
    if (num === 0) return ''
for (let i = arr1.length - 1; i >= 0 ; i -- ){
    if (num >= arr1[i]) {
      accum += numObj1[arr1[i]]
      num -= arr1[i]
    }
  }
  return accum;
}

function determineHundred(num) {
let accum = '';
  if (num === 0) return ''
    if (num >= 100) {
      let counter = 0;
      while (num >= 100) {
        counter ++;
        num -= 100
      }
      accum += determineBelowHundred(counter) + "Hundred"
  }
  return accum;
}

function determineBelowThousand(num) {
  return determineHundred(num) + determineBelowHundred(num % 100);
}


numToWords(300525151340440)
module.exports = numToWords;
