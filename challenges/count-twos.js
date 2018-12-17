// Write a function "countTwos" that takes a number as an argument, n. 
//The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. 
//There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function convert2Num(num){
	return parseInt(num);
}

function countTwos(num) {
	let count = 0;
	for (let i = 0; i <= num; i++){
		if (i.toString().length > 1){
			let digArr = i.toString().split('').map(convert2Num);
			for (let k = 0; k < digArr.length; k++){
				if (digArr [k] === 2) count +=1;
            }
		}
		if (i === 2) count +=1;
	}
	return count;
}

countTwos(2);//  -> 1
countTwos(1);//  -> 0
countTwos(3);//  -> 1
countTwos(13);//  -> 2
countTwos(120);//  -> 2
// countTwos(2222);
// countTwos(1000);//  -> 300
// countTwos(11420);//  -> 4483


module.exports = countTwos;
