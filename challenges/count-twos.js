// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  const numStrArr = [];
  let counter = 0;
//create an array of nums 
  for (let i = 1; i <= num; i += 1) {
    numStrArr.push(i.toString());
  }

  numStrArr.forEach(el => {
    if (el < 10) counter = 1;
    if (el.length > 1) {
      for (let i = 0 ; i < el.length; i += 1) {
        if (el[i] === '2') counter += 1;
      }
    }
  })
  return counter;
}

console.log(countTwos(11420));

module.exports = countTwos;
