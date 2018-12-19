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
  let c1 = l1, c2 = l2, c = 0, r1 = new Node(0), r = r1;
  while (true){
    r.value = (c1?c1.value || 0:0) + (c2?c2.value || 0:0) + c;
    if (r.value > 9) {
      r.value = r.value % 10;
      c = 1
    } else {
      c = 0
    }
    if (c1 != null) c1 = c1.next; 
    if (c2 != null) c2 = c2.next;
    if(c1 === null && c2 === null && c === 0 ) break;
    r.next = new Node(0);
    r = r.next;
  }
  return r1
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
