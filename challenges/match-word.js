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
// check if empty string; if it is; return true
  if (str === '') { return true; }
// create a regex for special characters
  const regex = /\W|_/gi;
// split string by special characters
  const newArr = str.split(regex);
// separate them into separate strings
  let count = 0;
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i].length >= 1) {
      count += 1;
    }
  }
  if (count === 1) { return false; };
  let str1;
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i].length >= 1) {
      str1 = newArr[i];
      break;
    }
  }
  let str2;
  for (let i = newArr.length - 1; i >= 0; i -= 1) {
    if (newArr[i].length >= 1) {
      str2 = newArr[i];
      break;
    }
  }
  // check for palindrome
  if (str1.length !== str2.length) {return false};
  str2 = str2.split('').reverse().join('');
  // if yes return true else return false
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(matchWord('__END_DNE-----'))//;  -> true
console.log(matchWord('__ENDDNE__'))//;  -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'))//;  -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'))//;  -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))//;  -> true
console.log(matchWord(''))//;  -> true
module.exports = matchWord;
