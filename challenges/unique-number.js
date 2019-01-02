/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
    //create a empty object
    const storage = {};
    //iterate through array

    for(let i = 0; i < array.length; i+=1){
        //store elements in empty obj
        if(storage[array[i]]) storage[array[i]]+=1;
        else{
            storage[array[i]] = 1;
        }
        //if element is currently stored in array increment value
    }

    //iterate through object if property 
    for(let num in storage){
        if(storage[num] !== 2) return num;
        
    }


}
console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
