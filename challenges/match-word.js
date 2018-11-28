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
  const stack = [];

  const words = str.match(\b\w*?\d\w*\b)

  console.log(words);

  // words.forEach((word) => {
  //   if (word.split('').reverse().join('') === stack[stack.length - 1]) {
  //     stack.pop();
  //   } else {
  //     stack.push(word);
  //   }
  //   console.log(stack);
  // })
  // return stack.length === 0;
}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

// function matchWord(str) {
//   if (typeof str !== 'string') return false;
//   if (str.length === 0) return true;
//   str = str.toLowerCase();
//   str = str.replace(/^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, '');

//   const stack = [];
//   const all = [];
//   const some = [];

//   for (let i = 0; i < str.length; i++) {
//     all.push(str[i])
//     if (str[i].match(/^[a-z0-9]+$/i)) {
//       some.push(str[i]);
//       if (stack[stack.length - 1] === str[i]) {
//         stack.pop();
//       } else {
//         stack.push(str[i]);
//       }
//     }
//   }
//   return (stack.length < 1 && all.length !== some.length) ? true : false;
// }

// console.log(matchWord('__ENDD_NE-----'))

module.exports = matchWord;
