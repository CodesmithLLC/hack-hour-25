// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    //declare 3 const with and set equal to fizz, buzz and fizzbuzz
    const fizz = 'fizz';
    const buzz = 'buzz';
    const fizzbuzz = 'fizzbuzz';
    
    //create an empty array
    const result = [];

    //iterate starting from 1 until num

    for(let i = 1; i <= num; i+=1){
        //check if num is divisible by 3 & 5, 
        // if so, push fizzbuzz to empty array
        //if num is divisible by 3 push fizz to empty array
        //if num is divisible by 5 push buzz to empty array
        //else push num to empty array
        if(i % 3 === 0 && i % 5 === 0){
            result.push(fizzbuzz);
        }else if(i % 3 === 0){
            result.push(fizz);
        }else if(i % 5 === 0){
            result.push(buzz);
        }else{
            result.push(i)
        }
       
    }
    return result;
}
console.log(fizzbuzz(16));
module.exports = fizzbuzz;
