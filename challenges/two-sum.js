/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

const array = [5, 4, 1, 10, 3]
function twoSum(arr, n) {
    /**
     * base case :check if array is empty return false
     * delcare a varible to store the output 
     * iterate over array 
     * nested and iterate again 
     * conditional check if element in the outer plus element in the inner is equal to the target
     * if true : return true 
     * else: false
     * return output
     */
    if (arr.length === 0) return false;

    let output = false;

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            // console.log(arr[i] + arr[j])
            if (arr[i] + arr[j] === n) {
                output = true;
            }
        }
    }
    return output;
}
console.log(twoSum(array, 14))//true
console.log(twoSum(array, 100))//false

module.exports = twoSum;
