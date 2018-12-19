/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	console.log(JSON.stringify(l1))
	let carried = 0;
	let newList = new Node(0);
	let newListPointer = newList
	let l1Pointer = l1;
	let l2Pointer = l2;
	let sum;
	let counter = 0;
	do {
		sum = (l1.value + l2.value + carried) % 10;
		console.log(sum)
		carried = Math.floor((l1.value + l2.value + carried)/10);
		l1Pointer = l1Pointer.next;
		console.log('l1 ' + JSON.stringify(l1Pointer)) 
		l2Pointer = l2Pointer.next;

		console.log('l2 ' + JSON.stringify(l2Pointer))

		if (counter === 0) {
			newListPointer.value = sum;
			newListPointer
		}
			else {
				let newNode = new Node(sum);
				newListPointer.next = newNode;
				console.log('before' + newListPointer)
				newListPointer = newListPointer.next
				console.log('after' + newListPointer)

			}
		counter ++;
	}
	while (l1Pointer !== null && l2Pointer !== null)

	console.log('hi' + newList)
	return newList
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
