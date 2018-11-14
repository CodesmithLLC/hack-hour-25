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
//  delcare a object to store the number and roman numbers
// iterate through obj
// check if value matches the num given 
// return the key 
function romanNumeral(n) {
    const roman = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000

    }
    if (n < 0) {
        return "Must be a positive number"
    }
    if (!n || n === undefined) {
        return "not lisited in the object"
    }


    for (let key in roman) {
        if (roman[key] === n) {
            console.log(typeof key === "string")
            return key
        }
    }


}

module.exports = romanNumeral;

console.log(romanNumeral());