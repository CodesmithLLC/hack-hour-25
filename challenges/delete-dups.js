/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
	if (head === undefined || head.next === null) return head;
	let current = head; 
	while (current !== null) {
		let curNode = current;
		while (curNode.next !== null) {
			if (current.value === curNode.next.value) curNode.next = curNode.next.next;
			else curNode = curNode.next;
		}
		current = current.next;
	}
	return head;
}

module.exports = deleteDups;

// function Node(val) {
// 	this.value = val;
// 	this.next = null;
// }

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const repeat = new Node(4);
// const five = new Node(5);
// const no = new Node(1);

// one.next = two;
// two.next = three;
// three.next = repeat;
// repeat.next = five;
// five.next = no;

// let current = one;

// while (current !== null) {
// 	console.log(current)
// 	current = current.next;
// }
// console.log(one)
// console.log(deleteDups(one))