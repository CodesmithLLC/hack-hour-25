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
  // define pointers for next nodes and current
  let currentNode;
  let l1NextPointer;
  let l2NextPointer;
  // booleans to indicate when we are done traversing a linked list
  let l1Done = false;
  let l2Done = false;

  if (l1 == null && l2 !== null) return l2;
  if (l2 == null && l1 !== null) return l1;

  currentNode = l1;
  l1NextPointer = l1.next;
  l2NextPointer = l2;

  while ((l1Done && l2Done) === false) {
    // Build List
    currentNode.next = l2NextPointer;
    currentNode = l2NextPointer;

    // Advance L2
    if (l2NextPointer.next !== null) {
      l2NextPointer = l2NextPointer.next;
      currentNode.next = l1NextPointer;
    } else l2Done = true;

    // Advance L1
    if (l1NextPointer.next !== null) {
      l1NextPointer = l1NextPointer.next;
    } else l1Done = true;

    // Advance Current Node
    currentNode = currentNode.next;
  }

  // return first node of new zipped linked list
  return l1;
};

module.exports = {Node: Node, zip: zip};
