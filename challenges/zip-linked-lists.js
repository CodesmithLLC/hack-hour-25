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

function zip(l1, l2 = null) {
  if (l1 === undefined || l1.value === undefined && l2) return l2;
  let li1 = l1, li2=l2;
  while (li2 !== null) {
    let n1 = li1.next;
    let n2 = li2.next;
    li1.next = new Node(li2.value);
    li1.next.next = n1;
    li2 = n2;
    li1 = n1;
  }
  return l1
};

module.exports = {Node: Node, zip: zip};
