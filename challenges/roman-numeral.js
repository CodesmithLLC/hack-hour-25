/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let m = n;
  const roman = [];

  const numerals = [
    {'M':1000},
    {'CM':900},
    {'D':500},
    {'CD':400},
    {'C':100},
    {'XC':90},
    {'L':50},
    {'XL':40},
    {'X':10},
    {'IX':9},
    {'V':5},
    {'IV':4},
    {'I':1},
  ]
  
  numerals.forEach((el)=>{
    let key = Object.keys(el);
    let val = Object.values(el);
    console.log(Math.floor(m/val))
    let floored = Math.floor(m/val);
    for(let i = 0; i < floored;i+=1){
      console.log(m + " - " + val)
      roman.push(key);
      m -= val;
    }
  })

  return roman.join('');
}

console.log(romanNumeral(944));

module.exports = romanNumeral;
