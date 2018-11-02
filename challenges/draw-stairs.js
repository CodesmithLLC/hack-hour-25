/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/
//input: number;
//output:
//strategy: 
    //creating an array with given number of elements;
    // \n
    //

function drawStairs(n) {
    const arr = [];
    let stairs = '*';
    let el
    for (let i = 0; i < n+1; i++){
            el = stairs.repeat();
            arr.push(el);
    
    }
    return arr.join('\n');
//     const arr = Array(n).fill(' ');
//     let stairs = '*';
//     for (let i = arr.length; i >= 0; i-1){
//         arr[i] = stairs
//         console.log(arr[i]);
//     }
// }

console.log(drawStairs(10));

module.exports = drawStairs;
