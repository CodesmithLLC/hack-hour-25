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

//input: one single number;
//output: array of numbers
//strategy:
  //create a variable - empty array & a counter (equals to 1)
  //push counter to array, and increment by 1 until counter is equal to arg;
  //once numArr is set;
    //iterate over numArr
      //if current el is divisible by both 3 and 5; set current el to 'fizzbuzz'
      //if current el is divisible by 3, set el to 'fizz'
      //-----------------------------5, set el to 'buzz'

function fizzbuzz(num) {
  const numArr = [];
  let counter = 1;
  while (counter < num+1) {
    numArr.push(counter);
    counter++;
  }
  //console.log(numArr);
  for (let i = 0; i < numArr.length; i++){
    if (numArr[i] % 3 === 0 && numArr[i] % 5 === 0){
      numArr[i] = 'fizzbuzz'
    } 
    if (numArr[i] % 3 === 0){
      numArr[i] = 'fizz'
    }
    if (numArr[i] % 5 === 0){
      numArr[i] = 'buzz'
    }
  }

  return numArr;
}

console.log(fizzbuzz(16));

module.exports = fizzbuzz;
