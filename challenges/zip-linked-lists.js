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
  // create the head from the first node in l1
  const current1 = l1[0];
  const current2 = l2[0];
  while (current1 !== null) {
    const next2 = current2.next
    const next1 = current1.next;
    current1.next = current2;
    if (next1 === null) {break};
    current2.next = next1;
    current1 = current2.next;
    current2 = next2;
  }
};

module.exports = {Node: Node, zip: zip};
