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
  // check to see if l1 and l2 has content
  if (l1.head && l2.head) {
    // assign a head to the first l1
    this.head = new Node(l1.head);
    // assign the next to the first l2
    this.head.next = new Node(l2.head);
  } // else if (!l1.head) {
  //   this.head = new Node(l2.head);
  //   this.head.next = new Node(l2.head.next);
  // }
  // have positions for the 3 linked lists
  let current = this.head.next;
  let current1 = l1.head.next;
  let current2 = l2.head.next;
  while (current1.next !== null && current2.next !== null) {
    current.next = new Node(current1);
    current = current.next;
    current1 = current1.next;
    current.next = new Node(current2);
    current = current.next;
    current2 = current2.next;
  }
  if (current1.next === null) {
    while (current2.next !== null) {
      current.next = new Node(current2);
      current2 = current2.next;
    }
  }
  if (current2.next === null) {
    while (current1.next !== null) {
      current.next = new Node(current1);
      current1 = current1.next;
    }
  }
  return this.head;
}

module.exports = {Node: Node, zip: zip};
