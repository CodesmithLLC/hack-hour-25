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
  // have a variable for new node
  const l3 = new Node(l1.value + l2.value);
  // have a variable to hold the carry
  // find the carry over value from l3, if any
  let carry = Math.floor((l1.value + l2.value) / 10);
  // have points for both linked list
  let l1Pointer = l1.next;
  let l2Pointer = l2.next;
  let l3Pointer = l3.next;
  // go through the linked list
  while (l1Pointer !== null && l2Pointer !== null) {
    // assign l3's next to the value of counter's values
    if (l1Pointer === null) {
      l3Pointer = new Node(0 + l2Pointer.value + carry) % 10;
    } else if (l2Pointer === null) {
      l3Pointer = new Node(l1Pointer.value + 0 + carry) % 10;
    }
    // find new carry and move counters
    carry = Math.floor(l3Pointer.value / 10);
    l1Pointer = l1Pointer.next;
    l2Pointer = l2Pointer.next;
    l3Pointer = l3Pointer.next;
  }
  // after going through all the nodes in both linked list return the linked list
  return l3;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
