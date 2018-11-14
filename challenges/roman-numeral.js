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
    const obj = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "90",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
const output = "";
    if(n > 4){
    output += obj['1'].repeat(n)
    }
    return output;
    // const strArr = n.toString().split(""); 
    // console.log(strArr);
    // return strArr.reduce((total,curr) =>{
    //     total += obj[curr];
    //     return total;
    // }, '');
}
console.log(romanNumeral(3));
module.exports = romanNumeral;
