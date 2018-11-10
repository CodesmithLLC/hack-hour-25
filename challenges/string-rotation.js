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
  //check if two arg string are equal, if so return true
  //if( s1 === s2 ) return true;
  //create a variable and set it equal to slicing first string at second character
  let sliceStr = s1.slice(1, s1.length);

  //hello === elloh 
    //store h in temp var
    let temp = s2[s2.length - 1];

    //start iteration from end of array
    //store 2nd to last char in last index
    s2[s2.length - 1] = s2[s2.length - 2];
    //store third to last char in 2nd index
    s2[s2.length - 2] = temp;
    //store fourth to last char in 3rd index
    s2[s2.length - 3] = s2[s2.length - 4];
    // store fifth to last char in 4th index
    s2[s2.length - 4] = s2[s2.length - 5];
    s2[s2.length - 0] = s2[s2.length - 3];



  //hello === llohe
  //hello === lohel
  //hello === ohell
  
  // for(let i = 0; i < s1.length; i++){
  //   console(sliceStr)
  // }
 //hello elloh
  //return isSubstring(s1, )
  

}
console.log(stringRotation('hello', "llohe"));
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};


