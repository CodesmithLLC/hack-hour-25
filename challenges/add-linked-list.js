/* You have two numbers represented by linked lists. Each node contains a single digit.
// The digits
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
  // create temp carryOver variable to store carry over if addedNum is greater than 10
  let carryOver = 0;
  // iterate thru l1 and l2 nodes, adding current value to new node value's next
  const newNode = new Node(l1.value + l2.value);

  let current1 = l1;
  let current2 = l2;
  let newNodeNext = newNode.next;

  while (current1) {
    current1 = l1.next;
    current2 = l2.next;
    newNode.next = new Node(current1.value + current2.value);
  }
  return newNode;
}

const node1 = new Node(2);
node1.next = new Node(1);
const node2 = new Node(5);
node2.next = new Node(9);

console.log(addLinkedList(node1, node2));
// console.log(5)

// Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 7 -> 0 -> 8
module.exports = { Node: Node, addLinkedList: addLinkedList };
