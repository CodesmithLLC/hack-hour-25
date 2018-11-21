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
  if (l1.head === null) return l2;
  if (l2.head === null) return l1;
  let currentNode1 = l1.head;
  let currentNode2 = l2.head;
  while (currentNode2 !== null && currentNode1 !== null) {
    const nextNode1 = new Node();
    if (currentNode1.next === null) {
      nextNode1.value = currentNode2.value;
      currentNode1.next = nextNode1;
    }
    else if (currentNode2 === null) {
     return l1; 
    }
    else {
      const temp = currentNode1.next;
      nextNode1.value = currentNode2.value;
      currentNode1.next = nextNode1;
      nextNode1.next = temp;
      currentNode2 = currentNode2.next;
      currentNode1 = currentNode1.next.next;
    }
  }
  return l1;
}

module.exports = {Node: Node, zip: zip};


