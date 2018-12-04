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
  // if (str = '') return true;
  const storage = [];
  str = str.toLowerCase();
  let newStr = str.replace(/\W+/g, " ")
  const strArr = newStr.split(' ')
  console.log('newStr ' + newStr)
  console.log('strArr ' + strArr);
  for (let i = 0; i < strArr.length; i += 1){
    let reversedStrEl = strArr[i].split('').reverse().join('')
    if (!storage.includes(reversedStrEl)) {
      storage.push(reversedStrEl)
    } else {
      storage.pop(reversedStrEl)
    }
    return storage;
  }
}
//console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
console.log(matchWord('IF()()fi[]'))

module.exports = matchWord;
