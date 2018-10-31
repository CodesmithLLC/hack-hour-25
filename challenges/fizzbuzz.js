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
  const output = [];
  for(let i = 0; i < num; i++){
    output[i] ='';
    if ((i+1) %3 === 0){
      output[i] += "fizz";
    }
    if((i+1)%5 === 0){
      output[i] += "buzz";
    }
    if(output[i] === ''){
      output[i] = i+1;
    }
  }
  return output;
}


console.log(fizzbuzz(15));

module.exports = fizzbuzz;
