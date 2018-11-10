/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  const stringArr = [];
  let s2c = s2.split('');
  for (let i = 0; i < s2.length; i += 1) {
    let temp = s2c.slice(i, i + s2.length);
    temp = temp.join('');
    stringArr.push(temp);
    s2c.push(s2c[i]);
  }
  //because the instructions;
  isSubstring(s1,s2);
  return stringArr.includes(s1);
}
console.log(stringRotation("lohel", "hello"));

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
