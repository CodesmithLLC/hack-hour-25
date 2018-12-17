// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
   //create a counter variable
   let count = 0;

   if(num < 2) return 0;
   //iterate from 0 to num

   for(let i = 0; i <= num; i++){
      let numArr = i.toString().split('');
      //covert num to string and split str
      
      numArr.forEach(element => {
         if(element === '2') count += 1;
         //check if array includes 2, if so increment counter
      });
   }
   return count;
}
module.exports = countTwos;
