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
  if (!l2) {return l1};
  if (!l1) {return l2};
  let current1 = l1
  let current2 = l2
  while (current1 !== null) {
    let next2 = current2.next
    let next1 = current1.next;
    current1.next = current2;
    if (next1 === null) {break};
    current2.next = next1;
    if (next2 === null ) {break}
    current1 = next1
    current2 = next2;
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};
