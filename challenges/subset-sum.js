/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum() - >
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

    let result = false;
    // ITERATE OVER ARRAY -->TO KEEP TRACK OF THE FIRST ELELMENT 
    for (let lead = 0; lead < array.length; lead += 1) {
        // ITERATE OVER ARRAY TO TRACK THE SECOND ELEMENT IN THE ARRAY 

        for (let second = 1; second < array.length; second += 1) {
            // CHECK IF ARRAY AT INDEX 0 PLUS ELEMENT AT INDEX 1 IS EQUAL TO THE TARGET NUMBER
            if (array[lead] + array[second] === target) {
                // IF TRUE: REUTRN TRUE
                return true;
            } else {
                result = result;
            }
            console.log('lead', array[lead], 'second', array[second])


        }
    }
    return result;

}

module.exports = subsetSum;

// console.log(subsetSum([3, 7, 4, 2], 5)); //true, 3 + 2 = 5
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) //-> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13))//-> false
console.log(subsetSum([8, -2, 1, -3], 6))// -> true, 8 + 1 + (-3) = 6