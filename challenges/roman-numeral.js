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
    const roman = [
        1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I']
    // if (n < 0) {
    //     return "Must be a positive number"
    // }
    // if (!n || n === undefined) {
    //     return "not lisited in the object"
    // }


    // for (let key in roman) {
    //     if (roman[key] === n) {
    //         console.log(typeof key === "string")
    //         return key
    //     }
    // }
    // DELCARE A EMPTY STRING LITERAL
    let string = " ";
    // ITERATE OVER ARRAY 2 AT A TIME
    for (let i = 0; n > 0 && i <= roman.length; i += 2) {
        // CHECK WHILE NUMBER IS GREATER OR EQUAL TO THE ELEMENT AT THAT INDEX
        while (n > roman[i]) {
            // console.log(roman[i])

            // IF TRUE: NUMBER MINUS THAT ELEMENT AT THAT INDEX 
            n - roman[i];
            // ELSE : ADD THE SECOND INDEX TO THE DELCARE STRING 
            string += roman[i + 1]

        }

    }
    // RETURN THE STRING
    // return string;
    console.log(string)
}

module.exports = romanNumeral;

console.log(romanNumeral(17));