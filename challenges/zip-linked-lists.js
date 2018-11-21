/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let current1 = l1;
  let current2 = l2;
  let holder1;
  let holder2;
  while (current1.next !== null && current2.next !== null) {
    holder1 = current1.next;
    holder2 = current2.next;
    current1.next = current2;
    current2.next = holder1;
    current1 = holder1;
    current2 = holder2;
  }
  if (current1.next === null) {
    current1.next = current2;
  }
  else if (current2.next === null) {
    holder1 = current1.next;
    current1.next = current2;
    current2.next = holder1;
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};
