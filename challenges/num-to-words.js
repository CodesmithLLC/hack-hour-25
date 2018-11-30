// Write a function that takes a number as an argument and returns its english word 
// representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). 
// Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').

/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) 
 * -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) 
 * -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) 
 * -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

const single = (num) => {
  switch (num) {
    case 1:
      return 'One'
      break;
    case 2:
      return 'Two'
      break;
    case 3:
      return 'Three'
      break;
    case 4:
      return 'Four'
      break;
    case 5:
      return 'Five'
      break;
    case 6:
      return 'Six'
      break;
    case 7:
      return 'Seven'
      break;
    case 8:
      return 'Eight'
      break;
    case 9:
      return 'Nine'
      break;
    default:
      return '';
  }
}

const teen = (num) => {
  switch (num) {
    case 11:
      return 'Eleven'
      break;
    case 12:
      return 'Twelve'
      break;
    case 13:
      return 'Thirteen'
      break;
    case 14:
      return 'Four'
      break;
    case 15:
      return 'Five'
      break;
    case 16:
      return 'Six'
      break;
    case 17:
      return 'Seven'
      break;
    case 18:
      return 'Eight'
      break;
    case 19:
      return 'Nine'
      break;
    default:
      return '';
  }
}


function numToWords(num) {
  if (num === 0) return 'Zero';
  // convert num to string, split to array
  const numStrArr = num.toString().split('');
  // turn each string in numStrArr back into number
  const numArr = numStrArr.map(numStr => {
    return Number(numStr);
  });

  let result = [];

  for (let i = numArr.length - 1, x = 0; i >= 0; i -= 1, x += 1) {
    if (x === 0) result.push(single(numArr[i]));
  }
  return result.reverse().join('');
}

// console.log(numToWords(43))
// console.log(numToWords(2999))
// console.log(numToWords(15))

module.exports = numToWords;
