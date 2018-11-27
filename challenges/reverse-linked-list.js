/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
	this.value = value;
	this.next = null;
}

function reverseLinkedList(head) {
	if (!head.next) return -1;
	// starting at head, check next value of every node until next is equal to null
	let current = head;
	let newHead;
	while (current) {
		newHead = current;
		// if (!newHead.next) return newHead;
		current = current.next;
	}
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
// console.log(a.next);
// console.log(e.next);

console.log(reverseLinkedList(a));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
