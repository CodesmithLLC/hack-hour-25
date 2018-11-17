/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let sum = 0;
  for (let i = 0, j = binary.length - i; i < binary.length; i++, j--) {
    if (binary[i] === '1') {sum += Math.pow(2, j - 1 )}
  }
  return sum
}

function decToBin(dec) {
  //declare a variable result that store the result as binary
  let result = 0;
 //do a while loop to count the number of 2 power right before reaching above the dec,
  let n = 0;
  while (Math.pow(2,n) <= dec) {
   n += 1;
  }
  let remain = dec - Math.pow(2, n - 1)
  result = Math.pow(10, n - 1)
  for (let i = 0, j = n - 1; i <= n -1; i ++, j--){
    if (Math.pow(2,j - 1) <= remain) {
      result += Math.pow(10, j-1)
      remain -= Math.pow(2,j-1 )
    }
  }
  return result.toString()
}
//'3' -> 11
module.exports = binToDec;
