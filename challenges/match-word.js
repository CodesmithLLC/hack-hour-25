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

  // Declare an array to use as a stack
  const stack = [];

  // Split string into an array and make lowercase
  const stringArray = str.toLowerCase().replace(/[^a-z0-9]/gi, ' ').replace(/^\s+|\s+$/g,'').replace(/\s\s+/g, ' ').split('');
  // console.log(stringArray, stringArray.length);

  let word = '';

  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i] !== ' ') {
      word += stringArray[i];
    }

    if (stringArray[i] === ' ' && word.length > 0) {
      if (i > stringArray.length / 2) {
        const closeWord = word.split('').reverse().join('');
        console.log(closeWord, stack[stack.length - 1]);
        if (closeWord !== stack[stack.length - 1]) return false;
      }
      stack.push(word);
      word = '';
      console.log(stack);
      // console.log(stringArray);
    }
  }
  return true;
}

// console.log(matchWord('__END_DNE-----')); // -> true
// console.log(matchWord('__ENDDNE__')); // -> false
// console.log(matchWord('IF()()fi[]')); // -> true
// console.log(matchWord('for__if__rof__fi')); // -> false
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
// console.log(matchWord('')); // -> true

module.exports = matchWord;
