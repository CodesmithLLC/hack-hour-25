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
  // list 1 has run out
  if (!l1) return l2;
  // list 2 has run out
  if (!l2) return l1;
  // main case: l1 and l2 still have elements left
  else {
    // track the rest of l1 and l2
    const nextl1 = l1.next;
    const nextl2 = l2.next;
    // perform the zip, recursively calling zip on the rest of l1 and l2
    l1.next = l2
    l2.next = zip(nextl1, nextl2)
    return l1;
  }
};

// recursively (easier to keep track of), assumes you can take a problem and turn it into a smaller version
// A points to 1, 1 points to the zipping of everything else


const l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(6);

const l2 = new Node('A');
l2.next = new Node('B');
l2.next.next = new Node('C');

console.log(l2);

module.exports = {Node: Node, zip: zip};
