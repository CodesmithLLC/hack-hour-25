// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // replace all special charcters and punc to _
  let newStr = str.replace(/[^A-Z0-9]+/ig, "_").split('_');
  // filter out all the _
  newStr = newStr.filter((el) => {
    if (el !== '') {
      return el;
    }
  });
  // lowercase all the letters
  newStr = newStr.map(el => el.toLowerCase());
  // if it is empty, just return true
  if (newStr.length === 0) return true;
  // if it only has 1, return false
  if (newStr.length === 1) return false;
  // if it has more than 1, then check to see if the word at index exists somewhere else in the array
  // loop through the array
  while (newStr.length > 0) {
    if (newStr.includes(newStr[0].split('').reverse().join(''))) {
      // if it exists, then get the index
      const check = newStr.indexOf(newStr[0].split('').reverse().join(''));
      if (((check - 0) + 1) % 2 === 0) {
        newStr.splice(check, 1);
        newStr.splice(0, 1);
        continue;
      }
      return false;
    }
    return false;
  }
  // for (let i = 0; i < newStr.length; i += 1) {
  //   // first check to see if the index, string reversed and lowercase exists
  //   if (newStr.includes(newStr[i].split('').reverse().join(''))) {
  //     // if it exists, then get the index
  //     const check = newStr.indexOf(newStr[i].split('').reverse().join(''));
  //     if (((check - i) + 1) % 2 === 0) {
  //       continue;
  //     } 
  //     return false;
  //   }
  //   return false;
  // }
  return true;
  // console.log(newStr);
}

console.log(matchWord('__END_DNE-----'));  //-> true
console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
console.log(matchWord(''));  //-> true

module.exports = matchWord;
