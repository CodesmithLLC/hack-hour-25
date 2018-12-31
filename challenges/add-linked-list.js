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

// Node.prototype.prev = null;

function addLinkedList(l1, l2) {
  let val = l1.value + l2.value
  //create a new LL
  const l3 = new Node(val)
  let nextVal;
  let temp = false;
  while (l1 && l2) {
    let strNum = (l1.next + l2.next).toString();
    if (strNum.length > 1) {
      nextVal = Number(strNum[strNum.length - 1]);
      temp = true;
    } else {
      (temp === true) ? (nextVal = l1.next + l2.next + 1) : (nextVal = l1.next + l2.next)
      temp = false;
    }
    l3.next = nextVal;
    l1 = l1.next;
    l2 = l2.next;
    l3 = l3.next;
  }
  //return new LL
  return l3;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
