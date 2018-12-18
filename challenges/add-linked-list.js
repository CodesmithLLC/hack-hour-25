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
  if (!l1) return;
  if (!l2) return;
  let current1.value = l1.value;
  let current2.value = l2.value;
  while (current2 && current1) {
    current1.value = current1.value + current2.value;
    if (current1.value >= 10) {current1.next.value += 1; current1.value - 10};
    current1 = current1.next;
    current2 = current2.next;
  }
  return l1;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
