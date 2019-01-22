/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
//triple nested iteration
    let check;
    for (let i = 0; i < array.length-2; i += 1) {
        for (let j = i + 1; j < array.length-1; j += 1) {
            for (let k = j + 1; k < array.length; k += 1) {
                let sum;
                sum = array[i] * array[j] * array[k];
                console.log(array[i], array[k], array[j], sum)
                if (!check || sum > check) {
                    check = sum;
                }
            }
        }
    }
    return check
}

console.log(highestProduct([1,2,3,4,5,1]))


module.exports = highestProduct;
