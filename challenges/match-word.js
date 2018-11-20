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
	if (str.length === 0) return true;
	str = str.replace(/[^a-zA-Z0-9]/g,' ');
	str = str.trim().split(" ");
	const stack = [str[0].toLowerCase()];
	for (let i = 1; i < str.length; i += 1) {
		if (str[i] !== ' ' && str[i] !== '') {
			if (stack.length === 0) stack.push(str[i].toLowerCase());
			else if (stack[stack.length - 1] === str[i].split("").reverse().join("").toLowerCase()) stack.pop();
			else stack.push(str[i].toLowerCase());
		}
	}
	return stack.length === 0;
}

module.exports = matchWord;