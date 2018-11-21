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

function pullWord(str) {
  let arr = str.match(/[A-Za-z]+/g);
  // const collection = [];
  // let currWord = '';
  // let startedWord = false;
  // for (let i = 0; i < str.length; i += 1) {
  //   if (str[i].match(/[a-z]/i)) {
  //     currWord = currWord.concat(str[i].toLowerCase());
  //     startedWord = true;
  //   } else if (startedWord) {
  //     collection.push(currWord);
  //     currWord = '';
  //     startedWord = false;
  //   }
  // }
  // collection.push(currWord);
  return arr;
}

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  const double = s1 + s1;
  return isSubstring(double, s2);
}

function matchWord(str) {
  let collection = pullWord(str);
  collection = collection.map(word => word.toLowerCase());
  const stack = [];
  collection.forEach((word) => {
    const reverse = word.split('').reverse().join('');
    if (stack[stack.length - 1] === reverse) stack.pop();
    else stack.push(word);
  });
  return stack.length === 0;
}
console.log(pullWord('IF()()fi[]'));
console.log(matchWord('IF()()fi[]'));

module.exports = matchWord;
