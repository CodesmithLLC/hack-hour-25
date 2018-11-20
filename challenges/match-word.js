// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", 
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are 
// "closed". Write a function that 
// takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str === '') return true;
  // iterate thru str and grab first word and second word
  let word1 = '';
  let word2 = '';
  let word3 = '';
  let word4 = '';
  let tracker = 0;
  let tracker2 = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[A-Za-z]/gi) && tracker === 0) word1 += str[i].toLowerCase();
    if (str[i].match(/[^A-Za-z]/gi) && word1.length > 0) tracker += 1;
    if (tracker && str[i].match(/[A-Za-z]/gi)) word2 += str[i].toLowerCase();
    if (tracker && word2 && str[i].match(/[A-Za-z]/gi)) word3 += str[i].toLowerCase();
    if (str[i].match(/[^A-Za-z]/gi) && word3.length > 0) tracker2 += 1;
    if (tracker2 && str[i].match(/[A-Za-z]/gi)) word4 += str[i].toLowerCase();
  }
  if (!word3) {
    for (let i = 0, x = word2.length - 1; i < word1.length; i += 1, x -= 1) {
      if (word1[i] !== word2[x]) return false;
    }
  }
  if (word3) {
    for (let i = 0, x = word2.length - 1; i < word1.length; i += 1, x -= 1) {
      if (word1[i] !== word2[x]) return false;
    }
    for (let i = 0, x = word4.length - 1; i < word3.length; i += 1, x -= 1) {
      if (word3[i] !== word4[x]) return false;
    }
  }
  return true;
}

matchWord('__END_DNE-----')

module.exports = matchWord;
